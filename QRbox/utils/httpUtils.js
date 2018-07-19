(function(exports) {
  var HTTP_SUCCESS = 200;
  // 获取音乐列表
  exports.getMusicList = function() {

  };

  /**内部方法
   * 自己服务器登录
   */

  function myLogin(res, callback) {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    var data = {
      scope: 'read',
      client_secret: 'mobile',
      client_id: 'mobile-client',
      code: res.code,
      grant_type: 'password'

    };
    console.log('-------------login--params-------------')
    console.log(data);
    wx.request({
      url: 'https://wxappsys.chinacloudsites.cn/wx_oauth/token',
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      success: function(res) {
        if (res.statusCode == HTTP_SUCCESS) {
          console.log('-------------http success-------------')

          console.log(res.data);
          callback(res.data)
        } else {
          console.log(res);
        }
      }


    });
  }

  /**微信登录
   * 用户登录
   * url:https://wxappsys.chinacloudsites.cn/wx_oauth/token
   * 参数：
   *  scope;
   *  client_secret;
   *  client_id;
   *  grant_type;
   *  code;
   * 方法：post
   */
  exports.getUserLogin = function(callback) {
    wx.checkSession({
      success: function(res) {
        myLogin(res, callback);
      },
      fail: function() {
        wx.login({
          success: res => {
            myLogin(res, callback);
          }
        })
      }

    })


  };


  // 获取首页的音乐数据
  exports.getIndexMusic = function(callback) {
    var data = {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    };
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode == 200) {
          wx.stopPullDownRefresh()
          callback(res.data)
        } else {

        }

      }
    });
  };

  exports.getLogin = function(username, password, callback) {

    wx.request({
      url: 'https://otasystem.chinacloudsites.cn/oauth/token?password=' + password + '&scope=read write&client_secret=mobile&client_id=mobile-client&username=' + username + '&grant_type=password',
      header: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      success: function(res) {
        if (res.statusCode == 200) {
          console.log(res.data);
          callback(res.data)
        } else {

        }
      }

    });
  };


  /**
  touser	是	接收者（用户）的 openid
  template_id	是	所需下发的模板消息的id
  page	否	点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
  form_id	是	表单提交场景下，为 submit 事件带上的 formId；支付场景下，为本次支付的 prepay_id
  data	是	模板内容，不填则下发空模板
  color	否	模板内容字体的颜色，不填默认黑色 【废弃】
  emphasis_keyword	否	模板需要放大的关键词，不填则默认无放大
   */
  exports.sendMessage = function(openid, callback) {
    var data = {
      touser: id,
      template_id: '64HmH3Ezwwm8gDgUAROTxyC_JkbYqtWEbHyCLTpwo30',
      form_id: 'json',
      data: '您支付成功了',
      emphasis_keyword: '成功了',

    };
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN',
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode == 200) {
          console.log(res.data);
          callback(res.data);
        } else {

        }

      }
    });
  }








}(module.exports))