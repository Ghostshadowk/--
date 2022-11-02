// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// function mul()
// {
//     alert('没见过弹窗啊');
// }
// let myHTML = document.querySelector('html');
// myHTML.onclick = mul;


let myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        alert(myName+'你好啊！');
        myHeading.textContent=myName+'你好啊！';
    }
    
}
myButton.onclick=function(){
    setUserName();
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storeName=localStorage.getItem('name');
    myHeading.textContent=storeName+'你好啊！';
}



let myImg = document.querySelector('img');
let myHTML = document.querySelector('html');
myImg.onclick = function() {
    // myImg.src='image/原神风起地.jpg';

    let mySrc = myImg.getAttribute('src');
    if(mySrc==="image/原神.jpg"){
        myImg.setAttribute('src','image/原神风起地.jpg');
        // myImg.src='image/原神风起地.jpg';
    }
    else{
        myImg.setAttribute('src','image/原神.jpg');
        // myImg.src='image/原神.jpg';
    }
    
    // alert('图片切换完成');
}