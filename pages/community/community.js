// pages/community/community.js
var secondHand = require('../../data/secondHand.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTitle: ['最新', '热门', '话题'],
    grid: [
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
    ],
    secondHand: [],
    systemInfo: {
      winWidth: 0,
      winHeight: 0,
      screenHeight: 0,
      tabbarHeight: 0
    },
    hasMore: true,
    currentTab: 0,
    swiHeight: 0,
    loadHeight: 0,
    scrollTop: 0,
    pageNum: 0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this

   

    wx.getSystemInfo({
      success: function (res) {
        let tabbarHeight = (res.screenHeight - res.windowHeight - res.statusBarHeight - 44)
        // * res.pixelRatio
        let systemInfo = {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          screenHeight: res.screenHeight,
          tabbarHeight
        }
        console.log(tabbarHeight);
        self.setData({
          systemInfo
          // systemInfo.winHeight: res.windowHeight,
        });
      }

    });

    this.loadMore()
  },

  receiveCurrentTab: function (res) {
    var self = this
    self.setData({
      currentTab: res.detail,
    })
  },
  bindChange: function (e) {
    var self = this;
    self.setData({ currentTab: e.detail.current });
    console.log(self.data.currentTab);
    // self.triggerEvent("sendCurrentTab", this.data.current);
  },
  like(e) {
    let index = e.currentTarget.dataset.index
    let secondHand = this.data.secondHand
    if (!this.data.secondHand[index].whatColor) {
      secondHand[index].whatColor = true
      ++secondHand[index].footer.count
      this.setData({ secondHand })
    } else {
      secondHand[index].whatColor = false
      --secondHand[index].footer.count
      this.setData({ secondHand })
    }
  },
  loadMore: function () {
    var self = this
    if (this.data.pageNum != secondHand.length) {
      let p = this.data.pageNum
      let temp = []
      for (var i = p; i < p + 3; i++) {
        temp.push(secondHand[i])
      }
      setTimeout(() => {
        this.setData({
          secondHand: this.data.secondHand.concat(temp),
          pageNum: p + 3,
        })
        // // 查询评论高度并更新
        setTimeout(() => {
          let query = wx.createSelectorQuery().in(self).selectAll('.comment').boundingClientRect();
          query.exec((res) => {
            let sum = res[0].reduce((pre, cur) => {
              return pre + cur.height
            }, 0)
            self.setData({
              swiHeight: sum
            })
          })
        }, 300)
      }, 500);
    } else {
      this.setData({
        hasMore: false
      })
    }

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
    // var self = this
    // console.log(this.data.pageNum);
    // console.log(this.data.swiHeight);
    setTimeout(() => {
      this.setData({
        hasMore: true
      })
      this.loadMore()
    }, 500);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

/**
 * 获取滚动条当前位置
 */
  onPageScroll: function (e) { 
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  onTabItemTap() {
    wx.hideTabBar();
  }

})