// create the dynamic nav based on the navItems array
const nav = document.getElementById('main');
const navLinks = nav.querySelector('#nav-links');
const markup = `${navItems.map(listItem => `<li><a href="${listItem.link}">${listItem.label}</a></li>`).join('')}`;
navLinks.innerHTML = markup;

// const logo = document.querySelector('#main ul li');
// logo.classList.add('logo');
// logo.firstChild.innerHTML = '<img src="img/logo.svg" />';

const logo = document.querySelector('.logo');
logo.addEventListener('click',function(){
document.body.classList.toggle('showmenu');
event.preventDefault();
})
// sticky nav
let topOfNav = nav.offsetTop;

window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav')
  }
}

// hashes
const siteWrap = document.querySelector('.site-wrap');

window.onload = function(){
 let newContent;
 if(!window.location.hash){
   console.log('bye')
   newContent = navItems.filter(
     navItem => navItem.link == '#watchlist'
   )
 } else {
   newContent = navItems.filter(
     navItem => navItem.link == window.location.hash
   )
 }
 renderPage(newContent)
 
}


window.onhashchange = function() {
 let newloc = window.location.hash;
 let newContent = navItems.filter(
   navItem => navItem.link == newloc
 )
 renderPage(newContent)
}

function renderPage(newContent){
 siteWrap.innerHTML = `
 <h2>${newContent[0].header}</h2>
 ${newContent[0].content}
 `
}

