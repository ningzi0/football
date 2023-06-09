// pages/playerShow/playerShow.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      confirmBtn: { content: '确定', variant: 'base' },
     


      style: 'border: 1rpx solid rgba(220,220,220,1);border-radius: 12rpx;',
      cur: {},
    position: [
      { value: 'center', },
    ],


        stateInfoList: [{
          stateInfoItem: [{title: '进攻意识',number: '94',color: '#90dc00'},{title: '射门', number: '92',color: '#90dc00' }]
        },
        {
          stateInfoItem: [{ title: '控球',number: '95',color: '#00d09e'},{title: '盘球',number: '99',color: '#00d09e'}]
        },
        {
          stateInfoItem: [{ title: '地面传球',number: '84',color: '#e49e02'},{title: '空中传球',number: '82',color: '#e49e02'}]
        },
        {
          stateInfoItem: [{ title: '定位球',number: '89',color: '#90dc00'},{title: '弧度',number: '83',color: '#e49e02'}]
        },
        {
          stateInfoItem: [{ title: '头球',number: '80',color: '#e49e02'},{title: '脚下力量',number: '87',color: '#90dc00'}]
        },
        {
          stateInfoItem: [{ title: '紧密控球',number: '95',color: '#00d09e'},{title: '积极性',number: '67',color: '#c33028'}]
        },
        {
          stateInfoItem: [{ title: '防守意识',number: '59',color: '#c33028'},{title: '抢断',number: '60',color: '#c33028'}]
        },
        {
          stateInfoItem: [{ title: '速度',number: '99',color: '#01cf9e'},{title: '爆发力',number: '99',color: '#01cf9e'}]
        },
        {
          stateInfoItem: [{ title: '身体接触',number: '84',color: '#e49e02'},{title: '身体控制',number: '84',color: '#90dc00'}]
        },
        {
          stateInfoItem: [{ title: '跳跃',number: '80',color: '#e49e02'},{title: '体力',number: '90',color: '#90dc00'}]
        }
    ],
    
    },

    showDialog(e) {
      const { key } = e.currentTarget.dataset;
      this.setData({ [key]: true, dialogKey: key });
    },

    closeDialog() {
      const { dialogKey } = this.data;
      this.setData({ [dialogKey]: false });
    },

    handlePopup(e) {
      const { item } = e.currentTarget.dataset;

      this.setData(
        {
          cur: item,
        },
        () => {
          this.setData({ visible: true });
        },
      );
    },
    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },
    jump:function(){
        wx.navigateTo({
          url: '/pages/offer/offer',
          success: function(res) {
    
          },
          fail: function(res) {
    
          },
          complete: function(res) {
    
          },
        })
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})