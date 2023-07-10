const util = require('../../utils/util.js')
Component({
  data: {
    other:[{
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'曼联',
        playerNum:'22',
        playerNum2:'21+1',
        balance:'-866',
        socialstatus:'38300',
        cost:'1532.00'
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'曼联',
        playerNum:'22',
        playerNum2:'21+1',
        balance:'-866',
        socialstatus:'38300',
        cost:'1532.00'
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'曼联',
        playerNum:'22',
        playerNum2:'21+1',
        balance:'-866',
        socialstatus:'38300',
        cost:'1532.00'
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'曼联',
        playerNum:'22',
        playerNum2:'21+1',
        balance:'-866',
        socialstatus:'38300',
        cost:'1532.00'
    }
],



    logs: [],
    value: '1',
    list: [{
        value: '0',
        label: '常用工具',
        icon: 'home',
        url: '/pages/index/index'
      }, {
        value: '1',
        label: '其他球队',
        icon: 'circle',
        url: '/pages/other/other'
      },
      {
        value: '2',
        label: '我的',
        icon: 'user',
        url: '/pages/my/my'
      },
    ],
  },

  methods: {
    onLoad() {
      wx.hideTabBar()
    },
    onChange(e) {
      let url = this.data.list[e.detail.value].url;
      this.data.value = e.detail.value
      wx.switchTab({
        url: url,
      })
    },


  },
});