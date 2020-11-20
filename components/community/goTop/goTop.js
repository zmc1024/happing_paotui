// components/community/goTop/goTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollTop: Number,
    screenHeight: Number,
    tabbarHeight: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    // goTop: scrollTop,
    // goHeight: screenHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },
  }
})
