
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    $(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up  
$(window).resize(function(){
    if ($(window).width() >= 980){  

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

        // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
        // do something here
    }   
});  
  
  

// document ready  
});
    
    // // Dropdown on mouse hover
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";
    
    // $(window).on("load resize", function() {
    //     if (this.matchMedia("(min-width: 992px)").matches) {
    //         $dropdown.hover(
    //         function() {
    //             const $this = $(this);
    //             $this.addClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "true");
    //             $this.find($dropdownMenu).addClass(showClass);
    //         },
    //         function() {
    //             const $this = $(this);
    //             $this.removeClass(showClass);
    //             $this.find($dropdownToggle).attr("aria-expanded", "false");
    //             $this.find($dropdownMenu).removeClass(showClass);
    //         }
    //         );
    //     } else {
    //         $dropdown.off("mouseenter mouseleave");
    //     }
    // });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

// window.onload = function(){
//   var elm = document.querySelector('#progress');
//   setInterval(function(){
//     if(!elm.innerHTML.match(/90%/gi)){
//       elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
//     } else {
//       clearInterval();
//     }
//   }, 18)
// }
// slider 
$('#carousel-1').carousel({
      interval: 4000,
      wrap: true,
      keyboard: true
 });


let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===1000)
            {
                clearInterval(counts);
            }
        }



        