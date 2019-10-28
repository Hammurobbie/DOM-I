const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png");

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg");

let navItems = document.getElementsByTagName("a");
navItems[0].textContent = "Services";
navItems[1].textContent = "Product";
navItems[2].textContent = "Vision";
navItems[3].textContent = "Features";
navItems[4].textContent = "About";
navItems[5].textContent = "Contact";

let headerTxt = document.getElementsByTagName("h1");
headerTxt[0].innerHTML = "DOM <br> is <br> Awesome";

let button = document.getElementsByTagName("button");
button[0].textContent = "Get Started";

let contentHeader = document.getElementsByTagName("h4");
contentHeader[0].innerHTML = "Features";
contentHeader[1].innerHTML = "About";
contentHeader[2].innerHTML = "Services";
contentHeader[3].innerHTML = "Product";
contentHeader[4].innerHTML = "Vision";
contentHeader[5].innerHTML = "Contact";

let bodyText = document.getElementsByTagName("p");
bodyText[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bodyText[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bodyText[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bodyText[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bodyText[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bodyText[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
bodyText[6].textContent = "1 (888) 888-8888";
bodyText[7].textContent = "sales@greatidea.io";
bodyText[8].textContent = "Copyright Great Idea! 2018";

let allNav = document.querySelectorAll("a");
allNav.forEach(item => (item.style.color = "green"));

let newA = document.createElement("a");
newA.textContent = "Clients";
newA.style.color = "green";

let newA2 = document.createElement("a");
newA2.textContent = "Sign Up";
newA2.style.color = "green";

let newNav = document.querySelector("nav");
newNav.append(newA2);
newNav.prepend(newA);

newNav.style.color = "green";

button[0].style.color = "green";

bodyText[8].style.color = "green";

contentHeader[0].style.color = "green";
contentHeader[1].style.color = "green";
contentHeader[2].style.color = "green";
contentHeader[3].style.color = "green";
contentHeader[4].style.color = "green";
contentHeader[5].style.color = "green";

let newColor = document.querySelector("body");
newColor.style.backgroundColor = "mintcream";
