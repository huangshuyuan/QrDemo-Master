// pages/mine/setting/setting.js
Page({
  data: {
    setting: {},
    show: false,
    screenBrightness: '获取中',
    keepscreenon: false,
    SDKVersion: '',
    enableUpdate: true,
  },


  updateInstruc() {
    this.setData({
      show: true,
    })
  },
 
  onShow() {
    // 不能初始化到 data 里面！！！！
    this.setData({
      keepscreenon: getApp().globalData.keepscreenon,
    })
    
    this.getScreenBrightness()
    let that = this
    wx.getStorage({
      key: 'setting',
      success: function(res) {
        let setting = res.data
        that.setData({
          setting,
        })
      },
      fail: function(res) {
        that.setData({
          setting: {},
        })
      },
    })
  },

  getHCEState() {
    wx.showLoading({
      title: '检测中...',
    })
    wx.getHCEState({
      success: function(res) {
        wx.hideLoading()
        wx.showModal({
          title: '检测结果',
          content: '该设备支持NFC功能',
          showCancel: false,
          confirmText: '朕知道了',
          confirmColor: '#40a7e7',
        })
      },
      fail: function(res) {
        wx.hideLoading()
        wx.showModal({
          title: '检测结果',
          content: '该设备不支持NFC功能',
          showCancel: false,
          confirmText: '朕知道了',
          confirmColor: '#40a7e7',
        })
      },
    })
  },
  getScreenBrightness() {
    let that = this
    wx.getScreenBrightness({
      success: function(res) {
        that.setData({
          screenBrightness: Number(res.value * 100).toFixed(0),
        })
      },
      fail: function(res) {
        that.setData({
          screenBrightness: '获取失败',
        })
      },
    })
  },
  brightness(e){
    this.setScreenBrightness(e.detail.value)
  },
  screenBrightnessChanging(e) {
    this.setScreenBrightness(e.detail.value)
  },
  setScreenBrightness(val) {
    let that = this
    wx.setScreenBrightness({
      value: val / 100,
      success: function(res) {
        that.setData({
          screenBrightness: val,
        })
      },
    })
  },
  setKeepScreenOn(b) {
    let that = this
    wx.setKeepScreenOn({
      keepScreenOn: b,
      success() {
        that.setData({
          keepscreenon: b,
        })
      },
    })
  },
  getsysteminfo() {
    wx.navigateTo({
      url: '/pages/mine/setting/systeminfo/systeminfo',
    })
  },
  removeStorage(e) {
    let that = this
    let datatype = e.currentTarget.dataset.type
    if (datatype === 'setting') {
      wx.showModal({
        title: '提示',
        content: '确认要初始化设置',
        cancelText: '容朕想想',
        confirmColor: '#40a7e7',
        success(res) {
          if (res.confirm) {
            wx.removeStorage({
              key: 'setting',
              success: function(res) {
                wx.showToast({
                  title: '设置已初始化',
                })
                that.setData({
                  setting: {},
                })
              },
            })
          }
        },
      })
    } else if (datatype === 'all') {
      wx.showModal({
        title: '提示',
        content: '确认要删除',
        cancelText: '容朕想想',
        confirmColor: '#40a7e7',
        success(res) {
          if (res.confirm) {
            wx.clearStorage({
              success: function(res) {
                wx.showToast({
                  title: '数据已清除',
                })
                that.setData({
                  setting: {},
                  pos: {},
                })
              },
            })
          }
        },
      })
    }
  },

})