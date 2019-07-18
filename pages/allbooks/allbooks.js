// pages/allbooks/allbooks.js
var base64 = require("../../static/images/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    overbottom: false,
    height: '',
    array: [{
      id: '0001',
      imgsrc: base64.icon60,
      title: '老子今注今译',
      grade: '9.0',
      author: '老子',
      time: '2003',
      Publisher: '商务印书馆',
      abstract: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
    }, {
      id: '0002',
      imgsrc: base64.icon60,
      title: '洗澡',
      grade: '9.0',
      author: '杨绛',
      time: '2003',
      Publisher: '商务印书馆',
      abstract: '《洗澡》不是由一个主角贯连全部的小说，而是借一个政治运动作背景，写那个时期形形色色的知识分子。所以是个横断面；既没有史诗性的结构，也没有主角。本书第一部写新中国不拘一格收罗的人才，人物一一出场。第二部写这些人确实需要“洗澡”。第三部写运动中这群人各自不同的表现。“洗澡”没有得到预期的效果，原因是谁都没有自觉自愿。假如说，人是有灵性、有良知的动物，那么，人生一世，无非是认识自己，洗炼自己，自觉自愿地改造自己，除非甘心与禽兽无异。但是这又谈何容易呢？这部小说里，只有一两人自觉自愿地试图超拔自己。读者出于喜爱，往往把他们看作主角。',
    }, {
      id: '0003',
      imgsrc: base64.icon20,
      title: '老子今注今译',
      grade: '9.0',
      author: '老子',
      time: '2003',
      Publisher: '商务印书馆',
      abstract: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

  },
  lower() {
    const array = this.data.array;
    let cont = []
    for(let i = 0; i < 5; i++) {
      const item = {
        id: new Date().getTime(),
        imgsrc: base64.icon60,
        title: '老子今注今译',
        grade: '9.0',
        author: '老子',
        time: '2003',
        Publisher: '商务印书馆',
        abstract: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      };
      cont.push(item)

    }
    
    cont = [...array, ...cont];
    if (cont.length >= 30) { 
      this.setData({
        overbottom: true
      });
      return
    }

    setTimeout(() => {
      this.setData({
        array: cont
      });
    }, 1500)

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