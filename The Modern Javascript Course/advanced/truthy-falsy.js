const products = [{name: "PC mouse"}]
const product = products[0]

//Truthy - Values that resolve to true in a boolean context

//Falsy - Values that resolve to false in  a boolean context
//Falsy Values = false, 0, empty string, null, undefined, NaN


//knowing that we are looking for an object we can use product.
//If true then the product will exist, if false then the value will be undefined
if(product){
    console.log("product found!")
}else{
    console.log("product not found!")
}