Component({
    options: {
        styleIsolation: 'apply-shared',
      },
    data: {
      scoreCard:['主场','客场'],
      value1: 0,
      style: 'border: 2rpx solid rgba(220,220,220,1);border-radius: 12rpx;padding:15rpx',
        pop:[{
          img:'https://images.liquorbox.cn/pingqiu/mc.png',
          name:'巴塞罗那',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/mc.png',
          name:'巴塞罗那',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/mc.png',
          name:'巴塞罗那',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/mc.png',
          name:'巴塞罗那',
        },
        {
          img:'https://images.liquorbox.cn/pingqiu/hj.png',
          name:'皇家马德里',
        }],


        value: 0,
        position: [
            { value: 'right'},
          ],
          position2: [
            { value: 'center'},
          ],
        fileList: [],
        mode: '',
        dateVisible: false,
        date: new Date('2021-12-23').getTime(), // 支持时间戳传入
        dateText: '',

        // 指定选择区间起始值
        start: '2000-01-01 00:00:00',
        end: '2030-09-09 12:12:12',
    },
    methods: {
      onChange1(e) {
        this.setData({ value1: e.detail.value });
      },


        onChange(e) {
            this.setData({ value: e.detail.value });
          },
        handlePopup(e) {
            const { item } = e.currentTarget.dataset;
      
            this.setData(
              {
                cur: item,
              },
              () => {
                this.setData({ visible: true });
              },
            );
          },
          handlePopup2(e) {
            const { item } = e.currentTarget.dataset;
      
            this.setData(
              {
                cur: item,
              },
              () => {
                this.setData({ visible2: true });
              },
            );
          },
          onVisibleChange(e) {
            this.setData({
              visible: e.detail.visible,
              visible2: e.detail.visible,
            });
          },
        showPicker(e) {
            const { mode } = e.currentTarget.dataset;
            this.setData({
              mode,
              [`${mode}Visible`]: true,
            });
          },
          hidePicker() {
            const { mode } = this.data;
            this.setData({
              [`${mode}Visible`]: false,
            });
          },
          onConfirm(e) {
            const { value } = e.detail;
            const { mode } = this.data;
        
            console.log('confim', value);
        
            this.setData({
              [mode]: value,
              [`${mode}Text`]: value,
            });
        
            this.hidePicker();
          },
        
          onColumnChange(e) {
            console.log('pick', e.detail.value);
          },
        handleAdd(e) {
            const {
                fileList
            } = this.data;
            const {
                files
            } = e.detail;

            // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
            this.setData({
                fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
            });

            // 方法2：每次选择图片都上传，展示每次上传图片的进度
            // files.forEach(file => this.uploadFile(file))
        },
        onUpload(file) {
            const {
                fileList
            } = this.data;

            this.setData({
                fileList: [...fileList, {
                    ...file,
                    status: 'loading'
                }],
            });
            const {
                length
            } = fileList;

            const task = wx.uploadFile({
                url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
                filePath: file.url,
                name: 'file',
                formData: {
                    user: 'test'
                },
                success: () => {
                    this.setData({
                        [`fileList[${length}].status`]: 'done',
                    });
                },
            });
            task.onProgressUpdate((res) => {
                this.setData({
                    [`fileList[${length}].percent`]: res.progress,
                });
            });
        },
        handleRemove(e) {
            const {
                index
            } = e.detail;
            const {
                fileList
            } = this.data;

            fileList.splice(index, 1);
            this.setData({
                fileList,
            });
        },
    },
});