// pages/index/myset/myset.js

const datas = {
  data: [{
      "id": 16385,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐剩余流量",
      "time": "2018.04.09 10:03:00",
      "money": "20M"

    },
    {
      "id": 16386,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐剩余流量",
      "time": "2018.05.09 10:03:00",
      "money": "100M"
    },
    {
      "id": 16387,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐剩余流量",
      "time": "2018.06.09 10:03:00",
      "money": "20M"
    },
    {
      "id": 16388,
      "picUrl": "/image/icon_ll.png",
      "name": "套餐剩余流量",
      "time": "2018.06.09 10:03:00",
      "money": "20M"
    }, {
      "id": 16389,
      "picUrl": "/image/icon_ll.png",
      "name": "话费充值50",
      "time": "2018.06.19 10:03:00",
      "money": "20M"
    }, {
      "id": 16390,
      "picUrl": "/image/icon_ll.png",
      "name": "话费充值50",
      "time": "2018.07.07 10:03:00",
      "money": "20M"
    }, {
      "id": 16391,
      "picUrl": "/image/icon_ll.png",
      "name": "话费充值50",
      "time": "2018.07.07 10:03:00",
      "money": "20M"
    }, {
      "id": 16392,
      "picUrl": "/image/icon_ll.png",
      "name": "话费充值50",
      "time": "2018.07.07 10:03:00",
      "money": "50M"
    }, {
      "id": 16393,
      "picUrl": "/image/icon_ll.png",
      "name": "话费充值50",
      "time": "2018.07.08 10:03:00",
      "money": "120M"
    }


  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainView: 1,
    mydata: datas.data,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  tabItemTap: function(e) {
    var _dataSet = e.currentTarget.dataset;
    this.setData({
      mainView: _dataSet.view
    });
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