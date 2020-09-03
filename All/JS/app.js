//LOADER

let loader = document.getElementById("loader");
let load_img = document.getElementById("load_img");
let load_path = document.getElementById("load_path");
let load_path2 = document.getElementById("load_path2");

let path_length = load_path.getTotalLength();
let path_length2 = load_path2.getTotalLength();
//load_path.style.strokeDashoffset = "0";
//load_path.classList.add("loading");
console.log(path_length);
console.log(path_length2);

setTimeout(()=>{load_img.style.fill="black";}, 3000);
setTimeout(()=>{loader.classList.add("loaded")}, 5000);

//MODE NUIT PREFER COLOR DARK
/*const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersDark){
    console.log("User prefers a dark interface");
    document.getElementById("themeLogo").checked = true;
    document.getElementById("themeLogo").checked = false;
}*/
//CURSOR

const cursor = document.querySelector(".cursor");
const cursor_inner = document.querySelector(".cursor-inner");
const cursor_outer = document.querySelector(".cursor-outer");
const btn_sendform = document.getElementById("btn_sendform");
const links = document.getElementsByTagName("a");

document.addEventListener("mousemove", (e) => {
  cursor_inner.setAttribute(
    "style",
    //"top:" + (e.pageY - 16) + "px; left:" + (e.pageX - 16) + "px;"
    "transform: translate(" + (e.clientX) + "px, " + (e.clientY) + "px);"
  );
  cursor_outer.setAttribute(
    "style",
    //"top:" + (e.pageY - 16) + "px; left:" + (e.pageX - 16) + "px;"
    "transform: translate(" + (e.clientX) + "px, " + (e.clientY) + "px);"
  );
});

document.addEventListener("click", () => {
  cursor_inner.classList.add("expand");

  setTimeout(() => {
    cursor_inner.classList.remove("expand");
  }, 500);
});
for (var l = 0; l < links.length; l++) {
  links[l].addEventListener("mouseover", () => {
    cursor_inner.classList.add("cursor-over");
    cursor_outer.classList.add("cursor-over");
  });
  links[l].addEventListener("click", () => {
    cursor_inner.classList.remove("expand");
    cursor_inner.classList.add("expand_links");
  
    setTimeout(() => {
      cursor_inner.classList.remove("expand_links");
    }, 500);
  });
}
for (var l = 0; l < links.length; l++) {
  links[l].addEventListener("mouseout", () => {
    cursor_inner.classList.remove("cursor-over");
    cursor_outer.classList.remove("cursor-over");
  });
}
btn_sendform.addEventListener("mouseover", () => {
  cursor_inner.classList.add("cursor-over");
  cursor_outer.classList.add("cursor-over");
});
btn_sendform.addEventListener("mouseout", () => {
  cursor_inner.classList.remove("cursor-over");
  cursor_outer.classList.remove("cursor-over");
});
/*
function shane_tm_cursor(){
  "use strict";

var myCursor	= document.querySelectorAll('.cursor');

if(myCursor.length){
  if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
      let n, i = 0,
          o = !1;
      window.onmousemove = function (s) {
          o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
      }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
      }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
          $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
      }), e.style.visibility = "visible", t.style.visibility = "visible"
  }
}
};*/

//Dark mode
const html = document.getElementsByTagName("html")[0];
const themeSwicth = document.getElementById("themeLogo");
themeSwicth.addEventListener("click", () => {
  html.classList.toggle("nuit");
});

//Appear/Disappear

