function $(){}const V=t=>t;function Nt(t,e){for(const n in e)t[n]=e[n];return t}function Tt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ut(t){return t()}function ct(){return Object.create(null)}function N(t){t.forEach(ut)}function I(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function ie(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function At(t){return Object.keys(t).length===0}function Ct(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function se(t,e,n){t.$$.on_destroy.push(Ct(e,n))}function re(t,e,n,i){if(t){const s=ft(t,e,n,i);return t[0](s)}}function ft(t,e,n,i){return t[1]&&i?Nt(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function oe(t,e,n,i,s,c){if(s){const r=ft(e,n,i,c);t.p(r,s)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ae(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ue(t){return t??""}function fe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const _t=typeof window<"u";let X=_t?()=>window.performance.now():()=>Date.now(),Y=_t?t=>requestAnimationFrame(t):$;const C=new Set;function dt(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Y(dt)}function Z(t){let e;return C.size===0&&Y(dt),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let W=!1;function St(){W=!0}function Mt(){W=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:jt(1,s,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function Lt(t,e){t.appendChild(e)}function ht(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Pt(t){const e=tt("style");return Ht(ht(t),e),e.sheet}function Ht(t,e){return Lt(t.head||t,e),e.sheet}function Ot(t,e){if(W){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Rt(t,e,n){t.insertBefore(e,n||null)}function Bt(t,e,n){W&&!n?Ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function de(){return et(" ")}function he(){return et("")}function me(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const qt=["width","height"];function pe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&qt.indexOf(i)===-1?t[i]=e[i]:pt(t,i,e[i])}function ye(t,e){for(const n in e)pt(t,n,e[n])}function zt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,s=!1){yt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function xt(t,e,n,i){return gt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ge(t,e,n){return xt(t,e,n,tt)}function xe(t,e,n){return xt(t,e,n,mt)}function Ft(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>et(e),!0)}function be(t){return Ft(t," ")}function ot(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=ot(t,"HTML_TAG_START",0),i=ot(t,"HTML_TAG_END",n);if(n===i)return new lt(void 0,e);yt(t);const s=t.splice(n,i-n+1);D(s[0]),D(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new lt(c,e)}function we(t,e){e=""+e,t.data!==e&&(t.data=e)}function ke(t,e){t.value=e??""}function ve(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ee(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ne(t){const e=t.querySelector(":checked");return e&&e.__value}function Te(t,e,n){t.classList[n?"add":"remove"](e)}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ae(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Gt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=mt(n.nodeName):this.e=tt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(D)}}class lt extends Gt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Bt(this.t,this.n[n],e)}}function Ce(t,e){return new t(e)}const q=new Map;let z=0;function It(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Wt(t,e){const n={stylesheet:Pt(e),rules:{}};return q.set(t,n),n}function nt(t,e,n,i,s,c,r,a=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*c(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${It(f)}_${a}`,_=ht(t),{stylesheet:d,rules:h}=q.get(_)||Wt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Jt())}function Jt(){Y(()=>{z||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),q.clear())})}function Se(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:c=0,duration:r=300,easing:a=V,start:o=X()+c,end:l=o+r,tick:f=$,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){u&&(h=nt(t,0,1,r,c,a,u)),c||(d=!0)}function m(){u&&F(t,h),_=!1}return Z(y=>{if(!d&&y>=o&&(d=!0),d&&y>=l&&(f(1,0),m()),!_)return!1;if(d){const E=y-o,w=0+1*a(E/r);f(w,1-w)}return!0}),g(),f(0,1),m}function Me(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Kt(t,s)}}function Kt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let L;function k(t){L=t}function H(){if(!L)throw new Error("Function called outside component initialization");return L}function je(t){H().$$.on_mount.push(t)}function De(t){H().$$.after_update.push(t)}function Le(t){H().$$.on_destroy.push(t)}function Pe(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const A=[],at=[];let S=[];const Q=[],$t=Promise.resolve();let U=!1;function wt(){U||(U=!0,$t.then(it))}function He(){return wt(),$t}function P(t){S.push(t)}function Oe(t){Q.push(t)}const K=new Set;let T=0;function it(){if(T!==0)return;const t=L;do{try{for(;T<A.length;){const e=A[T];T++,k(e),Qt(e.$$)}}catch(e){throw A.length=0,T=0,e}for(k(null),A.length=0,T=0;at.length;)at.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];K.has(n)||(K.add(n),n())}S.length=0}while(A.length);for(;Q.length;)Q.pop()();U=!1,K.clear(),k(t)}function Qt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Ut(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let j;function kt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function Vt(){v={r:0,c:[],p:v}}function Xt(){v.r||N(v.c),v=v.p}function st(t,e){t&&t.i&&(B.delete(t),t.i(e))}function vt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Et={duration:0};function Re(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,a,o=0;function l(){r&&F(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:g=$,css:m}=s||Et;m&&(r=nt(t,0,1,d,_,h,m,o++)),g(0,1);const y=X()+_,E=y+d;a&&a.abort(),c=!0,P(()=>G(t,!0,"start")),a=Z(w=>{if(c){if(w>=E)return g(1,0),G(t,!0,"end"),l(),c=!1;if(w>=y){const M=h((w-y)/d);g(M,1-M)}}return c})}let u=!1;return{start(){u||(u=!0,F(t),I(s)?(s=s(i),kt().then(f)):f())},invalidate(){u=!1},end(){c&&(l(),c=!1)}}}function Be(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const a=v;a.r+=1;function o(){const{delay:l=0,duration:f=300,easing:u=V,tick:_=$,css:d}=s||Et;d&&(r=nt(t,1,0,f,l,u,d));const h=X()+l,g=h+f;P(()=>G(t,!1,"start")),Z(m=>{if(c){if(m>=g)return _(0,1),G(t,!1,"end"),--a.r||N(a.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return c})}return I(s)?kt().then(()=>{s=s(i),o()}):o(),{end(l){l&&s.tick&&s.tick(1,0),c&&(r&&F(t,r),c=!1)}}}function qe(t,e){const n=e.token={};function i(s,c,r,a){if(e.token!==n)return;e.resolved=a;let o=e.ctx;r!==void 0&&(o=o.slice(),o[r]=a);const l=s&&(e.current=s)(o);let f=!1;e.block&&(e.blocks?e.blocks.forEach((u,_)=>{_!==c&&u&&(Vt(),vt(u,1,1,()=>{e.blocks[_]===u&&(e.blocks[_]=null)}),Xt())}):e.block.d(1),l.c(),st(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[c]=l),f&&it()}if(Tt(t)){const s=H();if(t.then(c=>{k(s),i(e.then,1,e.value,c),k(null)},c=>{if(k(s),i(e.catch,2,e.error,c),k(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ze(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Yt(t,e){vt(t,1,1,()=>{e.delete(t.key)})}function Fe(t,e){t.f(),Yt(t,e)}function Ge(t,e,n,i,s,c,r,a,o,l,f,u){let _=t.length,d=c.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,E=new Map,w=[];for(h=d;h--;){const p=u(s,c,h),x=n(p);let b=r.get(x);b?i&&w.push(()=>b.p(p,e)):(b=l(x,p),b.c()),y.set(x,m[h]=b),x in g&&E.set(x,Math.abs(h-g[x]))}const M=new Set,rt=new Set;function J(p){st(p,1),p.m(a,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],b=p.key,O=x.key;p===x?(f=p.first,_--,d--):y.has(O)?!r.has(b)||M.has(b)?J(p):rt.has(O)?_--:E.get(b)>E.get(O)?(rt.add(b),J(p)):(M.add(O),_--):(o(x,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||o(p,r)}for(;d;)J(m[d-1]);return N(w),m}function Ie(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],a=e[c];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[c]=a}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function We(t){return typeof t=="object"&&t!==null?t:{}}function Je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ke(t){t&&t.c()}function Qe(t,e){t&&t.l(e)}function Zt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||P(()=>{const r=t.$$.on_mount.map(ut).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),c.forEach(P)}function te(t,e){const n=t.$$;n.fragment!==null&&(Ut(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,e){t.$$.dirty[0]===-1&&(A.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ue(t,e,n,i,s,c,r,a=[-1]){const o=L;k(t);const l=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:s,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ct(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&ee(t,u)),_}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){St();const u=zt(e.target);l.fragment&&l.fragment.l(u),u.forEach(D)}else l.fragment&&l.fragment.c();e.intro&&st(t.$$.fragment),Zt(t,e.target,e.anchor,e.customElement),Mt(),it()}k(o)}class Ve{$destroy(){te(this,1),this.$destroy=$}$on(e,n){if(!I(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,Zt as A,te as B,qe as C,mt as D,xe as E,ie as F,Ot as G,me as H,ze as I,$ as J,_e as K,fe as L,V as M,I as N,Nt as O,X as P,Z as Q,Te as R,Ve as S,N as T,se as U,Le as V,lt as W,$e as X,Ie as Y,We as Z,Ge as _,de as a,Me as a0,Kt as a1,Se as a2,P as a3,Re as a4,Be as a5,Fe as a6,re as a7,oe as a8,le as a9,ce as aa,Ae as ab,Je as ac,Oe as ad,ke as ae,ae as af,pe as ag,ye as ah,Pe as ai,Ee as aj,Ne as ak,Bt as b,be as c,vt as d,he as e,Xt as f,st as g,D as h,Ue as i,De as j,tt as k,ge as l,zt as m,pt as n,je as o,ve as p,et as q,Ft as r,ne as s,He as t,we as u,Vt as v,at as w,Ce as x,Ke as y,Qe as z};
