$.fn.extend({
    slideImg:function(obj){
        //图片初始化
        $('img').hide();
        $('img').eq(0).show();
        $(this).css({
            textAlign:'center'
        })
        //
        obj.btn=obj.btn||false;
        obj.autoPlay=obj.autoPlay||false;
        obj.dot=obj.dot||false;
        obj.dotColor=obj.dotColor||'pink';
        obj.playTime=obj.playTime||3000;
        var n=0;
        var imgList=this.find('img')
        var count=imgList.length-1;
        //添加左右箭头及事件
        if(obj.btn){
                var left=$("<img src='img/l.png'>");
                var right=$("<img src='img/r.png'>");
                var emptyWidth=(this.width()-this.find('img').eq(0).width())/2;
                left.appendTo(this);
                right.appendTo(this);
                $(this).css({
                    position:'relative'
                })
                left.css({
                    position:'absolute',
                    top:'40%',
                    left:emptyWidth+20,
                    transition:'all .5s'
                })
                right.css({
                    position:'absolute',
                    top:'40%',
                    right:emptyWidth+20,
                    transition:'all .5s'
                })
                left.hover(function(){
                    left.css({
                        transform:'scale(1.2)',
                        cursor:'pointer'
                    })
                })
                left.mouseout(function(){
                    left.css({
                        transform:'scale(1)',
                    })
                })
                right.hover(function(){
                    right.css({
                        transform:'scale(1.2)',
                        cursor:'pointer'
                    })
                })
                right.mouseout(function(){
                    right.css({
                        transform:'scale(1)',
                    })
                })
            right.click(function(){
                $('li').css({
                    backgroundColor:'#FFF'
                })
                if(n<count){
                    $('img').eq(n++).fadeOut(function(){
                        $('img').eq(n).fadeIn();
                        $('li').eq(n).css({
                            backgroundColor:obj.dotColor
                        })
                    })
                }else{
                    $('img').eq(n).fadeOut(function(){
                        $('img').eq(0).fadeIn();
                        n=0;
                        $('li').eq(0).css({
                            backgroundColor:obj.dotColor
                        })
                    });
                }
            })
            left.click(function(){
                $('li').css({
                    backgroundColor:'#FFF'
                })
                if(n>0){
                    $('img').eq(n--).fadeOut(function(){
                        $('img').eq(n).fadeIn();
                        $('li').eq(n).css({
                            backgroundColor:obj.dotColor
                        })
                    })
                    
                }else{
                    $('img').eq(n).fadeOut(function(){
                        n=count;
                        $('img').eq(count).fadeIn();
                        $('li').eq(count).css({
                            backgroundColor:obj.dotColor
                        })
                    })
                }   
            }) 
        } 
        //自动播放
        if(obj.autoPlay){
            function slide(){
                $('li').css({
                    backgroundColor:'#FFF'
                })
                if(n<count){
                    $('img').eq(n++).fadeOut(function(){
                        $('img').eq(n).fadeIn();
                        $('li').eq(n).css({
                            backgroundColor:obj.dotColor
                        })
                    })
                }else{
                    $('img').eq(n).fadeOut(function(){
                        $('img').eq(0).fadeIn();
                        n=0;

                    })
                    $('li').eq(0).css({
                        backgroundColor:obj.dotColor
                    })
                }
            }
            var t=setInterval(function(){
                slide()
            },3000)
        }
        $('img').mouseover(function(){
            clearInterval(t);
        })
        $('img').mouseout(function(){
            t=setInterval(function(){
                slide()
            },obj.playTime)
        })
        //小圆点
        if(obj.dot){
            var ul=$('<ul></ul>');
            for(var i=0;i<=count;i++){
                var li=$('<li></li>');
                li.css({
                    float: 'left',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF',
                    marginLeft:'10px',
                    listStyle:'none',
                    fontSize:'0px'
                })
                
                var LEFT=(this.width()-ul.width())/2; 
                ul.css({
                    position:'absolute',
                    bottom:'20px'
                }).css({
                    left:LEFT
                }) 
                li.html(i)
                ul.appendTo(this);
                li.appendTo(ul);
                //小圆点联动事件    
                li.click(function(){
                    clearInterval(t)
                    $('li').css({
                        backgroundColor:'#FFF'
                    })
                    var curent=$(this).html();
                    $('img').hide()
                    $('img').eq(curent).fadeIn()
                    $(this).css({
                        backgroundColor:obj.dotColor,
                        cursor:'pointer'
                    })
                    
                })
               
            }
            ul.find("li").eq(0).css({
                backgroundColor: obj.dotColor
            }) 
        }
        
    }
})
