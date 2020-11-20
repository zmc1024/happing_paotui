// components/navbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentTab: Number,
    navTitle: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },


  /**
   * 组件的方法列表
   */
  methods: {
    //  tab切换逻辑
    swichNav(e) {
      var self = this
      self.setData({
        currentTab: e.target.dataset.current
      })
      self.triggerEvent("sendCurrentTab", e.target.dataset.current);
    },
  }
})