/*const about_section = document.getElementById("about_section");
const nav_about = document.getElementById("nav_about");

const home_section = document.getElementById("home_section");
const nav_home = document.getElementById("nav_home");

const works_section = document.getElementById("works_section");
const nav_works = document.getElementById("nav_works");

const resume_section = document.getElementById("resume_section");
const nav_resume = document.getElementById("nav_resume");

const contact_section = document.getElementById("contact_section");
const nav_contact = document.getElementById("nav_contact");

nav_home.addEventListener("click", function () {

  home_section.classList.replace("disappear", "appear");

  about_section.classList.replace("appear", "disappear");
  works_section.classList.replace("appear", "disappear");
  resume_section.classList.replace("appear", "disappear");
  contact_section.classList.replace("appear", "disappear");
  

  setTimeout(() =>{ 
  home_section.classList.replace("display_none", "display_unset");
  about_section.classList.replace("display_unset", "display_none");
  works_section.classList.replace("display_unset", "display_none");
  resume_section.classList.replace("display_unset", "display_none");
  contact_section.classList.replace("display_unset", "display_none");}, 500)
  
});
nav_about.addEventListener("click", function () {
  about_section.classList.replace("disappear", "appear");

  home_section.classList.replace("appear", "disappear");
  works_section.classList.replace("appear", "disappear");
  resume_section.classList.replace("appear", "disappear");
  contact_section.classList.replace("appear", "disappear");

  setTimeout(() =>{ 
  about_section.classList.replace("display_none", "display_unset");
  home_section.classList.replace("display_unset", "display_none");
  works_section.classList.replace("display_unset", "display_none");
  resume_section.classList.replace("display_unset", "display_none");
  contact_section.classList.replace("display_unset", "display_none")
  ;}, 500)
});
nav_resume.addEventListener("click", function () {
  resume_section.classList.replace("disappear", "appear");

  home_section.classList.replace("appear", "disappear");
  works_section.classList.replace("appear", "disappear");
  about_section.classList.replace("appear", "disappear");
  contact_section.classList.replace("appear", "disappear");

  setTimeout(() =>{
  resume_section.classList.replace("display_none", "display_unset");
  about_section.classList.replace("display_unset", "display_none");
  works_section.classList.replace("display_unset", "display_none");
  home_section.classList.replace("display_unset", "display_none");
  contact_section.classList.replace("display_unset", "display_none");}, 500)
});
nav_works.addEventListener("click", function () {
  works_section.classList.replace("disappear", "appear");

  home_section.classList.replace("appear", "disappear");
  resume_section.classList.replace("appear", "disappear");
  about_section.classList.replace("appear", "disappear");
  contact_section.classList.replace("appear", "disappear");

  setTimeout(() =>{
  works_section.classList.replace("display_none", "display_unset");
  about_section.classList.replace("display_unset", "display_none");
  resume_section.classList.replace("display_unset", "display_none");
  home_section.classList.replace("display_unset", "display_none");
  contact_section.classList.replace("display_unset", "display_none");}, 500)
});
nav_contact.addEventListener("click", function () {
  contact_section.classList.replace("disappear", "appear");

  home_section.classList.replace("appear", "disappear");
  works_section.classList.replace("appear", "disappear");
  about_section.classList.replace("appear", "disappear");
  resume_section.classList.replace("appear", "disappear");

  setTimeout(() =>{
  contact_section.classList.replace("display_none", "display_unset");
  about_section.classList.replace("display_unset", "display_none");
  works_section.classList.replace("display_unset", "display_none");
  home_section.classList.replace("display_unset", "display_none");
  resume_section.classList.replace("display_unset", "display_none");}, 500)
});
nav_home.addEventListener("click", function () {
    nav_home.classList.add("active");
    nav_about.classList.remove("active");
    nav_resume.classList.remove("active");
    nav_works.classList.remove("active");
    nav_contact.classList.remove("active");
  });
nav_about.addEventListener("click", function () {
  nav_about.classList.add("active");
  nav_home.classList.remove("active");
  nav_resume.classList.remove("active");
  nav_works.classList.remove("active");
  nav_contact.classList.remove("active");
});
nav_resume.addEventListener("click", function () {
  nav_resume.classList.add("active");
  nav_home.classList.remove("active");
  nav_about.classList.remove("active");
  nav_works.classList.remove("active");
  nav_contact.classList.remove("active");
});
nav_works.addEventListener("click", function () {
  nav_works.classList.add("active");
  nav_home.classList.remove("active");
  nav_about.classList.remove("active");
  nav_resume.classList.remove("active");
  nav_contact.classList.remove("active");
});
nav_contact.addEventListener("click", function () {
  nav_contact.classList.add("active");
  nav_home.classList.remove("active");
  nav_about.classList.remove("active");
  nav_works.classList.remove("active");
  nav_resume.classList.remove("active");
});*/
let sections = document.getElementsByTagName("section");
let navigation = document.querySelectorAll("header a");

for (let i = 0; i < sections.length; i++) {
  navigation[i].addEventListener("click", function () {
    sections[i].classList.replace("disappear", "appear");
    navigation[i].classList.add("active");
    setTimeout(() => {
      sections[i].classList.replace("display_none", "display_unset");
    }, 500);
    
    for (let j = 0; j < sections.length; j++) {
      if (j != i) {
        sections[j].classList.replace("appear", "disappear");
        navigation[j].classList.remove("active");
        setTimeout(() => {
          sections[j].classList.replace("display_unset", "display_none");
        }, 500);
      }
    }
  });
}
//Read more details

let details = document.getElementsByClassName("details");
let read_more = document.getElementsByClassName("read_more");
let liste = document.querySelectorAll(".experiences li");

/*for( let i=0; i<read_more.length; i++){
  read_more[i].addEventListener("click", function(){
    
    if(getComputedStyle(details[i]).display != "block"){
      details[i].style.display = "block";
      for(var j=0; j<read_more.length;j++){
        if(j != i){
        details[j].style.display = "none";}
      }
    } 
    else {
      details[i].style.display = "none";
    }
  })
  }*/
for (let i = 0; i < read_more.length; i++) {
  read_more[i].addEventListener("click", function () {
    if (getComputedStyle(details[i]).height != "150px") {
      details[i].style.height = "150px";
      for (var j = 0; j < read_more.length; j++) {
        if (j != i) {
          details[j].style.height = "0";
        }
      }
    } else {
      details[i].style.height = "0";
    }
  });
}

//Scroll apparition

let progress_bar = document.getElementById("skills_line1");
let skills_line = document.getElementsByClassName("skills_line");
let porcent = document.getElementsByClassName("porcent");

let transition_delay;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > resume_section.offsetHeight / 5) {
    console.log(resume_section.offsetHeight);
    console.log(window.pageYOffset);
    for (i = 0; i < skills_line.length; i++) {
      let value = skills_line[i].getAttribute("value");
      skills_line[i].style.width = value + "%";
      transition_delay = 200 * i + "ms";
      skills_line[i].style.transitionDelay = transition_delay;
    }
  } else {
    transition_delay = "0ms";
    for (i = 0; i < skills_line.length; i++) {
      skills_line[i].style.transitionDelay = transition_delay;
      skills_line[i].style.width = "0%";
    }
  }
});

/*
  function loop_line (){
    for(i=0;i<skills_line.length;i++){
      let value = skills_line[i].getAttribute("value");
      skills_line[i].style.width=value + "%";
      transition_delay = 200*i + "ms";
      skills_line[i].style.transitionDelay=transition_delay;
      nbr_loop++;
      if(nbr_loop>0){
        window.removeEventListener('scroll',);
      };
      
    }
  }
  window.addEventListener('scroll',() => {
    if (window.pageYOffset > (resume_section.offsetHeight/5))
    {
      
      loop_line();
      console.log(nbr_loop);
    }
      
    else{
      transition_delay = "0ms";
      for(i=0;i<skills_line.length;i++){
        skills_line[i].style.transitionDelay=transition_delay;
        skills_line[i].style.width="0%";
      }
      
    });*/
