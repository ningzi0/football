import Toast from 'tdesign-miniprogram/toast/index';
Component({
    data: {
        current: ['checkbox1',],
        showCheckBox:true,
            options: [
            {  value: 'checkbox1' },
            
        ],
      value: 50,
      playerList: [{
        imgSrc: 'https://images.liquorbox.cn/pingqiu/header.png',
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
        price:'一万',
        current:'checkbox1'
    },
    {
        imgSrc: 'https://images.liquorbox.cn/pingqiu/header.png',
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
        showVerticalText() {
            Toast({
              context: this,
              selector: '#t-toast',
              message: '提交成功，请到我的交易列表中查询状态',
              icon: 'check-circle',
              direction: 'column',
            });
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