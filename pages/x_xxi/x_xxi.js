// pages/x_xxi/x_xxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    button_title: [],
    button_leixing: "button_shujia",
    button_jz:true,
    button_if:[],
    xiaoshuo:[],
    x_id:null,
    zjsl:null,
    
  },

  // 跳转目录页面按钮事件 
  mulu:function(e){
    var that = this;
    wx.navigateTo({
      url: '../x_liebiao/x_liebiao?id=' + that.data.x_id + '&zjsl=' +that.data.zjsl,
    })
  },

  // 跳转到最近更新内容页面
  neirong:function(e){
    var that = this;
    var ids = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../x_neirong/x_neirong?id=' + ids + '&xid=' + that.data.x_id + '&zjsld=' + that.data.zjsl,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options.id)
    wx.request({
      url: 'https://php.xsclyf.cn/x_xxi.php',
      data:{
        x_id: options.id,
        user:1
      },
      success: function (res){
        // console.log(res.data[0])
        // console.log(res.data[0].x_zt)
        that.setData({
          xiaoshuo: res.data[0],
          x_id: res.data[0].x_id,
          zjsl: res.data[0].jishu,
          button_if: res.data[0].x_zt
        })
      }
    })
    setTimeout(function () {
      var zt = that.data.button_if;
      console.log(zt)
      if(zt<2){
        that.setData({
          button_jz:false,
          button_title:"移除书架",
          button_leixing: "button_sjdel",
        })
      }if(zt<1){
        that.setData({
          button_jz: false,
          button_title: "加入书架",
          button_leixing: "button_shujia",
        })
      }
    }, 1000)
    
    
    
  },

// 开始阅读按钮事件
button_yuedu:function(e){
  console.log("开始阅读")
},

//加入书架按钮事件
button_shujia:function(e){
  var that = this;
  console.log("已加入书架")
  wx.request({
    url: 'https://php.xsclyf.cn/x_sc.php',
    data:{
      user:'1',
      x_id:that.data.x_id,
    },
    success:function(res){
      console.log(res)
      that.setData({
          button_leixing:"button_sjdel",
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
      url: 'https://php.xsclyf.cn/x_qsc.php',
      data: {
        user: '1',
        x_id: that.data.x_id,
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