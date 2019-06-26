// pages/companyRegist/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    imgs: [],
    opacity: 1
  },

  chooseImg: function () {
    var imgs = this.data.imgs;
    var opacity = this.data.opacity;
    var _this = this;
    if (imgs.length == 4) {
      return;
    }
    wx.chooseImage({
      count: 4 - imgs.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        imgs = imgs.concat(tempFilePaths);
        _this.setData({
          imgs: imgs
        });
      },
    })
  },

  previewImg: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      urls: this.data.imgs,
      current: current,
      success: function (e) {
        console.log('预览成功');
      }
    });
  },
  complete: function () {
    // complete  
    if (imgs.length == 3) {
      opacity = 0;
    }
  },
=======
    imgs:[],
    opacity: 1
  },
 
 chooseImg:function(){
   var imgs = this.data.imgs;
   var opacity = this.data.opacity;
   var _this = this;
   if(imgs.length==4){
     return;
   }
   wx.chooseImage({
     count:4-imgs.length,
     sizeType:['original','compressed'],
     sourceType: ['album', 'camera'],
     success: function(res) {
      var tempFilePaths=res.tempFilePaths;
       imgs = imgs.concat(tempFilePaths);
       _this.setData({
        imgs:imgs
       });
     },
   })
 },

 previewImg:function(e){
   var current = e.target.dataset.src;
   wx.previewImage({
     urls:this.data.imgs,
     current:current,
     success:function(e){
       console.log('预览成功');
     }
   });
 },
  complete: function () {
    // complete  
    if (imgs.length == 3) {
      opacity = 0;
    }    
  },
>>>>>>> bc804ba91df35f9f2feb6e8e8333792ba2a5c869
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