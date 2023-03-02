(function(){"use strict";var a={531:function(a,t,e){var n=e(963),i=e(252);function o(a,t,e,n,o,r){const d=(0,i.up)("NavBar"),s=(0,i.up)("LandingVue"),c=(0,i.up)("About"),f=(0,i.up)("Competences"),l=(0,i.up)("Contact");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d),(0,i.Wm)(s),(0,i.Wm)(c),(0,i.Wm)(f),(0,i.Wm)(l)],64)}const r=a=>((0,i.dD)("data-v-82b59fe2"),a=a(),(0,i.Cn)(),a),d={id:"home",class:"container"},s=r((()=>(0,i._)("span",{class:"bg"},null,-1))),c=r((()=>(0,i._)("h1",null,"Théo Grosjean",-1))),f=r((()=>(0,i._)("h2",null,"Front-end Developer",-1))),l=r((()=>(0,i._)("p",null,"scroll down",-1))),v=r((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"})],-1))),u=[s,c,f,l,v];function p(a,t,e,n,o,r){return(0,i.wg)(),(0,i.iD)("div",d,u)}var m={name:"LandingVue"},h=e(744);const b=(0,h.Z)(m,[["render",p],["__scopeId","data-v-82b59fe2"]]);var g=b;const w=a=>((0,i.dD)("data-v-fb7aaab4"),a=a(),(0,i.Cn)(),a),y={class:"navbar"},C=w((()=>(0,i._)("li",null,"Contact",-1)));function _(a,t,e,n,o,r){return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("ul",null,[(0,i._)("li",{onClick:t[0]||(t[0]=a=>r.scroll("home"))},"Home"),(0,i._)("li",{onClick:t[1]||(t[1]=a=>r.scroll("about"))},"About"),C])])}var k={name:"NavBar",methods:{scroll(a){var t=document.getElementById(a);t.scrollIntoView({behavior:"smooth"})}}};const I=(0,h.Z)(k,[["render",_],["__scopeId","data-v-fb7aaab4"]]);var x=I,A=e.p+"img/theo.9e05f317.jpg";const j={id:"about",class:"about"},B=(0,i.uE)('<div class="profil" data-v-7fa9c226><img id="imageProfil" src="'+A+'" alt="me" data-v-7fa9c226><div id="aboutText" class="text" data-v-7fa9c226><h1 data-v-7fa9c226>About</h1><p data-v-7fa9c226> My name is Théo and I am passionate about web development. Currently in my fourth year at Epitech, I have gained solid experience in web development through my academic journey and my work experience in alternance. I am always looking for new challenges to improve my technical skills and develop my creativity. I have a curious and persevering mind, and I am constantly searching for innovative solutions and new techniques. </p></div></div><div class="experiences" data-v-7fa9c226><h1 data-v-7fa9c226>Experiences</h1><div class="xp" data-v-7fa9c226><ul data-v-7fa9c226><li data-v-7fa9c226><h3 data-v-7fa9c226>Full stack Developer | ALIAE - NANCY</h3><h4 data-v-7fa9c226>Alternance de 2 ans | 2022 - 2024</h4><p data-v-7fa9c226> Création de plateformes web complètes : visualisation de conversation, gestion des données. Création de mockups. Présentation lors de meetings. </p><h4 data-v-7fa9c226>Stage de 4 mois | 2022</h4><p data-v-7fa9c226> Refonte visuel d&#39;un &#39;ChatBot&#39;, optimisation des requettes et deploiement </p></li><li data-v-7fa9c226><h3 data-v-7fa9c226>Developer | LA BANQUE POSTALE - NANCY</h3><h4 data-v-7fa9c226>Stage en alternance de 6 mois | 2021</h4><p data-v-7fa9c226> Automatisation de la création des &#39;Baseline compliance&#39; </p><h4 data-v-7fa9c226>Stage de 4 mois | 2020</h4><p data-v-7fa9c226> Mise à jour et création des outils internes au secteur DSIBR </p></li></ul></div></div>',2),E=[B];function D(a,t,e,n,o,r){return(0,i.wg)(),(0,i.iD)("div",j,E)}var S={data(){return{animate:!0}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const a=document.getElementById("imageProfil"),t=document.getElementById("aboutText"),e=a.getBoundingClientRect().top,n=window.innerHeight;e<n&&this.animate&&(this.animate=!1,t.style.animation="txtAbout 0.5s linear forwards",a.style.animation="profilImg 0.5s linear forwards")}}};const O=(0,h.Z)(S,[["render",D],["__scopeId","data-v-7fa9c226"]]);var N=O;const L={class:"container"};function P(a,t,e,n,o,r){return(0,i.wg)(),(0,i.iD)("div",L)}var T={};const Z=(0,h.Z)(T,[["render",P],["__scopeId","data-v-923191b0"]]);var R=Z,V=e.p+"img/vue.eafad312.png",W=e.p+"img/css.87d493d3.png",q=e.p+"img/python.4c8b41e4.png",H=e.p+"img/js.15da7f96.png",F=e.p+"img/docker.c12466e7.png",J=e.p+"img/node.cd9b6868.png",M=e.p+"img/react.d225202e.png",Y=e.p+"img/sql.203437b1.png";const G={id:"competences",class:"container"},Q=(0,i.uE)('<h1 data-v-b3fa49f8>Competences</h1><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+V+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>VueJs</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+W+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>CSS</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+q+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>Python</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+H+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>JavaScript</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+F+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>Docker</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+J+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>NodeJS</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+M+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>React</h3></div></span><span data-v-b3fa49f8><div class="card" data-v-b3fa49f8><img src="'+Y+'" data-v-b3fa49f8><h3 data-v-b3fa49f8>sql</h3></div></span>',9),U=[Q];function z(a,t,e,n,o,r){return(0,i.wg)(),(0,i.iD)("div",G,U)}var K={data(){return{animate:!0}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const a=document.getElementById("competences"),t=a.getBoundingClientRect().top,e=window.innerHeight;t<e&&this.animate&&(this.animate=!1,a.style.animation="txtAbout 0.5s linear forwards")}}};const X=(0,h.Z)(K,[["render",z],["__scopeId","data-v-b3fa49f8"]]);var $=X,aa={name:"App",components:{LandingVue:g,NavBar:x,About:N,Contact:R,Competences:$}};const ta=(0,h.Z)(aa,[["render",o]]);var ea=ta;(0,n.ri)(ea).mount("#app")}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return a[n](o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,i,o){if(!n){var r=1/0;for(f=0;f<a.length;f++){n=a[f][0],i=a[f][1],o=a[f][2];for(var d=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[s])}))?n.splice(s--,1):(d=!1,o<r&&(r=o));if(d){a.splice(f--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var f=a.length;f>0&&a[f-1][2]>o;f--)a[f]=a[f-1];a[f]=[n,i,o]}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.p=""}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var i,o,r=n[0],d=n[1],s=n[2],c=0;if(r.some((function(t){return 0!==a[t]}))){for(i in d)e.o(d,i)&&(e.m[i]=d[i]);if(s)var f=s(e)}for(t&&t(n);c<r.length;c++)o=r[c],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(f)},n=self["webpackChunktheogrosjean"]=self["webpackChunktheogrosjean"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(531)}));n=e.O(n)})();
//# sourceMappingURL=app.a379a1a9.js.map