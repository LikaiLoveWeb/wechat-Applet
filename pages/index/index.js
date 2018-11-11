//index.js
import { $ajax } from '../../utils/ajax.js';
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrl: '../img/timg_qc1.jpg',
    imgUrls: [
      '../img/timg_1.jpg',
      '../img/timg_2.jpg',
      '../img/timg_3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    indicatorColor:'rgba(0,0,0,0.3)',
    indicatorActiveColor:'rgba(214,175,112,1)',
    YouthArray:[
      [
        {
          'url':'../img/timg_aq1.jpg',
          'alt':'爱情',
          'class':'Youth_left Youth_img'
        },
        {
          'url': '../img/timg_aq2.jpg',
          'alt': '爱情',
          'class': 'Youth_right Youth_img'
        }
      ],
      [
        {
          'url': '../img/timg_aq3.jpg',
          'alt': '爱情',
          'class': 'Youth_left Youth_img'
        },
        {
          'url': '../img/timg_aq4.jpg',
          'alt': '爱情',
          'class': 'Youth_right Youth_img'
        }
      ],
      [
        {
          'url': '../img/timg_aq5.jpg',
          'alt': '爱情',
          'class': 'Youth_left Youth_img'
        },
        {
          'url': '../img/timg_aq6.jpg',
          'alt': '爱情',
          'class': 'Youth_right Youth_img'
        }
      ]
    ]
  },
  showModul: function (event) {
    var imgUrl = event.currentTarget.dataset.hi;
    wx.showModal({
      title: '详情',
      content: imgUrl,
      showCancel:false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '执子之手，与子偕老',
      path: '/pages/index/index?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  getData(){
    $ajax('/api/getheros','get').then((res)=>{
      console.log(res)
    }).catch((e)=>{
      console.error(e,5555)
    })
  },
  onLoad: function () {
    this.getData();
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  }
  
})