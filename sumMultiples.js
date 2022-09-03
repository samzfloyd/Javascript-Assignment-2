let value1 = 3;
let value = 5;
let total_sum=0;

for(let i=0;i<1001;i++){
    if(i%3==0 & i%5==0){
        total_sum=total_sum+i;
    }
}

console.log(`The sum of multiples of 3and5 under 1000 = ${total_sum}`)