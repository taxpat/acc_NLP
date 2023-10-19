(()=>{"use strict";var e,t,n,o,r={803:(e,t,n)=>{n.d(t,{Gu:()=>o,qu:()=>r});const o=e=>"string"==typeof e&&/^[v\d]/.test(e)&&a.test(e),r=(e,t,n)=>{h(n);const o=((e,t)=>{const n=c(e),o=c(t),r=n.pop(),a=o.pop(),d=l(n,o);return 0!==d?d:r&&a?l(r.split("."),a.split(".")):r||a?r?-1:1:0})(e,t);return u[n].includes(o)},a=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,c=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const t=e.match(a);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},d=e=>"*"===e||"x"===e||"X"===e,i=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},s=(e,t)=>{if(d(e)||d(t))return 0;const[n,o]=((e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t])(i(e),i(t));return n>o?1:n<o?-1:0},l=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){const o=s(e[n]||"0",t[n]||"0");if(0!==o)return o}return 0},u={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]},m=Object.keys(u),h=e=>{if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===m.indexOf(e))throw new Error(`Invalid operator, expected one of ${m.join("|")}`)}},375:(e,t,n)=>{function o(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}n.d(t,{A:()=>o})},937:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var o=n(375),r=n(803),a=window.matchMedia("(prefers-color-scheme: dark)");function s(e){document.documentElement.dataset.theme=a.matches?"dark":"light"}function l(e){"light"!==e&&"dark"!==e&&"auto"!==e&&(console.error(`Got invalid theme mode: ${e}. Resetting to auto.`),e="auto");var t=a.matches?"dark":"light";document.documentElement.dataset.mode=e;var n="auto"==e?t:e;document.documentElement.dataset.theme=n,document.querySelectorAll(".dropdown-menu").forEach((e=>{"dark"===n?e.classList.add("dropdown-menu-dark"):e.classList.remove("dropdown-menu-dark")})),localStorage.setItem("mode",e),localStorage.setItem("theme",n),console.log(`[PST]: Changed to ${e} mode using the ${n} theme.`),a.onchange="auto"==e?s:""}function u(){const e=document.documentElement.dataset.defaultMode||"auto",t=localStorage.getItem("mode")||e;var n,o;l(((o=(n=a.matches?["auto","light","dark"]:["auto","dark","light"]).indexOf(t)+1)===n.length&&(o=0),n[o]))}function m(){l(document.documentElement.dataset.mode),document.querySelectorAll(".theme-switch-button").forEach((e=>{e.addEventListener("click",u)}))}function h(){window.addEventListener("activate.bs.scrollspy",(function(){document.querySelectorAll(".bd-toc-nav a").forEach((e=>{e.parentElement.classList.remove("active")})),document.querySelectorAll(".bd-toc-nav a.active").forEach((e=>{e.parentElement.classList.add("active")}))}))}function p(){if(!document.querySelector(".bd-docs-nav"))return;var e=document.querySelector("div.bd-sidebar");let t=parseInt(sessionStorage.getItem("sidebar-scroll-top"),10);if(isNaN(t)){var n=document.querySelector(".bd-docs-nav").querySelectorAll(".active");if(n.length>0){var o=n[n.length-1],r=o.getBoundingClientRect().y-e.getBoundingClientRect().y;if(o.getBoundingClientRect().y>.5*window.innerHeight){let t=.25;e.scrollTop=r-e.clientHeight*t,console.log("[PST]: Scrolled sidebar using last active link...")}}}else e.scrollTop=t,console.log("[PST]: Scrolled sidebar using stored browser position...");window.addEventListener("beforeunload",(()=>{sessionStorage.setItem("sidebar-scroll-top",e.scrollTop)}))}var c=()=>{let e=document.querySelectorAll("form.bd-search");return e.length?(1==e.length?e[0]:document.querySelector("div:not(.search-button__search-container) > form.bd-search")).querySelector("input"):void 0},d=()=>{let e=c(),t=document.querySelector(".search-button__wrapper");e===t.querySelector("input")&&t.classList.toggle("show"),document.activeElement===e?e.blur():(e.focus(),e.select(),e.scrollIntoView({block:"center"}))};async function f(e){e.preventDefault();let t=`${DOCUMENTATION_OPTIONS.pagename}.html`,n=e.currentTarget.getAttribute("href"),o=n.replace(t,"");try{(await fetch(n,{method:"HEAD"})).ok?location.href=n:location.href=o}catch(e){location.href=o}}async function v(e){try{var t=new URL(e)}catch(n){if(!(n instanceof TypeError))throw n;{const n=await fetch(window.location.origin,{method:"HEAD"});t=new URL(e,n.url)}}const n=await fetch(t);return await n.json()}function g(e,t){const n=`${DOCUMENTATION_OPTIONS.pagename}.html`;t.forEach((e=>{e.dataset.activeVersionName="",e.dataset.activeVersion=""}));const o=(e=e.map((e=>(e.match=e.version==DOCUMENTATION_OPTIONS.theme_switcher_version_match,e.preferred=e.preferred||!1,"name"in e||(e.name=e.version),e)))).map((e=>e.preferred&&e.match)).some(Boolean);var r=!1;e.forEach((e=>{const a=document.createElement("a");a.setAttribute("class","dropdown-item list-group-item list-group-item-action py-1"),a.setAttribute("href",`${e.url}${n}`),a.setAttribute("role","option");const c=document.createElement("span");c.textContent=`${e.name}`,a.appendChild(c),a.dataset.versionName=e.name,a.dataset.version=e.version;let d=o&&e.preferred,i=!o&&!r&&e.match;(d||i)&&(a.classList.add("active"),t.forEach((t=>{t.innerText=e.name,t.dataset.activeVersionName=e.name,t.dataset.activeVersion=e.version})),r=!0),document.querySelectorAll(".version-switcher__menu").forEach((e=>{let t=a.cloneNode(!0);t.onclick=f,e.append(t)}))}))}function w(e){var t=DOCUMENTATION_OPTIONS.VERSION,n=e.filter((e=>e.preferred));if(1!==n.length){const e=0==n.length?"No":"Multiple";return void console.log(`[PST] ${e} versions marked "preferred" found in versions JSON, ignoring.`)}const o=n[0].version,a=n[0].url,c=(0,r.Gu)(t)&&(0,r.Gu)(o);if(c&&(0,r.qu)(t,o,"="))return;var d=document.createElement("div");const i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("strong"),u=document.createElement("a");d.classList="bd-header-version-warning container-fluid",i.classList="bd-header-announcement__content",s.classList="sidebar-message",u.classList="sd-btn sd-btn-danger sd-shadow-sm sd-text-wrap font-weight-bold ms-3 my-1 align-baseline",u.href=`${a}${DOCUMENTATION_OPTIONS.pagename}.html`,u.innerText="Switch to stable version",u.onclick=f,s.innerText="This is documentation for ";const m=t.includes("dev")||t.includes("rc")||t.includes("pre"),h=c&&(0,r.qu)(t,o,">");m||h?l.innerText="an unstable development version":c&&(0,r.qu)(t,o,"<")?l.innerText=`an old version (${t})`:l.innerText=t?`version ${t}`:"an unknown version",d.appendChild(i),i.appendChild(s),s.appendChild(l),s.appendChild(document.createTextNode(".")),s.appendChild(u),document.body.prepend(d)}function y(){new MutationObserver(((e,t)=>{e.forEach((e=>{0!==e.addedNodes.length&&void 0!==e.addedNodes[0].data&&-1!=e.addedNodes[0].data.search("Inserted RTD Footer")&&e.addedNodes.forEach((e=>{document.getElementById("rtd-footer-container").append(e)}))}))})).observe(document.body,{childList:!0})}var i=document.querySelectorAll(".version-switcher__button");const b=i.length>0,E=DOCUMENTATION_OPTIONS.hasOwnProperty("theme_switcher_json_url"),_=DOCUMENTATION_OPTIONS.show_version_warning_banner;if(E&&(b||_)){const S=await v(DOCUMENTATION_OPTIONS.theme_switcher_json_url);g(S,i),_&&w(S)}(0,o.A)(m),(0,o.A)(p),(0,o.A)(h),(0,o.A)((()=>{(()=>{let e=document.querySelectorAll(".search-button__kbd-shortcut");var t,n;n="",void 0!==(t=window.navigator).userAgentData&&null!=t.userAgentData?n=t.userAgentData.platform:void 0!==t.platform&&(n=t.platform),/mac.?os/.test(n.toLowerCase())&&e.forEach((e=>e.querySelector("kbd.kbd-shortcut__modifier").innerText="⌘"))})(),window.addEventListener("keydown",(e=>{let t=c();(e.ctrlKey||e.metaKey)&&"KeyK"==e.code?(e.preventDefault(),d()):document.activeElement===t&&"Escape"==e.code&&d()}),!0),document.querySelectorAll(".search-button__button").forEach((e=>{e.onclick=d}));let e=document.querySelector(".search-button__overlay");e&&(e.onclick=d)})),(0,o.A)(y),t()}catch(T){t(T)}}),1)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(r,a,c)=>{var d;c&&((d=[]).d=1);var i,s,l,u=new Set,m=r.exports,h=new Promise(((e,t)=>{l=t,s=e}));h[t]=m,h[e]=e=>(d&&e(d),u.forEach(e),h.catch((e=>{}))),r.exports=h,a((r=>{var a;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var a=[];a.d=0,r.then((e=>{c[t]=e,o(a)}),(e=>{c[n]=e,o(a)}));var c={};return c[e]=e=>e(a),c}}var d={};return d[e]=e=>{},d[t]=r,d})))(r);var c=()=>i.map((e=>{if(e[n])throw e[n];return e[t]})),s=new Promise((t=>{(a=()=>t(c)).r=0;var n=e=>e!==d&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));i.map((t=>t[e](n)))}));return a.r?s:c()}),(e=>(e?l(h[n]=e):s(m),o(d)))),d&&(d.d=0)},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(937)})();
//# sourceMappingURL=pydata-sphinx-theme.js.map