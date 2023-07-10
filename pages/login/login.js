Component({
    data: {
      current: ['checkbox1'],
      options: [
        { value: 'checkbox1' },
      ],
    },
  
    methods: {
      handleGroupChange(event) {
        console.log('group', event.detail.value);
        this.setData({
          current: event.detail.value,
        });
      },
    },
  });