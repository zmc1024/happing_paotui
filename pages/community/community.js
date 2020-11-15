// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navTitle:['最新', '热门', '话题'],
    grid:[
      {
        image: '/image/community/home.png',
        title: '首页',
      },
      {
        image: '/image/community/notice.png',
        title: '系统公告',
      },
      {
        image: '/image/community/second-hand.png',
        title: '二手集市',
      },
      {
        image: '/image/community/lost_and_found.png',
        title: '失物招领',
      },
      {
        image: '/image/community/couple.png',
        title: '卖室友',
      },
      {
        image: '/image/community/tree_hole.png',
        title: '匿名树洞', 
      },
      {
        image: '/image/community/traffic.png',
        title: '拼车出行',
      },
      {
        image: '/image/community/help.png',
        title: '求助打听'
      }
    ]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 获取当前设备的宽高
     */
  },

  receiveCurrentTab: function (res) {
    var self = this
    self.setData({
      currentTab: res.detail,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})