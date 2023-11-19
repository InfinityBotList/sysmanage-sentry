import{S as B,i as G,s as H,a7 as J,k as A,q as P,a as w,l as S,m as v,r as I,h as k,c as C,n as _,b as T,G as b,ae as q,H as R,u as M,a8 as U,a9 as V,aa as X,g as Y,d as j,T as z,J as F}from"./index.607a4587.js";function D(t){let e,l={description:t[5]}+"",o;return{c(){e=A("span"),o=P(l),this.h()},l(s){e=S(s,"SPAN",{class:!0});var r=v(e);o=I(r,l),r.forEach(k),this.h()},h(){_(e,"class","text-md text-gray-500 dark:text-gray-400 mb-2")},m(s,r){T(s,e,r),b(e,o)},p(s,r){r&32&&l!==(l={description:s[5]}+"")&&M(o,l)},d(s){s&&k(e)}}}function K(t){let e,l,o;return{c(){e=A("p"),l=A("span"),o=P(t[8]),this.h()},l(s){e=S(s,"P",{class:!0});var r=v(e);l=S(r,"SPAN",{class:!0});var a=v(l);o=I(a,t[8]),a.forEach(k),r.forEach(k),this.h()},h(){_(l,"class","font-medium"),_(e,"class","mt-2 text-sm text-red-600 dark:text-red-500")},m(s,r){T(s,e,r),b(e,l),b(l,o)},p(s,r){r&256&&M(o,s[8])},d(s){s&&k(e)}}}function O(t){let e,l,o;return{c(){e=A("p"),l=A("span"),o=P("Looks good!"),this.h()},l(s){e=S(s,"P",{class:!0});var r=v(e);l=S(r,"SPAN",{class:!0});var a=v(l);o=I(a,"Looks good!"),a.forEach(k),r.forEach(k),this.h()},h(){_(l,"class","font-medium"),_(e,"class","mt-2 text-sm text-green-600 dark:text-green-500")},m(s,r){T(s,e,r),b(e,l),b(l,o)},p:F,d(s){s&&k(e)}}}function Q(t){let e,l,o,s,r,a,h,E,n,u,g,d=t[5]&&D(t);function y(f,c){if(f[7]==!0)return O;if(f[7]==!1)return K}let p=y(t),m=p&&p(t);const L=t[12].default,i=J(L,t,t[11],null);return{c(){e=A("div"),l=A("label"),o=P(t[2]),s=w(),d&&d.c(),r=w(),a=A("textarea"),h=w(),m&&m.c(),E=w(),i&&i.c(),this.h()},l(f){e=S(f,"DIV",{class:!0});var c=v(e);l=S(c,"LABEL",{for:!0,class:!0});var N=v(l);o=I(N,t[2]),N.forEach(k),s=C(c),d&&d.l(c),r=C(c),a=S(c,"TEXTAREA",{minlength:!0,id:!0,class:!0,placeholder:!0}),v(a).forEach(k),h=C(c),m&&m.l(c),E=C(c),i&&i.l(c),c.forEach(k),this.h()},h(){_(l,"for",t[1]),_(l,"class","block mb-1 font-medium text-gray-900 dark:text-gray-300"),_(a,"minlength",t[4]),_(a,"id",t[1]),_(a,"class","h-36 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),_(a,"placeholder",t[3]),a.required=!0,_(e,"class",t[6])},m(f,c){T(f,e,c),b(e,l),b(l,o),b(e,s),d&&d.m(e,null),b(e,r),b(e,a),q(a,t[0]),b(e,h),m&&m.m(e,null),b(e,E),i&&i.m(e,null),n=!0,u||(g=[R(a,"change",t[9]),R(a,"input",t[13])],u=!0)},p(f,[c]){(!n||c&4)&&M(o,f[2]),(!n||c&2)&&_(l,"for",f[1]),f[5]?d?d.p(f,c):(d=D(f),d.c(),d.m(e,r)):d&&(d.d(1),d=null),(!n||c&16)&&_(a,"minlength",f[4]),(!n||c&2)&&_(a,"id",f[1]),(!n||c&8)&&_(a,"placeholder",f[3]),c&1&&q(a,f[0]),p===(p=y(f))&&m?m.p(f,c):(m&&m.d(1),m=p&&p(f),m&&(m.c(),m.m(e,E))),i&&i.p&&(!n||c&2048)&&U(i,L,f,f[11],n?X(L,f[11],c,null):V(f[11]),null),(!n||c&64)&&_(e,"class",f[6])},i(f){n||(Y(i,f),n=!0)},o(f){j(i,f),n=!1},d(f){f&&k(e),d&&d.d(),m&&m.d(),i&&i.d(f),u=!1,z(g)}}}function W(t,e,l){let{$$slots:o={},$$scope:s}=e,{id:r}=e,{label:a}=e,{placeholder:h}=e,{minlength:E}=e,{value:n=""}=e,{showErrors:u=!0}=e,{description:g=""}=e,{inpClass:d="mb-6"}=e,y=null,p="";function m(){if(u){if(console.log(n),!n){l(7,y=null);return}n.length<E?(l(7,y=!1),l(8,p=`Must be at least ${E} characters long`)):l(7,y=!0)}}function L(){n=this.value,l(0,n)}return t.$$set=i=>{"id"in i&&l(1,r=i.id),"label"in i&&l(2,a=i.label),"placeholder"in i&&l(3,h=i.placeholder),"minlength"in i&&l(4,E=i.minlength),"value"in i&&l(0,n=i.value),"showErrors"in i&&l(10,u=i.showErrors),"description"in i&&l(5,g=i.description),"inpClass"in i&&l(6,d=i.inpClass),"$$scope"in i&&l(11,s=i.$$scope)},[n,r,a,h,E,g,d,y,p,m,u,s,o,L]}class ee extends B{constructor(e){super(),G(this,e,W,Q,H,{id:1,label:2,placeholder:3,minlength:4,value:0,showErrors:10,description:5,inpClass:6})}}function Z(t){let e,l,o,s,r,a,h;const E=t[3].default,n=J(E,t,t[2],null);return{c(){e=A("details"),l=A("summary"),o=A("span"),s=P(t[0]),r=w(),a=A("article"),n&&n.c(),this.h()},l(u){e=S(u,"DETAILS",{});var g=v(e);l=S(g,"SUMMARY",{class:!0});var d=v(l);o=S(d,"SPAN",{});var y=v(o);s=I(y,t[0]),y.forEach(k),d.forEach(k),r=C(g),a=S(g,"ARTICLE",{class:!0});var p=v(a);n&&n.l(p),p.forEach(k),g.forEach(k),this.h()},h(){_(l,"class","font-semibold text-xl opacity-80 hover:cursor-pointer align-middle"),_(a,"class","ml-5 mb-3"),e.open=t[1]},m(u,g){T(u,e,g),b(e,l),b(l,o),b(o,s),b(e,r),b(e,a),n&&n.m(a,null),h=!0},p(u,[g]){(!h||g&1)&&M(s,u[0]),n&&n.p&&(!h||g&4)&&U(n,E,u,u[2],h?X(E,u[2],g,null):V(u[2]),null),(!h||g&2)&&(e.open=u[1])},i(u){h||(Y(n,u),h=!0)},o(u){j(n,u),h=!1},d(u){u&&k(e),n&&n.d(u)}}}function x(t,e,l){let{$$slots:o={},$$scope:s}=e,{title:r}=e,{open:a=!1}=e;return t.$$set=h=>{"title"in h&&l(0,r=h.title),"open"in h&&l(1,a=h.open),"$$scope"in h&&l(2,s=h.$$scope)},[r,a,s,o]}class le extends B{constructor(e){super(),G(this,e,x,Z,H,{title:0,open:1})}}export{ee as I,le as S};