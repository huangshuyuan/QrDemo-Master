// pages/index/phonedata/data.js
const datas = {
  data: [{
      "id": 16385,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐剩余流量",
      "time": "2018.04.09 10:03:00",
      "value": "20M"

    },
    {
      "id": 16386,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐流量使用",
      "time": "2018.04.19 10:03:00",
      "value": "100M"
    },
    {
      "id": 16387,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐流量使用",
      "time": "2018.04.19 10:03:00",
      "value": "20M"
    },
    {
      "id": 16388,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐流量使用",
      "time": "2018.05.19 10:03:00",
      "value": "20M"
    }, {
      "id": 16389,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐流量使用",
      "time": "2018.06.13 10:03:00",
      "value": "20M"
    }

  ]
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1: "/image/icon_ll1.png",
    image2: "/image/icon_ll2.png",
    mydata: datas.data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //买流量点击事件
  clickData: function(e) {
    console.log("click data")
    wx.navigateTo({
      url: '../recharge/recharge',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})