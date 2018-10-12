Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoshuo:[],
    d_xianshizt: "none"//默认不显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://php.xsclyf.cn/x_list.php',
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
      url: 'https://php.xsclyf.cn/x_list.php',
      success: function (res) {
        console.log(res.data)
        that.setData({
          xiaoshuo: res.data
        })
      }
    })
    wx.stopPullDownRefresh({
      success:function(){
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