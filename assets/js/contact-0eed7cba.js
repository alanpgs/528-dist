import{t as b,B as h,a as o,d as q}from"./app-018537e2.js";import{p as w,e as k}from"./animationControls-26502635.js";import{i as E}from"./in-view.es-4f7b8448.js";import{t as g}from"./index.es-bd5baa57.js";import{s as A}from"./index.es-9bdd86a3.js";b();h.style.overflow="hidden";window.addEventListener("load",u=>{document.readyState==="complete"&&(g(w,{defaultOptions:{ease:"ease-in-out"},duration:1.5}),setTimeout(()=>{h.style.overflow="initial",A(g(k),{target:document.querySelector(".section_page_title"),offset:["start start","end start"]}),E(".contact_form_section",r=>{o(".contact_form",{transform:["scale(1)"],opacity:[1]},{duration:1.5})},{amount:.5})},2e3))});const D=u=>{const r=document.querySelector(u),d=r.querySelectorAll(".form_item"),I=r.querySelector(".form_items_holder"),c=r.querySelector(".inner_"),y=r.querySelectorAll(["input","textarea"]),v=r.querySelector(".no_ span"),m=r.querySelector(".progress_line"),_=r.querySelector(".submit_btn"),l=r.querySelector("[data-back]");let n,s=[];d.forEach(t=>{s.push(t.offsetHeight)});const a=Math.max(...s);I.style.height=`${a}px`,c.style.height=`${a*s.length}px`,d.forEach(t=>{t.style.height=`${Math.max(...s)}px`});const f=m.getTotalLength(),S=f/s.length;let e={currentIndex:0,nextIndex:0,previousIndex:0,nextTransform:0,previousTransform:0,progressNumber:0};const p=t=>{e={...e,currentIndex:e.currentIndex<=n.length-1?t:t<0?0:n.length},e={...e,nextIndex:e.currentIndex<n.length-1?e.currentIndex+1:n.length-1},e={...e,previousIndex:e.currentIndex==0?0:e.currentIndex==1?1:e.currentIndex},e={...e,nextTransform:e.nextIndex*a},e={...e,previousTransform:e.previousIndex*a},e={...e,progressNumber:(e.currentIndex+1)*25}},x=()=>{v.innerText=e.progressNumber,o(m,{strokeDashoffset:`${f-S*e.nextIndex}px`},{duration:.8})};y.forEach((t,L,T)=>{n=T,t.addEventListener("keydown",i=>{i.key=="Tab"&&i.preventDefault(),i.key==="Enter"&&(i.preventDefault(),p(L),e.currentIndex<n.length&&(x(),o(c,{transform:`translateY(-${e.nextTransform}px)`},{duration:.8}),e.progressNumber==100&&(o(_,{transform:"scale(1)"},{duration:.8}),e={...e,currentIndex:n.length-1},console.log(e.currentIndex))),e.nextIndex>=1?o(l,{transform:"scale(1)"},{duration:.6}):o(l,{transform:"scale(0)"},{duration:.6}))})}),l.addEventListener("click",t=>{t.preventDefault(),e.currentIndex>=0&&(o(c,{transform:`translateY(-${e.previousTransform}px)`},{duration:.8}),p(e.currentIndex-1),x())})};window.addEventListener("DOMContentLoaded",()=>{q()!="sm"&&D(".contact_form")});
