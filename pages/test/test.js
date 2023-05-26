Component({
    data: {
        current: ['checkbox1',],
        showCheckBox:true,
            options: [
            {  value: 'checkbox1' },
            
        ],
      value: 50,
      playerList: [{
        imgSrc: 'https://images.liquorbox.cn/pingqiu/haaland.png',
        nameCn: '哈兰德',
        nameEn: 'Erling Haaland',
        PersonalInfo: '23岁 194cm 88kg',
        playerCity: '曼城',
        playerNum: '9号',
        playerLoca: '前锋',
        playerLetter: 'A',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        colorLetter: 'colorA',
        playerid:1,
        have:'已选',
        price:'一万'
    },
    {
        imgSrc: 'https://images.liquorbox.cn/pingqiu/alvarez.png',
        nameCn: '朱利安-阿尔瓦雷斯',
        nameEn: 'Julián Álvarez',
        PersonalInfo: '24岁 170cm 71kg',
        playerCity: '曼城',
        playerNum: '19号',
        playerLoca: '前锋',
        playerLetter: 'B',
        playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
        colorLetter: 'colorB',
        playerid:1,
        have:'已选',
        price:'一万'
    },]
},
  
    methods: {

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
        handleGroupChange(event) {
            console.log('group', event.detail.value);
            this.setData({
              current: event.detail.value,
            });
          },
      handleChange(e) {
        const { value } = e.detail;
  
        console.log(value);
        this.setData({
          value,
        });
      },
    },
  });