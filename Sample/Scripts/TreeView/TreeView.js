// Code goes here
$(function () {
    function TreeNode(values) {
        var self = this;
        ko.mapping.fromJS(values, { children: { create: createNode } }, this);
        this.expanded = ko.observable(false);
        this.collapsed = ko.computed(function () {
            return !self.expanded();
        })
    }

    TreeNode.prototype.toggle = function () {
        this.expanded(!this.expanded());
    };

    function createNode(options) {
        return new TreeNode(options.data);
    }

    var root = new TreeNode({
        id: "1", name: "Root", children: [
            {
                id: "1.1", name: "Node 1", children: [
                  { id: "1.1.1", name: "Node 1.1", children: [] },
                  { id: "1.1.2", name: "Node 1.2", children: [] }
                ]
            },
            { id: "1.2", name: "Node 2", children: [] }
        ]
    });

    var viewModel = {
        root: root,
        selected: ko.observable()
    };

    ko.applyBindings(viewModel, $('html')[0]);
});
