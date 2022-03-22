// pages/demo/demo.js
const OFF_IAMGE='/pages/images/bar/off.gif';
const ON_IMAGE='/pages/images/bar/on.gif';

Page({
  length:10,
  /**
   * 页面的初始数据
   */
  data: {
          num:'hello',
          result:100,
          flag:false,
          length:8,
          array:[{name:'aaa'},{name:'bbb'},{fenshu:'8888'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          let num=10
          console.log(OFF_IAMGE)
          console.log(this.length)
          console.log(this.data.num)
          this.length=1000
          this.setData({
            num:'world'
          })
  },
  onShow:function(){

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