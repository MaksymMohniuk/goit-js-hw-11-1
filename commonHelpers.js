import{i as u,S as d}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a=document.querySelector("#searchInput"),f=document.querySelector('button[type="submit"]'),m=document.querySelector(".js-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");f.addEventListener("click",p);function p(t){if(t.preventDefault(),a.value==="")return;l.classList.add("is-shown");const n=a.value;m.reset(),y(n).then(r=>{r.hits.length===0?u.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(l.classList.remove("is-shown"),h(r.hits))}).catch(r=>{console.error("Помилка:",r)})}function y(t){const n=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${t}&image_type=photo?orientation=horizontal?safesearch=true`;return fetch(n).then(r=>{if(r.ok)return r.json();throw new Error(`Помилка: ${r.status}`)})}function g(t){return`
  <li class="gallery">
    <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" alt="${t.tags}">
    <div class="card-body">
      <p class="card-text">Likes: ${t.likes}</p>
      <p class="card-text">Views: ${t.views}</p>
      <p class="card-text">Comments: ${t.comments}</p>
      <p class="card-text">Downloads: ${t.downloads}</p>
    </div>
    </a>
  </li>`}function h(t){c.innerHTML="";const n=t.map(s=>g(s)).join("");c.innerHTML=n,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
