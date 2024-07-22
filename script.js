// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onload = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
//let media = document.querySelector(".media-icons");//
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let mediaIcons = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) { 
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

/***product slider */

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});



/**---blog page*/

var MenuItems = document.getElementById('MenuItems');
    MenuItems.style.maxHeight = '0px';
  
    function menutoggle() {
      if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }
    var ProductImg = document.getElementById('ProductImg');
    var SmallImg = document.getElementsByClassName('small-img');
    SmallImg[0].onclick = function() {
      ProductImg.src = SmallImg[0].src;
    };
    SmallImg[1].onclick = function() {
      ProductImg.src = SmallImg[1].src;
    };
    SmallImg[2].onclick = function() {
      ProductImg.src = SmallImg[2].src;
    };
    SmallImg[3].onclick = function() {
      ProductImg.src = SmallImg[3].src;
    };
/**---blog page*/


const navItems = document.querySelectorAll('.side-nav__item');
const removeClasses = () => {
  navItems.forEach(eachItem => {
    eachItem.classList.remove('side-nav__item-active');
  });
}

navItems.forEach(eachItem => {
  eachItem.addEventListener('click', function() {
      removeClasses();
    eachItem.classList.add('side-nav__item-active');
  });
});

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Expense',
      data: [11, 3, 14, 7, 4, 15, 7, 9, 15, 13, 7, 14],
      borderWidth: 1,
      borderRadius: 30,
      barThickness: 12,
      backgroundColor: [
        'rgba(114, 92, 255, 1)'
      ],
      borderColor: [
        'rgba(114, 92, 255, 1)'
      ],
      hoverBackgroundColor: [
        'rgba(28, 30, 35, 1)'
      ],
      hoverBorderColor: [
        'rgba(28, 30, 35, 1)'
      ],
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return '$' + value + 'k';
            },
            stepSize: 5,
        },
      },
      x: {
        grid: {
            display: false
        }
      }
    },
    plugins: {
        legend: {
          display:false,
          labels: {
            font: {
                size: 12,
                family: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 18,
                weight: 600
            }
          }
        }
    }
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Overall Spending',
      data: [8000, 2130, 1510, 2245, 4385, 1000],
      borderRadius: 5,
      cutout: 80,
      backgroundColor: [
        'rgb(235, 124, 166)',
        'rgb(255, 172, 200)',
        'rgb(204, 111, 248)',
        'rgb(124, 92, 252)',
        'rgb(92, 175, 252)',
        'rgb(161, 169, 254)'
      ],
      hoverOffset: 4,
      spacing: 8
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

/*--------profile.html--------*/

var ProductImg = document.getElementById('ProductImg');
    var SmallImg = document.getElementsByClassName('small-img');
    SmallImg[0].onclick = function() {
      ProductImg.src = SmallImg[0].src;
    };
    SmallImg[1].onclick = function() {
      ProductImg.src = SmallImg[1].src;
    };
    SmallImg[2].onclick = function() {
      ProductImg.src = SmallImg[2].src;
    };
    SmallImg[3].onclick = function() {
      ProductImg.src = SmallImg[3].src;
    };

    var MenuItems = document.getElementById('MenuItems');
    MenuItems.style.maxHeight = '0px';
  
    function menutoggle() {
      if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }