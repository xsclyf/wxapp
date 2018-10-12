// pages/x_neirong/x_neirong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    neirong: [],
    zjids:null,
    xid:null,
    zjsl: null
  },

// 上一章按钮
  syz: function(e){
    var that = this;
    var zjidd = parseInt(that.data.zjids);
    var zjidss = zjidd - 1;

    if(zjidd > 1){
      wx.request({
        url: 'https://php.xsclyf.cn/x_content.php',
        data:{
          x_ids: that.data.xid + '_' + zjidss
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            neirong: res.data,
            zjids: res.data.ids,
            scrollTop: 0
          })
          wx.setNavigationBarTitle({
            title: '第' + res.data.ids + '章'
          })
        }
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }else{
      wx.showModal({
        title: '啊哦！',
        content: '已经到头咯哦，可以试试点一下旁边的按钮哦~',
        showCancel: false,
        confirmText: '好哒~'
      })
    }

  },

// 下一章按钮
  xyz: function (e) {
    var that = this;
    var zjidd = parseInt(that.data.zjids);
    var zjidss = zjidd + 1
    var zjsls = parseInt(that.data.zjsl);
    if(zjidd < zjsls){
      wx.request({
        url: 'https://php.xsclyf.cn/x_content.php',
        data:{
          x_ids: that.data.xid + '_' + zjidss
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            neirong: res.data,
            zjids: res.data.ids
          })
          wx.setNavigationBarTitle({
            title: '第' + res.data.ids + '章'
          })
        }
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }else{
      wx.showModal({
        title: '啊哦！',
        content: '已经到头咯哦，可以试试点一下旁边的按钮哦~',
        showCancel: false,
        confirmText: '好哒~'
      })
    }
    
    // that.setData({ zjids: zjids })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var titles = that.data.zjids;
    console.log(options.zjsld);
    that.setData({ 
        xid: options.xid,
        zjsl: options.zjsld
      })
    wx.request({
      url: 'https://php.xsclyf.cn/x_content.php',
      data:{
        x_ids: options.id
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          neirong: res.data,
          zjids: res.data.ids
        })
        wx.setNavigationBarTitle({
          title: '第' + res.data.ids + '章'
        })
      }
    })
    
    // that.setData({shuzi: options.id})
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