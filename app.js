


  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start:'top center',
      scrub: 1,
    }
  });
    t2.from(".project1-box1-left img", { x: -800, opacity:0, duration: 0.5})
    t2.from(".project1-box1-right ", { x: 800, opacity:0, duration: 0.5}, '-=0.5')

  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.project1-box1-right',
      start:'top',
      scrub: 1,
    }
  });
  
    t3.from(".wrapper3 h1", { x: -800, opacity:0, duration: 0.5})
    t3.from(".row1", { x: 800, opacity:0, duration: 0.5}, '-=0.5')

    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.row1',
        start:'top center',
        scrub: 1,
      }
    });
    
      t4.from(".row2", { x: -1400, opacity:0, duration: 0.5},)

      let t5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.row2',
          start:'top center',
          scrub: 1,
        }
      });
      
        t5.from(".row3", { x: 1400, opacity:0, duration: 0.5},)
  






    



let spinnerWrapper = document.querySelector('.spinner-wrapper');

 window.addEventListener('load', function(e) {
  spinnerWrapper.remove();
  document.querySelector(".nav-header").style.position = "fixed";
  
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section1'
  }
});

  tl.from(".section1_img", { x: 200, opacity:0, duration: 1.5})
  tl.from(".section1 h1", { x: -200, opacity:0, duration: 1.5}, '-=1.5')
  tl.from(".section1 h5", { x: -200, opacity:0, duration: 1.5}, '-=1.5')
  });

/*
let elements = document.getElementsByClassName("links");  

var myFunction = function() {
}


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });
   
*/

