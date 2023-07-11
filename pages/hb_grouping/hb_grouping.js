// pages/hb_grouping/hb_grouping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hidden:true,
        cur: {},
        position: [
            { value: 'center', text: '中间弹出' },
          ],
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
      onClose() {
        this.setData({
          visible: false,
        });
      },
    handleLongPress: function(e) {    
        //console.log("endTime - startTime = " + (this.endTime - this.startTime));
        console.log("长按");  
        this.setData({
          hidden:false
        })
        },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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