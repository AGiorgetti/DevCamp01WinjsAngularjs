var product = WinJS.Binding.define({
    ProductName: "",
    IsSelected: false
});

ui.Pages.define("/pages/ListViewBinding/listViewBinding.html", {

    listData: null,

    ready: function (element, options) {
        this.listData = new WinJS.Binding.List([]); // list wrapper
        this.createDummyData();
        var listview = element.querySelector(".mainList").winControl;
        
        // setup the listview
        listview.itemDataSource = this.listData.dataSource;
        listview.itemTemplate = element.querySelector(".itemtemplate");
        listview.oniteminvoked = this.itemInvoked.bind(this);
        listView.layout = new ui.GridLayout();
    },

    itemInvoked: function (args) {
        var dataItem = this.listData.getAt(args.detail.itemIndex);
        dataItem.IsSelected = !dataItem.IsSelected;
    },

    createDummyData: function () {
        // Creating dummy data .
        //Data format : Name, Quantity, SalesPrice, IsSelected 

        this.listData.push(WinJS.Binding.as(new product({ ProductName: "Product1", IsSelected: false })));
        this.listData.push(WinJS.Binding.as(new product({ ProductName: "Product1", IsSelected: false })));
        this.listData.push(WinJS.Binding.as(new product({ ProductName: "Product1", IsSelected: false })));
    }
});

// somewhere in code ...
WinJS.Binding.processAll(htmlElement, viewModel);