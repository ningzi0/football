import Message from 'tdesign-miniprogram/message/index';

Component({
  methods: {
    

    showIconMessage() {
      Message.info({
        context: this,
        offset: ['20rpx', '32rpx'],
        duration: 5000,
        content: '提交成功，感谢您的建议！',
      });
    },
  },
});