let primeNums=[];

function prime(num1,num2){
    for(let i=num1;i<=num2;i++){
        
        num=0;
        for(let j=1;j<=i;j++){
            if(i%j===0){
                num++
            }
        }
        if(num==2){
            primeNums.push(i)
        }
    }
}
prime(1,100);  


for(let i=0;i<primeNums.length;i++){
    let res=primeNums[i];
    let val=1
    for(let j=1;j<res;j++){
        val=val+val*j;
        
    }console.log(`The factorial of Prime no : ${primeNums[i]} is ${val}`)

}


