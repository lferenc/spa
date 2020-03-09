names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.name=names
    }

    startWith(letter){
        let arryalet = [];
        let n=this.name.length;
        let i=0;
        while(i<n){
            if(this.name[i].charAt(0)==letter){
                arryalet.push(students.name[i])
            }
            i++;
        }

        return arryalet; // names (array) which starts with the letter
    }

    sort() {
        return this.name.sort(); // names (array) in alphabetical order 
    }

    get() {
        return this.name ; // names (array) in natural order
    }

    getFirst(n) {
        
        
        return this.name.slice(0,n); // get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.getFirst(4));
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



