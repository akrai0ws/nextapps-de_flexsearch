/*
 FlexSearch v0.3.5
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function I(g){var k=0;return function(){return k<g.length?{done:!1,value:g[k++]}:{done:!0}}}function J(g){var k="undefined"!=typeof Symbol&&Symbol.iterator&&g[Symbol.iterator];return k?k.call(g):{next:I(g)}}var Q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,R="function"==typeof Object.defineProperties?Object.defineProperty:function(g,k,e){g!=Array.prototype&&g!=Object.prototype&&(g[k]=e.value)};
function S(g,k){if(k){var e=Q;g=g.split(".");for(var h=0;h<g.length-1;h++){var a=g[h];a in e||(e[a]={});e=e[a]}g=g[g.length-1];h=e[g];k=k(h);k!=h&&null!=k&&R(e,g,{configurable:!0,writable:!0,value:k})}}
S("Promise",function(g){function k(d){this.b=0;this.g=void 0;this.a=[];var a=this.c();try{d(a.resolve,a.reject)}catch(q){a.reject(q)}}function e(){this.a=null}function h(d){return d instanceof k?d:new k(function(a){a(d)})}if(g)return g;e.prototype.b=function(d){if(null==this.a){this.a=[];var a=this;this.c(function(){a.g()})}this.a.push(d)};var a=Q.setTimeout;e.prototype.c=function(d){a(d,0)};e.prototype.g=function(){for(;this.a&&this.a.length;){var d=this.a;this.a=[];for(var a=0;a<d.length;++a){var e=
d[a];d[a]=null;try{e()}catch(D){this.f(D)}}}this.a=null};e.prototype.f=function(d){this.c(function(){throw d;})};k.prototype.c=function(){function d(d){return function(k){e||(e=!0,d.call(a,k))}}var a=this,e=!1;return{resolve:d(this.u),reject:d(this.f)}};k.prototype.u=function(d){if(d===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof k)this.v(d);else{a:switch(typeof d){case "object":var a=null!=d;break a;case "function":a=!0;break a;default:a=!1}a?this.o(d):this.j(d)}};
k.prototype.o=function(a){var d=void 0;try{d=a.then}catch(q){this.f(q);return}"function"==typeof d?this.w(d,a):this.j(a)};k.prototype.f=function(a){this.l(2,a)};k.prototype.j=function(a){this.l(1,a)};k.prototype.l=function(a,e){if(0!=this.b)throw Error("Cannot settle("+a+", "+e+"): Promise already settled in state"+this.b);this.b=a;this.g=e;this.m()};k.prototype.m=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)l.b(this.a[a]);this.a=null}};var l=new e;k.prototype.v=function(a){var d=this.c();
a.B(d.resolve,d.reject)};k.prototype.w=function(a,e){var d=this.c();try{a.call(e,d.resolve,d.reject)}catch(D){d.reject(D)}};k.prototype.then=function(a,e){function d(a,d){return"function"==typeof a?function(d){try{g(a(d))}catch(C){h(C)}}:d}var g,h,l=new k(function(a,d){g=a;h=d});this.B(d(a,g),d(e,h));return l};k.prototype.catch=function(a){return this.then(void 0,a)};k.prototype.B=function(a,e){function d(){switch(k.b){case 1:a(k.g);break;case 2:e(k.g);break;default:throw Error("Unexpected state: "+
k.b);}}var k=this;null==this.a?l.b(d):this.a.push(d)};k.resolve=h;k.reject=function(a){return new k(function(d,e){e(a)})};k.race=function(a){return new k(function(d,e){for(var k=J(a),g=k.next();!g.done;g=k.next())h(g.value).B(d,e)})};k.all=function(a){var e=J(a),d=e.next();return d.done?h([]):new k(function(a,k){function g(d){return function(e){l[d]=e;q--;0==q&&a(l)}}var l=[],q=0;do l.push(void 0),q++,h(d.value).B(g(l.length-1),k),d=e.next();while(!d.done)})};return k});
(function(g,k,e){var h;(h=e.define)&&h.amd?h([],function(){return k}):(h=e.modules)?h[g.toLowerCase()]=k:"object"===typeof exports?module.exports=k:e[g]=k})("FlexSearch",function X(g){function e(b){E(b)&&((b=K[b])||console.warn("Preset not found: "+b));b||(b=x);this.id=b.id||Y++;this.init(b);h(this,"index",function(){return this.a});h(this,"length",function(){return Object.keys(this.a).length})}function h(b,c,a){Object.defineProperty(b,c,{get:a})}function a(b){return new RegExp(b,"g")}function l(b,
c){for(var a=0;a<c.length;a+=2)b=b.replace(c[a],c[a+1]);return b}function d(b,c,a,f,d,L,e){if(c[a])return c[a];d=d?(9-(e||6))*L+(e||6)*d:L;c[a]=d;d>=e&&(b=b[9-(d+.5>>0)],b=b[a]||(b[a]=[]),b[b.length]=f);return d}function G(b,c){if(b)for(var a=Object.keys(b),f=0,d=a.length;f<d;f++){var e=a[f],g=b[e];if(g)for(var A=0,h=g.length;A<h;A++)if(g[A]===c){1===h?delete b[e]:g.splice(A,1);break}else"object"===typeof g[A]&&G(g[A],c)}}function q(b){for(var c="",a="",f="",d=0;d<b.length;d++){var e=b[d];if(e!==
a)if(d&&"h"===e){if(f="a"===f||"e"===f||"i"===f||"o"===f||"u"===f||"y"===f,("a"===a||"e"===a||"i"===a||"o"===a||"u"===a||"y"===a)&&f||" "===a)c+=e}else c+=e;f=d===b.length-1?"":b[d+1];a=e}return c}function D(b,c){var a=y();if(b)for(var f=0;f<b.length;f++){var d=c?c(b[f]):b[f];a[d]=String.fromCharCode(65E3-b.length+f)}return a}function T(b,c){var d=[];if(b)for(var f in b)if(b.hasOwnProperty(f)){var e=c?c(f):f;d.push(a("(?=.{"+(e.length+3)+",})"+e+"$"),c?c(b[f]):b[f])}return d}function W(b,c){b=b.length-
c.length;return 0>b?1:b?-1:0}function U(b,c){b=b.length-c.length;return 0>b?-1:b?1:0}function V(b,c,a){var f=[],d=b.length;if(1<d){b.sort(U);for(var e=y(),z=b[0],A=z.length,g=0;g<A;)e["@"+z[g++]]=1;for(var h,l=0,t=0;++t<d;){var r=!1,u=t===d-1;var n=[];z=b[t];A=z.length;for(g=0;g<A;){h=z[g++];var m="@"+h;if(e[m]){var p=e[m];if(p===t){if(u){if(f[l++]=h,c&&l===c)return f}else e[m]=t+1;r=!0}else a&&(m=n[p]||(n[p]=[]),m[m.length]=h)}}if(!r&&!a)break}if(a&&(l=f.length,(t=n.length)&&(!c||l<c)))for(;t--;)if(h=
n[t])for(b=0,a=h.length;b<a;b++)if(f[l++]=h[b],c&&l===c)return f}else d&&(f=b[0],c&&f.length>c&&(f=f.slice(0,c)));return f}function E(b){return"string"===typeof b}function C(b){return"function"===typeof b}function w(b){return"undefined"===typeof b}function M(b){for(var c=Array(b),a=0;a<b;a++)c[a]=y();return c}function y(){return Object.create(null)}function Z(b,c,a,f){b=g("flexsearch","id"+b,function(){var b,c;self.onmessage=function(a){if(a=a.data)if(a.search){var f=c.search(a.content,a.threshold?
{limit:a.limit,threshold:a.threshold}:a.limit);self.postMessage({id:b,content:a.content,limit:a.limit,result:f})}else a.add?c.add(a.id,a.content):a.update?c.update(a.id,a.content):a.remove?c.remove(a.id):a.clear?c.clear():a.info?(a=c.info(),a.worker=b,console.log(a)):a.register&&(b=a.id,a.options.cache=!1,a.options.async=!1,a.options.worker=!1,c=(new Function(a.register.substring(a.register.indexOf("{")+1,a.register.lastIndexOf("}"))))(),c=new c(a.options))}},function(b){(b=b.data)&&b.result&&f(b.id,
b.content,b.result,b.limit)},c);var d=X.toString();a.id=c;b.postMessage({register:d,options:a,id:c});return b}var x={encode:"icase",h:"forward",A:!1,cache:!1,async:!1,i:!1,threshold:0,depth:0},K={memory:{encode:"extra",h:"strict",threshold:7},speed:{encode:"icase",h:"strict",threshold:7,depth:2},match:{encode:"extra",h:"full"},score:{encode:"extra",h:"strict",threshold:5,depth:4},balance:{encode:"balance",h:"strict",threshold:6,depth:3},fastest:{encode:"icase",h:"strict",threshold:9,depth:1}},F=[],
Y=0,N=a("\\W+"),O={},P={};(function(){for(var b=Object.getOwnPropertyNames({}.__proto__),c=y(),a=0;a<b.length;a++)c[b[a]]=1;return c})();e.create=function(b){return new e(b)};e.registerMatcher=function(b){for(var c in b)b.hasOwnProperty(c)&&F.push(a(c),b[c]);return this};e.registerEncoder=function(b,c){B[b]=c.bind(B);return this};e.registerLanguage=function(b,c){O[b]=c.filter;P[b]=c.stemmer;return this};e.encode=function(b,c){return B[b](c)};e.prototype.init=function(b){this.l=[];b||(b=x);var c=b.profile,
a=c?K[c]:{};a||console.warn("Preset not found: "+c);if(c=b.worker)if("undefined"!==typeof Worker){var f=this,d=parseInt(c,10)||4;f.v=-1;f.m=0;f.f=[];f.w=null;f.g=Array(d);for(var e=0;e<d;e++)f.g[e]=Z(f.id,e,b,function(b,c,a,d){if(f.m!==f.i)return f.f=f.f.concat(a),f.m++,d&&f.f.length>=d&&(f.m=f.i),f.w&&f.m===f.i&&(f.cache&&f.j.set(c,f.f),f.w(f.f),f.f=[]),f})}else b.worker=!1,this.g=null;this.h=b.tokenize||a.h||this.h||x.h;this.async="undefined"===typeof Promise||w(c=b.async)?this.async||x.async:c;
this.i=w(c=b.worker)?this.i||x.i:c;this.threshold=w(c=b.threshold)?a.threshold||this.threshold||x.threshold:c;this.depth=w(c=b.depth)?a.depth||this.depth||x.depth:c;this.A=w(c=b.suggest)?this.A||x.A:c;this.o=(c=w(c=b.encode)?a.encode:c)&&B[c]&&B[c].bind(B)||(C(c)?c:this.o||!1);(c=b.matcher)&&this.addMatcher(c);if(c=b.filter)this.filter=D(O[c]||c,this.o);if(c=b.stemmer)this.stemmer=T(P[c]||c,this.o);this.b=M(10-(this.threshold||0));this.c=y();this.a=y();this.u=!0;this.j=(this.cache=c=w(c=b.cache)?
this.cache||x.cache:c)?new aa(c):!1;return this};e.prototype.encode=function(b){b&&F.length&&(b=l(b,F));b&&this.l.length&&(b=l(b,this.l));b&&this.o&&(b=this.o(b));b&&this.stemmer&&(b=l(b,this.stemmer));return b};e.prototype.addMatcher=function(b){var c=this.l,d;for(d in b)b.hasOwnProperty(d)&&c.push(a(d),b[d]);return this};e.prototype.add=function(b,c,a,f,e){if(c&&E(c)&&(b||0===b)){var g="@"+b;if(this.a[g]&&!f)return this.update(b,c);if(this.i)return++this.v>=this.g.length&&(this.v=0),this.g[this.v].postMessage({add:!0,
id:b,content:c}),this.a[g]=""+this.v,a&&a(),this;if(!e){if(this.async&&"function"!==typeof importScripts){var z=this;g=new Promise(function(a){setTimeout(function(){z.add(b,c,null,f,!0);z=null;a()})});if(a)g.then(a);else return g;return this}if(a)return this.add(b,c,null,f,!0),a(),this}c=this.encode(c);if(!c.length)return this;a=this.h;e=C(a)?a(c):c.split(N);var h=y();h._ctx=y();for(var l=this.threshold,H=this.depth,q=this.b,t=e.length,r=0;r<t;r++){var u=e[r];if(u){var n=u.length,m=(t-r)/t,p="";switch(a){case "reverse":case "both":for(var v=
n-1;1<=v;v--)p=u[v]+p,d(q,h,p,b,(n-v)/n,m,l);p="";case "forward":for(v=0;v<n;v++)p+=u[v],d(q,h,p,b,1,m,l);break;case "full":for(v=0;v<n;v++)for(var x=(n-v)/n,w=n;w>v;w--)p=u.substring(v,w),d(q,h,p,b,x,m,l);break;default:if(n=d(q,h,u,b,1,m,l),H&&1<t&&n>=l)for(n=h._ctx[u]||(h._ctx[u]=y()),u=this.c[u]||(this.c[u]=M(10-(l||0))),m=r-H,p=r+H+1,0>m&&(m=0),p>t&&(p=t);m<p;m++)m!==r&&d(u,n,e[m],b,0,10-(m<r?r-m:m-r),l)}}}this.a[g]=1;this.u=!1}return this};e.prototype.update=function(b,a,d){this.a["@"+b]&&E(a)&&
(this.remove(b),this.add(b,a,d,!0));return this};e.prototype.remove=function(b,a,d){var c="@"+b;if(this.a[c]){if(this.i)return this.g[this.a[c]].postMessage({remove:!0,id:b}),delete this.a[c],a&&a(),this;if(!d){if(this.async&&"function"!==typeof importScripts){var e=this;c=new Promise(function(a){setTimeout(function(){e.remove(b,null,!0);e=null;a()})});if(a)c.then(a);else return c;return this}if(a)return this.remove(b,null,!0),a(),this}for(a=0;a<10-(this.threshold||0);a++)G(this.b[a],b);this.depth&&
G(this.c,b);delete this.a[c];this.u=!1}return this};e.prototype.search=function(a,c,d,e){var b=a,f=[];if("object"===typeof a){(d=a.callback||c)&&(b.callback=null);c=a.limit;var g=a.threshold;a=a.query}g||(g=this.threshold||0);C(c)?(d=c,c=1E3):c||0===c||(c=1E3);if(this.i)for(this.w=d,this.m=0,this.f=[],f=0;f<this.i;f++)this.g[f].postMessage({search:!0,limit:c,threshold:g,content:a});else{if(!e){if(this.async&&"function"!==typeof importScripts){var h=this;a=new Promise(function(a){setTimeout(function(){a(h.search(b,
c,null,!0));h=null})});if(d)a.then(d);else return a;return this}if(d)return d(this.search(b,c,null,!0)),this}if(!a||!E(a))return f;b=a;if(this.cache)if(this.u){if(d=this.j.get(a))return d}else this.j.clear(),this.u=!0;b=this.encode(b);if(!b.length)return f;d=this.h;d=C(d)?d(b):b.split(N);e=d.length;var l=!0,z=[],q=y();if(1<e)if(this.depth){var t=!0;var r=d[0];q[r]=1}else d.sort(W);var u;if(!t||(u=this.c)[r])for(var n=t?1:0;n<e;n++){var m=d[n];if(m){if(!q[m]){var p=[],v=!1,w=0;if(r=t?u[r]:this.b)for(var x=
void 0,B=0;B<10-g;B++)if(x=r[B][m])p[w++]=x,v=!0;if(v)z[z.length]=1<w?p.concat.apply([],p):p[0];else if(!this.A){l=!1;break}q[m]=1}r=m}}else l=!1;l&&(f=V(z,c,this.A));this.cache&&this.j.set(a,f);return f}};e.prototype.info=function(){if(this.i)for(var a=0;a<this.i;a++)this.g[a].postMessage({info:!0,id:this.id});else{for(var c,d=0,e=0,g=0,h=0;h<10-(this.threshold||0);h++){a=Object.keys(this.b[h]);for(var l=0;l<a.length;l++)c=this.b[h][a[l]].length,d+=1*c+2*a[l].length+4,e+=c,g+=2*a[l].length}a=Object.keys(this.a);
c=a.length;for(h=0;h<c;h++)d+=2*a[h].length+2;return{id:this.id,memory:d,items:c,sequences:e,chars:g,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:F.length+(this.l?this.l.length:0),worker:this.i,threshold:this.threshold,depth:this.depth,contextual:this.depth&&"strict"===this.h}}};e.prototype.clear=function(){return this.destroy().init()};e.prototype.destroy=function(){this.cache&&(this.j.clear(),this.j=null);this.b=this.c=this.a=null;return this};e.prototype.export=function(){return JSON.stringify([this.b,
this.c,this.a])};e.prototype.import=function(a){a=JSON.parse(a);this.b=a[0];this.c=a[1];this.a=a[2]};var B={icase:function(a){return a.toLowerCase()},simple:function(){var b=[a("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",a("[\u00e8\u00e9\u00ea\u00eb]"),"e",a("[\u00ec\u00ed\u00ee\u00ef]"),"i",a("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",a("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",a("[\u00fd\u0177\u00ff]"),"y",a("\u00f1"),"n",a("\u00e7"),"c",a("\u00df"),"s",a(" & ")," and ",a("[-/]")," ",a("[^a-z0-9 ]"),
"",a("\\s+")," "];return function(a){a=l(a.toLowerCase(),b);return" "!==a?a:""}}(),advanced:function(){var b=[a("ae"),"a",a("ai"),"ei",a("ay"),"ei",a("ey"),"ei",a("oe"),"o",a("ue"),"u",a("ie"),"i",a("sz"),"s",a("zs"),"s",a("sh"),"s",a("ck"),"k",a("cc"),"k",a("dt"),"t",a("ph"),"f",a("pf"),"f",a("ou"),"o",a("uo"),"u"];return function(a,d){if(!a)return a;a=this.simple(a);2<a.length&&(a=l(a,b));d||1<a.length&&(a=q(a));return a}}(),extra:function(){var b=[a("p"),"b",a("z"),"s",a("[cgq]"),"k",a("n"),"m",
a("d"),"t",a("[vw]"),"f",a("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=a.split(" ");for(var c=0;c<a.length;c++){var d=a[c];1<d.length&&(a[c]=d[0]+l(d.substring(1),b))}a=a.join(" ");a=q(a)}return a}}(),balance:function(){var b=[a("[-/]")," ",a("[^a-z0-9 ]"),"",a("\\s+")," "];return function(a){return q(l(a.toLowerCase(),b))}}()},aa=function(){function a(a){this.clear();this.C=!0!==a&&a}a.prototype.clear=function(){this.cache=y();this.count=y();this.index=
y();this.s=[]};a.prototype.set=function(a,b){if(this.C&&w(this.cache[a])){var c=this.s.length;if(c===this.C){c--;var d=this.s[c];delete this.cache[d];delete this.count[d];delete this.index[d]}this.index[a]=c;this.s[c]=a;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};a.prototype.get=function(a){var b=this.cache[a];if(this.C&&b){var c=++this.count[a],d=this.index,e=d[a];if(0<e){for(var g=this.s,h=e;this.count[g[--e]]<=c&&-1!==e;);e++;if(e!==h){for(c=h;c>e;c--)h=g[c-1],g[c]=h,d[h]=
c;g[e]=a;d[a]=e}}}return b};return a}();return e}(function(){var g={},k="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(e,h,a,l,d){a=k?URL.createObjectURL(new Blob(["("+a.toString()+")()"],{type:"text/javascript"})):e+".es5.js";e+="-"+h;g[e]||(g[e]=[]);g[e][d]=new Worker(a);g[e][d].onmessage=l;console.log("Register Worker: "+e+"@"+d);return g[e][d]}}()),this);
