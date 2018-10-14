// pages/m_xxi/m_xxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 加入书架按钮
    button_title: "加入书架",
    button_leixing: "button_shujia",
    button_jz: false,
    // 开始阅读按钮
    button_ydjl_leixin: "button_ydjl_kaishi",
    button_ydjl_title: "开始阅读",

    manhua: {
        tupian: "http://img.manhua.weibo.com/hcover/2018/09/12/2660188431_CK3ovg5o.png",
        m_name: "不许成精",
        zuozhe: "风狸绘",
        leixin: "搞笑",
        jianjie: "陶知之是一只像人类的中华狸花猫，3岁时表现出了人类的能力，其原因是个未解之谜。在之后的生活中被饲主当做家人相处，饲主一直限制陶知之与外界接触，以防被抓去做实验。陶知之的寿命也比普通猫长的多，一直到了陶诗思大学毕业陶知之25岁，两人一起离开家乡，到杭州打拼。就这样史上最特殊的兄妹组合展开了一场人与猫之间的爆笑日常"
      },
      mulu:[
        {
          m_zjid: "1",
          m_title: "第一话"
        }, 
        {
          m_zjid: "2",
          m_title: "第二话"
        }, 
        {
          m_zjid: "3",
          m_title: "第三话"
        }, 
        {
          m_zjid: "4",
          m_title: "第四话"
        },
      ]

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
        })
      }
    })
  },
  // 跳转到最近更新内容页面
  neirong: function (e) {
    var that = this;
    var ids = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../m_neirong/m_neirong?m_zjid=' + ids,
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