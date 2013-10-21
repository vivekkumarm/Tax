ko.bindingHandlers.tabs = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
        // First get the latest data that we're bound to
        var value = valueAccessor();

        var tabBar = document.createElement('div');
        tabBar.className = 'tabBar';
        element.appendChild(tabBar);

        var headerValue = { name: value['tab-template'], foreach: value.foreach };
        ko.bindingHandlers.template.init(tabBar, function () { return headerValue; }, allBindingsAccessor, viewModel, bindingContext);
        var tabContent = document.createElement('div');
        tabContent.className = 'tabContent';
        element.appendChild(tabContent);

        var contentValue = { name: value['content-template'], foreach: value.foreach };
        ko.bindingHandlers.template.init(tabContent, function () { return contentValue; }, allBindingsAccessor, viewModel, bindingContext);
        return { 'controlsDescendantBindings': true };
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever the associated observable changes value.
        // Update the DOM element based on the supplied values here.
        // First get the latest data that we're bound to
        var value = valueAccessor();

        var headerValue = { name: value['tab-template'], foreach: value.foreach };

        var contentValue = { name: value['content-template'], foreach: value.foreach };

        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].className == "tabBar") {
                ko.bindingHandlers.template.update(element.childNodes[i], function () { return headerValue; }, allBindingsAccessor, viewModel, bindingContext);
            }
            else if (element.childNodes[i].className == "tabContent") {
                ko.bindingHandlers.template.update(element.childNodes[i], function () { return contentValue; }, allBindingsAccessor, viewModel, bindingContext);
            }
        }
    }
};
function ViewModel() {
    var self = this;
    self.Tab = function (id, name, text, selected) {
        var tab = new ViewModel();
        tab.id = ko.observable(id);
        tab.name = ko.observable(name);
        tab.text = ko.observable(text);
        return tab;
    };
    self.id = ko.observable();
    self.name = ko.observable();
    self.text = ko.observable();
    self.tabs = ko.observableArray();
    self.selectedTab = ko.observable();
    self.tabs = ko.observableArray();
    self.addTab = function (tab) {
        self.tabs.push(tab);
        if (!self.selectedTab()) {
            self.selectedTab(tab);
        }
    };
    return self;
}

var vm = new ViewModel();
var tab1 = new vm.Tab(1, 'Tab 1', 'I have sub tabs!');

tab1.addTab(new vm.Tab(11, 'Subtab 1', 'I\'m a sub-tab!'));
tab1.addTab(new vm.Tab(12, 'Subtab 2', 'Here are some details...'));
tab1.addTab(new vm.Tab(13, 'Subtab 3', 'Hello World!'));

vm.addTab(tab1);
vm.addTab(new vm.Tab(2, 'Tab 2', 'This is Tab 2...'));

var tab3 = new vm.Tab(3, 'Tab 3', 'I\'m tab 3');
var tab5 = new vm.Tab(31, 'Subtab 4', 'I\'m a sub-tab!');
tab5.addTab(new vm.Tab(311, 'Subtab 7', 'I\'m a sub-tab!'));
tab5.addTab(new vm.Tab(312, 'Subtab 8', 'Here are some details...'));
tab5.addTab(new vm.Tab(313, 'Subtab 9', 'Hello World!'));

tab3.addTab(tab5);
tab3.addTab(new vm.Tab(32, 'Subtab 5', 'Here are some details...'));
tab3.addTab(new vm.Tab(33, 'Subtab 6', 'Hello World!'));
vm.addTab(tab3);

vm.addTab(new vm.Tab(4, 'Tab 4', 'Hello World!'));

ko.applyBindings(vm);