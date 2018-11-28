// pages/m_xxi/m_xxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 加入书架按钮
    button_title: "加入书架",
    button_leixing: "button_shujia",
    button_jz: true,
    // 开始阅读按钮
    button_ydjl_leixin: "button_ydjl_kaishi",
    button_ydjl_title: "开始阅读",
    ydjl_m_zjid:null,

    manhua: [],
    mulu:[],
    m_id:null,
    zongshu:null,
    button_if:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://php.xsclyf.cn/m_xxi.php',
      data: {
        m_id: options.m_id,
        user:"1"
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          manhua:res.data[0],
          mulu: res.data[1],
          m_id: res.data[0].m_id,
          zongshu: res.data[1].length,
          button_if: res.data[0].m_sczt
        })
        wx.getStorage({
          key: "m_yuedu_jl_" + res.data[0].m_id,
          success: function(res) {
            console.log(res.data[0].m_ml)
            that.setData({
              ydjl_m_zjid: res.data[0].m_ml,
              button_ydjl_title: "继续阅读",
              button_ydjl_leixin: "button_ydjl_jixu"
            })
          },
        })
      }
    })
    setTimeout(function () {
      var zt = that.data.button_if;
      // console.log(zt)
      if (zt < 2) {
        that.setData({
          button_jz: false,
          button_title: "移除书架",
          button_leixing: "button_sjdel",
        })
      } if (zt < 1) {
        that.setData({
          button_jz: false,
          button_title: "加入书架",
          button_leixing: "button_shujia",
        })
      }
    }, 1000)
  },
  
  // 跳转到漫画内容页面
  neirong: function (e) {
    var that = this;
    var ids = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../m_neirong/m_neirong?m_zjid=' + ids + '&m_id=' + that.data.m_id + '&zongshu=' + that.data.zongshu,
    })
  },

  // 开始阅读按钮事件
  button_ydjl_kaishi: function (e) {
    console.log("开始阅读");
    var that = this;
    var ids = that.data.m_id + "_1";
    wx.navigateTo({
      url: '../m_neirong/m_neirong?m_zjid=' + ids + '&m_id=' + that.data.m_id + '&zongshu=' + that.data.zongshu,
    })
  },

  // 继续阅读按钮事件
  button_ydjl_jixu: function (e) {
    console.log("继续阅读");
    var that = this;
    wx.navigateTo({
      url: '../m_neirong/m_neirong?m_zjid=' + that.data.ydjl_m_zjid + '&m_id=' + that.data.m_id + '&zongshu=' + that.data.zongshu,
    })
  },

  //加入书架按钮事件
  button_shujia: function (e) {
    var that = this;
    console.log("已加入书架")
    wx.request({
      url: 'https://php.xsclyf.cn/m_sc.php',
      data: {
        user: '1',
        m_id: that.data.m_id,
      },
      success: function (res) {
        console.log(res)
        that.setData({
          button_leixing: "button_sjdel",
          button_title: "移除书架"
        })
      }
    })
  },

  //从书架删除按钮事件
  button_sjdel: function (e) {
    var that = this;
    console.log("加入书架")
    wx.request({
      url: 'https://php.xsclyf.cn/m_qsc.php',
      data: {
        user: '1',
        m_id: that.data.m_id,
      },
      success: function (res) {
        console.log(res)
        that.setData({
          button_leixing: "button_shujia",
          button_title: "加入书架"
        })
      }
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
    var that = this;
    wx.request({
      url: 'https://php.xsclyf.cn/m_xxi.php',
      data: {
        m_id: that.data.m_id,
        user: "1"
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          manhua: res.data[0],
          mulu: res.data[1],
          m_id: res.data[0].m_id,
          zongshu: res.data[1].length,
          button_if: res.data[0].m_sczt
        })
        wx.getStorage({
          key: "m_yuedu_jl_" + res.data[0].m_id,
          success: function (res) {
            console.log(res.data[0].m_ml)
            that.setData({
              ydjl_m_zjid: res.data[0].m_ml,
              button_ydjl_title: "继续阅读",
              button_ydjl_leixin: "button_ydjl_jixu"
            })
          },
        })
      }
    })
    wx.stopPullDownRefresh({
      success: function () {
        wx.showToast({
          title: '刷新成功',
        })
      }
    })
    setTimeout(function () {
      var zt = that.data.button_if;
      // console.log(zt)
      if (zt < 2) {
        that.setData({
          button_jz: false,
          button_title: "移除书架",
          button_leixing: "button_sjdel",
        })
      } if (zt < 1) {
        that.setData({
          button_jz: false,
          button_title: "加入书架",
          button_leixing: "button_shujia",
        })
      }
    }, 1000)
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