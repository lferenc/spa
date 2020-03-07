//console.log(2);
//console.log(6);
//console.log(10);
//console.log(14);
function loop1(){
    let n=2;
    while(n<=14){
        console.log(n);
        n+=4;
    }
}
function loop2(){
    for (let n=2; n<=14; n+=4) {
        console.log(n);
        
    }
}
loop2();
loop1();