create table db_trigger_config (
	configid uuid PRIMARY KEY,
	archesid uuid,
	config jsonb
); 
comment on table db_trigger_config is 'Configuration for custom database triggers';

DO $$
DECLARE
rowval RECORD;
starting_value int;
prefix varchar;
newconfig jsonb;
last_val int;
lastval_exists boolean;

BEGIN

FOR rowval in
SELECT *
FROM FUNCTIONS_X_GRAPHS A
INNER JOIN FUNCTIONS B ON (A.FUNCTIONID = B.FUNCTIONID)
WHERE B.NAME = 'Incrementor'
loop
	if(rowval.config->'last_value' is not null) then
		last_val = (rowval.config->>'last_value')::int;
	else
		last_val = (rowval.config->>'starting_value')::int;
	end if;
	
	newconfig = (rowval.config - 'last_value') - 'starting_value';
	newconfig = jsonb_insert(newconfig, '{sequence}', concat('"', replace(rowval.id::text, '-', ''), '"')::jsonb );
    execute format('CREATE SEQUENCE "%s" START %s', newconfig->>'sequence' , last_val);
    insert into db_trigger_config(configid, archesid, config) values (rowval.id, rowval.graphid, newconfig);

end loop;
DELETE from functions_x_graphs where functionid in (select functionid from functions where "name" = 'Incrementor');
DELETE from functions where "name" = 'Incrementor';

END$$;

CREATE OR REPLACE FUNCTION create_resource_name()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
DECLARE
	graph_id UUID;
	db_trigger_config_record RECORD;
	db_trigger_config_count integer;
	nodegroup_exists integer;
	new_number integer;
	json_string text;
BEGIN
	select graphid into graph_id  from resource_instances where resourceinstanceid = NEW.resourceinstanceid;
	
	SELECT * into db_trigger_config_record FROM db_trigger_config where archesid = graph_id;
	SELECT count(*) into db_trigger_config_count FROM db_trigger_config where archesid = graph_id;
	select count(*) into nodegroup_exists from tiles where nodegroupid = (db_trigger_config_record.config->>'selected_nodegroup')::uuid and resourceinstanceid = NEW.resourceinstanceid;
	
	IF nodegroup_exists = 0 AND db_trigger_config_count > 0 THEN
		 SELECT nextval(db_trigger_config_record.config->>'sequence') into new_number;
		 
		 json_string = concat('{"', 
			db_trigger_config_record.config->>'target_node', 
			'":"', 
			db_trigger_config_record.config->>'prefix',
			LPAD(new_number::text, 7, '0'),
			db_trigger_config_record.config->>'suffix',
			'"}');

		 insert into tiles 
		 	(tileid, resourceinstanceid, nodegroupid, tiledata) values 
			(uuid_generate_v4(), 
			 NEW.resourceinstanceid, 
			 (db_trigger_config_record.config->>'selected_nodegroup')::uuid, 
			 (json_string::jsonb));
	END IF;

	RETURN NEW;
END$$;

create trigger create_resource_name_insert
after insert on tiles
FOR EACH ROW
EXECUTE FUNCTION create_resource_name();