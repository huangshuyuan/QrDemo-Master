// pages/index/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata: [{
        "id": 1,
        "name": "1M",
        "price": 5.9
      },
      {
        "id": 1,
        "name": "10M",
        "price": 9.9
      }, {
        "id": 2,
        "name": "30M",
        "price": 10
      },
      {
        "id": 3,
        "name": "50M",
        "price": 20
      }, {
        "id": 4,
        "name": "1G",
        "price": 30
      }, {
        "id": 5,
        "name": "2G",
        "price": 60
      }, {
        "id": 6,
        "name": "5G",
        "price": 80.8
      },
      {
        "id": 7,
        "name": "10G",
        "price": 90
      }
    ],
    index: 0,//当前索引
    price: 5.9,
    currentIndex:0,//记录当前选中数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //点击事件
  itemClick: function(res) {
    console.log("index-->" + res.currentTarget.id);
    var position = res.currentTarget.id;

    this.setData({

      price: this.data.mydata[position].price,
      currentIndex:position,

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