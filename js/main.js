import '../scss/main.scss'

console.log("hello parcel@")

// async await 
async function test(){
  const promise = Promise.resolve(123);
  console.log(await promise);
}


test();