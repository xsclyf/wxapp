// pages/user/user.js
var names = getApp().xuser.name;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    value: names,
    tupian:"http://img1.imgtn.bdimg.com/it/u=3786105188,1229730765&fm=27&gp=0.jpg",
    title:"加入书架"
  },
  jr(event){
    var that = this;
    that.setData({
      ztai:true,
      title:"已加入书架"
      })
  },

  // 跳转关于页面
  guanyu(event){
    wx.navigateTo({
      url: '../gy/gy',
    })
  },
  //跳转书架页面
  shujia(event) {
    wx.switchTab({
      url: '../index/index',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    
    // that.setData({
    //   value: names
    // })
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