import{b as a}from"./app-06efc518.js";import{f as n}from"./animationControls-b0b0004e.js";import{S as r,A as s}from"./swiper.min-0baa4990.js";import{t as i}from"./index.es-1804f794.js";import{i as p}from"./in-view.es-db269833.js";const l=()=>{const e=document.querySelector("[data-video]");let t=!1;if(e){const o=document.querySelector(".play_btn button");o.addEventListener("click",()=>{o.classList.toggle("active_"),t?e.pause():e.play(),t=!t})}},d=document.querySelector(".progress_wrapper span");window.addEventListener("DOMContentLoaded",()=>{new r(".works_swiper",{spaceBetween:30,modules:[s],autoplay:{delay:5e3},on:{progress:(e,t)=>{d.style.width=`${t*100}%`}}}),l(),i(n,{defaultOptions:{ease:"ease-in-out"},duration:2}),document.querySelectorAll(".animator_").forEach(e=>{p(e,t=>{a(e,{clipPath:["polygon(0 0, 100% 0, 100% 0, 0 0)","polygon(0 0, 100% 0, 100% 100%, 0 100%)"],transform:["translateY(25%)","translateY(0%)"]},{duration:1,delay:.4})},{margin:"75% 0px 0px 0px"})})});
