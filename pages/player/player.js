Component({
    data: {
        current: ['checkbox1',],
        showCheckBox:false,
    options: [
      {  value: 'checkbox1' },
      
    ],
    
        item: [
            {
                checked:true,
                con:'版本'
            },
            {
                checked:true,
                con:'实时状态'
            },
            {
                checked:true,
                con:'卡牌类型'
            },
            {
                checked:true,
                con:'位置'
            },
            {
                checked:true,
                con:'适配位置'
            },
            {
                checked:true,
                con:'球色'
            },
            {
                checked:true,
                con:'满级总评'
            },
            {
                checked:true,
                con:'1级总评'
            },
            {
                checked:false,
                con:'比赛风格'
            },
            {
                checked:false,
                con:'最大等级'
            },
            {
                checked:false,
                con:'年龄'
            },
            {
                checked:true,
                con:'身高(cm)'
            },
            {
                checked:false,
                con:'体重(kg)'
            },
            {
                checked:true,
                con:'惯用脚'
            },
            {
                checked:false,
                con:'国籍/地区'
            },
            {
                checked:false,
                con:'俱乐部'
            },
            {
                checked:false,
                con:'假名球员'
            },
            {
                checked:false,
                con:'控球游戏'
            },
            {
                checked:false,
                con:'快速反击'
            },
            {
                checked:false,
                con:'长传反击'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            },
            {
                checked:false,
                con:'外侧'
            }
        ],

        position: [{
                value: 'left',
            },
            
        ],
        screen:[
            {
                title:'版本',
                content:['2021 DP7.0','2021 DP8.0','2021_23cn','2022 DP1.1','2023 DP2.2'],
                type:0,

            },
            {
                title:'实时状态',
                content:['全部','A','B','C','D']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            }
        ],
        sort:[
            {
                title:'选择排序字段',
                content:['全部','进攻意识','控球','紧密控球','积极性','盘球','地面传球']
            },
            {
                title:'卡牌类型',
                content:['全部','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员','基础球员','传奇球员','精选球员','标志时刻','状态火热','史诗球员']
            }
        ],
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
                have:'拥有',
                price:'一万'
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
                have:'拥有',
                price:'一万'
            },
            {
                imgSrc: 'https://images.liquorbox.cn/pingqiu/header.png',
                nameCn: '朱利安-阿尔瓦雷斯',
                nameEn: 'Julián Álvarez',
                PersonalInfo: '24岁 170cm 71kg',
                playerCity: '曼城',
                playerNum: '19号',
                playerLoca: '前锋',
                playerLetter: 'C',
                playerIcon: 'https://images.liquorbox.cn/pingqiu/216.png',
                colorLetter: 'colorC',
                playerid:1,
                price:'一万'
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
            {
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
                playerid:1
            },
        ]


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
        handlePopup(e) {
            const {
                item
            } = e.currentTarget.dataset;

            this.setData({
                    cur: item,
                },
                () => {
                    this.setData({
                        visible: true
                    });
                },
            );
        },
        handlePopup2(e) {
            const {
                item
            } = e.currentTarget.dataset;

            this.setData({
                    cur: item,
                },
                () => {
                    this.setData({
                        visible2: true
                    });
                },
            );
        },
        onVisibleChange(e) {
            this.setData({
                visible: e.detail.visible,
            });
        },
        onVisibleChange2(e) {
            this.setData({
                visible2: e.detail.visible,
            });
        },
        onClose() {
            this.setData({
              visible: false,
            });
          },
          onClose2() {
            this.setData({
              visible2: false,
            });
          },
          forceSales(){
              this.setData({
                  showCheckBox:!this.data.showCheckBox
              })
          }
    },
    
});