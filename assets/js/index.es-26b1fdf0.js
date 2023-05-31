import{_ as A}from"./index.es-46c6547f.js";import{r as T,i as O,p as B,c as S,e as b,f as k,g as P,n as R}from"./app-c8392509.js";function _(e,i){return i?e*(1e3/i):0}const p=new WeakMap;let d;function I(e,i){if(i){const{inlineSize:t,blockSize:s}=i[0];return{width:t,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function M({target:e,contentRect:i,borderBoxSize:t}){var s;(s=p.get(e))===null||s===void 0||s.forEach(n=>{n({target:e,contentSize:i,get size(){return I(e,t)}})})}function F(e){e.forEach(M)}function N(){typeof ResizeObserver>"u"||(d=new ResizeObserver(F))}function D(e,i){d||N();const t=T(e);return t.forEach(s=>{let n=p.get(s);n||(n=new Set,p.set(s,n)),n.add(i),d==null||d.observe(s)}),()=>{t.forEach(s=>{const n=p.get(s);n==null||n.delete(i),n!=null&&n.size||d==null||d.unobserve(s)})}}const w=new Set;let v;function G(){v=()=>{const e={width:window.innerWidth,height:window.innerHeight},i={target:window,size:e,contentSize:e};w.forEach(t=>t(i))},window.addEventListener("resize",v)}function C(e){return w.add(e),v||G(),()=>{w.delete(e),!w.size&&v&&(v=void 0)}}function V(e,i){return O(e)?C(e):D(e,i)}const q=50,z=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),$=()=>({time:0,x:z(),y:z()}),j={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function x(e,i,t,s){const n=t[i],{length:r,position:o}=j[i],u=n.current,h=t.time;n.current=e["scroll"+o],n.scrollLength=e["scroll"+r]-e["client"+r],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=B(0,n.scrollLength,n.current);const l=s-h;n.velocity=l>q?0:_(n.current-u,l)}function J(e,i,t){x(e,"x",i,t),x(e,"y",i,t),i.time=t}function K(e,i){let t={x:0,y:0},s=e;for(;s&&s!==i;)if(s instanceof HTMLElement)t.x+=s.offsetLeft,t.y+=s.offsetTop,s=s.offsetParent;else if(s instanceof SVGGraphicsElement&&"getBBox"in s){const{top:n,left:r}=s.getBBox();for(t.x+=r,t.y+=n;s&&s.tagName!=="svg";)s=s.parentNode}return t}const Q={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},E={start:0,center:.5,end:1};function L(e,i,t=0){let s=0;if(E[e]!==void 0&&(e=E[e]),S(e)){const n=parseFloat(e);e.endsWith("px")?s=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?s=n/100*document.documentElement.clientWidth:e.endsWith("vh")?s=n/100*document.documentElement.clientHeight:e=n}return b(e)&&(s=i*e),t+s}const U=[0,0];function X(e,i,t,s){let n=Array.isArray(e)?e:U,r=0,o=0;return b(e)?n=[e,e]:S(e)&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,E[e]?e:"0"]),r=L(n[0],t,s),o=L(n[1],i),r-o}const Y={x:0,y:0};function Z(e,i,t){let{offset:s=Q.All}=t;const{target:n=e,axis:r="y"}=t,o=r==="y"?"height":"width",u=n!==e?K(n,e):Y,h=n===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:n.clientWidth,height:n.clientHeight},l={width:e.clientWidth,height:e.clientHeight};i[r].offset.length=0;let f=!i[r].interpolate;const a=s.length;for(let c=0;c<a;c++){const y=X(s[c],l[o],h[o],u[r]);!f&&y!==i[r].interpolatorOffsets[c]&&(f=!0),i[r].offset[c]=y}f&&(i[r].interpolate=k(P(a),i[r].offset),i[r].interpolatorOffsets=[...i[r].offset]),i[r].progress=i[r].interpolate(i[r].current)}function ee(e,i=e,t){if(t.x.targetOffset=0,t.y.targetOffset=0,i!==e){let s=i;for(;s&&s!=e;)t.x.targetOffset+=s.offsetLeft,t.y.targetOffset+=s.offsetTop,s=s.offsetParent}t.x.targetLength=i===e?i.scrollWidth:i.clientWidth,t.y.targetLength=i===e?i.scrollHeight:i.clientHeight,t.x.containerLength=e.clientWidth,t.y.containerLength=e.clientHeight}function te(e,i,t,s={}){const n=s.axis||"y";return{measure:()=>ee(e,s.target,t),update:r=>{J(e,t,r),(s.offset||s.target)&&Z(e,t,s)},notify:O(i)?()=>i(t):ne(i,t[n])}}function ne(e,i){return e.pause(),e.forEachNative((t,{easing:s})=>{var n,r;if(t.updateDuration)s||(t.easing=R),t.updateDuration(1);else{const o={duration:1e3};s||(o.easing="linear"),(r=(n=t.effect)===null||n===void 0?void 0:n.updateTiming)===null||r===void 0||r.call(n,o)}}),()=>{e.currentTime=i.progress}}const g=new WeakMap,H=new WeakMap,m=new WeakMap,W=e=>e===document.documentElement?window:e;function re(e,i={}){var{container:t=document.documentElement}=i,s=A(i,["container"]);let n=m.get(t);n||(n=new Set,m.set(t,n));const r=$(),o=te(t,e,r,s);if(n.add(o),!g.has(t)){const l=()=>{const a=performance.now();for(const c of n)c.measure();for(const c of n)c.update(a);for(const c of n)c.notify()};g.set(t,l);const f=W(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&H.set(t,V(t,l)),f.addEventListener("scroll",l,{passive:!0})}const u=g.get(t),h=requestAnimationFrame(u);return()=>{var l;typeof e!="function"&&e.stop(),cancelAnimationFrame(h);const f=m.get(t);if(!f||(f.delete(o),f.size))return;const a=g.get(t);g.delete(t),a&&(W(t).removeEventListener("scroll",a),(l=H.get(t))===null||l===void 0||l(),window.removeEventListener("resize",a))}}export{re as s};
