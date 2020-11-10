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
          console.log(res.windowWidth);
          console.log(res.windowHeight);

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
    count: 124,
    whatColor: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      var self = this;
      self.setData({ current: e.detail.current });
      console.log(self.data.current);
      self.triggerEvent("sendCurrentTab", this.data.current);
    },
    like(e) {
      this.setData({
        whatColor: !this.data.whatColor
      })
      if(this.data.whatColor) {
        this.setData({
          count: ++this.data.count
        })
      }else {
        this.setData({
          count: --this.data.count
        })
      }
    }
  }
})
