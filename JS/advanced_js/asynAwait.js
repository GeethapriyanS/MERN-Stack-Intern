// async function asAw(){
//     setTimeout(()=>{
//        console.log("Inside timeout");    
//     },5000)
//     return await("This is Example of As/Aw"); 
// }
// asAw().then(function(output){
//     console.log(output);
// })


//Instagram Example
commentcode = async()=>{
    return new Promise((CommentingPost) => {
     setTimeout(()=>{
        CommentingPost("Comment Posted to the Post Created Sucessfully")
     },5000)
    })
}

likecode = async()=>{
    return new Promise((likingPost) => {
     setTimeout(()=>{
        likingPost("Liking Posted to the Post Created Sucessfully")
     },2000)
    })
}

async function CreatePost() {
   var post =new Promise((cpost)=>{
    setTimeout(()=>{
        cpost("Post Created Sucessfully")
    },1000)
   }) 
   var [post1,like,comment] =await Promise.all([post,likecode(),commentcode()])
   console.log(post1)
   console.log(like)
   console.log(comment)
}

CreatePost()