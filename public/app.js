(()=>{var e={715:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){let t=new IntersectionObserver((function(e,r){e.forEach((function(e){if(e.isIntersecting){let r=e.target;r.src=r.dataset.src,r.srcset=r.dataset.srcset,r.classList.remove("lazy"),r.classList.add("is-loaded"),t.unobserve(r)}}))}));e.forEach((function(e){t.observe(e)}))}}))}},t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(715)})()})();