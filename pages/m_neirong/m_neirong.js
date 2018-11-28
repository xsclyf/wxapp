// pages/m_neirong/m_neirong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    manhua: [],
    m_id:null,
    m_zjid:null,
    zongshu:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("内容：" + options.m_zjid)
    var that = this;
    var caifen = options.m_zjid.split("_");
    that.setData({m_id: options.m_id, m_zjid: caifen[1], zongshu: options.zongshu})
    wx.request({
      url: 'https://php.xsclyf.cn/m_content.php',
      data: {
        m_zjid: options.m_zjid
      },
      success: function (res) {
        // console.log(res.data)
        
        that.setData({
          manhua: res.data,
        })
        wx.setStorage({
          key: "m_yuedu_jl_" + that.data.m_id,
          data: [
            { m_id: that.data.m_id, m_ml: that.data.m_id + "_" + that.data.m_zjid }
          ],
        })
      }
    })
    // 字符串截取方法 (需要分割的字符串).split("分隔符")

  },

// 上一话按钮
syh: function (e) {
  var that = this;
  var m_zjid_js = parseInt(that.data.m_zjid);
  console.log('ceshi2:' + m_zjid_js);
    if (m_zjid_js > 1) {
      var m_zjid_s = m_zjid_js - 1;
      console.log('ceshis:' + m_zjid_s);
      wx.request({
        url: 'https://php.xsclyf.cn/m_content.php',
        data: {
          m_zjid: that.data.m_id + '_' + m_zjid_s
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            manhua: res.data,
            m_zjid: m_zjid_s
          })
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
          wx.setStorage({
            key: "m_yuedu_jl_" + that.data.m_id,
            data: [
              { m_id: that.data.m_id, m_ml: that.data.m_id + "_" + that.data.m_zjid }
            ],
          })
        }
      })
    } else {
      wx.showModal({
        title: '啊哦！',
        content: '已经到头咯哦，可以试试点一下旁边的按钮哦~',
        showCancel: false,
        confirmText: '好哒~'
      })
    }
  },

// 下一话按钮
xyh: function (e) {
  var that = this;
  var m_zjid_js = parseInt(that.data.m_zjid);
  var m_zongshu = parseInt(that.data.zongshu);
  console.log('ceshi2:' + m_zjid_js + ',zongshu:' + m_zongshu);
  if (m_zjid_js < m_zongshu) {
    var m_zjid_s = m_zjid_js + 1;
    console.log('ceshis:' + m_zjid_s);
    wx.request({
      url: 'https://php.xsclyf.cn/m_content.php',
      data: {
        m_zjid: that.data.m_id + '_' + m_zjid_s
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          manhua: res.data,
          m_zjid: m_zjid_s
        })
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
        wx.setStorage({
          key: "m_yuedu_jl_" + that.data.m_id,
          data: [
            { m_id: that.data.m_id, m_ml: that.data.m_id + "_" + that.data.m_zjid }
          ],
        })
      }
    })
  }else {
    wx.showModal({
      title: '啊哦！',
      content: '已经到头咯哦，可以试试点一下旁边的按钮哦~',
      showCancel: false,
      confirmText: '好哒~'
    })
  }
},

  // 下一话按钮
  xyz: function (e) {
    var that = this;
    var zjidd = parseInt(that.data.zjids);
    var zjidss = zjidd + 1
    var zjsls = parseInt(that.data.zjsl);
    if (zjidd < zjsls) {
      wx.request({
        url: 'https://php.xsclyf.cn/x_content.php',
        data: {
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
          wx.setStorage({
            key: "yuedu_jl_" + that.data.xid,
            data: [
              { xid: that.data.xid, ml: that.data.xid + "_" + res.data.ids }
            ],
          })
        }
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    } else {
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