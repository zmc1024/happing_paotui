// pages/Verified/Verified.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputName: '',
    inputClass: '',
    inputClassNum: '',
    inputTele: '',
    dialogShow: false,
    buttons: [{text: '确定'}],
    res:''
  },
  tapDialogButton(e) {
    this.setData({
        dialogShow: false,
        res: e.detail.item.text
    })
  },
  bindKeyInputName: function (e) {
      this.setData({
        inputName: e.detail.value
      })
  },
  bindKeyInputClass: function (e) {
    this.setData({
      inputClass: e.detail.value
    })
  },
  bindKeyInputClassNum: function (e) {
    this.setData({
      inputClassNum: e.detail.value
    })
  },
  bindKeyInputTele: function (e) {
    this.setData({
      inputTele: e.detail.value
    })
  },
  
  openConfirm: function () {
    this.setData({
        dialogShow: true
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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