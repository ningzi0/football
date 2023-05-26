const util = require('../../utils/util.js')
Component({
        data: {
         logs: [],
          value: '1',
          list: [{
            value: '0',
            label: '常用工具',
            icon: 'home',
            url:'/pages/index/index'
        },
        {
            value: '1',
            label: '我的',
            icon: 'user',
            url:'/pages/logs/logs'
        },
    ],
        },
      
        methods: {
        Jump(){
            wx.navigateTo({
              url: '/pages/myInfo/myInfo',
            })
        },

           onLoad(){
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