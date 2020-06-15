var electron = require('electron');     //引入electron模块

var app = electron.app;  // 创建electron引用app

var BrowserWindow = electron.BrowserWindow;  //创建窗口引用

var mainWindow = null ;  //声明要打开的主窗口


var  globalShortcut = electron.globalShortcut



app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:500,
        webPreferences:{ nodeIntegration:true}
    });  //设置打开的窗口大小

    //注册全局快捷键
    globalShortcut.register('ctrl+e',()=>{
        mainWindow.loadURL('https://jspang.com')
    })


    //菜单
    //require('./main/menu.js');
    //require('./main/menu2.js');
    require('./main/menu3.js');

    //添加菜单之后调试
    mainWindow.webContents.openDevTools();

    //mainWindow.loadFile('index.html');  //加载那个页面
    //mainWindow.loadFile('demo2.html');
    //mainWindow.loadFile('demo3.html');
    //mainWindow.loadFile('demo4.html');
    //mainWindow.loadFile('demo5.html');
    //mainWindow.loadFile('demo6.html');
    mainWindow.loadFile('demo7.html');



    //BrowserView
    //var BrowserView = electron.BrowserView; //引入BrowserView
    //var view = new BrowserView();   //new出对象
    //mainWindow.setBrowserView(view);   // 在主窗口中设置view可用
    //view.setBounds({x:0,y:100,width:1200, height:800});  //定义view的具体样式和位置
    //view.webContents.loadURL('https://jspang.com');  //wiew载入的页面




    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

    app.on('will-quit',function(){
        //注销全局快捷键的监听
        globalShortcut.unregister('ctrl+e')
        globalShortcut.unregisterAll()

    })

});