class Person{
    constructor(imie, nazwisko){
        this.imie=imie;
        this.nazwisko=nazwisko;
    }
    getNameUpper(){
        return this.imie + ' '+this.nazwisko.toUpperCase(); 
    }
    getIni(){
        return this.imie.charAt(0)+'.'+this.nazwisko.charAt(0);
    }
}
var Me = new Person('Łukasz', 'Ferenc');
var Jan=new Person('Jan','Nowak')
console.log(Me.getNameUpper());
console.log(Me.getIni());
console.log(Jan.getIni());
console.log(Jan.getNameUpper());
