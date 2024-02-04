import{i as a}from"./assets/vendor-32231325.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=document.querySelector("#searchInput"),l=document.querySelector('button[type="submit"]'),u=document.querySelector(".js-form"),d=document.querySelector(".form-container");l.addEventListener("click",f);function f(t){if(t.preventDefault(),c.value==="")return;const n=c.value;u.reset(),m(n).then(r=>{r.hits.length===0?a.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):y(r.hits)}).catch(r=>{console.error("Помилка:",r)})}function m(t){const n=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${t}?image_type:photo?orientation:horizontal?safesearch:true`;return fetch(n).then(r=>{if(r.ok)return r.json();throw new Error(`Помилка: ${r.status}`)})}function p(t){return`<div class="card">
  <img src="${t.webformatURL}" alt="${t.tags}">
  <div class="card-body">
    <p class="card-text">Likes: ${t.likes}</p>
    <p class="card-text">Views: ${t.views}</p>
    <p class="card-text">Comments: ${t.comments}</p>
    <p class="card-text">Downloads: ${t.downloads}</p>
  </div>
</div>`}function y(t){const n=t.map(r=>p(r)).join("");d.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=commonHelpers.js.map
