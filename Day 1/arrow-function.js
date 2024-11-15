//function declaration
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Yogeshwari"));
 greet = (name) => {
    return "Hello, " + name;
}
console.log(greet("Yoga"));
//map method
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2);
console.log(doubled);
//filter method
const s=arr.filter(num=>num%2==0);
console.log(s);
//reduce method
const sum=arr.reduce((accumalator,currentValue)=>accumalator+currentValue);
console.log(sum);
const oredrFood=()=>{
    return new Promise((resolve,reject)=>{
        console.log("Your order placed , waiting for confirmation")
         setTimeout(()=>{
            const rand=Math.random();
            if(rand){
                resolve("Order placed");
            }
            else{
                reject("Order not placed");
            }

         },2000);
    })
}
async 