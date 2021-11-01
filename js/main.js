const li_more = document.getElementById('More');
const sub_links =document.getElementById('sub-links')
li_more.addEventListener('click',()=>{
    sub_links.style.display="flex"
})

window.onkeyup=()=>{
    console.log(this);
}
//go up
const up= document.getElementById('go-up')
window.addEventListener('scroll',()=>{
    if(window.scrollY >=1900 ){
        up.style.display="block"
    }else{
        up.style.display="none"
    }
})

up.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
})