var msHtmlA = avalon.define({
    $id: 'msHtmlA',
    init: function() {
        avalon.log("four init" + +new Date());
    },
    destory: function() {
        avalon.log("four destory" + +new Date());
    },
    getMsHtmlAFun: function() {
        avalon.log('MsHtmlA|' + new Date());
    }
});
module.exports = msHtmlA;