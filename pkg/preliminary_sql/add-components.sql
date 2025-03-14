INSERT INTO widgets (
    name, widgetid, component, defaultconfig, datatype) 
VALUES (
    'three-dimensional-widget',
    '07fc5af3-cd40-4d92-bb15-aeba38818b0f',
    'views/components/widgets/three-dimensional-widget',
    '{"lng": 0, "lat": 0, "bearing": 0}',
    'file-list'
    );

INSERT INTO card_components (
  componentid, name, description, component, componentname, defaultconfig
) VALUES (
  '60e4e022-e2ba-40a0-948d-0538e27fbe1c',
  'Eamena Form Card',
  'Allows multiple node groups to appear on same card',
  'views/components/cards/eamena-default-card',
  'eamena-default-card',
  '{}'
)