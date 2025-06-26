let p=document.querySelector("p");
p.addEventListener("click",()=>{
    return final()
        });
function cchange(col,delay,next){
setTimeout(()=>{
    p.style.color=col;
    next()
},delay,)
}
function final(){cchange("green",1000,()=>{
    cchange("blue",1000,()=>{
        cchange("pink",1000,()=>{
            cchange("yellow",1000,()=>{
                cchange("yellowgreen",1000);
            })
        })
    })
})
}