/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */



document.addEventListener("DOMContentLoaded", function () {
    var prevScrollpos = window.pageYOffset;
    
    //memanggil pesanan.html
    

    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2700, // Sesuaikan nilai sesuai kebutuhan Anda
        arrows: false,
        fade: true,
        infinite: true,
        pauseOnHover: false // Tambahkan opsi ini
      });
      

    window.addEventListener('scroll', function () {
        var currentScrollPos = window.pageYOffset;

        var parallaxElements = document.querySelectorAll(".parallax-image");
        parallaxElements.forEach(function (element) {
          var distanceFromTop = element.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;

          if (distanceFromTop < screenHeight * 0.75) {
            element.classList.add("parallax-show");
          } else {
            element.classList.remove("parallax-show");
          }

        });

        var parallaxElements2 = document.querySelectorAll(".parallax-container");
        parallaxElements2.forEach(function (element) {
            var distanceFromTop = element.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
  
            if (distanceFromTop < screenHeight * 0.75) {
              element.classList.add("parallax-show2");
            } else {
              element.classList.remove("parallax-show2");
            }
  
          });

        var parallaxElements3 = document.querySelectorAll(".parallax-bawah");
        parallaxElements3.forEach(function (element) {
            var distanceFromTop = element.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
  
            if (distanceFromTop < screenHeight * 1) {
              element.classList.add("parallax-show3");
            } else {
              element.classList.remove("parallax-show3");
            }
  
          });

        if (prevScrollpos > currentScrollPos) {
            // Scrolling up
            document.querySelector('.scrolling-navbar').classList.remove('hidden');
        } else {
            // Scrolling down
            document.querySelector('.scrolling-navbar').classList.add('hidden');
        }

        prevScrollpos = currentScrollPos;
    });

    var selectElement = document.getElementById('floatingSelect');
    selectElement.addEventListener('change', handleSelectChange);
    
    window.onscroll = handleScroll;
    generateCards();


    function handleSelectChange() {}

    function handleSortByChange() {
        var selectedSortValue = sortBySelectElement.value;
        saveSortByToLocalStorage(selectedSortValue);
        sortCards(selectedSortValue);
    }


    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        const bannerImage = document.querySelector(".banner img");
        bannerImage.style.transform = `translateY(${-currentScrollPos * 0.7}px)`;
        const bannerImage2 = document.querySelector(".banner2 img");
        bannerImage2.style.transform = `translateY(${-currentScrollPos * 0.7}px)`;
        const bannerImage3 = document.querySelector(".banner3 img");
        bannerImage3.style.transform = `translateY(${-currentScrollPos * 0.7}px)`;

        const bannerText = document.querySelector(".banner-text h1");
        bannerText.style.transform = `translateX(${currentScrollPos * 0.7}px)`;

        const bannerText2 = document.querySelector(".banner-text p");
        bannerText2.style.transform = `translateX(${currentScrollPos * 0.7}px)`;

        const bannerText3 = document.querySelector(".banner-text2 p");
        bannerText3.style.transform = `translateX(${-currentScrollPos * 0.7}px)`;
        
        const bannerText4 = document.querySelector(".banner-text3 p");
        bannerText4.style.transform = `translateX(${-currentScrollPos * 0.7}px)`;



        const header = document.querySelector("header");
        header.classList.toggle("inactive", prevScrollpos <= currentScrollPos);

        prevScrollpos = currentScrollPos;
    }


    
    
});


