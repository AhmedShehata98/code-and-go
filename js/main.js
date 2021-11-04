const section_skills = document.querySelector('.section-skills');
const progress = document.querySelectorAll('.progress_bar span')

window.addEventListener('scroll',()=>{
    if( window.scrollY >= section_skills.offsetTop ){
        progress.forEach((ele)=>{
            ele.style.width=ele.dataset.width;
        })
    }
})