const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.bottom-navigation');
  const navLinks = document.querySelectorAll('.nav-links li');
  
	 burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

navSlide();

const searchSlide = () => {
  const searchIcon = document.querySelector('.search');
  const searchDrawer = document.querySelector('.mobile-search');
  searchIcon.addEventListener("click", () => {
        //Toggle Nav
        searchDrawer.classList.toggle("search-active");
  });
}

searchSlide();


const bagSlide = () => {
  const bagIcon = document.querySelector('.bag-icon');
  const modalDark = document.querySelector('.modal-dark');
  const bagDrawer = document.querySelector('.bag-slide');
  bagIcon.addEventListener("click", () => {
        //Toggle Nav
        bagDrawer.classList.toggle("bag-active");
        modalDark.classList.toggle("page-mask");
  });
}

bagSlide();

const filterSlide = () => {
  const filterIcon = document.querySelector('.filter');
  const filterDrawer = document.querySelector('.mobile-filter');
  filterIcon.addEventListener("click", () => {
        //Toggle Nav
        filterDrawer.classList.toggle("filter-active");
  });
}

filterSlide();

function guestMode() {
  const guestForm = document.querySelector('.guest-mode');
  const checkoutButton = document.querySelector('.no-u');
  guestForm.classList.toggle("guest-off");
  checkoutButton.classList.toggle("guest-off");
}

  
function closeNav() {
  const navDrawer = document.querySelector('.bottom-navigation');
  navDrawer.classList.toggle("nav-active");
}

function closeSearch() {
  const searchDrawer = document.querySelector('.mobile-search');
  searchDrawer.classList.toggle("search-active");
}


function closeBag() {
  const bagDrawer = document.querySelector('.bag-slide');
  const modalDark = document.querySelector('.modal-dark');
bagDrawer.classList.toggle("bag-active");
modalDark.classList.toggle("page-mask");
}

function closeFilter() {
  const filterDrawer = document.querySelector('.mobile-filter');
  filterDrawer.classList.toggle("filter-active");
}

