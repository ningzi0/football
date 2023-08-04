// pages/trade/trade.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time: 96 * 60 * 1000,
        playerList: [{
            state: '未通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            have:'拥有',
            theme:''
        },
        {
            state: '已申请',
            nameCn: '朱利安-阿尔瓦雷斯',
            nameEn: 'Julián Álvarez',
            PersonalInfo: '24岁 170cm 71kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            have:'拥有',
            theme:'primary'
        },
        {
            state: '已申请',
            nameCn: '朱利安-阿尔瓦雷斯',
            nameEn: 'Julián Álvarez',
            PersonalInfo: '24岁 170cm 71kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'primary'
        },
        {
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },{
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },{
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },{
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },{
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },{
            state: '已通过',
            nameCn: '哈兰德',
            nameEn: 'Erling Haaland',
            PersonalInfo: '23岁 194cm 88kg',
            playerInfo:'曼城 9号 前锋',
            playerLetter: '200元',
            playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
            playerid:1,
            theme:'danger'
        },
        
    ],
    playerList2: [{
        active:'active',
        state: '未通过',
        nameCn: '哈兰德',
        nameEn: 'Erling Haaland',
        PersonalInfo: '23岁 194cm 88kg',
        playerInfo:'曼城 9号 前锋',
        playerLetter: '200元',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        playerid:1,
        have:'拥有',
        theme:''
    },
    {
        state: '已申请',
        nameCn: '朱利安-阿尔瓦雷斯',
        nameEn: 'Julián Álvarez',
        PersonalInfo: '24岁 170cm 71kg',
        playerInfo:'曼城 9号 前锋',
        playerLetter: '200元',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        playerid:1,
        have:'拥有',
        theme:'primary'
    },
    {
        state: '已申请',
        nameCn: '朱利安-阿尔瓦雷斯',
        nameEn: 'Julián Álvarez',
        PersonalInfo: '24岁 170cm 71kg',
        playerInfo:'曼城 9号 前锋',
        playerLetter: '200元',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        playerid:1,
        theme:'primary'
    },
    {
        state: '已通过',
        nameCn: '哈兰德',
        nameEn: 'Erling Haaland',
        PersonalInfo: '23岁 194cm 88kg',
        playerInfo:'曼城 9号 前锋',
        playerLetter: '200元',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        playerid:1,
        theme:'danger'
    },
    
]
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