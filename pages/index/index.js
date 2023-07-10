Component({
    data: {
        time: 3000 * 60 * 1000,

        img1: 'https://images.liquorbox.cn/pingqiu/zuqiu.png',
        img2: 'https://images.liquorbox.cn/pingqiu/qiuyi.png',
        img3: 'https://images.liquorbox.cn/pingqiu/qiuxie.png',
        img4: 'https://images.liquorbox.cn/pingqiu/fabu.png',
        img5: 'https://images.liquorbox.cn/pingqiu/yuezhan.png',
        img6: 'https://images.liquorbox.cn/pingqiu/fenzu.png',
        img7: 'https://images.liquorbox.cn/pingqiu/rongyu.png',
        img8: 'https://images.liquorbox.cn/pingqiu/paiming.png',
        text: '-- 更多功能，敬请期待 --',
        value: '0',
        list: [{
                value: '0',
                label: '常用工具',
                icon: 'home',
                url: '/pages/index/index'
            },{
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
        visible: true,
        marquee1: {
            speed: 80,
            loop: -1,
            delay: 0,
        },
        marquee2: {
            speed: 60,
            loop: -1,
            delay: 0,
        },
        content: ['朗斯-球员强买-摩纳哥 / N. Mukiele诺尔迪·穆杰莱 ', ' 曼城-球员强买-AC米兰 / M. ?DEGAARD|奥登加德', ' 曼城-球员强买-水晶宫 / S. BOTMAN', ' 曼城-球员强买-AC米兰 / K. WALKER|凯尔·沃克'],
    },
    methods: {
        onLoad() {
            wx.hideTabBar()
        },
        onShow() {
            wx.hideTabBar()
        },
        onChange(e) {
            console.log(e)
            let url = this.data.list[e.detail.value].url;
            this.data.value = e.detail.value
            wx.switchTab({
                url: url,
            })


        },
    },
});