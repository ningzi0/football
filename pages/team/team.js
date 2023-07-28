Component({
    data: {
      product: {
        value: 'all',
        options: [
          {
            value: 'all',
            label: '筛选',
          },
          {
            value: 'one',
            label: '测试一',
          },
          {
            value: 'two',
            label: '测试二',
          },
        ],
      },



      teamlist:[{
        title:'前锋',
        content:[{
          img:'https://images.liquorbox.cn/pingqiu/haaland.png',
          name:'哈兰德',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'https://images.liquorbox.cn/pingqiu/alvarez.png',
          name:'阿尔瓦雷斯',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'http://www.sinaimg.cn/ty/opta/player150/56764.png',
          name:'莱万多夫斯基',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'http://www.sinaimg.cn/ty/opta/player150/19927.png',
          name:'本泽马',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        }]
      },{
        title:'中场',
        content:[{
          img:'http://www.sinaimg.cn/ty/opta/player150/178880.png',
          name:'门德兹',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'http://www.sinaimg.cn/ty/opta/player150/223255.png',
          name:'巴尔维德',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'http://www.sinaimg.cn/ty/opta/player150/119718.png',
          name:'卡拉斯科',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        },{
          img:'http://www.sinaimg.cn/ty/opta/player150/248507.png',
          name:'卡米洛',
          info:'37岁 187cm 84kg',
          loca:'前锋',
          locaText:'偷猎者',
          price:'2000'
        }]
      }]
      
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      onChange(e) {
        this.setData({
          'product.value': e.detail.value,
        });
      },
    },
  });