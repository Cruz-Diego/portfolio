/*/*hamburguer button*/ 
function deployMenu() {
    let navbar = document.querySelector('#navbar');
    let hamburgerBotton = document.querySelector('#Hamburger');
    hamburgerBotton.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
};
deployMenu();

/*welcome button*/
function scrollDown () {
    let welcome_button = document.querySelector('#welcome_button');
    welcome_button.addEventListener('click', () => {
        window.scroll({
            top: 1707,
            behavior: 'smooth'
          });
    });
};
scrollDown();

/*data visible*/
function dataVisible() {
    let data_diego = document.querySelector('#data_diego');
    let welcome_button = document.querySelector('#welcome_button');
    welcome_button.addEventListener('click', () => {
        data_diego.classList.add('data_visible');
    });
};
dataVisible();

/*fixed*/
function fixedMenu(){

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();
    
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
    
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);
};
fixedMenu();

/*form*/
const $form = document.querySelector("#form")
$form.addEventListener('submit', handleSubmit)
async function  handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert("Thank you for contacting me, I will reply to you soon.")
    }
}

/**/ 
function push() {
document.querySelectorAll(".works_images_conteiner img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup_img").style.display = "block";
        document.querySelector(".popup_img img").src = image.getAttribute("src");
    }
});
}
push(); 

function push2() {
    document.querySelector(".popup_img span").onclick = () => {
        document.querySelector(".popup_img").style.display = "none";   
    }
}
push2();