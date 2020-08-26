class Student{
    constructor(name,rolnum,total){
        this.name=name;
        this.rolnum=rolnum;
        this.total=total;
    }

    printValues(){
        console.log(this.name)
    }
}

var a =  new Student("abc",1,130);
var b =  new Student("abfc",3,190);
var c =  new Student("assbc",1,134);
var d =  new Student("abfgfgc",1,180);

var stlist=[]
stlist.push(a)
stlist.push(b)
stlist.push(c)
stlist.push(d)

//console.log(stlist)

// var f = stlist.filter(num => num.total>140)
// console.log(f)


//var up = stlist.map(obj=>obj.name.toUpperCase());
//var max_mark=stlist.reduce((n1,n2)=>n1.total>n2.total?n1:n2.total)
var max_mark=stlist.reduce((n1,n2)=>n1.total>n2.total?n1:n2)

//var res=stlist.filter(obj=>obj.total==max_mark)
console.log(max_mark)


