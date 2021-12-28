//使用参考
//https://www.cnblogs.com/vadim-web/p/13327945.html
//
import * as dat from 'dat.gui';

const gui = new dat.GUI();
// gui.add(test, 'testttt', 0, 0.5);
var params = {
    color: 0xffffff,
    transparency: 0.90,
    type: 1,
    visible:true
};

gui.addColor(params, "color").onChange(e => { //点击颜色面板，e为返回的10进制颜色
    // pointsMaterial.color.set(e);
    console.log('test ',e)
});

//（param, name, min, max）
gui.add(params, "transparency", 0, 1).onChange(e => { //该滑块的值域是[8,30],e为返回的滑块值
    console.log('test ',e)
})

gui.add(params, "type", {
    "test1":"1",
    "test2":"2",
    "test3":"3",
}).onChange(e => { //该滑块的值域是[8,30],e为返回的滑块值
    console.log('test ',e)
})

gui.open(); //gui.close() //应该是打开关闭面板

// function test(val:any){
//     this.testttt = 0.02;
//     console.log('val',val)
// }
