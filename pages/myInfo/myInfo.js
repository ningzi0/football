Component({
    data: {
      cityText: '',
      citys: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ],
     
    },
  
    methods: {
      onColumnChange(e) {
        console.log('picker pick:', e);
      },
  
      onPickerChange(e) {
        const { key } = e.currentTarget.dataset;
        const { value } = e.detail;
  
        console.log('picker change:', e.detail);
        this.setData({
          [`${key}Visible`]: false,
          [`${key}Value`]: value,
          [`${key}Text`]: value.join(' '),
        });
      },
  
      onPickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
          [`${key}Visible`]: false,
        });
      },
  
      onCityPicker() {
        this.setData({ cityVisible: true });
      },
  
      onSeasonPicker() {
        this.setData({ dateVisible: true });
      },
    },
  });