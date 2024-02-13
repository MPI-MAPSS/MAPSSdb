define([
    'jquery',
    'underscore',
    'templates/views/components/functions/incrementor-function.htm',
    'knockout',
    'viewmodels/function',
    'chosen'
],
function($, _, incrementorTemplate, ko, FunctionViewModel) {
    const viewModel = function(params) {
        FunctionViewModel.apply(this, arguments);
        var self = this;
        var nodegroups = {};
        this.cards = ko.observableArray();
        this.nodes = ko.observableArray([]);
        this.selectedNodegroup = params.config.selected_nodegroup;
        this.targetNode = params.config.target_node;
        this.startingValue = params.config.starting_value;
        this.lastValue = params.config.last_value;
        this.prefix = params.config.prefix;
        this.suffix = params.config.suffix;

        this.selectedNodegroup.subscribe(function(selected){
            var nodes = self.graph.nodes.filter(function(node){
                return node.nodegroup_id === selected;
            });
            self.nodes.removeAll();
            self.nodes(nodes);
        });

        this.graph.cards.forEach(function(card){
            var found = !!_.find(this.graph.nodegroups, function(nodegroup){
                return nodegroup.parentnodegroup_id === card.nodegroup_id;
            }, this);
            if(!found && !(card.nodegroup_id in nodegroups)){
                this.cards.push(card);
                nodegroups[card.nodegroup_id] = true;
            }
        }, this);

        this.selectedNodegroup.valueHasMutated(); // Force the update of self.nodes in the selectedNodegroup subscription
    };
   
    ko.components.register('views/components/functions/incrementor-function', {
        viewModel: viewModel,
        template: incrementorTemplate
    });

    return viewModel;
});
