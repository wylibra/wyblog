// 配置文件
var config={  
    row:16, //行  
    col:16, //列  
    white:1,    //白色  
    black:2,    //黑色  
    margin:5,   //每个棋子的边距5像素  
    who_turn:1, //轮到谁？    1白子  2黑子    
};   
//初始化棋盘  （0代表没有棋子，1白子，2黑子）
var my_arr=new Array();  
for(var i=0;i<config.row;i++){  
   my_arr[i]=new Array();  
   for(var j=0;j<config.col;j++){  
      my_arr[i][j]=0;  
   }  
}  
$(function(){  
	// 创建棋盘
    createView();  
    //绑定棋子点击事件  
    $(".block").click(function(){  
        eventCLick($(this));  
   });        
});  
//创建棋盘  
function createView(){  
    var html="<div class='box'><table>";  
    for(var i=0;i<config.row;i++){  
        html+="<tr>";  
        for(var k=0;k<config.col;k++){  
            html+="<td>";  
            html+="</td>";  
        }  
        html+="</tr>";  
    }  
    html+="</table></div>";  
    $(document.body).append(html);  
  
    //创建棋子对应的位置div  
    var width=$(".box table").width();  
    var single=(width/config.row).toFixed(0); //toFixed(num)四舍五入
    var leftMargin=(single/2).toFixed(0);  //棋子位置
    var x=parseInt(leftMargin);  
    var y=parseInt(leftMargin);  
    //创建棋子  
    for(var i=1;i<config.row;i++){  
        for(var k=1;k<config.col;k++){  
            var box="";  
            box="<div class='block' id='{id}' style='width:{w}px;height:{h}px;left:{x}px;top:{y}px;'></div>";  
            box=box.replace("{id}",i+"#"+k);  
            box=box.replace("{h}", single-config.margin);  
            box=box.replace("{w}", single-config.margin);  
            box=box.replace("{x}", x);  
            box=box.replace("{y}", y);  
            $(".box").append(box);  
            x+=parseInt(single);  
        }  
        y+=parseInt(single);  
        x=parseInt(leftMargin);  
    }  
}  
//单击棋子  
function eventCLick(target){  
    if(config.who_turn==1){  
        setArr(config.white,target);      
    }else if(config.who_turn==2){  
        setArr(config.black,target);  
    }  
}  
//设置棋盘的值  
function setArr(color,target){  
    var id=$(target).attr("id");//获得单击棋子的id  
    var index=new Array();  
    index=id.split("#");  //将字符串用＃分割成数组
    var x_index=parseInt(index[0]);  //水平距离上的值
    var y_index=parseInt(index[1]);  //垂直距离上的值
      
    if(my_arr[x_index][y_index]==0){  //没有棋子放置
        //1、设置棋子  
        my_arr[x_index][y_index]=color;    
        //2、设置对应的棋子显示的背景色 
        if(color==config.white){  
            $(target).css("background-color","white");  
            config.who_turn=config.black;  //下一次的下棋者   
        }else if(color==config.black){  
            $(target).css("background-color","black");  
            config.who_turn=config.white;     
        }     
        //判断是否胜利  
        if(isSuccess(x_index,y_index,color)){  
          if(color==config.white){  
              alert("白棋赢了");  
          }else{  
              alert("黑棋赢了");  
          }   
        }  
    }
}  
//判断是否成功（传横纵坐标及下棋的颜色）
function isSuccess(i,j,color){   // my_arr[3][4]
	 // alert(i+"==="+j); 
	// 判断某点的上下左右最近的4个点
    var left=j-4;   //0
    var right=j+4;  //8
    var top=i-4;  //-1
    var bottom=i+4; //7 
      
    if(left<1) {left=1;}   //1
    if(right>15) {right=15;}  //8
    if(top<1) {top=1;}  //1
    if(bottom>15) {bottom=15;}  //7
      
    var sum;  
    var flag=false;   
    //水平方向  
    if(flag==false){  
        sum=0;  
        for(var a1=left;a1<=right;a1++){  
           if(my_arr[i][a1]==color){  
             sum++;  
             //连续5个点为同色的则成功
             if(sum==5){  
                 flag=true;  
                 break;  
             }  
           }else{  
             sum=0;  
           }    
        }  
    }        
    //垂直方向
    if(flag==false){  
        sum=0;    
        for(var a2=top;a2<=bottom;a2++){  
           if(my_arr[a2][j]==color){  
             sum++;  
             if(sum==5){  
                 flag=true;  
                 break;  
             }  
           }else{  
             sum=0;  
           }  
        }     
    }    
    //计算当前棋子距 上下左右边 的距离  
    var left_margin=j-1;  //3
    var right_margin=config.col-1-j;  //11
    var top_margin=i-1;   //2
    var bottom_margin=config.row-1-i;  //12
    var x1,y1,x2,y2,x3,y3,x4,y4;  
      
    //右上顶点坐标  
    var margin1=top_margin>right_margin? right_margin:top_margin;  
    margin1=margin1>4? 4:margin1;  //2
    x1=i-margin1;  //1
    y1=j+margin1;  //6
    //左下顶点坐标  
    var margin2=left_margin>bottom_margin? bottom_margin:left_margin;  
    margin2=margin2>4? 4:margin2;  //3
    x2=i+margin2;  //6
    y2=j-margin2;  //1
    //左上顶点坐标  
    var margin3=top_margin>left_margin? left_margin:top_margin;  
    margin3=margin3>4? 4:margin3;  //2
    x3=i-margin3;   //1
    y3=j-margin3;  //2
    //右下顶点坐标  
    var margin4=bottom_margin>right_margin? right_margin:bottom_margin;  
    margin4=margin4>4?4:margin4;  //11
    x4=i+margin4;  14
    y4=j+margin4;  15
    //左斜（例如my_arr[6][1]到my_arr[1][6]）
    if(flag==false){  
        sum=0;  
        var a3,a4;  
        for( a3=x1,a4=y1;(a4>=y2)&&(a3<=x2);a4--){  
           if(my_arr[a3][a4]==color){  
             sum++;  
             if(sum==5){  
                 flag=true;  
                 break;  
             }  
           }else{  
             sum=0;  
           }  
           a3++;  
        }     
    }  
    //右斜 （例如my_arr[1][2]和my_arr[14][15]）
    if(flag==false){  
        sum=0;    
        var a5,a6;  
        for( a5=x3, a6=y3;(a5<=x4)&&(a6<=y4);a5++){  
           if(my_arr[a5][a6]==color){  
             sum++;  
             if(sum==5){  
                 flag=true;  
                 break;  
             }  
           }else{  
             sum=0;  
           }  
           a6++;  
        }     
    }  
    return flag;  
}  