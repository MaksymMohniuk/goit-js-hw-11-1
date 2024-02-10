import{S as l,i as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=document.querySelector("#searchInput"),f=document.querySelector('button[type="submit"]'),m=document.querySelector(".js-form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");let p=new l(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("click",y);function y(t){t.preventDefault();const n=d.value.trim();n&&(c.classList.add("is-shown"),m.reset(),g(n).then(r=>{r.hits.length?(c.classList.remove("is-shown"),b(r.hits)):u.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"})}).catch(r=>{console.error("Помилка:",r)}))}function g(t){const n=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${t}&image_type=photo?orientation=horizontal?safesearch=true`;return fetch(n).then(r=>{if(r.ok)return r.json();throw new Error(`Помилка: ${r.status}`)})}function h(t){return`
  <li class="gallery-item">
    <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" alt="${t.tags}">
    <div class="card-body">
      <p class="card-text">Likes: ${t.likes}</p>
      <p class="card-text">Views: ${t.views}</p>
      <p class="card-text">Comments: ${t.comments}</p>
      <p class="card-text">Downloads: ${t.downloads}</p>
    </div>
    </a>
  </li>`}function b(t){a.innerHTML="";const n=t.map(r=>h(r)).join("");a.innerHTML=n,p.refresh()}
//# sourceMappingURL=commonHelpers.js.map
