gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

let box=document.querySelector('.box');
let circle=document.querySelector('.circle');
let triangle=document.querySelector('.triangle');
let div1=document.querySelector('.righttop1');
let div2=document.querySelector('.righttop2');
let div3=document.querySelector('.rightbottom');

let divblue=document.querySelector('.topleft');

divblue.addEventListener('mouseenter',function(){
  circle.style.backgroundColor=' rgb(230, 129, 126)';
  box.style.backgroundColor=' rgb(201, 213, 219)';
  triangle.style.borderBottomColor='  rgb(212, 230, 136)';
  console.log('son of a bitch im in')
  })
  divblue.addEventListener('mouseout',function(){
    circle.style.backgroundColor='rgb(170, 156, 233)';
    box.style.backgroundColor='rgb(170, 156, 233)';
    triangle.style.borderBottomColor='rgb(170, 156, 233)';
    console.log('son of a bitch im i out')
    })
// box.style.backgroundColor='red';
// box.style.transform='scale(200%)';

div1.addEventListener('mouseenter',function(){
box.style.height="7vmax";
box.style.width="7vmax";
circle.style.height="2.5vmax";
circle.style.width="2.5vmax";
triangle.style.borderLeftWidth="1.2vmax";
triangle.style.borderRightWidth="1.2vmax";
triangle.style.borderBottomWidth="2.4vmax";
box.style.backgroundColor=' rgb(201, 213, 219)';
console.log('son of a bitch im in')
})
div1.addEventListener('mouseout',function(){
  box.style.height="5vmax";
  box.style.width="5vmax";
  circle.style.height="5vmax";
  circle.style.width="5vmax";
triangle.style.borderLeftWidth="2.5vmax";
triangle.style.borderRightWidth="2.5vmax";
triangle.style.borderBottomWidth="5vmax";
  box.style.backgroundColor='rgb(170, 156, 233)';
  console.log('son of a bitch im i out')
  })

  
div2.addEventListener('mouseenter',function(){
  circle.style.height="7vmax";
  circle.style.width="7vmax";
  box.style.height="2.5vmax";
  box.style.width="2.5vmax";
  triangle.style.borderLeftWidth="1.2vmax";
  triangle.style.borderRightWidth="1.2vmax";
  triangle.style.borderBottomWidth="2.4vmax";
  circle.style.backgroundColor=' rgb(230, 129, 126)';
  console.log('son of a bitch im in')
  })
  div2.addEventListener('mouseout',function(){
    box.style.height="5vmax";
    box.style.width="5vmax";
    circle.style.height="5vmax";
    circle.style.width="5vmax";
  triangle.style.borderLeftWidth="2.5vmax";
  triangle.style.borderRightWidth="2.5vmax";
  triangle.style.borderBottomWidth="5vmax";
    circle.style.backgroundColor='rgb(170, 156, 233)';
    console.log('son of a bitch im i out')
    })
    
div3.addEventListener('mouseenter',function(){
  box.style.height="2.5vmax";
  box.style.width="2.5vmax";
  circle.style.height="2.5vmax";
  circle.style.width="2.5vmax";
  triangle.style.borderLeftWidth="4vmax";
  triangle.style.borderRightWidth="4vmax";
  triangle.style.borderBottomWidth="8vmax";
  triangle.style.borderBottomColor='  rgb(212, 230, 136)';
  console.log('son of a bitch im in')
  })
  div3.addEventListener('mouseout',function(){
    box.style.height="5vmax";
    box.style.width="5vmax";
    circle.style.height="5vmax";
    circle.style.width="5vmax";
  triangle.style.borderLeftWidth="2.5vmax";
  triangle.style.borderRightWidth="2.5vmax";
  triangle.style.borderBottomWidth="5vmax";
  triangle.style.borderBottomColor='rgb(170, 156, 233)';
    console.log('son of a bitch im i out')
    })


  gsap.to('.topheading',{
    opacity:0,
    y:150,
    scrollTrigger: {
      trigger:'.topdiv',
      scroller:'#main',
      start:'top 40%',//element position viewport position
      end:'top 12%',
      // markers:true,
      scrub:true,
    }
  }
  )


gsap.to('.topleft2 , .box , .triangle',{
  rotate:360,
  duration:8,
  repeat:-1,
  ease: Power0.easeNone
});

gsap.to('.mutual1 , .mutual2 , .mutual3 ,.mutual4,.mutual5',{
  x:-5000,
  duration:30,
  repeat:-1,
  ease: Power0.easeNone
});


gsap.to('.bigleft1',{
  x:25,
  scrollTrigger: {
    trigger:'.bigleft1',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)
gsap.to('.bigright1',{
  x:-25,
  scrollTrigger: {
    trigger:'.bigleft1',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)

gsap.to('.bigleft2',{
  x:25,
  scrollTrigger: {
    trigger:'.bigleft2',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)
gsap.to('.bigright2',{
  x:-25,
  scrollTrigger: {
    trigger:'.bigleft2',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)

gsap.to('.bigleft3',{
  x:25,
  scrollTrigger: {
    trigger:'.bigleft3',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)
gsap.to('.bigright3',{
  x:-25,
  scrollTrigger: {
    trigger:'.bigleft3',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)

gsap.to('.bigleft4',{
  x:25,
  scrollTrigger: {
    trigger:'.bigleft4',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)
gsap.to('.bigright4',{
  x:-25,
  scrollTrigger: {
    trigger:'.bigleft4',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)



gsap.to('.circle1',{
  x:-300,
  scrollTrigger: {
    trigger:'.div4',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'bottom 30%',
    // markers:true,
    scrub:true,
  }
}
)
gsap.to('.circle2',{
  x:300,
  scrollTrigger: {
    trigger:'.div4',
    scroller:'#main',
    start:'top 80%',//element position viewport position
    end:'center 30%',
    // markers:true,
    scrub:true,
  }
}
)
