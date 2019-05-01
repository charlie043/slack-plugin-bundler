parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nfOT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("~context");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=window,c=o.$,a="slack-plugin-bundler",l="slack-plugin-bundler-style",u="slack-plugin-bundler-script",s=function(n){var t=n.filter(function(n){return n.type===e.PluginType.Css}).map(function(e){return"\n/* ".concat(e.name," */\n").concat(e.raw,"\n")}),r=c("#".concat(l));r&&r.remove();var i=c("<div id='".concat(l,"'><style>").concat(t.join("\n"),"</style></div>"));c("body").append(i)},p=function(n){var t=n.filter(function(n){return n.type===e.PluginType.Javascript}).map(function(e){return"\n;(function() {\n  /* ".concat(e.name," */\n  ").concat(e.raw,"\n})();")}),r=c("#".concat(u));r&&r.remove();var i=c("<div id='".concat(u,"'><script>").concat(t.join("\n"),"<\/script></div>"));c("body").append(i)},f=function(e){s(e),p(e)},v=function(){function e(t){n(this,e),i(this,"key",void 0),i(this,"plugins",void 0),this.key=t,this.plugins=[],this.restore()}return r(e,[{key:"restore",value:function(){console.log("STOREGE:RESTORE");var e=localStorage.getItem(this.key)||"[]";try{this.plugins=JSON.parse(e)}catch(n){console.error(n),this.clear(),this.restore()}}},{key:"save",value:function(e){console.log("STOREGE:SAVE"),this.plugins=e,localStorage.setItem(this.key,JSON.stringify(this.plugins)),f(this.plugins)}},{key:"clear",value:function(){console.log("STOREGE:CLEAR"),localStorage.removeItem(this.key)}}]),e}(),y=new v(a),d=y;exports.default=d;
},{"~context":"0150"}],"0150":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.PluginType=void 0;var e=t(require("~utils/store"));function t(e){return e&&e.__esModule?e:{default:e}}var s,r=window,u=r.React;exports.PluginType=s,function(e){e.Javascript="javascript",e.Css="css"}(s||(exports.PluginType=s={}));var a=u.createContext({state:{plugins:e.default.plugins}}),i=a;exports.default=i;
},{"~utils/store":"nfOT"}],"vOxU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("~context"));function t(e){return e&&e.__esModule?e:{default:e}}var o=window,r=o.React,d=r.useContext,i=function(){var t=d(e.default);return r.createElement("div",{style:{position:"fixed",bottom:"-2px",left:"-2px",width:"24px",height:"24px",background:"#FFF",color:"#777",border:"2px solid #DDD",borderRadius:"0 100% 0 0"},onClick:t.actions.toggle})},u=i;exports.default=u;
},{"~context":"0150"}],"8DQs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ButtonType=void 0;var e,o=window,r=o.React;exports.ButtonType=e,function(e){e.Normal="normal",e.Success="success",e.Danger="danger"}(e||(exports.ButtonType=e={}));var t={normal:{backgroundColor:"#cce5ff"},success:{backgroundColor:"#d4edda"},danger:{backgroundColor:"#f8d7da"}},n=function(o){var n=o.label,a=o.type,c=void 0===a?e.Normal:a,d=o.onClick,s=t[c];return r.createElement("button",{style:Object.assign({margin:"8px",padding:"12px",borderRadius:"24px"},s),onClick:function(e){d&&d(e)}},n)},a=n;exports.default=a;
},{}],"8f6X":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"VjBI":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"8f6X"}],"S8m2":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"VjBI"}],"jnYZ":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"S8m2"}],"C0bq":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"r1rA":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"S8m2","./_getRawTag":"jnYZ","./_objectToString":"C0bq"}],"7Zib":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"hyfS":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"r1rA","./isObjectLike":"7Zib"}],"UTs5":[function(require,module,exports) {
var r=require("./isSymbol");function e(e,o,i){for(var l=-1,n=e.length;++l<n;){var u=e[l],v=o(u);if(null!=v&&(void 0===a?v==v&&!r(v):i(v,a)))var a=v,t=u}return t}module.exports=e;
},{"./isSymbol":"hyfS"}],"4ek3":[function(require,module,exports) {
function e(e,n){return e>n}module.exports=e;
},{}],"JzEn":[function(require,module,exports) {
function t(){this.__data__=[],this.size=0}module.exports=t;
},{}],"0huu":[function(require,module,exports) {
function e(e,n){return e===n||e!=e&&n!=n}module.exports=e;
},{}],"1zte":[function(require,module,exports) {
var r=require("./eq");function e(e,n){for(var t=e.length;t--;)if(r(e[t][0],n))return t;return-1}module.exports=e;
},{"./eq":"0huu"}],"5e2f":[function(require,module,exports) {
var e=require("./_assocIndexOf"),r=Array.prototype,t=r.splice;function a(r){var a=this.__data__,o=e(a,r);return!(o<0)&&(o==a.length-1?a.pop():t.call(a,o,1),--this.size,!0)}module.exports=a;
},{"./_assocIndexOf":"1zte"}],"qACu":[function(require,module,exports) {
var r=require("./_assocIndexOf");function e(e){var a=this.__data__,o=r(a,e);return o<0?void 0:a[o][1]}module.exports=e;
},{"./_assocIndexOf":"1zte"}],"LgeR":[function(require,module,exports) {
var e=require("./_assocIndexOf");function r(r){return e(this.__data__,r)>-1}module.exports=r;
},{"./_assocIndexOf":"1zte"}],"G8aX":[function(require,module,exports) {
var s=require("./_assocIndexOf");function e(e,r){var t=this.__data__,i=s(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}module.exports=e;
},{"./_assocIndexOf":"1zte"}],"ICfp":[function(require,module,exports) {
var e=require("./_listCacheClear"),t=require("./_listCacheDelete"),r=require("./_listCacheGet"),l=require("./_listCacheHas"),o=require("./_listCacheSet");function a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1])}}a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=l,a.prototype.set=o,module.exports=a;
},{"./_listCacheClear":"JzEn","./_listCacheDelete":"5e2f","./_listCacheGet":"qACu","./_listCacheHas":"LgeR","./_listCacheSet":"G8aX"}],"cb0B":[function(require,module,exports) {
var e=require("./_ListCache");function i(){this.__data__=new e,this.size=0}module.exports=i;
},{"./_ListCache":"ICfp"}],"nPrn":[function(require,module,exports) {
function e(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i}module.exports=e;
},{}],"vajS":[function(require,module,exports) {
function t(t){return this.__data__.get(t)}module.exports=t;
},{}],"zcic":[function(require,module,exports) {
function t(t){return this.__data__.has(t)}module.exports=t;
},{}],"xwKO":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"xOlx":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObject"),t="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(u){if(!r(u))return!1;var i=e(u);return i==n||i==o||i==t||i==c}module.exports=u;
},{"./_baseGetTag":"r1rA","./isObject":"xwKO"}],"zw2X":[function(require,module,exports) {
var r=require("./_root"),e=r["__core-js_shared__"];module.exports=e;
},{"./_root":"VjBI"}],"dW4B":[function(require,module,exports) {
var e=require("./_coreJsData"),r=function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(e){return!!r&&r in e}module.exports=n;
},{"./_coreJsData":"zw2X"}],"wHLP":[function(require,module,exports) {
var t=Function.prototype,r=t.toString;function n(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}module.exports=n;
},{}],"Qkpc":[function(require,module,exports) {
var e=require("./isFunction"),r=require("./_isMasked"),t=require("./isObject"),o=require("./_toSource"),n=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,i=Function.prototype,u=Object.prototype,p=i.toString,s=u.hasOwnProperty,a=RegExp("^"+p.call(s).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(n){return!(!t(n)||r(n))&&(e(n)?a:c).test(o(n))}module.exports=l;
},{"./isFunction":"xOlx","./_isMasked":"dW4B","./isObject":"xwKO","./_toSource":"wHLP"}],"+Z+8":[function(require,module,exports) {
function n(n,o){return null==n?void 0:n[o]}module.exports=n;
},{}],"7jJu":[function(require,module,exports) {
var e=require("./_baseIsNative"),r=require("./_getValue");function u(u,a){var i=r(u,a);return e(i)?i:void 0}module.exports=u;
},{"./_baseIsNative":"Qkpc","./_getValue":"+Z+8"}],"9u6A":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Map");module.exports=o;
},{"./_getNative":"7jJu","./_root":"VjBI"}],"SiCv":[function(require,module,exports) {
var e=require("./_getNative"),r=e(Object,"create");module.exports=r;
},{"./_getNative":"7jJu"}],"Hz9n":[function(require,module,exports) {
var e=require("./_nativeCreate");function t(){this.__data__=e?e(null):{},this.size=0}module.exports=t;
},{"./_nativeCreate":"SiCv"}],"MFCq":[function(require,module,exports) {
function t(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}module.exports=t;
},{}],"xsvA":[function(require,module,exports) {
var e=require("./_nativeCreate"),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function _(t){var _=this.__data__;if(e){var o=_[t];return o===r?void 0:o}return a.call(_,t)?_[t]:void 0}module.exports=_;
},{"./_nativeCreate":"SiCv"}],"aELU":[function(require,module,exports) {
var e=require("./_nativeCreate"),r=Object.prototype,t=r.hasOwnProperty;function a(r){var a=this.__data__;return e?void 0!==a[r]:t.call(a,r)}module.exports=a;
},{"./_nativeCreate":"SiCv"}],"ubfM":[function(require,module,exports) {
var e=require("./_nativeCreate"),_="__lodash_hash_undefined__";function i(i,t){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=e&&void 0===t?_:t,this}module.exports=i;
},{"./_nativeCreate":"SiCv"}],"719l":[function(require,module,exports) {
var e=require("./_hashClear"),r=require("./_hashDelete"),t=require("./_hashGet"),h=require("./_hashHas"),o=require("./_hashSet");function a(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var h=e[r];this.set(h[0],h[1])}}a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=h,a.prototype.set=o,module.exports=a;
},{"./_hashClear":"Hz9n","./_hashDelete":"MFCq","./_hashGet":"xsvA","./_hashHas":"aELU","./_hashSet":"ubfM"}],"lTTh":[function(require,module,exports) {
var e=require("./_Hash"),i=require("./_ListCache"),r=require("./_Map");function a(){this.size=0,this.__data__={hash:new e,map:new(r||i),string:new e}}module.exports=a;
},{"./_Hash":"719l","./_ListCache":"ICfp","./_Map":"9u6A"}],"DYPj":[function(require,module,exports) {
function o(o){var n=typeof o;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o}module.exports=o;
},{}],"v3EM":[function(require,module,exports) {
var r=require("./_isKeyable");function e(e,a){var t=e.__data__;return r(a)?t["string"==typeof a?"string":"hash"]:t.map}module.exports=e;
},{"./_isKeyable":"DYPj"}],"MDzN":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}module.exports=t;
},{"./_getMapData":"v3EM"}],"0iGx":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){return e(this,t).get(t)}module.exports=t;
},{"./_getMapData":"v3EM"}],"8+/4":[function(require,module,exports) {
var e=require("./_getMapData");function r(r){return e(this,r).has(r)}module.exports=r;
},{"./_getMapData":"v3EM"}],"dj/A":[function(require,module,exports) {
var e=require("./_getMapData");function t(t,i){var s=e(this,t),r=s.size;return s.set(t,i),this.size+=s.size==r?0:1,this}module.exports=t;
},{"./_getMapData":"v3EM"}],"sd1L":[function(require,module,exports) {
var e=require("./_mapCacheClear"),r=require("./_mapCacheDelete"),t=require("./_mapCacheGet"),a=require("./_mapCacheHas"),p=require("./_mapCacheSet");function o(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=p,module.exports=o;
},{"./_mapCacheClear":"lTTh","./_mapCacheDelete":"MDzN","./_mapCacheGet":"0iGx","./_mapCacheHas":"8+/4","./_mapCacheSet":"dj/A"}],"vDBK":[function(require,module,exports) {
var e=require("./_ListCache"),i=require("./_Map"),t=require("./_MapCache"),s=200;function _(_,a){var r=this.__data__;if(r instanceof e){var h=r.__data__;if(!i||h.length<s-1)return h.push([_,a]),this.size=++r.size,this;r=this.__data__=new t(h)}return r.set(_,a),this.size=r.size,this}module.exports=_;
},{"./_ListCache":"ICfp","./_Map":"9u6A","./_MapCache":"sd1L"}],"eVeQ":[function(require,module,exports) {
var e=require("./_ListCache"),t=require("./_stackClear"),r=require("./_stackDelete"),a=require("./_stackGet"),s=require("./_stackHas"),o=require("./_stackSet");function i(t){var r=this.__data__=new e(t);this.size=r.size}i.prototype.clear=t,i.prototype.delete=r,i.prototype.get=a,i.prototype.has=s,i.prototype.set=o,module.exports=i;
},{"./_ListCache":"ICfp","./_stackClear":"cb0B","./_stackDelete":"nPrn","./_stackGet":"vajS","./_stackHas":"zcic","./_stackSet":"vDBK"}],"3Bpx":[function(require,module,exports) {
var _="__lodash_hash_undefined__";function t(t){return this.__data__.set(t,_),this}module.exports=t;
},{}],"2mhJ":[function(require,module,exports) {
var e=require("./_MapCache"),t=require("./_setCacheAdd"),r=require("./_setCacheHas");function a(t){var r=-1,a=null==t?0:t.length;for(this.__data__=new e;++r<a;)this.add(t[r])}a.prototype.add=a.prototype.push=t,a.prototype.has=r,module.exports=a;
},{"./_MapCache":"sd1L","./_setCacheAdd":"3Bpx","./_setCacheHas":"zcic"}],"AeKI":[function(require,module,exports) {
function r(r,n){for(var e=-1,t=null==r?0:r.length;++e<t;)if(n(r[e],e,r))return!0;return!1}module.exports=r;
},{}],"3AGJ":[function(require,module,exports) {
function e(e,n){return e.has(n)}module.exports=e;
},{}],"yGKA":[function(require,module,exports) {
var e=require("./_SetCache"),r=require("./_arraySome"),i=require("./_cacheHas"),t=1,a=2;function n(n,f,u,o,v,c){var l=u&t,s=n.length,d=f.length;if(s!=d&&!(l&&d>s))return!1;var h=c.get(n);if(h&&c.get(f))return h==f;var g=-1,b=!0,k=u&a?new e:void 0;for(c.set(n,f),c.set(f,n);++g<s;){var q=n[g],_=f[g];if(o)var m=l?o(_,q,g,f,n,c):o(q,_,g,n,f,c);if(void 0!==m){if(m)continue;b=!1;break}if(k){if(!r(f,function(e,r){if(!i(k,r)&&(q===e||v(q,e,u,o,c)))return k.push(r)})){b=!1;break}}else if(q!==_&&!v(q,_,u,o,c)){b=!1;break}}return c.delete(n),c.delete(f),b}module.exports=n;
},{"./_SetCache":"2mhJ","./_arraySome":"AeKI","./_cacheHas":"3AGJ"}],"wTs6":[function(require,module,exports) {
var r=require("./_root"),e=r.Uint8Array;module.exports=e;
},{"./_root":"VjBI"}],"nc0B":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r,e){o[++n]=[e,r]}),o}module.exports=r;
},{}],"4XN+":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r){o[++n]=r}),o}module.exports=r;
},{}],"HqoE":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_Uint8Array"),t=require("./eq"),a=require("./_equalArrays"),c=require("./_mapToArray"),o=require("./_setToArray"),s=1,u=2,n="[object Boolean]",b="[object Date]",i="[object Error]",f="[object Map]",y="[object Number]",j="[object RegExp]",l="[object Set]",g="[object String]",m="[object Symbol]",q="[object ArrayBuffer]",v="[object DataView]",p=e?e.prototype:void 0,h=p?p.valueOf:void 0;function A(e,p,A,_,d,w,L){switch(A){case v:if(e.byteLength!=p.byteLength||e.byteOffset!=p.byteOffset)return!1;e=e.buffer,p=p.buffer;case q:return!(e.byteLength!=p.byteLength||!w(new r(e),new r(p)));case n:case b:case y:return t(+e,+p);case i:return e.name==p.name&&e.message==p.message;case j:case g:return e==p+"";case f:var S=c;case l:var O=_&s;if(S||(S=o),e.size!=p.size&&!O)return!1;var x=L.get(e);if(x)return x==p;_|=u,L.set(e,p);var z=a(S(e),S(p),_,d,w,L);return L.delete(e),z;case m:if(h)return h.call(e)==h.call(p)}return!1}module.exports=A;
},{"./_Symbol":"S8m2","./_Uint8Array":"wTs6","./eq":"0huu","./_equalArrays":"yGKA","./_mapToArray":"nc0B","./_setToArray":"4XN+"}],"15Wi":[function(require,module,exports) {
function e(e,n){for(var r=-1,t=n.length,o=e.length;++r<t;)e[o+r]=n[r];return e}module.exports=e;
},{}],"zOp4":[function(require,module,exports) {
var r=Array.isArray;module.exports=r;
},{}],"1WNX":[function(require,module,exports) {
var r=require("./_arrayPush"),e=require("./isArray");function u(u,a,i){var n=a(u);return e(u)?n:r(n,i(u))}module.exports=u;
},{"./_arrayPush":"15Wi","./isArray":"zOp4"}],"7roQ":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=0,t=[];++e<l;){var u=r[e];n(u,e,r)&&(t[o++]=u)}return t}module.exports=r;
},{}],"C2H/":[function(require,module,exports) {
function e(){return[]}module.exports=e;
},{}],"WfqQ":[function(require,module,exports) {
var r=require("./_arrayFilter"),e=require("./stubArray"),t=Object.prototype,u=t.propertyIsEnumerable,n=Object.getOwnPropertySymbols,o=n?function(e){return null==e?[]:(e=Object(e),r(n(e),function(r){return u.call(e,r)}))}:e;module.exports=o;
},{"./_arrayFilter":"7roQ","./stubArray":"C2H/"}],"EyJ2":[function(require,module,exports) {
function r(r,o){for(var e=-1,n=Array(r);++e<r;)n[e]=o(e);return n}module.exports=r;
},{}],"x5Bi":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),t="[object Arguments]";function u(u){return r(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"r1rA","./isObjectLike":"7Zib"}],"Qziv":[function(require,module,exports) {
var e=require("./_baseIsArguments"),r=require("./isObjectLike"),t=Object.prototype,l=t.hasOwnProperty,n=t.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(e){return r(e)&&l.call(e,"callee")&&!n.call(e,"callee")};module.exports=u;
},{"./_baseIsArguments":"x5Bi","./isObjectLike":"7Zib"}],"dUTw":[function(require,module,exports) {
function e(){return!1}module.exports=e;
},{}],"UlFJ":[function(require,module,exports) {

var e=require("./_root"),o=require("./stubFalse"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof module&&module&&!module.nodeType&&module,p=t&&t.exports===r,u=p?e.Buffer:void 0,d=u?u.isBuffer:void 0,s=d||o;module.exports=s;
},{"./_root":"VjBI","./stubFalse":"dUTw"}],"U8js":[function(require,module,exports) {
var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function t(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}module.exports=t;
},{}],"mL1V":[function(require,module,exports) {
var e=9007199254740991;function r(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}module.exports=r;
},{}],"NYtY":[function(require,module,exports) {
var e=require("./_baseGetTag"),t=require("./isLength"),r=require("./isObjectLike"),o="[object Arguments]",b="[object Array]",c="[object Boolean]",j="[object Date]",a="[object Error]",n="[object Function]",i="[object Map]",A="[object Number]",y="[object Object]",u="[object RegExp]",g="[object Set]",l="[object String]",p="[object WeakMap]",s="[object ArrayBuffer]",m="[object DataView]",U="[object Float32Array]",f="[object Float64Array]",q="[object Int8Array]",F="[object Int16Array]",I="[object Int32Array]",d="[object Uint8Array]",h="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]",B={};function D(o){return r(o)&&t(o.length)&&!!B[e(o)]}B[U]=B[f]=B[q]=B[F]=B[I]=B[d]=B[h]=B[k]=B[x]=!0,B[o]=B[b]=B[s]=B[c]=B[m]=B[j]=B[a]=B[n]=B[i]=B[A]=B[y]=B[u]=B[g]=B[l]=B[p]=!1,module.exports=D;
},{"./_baseGetTag":"r1rA","./isLength":"mL1V","./isObjectLike":"7Zib"}],"+ASY":[function(require,module,exports) {
function n(n){return function(r){return n(r)}}module.exports=n;
},{}],"G5bk":[function(require,module,exports) {
var e=require("./_freeGlobal"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t&&e.process,u=function(){try{var e=r&&r.require&&r.require("util").types;return e||p&&p.binding&&p.binding("util")}catch(o){}}();module.exports=u;
},{"./_freeGlobal":"8f6X"}],"RCtT":[function(require,module,exports) {
var e=require("./_baseIsTypedArray"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isTypedArray,s=i?r(i):e;module.exports=s;
},{"./_baseIsTypedArray":"NYtY","./_baseUnary":"+ASY","./_nodeUtil":"G5bk"}],"VZjL":[function(require,module,exports) {
var e=require("./_baseTimes"),r=require("./isArguments"),t=require("./isArray"),i=require("./isBuffer"),n=require("./_isIndex"),s=require("./isTypedArray"),u=Object.prototype,f=u.hasOwnProperty;function a(u,a){var o=t(u),p=!o&&r(u),y=!o&&!p&&i(u),g=!o&&!p&&!y&&s(u),h=o||p||y||g,l=h?e(u.length,String):[],q=l.length;for(var b in u)!a&&!f.call(u,b)||h&&("length"==b||y&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||n(b,q))||l.push(b);return l}module.exports=a;
},{"./_baseTimes":"EyJ2","./isArguments":"Qziv","./isArray":"zOp4","./isBuffer":"UlFJ","./_isIndex":"U8js","./isTypedArray":"RCtT"}],"g5RI":[function(require,module,exports) {
var t=Object.prototype;function o(o){var r=o&&o.constructor;return o===("function"==typeof r&&r.prototype||t)}module.exports=o;
},{}],"QRZr":[function(require,module,exports) {
function n(n,r){return function(t){return n(r(t))}}module.exports=n;
},{}],"nsWR":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.keys,Object);module.exports=r;
},{"./_overArg":"QRZr"}],"mX7V":[function(require,module,exports) {
var r=require("./_isPrototype"),e=require("./_nativeKeys"),t=Object.prototype,o=t.hasOwnProperty;function n(t){if(!r(t))return e(t);var n=[];for(var u in Object(t))o.call(t,u)&&"constructor"!=u&&n.push(u);return n}module.exports=n;
},{"./_isPrototype":"g5RI","./_nativeKeys":"nsWR"}],"K2yx":[function(require,module,exports) {
var e=require("./isFunction"),n=require("./isLength");function r(r){return null!=r&&n(r.length)&&!e(r)}module.exports=r;
},{"./isFunction":"xOlx","./isLength":"mL1V"}],"d+Uu":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeys"),i=require("./isArrayLike");function u(u){return i(u)?e(u):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"VZjL","./_baseKeys":"mX7V","./isArrayLike":"K2yx"}],"qJJc":[function(require,module,exports) {
var e=require("./_baseGetAllKeys"),r=require("./_getSymbols"),u=require("./keys");function s(s){return e(s,u,r)}module.exports=s;
},{"./_baseGetAllKeys":"1WNX","./_getSymbols":"WfqQ","./keys":"d+Uu"}],"CI1E":[function(require,module,exports) {
var r=require("./_getAllKeys"),t=1,e=Object.prototype,n=e.hasOwnProperty;function o(e,o,c,i,a,f){var u=c&t,s=r(e),v=s.length;if(v!=r(o).length&&!u)return!1;for(var l=v;l--;){var p=s[l];if(!(u?p in o:n.call(o,p)))return!1}var g=f.get(e);if(g&&f.get(o))return g==o;var y=!0;f.set(e,o),f.set(o,e);for(var d=u;++l<v;){var h=e[p=s[l]],b=o[p];if(i)var O=u?i(b,h,p,o,e,f):i(h,b,p,e,o,f);if(!(void 0===O?h===b||a(h,b,c,i,f):O)){y=!1;break}d||(d="constructor"==p)}if(y&&!d){var j=e.constructor,k=o.constructor;j!=k&&"constructor"in e&&"constructor"in o&&!("function"==typeof j&&j instanceof j&&"function"==typeof k&&k instanceof k)&&(y=!1)}return f.delete(e),f.delete(o),y}module.exports=o;
},{"./_getAllKeys":"qJJc"}],"eWdr":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"DataView");module.exports=t;
},{"./_getNative":"7jJu","./_root":"VjBI"}],"4FJV":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Promise");module.exports=o;
},{"./_getNative":"7jJu","./_root":"VjBI"}],"RIV0":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"Set");module.exports=t;
},{"./_getNative":"7jJu","./_root":"VjBI"}],"CKgr":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),a=e(r,"WeakMap");module.exports=a;
},{"./_getNative":"7jJu","./_root":"VjBI"}],"gfIQ":[function(require,module,exports) {
var e=require("./_DataView"),r=require("./_Map"),t=require("./_Promise"),a=require("./_Set"),u=require("./_WeakMap"),c=require("./_baseGetTag"),o=require("./_toSource"),i="[object Map]",n="[object Object]",s="[object Promise]",b="[object Set]",w="[object WeakMap]",j="[object DataView]",q=o(e),_=o(r),p=o(t),f=o(a),v=o(u),M=c;(e&&M(new e(new ArrayBuffer(1)))!=j||r&&M(new r)!=i||t&&M(t.resolve())!=s||a&&M(new a)!=b||u&&M(new u)!=w)&&(M=function(e){var r=c(e),t=r==n?e.constructor:void 0,a=t?o(t):"";if(a)switch(a){case q:return j;case _:return i;case p:return s;case f:return b;case v:return w}return r}),module.exports=M;
},{"./_DataView":"eWdr","./_Map":"9u6A","./_Promise":"4FJV","./_Set":"RIV0","./_WeakMap":"CKgr","./_baseGetTag":"r1rA","./_toSource":"wHLP"}],"Vygv":[function(require,module,exports) {
var e=require("./_Stack"),r=require("./_equalArrays"),a=require("./_equalByTag"),u=require("./_equalObjects"),t=require("./_getTag"),i=require("./isArray"),_=require("./isBuffer"),n=require("./isTypedArray"),q=1,c="[object Arguments]",l="[object Array]",o="[object Object]",p=Object.prototype,f=p.hasOwnProperty;function s(p,s,y,b,j,v){var w=i(p),A=i(s),d=w?l:t(p),g=A?l:t(s),O=(d=d==c?o:d)==o,T=(g=g==c?o:g)==o,m=d==g;if(m&&_(p)){if(!_(s))return!1;w=!0,O=!1}if(m&&!O)return v||(v=new e),w||n(p)?r(p,s,y,b,j,v):a(p,s,d,y,b,j,v);if(!(y&q)){var B=O&&f.call(p,"__wrapped__"),h=T&&f.call(s,"__wrapped__");if(B||h){var k=B?p.value():p,x=h?s.value():s;return v||(v=new e),j(k,x,y,b,v)}}return!!m&&(v||(v=new e),u(p,s,y,b,j,v))}module.exports=s;
},{"./_Stack":"eVeQ","./_equalArrays":"yGKA","./_equalByTag":"HqoE","./_equalObjects":"CI1E","./_getTag":"gfIQ","./isArray":"zOp4","./isBuffer":"UlFJ","./isTypedArray":"RCtT"}],"zzbF":[function(require,module,exports) {
var e=require("./_baseIsEqualDeep"),r=require("./isObjectLike");function u(l,i,n,s,t){return l===i||(null==l||null==i||!r(l)&&!r(i)?l!=l&&i!=i:e(l,i,n,s,u,t))}module.exports=u;
},{"./_baseIsEqualDeep":"Vygv","./isObjectLike":"7Zib"}],"MS9Y":[function(require,module,exports) {
var r=require("./_Stack"),e=require("./_baseIsEqual"),i=1,n=2;function u(u,t,a,f){var v=a.length,o=v,l=!f;if(null==u)return!o;for(u=Object(u);v--;){var s=a[v];if(l&&s[2]?s[1]!==u[s[0]]:!(s[0]in u))return!1}for(;++v<o;){var c=(s=a[v])[0],d=u[c],q=s[1];if(l&&s[2]){if(void 0===d&&!(c in u))return!1}else{var b=new r;if(f)var _=f(d,q,c,u,t,b);if(!(void 0===_?e(q,d,i|n,f,b):_))return!1}}return!0}module.exports=u;
},{"./_Stack":"eVeQ","./_baseIsEqual":"zzbF"}],"E4A5":[function(require,module,exports) {
var e=require("./isObject");function r(r){return r==r&&!e(r)}module.exports=r;
},{"./isObject":"xwKO"}],"Fh6p":[function(require,module,exports) {
var r=require("./_isStrictComparable"),e=require("./keys");function t(t){for(var a=e(t),i=a.length;i--;){var o=a[i],u=t[o];a[i]=[o,u,r(u)]}return a}module.exports=t;
},{"./_isStrictComparable":"E4A5","./keys":"d+Uu"}],"jszl":[function(require,module,exports) {
function n(n,t){return function(u){return null!=u&&(u[n]===t&&(void 0!==t||n in Object(u)))}}module.exports=n;
},{}],"unVR":[function(require,module,exports) {
var e=require("./_baseIsMatch"),r=require("./_getMatchData"),t=require("./_matchesStrictComparable");function a(a){var u=r(a);return 1==u.length&&u[0][2]?t(u[0][0],u[0][1]):function(r){return r===a||e(r,a,u)}}module.exports=a;
},{"./_baseIsMatch":"MS9Y","./_getMatchData":"Fh6p","./_matchesStrictComparable":"jszl"}],"Kxtb":[function(require,module,exports) {
var e=require("./isArray"),r=require("./isSymbol"),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function u(u,l){if(e(u))return!1;var o=typeof u;return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=u&&!r(u))||(n.test(u)||!t.test(u)||null!=l&&u in Object(l))}module.exports=u;
},{"./isArray":"zOp4","./isSymbol":"hyfS"}],"VrlS":[function(require,module,exports) {
var e=require("./_MapCache"),r="Expected a function";function t(n,a){if("function"!=typeof n||null!=a&&"function"!=typeof a)throw new TypeError(r);var c=function(){var e=arguments,r=a?a.apply(this,e):e[0],t=c.cache;if(t.has(r))return t.get(r);var o=n.apply(this,e);return c.cache=t.set(r,o)||t,o};return c.cache=new(t.Cache||e),c}t.Cache=e,module.exports=t;
},{"./_MapCache":"sd1L"}],"frJZ":[function(require,module,exports) {
var e=require("./memoize"),r=500;function n(n){var u=e(n,function(e){return c.size===r&&c.clear(),e}),c=u.cache;return u}module.exports=n;
},{"./memoize":"VrlS"}],"p8AI":[function(require,module,exports) {
var e=require("./_memoizeCapped"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,u=e(function(e){var u=[];return 46===e.charCodeAt(0)&&u.push(""),e.replace(r,function(e,r,a,o){u.push(a?o.replace(p,"$1"):r||e)}),u});module.exports=u;
},{"./_memoizeCapped":"frJZ"}],"eKAY":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=Array(l);++e<l;)o[e]=n(r[e],e,r);return o}module.exports=r;
},{}],"8wya":[function(require,module,exports) {
var r=require("./_Symbol"),e=require("./_arrayMap"),i=require("./isArray"),t=require("./isSymbol"),o=1/0,u=r?r.prototype:void 0,n=u?u.toString:void 0;function a(r){if("string"==typeof r)return r;if(i(r))return e(r,a)+"";if(t(r))return n?n.call(r):"";var u=r+"";return"0"==u&&1/r==-o?"-0":u}module.exports=a;
},{"./_Symbol":"S8m2","./_arrayMap":"eKAY","./isArray":"zOp4","./isSymbol":"hyfS"}],"GLmR":[function(require,module,exports) {
var r=require("./_baseToString");function e(e){return null==e?"":r(e)}module.exports=e;
},{"./_baseToString":"8wya"}],"Hnr2":[function(require,module,exports) {
var r=require("./isArray"),e=require("./_isKey"),i=require("./_stringToPath"),t=require("./toString");function u(u,n){return r(u)?u:e(u,n)?[u]:i(t(u))}module.exports=u;
},{"./isArray":"zOp4","./_isKey":"Kxtb","./_stringToPath":"p8AI","./toString":"GLmR"}],"4dmE":[function(require,module,exports) {
var r=require("./isSymbol"),e=1/0;function t(t){if("string"==typeof t||r(t))return t;var i=t+"";return"0"==i&&1/t==-e?"-0":i}module.exports=t;
},{"./isSymbol":"hyfS"}],"Vf/c":[function(require,module,exports) {
var r=require("./_castPath"),e=require("./_toKey");function t(t,o){for(var u=0,n=(o=r(o,t)).length;null!=t&&u<n;)t=t[e(o[u++])];return u&&u==n?t:void 0}module.exports=t;
},{"./_castPath":"Hnr2","./_toKey":"4dmE"}],"vzeB":[function(require,module,exports) {
var e=require("./_baseGet");function r(r,o,u){var i=null==r?void 0:e(r,o);return void 0===i?u:i}module.exports=r;
},{"./_baseGet":"Vf/c"}],"sK5d":[function(require,module,exports) {
function n(n,e){return null!=n&&e in Object(n)}module.exports=n;
},{}],"8E7j":[function(require,module,exports) {
var r=require("./_castPath"),e=require("./isArguments"),i=require("./isArray"),u=require("./_isIndex"),n=require("./isLength"),t=require("./_toKey");function a(a,l,s){for(var q=-1,o=(l=r(l,a)).length,g=!1;++q<o;){var h=t(l[q]);if(!(g=null!=a&&s(a,h)))break;a=a[h]}return g||++q!=o?g:!!(o=null==a?0:a.length)&&n(o)&&u(h,o)&&(i(a)||e(a))}module.exports=a;
},{"./_castPath":"Hnr2","./isArguments":"Qziv","./isArray":"zOp4","./_isIndex":"U8js","./isLength":"mL1V","./_toKey":"4dmE"}],"eIoM":[function(require,module,exports) {
var e=require("./_baseHasIn"),r=require("./_hasPath");function u(u,a){return null!=u&&r(u,a,e)}module.exports=u;
},{"./_baseHasIn":"sK5d","./_hasPath":"8E7j"}],"h+b5":[function(require,module,exports) {
var e=require("./_baseIsEqual"),r=require("./get"),i=require("./hasIn"),u=require("./_isKey"),t=require("./_isStrictComparable"),a=require("./_matchesStrictComparable"),o=require("./_toKey"),q=1,n=2;function s(s,c){return u(s)&&t(c)?a(o(s),c):function(u){var t=r(u,s);return void 0===t&&t===c?i(u,s):e(c,t,q|n)}}module.exports=s;
},{"./_baseIsEqual":"zzbF","./get":"vzeB","./hasIn":"eIoM","./_isKey":"Kxtb","./_isStrictComparable":"E4A5","./_matchesStrictComparable":"jszl","./_toKey":"4dmE"}],"atk5":[function(require,module,exports) {
function e(e){return e}module.exports=e;
},{}],"SyJ6":[function(require,module,exports) {
function n(n){return function(u){return null==u?void 0:u[n]}}module.exports=n;
},{}],"mvQj":[function(require,module,exports) {
var e=require("./_baseGet");function r(r){return function(n){return e(n,r)}}module.exports=r;
},{"./_baseGet":"Vf/c"}],"cerT":[function(require,module,exports) {
var e=require("./_baseProperty"),r=require("./_basePropertyDeep"),u=require("./_isKey"),i=require("./_toKey");function o(o){return u(o)?e(i(o)):r(o)}module.exports=o;
},{"./_baseProperty":"SyJ6","./_basePropertyDeep":"mvQj","./_isKey":"Kxtb","./_toKey":"4dmE"}],"EAyW":[function(require,module,exports) {
var e=require("./_baseMatches"),r=require("./_baseMatchesProperty"),t=require("./identity"),i=require("./isArray"),u=require("./property");function o(o){return"function"==typeof o?o:null==o?t:"object"==typeof o?i(o)?r(o[0],o[1]):e(o):u(o)}module.exports=o;
},{"./_baseMatches":"unVR","./_baseMatchesProperty":"h+b5","./identity":"atk5","./isArray":"zOp4","./property":"cerT"}],"hYyA":[function(require,module,exports) {
var e=require("./_baseExtremum"),r=require("./_baseGt"),t=require("./_baseIteratee");function u(u,a){return u&&u.length?e(u,t(a,2),r):void 0}module.exports=u;
},{"./_baseExtremum":"UTs5","./_baseGt":"4ek3","./_baseIteratee":"EAyW"}],"lhEN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deletePlugin=exports.updatePlugin=exports.createPlugin=exports.getPluginById=exports.getNewId=void 0;var t=require("~context"),e=n(require("lodash/maxBy"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return o(t)||u(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function a(t,e){if(null==t)return{};var n,r,i=l(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function l(t,e){if(null==t)return{};var n,r,i={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}var s=1e9,c=function(t){var n=t.state.plugins;if(!n.length)return"".concat(s);var r=(0,e.default)(n,function(t){return parseInt(t.id,10)}),i=parseInt(r.id,10);return"".concat(i+1)};exports.getNewId=c;var p=function(t,e){return t.state.plugins.find(function(t){return t.id===e})||null};exports.getPluginById=p;var f=function(e){var n=c(e);return{id:n,name:"Plugin ".concat(n),type:t.PluginType.Css}};exports.createPlugin=f;var g=function(t,e){var n=e.id,i=a(e,["id"]),u=p(t,n);Object.assign(u,i),t.actions.setPlugins(r(t.state.plugins))};exports.updatePlugin=g;var d=function(t,e){var n=t.state.plugins.filter(function(t){return t.id!==e});t.actions.setSelectedPluginId(n[0]&&n[0].id||null),t.actions.setPlugins(r(n))};exports.deletePlugin=d;
},{"~context":"0150","lodash/maxBy":"hYyA"}],"3lc2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Button")),t=n(require("~context")),u=require("~utils/plugins");function n(e){return e&&e.__esModule?e:{default:e}}var r=window,i=r.React,l=i.useContext,s=function(){var n=l(t.default);return i.createElement(e.default,{label:"+ Add New Plugin",onClick:function(){var e=(0,u.createPlugin)(n),t=n.state.plugins;t.push(e),n.actions.setPlugins(t),n.actions.setSelectedPluginId(e.id)}})},a=s;exports.default=a;
},{"./Button":"8DQs","~context":"0150","~utils/plugins":"lhEN"}],"hHy1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("~context"));function t(e){return e&&e.__esModule?e:{default:e}}var o=window,d=o.React,r=d.useContext,l={padding:"8px",backgroundColor:"#FFF",borderTop:"1px solid black",borderBottom:"1px solid black"},n={fontWeight:"bold",backgroundColor:"black",color:"white"},i=function(t){var o=t.plugin,i=r(e.default),a=i.state.selectedPluginId===o.id;return d.createElement("div",{style:Object.assign({},l,a&&n),onClick:function(){i.actions.setSelectedPluginId(o.id)}},o.name)},a=i;exports.default=a;
},{"~context":"0150"}],"hlGz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("~context")),t=r(require("~components/Button/NewPluginButton")),n=r(require("./SidebarItem"));function r(e){return e&&e.__esModule?e:{default:e}}var l=window,u=l.React,o=function(){return u.createElement(e.default.Consumer,null,function(e){return u.createElement("div",{style:{width:"300px",height:"100%",border:"2px solid black"}},u.createElement("div",{style:{fontSize:"20px",padding:"20px",backgroundColor:"black",color:"white",textAlign:"center"}},"Slack Customizer"),u.createElement(t.default,null),u.createElement("div",null,e.state.plugins.map(function(e){return u.createElement(n.default,{plugin:e})})))})},i=o;exports.default=i;
},{"~context":"0150","~components/Button/NewPluginButton":"3lc2","./SidebarItem":"hHy1"}],"dgM+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Button"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Button":"8DQs"}],"vSVM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./Button")),t=n(require("~context")),r=require("~utils/plugins");function n(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}var o=window,l=o.React,i=l.useContext,a=function(){var n=i(t.default);return l.createElement(e.default,{type:e.ButtonType.Danger,label:"Delete",onClick:function(){(0,r.deletePlugin)(n,n.state.selectedPluginId)}})},c=a;exports.default=c;
},{"./Button":"8DQs","~context":"0150","~utils/plugins":"lhEN"}],"9D8o":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Button")),t=u(require("~context")),r=require("~utils/plugins");function u(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};u.get||u.set?Object.defineProperty(t,r,u):t[r]=e[r]}return t.default=e,t}var o=window,i=o.React,l=i.useContext,a=function(u){var n=u.plugin,o=l(t.default);return i.createElement(e.default,{type:e.ButtonType.Success,label:"Save",onClick:function(){(0,r.updatePlugin)(o,n)}})},c=a;exports.default=c;
},{"./Button":"8DQs","~context":"0150","~utils/plugins":"lhEN"}],"1s7D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("~context")),t=a(require("~components/Button")),n=a(require("~components/Button/DeleteButton")),r=a(require("~components/Button/SaveButton")),l=require("~utils/plugins");function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function i(e,t){return p(e)||c(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(o){l=!0,a=o}finally{try{r||null==i.return||i.return()}finally{if(l)throw a}}return n}function p(e){if(Array.isArray(e))return e}var d=window,s=d.$,f=d.React,v=f.useEffect,g=f.useContext,m=f.useState,y=function(){var a=g(e.default),u=i(m(null),2),o=u[0],c=u[1];v(function(){var e=(0,l.getPluginById)(a,a.state.selectedPluginId);c(e)},[a.state.selectedPluginId]);var p=function(e){c(Object.assign({},o,e))};return o?f.createElement("div",{style:{flex:1,height:"100%",padding:"40px"}},f.createElement("div",null,f.createElement("input",{style:{padding:"8px",fontSize:"12px",width:"70%",marginTop:"8px"},placeholder:"Fetch from url",value:o.url||"",onChange:function(e){return p({url:e.target.value})}}),f.createElement(t.default,{label:"fetch raw",onClick:function(){var e=o.url;s.get(e).then(function(e){p({raw:e})})}}),f.createElement(t.default,{label:"fetch json",onClick:function(){var t=o.url;s.get(t).then(function(t){try{var n=JSON.parse(t);if(!n.name||n.type!==e.PluginType.Css&&n.type!==e.PluginType.Javascript||!n.raw)throw new Error("invalid json");p(n)}catch(r){alert("invalid json")}})}})),f.createElement("hr",{style:{margin:"20px 0"}}),f.createElement("div",null,f.createElement("input",{style:{fontSize:"20px",padding:"8px",width:"80%"},value:o.name||"",onChange:function(e){return p({name:e.target.value})},placeholder:"name"})),f.createElement("div",null,f.createElement("select",{style:{width:"80%",fontSize:"12px",padding:"8px",marginTop:"8px"},value:o.type,onChange:function(e){return p({type:e.target.value})}},f.createElement("option",{value:e.PluginType.Css},"css"),f.createElement("option",{value:e.PluginType.Javascript},"javascript"))),f.createElement("div",null,f.createElement("textarea",{style:{height:"300px",width:"80%",padding:"8px",marginTop:"8px"},value:o.raw||"",onChange:function(e){return p({raw:e.target.value})},placeholder:"raw"})),f.createElement("div",null,f.createElement(r.default,{plugin:o}),f.createElement(n.default,null)),f.createElement("div",null,f.createElement(t.default,{label:"Output JSON to console",onClick:function(){console.log(JSON.stringify(o))}}))):f.createElement("div",{style:{flex:1,padding:"20px"}},"No Plugins...")},h=y;exports.default=h;
},{"~context":"0150","~components/Button":"dgM+","~components/Button/DeleteButton":"vSVM","~components/Button/SaveButton":"9D8o","~utils/plugins":"lhEN"}],"2LTw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("~context")),t=o(require("./Sidebar")),i=o(require("./Main"));function o(e){return e&&e.__esModule?e:{default:e}}var l=window,n=l.React,r=n.useContext,a=function(){var o=r(e.default);return n.createElement("div",{style:{position:"fixed",bottom:0,left:0,width:"100%",height:"100%",background:"white",display:o.state.isOpen?"flex":"none"}},n.createElement(t.default,null),n.createElement(i.default,null),n.createElement("div",{style:{width:"100%",height:"10px",backgroundColor:"black",position:"absolute",top:0,left:0}}),n.createElement("div",{style:{position:"fixed",width:"40px",height:"40px",right:0,top:0,background:"black",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"24px"},onClick:o.actions.toggle},"×"))},d=a;exports.default=d;
},{"~context":"0150","./Sidebar":"hlGz","./Main":"1s7D"}],"zo2T":[function(require,module,exports) {
"use strict";var e=u(require("~context")),t=u(require("~components/Lancher")),n=u(require("~components/Content")),r=u(require("~utils/store"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return a(e)||o(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function c(e,t){return d(e)||s(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(a){u=!0,i=a}finally{try{r||null==o.return||o.return()}finally{if(u)throw i}}return n}function d(e){if(Array.isArray(e))return e}var p=window,y=p.React,m=p.ReactDOM,g=p.$,v=y.useState,h=y.useEffect,w=function(){var u=c(v(!1),2),l=u[0],o=u[1],a=c(v(r.default.plugins),2),f=a[0],s=a[1],d=c(v(r.default.plugins[0]&&r.default.plugins[0].id||""),2),p=d[0],m=d[1];return h(function(){r.default.save(f)},[f]),y.createElement(e.default.Provider,{value:{state:{isOpen:l,plugins:f,selectedPluginId:p},actions:{toggle:function(){return o(!l)},setPlugins:function(e){return s(i(e))},setSelectedPluginId:function(e){return m(e)}}}},y.createElement("div",{style:{position:"fixed",top:0,left:0,zIndex:2e3}},y.createElement(n.default,null),y.createElement(t.default,null)))};m.render(y.createElement(w,null),document.querySelector("slack-customizer"));
},{"~context":"0150","~components/Lancher":"vOxU","~components/Content":"2LTw","~utils/store":"nfOT"}]},{},["zo2T"], null)