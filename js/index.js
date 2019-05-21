const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA section

let headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let ctaH1 = document.querySelector('div.cta-text h1');
ctaH1.innerText = siteContent['cta']['h1'];

let ctaButton1 = document.querySelector('div.cta-text button');
ctaButton1.innerText = siteContent['cta']['button'];

// Main Section

// Top Text content
let featuresH4 = document.querySelector('section.main-content div.top-content h4');
featuresH4.innerText = siteContent['main-content']['features-h4'];

let featuresP = document.querySelector('section.main-content div.top-content p');
featuresP.innerText = siteContent['main-content']['features-content'];

let aboutH4 = document.querySelector('section.main-content div.text-content:nth-child(2) h4');
aboutH4.innerText = siteContent['main-content']['about-h4'];

let aboutP = document.querySelector('section.main-content div.text-content:nth-child(2) p');
aboutP.innerText = siteContent['main-content']['about-content'];

// Middle Image
let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Text Content
let servicesH4 = document.querySelector('div.bottom-content div.text-content:nth-child(1) h4');
servicesH4.innerText = siteContent['main-content']['services-h4'];

let servicesP = document.querySelector('div.bottom-content div.text-content:nth-child(1) p');
servicesP.innerText = siteContent['main-content']['services-content'];

let productH4 = document.querySelector('div.bottom-content div.text-content:nth-child(2) h4');
productH4.innerText = siteContent['main-content']['product-h4'];

let productP = document.querySelector('div.bottom-content div.text-content:nth-child(2) p');
productP.innerText = siteContent['main-content']['product-content'];

let visionH4 = document.querySelector('div.bottom-content div.text-content:nth-child(3) h4');
visionH4.innerText = siteContent['main-content']['vision-h4'];

let visionP = document.querySelector('div.bottom-content div.text-content:nth-child(3) p');
visionP.innerText = siteContent['main-content']['vision-content'];

// End of Main Content

// Contact
let contactH4 = document.querySelector('section.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

let address = document.querySelector('section.contact p:nth-child(2)');
address.innerText = siteContent['contact']['address'];

let phone = document.querySelector('section.contact p:nth-child(3)');
phone.innerText = siteContent['contact']['phone'];

let email = document.querySelector('section.contact p:nth-child(4)');
email.innerText = siteContent['contact']['email'];

// Footer

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];

// append and prepend links to navbar

const appendA = document.createElement('a');
appendA.innerText = "Portfolio";
document.querySelector('nav').appendChild(appendA);

const appendB = document.createElement('a');
appendB.innerText = "Home";
document.querySelector('nav').prepend(appendB);

// Change navigation text to green

// Navbar
const navItems = document.querySelectorAll('nav a');
navItems[0].innerText = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2'];
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];


navItems.forEach( item => item.style.color = 'green');

// random styles

ctaH1.style.fontFamily = "Times New Roman";

ctaButton1.style.borderRadius = "15px";

document.querySelector('.main-content').style.borderTop = "10px solid green";

ctaButton1.addEventListener('click', function(){
  document.querySelector('body').classList.toggle('toggler1');
  document.querySelector('#cta-img').classList.toggle('toggler2');
})