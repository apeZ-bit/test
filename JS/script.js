// 初始化 Swiper
const swiper = new Swiper('.mySwiper', {
  // 开启循环
  loop: true,

  // 自动播放
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // 分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // 导航箭头
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 响应式
  slidesPerView: 1,
  spaceBetween: 0,
});