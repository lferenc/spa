// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = () => "aaaa";

console.log( a() );
    heron=(a,b,c) =>{
    let p=(a+b+c)/2;
    heron=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${Math.round(heron)}`);
}
console.log(heron(8,10,15));