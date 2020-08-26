
var ar=[1,2,3,4,5]

// var sq = ar.map(num=>num**2)
// console.log(sq)

// var cu= ar.map(num=>num**3)
// console.log(cu)


var cu = ar.map(obj=>obj**3)
console.log(cu)

var co = cu.filter(ob=>ob%2==0)
console.log(co)