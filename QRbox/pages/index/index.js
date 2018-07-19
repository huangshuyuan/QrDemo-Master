//index.js
var HttpUtils = require('../../utils/httpUtils');
//获取应用实例
const app = getApp()

Page({
  data: {
    shareData: {
      title: '奇瑞box',
      desc: '美好的一天',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=562788460,3373006479&fm=27&gp=0.jpg',
      path: '/pages/index/index'
    },
    loading: false,
    slider: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    radioList: [],
    songList: [],
    current: 0, // 记录轮播下标的




    logos: [{
      image: "/image/icon1.png",
      title: "流量使用"
    }, {
      image: "/image/icon2.png",
      title: "账单使用"
    }, {
      image: "/image/icon3.png",
      title: "在线充值"
    }, {
      image: "/image/icon4.png",
      title: "我的套餐"
    }, {
      image: "/image/icon5.png",
      title: "我的设备"
    }, {
      image: "/image/icon6.png",
      title: "其他"
    }],
    motto: 'Hello World',
    userInfo: {},

    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  listitemClick: function(res) {
    var cla = res.currentTarget.id;
    console.log("你点击了" + cla)

    this.setData({

      clickId: cla

    })


    if (cla == 0) {
      //流量使用
      wx.navigateTo({
        url: '../index/phoneData/data',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (cla == 1) {
      //账单
      wx.navigateTo({
        url: '../index/phoneBills/bills',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (cla == 2) {
      //在线充值
      wx.navigateTo({
        url: '../index/recharge/recharge',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (cla == 3) {
      //我的套餐
      wx.navigateTo({
        url: '../index/myset/myset',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (cla ==4) {
      //我的设备
      wx.navigateTo({
        url: '../index/myDevice/device',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

    // wx.showToast({
    //   title: '您点击了' + cla,
    // })
  },
  onLoad: function() {

    HttpUtils.getIndexMusic(this.initData);
   
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

   HttpUtils.getUserLogin(function(data){
     console.log("login-->");
     console.log( data);
   })

  },
  login: function(data) {
    console.log(data);
    var that = this;
  },
  initData: function(data) {
    console.log(data);
    var that = this;
    that.setData({
      radioList: data.data.radioList,
      slider: data.data.slider,
      songList: data.data.songList,
      loading: true
    });

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperClick: function(e) {
    console.log("item-->" + this.data.current);
    console.log("info-->" + this.data.slider[this.data.current]);
    // // 把要传递的json对象转换成字符串
    // let linkInfo = JSON.stringify(this.data.slider[this.data.current]);
    // let mode64 = base64.encode(linkInfo)
    // // url encode
    // let modeEncode = encodeURIComponent(mode64)
    // console.log("info-->" + linkInfo);

    // wx.navigateTo({
    //   url: '../web/web?linkInfo=' + modeEncode,
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })

  },
  //小程序分享
  onShareAppMessage: function () {
    return this.data.shareData
  },
  bindchange: function(e) { //轮播图发生改变，下标改变了
    this.setData({
      current: e.detail.current
    })
  }

})