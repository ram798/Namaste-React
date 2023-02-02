let p = new Promise((resolve, reject) =>{
    let a = 1+7
    if(a==2){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('THis is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

function step1(value,error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value+10);
        } else {
            reject('Something wrong');
        }
    });
}
async function result() {
    let result1 = step1(10, false);
    return result1;
}
async function result2() {
    let result = await Promise.resolve(5);
    return result;
}

console.log(result());