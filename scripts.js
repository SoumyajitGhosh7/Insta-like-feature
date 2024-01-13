let cointain=document.querySelector('#cointainer')
let love=document.querySelector('i')
cointain.addEventListener('dblclick',()=>{
    love.style.transform='translate(-50%,-50%) scale(1)'
    setTimeout(()=>{
        love.style.transform='translate(-50%,-50%) scale(0)'
    },2000)
})