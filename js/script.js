window.addEventListener('scroll', ()=>{
  navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});


function toggleMenu(){
  navbar = document.querySelector('nav');
  menuList = document.querySelector('ul');
  toggle = document.querySelector('.toggle');

  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
  menuList.classList.toggle('active');
}
