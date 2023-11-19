import{S as Ee,i as De,s as Le,k as N,q as C,a as S,y as K,l as P,m as O,r as E,h as r,c as k,z as X,n as j,b as p,G as b,A as q,g as G,d as H,B as J,w as me,ac as pe,ad as de,v as Ie,f as Ae,C as Ne,e as $e,I as Pe,J as te,K as _e}from"../chunks/index.607a4587.js";import{G as he}from"../chunks/GreyText.545daa15.js";import{I as Oe}from"../chunks/InputSm.31ba033d.js";import{S as be,I as ge}from"../chunks/Section.d1e5e57f.js";import{B as Ce,e as ae,s as ve}from"../chunks/strings.82d8c965.js";import{D as Fe}from"../chunks/DangerButton.30216a4e.js";import{S as xe}from"../chunks/Select.43d10eda.js";function we(o,e,l){const i=o.slice();return i[15]=e[l],i}function Se(o,e,l){const i=o.slice();return i[15]=e[l],i}function Ge(o){let e;return{c(){e=C("Follow these steps first to add your domain to Cloudflare")},l(l){e=E(l,"Follow these steps first to add your domain to Cloudflare")},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function Be(o){let e;return{c(){e=C("Publish")},l(l){e=E(l,"Publish")},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function ke(o){let e,l,i,s,f,c,g;return s=new he({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),c=new Fe({props:{onclick:o[12],$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=N("h3"),l=C("Force Push"),i=S(),K(s.$$.fragment),f=S(),K(c.$$.fragment),this.h()},l(n){e=P(n,"H3",{class:!0});var m=O(e);l=E(m,"Force Push"),m.forEach(r),i=k(n),X(s.$$.fragment,n),f=k(n),X(c.$$.fragment,n),this.h()},h(){j(e,"class","text-xl font-semibold text-red-400")},m(n,m){p(n,e,m),b(e,l),p(n,i,m),q(s,n,m),p(n,f,m),q(c,n,m),g=!0},p(n,m){const L={};m&2097152&&(L.$$scope={dirty:m,ctx:n}),s.$set(L);const y={};m&2097152&&(y.$$scope={dirty:m,ctx:n}),c.$set(y)},i(n){g||(G(s.$$.fragment,n),G(c.$$.fragment,n),g=!0)},o(n){H(s.$$.fragment,n),H(c.$$.fragment,n),g=!1},d(n){n&&r(e),n&&r(i),J(s,n),n&&r(f),J(c,n)}}}function He(o){let e;return{c(){e=C("Clicking this button will overwrite the existing domain. This is not recommended unless you know what you're doing")},l(l){e=E(l,"Clicking this button will overwrite the existing domain. This is not recommended unless you know what you're doing")},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function Ye(o){let e;return{c(){e=C("Yes, I'm sure!")},l(l){e=E(l,"Yes, I'm sure!")},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function Re(o){let e,l,i,s,f,c,g,n,m,L,y,z,B,W,M,F,_,w,d,I,x,v,D,$,Z,R,ne,se,U,oe,t;e=new he({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}});function h(a){o[8](a)}let A={id:"publish-domain",label:"Domain (without any www or http/https)",placeholder:"infinitybots.gg, botlist.app, narc.live etc.",minlength:3};o[0]!==void 0&&(A.value=o[0]),I=new Oe({props:A}),me.push(()=>pe(I,"value",h));function le(a){o[9](a)}let ee={id:"publish-cert",label:"Certificate (Public Cert)",placeholder:"-----BEGIN CERTIFICATE-----",minlength:256};o[1]!==void 0&&(ee.value=o[1]),D=new ge({props:ee}),me.push(()=>pe(D,"value",le));function ie(a){o[10](a)}let Y={id:"publish-key",label:"Certificate (Private Key)",placeholder:"-----BEGIN PRIVATE KEY-----",minlength:256};o[2]!==void 0&&(Y.value=o[2]),R=new ge({props:Y}),me.push(()=>pe(R,"value",ie)),U=new Ce({props:{onclick:o[11],$$slots:{default:[Be]},$$scope:{ctx:o}}});let u=o[3]&&ke(o);return{c(){K(e.$$.fragment),l=S(),i=N("p"),s=C("Note that this is NOT needed if the domain is already previously setup on Nginx"),f=S(),c=N("ol"),g=N("li"),n=C("Add your domain to Cloudflare normally"),m=S(),L=N("li"),y=C("Click SSL/TLS > Overview. Then ensure SSL/TLS encryption mode is set to Full or Full (strict)"),z=S(),B=N("li"),W=C('Go to SSL/TLS > Origin Server. Ensure "Authenticated Origin Pulls" is enabled. Then create a new origin certificate'),M=S(),F=N("li"),_=C("This will yield two files, a certificate and a private key. Copy the contents of these files and paste them into the fields below"),w=S(),d=N("div"),K(I.$$.fragment),v=S(),K(D.$$.fragment),Z=S(),K(R.$$.fragment),se=S(),K(U.$$.fragment),oe=S(),u&&u.c(),this.h()},l(a){X(e.$$.fragment,a),l=k(a),i=P(a,"P",{class:!0});var T=O(i);s=E(T,"Note that this is NOT needed if the domain is already previously setup on Nginx"),T.forEach(r),f=k(a),c=P(a,"OL",{class:!0});var V=O(c);g=P(V,"LI",{});var re=O(g);n=E(re,"Add your domain to Cloudflare normally"),re.forEach(r),m=k(V),L=P(V,"LI",{});var fe=O(L);y=E(fe,"Click SSL/TLS > Overview. Then ensure SSL/TLS encryption mode is set to Full or Full (strict)"),fe.forEach(r),z=k(V),B=P(V,"LI",{});var ue=O(B);W=E(ue,'Go to SSL/TLS > Origin Server. Ensure "Authenticated Origin Pulls" is enabled. Then create a new origin certificate'),ue.forEach(r),M=k(V),F=P(V,"LI",{});var ce=O(F);_=E(ce,"This will yield two files, a certificate and a private key. Copy the contents of these files and paste them into the fields below"),ce.forEach(r),V.forEach(r),w=k(a),d=P(a,"DIV",{class:!0});var Q=O(d);X(I.$$.fragment,Q),v=k(Q),X(D.$$.fragment,Q),Z=k(Q),X(R.$$.fragment,Q),se=k(Q),X(U.$$.fragment,Q),oe=k(Q),u&&u.l(Q),Q.forEach(r),this.h()},h(){j(i,"class","font-semibold"),j(c,"class","list-decimal list-inside"),j(d,"class","mt-3")},m(a,T){q(e,a,T),p(a,l,T),p(a,i,T),b(i,s),p(a,f,T),p(a,c,T),b(c,g),b(g,n),b(c,m),b(c,L),b(L,y),b(c,z),b(c,B),b(B,W),b(c,M),b(c,F),b(F,_),p(a,w,T),p(a,d,T),q(I,d,null),b(d,v),q(D,d,null),b(d,Z),q(R,d,null),b(d,se),q(U,d,null),b(d,oe),u&&u.m(d,null),t=!0},p(a,T){const V={};T&2097152&&(V.$$scope={dirty:T,ctx:a}),e.$set(V);const re={};!x&&T&1&&(x=!0,re.value=a[0],de(()=>x=!1)),I.$set(re);const fe={};!$&&T&2&&($=!0,fe.value=a[1],de(()=>$=!1)),D.$set(fe);const ue={};!ne&&T&4&&(ne=!0,ue.value=a[2],de(()=>ne=!1)),R.$set(ue);const ce={};T&2097152&&(ce.$$scope={dirty:T,ctx:a}),U.$set(ce),a[3]?u?(u.p(a,T),T&8&&G(u,1)):(u=ke(a),u.c(),G(u,1),u.m(d,null)):u&&(Ie(),H(u,1,1,()=>{u=null}),Ae())},i(a){t||(G(e.$$.fragment,a),G(I.$$.fragment,a),G(D.$$.fragment,a),G(R.$$.fragment,a),G(U.$$.fragment,a),G(u),t=!0)},o(a){H(e.$$.fragment,a),H(I.$$.fragment,a),H(D.$$.fragment,a),H(R.$$.fragment,a),H(U.$$.fragment,a),H(u),t=!1},d(a){J(e,a),a&&r(l),a&&r(i),a&&r(f),a&&r(c),a&&r(w),a&&r(d),J(I),J(D),J(R),J(U),u&&u.d()}}}function Ke(o){let e,l=o[20]+"",i;return{c(){e=N("h2"),i=C(l),this.h()},l(s){e=P(s,"H2",{class:!0});var f=O(e);i=E(f,l),f.forEach(r),this.h()},h(){j(e,"class","text-red-400")},m(s,f){p(s,e,f),b(e,i)},p:te,i:te,o:te,d(s){s&&r(e)}}}function Xe(o){var ne,se,U,oe;let e,l,i,s,f,c,g,n,m,L,y,z,B,W,M,F,_,w,d,I;e=new he({props:{$$slots:{default:[je]},$$scope:{ctx:o}}});let x=(ne=o[14])==null?void 0:ne.Claimed,v=[];for(let t=0;t<x.length;t+=1)v[t]=ye(Se(o,x,t));let D=(se=o[14])==null?void 0:se.Available,$=[];for(let t=0;t<D.length;t+=1)$[t]=Te(we(o,D,t));function Z(t){o[13](t)}let R={name:"domain",placeholder:"Select a domain",options:new Map((oe=(U=o[14])==null?void 0:U.Available)==null?void 0:oe.map(ze))};return o[4]!==void 0&&(R.value=o[4]),F=new xe({props:R}),me.push(()=>pe(F,"value",Z)),d=new Ce({props:{onclick:o[7],$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){K(e.$$.fragment),l=S(),i=N("h2"),s=C("Claimed Domains"),f=S(),c=N("ul");for(let t=0;t<v.length;t+=1)v[t].c();g=S(),n=N("h2"),m=C("Available Domains"),L=S(),y=N("ul");for(let t=0;t<$.length;t+=1)$[t].c();z=S(),B=N("h2"),W=C("Select A Domain"),M=S(),K(F.$$.fragment),w=S(),K(d.$$.fragment),this.h()},l(t){X(e.$$.fragment,t),l=k(t),i=P(t,"H2",{class:!0});var h=O(i);s=E(h,"Claimed Domains"),h.forEach(r),f=k(t),c=P(t,"UL",{class:!0});var A=O(c);for(let Y=0;Y<v.length;Y+=1)v[Y].l(A);A.forEach(r),g=k(t),n=P(t,"H2",{class:!0});var le=O(n);m=E(le,"Available Domains"),le.forEach(r),L=k(t),y=P(t,"UL",{class:!0});var ee=O(y);for(let Y=0;Y<$.length;Y+=1)$[Y].l(ee);ee.forEach(r),z=k(t),B=P(t,"H2",{class:!0});var ie=O(B);W=E(ie,"Select A Domain"),ie.forEach(r),M=k(t),X(F.$$.fragment,t),w=k(t),X(d.$$.fragment,t),this.h()},h(){j(i,"class","text-xl font-semibold"),j(c,"class","list-disc list-inside"),j(n,"class","text-xl font-semibold"),j(y,"class","list-disc list-inside"),j(B,"class","text-xl font-semibold")},m(t,h){q(e,t,h),p(t,l,h),p(t,i,h),b(i,s),p(t,f,h),p(t,c,h);for(let A=0;A<v.length;A+=1)v[A]&&v[A].m(c,null);p(t,g,h),p(t,n,h),b(n,m),p(t,L,h),p(t,y,h);for(let A=0;A<$.length;A+=1)$[A]&&$[A].m(y,null);p(t,z,h),p(t,B,h),b(B,W),p(t,M,h),q(F,t,h),p(t,w,h),q(d,t,h),I=!0},p(t,h){var ie,Y;const A={};if(h&2097152&&(A.$$scope={dirty:h,ctx:t}),e.$set(A),h&64){x=(ie=t[14])==null?void 0:ie.Claimed;let u;for(u=0;u<x.length;u+=1){const a=Se(t,x,u);v[u]?v[u].p(a,h):(v[u]=ye(a),v[u].c(),v[u].m(c,null))}for(;u<v.length;u+=1)v[u].d(1);v.length=x.length}if(h&64){D=(Y=t[14])==null?void 0:Y.Available;let u;for(u=0;u<D.length;u+=1){const a=we(t,D,u);$[u]?$[u].p(a,h):($[u]=Te(a),$[u].c(),$[u].m(y,null))}for(;u<$.length;u+=1)$[u].d(1);$.length=D.length}const le={};!_&&h&16&&(_=!0,le.value=t[4],de(()=>_=!1)),F.$set(le);const ee={};h&2097152&&(ee.$$scope={dirty:h,ctx:t}),d.$set(ee)},i(t){I||(G(e.$$.fragment,t),G(F.$$.fragment,t),G(d.$$.fragment,t),I=!0)},o(t){H(e.$$.fragment,t),H(F.$$.fragment,t),H(d.$$.fragment,t),I=!1},d(t){J(e,t),t&&r(l),t&&r(i),t&&r(f),t&&r(c),_e(v,t),t&&r(g),t&&r(n),t&&r(L),t&&r(y),_e($,t),t&&r(z),t&&r(B),t&&r(M),J(F,t),t&&r(w),J(d,t)}}}function je(o){let e;return{c(){e=C(`These are the domains that are available to be added to Nginx. Select one from the dropdown below.

            If you do not see your domain here, ensure that you have followed "Domain Setup" correctly and added the certificate.`)},l(l){e=E(l,`These are the domains that are available to be added to Nginx. Select one from the dropdown below.

            If you do not see your domain here, ensure that you have followed "Domain Setup" correctly and added the certificate.`)},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function ye(o){let e,l=o[15]+"",i;return{c(){e=N("li"),i=C(l)},l(s){e=P(s,"LI",{});var f=O(e);i=E(f,l),f.forEach(r)},m(s,f){p(s,e,f),b(e,i)},p:te,d(s){s&&r(e)}}}function Te(o){let e,l=o[15]+"",i;return{c(){e=N("li"),i=C(l)},l(s){e=P(s,"LI",{});var f=O(e);i=E(f,l),f.forEach(r)},m(s,f){p(s,e,f),b(e,i)},p:te,d(s){s&&r(e)}}}function qe(o){let e;return{c(){e=C("Add Domain")},l(l){e=E(l,"Add Domain")},m(l,i){p(l,e,i)},d(l){l&&r(e)}}}function Je(o){let e,l;return{c(){e=N("p"),l=C("Loading..."),this.h()},l(i){e=P(i,"P",{class:!0});var s=O(e);l=E(s,"Loading..."),s.forEach(r),this.h()},h(){j(e,"class","font-semibold")},m(i,s){p(i,e,s),b(e,l)},p:te,i:te,o:te,d(i){i&&r(e)}}}function Ue(o){let e,l,i={ctx:o,current:null,token:null,hasCatch:!0,pending:Je,then:Xe,catch:Ke,value:14,error:20,blocks:[,,,]};return Ne(o[6](),i),{c(){e=$e(),i.block.c()},l(s){e=$e(),i.block.l(s)},m(s,f){p(s,e,f),i.block.m(s,i.anchor=f),i.mount=()=>e.parentNode,i.anchor=e,l=!0},p(s,f){o=s,Pe(i,o,f)},i(s){l||(G(i.block),l=!0)},o(s){for(let f=0;f<3;f+=1){const c=i.blocks[f];H(c)}l=!1},d(s){s&&r(e),i.block.d(s),i.token=null,i=null}}}function Ve(o){let e,l,i,s,f,c,g;return s=new be({props:{title:"Step 1: Domain Setup",$$slots:{default:[Re]},$$scope:{ctx:o}}}),c=new be({props:{title:"Step 2: Add Domain",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){e=N("h1"),l=C("Add NGINX domain"),i=S(),K(s.$$.fragment),f=S(),K(c.$$.fragment),this.h()},l(n){e=P(n,"H1",{class:!0});var m=O(e);l=E(m,"Add NGINX domain"),m.forEach(r),i=k(n),X(s.$$.fragment,n),f=k(n),X(c.$$.fragment,n),this.h()},h(){j(e,"class","text-2xl font-semibold")},m(n,m){p(n,e,m),b(e,l),p(n,i,m),q(s,n,m),p(n,f,m),q(c,n,m),g=!0},p(n,[m]){const L={};m&2097167&&(L.$$scope={dirty:m,ctx:n}),s.$set(L);const y={};m&2097168&&(y.$$scope={dirty:m,ctx:n}),c.$set(y)},i(n){g||(G(s.$$.fragment,n),G(c.$$.fragment,n),g=!0)},o(n){H(s.$$.fragment,n),H(c.$$.fragment,n),g=!1},d(n){n&&r(e),n&&r(i),J(s,n),n&&r(f),J(c,n)}}}const ze=o=>[o,o];function Me(o,e,l){let i,s,f,c;const g=async _=>{if(_&&window.prompt("Are you sure you want to overwrite this domain? Type 'YeS' to continue")!="YeS"){ae("Cancelled");return}let w=await fetch(`/api/nginx/publishCerts?force=${_}`,{method:"POST",body:JSON.stringify({domain:i,cert:s,key:f})});if(w.ok)ve("Successfully published certificates"),window.location.reload();else{let d=await w.text();if(d=="ALREADY_EXISTS"){l(3,c=!0),ae("This domain already exists. If you want to overwrite it, click the Force Push button below");return}ae(d)}},n=async()=>{let _=await fetch("/api/nginx/getDomainList",{method:"POST"});if(!_.ok){let $=await _.text();ae($)}let w=await _.json();(!w||(w==null?void 0:w.length)==0)&&(w=[]);let d=w.map($=>$.Domain),I=await fetch("/api/nginx/getCertList",{method:"POST"});if(!I.ok){let $=await I.text();ae($)}let x=await I.json();(!x||(x==null?void 0:x.length)==0)&&(x=[]);let v=[],D=[];for(let $ of x){let Z=$.replace("cert-","").replace(".pem","");d.includes(Z)?D.push(Z):v.push(Z)}return{Available:v,Claimed:D}};let m;const L=async()=>{let _=await fetch(`/api/nginx/addDomain?domain=${m}`,{method:"POST"});if(_.ok)ve("Successfully added domain"),window.location.href=`/plugins/nginx/domain?id=${m}`;else{let w=await _.text();ae(w)}};function y(_){i=_,l(0,i)}function z(_){s=_,l(1,s)}function B(_){f=_,l(2,f)}const W=()=>g(!1),M=()=>g(!0);function F(_){m=_,l(4,m)}return[i,s,f,c,m,g,n,L,y,z,B,W,M,F]}class nt extends Ee{constructor(e){super(),De(this,e,Me,Ve,Le,{})}}export{nt as component};
