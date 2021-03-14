
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section1'
  }
});

  tl.from(".section1_img", { x: 200, opacity:0, duration: 1.5})
  tl.from(".section1 h1", { x: -200, opacity:0, duration: 1.5}, '-=1.5')
  tl.from(".section1 h5", { x: -200, opacity:0, duration: 1.5}, '-=1.5')

  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start:'top center',
      scrub: 1,
    }
  });
  
    t2.from(".project1-box1-left img", { x: -800, opacity:0, duration: 0.5})
    t2.from(".project1-box1-right ", { x: 800, opacity:0, duration: 0.5}, '-=0.5')



  



/*
let elements = document.getElementsByClassName("links");  

var myFunction = function() {
}


Array.from(elements).forEach(function(element) {
    element.addEventListener('click', myFunction);
  });
   
*/

