let p=document.querySelector("p");
p.addEventListener("click",()=>{
     final();
        });
function cchange(col,delay,next){
setTimeout(()=>{
    p.style.color=col;
    if(typeof next==="function"){
    next();
    }
},delay)
}
function final(){cchange("green",1000,()=>{
    cchange("blue",1000,()=>{
        cchange("pink",1000,()=>{
            cchange("yellow",1000,()=>{
                cchange("yellowgreen",1000);
            });
        });
    });
});
}