var { shell } = require('electron');

var aHref = document.querySelector('#aHref');

aHref.onclick = function(e){

    //阻止默认行为
    e.preventDefault();


    var href = this.getAttribute('href');
    shell.openExternal(href)
}




//用window.open打开子窗口
var mybtn = document.querySelector('#mybtn');

mybtn.onclick = function(e){

    //window.open('https://jspang.com')
    window.open('./popup_page.html');
};


//父窗口监听子窗口
window.addEventListener('message',(msg)=>{
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg.data)
})