// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//    ./Images/Hero_Section1.jpg
//    ./Images/dbms-full-form.png
//    ./Images/Hero_Section3.jpg
//    ./Images/Hereo_Section4.jpg
//    ./Images/Hero_Section7.jpg
//    ./Images/Hero_Section5.jpg
//    ./Images/Hero_Section6.jpg
//    ./Images/dbms-slide2_1.png
//    ./Images/Hero_Section2.jpg
//    ./Images/hero_section8.jpeg
//    ./Images/T_Logo_img.jpg
//  `;
//   return data.split("\n")[index];
// }

// const frameCount = 110;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: 0.15,
//     trigger: `#page>canvas`,
//     //   set start end according to preference
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }
// ScrollTrigger.create({

//   trigger: "// object you want to pin it.",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
// //   set start end according to preference
//   start: `top top`,
//   end: `600% top`,
// });