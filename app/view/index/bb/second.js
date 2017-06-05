var heredoc = require('../components/heredoc');
require('../components/pagination');

function genData(n) {
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push({
            aaa: new Date - i,
            bbb: Math.random().toString(32).replace(/0\./, ""),
            ccc: (Math.random() + "").replace(/0\./, ""),
            ddd: i
        })
    }
    return list
}
var vm = avalon.define({
    $id: 'widget1',
    header: ['aaa', 'bbb', 'ccc'],
    start: 0,
    count: 10,
    data: genData(300),
    init: function() {
        avalon.log("second init" + +new Date());
    },
    destory: function() {
        avalon.log("second destory" + +new Date());
    },
    pageConfig: {
        onReady: function(e) {
            avalon.log("second ready" + +new Date());
            avalon.vmodels['tablePager'] = e.vmodel;
            e.vmodel.$watch('currentPage', function(a) {
                vm.start = a - 1;
            })
        },
        onViewChange: function(e) {
            console.log('视图变化', e);
        },
        onDispose: function(e) {
            console.log('销毁pager', e);
            delete avalon.vmodels['tablePager'];
        }
    },
    changePage: function() {
        console.log(111);
    },
    ddd: 'bbb'
});

avalon.component('ms-grid', {
    template: heredoc(function() {
        /*
         <div class="grid">
         <div><slot name="changePage"/></div>
         <div><slot name="header"/></div>
         <div><slot name="tbody"/></div>
         <div class="pager"><slot name="pager" /></div>
         </div>
         */
    }),
    defaults: {

    }
});
avalon.ready(function() {
    avalon.vmodels['root'].headerPage = '<p>this is headerPage,second</p>';
});
module.exports = vm;