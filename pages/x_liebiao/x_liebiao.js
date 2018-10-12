// pages/x_liebiao/x_liebiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zjsl:null,
    mulu:[],
    xid:null
  },

  neirong:function(e){
    var ids = e.currentTarget.dataset.id;
    var that = this;
    wx.navigateTo({
      url: '../x_neirong/x_neirong?id=' + ids + '&xid=' + that.data.xid + '&zjsld=' + that.data.zjsl,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id);
    console.log(options.zjsl);
    that.setData({ zjsl: options.zjsl,xid: options.id});
    wx.request({
      url: 'https://php.xsclyf.cn/x_deta.php',
      data:{
        x_zjids: options.id
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          mulu: res.data,
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