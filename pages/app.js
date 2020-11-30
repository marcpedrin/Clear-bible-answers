const containerSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.container');
    const container = document.querySelectorAll('.container .button');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate liks
        container.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation= `containerFade o.5s ease forwards ${index/7+0.5}s`
            }
        });
    });

}

containerSlide();

