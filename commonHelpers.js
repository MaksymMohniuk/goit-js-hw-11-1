import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const a=document.querySelector("#searchInput"),f=document.querySelector('button[type="submit"]'),m=document.querySelector(".js-form"),c=document.querySelector(".form-container");f.addEventListener("click",d);function d(e){if(e.preventDefault(),a.value==="")return;const o=a.value;m.reset(),g(o).then(r=>{r.hits.length===0?l.error({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):y(r.hits)}).catch(r=>{console.error("Помилка:",r)})}function g(e){const o=`https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${e}&?image_type:photo?orientation:horizontal?safesearch:true`;return fetch(o).then(r=>{if(r.ok)return r.json();throw new Error(`Помилка: ${r.status}`)})}function p(e){return`
  <div class="gallery">
    <a href="images/image1.jpg"><img src="${e.webformatURL}" alt="${e.tags}" title=""/></a>
    <a href="images/image2.jpg"><img src="${e.largeImageURL}" alt="${e.tags}" title="Beautiful Image"/></a>
    <img src="${e.webformatURL}" alt="${e.tags}">
    <div class="card-body">
      <p class="card-text">Likes: ${e.likes}</p>
      <p class="card-text">Views: ${e.views}</p>
      <p class="card-text">Comments: ${e.comments}</p>
      <p class="card-text">Downloads: ${e.downloads}</p>
    </div>
  </div>`}function y(e){c.innerHTML="";const o=e.map(r=>p(r)).join("");c.innerHTML=o}let h=new u(".gallery a",{captionsData:"alt",captionDelay:250});h.refresh();
//# sourceMappingURL=commonHelpers.js.map
