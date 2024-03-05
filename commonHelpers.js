import{S as w,A as y,P as g,t as p}from"./assets/vendor-5304be77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i={openMenuBtn:document.querySelector('[data-action="open-menu"]'),closeMenuBtn:document.querySelector('[data-action="close-menu"]'),menu:document.querySelector("[data-menu]")};i.openMenuBtn.addEventListener("click",a);i.closeMenuBtn.addEventListener("click",a);i.menu.addEventListener("click",L);function a(e){i.menu.classList.toggle("is-open")}function L(e){if(h(),e.target.classList.contains("js-mobile-menu-link")){a();return}}function h(){window.location.href.split("#")[1]}const s={openModalBtns:document.querySelectorAll('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector("[data-backdrop]"),modalForm:document.querySelector("[data-modal-form]")};console.log(s.openModalBtns);s.openModalBtns.forEach(e=>{e.addEventListener("click",v)});s.closeModalBtn.addEventListener("click",d);s.backdrop.addEventListener("click",b);function v(){k(),window.addEventListener("keydown",m),s.backdrop.classList.remove("is-hidden")}function d(){E(),window.removeEventListener("keydown",m),s.backdrop.classList.add("is-hidden");const e=document.body,t=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,parseInt(t||"0")*-1)}window.addEventListener("scroll",()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)});function b(e){e.currentTarget===e.target&&d()}function m(e){const t="Escape";e.code===t&&d()}function k(){const e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)}}function E(){window.onscroll=function(){}}s.modalForm.addEventListener("focusin",e=>{e.target.classList.contains("js-input")&&(e.target.placeholder=e.target.dataset.placeholder)});s.modalForm.addEventListener("focusout",e=>{e.target.classList.contains("js-input")&&(e.target.placeholder="")});new w(".swiper",{modules:[y,g],direction:"horizontal",loop:!0,speed:750,spaceBetween:10,slidesPerView:1,autoplay:{delay:1200,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{768:{loop:!0,slidesPerView:2,spaceBetween:18},1280:{loop:!0,slidesPerView:3,spaceBetween:25}}});const u={backToTopButton:document.querySelector('button[data-action="back-to-top"]')},B=500;window.addEventListener("scroll",p(T,250));u.backToTopButton.addEventListener("click",S);function T(e){window.pageYOffset>B?O():P()}function S(e){window.scrollTo({top:-document.body.offsetHeight,behavior:"smooth"})}function O(){u.backToTopButton.classList.remove("is-hidden")}function P(){u.backToTopButton.classList.add("is-hidden")}const C=document.querySelectorAll(".vegetables-list .card");C.forEach(e=>{e.addEventListener("click",M)});function M(e){const t=document.querySelector(".vegetables-list .card.is-flipped");t?t.classList.remove("is-flipped"):e.currentTarget.classList.add("is-flipped");const r=e.currentTarget;r.classList.add("is-flipped"),t===r&&r.classList.remove("is-flipped")}const c={header:document.querySelector(".js-header")},q=500;window.addEventListener("scroll",p(Y,250));function Y(e){window.pageYOffset>q?$():A()}function $(){c.header.classList.add("is-fixed"),c.header.style.transform=`translateY(-${getComputedStyle(c.header).top})`}function A(){c.header.classList.remove("is-fixed"),c.header.style.transform="translateY(0)"}
//# sourceMappingURL=commonHelpers.js.map
