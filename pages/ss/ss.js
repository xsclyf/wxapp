Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoshuo: [],
    value: null
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  //   var that = this;
  //   console.log(options.name)
  //   that.setData({
  //     value: options.name
  //   })
  //   wx.request({
  //     url: 'https://php.xsclyf.cn/x_sousuo.php?x_id=' + options.name,
  //     success: function (res) {
  //       console.log(res.data)
  //       that.setData({
  //         xiaoshuo: res.data
  //       })
  //     }
  //   })

  // },

  // 搜索框输入中事件

  shuruzhong(event) {
    var that = this;
    that.setData({ value: event.detail })
  },

  // 搜索框取消事件
  quxiao(event) {
    that.setData({
      vlaue: null
    })
  },

  // 搜索按钮事件
  ssuo(event) {
    var that = this;
    console.log("当前搜索的值为：" + that.data.value)
    wx.request({
      url: 'https://php.xsclyf.cn/x_sousuo.php?x_id=' + event.detail,
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