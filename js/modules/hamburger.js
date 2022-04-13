function hamburger(){
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu_link').cloneNode(true),
          hamburgerWrapper = document.querySelector('.hamburger_wrapper');

    const wrapper = document.createElement('div'),
          arrow = document.createElement('div');
    
    arrow.classList.add('hamburger_arrow')
    arrow.innerHTML = `<img src="icon/Arrow.svg" alt="Arrow">`;

    wrapper.classList.add('hamburger_wrapper_social');

    wrapper.innerHTML = 
    `
    <a href="https://vk.com/"><img src="icon/VKcom.svg" alt="VK"></a>
    <a href="https://discord.com/"><img src="icon/Discord.svg" alt="Discord"></a>
    <a href="https://www.youtube.com/"><img src="icon/YouTube.svg" alt="YouTube"></a>
    `

    hamburgerWrapper.appendChild(menu);
    hamburgerWrapper.appendChild(wrapper);
    hamburgerWrapper.appendChild(arrow);

    function hamburgerOpen(){
        hamburger.classList.add('active');
        hamburgerWrapper.classList.add('active');
    }

    function hamburgerClose(){
        hamburger.classList.remove('active');
        hamburgerWrapper.classList.remove('active');
    }

    hamburger.addEventListener('click', hamburgerOpen);
    arrow.addEventListener('click', hamburgerClose);
}

export default hamburger;