//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    motto: 'Hello World',
    next: '/image/next.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userListInfo: [{
      icon: '/image/icon_mine1.png',
      text: '我的通知',
      isunread: true,
      unreadNum: 2,
      isnext: false
    }, {
      icon: '/image/icon_mine2.png',
      text: '我的设备',
      isnext: true
    }, {
      icon: '/image/icon_mine3.png',
      text: '我的设置',
      isnext: true
    }, {
      icon: '/image/icon_mine4.png',
      text: '联系客服',
      isnext: true
    }, {
      icon: '/image/icon_mine5.png',
      text: '常见问题',
      isnext: true
    }]
  },

  //事件处理函数
  bindViewTap: function(e) {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    //头像预览
    wx.previewImage({
      current: this.data.userInfo.avatarUrl, // 当前显示图片的http链接
      urls: [this.data.userInfo.avatarUrl] // 需要预览的图片http链接列表
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  itemClick: function(res) {
    var position = res.currentTarget.id;
    if (position == 0) {
      //
    } else if (position == 1) {
      //我的设备
      wx.navigateTo({
        url: '../index/myDevice/device',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else if (position == 2) {
      //设置
      wx.navigateTo({
        url: '../mine/setting/setting',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})