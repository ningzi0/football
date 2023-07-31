const util = require('../../utils/util.js')
Component({
  data: {
    other:[{
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'教练:克里斯',
        socialstatus:'5',
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'教练:克里斯',
        socialstatus:'2',
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'教练:克里斯',
        socialstatus:'1',
    },
    {
        img:'https://images.liquorbox.cn/pingqiu/mc.png',
        coach:'朱刚鬣',
        playername:'教练:克里斯',
        socialstatus:'2',
    }
],



  
  },

  methods: {
    onLoad() {
      wx.hideTabBar()
    },


  },
});