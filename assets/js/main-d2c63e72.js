import{B as r,d as o}from"./app-06efc518.js";import{h as f,a as g,b as h,c as u,d as T}from"./animationControls-b0b0004e.js";import{t}from"./index.es-1804f794.js";import{s as l}from"./index.es-7d7ab3f5.js";const w=()=>{t(f,{defaultOptions:{ease:"ease-in-out"}})},y=(n,i)=>{const a=document.querySelector("[data-client-slider]"),c=a.querySelectorAll(".c_item");let e;switch(o()){case"sm":e=n-50;break;case"md":e=n-20;break;case"lg":e=n;break}c.forEach((m,d,s)=>{m.style.cssText=`width: ${e}px; margin-right: ${d==s.length-1?0:i}px;`,a.style.cssText=`width: ${e*s.length+i*s.length-i}px`})},S=()=>{o()=="lg"?l(t(g,{defaultOptions:{ease:"ease-in-out"}})):(o()=="md"||o()=="sm")&&(l(t(h),{target:document.getElementById("landing"),offset:["start start","end start"]}),l(t(u),{target:document.getElementById("clients"),offset:[-1,1]}),l(t(T),{target:document.getElementById("contact"),offset:[-1,1]}))};r.style.overflow="hidden";o()=="lg"&&y(160,80);window.addEventListener("DOMContentLoaded",n=>{w(),setTimeout(()=>{r.style.overflow="initial",document.querySelector("main").style.backgroundColor="var(--bg-color)",S()},5e3)});window.onunload=()=>{window.scrollTo(0,0)};
