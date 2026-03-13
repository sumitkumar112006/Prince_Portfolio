(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function UE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gx={exports:{}},Jf={},vx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),IE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),kE=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),GE=Symbol.for("react.suspense"),VE=Symbol.for("react.memo"),WE=Symbol.for("react.lazy"),Q_=Symbol.iterator;function XE(n){return n===null||typeof n!="object"?null:(n=Q_&&n[Q_]||n["@@iterator"],typeof n=="function"?n:null)}var xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yx=Object.assign,Sx={};function Qa(n,e,t){this.props=n,this.context=e,this.refs=Sx,this.updater=t||xx}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Qa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Mx(){}Mx.prototype=Qa.prototype;function Em(n,e,t){this.props=n,this.context=e,this.refs=Sx,this.updater=t||xx}var Tm=Em.prototype=new Mx;Tm.constructor=Em;yx(Tm,Qa.prototype);Tm.isPureReactComponent=!0;var J_=Array.isArray,Ex=Object.prototype.hasOwnProperty,wm={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function wx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ex.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lu,type:n,key:s,ref:o,props:r,_owner:wm.current}}function YE(n,e){return{$$typeof:Lu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Am(n){return typeof n=="object"&&n!==null&&n.$$typeof===Lu}function jE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var eg=/\/+/g;function Rd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jE(""+n.key):e.toString(36)}function Gc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Lu:case IE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Rd(o,0):i,J_(r)?(t="",n!=null&&(t=n.replace(eg,"$&/")+"/"),Gc(r,e,t,"",function(u){return u})):r!=null&&(Am(r)&&(r=YE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",J_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Rd(s,a);o+=Gc(s,e,t,l,r)}else if(l=XE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Rd(s,a++),o+=Gc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hu(n,e,t){if(n==null)return n;var i=[],r=0;return Gc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function qE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Yn={current:null},Vc={transition:null},$E={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:wm};function Ax(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Hu,forEach:function(n,e,t){Hu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Hu(n,function(){e++}),e},toArray:function(n){return Hu(n,function(e){return e})||[]},only:function(n){if(!Am(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=Qa;st.Fragment=OE;st.Profiler=kE;st.PureComponent=Em;st.StrictMode=FE;st.Suspense=GE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;st.act=Ax;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=yx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ex.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Lu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:BE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zE,_context:n},n.Consumer=n};st.createElement=wx;st.createFactory=function(n){var e=wx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:HE,render:n}};st.isValidElement=Am;st.lazy=function(n){return{$$typeof:WE,_payload:{_status:-1,_result:n},_init:qE}};st.memo=function(n,e){return{$$typeof:VE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Vc.transition;Vc.transition={};try{n()}finally{Vc.transition=e}};st.unstable_act=Ax;st.useCallback=function(n,e){return Yn.current.useCallback(n,e)};st.useContext=function(n){return Yn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Yn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Yn.current.useEffect(n,e)};st.useId=function(){return Yn.current.useId()};st.useImperativeHandle=function(n,e,t){return Yn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Yn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Yn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Yn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Yn.current.useReducer(n,e,t)};st.useRef=function(n){return Yn.current.useRef(n)};st.useState=function(n){return Yn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Yn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Yn.current.useTransition()};st.version="18.3.1";vx.exports=st;var ct=vx.exports;const KE=UE(ct);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=ct,QE=Symbol.for("react.element"),JE=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function Cx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)e1.call(e,i)&&!n1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:QE,type:n,key:s,ref:o,props:r,_owner:t1.current}}Jf.Fragment=JE;Jf.jsx=Cx;Jf.jsxs=Cx;gx.exports=Jf;var xe=gx.exports,qh={},Rx={exports:{}},bi={},bx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,I){var C=N.length;N.push(I);e:for(;0<C;){var K=C-1>>>1,Q=N[K];if(0<r(Q,I))N[K]=I,N[C]=Q,C=K;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],C=N.pop();if(C!==I){N[0]=C;e:for(var K=0,Q=N.length,$=Q>>>1;K<$;){var Z=2*(K+1)-1,ie=N[Z],pe=Z+1,fe=N[pe];if(0>r(ie,C))pe<Q&&0>r(fe,ie)?(N[K]=fe,N[pe]=C,K=pe):(N[K]=ie,N[Z]=C,K=Z);else if(pe<Q&&0>r(fe,C))N[K]=fe,N[pe]=C,K=pe;else break e}}return I}function r(N,I){var C=N.sortIndex-I.sortIndex;return C!==0?C:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=N)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function y(N){if(_=!1,x(N),!g)if(t(l)!==null)g=!0,z(w);else{var I=t(u);I!==null&&H(y,I.startTime-N)}}function w(N,I){g=!1,_&&(_=!1,h(P),P=-1),p=!0;var C=d;try{for(x(I),f=t(l);f!==null&&(!(f.expirationTime>I)||N&&!k());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var Q=K(f.expirationTime<=I);I=n.unstable_now(),typeof Q=="function"?f.callback=Q:f===t(l)&&i(l),x(I)}else i(l);f=t(l)}if(f!==null)var $=!0;else{var Z=t(u);Z!==null&&H(y,Z.startTime-I),$=!1}return $}finally{f=null,d=C,p=!1}}var T=!1,M=null,P=-1,S=5,E=-1;function k(){return!(n.unstable_now()-E<S)}function D(){if(M!==null){var N=n.unstable_now();E=N;var I=!0;try{I=M(!0,N)}finally{I?q():(T=!1,M=null)}}else T=!1}var q;if(typeof v=="function")q=function(){v(D)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=D,q=function(){O.postMessage(null)}}else q=function(){m(D,0)};function z(N){M=N,T||(T=!0,q())}function H(N,I){P=m(function(){N(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,z(w))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var C=d;d=I;try{return N()}finally{d=C}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var C=d;d=N;try{return I()}finally{d=C}},n.unstable_scheduleCallback=function(N,I,C){var K=n.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?K+C:K):C=K,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=C+Q,N={id:c++,callback:I,priorityLevel:N,startTime:C,expirationTime:Q,sortIndex:-1},C>K?(N.sortIndex=C,e(u,N),t(l)===null&&N===t(u)&&(_?(h(P),P=-1):_=!0,H(y,C-K))):(N.sortIndex=Q,e(l,N),g||p||(g=!0,z(w))),N},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(N){var I=d;return function(){var C=d;d=I;try{return N.apply(this,arguments)}finally{d=C}}}})(Px);bx.exports=Px;var i1=bx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=ct,Ai=i1;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lx=new Set,nu={};function Lo(n,e){Ua(n,e),Ua(n+"Capture",e)}function Ua(n,e){for(nu[n]=e,n=0;n<e.length;n++)Lx.add(e[n])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function o1(n){return $h.call(ng,n)?!0:$h.call(tg,n)?!1:s1.test(n)?ng[n]=!0:(tg[n]=!0,!1)}function a1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function l1(n,e,t,i){if(e===null||typeof e>"u"||a1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function Rm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Cm,Rm);yn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Cm,Rm);yn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Cm,Rm);yn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});yn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function bm(n,e,t,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,t,r,i)&&(t=null),i||r===null?o1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var qr=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),ia=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),Dm=Symbol.for("react.memo"),ns=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),ig=Symbol.iterator;function sl(n){return n===null||typeof n!="object"?null:(n=ig&&n[ig]||n["@@iterator"],typeof n=="function"?n:null)}var Gt=Object.assign,bd;function Ml(n){if(bd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+n}var Pd=!1;function Ld(n,e){if(!n||Pd)return"";Pd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ml(n):""}function u1(n){switch(n.tag){case 5:return Ml(n.type);case 16:return Ml("Lazy");case 13:return Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 2:case 15:return n=Ld(n.type,!1),n;case 11:return n=Ld(n.type.render,!1),n;case 1:return n=Ld(n.type,!0),n;default:return""}}function Jh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ra:return"Fragment";case ia:return"Portal";case Kh:return"Profiler";case Pm:return"StrictMode";case Zh:return"Suspense";case Qh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Nx:return(n.displayName||"Context")+".Consumer";case Dx:return(n._context.displayName||"Context")+".Provider";case Lm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dm:return e=n.displayName||null,e!==null?e:Jh(n.type)||"Memo";case ns:e=n._payload,n=n._init;try{return Jh(n(e))}catch{}}return null}function c1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Pm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ix(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f1(n){var e=Ix(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Vu(n){n._valueTracker||(n._valueTracker=f1(n))}function Ox(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ix(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ff(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ep(n,e){var t=e.checked;return Gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function rg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(n,e){e=e.checked,e!=null&&bm(n,"checked",e,!1)}function tp(n,e){Fx(n,e);var t=bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?np(n,e.type,t):e.hasOwnProperty("defaultValue")&&np(n,e.type,bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function sg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function np(n,e,t){(e!=="number"||ff(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var El=Array.isArray;function ya(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ip(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function og(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(El(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:bs(t)}}function kx(n,e){var t=bs(e.value),i=bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ag(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function zx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?zx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Wu,Bx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Wu=Wu||document.createElement("div"),Wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function iu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d1=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(n){d1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Nl[e]=Nl[n]})});function Hx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Nl.hasOwnProperty(n)&&Nl[n]?(""+e).trim():e+"px"}function Gx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Hx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var h1=Gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(n,e){if(e){if(h1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function op(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=null;function Nm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lp=null,Sa=null,Ma=null;function lg(n){if(n=Uu(n)){if(typeof lp!="function")throw Error(re(280));var e=n.stateNode;e&&(e=rd(e),lp(n.stateNode,n.type,e))}}function Vx(n){Sa?Ma?Ma.push(n):Ma=[n]:Sa=n}function Wx(){if(Sa){var n=Sa,e=Ma;if(Ma=Sa=null,lg(n),e)for(n=0;n<e.length;n++)lg(e[n])}}function Xx(n,e){return n(e)}function Yx(){}var Dd=!1;function jx(n,e,t){if(Dd)return n(e,t);Dd=!0;try{return Xx(n,e,t)}finally{Dd=!1,(Sa!==null||Ma!==null)&&(Yx(),Wx())}}function ru(n,e){var t=n.stateNode;if(t===null)return null;var i=rd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var up=!1;if(Hr)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){up=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{up=!1}function p1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ul=!1,df=null,hf=!1,cp=null,m1={onError:function(n){Ul=!0,df=n}};function _1(n,e,t,i,r,s,o,a,l){Ul=!1,df=null,p1.apply(m1,arguments)}function g1(n,e,t,i,r,s,o,a,l){if(_1.apply(this,arguments),Ul){if(Ul){var u=df;Ul=!1,df=null}else throw Error(re(198));hf||(hf=!0,cp=u)}}function Do(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function qx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ug(n){if(Do(n)!==n)throw Error(re(188))}function v1(n){var e=n.alternate;if(!e){if(e=Do(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ug(r),n;if(s===i)return ug(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function $x(n){return n=v1(n),n!==null?Kx(n):null}function Kx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Kx(n);if(e!==null)return e;n=n.sibling}return null}var Zx=Ai.unstable_scheduleCallback,cg=Ai.unstable_cancelCallback,x1=Ai.unstable_shouldYield,y1=Ai.unstable_requestPaint,jt=Ai.unstable_now,S1=Ai.unstable_getCurrentPriorityLevel,Um=Ai.unstable_ImmediatePriority,Qx=Ai.unstable_UserBlockingPriority,pf=Ai.unstable_NormalPriority,M1=Ai.unstable_LowPriority,Jx=Ai.unstable_IdlePriority,ed=null,gr=null;function E1(n){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(ed,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:A1,T1=Math.log,w1=Math.LN2;function A1(n){return n>>>=0,n===0?32:31-(T1(n)/w1|0)|0}var Xu=64,Yu=4194304;function Tl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Tl(a):(s&=o,s!==0&&(i=Tl(s)))}else o=t&~r,o!==0?i=Tl(o):s!==0&&(i=Tl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function C1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=C1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function fp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ey(){var n=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),n}function Nd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Du(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function b1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Im(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function ty(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ny,Om,iy,ry,sy,dp=!1,ju=[],ms=null,_s=null,gs=null,su=new Map,ou=new Map,rs=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(n,e){switch(n){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(e.pointerId)}}function al(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uu(e),e!==null&&Om(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function L1(n,e,t,i,r){switch(e){case"focusin":return ms=al(ms,n,e,t,i,r),!0;case"dragenter":return _s=al(_s,n,e,t,i,r),!0;case"mouseover":return gs=al(gs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return su.set(s,al(su.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ou.set(s,al(ou.get(s)||null,n,e,t,i,r)),!0}return!1}function oy(n){var e=io(n.target);if(e!==null){var t=Do(e);if(t!==null){if(e=t.tag,e===13){if(e=qx(t),e!==null){n.blockedOn=e,sy(n.priority,function(){iy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ap=i,t.target.dispatchEvent(i),ap=null}else return e=Uu(t),e!==null&&Om(e),n.blockedOn=t,!1;e.shift()}return!0}function dg(n,e,t){Wc(n)&&t.delete(e)}function D1(){dp=!1,ms!==null&&Wc(ms)&&(ms=null),_s!==null&&Wc(_s)&&(_s=null),gs!==null&&Wc(gs)&&(gs=null),su.forEach(dg),ou.forEach(dg)}function ll(n,e){n.blockedOn===e&&(n.blockedOn=null,dp||(dp=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,D1)))}function au(n){function e(r){return ll(r,n)}if(0<ju.length){ll(ju[0],n);for(var t=1;t<ju.length;t++){var i=ju[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ms!==null&&ll(ms,n),_s!==null&&ll(_s,n),gs!==null&&ll(gs,n),su.forEach(e),ou.forEach(e),t=0;t<rs.length;t++)i=rs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rs.length&&(t=rs[0],t.blockedOn===null);)oy(t),t.blockedOn===null&&rs.shift()}var Ea=qr.ReactCurrentBatchConfig,_f=!0;function N1(n,e,t,i){var r=vt,s=Ea.transition;Ea.transition=null;try{vt=1,Fm(n,e,t,i)}finally{vt=r,Ea.transition=s}}function U1(n,e,t,i){var r=vt,s=Ea.transition;Ea.transition=null;try{vt=4,Fm(n,e,t,i)}finally{vt=r,Ea.transition=s}}function Fm(n,e,t,i){if(_f){var r=hp(n,e,t,i);if(r===null)Vd(n,e,i,gf,t),fg(n,i);else if(L1(r,n,e,t,i))i.stopPropagation();else if(fg(n,i),e&4&&-1<P1.indexOf(n)){for(;r!==null;){var s=Uu(r);if(s!==null&&ny(s),s=hp(n,e,t,i),s===null&&Vd(n,e,i,gf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vd(n,e,i,null,t)}}var gf=null;function hp(n,e,t,i){if(gf=null,n=Nm(i),n=io(n),n!==null)if(e=Do(n),e===null)n=null;else if(t=e.tag,t===13){if(n=qx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gf=n,null}function ay(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case Um:return 1;case Qx:return 4;case pf:case M1:return 16;case Jx:return 536870912;default:return 16}default:return 16}}var os=null,km=null,Xc=null;function ly(){if(Xc)return Xc;var n,e=km,t=e.length,i,r="value"in os?os.value:os.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Xc=r.slice(n,1<i?1-i:void 0)}function Yc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qu(){return!0}function hg(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:hg,this.isPropagationStopped=hg,this}return Gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=Pi(Ja),Nu=Gt({},Ja,{view:0,detail:0}),I1=Pi(Nu),Ud,Id,ul,td=Gt({},Nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ul&&(ul&&n.type==="mousemove"?(Ud=n.screenX-ul.screenX,Id=n.screenY-ul.screenY):Id=Ud=0,ul=n),Ud)},movementY:function(n){return"movementY"in n?n.movementY:Id}}),pg=Pi(td),O1=Gt({},td,{dataTransfer:0}),F1=Pi(O1),k1=Gt({},Nu,{relatedTarget:0}),Od=Pi(k1),z1=Gt({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=Pi(z1),H1=Gt({},Ja,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),G1=Pi(H1),V1=Gt({},Ja,{data:0}),mg=Pi(V1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Y1[n])?!!e[n]:!1}function Bm(){return j1}var q1=Gt({},Nu,{key:function(n){if(n.key){var e=W1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Yc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(n){return n.type==="keypress"?Yc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$1=Pi(q1),K1=Gt({},td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=Pi(K1),Z1=Gt({},Nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),Q1=Pi(Z1),J1=Gt({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),eT=Pi(J1),tT=Gt({},td,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nT=Pi(tT),iT=[9,13,27,32],Hm=Hr&&"CompositionEvent"in window,Il=null;Hr&&"documentMode"in document&&(Il=document.documentMode);var rT=Hr&&"TextEvent"in window&&!Il,uy=Hr&&(!Hm||Il&&8<Il&&11>=Il),gg=" ",vg=!1;function cy(n,e){switch(n){case"keyup":return iT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sa=!1;function sT(n,e){switch(n){case"compositionend":return fy(e);case"keypress":return e.which!==32?null:(vg=!0,gg);case"textInput":return n=e.data,n===gg&&vg?null:n;default:return null}}function oT(n,e){if(sa)return n==="compositionend"||!Hm&&cy(n,e)?(n=ly(),Xc=km=os=null,sa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uy&&e.locale!=="ko"?null:e.data;default:return null}}var aT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!aT[n.type]:e==="textarea"}function dy(n,e,t,i){Vx(i),e=vf(e,"onChange"),0<e.length&&(t=new zm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ol=null,lu=null;function lT(n){Ey(n,0)}function nd(n){var e=la(n);if(Ox(e))return n}function uT(n,e){if(n==="change")return e}var hy=!1;if(Hr){var Fd;if(Hr){var kd="oninput"in document;if(!kd){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),kd=typeof yg.oninput=="function"}Fd=kd}else Fd=!1;hy=Fd&&(!document.documentMode||9<document.documentMode)}function Sg(){Ol&&(Ol.detachEvent("onpropertychange",py),lu=Ol=null)}function py(n){if(n.propertyName==="value"&&nd(lu)){var e=[];dy(e,lu,n,Nm(n)),jx(lT,e)}}function cT(n,e,t){n==="focusin"?(Sg(),Ol=e,lu=t,Ol.attachEvent("onpropertychange",py)):n==="focusout"&&Sg()}function fT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nd(lu)}function dT(n,e){if(n==="click")return nd(e)}function hT(n,e){if(n==="input"||n==="change")return nd(e)}function pT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var or=typeof Object.is=="function"?Object.is:pT;function uu(n,e){if(or(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$h.call(e,r)||!or(n[r],e[r]))return!1}return!0}function Mg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eg(n,e){var t=Mg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mg(t)}}function my(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?my(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _y(){for(var n=window,e=ff();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ff(n.document)}return e}function Gm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function mT(n){var e=_y(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&my(t.ownerDocument.documentElement,t)){if(i!==null&&Gm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Eg(t,s);var o=Eg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _T=Hr&&"documentMode"in document&&11>=document.documentMode,oa=null,pp=null,Fl=null,mp=!1;function Tg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mp||oa==null||oa!==ff(i)||(i=oa,"selectionStart"in i&&Gm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fl&&uu(Fl,i)||(Fl=i,i=vf(pp,"onSelect"),0<i.length&&(e=new zm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=oa)))}function $u(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var aa={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},zd={},gy={};Hr&&(gy=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function id(n){if(zd[n])return zd[n];if(!aa[n])return n;var e=aa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in gy)return zd[n]=e[t];return n}var vy=id("animationend"),xy=id("animationiteration"),yy=id("animationstart"),Sy=id("transitionend"),My=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Os(n,e){My.set(n,e),Lo(e,[n])}for(var Bd=0;Bd<wg.length;Bd++){var Hd=wg[Bd],gT=Hd.toLowerCase(),vT=Hd[0].toUpperCase()+Hd.slice(1);Os(gT,"on"+vT)}Os(vy,"onAnimationEnd");Os(xy,"onAnimationIteration");Os(yy,"onAnimationStart");Os("dblclick","onDoubleClick");Os("focusin","onFocus");Os("focusout","onBlur");Os(Sy,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);Lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function Ag(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,g1(i,e,void 0,n),n.currentTarget=null}function Ey(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,u),s=l}}}if(hf)throw n=cp,hf=!1,cp=null,n}function Rt(n,e){var t=e[yp];t===void 0&&(t=e[yp]=new Set);var i=n+"__bubble";t.has(i)||(Ty(e,n,2,!1),t.add(i))}function Gd(n,e,t){var i=0;e&&(i|=4),Ty(t,n,i,e)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function cu(n){if(!n[Ku]){n[Ku]=!0,Lx.forEach(function(t){t!=="selectionchange"&&(xT.has(t)||Gd(t,!1,n),Gd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ku]||(e[Ku]=!0,Gd("selectionchange",!1,e))}}function Ty(n,e,t,i){switch(ay(e)){case 1:var r=N1;break;case 4:r=U1;break;default:r=Fm}t=r.bind(null,e,t,n),r=void 0,!up||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Vd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=io(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jx(function(){var u=s,c=Nm(t),f=[];e:{var d=My.get(n);if(d!==void 0){var p=zm,g=n;switch(n){case"keypress":if(Yc(t)===0)break e;case"keydown":case"keyup":p=$1;break;case"focusin":g="focus",p=Od;break;case"focusout":g="blur",p=Od;break;case"beforeblur":case"afterblur":p=Od;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q1;break;case vy:case xy:case yy:p=B1;break;case Sy:p=eT;break;case"scroll":p=I1;break;case"wheel":p=nT;break;case"copy":case"cut":case"paste":p=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_g}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=ru(v,h),y!=null&&_.push(fu(v,y,x)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,t,c),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==ap&&(g=t.relatedTarget||t.fromElement)&&(io(g)||g[Gr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?io(g):null,g!==null&&(m=Do(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=pg,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=_g,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:la(p),x=g==null?d:la(g),d=new _(y,v+"leave",p,t,c),d.target=m,d.relatedTarget=x,y=null,io(c)===u&&(_=new _(h,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=Uo(x))v++;for(x=0,y=h;y;y=Uo(y))x++;for(;0<v-x;)_=Uo(_),v--;for(;0<x-v;)h=Uo(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Uo(_),h=Uo(h)}_=null}else _=null;p!==null&&Cg(f,d,p,_,!1),g!==null&&m!==null&&Cg(f,m,g,_,!0)}}e:{if(d=u?la(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=uT;else if(xg(d))if(hy)w=hT;else{w=fT;var T=cT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=dT);if(w&&(w=w(n,u))){dy(f,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&np(d,"number",d.value)}switch(T=u?la(u):window,n){case"focusin":(xg(T)||T.contentEditable==="true")&&(oa=T,pp=u,Fl=null);break;case"focusout":Fl=pp=oa=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,Tg(f,t,c);break;case"selectionchange":if(_T)break;case"keydown":case"keyup":Tg(f,t,c)}var M;if(Hm)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else sa?cy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(uy&&t.locale!=="ko"&&(sa||P!=="onCompositionStart"?P==="onCompositionEnd"&&sa&&(M=ly()):(os=c,km="value"in os?os.value:os.textContent,sa=!0)),T=vf(u,P),0<T.length&&(P=new mg(P,n,null,t,c),f.push({event:P,listeners:T}),M?P.data=M:(M=fy(t),M!==null&&(P.data=M)))),(M=rT?sT(n,t):oT(n,t))&&(u=vf(u,"onBeforeInput"),0<u.length&&(c=new mg("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}Ey(f,e)})}function fu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ru(n,t),s!=null&&i.unshift(fu(n,s,r)),s=ru(n,e),s!=null&&i.push(fu(n,s,r))),n=n.return}return i}function Uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ru(t,s),l!=null&&o.unshift(fu(t,l,a))):r||(l=ru(t,s),l!=null&&o.push(fu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var yT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function Rg(n){return(typeof n=="string"?n:""+n).replace(yT,`
`).replace(ST,"")}function Zu(n,e,t){if(e=Rg(e),Rg(n)!==e&&t)throw Error(re(425))}function xf(){}var _p=null,gp=null;function vp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,MT=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,ET=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(n){return bg.resolve(null).then(n).catch(TT)}:xp;function TT(n){setTimeout(function(){throw n})}function Wd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),au(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);au(e)}function vs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Pg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var el=Math.random().toString(36).slice(2),hr="__reactFiber$"+el,du="__reactProps$"+el,Gr="__reactContainer$"+el,yp="__reactEvents$"+el,wT="__reactListeners$"+el,AT="__reactHandles$"+el;function io(n){var e=n[hr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gr]||t[hr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Pg(n);n!==null;){if(t=n[hr])return t;n=Pg(n)}return e}n=t,t=n.parentNode}return null}function Uu(n){return n=n[hr]||n[Gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function la(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function rd(n){return n[du]||null}var Sp=[],ua=-1;function Fs(n){return{current:n}}function Pt(n){0>ua||(n.current=Sp[ua],Sp[ua]=null,ua--)}function At(n,e){ua++,Sp[ua]=n.current,n.current=e}var Ps={},Dn=Fs(Ps),Jn=Fs(!1),So=Ps;function Ia(n,e){var t=n.type.contextTypes;if(!t)return Ps;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function yf(){Pt(Jn),Pt(Dn)}function Lg(n,e,t){if(Dn.current!==Ps)throw Error(re(168));At(Dn,e),At(Jn,t)}function wy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,c1(n)||"Unknown",r));return Gt({},t,i)}function Sf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ps,So=Dn.current,At(Dn,n),At(Jn,Jn.current),!0}function Dg(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=wy(n,e,So),i.__reactInternalMemoizedMergedChildContext=n,Pt(Jn),Pt(Dn),At(Dn,n)):Pt(Jn),At(Jn,t)}var Pr=null,sd=!1,Xd=!1;function Ay(n){Pr===null?Pr=[n]:Pr.push(n)}function CT(n){sd=!0,Ay(n)}function ks(){if(!Xd&&Pr!==null){Xd=!0;var n=0,e=vt;try{var t=Pr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pr=null,sd=!1}catch(r){throw Pr!==null&&(Pr=Pr.slice(n+1)),Zx(Um,ks),r}finally{vt=e,Xd=!1}}return null}var ca=[],fa=0,Mf=null,Ef=0,Ui=[],Ii=0,Mo=null,Ur=1,Ir="";function qs(n,e){ca[fa++]=Ef,ca[fa++]=Mf,Mf=n,Ef=e}function Cy(n,e,t){Ui[Ii++]=Ur,Ui[Ii++]=Ir,Ui[Ii++]=Mo,Mo=n;var i=Ur;n=Ir;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ur=1<<32-rr(e)+r|t<<r|i,Ir=s+n}else Ur=1<<s|t<<r|i,Ir=n}function Vm(n){n.return!==null&&(qs(n,1),Cy(n,1,0))}function Wm(n){for(;n===Mf;)Mf=ca[--fa],ca[fa]=null,Ef=ca[--fa],ca[fa]=null;for(;n===Mo;)Mo=Ui[--Ii],Ui[Ii]=null,Ir=Ui[--Ii],Ui[Ii]=null,Ur=Ui[--Ii],Ui[Ii]=null}var Ei=null,yi=null,Nt=!1,er=null;function Ry(n,e){var t=Bi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ng(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ei=n,yi=vs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ei=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mo!==null?{id:Ur,overflow:Ir}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ei=n,yi=null,!0):!1;default:return!1}}function Mp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ep(n){if(Nt){var e=yi;if(e){var t=e;if(!Ng(n,e)){if(Mp(n))throw Error(re(418));e=vs(t.nextSibling);var i=Ei;e&&Ng(n,e)?Ry(i,t):(n.flags=n.flags&-4097|2,Nt=!1,Ei=n)}}else{if(Mp(n))throw Error(re(418));n.flags=n.flags&-4097|2,Nt=!1,Ei=n}}}function Ug(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ei=n}function Qu(n){if(n!==Ei)return!1;if(!Nt)return Ug(n),Nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vp(n.type,n.memoizedProps)),e&&(e=yi)){if(Mp(n))throw by(),Error(re(418));for(;e;)Ry(n,e),e=vs(e.nextSibling)}if(Ug(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=vs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Ei?vs(n.stateNode.nextSibling):null;return!0}function by(){for(var n=yi;n;)n=vs(n.nextSibling)}function Oa(){yi=Ei=null,Nt=!1}function Xm(n){er===null?er=[n]:er.push(n)}var RT=qr.ReactCurrentBatchConfig;function cl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Ju(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ig(n){var e=n._init;return e(n._payload)}function Py(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ms(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=Qd(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var w=x.type;return w===ra?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ns&&Ig(w)===v.type)?(y=r(v,x.props),y.ref=cl(h,v,x),y.return=h,y):(y=Jc(x.type,x.key,x.props,null,h.mode,y),y.ref=cl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Jd(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,w){return v===null||v.tag!==7?(v=uo(x,h.mode,y,w),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qd(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gu:return x=Jc(v.type,v.key,v.props,null,h.mode,x),x.ref=cl(h,null,v),x.return=h,x;case ia:return v=Jd(v,h.mode,x),v.return=h,v;case ns:var y=v._init;return f(h,y(v._payload),x)}if(El(v)||sl(v))return v=uo(v,h.mode,x,null),v.return=h,v;Ju(h,v)}return null}function d(h,v,x,y){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:return x.key===w?l(h,v,x,y):null;case ia:return x.key===w?u(h,v,x,y):null;case ns:return w=x._init,d(h,v,w(x._payload),y)}if(El(x)||sl(x))return w!==null?null:c(h,v,x,y,null);Ju(h,x)}return null}function p(h,v,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gu:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,w);case ia:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,w);case ns:var T=y._init;return p(h,v,x,T(y._payload),w)}if(El(y)||sl(y))return h=h.get(x)||null,c(v,h,y,w,null);Ju(v,y)}return null}function g(h,v,x,y){for(var w=null,T=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=d(h,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(h,M),v=s(E,v,P),T===null?w=E:T.sibling=E,T=E,M=S}if(P===x.length)return t(h,M),Nt&&qs(h,P),w;if(M===null){for(;P<x.length;P++)M=f(h,x[P],y),M!==null&&(v=s(M,v,P),T===null?w=M:T.sibling=M,T=M);return Nt&&qs(h,P),w}for(M=i(h,M);P<x.length;P++)S=p(M,h,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(k){return e(h,k)}),Nt&&qs(h,P),w}function _(h,v,x,y){var w=sl(x);if(typeof w!="function")throw Error(re(150));if(x=w.call(x),x==null)throw Error(re(151));for(var T=w=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var k=d(h,M,E.value,y);if(k===null){M===null&&(M=S);break}n&&M&&k.alternate===null&&e(h,M),v=s(k,v,P),T===null?w=k:T.sibling=k,T=k,M=S}if(E.done)return t(h,M),Nt&&qs(h,P),w;if(M===null){for(;!E.done;P++,E=x.next())E=f(h,E.value,y),E!==null&&(v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return Nt&&qs(h,P),w}for(M=i(h,M);!E.done;P++,E=x.next())E=p(M,h,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return n&&M.forEach(function(D){return e(h,D)}),Nt&&qs(h,P),w}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ra&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:e:{for(var w=x.key,T=v;T!==null;){if(T.key===w){if(w=x.type,w===ra){if(T.tag===7){t(h,T.sibling),v=r(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ns&&Ig(w)===T.type){t(h,T.sibling),v=r(T,x.props),v.ref=cl(h,T,x),v.return=h,h=v;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===ra?(v=uo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=Jc(x.type,x.key,x.props,null,h.mode,y),y.ref=cl(h,v,x),y.return=h,h=y)}return o(h);case ia:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Jd(x,h.mode,y),v.return=h,h=v}return o(h);case ns:return T=x._init,m(h,v,T(x._payload),y)}if(El(x))return g(h,v,x,y);if(sl(x))return _(h,v,x,y);Ju(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Qd(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Fa=Py(!0),Ly=Py(!1),Tf=Fs(null),wf=null,da=null,Ym=null;function jm(){Ym=da=wf=null}function qm(n){var e=Tf.current;Pt(Tf),n._currentValue=e}function Tp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ta(n,e){wf=n,Ym=da=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Xi(n){var e=n._currentValue;if(Ym!==n)if(n={context:n,memoizedValue:e,next:null},da===null){if(wf===null)throw Error(re(308));da=n,wf.dependencies={lanes:0,firstContext:n}}else da=da.next=n;return e}var ro=null;function $m(n){ro===null?ro=[n]:ro.push(n)}function Dy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,$m(e)):(t.next=r.next,r.next=t),e.interleaved=t,Vr(n,i)}function Vr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var is=!1;function Km(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ny(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vr(n,t)}return r=i.interleaved,r===null?(e.next=e,$m(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vr(n,t)}function jc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Im(n,t)}}function Og(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Af(n,e,t,i){var r=n.updateQueue;is=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(d=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=Gt({},f,d);break e;case 2:is=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);To|=o,n.lanes=o,n.memoizedState=f}}function Fg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Iu={},vr=Fs(Iu),hu=Fs(Iu),pu=Fs(Iu);function so(n){if(n===Iu)throw Error(re(174));return n}function Zm(n,e){switch(At(pu,e),At(hu,n),At(vr,Iu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rp(e,n)}Pt(vr),At(vr,e)}function ka(){Pt(vr),Pt(hu),Pt(pu)}function Uy(n){so(pu.current);var e=so(vr.current),t=rp(e,n.type);e!==t&&(At(hu,n),At(vr,t))}function Qm(n){hu.current===n&&(Pt(vr),Pt(hu))}var kt=Fs(0);function Cf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function Jm(){for(var n=0;n<Yd.length;n++)Yd[n]._workInProgressVersionPrimary=null;Yd.length=0}var qc=qr.ReactCurrentDispatcher,jd=qr.ReactCurrentBatchConfig,Eo=0,Ht=null,rn=null,dn=null,Rf=!1,kl=!1,mu=0,bT=0;function Mn(){throw Error(re(321))}function e_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!or(n[t],e[t]))return!1;return!0}function t_(n,e,t,i,r,s){if(Eo=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qc.current=n===null||n.memoizedState===null?NT:UT,n=t(i,r),kl){s=0;do{if(kl=!1,mu=0,25<=s)throw Error(re(301));s+=1,dn=rn=null,e.updateQueue=null,qc.current=IT,n=t(i,r)}while(kl)}if(qc.current=bf,e=rn!==null&&rn.next!==null,Eo=0,dn=rn=Ht=null,Rf=!1,e)throw Error(re(300));return n}function n_(){var n=mu!==0;return mu=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Ht.memoizedState=dn=n:dn=dn.next=n,dn}function Yi(){if(rn===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=dn===null?Ht.memoizedState:dn.next;if(e!==null)dn=e,rn=n;else{if(n===null)throw Error(re(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},dn===null?Ht.memoizedState=dn=n:dn=dn.next=n}return dn}function _u(n,e){return typeof e=="function"?e(n):e}function qd(n){var e=Yi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Eo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ht.lanes|=c,To|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,or(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,To|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function $d(n){var e=Yi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);or(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Iy(){}function Oy(n,e){var t=Ht,i=Yi(),r=e(),s=!or(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,i_(zy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,gu(9,ky.bind(null,t,i,r,e),void 0,null),hn===null)throw Error(re(349));Eo&30||Fy(t,e,r)}return r}function Fy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ky(n,e,t,i){e.value=t,e.getSnapshot=i,By(e)&&Hy(n)}function zy(n,e,t){return t(function(){By(e)&&Hy(n)})}function By(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!or(n,t)}catch{return!0}}function Hy(n){var e=Vr(n,1);e!==null&&sr(e,n,1,-1)}function kg(n){var e=ur();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_u,lastRenderedState:n},e.queue=n,n=n.dispatch=DT.bind(null,Ht,n),[e.memoizedState,n]}function gu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gy(){return Yi().memoizedState}function $c(n,e,t,i){var r=ur();Ht.flags|=n,r.memoizedState=gu(1|e,t,void 0,i===void 0?null:i)}function od(n,e,t,i){var r=Yi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&e_(i,o.deps)){r.memoizedState=gu(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=gu(1|e,t,s,i)}function zg(n,e){return $c(8390656,8,n,e)}function i_(n,e){return od(2048,8,n,e)}function Vy(n,e){return od(4,2,n,e)}function Wy(n,e){return od(4,4,n,e)}function Xy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Yy(n,e,t){return t=t!=null?t.concat([n]):null,od(4,4,Xy.bind(null,e,n),t)}function r_(){}function jy(n,e){var t=Yi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&e_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qy(n,e){var t=Yi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&e_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function $y(n,e,t){return Eo&21?(or(t,e)||(t=ey(),Ht.lanes|=t,To|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function PT(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=jd.transition;jd.transition={};try{n(!1),e()}finally{vt=t,jd.transition=i}}function Ky(){return Yi().memoizedState}function LT(n,e,t){var i=Ss(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Zy(n))Qy(e,t);else if(t=Dy(n,e,t,i),t!==null){var r=Wn();sr(t,n,i,r),Jy(t,e,i)}}function DT(n,e,t){var i=Ss(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zy(n))Qy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,or(a,o)){var l=e.interleaved;l===null?(r.next=r,$m(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Dy(n,e,r,i),t!==null&&(r=Wn(),sr(t,n,i,r),Jy(t,e,i))}}function Zy(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function Qy(n,e){kl=Rf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Jy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Im(n,t)}}var bf={readContext:Xi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},NT={readContext:Xi,useCallback:function(n,e){return ur().memoizedState=[n,e===void 0?null:e],n},useContext:Xi,useEffect:zg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,$c(4194308,4,Xy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return $c(4194308,4,n,e)},useInsertionEffect:function(n,e){return $c(4,2,n,e)},useMemo:function(n,e){var t=ur();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ur();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=LT.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=ur();return n={current:n},e.memoizedState=n},useState:kg,useDebugValue:r_,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=kg(!1),e=n[0];return n=PT.bind(null,n[1]),ur().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=ur();if(Nt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),hn===null)throw Error(re(349));Eo&30||Fy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,zg(zy.bind(null,i,s,n),[n]),i.flags|=2048,gu(9,ky.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ur(),e=hn.identifierPrefix;if(Nt){var t=Ir,i=Ur;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=mu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=bT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},UT={readContext:Xi,useCallback:jy,useContext:Xi,useEffect:i_,useImperativeHandle:Yy,useInsertionEffect:Vy,useLayoutEffect:Wy,useMemo:qy,useReducer:qd,useRef:Gy,useState:function(){return qd(_u)},useDebugValue:r_,useDeferredValue:function(n){var e=Yi();return $y(e,rn.memoizedState,n)},useTransition:function(){var n=qd(_u)[0],e=Yi().memoizedState;return[n,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1},IT={readContext:Xi,useCallback:jy,useContext:Xi,useEffect:i_,useImperativeHandle:Yy,useInsertionEffect:Vy,useLayoutEffect:Wy,useMemo:qy,useReducer:$d,useRef:Gy,useState:function(){return $d(_u)},useDebugValue:r_,useDeferredValue:function(n){var e=Yi();return rn===null?e.memoizedState=n:$y(e,rn.memoizedState,n)},useTransition:function(){var n=$d(_u)[0],e=Yi().memoizedState;return[n,e]},useMutableSource:Iy,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1};function Qi(n,e){if(n&&n.defaultProps){e=Gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ad={isMounted:function(n){return(n=n._reactInternals)?Do(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ss(n),s=zr(i,r);s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(sr(e,n,r,i),jc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ss(n),s=zr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(sr(e,n,r,i),jc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Ss(n),r=zr(t,i);r.tag=2,e!=null&&(r.callback=e),e=xs(n,r,i),e!==null&&(sr(e,n,i,t),jc(e,n,i))}};function Bg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uu(t,i)||!uu(r,s):!0}function eS(n,e,t){var i=!1,r=Ps,s=e.contextType;return typeof s=="object"&&s!==null?s=Xi(s):(r=ei(e)?So:Dn.current,i=e.contextTypes,s=(i=i!=null)?Ia(n,r):Ps),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ad,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Hg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ad.enqueueReplaceState(e,e.state,null)}function Ap(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Km(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xi(s):(s=ei(e)?So:Dn.current,r.context=Ia(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ad.enqueueReplaceState(r,r.state,null),Af(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function za(n,e){try{var t="",i=e;do t+=u1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Kd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Cp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var OT=typeof WeakMap=="function"?WeakMap:Map;function tS(n,e,t){t=zr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Lf||(Lf=!0,Fp=i),Cp(n,e)},t}function nS(n,e,t){t=zr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Cp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Cp(n,e),typeof i!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Gg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new OT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=KT.bind(null,n,e,t),e.then(n,n))}function Vg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zr(-1,1),e.tag=2,xs(t,e,1))),t.lanes|=1),n)}var FT=qr.ReactCurrentOwner,Qn=!1;function kn(n,e,t,i){e.child=n===null?Ly(e,null,t,i):Fa(e,n.child,t,i)}function Xg(n,e,t,i,r){t=t.render;var s=e.ref;return Ta(e,r),i=t_(n,e,t,i,s,r),t=n_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Nt&&t&&Vm(e),e.flags|=1,kn(n,e,i,r),e.child)}function Yg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!d_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,iS(n,e,s,i,r)):(n=Jc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:uu,t(o,i)&&n.ref===e.ref)return Wr(n,e,r)}return e.flags|=1,n=Ms(s,i),n.ref=e.ref,n.return=e,e.child=n}function iS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(uu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Wr(n,e,r)}return Rp(n,e,t,i,r)}function rS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(pa,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,At(pa,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,At(pa,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,At(pa,hi),hi|=i;return kn(n,e,r,t),e.child}function sS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rp(n,e,t,i,r){var s=ei(t)?So:Dn.current;return s=Ia(e,s),Ta(e,r),t=t_(n,e,t,i,s,r),i=n_(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Nt&&i&&Vm(e),e.flags|=1,kn(n,e,t,r),e.child)}function jg(n,e,t,i,r){if(ei(t)){var s=!0;Sf(e)}else s=!1;if(Ta(e,r),e.stateNode===null)Kc(n,e),eS(e,t,i),Ap(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Xi(u):(u=ei(t)?So:Dn.current,u=Ia(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hg(e,o,i,u),is=!1;var d=e.memoizedState;o.state=d,Af(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Jn.current||is?(typeof c=="function"&&(wp(e,t,c,i),l=e.memoizedState),(a=is||Bg(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ny(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xi(l):(l=ei(t)?So:Dn.current,l=Ia(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Hg(e,o,i,l),is=!1,d=e.memoizedState,o.state=d,Af(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||Jn.current||is?(typeof p=="function"&&(wp(e,t,p,i),g=e.memoizedState),(u=is||Bg(e,t,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return bp(n,e,t,i,s,r)}function bp(n,e,t,i,r,s){sS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dg(e,t,!1),Wr(n,e,s);i=e.stateNode,FT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Fa(e,n.child,null,s),e.child=Fa(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&Dg(e,t,!0),e.child}function oS(n){var e=n.stateNode;e.pendingContext?Lg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Lg(n,e.context,!1),Zm(n,e.containerInfo)}function qg(n,e,t,i,r){return Oa(),Xm(r),e.flags|=256,kn(n,e,t,i),e.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function Lp(n){return{baseLanes:n,cachePool:null,transitions:null}}function aS(n,e,t){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),At(kt,r&1),n===null)return Ep(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cd(o,i,0,null),n=uo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lp(t),e.memoizedState=Pp,n):s_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ms(a,s):(s=uo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pp,i}return s=n.child,n=s.sibling,i=Ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function s_(n,e){return e=cd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ec(n,e,t,i){return i!==null&&Xm(i),Fa(e,n.child,null,t),n=s_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function kT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Kd(Error(re(422))),ec(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cd({mode:"visible",children:i.children},r,0,null),s=uo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fa(e,n.child,null,o),e.child.memoizedState=Lp(o),e.memoizedState=Pp,s);if(!(e.mode&1))return ec(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Kd(s,i,void 0),ec(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vr(n,r),sr(i,n,r,-1))}return f_(),i=Kd(Error(re(421))),ec(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=ZT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=vs(r.nextSibling),Ei=e,Nt=!0,er=null,n!==null&&(Ui[Ii++]=Ur,Ui[Ii++]=Ir,Ui[Ii++]=Mo,Ur=n.id,Ir=n.overflow,Mo=e),e=s_(e,i.children),e.flags|=4096,e)}function $g(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Tp(n.return,e,t)}function Zd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function lS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$g(n,t,e);else if(n.tag===19)$g(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(At(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Cf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Zd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Cf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Zd(e,!0,t,null,s);break;case"together":Zd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),To|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Ms(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ms(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zT(n,e,t){switch(e.tag){case 3:oS(e),Oa();break;case 5:Uy(e);break;case 1:ei(e.type)&&Sf(e);break;case 4:Zm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;At(Tf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(At(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?aS(n,e,t):(At(kt,kt.current&1),n=Wr(n,e,t),n!==null?n.sibling:null);At(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return lS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),At(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,rS(n,e,t)}return Wr(n,e,t)}var uS,Dp,cS,fS;uS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Dp=function(){};cS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,so(vr.current);var s=null;switch(t){case"input":r=ep(n,r),i=ep(n,i),s=[];break;case"select":r=Gt({},r,{value:void 0}),i=Gt({},i,{value:void 0}),s=[];break;case"textarea":r=ip(n,r),i=ip(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=xf)}sp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(nu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(nu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fS=function(n,e,t,i){t!==i&&(e.flags|=4)};function fl(n,e){if(!Nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function BT(n,e,t){var i=e.pendingProps;switch(Wm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return ei(e.type)&&yf(),En(e),null;case 3:return i=e.stateNode,ka(),Pt(Jn),Pt(Dn),Jm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,er!==null&&(Bp(er),er=null))),Dp(n,e),En(e),null;case 5:Qm(e);var r=so(pu.current);if(t=e.type,n!==null&&e.stateNode!=null)cS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return En(e),null}if(n=so(vr.current),Qu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hr]=e,i[du]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<wl.length;r++)Rt(wl[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":rg(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":og(i,s),Rt("invalid",i)}sp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zu(i.textContent,a,n),r=["children",""+a]):nu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":Vu(i),sg(i,s,!0);break;case"textarea":Vu(i),ag(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hr]=e,n[du]=i,uS(n,e,!1,!1),e.stateNode=n;e:{switch(o=op(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<wl.length;r++)Rt(wl[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":rg(n,i),r=ep(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Gt({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":og(n,i),r=ip(n,i),Rt("invalid",n);break;default:r=i}sp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&iu(n,l):typeof l=="number"&&iu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&bm(n,s,l,o))}switch(t){case"input":Vu(n),sg(n,i,!1);break;case"textarea":Vu(n),ag(n);break;case"option":i.value!=null&&n.setAttribute("value",""+bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ya(n,!!i.multiple,s,!1):i.defaultValue!=null&&ya(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=xf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)fS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=so(pu.current),so(vr.current),Qu(e)){if(i=e.stateNode,t=e.memoizedProps,i[hr]=e,(s=i.nodeValue!==t)&&(n=Ei,n!==null))switch(n.tag){case 3:Zu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hr]=e,e.stateNode=i}return En(e),null;case 13:if(Pt(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Nt&&yi!==null&&e.mode&1&&!(e.flags&128))by(),Oa(),e.flags|=98560,s=!1;else if(s=Qu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[hr]=e}else Oa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else er!==null&&(Bp(er),er=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?on===0&&(on=3):f_())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return ka(),Dp(n,e),n===null&&cu(e.stateNode.containerInfo),En(e),null;case 10:return qm(e.type._context),En(e),null;case 17:return ei(e.type)&&yf(),En(e),null;case 19:if(Pt(kt),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fl(s,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Cf(n),o!==null){for(e.flags|=128,fl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return At(kt,kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&jt()>Ba&&(e.flags|=128,i=!0,fl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Cf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),fl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Nt)return En(e),null}else 2*jt()-s.renderingStartTime>Ba&&t!==1073741824&&(e.flags|=128,i=!0,fl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,t=kt.current,At(kt,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return c_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function HT(n,e){switch(Wm(e),e.tag){case 1:return ei(e.type)&&yf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ka(),Pt(Jn),Pt(Dn),Jm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Qm(e),null;case 13:if(Pt(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Oa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Pt(kt),null;case 4:return ka(),null;case 10:return qm(e.type._context),null;case 22:case 23:return c_(),null;case 24:return null;default:return null}}var tc=!1,Rn=!1,GT=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ha(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Wt(n,e,i)}else t.current=null}function Np(n,e,t){try{t()}catch(i){Wt(n,e,i)}}var Kg=!1;function VT(n,e){if(_p=_f,n=_y(),Gm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gp={focusedElem:n,selectionRange:t},_f=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Qi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Wt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return g=Kg,Kg=!1,g}function zl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Np(e,t,s)}r=r.next}while(r!==i)}}function ld(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Up(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function dS(n){var e=n.alternate;e!==null&&(n.alternate=null,dS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hr],delete e[du],delete e[yp],delete e[wT],delete e[AT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hS(n){return n.tag===5||n.tag===3||n.tag===4}function Zg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ip(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=xf));else if(i!==4&&(n=n.child,n!==null))for(Ip(n,e,t),n=n.sibling;n!==null;)Ip(n,e,t),n=n.sibling}function Op(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Op(n,e,t),n=n.sibling;n!==null;)Op(n,e,t),n=n.sibling}var mn=null,Ji=!1;function $r(n,e,t){for(t=t.child;t!==null;)pS(n,e,t),t=t.sibling}function pS(n,e,t){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(ed,t)}catch{}switch(t.tag){case 5:Rn||ha(t,e);case 6:var i=mn,r=Ji;mn=null,$r(n,e,t),mn=i,Ji=r,mn!==null&&(Ji?(n=mn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mn.removeChild(t.stateNode));break;case 18:mn!==null&&(Ji?(n=mn,t=t.stateNode,n.nodeType===8?Wd(n.parentNode,t):n.nodeType===1&&Wd(n,t),au(n)):Wd(mn,t.stateNode));break;case 4:i=mn,r=Ji,mn=t.stateNode.containerInfo,Ji=!0,$r(n,e,t),mn=i,Ji=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(t,e,o),r=r.next}while(r!==i)}$r(n,e,t);break;case 1:if(!Rn&&(ha(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Wt(t,e,a)}$r(n,e,t);break;case 21:$r(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,$r(n,e,t),Rn=i):$r(n,e,t);break;default:$r(n,e,t)}}function Qg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new GT),e.forEach(function(i){var r=QT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,Ji=!1;break e;case 3:mn=a.stateNode.containerInfo,Ji=!0;break e;case 4:mn=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(mn===null)throw Error(re(160));pS(s,o,r),mn=null,Ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mS(e,n),e=e.sibling}function mS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ji(e,n),lr(n),i&4){try{zl(3,n,n.return),ld(3,n)}catch(_){Wt(n,n.return,_)}try{zl(5,n,n.return)}catch(_){Wt(n,n.return,_)}}break;case 1:ji(e,n),lr(n),i&512&&t!==null&&ha(t,t.return);break;case 5:if(ji(e,n),lr(n),i&512&&t!==null&&ha(t,t.return),n.flags&32){var r=n.stateNode;try{iu(r,"")}catch(_){Wt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fx(r,s),op(a,o);var u=op(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Gx(r,f):c==="dangerouslySetInnerHTML"?Bx(r,f):c==="children"?iu(r,f):bm(r,c,f,u)}switch(a){case"input":tp(r,s);break;case"textarea":kx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ya(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ya(r,!!s.multiple,s.defaultValue,!0):ya(r,!!s.multiple,s.multiple?[]:"",!1))}r[du]=s}catch(_){Wt(n,n.return,_)}}break;case 6:if(ji(e,n),lr(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Wt(n,n.return,_)}}break;case 3:if(ji(e,n),lr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{au(e.containerInfo)}catch(_){Wt(n,n.return,_)}break;case 4:ji(e,n),lr(n);break;case 13:ji(e,n),lr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(l_=jt())),i&4&&Qg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,ji(e,n),Rn=u):ji(e,n),lr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(f=Se=c;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:zl(4,d,d.return);break;case 1:ha(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Wt(i,t,_)}}break;case 5:ha(d,d.return);break;case 22:if(d.memoizedState!==null){e0(f);continue}}p!==null?(p.return=d,Se=p):e0(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hx("display",o))}catch(_){Wt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Wt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ji(e,n),lr(n),i&4&&Qg(n);break;case 21:break;default:ji(e,n),lr(n)}}function lr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(hS(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(iu(r,""),i.flags&=-33);var s=Zg(n);Op(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zg(n);Ip(n,a,o);break;default:throw Error(re(161))}}catch(l){Wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function WT(n,e,t){Se=n,_S(n)}function _S(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=tc;var u=Rn;if(tc=o,(Rn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?t0(r):l!==null?(l.return=o,Se=l):t0(r);for(;s!==null;)Se=s,_S(s),s=s.sibling;Se=r,tc=a,Rn=u}Jg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Jg(n)}}function Jg(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||ld(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Fg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&au(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Rn||e.flags&512&&Up(e)}catch(d){Wt(e,e.return,d)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function e0(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function t0(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ld(4,e)}catch(l){Wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Wt(e,r,l)}}var s=e.return;try{Up(e)}catch(l){Wt(e,s,l)}break;case 5:var o=e.return;try{Up(e)}catch(l){Wt(e,o,l)}}}catch(l){Wt(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var XT=Math.ceil,Pf=qr.ReactCurrentDispatcher,o_=qr.ReactCurrentOwner,Vi=qr.ReactCurrentBatchConfig,ft=0,hn=null,Jt=null,vn=0,hi=0,pa=Fs(0),on=0,vu=null,To=0,ud=0,a_=0,Bl=null,Kn=null,l_=0,Ba=1/0,Rr=null,Lf=!1,Fp=null,ys=null,nc=!1,as=null,Df=0,Hl=0,kp=null,Zc=-1,Qc=0;function Wn(){return ft&6?jt():Zc!==-1?Zc:Zc=jt()}function Ss(n){return n.mode&1?ft&2&&vn!==0?vn&-vn:RT.transition!==null?(Qc===0&&(Qc=ey()),Qc):(n=vt,n!==0||(n=window.event,n=n===void 0?16:ay(n.type)),n):1}function sr(n,e,t,i){if(50<Hl)throw Hl=0,kp=null,Error(re(185));Du(n,t,i),(!(ft&2)||n!==hn)&&(n===hn&&(!(ft&2)&&(ud|=t),on===4&&ss(n,vn)),ti(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ba=jt()+500,sd&&ks()))}function ti(n,e){var t=n.callbackNode;R1(n,e);var i=mf(n,n===hn?vn:0);if(i===0)t!==null&&cg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&cg(t),e===1)n.tag===0?CT(n0.bind(null,n)):Ay(n0.bind(null,n)),ET(function(){!(ft&6)&&ks()}),t=null;else{switch(ty(i)){case 1:t=Um;break;case 4:t=Qx;break;case 16:t=pf;break;case 536870912:t=Jx;break;default:t=pf}t=TS(t,gS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function gS(n,e){if(Zc=-1,Qc=0,ft&6)throw Error(re(327));var t=n.callbackNode;if(wa()&&n.callbackNode!==t)return null;var i=mf(n,n===hn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Nf(n,i);else{e=i;var r=ft;ft|=2;var s=xS();(hn!==n||vn!==e)&&(Rr=null,Ba=jt()+500,lo(n,e));do try{qT();break}catch(a){vS(n,a)}while(!0);jm(),Pf.current=s,ft=r,Jt!==null?e=0:(hn=null,vn=0,e=on)}if(e!==0){if(e===2&&(r=fp(n),r!==0&&(i=r,e=zp(n,r))),e===1)throw t=vu,lo(n,0),ss(n,i),ti(n,jt()),t;if(e===6)ss(n,i);else{if(r=n.current.alternate,!(i&30)&&!YT(r)&&(e=Nf(n,i),e===2&&(s=fp(n),s!==0&&(i=s,e=zp(n,s))),e===1))throw t=vu,lo(n,0),ss(n,i),ti(n,jt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:$s(n,Kn,Rr);break;case 3:if(ss(n,i),(i&130023424)===i&&(e=l_+500-jt(),10<e)){if(mf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=xp($s.bind(null,n,Kn,Rr),e);break}$s(n,Kn,Rr);break;case 4:if(ss(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XT(i/1960))-i,10<i){n.timeoutHandle=xp($s.bind(null,n,Kn,Rr),i);break}$s(n,Kn,Rr);break;case 5:$s(n,Kn,Rr);break;default:throw Error(re(329))}}}return ti(n,jt()),n.callbackNode===t?gS.bind(null,n):null}function zp(n,e){var t=Bl;return n.current.memoizedState.isDehydrated&&(lo(n,e).flags|=256),n=Nf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&Bp(e)),n}function Bp(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function YT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!or(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ss(n,e){for(e&=~a_,e&=~ud,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function n0(n){if(ft&6)throw Error(re(327));wa();var e=mf(n,0);if(!(e&1))return ti(n,jt()),null;var t=Nf(n,e);if(n.tag!==0&&t===2){var i=fp(n);i!==0&&(e=i,t=zp(n,i))}if(t===1)throw t=vu,lo(n,0),ss(n,e),ti(n,jt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,$s(n,Kn,Rr),ti(n,jt()),null}function u_(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ba=jt()+500,sd&&ks())}}function wo(n){as!==null&&as.tag===0&&!(ft&6)&&wa();var e=ft;ft|=1;var t=Vi.transition,i=vt;try{if(Vi.transition=null,vt=1,n)return n()}finally{vt=i,Vi.transition=t,ft=e,!(ft&6)&&ks()}}function c_(){hi=pa.current,Pt(pa)}function lo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,MT(t)),Jt!==null)for(t=Jt.return;t!==null;){var i=t;switch(Wm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yf();break;case 3:ka(),Pt(Jn),Pt(Dn),Jm();break;case 5:Qm(i);break;case 4:ka();break;case 13:Pt(kt);break;case 19:Pt(kt);break;case 10:qm(i.type._context);break;case 22:case 23:c_()}t=t.return}if(hn=n,Jt=n=Ms(n.current,null),vn=hi=e,on=0,vu=null,a_=ud=To=0,Kn=Bl=null,ro!==null){for(e=0;e<ro.length;e++)if(t=ro[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ro=null}return n}function vS(n,e){do{var t=Jt;try{if(jm(),qc.current=bf,Rf){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rf=!1}if(Eo=0,dn=rn=Ht=null,kl=!1,mu=0,o_.current=null,t===null||t.return===null){on=1,vu=e,Jt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Vg(o);if(p!==null){p.flags&=-257,Wg(p,o,a,s,e),p.mode&1&&Gg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Gg(s,u,e),f_();break e}l=Error(re(426))}}else if(Nt&&a.mode&1){var m=Vg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wg(m,o,a,s,e),Xm(za(l,a));break e}}s=l=za(l,a),on!==4&&(on=2),Bl===null?Bl=[s]:Bl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=tS(s,l,e);Og(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ys===null||!ys.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=nS(s,a,e);Og(s,y);break e}}s=s.return}while(s!==null)}SS(t)}catch(w){e=w,Jt===t&&t!==null&&(Jt=t=t.return);continue}break}while(!0)}function xS(){var n=Pf.current;return Pf.current=bf,n===null?bf:n}function f_(){(on===0||on===3||on===2)&&(on=4),hn===null||!(To&268435455)&&!(ud&268435455)||ss(hn,vn)}function Nf(n,e){var t=ft;ft|=2;var i=xS();(hn!==n||vn!==e)&&(Rr=null,lo(n,e));do try{jT();break}catch(r){vS(n,r)}while(!0);if(jm(),ft=t,Pf.current=i,Jt!==null)throw Error(re(261));return hn=null,vn=0,on}function jT(){for(;Jt!==null;)yS(Jt)}function qT(){for(;Jt!==null&&!x1();)yS(Jt)}function yS(n){var e=ES(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?SS(n):Jt=e,o_.current=null}function SS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=HT(t,e),t!==null){t.flags&=32767,Jt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Jt=null;return}}else if(t=BT(t,e,hi),t!==null){Jt=t;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=n}while(e!==null);on===0&&(on=5)}function $s(n,e,t){var i=vt,r=Vi.transition;try{Vi.transition=null,vt=1,$T(n,e,t,i)}finally{Vi.transition=r,vt=i}return null}function $T(n,e,t,i){do wa();while(as!==null);if(ft&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(b1(n,s),n===hn&&(Jt=hn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nc||(nc=!0,TS(pf,function(){return wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var o=vt;vt=1;var a=ft;ft|=4,o_.current=null,VT(n,t),mS(t,n),mT(gp),_f=!!_p,gp=_p=null,n.current=t,WT(t),y1(),ft=a,vt=o,Vi.transition=s}else n.current=t;if(nc&&(nc=!1,as=n,Df=r),s=n.pendingLanes,s===0&&(ys=null),E1(t.stateNode),ti(n,jt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lf)throw Lf=!1,n=Fp,Fp=null,n;return Df&1&&n.tag!==0&&wa(),s=n.pendingLanes,s&1?n===kp?Hl++:(Hl=0,kp=n):Hl=0,ks(),null}function wa(){if(as!==null){var n=ty(Df),e=Vi.transition,t=vt;try{if(Vi.transition=null,vt=16>n?16:n,as===null)var i=!1;else{if(n=as,as=null,Df=0,ft&6)throw Error(re(331));var r=ft;for(ft|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:zl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var d=c.sibling,p=c.return;if(dS(c),c===u){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var v=n.current;for(Se=v;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ld(9,a)}}catch(w){Wt(a,a.return,w)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ft=r,ks(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(ed,n)}catch{}i=!0}return i}finally{vt=t,Vi.transition=e}}return!1}function i0(n,e,t){e=za(t,e),e=tS(n,e,1),n=xs(n,e,1),e=Wn(),n!==null&&(Du(n,1,e),ti(n,e))}function Wt(n,e,t){if(n.tag===3)i0(n,n,t);else for(;e!==null;){if(e.tag===3){i0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ys===null||!ys.has(i))){n=za(t,n),n=nS(e,n,1),e=xs(e,n,1),n=Wn(),e!==null&&(Du(e,1,n),ti(e,n));break}}e=e.return}}function KT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,hn===n&&(vn&t)===t&&(on===4||on===3&&(vn&130023424)===vn&&500>jt()-l_?lo(n,0):a_|=t),ti(n,e)}function MS(n,e){e===0&&(n.mode&1?(e=Yu,Yu<<=1,!(Yu&130023424)&&(Yu=4194304)):e=1);var t=Wn();n=Vr(n,e),n!==null&&(Du(n,e,t),ti(n,t))}function ZT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),MS(n,t)}function QT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),MS(n,t)}var ES;ES=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,zT(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Nt&&e.flags&1048576&&Cy(e,Ef,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kc(n,e),n=e.pendingProps;var r=Ia(e,Dn.current);Ta(e,t),r=t_(null,e,i,n,r,t);var s=n_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Sf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Km(e),r.updater=ad,e.stateNode=r,r._reactInternals=e,Ap(e,i,n,t),e=bp(null,e,i,!0,s,t)):(e.tag=0,Nt&&s&&Vm(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ew(i),n=Qi(i,n),r){case 0:e=Rp(null,e,i,n,t);break e;case 1:e=jg(null,e,i,n,t);break e;case 11:e=Xg(null,e,i,n,t);break e;case 14:e=Yg(null,e,i,Qi(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Rp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),jg(n,e,i,r,t);case 3:e:{if(oS(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ny(n,e),Af(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=za(Error(re(423)),e),e=qg(n,e,i,t,r);break e}else if(i!==r){r=za(Error(re(424)),e),e=qg(n,e,i,t,r);break e}else for(yi=vs(e.stateNode.containerInfo.firstChild),Ei=e,Nt=!0,er=null,t=Ly(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Oa(),i===r){e=Wr(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return Uy(e),n===null&&Ep(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vp(i,r)?o=null:s!==null&&vp(i,s)&&(e.flags|=32),sS(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&Ep(e),null;case 13:return aS(n,e,t);case 4:return Zm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Fa(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Xg(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,At(Tf,i._currentValue),i._currentValue=o,s!==null)if(or(s.value,o)){if(s.children===r.children&&!Jn.current){e=Wr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Tp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Tp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ta(e,t),r=Xi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Qi(i,e.pendingProps),r=Qi(i.type,r),Yg(n,e,i,r,t);case 15:return iS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Kc(n,e),e.tag=1,ei(i)?(n=!0,Sf(e)):n=!1,Ta(e,t),eS(e,i,r),Ap(e,i,r,t),bp(null,e,i,!0,n,t);case 19:return lS(n,e,t);case 22:return rS(n,e,t)}throw Error(re(156,e.tag))};function TS(n,e){return Zx(n,e)}function JT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(n,e,t,i){return new JT(n,e,t,i)}function d_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ew(n){if(typeof n=="function")return d_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lm)return 11;if(n===Dm)return 14}return 2}function Ms(n,e){var t=n.alternate;return t===null?(t=Bi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")d_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ra:return uo(t.children,r,s,e);case Pm:o=8,r|=8;break;case Kh:return n=Bi(12,t,e,r|2),n.elementType=Kh,n.lanes=s,n;case Zh:return n=Bi(13,t,e,r),n.elementType=Zh,n.lanes=s,n;case Qh:return n=Bi(19,t,e,r),n.elementType=Qh,n.lanes=s,n;case Ux:return cd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Dx:o=10;break e;case Nx:o=9;break e;case Lm:o=11;break e;case Dm:o=14;break e;case ns:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Bi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function uo(n,e,t,i){return n=Bi(7,n,i,e),n.lanes=t,n}function cd(n,e,t,i){return n=Bi(22,n,i,e),n.elementType=Ux,n.lanes=t,n.stateNode={isHidden:!1},n}function Qd(n,e,t){return n=Bi(6,n,null,e),n.lanes=t,n}function Jd(n,e,t){return e=Bi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function tw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nd(0),this.expirationTimes=Nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function h_(n,e,t,i,r,s,o,a,l){return n=new tw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Km(s),n}function nw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ia,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function wS(n){if(!n)return Ps;n=n._reactInternals;e:{if(Do(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(ei(t))return wy(n,t,e)}return e}function AS(n,e,t,i,r,s,o,a,l){return n=h_(t,i,!0,n,r,s,o,a,l),n.context=wS(null),t=n.current,i=Wn(),r=Ss(t),s=zr(i,r),s.callback=e??null,xs(t,s,r),n.current.lanes=r,Du(n,r,i),ti(n,i),n}function fd(n,e,t,i){var r=e.current,s=Wn(),o=Ss(r);return t=wS(t),e.context===null?e.context=t:e.pendingContext=t,e=zr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xs(r,e,o),n!==null&&(sr(n,r,o,s),jc(n,r,o)),o}function Uf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function r0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function p_(n,e){r0(n,e),(n=n.alternate)&&r0(n,e)}function iw(){return null}var CS=typeof reportError=="function"?reportError:function(n){console.error(n)};function m_(n){this._internalRoot=n}dd.prototype.render=m_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));fd(n,e,null,null)};dd.prototype.unmount=m_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;wo(function(){fd(null,n,null,null)}),e[Gr]=null}};function dd(n){this._internalRoot=n}dd.prototype.unstable_scheduleHydration=function(n){if(n){var e=ry();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rs.length&&e!==0&&e<rs[t].priority;t++);rs.splice(t,0,n),t===0&&oy(n)}};function __(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function s0(){}function rw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Uf(o);s.call(u)}}var o=AS(e,i,n,0,null,!1,!1,"",s0);return n._reactRootContainer=o,n[Gr]=o.current,cu(n.nodeType===8?n.parentNode:n),wo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Uf(l);a.call(u)}}var l=h_(n,0,!1,null,null,!1,!1,"",s0);return n._reactRootContainer=l,n[Gr]=l.current,cu(n.nodeType===8?n.parentNode:n),wo(function(){fd(e,l,t,i)}),l}function pd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uf(o);a.call(l)}}fd(e,o,n,r)}else o=rw(t,e,n,r,i);return Uf(o)}ny=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Tl(e.pendingLanes);t!==0&&(Im(e,t|1),ti(e,jt()),!(ft&6)&&(Ba=jt()+500,ks()))}break;case 13:wo(function(){var i=Vr(n,1);if(i!==null){var r=Wn();sr(i,n,1,r)}}),p_(n,1)}};Om=function(n){if(n.tag===13){var e=Vr(n,134217728);if(e!==null){var t=Wn();sr(e,n,134217728,t)}p_(n,134217728)}};iy=function(n){if(n.tag===13){var e=Ss(n),t=Vr(n,e);if(t!==null){var i=Wn();sr(t,n,e,i)}p_(n,e)}};ry=function(){return vt};sy=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};lp=function(n,e,t){switch(e){case"input":if(tp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=rd(i);if(!r)throw Error(re(90));Ox(i),tp(i,r)}}}break;case"textarea":kx(n,t);break;case"select":e=t.value,e!=null&&ya(n,!!t.multiple,e,!1)}};Xx=u_;Yx=wo;var sw={usingClientEntryPoint:!1,Events:[Uu,la,rd,Vx,Wx,u_]},dl={findFiberByHostInstance:io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$x(n),n===null?null:n.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ed=ic.inject(ow),gr=ic}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw;bi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!__(e))throw Error(re(200));return nw(n,e,null,t)};bi.createRoot=function(n,e){if(!__(n))throw Error(re(299));var t=!1,i="",r=CS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=h_(n,1,!1,null,null,t,!1,i,r),n[Gr]=e.current,cu(n.nodeType===8?n.parentNode:n),new m_(e)};bi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=$x(e),n=n===null?null:n.stateNode,n};bi.flushSync=function(n){return wo(n)};bi.hydrate=function(n,e,t){if(!hd(e))throw Error(re(200));return pd(null,n,e,!0,t)};bi.hydrateRoot=function(n,e,t){if(!__(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=CS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=AS(e,null,n,1,t??null,r,!1,s,o),n[Gr]=e.current,cu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new dd(e)};bi.render=function(n,e,t){if(!hd(e))throw Error(re(200));return pd(null,n,e,!1,t)};bi.unmountComponentAtNode=function(n){if(!hd(n))throw Error(re(40));return n._reactRootContainer?(wo(function(){pd(null,null,n,!1,function(){n._reactRootContainer=null,n[Gr]=null})}),!0):!1};bi.unstable_batchedUpdates=u_;bi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!hd(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return pd(n,e,t,!1,i)};bi.version="18.3.1-next-f1338f8080-20240426";function RS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RS)}catch(n){console.error(n)}}RS(),Rx.exports=bi;var aw=Rx.exports,o0=aw;qh.createRoot=o0.createRoot,qh.hydrateRoot=o0.hydrateRoot;function br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function bS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ha={duration:.5,overwrite:!1,delay:0},g_,xn,Ut,Hi=1e8,Mt=1/Hi,Hp=Math.PI*2,lw=Hp/4,uw=0,PS=Math.sqrt,cw=Math.cos,fw=Math.sin,pn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},v_=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},x_=function(){return typeof window<"u"},rc=function(e){return Xt(e)||pn(e)},LS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,dw=/random\([^)]+\)/g,hw=/,\s*/g,a0=/(?:-?\.?\d|\.)+/gi,DS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,NS=/[+-]=-?[.\d]+/,pw=/[^,'"\[\]\s]+/gi,mw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,cr,Gp,y_,Ci={},If={},US,IS=function(e){return(If=Ga(e,Ci))&&li},S_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xu=function(e,t){return!t&&console.warn(e)},OS=function(e,t){return e&&(Ci[e]=t)&&If&&(If[e]=t)||Ci},yu=function(){return 0},_w={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},gw={suppressEvents:!0},M_={},Es=[],Vp={},FS,mi={},th={},l0=30,tf=[],E_="",T_=function(e){var t=e[0],i,r;if(Sr(t)||Xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=tf.length;r--&&!tf[r].targetTest(t););i=tf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new aM(e[r],i)))||e.splice(r,1);return e},co=function(e){return e._gsap||T_(Gi(e))[0]._gsap},kS=function(e,t,i){return(i=e[t])&&Xt(i)?e[t]():v_(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Aa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Of=function(){var e=Es.length,t=Es.slice(0),i,r;for(Vp={},Es.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},w_=function(e){return!!(e._initted||e._startAt||e.add)},zS=function(e,t,i,r){Es.length&&!xn&&Of(),e.render(t,i,!!(xn&&t<0&&w_(e))),Es.length&&!xn&&Of()},BS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pw).length<2?t:pn(e)?e.trim():e},HS=function(e){return e},Ri=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ga=function(e,t){for(var i in t)e[i]=t[i];return e},u0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Sr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ff=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Gl=function(e){var t=e.parent||zt,i=e.keyframes?xw(Ln(e.keyframes)):Ri;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},GS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},md=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Sw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wp=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Mw=function n(e){return!e||e._ts&&n(e.parent)},c0=function(e){return e._repeat?Va(e._tTime,e=e.duration()+e._rDelay)*e:0},Va=function(e,t){var i=Math.floor(e=Ft(e/t));return e&&i===e?i-1:i},kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_d=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},gd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_d(e),i._dirty||fo(i,e)),e},VS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=kf(e.rawTime(),t),(!t._dur||Ou(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),fo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},pr=function(e,t,i,r){return t.parent&&Ls(t),t._start=Ft((Xr(i)?i:i||e!==zt?Ni(e,i,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),GS(e,t,"_first","_last",e._sort?"_start":0),Xp(t)||(e._recent=t),r||VS(e,t),e._ts<0&&gd(e,e._tTime),e},WS=function(e,t){return(Ci.ScrollTrigger||S_("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},XS=function(e,t,i,r,s){if(C_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FS!==vi.frame)return Es.push(e),e._lazy=[s,r],1},Ew=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Tw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Ew(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ou(0,e._tDur,t),c=Va(l,a),e._yoyo&&c&1&&(o=1-o),c!==Va(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&XS(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Wp(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ls(e,1),!i&&!xn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ww=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Wa=function(e,t,i,r){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!r&&gd(e,e._tTime=e._tDur*a),e.parent&&_d(e),i||fo(e.parent,e),e},f0=function(e){return e instanceof Gn?fo(e):Wa(e,e._dur)},Aw={_start:0,endTime:yu,totalDuration:yu},Ni=function n(e,t,i){var r=e.labels,s=e._recent||Aw,o=e.duration()>=Hi?s.endTime(!1):e._dur,a,l,u;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Ln(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Vl=function(e,t,i){var r=Xr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},zs=function(e,t){return e||e===0?t(e):t},Ou=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!pn(e)||!(t=mw.exec(e))?"":t[1]},Cw=function(e,t,i){return zs(i,function(r){return Ou(e,t,r)})},Yp=[].slice,YS=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==cr},Rw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return pn(r)&&!t||YS(r,1)?(s=i).push.apply(s,Gi(r)):i.push(r)})||i},Gi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):pn(e)&&!i&&(Gp||!Xa())?Yp.call((t||y_).querySelectorAll(e),0):Ln(e)?Rw(e,i):YS(e)?Yp.call(e,0):e?[e]:[]},jp=function(e){return e=Gi(e)[0]||xu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gi(t,i.querySelectorAll?i:i===e?xu("Invalid scope")||y_.createElement("div"):e)}},jS=function(e){return e.sort(function(){return .5-Math.random()})},qS=function(e){if(Xt(e))return e;var t=Sr(e)?e:{each:e},i=ho(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return pn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,g){var _=(g||t).length,m=o[_],h,v,x,y,w,T,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!S){for(M=-Hi;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],h=l?Math.min(S,_)*c-.5:r%S,v=S===Hi?0:l?_*f/S-.5:r/S|0,M=0,P=Hi,T=0;T<_;T++)x=T%S-h,y=v-(T/S|0),m[T]=w=u?Math.abs(u==="y"?y:x):PS(x*x+y*y),w>M&&(M=w),w<P&&(P=w);r==="random"&&jS(m),m.max=M-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,i=i&&_<0?rM(i):i}return _=(m[d]-m.min)/m.max||0,Ft(m.b+(i?i(_):_)*m.v)+m.u}},qp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ft(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Xr(i)?0:bn(i))}},$S=function(e,t){var i=Ln(e),r,s;return!i&&Sr(e)&&(r=i=e.radius||Hi,e.values?(e=Gi(e.values),(s=!Xr(e[0]))&&(r*=r)):e=qp(e.increment)),zs(t,i?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Hi,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Xr(o)?c:c+bn(o)}:qp(e))},KS=function(e,t,i,r){return zs(Ln(e)?!t:i===!0?!!(i=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},bw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Pw=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},Lw=function(e,t,i){return QS(e,t,0,1,i)},ZS=function(e,t,i){return zs(i,function(r){return e[~~t(r)]})},Dw=function n(e,t,i){var r=t-e;return Ln(e)?ZS(e,n(0,e.length),t):zs(i,function(s){return(r+(s-e)%r)%r+e})},Nw=function n(e,t,i){var r=t-e,s=r*2;return Ln(e)?ZS(e,n(0,e.length-1),t):zs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Su=function(e){return e.replace(dw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(hw);return KS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},QS=function(e,t,i,r,s){var o=t-e,a=r-i;return zs(s,function(l){return i+((l-e)/o*a||0)})},Uw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=pn(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return c[_](g-_)},i=t}else r||(e=Ga(Ln(e)?[]:{},e));if(!c){for(l in t)A_.call(a,e,l,"get",t[l]);s=function(g){return P_(g,a)||(o?e.p:e)}}}return zs(i,s)},d0=function(e,t,i){var r=e.labels,s=Hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Es.length&&Of(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Al=function(e){return Ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&Si(e,"onInterrupt"),e},_a,JS=[],eM=function(e){if(e)if(e=!e.name&&e.default||e,x_()||e.headless){var t=e.name,i=Xt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:yu,render:P_,add:A_,kill:Kw,modifier:$w,rawVars:0},o={targetTest:0,get:0,getSetter:b_,aliases:{},register:0};if(Xa(),e!==r){if(mi[t])return;Ri(r,Ri(Ff(e,s),o)),Ga(r.prototype,Ga(s,Ff(e,o))),mi[r.prop=t]=r,e.targetTest&&(tf.push(r),M_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}OS(t,r),e.register&&e.register(li,r,ri)}else JS.push(e)},St=255,Cl={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},nh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},tM=function(e,t,i){var r=e?Xr(e)?[e>>16,e>>8&St,e&St]:0:Cl.black,s,o,a,l,u,c,f,d,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cl[e])r=Cl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(a0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=nh(l+1/3,s,o),r[1]=nh(l,s,o),r[2]=nh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(DS),i&&r.length<4&&(r[3]=1),r}else r=e.match(a0)||Cl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},nM=function(e){var t=[],i=[],r=-1;return e.split(Ts).forEach(function(s){var o=s.match(ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},h0=function(e,t,i){var r="",s=(e+r).match(Ts),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=tM(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=nM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ts,"1").split(ma),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ts),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ts=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Iw=/hsl[a]?\(/,iM=function(e){var t=e.join(" "),i;if(Ts.lastIndex=0,Ts.test(t))return i=Iw.test(t),e[1]=h0(e[1],i),e[0]=h0(e[0],i,nM(e[1])),!0},Mu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,g=function _(m){var h=n()-r,v=m===!0,x,y,w,T;if((h>e||h<0)&&(i+=h-t),r+=h,w=r-i,x=w-o,(x>0||v)&&(T=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](w,d,T,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){US&&(!Gp&&x_()&&(cr=Gp=window,y_=cr.document||{},Ci.gsap=li,(cr.gsapVersions||(cr.gsapVersions=[])).push(li.version),IS(If||cr.GreenSockGlobals||!cr.gsap&&cr||{}),JS.forEach(eM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Mu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Mu=0,u=yu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,v){var x=h?function(y,w,T,M){m(y,w,T,M),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),Xa(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),Xa=function(){return!Mu&&vi.wake()},lt={},Ow=/^[\d.\-M][\d.\-,\s]/,Fw=/["']/g,kw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Fw,"").trim():+u,r=l.substr(a+1).trim();return t},zw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Bw=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[kw(t[1])]:zw(e).split(",").map(BS)):lt._CE&&Ow.test(e)?lt._CE("",e):i},rM=function(e){return function(t){return 1-e(1-t)}},sM=function n(e,t){for(var i=e._first,r;i;)i instanceof Gn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ho=function(e,t){return e&&(Xt(e)?e:lt[e]||Bw(e))||t},No=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){lt[a]=Ci[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},oM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*fw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:oM(a);return s=Hp/s,l.config=function(u,c){return n(e,u,c)},l},rh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:oM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;No(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;No("Elastic",ih("in"),ih("out"),ih());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};No("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);No("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});No("Circ",function(n){return-(PS(1-n*n)-1)});No("Sine",function(n){return n===1?1:-cw(n*lw)+1});No("Back",rh("in"),rh("out"),rh());lt.SteppedEase=lt.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Ou(0,o,a)|0)+s)*i}}};Ha.ease=lt["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return E_+=n+","+n+"Params,"});var aM=function(e,t){this.id=uw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kS,this.set=t?t.getSetter:b_},Eu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wa(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Mu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Wa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Xa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gd(this,i),!s._dp||s.parent||VS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+c0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+c0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Va(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?kf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Ou(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),_d(this),Sw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ft(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=gw);var r=xn;return xn=i,w_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,f0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,f0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ni(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Xt(i)?i:HS,l=function(){var c=r.then;r.then=null,s&&s(),Xt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Al(this)},n}();Ri(Eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Gn=function(n){bS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),zt&&pr(i.parent||zt,br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&WS(br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Vl(0,arguments,this),this},t.from=function(r,s,o){return Vl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Vl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Gl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Ni(this,o),1),this},t.call=function(r,s,o){return pr(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Qt(r,o,Ni(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Gl(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Gl(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ft(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,g,_,m,h,v,x,y,w,T,M;if(this!==zt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Ft(c%m),c===l?(_=this._repeat,d=u):(w=Ft(c/m),_=~~w,_&&_===w&&(d=u,_--),d>u&&(d=u)),w=Va(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),T&&_&1&&(d=u-d,M=1),_!==w&&!this._lock){var P=T&&w&1,S=P===(T&&_&1);if(_<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Ft(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;sM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=ww(this,Ft(a),Ft(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Si(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-Mt);break}}p=g}else{p=this._last;for(var E=r<0?r:d;p;){if(g=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||xn&&w_(p)),d!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=E?-Mt:Mt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,_d(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ls(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Xr(s)||(s=Ni(this,s,r)),!(r instanceof Eu)){if(Ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if(pn(r))return this.addLabel(r,s);if(Xt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return pn(r)?this.removeLabel(r):Xt(r)?this.killTweensOf(r):(r.parent===this&&md(this,r),r===this._recent&&(this._recent=this._last),fo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ni(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||yu,o);return a.data="isPause",this._hasPause=1,pr(this,a,Ni(this,r))},t.removePause=function(r){var s=this._first;for(r=Ni(this,r);s;)s._start===r&&s.data==="isPause"&&Ls(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,u=Xr(s),c;l;)l instanceof Qt?vw(l._targets,a)&&(u?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ni(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,g=Qt.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Wa(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ri({startAt:{time:Ni(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),d0(this,Ni(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),d0(this,Ni(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ft(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return fo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Hi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ft(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Wa(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(zS(zt,kf(r,zt)),FS=vi.frame),vi.frame>=l0){l0+=Ti.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Ti.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Eu);Ri(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hw=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,hM,null,s),u=0,c=0,f,d,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Su(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(eh)||[];f=eh.exec(r);)g=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Aa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=eh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(NS.test(r)||h)&&(l.e=0),this._pt=l,l},A_=function(e,t,i,r,s,o,a,l,u,c){Xt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Xt(f)?u?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Xt(f)?u?Yw:fM:R_,g;if(pn(r)&&(~r.indexOf("random(")&&(r=Su(r)),r.charAt(1)==="="&&(g=Aa(d,r)+(bn(d)||0),(g||g===0)&&(r=g))),!c||d!==r||$p)return!isNaN(d*r)&&r!==""?(g=new ri(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?qw:dM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&S_(t,r),Hw.call(this,e,t,d,r,p,l||Ti.stringFilter,u))},Gw=function(e,t,i,r,s){if(Xt(e)&&(e=Wl(e,s,t,i,r)),!Sr(e)||e.style&&e.nodeType||Ln(e)||LS(e))return pn(e)?Wl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Wl(e[a],s,t,i,r);return o},lM=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:Gw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==_a))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ls,$p,C_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!g_,y=e.timeline,w,T,M,P,S,E,k,D,q,L,O,z,H;if(y&&(!d||!s)&&(s="none"),e._ease=ho(s,Ha.ease),e._yEase=f?rM(ho(f===!0?s:f,Ha.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(D=m[0]?co(m[0]).harness:0,z=D&&r[D.prop],w=Ff(r,M_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?ef:_w),_._lazy=0),o){if(Ls(e._startAt=Qt.set(m,Ri({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!p)&&e._startAt.revert(ef),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:h},w),z&&(M[D.prop]=z),Ls(e._startAt=Qt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(ef):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],k=S._gsap||T_(m)[T]._gsap,e._ptLookup[T]=L={},Vp[k.id]&&Es.length&&Of(),O=v===m?T:v.indexOf(S),D&&(q=new D).init(S,z||w,e,O,v)!==!1&&(e._pt=P=new ri(e._pt,S,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(N){L[N]=P}),q.priority&&(E=1)),!D||z)for(M in w)mi[M]&&(q=lM(M,w,e,O,S,v))?q.priority&&(E=1):L[M]=P=A_.call(e,S,M,"get",w[M],O,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),x&&e._pt&&(ls=e,zt.killTweensOf(S,L,e.globalTime(t)),H=!e.parent,ls=0),e._pt&&l&&(Vp[k.id]=1)}E&&pM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&y.render(Hi,!0,!0)},Vw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return $p=1,e.vars[t]="+=0",C_(e,a),$p=0,l?xu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Yt(i)+bn(f.e)),f.b&&(f.b=c.s+bn(f.b))},Ww=function(e,t){var i=e[0]?co(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ga({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Ln(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Wl=function(e,t,i,r,s){return Xt(e)?e.call(t,i,r,s):pn(e)&&~e.indexOf("random(")?Su(e):e},uM=E_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cM={};ii(uM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return cM[n]=1});var Qt=function(n){bS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Gl(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||zt,x=(Ln(i)||LS(i)?Xr(i[0]):"length"in r)?[i]:Gi(i),y,w,T,M,P,S,E,k;if(a._targets=x.length?T_(x):xu("GSAP target "+i+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||rc(u)||rc(c)){if(r=a.vars,y=a.timeline=new Gn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=br(a),y._start=0,d||rc(u)||rc(c)){if(M=x.length,E=d&&qS(d),Sr(d))for(P in d)~uM.indexOf(P)&&(k||(k={}),k[P]=d[P]);for(w=0;w<M;w++)T=Ff(r,cM),T.stagger=0,h&&(T.yoyoEase=h),k&&Ga(T,k),S=x[w],T.duration=+Wl(u,br(a),w,S,x),T.delay=(+Wl(c,br(a),w,S,x)||0)-a._delay,!d&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(S,T,E?E(w,S,x):0),y._ease=lt.none;y.duration()?u=c=0:a.timeline=0}else if(g){Gl(Ri(y.vars.defaults,{ease:"none"})),y._ease=ho(g.ease||r.ease||"none");var D=0,q,L,O;if(Ln(g))g.forEach(function(z){return y.to(x,z,">")}),y.duration();else{T={};for(P in g)P==="ease"||P==="easeEach"||Xw(P,g[P],T,g.easeEach);for(P in T)for(q=T[P].sort(function(z,H){return z.t-H.t}),D=0,w=0;w<q.length;w++)L=q[w],O={ease:L.e,duration:(L.t-(w?q[w-1].t:0))/100*u},O[P]=L.v,y.to(x,O,D),D+=O.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!g_&&(ls=br(a),zt.killTweensOf(x),ls=0),pr(v,br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Ft(v._time)&&ni(f)&&Mw(br(a))&&v.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&WS(br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Mt&&!c?l:r<Mt?0:r,d,p,g,_,m,h,v,x,y;if(!u)Tw(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Ft(f%_),f===l?(g=this._repeat,d=u):(m=Ft(f/_),g=~~m,g&&g===m?(d=u,g--):d>u&&(d=u)),h=this._yoyo&&g&1,h&&(y=this._yEase,d=u-d),m=Va(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&sM(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(XS(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/u),this._from&&(this.ratio=v=1-v),!a&&f&&!s&&!m&&(Si(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wp(this,r,s,o),Si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Wp(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ls(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Si(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Mu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||C_(this,u),c=this._ease(u/this._dur),Vw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(gd(this,0),this.parent||GS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Al(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ls&&ls.vars.overwrite!==!0)._first||Al(this),this.parent&&o!==this.timeline.totalDuration()&&Wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,u=this._ptLookup,c=this._pt,f,d,p,g,_,m,h;if((!s||s==="all")&&yw(a,l))return s==="all"&&(this._pt=0),Al(this);for(f=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},ii(s,function(v){return _[v]=1}),s=_),s=Ww(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,g=d,p={}):(p=f[h]=f[h]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&md(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Al(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Vl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Vl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e}(Eu);Ri(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Qt[n]=function(){var e=new Gn,t=Yp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var R_=function(e,t,i){return e[t]=i},fM=function(e,t,i){return e[t](i)},Yw=function(e,t,i,r){return e[t](r.fp,i)},jw=function(e,t,i){return e.setAttribute(t,i)},b_=function(e,t){return Xt(e[t])?fM:v_(e[t])&&e.setAttribute?jw:R_},dM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},P_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},$w=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Kw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?md(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Zw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},pM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||dM,this.d=l||this,this.set=u||R_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Zw,this.m=i,this.mt=s,this.tween=r},n}();ii(E_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return M_[n]=1});Ci.TweenMax=Ci.TweenLite=Qt;Ci.TimelineLite=Ci.TimelineMax=Gn;zt=new Gn({sortChildren:!1,defaults:Ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=iM;var po=[],nf={},Qw=[],p0=0,Jw=0,sh=function(e){return(nf[e]||Qw).map(function(t){return t()})},Kp=function(){var e=Date.now(),t=[];e-p0>2&&(sh("matchMediaInit"),po.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),sh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),p0=e,sh("matchMedia"))},mM=function(){function n(t,i){this.selector=i&&jp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Jw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Xt(i)&&(s=r,r=i,i=Xt);var o=this,a=function(){var u=Ut,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=jp(s)),Ut=o,f=r.apply(o,arguments),Xt(f)&&o._r.push(f),Ut=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Xt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Gn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=po.length;o--;)po[o].id===this.id&&po.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),eA=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Sr(i)||(i={matches:i});var o=new mM(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=cr.matchMedia(i[u]),l&&(po.indexOf(o)<0&&po.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kp):l.addEventListener("change",Kp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return eM(r)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){pn(e)&&(e=Gi(e)[0]);var s=co(e||{}).get,o=i?HS:BS;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=mi[t],a=co(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;_a._pt=0,f.init(e,i?c+i:c,_a,0,[e]),f.render(1,f),_a._pt&&P_(1,_a)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ri((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ho(e.ease,Ha.ease)),u0(Ha,e||{})},config:function(e){return u0(Ti,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ci[a]&&xu(t+" effect requires "+a+" plugin.")}),th[t]=function(a,l,u){return i(Gi(a),Ri(l||{},s),u)},o&&(Gn.prototype[t]=function(a,l,u){return this.add(th[t](a,Sr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){lt[e]=ho(t)},parseEase:function(e,t){return arguments.length?ho(e,t):lt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Gn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(zt,i,0),i},context:function(e,t){return e?new mM(e,t):Ut},matchMedia:function(e){return new eA(e)},matchMediaRefresh:function(){return po.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kp()},addEventListener:function(e,t){var i=nf[e]||(nf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Dw,wrapYoyo:Nw,distribute:qS,random:KS,snap:$S,normalize:Lw,getUnit:bn,clamp:Cw,splitColor:tM,toArray:Gi,selector:jp,mapRange:QS,pipe:bw,unitize:Pw,interpolate:Uw,shuffle:jS},install:IS,effects:th,ticker:vi,updateRoot:Gn.updateRoot,plugins:mi,globalTimeline:zt,core:{PropTween:ri,globals:OS,Tween:Qt,Timeline:Gn,Animation:Eu,getCache:co,_removeLinkedListItem:md,reverting:function(){return xn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return g_=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return zf[n]=Qt[n]});vi.add(Gn.updateRoot);_a=zf.to({},{duration:0});var tA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},nA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=tA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},oh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(pn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}nA(a,s)}}}},li=zf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},oh("roundProps",qp),oh("modifiers"),oh("snap",$S))||zf;Qt.version=Gn.version=li.version="3.14.2";US=1;x_()&&Xa();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m0,us,Ca,L_,oo,_0,D_,iA=function(){return typeof window<"u"},Yr={},Ks=180/Math.PI,Ra=Math.PI/180,Io=Math.atan2,g0=1e8,N_=/([A-Z])/g,rA=/(left|right|width|margin|padding|x)/i,sA=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},_M=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cA=function(e,t,i){return e.style[t]=i},fA=function(e,t,i){return e.style.setProperty(t,i)},dA=function(e,t,i){return e._gsap[t]=i},hA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},pA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},mA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",si=Bt+"Origin",_A=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Lr(r,a)}):this.tfm[e]=o.x?o[e]:Lr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},vM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(N_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=D_(),(!s||!s.isStart)&&!i[Bt]&&(vM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xM=function(e,t){var i={target:e,props:[],revert:gA,save:_A};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yM,Qp=function(e,t){var i=us.createElementNS?us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):us.createElement(e);return i&&i.style?i:us.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(N_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ya(t)||t,1)||""},v0="O,Moz,ms,Ms,Webkit".split(","),Ya=function(e,t,i){var r=t||oo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(v0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?v0[o]:"")+e},Jp=function(){iA()&&window.document&&(m0=window,us=m0.document,Ca=us.documentElement,oo=Qp("div")||{style:{}},Qp("div"),Bt=Ya(Bt),si=Bt+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yM=!!Ya("perspective"),D_=li.core.reverting,L_=1)},x0=function(e){var t=e.ownerSVGElement,i=Qp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ca.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ca.removeChild(i),s},y0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},SM=function(e){var t,i;try{t=e.getBBox()}catch{t=x0(e),i=1}return t&&(t.width||t.height)||i||(t=x0(e)),t&&!t.width&&!t.x&&!t.y?{x:+y0(e,["x","cx","x1"])||0,y:+y0(e,["y","cy","y1"])||0,width:0,height:0}:t},MM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&SM(e))},Ds=function(e,t){if(t){var i=e.style,r;t in Yr&&t!==si&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(N_,"-$1").toLowerCase())):i.removeAttribute(t)}},cs=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?gM:_M);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},S0={deg:1,rad:1,turn:1},vA={grid:1,flex:1},Ns=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=oo.style,l=rA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||S0[r]||S0[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&MM(e),(p||o==="%")&&(Yr[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Yt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===us||!_.appendChild)&&(_=us.body),m=_._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Yt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:Ds(e,t)}else(p||o==="%")&&!vA[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(oo),g=oo[c],_.removeChild(oo),a.position="absolute";return l&&p&&(m=co(_),m.time=vi.time,m.width=_[c]),Yt(d?g*s/f:g&&s?f/g*s:0)},Lr=function(e,t,i,r){var s;return L_||Jp(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yr[t]&&t!=="transform"?(s=wu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hf(Mi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bf[t]&&Bf[t](e,t,i)||Mi(e,t)||kS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ns(e,t,s,i)+i:s},xA=function(e,t,i,r){if(!i||i==="none"){var s=Ya(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,hM),l=0,u=0,c,f,d,p,g,_,m,h,v,x,y,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Mi(e,t)||r,_?e.style[t]=_:Ds(e,t)),c=[i,r],iM(c),i=c[0],r=c[1],d=i.match(ma)||[],w=r.match(ma)||[],w.length){for(;f=ma.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Aa(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=ma.lastIndex-x.length,x||(x=x||Ti.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Ns(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?gM:_M;return NS.test(r)&&(a.e=0),this._pt=a,a},M0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=M0[i]||i,t[1]=M0[r]||r,t.join(" ")},SA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Yr[a]&&(l=1,a=a==="transformOrigin"?si:Bt),Ds(i,a);l&&(Ds(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",wu(i,1),o.uncache=1,vM(r)))}},Bf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,SA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Tu=[1,0,0,1,0,0],EM={},TM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},E0=function(e){var t=Mi(e,Bt);return TM(t)?Tu:t.substr(7).match(DS).map(Yt)},U_=function(e,t){var i=e._gsap||co(e),r=e.style,s=E0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tu:s):(s===Tu&&!e.offsetParent&&e!==Ca&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ca.appendChild(e)),s=E0(e),l?r.display=l:Ds(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ca.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},em=function(e,t,i,r,s,o){var a=e._gsap,l=s||U_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,M,P,S;i?l!==Tu&&(M=p*m-g*_)&&(P=y*(m/M)+w*(-_/M)+(_*v-m*h)/M,S=y*(-g/M)+w*(p/M)-(p*v-g*h)/M,y=P,w=S):(T=SM(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(h=y-u,v=w-c,a.xOffset=f+(h*p+v*_)-h,a.yOffset=d+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(cs(o,a,"xOrigin",u,y),cs(o,a,"yOrigin",c,w),cs(o,a,"xOffset",f,a.xOffset),cs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},wu=function(e,t){var i=e._gsap||new aM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,si)||"0",c,f,d,p,g,_,m,h,v,x,y,w,T,M,P,S,E,k,D,q,L,O,z,H,N,I,C,K,Q,$,Z,ie;return c=f=d=_=m=h=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&MM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),M=U_(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),em(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Tu&&(k=M[0],D=M[1],q=M[2],L=M[3],c=O=M[4],f=z=M[5],M.length===6?(p=Math.sqrt(k*k+D*D),g=Math.sqrt(L*L+q*q),_=k||D?Io(D,k)*Ks:0,v=q||L?Io(q,L)*Ks+_:0,v&&(g*=Math.abs(Math.cos(v*Ra))),i.svg&&(c-=w-(w*k+T*q),f-=T-(w*D+T*L))):(ie=M[6],$=M[7],C=M[8],K=M[9],Q=M[10],Z=M[11],c=M[12],f=M[13],d=M[14],P=Io(ie,Q),m=P*Ks,P&&(S=Math.cos(-P),E=Math.sin(-P),H=O*S+C*E,N=z*S+K*E,I=ie*S+Q*E,C=O*-E+C*S,K=z*-E+K*S,Q=ie*-E+Q*S,Z=$*-E+Z*S,O=H,z=N,ie=I),P=Io(-q,Q),h=P*Ks,P&&(S=Math.cos(-P),E=Math.sin(-P),H=k*S-C*E,N=D*S-K*E,I=q*S-Q*E,Z=L*E+Z*S,k=H,D=N,q=I),P=Io(D,k),_=P*Ks,P&&(S=Math.cos(P),E=Math.sin(P),H=k*S+D*E,N=O*S+z*E,D=D*S-k*E,z=z*S-O*E,k=H,O=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Yt(Math.sqrt(k*k+D*D+q*q)),g=Yt(Math.sqrt(z*z+ie*ie)),P=Io(O,z),v=Math.abs(P)>2e-4?P*Ks:0,y=Z?1/(Z<0?-Z:Z):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!TM(Mi(e,Bt)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Yt(p),i.scaleY=Yt(g),i.rotation=Yt(_)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=Hf(u)),i.xOffset=i.yOffset=0,i.force3D=Ti.force3D,i.renderTransform=i.svg?EA:yM?wM:MA,i.uncache=0,i},Hf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ah=function(e,t,i){var r=bn(t);return Yt(parseFloat(t)+parseFloat(Ns(e,"x",i+"px",r)))+r},MA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wM(e,t)},Gs="0deg",hl="0px",Vs=") ",wM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",w=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Gs||c!==Gs)){var T=parseFloat(c)*Ra,M=Math.sin(T),P=Math.cos(T),S;T=parseFloat(f)*Ra,S=Math.cos(T),o=ah(v,o,M*S*-x),a=ah(v,a,-Math.sin(T)*-x),l=ah(v,l,P*S*-x+x)}m!==hl&&(y+="perspective("+m+Vs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==hl||a!==hl||l!==hl)&&(y+=l!==hl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vs),u!==Gs&&(y+="rotate("+u+Vs),c!==Gs&&(y+="rotateY("+c+Vs),f!==Gs&&(y+="rotateX("+f+Vs),(d!==Gs||p!==Gs)&&(y+="skew("+d+", "+p+Vs),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Vs),v.style[Bt]=y||"translate(0, 0)"},EA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),w,T,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ra,u*=Ra,w=Math.cos(l)*f,T=Math.sin(l)*f,M=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=Ra,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=Yt(w),T=Yt(T),M=Yt(M),P=Yt(P)):(w=f,P=d,T=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Ns(p,"x",o,"px"),y=Ns(p,"y",a,"px")),(g||_||m||h)&&(x=Yt(x+g-(g*w+_*M)+m),y=Yt(y+_-(g*T+_*P)+h)),(r||s)&&(S=p.getBBox(),x=Yt(x+r/100*S.width),y=Yt(y+s/100*S.height)),S="matrix("+w+","+T+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Bt]=S)},TA=function(e,t,i,r,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ks:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*g0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*g0)%o-~~(u/o)*o)),e._pt=d=new ri(e._pt,t,i,r,u,oA),d.e=c,d.u="deg",e._props.push(i),d},T0=function(e,t){for(var i in t)e[i]=t[i];return e},wA=function(e,t,i){var r=T0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=wu(i,1),Ds(i,Bt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Bt],o[Bt]=t,a=wu(i,1),o[Bt]=u);for(l in Yr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),g=bn(c),f=p!==g?Ns(i,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new ri(e._pt,a,l,f,d-f,Zp),e._pt.u=g||0,e._props.push(l));T0(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Bf[e>1?"border"+n:n]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(g){return Lr(a,g,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,f)}});var AM={name:"css",register:Jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,g,_,m,h,v,x,y,w,T,M,P,S;L_||Jp(),this.styles=this.styles||xM(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(mi[_]&&lM(_,t,i,r,e,s)))){if(p=typeof c,g=Bf[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Su(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ts.lastIndex=0,Ts.test(u)||(m=bn(u),h=bn(c),h?m!==h&&(u=Ns(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],pn(u)&&~u.indexOf("random(")&&(u=Su(u)),bn(u+"")||u==="auto"||(u+=Ti.units[_]||bn(Lr(e,_))||""),(u+"").charAt(1)==="="&&(u=Lr(e,_))):u=Lr(e,_),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in mr&&(_==="autoAlpha"&&(d===1&&Lr(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),cs(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=mr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Yr,x){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Mi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Mi(e,"perspective"),E?e.style.perspective=E:Ds(e,"perspective")}f=parseFloat(c)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||wu(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new ri(this._pt,a,Bt,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new ri(this._pt,w,"scaleY",w.scaleY,(v?Aa(w.scaleY,v+f):f)-w.scaleY||0,Zp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(si,0,a[si]),c=yA(c),w.svg?em(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==w.zOrigin&&cs(this,w,"zOrigin",w.zOrigin,h),cs(this,a,_,Hf(u),Hf(c)));continue}else if(_==="svgOrigin"){em(e,c,1,T,0,this);continue}else if(_ in EM){TA(this,w,_,d,v?Aa(d,v+c):c);continue}else if(_==="smoothOrigin"){cs(this,w,"smooth",w.smooth,c);continue}else if(_==="force3D"){w[_]=c;continue}else if(_==="transform"){wA(this,c,e);continue}}else _ in a||(_=Ya(_)||_);if(x||(f||f===0)&&(d||d===0)&&!sA.test(c)&&_ in a)m=(u+"").substr((d+"").length),f||(f=0),h=bn(c)||(_ in Ti.units?Ti.units[_]:m),m!==h&&(d=Ns(e,_,u,h)),this._pt=new ri(this._pt,x?w:a,_,d,(v?Aa(d,v+f):f)-d,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?uA:Zp),this._pt.u=h||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=lA):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=aA);else if(_ in a)xA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){S_(_,c);continue}x||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}M&&pM(this)},render:function(e,t){if(t.tween._time||!D_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Lr,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in Yr&&t!==si&&(e._gsap.x||Lr(e,"x"))?i&&_0===i?t==="scale"?hA:dA:(_0=i||{})&&(t==="scale"?pA:mA):e.style&&!v_(e.style[t])?cA:~t.indexOf("-")?fA:b_(e,t)},core:{_removeProperty:Ds,_getMatrix:U_}};li.utils.checkPrefix=Ya;li.core.getStyleSaver=xM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Yr[s]=1});ii(e,function(s){Ti.units[s]="deg",EM[s]=1}),mr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ti.units[n]="px"});li.registerPlugin(AM);var Dt=li.registerPlugin(AM)||li;Dt.core.Tween;function AA(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function CA(n,e,t){return e&&AA(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,rf,xi,fs,ds,ba,CM,Zs,Xl,RM,Or,Zi,bM,PM=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},LM=1,ga=[],it=[],xr=[],Yl=Date.now,tm=function(e,t){return t},RA=function(){var e=Xl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,xr),it=i,xr=r,tm=function(o,a){return t[o](a)}},ws=function(e,t){return~xr.indexOf(e)&&xr[xr.indexOf(e)+1][t]},jl=function(e){return!!~RM.indexOf(e)},In=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},sc="scrollLeft",oc="scrollTop",nm=function(){return Or&&Or.isPressed||it.cache++},Gf=function(e,t){var i=function r(s){if(s||s===0){LM&&(xi.history.scrollRestoration="manual");var o=Or&&Or.isPressed;s=r.v=Math.round(s)||(Or&&Or.iOS?1:0),e(s),r.cacheID=it.cache,o&&tm("ss",s)}else(t||it.cache!==r.cacheID||tm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Vn={s:sc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gf(function(n){return arguments.length?xi.scrollTo(n,sn.sc()):xi.pageXOffset||fs[sc]||ds[sc]||ba[sc]||0})},sn={s:oc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:Gf(function(n){return arguments.length?xi.scrollTo(Vn.sc(),n):xi.pageYOffset||fs[oc]||ds[oc]||ba[oc]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},bA=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Us=function(e,t){var i=t.s,r=t.sc;jl(e)&&(e=fs.scrollingElement||ds);var s=it.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||In(e,"scroll",nm);var a=it[s+o],l=a||(it[s+o]=Gf(ws(e,i),!0)||(jl(e)?r:Gf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},im=function(e,t,i){var r=e,s=e,o=Yl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Yl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,h=Yl();return(g||g===0)&&g!==r&&c(g),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:c,reset:f,getVelocity:d}},pl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},w0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},DM=function(){Xl=gn.core.globals().ScrollTrigger,Xl&&Xl.core&&RA()},NM=function(e){return gn=e||PM(),!rf&&gn&&typeof document<"u"&&document.body&&(xi=window,fs=document,ds=fs.documentElement,ba=fs.body,RM=[xi,fs,ds,ba],gn.utils.clamp,bM=gn.core.context||function(){},Zs="onpointerenter"in ba?"pointer":"mouse",CM=qt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=qt.eventTypes=("ontouchstart"in ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return LM=0},500),DM(),rf=1),rf};Vn.op=sn;it.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){rf||NM(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Xl||DM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,d=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,k=i.onChange,D=i.onToggleX,q=i.onToggleY,L=i.onHover,O=i.onHoverEnd,z=i.onMove,H=i.ignoreCheck,N=i.isNormalizer,I=i.onGestureStart,C=i.onGestureEnd,K=i.onWheel,Q=i.onEnable,$=i.onDisable,Z=i.onClick,ie=i.scrollSpeed,pe=i.capture,fe=i.allowClicks,De=i.lockAxis,Ne=i.onLockAxis;this.target=a=$n(a)||ds,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(ba).lineHeight)||22);var Oe,We,V,Xe,ge,Ue,ve,X=this,Be=0,b=0,A=i.passive||!c&&i.passive!==!1,B=Us(a,Vn),te=Us(a,sn),ee=B(),ne=te(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",de=jl(a),ce=a.ownerDocument||fs,Re=[0,0,0],Ve=[0,0,0],J=0,ut=function(){return J=Yl()},Pe=function(Me,Le){return(X.event=Me)&&p&&bA(Me.target,p)||Le&&_e&&Me.pointerType!=="touch"||H&&H(Me,Le)},Ye=function(){X._vx.reset(),X._vy.reset(),We.pause(),f&&f(X)},Ae=function(){var Me=X.deltaX=w0(Re),Le=X.deltaY=w0(Ve),se=Math.abs(Me)>=r,ze=Math.abs(Le)>=r;k&&(se||ze)&&k(X,Me,Le,Re,Ve),se&&(w&&X.deltaX>0&&w(X),T&&X.deltaX<0&&T(X),S&&S(X),D&&X.deltaX<0!=Be<0&&D(X),Be=X.deltaX,Re[0]=Re[1]=Re[2]=0),ze&&(P&&X.deltaY>0&&P(X),M&&X.deltaY<0&&M(X),E&&E(X),q&&X.deltaY<0!=b<0&&q(X),b=X.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(Xe||V)&&(z&&z(X),V&&(m&&V===1&&m(X),v&&v(X),V=0),Xe=!1),Ue&&!(Ue=!1)&&Ne&&Ne(X),ge&&(K(X),ge=!1),Oe=0},ye=function(Me,Le,se){Re[se]+=Me,Ve[se]+=Le,X._vx.update(Me),X._vy.update(Le),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},je=function(Me,Le){De&&!ve&&(X.axis=ve=Math.abs(Me)>Math.abs(Le)?"x":"y",Ue=!0),ve!=="y"&&(Re[2]+=Me,X._vx.update(Me,!0)),ve!=="x"&&(Ve[2]+=Le,X._vy.update(Le,!0)),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},Je=function(Me){if(!Pe(Me,1)){Me=pl(Me,c);var Le=Me.clientX,se=Me.clientY,ze=Le-X.x,Fe=se-X.y,$e=X.isDragging;X.x=Le,X.y=se,($e||(ze||Fe)&&(Math.abs(X.startX-Le)>=s||Math.abs(X.startY-se)>=s))&&(V||(V=$e?2:1),$e||(X.isDragging=!0),je(ze,Fe))}},pt=X.onPress=function(Ce){Pe(Ce,1)||Ce&&Ce.button||(X.axis=ve=null,We.pause(),X.isPressed=!0,Ce=pl(Ce),Be=b=0,X.startX=X.x=Ce.clientX,X.startY=X.y=Ce.clientY,X._vx.reset(),X._vy.reset(),In(N?a:ce,Zi[1],Je,A,!0),X.deltaX=X.deltaY=0,x&&x(X))},me=X.onRelease=function(Ce){if(!Pe(Ce,1)){Un(N?a:ce,Zi[1],Je,!0);var Me=!isNaN(X.y-X.startY),Le=X.isDragging,se=Le&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),ze=pl(Ce);!se&&Me&&(X._vx.reset(),X._vy.reset(),c&&fe&&gn.delayedCall(.08,function(){if(Yl()-J>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ce.createEvent){var Fe=ce.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,xi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(Fe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&Le&&!N&&We.restart(!0),V&&Ae(),h&&Le&&h(X),y&&y(X,se)}},oe=function(Me){return Me.touches&&Me.touches.length>1&&(X.isGesturing=!0)&&I(Me,X.isDragging)},U=function(){return(X.isGesturing=!1)||C(X)},ae=function(Me){if(!Pe(Me)){var Le=B(),se=te();ye((Le-ee)*ie,(se-ne)*ie,1),ee=Le,ne=se,f&&We.restart(!0)}},le=function(Me){if(!Pe(Me)){Me=pl(Me,c),K&&(ge=!0);var Le=(Me.deltaMode===1?l:Me.deltaMode===2?xi.innerHeight:1)*g;ye(Me.deltaX*Le,Me.deltaY*Le,0),f&&!N&&We.restart(!0)}},ke=function(Me){if(!Pe(Me)){var Le=Me.clientX,se=Me.clientY,ze=Le-X.x,Fe=se-X.y;X.x=Le,X.y=se,Xe=!0,f&&We.restart(!0),(ze||Fe)&&je(ze,Fe)}},Ie=function(Me){X.event=Me,L(X)},ot=function(Me){X.event=Me,O(X)},dt=function(Me){return Pe(Me)||pl(Me,c)&&Z(X)};We=X._dc=gn.delayedCall(d||.25,Ye).pause(),X.deltaX=X.deltaY=0,X._vx=im(0,50,!0),X._vy=im(0,50,!0),X.scrollX=B,X.scrollY=te,X.isDragging=X.isGesturing=X.isPressed=!1,bM(this),X.enable=function(Ce){return X.isEnabled||(In(de?ce:a,"scroll",nm),o.indexOf("scroll")>=0&&In(de?ce:a,"scroll",ae,A,pe),o.indexOf("wheel")>=0&&In(a,"wheel",le,A,pe),(o.indexOf("touch")>=0&&CM||o.indexOf("pointer")>=0)&&(In(a,Zi[0],pt,A,pe),In(ce,Zi[2],me),In(ce,Zi[3],me),fe&&In(a,"click",ut,!0,!0),Z&&In(a,"click",dt),I&&In(ce,"gesturestart",oe),C&&In(ce,"gestureend",U),L&&In(a,Zs+"enter",Ie),O&&In(a,Zs+"leave",ot),z&&In(a,Zs+"move",ke)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Xe=V=!1,X._vx.reset(),X._vy.reset(),ee=B(),ne=te(),Ce&&Ce.type&&pt(Ce),Q&&Q(X)),X},X.disable=function(){X.isEnabled&&(ga.filter(function(Ce){return Ce!==X&&jl(Ce.target)}).length||Un(de?ce:a,"scroll",nm),X.isPressed&&(X._vx.reset(),X._vy.reset(),Un(N?a:ce,Zi[1],Je,!0)),Un(de?ce:a,"scroll",ae,pe),Un(a,"wheel",le,pe),Un(a,Zi[0],pt,pe),Un(ce,Zi[2],me),Un(ce,Zi[3],me),Un(a,"click",ut,!0),Un(a,"click",dt),Un(ce,"gesturestart",oe),Un(ce,"gestureend",U),Un(a,Zs+"enter",Ie),Un(a,Zs+"leave",ot),Un(a,Zs+"move",ke),X.isEnabled=X.isPressed=X.isDragging=!1,$&&$(X))},X.kill=X.revert=function(){X.disable();var Ce=ga.indexOf(X);Ce>=0&&ga.splice(Ce,1),Or===X&&(Or=0)},ga.push(X),N&&jl(a)&&(Or=X),X.enable(_)},CA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.14.2";qt.create=function(n){return new qt(n)};qt.register=NM;qt.getAll=function(){return ga.slice()};qt.getById=function(n){return ga.filter(function(e){return e.vars.id===n})[0]};PM()&&gn.registerPlugin(qt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ta,tt,wt,_i,mt,I_,Vf,Au,ql,Rl,ac,An,vd,rm,zn,A0,C0,na,UM,lh,IM,Fn,sm,OM,FM,ts,om,O_,Pa,F_,$l,am,uh,lc=1,Cn=Date.now,ch=Cn(),Wi=0,bl=0,R0=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},b0=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},PA=function n(){return bl&&requestAnimationFrame(n)},P0=function(){return vd=1},L0=function(){return vd=0},fr=function(e){return e},Pl=function(e){return Math.round(e*1e5)/1e5||0},kM=function(){return typeof window<"u"},zM=function(){return Ee||kM()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Ao=function(e){return!!~I_.indexOf(e)},BM=function(e){return(e==="Height"?F_:tt["inner"+e])||_i["client"+e]||mt["client"+e]},HM=function(e){return ws(e,"getBoundingClientRect")||(Ao(e)?function(){return uf.width=tt.innerWidth,uf.height=F_,uf}:function(){return Dr(e)})},LA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ws(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?BM(s):e["client"+s])||0}},DA=function(e,t){return!t||~xr.indexOf(e)?HM(e):function(){return uf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ws(e,i))?o()-HM(e)()[s]:Ao(e)?(_i[i]||mt[i])-BM(r):e[i]-e["offset"+r])},uc=function(e,t){for(var i=0;i<na.length;i+=3)(!t||~t.indexOf(na[i+1]))&&e(na[i],na[i+1],na[i+2])},pi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Ll=function(e){return typeof e=="number"},Qs=function(e){return typeof e=="object"},ml=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},fh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Oo=Math.abs,GM="left",VM="top",k_="right",z_="bottom",mo="width",_o="height",Kl="Right",Zl="Left",Ql="Top",Jl="Bottom",Zt="padding",Oi="margin",ja="Width",B_="Height",nn="px",Fi=function(e){return tt.getComputedStyle(e)},NA=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},D0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Dr=function(e,t){var i=t&&Fi(e)[rm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Wf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},WM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},UA=function(e){return function(t){return Ee.utils.snap(WM(e),t)}},H_=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},IA=function(e){return function(t,i){return H_(WM(e))(t,i.direction)}},cc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},fc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},N0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dc={toggleActions:"play",anticipatePin:0},Xf={top:0,left:0,center:.5,bottom:1,right:1},sf=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Xf?Xf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,g=wt.createElement("div"),_=Ao(i)||ws(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?mt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===sn?k_:z_)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],of(g,0,r,v),g},of=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+ja]=1,s["border"+a+ja]=0,s[i.p]=t+"px",Ee.set(e,s)},Qe=[],lm={},Cu,U0=function(){return Cn()-Wi>34&&(Cu||(Cu=requestAnimationFrame(Br)))},Fo=function(){(!Fn||!Fn.isPressed||Fn.startX>mt.clientWidth)&&(it.cache++,Fn?Cu||(Cu=requestAnimationFrame(Br)):Br(),Wi||Ro("scrollStart"),Wi=Cn())},dh=function(){FM=tt.innerWidth,OM=tt.innerHeight},Dl=function(e){it.cache++,(e===!0||!An&&!IM&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!sm||FM!==tt.innerWidth||Math.abs(tt.innerHeight-OM)>tt.innerHeight*.25))&&Vf.restart(!0)},Co={},OA=[],XM=function n(){return cn(rt,"scrollEnd",n)||ao(!0)},Ro=function(e){return Co[e]&&Co[e].map(function(t){return t()})||OA},di=[],YM=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},jM=function(){return it.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},G_=function(e,t){var i;for(zn=0;zn<Qe.length;zn++)i=Qe[zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));$l=!0,t&&YM(t),t||Ro("revert")},qM=function(e,t){it.cache++,(t||!Bn)&&it.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(tt.history.scrollRestoration=O_=e)},Bn,go=0,I0,FA=function(){if(I0!==go){var e=I0=go;requestAnimationFrame(function(){return e===go&&ao(!0)})}},$M=function(){mt.appendChild(Pa),F_=!Fn&&Pa.offsetHeight||tt.innerHeight,mt.removeChild(Pa)},O0=function(e){return Au(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ao=function(e,t){if(_i=wt.documentElement,mt=wt.body,I_=[tt,wt,_i,mt],Wi&&!e&&!$l){fn(rt,"scrollEnd",XM);return}$M(),Bn=rt.isRefreshing=!0,$l||jM();var i=Ro("refreshInit");UM&&rt.sort(),t||G_(),it.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),$l=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),am=1,O0(!0),Qe.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),O0(!1),am=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),qM(O_,1),Vf.pause(),go++,Bn=2,Br(2),Qe.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Bn=rt.isRefreshing=!1,Ro("refresh")},um=0,af=1,eu,Br=function(e){if(e===2||!Bn&&!$l){rt.isUpdating=!0,eu&&eu.update(0);var t=Qe.length,i=Cn(),r=i-ch>=50,s=t&&Qe[0].scroll();if(af=um>s?-1:1,Bn||(um=s),r&&(Wi&&!vd&&i-Wi>200&&(Wi=0,Ro("scrollEnd")),Rl=ch,ch=i),af<0){for(zn=t;zn-- >0;)Qe[zn]&&Qe[zn].update(0,r);af=1}else for(zn=0;zn<t;zn++)Qe[zn]&&Qe[zn].update(0,r);rt.isUpdating=!1}Cu=0},cm=[GM,VM,z_,k_,Oi+Jl,Oi+Kl,Oi+Ql,Oi+Zl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lf=cm.concat([mo,_o,"boxSizing","max"+ja,"max"+B_,"position",Oi,Zt,Zt+Ql,Zt+Kl,Zt+Jl,Zt+Zl]),kA=function(e,t,i){La(i);var r=e._gsap;if(r.spacerIsNative)La(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},hh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=cm.length,o=t.style,a=e.style,l;s--;)l=cm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[z_]=a[k_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[mo]=Wf(e,Vn)+nn,o[_o]=Wf(e,sn)+nn,o[Zt]=a[Oi]=a[VM]=a[GM]="0",La(r),a[mo]=a["max"+ja]=i[mo],a[_o]=a["max"+B_]=i[_o],a[Zt]=i[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},zA=/([A-Z])/g,La=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(zA,"-$1").toLowerCase())}},pc=function(e){for(var t=lf.length,i=e.style,r=[],s=0;s<t;s++)r.push(lf[s],i[lf[s]]);return r.t=e,r},BA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},uf={left:0,top:0},F0=function(e,t,i,r,s,o,a,l,u,c,f,d,p,g){Pn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?sf("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Ll(e))p&&(e=Ee.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&of(a,i,r,!0);else{Pn(t)&&(t=t(l));var x=(e||"0").split(" "),y,w,T,M;v=$n(t,l)||mt,y=Dr(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Dr(v),M?v.style.display=M:v.style.removeProperty("display")),w=sf(x[0],y[r.d]),T=sf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-T,a&&of(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,of(o,P,r,S&&P>20||!S&&(f?Math.max(mt[m],_i[m]):o.parentNode[m])<=P+1),f&&(u=Dr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&v&&(m=Dr(v),p.seek(d),h=Dr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*d),p&&p.seek(_),p?e:Math.round(e)},HA=/(webkit|moz|length|cssText|inset)/i,k0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!HA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},KM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},mc=function(e,t,i){var r={};r[t.p]="+="+i,Ee.set(e,r)},z0=function(e,t){var i=Us(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var d=o.tween,p=l.onComplete,g={};u=u||i();var _=KM(i,u,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Br()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=Ee.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),rt.isTouch&&fn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){ta||n.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),om(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bl){this.update=this.refresh=this.kill=fr;return}i=D0(pi(i)||Ll(i)||i.nodeType?{trigger:i}:i,dc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Vn:sn,k=!f&&f!==0,D=$n(i.scroller||tt),q=Ee.core.getCache(D),L=Ao(D),O=("pinType"in i?i.pinType:ws(D,"pinType")||L&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=k&&i.toggleActions.split(" "),N="markers"in i?i.markers:dc.markers,I=L?0:parseFloat(Fi(D)["border"+E.p2+ja])||0,C=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(C)},Q=LA(D,L,E),$=DA(D,L),Z=0,ie=0,pe=0,fe=Us(D,E),De,Ne,Oe,We,V,Xe,ge,Ue,ve,X,Be,b,A,B,te,ee,ne,_e,de,ce,Re,Ve,J,ut,Pe,Ye,Ae,ye,je,Je,pt,me,oe,U,ae,le,ke,Ie,ot;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=D,C.scroll=M?M.time.bind(M):fe,We=fe(),C.vars=i,r=r||i.animation,"refreshPriority"in i&&(UM=1,i.refreshPriority===-9999&&(eu=C)),q.tweenScroll=q.tweenScroll||{top:z0(D,sn),left:z0(D,Vn)},C.tweenTo=De=q.tweenScroll[E.p],C.scrubDuration=function(se){oe=Ll(se)&&se,oe?me?me.duration(se):me=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return h&&h(C)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(f),Je=0,l||(l=r.vars.id)),y&&((!Qs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in mt.style&&Ee.set(L?[mt,_i]:D,{scrollBehavior:"auto"}),it.forEach(function(se){return Pn(se)&&se.target===(L?wt.scrollingElement||_i:D)&&(se.smooth=!1)}),Oe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?UA(r):y.snapTo==="labelsDirectional"?IA(r):y.directional!==!1?function(se,ze){return H_(y.snapTo)(se,Cn()-ie<500?0:ze.direction)}:Ee.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=Qs(U)?ql(U.min,U.max):ql(U,U),ae=Ee.delayedCall(y.delay||oe/2||.1,function(){var se=fe(),ze=Cn()-ie<500,Fe=De.tween;if((ze||Math.abs(C.getVelocity())<10)&&!Fe&&!vd&&Z!==se){var $e=(se-Xe)/B,Ot=r&&!k?r.totalProgress():$e,et=ze?0:(Ot-pt)/(Cn()-Rl)*1e3||0,Et=Ee.utils.clamp(-$e,1-$e,Oo(et/2)*et/.185),en=$e+(y.inertia===!1?0:Et),Ct,Tt,_t=y,ui=_t.onStart,R=_t.onInterrupt,F=_t.onComplete;if(Ct=Oe(en,C),Ll(Ct)||(Ct=en),Tt=Math.max(0,Math.round(Xe+Ct*B)),se<=ge&&se>=Xe&&Tt!==se){if(Fe&&!Fe._initted&&Fe.data<=Oo(Tt-se))return;y.inertia===!1&&(Et=Ct-$e),De(Tt,{duration:U(Oo(Math.max(Oo(en-Ot),Oo(Ct-Ot))*.185/et/.05||0)),ease:y.ease||"power3",data:Oo(Tt-se),onInterrupt:function(){return ae.restart(!0)&&R&&R(C)},onComplete:function(){C.update(),Z=fe(),r&&!k&&(me?me.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),Je=pt=r&&!k?r.totalProgress():C.progress,v&&v(C),F&&F(C)}},se,Et*B,Tt-se-Et*B),ui&&ui(C,De.tween)}}else C.isActive&&Z!==se&&ae.restart(!0)}).pause()),l&&(lm[l]=C),d=C.trigger=$n(d||p!==!0&&p),ot=d&&d._gsap&&d._gsap.stRevert,ot&&(ot=ot(C)),p=p===!0?d:$n(p),pi(a)&&(a={targets:d,className:a}),p&&(g===!1||g===Oi||(g=!g&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Zt),C.pin=p,Ne=Ee.core.getCache(p),Ne.spacer?te=Ne.pinState:(T&&(T=$n(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ne.spacerIsNative=!!T,T&&(Ne.spacerState=pc(T))),Ne.spacer=_e=T||wt.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),Ne.pinState=te=pc(p)),i.force3D!==!1&&Ee.set(p,{force3D:!0}),C.spacer=_e=Ne.spacer,je=Fi(p),ut=je[g+E.os2],ce=Ee.getProperty(p),Re=Ee.quickSetter(p,E.a,nn),hh(p,_e,je),ne=pc(p)),N){b=Qs(N)?D0(N,N0):N0,X=hc("scroller-start",l,D,E,b,0),Be=hc("scroller-end",l,D,E,b,0,X),de=X["offset"+E.op.d2];var dt=$n(ws(D,"content")||D);Ue=this.markerStart=hc("start",l,dt,E,b,de,0,M),ve=this.markerEnd=hc("end",l,dt,E,b,de,0,M),M&&(Ie=Ee.quickSetter([Ue,ve],E.a,nn)),!O&&!(xr.length&&ws(D,"fixedMarkers")===!0)&&(NA(L?mt:D),Ee.set([X,Be],{force3D:!0}),Ye=Ee.quickSetter(X,E.a,nn),ye=Ee.quickSetter(Be,E.a,nn))}if(M){var Ce=M.vars.onUpdate,Me=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){C.update(0,0,1),Ce&&Ce.apply(M,Me||[])})}if(C.previous=function(){return Qe[Qe.indexOf(C)-1]},C.next=function(){return Qe[Qe.indexOf(C)+1]},C.revert=function(se,ze){if(!ze)return C.kill(!0);var Fe=se!==!1||!C.enabled,$e=An;Fe!==C.isReverted&&(Fe&&(le=Math.max(fe(),C.scroll.rec||0),pe=C.progress,ke=r&&r.progress()),Ue&&[Ue,ve,X,Be].forEach(function(Ot){return Ot.style.display=Fe?"none":"block"}),Fe&&(An=C,C.update(Fe)),p&&(!w||!C.isActive)&&(Fe?kA(p,_e,te):hh(p,_e,Fi(p),Pe)),Fe||C.update(Fe),An=$e,C.isReverted=Fe)},C.refresh=function(se,ze,Fe,$e){if(!((An||!C.enabled)&&!ze)){if(p&&se&&Wi){fn(n,"scrollEnd",XM);return}!Bn&&K&&K(C),An=C,De.tween&&!Fe&&(De.tween.kill(),De.tween=0),me&&me.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ot=Q(),et=$(),Et=M?M.duration():_r(D,E),en=B<=.01||!B,Ct=0,Tt=$e||0,_t=Qs(Fe)?Fe.end:i.end,ui=i.endTrigger||d,R=Qs(Fe)?Fe.start:i.start||(i.start===0||!d?0:p?"0 0":"0 100%"),F=C.pinnedContainer=i.pinnedContainer&&$n(i.pinnedContainer,C),j=d&&Math.max(0,Qe.indexOf(C))||0,Y=j,G,ue,Te,He,we,be,Ge,Ke,Lt,tn,gt,Nn,xt;for(N&&Qs(Fe)&&(Nn=Ee.getProperty(X,E.p),xt=Ee.getProperty(Be,E.p));Y-- >0;)be=Qe[Y],be.end||be.refresh(0,1)||(An=C),Ge=be.pin,Ge&&(Ge===d||Ge===p||Ge===F)&&!be.isReverted&&(tn||(tn=[]),tn.unshift(be),be.revert(!0,!0)),be!==Qe[Y]&&(j--,Y--);for(Pn(R)&&(R=R(C)),R=R0(R,"start",C),Xe=F0(R,d,Ot,E,fe(),Ue,X,C,et,I,O,Et,M,C._startClamp&&"_startClamp")||(p?-.001:0),Pn(_t)&&(_t=_t(C)),pi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(pi(R)?R.split(" ")[0]:"")+_t:(Ct=sf(_t.substr(2),Ot),_t=pi(R)?R:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Xe):Xe)+Ct,ui=d)),_t=R0(_t,"end",C),ge=Math.max(Xe,F0(_t||(ui?"100% 0":Et),ui,Ot,E,fe()+Ct,ve,Be,C,et,I,O,Et,M,C._endClamp&&"_endClamp"))||-.001,Ct=0,Y=j;Y--;)be=Qe[Y]||{},Ge=be.pin,Ge&&be.start-be._pinPush<=Xe&&!M&&be.end>0&&(G=be.end-(C._startClamp?Math.max(0,be.start):be.start),(Ge===d&&be.start-be._pinPush<Xe||Ge===F)&&isNaN(R)&&(Ct+=G*(1-be.progress)),Ge===p&&(Tt+=G));if(Xe+=Ct,ge+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Bn&&(C._endClamp=ge||-.001,ge=Math.min(ge,_r(D,E))),B=ge-Xe||(Xe-=.01)&&.001,en&&(pe=Ee.utils.clamp(0,1,Ee.utils.normalize(Xe,ge,le))),C._pinPush=Tt,Ue&&Ct&&(G={},G[E.a]="+="+Ct,F&&(G[E.p]="-="+fe()),Ee.set([Ue,ve],G)),p&&!(am&&C.end>=_r(D,E)))G=Fi(p),He=E===sn,Te=fe(),Ve=parseFloat(ce(E.a))+Tt,!Et&&ge>1&&(gt=(L?wt.scrollingElement||_i:D).style,gt={style:gt,value:gt["overflow"+E.a.toUpperCase()]},L&&Fi(mt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+E.a.toUpperCase()]="scroll")),hh(p,_e,G),ne=pc(p),ue=Dr(p,!0),Ke=O&&Us(D,He?Vn:sn)(),g?(Pe=[g+E.os2,B+Tt+nn],Pe.t=_e,Y=g===Zt?Wf(p,E)+B+Tt:0,Y&&(Pe.push(E.d,Y+nn),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+nn)),La(Pe),F&&Qe.forEach(function(qe){qe.pin===F&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),O&&fe(le)):(Y=Wf(p,E),Y&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+nn)),O&&(we={top:ue.top+(He?Te-Xe:Ke)+nn,left:ue.left+(He?Ke:Te-Xe)+nn,boxSizing:"border-box",position:"fixed"},we[mo]=we["max"+ja]=Math.ceil(ue.width)+nn,we[_o]=we["max"+B_]=Math.ceil(ue.height)+nn,we[Oi]=we[Oi+Ql]=we[Oi+Kl]=we[Oi+Jl]=we[Oi+Zl]="0",we[Zt]=G[Zt],we[Zt+Ql]=G[Zt+Ql],we[Zt+Kl]=G[Zt+Kl],we[Zt+Jl]=G[Zt+Jl],we[Zt+Zl]=G[Zt+Zl],ee=BA(te,we,w),Bn&&fe(0)),r?(Lt=r._initted,lh(1),r.render(r.duration(),!0,!0),J=ce(E.a)-Ve+B+Tt,Ae=Math.abs(B-J)>1,O&&Ae&&ee.splice(ee.length-2,2),r.render(0,!0,!0),Lt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),lh(0)):J=B,gt&&(gt.value?gt.style["overflow"+E.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+E.a));else if(d&&fe()&&!M)for(ue=d.parentNode;ue&&ue!==mt;)ue._pinOffset&&(Xe-=ue._pinOffset,ge-=ue._pinOffset),ue=ue.parentNode;tn&&tn.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Xe,C.end=ge,We=V=Bn?le:fe(),!M&&!Bn&&(We<le&&fe(le),C.scroll.rec=0),C.revert(!1,!0),ie=Cn(),ae&&(Z=-1,ae.restart(!0)),An=0,r&&k&&(r._initted||ke)&&r.progress()!==ke&&r.progress(ke||0,!0).render(r.time(),!0,!0),(en||pe!==C.progress||M||_||r&&!r._initted)&&(r&&!k&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Xe<-.001&&!pe?Ee.utils.normalize(Xe,ge,0):pe,!0),C.progress=en||(We-Xe)/B===pe?0:pe),p&&g&&(_e._pinOffset=Math.round(C.progress*J)),me&&me.invalidate(),isNaN(Nn)||(Nn-=Ee.getProperty(X,E.p),xt-=Ee.getProperty(Be,E.p),mc(X,E,Nn),mc(Ue,E,Nn-($e||0)),mc(Be,E,xt),mc(ve,E,xt-($e||0))),en&&!Bn&&C.update(),c&&!Bn&&!A&&(A=!0,c(C),A=!1)}},C.getVelocity=function(){return(fe()-V)/(Cn()-Rl)*1e3||0},C.endAnimation=function(){ml(C.callbackAnimation),r&&(me?me.progress(1):r.paused()?k||ml(r,C.direction<0,1):ml(r,r.reversed()))},C.labelToScroll=function(se){return r&&r.labels&&(Xe||C.refresh()||Xe)+r.labels[se]/r.duration()*B||0},C.getTrailing=function(se){var ze=Qe.indexOf(C),Fe=C.direction>0?Qe.slice(0,ze).reverse():Qe.slice(ze+1);return(pi(se)?Fe.filter(function($e){return $e.vars.preventOverlaps===se}):Fe).filter(function($e){return C.direction>0?$e.end<=Xe:$e.start>=ge})},C.update=function(se,ze,Fe){if(!(M&&!Fe&&!se)){var $e=Bn===!0?le:C.scroll(),Ot=se?0:($e-Xe)/B,et=Ot<0?0:Ot>1?1:Ot||0,Et=C.progress,en,Ct,Tt,_t,ui,R,F,j;if(ze&&(V=We,We=M?fe():$e,y&&(pt=Je,Je=r&&!k?r.totalProgress():et)),m&&p&&!An&&!lc&&Wi&&(!et&&Xe<$e+($e-V)/(Cn()-Rl)*m?et=1e-4:et===1&&ge>$e+($e-V)/(Cn()-Rl)*m&&(et=.9999)),et!==Et&&C.enabled){if(en=C.isActive=!!et&&et<1,Ct=!!Et&&Et<1,R=en!==Ct,ui=R||!!et!=!!Et,C.direction=et>Et?1:-1,C.progress=et,ui&&!An&&(Tt=et&&!Et?0:et===1?1:Et===1?2:3,k&&(_t=!R&&H[Tt+1]!=="none"&&H[Tt+1]||H[Tt],j=r&&(_t==="complete"||_t==="reset"||_t in r))),S&&(R||j)&&(j||f||!r)&&(Pn(S)?S(C):C.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),k||(me&&!An&&!lc?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",et,r._tTime/r._tDur):(me.vars.totalProgress=et,me.invalidate().restart())):r&&r.totalProgress(et,!!(An&&(ie||se)))),p){if(se&&g&&(_e.style[g+E.os2]=ut),!O)Re(Pl(Ve+J*et));else if(ui){if(F=!se&&et>Et&&ge+1>$e&&$e+1>=_r(D,E),w)if(!se&&(en||F)){var Y=Dr(p,!0),G=$e-Xe;k0(p,mt,Y.top+(E===sn?G:0)+nn,Y.left+(E===sn?0:G)+nn)}else k0(p,_e);La(en||F?ee:ne),Ae&&et<1&&en||Re(Ve+(et===1&&!F?J:0))}}y&&!De.tween&&!An&&!lc&&ae.restart(!0),a&&(R||x&&et&&(et<1||!uh))&&Au(a.targets).forEach(function(Te){return Te.classList[en||x?"add":"remove"](a.className)}),o&&!k&&!se&&o(C),ui&&!An?(k&&(j&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),o&&o(C)),(R||!uh)&&(u&&R&&fh(C,u),z[Tt]&&fh(C,z[Tt]),x&&(et===1?C.kill(!1,1):z[Tt]=0),R||(Tt=et===1?1:3,z[Tt]&&fh(C,z[Tt]))),P&&!en&&Math.abs(C.getVelocity())>(Ll(P)?P:2500)&&(ml(C.callbackAnimation),me?me.progress(1):ml(r,_t==="reverse"?1:!et,1))):k&&o&&!An&&o(C)}if(ye){var ue=M?$e/M.duration()*(M._caScrollDist||0):$e;Ye(ue+(X._isFlipped?1:0)),ye(ue)}Ie&&Ie(-$e/M.duration()*(M._caScrollDist||0))}},C.enable=function(se,ze){C.enabled||(C.enabled=!0,fn(D,"resize",Dl),L||fn(D,"scroll",Fo),K&&fn(n,"refreshInit",K),se!==!1&&(C.progress=pe=0,We=V=Z=fe()),ze!==!1&&C.refresh())},C.getTween=function(se){return se&&De?De.tween:me},C.setPositions=function(se,ze,Fe,$e){if(M){var Ot=M.scrollTrigger,et=M.duration(),Et=Ot.end-Ot.start;se=Ot.start+Et*se/et,ze=Ot.start+Et*ze/et}C.refresh(!1,!1,{start:b0(se,Fe&&!!C._startClamp),end:b0(ze,Fe&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(se){if(Pe&&se){var ze=Pe.indexOf(E.d)+1;Pe[ze]=parseFloat(Pe[ze])+se+nn,Pe[1]=parseFloat(Pe[1])+se+nn,La(Pe)}},C.disable=function(se,ze){if(se!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,ze||me&&me.pause(),le=0,Ne&&(Ne.uncache=1),K&&cn(n,"refreshInit",K),ae&&(ae.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var Fe=Qe.length;Fe--;)if(Qe[Fe].scroller===D&&Qe[Fe]!==C)return;cn(D,"resize",Dl),L||cn(D,"scroll",Fo)}},C.kill=function(se,ze){C.disable(se,ze),me&&!ze&&me.kill(),l&&delete lm[l];var Fe=Qe.indexOf(C);Fe>=0&&Qe.splice(Fe,1),Fe===zn&&af>0&&zn--,Fe=0,Qe.forEach(function($e){return $e.scroller===C.scroller&&(Fe=1)}),Fe||Bn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),ze||r.kill()),Ue&&[Ue,ve,X,Be].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),eu===C&&(eu=0),p&&(Ne&&(Ne.uncache=1),Fe=0,Qe.forEach(function($e){return $e.pin===p&&Fe++}),Fe||(Ne.spacer=0)),i.onKill&&i.onKill(C)},Qe.push(C),C.enable(!1,!1),ot&&ot(C),r&&r.add&&!B){var Le=C.update;C.update=function(){C.update=Le,it.cache++,Xe||ge||C.refresh()},Ee.delayedCall(.01,C.update),B=.01,Xe=ge=0}else C.refresh();p&&FA()},n.register=function(i){return ta||(Ee=i||zM(),kM()&&window.document&&n.enable(),ta=bl),ta},n.defaults=function(i){if(i)for(var r in i)dc[r]=i[r];return dc},n.disable=function(i,r){bl=0,Qe.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(tt,"wheel",Fo),cn(wt,"scroll",Fo),clearInterval(ac),cn(wt,"touchcancel",fr),cn(mt,"touchstart",fr),cc(cn,wt,"pointerdown,touchstart,mousedown",P0),cc(cn,wt,"pointerup,touchend,mouseup",L0),Vf.kill(),uc(cn);for(var s=0;s<it.length;s+=3)fc(cn,it[s],it[s+1]),fc(cn,it[s],it[s+2])},n.enable=function(){if(tt=window,wt=document,_i=wt.documentElement,mt=wt.body,Ee&&(Au=Ee.utils.toArray,ql=Ee.utils.clamp,om=Ee.core.context||fr,lh=Ee.core.suppressOverwrites||fr,O_=tt.history.scrollRestoration||"auto",um=tt.pageYOffset||0,Ee.core.globals("ScrollTrigger",n),mt)){bl=1,Pa=document.createElement("div"),Pa.style.height="100vh",Pa.style.position="absolute",$M(),PA(),qt.register(Ee),n.isTouch=qt.isTouch,ts=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sm=qt.isTouch===1,fn(tt,"wheel",Fo),I_=[tt,wt,_i,mt],Ee.matchMedia?(n.matchMedia=function(u){var c=Ee.matchMedia(),f;for(f in u)c.add(f,u[f]);return c},Ee.addEventListener("matchMediaInit",function(){jM(),G_()}),Ee.addEventListener("matchMediaRevert",function(){return YM()}),Ee.addEventListener("matchMedia",function(){ao(0,1),Ro("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return dh(),dh})):console.warn("Requires GSAP 3.11.0 or later"),dh(),fn(wt,"scroll",Fo);var i=mt.hasAttribute("style"),r=mt.style,s=r.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Dr(mt),sn.m=Math.round(a.top+sn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(mt.setAttribute("style",""),mt.removeAttribute("style")),ac=setInterval(U0,250),Ee.delayedCall(.5,function(){return lc=0}),fn(wt,"touchcancel",fr),fn(mt,"touchstart",fr),cc(fn,wt,"pointerdown,touchstart,mousedown",P0),cc(fn,wt,"pointerup,touchend,mouseup",L0),rm=Ee.utils.checkPrefix("transform"),lf.push(rm),ta=Cn(),Vf=Ee.delayedCall(.2,ao).pause(),na=[wt,"visibilitychange",function(){var u=tt.innerWidth,c=tt.innerHeight;wt.hidden?(A0=u,C0=c):(A0!==u||C0!==c)&&Dl()},wt,"DOMContentLoaded",ao,tt,"load",ao,tt,"resize",Dl],uc(fn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)fc(cn,it[l],it[l+1]),fc(cn,it[l],it[l+2])}},n.config=function(i){"limitCallbacks"in i&&(uh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(ac)||(ac=r)&&setInterval(U0,r),"ignoreMobileResize"in i&&(sm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(uc(cn)||uc(fn,i.autoRefreshEvents||"none"),IM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=$n(i),o=it.indexOf(s),a=Ao(s);~o&&it.splice(o,a?6:2),r&&(a?xr.unshift(tt,r,mt,r,_i,r):xr.unshift(s,r))},n.clearMatchMedia=function(i){Qe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?$n(i):i).getBoundingClientRect(),a=o[s?mo:_o]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=$n(i));var o=i.getBoundingClientRect(),a=o[s?mo:_o],l=r==null?a/2:r in Xf?Xf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},n.killAll=function(i){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Co.killAll||[];Co={},r.forEach(function(s){return s()})}},n}();rt.version="3.14.2";rt.saveStyles=function(n){return n?Au(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),om())}}):di};rt.revert=function(n,e){return G_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?Dl(!0):(ta||rt.register())&&ao(!0)};rt.update=function(n){return++it.cache&&Br(n===!0?2:0)};rt.clearScrollMemory=qM;rt.maxScroll=function(n,e){return _r(n,e?Vn:sn)};rt.getScrollFunc=function(n,e){return Us($n(n),e?Vn:sn)};rt.getById=function(n){return lm[n]};rt.getAll=function(){return Qe.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Wi};rt.snapDirectional=H_;rt.addEventListener=function(n,e){var t=Co[n]||(Co[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Co[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],d=[],p=Ee.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),fn(rt,"refresh",function(){return s=e.batchMax()})),Au(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var B0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ph=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===_i&&n(mt,t)},_c={auto:1,scroll:1},GA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_c[(l=Fi(s)).overflowY]||_c[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ao(s)&&(_c[(l=Fi(s)).overflowY]||_c[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ZM=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&GA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(wt,qt.eventTypes[0],G0,!1,!0)},onDisable:function(){return cn(wt,qt.eventTypes[0],G0,!0)}})},VA=/(input|label|select|textarea)/i,H0,G0=function(e){var t=VA.test(e.target.tagName);(t||H0)&&(e._gsapAllow=!0,H0=t)},WA=function(e){Qs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=$n(e.target)||_i,c=Ee.core.globals().ScrollSmoother,f=c&&c.get(),d=ts&&(e.content&&$n(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Us(u,sn),g=Us(u,Vn),_=1,m=(qt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,h=0,v=Pn(r)?function(){return r(a)}:function(){return r||2.8},x,y,w=ZM(u,e.type,!0,s),T=function(){return y=!1},M=fr,P=fr,S=function(){l=_r(u,sn),P=ql(ts?1:0,l),i&&(M=ql(0,_r(u,Vn))),x=go},E=function(){d._gsap.y=Pl(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},k=function(){if(y){requestAnimationFrame(T);var N=Pl(a.deltaY/2),I=P(p.v-N);if(d&&I!==p.v+p.offset){p.offset=I-p.v;var C=Pl((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",p.cacheID=it.cache,Br()}return!0}p.offset&&E(),y=!0},D,q,L,O,z=function(){S(),D.isActive()&&D.vars.scrollY>l&&(p()>l?D.progress(1)&&p(l):D.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return ts&&H.type==="touchmove"&&k()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=_;_=Pl((tt.visualViewport&&tt.visualViewport.scale||1)/m),D.pause(),H!==_&&ph(u,_>1.01?!0:i?!1:"x"),q=g(),L=p(),S(),x=go},e.onRelease=e.onGestureStart=function(H,N){if(p.offset&&E(),!N)O.restart(!0);else{it.cache++;var I=v(),C,K;i&&(C=g(),K=C+I*.05*-H.velocityX/.227,I*=B0(g,C,K,_r(u,Vn)),D.vars.scrollX=M(K)),C=p(),K=C+I*.05*-H.velocityY/.227,I*=B0(p,C,K,_r(u,sn)),D.vars.scrollY=P(K),D.invalidate().duration(I).play(.01),(ts&&D.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:z,duration:I})}o&&o(H)},e.onWheel=function(){D._ts&&D.pause(),Cn()-h>1e3&&(x=0,h=Cn())},e.onChange=function(H,N,I,C,K){if(go!==x&&S(),N&&i&&g(M(C[2]===N?q+(H.startX-H.x):g()+N-C[1])),I){p.offset&&E();var Q=K[2]===I,$=Q?L+H.startY-H.y:p()+I-K[1],Z=P($);Q&&$!==Z&&(L+=Z-$),p(Z)}(I||N)&&Br()},e.onEnable=function(){ph(u,i?!1:"x"),rt.addEventListener("refresh",z),fn(tt,"resize",z),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){ph(u,!0),cn(tt,"resize",z),rt.removeEventListener("refresh",z),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=ts,ts&&!p()&&p(1),ts&&Ee.ticker.add(fr),O=a._dc,D=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:KM(p,p(),function(){return D.pause()})},onUpdate:Br,onComplete:O.vars.onComplete}),a};rt.sort=function(n){if(Pn(n))return Qe.sort(n);var e=tt.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new qt(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof qt?n:WA(n);return Fn&&Fn.target===e.target&&Fn.kill(),Ao(e.target)&&(Fn=e),e};rt.core={_getVelocityProp:im,_inputObserver:ZM,_scrollers:it,_proxies:xr,bridge:{ss:function(){Wi||Ro("scrollStart"),Wi=Cn()},ref:function(){return An}}};zM()&&Ee.registerPlugin(rt);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const V_="160",XA=0,V0=1,YA=2,QM=1,jA=2,Cr=3,Is=0,oi=1,Nr=2,As=0,Da=1,Yf=2,W0=3,X0=4,qA=5,to=100,$A=101,KA=102,Y0=103,j0=104,ZA=200,QA=201,JA=202,eC=203,fm=204,dm=205,tC=206,nC=207,iC=208,rC=209,sC=210,oC=211,aC=212,lC=213,uC=214,cC=0,fC=1,dC=2,jf=3,hC=4,pC=5,mC=6,_C=7,JM=0,gC=1,vC=2,Cs=0,xC=1,yC=2,SC=3,MC=4,EC=5,TC=6,eE=300,qa=301,$a=302,hm=303,pm=304,xd=306,Ru=1e3,nr=1001,mm=1002,Hn=1003,q0=1004,mh=1005,ki=1006,wC=1007,bu=1008,Rs=1009,AC=1010,CC=1011,W_=1012,tE=1013,hs=1014,ps=1015,Pu=1016,nE=1017,iE=1018,vo=1020,RC=1021,ir=1023,bC=1024,PC=1025,xo=1026,Ka=1027,LC=1028,rE=1029,DC=1030,sE=1031,oE=1033,_h=33776,gh=33777,vh=33778,xh=33779,$0=35840,K0=35841,Z0=35842,Q0=35843,aE=36196,J0=37492,ev=37496,tv=37808,nv=37809,iv=37810,rv=37811,sv=37812,ov=37813,av=37814,lv=37815,uv=37816,cv=37817,fv=37818,dv=37819,hv=37820,pv=37821,yh=36492,mv=36494,_v=36495,NC=36283,gv=36284,vv=36285,xv=36286,lE=3e3,yo=3001,UC=3200,IC=3201,uE=0,OC=1,zi="",_n="srgb",jr="srgb-linear",X_="display-p3",yd="display-p3-linear",qf="linear",bt="srgb",$f="rec709",Kf="p3",ko=7680,yv=519,FC=512,kC=513,zC=514,cE=515,BC=516,HC=517,GC=518,VC=519,Sv=35044,Mv="300 es",_m=1035,Fr=2e3,Zf=2001;class tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,gm=180/Math.PI;function Fu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function WC(n,e){return(n%e+e)%e}function Mh(n,e,t){return(1-t)*n+t*e}function Ev(n){return(n&n-1)===0&&n!==0}function vm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _l(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,u){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*m+a*x+l*T,s[6]=o*h+a*y+l*M,s[1]=u*_+c*v+f*w,s[4]=u*m+c*x+f*T,s[7]=u*h+c*y+f*M,s[2]=d*_+p*v+g*w,s[5]=d*m+p*x+g*T,s[8]=d*h+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new nt;function fE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XC(){const n=Qf("canvas");return n.style.display="block",n}const Tv={};function tu(n){n in Tv||(Tv[n]=!0,console.warn(n))}const wv=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Av=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gc={[jr]:{transfer:qf,primaries:$f,toReference:n=>n,fromReference:n=>n},[_n]:{transfer:bt,primaries:$f,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yd]:{transfer:qf,primaries:Kf,toReference:n=>n.applyMatrix3(Av),fromReference:n=>n.applyMatrix3(wv)},[X_]:{transfer:bt,primaries:Kf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Av),fromReference:n=>n.applyMatrix3(wv).convertLinearToSRGB()}},YC=new Set([jr,yd]),yt={enabled:!0,_workingColorSpace:jr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=gc[e].toReference,r=gc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gc[n].primaries},getTransfer:function(n){return n===zi?qf:gc[n].transfer}};function Na(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Th(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zo;class dE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zo===void 0&&(zo=Qf("canvas")),zo.width=e.width,zo.height=e.height;const i=zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Na(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Na(t[i]/255)*255):t[i]=Na(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jC=0;class hE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=Fu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wh(r[o].image)):s.push(wh(r[o]))}else s=wh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qC=0;class ai extends tl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,i=nr,r=nr,s=ki,o=bu,a=ir,l=Rs,u=ai.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=Fu(),this.name="",this.source=new hE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(tu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===yo?_n:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?yo:lE}set encoding(e){tu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yo?_n:zi}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=eE;ai.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(h+1)/2,T=(c+d)/4,M=(f+_)/4,P=(g+m)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $C extends tl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(tu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yo?_n:zi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ai(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends $C{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pE extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KC extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ku{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||u!==p||c!==g){let m=1-a;const h=l*d+u*p+c*g+f*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,h*v);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*v;if(l=l*m+d*y,u=u*m+p*y,c=c*m+g*y,f=f*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*d,e[t+1]=l*g+c*d+u*f-a*p,e[t+2]=u*g+c*p+a*d-l*f,e[t+3]=c*g-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"YXZ":this._x=d*c*f+u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"ZXY":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f-d*p*g;break;case"ZYX":this._x=d*c*f-u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f+d*p*g;break;case"YZX":this._x=d*c*f+u*p*g,this._y=u*p*f+d*c*g,this._z=u*c*g-d*p*f,this._w=u*c*f-d*p*g;break;case"XZY":this._x=d*c*f-u*p*g,this._y=u*p*f-d*c*g,this._z=u*c*g+d*p*f,this._w=u*c*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ah.copy(this).projectOnVector(e),this.sub(Ah)}reflect(e){return this.sub(Ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new W,Cv=new ku;class zu{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),xc.subVectors(this.max,gl),Bo.subVectors(e.a,gl),Ho.subVectors(e.b,gl),Go.subVectors(e.c,gl),Kr.subVectors(Ho,Bo),Zr.subVectors(Go,Ho),Ws.subVectors(Bo,Go);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ws.z,Ws.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ws.z,0,-Ws.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ws.y,Ws.x,0];return!Ch(t,Bo,Ho,Go,xc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Bo,Ho,Go,xc))?!1:(yc.crossVectors(Kr,Zr),t=[yc.x,yc.y,yc.z],Ch(t,Bo,Ho,Go,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new W,new W,new W,new W,new W,new W,new W,new W],qi=new W,vc=new zu,Bo=new W,Ho=new W,Go=new W,Kr=new W,Zr=new W,Ws=new W,gl=new W,xc=new W,yc=new W,Xs=new W;function Ch(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xs.fromArray(n,s);const a=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),l=e.dot(Xs),u=t.dot(Xs),c=i.dot(Xs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ZC=new zu,vl=new W,Rh=new W;class Sd{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ZC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const t=vl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Rh)),this.expandByPoint(vl.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new W,bh=new W,Sc=new W,Qr=new W,Ph=new W,Mc=new W,Lh=new W;class mE{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bh.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(bh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sc),a=Qr.dot(this.direction),l=-Qr.dot(Sc),u=Qr.lengthSq(),c=Math.abs(1-o*o);let f,d,p,g;if(c>0)if(f=o*l-a,d=o*a-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bh).addScaledVector(Sc,d),p}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),r=Er.dot(Er)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,r,s){Ph.subVectors(t,e),Mc.subVectors(i,e),Lh.crossVectors(Ph,Mc);let o=this.direction.dot(Lh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(Mc.crossVectors(Qr,Mc));if(l<0)return null;const u=a*this.direction.dot(Ph.cross(Qr));if(u<0||l+u>o)return null;const c=-a*Qr.dot(Lh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vo.setFromMatrixColumn(e,0).length(),s=1/Vo.setFromMatrixColumn(e,1).length(),o=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,g=u*c,_=u*f;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,g=u*c,_=u*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+_,t[1]=l*f,t[5]=_*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QC,e,JC)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Jr.crossVectors(i,ci),Jr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Jr.crossVectors(i,ci)),Jr.normalize(),Ec.crossVectors(ci,Jr),r[0]=Jr.x,r[4]=Ec.x,r[8]=ci.x,r[1]=Jr.y,r[5]=Ec.y,r[9]=ci.y,r[2]=Jr.z,r[6]=Ec.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],w=i[15],T=r[0],M=r[4],P=r[8],S=r[12],E=r[1],k=r[5],D=r[9],q=r[13],L=r[2],O=r[6],z=r[10],H=r[14],N=r[3],I=r[7],C=r[11],K=r[15];return s[0]=o*T+a*E+l*L+u*N,s[4]=o*M+a*k+l*O+u*I,s[8]=o*P+a*D+l*z+u*C,s[12]=o*S+a*q+l*H+u*K,s[1]=c*T+f*E+d*L+p*N,s[5]=c*M+f*k+d*O+p*I,s[9]=c*P+f*D+d*z+p*C,s[13]=c*S+f*q+d*H+p*K,s[2]=g*T+_*E+m*L+h*N,s[6]=g*M+_*k+m*O+h*I,s[10]=g*P+_*D+m*z+h*C,s[14]=g*S+_*q+m*H+h*K,s[3]=v*T+x*E+y*L+w*N,s[7]=v*M+x*k+y*O+w*I,s[11]=v*P+x*D+y*z+w*C,s[15]=v*S+x*q+y*H+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=f*m*u-_*d*u+_*l*p-a*m*p-f*l*h+a*d*h,x=g*d*u-c*m*u-g*l*p+o*m*p+c*l*h-o*d*h,y=c*_*u-g*f*u+g*a*p-o*_*p-c*a*h+o*f*h,w=g*f*l-c*_*l-g*a*d+o*_*d+c*a*m-o*f*m,T=t*v+i*x+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*d*s+g*r*p-t*m*p-c*r*h+t*d*h)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*h-t*f*h)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*_*r-g*f*r+g*i*d-t*_*d-c*i*m+t*f*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,g=s*f,_=o*c,m=o*f,h=a*f,v=l*u,x=l*c,y=l*f,w=i.x,T=i.y,M=i.z;return r[0]=(1-(_+h))*w,r[1]=(p+y)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vo.set(r[0],r[1],r[2]).length();const o=Vo.set(r[4],r[5],r[6]).length(),a=Vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,f=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=f,$i.elements[9]*=f,$i.elements[10]*=f,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Fr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Fr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zf)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Fr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*c;let g,_;if(a===Fr)g=(o+s)*f,_=-2*f;else if(a===Zf)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vo=new W,$i=new $t,QC=new W(0,0,0),JC=new W(1,1,1),Jr=new W,Ec=new W,ci=new W,Rv=new $t,bv=new ku;class Md{constructor(e=0,t=0,i=0,r=Md.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Md.DEFAULT_ORDER="XYZ";class _E{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eR=0;const Pv=new W,Wo=new ku,Tr=new $t,Tc=new W,xl=new W,tR=new W,nR=new ku,Lv=new W(1,0,0),Dv=new W(0,1,0),Nv=new W(0,0,1),iR={type:"added"},rR={type:"removed"};class Xn extends tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new W,t=new Md,i=new ku,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new nt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _E,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.premultiply(Wo),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,t){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tc.copy(e):Tc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(xl,Tc,this.up):Tr.lookAt(Tc,xl,this.up),this.quaternion.setFromRotationMatrix(Tr),r&&(Tr.extractRotation(r.matrixWorld),Wo.setFromRotationMatrix(Tr),this.quaternion.premultiply(Wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,tR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,nR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xn.DEFAULT_UP=new W(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new W,wr=new W,Dh=new W,Ar=new W,Xo=new W,Yo=new W,Uv=new W,Nh=new W,Uh=new W,Ih=new W;let wc=!1;class tr{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),wr.subVectors(i,t),Dh.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(wr),l=Ki.dot(Dh),u=wr.dot(wr),c=wr.dot(Dh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getUV(e,t,i,r,s,o,a,l){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),wr.subVectors(e,t),Ki.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Ki.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wc=!0),tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xo.subVectors(r,i),Yo.subVectors(s,i),Nh.subVectors(e,i);const l=Xo.dot(Nh),u=Yo.dot(Nh);if(l<=0&&u<=0)return t.copy(i);Uh.subVectors(e,r);const c=Xo.dot(Uh),f=Yo.dot(Uh);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Xo,o);Ih.subVectors(e,s);const p=Xo.dot(Ih),g=Yo.dot(Ih);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Yo,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Uv.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(Uv,a);const h=1/(m+_+d);return o=_*h,a=d*h,t.copy(i).addScaledVector(Xo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=WC(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oh(o,s,e+1/3),this.g=Oh(o,s,e),this.b=Oh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=gE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=Th(e.r),this.g=Th(e.g),this.b=Th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return yt.fromWorkingColorSpace(wn.copy(this),e),Math.round(Zn(wn.r*255,0,255))*65536+Math.round(Zn(wn.g*255,0,255))*256+Math.round(Zn(wn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=_n){yt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Ac);const i=Mh(es.h,Ac.h,t),r=Mh(es.s,Ac.s,t),s=Mh(es.l,Ac.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new at;at.NAMES=gE;let sR=0;class nl extends tl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=Fu(),this.name="",this.type="Material",this.blending=Da,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fm,this.blendDst=dm,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=jf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fm&&(i.blendSrc=this.blendSrc),this.blendDst!==dm&&(i.blendDst=this.blendDst),this.blendEquation!==to&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vE extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=JM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new W,Cc=new ht;class wi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ps,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_l(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_l(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_l(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_l(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_l(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array),s=qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sv&&(e.usage=this.usage),e}}class xE extends wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yE extends wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yr extends wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oR=0;const Di=new $t,Fh=new Xn,jo=new W,fi=new zu,yl=new zu,un=new W;class ar extends tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Fu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fE(e)?yE:xE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(fi.min,yl.min),fi.expandByPoint(un),un.addVectors(fi.max,yl.max),fi.expandByPoint(un)):(fi.expandByPoint(yl.min),fi.expandByPoint(yl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(jo.fromBufferAttribute(e,u),un.add(jo)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new W,c[E]=new W;const f=new W,d=new W,p=new W,g=new ht,_=new ht,m=new ht,h=new W,v=new W;function x(E,k,D){f.fromArray(r,E*3),d.fromArray(r,k*3),p.fromArray(r,D*3),g.fromArray(o,E*2),_.fromArray(o,k*2),m.fromArray(o,D*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(q),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),u[E].add(h),u[k].add(h),u[D].add(h),c[E].add(v),c[k].add(v),c[D].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,k=y.length;E<k;++E){const D=y[E],q=D.start,L=D.count;for(let O=q,z=q+L;O<z;O+=3)x(i[O+0],i[O+1],i[O+2])}const w=new W,T=new W,M=new W,P=new W;function S(E){M.fromArray(s,E*3),P.copy(M);const k=u[E];w.copy(k),w.sub(M.multiplyScalar(M.dot(k))).normalize(),T.crossVectors(P,k);const q=T.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=q}for(let E=0,k=y.length;E<k;++E){const D=y[E],q=D.start,L=D.count;for(let O=q,z=q+L;O<z;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)d[g++]=u[p++]}return new wi(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new $t,Ys=new mE,Rc=new Sd,Ov=new W,qo=new W,$o=new W,Ko=new W,kh=new W,bc=new W,Pc=new ht,Lc=new ht,Dc=new ht,Fv=new W,kv=new W,zv=new W,Nc=new W,Uc=new W;class kr extends Xn{constructor(e=new ar,t=new vE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(kh.fromBufferAttribute(f,e),o?bc.addScaledVector(kh,c):bc.addScaledVector(kh.sub(t),c))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Rc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Rc,Ov)===null||Ys.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(Iv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(Iv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Ic(this,h,e,i,u,c,f,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Ic(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const T=y,M=y+1,P=y+2;r=Ic(this,h,e,i,u,c,f,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,y=m+2;r=Ic(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function aR(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Is,a),l===null)return null;Uc.copy(a),Uc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Uc);return u<t.near||u>t.far?null:{distance:u,point:Uc.clone(),object:n}}function Ic(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,qo),n.getVertexPosition(l,$o),n.getVertexPosition(u,Ko);const c=aR(n,e,t,i,qo,$o,Ko,Nc);if(c){r&&(Pc.fromBufferAttribute(r,a),Lc.fromBufferAttribute(r,l),Dc.fromBufferAttribute(r,u),c.uv=tr.getInterpolation(Nc,qo,$o,Ko,Pc,Lc,Dc,new ht)),s&&(Pc.fromBufferAttribute(s,a),Lc.fromBufferAttribute(s,l),Dc.fromBufferAttribute(s,u),c.uv1=tr.getInterpolation(Nc,qo,$o,Ko,Pc,Lc,Dc,new ht),c.uv2=c.uv1),o&&(Fv.fromBufferAttribute(o,a),kv.fromBufferAttribute(o,l),zv.fromBufferAttribute(o,u),c.normal=tr.getInterpolation(Nc,qo,$o,Ko,Fv,kv,zv,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new W,materialIndex:0};tr.getNormal(qo,$o,Ko,f.normal),c.face=f}return c}class Bu extends ar{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(c,3)),this.setAttribute("uv",new yr(f,2));function g(_,m,h,v,x,y,w,T,M,P,S){const E=y/M,k=w/P,D=y/2,q=w/2,L=T/2,O=M+1,z=P+1;let H=0,N=0;const I=new W;for(let C=0;C<z;C++){const K=C*k-q;for(let Q=0;Q<O;Q++){const $=Q*E-D;I[_]=$*v,I[m]=K*x,I[h]=L,u.push(I.x,I.y,I.z),I[_]=0,I[m]=0,I[h]=T>0?1:-1,c.push(I.x,I.y,I.z),f.push(Q/M),f.push(1-C/P),H+=1}}for(let C=0;C<P;C++)for(let K=0;K<M;K++){const Q=d+K+O*C,$=d+K+O*(C+1),Z=d+(K+1)+O*(C+1),ie=d+(K+1)+O*C;l.push(Q,$,ie),l.push($,Z,ie),N+=6}a.addGroup(p,N,S),p+=N,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=Za(n[t]);for(const r in i)e[r]=i[r]}return e}function lR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function SE(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const uR={clone:Za,merge:On};var cR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Po extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cR,this.fragmentShader=fR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=lR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ME extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gi extends ME{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gm*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zo=-90,Qo=1;class dR extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gi(Zo,Qo,e,t);r.layers=this.layers,this.add(r);const s=new gi(Zo,Qo,e,t);s.layers=this.layers,this.add(s);const o=new gi(Zo,Qo,e,t);o.layers=this.layers,this.add(o);const a=new gi(Zo,Qo,e,t);a.layers=this.layers,this.add(a);const l=new gi(Zo,Qo,e,t);l.layers=this.layers,this.add(l);const u=new gi(Zo,Qo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Fr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class EE extends ai{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:qa,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hR extends bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(tu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yo?_n:zi),this.texture=new EE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ki}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bu(5,5,5),s=new Po({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:As});s.uniforms.tEquirect.value=t;const o=new kr(r,s),a=t.minFilter;return t.minFilter===bu&&(t.minFilter=ki),new dR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const zh=new W,pR=new W,mR=new nt;class Js{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zh.subVectors(i,t).cross(pR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mR.getNormalMatrix(e),r=this.coplanarPoint(zh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new Sd,Oc=new W;class Y_{constructor(e=new Js,t=new Js,i=new Js,r=new Js,s=new Js,o=new Js){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-h).normalize(),i[1].setComponents(l+s,d+u,m+p,y+h).normalize(),i[2].setComponents(l+o,d+c,m+g,y+v).normalize(),i[3].setComponents(l-o,d-c,m-g,y-v).normalize(),i[4].setComponents(l-a,d-f,m-_,y-x).normalize(),t===Fr)i[5].setComponents(l+a,d+f,m+_,y+x).normalize();else if(t===Zf)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Oc.x=r.normal.x>0?e.max.x:e.min.x,Oc.y=r.normal.y>0?e.max.y:e.min.y,Oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function TE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _R(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const h=g[_];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class j_ extends ar{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),w=v+1+u*(h+1),T=v+1+u*h;p.push(x,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new yr(g,3)),this.setAttribute("normal",new yr(_,3)),this.setAttribute("uv",new yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new j_(e.width,e.height,e.widthSegments,e.heightSegments)}}var gR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,MR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ER=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,CR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jR="gl_FragColor = linearToOutputTexel( gl_FragColor );",qR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$R=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_b=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Db=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _P=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:gR,alphahash_pars_fragment:vR,alphamap_fragment:xR,alphamap_pars_fragment:yR,alphatest_fragment:SR,alphatest_pars_fragment:MR,aomap_fragment:ER,aomap_pars_fragment:TR,batching_pars_vertex:wR,batching_vertex:AR,begin_vertex:CR,beginnormal_vertex:RR,bsdfs:bR,iridescence_fragment:PR,bumpmap_pars_fragment:LR,clipping_planes_fragment:DR,clipping_planes_pars_fragment:NR,clipping_planes_pars_vertex:UR,clipping_planes_vertex:IR,color_fragment:OR,color_pars_fragment:FR,color_pars_vertex:kR,color_vertex:zR,common:BR,cube_uv_reflection_fragment:HR,defaultnormal_vertex:GR,displacementmap_pars_vertex:VR,displacementmap_vertex:WR,emissivemap_fragment:XR,emissivemap_pars_fragment:YR,colorspace_fragment:jR,colorspace_pars_fragment:qR,envmap_fragment:$R,envmap_common_pars_fragment:KR,envmap_pars_fragment:ZR,envmap_pars_vertex:QR,envmap_physical_pars_fragment:cb,envmap_vertex:JR,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:rb,lightmap_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:ab,lights_lambert_pars_fragment:lb,lights_pars_begin:ub,lights_toon_fragment:fb,lights_toon_pars_fragment:db,lights_phong_fragment:hb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:_b,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:xb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:Eb,map_fragment:Tb,map_pars_fragment:wb,map_particle_fragment:Ab,map_particle_pars_fragment:Cb,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:bb,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Nb,normal_fragment_begin:Ub,normal_fragment_maps:Ib,normal_pars_fragment:Ob,normal_pars_vertex:Fb,normal_vertex:kb,normalmap_pars_fragment:zb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:Wb,packing:Xb,premultiplied_alpha_fragment:Yb,project_vertex:jb,dithering_fragment:qb,dithering_pars_fragment:$b,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Zb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:Jb,shadowmap_vertex:eP,shadowmask_pars_fragment:tP,skinbase_vertex:nP,skinning_pars_vertex:iP,skinning_vertex:rP,skinnormal_vertex:sP,specularmap_fragment:oP,specularmap_pars_fragment:aP,tonemapping_fragment:lP,tonemapping_pars_fragment:uP,transmission_fragment:cP,transmission_pars_fragment:fP,uv_pars_fragment:dP,uv_pars_vertex:hP,uv_vertex:pP,worldpos_vertex:mP,background_vert:_P,background_frag:gP,backgroundCube_vert:vP,backgroundCube_frag:xP,cube_vert:yP,cube_frag:SP,depth_vert:MP,depth_frag:EP,distanceRGBA_vert:TP,distanceRGBA_frag:wP,equirect_vert:AP,equirect_frag:CP,linedashed_vert:RP,linedashed_frag:bP,meshbasic_vert:PP,meshbasic_frag:LP,meshlambert_vert:DP,meshlambert_frag:NP,meshmatcap_vert:UP,meshmatcap_frag:IP,meshnormal_vert:OP,meshnormal_frag:FP,meshphong_vert:kP,meshphong_frag:zP,meshphysical_vert:BP,meshphysical_frag:HP,meshtoon_vert:GP,meshtoon_frag:VP,points_vert:WP,points_frag:XP,shadow_vert:YP,shadow_frag:jP,sprite_vert:qP,sprite_frag:$P},he={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},dr={basic:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:On([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:On([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:On([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:On([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:On([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:On([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:On([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:On([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:On([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:On([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:On([he.lights,he.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};dr.physical={uniforms:On([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Fc={r:0,b:0,g:0};function KP(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function g(m,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xd)?(c===void 0&&(c=new kr(new Bu(1,1,1),new Po({name:"BackgroundCubeMaterial",uniforms:Za(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==bt,(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new kr(new j_(2,2),new Po({name:"BackgroundMaterial",uniforms:Za(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,h){m.getRGB(Fc,SE(n)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function ZP(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(L,O,z,H,N){let I=!1;if(o){const C=_(H,z,O);u!==C&&(u=C,p(u.object)),I=h(L,H,z,N),I&&v(L,H,z,N)}else{const C=O.wireframe===!0;(u.geometry!==H.id||u.program!==z.id||u.wireframe!==C)&&(u.geometry=H.id,u.program=z.id,u.wireframe=C,I=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,P(L,O,z,H),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,O,z){const H=z.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let I=N[O.id];I===void 0&&(I={},N[O.id]=I);let C=I[H];return C===void 0&&(C=m(d()),I[H]=C),C}function m(L){const O=[],z=[],H=[];for(let N=0;N<r;N++)O[N]=0,z[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:H,object:L,attributes:{},index:null}}function h(L,O,z,H){const N=u.attributes,I=O.attributes;let C=0;const K=z.getAttributes();for(const Q in K)if(K[Q].location>=0){const Z=N[Q];let ie=I[Q];if(ie===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;C++}return u.attributesNum!==C||u.index!==H}function v(L,O,z,H){const N={},I=O.attributes;let C=0;const K=z.getAttributes();for(const Q in K)if(K[Q].location>=0){let Z=I[Q];Z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),N[Q]=ie,C++}u.attributes=N,u.attributesNum=C,u.index=H}function x(){const L=u.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function y(L){w(L,0)}function w(L,O){const z=u.newAttributes,H=u.enabledAttributes,N=u.attributeDivisors;z[L]=1,H[L]===0&&(n.enableVertexAttribArray(L),H[L]=1),N[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),N[L]=O)}function T(){const L=u.newAttributes,O=u.enabledAttributes;for(let z=0,H=O.length;z<H;z++)O[z]!==L[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function M(L,O,z,H,N,I,C){C===!0?n.vertexAttribIPointer(L,O,z,N,I):n.vertexAttribPointer(L,O,z,H,N,I)}function P(L,O,z,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=H.attributes,I=z.getAttributes(),C=O.defaultAttributeValues;for(const K in I){const Q=I[K];if(Q.location>=0){let $=N[K];if($===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const Z=$.normalized,ie=$.itemSize,pe=t.get($);if(pe===void 0)continue;const fe=pe.buffer,De=pe.type,Ne=pe.bytesPerElement,Oe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||$.gpuType===tE);if($.isInterleavedBufferAttribute){const We=$.data,V=We.stride,Xe=$.offset;if(We.isInstancedInterleavedBuffer){for(let ge=0;ge<Q.locationSize;ge++)w(Q.location+ge,We.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ge=0;ge<Q.locationSize;ge++)y(Q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ge=0;ge<Q.locationSize;ge++)M(Q.location+ge,ie/Q.locationSize,De,Z,V*Ne,(Xe+ie/Q.locationSize*ge)*Ne,Oe)}else{if($.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)w(Q.location+We,$.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,ie/Q.locationSize,De,Z,ie*Ne,ie/Q.locationSize*We*Ne,Oe)}}else if(C!==void 0){const Z=C[K];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Q.location,Z);break;case 3:n.vertexAttrib3fv(Q.location,Z);break;case 4:n.vertexAttrib4fv(Q.location,Z);break;default:n.vertexAttrib1fv(Q.location,Z)}}}}T()}function S(){D();for(const L in a){const O=a[L];for(const z in O){const H=O[z];for(const N in H)g(H[N].object),delete H[N];delete O[z]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const z in O){const H=O[z];for(const N in H)g(H[N].object),delete H[N];delete O[z]}delete a[L.id]}function k(L){for(const O in a){const z=a[O];if(z[L.id]===void 0)continue;const H=z[L.id];for(const N in H)g(H[N].object),delete H[N];delete z[L.id]}}function D(){q(),c=!0,u!==l&&(u=l,p(u.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function QP(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(c[g],f[g]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function JP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function e2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Js,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(g,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function t2(n){let e=new WeakMap;function t(o,a){return a===hm?o.mapping=qa:a===pm&&(o.mapping=$a),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hm||a===pm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hR(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class n2 extends ME{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const va=4,Bv=[.125,.215,.35,.446,.526,.582],no=20,Bh=new n2,Hv=new at;let Hh=null,Gh=0,Vh=0;const eo=(1+Math.sqrt(5))/2,Jo=1/eo,Gv=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,eo,Jo),new W(0,eo,-Jo),new W(Jo,0,eo),new W(-Jo,0,eo),new W(eo,Jo,0),new W(-eo,Jo,0)];class Vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qa||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:Pu,format:ir,colorSpace:jr,depthBuffer:!1},r=Wv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i2(s)),this._blurMaterial=r2(s,e,t)}return r}_compileMaterial(e){const t=new kr(this._lodPlanes[0],e);this._renderer.compile(t,Bh)}_sceneToCubeUV(e,t,i,r){const a=new gi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Hv),c.toneMapping=Cs,c.autoClear=!1;const p=new vE({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),g=new kr(new Bu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Hv),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;kc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qa||e.mapping===$a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gv[(r-1)%Gv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new kr(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*no-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):no;m>no&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${no}`);const h=[];let v=0;for(let M=0;M<no;++M){const P=M/_,S=Math.exp(-P*P/2);h.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-va?r-x+va:0),T=4*(this._cubeSize-y);kc(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Bh)}}function i2(n){const e=[],t=[],i=[];let r=n;const s=n-va+1+Bv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-va?l=Bv[o-n+va-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,P=T>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,_*g*T),x.set(d,m*g*T);const E=[T,T,T,T,T,T];y.set(E,h*g*T)}const w=new ar;w.setAttribute("position",new wi(v,_)),w.setAttribute("uv",new wi(x,m)),w.setAttribute("faceIndex",new wi(y,h)),e.push(w),r>va&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wv(n,e,t){const i=new bo(n,e,t);return i.texture.mapping=xd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function r2(n,e,t){const i=new Float32Array(no),r=new W(0,1,0);return new Po({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Xv(){return new Po({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Yv(){return new Po({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function q_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hm||l===pm,c=l===qa||l===$a;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Vv(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Vv(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function o2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],T=v[x+1],M=v[x+2];d.push(w,T,T,M,M,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,T=x+1,M=x+2;d.push(w,T,T,M,M,w)}}else return;const m=new(fE(d)?yE:xE)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function l2(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,_){if(_===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let h=0;for(let v=0;v<_;v++)h+=g[v];t.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function u2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function c2(n,e){return n[0]-e[0]}function f2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function d2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let O=function(){q.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let E=c.attributes.position.count*S,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*k*4*_),q=new pE(D,E,k,_);q.type=ps,q.needsUpdate=!0;const L=S*4;for(let z=0;z<_;z++){const H=T[z],N=M[z],I=P[z],C=E*k*4*z;for(let K=0;K<H.count;K++){const Q=K*L;x===!0&&(o.fromBufferAttribute(H,K),D[C+Q+0]=o.x,D[C+Q+1]=o.y,D[C+Q+2]=o.z,D[C+Q+3]=0),y===!0&&(o.fromBufferAttribute(N,K),D[C+Q+4]=o.x,D[C+Q+5]=o.y,D[C+Q+6]=o.z,D[C+Q+7]=0),w===!0&&(o.fromBufferAttribute(I,K),D[C+Q+8]=o.x,D[C+Q+9]=o.y,D[C+Q+10]=o.z,D[C+Q+11]=I.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new ht(E,k)},s.set(c,m),c.addEventListener("dispose",O)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=d[y]}_.sort(f2);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(c2);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),h&&c.getAttribute("morphNormal"+y)!==h[T]&&c.setAttribute("morphNormal"+y,h[T]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function h2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class wE extends ai{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:xo,c!==xo&&c!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===xo&&(i=hs),i===void 0&&c===Ka&&(i=vo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const AE=new ai,CE=new wE(1,1);CE.compareFunction=cE;const RE=new pE,bE=new KC,PE=new EE,jv=[],qv=[],$v=new Float32Array(16),Kv=new Float32Array(9),Zv=new Float32Array(4);function il(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jv[r];if(s===void 0&&(s=new Float32Array(r),jv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ed(n,e){let t=qv[e];t===void 0&&(t=new Int32Array(e),qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function p2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function m2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function v2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Zv.set(i),n.uniformMatrix2fv(this.addr,!1,Zv),ln(t,i)}}function x2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Kv.set(i),n.uniformMatrix3fv(this.addr,!1,Kv),ln(t,i)}}function y2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;$v.set(i),n.uniformMatrix4fv(this.addr,!1,$v),ln(t,i)}}function S2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function w2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?CE:AE;t.setTexture2D(e||s,r)}function P2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bE,r)}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||PE,r)}function D2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||RE,r)}function N2(n){switch(n){case 5126:return p2;case 35664:return m2;case 35665:return _2;case 35666:return g2;case 35674:return v2;case 35675:return x2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return T2;case 5125:return w2;case 36294:return A2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return D2}}function U2(n,e){n.uniform1fv(this.addr,e)}function I2(n,e){const t=il(e,this.size,2);n.uniform2fv(this.addr,t)}function O2(n,e){const t=il(e,this.size,3);n.uniform3fv(this.addr,t)}function F2(n,e){const t=il(e,this.size,4);n.uniform4fv(this.addr,t)}function k2(n,e){const t=il(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z2(n,e){const t=il(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B2(n,e){const t=il(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H2(n,e){n.uniform1iv(this.addr,e)}function G2(n,e){n.uniform2iv(this.addr,e)}function V2(n,e){n.uniform3iv(this.addr,e)}function W2(n,e){n.uniform4iv(this.addr,e)}function X2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function j2(n,e){n.uniform3uiv(this.addr,e)}function q2(n,e){n.uniform4uiv(this.addr,e)}function $2(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||AE,s[o])}function K2(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bE,s[o])}function Z2(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||PE,s[o])}function Q2(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||RE,s[o])}function J2(n){switch(n){case 5126:return U2;case 35664:return I2;case 35665:return O2;case 35666:return F2;case 35674:return k2;case 35675:return z2;case 35676:return B2;case 5124:case 35670:return H2;case 35667:case 35671:return G2;case 35668:case 35672:return V2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return Y2;case 36295:return j2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return Q2}}class eL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N2(t.type)}}class tL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J2(t.type)}}class nL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function Qv(n,e){n.seq.push(e),n.map[e.id]=e}function iL(n,e,t){const i=n.name,r=i.length;for(Wh.lastIndex=0;;){const s=Wh.exec(i),o=Wh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Qv(t,u===void 0?new eL(a,n,e):new tL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new nL(a),Qv(t,f)),t=f}}}class cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Jv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rL=37297;let sL=0;function oL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aL(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===Kf&&t===$f?i="LinearDisplayP3ToLinearSRGB":e===$f&&t===Kf&&(i="LinearSRGBToLinearDisplayP3"),n){case jr:case yd:return[i,"LinearTransferOETF"];case _n:case X_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ex(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oL(n.getShaderSource(e),o)}else return r}function lL(n,e){const t=aL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uL(n,e){let t;switch(e){case xC:t="Linear";break;case yC:t="Reinhard";break;case SC:t="OptimizedCineon";break;case MC:t="ACESFilmic";break;case TC:t="AgX";break;case EC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xa).join(`
`)}function fL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xa).join(`
`)}function dL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xa(n){return n!==""}function tx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pL=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(n){return n.replace(pL,_L)}const mL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _L(n,e){let t=Ze[e];if(t===void 0){const i=mL.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xm(t)}const gL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(n){return n.replace(gL,vL)}function vL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===QM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function yL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qa:case $a:e="ENVMAP_TYPE_CUBE";break;case xd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $a:e="ENVMAP_MODE_REFRACTION";break}return e}function ML(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case JM:e="ENVMAP_BLENDING_MULTIPLY";break;case gC:e="ENVMAP_BLENDING_MIX";break;case vC:e="ENVMAP_BLENDING_ADD";break}return e}function EL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xL(t),u=yL(t),c=SL(t),f=ML(t),d=EL(t),p=t.isWebGL2?"":cL(t),g=fL(t),_=dL(s),m=r.createProgram();let h,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),v.length>0&&(v+=`
`)):(h=[rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),v=[p,rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Cs?uL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,lL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=xm(o),o=tx(o,t),o=nx(o,t),a=xm(a),a=tx(a,t),a=nx(a,t),o=ix(o),a=ix(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+h+o,w=x+v+a,T=Jv(r,r.VERTEX_SHADER,y),M=Jv(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(D){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),O=r.getShaderInfoLog(M).trim();let z=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{const N=ex(r,T,"vertex"),I=ex(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+N+`
`+I)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||O==="")&&(H=!1);H&&(D.diagnostics={runnable:z,programLog:q,vertexShader:{log:L,prefix:h},fragmentShader:{log:O,prefix:v}})}r.deleteShader(T),r.deleteShader(M),S=new cf(r,m),E=hL(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,rL)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}let wL=0;class AL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CL(e),t.set(e,i)),i}}class CL{constructor(e){this.id=wL++,this.code=e,this.usedTimes=0}}function RL(n,e,t,i,r,s,o){const a=new _E,l=new AL,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,k,D,q){const L=D.fog,O=q.geometry,z=S.isMeshStandardMaterial?D.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),N=H&&H.mapping===xd?H.image.height:null,I=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const C=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=C!==void 0?C.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let $,Z,ie,pe;if(I){const Me=dr[I];$=Me.vertexShader,Z=Me.fragmentShader}else $=S.vertexShader,Z=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const fe=n.getRenderTarget(),De=q.isInstancedMesh===!0,Ne=q.isBatchedMesh===!0,Oe=!!S.map,We=!!S.matcap,V=!!H,Xe=!!S.aoMap,ge=!!S.lightMap,Ue=!!S.bumpMap,ve=!!S.normalMap,X=!!S.displacementMap,Be=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,B=S.anisotropy>0,te=S.clearcoat>0,ee=S.iridescence>0,ne=S.sheen>0,_e=S.transmission>0,de=B&&!!S.anisotropyMap,ce=te&&!!S.clearcoatMap,Re=te&&!!S.clearcoatNormalMap,Ve=te&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,ut=ee&&!!S.iridescenceThicknessMap,Pe=ne&&!!S.sheenColorMap,Ye=ne&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ye=!!S.specularColorMap,je=!!S.specularIntensityMap,Je=_e&&!!S.transmissionMap,pt=_e&&!!S.thicknessMap,me=!!S.gradientMap,oe=!!S.alphaMap,U=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,ke=!!O.attributes.uv1,Ie=!!O.attributes.uv2,ot=!!O.attributes.uv3;let dt=Cs;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:c,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:Z,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,instancing:De,instancingColor:De&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jr,map:Oe,matcap:We,envMap:V,envMapMode:V&&H.mapping,envMapCubeUVHeight:N,aoMap:Xe,lightMap:ge,bumpMap:Ue,normalMap:ve,displacementMap:d&&X,emissiveMap:Be,normalMapObjectSpace:ve&&S.normalMapType===OC,normalMapTangentSpace:ve&&S.normalMapType===uE,metalnessMap:b,roughnessMap:A,anisotropy:B,anisotropyMap:de,clearcoat:te,clearcoatMap:ce,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:ut,sheen:ne,sheenColorMap:Pe,sheenRoughnessMap:Ye,specularMap:Ae,specularColorMap:ye,specularIntensityMap:je,transmission:_e,transmissionMap:Je,thicknessMap:pt,gradientMap:me,opaque:S.transparent===!1&&S.blending===Da,alphaMap:oe,alphaTest:U,alphaHash:ae,combine:S.combine,mapUv:Oe&&_(S.map.channel),aoMapUv:Xe&&_(S.aoMap.channel),lightMapUv:ge&&_(S.lightMap.channel),bumpMapUv:Ue&&_(S.bumpMap.channel),normalMapUv:ve&&_(S.normalMap.channel),displacementMapUv:X&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:b&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:ce&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(S.sheenRoughnessMap.channel),specularMapUv:Ae&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:je&&_(S.specularIntensityMap.channel),transmissionMapUv:Je&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:oe&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Ie,vertexUv3s:ot,pointsUvs:q.isPoints===!0&&!!O.attributes.uv&&(Oe||oe),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nr,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)E.push(k),E.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=g[S.type];let k;if(E){const D=dr[E];k=uR.clone(D.uniforms)}else k=S.uniforms;return k}function w(S,E){let k;for(let D=0,q=u.length;D<q;D++){const L=u[D];if(L.cacheKey===E){k=L,++k.usedTimes;break}}return k===void 0&&(k=new TL(n,E,S,s),u.push(k)),k}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:P}}function bL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function PL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ox(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||PL),i.length>1&&i.sort(d||sx),r.length>1&&r.sort(d||sx)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function LL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ox,n.set(i,[o])):r>=s.length?(o=new ox,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function NL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UL=0;function IL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OL(n,e){const t=new DL,i=NL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new W);const s=new W,o=new $t,a=new $t;function l(c,f){let d=0,p=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,m=0,h=0,v=0,x=0,y=0,w=0,T=0,M=0,P=0,S=0;c.sort(IL);const E=f===!0?Math.PI:1;for(let D=0,q=c.length;D<q;D++){const L=c[D],O=L.color,z=L.intensity,H=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*z*E,p+=O.g*z*E,g+=O.b*z*E;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],z);S++}else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const C=L.shadow,K=i.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=I,_++}else if(L.isSpotLight){const I=t.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(O).multiplyScalar(z*E),I.distance=H,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[h]=I;const C=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,C.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[h]=C.matrix,L.castShadow){const K=i.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,r.spotShadow[h]=K,r.spotShadowMap[h]=N,T++}h++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(O).multiplyScalar(z),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=I,v++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*E),I.distance=L.distance,I.decay=L.decay,L.castShadow){const C=L.shadow,K=i.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,K.shadowCameraNear=C.camera.near,K.shadowCameraFar=C.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=I,m++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(z*E),I.groundColor.copy(L.groundColor).multiplyScalar(z*E),r.hemi[x]=I,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==h||k.rectAreaLength!==v||k.hemiLength!==x||k.numDirectionalShadows!==y||k.numPointShadows!==w||k.numSpotShadows!==T||k.numSpotMaps!==M||k.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,k.directionalLength=_,k.pointLength=m,k.spotLength=h,k.rectAreaLength=v,k.hemiLength=x,k.numDirectionalShadows=y,k.numPointShadows=w,k.numSpotShadows=T,k.numSpotMaps=M,k.numLightProbes=S,r.version=UL++)}function u(c,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(y.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function ax(n,e){const t=new OL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function FL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ax(n,e),t.set(s,[l])):o>=a.length?(l=new ax(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class kL extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zL extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GL(n,e,t){let i=new Y_;const r=new ht,s=new ht,o=new It,a=new kL({depthPacking:IC}),l=new zL,u={},c=t.maxTextureSize,f={[Is]:oi,[oi]:Is,[Nr]:Nr},d=new Po({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:BL,fragmentShader:HL}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ar;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kr(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=QM;let h=this.type;this.render=function(T,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),D=n.state;D.setBlending(As),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const q=h!==Cr&&this.type===Cr,L=h===Cr&&this.type!==Cr;for(let O=0,z=T.length;O<z;O++){const H=T[O],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const I=N.getFrameExtents();if(r.multiply(I),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/I.x),r.x=s.x*I.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/I.y),r.y=s.y*I.y,N.mapSize.y=s.y)),N.map===null||q===!0||L===!0){const K=this.type!==Cr?{minFilter:Hn,magFilter:Hn}:{};N.map!==null&&N.map.dispose(),N.map=new bo(r.x,r.y,K),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const C=N.getViewportCount();for(let K=0;K<C;K++){const Q=N.getViewport(K);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),D.viewport(o),N.updateMatrices(H,K),i=N.getFrustum(),y(M,P,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Cr&&v(N,P),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,k)};function v(T,M){const P=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bo(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,P,p,_,null)}function x(T,M,P,S){let E=null;const k=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)E=k;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=E.uuid,q=M.uuid;let L=u[D];L===void 0&&(L={},u[D]=L);let O=L[q];O===void 0&&(O=E.clone(),L[q]=O,M.addEventListener("dispose",w)),E=O}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Cr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:f[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=P}return E}function y(T,M,P,S,E){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Cr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const q=e.update(T),L=T.material;if(Array.isArray(L)){const O=q.groups;for(let z=0,H=O.length;z<H;z++){const N=O[z],I=L[N.materialIndex];if(I&&I.visible){const C=x(T,I,S,E);T.onBeforeShadow(n,T,M,P,q,C,N),n.renderBufferDirect(P,null,q,C,T,N),T.onAfterShadow(n,T,M,P,q,C,N)}}}else if(L.visible){const O=x(T,L,S,E);T.onBeforeShadow(n,T,M,P,q,O,null),n.renderBufferDirect(P,null,q,O,T,null),T.onAfterShadow(n,T,M,P,q,O,null)}}const D=T.children;for(let q=0,L=D.length;q<L;q++)y(D[q],M,P,S,E)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const S=u[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function VL(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ae=new It;let le=null;const ke=new It(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!U&&(n.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,ot,dt,Ce,Me){Me===!0&&(Ie*=Ce,ot*=Ce,dt*=Ce),ae.set(Ie,ot,dt,Ce),ke.equals(ae)===!1&&(n.clearColor(Ie,ot,dt,Ce),ke.copy(ae))},reset:function(){U=!1,le=null,ke.set(-1,0,0,0)}}}function s(){let U=!1,ae=null,le=null,ke=null;return{setTest:function(Ie){Ie?Ne(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!U&&(n.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(le!==Ie){switch(Ie){case cC:n.depthFunc(n.NEVER);break;case fC:n.depthFunc(n.ALWAYS);break;case dC:n.depthFunc(n.LESS);break;case jf:n.depthFunc(n.LEQUAL);break;case hC:n.depthFunc(n.EQUAL);break;case pC:n.depthFunc(n.GEQUAL);break;case mC:n.depthFunc(n.GREATER);break;case _C:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ie}},setLocked:function(Ie){U=Ie},setClear:function(Ie){ke!==Ie&&(n.clearDepth(Ie),ke=Ie)},reset:function(){U=!1,ae=null,le=null,ke=null}}}function o(){let U=!1,ae=null,le=null,ke=null,Ie=null,ot=null,dt=null,Ce=null,Me=null;return{setTest:function(Le){U||(Le?Ne(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Le){ae!==Le&&!U&&(n.stencilMask(Le),ae=Le)},setFunc:function(Le,se,ze){(le!==Le||ke!==se||Ie!==ze)&&(n.stencilFunc(Le,se,ze),le=Le,ke=se,Ie=ze)},setOp:function(Le,se,ze){(ot!==Le||dt!==se||Ce!==ze)&&(n.stencilOp(Le,se,ze),ot=Le,dt=se,Ce=ze)},setLocked:function(Le){U=Le},setClear:function(Le){Me!==Le&&(n.clearStencil(Le),Me=Le)},reset:function(){U=!1,ae=null,le=null,ke=null,Ie=null,ot=null,dt=null,Ce=null,Me=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,y=null,w=null,T=null,M=null,P=null,S=new at(0,0,0),E=0,k=!1,D=null,q=null,L=null,O=null,z=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(C)[1]),N=I>=1):C.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),N=I>=2);let K=null,Q={};const $=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ie=new It().fromArray($),pe=new It().fromArray(Z);function fe(U,ae,le,ke){const Ie=new Uint8Array(4),ot=n.createTexture();n.bindTexture(U,ot),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<le;dt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(ae+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return ot}const De={};De[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(jf),Be(!1),b(V0),Ne(n.CULL_FACE),ve(As);function Ne(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Oe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function We(U,ae){return p[U]!==ae?(n.bindFramebuffer(U,ae),p[U]=ae,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function V(U,ae){let le=_,ke=!1;if(U)if(le=g.get(ae),le===void 0&&(le=[],g.set(ae,le)),U.isWebGLMultipleRenderTargets){const Ie=U.texture;if(le.length!==Ie.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,dt=Ie.length;ot<dt;ot++)le[ot]=n.COLOR_ATTACHMENT0+ot;le.length=Ie.length,ke=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,ke=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Xe(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ge={[to]:n.FUNC_ADD,[$A]:n.FUNC_SUBTRACT,[KA]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[Y0]=n.MIN,ge[j0]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[Y0]=U.MIN_EXT,ge[j0]=U.MAX_EXT)}const Ue={[ZA]:n.ZERO,[QA]:n.ONE,[JA]:n.SRC_COLOR,[fm]:n.SRC_ALPHA,[sC]:n.SRC_ALPHA_SATURATE,[iC]:n.DST_COLOR,[tC]:n.DST_ALPHA,[eC]:n.ONE_MINUS_SRC_COLOR,[dm]:n.ONE_MINUS_SRC_ALPHA,[rC]:n.ONE_MINUS_DST_COLOR,[nC]:n.ONE_MINUS_DST_ALPHA,[oC]:n.CONSTANT_COLOR,[aC]:n.ONE_MINUS_CONSTANT_COLOR,[lC]:n.CONSTANT_ALPHA,[uC]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(U,ae,le,ke,Ie,ot,dt,Ce,Me,Le){if(U===As){h===!0&&(Oe(n.BLEND),h=!1);return}if(h===!1&&(Ne(n.BLEND),h=!0),U!==qA){if(U!==v||Le!==k){if((x!==to||T!==to)&&(n.blendEquation(n.FUNC_ADD),x=to,T=to),Le)switch(U){case Da:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yf:n.blendFunc(n.ONE,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,w=null,M=null,P=null,S.set(0,0,0),E=0,v=U,k=Le}return}Ie=Ie||ae,ot=ot||le,dt=dt||ke,(ae!==x||Ie!==T)&&(n.blendEquationSeparate(ge[ae],ge[Ie]),x=ae,T=Ie),(le!==y||ke!==w||ot!==M||dt!==P)&&(n.blendFuncSeparate(Ue[le],Ue[ke],Ue[ot],Ue[dt]),y=le,w=ke,M=ot,P=dt),(Ce.equals(S)===!1||Me!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Me),S.copy(Ce),E=Me),v=U,k=!1}function X(U,ae){U.side===Nr?Oe(n.CULL_FACE):Ne(n.CULL_FACE);let le=U.side===oi;ae&&(le=!le),Be(le),U.blending===Da&&U.transparent===!1?ve(As):ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const ke=U.stencilWrite;u.setTest(ke),ke&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function b(U){U!==XA?(Ne(n.CULL_FACE),U!==q&&(U===V0?n.cullFace(n.BACK):U===YA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),q=U}function A(U){U!==L&&(N&&n.lineWidth(U),L=U)}function B(U,ae,le){U?(Ne(n.POLYGON_OFFSET_FILL),(O!==ae||z!==le)&&(n.polygonOffset(ae,le),O=ae,z=le)):Oe(n.POLYGON_OFFSET_FILL)}function te(U){U?Ne(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ee(U){U===void 0&&(U=n.TEXTURE0+H-1),K!==U&&(n.activeTexture(U),K=U)}function ne(U,ae,le){le===void 0&&(K===null?le=n.TEXTURE0+H-1:le=K);let ke=Q[le];ke===void 0&&(ke={type:void 0,texture:void 0},Q[le]=ke),(ke.type!==U||ke.texture!==ae)&&(K!==le&&(n.activeTexture(le),K=le),n.bindTexture(U,ae||De[U]),ke.type=U,ke.texture=ae)}function _e(){const U=Q[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(U){ie.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Je(U){pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function pt(U,ae){let le=f.get(ae);le===void 0&&(le=new WeakMap,f.set(ae,le));let ke=le.get(U);ke===void 0&&(ke=n.getUniformBlockIndex(ae,U.name),le.set(U,ke))}function me(U,ae){const ke=f.get(ae).get(U);c.get(ae)!==ke&&(n.uniformBlockBinding(ae,ke,U.__bindingPointIndex),c.set(ae,ke))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,Q={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,x=null,y=null,w=null,T=null,M=null,P=null,S=new at(0,0,0),E=0,k=!1,D=null,q=null,L=null,O=null,z=null,ie.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Oe,bindFramebuffer:We,drawBuffers:V,useProgram:Xe,setBlending:ve,setMaterial:X,setFlipSided:Be,setCullFace:b,setLineWidth:A,setPolygonOffset:B,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:me,texStorage2D:Pe,texStorage3D:Ye,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:J,compressedTexSubImage3D:ut,scissor:je,viewport:Je,reset:oe}}function WL(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,A){return p?new OffscreenCanvas(b,A):Qf("canvas")}function _(b,A,B,te){let ee=1;if((b.width>te||b.height>te)&&(ee=te/Math.max(b.width,b.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=A?vm:Math.floor,_e=ne(ee*b.width),de=ne(ee*b.height);f===void 0&&(f=g(_e,de));const ce=B?g(_e,de):f;return ce.width=_e,ce.height=de,ce.getContext("2d").drawImage(b,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+de+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Ev(b.width)&&Ev(b.height)}function h(b){return a?!1:b.wrapS!==nr||b.wrapT!==nr||b.minFilter!==Hn&&b.minFilter!==ki}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==Hn&&b.minFilter!==ki}function x(b){n.generateMipmap(b)}function y(b,A,B,te,ee=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=A;if(A===n.RED&&(B===n.FLOAT&&(ne=n.R32F),B===n.HALF_FLOAT&&(ne=n.R16F),B===n.UNSIGNED_BYTE&&(ne=n.R8)),A===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ne=n.R8UI),B===n.UNSIGNED_SHORT&&(ne=n.R16UI),B===n.UNSIGNED_INT&&(ne=n.R32UI),B===n.BYTE&&(ne=n.R8I),B===n.SHORT&&(ne=n.R16I),B===n.INT&&(ne=n.R32I)),A===n.RG&&(B===n.FLOAT&&(ne=n.RG32F),B===n.HALF_FLOAT&&(ne=n.RG16F),B===n.UNSIGNED_BYTE&&(ne=n.RG8)),A===n.RGBA){const _e=ee?qf:yt.getTransfer(te);B===n.FLOAT&&(ne=n.RGBA32F),B===n.HALF_FLOAT&&(ne=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ne=_e===bt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(b,A,B){return v(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==Hn&&b.minFilter!==ki?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){return b===Hn||b===q0||b===mh?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),k(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const B=b.source,te=d.get(B);if(te){const ee=te[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(b),Object.keys(te).length===0&&d.delete(B)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const B=b.source,te=d.get(B);delete te[A.__cacheKey],o.memory.textures--}function k(b){const A=b.texture,B=i.get(b),te=i.get(A);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ne=0;ne<B.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(B.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[ee]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=A.length;ee<ne;ee++){const _e=i.get(A[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(A[ee])}i.remove(A),i.remove(b)}let D=0;function q(){D=0}function L(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function O(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function z(b,A){const B=i.get(b);if(b.isVideoTexture&&X(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(B,b,A);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+A)}function H(b,A){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ie(B,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+A)}function N(b,A){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ie(B,b,A);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+A)}function I(b,A){const B=i.get(b);if(b.version>0&&B.__version!==b.version){pe(B,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+A)}const C={[Ru]:n.REPEAT,[nr]:n.CLAMP_TO_EDGE,[mm]:n.MIRRORED_REPEAT},K={[Hn]:n.NEAREST,[q0]:n.NEAREST_MIPMAP_NEAREST,[mh]:n.NEAREST_MIPMAP_LINEAR,[ki]:n.LINEAR,[wC]:n.LINEAR_MIPMAP_NEAREST,[bu]:n.LINEAR_MIPMAP_LINEAR},Q={[FC]:n.NEVER,[VC]:n.ALWAYS,[kC]:n.LESS,[cE]:n.LEQUAL,[zC]:n.EQUAL,[GC]:n.GEQUAL,[BC]:n.GREATER,[HC]:n.NOTEQUAL};function $(b,A,B){if(B?(n.texParameteri(b,n.TEXTURE_WRAP_S,C[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,C[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,C[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==nr||A.wrapT!==nr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Hn&&A.minFilter!==ki&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Hn||A.minFilter!==mh&&A.minFilter!==bu||A.type===ps&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Pu&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(b,A){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const te=A.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const ne=O(A);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ne].usedTimes++;const _e=ee[b.__cacheKey];_e!==void 0&&(ee[b.__cacheKey].usedTimes--,_e.usedTimes===0&&E(A)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return B}function ie(b,A,B){let te=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=n.TEXTURE_3D);const ee=Z(b,A),ne=A.source;t.bindTexture(te,b.__webglTexture,n.TEXTURE0+B);const _e=i.get(ne);if(ne.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const de=yt.getPrimaries(yt.workingColorSpace),ce=A.colorSpace===zi?null:yt.getPrimaries(A.colorSpace),Re=A.colorSpace===zi||de===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=h(A)&&m(A.image)===!1;let J=_(A.image,Ve,!1,r.maxTextureSize);J=Be(A,J);const ut=m(J)||a,Pe=s.convert(A.format,A.colorSpace);let Ye=s.convert(A.type),Ae=y(A.internalFormat,Pe,Ye,A.colorSpace,A.isVideoTexture);$(te,A,ut);let ye;const je=A.mipmaps,Je=a&&A.isVideoTexture!==!0&&Ae!==aE,pt=_e.__version===void 0||ee===!0,me=w(A,J,ut);if(A.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?A.type===ps?Ae=n.DEPTH_COMPONENT32F:A.type===hs?Ae=n.DEPTH_COMPONENT24:A.type===vo?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:A.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===xo&&Ae===n.DEPTH_COMPONENT&&A.type!==W_&&A.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=hs,Ye=s.convert(A.type)),A.format===Ka&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,A.type!==vo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=vo,Ye=s.convert(A.type))),pt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,Pe,Ye,null));else if(A.isDataTexture)if(je.length>0&&ut){Je&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Ae,je[0].width,je[0].height);for(let oe=0,U=je.length;oe<U;oe++)ye=je[oe],Je?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,Pe,Ye,ye.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,ye.width,ye.height,0,Pe,Ye,ye.data);A.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(n.TEXTURE_2D,me,Ae,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Pe,Ye,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,Pe,Ye,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ae,je[0].width,je[0].height,J.depth);for(let oe=0,U=je.length;oe<U;oe++)ye=je[oe],A.format!==ir?Pe!==null?Je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,J.depth,Pe,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,J.depth,Pe,Ye,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,ye.width,ye.height,J.depth,0,Pe,Ye,ye.data)}else{Je&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Ae,je[0].width,je[0].height);for(let oe=0,U=je.length;oe<U;oe++)ye=je[oe],A.format!==ir?Pe!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,Pe,Ye,ye.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,ye.width,ye.height,0,Pe,Ye,ye.data)}else if(A.isDataArrayTexture)Je?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ae,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Pe,Ye,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,Pe,Ye,J.data);else if(A.isData3DTexture)Je?(pt&&t.texStorage3D(n.TEXTURE_3D,me,Ae,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Pe,Ye,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,Pe,Ye,J.data);else if(A.isFramebufferTexture){if(pt)if(Je)t.texStorage2D(n.TEXTURE_2D,me,Ae,J.width,J.height);else{let oe=J.width,U=J.height;for(let ae=0;ae<me;ae++)t.texImage2D(n.TEXTURE_2D,ae,Ae,oe,U,0,Pe,Ye,null),oe>>=1,U>>=1}}else if(je.length>0&&ut){Je&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Ae,je[0].width,je[0].height);for(let oe=0,U=je.length;oe<U;oe++)ye=je[oe],Je?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Pe,Ye,ye):t.texImage2D(n.TEXTURE_2D,oe,Ae,Pe,Ye,ye);A.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(n.TEXTURE_2D,me,Ae,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ye,J)):t.texImage2D(n.TEXTURE_2D,0,Ae,Pe,Ye,J);v(A,ut)&&x(te),_e.__version=ne.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function pe(b,A,B){if(A.image.length!==6)return;const te=Z(b,A),ee=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const ne=i.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const _e=yt.getPrimaries(yt.workingColorSpace),de=A.colorSpace===zi?null:yt.getPrimaries(A.colorSpace),ce=A.colorSpace===zi||_e===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,J=[];for(let oe=0;oe<6;oe++)!Re&&!Ve?J[oe]=_(A.image[oe],!1,!0,r.maxCubemapSize):J[oe]=Ve?A.image[oe].image:A.image[oe],J[oe]=Be(A,J[oe]);const ut=J[0],Pe=m(ut)||a,Ye=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),ye=y(A.internalFormat,Ye,Ae,A.colorSpace),je=a&&A.isVideoTexture!==!0,Je=ne.__version===void 0||te===!0;let pt=w(A,ut,Pe);$(n.TEXTURE_CUBE_MAP,A,Pe);let me;if(Re){je&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,ut.width,ut.height);for(let oe=0;oe<6;oe++){me=J[oe].mipmaps;for(let U=0;U<me.length;U++){const ae=me[U];A.format!==ir?Ye!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,ae.width,ae.height,Ye,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,ae.width,ae.height,Ye,Ae,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,ye,ae.width,ae.height,0,Ye,Ae,ae.data)}}}else{me=A.mipmaps,je&&Je&&(me.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,J[0].width,J[0].height));for(let oe=0;oe<6;oe++)if(Ve){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,J[oe].width,J[oe].height,Ye,Ae,J[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,J[oe].width,J[oe].height,0,Ye,Ae,J[oe].data);for(let U=0;U<me.length;U++){const le=me[U].image[oe].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,le.width,le.height,Ye,Ae,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,ye,le.width,le.height,0,Ye,Ae,le.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ye,Ae,J[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,Ye,Ae,J[oe]);for(let U=0;U<me.length;U++){const ae=me[U];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,Ye,Ae,ae.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,ye,Ye,Ae,ae.image[oe])}}}v(A,Pe)&&x(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function fe(b,A,B,te,ee,ne){const _e=s.convert(B.format,B.colorSpace),de=s.convert(B.type),ce=y(B.internalFormat,_e,de,B.colorSpace);if(!i.get(A).__hasExternalTextures){const Ve=Math.max(1,A.width>>ne),J=Math.max(1,A.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,ce,Ve,J,A.depth,0,_e,de,null):t.texImage2D(ee,ne,ce,Ve,J,0,_e,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ee,i.get(B).__webglTexture,0,Ue(A)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ee,i.get(B).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,A,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||ve(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ps?te=n.DEPTH_COMPONENT32F:ee.type===hs&&(te=n.DEPTH_COMPONENT24));const ne=Ue(A);ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const te=Ue(A);B&&ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const te=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],_e=s.convert(ne.format,ne.colorSpace),de=s.convert(ne.type),ce=y(ne.internalFormat,_e,de,ne.colorSpace),Re=Ue(A);B&&ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ce,A.width,A.height):ve(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ce,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ce,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const te=i.get(A.depthTexture).__webglTexture,ee=Ue(A);if(A.depthTexture.format===xo)ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(A.depthTexture.format===Ka)ve(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Oe(b){const A=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,b)}else if(B){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=n.createRenderbuffer(),De(A.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,A,B){const te=i.get(b);A!==void 0&&fe(te.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Oe(b)}function V(b){const A=b.texture,B=i.get(b),te=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=A.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,_e=m(b)||a;if(ee){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ce=0;ce<A.mipmaps.length;ce++)B.__webglFramebuffer[de][ce]=n.createFramebuffer()}else B.__webglFramebuffer[de]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)B.__webglFramebuffer[de]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const de=b.texture;for(let ce=0,Re=de.length;ce<Re;ce++){const Ve=i.get(de[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ve(b)===!1){const de=ne?A:[A];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<de.length;ce++){const Re=de[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ve=s.convert(Re.format,Re.colorSpace),J=s.convert(Re.type),ut=y(Re.internalFormat,Ve,J,Re.colorSpace,b.isXRRenderTarget===!0),Pe=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ut,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),De(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),$(n.TEXTURE_CUBE_MAP,A,_e);for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)fe(B.__webglFramebuffer[de][ce],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ce);else fe(B.__webglFramebuffer[de],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(A,_e)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const de=b.texture;for(let ce=0,Re=de.length;ce<Re;ce++){const Ve=de[ce],J=i.get(Ve);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),$(n.TEXTURE_2D,Ve,_e),fe(B.__webglFramebuffer,b,Ve,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),v(Ve,_e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,te.__webglTexture),$(de,A,_e),a&&A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)fe(B.__webglFramebuffer[ce],b,A,n.COLOR_ATTACHMENT0,de,ce);else fe(B.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,de,0);v(A,_e)&&x(de),t.unbindTexture()}b.depthBuffer&&Oe(b)}function Xe(b){const A=m(b)||a,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ee=B.length;te<ee;te++){const ne=B[te];if(v(ne,A)){const _e=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ne).__webglTexture;t.bindTexture(_e,de),x(_e),t.unbindTexture()}}}function ge(b){if(a&&b.samples>0&&ve(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,te=b.height;let ee=n.COLOR_BUFFER_BIT;const ne=[],_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),ce=b.isWebGLMultipleRenderTargets===!0;if(ce)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){ne.push(n.COLOR_ATTACHMENT0+Re),b.depthBuffer&&ne.push(_e);const Ve=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ve===!1&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Re]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),ce){const J=i.get(A[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,te,0,0,B,te,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const Ve=i.get(A[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(r.maxSamples,b.samples)}function ve(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function Be(b,A){const B=b.colorSpace,te=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===_m||B!==jr&&B!==zi&&(yt.getTransfer(B)===bt?a===!1?e.has("EXT_sRGB")===!0&&te===ir?(b.format=_m,b.minFilter=ki,b.generateMipmaps=!1):A=dE.sRGBToLinear(A):(te!==ir||ee!==Rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=We,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function XL(n,e,t){const i=t.isWebGL2;function r(s,o=zi){let a;const l=yt.getTransfer(o);if(s===Rs)return n.UNSIGNED_BYTE;if(s===nE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===iE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===AC)return n.BYTE;if(s===CC)return n.SHORT;if(s===W_)return n.UNSIGNED_SHORT;if(s===tE)return n.INT;if(s===hs)return n.UNSIGNED_INT;if(s===ps)return n.FLOAT;if(s===Pu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===RC)return n.ALPHA;if(s===ir)return n.RGBA;if(s===bC)return n.LUMINANCE;if(s===PC)return n.LUMINANCE_ALPHA;if(s===xo)return n.DEPTH_COMPONENT;if(s===Ka)return n.DEPTH_STENCIL;if(s===_m)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LC)return n.RED;if(s===rE)return n.RED_INTEGER;if(s===DC)return n.RG;if(s===sE)return n.RG_INTEGER;if(s===oE)return n.RGBA_INTEGER;if(s===_h||s===gh||s===vh||s===xh)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_h)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$0||s===K0||s===Z0||s===Q0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===K0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Z0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Q0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===aE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===J0||s===ev)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===J0)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ev)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tv||s===nv||s===iv||s===rv||s===sv||s===ov||s===av||s===lv||s===uv||s===cv||s===fv||s===dv||s===hv||s===pv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===iv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ov)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===av)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pv)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yh||s===mv||s===_v)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yh)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_v)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===NC||s===gv||s===vv||s===xv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===yh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YL extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jL={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class qL extends tl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const v=[],x=[],y=new ht;let w=null;const T=new gi;T.layers.enable(1),T.viewport=new It;const M=new gi;M.layers.enable(2),M.viewport=new It;const P=[T,M],S=new YL;S.layers.enable(1),S.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=v[$];return Z===void 0&&(Z=new Xh,v[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=v[$];return Z===void 0&&(Z=new Xh,v[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=v[$];return Z===void 0&&(Z=new Xh,v[$]=Z),Z.getHandSpace()};function D($){const Z=x.indexOf($.inputSource);if(Z===-1)return;const ie=v[Z];ie!==void 0&&(ie.update($.inputSource,$.frame,u||o),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",L);for(let $=0;$<v.length;$++){const Z=x[$];Z!==null&&(x[$]=null,v[$].disconnect(Z))}E=null,k=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",q),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new bo(p.framebufferWidth,p.framebufferHeight,{format:ir,type:Rs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ie=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Ka:xo,ie=_.stencil?vo:hs);const fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new bo(d.textureWidth,d.textureHeight,{format:ir,type:Rs,depthTexture:new wE(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L($){for(let Z=0;Z<$.removed.length;Z++){const ie=$.removed[Z],pe=x.indexOf(ie);pe>=0&&(x[pe]=null,v[pe].disconnect(ie))}for(let Z=0;Z<$.added.length;Z++){const ie=$.added[Z];let pe=x.indexOf(ie);if(pe===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(ie),pe=De;break}else if(x[De]===null){x[De]=ie,pe=De;break}if(pe===-1)break}const fe=v[pe];fe&&fe.connect(ie)}}const O=new W,z=new W;function H($,Z,ie){O.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(ie.matrixWorld);const pe=O.distanceTo(z),fe=Z.projectionMatrix.elements,De=ie.projectionMatrix.elements,Ne=fe[14]/(fe[10]-1),Oe=fe[14]/(fe[10]+1),We=(fe[9]+1)/fe[5],V=(fe[9]-1)/fe[5],Xe=(fe[8]-1)/fe[0],ge=(De[8]+1)/De[0],Ue=Ne*Xe,ve=Ne*ge,X=pe/(-Xe+ge),Be=X*-Xe;Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(X),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const b=Ne+X,A=Oe+X,B=Ue-Be,te=ve+(pe-Be),ee=We*Oe/A*b,ne=V*Oe/A*b;$.projectionMatrix.makePerspective(B,te,ee,ne,b,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function N($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;S.near=M.near=T.near=$.near,S.far=M.far=T.far=$.far,(E!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,k=S.far);const Z=$.parent,ie=S.cameras;N(S,Z);for(let pe=0;pe<ie.length;pe++)N(ie[pe],Z);ie.length===2?H(S,T,M):S.projectionMatrix.copy(T.projectionMatrix),I($,S,Z)};function I($,Z,ie){ie===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let C=null;function K($,Z){if(c=Z.getViewerPose(u||o),g=Z,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let pe=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let fe=0;fe<ie.length;fe++){const De=ie[fe];let Ne=null;if(p!==null)Ne=p.getViewport(De);else{const We=f.getViewSubImage(d,De);Ne=We.viewport,fe===0&&(e.setRenderTargetTextures(h,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let Oe=P[fe];Oe===void 0&&(Oe=new gi,Oe.layers.enable(fe),Oe.viewport=new It,P[fe]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),fe===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Oe)}}for(let ie=0;ie<v.length;ie++){const pe=x[ie],fe=v[ie];pe!==null&&fe!==void 0&&fe.update(pe,Z,u||o)}C&&C($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Q=new TE;Q.setAnimationLoop(K),this.setAnimationLoop=function($){C=$},this.dispose=function(){}}}function $L(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,SE(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===oi&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===oi&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===oi&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KL(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,M=y.length;T<M;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const k=P[S];if(p(k,T,S,w)===!0){const D=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let O=0;O<q.length;O++){const z=q[O],H=_(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+L,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,w){const T=v.value,M=x+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const w=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,k=S.length;E<k;E++){const D=S[E],q=Array.isArray(D.value)?D.value:[D.value];for(let L=0,O=q.length;L<O;L++){const z=q[L],H=_(z),N=y%w;N!==0&&w-N<H.boundary&&(y+=w-N),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=H.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class LE{constructor(e={}){const{canvas:t=XC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Cs,this.toneMappingExposure=1;const x=this;let y=!1,w=0,T=0,M=null,P=-1,S=null;const E=new It,k=new It;let D=null;const q=new at(0);let L=0,O=t.width,z=t.height,H=1,N=null,I=null;const C=new It(0,0,O,z),K=new It(0,0,O,z);let Q=!1;const $=new Y_;let Z=!1,ie=!1,pe=null;const fe=new $t,De=new ht,Ne=new W,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?H:1}let V=i;function Xe(R,F){for(let j=0;j<R.length;j++){const Y=R[j],G=t.getContext(Y,F);if(G!==null)return G}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${V_}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ae,!1),V===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),V=Xe(F,R),V===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ge,Ue,ve,X,Be,b,A,B,te,ee,ne,_e,de,ce,Re,Ve,J,ut,Pe,Ye,Ae,ye,je,Je;function pt(){ge=new o2(V),Ue=new JP(V,ge,e),ge.init(Ue),ye=new XL(V,ge,Ue),ve=new VL(V,ge,Ue),X=new u2(V),Be=new bL,b=new WL(V,ge,ve,Be,Ue,ye,X),A=new t2(x),B=new s2(x),te=new _R(V,Ue),je=new ZP(V,ge,te,Ue),ee=new a2(V,te,X,je),ne=new h2(V,ee,te,X),Pe=new d2(V,Ue,b),Ve=new e2(Be),_e=new RL(x,A,B,ge,Ue,je,Ve),de=new $L(x,Be),ce=new LL,Re=new FL(ge,Ue),ut=new KP(x,A,B,ve,ne,d,l),J=new GL(x,ne,Ue),Je=new KL(V,X,Ue,ve),Ye=new QP(V,ge,X,Ue),Ae=new l2(V,ge,X,Ue),X.programs=_e.programs,x.capabilities=Ue,x.extensions=ge,x.properties=Be,x.renderLists=ce,x.shadowMap=J,x.state=ve,x.info=X}pt();const me=new qL(x,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(O,z,!1))},this.getSize=function(R){return R.set(O,z)},this.setSize=function(R,F,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,z=F,t.width=Math.floor(R*H),t.height=Math.floor(F*H),j===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(O*H,z*H).floor()},this.setDrawingBufferSize=function(R,F,j){O=R,z=F,H=j,t.width=Math.floor(R*j),t.height=Math.floor(F*j),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(C)},this.setViewport=function(R,F,j,Y){R.isVector4?C.set(R.x,R.y,R.z,R.w):C.set(R,F,j,Y),ve.viewport(E.copy(C).multiplyScalar(H).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,F,j,Y){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,F,j,Y),ve.scissor(k.copy(K).multiplyScalar(H).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){ve.setScissorTest(Q=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){I=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(R=!0,F=!0,j=!0){let Y=0;if(R){let G=!1;if(M!==null){const ue=M.texture.format;G=ue===oE||ue===sE||ue===rE}if(G){const ue=M.texture.type,Te=ue===Rs||ue===hs||ue===W_||ue===vo||ue===nE||ue===iE,He=ut.getClearColor(),we=ut.getClearAlpha(),be=He.r,Ge=He.g,Ke=He.b;Te?(p[0]=be,p[1]=Ge,p[2]=Ke,p[3]=we,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=be,g[1]=Ge,g[2]=Ke,g[3]=we,V.clearBufferiv(V.COLOR,0,g))}else Y|=V.COLOR_BUFFER_BIT}F&&(Y|=V.DEPTH_BUFFER_BIT),j&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Re.dispose(),Be.dispose(),A.dispose(),B.dispose(),ne.dispose(),je.dispose(),Je.dispose(),_e.dispose(),me.dispose(),me.removeEventListener("sessionstart",Me),me.removeEventListener("sessionend",Le),pe&&(pe.dispose(),pe=null),se.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=X.autoReset,F=J.enabled,j=J.autoUpdate,Y=J.needsUpdate,G=J.type;pt(),X.autoReset=R,J.enabled=F,J.autoUpdate=j,J.needsUpdate=Y,J.type=G}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const F=R.target;F.removeEventListener("dispose",le),ke(F)}function ke(R){Ie(R),Be.remove(R)}function Ie(R){const F=Be.get(R).programs;F!==void 0&&(F.forEach(function(j){_e.releaseProgram(j)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,j,Y,G,ue){F===null&&(F=Oe);const Te=G.isMesh&&G.matrixWorld.determinant()<0,He=Tt(R,F,j,Y,G);ve.setMaterial(Y,Te);let we=j.index,be=1;if(Y.wireframe===!0){if(we=ee.getWireframeAttribute(j),we===void 0)return;be=2}const Ge=j.drawRange,Ke=j.attributes.position;let Lt=Ge.start*be,tn=(Ge.start+Ge.count)*be;ue!==null&&(Lt=Math.max(Lt,ue.start*be),tn=Math.min(tn,(ue.start+ue.count)*be)),we!==null?(Lt=Math.max(Lt,0),tn=Math.min(tn,we.count)):Ke!=null&&(Lt=Math.max(Lt,0),tn=Math.min(tn,Ke.count));const gt=tn-Lt;if(gt<0||gt===1/0)return;je.setup(G,Y,He,j,we);let Nn,xt=Ye;if(we!==null&&(Nn=te.get(we),xt=Ae,xt.setIndex(Nn)),G.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*We()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(G.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),ve.setLineWidth(qe*We()),G.isLineSegments?xt.setMode(V.LINES):G.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else G.isPoints?xt.setMode(V.POINTS):G.isSprite&&xt.setMode(V.TRIANGLES);if(G.isBatchedMesh)xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)xt.renderInstances(Lt,gt,G.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Td=Math.min(j.instanceCount,qe);xt.renderInstances(Lt,gt,Td)}else xt.render(Lt,gt)};function ot(R,F,j){R.transparent===!0&&R.side===Nr&&R.forceSinglePass===!1?(R.side=oi,R.needsUpdate=!0,Et(R,F,j),R.side=Is,R.needsUpdate=!0,Et(R,F,j),R.side=Nr):Et(R,F,j)}this.compile=function(R,F,j=null){j===null&&(j=R),m=Re.get(j),m.init(),v.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),R!==j&&R.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const Y=new Set;return R.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const He=ue[Te];ot(He,j,G),Y.add(He)}else ot(ue,j,G),Y.add(ue)}),v.pop(),m=null,Y},this.compileAsync=function(R,F,j=null){const Y=this.compile(R,F,j);return new Promise(G=>{function ue(){if(Y.forEach(function(Te){Be.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){G(R);return}setTimeout(ue,10)}ge.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dt=null;function Ce(R){dt&&dt(R)}function Me(){se.stop()}function Le(){se.start()}const se=new TE;se.setAnimationLoop(Ce),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(R){dt=R,me.setAnimationLoop(R),R===null?se.stop():se.start()},me.addEventListener("sessionstart",Me),me.addEventListener("sessionend",Le),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,F,M),m=Re.get(R,v.length),m.init(),v.push(m),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(fe),ie=this.localClippingEnabled,Z=Ve.init(this.clippingPlanes,ie),_=ce.get(R,h.length),_.init(),h.push(_),ze(R,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,I),this.info.render.frame++,Z===!0&&Ve.beginShadows();const j=m.state.shadowsArray;if(J.render(j,R,F),Z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(_,R),m.setupLights(x._useLegacyLights),F.isArrayCamera){const Y=F.cameras;for(let G=0,ue=Y.length;G<ue;G++){const Te=Y[G];Fe(_,R,Te,Te.viewport)}}else Fe(_,R,F);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(x,R,F),je.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ze(R,F,j,Y){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){Y&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const Te=ne.update(R),He=R.material;He.visible&&_.push(R,Te,He,j,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const Te=ne.update(R),He=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(He)){const we=Te.groups;for(let be=0,Ge=we.length;be<Ge;be++){const Ke=we[be],Lt=He[Ke.materialIndex];Lt&&Lt.visible&&_.push(R,Te,Lt,j,Ne.z,Ke)}}else He.visible&&_.push(R,Te,He,j,Ne.z,null)}}const ue=R.children;for(let Te=0,He=ue.length;Te<He;Te++)ze(ue[Te],F,j,Y)}function Fe(R,F,j,Y){const G=R.opaque,ue=R.transmissive,Te=R.transparent;m.setupLightsView(j),Z===!0&&Ve.setGlobalState(x.clippingPlanes,j),ue.length>0&&$e(G,ue,F,j),Y&&ve.viewport(E.copy(Y)),G.length>0&&Ot(G,F,j),ue.length>0&&Ot(ue,F,j),Te.length>0&&Ot(Te,F,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function $e(R,F,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ue=Ue.isWebGL2;pe===null&&(pe=new bo(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Pu:Rs,minFilter:bu,samples:ue?4:0})),x.getDrawingBufferSize(De),ue?pe.setSize(De.x,De.y):pe.setSize(vm(De.x),vm(De.y));const Te=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const He=x.toneMapping;x.toneMapping=Cs,Ot(R,j,Y),b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe);let we=!1;for(let be=0,Ge=F.length;be<Ge;be++){const Ke=F[be],Lt=Ke.object,tn=Ke.geometry,gt=Ke.material,Nn=Ke.group;if(gt.side===Nr&&Lt.layers.test(Y.layers)){const xt=gt.side;gt.side=oi,gt.needsUpdate=!0,et(Lt,j,Y,tn,gt,Nn),gt.side=xt,gt.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe)),x.setRenderTarget(Te),x.setClearColor(q,L),x.toneMapping=He}function Ot(R,F,j){const Y=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ue=R.length;G<ue;G++){const Te=R[G],He=Te.object,we=Te.geometry,be=Y===null?Te.material:Y,Ge=Te.group;He.layers.test(j.layers)&&et(He,F,j,we,be,Ge)}}function et(R,F,j,Y,G,ue){R.onBeforeRender(x,F,j,Y,G,ue),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,F,j,Y,R,ue),G.transparent===!0&&G.side===Nr&&G.forceSinglePass===!1?(G.side=oi,G.needsUpdate=!0,x.renderBufferDirect(j,F,Y,G,R,ue),G.side=Is,G.needsUpdate=!0,x.renderBufferDirect(j,F,Y,G,R,ue),G.side=Nr):x.renderBufferDirect(j,F,Y,G,R,ue),R.onAfterRender(x,F,j,Y,G,ue)}function Et(R,F,j){F.isScene!==!0&&(F=Oe);const Y=Be.get(R),G=m.state.lights,ue=m.state.shadowsArray,Te=G.state.version,He=_e.getParameters(R,G.state,ue,F,j),we=_e.getProgramCacheKey(He);let be=Y.programs;Y.environment=R.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(R.isMeshStandardMaterial?B:A).get(R.envMap||Y.environment),be===void 0&&(R.addEventListener("dispose",le),be=new Map,Y.programs=be);let Ge=be.get(we);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Te)return Ct(R,He),Ge}else He.uniforms=_e.getUniforms(R),R.onBuild(j,He,x),R.onBeforeCompile(He,x),Ge=_e.acquireProgram(He,we),be.set(we,Ge),Y.uniforms=He.uniforms;const Ke=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),Ct(R,He),Y.needsLights=ui(R),Y.lightsStateVersion=Te,Y.needsLights&&(Ke.ambientLightColor.value=G.state.ambient,Ke.lightProbe.value=G.state.probe,Ke.directionalLights.value=G.state.directional,Ke.directionalLightShadows.value=G.state.directionalShadow,Ke.spotLights.value=G.state.spot,Ke.spotLightShadows.value=G.state.spotShadow,Ke.rectAreaLights.value=G.state.rectArea,Ke.ltc_1.value=G.state.rectAreaLTC1,Ke.ltc_2.value=G.state.rectAreaLTC2,Ke.pointLights.value=G.state.point,Ke.pointLightShadows.value=G.state.pointShadow,Ke.hemisphereLights.value=G.state.hemi,Ke.directionalShadowMap.value=G.state.directionalShadowMap,Ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ke.spotShadowMap.value=G.state.spotShadowMap,Ke.spotLightMatrix.value=G.state.spotLightMatrix,Ke.spotLightMap.value=G.state.spotLightMap,Ke.pointShadowMap.value=G.state.pointShadowMap,Ke.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function en(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=cf.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Ct(R,F){const j=Be.get(R);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Tt(R,F,j,Y,G){F.isScene!==!0&&(F=Oe),b.resetTextureUnits();const ue=F.fog,Te=Y.isMeshStandardMaterial?F.environment:null,He=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:jr,we=(Y.isMeshStandardMaterial?B:A).get(Y.envMap||Te),be=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!j.morphAttributes.position,Lt=!!j.morphAttributes.normal,tn=!!j.morphAttributes.color;let gt=Cs;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Nn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Nn!==void 0?Nn.length:0,qe=Be.get(Y),Td=m.state.lights;if(Z===!0&&(ie===!0||R!==S)){const Li=R===S&&Y.id===P;Ve.setState(Y,R,Li)}let Vt=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Td.state.version||qe.outputColorSpace!==He||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||qe.envMap!==we||Y.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==be||qe.vertexTangents!==Ge||qe.morphTargets!==Ke||qe.morphNormals!==Lt||qe.morphColors!==tn||qe.toneMapping!==gt||Ue.isWebGL2===!0&&qe.morphTargetsCount!==xt)&&(Vt=!0):(Vt=!0,qe.__version=Y.version);let Bs=qe.currentProgram;Vt===!0&&(Bs=Et(Y,F,G));let K_=!1,rl=!1,wd=!1;const Sn=Bs.getUniforms(),Hs=qe.uniforms;if(ve.useProgram(Bs.program)&&(K_=!0,rl=!0,wd=!0),Y.id!==P&&(P=Y.id,rl=!0),K_||S!==R){Sn.setValue(V,"projectionMatrix",R.projectionMatrix),Sn.setValue(V,"viewMatrix",R.matrixWorldInverse);const Li=Sn.map.cameraPosition;Li!==void 0&&Li.setValue(V,Ne.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Sn.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Sn.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,rl=!0,wd=!0)}if(G.isSkinnedMesh){Sn.setOptional(V,G,"bindMatrix"),Sn.setOptional(V,G,"bindMatrixInverse");const Li=G.skeleton;Li&&(Ue.floatVertexTextures?(Li.boneTexture===null&&Li.computeBoneTexture(),Sn.setValue(V,"boneTexture",Li.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Sn.setOptional(V,G,"batchingTexture"),Sn.setValue(V,"batchingTexture",G._matricesTexture,b));const Ad=j.morphAttributes;if((Ad.position!==void 0||Ad.normal!==void 0||Ad.color!==void 0&&Ue.isWebGL2===!0)&&Pe.update(G,j,Bs),(rl||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Sn.setValue(V,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Hs.envMap.value=we,Hs.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),rl&&(Sn.setValue(V,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&_t(Hs,wd),ue&&Y.fog===!0&&de.refreshFogUniforms(Hs,ue),de.refreshMaterialUniforms(Hs,Y,H,z,pe),cf.upload(V,en(qe),Hs,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(cf.upload(V,en(qe),Hs,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Sn.setValue(V,"center",G.center),Sn.setValue(V,"modelViewMatrix",G.modelViewMatrix),Sn.setValue(V,"normalMatrix",G.normalMatrix),Sn.setValue(V,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Li=Y.uniformsGroups;for(let Cd=0,NE=Li.length;Cd<NE;Cd++)if(Ue.isWebGL2){const Z_=Li[Cd];Je.update(Z_,Bs),Je.bind(Z_,Bs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bs}function _t(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function ui(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,F,j){Be.get(R.texture).__webglTexture=F,Be.get(R.depthTexture).__webglTexture=j;const Y=Be.get(R);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,F){const j=Be.get(R);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,j=0){M=R,w=F,T=j;let Y=!0,G=null,ue=!1,Te=!1;if(R){const we=Be.get(R);we.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):we.__webglFramebuffer===void 0?b.setupRenderTarget(R):we.__hasExternalTextures&&b.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);const be=R.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Te=!0);const Ge=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?G=Ge[F][j]:G=Ge[F],ue=!0):Ue.isWebGL2&&R.samples>0&&b.useMultisampledRTT(R)===!1?G=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[j]:G=Ge,E.copy(R.viewport),k.copy(R.scissor),D=R.scissorTest}else E.copy(C).multiplyScalar(H).floor(),k.copy(K).multiplyScalar(H).floor(),D=Q;if(ve.bindFramebuffer(V.FRAMEBUFFER,G)&&Ue.drawBuffers&&Y&&ve.drawBuffers(R,G),ve.viewport(E),ve.scissor(k),ve.setScissorTest(D),ue){const we=Be.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,j)}else if(Te){const we=Be.get(R.texture),be=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,we.__webglTexture,j||0,be)}P=-1},this.readRenderTargetPixels=function(R,F,j,Y,G,ue,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(He=He[Te]),He){ve.bindFramebuffer(V.FRAMEBUFFER,He);try{const we=R.texture,be=we.format,Ge=we.type;if(be!==ir&&ye.convert(be)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ge===Pu&&(ge.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ge!==Rs&&ye.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ps&&(Ue.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-Y&&j>=0&&j<=R.height-G&&V.readPixels(F,j,Y,G,ye.convert(be),ye.convert(Ge),ue)}finally{const we=M!==null?Be.get(M).__webglFramebuffer:null;ve.bindFramebuffer(V.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(R,F,j=0){const Y=Math.pow(2,-j),G=Math.floor(F.image.width*Y),ue=Math.floor(F.image.height*Y);b.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,R.x,R.y,G,ue),ve.unbindTexture()},this.copyTextureToTexture=function(R,F,j,Y=0){const G=F.image.width,ue=F.image.height,Te=ye.convert(j.format),He=ye.convert(j.type);b.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,R.x,R.y,G,ue,Te,He,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,R.x,R.y,Te,He,F.image),Y===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(R,F,j,Y,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=R.max.x-R.min.x+1,Te=R.max.y-R.min.y+1,He=R.max.z-R.min.z+1,we=ye.convert(Y.format),be=ye.convert(Y.type);let Ge;if(Y.isData3DTexture)b.setTexture3D(Y,0),Ge=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ke=V.getParameter(V.UNPACK_ROW_LENGTH),Lt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),tn=V.getParameter(V.UNPACK_SKIP_PIXELS),gt=V.getParameter(V.UNPACK_SKIP_ROWS),Nn=V.getParameter(V.UNPACK_SKIP_IMAGES),xt=j.isCompressedTexture?j.mipmaps[G]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(Ge,G,F.x,F.y,F.z,ue,Te,He,we,be,xt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ge,G,F.x,F.y,F.z,ue,Te,He,we,xt.data)):V.texSubImage3D(Ge,G,F.x,F.y,F.z,ue,Te,He,we,be,xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Lt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tn),V.pixelStorei(V.UNPACK_SKIP_ROWS,gt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Nn),G===0&&Y.generateMipmaps&&V.generateMipmap(Ge),ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),ve.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,ve.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===X_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===yd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?yo:lE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yo?_n:jr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZL extends LE{}ZL.prototype.isWebGL1Renderer=!0;class QL extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ym extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lx=new $t,Sm=new mE,Bc=new Sd,Hc=new W;class ux extends Xn{constructor(e=new ar,t=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=s,e.ray.intersectsSphere(Bc)===!1)return;lx.copy(r).invert(),Sm.copy(e.ray).applyMatrix4(lx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=u.getX(g);Hc.fromBufferAttribute(f,m),cx(Hc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Hc.fromBufferAttribute(f,g),cx(Hc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cx(n,e,t,i,r,s,o){const a=Sm.distanceSqToPoint(n);if(a<t){const l=new W;Sm.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class fx extends ai{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $_ extends ar{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new W,d=new W,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const x=c[h][v+1],y=c[h][v],w=c[h+1][v],T=c[h+1][v+1];(h!==0||o>0)&&p.push(x,y,T),(h!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new yr(g,3)),this.setAttribute("normal",new yr(_,3)),this.setAttribute("uv",new yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class JL extends nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uE,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DE extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Yh=new $t,dx=new W,hx=new W;class eD{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Y_,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dx.setFromMatrixPosition(e.matrixWorld),t.position.copy(dx),hx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hx),t.updateMatrixWorld(),Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const px=new $t,Sl=new W,jh=new W;class tD extends eD{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sl),jh.copy(i.position),jh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jh),i.updateMatrixWorld(),r.makeTranslation(-Sl.x,-Sl.y,-Sl.z),px.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(px)}}class mx extends DE{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tD}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nD extends DE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_x(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_x();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _x(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:V_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=V_);const rD=()=>{const n=ct.useRef(null);return ct.useEffect(()=>{const e=new LE({alpha:!0,antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current&&n.current.appendChild(e.domElement);const t=new QL,i=new gi(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=50;const r=new nD(16777215,.4);t.add(r);const s=new mx(8369919,2,100);s.position.set(20,20,20),t.add(s);const o=new mx(16770739,2,100);o.position.set(-20,-20,20),t.add(o);const l=(()=>{const D=document.createElement("canvas");D.width=32,D.height=32;const q=D.getContext("2d"),L=q.createRadialGradient(16,16,0,16,16,16);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=L,q.fillRect(0,0,32,32),new fx(D)})(),u={count:2e4,size:.5,radius:120,branches:4,spin:1.5,randomness:2,randomnessPower:3,insideColor:"#ffdbb3",outsideColor:"#3661a8"},c=new ar,f=new Float32Array(u.count*3),d=new Float32Array(u.count*3),p=new at(u.insideColor),g=new at(u.outsideColor);for(let D=0;D<u.count;D++){const q=D*3,L=Math.random()*u.radius,O=L*u.spin,z=D%u.branches/u.branches*Math.PI*2,H=Math.pow(Math.random(),u.randomnessPower)*(Math.random()<.5?1:-1)*u.randomness*L,N=Math.pow(Math.random(),u.randomnessPower)*(Math.random()<.5?1:-1)*u.randomness*L*.2,I=Math.pow(Math.random(),u.randomnessPower)*(Math.random()<.5?1:-1)*u.randomness*L;f[q]=Math.cos(z+O)*L+H,f[q+1]=N,f[q+2]=Math.sin(z+O)*L+I;const C=p.clone();C.lerp(g,L/u.radius),d[q]=C.r,d[q+1]=C.g,d[q+2]=C.b}c.setAttribute("position",new wi(f,3)),c.setAttribute("color",new wi(d,3));const _=new ym({size:u.size,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,map:l,depthWrite:!1,blending:Yf}),m=new ux(c,_);m.rotation.x=.3,m.rotation.z=-.2,t.add(m);const h=[{color:3171468,radius:8.5,pos:[45,15,-45],orbitSpeed:.002,isGasGiant:!0,hasCraters:!1},{color:9079434,radius:4.2,pos:[-50,-10,-60],orbitSpeed:.004,isGasGiant:!1,hasCraters:!0},{color:10372918,radius:3.8,pos:[20,-25,-25],orbitSpeed:.005,isGasGiant:!1,hasCraters:!0},{color:13942945,radius:7.8,pos:[-35,25,-50],orbitSpeed:.003,isGasGiant:!0,hasCraters:!1}],v=[],x=(D,q,L)=>{const O=document.createElement("canvas");O.width=1024,O.height=512;const z=O.getContext("2d"),H=new at(D);if(z.fillStyle=`#${H.getHexString()}`,z.fillRect(0,0,1024,512),q)for(let I=0;I<40;I++){const C=Math.random()*512,K=Math.random()*60+10;z.fillStyle=Math.random()>.5?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.15)",z.fillRect(0,C,1024,K)}if(L)for(let I=0;I<4e3;I++){const C=Math.random()*1024,K=Math.random()*512,Q=Math.random()*4+1;z.beginPath(),z.arc(C,K,Q,0,Math.PI*2),z.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.2)",z.fill()}const N=new fx(O);return N.wrapS=Ru,N.wrapT=Ru,N};h.forEach((D,q)=>{const L=x(D.color,D.isGasGiant,D.hasCraters),O=new $_(D.radius,32,32),z=new JL({color:D.color,map:L,emissive:D.color,emissiveIntensity:.2,roughness:.8,metalness:.2}),H=new kr(O,z);H.position.set(...D.pos);const N=new ar,I=300,C=new Float32Array(I*3),K=D.radius*1.5;for(let Z=0;Z<I;Z++){const ie=Z/I*Math.PI*2;C[Z*3]=Math.cos(ie)*K,C[Z*3+1]=(Math.random()-.5)*.5,C[Z*3+2]=Math.sin(ie)*K}N.setAttribute("position",new wi(C,3));const Q=new ym({color:D.color,size:.15,transparent:!0,opacity:.8,map:l,depthWrite:!1,blending:Yf}),$=new ux(N,Q);$.rotation.x=Math.PI/4,H.add($),t.add(H),v.push({mesh:H,ring:$,initX:D.pos[0],speed:D.orbitSpeed,offset:q})});let y=0,w=0,T=0,M=0;const P=D=>{y=(D.clientX-window.innerWidth/2)/(window.innerWidth/2),w=(D.clientY-window.innerHeight/2)/(window.innerHeight/2)};window.addEventListener("mousemove",P);const S=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",S);const E=new iD,k=()=>{requestAnimationFrame(k);const D=E.getElapsedTime();m.rotation.y+=.001,_.opacity=.75+Math.sin(D*2)*.1,v.forEach(q=>{q.mesh.rotation.y+=q.speed*20,q.ring.rotation.z+=q.speed*5,q.mesh.position.x=q.initX+Math.sin(D*q.speed*50+q.offset)*4}),T=y*8,M=-w*5,i.position.x+=(T-i.position.x)*.04,i.position.y+=(M-i.position.y)*.04,i.lookAt(t.position),e.render(t,i)};return k(),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("resize",S),n.current&&n.current.removeChild(e.domElement),t.clear(),e.dispose()}},[]),xe.jsx("div",{ref:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})},sD=()=>{const n=ct.useRef(null),e=ct.useRef(null);return ct.useEffect(()=>{const t=Dt.quickTo(n.current,"x",{duration:0,ease:"power3"}),i=Dt.quickTo(n.current,"y",{duration:0,ease:"power3"}),r=Dt.quickTo(e.current,"x",{duration:.15,ease:"power3"}),s=Dt.quickTo(e.current,"y",{duration:.15,ease:"power3"}),o=f=>{t(f.clientX),i(f.clientY),r(f.clientX),s(f.clientY)};window.addEventListener("mousemove",o);const a=()=>{Dt.to(n.current,{scale:2.5,backgroundColor:"#bf00ff",duration:.3}),Dt.to(e.current,{scale:1.5,borderColor:"#bf00ff",duration:.3})},l=()=>{Dt.to(n.current,{scale:1,backgroundColor:"#00f5ff",duration:.3}),Dt.to(e.current,{scale:1,borderColor:"rgba(0, 245, 255, 0.4)",duration:.3})},c=setTimeout(()=>{const f=document.querySelectorAll("button, a, .glass-card");return f.forEach(d=>{d.addEventListener("mouseenter",a),d.addEventListener("mouseleave",l)}),f},1e3);return()=>{window.removeEventListener("mousemove",o),clearTimeout(c),document.querySelectorAll("button, a, .glass-card").forEach(f=>{f.removeEventListener("mouseenter",a),f.removeEventListener("mouseleave",l)})}},[]),xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{ref:n,style:{position:"fixed",top:"-8px",left:"-8px",width:"16px",height:"16px",backgroundColor:"#00f5ff",borderRadius:"50%",pointerEvents:"none",zIndex:9999,mixBlendMode:"screen",boxShadow:"0 0 10px #00f5ff"}}),xe.jsx("div",{ref:e,style:{position:"fixed",top:"-20px",left:"-20px",width:"40px",height:"40px",border:"1px solid rgba(0, 245, 255, 0.4)",borderRadius:"50%",pointerEvents:"none",zIndex:9998,mixBlendMode:"screen"}})]})},Mm={name:"PRINCE KUMAR",tagline:"Full Stack Developer · Problem Solver · Explorer"},ea=[{icon:"👨‍🚀",title:"WHO AM I",body:"Hi! I'm Prince Kumar — a passionate developer from India who loves solving complex problems and exploring the cosmos of code."},{icon:"🚀",title:"WHAT I DO",body:"I specialize in DSA, competitive programming, full-stack development, and DevOps. I turn ideas into scalable software."},{icon:"🌟",title:"MY MISSION",body:"Write clean code. Contribute to open-source. Keep learning and building. The sky was never the limit."},{icon:"⚡",title:"WORK ETHIC",body:"Ship fast, iterate smart. Consistency over intensity. I treat every bug as a lesson and every deadline as fuel."}],oD=[{name:"DSA",color:"#ff6b6b"},{name:"C++",color:"#4ecdc4"},{name:"Python",color:"#ffe66d"},{name:"Docker",color:"#1d9bf0"},{name:"Git",color:"#f05033"},{name:"GitHub",color:"#a371f7"},{name:"HTML/CSS",color:"#e34c26"},{name:"JavaScript",color:"#f7df1e"},{name:"Problem Solving",color:"#bf00ff"},{name:"Linux",color:"#ff8c00"}],aD=[{num:"01",title:"Galaxy DSA Tracker",desc:"Visual DSA progress tracker with topic analytics, streaks, and performance graphs.",link:"https://github.com/prince0dholan54"},{num:"02",title:"DevOps Pipeline",desc:"Automated CI/CD with Docker, GitHub Actions, and shell scripting for zero-downtime deploys.",link:"https://github.com/prince0dholan54"},{num:"03",title:"Portfolio Universe",desc:"This website — built with Three.js, GSAP, React, and passion for cosmic 3D design.",link:"https://github.com/prince0dholan54"}],lD=[{icon:"📞",label:"Phone",value:"9759667535",href:"tel:9759667535"},{icon:"📧",label:"Gmail",value:"Princekumar450912@gmail.com",href:"mailto:Princekumar450912@gmail.com"},{icon:"💼",label:"LinkedIn",value:"prince-kumar",href:"https://www.linkedin.com/in/prince-kumar-a820823a6"},{icon:"🐙",label:"GitHub",value:"prince0dholan54",href:"https://github.com/prince0dholan54"}],uD=()=>{const n=ct.useRef(null),e=["Home","About","Skills","Projects","Contact"];ct.useEffect(()=>{Dt.fromTo(n.current,{y:-100,opacity:0},{y:0,opacity:1,duration:.8,delay:.2,ease:"power3.out"})},[]);const t=i=>{const r=document.getElementById(i.toLowerCase());r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})};return xe.jsx("nav",{ref:n,className:"navbar",children:xe.jsxs("div",{className:"nav-container",children:[xe.jsx("div",{className:"nav-logo",onClick:()=>t("home"),children:"PK"}),xe.jsx("ul",{className:"nav-links",children:e.map(i=>xe.jsx("li",{className:"nav-item",children:xe.jsx("button",{className:"nav-btn",onClick:()=>t(i),children:i})},i))})]})})},cD=()=>{const n=ct.useRef(null),e=ct.useRef(null),t=ct.useRef(null),i=ct.useRef(null),r=ct.useRef(null),s=ct.useRef(null);ct.useEffect(()=>{const a=Dt.timeline();a.fromTo(e.current,{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out"}).fromTo(t.current,{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.6").fromTo(i.current,{opacity:0},{opacity:1,duration:.8,ease:"power2.out"},"-=0.4").fromTo(r.current,{opacity:0,scale:.9},{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)"},"-=0.4"),Dt.to(r.current,{scale:1.05,boxShadow:"0 0 20px rgba(0, 245, 255, 0.4)",duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:a.totalDuration()}),Dt.to(".scroll-line",{height:"100%",opacity:0,duration:1.5,repeat:-1,ease:"power2.inOut",delay:a.totalDuration()})},[]);const o=()=>{const a=document.getElementById("about");a&&window.scrollTo({top:a.offsetTop,behavior:"smooth"})};return xe.jsxs("section",{id:"home",className:"hero-section",ref:n,children:[xe.jsxs("div",{className:"hero-content",children:[xe.jsx("p",{ref:e,className:"hero-eyebrow orbitron",children:"PORTFOLIO · 2025"}),xe.jsx("h1",{ref:t,className:"hero-title",children:Mm.name}),xe.jsx("p",{ref:i,className:"hero-tagline",children:Mm.tagline}),xe.jsx("button",{ref:r,className:"hero-cta orbitron",onClick:o,children:"Explore My Universe"})]}),xe.jsxs("div",{ref:s,className:"scroll-indicator",children:[xe.jsx("span",{className:"orbitron",children:"SCROLL"}),xe.jsx("div",{className:"scroll-track",children:xe.jsx("div",{className:"scroll-line"})})]})]})},fD=()=>{const[n,e]=ct.useState(0),t=ct.useRef(!1),i=ct.useRef(null),r=ct.useRef(null),s=ct.useRef(null);ct.useEffect(()=>{Dt.fromTo(r.current,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r.current,start:"top 75%"}})},[]);const o=(d,p)=>{t.current||d!==n&&(t.current=!0,Dt.to(i.current,{rotateY:p*90,opacity:0,duration:.3,onComplete:()=>{e(d),Dt.set(i.current,{rotateY:-p*90}),Dt.to(i.current,{rotateY:0,opacity:1,duration:.4,onComplete:()=>{t.current=!1}})}}),c())},a=()=>{const d=(n+1)%ea.length;o(d,1)},l=()=>{const d=(n-1+ea.length)%ea.length;o(d,-1)},u=d=>{d>n?o(d,1):d<n&&o(d,-1)},c=()=>{s.current&&clearInterval(s.current),s.current=setInterval(()=>{e(d=>{const p=(d+1)%ea.length;return t.current||(t.current=!0,Dt.to(i.current,{rotateY:90,opacity:0,duration:.3,onComplete:()=>{Dt.set(i.current,{rotateY:-90}),Dt.to(i.current,{rotateY:0,opacity:1,duration:.4,onComplete:()=>{t.current=!1}})}})),p})},5e3)};ct.useEffect(()=>(c(),()=>{s.current&&clearInterval(s.current)}),[]);const f=ea[n];return xe.jsxs("section",{id:"about",className:"about-section",ref:r,children:[xe.jsx("h2",{className:"section-title orbitron",children:"About Me"}),xe.jsxs("div",{className:"card-container",children:[xe.jsx("button",{className:"nav-arrow prev-arrow",onClick:l,children:"❮"}),xe.jsxs("div",{className:"glass-card about-card",ref:i,children:[xe.jsx("div",{className:"card-icon",children:f.icon}),xe.jsx("h3",{className:"card-title orbitron",children:f.title}),xe.jsx("p",{className:"card-body",children:f.body})]}),xe.jsx("button",{className:"nav-arrow next-arrow",onClick:a,children:"❯"})]}),xe.jsx("div",{className:"dot-indicators",children:ea.map((d,p)=>xe.jsx("div",{className:`dot ${p===n?"active":""}`,onClick:()=>u(p)},p))})]})},dD=()=>{const[n,e]=ct.useState(null),t=ct.useRef(null),i=ct.useRef([]);return ct.useEffect(()=>{Dt.fromTo(i.current,{opacity:0,y:20,scale:.8},{opacity:1,y:0,scale:1,duration:.6,ease:"back.out(1.7)",stagger:.06,scrollTrigger:{trigger:t.current,start:"top 75%"}})},[]),xe.jsxs("section",{id:"skills",className:"skills-section",ref:t,children:[xe.jsx("h2",{className:"section-title orbitron",children:"Constellation of Skills"}),xe.jsx("div",{className:"skills-grid",children:oD.map((r,s)=>{const o=n===s;return xe.jsx("div",{ref:a=>i.current[s]=a,className:"skill-badge glass-card orbitron",onMouseEnter:()=>e(s),onMouseLeave:()=>e(null),style:{borderColor:o?r.color:"rgba(255,255,255,0.1)",color:o?r.color:"#fff",boxShadow:o?`0 0 20px ${r.color}40`:"none",transform:o?"translateY(-4px) scale(1.05)":"none"},children:r.name},s)})})]})},hD=()=>{const n=ct.useRef(null),e=ct.useRef([]);return ct.useEffect(()=>{Dt.fromTo(e.current,{opacity:0,y:50},{opacity:1,y:0,duration:.8,ease:"power3.out",stagger:.15,scrollTrigger:{trigger:n.current,start:"top 75%"}})},[]),xe.jsxs("section",{id:"projects",className:"projects-section",ref:n,children:[xe.jsx("h2",{className:"section-title orbitron",children:"Featured Projects"}),xe.jsx("div",{className:"projects-grid",children:aD.map((t,i)=>xe.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"project-card glass-card",ref:r=>e.current[i]=r,children:[xe.jsx("div",{className:"card-top-border"}),xe.jsxs("div",{className:"project-content",children:[xe.jsx("span",{className:"project-num orbitron",children:t.num}),xe.jsx("h3",{className:"project-title orbitron",children:t.title}),xe.jsx("p",{className:"project-desc",children:t.desc}),xe.jsxs("div",{className:"project-link orbitron",children:["View Project ",xe.jsx("span",{className:"arrow",children:"→"})]})]})]},i))})]})},pD=()=>{const n=ct.useRef(null),e=ct.useRef([]);return ct.useEffect(()=>{Dt.fromTo(e.current,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:"power3.out",stagger:.1,scrollTrigger:{trigger:n.current,start:"top 80%"}})},[]),xe.jsxs("footer",{id:"contact",className:"contact-section",ref:n,children:[xe.jsxs("div",{className:"contact-content",children:[xe.jsx("h2",{className:"contact-title orbitron",ref:t=>e.current[0]=t,children:"Let's Connect Across the Galaxy"}),xe.jsx("div",{className:"contact-grid",children:lD.map((t,i)=>xe.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"contact-card glass-card",ref:r=>e.current[i+1]=r,children:[xe.jsx("span",{className:"contact-icon",children:t.icon}),xe.jsxs("div",{className:"contact-info",children:[xe.jsx("span",{className:"contact-label orbitron",children:t.label}),xe.jsx("span",{className:"contact-value",children:t.value})]})]},i))})]}),xe.jsxs("div",{className:"footer-bar orbitron",children:["© 2025 ",Mm.name," · BUILT WITH 🚀 & STARDUST"]})]})};Dt.registerPlugin(rt);function mD(){return xe.jsxs(xe.Fragment,{children:[xe.jsx(rD,{}),xe.jsx(sD,{}),xe.jsx(uD,{}),xe.jsxs("main",{children:[xe.jsx(cD,{}),xe.jsx(fD,{}),xe.jsx(dD,{}),xe.jsx(hD,{}),xe.jsx(pD,{})]})]})}qh.createRoot(document.getElementById("root")).render(xe.jsx(KE.StrictMode,{children:xe.jsx(mD,{})}));
