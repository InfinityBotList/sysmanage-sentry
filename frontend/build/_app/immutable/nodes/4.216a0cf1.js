import{S as K,i as W,s as F,C as M,a as E,k,ab as Q,h as u,c as T,l as v,m as x,b as $,G as g,I as U,g as d,f as q,d as w,K as R,y as L,z as S,A as j,B,v as X,q as y,r as C,n as b,J as I}from"../chunks/index.607a4587.js";import{s as Y,e as Z,B as ee}from"../chunks/strings.82d8c965.js";import{G as z}from"../chunks/GreyText.545daa15.js";import{T as te,n as le}from"../chunks/tasks.746ddd9e.js";function P(i,l,n){const e=i.slice();return e[5]=l[n],e[7]=n,e}function V(i,l,n){const e=i.slice();return e[9]=l[n],e}function ne(i){let l,n=i[12]+"",e;return{c(){l=k("p"),e=y(n),this.h()},l(a){l=v(a,"P",{class:!0});var c=x(l);e=C(c,n),c.forEach(u),this.h()},h(){b(l,"class","text-red-500")},m(a,c){$(a,l,c),g(l,e)},p:I,i:I,o:I,d(a){a&&u(l)}}}function se(i){let l,n,e,a,c,f=i[8],s=[];for(let t=0;t<f.length;t+=1)s[t]=G(V(i,f,t));const h=t=>w(s[t],1,1,()=>{s[t]=null});return{c(){l=k("h1"),n=y("Custom Actions"),e=E(),a=k("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){l=v(t,"H1",{class:!0});var o=x(l);n=C(o,"Custom Actions"),o.forEach(u),e=T(t),a=v(t,"DIV",{class:!0});var r=x(a);for(let m=0;m<s.length;m+=1)s[m].l(r);r.forEach(u),this.h()},h(){b(l,"class","text-2xl font-semibold"),b(a,"class","mt-4")},m(t,o){$(t,l,o),g(l,n),$(t,e,o),$(t,a,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(a,null);c=!0},p(t,o){if(o&10){f=t[8];let r;for(r=0;r<f.length;r+=1){const m=V(t,f,r);s[r]?(s[r].p(m,o),d(s[r],1)):(s[r]=G(m),s[r].c(),d(s[r],1),s[r].m(a,null))}for(X(),r=f.length;r<s.length;r+=1)h(r);q()}},i(t){if(!c){for(let o=0;o<f.length;o+=1)d(s[o]);c=!0}},o(t){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)w(s[o]);c=!1},d(t){t&&u(l),t&&u(e),t&&u(a),R(s,t)}}}function oe(i){let l=i[9].Description+"",n;return{c(){n=y(l)},l(e){n=C(e,l)},m(e,a){$(e,n,a)},p:I,d(e){e&&u(n)}}}function re(i){let l=i[9].Name+"",n;return{c(){n=y(l)},l(e){n=C(e,l)},m(e,a){$(e,n,a)},p:I,d(e){e&&u(n)}}}function G(i){let l,n,e,a=i[9].Name+"",c,f,s,h,t,o,r,m,N;s=new z({props:{$$slots:{default:[oe]},$$scope:{ctx:i}}});function J(){return i[4](i[9])}return o=new ee({props:{onclick:J,$$slots:{default:[re]},$$scope:{ctx:i}}}),{c(){l=k("div"),n=k("div"),e=k("h2"),c=y(a),f=E(),L(s.$$.fragment),h=E(),t=k("div"),L(o.$$.fragment),r=E(),m=k("hr"),this.h()},l(_){l=v(_,"DIV",{class:!0});var p=x(l);n=v(p,"DIV",{class:!0});var A=x(n);e=v(A,"H2",{class:!0});var D=x(e);c=C(D,a),D.forEach(u),f=T(A),S(s.$$.fragment,A),A.forEach(u),h=T(p),t=v(p,"DIV",{class:!0});var O=x(t);S(o.$$.fragment,O),O.forEach(u),p.forEach(u),r=T(_),m=v(_,"HR",{class:!0}),this.h()},h(){b(e,"class","text-lg font-semibold"),b(n,"class","flex flex-col"),b(t,"class","flex flex-row items-center"),b(l,"class","flex flex-row items-center justify-between"),b(m,"class","my-4")},m(_,p){$(_,l,p),g(l,n),g(n,e),g(e,c),g(n,f),j(s,n,null),g(l,h),g(l,t),j(o,t,null),$(_,r,p),$(_,m,p),N=!0},p(_,p){i=_;const A={};p&8192&&(A.$$scope={dirty:p,ctx:i}),s.$set(A);const D={};p&8192&&(D.$$scope={dirty:p,ctx:i}),o.$set(D)},i(_){N||(d(s.$$.fragment,_),d(o.$$.fragment,_),N=!0)},o(_){w(s.$$.fragment,_),w(o.$$.fragment,_),N=!1},d(_){_&&u(l),B(s),B(o),_&&u(r),_&&u(m)}}}function ae(i){let l,n;return l=new z({props:{$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){L(l.$$.fragment)},l(e){S(l.$$.fragment,e)},m(e,a){j(l,e,a),n=!0},p(e,a){const c={};a&8192&&(c.$$scope={dirty:a,ctx:e}),l.$set(c)},i(e){n||(d(l.$$.fragment,e),n=!0)},o(e){w(l.$$.fragment,e),n=!1},d(e){B(l,e)}}}function ce(i){let l;return{c(){l=y("Loading actions...")},l(n){l=C(n,"Loading actions...")},m(n,e){$(n,l,e)},d(n){n&&u(l)}}}function H(i){let l,n;return l=new te({props:{output:i[0][i[7]]}}),{c(){L(l.$$.fragment)},l(e){S(l.$$.fragment,e)},m(e,a){j(l,e,a),n=!0},p(e,a){const c={};a&1&&(c.output=e[0][e[7]]),l.$set(c)},i(e){n||(d(l.$$.fragment,e),n=!0)},o(e){w(l.$$.fragment,e),n=!1},d(e){B(l,e)}}}function ie(i){let l,n,e,a,c={ctx:i,current:null,token:null,hasCatch:!0,pending:ae,then:se,catch:ne,value:8,error:12,blocks:[,,,]};M(i[1](),c);let f=i[2],s=[];for(let t=0;t<f.length;t+=1)s[t]=H(P(i,f,t));const h=t=>w(s[t],1,1,()=>{s[t]=null});return{c(){l=E(),n=k("section"),c.block.c(),e=E();for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){Q("svelte-vaajg8",document.head).forEach(u),l=T(t),n=v(t,"SECTION",{});var r=x(n);c.block.l(r),e=T(r);for(let m=0;m<s.length;m+=1)s[m].l(r);r.forEach(u),this.h()},h(){document.title="Custom Actions"},m(t,o){$(t,l,o),$(t,n,o),c.block.m(n,c.anchor=null),c.mount=()=>n,c.anchor=e,g(n,e);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(n,null);a=!0},p(t,[o]){if(i=t,U(c,i,o),o&1){f=i[2];let r;for(r=0;r<f.length;r+=1){const m=P(i,f,r);s[r]?(s[r].p(m,o),d(s[r],1)):(s[r]=H(m),s[r].c(),d(s[r],1),s[r].m(n,null))}for(X(),r=f.length;r<s.length;r+=1)h(r);q()}},i(t){if(!a){d(c.block);for(let o=0;o<f.length;o+=1)d(s[o]);a=!0}},o(t){for(let o=0;o<3;o+=1){const r=c.blocks[o];w(r)}s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)w(s[o]);a=!1},d(t){t&&u(l),t&&u(n),c.block.d(),c.token=null,c=null,R(s,t)}}}function fe(i,l,n){const e=async()=>{let h=await fetch("/api/actions/getActionList",{method:"POST"});if(!h.ok){let o=await h.text();throw new Error(o)}return await await h.json()};let a=[],c=[];const f=async h=>{if(h.ConfirmDialog){let o=window.prompt(h.ConfirmDialog+" (yes to confirm)");if((o==null?void 0:o.toLowerCase())!="yes")return}let t=await fetch(`/api/actions/executeAction?actionName=${h.Name}`,{method:"POST"});if(t.ok)t.headers.get("X-Task-ID")&&(a.push(t.headers.get("X-Task-ID")||""),n(0,c[a.length-1]=[h.Name+`
`],c),le(a[a.length-1],o=>{n(0,c[a.length-1]=[h.Name+`
`,...o],c)})),Y("Action executed successfully");else{let o=await t.text();Z(o)}};return[c,e,a,f,h=>f(h)]}class pe extends K{constructor(l){super(),W(this,l,fe,ie,F,{})}}export{pe as component};
