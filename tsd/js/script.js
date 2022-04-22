// JavaScript-File

// Constants used for the Hamburger-Menu-Manipulations to append classes at a particular place 
const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');
// Constant used to Manipulate the background-color of the header when scrolling
const header = document.querySelector('.header.container');

// Function to add the Class "active" to the classes ".hamburger" and the ul
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Function to close the Hamburger-Menu when clicking a Link
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// Function to change the background-color of the Header
document.addEventListener('scroll', () => {
  // initialize the Variable with the ScrollPosition of the Window
  var scroll_position = window.scrollY;
  if (scroll_position > 595) {
    header.style.backgroundColor = "#d3d3d3";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Function to update the current Year in the Footer automatically
let date = new Date();
let year = date.getFullYear();
document.getElementById('currentYear').innerHTML = year;