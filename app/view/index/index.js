Reveal.initialize({
  // 控制台
  controls: true,
  // 进度条
  progress: true,
  // 显示页码
  slideNumber: true,
  // 推送记录到浏览器
  history: false,
  // 键盘事件
  keyboard: {
    13: 'next', // go to the next slide when the ENTER key is pressed
    27: function() {}, // do something custom when ESC is pressed
    32: function() {
      console.log(Reveal.isFirstSlide());} // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
  },
  // 触摸事件
  touch: true,
  // 鼠标滚轮事件
  mouseWheel: true,
  // 幻灯片预览模式
  overview: true,
  // 幻灯片垂直居中
  center: true,
  // 循环预览
  loop: true,
  // 反向预览
  rtl: false,
  // 载入随机加载幻灯片顺序
  shuffle: false,
  // 全局使用fragment
  fragments: false,
  // 自动播放的间隔，默认为0
  autoSlide: 0,
  // 操作后是否暂停
  autoSlideStoppable: true,
  // 隐藏移动设备地址
  hideAddressBar: true,
  // 以Iframe打开link
  previewLinks: true,
  // 切换模式
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  // 切换速度
  transitionSpeed: 'default', // fast/slow/default
  // 全页幻灯片背景的过渡样式
  backgroundTransition: 'zoom', // none/fade/slide/convex/concave/zoom
  // 延迟加载中的滑块数量
  viewDistance: 1,
  // 幻灯片背景图
  parallaxBackgroundImage: '',
  parallaxBackgroundSize: '200px 200px',
  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,
  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: false,
  // Flags if speaker notes should be visible to all viewers
  showNotes: false
});
Reveal.addEventListener( 'ready', function( event ) {
  // event.currentSlide, event.indexh, event.indexv
  console.log(event);
} );
// data-autoslide='200' 设置自动播放模块
// data-src  延迟加载

