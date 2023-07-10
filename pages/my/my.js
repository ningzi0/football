const util = require('../../utils/util.js')
Component({
  data: {
    logs: [],
    value: '2',
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
    Jump() {
      wx.navigateTo({
        url: '/pages/myInfo/myInfo',
      })
    },

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