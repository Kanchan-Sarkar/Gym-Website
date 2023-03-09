/*=============== SHOW MENU =========================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===============   MENU SHOW  =========================*/

/*=============== Validate if constant exists =========================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===============   MENU HIDDEN  =========================*/
 if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }

/*===============  REMOVE MENU MOBILE  =========================*/
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER =========================*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER =========================*/

/*let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*============================ NEW SWIPER ===============================================*/
/*let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3, 
        },
        1024: {
          slidesPerView: 4,  
        },
    },
});*/

/*=============== SCROLL SECTIONS ACTIVE LINK =========================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[herf*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop * sectionHeight){
                sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP =========================*/
const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewpoint height, add the show-scroll class to the a tag with the scrollup
            this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





/*=============== CALCULATE JS =========================*/

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')
      
const calculateBmi = (e) => {
    e.preventDefault()

    //Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        //ADD and Rmove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //Show message
        calculateMessage.textContent = 'Fill in the Height and Weight!'

        //Rmove message three seconds
        setTimeout(() =>{
            calculateMessage.textContent = ' '
        }, 3000)
    } else{
        //BMI Formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

        //Show your health status
        if(bmi < 18.5){
           // Add color and display message 
           calculateMessage.classList.add('color-green')
           calculateMessage.textContent = `Your BMI is  ${bmi}  and  you are Skinny..`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
           calculateMessage.textContent = `Your BMI is  ${bmi}  and  you are Healthy..`
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is  ${bmi}  and  you are Overweight..`
        }

        //TO Clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        //Remove message four seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit' , calculateBmi)

/*=============================== EMAIL JS ==========================================*/
const contactForm = document.getElementById('contact-form'),
      constactMessage= document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user');


const sendEmail = (e) =>{
    e.preventDefault()


    //Check if the field has a value
    if(contactUser.value === ''){
        //ADD and REMOVE color
        constactMessage.classList.remove('color-green')
        constactMessage.classList.add('color-red')
        
        //Show message
        constactMessage.textContent = 'You must enter your email!'

        //Remove message three seconds
        setTimeout(()  =>{
            constactMessage.textContent = ''
        }, 3000)
    } else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_2azsdic','template_2l2tnk4','#contact-form','MfSJGd5YHUipGTRVD')
            .then(()=>{
                //Show message and add color
                constactMessage.classList.add('color-green')
                constactMessage.textContent = 'You are registered successfully.'

                //Remove message after three seconds:
                setTimeout(() =>{
                    constactMessage.textContent = ''
                }, 3000)

            }, (error) =>{
                // Mail sending error
                alert('OOPS! SOMETHING HAS FAILED......', error)

            })
        
        // To Clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)