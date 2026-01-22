 function hello(){
    return new Promise((resolve,reject)=>{
        //  console.log("hello")
        setTimeout(()=>{
            console.log("weather data")
            resolve(200)
        },2000)

    })
   
}

async function getweatherdata(){
    // 1st call
    await hello()
    // 2nd call
     await hello()


}