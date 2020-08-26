var arr=[1,3,2,67,3]

var res=arr.reduce((n1,n2)=>n1+n2)
var m = arr.reduce((n1,n2)=>n1>n2?n1:n2)
var min = arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(res)
console.log(m,min)