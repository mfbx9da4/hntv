!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,o,i){for(var a,u,c=0,l=[];c<e.length;c++)u=e[c],r[u]&&l.push(r[u][0]),r[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(n&&n(e,o,i);l.length;)l.shift()()};var o={},r={1:0};e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(c);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}var o=r[t];if(0===o)return new Promise(function(t){t()});if(o)return o[2];var i=new Promise(function(e,n){o=r[t]=[e,n]});o[2]=i;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+({0:"route-home"}[t]||t)+".chunk."+{0:"f4200"}[t]+".js";var c=setTimeout(n,12e4);return u.onerror=u.onload=n,a.appendChild(u),i},e.m=t,e.c=o,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="pwNi")}({"7N8r":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;o.Component.call(this);var n=void 0,r=void 0;this.componentWillMount=function(){n=e.base=e.nextBase||e.__b,t(function(t){e.setState({child:t.default||t})})},this.shouldComponentUpdate=function(t,e){return e=void 0===e.child,r=e&&void 0===r&&n?(0,o.h)(n.nodeName,{dangerouslySetInnerHTML:{__html:n.innerHTML}}):"",!e},this.render=function(t,e){return e.child?(0,o.h)(e.child,t):r}}return(e.prototype=new o.Component).constructor=e,e};var o=n("KM04")},JkW7:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var c=i[1].split("&"),l=0;l<c.length;l++){var s=c[l].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=u(t.replace(r,"")),e=u(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||M)[0]||"",_=~d.indexOf("+"),m=~d.indexOf("*"),v=t[f]||"";if(!v&&!m&&(d.indexOf("?")<0||_)){o=!1;break}if(a[h]=decodeURIComponent(v),_||m){a[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){o=!1;break}return(!0===n.default||!1!==o)&&a}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=s(t),t.attributes}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function l(t){return u(t).map(c).join("")}function s(t){return t.attributes.default?0:l(t.attributes.path)}function p(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function f(t,e){void 0===e&&(e="push"),L&&L[e]?L[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function h(){var t;return t=L&&L.location?L.location:L&&L.getCurrentLocation?L.getCurrentLocation():"undefined"!=typeof location?location:P,""+(t.pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),_(t)&&f(t,e?"replace":"push"),m(t)}function _(t){for(var e=S.length;e--;)if(S[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;n<S.length;n++)!0===S[n].routeTo(t)&&(e=!0);for(var o=T.length;o--;)T[o](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function b(t){if(0==t.button)return v(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&p(e)){if(e.hasAttribute("native"))return;if(v(e))return y(t)}}while(e=e.parentNode)}}function C(){R||("function"==typeof addEventListener&&(L||addEventListener("popstate",function(){m(h())}),addEventListener("click",g)),R=!0)}function w(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function k(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function O(t){n.e(0).then(function(){t(n("iOg+"))}.bind(null,n)).catch(n.oe)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function N(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var U=(n("yY49"),n("KM04")),M={},L=null,S=[],T=[],P={},R=!1,E=function(t){function e(e){t.call(this,e),e.history&&(L=e.history),this.state={url:e.url||h()},C()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){S.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;L&&(this.unlisten=L.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),S.splice(S.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map(function(t){var i=r(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var a={url:e,matches:i};return o(a,i),delete a.ref,delete a.key,Object(U.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:a})),a},e}(U.Component),A=function(t){return Object(U.h)("a",o({onClick:b},t))},W=function(t){return Object(U.h)(t.component,t)};E.subscribers=T,E.getCurrentUrl=h,E.route=d,E.Router=E,E.Route=W,E.Link=A;var D=n("u3et"),I=n.n(D),K=Object(U.h)(A,{href:"/week"},"Week"),H=Object(U.h)(A,{href:"/fortnight"},"Fortnight"),V=Object(U.h)(A,{href:"/month"},"Month"),$=Object(U.h)(A,{href:"/alltime"},"All Time"),B=function(t){function e(){for(var e,n,o,r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=n=w(this,t.call.apply(t,[this].concat(i))),n.reload=function(){window.location.href="/"},n.onRandom=function(){var t="/random/?r="+Math.random();window.location=t},o=e,w(n,o)}return k(e,t),e.prototype.render=function(){return Object(U.h)("header",{className:I.a.header},Object(U.h)("div",{className:"brand"},Object(U.h)("h1",null,Object(U.h)("a",{href:"#",onClick:this.reload},"Hacker News TV")," ")),Object(U.h)("div",{className:I.a.linksContainer},Object(U.h)("div",{className:I.a.headerLink},K),Object(U.h)("div",{className:I.a.headerLink},H),Object(U.h)("div",{className:I.a.headerLink},V),Object(U.h)("div",{className:I.a.headerLink},$),Object(U.h)("div",{className:I.a.headerLink},Object(U.h)(A,{onClick:this.onRandom,href:"#"},"I'm feeling lucky"))))},e}(U.Component),J=B,F=n("7N8r"),Y=n.n(F),z=Y()(O),G=Object(U.h)(J,null),q=Object(U.h)(z,{path:"/"}),Q=Object(U.h)(z,{path:"/week"}),X=Object(U.h)(z,{path:"/fortnight"}),Z=Object(U.h)(z,{path:"/month"}),tt=Object(U.h)(z,{path:"/alltime"}),et=Object(U.h)(z,{path:"/random"}),nt=Object(U.h)(z,{default:!0}),ot=function(t){function e(){var n,o,r;j(this,e);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=o=x(this,t.call.apply(t,[this].concat(a))),o.handleRoute=function(t){o.currentUrl=t.url},r=n,x(o,r)}return N(e,t),e.prototype.render=function(){return Object(U.h)("div",{id:"app"},G,Object(U.h)(E,{onChange:this.handleRoute},q,Q,X,Z,tt,et,nt))},e}(U.Component);e.default=ot},KM04:function(t){!function(){"use strict";function e(t,e){var n,o,r,i,a=P;for(i=arguments.length;i-- >2;)T.push(arguments[i]);for(e&&null!=e.children&&(T.length||T.push(e.children),delete e.children);T.length;)if((o=T.pop())&&void 0!==o.pop)for(i=o.length;i--;)T.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?a[a.length-1]+=o:a===P?a=[o]:a.push(o),n=r;var u=new L;return u.nodeName=t,u.children=a,u.attributes=null==e?void 0:e,u.key=null==e?void 0:e.key,void 0!==S.vnode&&S.vnode(u),u}function n(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function r(t,o){return e(t.nodeName,n(n({},t.attributes),o),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(S.debounceRendering||R)(a)}function a(){for(var t;t=A.pop();)t.__d&&O(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=n({},t.attributes);e.children=t.children;var o=t.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===e[r]&&(e[r]=o[r]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,r,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)o(n,null),o(r,t);else if("class"!==e||i)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(t.style[a]="");for(var a in r)t.style[a]="number"==typeof r[a]&&!1===E.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,h,u):t.removeEventListener(e,h,u),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==r?"":r}catch(t){}null!=r&&!1!==r||"spellcheck"==e||t.removeAttribute(e)}else{var c=i&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t){return this.__l[t.type](S.event&&S.event(t)||t)}function d(){for(var t;t=W.shift();)S.afterMount&&S.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,o,r,i){D++||(I=null!=r&&void 0!==r.ownerSVGElement,K=null!=t&&!("__preactattr_"in t));var a=m(t,e,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--D||(K=!1,i||d()),a}function m(t,e,n,o,r){var i=t,a=I;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return j(t,e,n,o);if(I="svg"===u||"foreignObject"!==u&&I,u+="",(!t||!c(t,u))&&(i=s(u,I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var l=i.firstChild,p=i.__preactattr_,f=e.children;if(null==p){p=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)p[h[d].name]=h[d].value}return!K&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&v(i,f,n,o,K||null!=p.dangerouslySetInnerHTML),g(i,e.attributes,p),I=a,i}function v(t,e,n,o,r){var i,a,c,l,s,f=t.childNodes,h=[],d={},_=0,v=0,y=f.length,g=0,C=e?e.length:0;if(0!==y)for(var w=0;w<y;w++){var k=f[w],O=k.__preactattr_,j=C&&O?k._component?k._component.__k:O.key:null;null!=j?(_++,d[j]=k):(O||(void 0!==k.splitText?!r||k.nodeValue.trim():r))&&(h[g++]=k)}if(0!==C)for(var w=0;w<C;w++){l=e[w],s=null;var j=l.key;if(null!=j)_&&void 0!==d[j]&&(s=d[j],d[j]=void 0,_--);else if(v<g)for(i=v;i<g;i++)if(void 0!==h[i]&&u(a=h[i],l,r)){s=a,h[i]=void 0,i===g-1&&g--,i===v&&v++;break}s=m(s,l,n,o),c=f[w],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?p(c):t.insertBefore(s,c))}if(_)for(var w in d)void 0!==d[w]&&b(d[w],!1);for(;v<=g;)void 0!==(s=h[g--])&&b(s,!1)}function b(t,e){var n=t._component;n?x(n):(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||p(t),y(t))}function y(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function g(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||f(t,o,n[o],n[o]=void 0,I);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||f(t,o,n[o],n[o]=e[o],I)}function C(t,e,n){var o,r=H.length;for(t.prototype&&t.prototype.render?(o=new t(e,n),N.call(o,e,n)):(o=new N(e,n),o.constructor=t,o.render=w);r--;)if(H[r].constructor===t)return o.__b=H[r].__b,H.splice(r,1),o;return o}function w(t,e,n){return this.constructor(t,n)}function k(t,e,n,r,a){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||a?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===S.syncComponentUpdates&&t.base?i(t):O(t,1,a)),o(t.__r,t))}function O(t,e,o,r){if(!t.__x){var i,a,u,c=t.props,s=t.state,p=t.context,f=t.__p||c,h=t.__s||s,m=t.__c||p,v=t.base,y=t.__b,g=v||y,w=t._component,j=!1,N=m;if(t.constructor.getDerivedStateFromProps&&(s=n(n({},s),t.constructor.getDerivedStateFromProps(c,s)),t.state=s),v&&(t.props=f,t.state=h,t.context=m,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,s,p)?j=!0:t.componentWillUpdate&&t.componentWillUpdate(c,s,p),t.props=c,t.state=s,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!j){i=t.render(c,s,p),t.getChildContext&&(p=n(n({},p),t.getChildContext())),v&&t.getSnapshotBeforeUpdate&&(N=t.getSnapshotBeforeUpdate(f,h));var U,M,L=i&&i.nodeName;if("function"==typeof L){var T=l(i);a=w,a&&a.constructor===L&&T.key==a.__k?k(a,T,1,p,!1):(U=a,t._component=a=C(L,T,p),a.__b=a.__b||y,a.__u=t,k(a,T,0,p,!1),O(a,1,o,!0)),M=a.base}else u=g,U=w,U&&(u=t._component=null),(g||1===e)&&(u&&(u._component=null),M=_(u,i,p,o||!v,g&&g.parentNode,!0));if(g&&M!==g&&a!==w){var P=g.parentNode;P&&M!==P&&(P.replaceChild(M,g),U||(g._component=null,b(g,!1)))}if(U&&x(U),t.base=M,M&&!r){for(var R=t,E=t;E=E.__u;)(R=E).base=M;M._component=R,M._componentConstructor=R.constructor}}for(!v||o?W.push(t):j||(t.componentDidUpdate&&t.componentDidUpdate(f,h,N),S.afterUpdate&&S.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);D||r||d()}}function j(t,e,n,o){for(var r=t&&t._component,i=r,a=t,u=r&&t._componentConstructor===e.nodeName,c=u,s=l(e);r&&!c&&(r=r.__u);)c=r.constructor===e.nodeName;return r&&c&&(!o||r._component)?(k(r,s,3,n,o),t=r.base):(i&&!u&&(x(i),t=a=null),r=C(e.nodeName,s,n),t&&!r.__b&&(r.__b=t,a=null),k(r,s,1,n,o),t=r.base,a&&t!==a&&(a._component=null,b(a,!1))),t}function x(t){S.beforeUnmount&&S.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?x(n):e&&(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),t.__b=e,p(e),H.push(t),y(e)),o(t.__r,null)}function N(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}function U(t,e,n){return _(n,t,{},!1,e,!1)}function M(){return{}}var L=function(){},S={},T=[],P=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,E=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],W=[],D=0,I=!1,K=!1,H=[];n(N.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),O(this,2)},render:function(){}});var V={h:e,createElement:e,cloneElement:r,createRef:M,Component:N,render:U,rerender:a,options:S};t.exports=V}()},pwNi:function(t,e,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(t){return t&&t.default?t.default:t};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=r(n("JkW7"));i=(0,o.render)((0,o.h)(t),document.body,i)};a()}},u3et:function(t){t.exports={header:"header",linksContainer:"linksContainer",headerLink:"headerLink"}},yY49:function(){}});
//# sourceMappingURL=bundle.0e554.js.map