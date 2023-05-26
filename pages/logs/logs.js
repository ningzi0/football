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
    
          onShow() {
             wx.hideTabBar()
                this.setData({
                  logs: (wx.getStorageSync('logs') || []).map(log => {
                    return {
                      date: util.formatTime(new Date(log)),
                      timeStamp: log
                    }
                  })
                })
              }
            
        },
      });