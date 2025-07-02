console.log("testing");


// gsap.to ==> initial to final
// gsap.from ==> final to initial


// gsap.to("#box1", {
//     x: 1200,
//     // y:500,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     scale: 0.8,
//     borderRadius: "50%"
// })

// gsap.from("#box2", {
//     x: 1200,
//     // y: 500,
//     duration: 2,
//     delay:1,
//     rotate:360,
// })


// to and from difference uncomment karky check kren 

// gsap.to("h1", {
// color: "red",
// })

// gsap.from("h1", {
// color: "red",
// })


// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     stagger: -1 // ak line ko ak ak kar kay chalana hai stagger ka ye kaam hai
// })



// gsap.to("#box3", {
//     x: 1200,
//     // y:500,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     scale: 0.8,
//     borderRadius: "50%",
//     repeat: -1, // inifinite chalega wrna apne jitna time chalana hai utna time bi chalega
//     yoyo: true

// })


// TimeLine 

const tl = gsap.timeline();


tl.from("#nav h2", {
    y: -20,
    opacity: 0,
    duration: 0.5
})
tl.from("#nav-links p", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 1
})

tl.to("#box4", {
    x: 1200,
    duration: 1
})
tl.to("#box5", {
    x: 1200,
    duration: 1
})
tl.to("#box6", {
    x: 1200,
    duration: 1
})