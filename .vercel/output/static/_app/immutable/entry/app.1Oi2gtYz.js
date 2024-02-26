import{s as C,e as q,o as U,f as A,t as j}from"../chunks/scheduler.XrIoRwzV.js";import{S as z,i as M,s as W,m as h,f as F,g as v,q as w,r as L,p as g,d as E,e as G,c as H,a as J,l as y,A as p,t as K,b as Q,j as X,z as I,B as b,v as k,w as D,x as R,y as P}from"../chunks/index.ST5S3DPj.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},m=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link");r=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const s=t.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!i)for(let u=_.length-1;u>=0;u--){const d=_[u];if(d.href===t&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Y,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=b(r,_(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=b(r,_(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=b(r,_(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=b(r,_(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=b(r,_(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){I();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=b(r,_(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[10](null),e&&P(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(E),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&E(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=s[e]=t[e](a);let c=a[5]&&T(a);return{c(){n.c(),i=W(),c&&c.c(),r=h()},l(o){n.l(o),i=F(o),c&&c.l(o),r=h()},m(o,u){s[e].m(o,u),v(o,i,u),c&&c.m(o,u),v(o,r,u),_=!0},p(o,[u]){let d=e;e=l(o),e===d?s[e].p(o,u):(I(),w(s[d],1,1,()=>{s[d]=null}),L(),n=s[e],n?n.p(o,u):(n=s[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?c?c.p(o,u):(c=T(o),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(o){_||(g(n),_=!0)},o(o){w(n),_=!1},d(o){o&&(E(i),E(r)),s[e].d(o),c&&c.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:c=null}=e;q(i.page.notify);let o=!1,u=!1,d=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,d=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,l,c,o,u,d,i,r,N,S,B]}class oe extends z{constructor(e){super(),M(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.Op2gILA-.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>m(()=>import("../nodes/1.dIcFKRAB.js"),__vite__mapDeps([7,1,2,8,9,5]),import.meta.url),()=>m(()=>import("../nodes/2.y424u8Zp.js"),__vite__mapDeps([10,1,2]),import.meta.url),()=>m(()=>import("../nodes/3.zOhVI8SL.js"),__vite__mapDeps([11,1,2,12,13,3]),import.meta.url),()=>m(()=>import("../nodes/4.cpz4mnG0.js"),__vite__mapDeps([14,1,2,3,8,9,5,12,15]),import.meta.url),()=>m(()=>import("../nodes/5.xzwDvIjB.js"),__vite__mapDeps([16,1,2,13,3]),import.meta.url),()=>m(()=>import("../nodes/6.P8RLgQTr.js"),__vite__mapDeps([17,1,2,13,3,8,9,5]),import.meta.url),()=>m(()=>import("../nodes/7.ZMg_qK00.js"),__vite__mapDeps([18,1,2,3,8,9,5]),import.meta.url),()=>m(()=>import("../nodes/8.20gkZL-c.js"),__vite__mapDeps([19,1,2,4,3,5,20]),import.meta.url),()=>m(()=>import("../nodes/9.19xHnEWt.js"),__vite__mapDeps([21,1,2,13,3,4,5]),import.meta.url),()=>m(()=>import("../nodes/10.dDUR3CBq.js"),__vite__mapDeps([22,1,2,3,4,5,15]),import.meta.url),()=>m(()=>import("../nodes/11.6HPjrxba.js"),__vite__mapDeps([23,1,2,4,3,5]),import.meta.url)],le=[],fe={"/":[2],"/admin":[3],"/admin/[article]":[4],"/articles":[5],"/articles/[userId]":[6],"/articles/[userId]/[article]":[7],"/auth":[8],"/myArticles":[9],"/send":[10],"/user":[11]},_e={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,_e as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.Op2gILA-.js","../chunks/scheduler.XrIoRwzV.js","../chunks/index.ST5S3DPj.js","../chunks/firebase.jHORW_KV.js","../chunks/store.RIr_eGut.js","../chunks/index.zpOiMAgS.js","../assets/0.mo1Jh0nX.css","../nodes/1.dIcFKRAB.js","../chunks/stores.oIzp7Hvt.js","../chunks/entry.-owFpjUZ.js","../nodes/2.y424u8Zp.js","../nodes/3.zOhVI8SL.js","../chunks/public.p0geILBg.js","../chunks/each.6w4Ej4nR.js","../nodes/4.cpz4mnG0.js","../assets/4.X9QNbnGI.css","../nodes/5.xzwDvIjB.js","../nodes/6.P8RLgQTr.js","../nodes/7.ZMg_qK00.js","../nodes/8.20gkZL-c.js","../assets/8.-cJycYKn.css","../nodes/9.19xHnEWt.js","../nodes/10.dDUR3CBq.js","../nodes/11.6HPjrxba.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
