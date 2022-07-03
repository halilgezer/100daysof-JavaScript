// Active menu switcher 

const navList = document.querySelector(".nav-list");

navList.addEventListener("click",(e) =>  {
  const navLink = e.target.parentElement ;
  if(navLink.classList.contains("link")){
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
}
} );

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}


// Scroll to Top

const scrollBtn = document.querySelector(".top") ;
const rootEl = document.documentElement ;

document.addEventListener("scroll",showBtn) ;

scrollBtn.addEventListener("click",scrollToTop);


function showBtn () {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if(rootEl.scrollTop / scrollTotal > 0.4) {
    scrollBtn.classList.add("show-btn");
  }else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop () {
  rootEl.scrollTo({
    top : 0 ,
    behavior : "smooth",
     
  }) ;
}


// Responsive Mobile Menu 

const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)" ;
  menu.style.display ="block"
  menu.style.transform = "translateY(0)" ;


}

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)" ;
  hamburger.style.display = "block";
  menu.style.transform = "translateY(-200%)" ;
}

hamburger.addEventListener("click",showMenu);
close.addEventListener("click",hideMenu);
