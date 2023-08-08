class MobileSlider extends HTMLElement {
  constructor() {
    super()

    this.wrapper = this.querySelector('.js-mobile-slider')
    this.pagination = this.querySelector('.js-mobile-slider-pagination')
    this.init = false

    this._init()
  }

  _init() {
    this._initSwiper()

    window.addEventListener('resize', this._initSwiper.bind(this))
  }

  _initSwiper() {
    if (window.innerWidth <= 991) {
      if (!this.init) {
        this.init = true

        this.swiper = new Swiper(this.wrapper, {
          slidesPerView: 1,
          spaceBetween: 15,
          pagination: {
            el: this.pagination,
            type: "bullets",
            clickable: true,
          },
          breakpoints: {
            580: {
              slidesPerView: 2
            }
          }
        })
      }
    } else if (this.init) {
      this.swiper.destroy()
      this.init = false;
    }
  }
}

customElements.define('mobile-slider', MobileSlider)
