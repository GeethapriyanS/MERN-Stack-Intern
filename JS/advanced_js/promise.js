//Promise Example

function promiseEg(flag){
    return new Promise(function(resolve,reject){
        if(flag===1){
            resolve("This is a Promis resolve example");
        }
        else if(flag===0){
            reject("This is promise reject example");
        }
    })
}
promiseEg(0).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

//Promise - Location Finder Example

locationFinder = (location,time) =>{
    return new Promise((locFound, locNotFound)=>{
        setTimeout(()=>{
            if(isLocationValid(location,time)){
                locFound([location, "Found in", 2000, "millisecs"])
            }
            else{
                locNotFound([location, "not found in", 2000, "millisecs"])
            }
        },time)
    })
}
function isLocationValid(loc,time){
    location = "Melbourne"
    t = 2000
    if (loc === location && time <= t){
        return true
    }
    else{
        return false
    }
}
locationFinder("Melbourne",2001).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err)
});