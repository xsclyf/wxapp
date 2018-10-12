var users = getApp().xuser.user;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoshuo: [],
    user:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //检查是否存在新版本
    wx.getUpdateManager().onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log("是否有新版本：" + res.hasUpdate);
      if (res.hasUpdate) {//如果有新版本
        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateReady(function () {//当新版本下载完成，会进行回调
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，单击确定重启应用',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                wx.getUpdateManager().applyUpdate();
              }
            }
          })
        })
        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateFailed(function () {//当新版本下载失败，会进行回调
          wx.showModal({
            title: '提示',
            content: '检查到有新版本，但下载失败，请检查网络设置',
            showCancel: false,
          })
        })
      }
    });

    var that = this;
    wx.request({
      url: 'https://php.xsclyf.cn/x_collect.php',
      data:{
        user:users,
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          xiaoshuo: res.data
        })
      }
    })

  },


  // 进入详情页事件
  xqin: function (e) {
    var ids = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../x_xxi/x_xxi?id=' + ids,
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
      url: 'https://php.xsclyf.cn/x_collect.php',
      data: {
        user: users,
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          xiaoshuo: res.data
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