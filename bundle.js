!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);let o=document.getElementById("contactButton"),r=document.getElementById("contactButtonHint"),i=document.getElementById("contactTextarea"),a=document.getElementById("contactButtonHeading");const c=t=>{"Backspace"!==t.key&&(o.classList.add("typing"),r.classList.add("typing"),i.classList.add("typing"),a.classList.add("typing"),i.focus())};o.addEventListener("click",c),i.addEventListener("keyup",t=>{0===t.target.value.length&&"Backspace"===t.key&&(o.classList.remove("typing"),r.classList.remove("typing"),i.classList.remove("typing"),a.classList.remove("typing"))}),document.addEventListener("keydown",c)},function(t,n,e){var o=e(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(n=t.exports=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou);",""]),n.push([t.i,'body{font-family:"ZCOOL QingKe HuangYou", cursive;background-color:#1c1c1c;color:#f4f4f4;font-size:22px}.container{display:flex;align-items:center;justify-content:center;height:100vh}.container__content{flex:0.5}.container__content h1,.container__content h2{text-align:center}.container__content__button{font-family:"ZCOOL QingKe HuangYou", cursive;font-size:1em;display:block;margin:0 auto;border:1px solid #008cff;background:transparent;color:#008cff;padding:1em;cursor:pointer;transition:0.3s;border-radius:0.1em;width:7em;text-align:center}.container__content__button:hover{color:#f4f4f4;background-color:#008cff}.container__content__button__heading{text-align:center}.container__content__button__heading.typing{text-align:left}.container__content__button.typing{width:100%}.container__content__button__hint{color:#d8d8d8;font-size:0.7em}.container__content__button__hint.typing{display:none}.container__content__button{font-family:"ZCOOL QingKe HuangYou", cursive;font-size:1em;display:block;margin:0 auto;border:1px solid #008cff;background:transparent;color:#008cff;padding:1em;cursor:pointer;transition:0.3s;border-radius:0.1em;width:7em;text-align:center}.container__content__button:hover{color:#f4f4f4;background-color:#008cff}.container__content__button__heading{text-align:center}.container__content__button__heading.typing{text-align:left;padding:0 0 1em 1em}.container__content__button.typing{width:100%}.container__content__button__hint{color:#d8d8d8;font-size:0.7em}.container__content__button__hint.typing{display:none}.container__content__button__textarea{display:none;background:transparent;color:#f4f4f4;border:0;resize:none;outline:none;outline-color:#008cff;width:90%;padding:1em;margin:0 auto}.container__content__button__textarea.typing{display:block}\n',""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),s=null,u=0,f=[],l=e(5);function d(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],n))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(y(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:c}}}}function p(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):e.push(o[a]={id:a,parts:[c]})}return e}function _(t,n){var e=c(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),f.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(t.insertAt.before,e);e.insertBefore(n,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=f.indexOf(t);n>=0&&f.splice(n,1)}function h(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return b(n,t.attrs),_(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=u++;e=s||(s=h(n)),o=x.bind(null,e,a,!1),r=x.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),_(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=l(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,e,n),r=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){g(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var a=e[r];(c=i[a.id]).refs--,o.push(c)}t&&d(p(t,n),n);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var m,v=(m=[],function(t,n){return m[t]=n,m.filter(Boolean).join("\n")});function x(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);