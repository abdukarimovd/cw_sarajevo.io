// =======================  BURGER MENU ============================>
const burgerBtn = document.querySelector('.header .toggler');
const headerMenu = document.querySelector('.header .menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
})



// ==================== ACTIVE LINK SECTIONS =======================>
const menuItems = document.querySelectorAll('.menu-link')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(item => item.classList.remove('active'))
        item.classList.add('active')
    })
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    menuItems.forEach(item => {
        const sectionLink = item.getAttribute('href')
        const section = document.querySelector(sectionLink)
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionBottom = sectionTop + sectionHeight
        if (scroll >= sectionTop && scroll <= sectionBottom) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
})


// ========================== TABS ACTIVE ============================>
const tabBtn = document.querySelectorAll('.tab-nav .btn')
const tabContent = document.querySelectorAll('.tab-content .content')

const removeTabActives = () => {
    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove('active')
        tabContent[i].classList.remove('active')
    }
}

tabBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        removeTabActives()
        btn.classList.add('active')
        tabContent[index].classList.add('active')
    })
})


// ======================= SCROLL UP = ==============================>
window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

// ===================  SCROLL REVEAL ANIMATION =======================>
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })

// Scroll Main ====>
// sr.reveal('.title', {})
// sr.reveal('.subtitle', {
//     delay: 200
// })
// sr.reveal('.text', {
//     delay: 400
// })
// sr.reveal('.socials', {
//     interval: 200
// })

// Scroll Features ====>
// sr.reveal('.icon', {})

// Scroll Work ====>
// sr.reveal('.item', {})




// ==================== TWEEN MAX ANIMATION =======================>
// TweenMax.staggerFrom('.menu-item', 2, {
//     opacity: 0,
//     y: '60',
//     ease: Expo.easeInOut,
//     delay: 1.2
// }, 0.5)