// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    height_header:25,
    last_scroll_top:0
    },
  scroll(e){
    console.log(e)
    let scrollTop = e.detail.scrollTop;
    // console.log(scrollTop);
    let height_header = this.data.height_header;
    let last_scroll_top = this.data.last_scroll_top;

    let len = scrollTop / 10;
    len = parseInt(len, 10);

    if (scrollTop > last_scroll_top){
      // 下滑
      height_header-=len;
    }else{
      //上滑
      height_header += len;
    }

    if (height_header >= 25){
      height_header = 25;
    } else if (height_header <= 15){
      height_header = 15;
    }

    console.log(height_header)

    this.setData({
      height_header,
      last_scroll_top: scrollTop
    })


    // this.setData({
    //   scrollTop:0
    // })
  },
  lower(){

  },
  upper(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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