// pages/companyRegist/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;

    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },
  complete: function () {
    // complete  
    if (imgs.length == 3) {
      opacity = 0;
    }
  },
  //删除图片

  deleteImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;//获取当前图片下标

    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          imgs.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          imgs: imgs
        });
      }
    })
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