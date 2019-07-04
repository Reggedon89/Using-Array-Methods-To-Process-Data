
// Question 1

const sum = items.reduce(function(a, b)  {
    return a + b.price
}, 0) / items.length

const ans = `The average price is $${sum.toFixed(2)}`

document.querySelector("#answer1").innerHTML = ans


//Question 2

var range = items.filter((prices) => {
    return prices.price <=18 && prices.price >= 14 
}).map((name) => {
    return `${name.title} \n` 
}).slice(1,4)

document.querySelector("#answer2").innerHTML = range
//Question 3
var currency = items.filter((x) => {
      return  x.currency_code === "GBP"  
 }).map((y) => {
     let name = y.title
     let price = y.price
     return `${name} costs ${price} `
 })

 document.querySelector("#answer3").innerHTML = currency.toString()

//Question 4
 var wood = items.filter((x) => {
     let getWood = x.materials
     for (let i = 0; i < getWood.length; i++) {
         if (getWood[i] === "wood") {
             return getWood
         }
     }
     return
 }).map((y) => {
     let name = y.title;
      return `${name} is made of wood \n`   
     })

document.querySelector("#answer4").innerHTML =   wood.toString()

//Question 5

var eight = items.reduce((x, y) => {

})