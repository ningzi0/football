Component({
    data: {
      hidden:true
     
},
  
    methods: {


    handleLongPress: function(e) {    
    //console.log("endTime - startTime = " + (this.endTime - this.startTime));
    console.log("长按");  
    this.setData({
      hidden:false
    })
    },
    },
  });