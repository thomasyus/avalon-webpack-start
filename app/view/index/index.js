var rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:init", function() {
  console.log( "Impress init" );
});
var api = impress();
api.init();
document.getElementById('pre').onclick = function () {
  api.prev();
};
document.getElementById('next').onclick = function () {
  api.next();
};