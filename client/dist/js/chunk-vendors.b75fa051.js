(self["webpackChunkpulse"]=self["webpackChunkpulse"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var f=a[l];r(e,f)||n&&r(n,f)||c(e,f,u(t,f))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,f,h,d,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(f in t){if(d=t[f],e.dontCallGetSet?(p=i(l,f),h=p&&p.value):h=l[f],n=u(v?f:m+(g?".":"#")+f,e.forced),!n&&void 0!==h){if(typeof d==typeof h)continue;c(d,h)}(e.sham||h&&h.sham)&&o(d,"sham",!0),s(l,f,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),f=n(5465),h=n(6200),d=n(3501),p="Object already initialized",m=a.TypeError,v=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var _=f.state||(f.state=new v);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw m(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},o=function(e){return _.has(e)}}else{var b=h("state");d[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},o=function(e){return l(e,b)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),f=l.enforce,h=l.get,d=String,p=Object.defineProperty,m=r("".slice),v=r("".replace),g=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(d(t),0,7)&&(t="["+v(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=f(e);return s(r,"source")||(r.source=g(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&h(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",d="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=l(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t),l)try{return f(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:f("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var f=0;f<r;f++)t[f]=arguments[f]}return s(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),f=n(6277),h=n(3678),d=n(1060),p=n(9781),m=n(1913),v="DOMException",g=o("Error"),y=o(v),_=function(){u(this,b);var e=arguments.length,t=f(e<1?void 0:arguments[0]),n=f(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=g(t);return i.name=v,a(r,"stack",s(1,d(i.stack,1))),l(r,this,_),r},b=_.prototype=y.prototype,w="stack"in g(v),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,v),k=!!E&&!(E.writable&&E.configurable),S=w&&!k&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?_:y});var O=o(v),T=O.prototype;if(T.constructor!==O)for(var R in m||a(T,"constructor",s(1,O)),h)if(c(h,R)){var C=h[R],P=C.s;c(O,P)||a(O,P,s(6,C.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return g},L:function(){return a},LL:function(){return T},Pz:function(){return v},ZR:function(){return O},aH:function(){return m},b$:function(){return w},eu:function(){return k},hl:function(){return E},m9:function(){return $},ne:function(){return L},pd:function(){return M},q4:function(){return p},ru:function(){return b},tV:function(){return c},uI:function(){return _},vZ:function(){return A},w1:function(){return I},xO:function(){return N},xb:function(){return P},z$:function(){return y},zd:function(){return D}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const f=t<<2|s>>4;if(r.push(f),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=()=>u().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},d=()=>{try{return l()||f()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=d())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=d())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?R(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new O(r,s,n);return a}}function R(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(x(n)&&x(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return s},Bj:function(){return o},Fl:function(){return Ge},IU:function(){return Ae},Jd:function(){return S},PG:function(){return Te},SU:function(){return Be},Um:function(){return ke},WL:function(){return ze},X$:function(){return C},X3:function(){return Pe},XI:function(){return Fe},Xl:function(){return xe},dq:function(){return je},iH:function(){return Ue},j:function(){return T},lk:function(){return O},nZ:function(){return c},qj:function(){return Ee},qq:function(){return w},yT:function(){return Ce}});n(7658);var r=n(7139);let i;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function s(e){return new o(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}const u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&v)>0,f=e=>(e.n&v)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!f(i)?i.delete(e):t[n++]=i,i.w&=~v,i.n&=~v}t.length=n}},p=new WeakMap;let m=0,v=1;const g=30;let y;const _=Symbol(""),b=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,E=!0,v=1<<++m,m<=g?h(this):I(this),this.fn()}finally{m<=g&&d(this),v=1<<--m,y=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const k=[];function S(){k.push(E),E=!1}function O(){const e=k.pop();E=void 0===e||e}function T(e,t,n){if(E&&y){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=u());const i=void 0;R(r,i)}}function R(e,t){let n=!1;m<=g?f(e)||(e.n|=v,n=!l(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function C(e,t,n,i,o,s){const a=p.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(_)),(0,r._N)(e)&&c.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(_)),(0,r._N)(e)&&c.push(a.get(b)));break;case"set":(0,r._N)(e)&&c.push(a.get(_));break}if(1===c.length)c[0]&&P(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);P(u(e))}}function P(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&A(r,t);for(const r of n)r.computed||A(r,t)}function A(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const x=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=$(),M=$(!1,!0),L=$(!0),j=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ae(this)[t].apply(this,e);return O(),n}})),e}function F(e){const t=Ae(this);return T(t,"has",e),t.hasOwnProperty(e)}function $(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?be:_e:t?ye:ge).get(n))return n;const s=(0,r.kJ)(n);if(!e){if(s&&(0,r.RI)(j,i))return Reflect.get(j,i,o);if("hasOwnProperty"===i)return F}const a=Reflect.get(n,i,o);return((0,r.yk)(i)?N.has(i):x(i))?a:(e||T(n,"get",i),t?a:je(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Se(a):Ee(a):a)}}const V=H(),B=H(!0);function H(e=!1){return function(t,n,i,o){let s=t[n];if(Re(s)&&je(s)&&!je(i))return!1;if(!e&&(Ce(i)||Re(i)||(s=Ae(s),i=Ae(i)),!(0,r.kJ)(t)&&je(s)&&!je(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ae(o)&&(a?(0,r.aU)(i,s)&&C(t,"set",n,i,s):C(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&C(e,"delete",t,void 0,i),o}function W(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||T(e,"has",t),n}function q(e){return T(e,"iterate",(0,r.kJ)(e)?"length":_),Reflect.ownKeys(e)}const G={get:D,set:V,deleteProperty:z,has:W,ownKeys:q},J={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},G,{get:M,set:B}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),o=Ae(t);n||(t!==o&&T(i,"get",t),T(i,"get",o));const{has:s}=Y(i),a=r?X:n?De:Ne;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return t||(e!==i&&T(r,"has",e),T(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&T(Ae(e),"iterate",_),Reflect.get(e,"size",e)}function te(e){e=Ae(e);const t=Ae(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function ne(e,t){t=Ae(t);const n=Ae(this),{has:i,get:o}=Y(n);let s=i.call(n,e);s||(e=Ae(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function re(e){const t=Ae(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&C(t,"delete",e,void 0,o),s}function ie(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ae(o),a=t?X:e?De:Ne;return!e&&T(s,"iterate",_),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=Ae(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),f=n?X:t?De:Ne;return!t&&T(s,"iterate",u?b:_),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Z(this,e)},get size(){return ee(this)},has:Q,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return Z(this,e,!1,!0)},get size(){return ee(this)},has:Q,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return Z(this,e,!0)},get size(){return ee(this,!0)},has(e){return Q.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return Z(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Q.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ue,le,fe,he]=ce();function de(e,t){const n=t?e?he:fe:e?le:ue;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const pe={get:de(!1,!1)},me={get:de(!1,!0)},ve={get:de(!0,!1)};const ge=new WeakMap,ye=new WeakMap,_e=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ee(e){return Re(e)?e:Oe(e,!1,G,pe,ge)}function ke(e){return Oe(e,!1,K,me,ye)}function Se(e){return Oe(e,!0,J,ve,_e)}function Oe(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Ie(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Te(e){return Re(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Re(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return!(!e||!e["__v_isShallow"])}function Pe(e){return Te(e)||Re(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function xe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?Ee(e):e,De=e=>(0,r.Kn)(e)?Se(e):e;function Me(e){E&&y&&(e=Ae(e),R(e.dep||(e.dep=u())))}function Le(e,t){e=Ae(e);const n=e.dep;n&&P(n)}function je(e){return!(!e||!0!==e.__v_isRef)}function Ue(e){return $e(e,!1)}function Fe(e){return $e(e,!0)}function $e(e,t){return je(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return Me(this),this._value}set value(e){const t=this.__v_isShallow||Ce(e)||Re(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ne(e),Le(this,e))}}function Be(e){return je(e)?e.value:e}const He={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Te(e)?e:new Proxy(e,He)}var We;class qe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[We]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Me(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new qe(i,o,s||!o,n);return a}We="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},FN:function(){return hn},Fl:function(){return Rn},HY:function(){return Pt},JJ:function(){return z},Ko:function(){return je},P$:function(){return te},Q6:function(){return ae},U2:function(){return re},Uk:function(){return Qt},Us:function(){return kt},Wm:function(){return Kt},Y3:function(){return y},Y8:function(){return Z},YP:function(){return G},_:function(){return Jt},aZ:function(){return ce},f3:function(){return W},h:function(){return Cn},iD:function(){return Vt},ic:function(){return Ee},j4:function(){return Bt},kq:function(){return tn},nK:function(){return se},uE:function(){return en},up:function(){return Ne},w5:function(){return M},wF:function(){return be},wg:function(){return Lt},wy:function(){return Pe}});n(7658),n(541);var r=n(4870),i=n(7139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const f=[];let h=0;const d=[];let p=null,m=0;const v=Promise.resolve();let g=null;function y(e){const t=g||v;return e?t.then(this?e.bind(this):e):t}function _(e){let t=h+1,n=f.length;while(t<n){const r=t+n>>>1,i=O(f[r]);i<e?t=r+1:n=r}return t}function b(e){f.length&&f.includes(e,u&&e.allowRecurse?h+1:h)||(null==e.id?f.push(e):f.splice(_(e.id),0,e),w())}function w(){u||l||(l=!0,g=v.then(R))}function I(e){const t=f.indexOf(e);t>h&&f.splice(t,1)}function E(e){(0,i.kJ)(e)?d.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||d.push(e),w()}function k(e,t=(u?h+1:0)){for(0;t<f.length;t++){const e=f[t];e&&e.pre&&(f.splice(t,1),t--,e())}}function S(e){if(d.length){const e=[...new Set(d)];if(d.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>O(e)-O(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const O=e=>null==e.id?1/0:e.id,T=(e,t)=>{const n=O(e)-O(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function R(e){l=!1,u=!0,f.sort(T);i.dG;try{for(h=0;h<f.length;h++){const e=f[h];e&&!1!==e.active&&o(e,null,14)}}finally{h=0,f.length=0,S(e),u=!1,g=null,(f.length||d.length)&&R(e)}}new Set;new Map;function C(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&s(l,e,6,o);const f=r[u+"Once"];if(f){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(f,e,6,o)}}function P(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function A(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let x=null,N=null;function D(e){const t=x;return x=e,N=e&&e.type.__scopeId||null,t}function M(e,t=x,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ft(-1);const i=D(t);let o;try{o=e(...n)}finally{D(i),r._d&&Ft(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function L(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:u,attrs:l,emit:f,render:h,renderCache:d,data:p,setupState:m,ctx:v,inheritAttrs:g}=e;let y,_;const b=D(e);try{if(4&n.shapeFlag){const e=o||r;y=nn(h.call(e,e,d,s,m,p,v)),_=l}else{const e=t;0,y=nn(e.length>1?e(s,{attrs:l,slots:u,emit:f}):e(s,null)),_=t.props?l:j(l)}}catch(I){Dt.length=0,a(I,e,1),y=Kt(xt)}let w=y;if(_&&!1!==g){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(i.tR)&&(_=U(_,c)),w=Zt(w,_))}return n.dirs&&(w=Zt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,D(b),y}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function F(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||$(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?$(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!A(u,n))return!0}}return!1}function $(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!A(n,o))return!0}return!1}function V({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const B=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function z(e,t){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[e]=t}else 0}function W(e,t,n=!1){const r=fn||x;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const q={};function G(e,t,n){return J(e,t,n)}function J(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const f=(0,r.nZ)()===(null===fn||void 0===fn?void 0:fn.scope)?fn:null;let h,d,p=!1,m=!1;if((0,r.dq)(e)?(h=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Y(e):(0,i.mf)(e)?o(e,f,2):void 0))):h=(0,i.mf)(e)?t?()=>o(e,f,2):()=>{if(!f||!f.isUnmounted)return d&&d(),s(e,f,3,[g])}:i.dG,t&&a){const e=h;h=()=>Y(e())}let v,g=e=>{d=I.onStop=()=>{o(e,f,4)}};if(yn){if(g=i.dG,t?n&&s(t,f,3,[h(),m?[]:void 0,g]):h(),"sync"!==c)return i.dG;{const e=An();v=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(q):q;const _=()=>{if(I.active)if(t){const e=I.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(d&&d(),s(t,f,3,[e,y===q?void 0:m&&y[0]===q?[]:y,g]),y=e)}else I.run()};let w;_.allowRecurse=!!t,"sync"===c?w=_:"post"===c?w=()=>Et(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),w=()=>b(_));const I=new r.qq(h,w);t?n?_():y=I.run():"post"===c?Et(I.run.bind(I),f&&f.suspense):I.run();const E=()=>{I.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,I)};return v&&v.push(E),E}function K(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?X(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=fn;dn(this);const c=J(o,s.bind(r),n);return a?dn(a):pn(),c}function X(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Y(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Y(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Y(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Y(e,t)}));else if((0,i.PO)(e))for(const n in e)Y(e[n],t);return e}function Z(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we((()=>{e.isMounted=!0})),ke((()=>{e.isUnmounting=!0})),e}const Q=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Q,onEnter:Q,onAfterEnter:Q,onEnterCancelled:Q,onBeforeLeave:Q,onLeave:Q,onAfterLeave:Q,onLeaveCancelled:Q,onBeforeAppear:Q,onAppear:Q,onAfterAppear:Q,onAppearCancelled:Q},setup(e,{slots:t}){const n=hn(),i=Z();let o;return()=>{const s=t.default&&ae(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==xt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ie(a);const l=oe(a);if(!l)return ie(a);const f=re(l,c,i,n);se(l,f);const h=n.subTree,d=h&&oe(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(d&&d.type!==xt&&(!zt(l,d)||p)){const e=re(d,c,i,n);if(se(d,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ie(a);"in-out"===u&&l.type!==xt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:y,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),I=ne(n,e),E=(e,t)=>{e&&s(e,r,9,t)},k=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=g||u}t._leaveCb&&t._leaveCb(!0);const i=I[w];i&&zt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=f,i=h;if(!n.isMounted){if(!o)return;t=y||l,r=_||f,i=b||h}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?k(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(d,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?v:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?k(p,[t,s]):s()},clone(e){return re(e,t,n,r)}};return S}function ie(e){if(le(e))return e=Zt(e),e.children=null,e}function oe(e){return le(e)?e.children?e.children[0]:void 0:e}function se(e,t){6&e.shapeFlag&&e.component?se(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Pt?(128&s.patchFlag&&i++,r=r.concat(ae(s.children,t,a))):(t||s.type!==xt)&&r.push(null!=a?Zt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function ce(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ue=e=>!!e.type.__asyncLoader;const le=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,i.kJ)(e)?e.some((e=>fe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function he(e,t){pe(e,"a",t)}function de(e,t){pe(e,"da",t)}function pe(e,t,n=fn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ye(t,r,n),n){let e=n.parent;while(e&&e.parent)le(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const o=ye(t,e,r,!0);Se((()=>{(0,i.Od)(r[t],o)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ge(e){return 128&e.shapeFlag?e.ssContent:e}function ye(e,t,n=fn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),dn(n);const o=s(t,n,e,i);return pn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const _e=e=>(t,n=fn)=>(!yn||"sp"===e)&&ye(e,((...e)=>t(...e)),n),be=_e("bm"),we=_e("m"),Ie=_e("bu"),Ee=_e("u"),ke=_e("bum"),Se=_e("um"),Oe=_e("sp"),Te=_e("rtg"),Re=_e("rtc");function Ce(e,t=fn){ye("ec",e,t)}function Pe(e,t){const n=x;if(null===n)return e;const r=Sn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Y(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ae(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),s(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const xe="components";function Ne(e,t){return Me(xe,e,!0,t)||e}const De=Symbol();function Me(e,t,n=!0,r=!1){const o=x||fn;if(o){const n=o.type;if(e===xe){const e=On(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Le(o[e]||n[e],t)||Le(o.appContext[e],t);return!s&&r?n:s}}function Le(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function je(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Ue=e=>e?mn(e)?Sn(e)||e.proxy:Ue(e.parent):null,Fe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ue(e.parent),$root:e=>Ue(e.root),$emit:e=>e.emit,$options:e=>Ge(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>K.bind(e)}),$e=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Ve={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let f;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if($e(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((f=e.propsOptions[0])&&(0,i.RI)(f,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Be&&(c[t]=0)}}const h=Fe[t];let d,p;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(d=u.__cssModules)&&(d=d[t])?d:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return $e(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||$e(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Fe,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Be=!0;function He(e){const t=Ge(e),n=e.proxy,o=e.ctx;Be=!1,t.beforeCreate&&We(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:f,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:v,activated:g,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:I,render:E,renderTracked:k,renderTriggered:S,errorCaptured:O,serverPrefetch:T,expose:R,inheritAttrs:C,components:P,directives:A,filters:x}=t,N=null;if(f&&ze(f,o,N,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Be=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Rn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)qe(u[r],o,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{z(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&We(h,e,"c"),D(be,d),D(we,p),D(Ie,m),D(Ee,v),D(he,g),D(de,y),D(Ce,O),D(Re,k),D(Te,S),D(ke,b),D(Se,I),D(Oe,T),(0,i.kJ)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=C&&(e.inheritAttrs=C),P&&(e.components=P),A&&(e.directives=A)}function ze(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=Ze(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?W(n.from||s,n.default,!0):W(n.from||s):W(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function We(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function qe(e,t,n,r){const o=r.includes(".")?X(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&G(o,n)}else if((0,i.mf)(e))G(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>qe(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&G(o,r,e)}else 0}function Ge(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>Je(u,e,a,!0))),Je(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function Je(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Je(e,o,n,!0),i&&i.forEach((t=>Je(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ke[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ke={data:Xe,props:et,emits:et,methods:et,computed:et,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:et,directives:et,watch:tt,provide:Xe,inject:Ye};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ye(e,t){return et(Ze(e),Ze(t))}function Ze(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function et(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function tt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Qe(e[r],t[r]);return n}function nt(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Wt,1),e.propsDefaults=Object.create(null),it(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function rt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let f=!1;if(!(o||c>0)||16&c){let r;it(e,t,s,a)&&(f=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ot(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],f=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(A(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,f=!0);else{const t=(0,i._A)(o);s[t]=ot(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,f=!0)}}f&&(0,r.X$)(e,"set","$attrs")}function it(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let f;s&&(0,i.RI)(s,f=(0,i._A)(r))?a&&a.includes(f)?(c||(c={}))[f]=l:n[f]=l:A(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ot(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return u}function ot(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(dn(o),r=i[n]=e.call(null,t),pn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function st(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=st(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let f=0;f<s.length;f++){0;const e=(0,i._A)(s[f]);at(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(at(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=lt(Boolean,r.type),n=lt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function at(e){return"$"!==e[0]}function ct(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ut(e,t){return ct(e)===ct(t)}function lt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ut(t,e))):(0,i.mf)(t)&&ut(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,i.kJ)(e)?e.map(nn):[nn(e)],dt=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>ht(t(...e))),n);return r._c=!1,r},pt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ft(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=dt(o,n,r);else if(null!=n){0;const e=ht(n);t[o]=()=>e}}},mt=(e,t)=>{const n=ht(t);e.slots.default=()=>n},vt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&mt(e,t);(0,i.Nj)(e.slots,Wt,1)},gt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,pt(t,o)),a=t}else t&&(mt(e,t),a={default:1});if(s)for(const i in o)ft(i)||i in a||delete o[i]};function yt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function bt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=yt(),s=new Set;let a=!1;const c=o.app={_uid:_t++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:xn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,u){if(!a){0;const l=Kt(n,r);return l.appContext=o,s&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Sn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function wt(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>wt(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(ue(s)&&!a)return;const c=4&s.shapeFlag?Sn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:f}=e;const h=t&&t.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=h&&h!==f&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(f))o(f,l,12,[u,d]);else{const t=(0,i.HD)(f),o=(0,r.dq)(f);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,f)?p[f]:d[f]:f.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(d[f]=[c],(0,i.RI)(p,f)&&(p[f]=d[f])):(f.value=[c],e.k&&(d[e.k]=f.value))}else t?(d[f]=u,(0,i.RI)(p,f)&&(p[f]=u)):o&&(f.value=u,e.k&&(d[e.k]=u))};u?(r.id=-1,Et(r,n)):r()}else 0}}function It(){}const Et=H;function kt(e){return St(e)}function St(e,t){It();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:v}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!zt(e,t)&&(r=Z(e),G(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=t;switch(u){case At:y(e,t,n,r);break;case xt:_(e,t,n,r);break;case Nt:null==e&&w(t,n,r,s);break;case Pt:D(e,t,n,r,i,o,s,a,c);break;default:1&f?T(e,t,n,r,i,o,s,a,c):6&f?M(e,t,n,r,i,o,s,a,c):(64&f||128&f)&&u.process(e,t,n,r,i,o,s,a,c,ee)}null!=l&&i&&wt(l,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},_=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},T=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?R(t,n,r,i,o,s,a,c):A(e,t,i,o,s,a,c)},R=(e,t,n,r,s,u,l,f)=>{let d,p;const{type:m,props:v,shapeFlag:g,transition:y,dirs:_}=e;if(d=e.el=c(e.type,u,v&&v.is,v),8&g?h(d,e.children):16&g&&P(e.children,d,null,r,s,u&&"foreignObject"!==m,l,f),_&&Ae(e,null,r,"created"),C(d,e,e.scopeId,l,r),v){for(const t in v)"value"===t||(0,i.Gg)(t)||a(d,t,null,v[t],u,e.children,r,s,Y);"value"in v&&a(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&an(p,r,e)}_&&Ae(e,null,r,"beforeMount");const b=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(d),o(d,t,n),((p=v&&v.onVnodeMounted)||b||_)&&Et((()=>{p&&an(p,r,e),b&&y.enter(d),_&&Ae(e,null,r,"mounted")}),s)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?rn(e[u]):nn(e[u]);g(null,c,t,n,r,i,o,s,a)}},A=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let v;n&&Ot(n,!1),(v=m.onVnodeBeforeUpdate)&&an(v,n,t,e),d&&Ae(t,e,n,"beforeUpdate"),n&&Ot(n,!0);const g=o&&"foreignObject"!==t.type;if(f?x(e.dynamicChildren,f,u,n,r,g,s):c||H(e,t,u,null,n,r,g,s,!1),l>0){if(16&l)N(u,t,p,m,n,r,o);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,o),4&l&&a(u,"style",p.style,m.style,o),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,o,e.children,n,r,Y)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=f||N(u,t,p,m,n,r,o);((v=m.onVnodeUpdated)||d)&&Et((()=>{v&&an(v,n,t,e),d&&Ae(t,e,n,"updated")}),r)},x=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Pt||!zt(c,u)||70&c.shapeFlag)?d(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},N=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,o,s,Y);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],f=n[u];l!==f&&"value"!==u&&a(e,u,f,l,c,t.children,o,s,Y)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,l)=>{const f=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(f,n,r),o(h,n,r),P(t.children,n,h,i,s,a,c,l)):d>0&&64&d&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Tt(e,t,!0)):H(e,t,n,h,i,s,a,c,l)},M=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):j(t,n,r,i,o,s,c):U(e,t,c)},j=(e,t,n,r,i,o,s)=>{const a=e.component=ln(e,r,i);if(le(e)&&(a.ctx.renderer=ee),_n(a),a.asyncDep){if(i&&i.registerDep(a,$),!e.el){const e=a.subTree=Kt(xt);_(null,e,t,n)}}else $(a,e,t,n,i,o,s)},U=(e,t,n)=>{const r=t.component=e.component;if(F(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:l}=e,f=n;0,Ot(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&an(t,u,n,l),Ot(e,!0);const h=L(e);0;const p=e.subTree;e.subTree=h,g(p,h,d(p.el),Z(p),e,s,a),n.el=h.el,null===f&&V(e,h.el),o&&Et(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Et((()=>an(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:f,parent:h}=e,d=ue(t);if(Ot(e,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&an(r,h,t),Ot(e,!0),c&&ne){const n=()=>{e.subTree=L(e),ne(c,e.subTree,e,s,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=L(e);0,g(null,r,n,o,e,s,a),t.el=r.el}if(f&&Et(f,s),!d&&(r=u&&u.onVnodeMounted)){const e=t;Et((()=>an(r,h,e)),s)}(256&t.shapeFlag||h&&ue(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Et(e.a,s),e.isMounted=!0,t=n=o=null}},l=e.effect=new r.qq(u,(()=>b(f)),e.scope),f=e.update=()=>l.run();f.id=e.uid,Ot(e,!0),f()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,rt(e,t.props,i,n),gt(e,t.children,n),(0,r.Jd)(),k(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void W(u,f,n,r,i,o,s,a,c);if(256&d)return void z(u,f,n,r,i,o,s,a,c)}8&p?(16&l&&Y(u,i,o),f!==u&&h(n,f)):16&l?16&p?W(u,f,n,r,i,o,s,a,c):Y(u,i,o,!0):(8&l&&h(n,""),16&p&&P(f,n,r,i,o,s,a,c))},z=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,f=t.length,h=Math.min(l,f);let d;for(d=0;d<h;d++){const r=t[d]=u?rn(t[d]):nn(t[d]);g(e[d],r,n,null,o,s,a,c,u)}l>f?Y(e,o,s,!0,!1,h):P(t,n,r,o,s,a,c,u,h)},W=(e,t,n,r,o,s,a,c,u)=>{let l=0;const f=t.length;let h=e.length-1,d=f-1;while(l<=h&&l<=d){const r=e[l],i=t[l]=u?rn(t[l]):nn(t[l]);if(!zt(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=h&&l<=d){const r=e[h],i=t[d]=u?rn(t[d]):nn(t[d]);if(!zt(r,i))break;g(r,i,n,null,o,s,a,c,u),h--,d--}if(l>h){if(l<=d){const e=d+1,i=e<f?t[e].el:r;while(l<=d)g(null,t[l]=u?rn(t[l]):nn(t[l]),n,i,o,s,a,c,u),l++}}else if(l>d)while(l<=h)G(e[l],o,s,!0),l++;else{const p=l,m=l,v=new Map;for(l=m;l<=d;l++){const e=t[l]=u?rn(t[l]):nn(t[l]);null!=e.key&&v.set(e.key,l)}let y,_=0;const b=d-m+1;let w=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=h;l++){const r=e[l];if(_>=b){G(r,o,s,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(y=m;y<=d;y++)if(0===E[y-m]&&zt(r,t[y])){i=y;break}void 0===i?G(r,o,s,!0):(E[i-m]=l+1,i>=I?I=i:w=!0,g(r,t[i],n,null,o,s,a,c,u),_++)}const k=w?Rt(E):i.Z6;for(y=k.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],h=e+1<f?t[e+1].el:r;0===E[l]?g(null,i,n,h,o,s,a,c,u):w&&(y<0||l!==k[y]?q(i,n,h,2):y--)}}},q=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Pt){o(s,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Nt)return void E(e,t,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),o(s,t,n),Et((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:h}=e;if(null!=a&&wt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const d=1&l&&h,p=!ue(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&an(m,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);d&&Ae(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(o!==Pt||f>0&&64&f)?Y(u,t,n,!1,!0):(o===Pt&&384&f||!i&&16&l)&&Y(c,t,n),r&&J(e)}(p&&(m=s&&s.onVnodeUnmounted)||d)&&Et((()=>{m&&an(m,t,e),d&&Ae(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Pt)return void K(n,r);if(t===Nt)return void O(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},K=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,G(a,e,t,n)),c&&Et(c,t),Et((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)G(e[s],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),k(),S(),t._vnode=e},ee={p:g,um:G,m:q,r:J,mt:j,mc:P,pc:H,pbc:x,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Q,hydrate:te,createApp:bt(Q,te)}}function Ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Tt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=rn(o[i]),t.el=e.el),n||Tt(e,t)),t.type===At&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Ct=e=>e.__isTeleport;const Pt=Symbol(void 0),At=Symbol(void 0),xt=Symbol(void 0),Nt=Symbol(void 0),Dt=[];let Mt=null;function Lt(e=!1){Dt.push(Mt=e?null:[])}function jt(){Dt.pop(),Mt=Dt[Dt.length-1]||null}let Ut=1;function Ft(e){Ut+=e}function $t(e){return e.dynamicChildren=Ut>0?Mt||i.Z6:null,jt(),Ut>0&&Mt&&Mt.push(e),e}function Vt(e,t,n,r,i,o){return $t(Jt(e,t,n,r,i,o,!0))}function Bt(e,t,n,r,i){return $t(Kt(e,t,n,r,i,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function zt(e,t){return e.type===t.type&&e.key===t.key}const Wt="__vInternal",qt=({key:e})=>null!=e?e:null,Gt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:x,r:e,k:t,f:!!n}:e:null;function Jt(e,t=null,n=null,r=0,o=null,s=(e===Pt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qt(t),ref:t&&Gt(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:x};return c?(on(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ut>0&&!a&&Mt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Mt.push(u),u}const Kt=Xt;function Xt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==De||(e=xt),Ht(e)){const r=Zt(e,t,!0);return n&&on(r,n),Ut>0&&!a&&Mt&&(6&r.shapeFlag?Mt[Mt.indexOf(e)]=r:Mt.push(r)),r.patchFlag|=-2,r}if(Tn(e)&&(e=e.__vccOpts),t){t=Yt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:B(e)?128:Ct(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Jt(e,t,n,o,s,c,a,!0)}function Yt(e){return e?(0,r.X3)(e)||Wt in e?(0,i.l7)({},e):e:null}function Zt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&qt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Gt(t)):[o,Gt(t)]:Gt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Qt(e=" ",t=0){return Kt(At,null,e,t)}function en(e,t){const n=Kt(Nt,null,e);return n.staticCount=t,n}function tn(e="",t=!1){return t?(Lt(),Bt(xt,null,e)):Kt(xt,null,e)}function nn(e){return null==e||"boolean"===typeof e?Kt(xt):(0,i.kJ)(e)?Kt(Pt,null,e.slice()):"object"===typeof e?rn(e):Kt(At,null,String(e))}function rn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Zt(e)}function on(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),on(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Wt in t?3===r&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,i.mf)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&r?(n=16,t=[Qt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function an(e,t,n,r=null){s(e,t,7,[n,r])}const cn=yt();let un=0;function ln(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||cn,a={uid:un++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:st(o,s),emitsOptions:P(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=C.bind(null,a),e.ce&&e.ce(a),a}let fn=null;const hn=()=>fn||x,dn=e=>{fn=e,e.scope.on()},pn=()=>{fn&&fn.scope.off(),fn=null};function mn(e){return 4&e.vnode.shapeFlag}let vn,gn,yn=!1;function _n(e,t=!1){yn=t;const{props:n,children:r}=e.vnode,i=mn(e);nt(e,n,i,t),vt(e,r);const o=i?bn(e,t):void 0;return yn=!1,o}function bn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ve));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?kn(e):null;dn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),pn(),(0,i.tI)(c)){if(c.then(pn,pn),t)return c.then((n=>{wn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else wn(e,c,t)}else In(e,t)}function wn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),In(e,n)}function In(e,t,n){const o=e.type;if(!e.render){if(!t&&vn&&!o.render){const t=o.template||Ge(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=vn(t,c)}}e.render=o.render||i.dG,gn&&gn(e)}dn(e),(0,r.Jd)(),He(e),(0,r.lk)(),pn()}function En(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function kn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=En(e))},slots:e.slots,emit:e.emit,expose:t}}function Sn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Fe?Fe[n](e):void 0},has(e,t){return t in e||t in Fe}}))}function On(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Tn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Rn=(e,t)=>(0,r.Fl)(e,t,yn);function Cn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Ht(t)?Kt(e,null,[t]):Kt(e,t):Kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ht(n)&&(n=[n]),Kt(e,t,n))}const Pn=Symbol(""),An=()=>{{const e=W(Pn);return e}};const xn="3.2.47"},9242:function(e,t,n){"use strict";n.d(t,{YZ:function(){return ve},iM:function(){return we},nr:function(){return ce},ri:function(){return Se}});n(7658);var r=n(7139),i=n(3396),o=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(s,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function f(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"");for(const e in n)d(i,e,n[e])}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=v(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function v(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=k(t);if(r){const s=o[t]=R(r,i);b(e,n,s,a)}else s&&(w(e,n,s,a),o[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function k(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const O=Promise.resolve(),T=()=>S||(O.then((()=>S=0)),S=Date.now());function R(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(C(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function C(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const P=/^on[a-z]/,A=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?l(e,i,o):"style"===t?f(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,i,o))?_(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,o))};function x(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&P.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",D="animation",M=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);M.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j=M.props=(0,r.l7)({},i.P$.props,L),U=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=V(o),v=m&&m[0],g=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:k=_,onAppearCancelled:S=b}=t,O=(e,t,n)=>{z(e,t?f:c),z(e,t?l:a),n&&n()},T=(e,t)=>{e._isLeaving=!1,z(e,h),z(e,p),z(e,d),t&&t()},R=e=>(t,n)=>{const r=e?k:_,o=()=>O(t,e,n);U(r,[t,o]),W((()=>{z(t,e?u:s),H(t,e?f:c),F(r)||G(t,i,v,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(y,[e]),H(e,s),H(e,a)},onBeforeAppear(e){U(E,[e]),H(e,u),H(e,l)},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);H(e,h),Y(),H(e,d),W((()=>{e._isLeaving&&(z(e,h),H(e,p),F(w)||G(e,i,g,n))})),U(w,[e,n])},onEnterCancelled(e){O(e,!1),U(b,[e])},onAppearCancelled(e){O(e,!0),U(S,[e])},onLeaveCancelled(e){T(e),U(I,[e])}})}function V(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let q=0;function G(e,t,n,r){const i=e._endId=++q,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=J(e,t);if(!s)return r();const u=s+"end";let l=0;const f=()=>{e.removeEventListener(u,h),o()},h=t=>{t.target===e&&++l>=c&&f()};setTimeout((()=>{l<c&&f()}),a+1),e.addEventListener(u,h)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${N}Delay`),o=r(`${N}Duration`),s=K(i,o),a=r(`${D}Delay`),c=r(`${D}Duration`),u=K(a,c);let l=null,f=0,h=0;t===N?s>0&&(l=N,f=s,h=o.length):t===D?u>0&&(l=D,f=u,h=c.length):(f=Math.max(s,u),l=f>0?s>u?N:D:null,h=l?l===N?o.length:c.length:0);const d=l===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:d}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const Z=new WeakMap,Q=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},j,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(s[0].el,n.vnode.el,t))return;s.forEach(te),s.forEach(ne);const r=s.filter(re);Y(),r.forEach((e=>{const n=e.el,r=n.style;H(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.IU)(e),u=$(c);let l=c.tag||i.HY;s=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(s)for(let e=0;e<s.length;e++){const t=s[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Z.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Q.set(e,e.el.getBoundingClientRect())}function re(e){const t=Z.get(e),n=Q.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=J(r);return i.removeChild(r),o}const oe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function se(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=oe(o);const s=i||o.props&&"number"===o.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.h5)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",se),b(e,"compositionend",ae),b(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=oe(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ue={deep:!0,created(e,t,n){e._assign=oe(n),b(e,"change",(()=>{const t=e._modelValue,n=pe(e),i=e.checked,o=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(me(e,i))}))},mounted:le,beforeUpdate(e,t,n){e._assign=oe(n),le(e,t,n)}};function le(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,me(e,!0)))}const fe={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=oe(n),b(e,"change",(()=>{e._assign(pe(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=oe(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},he={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(pe(e)):pe(e)));e._assign(e.multiple?o?new Set(t):t:t[0])})),e._assign=oe(i)},mounted(e,{value:t}){de(e,t)},beforeUpdate(e,t,n){e._assign=oe(n)},updated(e,{value:t}){de(e,t)}};function de(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=pe(o);if(n)(0,r.kJ)(t)?o.selected=(0,r.hq)(t,s)>-1:o.selected=t.has(s);else if((0,r.WV)(pe(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function pe(e){return"_value"in e?e._value:e.value}function me(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ve={created(e,t,n){ye(e,t,n,null,"created")},mounted(e,t,n){ye(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){ye(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){ye(e,t,n,r,"updated")}};function ge(e,t){switch(e){case"SELECT":return he;case"TEXTAREA":return ce;default:switch(t){case"checkbox":return ue;case"radio":return fe;default:return ce}}}function ye(e,t,n,r,i){const o=ge(e.tagName,n.props&&n.props.type),s=o[i];s&&s(e,t,n,r)}const _e=["ctrl","shift","alt","meta"],be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>_e.some((n=>e[`${n}Key`]&&!t.includes(n)))},we=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=be[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Ie=(0,r.l7)({patchProp:A},u);let Ee;function ke(){return Ee||(Ee=(0,i.Us)(Ie))}const Se=(...e)=>{const t=ke().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Oe(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Oe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return f},DM:function(){return N},E9:function(){return se},F7:function(){return S},Gg:function(){return q},HD:function(){return j},He:function(){return ie},Kj:function(){return M},Kn:function(){return F},NO:function(){return E},Nj:function(){return ne},Od:function(){return R},PO:function(){return z},Pq:function(){return d},RI:function(){return P},S0:function(){return W},W7:function(){return H},WV:function(){return v},Z6:function(){return w},_A:function(){return K},_N:function(){return x},aU:function(){return ee},dG:function(){return I},e1:function(){return o},fY:function(){return r},h5:function(){return re},hR:function(){return Q},hq:function(){return g},ir:function(){return te},j5:function(){return s},kC:function(){return Z},kJ:function(){return A},kT:function(){return b},l7:function(){return T},mf:function(){return L},rs:function(){return Y},tI:function(){return $},tR:function(){return O},yA:function(){return p},yk:function(){return U},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=j(r)?l(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return j(e)||F(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(j(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",d=r(h);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=A(e),r=A(t),n||r)return!(!n||!r)&&m(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>v(e,t)))}const y=e=>j(e)?e:null==e?"":A(e)||F(e)&&(e.toString===V||!L(e.toString))?JSON.stringify(e,_,2):String(e),_=(e,t)=>t&&t.__v_isRef?_(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||A(t)||z(t)?t:String(t),b={},w=[],I=()=>{},E=()=>!1,k=/^on[^a-z]/,S=e=>k.test(e),O=e=>e.startsWith("onUpdate:"),T=Object.assign,R=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,P=(e,t)=>C.call(e,t),A=Array.isArray,x=e=>"[object Map]"===B(e),N=e=>"[object Set]"===B(e),D=e=>"[object Date]"===B(e),M=e=>"[object RegExp]"===B(e),L=e=>"function"===typeof e,j=e=>"string"===typeof e,U=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,$=e=>F(e)&&L(e.then)&&L(e.catch),V=Object.prototype.toString,B=e=>V.call(e),H=e=>B(e).slice(8,-1),z=e=>"[object Object]"===B(e),W=e=>j(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,K=G((e=>e.replace(J,((e,t)=>t?t.toUpperCase():"")))),X=/\B([A-Z])/g,Y=G((e=>e.replace(X,"-$1").toLowerCase())),Z=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=G((e=>e?`on${Z(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=j(e)?Number(e):NaN;return isNaN(t)?e:t};let oe;const se=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4303:function(e,t,n){n(7658),function(t,n){e.exports=n()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Confetti:()=>z,default:()=>W});const n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e+1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=parseFloat(e),i=parseFloat(t),o=Math.random()*(i-r)+r;return n?Math.round(o):o};function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.color,i=void 0===n?"blue":n,o=t.size,s=void 0===o?10:o,a=t.dropRate,c=void 0===a?10:a;r(this,e),this.color=i,this.size=s,this.dropRate=c}var t,o;return t=e,(o=[{key:"setup",value:function(e){var t=e.canvas,r=e.wind,i=e.windPosCoef,o=e.windSpeedMax,s=e.count;return this.canvas=t,this.wind=r,this.windPosCoef=i,this.windSpeedMax=o,this.x=n(-35,this.canvas.width+35),this.y=n(-30,-35),this.d=n(150)+10,this.particleSize=n(this.size,2*this.size),this.tilt=n(10),this.tiltAngleIncremental=(n(0,.08)+.04)*(n()<.5?-1:1),this.tiltAngle=0,this.angle=n(2*Math.PI),this.count=s+1,this.remove=!1,this}},{key:"update",value:function(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}},{key:"pastBottom",value:function(){return this.y>this.canvas.height}},{key:"draw",value:function(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}},{key:"kill",value:function(){this.remove=!0}}])&&i(t.prototype,o),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},u(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function s(){return a(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"draw",value:function(){u(h(s.prototype),"draw",this).call(this),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}])&&c(t.prototype,n),s}(o);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},g(e,t,n||e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function _(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function s(){return m(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"draw",value:function(){g(b(s.prototype),"draw",this).call(this),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}])&&v(t.prototype,n),s}(o);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},S(e,t,n||e)}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function T(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(i){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function s(){return E(this,s),o.apply(this,arguments)}return t=s,(n=[{key:"draw",value:function(){var e=this;S(R(s.prototype),"draw",this).call(this);var t=function(t,n,r,i,o,s){e.canvas.ctx.bezierCurveTo(t*(e.particleSize/200),n*(e.particleSize/200),r*(e.particleSize/200),i*(e.particleSize/200),o*(e.particleSize/200),s*(e.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),t(75,37,70,25,50,25),t(20,25,20,62.5,20,62.5),t(20,80,40,102,75,120),t(110,102,130,80,130,62.5),t(130,62.5,130,25,100,25),t(85,25,75,37,75,40),this.canvas.ctx.fill()}}])&&k(t.prototype,n),s}(o);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},x(e,t,n||e)}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function D(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(s,e);var t,n,r,i,o=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(i){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=o.call(this,e)).imgEl=t,n}return t=s,(n=[{key:"draw",value:function(){x(M(s.prototype),"draw",this).call(this),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}])&&A(t.prototype,n),s}(o);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cachedImages={}}var t,r;return t=e,r=[{key:"createImageElement",value:function(e){var t=document.createElement("img");return t.setAttribute("src",e),t}},{key:"getImageElement",value:function(e){return this.cachedImages[e]||(this.cachedImages[e]=this.createImageElement(e)),this.cachedImages[e]}},{key:"getRandomParticle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.particles||[];return t.length<1?{}:t[Math.floor(Math.random()*t.length)]}},{key:"getDefaults",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.defaultType||"circle",size:e.defaultSize||10,dropRate:e.defaultDropRate||10,colors:e.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}},{key:"create",value:function(e){var t=this.getDefaults(e),r=this.getRandomParticle(e),i=Object.assign(t,r),o=n(0,i.colors.length-1,!0);if(i.color=i.colors[o],"circle"===i.type)return new d(i);if("rect"===i.type)return new w(i);if("heart"===i.type)return new C(i);if("image"===i.type)return new L(i,this.getImageElement(i.url));throw Error('Unknown particle type: "'.concat(i.type,'"'))}}],r&&j(t.prototype,r),e}();function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=[],this.pool=[],this.particleOptions=t,this.particleFactory=new U}var t,n;return t=e,(n=[{key:"update",value:function(){var e,t=this,n=[],r=[];this.items.forEach((function(e){e.update(),e.pastBottom()?e.remove||(e.setup(t.particleOptions),n.push(e)):r.push(e)})),(e=this.pool).push.apply(e,n),this.items=r}},{key:"draw",value:function(){this.items.forEach((function(e){return e.draw()}))}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}},{key:"refresh",value:function(){this.items.forEach((function(e){e.kill()})),this.pool=[]}}])&&F(t.prototype,n),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n="confetti-canvas";if(t&&!(t instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!t,this.canvas=t||document.getElementById(n)||e.createDefaultCanvas(n),this.ctx=this.canvas.getContext("2d")}var t,n,r;return t=e,r=[{key:"createDefaultCanvas",value:function(e){var t=document.createElement("canvas");return t.style.display="block",t.style.position="fixed",t.style.pointerEvents="none",t.style.top=0,t.style.width="100vw",t.style.height="100vh",t.id=e,document.querySelector("body").appendChild(t),t}}],(n=[{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}},{key:"clear",value:function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}},{key:"updateDimensions",value:function(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}}])&&V(t.prototype,n),r&&V(t,r),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setDefaults()}var t,n;return t=e,n=[{key:"setDefaults",value:function(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}},{key:"getParticleOptions",value:function(e){var t={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(t,e),t}},{key:"createParticles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getParticleOptions(e);this.particleManager=new $(t)}},{key:"getCanvasElementFromOptions",value:function(e){var t=e.canvasId,n=e.canvasElement,r=n;if(n&&!(n instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(t&&n)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(t&&!r&&(r=document.getElementById(t)),t&&!(r instanceof HTMLCanvasElement))throw new Error('Invalid options: element with id "'.concat(t,'" is not a valid HTMLCanvasElement'));return r}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.remove();var t=this.getCanvasElementFromOptions(e);this.canvas=new B(t),this.canvasEl=t,this.createParticles(e),this.setGlobalOptions(e),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}},{key:"setGlobalOptions",value:function(e){this.particlesPerFrame=e.particlesPerFrame||2,this.windSpeedMax=e.windSpeedMax||1}},{key:"stop",value:function(){this.killed=!0,this.particlesPerFrame=0}},{key:"update",value:function(e){var t=this.getCanvasElementFromOptions(e);this.canvas&&t!==this.canvasEl?this.start(e):(this.setGlobalOptions(e),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(e),this.particleManager.refresh()))}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}},{key:"mainLoop",value:function(e){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(e/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;for(var t=this.framesSinceDrop*this.particlesPerFrame;t>=1;)this.particleManager.add(),t-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}],n&&H(t.prototype,n),e}();const W={install:function(e,t){if(!this.installed){this.installed=!0;try{e.config.globalProperties.$confetti=new z(t)}catch(n){e.prototype.$confetti=new z(t)}}}};return t})()}))},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},65:function(e,t,n){"use strict";n.d(t,{MT:function(){return te},oR:function(){return g}});n(7658),n(541);var r=n(3396),i=n(4870);function o(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,f;function h(){var e;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(l=!0,f=n.g.perf_hooks.performance):l=!1),l}function d(){return h()?f.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(o){}i=e},now(){return d()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,r=s(),i=o(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,i):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(c,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var v="store";function g(e){return void 0===e&&(e=null),(0,r.f3)(null!==e?e:v)}function y(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function _(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function I(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var o=e._state,s=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,c={},u={},l=(0,i.B)(!0);l.run((function(){y(a,(function(t,n){c[n]=w(t,e),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(e.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),e._state=(0,i.qj)({data:t}),e._scope=l,e.strict&&A(e),o&&n&&e._withCommit((function(){o.data=null})),s&&s.stop()}function S(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=x(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var u=r.context=O(e,s,n);r.forEachMutation((function(t,n){var r=s+n;R(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;C(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;P(e,r,t,u)})),r.forEachChild((function(r,o){S(e,t,n.concat(o),r,i)}))}function O(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return x(e.state,n)}}}),i}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function R(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function C(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return b(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function P(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function x(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,n){return _(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var D="vuex bindings",M="vuex:mutations",L="vuex:actions",j="vuex",U=0;function F(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:M,label:"Vuex Mutations",color:$}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:$}),n.addInspector({id:j,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===j)if(n.filter){var r=[];q(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[W(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId;T(t,r),n.state=G(K(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(j),n.sendInspectorState(j),n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=U++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:L,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var $=8702998,V=6710886,B=16777215,H={label:"namespaced",textColor:B,backgroundColor:V};function z(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function W(e,t){return{id:t||"root",label:z(t),tags:e.namespaced?[H]:[],children:Object.keys(e._children).map((function(n){return W(e._children[n],t+n+"/")}))}}function q(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[H]:[]}),Object.keys(t._children).forEach((function(i){q(e,t._children[i],n,r+i+"/")}))}function G(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=J(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?z(e):e,editable:!1,value:X((function(){return o[e]}))}}))}return i}function J(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=X((function(){return e[n]}))}else t[n]=X((function(){return e[n]}))})),t}function K(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function X(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Z={namespaced:{configurable:!0}};Z.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){y(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&y(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&y(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&y(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,Z);var Q=function(e){this.register([],e,!1)};function ee(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;ee(e.concat(r),t.getChild(r),n.modules[r])}}Q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Q.prototype.update=function(e){ee([],this.root,e)},Q.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new Y(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&y(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function te(e){return new ne(e)}var ne=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(e,t){return a.call(o,e,t)},this.commit=function(e,t,n){return c.call(o,e,t,n)},this.strict=r;var u=this._modules.root.state;S(this,u,[],this._modules.root),k(this,u),n.forEach((function(e){return e(t)}))},re={state:{configurable:!0}};ne.prototype.install=function(e,t){e.provide(t||v,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&F(e,this)},re.state.get=function(){return this._state.data},re.state.set=function(e){0},ne.prototype.commit=function(e,t,n){var r=this,i=N(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},ne.prototype.dispatch=function(e,t){var n=this,r=N(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},ne.prototype.subscribe=function(e,t){return I(e,this._subscribers,t)},ne.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return I(n,this._actionSubscribers,t)},ne.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},ne.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ne.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},ne.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=x(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},ne.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ne.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},ne.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ne.prototype,re);se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ae(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=ae(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return ie(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=ae(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ie(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||_(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var r=e._modulesNamespaceMap[n];return r}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return fe},Xd:function(){return le},Mq:function(){return ge},ZF:function(){return ve},KN:function(){return ye}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(f.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return d.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return v(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],T=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return T.set(t,o),o}_((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",x="0.9.3",N=new i.Yd("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",j="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",$="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",q="@firebase/installations-compat",G="@firebase/messaging",J="@firebase/messaging-compat",K="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.17.1",oe="[DEFAULT]",se={[A]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[$]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[q]:"fire-iid-compat",[G]:"fire-fcm",[J]:"fire-fcm-compat",[K]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new o.LL("app","Firebase",he);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ve(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw de.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw de.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw de.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(s,u),u}function ge(e=oe){const t=ae.get(e);if(!t&&e===oe)return ve();if(!t)throw de.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ie=null;function Ee(){return Ie||(Ie=k(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw de.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function ke(e){try{const t=await Ee();return t.transaction(we).objectStore(we).get(Oe(e))}catch(t){if(t instanceof o.ZR)N.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Se(e,t){try{const n=await Ee(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Oe(e)),r.done}catch(n){if(n instanceof o.ZR)N.warn(n.message);else{const e=de.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Re=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=Te){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){le(new r.wA("platform-logger",(e=>new C(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Ce(e)),"PRIVATE")),ye(A,x,e),ye(A,x,"esm2017"),ye("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.17.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},8829:function(e,t,n){"use strict";n.d(t,{Xb:function(){return dt},v0:function(){return br},e5:function(){return pt},w7:function(){return gt}});n(7658);var r=n(223),i=n(7077),o=n(5168);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),f=new o.Yd("@firebase/auth");function h(e,...t){f.logLevel<=o["in"].ERROR&&f.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function _(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;d(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,o={}){return L(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw $(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);d(e,a)}}catch(o){if(o instanceof r.ZR)throw o;d(e,"network-request-failed")}}async function j(e,t,n,r,i={}){const o=await M(e,t,n,r,i);return"mfaPendingCredential"in o&&d(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=q(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(W(o.auth_time)),issuedAtTime:H(W(o.iat)),expirationTime:H(W(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function G(e){const t=q(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&K(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,B(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Q(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await L(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:E}=t;g(_&&E,e,"internal-error");const k=re.fromJSON(this.name,E);g("string"===typeof _,e,"internal-error"),ie(l,e.name),ie(f,e.name),g("boolean"===typeof b,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(h,e.name),ie(d,e.name),ie(p,e.name),ie(m,e.name),ie(v,e.name),ie(y,e.name);const S=new oe({uid:_,auth:e,email:f,emailVerified:b,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:v,lastLoginAt:y});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ve(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _e(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ye(e)||me(e)||ge(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,r.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Oe(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Ce(t),{host:s,port:a}=Pe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xe()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pe(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ae(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ae(t)}}}function Ae(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function je(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ne{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Me(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Le(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="http://localhost";class Ve extends Ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ve(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:$e,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function He(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function ze(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const We={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),We)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Ne{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ke(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Xe{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=Je(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ke(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return g(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Qe{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Qe{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Qe{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return j(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=st(n),s=new ot({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await J(e,ct(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=q(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),ot._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&d(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n=!1){const r="signIn",i=await ct(e,r,t),o=await ot._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ht(e,t){return ft(Oe(e),t)}async function dt(e,t,n){const r=Oe(e),i=await it(r,{returnSecureToken:!0,email:t,password:n}),o=await ot._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function pt(e,t,n){return ht((0,r.m9)(e),Ye.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function vt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function gt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function _t(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const bt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){const e=(0,r.z$)();return he(e)||ye(e)}const Et=1e3,kt=10;class St extends wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=It()&&Ie(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Et)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}St.type="LOCAL";const Ot=St;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tt.type="SESSION";const Rt=Tt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Ct(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.receivers=[];class xt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=At("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function Dt(e){Nt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return"undefined"!==typeof Nt()["WorkerGlobalScope"]&&"function"===typeof Nt()["importScripts"]}async function Lt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ut(){return Mt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="firebaseLocalStorageDb",$t=1,Vt="firebaseLocalStorage",Bt="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function zt(e,t){return e.transaction([Vt],t?"readwrite":"readonly").objectStore(Vt)}function Wt(){const e=indexedDB.deleteDatabase(Ft);return new Ht(e).toPromise()}function qt(){const e=indexedDB.open(Ft,$t);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Vt,{keyPath:Bt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Vt)?t(n):(n.close(),await Wt(),t(await qt()))}))}))}async function Gt(e,t,n){const r=zt(e,!0).put({[Bt]:t,value:n});return new Ht(r).toPromise()}async function Jt(e,t){const n=zt(e,!1).get(t),r=await new Ht(n).toPromise();return void 0===r?null:r.value}function Kt(e,t){const n=zt(e,!0).delete(t);return new Ht(n).toPromise()}const Xt=800,Yt=3;class Zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Yt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pt._getInstance(Ut()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lt(),!this.activeServiceWorker)return;this.sender=new xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Gt(e,bt,"1"),await Kt(e,bt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Gt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Kt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=zt(e,!1).getAll();return new Ht(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Zt.type="LOCAL";const Qt=Zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function tn(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function rn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)}))}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function an(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===sn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await yt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await en(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Be(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return an(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cn.credentialFromTaggedObject(t)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class ln extends Ne{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fn(e){return ft(e.auth,new ln(e),e.bypassAuthState)}function hn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),lt(n,new ln(e),e.bypassAuthState)}async function dn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ut(n,new ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return hn;default:d(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new C(2e3,1e4);class vn extends pn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mn.get())};e()}}vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn="pendingRedirect",yn=new Map;class _n extends pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const t=await bn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bn(e,t){const n=En(t),r=In(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function wn(e,t){yn.set(e._key(),t)}function In(e){return w(e._redirectPersistence)}function En(e){return ce(gn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t,n=!1){const r=Oe(e),i=un(r,t),o=new _n(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class On{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Cn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Rn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tn(e))}saveEventToCache(e){this.cachedEventUids.add(Tn(e)),this.lastProcessedEventTime=Date.now()}}function Tn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Rn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Cn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xn=/^https?/;async function Nn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Pn(e);for(const r of t)try{if(Dn(r))return}catch(n){}d(e,"unauthorized-domain")}function Dn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xn.test(n))return!1;if(An.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new C(3e4,6e4);function Ln(){const e=Nt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Ln(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(p(e,"network-request-failed"))},timeout:Mn.get()})}if(null===(i=null===(r=Nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Nt().gapi)||void 0===o?void 0:o.load)){const t=on("iframefcb");return Nt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Un=null,e}))}let Un=null;function Fn(e){return Un=Un||jn(e),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new C(5e3,15e3),Vn="__/auth/iframe",Bn="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Bn):`https://${e.config.authDomain}/${Vn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=zn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function qn(e){const t=await Fn(e),n=Nt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Wn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Nt().setTimeout((()=>{r(i)}),$n.get());function s(){Nt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Kn=600,Xn="_blank",Yn="http://localhost";class Zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qn(e,t,n,i=Jn,o=Kn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=de(l)?Xn:n),fe(l)&&(t=t||Yn,u.scrollbars="yes");const f=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(_e(l)&&"_self"!==c)return er(t||"",c),new Zn(null);const h=window.open(t||"",c,f);g(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Zn(h)}function er(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="__/auth/handler",nr="emulator/auth/handler";function rr(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof Ze){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Qe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${ir(e)}?${(0,r.xO)(u).slice(1)}`}function ir({config:e}){return e.emulator?P(e,nr):`https://${e.authDomain}/${tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rt,this._completeRedirectFn=kn,this._overrideRedirectResult=wn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rr(e,t,n,k(),r);return Qn(e,o,At())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Dt(rr(e,t,n,k(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await qn(e),n=new On(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&t(!!i),d(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||ye()}}const ar=sr;class cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class ur extends cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ur(e)}_finalizeEnroll(e,t,n){return _t(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lr{constructor(){}static assertion(e){return ur._fromCredential(e)}}lr.FACTOR_ID="phone";var fr="@firebase/auth",hr="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Se(t,r,i);return E(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new dr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(fr,hr,pr(e)),(0,i.KN)(fr,hr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=300,gr=(0,r.Pz)("authIdTokenMaxAge")||vr;let yr=null;const _r=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gr)return;const i=null===n||void 0===n?void 0:n.token;yr!==i&&(yr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function br(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I(e,{popupRedirectResolver:ar,persistence:[Qt,Ot,Rt]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=_r(o);vt(n,e,(()=>e(n.currentUser))),mt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Re(n,`http://${s}`),n}mr("Browser")},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return F},p7:function(){return tt}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const f=/\/$/,h=e=>e.replace(f,"");function d(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function v(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&g(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function k(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),h(e)}const S=/^[^#]+#/;function O(e,t){return e.replace(S,"#")+t}function T(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=T(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function P(e,t){const n=history.state?history.state.position-t:-1;return n+e}const A=new Map;function x(e,t){A.set(e,t)}function N(e){const t=A.get(e);return A.delete(e),t}let D=()=>location.protocol+"//"+location.host;function M(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,e);return s+r+i}function L(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=M(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:R()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:u,listen:l,destroy:h}}function j(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function U(e){const{history:t,location:n}=window,r={value:M(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,j(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:R()});o(s.current,s,!0);const c=a({},j(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function F(e){e=k(e);const t=U(e),n=L(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:O.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function $(e){return"string"===typeof e||e&&"object"===typeof e}function V(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function W(e,t){return a(new Error,{type:e,[H]:!0},t)}function q(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const G="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},J,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(K,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;o.push({name:e,repeatable:n,optional:c});const l=u||G;if(l!==G){s+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+f.message)}}let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(h=c&&a.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),i+=h,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Q(r))return 1;if(Q(i))return-1}return i.length-r.length}function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function f(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:te.test(a)?h():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),i}function re(e,t,n){const r=X(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=se(e);c.aliasOf=r&&r.record;const f=le(t,e),h=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let d,p;for(const t of h){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(d=re(t,n,f),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&e.name&&!ce(d)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],d,r&&r.children[t])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{s(p)}:u}function s(e){if(V(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!fe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function f(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw W(1,{location:e});0,s=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw W(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:f,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const he=/#/g,de=/&/g,pe=/\//g,me=/=/g,ve=/\?/g,ge=/\+/g,ye=/%5B/g,_e=/%5D/g,be=/%5E/g,we=/%60/g,Ie=/%7B/g,Ee=/%7C/g,ke=/%7D/g,Se=/%20/g;function Oe(e){return encodeURI(""+e).replace(Ee,"|").replace(ye,"[").replace(_e,"]")}function Te(e){return Oe(e).replace(Ie,"{").replace(ke,"}").replace(be,"^")}function Re(e){return Oe(e).replace(ge,"%2B").replace(Se,"+").replace(he,"%23").replace(de,"%26").replace(we,"`").replace(Ie,"{").replace(ke,"}").replace(be,"^")}function Ce(e){return Re(e).replace(me,"%3D")}function Pe(e){return Oe(e).replace(he,"%23").replace(ve,"%3F")}function Ae(e){return null==e?"":Pe(e).replace(pe,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ne(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ge," "),n=e.indexOf("="),o=xe(n<0?e:e.slice(0,n)),s=n<0?null:xe(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Ce(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Le=Symbol(""),je=Symbol(""),Ue=Symbol(""),Fe=Symbol(""),$e=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(W(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(W(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(ze(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(Be(c,n,r,o,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&Be(u,n,r,o,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Fe),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(g.bind(null,r));if(s>-1)return s;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(g.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ke(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function l(n={}){return Je(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const qe=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=(0,i.qj)(We(e)),{options:o}=(0,r.f3)(Ue),s=(0,r.Fl)((()=>({[Ye(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ge=qe;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)($e),s=(0,r.Fl)((()=>e.route||o.value)),c=(0,r.f3)(je,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(je,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Le,l),(0,r.JJ)($e,s);const f=(0,i.iH)();return(0,r.YP)((()=>[f.value,l.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&g(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=l.value,u=c&&c.components[o];if(!u)return Qe(n.default,{Component:u,route:i});const h=c.props[o],d=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},m=(0,r.h)(u,a({},d,t,{onVnodeUnmounted:p,ref:f}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Ne,s=e.stringifyQuery||De,f=e.history;const h=Ve(),m=Ve(),g=Ve(),y=(0,i.XI)(B);let _=B;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),w=c.bind(null,Ae),E=c.bind(null,xe);function k(e,n){let r,i;return V(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function A(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=d(n,e,r.path),o=t.resolve({path:i.path},r),s=f.createHref(i.fullPath);return a(i,o,{params:E(o.params),hash:xe(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:d(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:w(e.params)}),r.params=w(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=b(E(o.params));const u=p(s,a({},e,{hash:Te(c),path:o.path})),l=f.createHref(u);return a({fullPath:u,hash:c,query:s===De?Me(e.query):e.query||{}},o,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?d(n,e,y.value.path):a({},e)}function M(e,t){if(_!==e)return W(8,{from:t,to:e})}function L(e){return F(e)}function j(e){return L(a(D(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=_=A(e),r=y.value,i=e.state,o=e.force,c=!0===e.replace,u=U(n);if(u)return F(a(D(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),t||n);const l=n;let f;return l.redirectedFrom=t,!o&&v(s,r,n)&&(f=W(16,{to:l,from:r}),ne(r,r,!0,!1)),(f?Promise.resolve(f):H(l,r)).catch((e=>q(e)?q(e,2)?e:te(e):Q(e,l,r))).then((e=>{if(e){if(q(e,2))return F(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||l)}else e=G(l,r,!0,c,i);return z(l,r,e),e}))}function $(e,t){const n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,o]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=$.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const r of h.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(o,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(s),nt(n)})).catch((e=>q(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of g.list())r(e,t,n)}function G(e,t,n,r,i){const s=M(e,t);if(s)return s;const c=t===B,u=o?history.state:{};n&&(r||c?f.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):f.push(e.fullPath,i)),y.value=e,ne(e,t,n,c),te()}let J;function K(){J||(J=f.listen(((e,t,n)=>{if(!ae.listening)return;const r=A(e),i=U(r);if(i)return void F(a(i,{replace:!0}),r).catch(u);_=r;const s=y.value;o&&x(P(s.fullPath,n.delta),R()),H(r,s).catch((e=>q(e,12)?e:q(e,2)?(F(e.to,r).then((e=>{q(e,20)&&!n.delta&&n.type===I.pop&&f.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&f.go(-n.delta,!1),Q(e,r,s)))).then((e=>{e=e||G(r,s,!1),e&&(n.delta&&!q(e,8)?f.go(-n.delta,!1):n.type===I.pop&&q(e,20)&&f.go(-1,!1)),z(r,s,e)})).catch(u)})))}let X,Y=Ve(),Z=Ve();function Q(e,t,n){te(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&y.value!==B?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function te(e){return X||(X=!e,K(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&N(P(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&C(e))).catch((e=>Q(e,t,n)))}const re=e=>f.go(e);let oe;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:k,removeRoute:S,hasRoute:T,getRoutes:O,resolve:A,options:e,push:L,replace:j,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:h.add,beforeResolve:m.add,afterEach:g.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),o&&!oe&&y.value===B&&(oe=!0,L(f.location).catch((e=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Fe,(0,i.qj)(n)),e.provide($e,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(_=B,J&&J(),J=null,y.value=B,oe=!1,X=!1),s()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>g(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>g(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.b75fa051.js.map