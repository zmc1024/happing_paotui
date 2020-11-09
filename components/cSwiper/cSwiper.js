// components/cSwiper/cSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      var self = this

      wx.getSystemInfo({
        success: function (res) {
          self.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
          });
        }

      });
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  properties: {
    current: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      console.log(e);
      var self = this;
      self.setData({ current: e.detail.current });
      console.log(self.data.current);
      self.triggerEvent("sendCurrentTab", this.data.current);
    }
  }
})
