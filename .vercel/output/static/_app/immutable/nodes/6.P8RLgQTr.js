import{s as H,n as y,c as R}from"../chunks/scheduler.XrIoRwzV.js";import{S as T,i as P,s as v,m as g,f as k,g as u,d as h,n as U,e as _,c as p,k as V,t as C,a as E,b as q,l as I,h as m,j as w}from"../chunks/index.ST5S3DPj.js";import{e as N}from"../chunks/each.6w4Ej4nR.js";import{c as x,d as z,o as B,q as F}from"../chunks/firebase.jHORW_KV.js";import{p as G}from"../chunks/stores.oIzp7Hvt.js";function S(o,a,t){const e=o.slice();return e[6]=a[t],e}function j(o){let a,t="There is no Article sent by this User";return{c(){a=_("h1"),a.textContent=t},l(e){a=p(e,"H1",{"data-svelte-h":!0}),V(a)!=="svelte-1sy3jr3"&&(a.textContent=t)},m(e,l){u(e,a,l)},d(e){e&&h(a)}}}function A(o){let a,t,e=o[6].heading+"",l,i,n,s,r,c;return{c(){a=_("div"),t=_("a"),l=C(e),i=C("."),s=v(),r=_("hr"),c=v(),this.h()},l(f){a=p(f,"DIV",{});var d=E(a);t=p(d,"A",{href:!0});var b=E(t);l=q(b,e),i=q(b,"."),b.forEach(h),s=k(d),r=p(d,"HR",{}),c=k(d),d.forEach(h),this.h()},h(){I(t,"href",n="/articles/"+o[2]+"/"+o[6].heading)},m(f,d){u(f,a,d),m(a,t),m(t,l),m(t,i),m(a,s),m(a,r),m(a,c)},p(f,d){d&1&&e!==(e=f[6].heading+"")&&w(l,e),d&1&&n!==(n="/articles/"+f[2]+"/"+f[6].heading)&&I(t,"href",n)},d(f){f&&h(a)}}}function D(o){let a,t=o[6].confirmed==!0&&A(o);return{c(){t&&t.c(),a=g()},l(e){t&&t.l(e),a=g()},m(e,l){t&&t.m(e,l),u(e,a,l)},p(e,l){e[6].confirmed==!0?t?t.p(e,l):(t=A(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(e){e&&h(a),t&&t.d(e)}}}function J(o){let a,t,e=o[1].length==0&&j(),l=N(o[0]),i=[];for(let n=0;n<l.length;n+=1)i[n]=D(S(o,l,n));return{c(){e&&e.c(),a=v();for(let n=0;n<i.length;n+=1)i[n].c();t=g()},l(n){e&&e.l(n),a=k(n);for(let s=0;s<i.length;s+=1)i[s].l(n);t=g()},m(n,s){e&&e.m(n,s),u(n,a,s);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(n,s);u(n,t,s)},p(n,[s]){if(n[1].length==0?e||(e=j(),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null),s&5){l=N(n[0]);let r;for(r=0;r<l.length;r+=1){const c=S(n,l,r);i[r]?i[r].p(c,s):(i[r]=D(c),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=l.length}},i:y,o:y,d(n){n&&(h(a),h(t)),e&&e.d(n),U(i,n)}}}function K(o,a,t){let e;R(o,G,c=>t(3,e=c));const l=e.params.userId,i=x(z,l);let n=[],s=[];async function r(){try{B(F(i),c=>{t(0,n=[]),t(1,s=[]),c.docs.forEach(f=>{(f.data().heading!==void 0||f.data().confirmed!==void 0)&&n.push({heading:f.data().heading,confirmed:f.data().confirmed}),(f.data().heading!==void 0||f.data().confirmed!==void 0)&&f.data().confirmed==!0&&s.push({heading:f.data().heading,confirmed:f.data().confirmed})})})}catch(c){console.error("Error fetching document:",c)}}return r().then(()=>{}),[n,s,l]}class X extends T{constructor(a){super(),P(this,a,K,J,H,{})}}export{X as component};
