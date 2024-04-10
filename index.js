let poemEls = document.querySelectorAll('.poem > p');



// On Load of page
gsap.from('.poem > p', {
        duration: 20,
        y: 100,
        opacity: 0,
        stagger: 2,
        ease: 'power2.out'
});
