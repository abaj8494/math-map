import"../chunks/Bzak7iHL.js";import"../chunks/C4pPj8Q1.js";import{o as wc,e as st,s as $e}from"../chunks/BTq9xqjW.js";import{m as Pa,j as un,ad as Rc,o as Il,k as Cc,i as Pc,g as y,aC as br,l as Dc,H as Lc,s as yo,n as Da,x as pr,T as Uc,al as Ic,p as ms,t as Nc,aQ as Ma,aR as Sa,q as Fc,aS as Nl,ai as Fl,ab as Ol,aM as wt,O as Mo,Q as So,v as Bl,w as Oc,aT as La,A as zl,a0 as kl,aU as Bc,aV as zc,a6 as kc,aW as Gc,ah as Hc,aX as Vc,R as Wc,aY as Xc,y as qc,aZ as Yc,a_ as jc,a8 as Kc,a$ as Zc,b0 as $c,b1 as Jc,b2 as Qc,b3 as eh,B as th,b4 as Ri,b5 as nh,C as it,D as Ci,F as pt,G as Ze,I as ih,aE as Ve,L as ae,b as he,J as ye,K as ge,b6 as Ua,a1 as rh,e as On,M as Fr,aP as ah}from"../chunks/Bvkk6tmS.js";import{b as sh,i as mt}from"../chunks/DDySOoCC.js";import{i as oh}from"../chunks/DvgqMaFo.js";function xn(i,e){return e}function lh(i,e,t){for(var n=i.items,r=[],a=e.length,s=0;s<a;s++)Gc(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;Hc(l),l.append(t),n.clear(),Dn(i,e[0].prev,e[a-1].next)}Vc(r,()=>{for(var c=0;c<a;c++){var u=e[c];o||(n.delete(u.k),Dn(i,u.prev,u.next)),kl(u.e,!o)}})}function yn(i,e,t,n,r,a=null){var s=i,o={flags:e,items:new Map,first:null},l=(e&Nl)!==0;if(l){var c=i;s=un?Pa(Rc(c)):c.appendChild(Il())}un&&Cc();var u=null,f=!1,d=new Map,g=br(()=>{var h=t();return Ol(h)?h:h==null?[]:Fl(h)}),_,M;function p(){ch(M,_,o,d,s,r,e,n,t),a!==null&&(_.length===0?u?Bl(u):u=ms(()=>a(s)):u!==null&&Oc(u,()=>{u=null}))}Pc(()=>{M??(M=Wc),_=y(g);var h=_.length;if(f&&h===0)return;f=h===0;let P=!1;if(un){var R=Dc(s)===Lc;R!==(h===0)&&(s=yo(),Pa(s),Da(!1),P=!0)}if(un){for(var b=null,z,w=0;w<h;w++){if(pr.nodeType===Uc&&pr.data===Ic){s=pr,P=!0,Da(!1);break}var C=_[w],U=n(C,w);z=gs(pr,o,b,null,C,U,w,r,e,t),o.items.set(U,z),b=z}h>0&&Pa(yo())}if(un)h===0&&a&&(u=ms(()=>a(s)));else if(Nc()){var S=new Set,x=Fc;for(w=0;w<h;w+=1){C=_[w],U=n(C,w);var D=o.items.get(U)??d.get(U);D?(e&(Ma|Sa))!==0&&Gl(D,C,w,e):(z=gs(null,o,null,null,C,U,w,r,e,t,!0),d.set(U,z)),S.add(U)}for(const[V,H]of o.items)S.has(V)||x.skipped_effects.add(H.e);x.add_callback(p)}else p();P&&Da(!0),y(g)}),un&&(s=pr)}function ch(i,e,t,n,r,a,s,o,l){var Me,Pe,Ue,tt;var c=(s&zc)!==0,u=(s&(Ma|Sa))!==0,f=e.length,d=t.items,g=t.first,_=g,M,p=null,h,P=[],R=[],b,z,w,C;if(c)for(C=0;C<f;C+=1)b=e[C],z=o(b,C),w=d.get(z),w!==void 0&&((Me=w.a)==null||Me.measure(),(h??(h=new Set)).add(w));for(C=0;C<f;C+=1){if(b=e[C],z=o(b,C),w=d.get(z),w===void 0){var U=n.get(z);if(U!==void 0){n.delete(z),d.set(z,U);var S=p?p.next:_;Dn(t,p,U),Dn(t,U,S),Ia(U,S,r),p=U}else{var x=_?_.e.nodes_start:r;p=gs(x,t,p,p===null?t.first:p.next,b,z,C,a,s,l)}d.set(z,p),P=[],R=[],_=p.next;continue}if(u&&Gl(w,b,C,s),(w.e.f&La)!==0&&(Bl(w.e),c&&((Pe=w.a)==null||Pe.unfix(),(h??(h=new Set)).delete(w))),w!==_){if(M!==void 0&&M.has(w)){if(P.length<R.length){var D=R[0],V;p=D.prev;var H=P[0],X=P[P.length-1];for(V=0;V<P.length;V+=1)Ia(P[V],D,r);for(V=0;V<R.length;V+=1)M.delete(R[V]);Dn(t,H.prev,X.next),Dn(t,p,H),Dn(t,X,D),_=D,p=X,C-=1,P=[],R=[]}else M.delete(w),Ia(w,_,r),Dn(t,w.prev,w.next),Dn(t,w,p===null?t.first:p.next),Dn(t,p,w),p=w;continue}for(P=[],R=[];_!==null&&_.k!==z;)(_.e.f&La)===0&&(M??(M=new Set)).add(_),R.push(_),_=_.next;if(_===null)continue;w=_}P.push(w),p=w,_=w.next}if(_!==null||M!==void 0){for(var te=M===void 0?[]:Fl(M);_!==null;)(_.e.f&La)===0&&te.push(_),_=_.next;var Y=te.length;if(Y>0){var fe=(s&Nl)!==0&&f===0?r:null;if(c){for(C=0;C<Y;C+=1)(Ue=te[C].a)==null||Ue.measure();for(C=0;C<Y;C+=1)(tt=te[C].a)==null||tt.fix()}lh(t,te,fe)}}c&&zl(()=>{var _t;if(h!==void 0)for(w of h)(_t=w.a)==null||_t.apply()}),i.first=t.first&&t.first.e,i.last=p&&p.e;for(var K of n.values())kl(K.e);n.clear()}function Gl(i,e,t,n){(n&Ma)!==0&&So(i.v,e),(n&Sa)!==0?So(i.i,t):i.i=t}function gs(i,e,t,n,r,a,s,o,l,c,u){var f=(l&Ma)!==0,d=(l&Bc)===0,g=f?d?wt(r,!1,!1):Mo(r):r,_=(l&Sa)===0?s:Mo(s),M={i:_,v:g,k:a,a:null,e:null,prev:t,next:n};try{if(i===null){var p=document.createDocumentFragment();p.append(i=Il())}return M.e=ms(()=>o(i,g,_,c),un),M.e.prev=t&&t.e,M.e.next=n&&n.e,t===null?u||(e.first=M):(t.next=M,t.e.next=M.e),n!==null&&(n.prev=M,n.e.prev=M.e),M}finally{}}function Ia(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=i.e.nodes_start;a!==null&&a!==n;){var s=kc(a);r.before(a),a=s}}function Dn(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}const bo=[...` 	
\r\f \v\uFEFF`];function hh(i,e,t){var n=""+i;if(t){for(var r in t)if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,s=0;(s=n.indexOf(r,s))>=0;){var o=s+a;(s===0||bo.includes(n[s-1]))&&(o===n.length||bo.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function uh(i,e){return i==null?null:String(i)}function dh(i,e,t,n,r,a){var s=i.__className;if(un||s!==t||s===void 0){var o=hh(t,n,a);(!un||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):i.className=o),i.__className=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&i.classList.toggle(l,c)}return a}function Pi(i,e,t,n){var r=i.__style;if(un||r!==e){var a=uh(e);(!un||a!==i.getAttribute("style"))&&(a==null?i.removeAttribute("style"):i.style.cssText=a),i.__style=e}return n}function Hl(i,e,t=!1){if(i.multiple){if(e==null)return;if(!Ol(e))return Yc();for(var n of i.options)n.selected=e.includes(Ar(n));return}for(n of i.options){var r=Ar(n);if(jc(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function fh(i){var e=new MutationObserver(()=>{Hl(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Kc(()=>{e.disconnect()})}function Na(i,e,t=e){var n=!0;Xc(i,"change",r=>{var a=r?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(a),Ar);else{var o=i.querySelector(a)??i.querySelector("option:not([disabled])");s=o&&Ar(o)}t(s)}),qc(()=>{var r=e();if(Hl(i,r,n),n&&r===void 0){var a=i.querySelector(":checked");a!==null&&(r=Ar(a),t(r))}i.__value=r,n=!1}),fh(i)}function Ar(i){return"__value"in i?i.__value:i.value}const ph=Symbol("is custom element"),mh=Symbol("is html");function an(i){if(un){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;_a(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var r=i.checked;_a(i,"checked",null),i.checked=r}}};i.__on_r=t,zl(t),Zc()}}function sn(i,e){var t=Vl(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function _a(i,e,t,n){var r=Vl(i);un&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="loading"&&(i[$c]=t),t==null?i.removeAttribute(e):typeof t!="string"&&gh(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Vl(i){return i.__attributes??(i.__attributes={[ph]:i.nodeName.includes("-"),[mh]:i.namespaceURI===Jc})}var Eo=new Map;function gh(i){var e=i.getAttribute("is")||i.nodeName,t=Eo.get(e);if(t)return t;Eo.set(e,t=[]);for(var n,r=i,a=Element.prototype;a!==r;){n=eh(r);for(var s in n)n[s].set&&t.push(s);r=Qc(r)}return t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="170",Ji={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_h=0,To=1,vh=2,Wl=1,xh=2,Vn=3,oi=0,ln=1,Wn=2,ri=0,Qi=1,Ao=2,wo=3,Ro=4,yh=5,vi=100,Mh=101,Sh=102,bh=103,Eh=104,Th=200,Ah=201,wh=202,Rh=203,_s=204,vs=205,Ch=206,Ph=207,Dh=208,Lh=209,Uh=210,Ih=211,Nh=212,Fh=213,Oh=214,xs=0,ys=1,Ms=2,nr=3,Ss=4,bs=5,Es=6,Ts=7,Xl=0,Bh=1,zh=2,ai=0,kh=1,Gh=2,Hh=3,Vh=4,Wh=5,Xh=6,qh=7,ql=300,ir=301,rr=302,As=303,ws=304,ba=306,Rs=1e3,yi=1001,Cs=1002,Tn=1003,Yh=1004,Or=1005,In=1006,Fa=1007,Mi=1008,jn=1009,Yl=1010,jl=1011,wr=1012,lo=1013,Si=1014,Xn=1015,Cr=1016,co=1017,ho=1018,ar=1020,Kl=35902,Zl=1021,$l=1022,En=1023,Jl=1024,Ql=1025,er=1026,sr=1027,ec=1028,uo=1029,tc=1030,fo=1031,po=1033,ha=33776,ua=33777,da=33778,fa=33779,Ps=35840,Ds=35841,Ls=35842,Us=35843,Is=36196,Ns=37492,Fs=37496,Os=37808,Bs=37809,zs=37810,ks=37811,Gs=37812,Hs=37813,Vs=37814,Ws=37815,Xs=37816,qs=37817,Ys=37818,js=37819,Ks=37820,Zs=37821,pa=36492,$s=36494,Js=36495,nc=36283,Qs=36284,eo=36285,to=36286,jh=3200,Kh=3201,ic=0,Zh=1,ii="",mn="srgb",lr="srgb-linear",Ea="linear",Mt="srgb",Di=7680,Co=519,$h=512,Jh=513,Qh=514,rc=515,eu=516,tu=517,nu=518,iu=519,no=35044,Po="300 es",qn=2e3,va=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,io=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function Oa(i,e,t){return(1-t)*i+t*e}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const au={DEG2RAD:ma};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,a,s,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],g=n[5],_=n[8],M=r[0],p=r[3],h=r[6],P=r[1],R=r[4],b=r[7],z=r[2],w=r[5],C=r[8];return a[0]=s*M+o*P+l*z,a[3]=s*p+o*R+l*w,a[6]=s*h+o*b+l*C,a[1]=c*M+u*P+f*z,a[4]=c*p+u*R+f*w,a[7]=c*h+u*b+f*C,a[2]=d*M+g*P+_*z,a[5]=d*p+g*R+_*w,a[8]=d*h+g*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,d=o*l-u*a,g=c*a-s*l,_=t*f+n*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-u*n)*M,e[2]=(o*n-r*s)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*a-o*t)*M,e[6]=g*M,e[7]=(n*l-c*t)*M,e[8]=(s*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new at;function ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){const i=xa("canvas");return i.style.display="block",i}const Do={};function Er(i){i in Do||(Do[i]=!0,console.warn(i))}function ou(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function lu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lo=[.64,.33,.3,.6,.15,.06],Uo=[.2126,.7152,.0722],Io=[.3127,.329],No=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[lr]:{primaries:Lo,whitePoint:Io,transfer:Ea,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:Uo,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:Lo,whitePoint:Io,transfer:Mt,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:Uo,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let Li;class hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=xa("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Yn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uu=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(za(r[s].image)):a.push(za(r[s]))}else a=za(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class nn extends Ti{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=yi,r=yi,a=In,s=Mi,o=En,l=jn,c=nn.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=si(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ql;nn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],g=l[5],_=l[9],M=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,b=(g+1)/2,z=(h+1)/2,w=(u+d)/4,C=(f+M)/4,U=(_+p)/4;return R>b&&R>z?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=w/n,a=C/n):b>z?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=w/r,a=U/r):z<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(z),n=C/a,r=U/a),this.set(n,r,a,t),this}let P=Math.sqrt((p-_)*(p-_)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(P)<.001&&(P=1),this.x=(p-_)/P,this.y=(f-M)/P,this.z=(d-u)/P,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends Ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oc extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pu extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=a[s+0],g=a[s+1],_=a[s+2],M=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=M;return}if(f!==M||l!==d||c!==g||u!==_){let p=1-o;const h=l*d+c*g+u*_+f*M,P=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const z=Math.sqrt(R),w=Math.atan2(z,h*P);p=Math.sin(p*w)/z,o=Math.sin(o*w)/z}const b=o*P;if(l=l*p+d*b,c=c*p+g*b,u=u*p+_*b,f=f*p+M*b,p===1-o){const z=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=z,c*=z,u*=z,f*=z}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=a[s],d=a[s+1],g=a[s+2],_=a[s+3];return e[t]=o*_+u*f+l*g-c*d,e[t+1]=l*_+u*d+c*f-o*g,e[t+2]=c*_+u*g+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(a/2),d=l(n/2),g=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=d*u*f+c*g*_,this._y=c*g*f-d*u*_,this._z=c*u*_+d*g*f,this._w=c*u*f-d*g*_;break;case"YXZ":this._x=d*u*f+c*g*_,this._y=c*g*f-d*u*_,this._z=c*u*_-d*g*f,this._w=c*u*f+d*g*_;break;case"ZXY":this._x=d*u*f-c*g*_,this._y=c*g*f+d*u*_,this._z=c*u*_+d*g*f,this._w=c*u*f-d*g*_;break;case"ZYX":this._x=d*u*f-c*g*_,this._y=c*g*f+d*u*_,this._z=c*u*_-d*g*f,this._w=c*u*f+d*g*_;break;case"YZX":this._x=d*u*f+c*g*_,this._y=c*g*f+d*u*_,this._z=c*u*_-d*g*f,this._w=c*u*f-d*g*_;break;case"XZY":this._x=d*u*f-c*g*_,this._y=c*g*f-d*u*_,this._z=c*u*_+d*g*f,this._w=c*u*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),u=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+l*c+s*f-o*u,this.y=n+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new B,Oo=new Ei;class Pr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Mn):Mn.fromBufferAttribute(a,s),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),zr.subVectors(this.max,mr),Ui.subVectors(e.a,mr),Ii.subVectors(e.b,mr),Ni.subVectors(e.c,mr),Zn.subVectors(Ii,Ui),$n.subVectors(Ni,Ii),hi.subVectors(Ui,Ni);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!Ga(t,Ui,Ii,Ni,zr)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Ui,Ii,Ni,zr))?!1:(kr.crossVectors(Zn,$n),t=[kr.x,kr.y,kr.z],Ga(t,Ui,Ii,Ni,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new B,new B,new B,new B,new B,new B,new B,new B],Mn=new B,Br=new Pr,Ui=new B,Ii=new B,Ni=new B,Zn=new B,$n=new B,hi=new B,mr=new B,zr=new B,kr=new B,ui=new B;function Ga(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){ui.fromArray(i,a);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mu=new Pr,gr=new B,Ha=new B;class Ta{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Ha)),this.expandByPoint(gr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new B,Va=new B,Gr=new B,Jn=new B,Wa=new B,Hr=new B,Xa=new B;class Aa{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Va.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Va);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Gr),o=Jn.dot(this.direction),l=-Jn.dot(Gr),c=Jn.lengthSq(),u=Math.abs(1-s*s);let f,d,g,_;if(u>0)if(f=s*l-o,d=s*o-l,_=a*u,f>=0)if(d>=-_)if(d<=_){const M=1/u;f*=M,d*=M,g=f*(f+s*d+2*o)+d*(s*f+d+2*l)+c}else d=a,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-l),a),g=d*(d+2*l)+c):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+d*(d+2*l)+c);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Va).addScaledVector(Gr,d),g}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,a){Wa.subVectors(t,e),Hr.subVectors(n,e),Xa.crossVectors(Wa,Hr);let s=this.direction.dot(Xa),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Jn,Hr));if(l<0)return null;const c=o*this.direction.dot(Wa.cross(Jn));if(c<0||l+c>s)return null;const u=-o*Jn.dot(Xa);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,a,s,o,l,c,u,f,d,g,_,M,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,u,f,d,g,_,M,p)}set(e,t,n,r,a,s,o,l,c,u,f,d,g,_,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=g,h[7]=_,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),a=1/Fi.setFromMatrixColumn(e,1).length(),s=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*u,g=s*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+_*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=_+g*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,g=l*f,_=c*u,M=c*f;t[0]=d+M*o,t[4]=_*o-g,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=g*o-_,t[6]=M+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,g=l*f,_=c*u,M=c*f;t[0]=d-M*o,t[4]=-s*f,t[8]=_+g*o,t[1]=g+_*o,t[5]=s*u,t[9]=M-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,g=s*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-g,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=g*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,g=s*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-d*f,t[8]=_*f+g,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*f+_,t[10]=d-M*f}else if(e.order==="XZY"){const d=s*l,g=s*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+M,t[5]=s*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=o*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gu,e,_u)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Qn.crossVectors(n,cn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Qn.crossVectors(n,cn)),Qn.normalize(),Vr.crossVectors(cn,Qn),r[0]=Qn.x,r[4]=Vr.x,r[8]=cn.x,r[1]=Qn.y,r[5]=Vr.y,r[9]=cn.y,r[2]=Qn.z,r[6]=Vr.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],g=n[13],_=n[2],M=n[6],p=n[10],h=n[14],P=n[3],R=n[7],b=n[11],z=n[15],w=r[0],C=r[4],U=r[8],S=r[12],x=r[1],D=r[5],V=r[9],H=r[13],X=r[2],te=r[6],Y=r[10],fe=r[14],K=r[3],Me=r[7],Pe=r[11],Ue=r[15];return a[0]=s*w+o*x+l*X+c*K,a[4]=s*C+o*D+l*te+c*Me,a[8]=s*U+o*V+l*Y+c*Pe,a[12]=s*S+o*H+l*fe+c*Ue,a[1]=u*w+f*x+d*X+g*K,a[5]=u*C+f*D+d*te+g*Me,a[9]=u*U+f*V+d*Y+g*Pe,a[13]=u*S+f*H+d*fe+g*Ue,a[2]=_*w+M*x+p*X+h*K,a[6]=_*C+M*D+p*te+h*Me,a[10]=_*U+M*V+p*Y+h*Pe,a[14]=_*S+M*H+p*fe+h*Ue,a[3]=P*w+R*x+b*X+z*K,a[7]=P*C+R*D+b*te+z*Me,a[11]=P*U+R*V+b*Y+z*Pe,a[15]=P*S+R*H+b*fe+z*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],g=e[14],_=e[3],M=e[7],p=e[11],h=e[15];return _*(+a*l*f-r*c*f-a*o*d+n*c*d+r*o*g-n*l*g)+M*(+t*l*g-t*c*d+a*s*d-r*s*g+r*c*u-a*l*u)+p*(+t*c*f-t*o*g-a*s*f+n*s*g+a*o*u-n*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*s*f-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],g=e[11],_=e[12],M=e[13],p=e[14],h=e[15],P=f*p*c-M*d*c+M*l*g-o*p*g-f*l*h+o*d*h,R=_*d*c-u*p*c-_*l*g+s*p*g+u*l*h-s*d*h,b=u*M*c-_*f*c+_*o*g-s*M*g-u*o*h+s*f*h,z=_*f*l-u*M*l-_*o*d+s*M*d+u*o*p-s*f*p,w=t*P+n*R+r*b+a*z;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=P*C,e[1]=(M*d*a-f*p*a-M*r*g+n*p*g+f*r*h-n*d*h)*C,e[2]=(o*p*a-M*l*a+M*r*c-n*p*c-o*r*h+n*l*h)*C,e[3]=(f*l*a-o*d*a-f*r*c+n*d*c+o*r*g-n*l*g)*C,e[4]=R*C,e[5]=(u*p*a-_*d*a+_*r*g-t*p*g-u*r*h+t*d*h)*C,e[6]=(_*l*a-s*p*a-_*r*c+t*p*c+s*r*h-t*l*h)*C,e[7]=(s*d*a-u*l*a+u*r*c-t*d*c-s*r*g+t*l*g)*C,e[8]=b*C,e[9]=(_*f*a-u*M*a-_*n*g+t*M*g+u*n*h-t*f*h)*C,e[10]=(s*M*a-_*o*a+_*n*c-t*M*c-s*n*h+t*o*h)*C,e[11]=(u*o*a-s*f*a-u*n*c+t*f*c+s*n*g-t*o*g)*C,e[12]=z*C,e[13]=(u*M*r-_*f*r+_*n*d-t*M*d-u*n*p+t*f*p)*C,e[14]=(_*o*r-s*M*r-_*n*l+t*M*l+s*n*p-t*o*p)*C,e[15]=(s*f*r-u*o*r+u*n*l-t*f*l-s*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,f=o+o,d=a*c,g=a*u,_=a*f,M=s*u,p=s*f,h=o*f,P=l*c,R=l*u,b=l*f,z=n.x,w=n.y,C=n.z;return r[0]=(1-(M+h))*z,r[1]=(g+b)*z,r[2]=(_-R)*z,r[3]=0,r[4]=(g-b)*w,r[5]=(1-(d+h))*w,r[6]=(p+P)*w,r[7]=0,r[8]=(_+R)*C,r[9]=(p-P)*C,r[10]=(1-(d+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Fi.set(r[0],r[1],r[2]).length();const s=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/a,u=1/s,f=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=qn){const l=this.elements,c=2*a/(t-e),u=2*a/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(o===qn)g=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===va)g=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=qn){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(s-a),d=(t+e)*c,g=(n+r)*u;let _,M;if(o===qn)_=(s+a)*f,M=-2*f;else if(o===va)_=a*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new B,Sn=new Pt,gu=new B(0,0,0),_u=new B(1,1,1),Qn=new B,Vr=new B,cn=new B,Bo=new Pt,zo=new Ei;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vu=0;const ko=new B,Oi=new Ei,kn=new Pt,Wr=new B,_r=new B,xu=new B,yu=new Ei,Go=new B(1,0,0),Ho=new B(0,1,0),Vo=new B(0,0,1),Wo={type:"added"},Mu={type:"removed"},Bi={type:"childadded",child:null},qa={type:"childremoved",child:null};class qt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new B,t=new Nn,n=new Ei,r=new B(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new at}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(_r,Wr,this.up):kn.lookAt(Wr,_r,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(kn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wo),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mu),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wo),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),g=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qt.DEFAULT_UP=new B(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new B,Gn=new B,Ya=new B,Hn=new B,zi=new B,ki=new B,Xo=new B,ja=new B,Ka=new B,Za=new B,$a=new Ot,Ja=new Ot,Qa=new Ot;class _n{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){bn.subVectors(r,t),Gn.subVectors(n,t),Ya.subVectors(e,t);const s=bn.dot(bn),o=bn.dot(Gn),l=bn.dot(Ya),c=Gn.dot(Gn),u=Gn.dot(Ya),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,g=(c*l-o*u)*d,_=(s*u-o*l)*d;return a.set(1-g-_,_,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Hn.x),l.addScaledVector(s,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return $a.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),$a.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector($a,a.x),s.addScaledVector(Ja,a.y),s.addScaledVector(Qa,a.z),s}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Gn.subVectors(e,t),bn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;zi.subVectors(r,n),ki.subVectors(a,n),ja.subVectors(e,n);const l=zi.dot(ja),c=ki.dot(ja);if(l<=0&&c<=0)return t.copy(n);Ka.subVectors(e,r);const u=zi.dot(Ka),f=ki.dot(Ka);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(zi,s);Za.subVectors(e,a);const g=zi.dot(Za),_=ki.dot(Za);if(_>=0&&g<=_)return t.copy(a);const M=g*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ki,o);const p=u*_-g*f;if(p<=0&&f-u>=0&&g-_>=0)return Xo.subVectors(a,r),o=(f-u)/(f-u+(g-_)),t.copy(r).addScaledVector(Xo,o);const h=1/(p+M+d);return s=M*h,o=d*h,t.copy(n).addScaledVector(zi,s).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=ru(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=es(s,a,e+1/3),this.g=es(s,a,e),this.b=es(s,a,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return gt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(tn(Kt.r*255,0,255))*65536+Math.round(tn(Kt.g*255,0,255))*256+Math.round(tn(Kt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,r=Kt.g,a=Kt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case n:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-n)/f+2;break;case a:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=mn){gt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,r=Kt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Xr);const n=Oa(ei.h,Xr.h,t),r=Oa(ei.s,Xr.s,t),a=Oa(ei.l,Xr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new ft;ft.NAMES=lc;let Su=0;class Ai extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=si(),this.name="",this.blending=Qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=vs,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_s&&(n.blendSrc=this.blendSrc),this.blendDst!==vs&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cc extends Ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new B,qr=new Ye;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}}class hc extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wn extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bu=0;const pn=new Pt,ts=new qt,Gi=new B,hn=new Pr,vr=new Pr,Xt=new B;class Rn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ac(e)?uc:hc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new at().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ts.lookAt(e),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new wn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(hn.min,vr.min),hn.expandByPoint(Xt),Xt.addVectors(hn.max,vr.max),hn.expandByPoint(Xt)):(hn.expandByPoint(vr.min),hn.expandByPoint(vr.max))}hn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Xt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),Xt.add(Gi)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new B,l[U]=new B;const c=new B,u=new B,f=new B,d=new Ye,g=new Ye,_=new Ye,M=new B,p=new B;function h(U,S,x){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),d.fromBufferAttribute(a,U),g.fromBufferAttribute(a,S),_.fromBufferAttribute(a,x),u.sub(c),f.sub(c),g.sub(d),_.sub(d);const D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(D),o[U].add(M),o[S].add(M),o[x].add(M),l[U].add(p),l[S].add(p),l[x].add(p))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let U=0,S=P.length;U<S;++U){const x=P[U],D=x.start,V=x.count;for(let H=D,X=D+V;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new B,b=new B,z=new B,w=new B;function C(U){z.fromBufferAttribute(r,U),w.copy(z);const S=o[U];R.copy(S),R.sub(z.multiplyScalar(z.dot(S))).normalize(),b.crossVectors(w,S);const D=b.dot(l[U])<0?-1:1;s.setXYZW(U,R.x,R.y,R.z,D)}for(let U=0,S=P.length;U<S;++U){const x=P[U],D=x.start,V=x.count;for(let H=D,X=D+V;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new B,a=new B,s=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,M),s.fromBufferAttribute(t,p),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let g=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*u;for(let h=0;h<u;h++)d[_++]=c[g++]}return new An(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],g=e(d,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new Pt,di=new Aa,Yr=new Ta,Yo=new B,jr=new B,Kr=new B,Zr=new B,ns=new B,$r=new B,jo=new B,Jr=new B;class dn extends qt{constructor(e=new Rn,t=new cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){$r.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(ns.fromBufferAttribute(f,e),s?$r.addScaledVector(ns,u):$r.addScaledVector(ns.sub(t),u))}t.add($r)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(a),di.copy(e.ray).recast(e.near),!(Yr.containsPoint(di.origin)===!1&&(di.intersectSphere(Yr,Yo)===null||di.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(qo.copy(a).invert(),di.copy(e.ray).applyMatrix4(qo),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=s[p.materialIndex],P=Math.max(p.start,g.start),R=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let b=P,z=R;b<z;b+=3){const w=o.getX(b),C=o.getX(b+1),U=o.getX(b+2);r=Qr(this,h,e,n,c,u,f,w,C,U),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let p=_,h=M;p<h;p+=3){const P=o.getX(p),R=o.getX(p+1),b=o.getX(p+2);r=Qr(this,s,e,n,c,u,f,P,R,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,M=d.length;_<M;_++){const p=d[_],h=s[p.materialIndex],P=Math.max(p.start,g.start),R=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let b=P,z=R;b<z;b+=3){const w=b,C=b+1,U=b+2;r=Qr(this,h,e,n,c,u,f,w,C,U),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let p=_,h=M;p<h;p+=3){const P=p,R=p+1,b=p+2;r=Qr(this,s,e,n,c,u,f,P,R,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Eu(i,e,t,n,r,a,s,o){let l;if(e.side===ln?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===oi,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,jr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Zr);const u=Eu(i,e,t,n,jr,Kr,Zr,jo);if(u){const f=new B;_n.getBarycoord(jo,jr,Kr,Zr,f),r&&(u.uv=_n.getInterpolatedAttribute(r,o,l,c,f,new Ye)),a&&(u.uv1=_n.getInterpolatedAttribute(a,o,l,c,f,new Ye)),s&&(u.normal=_n.getInterpolatedAttribute(s,o,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};_n.getNormal(jr,Kr,Zr,d.normal),u.face=d,u.barycoord=f}return u}class cr extends Rn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(f,2));function _(M,p,h,P,R,b,z,w,C,U,S){const x=b/C,D=z/U,V=b/2,H=z/2,X=w/2,te=C+1,Y=U+1;let fe=0,K=0;const Me=new B;for(let Pe=0;Pe<Y;Pe++){const Ue=Pe*D-H;for(let tt=0;tt<te;tt++){const _t=tt*x-V;Me[M]=_t*P,Me[p]=Ue*R,Me[h]=X,c.push(Me.x,Me.y,Me.z),Me[M]=0,Me[p]=0,Me[h]=w>0?1:-1,u.push(Me.x,Me.y,Me.z),f.push(tt/C),f.push(1-Pe/U),fe+=1}}for(let Pe=0;Pe<U;Pe++)for(let Ue=0;Ue<C;Ue++){const tt=d+Ue+te*Pe,_t=d+Ue+te*(Pe+1),J=d+(Ue+1)+te*(Pe+1),_e=d+(Ue+1)+te*Pe;l.push(tt,_t,_e),l.push(_t,J,_e),K+=6}o.addGroup(g,K,S),g+=K,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const r in n)e[r]=n[r]}return e}function Tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Au={clone:or,merge:en};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fc extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new B,Ko=new Ye,Zo=new Ye;class gn extends fc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,Zo),t.subVectors(Zo,Ko)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class Cu extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new gn(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const s=new gn(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new gn(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new gn(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new gn(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class pc extends nn{constructor(e,t,n,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pu extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cr(5,5,5),a=new li({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:ri});a.uniforms.tEquirect.value=t;const s=new dn(r,a),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=In),new Cu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const is=new B,Du=new B,Lu=new at;class ni{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=is.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lu.getNormalMatrix(e),r=this.coplanarPoint(is).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ta,ea=new B;class go{constructor(e=new ni,t=new ni,n=new ni,r=new ni,a=new ni,s=new ni){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],M=r[10],p=r[11],h=r[12],P=r[13],R=r[14],b=r[15];if(n[0].setComponents(l-a,d-c,p-g,b-h).normalize(),n[1].setComponents(l+a,d+c,p+g,b+h).normalize(),n[2].setComponents(l+s,d+u,p+_,b+P).normalize(),n[3].setComponents(l-s,d-u,p-_,b-P).normalize(),n[4].setComponents(l-o,d-f,p-M,b-R).normalize(),t===qn)n[5].setComponents(l+o,d+f,p+M,b+R).normalize();else if(t===va)n[5].setComponents(o,f,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Uu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<f.length;g++){const _=f[d],M=f[g];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let g=0,_=f.length;g<_;g++){const M=f[g];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class wa extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,g=[],_=[],M=[],p=[];for(let h=0;h<u;h++){const P=h*d-s;for(let R=0;R<c;R++){const b=R*f-a;_.push(b,-P,0),M.push(0,0,1),p.push(R/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let P=0;P<o;P++){const R=P+c*h,b=P+c*(h+1),z=P+1+c*(h+1),w=P+1+c*h;g.push(R,b,w),g.push(b,z,w)}this.setIndex(g),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(M,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,ju=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ad=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ud=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Gf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hf=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Vf=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Kf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Zf=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,$f=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jf=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Qf=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ep=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,tp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,ip=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ap=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sp=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,op=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,cp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,up=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,fp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ot={alphahash_fragment:Iu,alphahash_pars_fragment:Nu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:ku,aomap_pars_fragment:Gu,batching_pars_vertex:Hu,batching_vertex:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:Yu,bumpmap_pars_fragment:ju,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:ed,color_pars_vertex:td,color_vertex:nd,common:id,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:sd,displacementmap_vertex:od,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:dd,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Ad,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:vd,fog_fragment:xd,fog_pars_fragment:yd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_fragment:bd,lights_lambert_pars_fragment:Ed,lights_pars_begin:Td,lights_toon_fragment:wd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Dd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Ud,lights_fragment_maps:Id,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:zd,map_fragment:kd,map_pars_fragment:Gd,map_particle_fragment:Hd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:jd,morphtarget_pars_vertex:Kd,morphtarget_vertex:Zd,normal_fragment_begin:$d,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:sf,iridescence_pars_fragment:of,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:df,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:_f,shadowmap_vertex:vf,shadowmask_pars_fragment:xf,skinbase_vertex:yf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:bf,specularmap_fragment:Ef,specularmap_pars_fragment:Tf,tonemapping_fragment:Af,tonemapping_pars_fragment:wf,transmission_fragment:Rf,transmission_pars_fragment:Cf,uv_pars_fragment:Pf,uv_pars_vertex:Df,uv_vertex:Lf,worldpos_vertex:Uf,background_vert:If,background_frag:Nf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:Bf,cube_frag:zf,depth_vert:kf,depth_frag:Gf,distanceRGBA_vert:Hf,distanceRGBA_frag:Vf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:jf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:ep,meshnormal_frag:tp,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:rp,meshphysical_frag:ap,meshtoon_vert:sp,meshtoon_frag:op,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:dp,sprite_frag:fp},be={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ln={basic:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ft(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:en([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:en([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ft(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:en([be.points,be.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:en([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:en([be.common,be.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:en([be.sprite,be.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:en([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:en([be.lights,be.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ln.physical={uniforms:en([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ta={r:0,b:0,g:0},pi=new Nn,pp=new Pt;function mp(i,e,t,n,r,a,s){const o=new ft(0);let l=a===!0?0:1,c,u,f=null,d=0,g=null;function _(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function M(P){let R=!1;const b=_(P);b===null?h(o,l):b&&b.isColor&&(h(b,1),R=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(P,R){const b=_(R);b&&(b.isCubeTexture||b.mapping===ba)?(u===void 0&&(u=new dn(new cr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:or(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(R.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(pi)),u.material.toneMapped=gt.getTransfer(b.colorSpace)!==Mt,(f!==b||d!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,g=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new dn(new wa(2,2),new li({name:"BackgroundMaterial",uniforms:or(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=gt.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,g=i.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null))}function h(P,R){P.getRGB(ta,dc(i)),n.buffers.color.setClear(ta.r,ta.g,ta.b,R,s)}return{getClearColor:function(){return o},setClearColor:function(P,R=1){o.set(P),l=R,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(P){l=P,h(o,l)},render:M,addToRenderList:p}}function gp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(x,D,V,H,X){let te=!1;const Y=f(H,V,D);a!==Y&&(a=Y,c(a.object)),te=g(x,H,V,X),te&&_(x,H,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(te||s)&&(s=!1,b(x,D,V,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function f(x,D,V){const H=V.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let te=X[D.id];te===void 0&&(te={},X[D.id]=te);let Y=te[H];return Y===void 0&&(Y=d(l()),te[H]=Y),Y}function d(x){const D=[],V=[],H=[];for(let X=0;X<t;X++)D[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:H,object:x,attributes:{},index:null}}function g(x,D,V,H){const X=a.attributes,te=D.attributes;let Y=0;const fe=V.getAttributes();for(const K in fe)if(fe[K].location>=0){const Pe=X[K];let Ue=te[K];if(Ue===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Ue=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Ue=x.instanceColor)),Pe===void 0||Pe.attribute!==Ue||Ue&&Pe.data!==Ue.data)return!0;Y++}return a.attributesNum!==Y||a.index!==H}function _(x,D,V,H){const X={},te=D.attributes;let Y=0;const fe=V.getAttributes();for(const K in fe)if(fe[K].location>=0){let Pe=te[K];Pe===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Pe=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Pe=x.instanceColor));const Ue={};Ue.attribute=Pe,Pe&&Pe.data&&(Ue.data=Pe.data),X[K]=Ue,Y++}a.attributes=X,a.attributesNum=Y,a.index=H}function M(){const x=a.newAttributes;for(let D=0,V=x.length;D<V;D++)x[D]=0}function p(x){h(x,0)}function h(x,D){const V=a.newAttributes,H=a.enabledAttributes,X=a.attributeDivisors;V[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),X[x]!==D&&(i.vertexAttribDivisor(x,D),X[x]=D)}function P(){const x=a.newAttributes,D=a.enabledAttributes;for(let V=0,H=D.length;V<H;V++)D[V]!==x[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function R(x,D,V,H,X,te,Y){Y===!0?i.vertexAttribIPointer(x,D,V,X,te):i.vertexAttribPointer(x,D,V,H,X,te)}function b(x,D,V,H){M();const X=H.attributes,te=V.getAttributes(),Y=D.defaultAttributeValues;for(const fe in te){const K=te[fe];if(K.location>=0){let Me=X[fe];if(Me===void 0&&(fe==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),fe==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),Me!==void 0){const Pe=Me.normalized,Ue=Me.itemSize,tt=e.get(Me);if(tt===void 0)continue;const _t=tt.buffer,J=tt.type,_e=tt.bytesPerElement,Oe=J===i.INT||J===i.UNSIGNED_INT||Me.gpuType===lo;if(Me.isInterleavedBufferAttribute){const Te=Me.data,je=Te.stride,Qe=Me.offset;if(Te.isInstancedInterleavedBuffer){for(let rt=0;rt<K.locationSize;rt++)h(K.location+rt,Te.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let rt=0;rt<K.locationSize;rt++)p(K.location+rt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let rt=0;rt<K.locationSize;rt++)R(K.location+rt,Ue/K.locationSize,J,Pe,je*_e,(Qe+Ue/K.locationSize*rt)*_e,Oe)}else{if(Me.isInstancedBufferAttribute){for(let Te=0;Te<K.locationSize;Te++)h(K.location+Te,Me.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Te=0;Te<K.locationSize;Te++)p(K.location+Te);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Te=0;Te<K.locationSize;Te++)R(K.location+Te,Ue/K.locationSize,J,Pe,Ue*_e,Ue/K.locationSize*Te*_e,Oe)}}else if(Y!==void 0){const Pe=Y[fe];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(K.location,Pe);break;case 3:i.vertexAttrib3fv(K.location,Pe);break;case 4:i.vertexAttrib4fv(K.location,Pe);break;default:i.vertexAttrib1fv(K.location,Pe)}}}}P()}function z(){U();for(const x in n){const D=n[x];for(const V in D){const H=D[V];for(const X in H)u(H[X].object),delete H[X];delete D[V]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const V in D){const H=D[V];for(const X in H)u(H[X].object),delete H[X];delete D[V]}delete n[x.id]}function C(x){for(const D in n){const V=n[D];if(V[x.id]===void 0)continue;const H=V[x.id];for(const X in H)u(H[X].object),delete H[X];delete V[x.id]}}function U(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:z,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:P}}function _p(i,e,t){let n;function r(c){n=c}function a(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,n,1)}function l(c,u,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)s(c[_],u[_],d[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M]*d[M];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:z,maxSamples:w}}function xp(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new ni,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||r;return r=d,n=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const _=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||a&&!p)a?u(null):c();else{const P=a?0:n,R=P*4;let b=h.clippingState||null;l.value=b,b=u(_,d,R,g);for(let z=0;z!==R;++z)b[z]=t[z];h.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,g,_){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const h=g+M*4,P=d.matrixWorldInverse;o.getNormalMatrix(P),(p===null||p.length<h)&&(p=new Float32Array(h));for(let R=0,b=g;R!==M;++R,b+=4)s.copy(f[R]).applyMatrix4(P,o),s.normal.toArray(p,b),p[b+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function yp(i){let e=new WeakMap;function t(s,o){return o===As?s.mapping=ir:o===ws&&(s.mapping=rr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===As||o===ws)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Pu(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class gc extends fc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,$o=[.125,.215,.35,.446,.526,.582],xi=20,rs=new gc,Jo=new ft;let as=null,ss=0,os=0,ls=!1;const _i=(1+Math.sqrt(5))/2,Wi=1/_i,Qo=[new B(-_i,Wi,0),new B(_i,Wi,0),new B(-Wi,0,_i),new B(Wi,0,_i),new B(0,_i,-Wi),new B(0,_i,Wi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){as=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,ss,os),this._renderer.xr.enabled=ls,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Cr,format:En,colorSpace:lr,depthBuffer:!1},r=tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(a)),this._blurMaterial=Sp(a,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,r){const o=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Jo),u.toneMapping=ai,u.autoClear=!1;const g=new cc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new dn(new cr,g);let M=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,M=!0):(g.color.copy(Jo),M=!0);for(let h=0;h<6;h++){const P=h%3;P===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):P===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const R=this._cubeSize;na(r,P*R,h>2?R:0,R,R),u.setRenderTarget(r),M&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new dn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,rs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Qo[(r-a-1)%Qo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*xi-1),M=a/_,p=isFinite(a)?1+Math.floor(u*M):xi;p>xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const h=[];let P=0;for(let C=0;C<xi;++C){const U=C/M,S=Math.exp(-U*U/2);h.push(S),C===0?P+=S:C<p&&(P+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/P;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=_,d.mipInt.value=R-n;const b=this._sizeLods[r],z=3*b*(r>R-Zi?r-R+Zi:0),w=4*(this._cubeSize-b);na(t,z,w,3*b,2*b),l.setRenderTarget(t),l.render(f,rs)}}function Mp(i){const e=[],t=[],n=[];let r=i;const a=i-Zi+1+$o.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-Zi?l=$o[s-i+Zi-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,M=3,p=2,h=1,P=new Float32Array(M*_*g),R=new Float32Array(p*_*g),b=new Float32Array(h*_*g);for(let w=0;w<g;w++){const C=w%3*2/3-1,U=w>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];P.set(S,M*_*w),R.set(d,p*_*w);const x=[w,w,w,w,w,w];b.set(x,h*_*w)}const z=new Rn;z.setAttribute("position",new An(P,M)),z.setAttribute("uv",new An(R,p)),z.setAttribute("faceIndex",new An(b,h)),e.push(z),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tl(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sp(i,e,t){const n=new Float32Array(xi),r=new B(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function il(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function bp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===As||l===ws,u=l===ir||l===rr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new el(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new el(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Ep(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tp(i,e,t,n){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let p=0,h=M.length;p<h;p++)e.remove(M[p])}d.removeEventListener("dispose",s),delete r[d.id];const g=a.get(d);g&&(e.remove(g),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const M=g[_];for(let p=0,h=M.length;p<h;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(f){const d=[],g=f.index,_=f.attributes.position;let M=0;if(g!==null){const P=g.array;M=g.version;for(let R=0,b=P.length;R<b;R+=3){const z=P[R+0],w=P[R+1],C=P[R+2];d.push(z,w,w,C,C,z)}}else if(_!==void 0){const P=_.array;M=_.version;for(let R=0,b=P.length/3-1;R<b;R+=3){const z=R+0,w=R+1,C=R+2;d.push(z,w,w,C,C,z)}}else return;const p=new(ac(d)?uc:hc)(d,1);p.version=M;const h=a.get(f);h&&e.remove(h),a.set(f,p)}function u(f){const d=a.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ap(i,e,t){let n;function r(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,g){i.drawElements(n,g,a,d*s),t.update(g,n,1)}function c(d,g,_){_!==0&&(i.drawElementsInstanced(n,g,a,d*s,_),t.update(g,n,_))}function u(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,d,0,_);let p=0;for(let h=0;h<_;h++)p+=g[h];t.update(p,n,1)}function f(d,g,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/s,g[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,a,d,0,M,0,_);let h=0;for(let P=0;P<_;P++)h+=g[P]*M[P];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rp(i,e,t){const n=new WeakMap,r=new Ot;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let R=0;g===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let b=o.attributes.position.count*R,z=1;b>e.maxTextureSize&&(z=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*z*4*f),C=new oc(w,b,z,f);C.type=Xn,C.needsUpdate=!0;const U=R*4;for(let x=0;x<f;x++){const D=p[x],V=h[x],H=P[x],X=b*z*4*x;for(let te=0;te<D.count;te++){const Y=te*U;g===!0&&(r.fromBufferAttribute(D,te),w[X+Y+0]=r.x,w[X+Y+1]=r.y,w[X+Y+2]=r.z,w[X+Y+3]=0),_===!0&&(r.fromBufferAttribute(V,te),w[X+Y+4]=r.x,w[X+Y+5]=r.y,w[X+Y+6]=r.z,w[X+Y+7]=0),M===!0&&(r.fromBufferAttribute(H,te),w[X+Y+8]=r.x,w[X+Y+9]=r.y,w[X+Y+10]=r.z,w[X+Y+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ye(b,z)},n.set(o,d),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let M=0;M<c.length;M++)g+=c[M];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Cp(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class _c extends nn{constructor(e,t,n,r,a,s,o,l,c,u=er){if(u!==er&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=Si),n===void 0&&u===sr&&(n=ar),super(null,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vc=new nn,rl=new _c(1,1),xc=new oc,yc=new pu,Mc=new pc,al=[],sl=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=al[r];if(a===void 0&&(a=new Float32Array(r),al[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),Wt(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Wt(t,n)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),Wt(t,n)}}function Op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=rc,a=rl):a=vc,t.setTexture2D(e||a,r)}function qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yc,r)}function Yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mc,r)}function jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xc,r)}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Dp;case 35665:return Lp;case 35666:return Up;case 35674:return Ip;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Gp;case 36294:return Hp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}function Zp(i,e){i.uniform1fv(this.addr,e)}function $p(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jp(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qp(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function em(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tm(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nm(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function im(i,e){i.uniform1iv(this.addr,e)}function rm(i,e){i.uniform2iv(this.addr,e)}function am(i,e){i.uniform3iv(this.addr,e)}function sm(i,e){i.uniform4iv(this.addr,e)}function om(i,e){i.uniform1uiv(this.addr,e)}function lm(i,e){i.uniform2uiv(this.addr,e)}function cm(i,e){i.uniform3uiv(this.addr,e)}function hm(i,e){i.uniform4uiv(this.addr,e)}function um(i,e,t){const n=this.cache,r=e.length,a=Ra(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||vc,a[s])}function dm(i,e,t){const n=this.cache,r=e.length,a=Ra(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||yc,a[s])}function fm(i,e,t){const n=this.cache,r=e.length,a=Ra(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Mc,a[s])}function pm(i,e,t){const n=this.cache,r=e.length,a=Ra(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||xc,a[s])}function mm(i){switch(i){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return sm;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}}class vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const cs=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function xm(i,e,t){const n=i.name,r=n.length;for(cs.lastIndex=0;;){const a=cs.exec(n),s=cs.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){hl(t,c===void 0?new gm(o,i,e):new _m(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new vm(o),hl(t,f)),t=f}}}class ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);xm(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ym=37297;let Mm=0;function Sm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const dl=new at;function bm(i){gt._getMatrix(dl,gt.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sm(i.getShaderSource(e),s)}else return r}function Em(i,e){const t=bm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tm(i,e){let t;switch(e){case kh:t="Linear";break;case Gh:t="Reinhard";break;case Hh:t="Cineon";break;case Vh:t="ACESFilmic";break;case Xh:t="AgX";break;case qh:t="Neutral";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new B;function Am(){gt.getLuminanceCoefficients(ia);const i=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Rm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Tr(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Pm,Lm)}const Dm=new Map;function Lm(i,e){let t=ot[e];if(t===void 0){const n=Dm.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ro(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Um,Im)}function Im(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function _l(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Om(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Bm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Bh:e="ENVMAP_BLENDING_MIX";break;case zh:e="ENVMAP_BLENDING_ADD";break}return e}function zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function km(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Nm(t),c=Fm(t),u=Om(t),f=Bm(t),d=zm(t),g=wm(t),_=Rm(a),M=r.createProgram();let p,h,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),h.length>0&&(h+=`
`)):(p=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),h=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ot.tonemapping_pars_fragment:"",t.toneMapping!==ai?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),s=ro(s),s=pl(s,t),s=ml(s,t),o=ro(o),o=pl(o,t),o=ml(o,t),s=gl(s),o=gl(o),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=P+p+s,b=P+h+o,z=ul(r,r.VERTEX_SHADER,R),w=ul(r,r.FRAGMENT_SHADER,b);r.attachShader(M,z),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(D){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(M).trim(),H=r.getShaderInfoLog(z).trim(),X=r.getShaderInfoLog(w).trim();let te=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,z,w);else{const fe=fl(r,z,"vertex"),K=fl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+fe+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(Y=!1);Y&&(D.diagnostics={runnable:te,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:h}})}r.deleteShader(z),r.deleteShader(w),U=new ga(r,M),S=Cm(r,M)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,ym)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=w,this}let Gm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}}function Wm(i,e,t,n,r,a,s){const o=new mo,l=new Hm,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,D,V,H){const X=V.fog,te=H.geometry,Y=S.isMeshStandardMaterial?V.environment:null,fe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),K=fe&&fe.mapping===ba?fe.image.height:null,Me=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const Pe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0;let tt=0;te.morphAttributes.position!==void 0&&(tt=1),te.morphAttributes.normal!==void 0&&(tt=2),te.morphAttributes.color!==void 0&&(tt=3);let _t,J,_e,Oe;if(Me){const vt=Ln[Me];_t=vt.vertexShader,J=vt.fragmentShader}else _t=S.vertexShader,J=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),Oe=l.getFragmentShaderID(S);const Te=i.getRenderTarget(),je=i.state.buffers.depth.getReversed(),Qe=H.isInstancedMesh===!0,rt=H.isBatchedMesh===!0,Rt=!!S.map,nt=!!S.matcap,Ut=!!fe,F=!!S.aoMap,Zt=!!S.lightMap,lt=!!S.bumpMap,ct=!!S.normalMap,Xe=!!S.displacementMap,Et=!!S.emissiveMap,Be=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,G=S.clearcoat>0,ne=S.dispersion>0,se=S.iridescence>0,$=S.sheen>0,ze=S.transmission>0,Se=v&&!!S.anisotropyMap,Le=G&&!!S.clearcoatMap,dt=G&&!!S.clearcoatNormalMap,me=G&&!!S.clearcoatRoughnessMap,Ne=se&&!!S.iridescenceMap,qe=se&&!!S.iridescenceThicknessMap,Ke=$&&!!S.sheenColorMap,Ie=$&&!!S.sheenRoughnessMap,ht=!!S.specularMap,Je=!!S.specularColorMap,yt=!!S.specularIntensityMap,I=ze&&!!S.transmissionMap,Ee=ze&&!!S.thicknessMap,j=!!S.gradientMap,ie=!!S.alphaMap,Ae=S.alphaTest>0,we=!!S.alphaHash,et=!!S.extensions;let Dt=ai;S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const kt={shaderID:Me,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:J,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:Oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:rt,batchingColor:rt&&H._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&H.instanceColor!==null,instancingMorph:Qe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:lr,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:nt,envMap:Ut,envMapMode:Ut&&fe.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:Zt,bumpMap:lt,normalMap:ct,displacementMap:d&&Xe,emissiveMap:Et,normalMapObjectSpace:ct&&S.normalMapType===Zh,normalMapTangentSpace:ct&&S.normalMapType===ic,metalnessMap:Be,roughnessMap:E,anisotropy:v,anisotropyMap:Se,clearcoat:G,clearcoatMap:Le,clearcoatNormalMap:dt,clearcoatRoughnessMap:me,dispersion:ne,iridescence:se,iridescenceMap:Ne,iridescenceThicknessMap:qe,sheen:$,sheenColorMap:Ke,sheenRoughnessMap:Ie,specularMap:ht,specularColorMap:Je,specularIntensityMap:yt,transmission:ze,transmissionMap:I,thicknessMap:Ee,gradientMap:j,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ae,alphaHash:we,combine:S.combine,mapUv:Rt&&M(S.map.channel),aoMapUv:F&&M(S.aoMap.channel),lightMapUv:Zt&&M(S.lightMap.channel),bumpMapUv:lt&&M(S.bumpMap.channel),normalMapUv:ct&&M(S.normalMap.channel),displacementMapUv:Xe&&M(S.displacementMap.channel),emissiveMapUv:Et&&M(S.emissiveMap.channel),metalnessMapUv:Be&&M(S.metalnessMap.channel),roughnessMapUv:E&&M(S.roughnessMap.channel),anisotropyMapUv:Se&&M(S.anisotropyMap.channel),clearcoatMapUv:Le&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&M(S.sheenRoughnessMap.channel),specularMapUv:ht&&M(S.specularMap.channel),specularColorMapUv:Je&&M(S.specularColorMap.channel),specularIntensityMapUv:yt&&M(S.specularIntensityMap.channel),transmissionMapUv:I&&M(S.transmissionMap.channel),thicknessMapUv:Ee&&M(S.thicknessMap.channel),alphaMapUv:ie&&M(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ct||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!te.attributes.uv&&(Rt||ie),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:je,skinning:H.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&S.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(P(x,S),R(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function P(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function R(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const x=_[S.type];let D;if(x){const V=Ln[x];D=Au.clone(V.uniforms)}else D=S.uniforms;return D}function z(S,x){let D;for(let V=0,H=u.length;V<H;V++){const X=u[V];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new km(i,x,S,a),u.push(D)),D}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:z,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:U}}function Xm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(f,d,g,_,M,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:M,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=g,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=M,h.group=p),e++,h}function o(f,d,g,_,M,p){const h=s(f,d,g,_,M,p);g.transmission>0?n.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,d,g,_,M,p){const h=s(f,d,g,_,M,p);g.transmission>0?n.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||qm),n.length>1&&n.sort(d||vl),r.length>1&&r.sort(d||vl)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function Ym(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new xl,i.set(n,[s])):r>=a.length?(s=new xl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ft};break;case"SpotLight":t={position:new B,direction:new B,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zm=0;function $m(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jm(i){const e=new jm,t=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,a=new Pt,s=new Pt;function o(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,_=0,M=0,p=0,h=0,P=0,R=0,b=0,z=0,w=0,C=0;c.sort($m);for(let S=0,x=c.length;S<x;S++){const D=c[S],V=D.color,H=D.intensity,X=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*H,f+=V.g*H,d+=V.b*H;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],H);C++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,K=t.get(D);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=D.shadow.matrix,P++}n.directional[g]=Y,g++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[M]=Y;const fe=D.shadow;if(D.map&&(n.spotLightMap[z]=D.map,z++,fe.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[M]=fe.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=te,b++}M++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(V).multiplyScalar(H),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const fe=D.shadow,K=t.get(D);K.shadowIntensity=fe.intensity,K.shadowBias=fe.bias,K.shadowNormalBias=fe.normalBias,K.shadowRadius=fe.radius,K.shadowMapSize=fe.mapSize,K.shadowCameraNear=fe.camera.near,K.shadowCameraFar=fe.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=D.shadow.matrix,R++}n.point[_]=Y,_++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(H),Y.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==P||U.numPointShadows!==R||U.numSpotShadows!==b||U.numSpotMaps!==z||U.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+z-w,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,U.directionalLength=g,U.pointLength=_,U.spotLength=M,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=P,U.numPointShadows=R,U.numSpotShadows=b,U.numSpotMaps=z,U.numLightProbes=C,n.version=Zm++)}function l(c,u){let f=0,d=0,g=0,_=0,M=0;const p=u.matrixWorldInverse;for(let h=0,P=c.length;h<P;h++){const R=c[h];if(R.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(R.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(R.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),s.identity(),a.copy(R.matrixWorld),a.premultiply(p),s.extractRotation(a),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(R.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(p),d++}else if(R.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function yl(i){const e=new Jm(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Qm(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new yl(i),e.set(r,[o])):a>=s.length?(o=new yl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class eg extends Ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function rg(i,e,t){let n=new go;const r=new Ye,a=new Ye,s=new Ot,o=new eg({depthPacking:Kh}),l=new tg,c={},u=t.maxTextureSize,f={[oi]:ln,[ln]:oi,[Wn]:Wn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let h=this.type;this.render=function(w,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=h!==Vn&&this.type===Vn,X=h===Vn&&this.type!==Vn;for(let te=0,Y=w.length;te<Y;te++){const fe=w[te],K=fe.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const Me=K.getFrameExtents();if(r.multiply(Me),a.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/Me.x),r.x=a.x*Me.x,K.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/Me.y),r.y=a.y*Me.y,K.mapSize.y=a.y)),K.map===null||H===!0||X===!0){const Ue=this.type!==Vn?{minFilter:Tn,magFilter:Tn}:{};K.map!==null&&K.map.dispose(),K.map=new bi(r.x,r.y,Ue),K.map.texture.name=fe.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Pe=K.getViewportCount();for(let Ue=0;Ue<Pe;Ue++){const tt=K.getViewport(Ue);s.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),V.viewport(s),K.updateMatrices(fe,Ue),n=K.getFrustum(),b(C,U,K.camera,fe,this.type)}K.isPointLightShadow!==!0&&this.type===Vn&&P(K,U),K.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,D)};function P(w,C){const U=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,M,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,U,g,M,null)}function R(w,C,U,S){let x=null;const D=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)x=D;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=x.uuid,H=C.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let te=X[H];te===void 0&&(te=x.clone(),X[H]=te,C.addEventListener("dispose",z)),x=te}if(x.visible=C.visible,x.wireframe=C.wireframe,S===Vn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:f[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=U}return x}function b(w,C,U,S,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const H=e.update(w),X=w.material;if(Array.isArray(X)){const te=H.groups;for(let Y=0,fe=te.length;Y<fe;Y++){const K=te[Y],Me=X[K.materialIndex];if(Me&&Me.visible){const Pe=R(w,Me,S,x);w.onBeforeShadow(i,w,C,U,H,Pe,K),i.renderBufferDirect(U,null,H,Pe,w,K),w.onAfterShadow(i,w,C,U,H,Pe,K)}}}else if(X.visible){const te=R(w,X,S,x);w.onBeforeShadow(i,w,C,U,H,te,null),i.renderBufferDirect(U,null,H,te,w,null),w.onAfterShadow(i,w,C,U,H,te,null)}}const V=w.children;for(let H=0,X=V.length;H<X;H++)b(V[H],C,U,S,x)}function z(w){w.target.removeEventListener("dispose",z);for(const U in c){const S=c[U],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const ag={[xs]:ys,[Ms]:Es,[Ss]:Ts,[nr]:bs,[ys]:xs,[Es]:Ms,[Ts]:Ss,[bs]:nr};function sg(i,e){function t(){let I=!1;const Ee=new Ot;let j=null;const ie=new Ot(0,0,0,0);return{setMask:function(Ae){j!==Ae&&!I&&(i.colorMask(Ae,Ae,Ae,Ae),j=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,we,et,Dt,kt){kt===!0&&(Ae*=Dt,we*=Dt,et*=Dt),Ee.set(Ae,we,et,Dt),ie.equals(Ee)===!1&&(i.clearColor(Ae,we,et,Dt),ie.copy(Ee))},reset:function(){I=!1,j=null,ie.set(-1,0,0,0)}}}function n(){let I=!1,Ee=!1,j=null,ie=null,Ae=null;return{setReversed:function(we){if(Ee!==we){const et=e.get("EXT_clip_control");Ee?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Ae;Ae=null,this.setClear(Dt)}Ee=we},getReversed:function(){return Ee},setTest:function(we){we?Te(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(we){j!==we&&!I&&(i.depthMask(we),j=we)},setFunc:function(we){if(Ee&&(we=ag[we]),ie!==we){switch(we){case xs:i.depthFunc(i.NEVER);break;case ys:i.depthFunc(i.ALWAYS);break;case Ms:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case Ss:i.depthFunc(i.EQUAL);break;case bs:i.depthFunc(i.GEQUAL);break;case Es:i.depthFunc(i.GREATER);break;case Ts:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){I=we},setClear:function(we){Ae!==we&&(Ee&&(we=1-we),i.clearDepth(we),Ae=we)},reset:function(){I=!1,j=null,ie=null,Ae=null,Ee=!1}}}function r(){let I=!1,Ee=null,j=null,ie=null,Ae=null,we=null,et=null,Dt=null,kt=null;return{setTest:function(vt){I||(vt?Te(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(vt){Ee!==vt&&!I&&(i.stencilMask(vt),Ee=vt)},setFunc:function(vt,rn,vn){(j!==vt||ie!==rn||Ae!==vn)&&(i.stencilFunc(vt,rn,vn),j=vt,ie=rn,Ae=vn)},setOp:function(vt,rn,vn){(we!==vt||et!==rn||Dt!==vn)&&(i.stencilOp(vt,rn,vn),we=vt,et=rn,Dt=vn)},setLocked:function(vt){I=vt},setClear:function(vt){kt!==vt&&(i.clearStencil(vt),kt=vt)},reset:function(){I=!1,Ee=null,j=null,ie=null,Ae=null,we=null,et=null,Dt=null,kt=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,g=[],_=null,M=!1,p=null,h=null,P=null,R=null,b=null,z=null,w=null,C=new ft(0,0,0),U=0,S=!1,x=null,D=null,V=null,H=null,X=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,fe=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=fe>=1):K.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=fe>=2);let Me=null,Pe={};const Ue=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),_t=new Ot().fromArray(Ue),J=new Ot().fromArray(tt);function _e(I,Ee,j,ie){const Ae=new Uint8Array(4),we=i.createTexture();i.bindTexture(I,we),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<j;et++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Ee+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return we}const Oe={};Oe[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Te(i.DEPTH_TEST),s.setFunc(nr),lt(!1),ct(To),Te(i.CULL_FACE),F(ri);function Te(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function je(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Qe(I,Ee){return f[I]!==Ee?(i.bindFramebuffer(I,Ee),f[I]=Ee,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function rt(I,Ee){let j=g,ie=!1;if(I){j=d.get(Ee),j===void 0&&(j=[],d.set(Ee,j));const Ae=I.textures;if(j.length!==Ae.length||j[0]!==i.COLOR_ATTACHMENT0){for(let we=0,et=Ae.length;we<et;we++)j[we]=i.COLOR_ATTACHMENT0+we;j.length=Ae.length,ie=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ie=!0);ie&&i.drawBuffers(j)}function Rt(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const nt={[vi]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};nt[bh]=i.MIN,nt[Eh]=i.MAX;const Ut={[Th]:i.ZERO,[Ah]:i.ONE,[wh]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[vs]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,Ee,j,ie,Ae,we,et,Dt,kt,vt){if(I===ri){M===!0&&(je(i.BLEND),M=!1);return}if(M===!1&&(Te(i.BLEND),M=!0),I!==yh){if(I!==p||vt!==S){if((h!==vi||b!==vi)&&(i.blendEquation(i.FUNC_ADD),h=vi,b=vi),vt)switch(I){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,R=null,z=null,w=null,C.set(0,0,0),U=0,p=I,S=vt}return}Ae=Ae||Ee,we=we||j,et=et||ie,(Ee!==h||Ae!==b)&&(i.blendEquationSeparate(nt[Ee],nt[Ae]),h=Ee,b=Ae),(j!==P||ie!==R||we!==z||et!==w)&&(i.blendFuncSeparate(Ut[j],Ut[ie],Ut[we],Ut[et]),P=j,R=ie,z=we,w=et),(Dt.equals(C)===!1||kt!==U)&&(i.blendColor(Dt.r,Dt.g,Dt.b,kt),C.copy(Dt),U=kt),p=I,S=!1}function Zt(I,Ee){I.side===Wn?je(i.CULL_FACE):Te(i.CULL_FACE);let j=I.side===ln;Ee&&(j=!j),lt(j),I.blending===Qi&&I.transparent===!1?F(ri):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);const ie=I.stencilWrite;o.setTest(ie),ie&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function ct(I){I!==_h?(Te(i.CULL_FACE),I!==D&&(I===To?i.cullFace(i.BACK):I===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),D=I}function Xe(I){I!==V&&(Y&&i.lineWidth(I),V=I)}function Et(I,Ee,j){I?(Te(i.POLYGON_OFFSET_FILL),(H!==Ee||X!==j)&&(i.polygonOffset(Ee,j),H=Ee,X=j)):je(i.POLYGON_OFFSET_FILL)}function Be(I){I?Te(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+te-1),Me!==I&&(i.activeTexture(I),Me=I)}function v(I,Ee,j){j===void 0&&(Me===null?j=i.TEXTURE0+te-1:j=Me);let ie=Pe[j];ie===void 0&&(ie={type:void 0,texture:void 0},Pe[j]=ie),(ie.type!==I||ie.texture!==Ee)&&(Me!==j&&(i.activeTexture(j),Me=j),i.bindTexture(I,Ee||Oe[I]),ie.type=I,ie.texture=Ee)}function G(){const I=Pe[Me];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(I){_t.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),_t.copy(I))}function Ie(I){J.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function ht(I,Ee){let j=c.get(Ee);j===void 0&&(j=new WeakMap,c.set(Ee,j));let ie=j.get(I);ie===void 0&&(ie=i.getUniformBlockIndex(Ee,I.name),j.set(I,ie))}function Je(I,Ee){const ie=c.get(Ee).get(I);l.get(Ee)!==ie&&(i.uniformBlockBinding(Ee,ie,I.__bindingPointIndex),l.set(Ee,ie))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Me=null,Pe={},f={},d=new WeakMap,g=[],_=null,M=!1,p=null,h=null,P=null,R=null,b=null,z=null,w=null,C=new ft(0,0,0),U=0,S=!1,x=null,D=null,V=null,H=null,X=null,_t.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Te,disable:je,bindFramebuffer:Qe,drawBuffers:rt,useProgram:Rt,setBlending:F,setMaterial:Zt,setFlipSided:lt,setCullFace:ct,setLineWidth:Xe,setPolygonOffset:Et,setScissorTest:Be,activeTexture:E,bindTexture:v,unbindTexture:G,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Ne,texImage3D:qe,updateUBOMapping:ht,uniformBlockBinding:Je,texStorage2D:dt,texStorage3D:me,texSubImage2D:$,texSubImage3D:ze,compressedTexSubImage2D:Se,compressedTexSubImage3D:Le,scissor:Ke,viewport:Ie,reset:yt}}function Ml(i,e,t,n){const r=og(n);switch(t){case Zl:return i*e;case Jl:return i*e;case Ql:return i*e*2;case ec:return i*e/r.components*r.byteLength;case uo:return i*e/r.components*r.byteLength;case tc:return i*e*2/r.components*r.byteLength;case fo:return i*e*2/r.components*r.byteLength;case $l:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case po:return i*e*4/r.components*r.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ds:case Us:return Math.max(i,16)*Math.max(e,8)/4;case Ps:case Ls:return Math.max(i,8)*Math.max(e,8)/2;case Is:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ks:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pa:case $s:case Js:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nc:case Qs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(i){switch(i){case jn:case Yl:return{byteLength:1,components:1};case wr:case jl:case Cr:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Si:case lo:case Xn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return g?new OffscreenCanvas(E,v):xa("canvas")}function M(E,v,G){let ne=1;const se=Be(E);if((se.width>G||se.height>G)&&(ne=G/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(ne*se.width),ze=Math.floor(ne*se.height);f===void 0&&(f=_($,ze));const Se=v?_($,ze):f;return Se.width=$,Se.height=ze,Se.getContext("2d").drawImage(E,0,0,$,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+ze+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(E,v,G,ne,se=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),v===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),v===i.RGBA){const ze=se?Ea:gt.getTransfer(ne);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=ze===Mt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(E,v){let G;return E?v===null||v===Si||v===ar?G=i.DEPTH24_STENCIL8:v===Xn?G=i.DEPTH32F_STENCIL8:v===wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===ar?G=i.DEPTH_COMPONENT24:v===Xn?G=i.DEPTH_COMPONENT32F:v===wr&&(G=i.DEPTH_COMPONENT16),G}function z(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Tn&&E.minFilter!==In?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){const v=E.target;v.removeEventListener("dispose",w),U(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),x(v)}function U(E){const v=n.get(E);if(v.__webglInit===void 0)return;const G=E.source,ne=d.get(G);if(ne){const se=ne[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(E),Object.keys(ne).length===0&&d.delete(G)}n.remove(E)}function S(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const G=E.source,ne=d.get(G);delete ne[v.__cacheKey],s.memory.textures--}function x(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let se=0;se<v.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[ne]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=E.textures;for(let ne=0,se=G.length;ne<se;ne++){const $=n.get(G[ne]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),s.memory.textures--),n.remove(G[ne])}n.remove(E)}let D=0;function V(){D=0}function H(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function X(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function te(E,v){const G=n.get(E);if(E.isVideoTexture&&Xe(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,E,v);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){J(G,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function fe(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){J(G,E,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function K(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){_e(G,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}const Me={[Rs]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},Pe={[Tn]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Ue={[$h]:i.NEVER,[iu]:i.ALWAYS,[Jh]:i.LESS,[rc]:i.LEQUAL,[Qh]:i.EQUAL,[nu]:i.GEQUAL,[eu]:i.GREATER,[tu]:i.NOTEQUAL};function tt(E,v){if(v.type===Xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===In||v.magFilter===Fa||v.magFilter===Or||v.magFilter===Mi||v.minFilter===In||v.minFilter===Fa||v.minFilter===Or||v.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Me[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Me[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Me[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Pe[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tn||v.minFilter!==Or&&v.minFilter!==Mi||v.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _t(E,v){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));const ne=v.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const $=X(v);if($!==E.__cacheKey){se[$]===void 0&&(se[$]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),se[$].usedTimes++;const ze=se[E.__cacheKey];ze!==void 0&&(se[E.__cacheKey].usedTimes--,ze.usedTimes===0&&S(v)),E.__cacheKey=$,E.__webglTexture=se[$].texture}return G}function J(E,v,G){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const se=_t(E,v),$=v.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+G);const ze=n.get($);if($.version!==ze.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const Se=gt.getPrimaries(gt.workingColorSpace),Le=v.colorSpace===ii?null:gt.getPrimaries(v.colorSpace),dt=v.colorSpace===ii||Se===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let me=M(v.image,!1,r.maxTextureSize);me=Et(v,me);const Ne=a.convert(v.format,v.colorSpace),qe=a.convert(v.type);let Ke=R(v.internalFormat,Ne,qe,v.colorSpace,v.isVideoTexture);tt(ne,v);let Ie;const ht=v.mipmaps,Je=v.isVideoTexture!==!0,yt=ze.__version===void 0||se===!0,I=$.dataReady,Ee=z(v,me);if(v.isDepthTexture)Ke=b(v.format===sr,v.type),yt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ke,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ke,me.width,me.height,0,Ne,qe,null));else if(v.isDataTexture)if(ht.length>0){Je&&yt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ke,ht[0].width,ht[0].height);for(let j=0,ie=ht.length;j<ie;j++)Ie=ht[j],Je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ne,qe,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ke,Ie.width,Ie.height,0,Ne,qe,Ie.data);v.generateMipmaps=!1}else Je?(yt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ke,me.width,me.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ne,qe,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,me.width,me.height,0,Ne,qe,me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ke,ht[0].width,ht[0].height,me.depth);for(let j=0,ie=ht.length;j<ie;j++)if(Ie=ht[j],v.format!==En)if(Ne!==null)if(Je){if(I)if(v.layerUpdates.size>0){const Ae=Ml(Ie.width,Ie.height,v.format,v.type);for(const we of v.layerUpdates){const et=Ie.data.subarray(we*Ae/Ie.data.BYTES_PER_ELEMENT,(we+1)*Ae/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,we,Ie.width,Ie.height,1,Ne,et)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,me.depth,Ne,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ke,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ie.width,Ie.height,me.depth,Ne,qe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ke,Ie.width,Ie.height,me.depth,0,Ne,qe,Ie.data)}else{Je&&yt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ke,ht[0].width,ht[0].height);for(let j=0,ie=ht.length;j<ie;j++)Ie=ht[j],v.format!==En?Ne!==null?Je?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ne,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ke,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ie.width,Ie.height,Ne,qe,Ie.data):t.texImage2D(i.TEXTURE_2D,j,Ke,Ie.width,Ie.height,0,Ne,qe,Ie.data)}else if(v.isDataArrayTexture)if(Je){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ke,me.width,me.height,me.depth),I)if(v.layerUpdates.size>0){const j=Ml(me.width,me.height,v.format,v.type);for(const ie of v.layerUpdates){const Ae=me.data.subarray(ie*j/me.data.BYTES_PER_ELEMENT,(ie+1)*j/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,me.width,me.height,1,Ne,qe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,qe,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,me.width,me.height,me.depth,0,Ne,qe,me.data);else if(v.isData3DTexture)Je?(yt&&t.texStorage3D(i.TEXTURE_3D,Ee,Ke,me.width,me.height,me.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,qe,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,me.width,me.height,me.depth,0,Ne,qe,me.data);else if(v.isFramebufferTexture){if(yt)if(Je)t.texStorage2D(i.TEXTURE_2D,Ee,Ke,me.width,me.height);else{let j=me.width,ie=me.height;for(let Ae=0;Ae<Ee;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ke,j,ie,0,Ne,qe,null),j>>=1,ie>>=1}}else if(ht.length>0){if(Je&&yt){const j=Be(ht[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ke,j.width,j.height)}for(let j=0,ie=ht.length;j<ie;j++)Ie=ht[j],Je?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ne,qe,Ie):t.texImage2D(i.TEXTURE_2D,j,Ke,Ne,qe,Ie);v.generateMipmaps=!1}else if(Je){if(yt){const j=Be(me);t.texStorage2D(i.TEXTURE_2D,Ee,Ke,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,qe,me)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Ne,qe,me);p(v)&&h(ne),ze.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,G){if(v.image.length!==6)return;const ne=_t(E,v),se=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+G);const $=n.get(se);if(se.version!==$.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);const ze=gt.getPrimaries(gt.workingColorSpace),Se=v.colorSpace===ii?null:gt.getPrimaries(v.colorSpace),Le=v.colorSpace===ii||ze===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const dt=v.isCompressedTexture||v.image[0].isCompressedTexture,me=v.image[0]&&v.image[0].isDataTexture,Ne=[];for(let ie=0;ie<6;ie++)!dt&&!me?Ne[ie]=M(v.image[ie],!0,r.maxCubemapSize):Ne[ie]=me?v.image[ie].image:v.image[ie],Ne[ie]=Et(v,Ne[ie]);const qe=Ne[0],Ke=a.convert(v.format,v.colorSpace),Ie=a.convert(v.type),ht=R(v.internalFormat,Ke,Ie,v.colorSpace),Je=v.isVideoTexture!==!0,yt=$.__version===void 0||ne===!0,I=se.dataReady;let Ee=z(v,qe);tt(i.TEXTURE_CUBE_MAP,v);let j;if(dt){Je&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ht,qe.width,qe.height);for(let ie=0;ie<6;ie++){j=Ne[ie].mipmaps;for(let Ae=0;Ae<j.length;Ae++){const we=j[Ae];v.format!==En?Ke!==null?Je?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,we.width,we.height,Ke,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,ht,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,we.width,we.height,Ke,Ie,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,ht,we.width,we.height,0,Ke,Ie,we.data)}}}else{if(j=v.mipmaps,Je&&yt){j.length>0&&Ee++;const ie=Be(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ht,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(me){Je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne[ie].width,Ne[ie].height,Ke,Ie,Ne[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,Ne[ie].width,Ne[ie].height,0,Ke,Ie,Ne[ie].data);for(let Ae=0;Ae<j.length;Ae++){const et=j[Ae].image[ie].image;Je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,et.width,et.height,Ke,Ie,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,ht,et.width,et.height,0,Ke,Ie,et.data)}}else{Je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ke,Ie,Ne[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,Ke,Ie,Ne[ie]);for(let Ae=0;Ae<j.length;Ae++){const we=j[Ae];Je?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Ke,Ie,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,ht,Ke,Ie,we.image[ie])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),$.__version=se.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Oe(E,v,G,ne,se,$){const ze=a.convert(G.format,G.colorSpace),Se=a.convert(G.type),Le=R(G.internalFormat,ze,Se,G.colorSpace),dt=n.get(v),me=n.get(G);if(me.__renderTarget=v,!dt.__hasExternalTextures){const Ne=Math.max(1,v.width>>$),qe=Math.max(1,v.height>>$);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,$,Le,Ne,qe,v.depth,0,ze,Se,null):t.texImage2D(se,$,Le,Ne,qe,0,ze,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,me.__webglTexture,0,lt(v)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,me.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(E,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const ne=v.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,$=b(v.stencilBuffer,se),ze=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=lt(v);ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,$,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,E)}else{const ne=v.textures;for(let se=0;se<ne.length;se++){const $=ne[se],ze=a.convert($.format,$.colorSpace),Se=a.convert($.type),Le=R($.internalFormat,ze,Se,$.colorSpace),dt=lt(v);G&&ct(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Le,v.width,v.height):ct(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),te(v.depthTexture,0);const se=ne.__webglTexture,$=lt(v);if(v.depthTexture.format===er)ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(v.depthTexture.format===sr)ct(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Qe(E){const v=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const ne=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=ne}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");je(v.__webglFramebuffer,E)}else if(G){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Te(v.__webglDepthbuffer[ne],E,!1);else{const se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Te(v.__webglDepthbuffer,E,!1);else{const ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,v,G){const ne=n.get(E);v!==void 0&&Oe(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Qe(E)}function Rt(E){const v=E.texture,G=n.get(E),ne=n.get(v);E.addEventListener("dispose",C);const se=E.textures,$=E.isWebGLCubeRenderTarget===!0,ze=se.length>1;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,s.memory.textures++),$){G.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[Se]=[];for(let Le=0;Le<v.mipmaps.length;Le++)G.__webglFramebuffer[Se][Le]=i.createFramebuffer()}else G.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let Se=0;Se<v.mipmaps.length;Se++)G.__webglFramebuffer[Se]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ze)for(let Se=0,Le=se.length;Se<Le;Se++){const dt=n.get(se[Se]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),s.memory.textures++)}if(E.samples>0&&ct(E)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Se=0;Se<se.length;Se++){const Le=se[Se];G.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Se]);const dt=a.convert(Le.format,Le.colorSpace),me=a.convert(Le.type),Ne=R(Le.internalFormat,dt,me,Le.colorSpace,E.isXRRenderTarget===!0),qe=lt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,G.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v);for(let Se=0;Se<6;Se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)Oe(G.__webglFramebuffer[Se][Le],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le);else Oe(G.__webglFramebuffer[Se],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Se=0,Le=se.length;Se<Le;Se++){const dt=se[Se],me=n.get(dt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),tt(i.TEXTURE_2D,dt),Oe(G.__webglFramebuffer,E,dt,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),p(dt)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ne.__webglTexture),tt(Se,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)Oe(G.__webglFramebuffer[Le],E,v,i.COLOR_ATTACHMENT0,Se,Le);else Oe(G.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Se,0);p(v)&&h(Se),t.unbindTexture()}E.depthBuffer&&Qe(E)}function nt(E){const v=E.textures;for(let G=0,ne=v.length;G<ne;G++){const se=v[G];if(p(se)){const $=P(E),ze=n.get(se).__webglTexture;t.bindTexture($,ze),h($),t.unbindTexture()}}}const Ut=[],F=[];function Zt(E){if(E.samples>0){if(ct(E)===!1){const v=E.textures,G=E.width,ne=E.height;let se=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(E),Se=v.length>1;if(Se)for(let Le=0;Le<v.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const dt=n.get(v[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,G,ne,0,0,G,ne,se,i.NEAREST),l===!0&&(Ut.length=0,F.length=0,Ut.push(i.COLOR_ATTACHMENT0+Le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ut.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Le=0;Le<v.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const dt=n.get(v[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,dt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(E){return Math.min(r.maxSamples,E.samples)}function ct(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xe(E){const v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Et(E,v){const G=E.colorSpace,ne=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==lr&&G!==ii&&(gt.getTransfer(G)===Mt?(ne!==En||se!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function Be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=fe,this.setTextureCube=K,this.rebindTextures=rt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ct}function cg(i,e){function t(n,r=ii){let a;const s=gt.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.BYTE;if(n===jl)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===$l)return i.RGB;if(n===En)return i.RGBA;if(n===Jl)return i.LUMINANCE;if(n===Ql)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===tc)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(s===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ps||n===Ds||n===Ls||n===Us)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ps)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ds)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ls)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Us)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Is||n===Ns||n===Fs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Is||n===Ns)return s===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Fs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Os||n===Bs||n===zs||n===ks||n===Gs||n===Hs||n===Vs||n===Ws||n===Xs||n===qs||n===Ys||n===js||n===Ks||n===Zs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Os)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ks)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ws)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ys)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===js)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ks)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zs)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===$s||n===Js)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===pa)return s===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$s)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===Qs||n===eo||n===to)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===pa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Qs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hg extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),h=this._getHandJoint(c,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new nn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new li({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends Ti{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,g=null,_=null;const M=new pg,p=t.getContextAttributes();let h=null,P=null;const R=[],b=[],z=new Ye;let w=null;const C=new gn;C.viewport=new Ot;const U=new gn;U.viewport=new Ot;const S=[C,U],x=new hg;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=R[J];return _e===void 0&&(_e=new hs,R[J]=_e),_e.getHandSpace()};function H(J){const _e=b.indexOf(J.inputSource);if(_e===-1)return;const Oe=R[_e];Oe!==void 0&&(Oe.update(J.inputSource,J.frame,c||s),Oe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",te);for(let J=0;J<R.length;J++){const _e=b[J];_e!==null&&(b[J]=null,R[J].disconnect(_e))}D=null,V=null,M.reset(),e.setRenderTarget(h),g=null,d=null,f=null,r=null,P=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",X),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(z),r.renderState.layers===void 0){const _e={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),P=new bi(g.framebufferWidth,g.framebufferHeight,{format:En,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let _e=null,Oe=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=p.stencil?sr:er,Oe=p.stencil?ar:Si);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),P=new bi(d.textureWidth,d.textureHeight,{format:En,type:jn,depthTexture:new _c(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function te(J){for(let _e=0;_e<J.removed.length;_e++){const Oe=J.removed[_e],Te=b.indexOf(Oe);Te>=0&&(b[Te]=null,R[Te].disconnect(Oe))}for(let _e=0;_e<J.added.length;_e++){const Oe=J.added[_e];let Te=b.indexOf(Oe);if(Te===-1){for(let Qe=0;Qe<R.length;Qe++)if(Qe>=b.length){b.push(Oe),Te=Qe;break}else if(b[Qe]===null){b[Qe]=Oe,Te=Qe;break}if(Te===-1)break}const je=R[Te];je&&je.connect(Oe)}}const Y=new B,fe=new B;function K(J,_e,Oe){Y.setFromMatrixPosition(_e.matrixWorld),fe.setFromMatrixPosition(Oe.matrixWorld);const Te=Y.distanceTo(fe),je=_e.projectionMatrix.elements,Qe=Oe.projectionMatrix.elements,rt=je[14]/(je[10]-1),Rt=je[14]/(je[10]+1),nt=(je[9]+1)/je[5],Ut=(je[9]-1)/je[5],F=(je[8]-1)/je[0],Zt=(Qe[8]+1)/Qe[0],lt=rt*F,ct=rt*Zt,Xe=Te/(-F+Zt),Et=Xe*-F;if(_e.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Et),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),je[10]===-1)J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Be=rt+Xe,E=Rt+Xe,v=lt-Et,G=ct+(Te-Et),ne=nt*Rt/E*Be,se=Ut*Rt/E*Be;J.projectionMatrix.makePerspective(v,G,ne,se,Be,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let _e=J.near,Oe=J.far;M.texture!==null&&(M.depthNear>0&&(_e=M.depthNear),M.depthFar>0&&(Oe=M.depthFar)),x.near=U.near=C.near=_e,x.far=U.far=C.far=Oe,(D!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,V=x.far),C.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,x.layers.mask=C.layers.mask|U.layers.mask;const Te=J.parent,je=x.cameras;Me(x,Te);for(let Qe=0;Qe<je.length;Qe++)Me(je[Qe],Te);je.length===2?K(x,C,U):x.projectionMatrix.copy(C.projectionMatrix),Pe(J,x,Te)};function Pe(J,_e,Oe){Oe===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=io*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Ue=null;function tt(J,_e){if(u=_e.getViewerPose(c||s),_=_e,u!==null){const Oe=u.views;g!==null&&(e.setRenderTargetFramebuffer(P,g.framebuffer),e.setRenderTarget(P));let Te=!1;Oe.length!==x.cameras.length&&(x.cameras.length=0,Te=!0);for(let Qe=0;Qe<Oe.length;Qe++){const rt=Oe[Qe];let Rt=null;if(g!==null)Rt=g.getViewport(rt);else{const Ut=f.getViewSubImage(d,rt);Rt=Ut.viewport,Qe===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,d.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(P))}let nt=S[Qe];nt===void 0&&(nt=new gn,nt.layers.enable(Qe),nt.viewport=new Ot,S[Qe]=nt),nt.matrix.fromArray(rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Qe===0&&(x.matrix.copy(nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Te===!0&&x.cameras.push(nt)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")){const Qe=f.getDepthInformation(Oe[0]);Qe&&Qe.isValid&&Qe.texture&&M.init(e,Qe,r.renderState)}}for(let Oe=0;Oe<R.length;Oe++){const Te=b[Oe],je=R[Oe];Te!==null&&je!==void 0&&je.update(Te,_e,c||s)}Ue&&Ue(J,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),_=null}const _t=new mc;_t.setAnimationLoop(tt),this.setAnimationLoop=function(J){Ue=J},this.dispose=function(){}}}const mi=new Nn,gg=new Pt;function _g(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,dc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,P,R,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),f(p,h)):h.isMeshPhongMaterial?(a(p,h),u(p,h)):h.isMeshStandardMaterial?(a(p,h),d(p,h),h.isMeshPhysicalMaterial&&g(p,h,b)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),M(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,P,R):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ln&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ln&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const P=e.get(h),R=P.envMap,b=P.envMapRotation;R&&(p.envMap.value=R,mi.copy(b),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(mi)),p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,P,R){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*P,p.scale.value=R*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function g(p,h,P){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const P=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vg(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,R){const b=R.program;n.uniformBlockBinding(P,b)}function c(P,R){let b=r[P.id];b===void 0&&(_(P),b=u(P),r[P.id]=b,P.addEventListener("dispose",p));const z=R.program;n.updateUBOMapping(P,z);const w=e.render.frame;a[P.id]!==w&&(d(P),a[P.id]=w)}function u(P){const R=f();P.__bindingPointIndex=R;const b=i.createBuffer(),z=P.__size,w=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,z,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function f(){for(let P=0;P<o;P++)if(s.indexOf(P)===-1)return s.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(P){const R=r[P.id],b=P.uniforms,z=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let w=0,C=b.length;w<C;w++){const U=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,x=U.length;S<x;S++){const D=U[S];if(g(D,w,S,z)===!0){const V=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let te=0;te<H.length;te++){const Y=H[te],fe=M(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(P,R,b,z){const w=P.value,C=R+"_"+b;if(z[C]===void 0)return typeof w=="number"||typeof w=="boolean"?z[C]=w:z[C]=w.clone(),!0;{const U=z[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return z[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(P){const R=P.uniforms;let b=0;const z=16;for(let C=0,U=R.length;C<U;C++){const S=Array.isArray(R[C])?R[C]:[R[C]];for(let x=0,D=S.length;x<D;x++){const V=S[x],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,te=H.length;X<te;X++){const Y=H[X],fe=M(Y),K=b%z,Me=K%fe.boundary,Pe=K+Me;b+=Me,Pe!==0&&z-Pe<fe.storage&&(b+=z-Pe),V.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=fe.storage}}}const w=b%z;return w>0&&(b+=z-w),P.__size=b,P.__cache={},this}function M(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function p(P){const R=P.target;R.removeEventListener("dispose",p);const b=s.indexOf(R.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function h(){for(const P in r)i.deleteBuffer(r[P]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class xg{constructor(e={}){const{canvas:t=su(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const P=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ai,this.toneMappingExposure=1;const b=this;let z=!1,w=0,C=0,U=null,S=-1,x=null;const D=new Ot,V=new Ot;let H=null;const X=new ft(0);let te=0,Y=t.width,fe=t.height,K=1,Me=null,Pe=null;const Ue=new Ot(0,0,Y,fe),tt=new Ot(0,0,Y,fe);let _t=!1;const J=new go;let _e=!1,Oe=!1;const Te=new Pt,je=new Pt,Qe=new B,rt=new Ot,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ut(){return U===null?K:1}let F=n;function Zt(m,T){return t.getContext(m,T)}try{const m={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",we,!1),F===null){const T="webgl2";if(F=Zt(T,m),F===null)throw Zt(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let lt,ct,Xe,Et,Be,E,v,G,ne,se,$,ze,Se,Le,dt,me,Ne,qe,Ke,Ie,ht,Je,yt,I;function Ee(){lt=new Ep(F),lt.init(),Je=new cg(F,lt),ct=new vp(F,lt,e,Je),Xe=new sg(F,lt),ct.reverseDepthBuffer&&d&&Xe.buffers.depth.setReversed(!0),Et=new wp(F),Be=new Xm,E=new lg(F,lt,Xe,Be,ct,Je,Et),v=new yp(b),G=new bp(b),ne=new Uu(F),yt=new gp(F,ne),se=new Tp(F,ne,Et,yt),$=new Cp(F,se,ne,Et),Ke=new Rp(F,ct,E),me=new xp(Be),ze=new Wm(b,v,G,lt,ct,yt,me),Se=new _g(b,Be),Le=new Ym,dt=new Qm(lt),qe=new mp(b,v,G,Xe,$,g,l),Ne=new rg(b,$,ct),I=new vg(F,Et,ct,Xe),Ie=new _p(F,lt,Et),ht=new Ap(F,lt,Et),Et.programs=ze.programs,b.capabilities=ct,b.extensions=lt,b.properties=Be,b.renderLists=Le,b.shadowMap=Ne,b.state=Xe,b.info=Et}Ee();const j=new mg(b,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const m=lt.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=lt.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(m){m!==void 0&&(K=m,this.setSize(Y,fe,!1))},this.getSize=function(m){return m.set(Y,fe)},this.setSize=function(m,T,N=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=m,fe=T,t.width=Math.floor(m*K),t.height=Math.floor(T*K),N===!0&&(t.style.width=m+"px",t.style.height=T+"px"),this.setViewport(0,0,m,T)},this.getDrawingBufferSize=function(m){return m.set(Y*K,fe*K).floor()},this.setDrawingBufferSize=function(m,T,N){Y=m,fe=T,K=N,t.width=Math.floor(m*N),t.height=Math.floor(T*N),this.setViewport(0,0,m,T)},this.getCurrentViewport=function(m){return m.copy(D)},this.getViewport=function(m){return m.copy(Ue)},this.setViewport=function(m,T,N,L){m.isVector4?Ue.set(m.x,m.y,m.z,m.w):Ue.set(m,T,N,L),Xe.viewport(D.copy(Ue).multiplyScalar(K).round())},this.getScissor=function(m){return m.copy(tt)},this.setScissor=function(m,T,N,L){m.isVector4?tt.set(m.x,m.y,m.z,m.w):tt.set(m,T,N,L),Xe.scissor(V.copy(tt).multiplyScalar(K).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(m){Xe.setScissorTest(_t=m)},this.setOpaqueSort=function(m){Me=m},this.setTransparentSort=function(m){Pe=m},this.getClearColor=function(m){return m.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(m=!0,T=!0,N=!0){let L=0;if(m){let A=!1;if(U!==null){const k=U.texture.format;A=k===po||k===fo||k===uo}if(A){const k=U.texture.type,W=k===jn||k===Si||k===wr||k===ar||k===co||k===ho,re=qe.getClearColor(),de=qe.getClearAlpha(),ve=re.r,ce=re.g,Z=re.b;W?(_[0]=ve,_[1]=ce,_[2]=Z,_[3]=de,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=ve,M[1]=ce,M[2]=Z,M[3]=de,F.clearBufferiv(F.COLOR,0,M))}else L|=F.COLOR_BUFFER_BIT}T&&(L|=F.DEPTH_BUFFER_BIT),N&&(L|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Le.dispose(),dt.dispose(),Be.dispose(),v.dispose(),G.dispose(),$.dispose(),yt.dispose(),I.dispose(),ze.dispose(),j.dispose(),j.removeEventListener("sessionstart",ur),j.removeEventListener("sessionend",Dr),Cn.stop()};function ie(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const m=Et.autoReset,T=Ne.enabled,N=Ne.autoUpdate,L=Ne.needsUpdate,A=Ne.type;Ee(),Et.autoReset=m,Ne.enabled=T,Ne.autoUpdate=N,Ne.needsUpdate=L,Ne.type=A}function we(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function et(m){const T=m.target;T.removeEventListener("dispose",et),Dt(T)}function Dt(m){kt(m),Be.remove(m)}function kt(m){const T=Be.get(m).programs;T!==void 0&&(T.forEach(function(N){ze.releaseProgram(N)}),m.isShaderMaterial&&ze.releaseShaderCache(m))}this.renderBufferDirect=function(m,T,N,L,A,k){T===null&&(T=Rt);const W=A.isMesh&&A.matrixWorld.determinant()<0,re=Fe(m,T,N,L,A);Xe.setMaterial(L,W);let de=N.index,ve=1;if(L.wireframe===!0){if(de=se.getWireframeAttribute(N),de===void 0)return;ve=2}const ce=N.drawRange,Z=N.attributes.position;let oe=ce.start*ve,He=(ce.start+ce.count)*ve;k!==null&&(oe=Math.max(oe,k.start*ve),He=Math.min(He,(k.start+k.count)*ve)),de!==null?(oe=Math.max(oe,0),He=Math.min(He,de.count)):Z!=null&&(oe=Math.max(oe,0),He=Math.min(He,Z.count));const ue=He-oe;if(ue<0||ue===1/0)return;yt.setup(A,L,re,N,de);let De,xe=Ie;if(de!==null&&(De=ne.get(de),xe=ht,xe.setIndex(De)),A.isMesh)L.wireframe===!0?(Xe.setLineWidth(L.wireframeLinewidth*Ut()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(A.isLine){let ee=L.linewidth;ee===void 0&&(ee=1),Xe.setLineWidth(ee*Ut()),A.isLineSegments?xe.setMode(F.LINES):A.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else A.isPoints?xe.setMode(F.POINTS):A.isSprite&&xe.setMode(F.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)xe.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))xe.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const ee=A._multiDrawStarts,Ge=A._multiDrawCounts,le=A._multiDrawCount,We=de?ne.get(de).bytesPerElement:1,Tt=Be.get(L).currentProgram.getUniforms();for(let xt=0;xt<le;xt++)Tt.setValue(F,"_gl_DrawID",xt),xe.render(ee[xt]/We,Ge[xt])}else if(A.isInstancedMesh)xe.renderInstances(oe,ue,A.count);else if(N.isInstancedBufferGeometry){const ee=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ge=Math.min(N.instanceCount,ee);xe.renderInstances(oe,ue,Ge)}else xe.render(oe,ue)};function vt(m,T,N){m.transparent===!0&&m.side===Wn&&m.forceSinglePass===!1?(m.side=ln,m.needsUpdate=!0,Q(m,T,N),m.side=oi,m.needsUpdate=!0,Q(m,T,N),m.side=Wn):Q(m,T,N)}this.compile=function(m,T,N=null){N===null&&(N=m),h=dt.get(N),h.init(T),R.push(h),N.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(h.pushLight(A),A.castShadow&&h.pushShadow(A))}),m!==N&&m.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(h.pushLight(A),A.castShadow&&h.pushShadow(A))}),h.setupLights();const L=new Set;return m.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const k=A.material;if(k)if(Array.isArray(k))for(let W=0;W<k.length;W++){const re=k[W];vt(re,N,A),L.add(re)}else vt(k,N,A),L.add(k)}),R.pop(),h=null,L},this.compileAsync=function(m,T,N=null){const L=this.compile(m,T,N);return new Promise(A=>{function k(){if(L.forEach(function(W){Be.get(W).currentProgram.isReady()&&L.delete(W)}),L.size===0){A(m);return}setTimeout(k,10)}lt.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let rn=null;function vn(m){rn&&rn(m)}function ur(){Cn.stop()}function Dr(){Cn.start()}const Cn=new mc;Cn.setAnimationLoop(vn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(m){rn=m,j.setAnimationLoop(m),m===null?Cn.stop():Cn.start()},j.addEventListener("sessionstart",ur),j.addEventListener("sessionend",Dr),this.render=function(m,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(T),T=j.getCamera()),m.isScene===!0&&m.onBeforeRender(b,m,T,U),h=dt.get(m,R.length),h.init(T),R.push(h),je.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),J.setFromProjectionMatrix(je),Oe=this.localClippingEnabled,_e=me.init(this.clippingPlanes,Oe),p=Le.get(m,P.length),p.init(),P.push(p),j.enabled===!0&&j.isPresenting===!0){const k=b.xr.getDepthSensingMesh();k!==null&&dr(k,T,-1/0,b.sortObjects)}dr(m,T,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(Me,Pe),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&qe.addToRenderList(p,m),this.info.render.frame++,_e===!0&&me.beginShadows();const N=h.state.shadowsArray;Ne.render(N,m,T),_e===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=p.opaque,A=p.transmissive;if(h.setupLights(),T.isArrayCamera){const k=T.cameras;if(A.length>0)for(let W=0,re=k.length;W<re;W++){const de=k[W];Ur(L,A,m,de)}nt&&qe.render(m);for(let W=0,re=k.length;W<re;W++){const de=k[W];Lr(p,m,de,de.viewport)}}else A.length>0&&Ur(L,A,m,T),nt&&qe.render(m),Lr(p,m,T);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),m.isScene===!0&&m.onAfterRender(b,m,T),yt.resetDefaultState(),S=-1,x=null,R.pop(),R.length>0?(h=R[R.length-1],_e===!0&&me.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,P.pop(),P.length>0?p=P[P.length-1]:p=null};function dr(m,T,N,L){if(m.visible===!1)return;if(m.layers.test(T.layers)){if(m.isGroup)N=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(T);else if(m.isLight)h.pushLight(m),m.castShadow&&h.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||J.intersectsSprite(m)){L&&rt.setFromMatrixPosition(m.matrixWorld).applyMatrix4(je);const W=$.update(m),re=m.material;re.visible&&p.push(m,W,re,N,rt.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||J.intersectsObject(m))){const W=$.update(m),re=m.material;if(L&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),rt.copy(m.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),rt.copy(W.boundingSphere.center)),rt.applyMatrix4(m.matrixWorld).applyMatrix4(je)),Array.isArray(re)){const de=W.groups;for(let ve=0,ce=de.length;ve<ce;ve++){const Z=de[ve],oe=re[Z.materialIndex];oe&&oe.visible&&p.push(m,W,oe,N,rt.z,Z)}}else re.visible&&p.push(m,W,re,N,rt.z,null)}}const k=m.children;for(let W=0,re=k.length;W<re;W++)dr(k[W],T,N,L)}function Lr(m,T,N,L){const A=m.opaque,k=m.transmissive,W=m.transparent;h.setupLightsView(N),_e===!0&&me.setGlobalState(b.clippingPlanes,N),L&&Xe.viewport(D.copy(L)),A.length>0&&O(A,T,N),k.length>0&&O(k,T,N),W.length>0&&O(W,T,N),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ur(m,T,N,L){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[L.id]===void 0&&(h.state.transmissionRenderTarget[L.id]=new bi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Cr:jn,minFilter:Mi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const k=h.state.transmissionRenderTarget[L.id],W=L.viewport||D;k.setSize(W.z,W.w);const re=b.getRenderTarget();b.setRenderTarget(k),b.getClearColor(X),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),nt&&qe.render(N);const de=b.toneMapping;b.toneMapping=ai;const ve=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),h.setupLightsView(L),_e===!0&&me.setGlobalState(b.clippingPlanes,L),O(m,N,L),E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Z=0,oe=T.length;Z<oe;Z++){const He=T[Z],ue=He.object,De=He.geometry,xe=He.material,ee=He.group;if(xe.side===Wn&&ue.layers.test(L.layers)){const Ge=xe.side;xe.side=ln,xe.needsUpdate=!0,q(ue,N,L,De,xe,ee),xe.side=Ge,xe.needsUpdate=!0,ce=!0}}ce===!0&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k))}b.setRenderTarget(re),b.setClearColor(X,te),ve!==void 0&&(L.viewport=ve),b.toneMapping=de}function O(m,T,N){const L=T.isScene===!0?T.overrideMaterial:null;for(let A=0,k=m.length;A<k;A++){const W=m[A],re=W.object,de=W.geometry,ve=L===null?W.material:L,ce=W.group;re.layers.test(N.layers)&&q(re,T,N,de,ve,ce)}}function q(m,T,N,L,A,k){m.onBeforeRender(b,T,N,L,A,k),m.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),A.onBeforeRender(b,T,N,L,m,k),A.transparent===!0&&A.side===Wn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,b.renderBufferDirect(N,T,L,A,m,k),A.side=oi,A.needsUpdate=!0,b.renderBufferDirect(N,T,L,A,m,k),A.side=Wn):b.renderBufferDirect(N,T,L,A,m,k),m.onAfterRender(b,T,N,L,A,k)}function Q(m,T,N){T.isScene!==!0&&(T=Rt);const L=Be.get(m),A=h.state.lights,k=h.state.shadowsArray,W=A.state.version,re=ze.getParameters(m,A.state,k,T,N),de=ze.getProgramCacheKey(re);let ve=L.programs;L.environment=m.isMeshStandardMaterial?T.environment:null,L.fog=T.fog,L.envMap=(m.isMeshStandardMaterial?G:v).get(m.envMap||L.environment),L.envMapRotation=L.environment!==null&&m.envMap===null?T.environmentRotation:m.envMapRotation,ve===void 0&&(m.addEventListener("dispose",et),ve=new Map,L.programs=ve);let ce=ve.get(de);if(ce!==void 0){if(L.currentProgram===ce&&L.lightsStateVersion===W)return Ce(m,re),ce}else re.uniforms=ze.getUniforms(m),m.onBeforeCompile(re,b),ce=ze.acquireProgram(re,de),ve.set(de,ce),L.uniforms=re.uniforms;const Z=L.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Z.clippingPlanes=me.uniform),Ce(m,re),L.needsLights=Re(m),L.lightsStateVersion=W,L.needsLights&&(Z.ambientLightColor.value=A.state.ambient,Z.lightProbe.value=A.state.probe,Z.directionalLights.value=A.state.directional,Z.directionalLightShadows.value=A.state.directionalShadow,Z.spotLights.value=A.state.spot,Z.spotLightShadows.value=A.state.spotShadow,Z.rectAreaLights.value=A.state.rectArea,Z.ltc_1.value=A.state.rectAreaLTC1,Z.ltc_2.value=A.state.rectAreaLTC2,Z.pointLights.value=A.state.point,Z.pointLightShadows.value=A.state.pointShadow,Z.hemisphereLights.value=A.state.hemi,Z.directionalShadowMap.value=A.state.directionalShadowMap,Z.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Z.spotShadowMap.value=A.state.spotShadowMap,Z.spotLightMatrix.value=A.state.spotLightMatrix,Z.spotLightMap.value=A.state.spotLightMap,Z.pointShadowMap.value=A.state.pointShadowMap,Z.pointShadowMatrix.value=A.state.pointShadowMatrix),L.currentProgram=ce,L.uniformsList=null,ce}function pe(m){if(m.uniformsList===null){const T=m.currentProgram.getUniforms();m.uniformsList=ga.seqWithValue(T.seq,m.uniforms)}return m.uniformsList}function Ce(m,T){const N=Be.get(m);N.outputColorSpace=T.outputColorSpace,N.batching=T.batching,N.batchingColor=T.batchingColor,N.instancing=T.instancing,N.instancingColor=T.instancingColor,N.instancingMorph=T.instancingMorph,N.skinning=T.skinning,N.morphTargets=T.morphTargets,N.morphNormals=T.morphNormals,N.morphColors=T.morphColors,N.morphTargetsCount=T.morphTargetsCount,N.numClippingPlanes=T.numClippingPlanes,N.numIntersection=T.numClipIntersection,N.vertexAlphas=T.vertexAlphas,N.vertexTangents=T.vertexTangents,N.toneMapping=T.toneMapping}function Fe(m,T,N,L,A){T.isScene!==!0&&(T=Rt),E.resetTextureUnits();const k=T.fog,W=L.isMeshStandardMaterial?T.environment:null,re=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:lr,de=(L.isMeshStandardMaterial?G:v).get(L.envMap||W),ve=L.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,ce=!!N.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Z=!!N.morphAttributes.position,oe=!!N.morphAttributes.normal,He=!!N.morphAttributes.color;let ue=ai;L.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=b.toneMapping);const De=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=De!==void 0?De.length:0,ee=Be.get(L),Ge=h.state.lights;if(_e===!0&&(Oe===!0||m!==x)){const It=m===x&&L.id===S;me.setState(L,m,It)}let le=!1;L.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ge.state.version||ee.outputColorSpace!==re||A.isBatchedMesh&&ee.batching===!1||!A.isBatchedMesh&&ee.batching===!0||A.isBatchedMesh&&ee.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&ee.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&ee.instancing===!1||!A.isInstancedMesh&&ee.instancing===!0||A.isSkinnedMesh&&ee.skinning===!1||!A.isSkinnedMesh&&ee.skinning===!0||A.isInstancedMesh&&ee.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&ee.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&ee.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&ee.instancingMorph===!1&&A.morphTexture!==null||ee.envMap!==de||L.fog===!0&&ee.fog!==k||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==me.numPlanes||ee.numIntersection!==me.numIntersection)||ee.vertexAlphas!==ve||ee.vertexTangents!==ce||ee.morphTargets!==Z||ee.morphNormals!==oe||ee.morphColors!==He||ee.toneMapping!==ue||ee.morphTargetsCount!==xe)&&(le=!0):(le=!0,ee.__version=L.version);let We=ee.currentProgram;le===!0&&(We=Q(L,T,A));let Tt=!1,xt=!1,Lt=!1;const ut=We.getUniforms(),Nt=ee.uniforms;if(Xe.useProgram(We.program)&&(Tt=!0,xt=!0,Lt=!0),L.id!==S&&(S=L.id,xt=!0),Tt||x!==m){Xe.buffers.depth.getReversed()?(Te.copy(m.projectionMatrix),lu(Te),cu(Te),ut.setValue(F,"projectionMatrix",Te)):ut.setValue(F,"projectionMatrix",m.projectionMatrix),ut.setValue(F,"viewMatrix",m.matrixWorldInverse);const Yt=ut.map.cameraPosition;Yt!==void 0&&Yt.setValue(F,Qe.setFromMatrixPosition(m.matrixWorld)),ct.logarithmicDepthBuffer&&ut.setValue(F,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ut.setValue(F,"isOrthographic",m.isOrthographicCamera===!0),x!==m&&(x=m,xt=!0,Lt=!0)}if(A.isSkinnedMesh){ut.setOptional(F,A,"bindMatrix"),ut.setOptional(F,A,"bindMatrixInverse");const It=A.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(F,"boneTexture",It.boneTexture,E))}A.isBatchedMesh&&(ut.setOptional(F,A,"batchingTexture"),ut.setValue(F,"batchingTexture",A._matricesTexture,E),ut.setOptional(F,A,"batchingIdTexture"),ut.setValue(F,"batchingIdTexture",A._indirectTexture,E),ut.setOptional(F,A,"batchingColorTexture"),A._colorsTexture!==null&&ut.setValue(F,"batchingColorTexture",A._colorsTexture,E));const Gt=N.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&Ke.update(A,N,We),(xt||ee.receiveShadow!==A.receiveShadow)&&(ee.receiveShadow=A.receiveShadow,ut.setValue(F,"receiveShadow",A.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Nt.envMap.value=de,Nt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&T.environment!==null&&(Nt.envMapIntensity.value=T.environmentIntensity),xt&&(ut.setValue(F,"toneMappingExposure",b.toneMappingExposure),ee.needsLights&&ke(Nt,Lt),k&&L.fog===!0&&Se.refreshFogUniforms(Nt,k),Se.refreshMaterialUniforms(Nt,L,K,fe,h.state.transmissionRenderTarget[m.id]),ga.upload(F,pe(ee),Nt,E)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(ga.upload(F,pe(ee),Nt,E),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ut.setValue(F,"center",A.center),ut.setValue(F,"modelViewMatrix",A.modelViewMatrix),ut.setValue(F,"normalMatrix",A.normalMatrix),ut.setValue(F,"modelMatrix",A.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const It=L.uniformsGroups;for(let Yt=0,$t=It.length;Yt<$t;Yt++){const Fn=It[Yt];I.update(Fn,We),I.bind(Fn,We)}}return We}function ke(m,T){m.ambientLightColor.needsUpdate=T,m.lightProbe.needsUpdate=T,m.directionalLights.needsUpdate=T,m.directionalLightShadows.needsUpdate=T,m.pointLights.needsUpdate=T,m.pointLightShadows.needsUpdate=T,m.spotLights.needsUpdate=T,m.spotLightShadows.needsUpdate=T,m.rectAreaLights.needsUpdate=T,m.hemisphereLights.needsUpdate=T}function Re(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(m,T,N){Be.get(m.texture).__webglTexture=T,Be.get(m.depthTexture).__webglTexture=N;const L=Be.get(m);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=N===void 0,L.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(m,T){const N=Be.get(m);N.__webglFramebuffer=T,N.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(m,T=0,N=0){U=m,w=T,C=N;let L=!0,A=null,k=!1,W=!1;if(m){const de=Be.get(m);if(de.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(F.FRAMEBUFFER,null),L=!1;else if(de.__webglFramebuffer===void 0)E.setupRenderTarget(m);else if(de.__hasExternalTextures)E.rebindTextures(m,Be.get(m.texture).__webglTexture,Be.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){const Z=m.depthTexture;if(de.__boundDepthTexture!==Z){if(Z!==null&&Be.has(Z)&&(m.width!==Z.image.width||m.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(m)}}const ve=m.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(W=!0);const ce=Be.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(ce[T])?A=ce[T][N]:A=ce[T],k=!0):m.samples>0&&E.useMultisampledRTT(m)===!1?A=Be.get(m).__webglMultisampledFramebuffer:Array.isArray(ce)?A=ce[N]:A=ce,D.copy(m.viewport),V.copy(m.scissor),H=m.scissorTest}else D.copy(Ue).multiplyScalar(K).floor(),V.copy(tt).multiplyScalar(K).floor(),H=_t;if(Xe.bindFramebuffer(F.FRAMEBUFFER,A)&&L&&Xe.drawBuffers(m,A),Xe.viewport(D),Xe.scissor(V),Xe.setScissorTest(H),k){const de=Be.get(m.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+T,de.__webglTexture,N)}else if(W){const de=Be.get(m.texture),ve=T||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.__webglTexture,N||0,ve)}S=-1},this.readRenderTargetPixels=function(m,T,N,L,A,k,W){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=Be.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&W!==void 0&&(re=re[W]),re){Xe.bindFramebuffer(F.FRAMEBUFFER,re);try{const de=m.texture,ve=de.format,ce=de.type;if(!ct.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=m.width-L&&N>=0&&N<=m.height-A&&F.readPixels(T,N,L,A,Je.convert(ve),Je.convert(ce),k)}finally{const de=U!==null?Be.get(U).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(m,T,N,L,A,k,W){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=Be.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&W!==void 0&&(re=re[W]),re){const de=m.texture,ve=de.format,ce=de.type;if(!ct.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(T>=0&&T<=m.width-L&&N>=0&&N<=m.height-A){Xe.bindFramebuffer(F.FRAMEBUFFER,re);const Z=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Z),F.bufferData(F.PIXEL_PACK_BUFFER,k.byteLength,F.STREAM_READ),F.readPixels(T,N,L,A,Je.convert(ve),Je.convert(ce),0);const oe=U!==null?Be.get(U).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,oe);const He=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ou(F,He,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Z),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,k),F.deleteBuffer(Z),F.deleteSync(He),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(m,T=null,N=0){m.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),T=arguments[0]||null,m=arguments[1]);const L=Math.pow(2,-N),A=Math.floor(m.image.width*L),k=Math.floor(m.image.height*L),W=T!==null?T.x:0,re=T!==null?T.y:0;E.setTexture2D(m,0),F.copyTexSubImage2D(F.TEXTURE_2D,N,0,0,W,re,A,k),Xe.unbindTexture()},this.copyTextureToTexture=function(m,T,N=null,L=null,A=0){m.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,m=arguments[1],T=arguments[2],A=arguments[3]||0,N=null);let k,W,re,de,ve,ce,Z,oe,He;const ue=m.isCompressedTexture?m.mipmaps[A]:m.image;N!==null?(k=N.max.x-N.min.x,W=N.max.y-N.min.y,re=N.isBox3?N.max.z-N.min.z:1,de=N.min.x,ve=N.min.y,ce=N.isBox3?N.min.z:0):(k=ue.width,W=ue.height,re=ue.depth||1,de=0,ve=0,ce=0),L!==null?(Z=L.x,oe=L.y,He=L.z):(Z=0,oe=0,He=0);const De=Je.convert(T.format),xe=Je.convert(T.type);let ee;T.isData3DTexture?(E.setTexture3D(T,0),ee=F.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(E.setTexture2DArray(T,0),ee=F.TEXTURE_2D_ARRAY):(E.setTexture2D(T,0),ee=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,T.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,T.unpackAlignment);const Ge=F.getParameter(F.UNPACK_ROW_LENGTH),le=F.getParameter(F.UNPACK_IMAGE_HEIGHT),We=F.getParameter(F.UNPACK_SKIP_PIXELS),Tt=F.getParameter(F.UNPACK_SKIP_ROWS),xt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,de),F.pixelStorei(F.UNPACK_SKIP_ROWS,ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);const Lt=m.isDataArrayTexture||m.isData3DTexture,ut=T.isDataArrayTexture||T.isData3DTexture;if(m.isRenderTargetTexture||m.isDepthTexture){const Nt=Be.get(m),Gt=Be.get(T),It=Be.get(Nt.__renderTarget),Yt=Be.get(Gt.__renderTarget);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let $t=0;$t<re;$t++)Lt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(m).__webglTexture,A,ce+$t),m.isDepthTexture?(ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(T).__webglTexture,A,He+$t),F.blitFramebuffer(de,ve,k,W,Z,oe,k,W,F.DEPTH_BUFFER_BIT,F.NEAREST)):ut?F.copyTexSubImage3D(ee,A,Z,oe,He+$t,de,ve,k,W):F.copyTexSubImage2D(ee,A,Z,oe,He+$t,de,ve,k,W);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ut?m.isDataTexture||m.isData3DTexture?F.texSubImage3D(ee,A,Z,oe,He,k,W,re,De,xe,ue.data):T.isCompressedArrayTexture?F.compressedTexSubImage3D(ee,A,Z,oe,He,k,W,re,De,ue.data):F.texSubImage3D(ee,A,Z,oe,He,k,W,re,De,xe,ue):m.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,A,Z,oe,k,W,De,xe,ue.data):m.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,A,Z,oe,ue.width,ue.height,De,ue.data):F.texSubImage2D(F.TEXTURE_2D,A,Z,oe,k,W,De,xe,ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xt),A===0&&T.generateMipmaps&&F.generateMipmap(ee),Xe.unbindTexture()},this.copyTextureToTexture3D=function(m,T,N=null,L=null,A=0){return m.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,L=arguments[1]||null,m=arguments[2],T=arguments[3],A=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(m,T,N,L,A)},this.initRenderTarget=function(m){Be.get(m).__webglFramebuffer===void 0&&E.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?E.setTextureCube(m,0):m.isData3DTexture?E.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?E.setTexture2DArray(m,0):E.setTexture2D(m,0),Xe.unbindTexture()},this.resetState=function(){w=0,C=0,U=null,Xe.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class yg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new B;class ya{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),a=St(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sc extends Ai{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const xr=new B,qi=new B,Yi=new B,ji=new Ye,yr=new Ye,bc=new Pt,ra=new B,Mr=new B,aa=new B,Sl=new Ye,us=new Ye,bl=new Ye;class Sg extends qt{constructor(e=new Sc){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mg(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new ya(n,3,0,!1)),Xi.setAttribute("uv",new ya(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),bc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;sa(ra.set(-.5,-.5,0),Yi,s,qi,r,a),sa(Mr.set(.5,-.5,0),Yi,s,qi,r,a),sa(aa.set(.5,.5,0),Yi,s,qi,r,a),Sl.set(0,0),us.set(1,0),bl.set(1,1);let o=e.ray.intersectTriangle(ra,Mr,aa,!1,xr);if(o===null&&(sa(Mr.set(-.5,.5,0),Yi,s,qi,r,a),us.set(0,1),o=e.ray.intersectTriangle(ra,aa,Mr,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:_n.getInterpolation(xr,ra,Mr,aa,Sl,us,bl,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(i,e,t,n,r,a){ji.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(yr.x=a*ji.x-r*ji.y,yr.y=r*ji.x+a*ji.y):yr.copy(ji),i.copy(e),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(bc)}class Ec extends Ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const El=new Pt,ao=new Aa,oa=new Ta,la=new B;class bg extends qt{constructor(e=new Rn,t=new Ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=a,e.ray.intersectsSphere(oa)===!1)return;El.copy(r).invert(),ao.copy(e.ray).applyMatrix4(El);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let _=d,M=g;_<M;_++){const p=c.getX(_);la.fromBufferAttribute(f,p),Tl(la,p,l,r,e,t,this)}}else{const d=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let _=d,M=g;_<M;_++)la.fromBufferAttribute(f,_),Tl(la,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Tl(i,e,t,n,r,a,s){const o=ao.distanceSqToPoint(i);if(o<t){const l=new B;ao.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ds extends nn{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rr extends Rn{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],f=[],d=[],g=[];let _=0;const M=[],p=n/2;let h=0;P(),s===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new wn(f,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(g,2));function P(){const b=new B,z=new B;let w=0;const C=(t-e)/n;for(let U=0;U<=a;U++){const S=[],x=U/a,D=x*(t-e)+e;for(let V=0;V<=r;V++){const H=V/r,X=H*l+o,te=Math.sin(X),Y=Math.cos(X);z.x=D*te,z.y=-x*n+p,z.z=D*Y,f.push(z.x,z.y,z.z),b.set(te,C,Y).normalize(),d.push(b.x,b.y,b.z),g.push(H,1-x),S.push(_++)}M.push(S)}for(let U=0;U<r;U++)for(let S=0;S<a;S++){const x=M[S][U],D=M[S+1][U],V=M[S+1][U+1],H=M[S][U+1];(e>0||S!==0)&&(u.push(x,D,H),w+=3),(t>0||S!==a-1)&&(u.push(D,V,H),w+=3)}c.addGroup(h,w,0),h+=w}function R(b){const z=_,w=new Ye,C=new B;let U=0;const S=b===!0?e:t,x=b===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,p*x,0),d.push(0,x,0),g.push(.5,.5),_++;const D=_;for(let V=0;V<=r;V++){const X=V/r*l+o,te=Math.cos(X),Y=Math.sin(X);C.x=S*Y,C.y=p*x,C.z=S*te,f.push(C.x,C.y,C.z),d.push(0,x,0),w.x=te*.5+.5,w.y=Y*.5*x+.5,g.push(w.x,w.y),_++}for(let V=0;V<r;V++){const H=z+V,X=D+V;b===!0?u.push(X,X+1,H):u.push(X+1,X,H),U+=3}c.addGroup(h,U,b===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends Rr{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends Ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tc extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fs=new Pt,Al=new B,wl=new B;class Eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wl),t.updateMatrixWorld(),fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tg extends Eg{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rl extends Tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ag extends Tc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cl=new Pt;class wg{constructor(e,t,n=0,r=1/0){this.ray=new Aa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(Pl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)so(e[r],this,n,t);return n.sort(Pl),n}}function Pl(i,e){return i.distance-e.distance}function so(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)so(a[s],e,t,!0)}}class Dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rg extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);const Ll={type:"change"},xo={type:"start"},Ac={type:"end"},ca=new Aa,Ul=new ni,Cg=Math.cos(70*au.DEG2RAD),Ht=new B,on=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ps=1e-6;class Pg extends Rg{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ei,this._lastTargetPosition=new B,this._quat=new Ei().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dl,this._sphericalDelta=new Dl,this._scale=1,this._panOffset=new B,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new B,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lg.bind(this),this._onPointerDown=Dg.bind(this),this._onPointerUp=Ug.bind(this),this._onContextMenu=kg.bind(this),this._onMouseWheel=Fg.bind(this),this._onKeyDown=Og.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=zg.bind(this),this._onMouseDown=Ig.bind(this),this._onMouseMove=Ng.bind(this),this._interceptControlDown=Gg.bind(this),this._interceptControlUp=Hg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ll),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Ht.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<Cg?this.object.lookAt(this.target):(Ul.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(Ul,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ps||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ps||this._lastTargetPosition.distanceToSquared(this.target)>ps?(this.dispatchEvent(Ll),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let a=Ht.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Dg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Lg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ug(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ac),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ig(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(xo)}function Ng(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fg(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(xo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ac))}function Og(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(xo)}function zg(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function kg(i){this.enabled!==!1&&i.preventDefault()}function Gg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ct=JSON.parse(`[{"id":"logic","name":"Logic","type":"Pure Math","category":"Foundations","year":-350,"era":{"start":-350,"peak":1930,"end":null},"difficulty":"High School","aka":["Philosophical Logic","Mathematical Logic"],"notableYears":[-350,1879,1931],"notes":"Classical syllogistic (Aristotle), modern predicate logic (Frege 1879), incompleteness (Gödel 1931).","leadsTo":["axiomatic-set-theory","category-theory","computation","model-theory"],"contributors":["aristotle","frege","peano","tarski","godel","church"],"prerequisites":[]},{"id":"axiomatic-set-theory","name":"Axiomatic Set Theory","type":"Pure Math","category":"Foundations","year":1908,"era":{"start":1874,"peak":1922,"end":null},"difficulty":"UGrad","aka":["ZFC","ZF + Choice"],"notableYears":[1874,1908,1922],"notes":"Cantor’s set theory (1870s), Zermelo axioms (1908), Fraenkel–Skolem refinements (1922).","leadsTo":["category-theory","measure-theory","topology","model-theory"],"contributors":["cantor","zermelo","fraenkel","skolem","godel","hilbert"],"prerequisites":[{"id":"logic","strength":75}]},{"id":"category-theory","name":"Category Theory","type":"Pure Math","category":"Foundations","year":1945,"era":{"start":1945,"peak":1960,"end":null},"difficulty":"PGrad","aka":["Eilenberg–Mac Lane framework"],"notableYears":[1945,1957,1970],"notes":"Introduced by Eilenberg & Mac Lane (1945); natural transformations, adjunctions; Grothendieck toposes.","leadsTo":["algebraic-topology","homological-algebra","type-theory"],"contributors":["eilenberg","maclane","grothendieck","lawvere"],"prerequisites":[{"id":"axiomatic-set-theory","strength":80},{"id":"abstract-algebra","strength":75}]},{"id":"elementary-geometry","name":"Elementary Geometry","type":"Pure Math","category":"Geometry and Topology","year":-300,"era":{"start":-600,"peak":-300,"end":null},"difficulty":"High School","aka":["Euclidean Geometry"],"notableYears":[-300],"notes":"Euclid’s Elements (~300 BCE); foundation for classical geometry and trigonometry.","leadsTo":["calculus","topology","differential-geometry","trigonometry"],"contributors":["euclid","pythagoras","archimedes"],"prerequisites":[]},{"id":"elementary-algebra","name":"Elementary Algebra","type":"Pure Math","category":"Algebra and Discrete","year":-820,"era":{"start":-820,"peak":825,"end":null},"difficulty":"High School","aka":["Basic Algebra","School Algebra"],"notableYears":[-820,825,1591],"notes":"Ancient Babylonian algebra (~1800 BCE), Al-Khwarizmi's 'Al-Jabr' (825 CE), Viète's symbolic notation (1591).","leadsTo":["trigonometry","linear-algebra","calculus"],"contributors":["euclid","descartes"],"prerequisites":[]},{"id":"linear-algebra","name":"Linear Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1840,"peak":1870,"end":null},"difficulty":"UGrad","aka":["Matrix Theory","Vector Spaces"],"notableYears":[1844,1858,1870],"notes":"Grassmann (1844), Cayley (1858), Jordan normal form (1870s).","leadsTo":["abstract-algebra","functional-analysis","computational-linear-algebra","machine-learning"],"contributors":["gauss","cauchy","cayley","jordan","sylvester"],"prerequisites":[{"id":"elementary-algebra","strength":70}]},{"id":"abstract-algebra","name":"Abstract Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1830,"peak":1890,"end":null},"difficulty":"UGrad","aka":["Modern Algebra"],"notableYears":[1830,1846,1870],"notes":"From groups (Galois) to rings/fields (Dedekind, Kronecker); consolidation late 19th c.","leadsTo":["galois-theory","lie-groups","representation-theory","homological-algebra","commutative-algebra"],"contributors":["galois","cauchy","gauss","dedekind","noether","kronecker"],"prerequisites":[{"id":"linear-algebra","strength":70}]},{"id":"galois-theory","name":"Galois Theory","type":"Pure Math","category":"Algebra and Discrete","year":1832,"era":{"start":1832,"peak":1870,"end":null},"difficulty":"PGrad","aka":["Theory of Field Extensions"],"notableYears":[1832,1870],"notes":"Galois (1832); Jordan, Dedekind elaborations later.","leadsTo":["number-theory","algebraic-geometry"],"contributors":["galois","jordan","dedekind"],"prerequisites":[{"id":"abstract-algebra","strength":90}]},{"id":"representation-theory","name":"Module & Representation Theory","type":"Pure Math","category":"Algebra and Discrete","year":1897,"era":{"start":1897,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Linear Representations","Module Theory"],"notableYears":[1897,1900,1930],"notes":"Frobenius and Schur (1897–1905) for finite groups; module theory (Noether).","leadsTo":["lie-groups","homological-algebra","harmonic-analysis"],"contributors":["frobenius","schur","noether","weilang","artin"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"lie-groups","name":"Lie Groups & Lie Algebras","type":"Pure Math","category":"Algebra and Discrete","year":1873,"era":{"start":1870,"peak":1890,"end":null},"difficulty":"PGrad","aka":["Continuous Groups"],"notableYears":[1873,1880,1893],"notes":"Sophus Lie’s theory of continuous symmetry; Cartan classification in early 20th c.","leadsTo":["differential-geometry","representation-theory","theoretical-physics"],"contributors":["lie","cartan","weyl"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"calculus","strength":75}]},{"id":"homological-algebra","name":"Commutative and Homological Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1956,"era":{"start":1945,"peak":1956,"end":null},"difficulty":"Research","aka":["Derived Functors","Ext/Tor"],"notableYears":[1945,1956],"notes":"Cartan–Eilenberg (1956); tools for modern algebra/topology.","leadsTo":["algebraic-topology","category-theory","algebraic-geometry"],"contributors":["cartan","eilenberg","grothendieck"],"prerequisites":[{"id":"abstract-algebra","strength":90},{"id":"category-theory","strength":75}]},{"id":"number-theory","name":"Number Theory","type":"Pure Math","category":"Algebra and Discrete","year":1601,"era":{"start":-600,"peak":1801,"end":null},"difficulty":"UGrad","aka":["Elementary Number Theory"],"notableYears":[1601,1801,1859],"notes":"Ancient roots; Fermat’s contributions (1601+); Gauss’s Disquisitiones (1801); Riemann’s 1859 memoir.","leadsTo":["abstract-algebra","galois-theory","algebraic-number-theory"],"contributors":["euclid","fermat","euler","gauss","riemann","ramanujan","dirichlet"],"prerequisites":[]},{"id":"graph-theory","name":"Graph Theory & Combinatorics","type":"Pure Math","category":"Algebra and Discrete","year":1736,"era":{"start":1736,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Networks","Discrete Mathematics"],"notableYears":[1736,1959,1976],"notes":"Euler (1736); Erdős–Rényi random graphs (1959); Four Color Theorem (1976).","leadsTo":["computation","optimization"],"contributors":["euler","erdos","renyi","tutte","conway"],"prerequisites":[]},{"id":"calculus","name":"Calculus","type":"Pure Math","category":"Analysis","year":1684,"era":{"start":1665,"peak":1687,"end":null},"difficulty":"High School","aka":["Differential and Integral Calculus"],"notableYears":[1684,1687],"notes":"Leibniz’s papers (1684–1686); Newton’s Principia (1687).","leadsTo":["vector-calculus","real-analysis","differential-equations","complex-analysis","calculus-of-variations"],"contributors":["newton","leibniz","euler"],"prerequisites":[{"id":"elementary-geometry","strength":70},{"id":"elementary-algebra","strength":80},{"id":"trigonometry","strength":60}]},{"id":"vector-calculus","name":"Vector Calculus","type":"Pure Math","category":"Analysis","year":1854,"era":{"start":1813,"peak":1861,"end":null},"difficulty":"UGrad","aka":["Multivariable Calculus"],"notableYears":[1813,1854,1861],"notes":"Gauss’s divergence (1813), Stokes’ theorem (1854), Maxwell’s equations (1861–62).","leadsTo":["differential-equations","differential-geometry"],"contributors":["gauss","stokes","green","maxwell"],"prerequisites":[{"id":"calculus","strength":90},{"id":"linear-algebra","strength":70}]},{"id":"calculus-of-variations","name":"Calculus of Variations","type":"Pure Math","category":"Analysis","year":1755,"era":{"start":1755,"peak":1788,"end":null},"difficulty":"PGrad","aka":["Variational Calculus"],"notableYears":[1755,1788],"notes":"Euler (1755) and Lagrange’s Méchanique Analytique (1788).","leadsTo":["optimal-control","pde"],"contributors":["euler","lagrange","hilbert","tonelli"],"prerequisites":[{"id":"calculus","strength":85}]},{"id":"fractional-analysis","name":"Fractional and Non-linear Analysis","type":"Pure Math","category":"Analysis","year":1965,"era":{"start":1695,"peak":1965,"end":null},"difficulty":"PGrad","aka":["Fractional Calculus"],"notableYears":[1695,1965],"notes":"Fractional derivatives first queried by Leibniz (1695); modern theory flourished in mid-20th century.","leadsTo":["dynamical-systems"],"contributors":["liouville","riemann","grunwald","lettnikov"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"functional-analysis","strength":85}]},{"id":"complex-analysis","name":"Complex Analysis","type":"Pure Math","category":"Analysis","year":1851,"era":{"start":1814,"peak":1851,"end":null},"difficulty":"UGrad","aka":["Theory of Holomorphic Functions"],"notableYears":[1814,1825,1851],"notes":"Cauchy integral theorem (1814/1825); Riemann surfaces (1851).","leadsTo":["harmonic-analysis","number-theory"],"contributors":["cauchy","riemann","gauss","weierstrass"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"real-analysis","name":"Real Analysis","type":"Pure Math","category":"Analysis","year":1872,"era":{"start":1821,"peak":1900,"end":null},"difficulty":"UGrad","aka":["Mathematical Analysis"],"notableYears":[1821,1872,1890],"notes":"Cauchy’s Cours d’Analyse (1821); arithmetization with Dedekind/Cantor/Weierstrass (1870s).","leadsTo":["measure-theory","functional-analysis","topology"],"contributors":["cauchy","riemann","weierstrass","cantor","dedekind"],"prerequisites":[{"id":"calculus","strength":95}]},{"id":"measure-theory","name":"Measure Theory","type":"Pure Math","category":"Analysis","year":1902,"era":{"start":1899,"peak":1902,"end":null},"difficulty":"PGrad","aka":["Lebesgue Integration"],"notableYears":[1902,1904,1933],"notes":"Lebesgue’s thesis (1902); extension to probability by Kolmogorov axioms (1933).","leadsTo":["functional-analysis","probability-theory","stochastic-analysis"],"contributors":["lebesgue","borel","caratheodory","kolmogorov"],"prerequisites":[{"id":"real-analysis","strength":95},{"id":"axiomatic-set-theory","strength":70}]},{"id":"functional-analysis","name":"Functional Analysis","type":"Pure Math","category":"Analysis","year":1920,"era":{"start":1907,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Banach & Hilbert Space Theory","Operator Theory"],"notableYears":[1907,1932,1940],"notes":"Fréchet metric spaces (1907), Banach spaces (1932), von Neumann operator algebras.","leadsTo":["pde","stochastic-analysis","quantum-mechanics","harmonic-analysis"],"contributors":["hilbert","banach","vonneumann","riesz","stoner"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"linear-algebra","strength":85},{"id":"measure-theory","strength":80}]},{"id":"harmonic-analysis","name":"Harmonic Analysis","type":"Pure Math","category":"Analysis","year":1807,"era":{"start":1807,"peak":1915,"end":null},"difficulty":"PGrad","aka":["Fourier Analysis"],"notableYears":[1807,1822,1915],"notes":"Fourier series (1807–1822); Plancherel theorem (1910s); modern non-commutative directions.","leadsTo":["signal-processing","pde"],"contributors":["fourier","riemann","plancherel","hardy","littlewood"],"prerequisites":[{"id":"calculus","strength":85},{"id":"complex-analysis","strength":75}]},{"id":"topology","name":"Topology","type":"Pure Math","category":"Geometry and Topology","year":1895,"era":{"start":1895,"peak":1930,"end":null},"difficulty":"UGrad","aka":["General Topology","Point-Set Topology"],"notableYears":[1895,1914,1930],"notes":"Poincaré (1895); Hausdorff spaces (1914); foundations of modern topology in early 20th c.","leadsTo":["algebraic-topology","differential-topology","functional-analysis"],"contributors":["poincare","hausdorff","cantor","hilbert"],"prerequisites":[{"id":"real-analysis","strength":75},{"id":"axiomatic-set-theory","strength":70}]},{"id":"algebraic-topology","name":"Algebraic Topology","type":"Pure Math","category":"Geometry and Topology","year":1910,"era":{"start":1895,"peak":1950,"end":null},"difficulty":"Research","aka":["Homology and Homotopy Theory"],"notableYears":[1895,1935,1950],"notes":"From Poincaré’s analysis situs to Eilenberg–Steenrod axioms; Postnikov, Serre, and beyond.","leadsTo":["differential-topology","category-theory"],"contributors":["poincare","eilenberg","steenrod","hurewicz","serre"],"prerequisites":[{"id":"topology","strength":90},{"id":"abstract-algebra","strength":85}]},{"id":"differential-geometry","name":"Differential Geometry","type":"Pure Math","category":"Geometry and Topology","year":1827,"era":{"start":1827,"peak":1854,"end":null},"difficulty":"PGrad","aka":["Riemannian Geometry"],"notableYears":[1827,1854],"notes":"Gauss’s Theorema Egregium (1827), Riemann’s habilitation (1854).","leadsTo":["differential-topology","general-relativity","symplectic-geometry"],"contributors":["gauss","riemann","poincare","cartan"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"linear-algebra","strength":75}]},{"id":"differential-topology","name":"Differential Topology","type":"Pure Math","category":"Geometry and Topology","year":1950,"era":{"start":1950,"peak":1961,"end":null},"difficulty":"Research","aka":["Smooth Manifolds & Cobordism"],"notableYears":[1950,1961],"notes":"Thom’s cobordism (1950s), Milnor’s discoveries (exotic 7-spheres, 1956).","leadsTo":[],"contributors":["thom","milnor","smale"],"prerequisites":[{"id":"topology","strength":85},{"id":"differential-geometry","strength":85}]},{"id":"probability-theory","name":"Probability and Statistical Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1933,"era":{"start":1654,"peak":1933,"end":null},"difficulty":"UGrad","aka":["Measure-Theoretic Probability"],"notableYears":[1654,1703,1933],"notes":"Pascal–Fermat correspondence (1654); Bernoulli (1703); Kolmogorov’s axioms (1933).","leadsTo":["statistical-inference","stochastic-processes","information-theory"],"contributors":["pascal","fermat","bernoulli","laplace","kolmogorov"],"prerequisites":[{"id":"calculus","strength":70}]},{"id":"statistical-inference","name":"Statistical Inference","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1935,"era":{"start":1805,"peak":1935,"end":null},"difficulty":"UGrad","aka":["Mathematical Statistics"],"notableYears":[1805,1809,1922,1933],"notes":"Least squares (Legendre 1805, Gauss 1809); Fisher (1922); Neyman–Pearson (1933).","leadsTo":["bayesian-inference","regression-analysis","machine-learning"],"contributors":["legendre","gauss","fisher","neyman","pearson"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"linear-algebra","strength":65}]},{"id":"stochastic-processes","name":"Stochastic Processes","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1906,"era":{"start":1906,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Markov Processes","Wiener Processes"],"notableYears":[1906,1923,1931],"notes":"Markov chains (1906), Wiener process (1923), Kolmogorov forward/backward equations (1931).","leadsTo":["stochastic-analysis","time-series"],"contributors":["markov","wiener","kolmogorov","doob"],"prerequisites":[{"id":"probability-theory","strength":90},{"id":"real-analysis","strength":75}]},{"id":"bayesian-inference","name":"Bayesian Inference and Computation","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1763,"era":{"start":1763,"peak":1990,"end":null},"difficulty":"UGrad","aka":["Bayesian Statistics"],"notableYears":[1763,1950,1990],"notes":"Bayes (1763) and Laplace; computational renaissance with MCMC/VI in 1990s.","leadsTo":["machine-learning"],"contributors":["bayes","laplace","jeffreys","jaynes","metropolis","hastings"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"stochastic-analysis","name":"Stochastic Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1944,"era":{"start":1944,"peak":1970,"end":null},"difficulty":"PGrad","aka":["Itô Calculus"],"notableYears":[1944,1951,1979],"notes":"Itô integral (1944), martingale theory (Doob), Malliavin calculus (1970s).","leadsTo":[],"contributors":["ito","doob","malliavin"],"prerequisites":[{"id":"stochastic-processes","strength":90},{"id":"measure-theory","strength":85},{"id":"functional-analysis","strength":80}]},{"id":"regression-analysis","name":"Regression Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1805,"era":{"start":1805,"peak":1900,"end":null},"difficulty":"UGrad","aka":["Least Squares","Linear Models"],"notableYears":[1805,1809,1877],"notes":"Legendre (1805), Gauss (1809); Pearson correlation (1890s).","leadsTo":["machine-learning"],"contributors":["legendre","gauss","pearson","fisher"],"prerequisites":[{"id":"statistical-inference","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"time-series","name":"Time Series Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1927,"era":{"start":1927,"peak":1970,"end":null},"difficulty":"UGrad","aka":["ARMA/ARIMA Models"],"notableYears":[1927,1938,1970],"notes":"Yule (1927), Wold decomposition (1938), Box–Jenkins (1970).","leadsTo":["machine-learning"],"contributors":["yule","wold","box","jenkins"],"prerequisites":[{"id":"stochastic-processes","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"information-theory","name":"Information Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1948,"era":{"start":1948,"peak":1960,"end":null},"difficulty":"PGrad","aka":["Shannon Theory"],"notableYears":[1948,1959],"notes":"Shannon (1948) founded the field; coding theorems and rate–distortion theory followed.","leadsTo":["machine-learning"],"contributors":["shannon","cover","gallager","jaynes"],"prerequisites":[{"id":"probability-theory","strength":85}]},{"id":"machine-learning","name":"Machine Learning Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1957,"era":{"start":1957,"peak":2012,"end":null},"difficulty":"PGrad","aka":["Statistical Learning Theory"],"notableYears":[1957,1984,2001,2012],"notes":"Perceptron (1957), PAC learning (1984), kernel methods (1990s–2000s), deep learning surge (2012).","leadsTo":[],"contributors":["rosenblatt","vapnik","valiant","lecun","hinton","bengio"],"prerequisites":[{"id":"linear-algebra","strength":80},{"id":"statistical-inference","strength":85},{"id":"optimization","strength":75}]},{"id":"optimization","name":"Convex and Non-convex Optimisation","type":"Applied Math","category":"Optimisation and Control","year":1947,"era":{"start":1947,"peak":2004,"end":null},"difficulty":"UGrad","aka":["Mathematical Programming"],"notableYears":[1947,1951,1994,2004],"notes":"Linear programming (Dantzig 1947), convex analysis (Fenchel 1951), interior-point (Karmarkar 1984), convex optimisation textbooks (2004).","leadsTo":["machine-learning","optimal-control"],"contributors":["dantzig","fenchel","rockafellar","nesterov","boyd"],"prerequisites":[{"id":"calculus","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"optimal-control","name":"Optimal Control Theory","type":"Applied Math","category":"Optimisation and Control","year":1956,"era":{"start":1956,"peak":1962,"end":null},"difficulty":"PGrad","aka":["Pontryagin Maximum Principle","Dynamic Programming"],"notableYears":[1956,1962],"notes":"Bellman’s dynamic programming (1950s); Pontryagin maximum principle (1956–62).","leadsTo":[],"contributors":["bellman","pontryagin"],"prerequisites":[{"id":"calculus-of-variations","strength":85},{"id":"differential-equations","strength":80},{"id":"optimization","strength":75}]},{"id":"game-theory","name":"Game Theory","type":"Applied Math","category":"Optimisation and Control","year":1944,"era":{"start":1928,"peak":1951,"end":null},"difficulty":"UGrad","aka":["Non-cooperative Games"],"notableYears":[1928,1944,1951],"notes":"von Neumann minimax (1928), Theory of Games and Economic Behavior (1944), Nash equilibrium (1950–51).","leadsTo":[],"contributors":["vonneumann","morgenstern","nash"],"prerequisites":[{"id":"probability-theory","strength":70},{"id":"optimization","strength":70}]},{"id":"numerical-analysis","name":"Numerical Analysis","type":"Applied Math","category":"Computation","year":1940,"era":{"start":1940,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Scientific Computing"],"notableYears":[1947,1965],"notes":"Field matured with electronic computing; focus on stability, convergence, error.","leadsTo":["computational-linear-algebra"],"contributors":["vonneumann","turing","householder","golub"],"prerequisites":[{"id":"calculus","strength":80},{"id":"linear-algebra","strength":75}]},{"id":"computational-linear-algebra","name":"Computational Linear Algebra","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1950,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Numerical Linear Algebra"],"notableYears":[1959,1965,1977],"notes":"QR algorithm (1959), Householder methods (1960s), Golub–Van Loan textbook (1977).","leadsTo":["machine-learning"],"contributors":["golub","vanloan","householder","givens"],"prerequisites":[{"id":"linear-algebra","strength":90},{"id":"numerical-analysis","strength":75}]},{"id":"computation","name":"Theory of Computation","type":"Applied Math","category":"Computation","year":1936,"era":{"start":1936,"peak":1971,"end":null},"difficulty":"UGrad","aka":["Automata, Complexity, Computability"],"notableYears":[1936,1943,1971],"notes":"Church–Turing (1936), Kleene (1943), Cook–Levin theorem (1971).","leadsTo":[],"contributors":["turing","church","kleene","cook","levin","knuth"],"prerequisites":[{"id":"logic","strength":85},{"id":"graph-theory","strength":70}]},{"id":"differential-equations","name":"Differential Equations","type":"Applied Math","category":"Physics","year":1687,"era":{"start":1671,"peak":1750,"end":null},"difficulty":"UGrad","aka":["ODEs"],"notableYears":[1687,1736,1760],"notes":"From Newton’s laws to Euler’s methods; existence/uniqueness developed in 19th c.","leadsTo":["pde","dynamical-systems"],"contributors":["newton","euler","leibniz","lagrange","cauchy"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"pde","name":"Partial Differential Equations","type":"Applied Math","category":"Physics","year":1750,"era":{"start":1750,"peak":1910,"end":null},"difficulty":"PGrad","aka":["Elliptic/Parabolic/Hyperbolic PDEs"],"notableYears":[1750,1822,1910],"notes":"Vibrating string and heat equation (d’Alembert, Fourier), Hilbert’s problems shaped 20th c PDE.","leadsTo":["dynamical-systems","quantum-mechanics","general-relativity"],"contributors":["euler","fourier","lagrange","hilbert","sobolev"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"differential-equations","strength":85}]},{"id":"dynamical-systems","name":"Dynamical Systems and Chaos","type":"Applied Math","category":"Physics","year":1890,"era":{"start":1890,"peak":1963,"end":null},"difficulty":"PGrad","aka":["Qualitative Theory of Differential Equations","Chaos"],"notableYears":[1890,1963],"notes":"Poincaré (1890) qualitative theory; Lorenz (1963) chaos.","leadsTo":[],"contributors":["poincare","birkhoff","smale","lorenz"],"prerequisites":[{"id":"differential-equations","strength":90},{"id":"topology","strength":70}]},{"id":"quantum-mechanics","name":"Quantum Mechanics","type":"Applied Math","category":"Physics","year":1926,"era":{"start":1925,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Wave & Matrix Mechanics"],"notableYears":[1925,1926,1932],"notes":"Heisenberg (1925) matrix mechanics; Schrödinger (1926) wave mechanics; von Neumann mathematical foundations (1932).","leadsTo":[],"contributors":["heisenberg","schrodinger","dirac","vonneumann","feynman"],"prerequisites":[{"id":"functional-analysis","strength":85},{"id":"pde","strength":80}]},{"id":"general-relativity","name":"General Relativity","type":"Applied Math","category":"Physics","year":1915,"era":{"start":1915,"peak":1916,"end":null},"difficulty":"Research","aka":["GR"],"notableYears":[1915,1916],"notes":"Einstein’s field equations (1915–16); differential geometry as the mathematical core.","leadsTo":[],"contributors":["einstein","riemann","levicivita","weyl","hawking","penrose"],"prerequisites":[{"id":"differential-geometry","strength":95},{"id":"pde","strength":80}]},{"id":"signal-processing","name":"Signal Processing","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1948,"peak":1975,"end":null},"difficulty":"UGrad","aka":["DSP","Fourier & Wavelet Methods"],"notableYears":[1948,1965,1987],"notes":"Shannon lays groundwork (1948); digital signal processing (1960s–70s); wavelets (Daubechies 1987–92).","leadsTo":["machine-learning"],"contributors":["fourier","shannon","oppenheim","daubechies"],"prerequisites":[{"id":"harmonic-analysis","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"trigonometry","name":"Trigonometry","type":"Pure Math","category":"Analysis","year":-150,"era":{"start":-150,"peak":1748,"end":null},"difficulty":"High School","aka":["Circular Functions"],"notableYears":[-150,1748],"notes":"Hipparchus & Ptolemy tables (classical); Euler’s Introductio in analysin infinitorum (1748) modernises trig via analytic functions.","leadsTo":["calculus","harmonic-analysis","complex-analysis"],"contributors":["hipparchus","ptolemy","al-biruni","bhaskara-ii","euler"],"prerequisites":[]}]`),gi=JSON.parse('[{"id":"al-biruni","name":"Al-Biruni","born":973,"died":1048,"gender":1},{"id":"archimedes","name":"Archimedes","born":-287,"died":-212,"gender":1},{"id":"aristotle","name":"Aristotle","born":-384,"died":-322,"image":"/images/people/aristotle.jpg","gender":1},{"id":"artin","name":"Emil Artin","born":1898,"died":1962,"gender":1},{"id":"banach","name":"Stefan Banach","born":1892,"died":1945,"gender":1},{"id":"bayes","name":"Thomas Bayes","born":1701,"died":1761,"gender":1},{"id":"bellman","name":"Richard Bellman","born":1920,"died":1984,"gender":1},{"id":"bengio","name":"Yoshua Bengio","born":1964,"died":null,"gender":1},{"id":"bernoulli","name":"Jacob Bernoulli","born":1654,"died":1705,"gender":1},{"id":"bhaskara-ii","name":"Bhaskara II","born":1114,"died":1185,"gender":1},{"id":"birkhoff","name":"George Birkhoff","born":1884,"died":1944,"gender":1},{"id":"borel","name":"Émile Borel","born":1871,"died":1956,"gender":1},{"id":"box","name":"George Box","born":1919,"died":2013,"gender":1},{"id":"boyd","name":"Stephen Boyd","born":1958,"died":null,"gender":1},{"id":"cantor","name":"Georg Cantor","born":1845,"died":1918,"image":"/images/people/cantor.jpg","gender":1},{"id":"caratheodory","name":"Constantin Carathéodory","born":1873,"died":1950,"gender":1},{"id":"cartan","name":"Élie Cartan","born":1869,"died":1951,"gender":1},{"id":"cauchy","name":"Augustin-Louis Cauchy","born":1789,"died":1857,"gender":1},{"id":"cayley","name":"Arthur Cayley","born":1821,"died":1895,"gender":1},{"id":"church","name":"Alonzo Church","born":1903,"died":1995,"gender":1},{"id":"conway","name":"John Conway","born":1937,"died":2020,"image":"/images/people/conway.jpg","gender":1},{"id":"cook","name":"Stephen Cook","born":1939,"died":null,"gender":1},{"id":"cover","name":"Thomas Cover","born":1938,"died":2012,"gender":1},{"id":"dantzig","name":"George Dantzig","born":1914,"died":2005,"gender":1},{"id":"daubechies","name":"Ingrid Daubechies","born":1954,"died":null,"gender":0},{"id":"dedekind","name":"Richard Dedekind","born":1831,"died":1916,"gender":1},{"id":"descartes","name":"Descartes","born":1596,"died":1650,"image":"/images/people/descartes.jpg","gender":1},{"id":"dirac","name":"Paul Dirac","born":1902,"died":1984,"gender":1},{"id":"dirichlet","name":"Peter Dirichlet","born":1805,"died":1859,"gender":1},{"id":"doob","name":"Joseph Doob","born":1910,"died":2004,"gender":1},{"id":"eilenberg","name":"Samuel Eilenberg","born":1913,"died":1998,"gender":1},{"id":"einstein","name":"Einstein","born":1879,"died":1955,"image":"/images/people/einstein.jpg","gender":1},{"id":"erdos","name":"Paul Erdős","born":1913,"died":1996,"gender":1},{"id":"euclid","name":"Euclid","born":-325,"died":-265,"image":"/images/people/euclid.jpg","gender":1},{"id":"euler","name":"Leonhard Euler","born":1707,"died":1783,"image":"/images/people/euler.jpg","gender":1},{"id":"fenchel","name":"Werner Fenchel","born":1905,"died":1988,"gender":1},{"id":"fermat","name":"Pierre de Fermat","born":1607,"died":1665,"image":"/images/people/fermat.jpg","gender":1},{"id":"feynman","name":"Richard Feynman","born":1918,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"fisher","name":"Ronald Fisher","born":1890,"died":1962,"gender":1},{"id":"fourier","name":"Joseph Fourier","born":1768,"died":1830,"image":"/images/people/fourier.jpg","gender":1},{"id":"fraenkel","name":"Abraham Fraenkel","born":1891,"died":1965,"gender":1},{"id":"frege","name":"Gottlob Frege","born":1848,"died":1925,"gender":1},{"id":"frobenius","name":"Ferdinand Frobenius","born":1849,"died":1917,"gender":1},{"id":"gallager","name":"Robert Gallager","born":1931,"died":null,"gender":1},{"id":"galois","name":"Évariste Galois","born":1811,"died":1832,"gender":1},{"id":"gauss","name":"Carl Friedrich Gauss","born":1777,"died":1855,"image":"/images/people/gauss.jpg","gender":1},{"id":"givens","name":"Wallace Givens","born":1910,"died":1993,"gender":1},{"id":"godel","name":"Kurt Gödel","born":1906,"died":1978,"gender":1},{"id":"golub","name":"Gene Golub","born":1932,"died":2007,"gender":1},{"id":"green","name":"George Green","born":1793,"died":1841,"gender":1},{"id":"grothendieck","name":"Alexander Grothendieck","born":1928,"died":2014,"gender":1},{"id":"grunwald","name":"Wolfgang Grünwald","born":1909,"died":1941,"gender":1},{"id":"hardy","name":"G.H. Hardy","born":1877,"died":1947,"gender":1},{"id":"hastings","name":"W.K. Hastings","born":1930,"died":2016,"gender":1},{"id":"hausdorff","name":"Felix Hausdorff","born":1868,"died":1942,"gender":1},{"id":"hawking","name":"Stephen Hawking","born":1942,"died":2018,"image":"/images/people/hawking.jpg","gender":1},{"id":"heisenberg","name":"Werner Heisenberg","born":1901,"died":1976,"gender":1},{"id":"hilbert","name":"David Hilbert","born":1862,"died":1943,"image":"/images/people/hilbert.jpg","gender":1},{"id":"hinton","name":"Geoffrey Hinton","born":1947,"died":null,"gender":1},{"id":"hipparchus","name":"Hipparchus","born":-190,"died":-120,"gender":1},{"id":"householder","name":"Alston Householder","born":1904,"died":1993,"gender":1},{"id":"hurewicz","name":"Witold Hurewicz","born":1904,"died":1956,"gender":1},{"id":"ito","name":"Kiyosi Itô","born":1915,"died":2008,"gender":1},{"id":"jaynes","name":"Edwin Jaynes","born":1922,"died":1998,"gender":1},{"id":"jeffreys","name":"Harold Jeffreys","born":1891,"died":1989,"gender":1},{"id":"jenkins","name":"Gwilym Jenkins","born":1933,"died":1982,"gender":1},{"id":"jordan","name":"Camille Jordan","born":1838,"died":1922,"gender":1},{"id":"kleene","name":"Stephen Kleene","born":1909,"died":1994,"gender":1},{"id":"knuth","name":"Donald Knuth","born":1938,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"kolmogorov","name":"Andrey Kolmogorov","born":1903,"died":1987,"image":"/images/people/kolmogorov.jpg","gender":1},{"id":"kronecker","name":"Leopold Kronecker","born":1823,"died":1891,"gender":1},{"id":"lagrange","name":"Joseph-Louis Lagrange","born":1736,"died":1813,"gender":1},{"id":"laplace","name":"Pierre-Simon Laplace","born":1749,"died":1827,"gender":1},{"id":"lawvere","name":"William Lawvere","born":1937,"died":null,"gender":1},{"id":"lebesgue","name":"Henri Lebesgue","born":1875,"died":1941,"gender":1},{"id":"lecun","name":"Yann LeCun","born":1960,"died":null,"gender":1},{"id":"legendre","name":"Adrien-Marie Legendre","born":1752,"died":1833,"gender":1},{"id":"leibniz","name":"Gottfried Leibniz","born":1646,"died":1716,"gender":1},{"id":"lettnikov","name":"Alexey Letnikov","born":1837,"died":1888,"gender":1},{"id":"levicivita","name":"Tullio Levi-Civita","born":1873,"died":1941,"gender":1},{"id":"levin","name":"Leonid Levin","born":1948,"died":null,"gender":1},{"id":"lie","name":"Sophus Lie","born":1842,"died":1899,"gender":1},{"id":"liouville","name":"Joseph Liouville","born":1809,"died":1882,"gender":1},{"id":"littlewood","name":"John Littlewood","born":1885,"died":1977,"gender":1},{"id":"lorenz","name":"Edward Lorenz","born":1917,"died":2008,"gender":1},{"id":"maclane","name":"Saunders Mac Lane","born":1909,"died":2005,"gender":1},{"id":"malliavin","name":"Paul Malliavin","born":1925,"died":2010,"gender":1},{"id":"markov","name":"Andrey Markov","born":1856,"died":1922,"gender":1},{"id":"maxwell","name":"James Clerk Maxwell","born":1831,"died":1879,"gender":1},{"id":"metropolis","name":"Nicholas Metropolis","born":1915,"died":1999,"gender":1},{"id":"milnor","name":"John Milnor","born":1931,"died":null,"gender":1},{"id":"morgenstern","name":"Oskar Morgenstern","born":1902,"died":1977,"gender":1},{"id":"nash","name":"John Nash","born":1928,"died":2015,"gender":1},{"id":"nesterov","name":"Yurii Nesterov","born":1956,"died":null,"gender":1},{"id":"newton","name":"Newton","born":1643,"died":1727,"image":"/images/people/newton.jpg","gender":1},{"id":"neyman","name":"Jerzy Neyman","born":1894,"died":1981,"gender":1},{"id":"noether","name":"Emmy Noether","born":1882,"died":1935,"gender":0},{"id":"oppenheim","name":"Alan Oppenheim","born":1937,"died":null,"gender":1},{"id":"pascal","name":"Blaise Pascal","born":1623,"died":1662,"gender":1},{"id":"peano","name":"Giuseppe Peano","born":1858,"died":1932,"gender":1},{"id":"pearson","name":"Karl Pearson","born":1857,"died":1936,"gender":1},{"id":"penrose","name":"Roger Penrose","born":1931,"died":null,"image":"/images/people/penrose.jpg","gender":1},{"id":"plancherel","name":"Michel Plancherel","born":1885,"died":1967,"gender":1},{"id":"poincare","name":"Henri Poincaré","born":1854,"died":1912,"image":"/images/people/poincare.jpg","gender":1},{"id":"pontryagin","name":"Lev Pontryagin","born":1908,"died":1988,"gender":1},{"id":"ptolemy","name":"Ptolemy","born":100,"died":170,"gender":1},{"id":"pythagoras","name":"Pythagoras","born":-570,"died":-495,"gender":1},{"id":"ramanujan","name":"Srinivasa Ramanujan","born":1887,"died":1920,"image":"/images/people/ramanujan.jpg","gender":1},{"id":"renyi","name":"Alfréd Rényi","born":1921,"died":1970,"gender":1},{"id":"riemann","name":"Bernhard Riemann","born":1826,"died":1866,"gender":1},{"id":"riesz","name":"Frigyes Riesz","born":1880,"died":1956,"gender":1},{"id":"rockafellar","name":"R. Tyrrell Rockafellar","born":1935,"died":null,"gender":1},{"id":"rosenblatt","name":"Frank Rosenblatt","born":1928,"died":1971,"gender":1},{"id":"schrodinger","name":"Erwin Schrödinger","born":1887,"died":1961,"image":"/images/people/schrodinger.jpg","gender":1},{"id":"schur","name":"Issai Schur","born":1875,"died":1941,"gender":1},{"id":"serre","name":"Jean-Pierre Serre","born":1926,"died":null,"gender":1},{"id":"shannon","name":"Claude Shannon","born":1916,"died":2001,"gender":1},{"id":"skolem","name":"Thoralf Skolem","born":1887,"died":1963,"gender":1},{"id":"smale","name":"Stephen Smale","born":1930,"died":null,"gender":1},{"id":"sobolev","name":"Sergei Sobolev","born":1908,"died":1989,"gender":1},{"id":"steenrod","name":"Norman Steenrod","born":1910,"died":1971,"gender":1},{"id":"stokes","name":"George Stokes","born":1819,"died":1903,"gender":1},{"id":"stoner","name":"Edmund Stoner","born":1899,"died":1968,"gender":1},{"id":"sylvester","name":"James Sylvester","born":1814,"died":1897,"gender":1},{"id":"tarski","name":"Alfred Tarski","born":1901,"died":1983,"image":"/images/people/tarski.jpg","gender":1},{"id":"thom","name":"René Thom","born":1923,"died":2002,"gender":1},{"id":"tonelli","name":"Leonida Tonelli","born":1885,"died":1946,"gender":1},{"id":"turing","name":"Alan Turing","born":1912,"died":1954,"image":"/images/people/turing.jpg","gender":1},{"id":"tutte","name":"William Tutte","born":1917,"died":2002,"gender":1},{"id":"valiant","name":"Leslie Valiant","born":1949,"died":null,"gender":1},{"id":"vanloan","name":"Charles Van Loan","born":1946,"died":null,"gender":1},{"id":"vapnik","name":"Vladimir Vapnik","born":1936,"died":null,"gender":1},{"id":"vonneumann","name":"John von Neumann","born":1903,"died":1957,"gender":1},{"id":"weierstrass","name":"Karl Weierstrass","born":1815,"died":1897,"gender":1},{"id":"weilang","name":"Hermann Weyl","born":1885,"died":1955,"gender":1},{"id":"weyl","name":"Hermann Weyl","born":1885,"died":1955,"gender":1},{"id":"wiener","name":"Norbert Wiener","born":1894,"died":1964,"gender":1},{"id":"wold","name":"Herman Wold","born":1908,"died":1992,"gender":1},{"id":"yule","name":"George Udny Yule","born":1871,"died":1951,"gender":1},{"id":"zermelo","name":"Ernst Zermelo","born":1871,"died":1953,"gender":1}]');var Vg=it('<label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="filter-color-dot svelte-1uha8ag"></span> </label>'),Wg=it('<div class="filters-panel svelte-1uha8ag"><div class="filters-panel-header svelte-1uha8ag"><h4 class="svelte-1uha8ag">Filters</h4> <button class="clear-filters-btn svelte-1uha8ag">Clear All</button></div> <div class="filter-section svelte-1uha8ag"><div class="filter-section-title svelte-1uha8ag">Difficulty</div> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="filter-color-dot svelte-1uha8ag" style="background: #22c55e"></span> </label> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="filter-color-dot svelte-1uha8ag" style="background: #3b82f6"></span> </label> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="filter-color-dot svelte-1uha8ag" style="background: #f59e0b"></span> </label> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="filter-color-dot svelte-1uha8ag" style="background: #ef4444"></span> </label></div> <div class="filter-section svelte-1uha8ag"><div class="filter-section-title svelte-1uha8ag">Type</div> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> </label> <label class="filter-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> </label></div> <div class="filter-section svelte-1uha8ag"><div class="filter-section-title svelte-1uha8ag">Category</div> <!></div></div>'),Xg=it('<span class="difficulty-badge svelte-1uha8ag"> </span>'),qg=it('<div class="list-card-aka svelte-1uha8ag"><strong class="svelte-1uha8ag">Also known as:</strong> </div>'),Yg=it('<div class="list-card-notable svelte-1uha8ag"><strong class="svelte-1uha8ag">Notable Years:</strong> </div>'),jg=it('<span class="more svelte-1uha8ag"> </span>'),Kg=it('<div class="list-card-contributors svelte-1uha8ag"><strong class="svelte-1uha8ag">Contributors:</strong> <!></div>'),Zg=it('<p class="list-card-notes svelte-1uha8ag"> </p>'),$g=it('<button class="list-card svelte-1uha8ag"><div class="list-card-header svelte-1uha8ag"><h3 class="svelte-1uha8ag"> </h3> <div class="header-right svelte-1uha8ag"><!> <span class="year svelte-1uha8ag"> </span></div></div> <!> <!> <div class="list-card-meta svelte-1uha8ag"><span class="badge svelte-1uha8ag"> </span> <span class="type svelte-1uha8ag"> </span></div> <!> <!> <div class="list-card-footer svelte-1uha8ag">Click to view in 3D →</div></button>'),Jg=it('<div class="list-view svelte-1uha8ag"><div class="list-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mathematical Topics</h1> <div class="sort-controls svelte-1uha8ag"><div class="control-group svelte-1uha8ag"><label for="sort-select" class="svelte-1uha8ag">Sort by:</label> <select id="sort-select" class="svelte-1uha8ag"><option>Year (Chronological)</option><option>Name (A-Z)</option><option>Category</option><option>Type (Pure/Applied)</option><option>Difficulty</option></select></div> <div class="control-group svelte-1uha8ag"><button class="filters-button svelte-1uha8ag"> <span class="arrow svelte-1uha8ag"> </span></button> <!></div></div></div> <div class="list-cards svelte-1uha8ag"></div></div>'),Qg=it('<button class="back-button svelte-1uha8ag" aria-label="Go to previous card"> </button>'),e_=it('<button class="tutorial-button svelte-1uha8ag" aria-label="Show tutorial" title="Show tutorial">?</button>'),t_=it('<button class="reset-button svelte-1uha8ag" aria-label="Reset all arrows" title="Reset all arrows">↺</button>'),n_=it('<label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag">●</span> </label>'),i_=it('<div class="difficulty-menu svelte-1uha8ag"><button class="difficulty-option clear-option svelte-1uha8ag">✓ Clear All Filters</button> <div class="difficulty-separator svelte-1uha8ag"></div> <div class="filter-section-title svelte-1uha8ag">Difficulty</div> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #22c55e">●</span> </label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #3b82f6">●</span> </label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #f59e0b">●</span> </label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #ef4444">●</span> </label> <div class="difficulty-separator svelte-1uha8ag"></div> <div class="filter-section-title svelte-1uha8ag">Type</div> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> </label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> </label> <div class="difficulty-separator svelte-1uha8ag"></div> <div class="filter-section-title svelte-1uha8ag">Category</div> <!></div>'),r_=it('<div class="difficulty-filter svelte-1uha8ag"><button class="difficulty-toggle svelte-1uha8ag" aria-label="Filters"> <span class="arrow svelte-1uha8ag"> </span></button> <!></div>'),a_=it('<button class="search-button svelte-1uha8ag" aria-label="Find path between topics" title="Pathfinding">🗺️</button>'),s_=it('<button class="quick-search-button svelte-1uha8ag" aria-label="Quick search" title="Quick search topics/contributors">🔍</button>'),o_=it("<option> </option>"),l_=it("<option> </option>"),c_=it('<div class="quick-search-panel svelte-1uha8ag"><button class="close-search-button svelte-1uha8ag">✕</button> <h3 class="svelte-1uha8ag">Quick Search</h3> <div class="search-section svelte-1uha8ag"><label for="topic-search" class="svelte-1uha8ag">Search Topics:</label> <select id="topic-search" class="svelte-1uha8ag"><option>Select a topic...</option><!></select></div> <div class="search-section svelte-1uha8ag"><label for="contributor-search" class="svelte-1uha8ag">Search Contributors:</label> <select id="contributor-search" class="svelte-1uha8ag"><option>Select a contributor...</option><!></select></div></div>'),h_=it("<option> </option>"),u_=it("<option> </option>"),d_=it('<div class="error svelte-1uha8ag"> </div>'),f_=it('<li class="svelte-1uha8ag"> </li>'),p_=it('<div class="path-result svelte-1uha8ag"><h4 class="svelte-1uha8ag"> </h4> <ol class="svelte-1uha8ag"></ol></div>'),m_=it('<div class="search-panel svelte-1uha8ag"><button class="close-search-button svelte-1uha8ag">✕</button> <h3 class="svelte-1uha8ag">Find Path Between Topics</h3> <select class="svelte-1uha8ag"><option>Select starting topic...</option><!></select> <select class="svelte-1uha8ag"><option>Select destination topic...</option><!></select> <button class="find-button svelte-1uha8ag">Find Path</button> <!></div>'),g_=it('<button class="overlay-button svelte-1uha8ag"> </button>'),__=it('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">👥 Contributors</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),v_=it('<button class="overlay-button leads-button svelte-1uha8ag"> </button>'),x_=it('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">➜ Leads To</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),y_=it('<button class="overlay-button prereq-button svelte-1uha8ag"> <span class="strength-badge svelte-1uha8ag"> </span></button>'),M_=it('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">📚 Prerequisites</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),S_=it('<div><button class="overlay-close-button svelte-1uha8ag">✕</button> <button class="overlay-switch-button svelte-1uha8ag" title="Switch side">⇄</button> <h2 class="svelte-1uha8ag"> </h2> <!> <!> <!></div>'),b_=it('<img class="svelte-1uha8ag"/>'),E_=it('<div class="placeholder-img svelte-1uha8ag"> </div>'),T_=it("<br/> ",1),A_=it('<p class="dates svelte-1uha8ag"><!> <!></p>'),w_=it('<div class="person-detail-card svelte-1uha8ag"><button class="close-person svelte-1uha8ag">✕</button> <div class="person-detail-content svelte-1uha8ag"><!> <h3 class="svelte-1uha8ag"> </h3> <!></div></div>'),R_=it('<div class="tutorial-overlay svelte-1uha8ag"><div class="tutorial-popup svelte-1uha8ag"><button class="close-tutorial svelte-1uha8ag">✕</button> <h2 class="svelte-1uha8ag">Welcome to Math Map!</h2> <div class="tutorial-content svelte-1uha8ag"><div class="tutorial-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">🎮 Navigation</h3> <ul class="svelte-1uha8ag"><li class="svelte-1uha8ag"><strong>Zoom:</strong> Scroll wheel</li> <li class="svelte-1uha8ag"><strong>Rotate:</strong> Left-click + drag</li> <li class="svelte-1uha8ag"><strong>Pan:</strong> Shift + left-click + drag or right-click + drag</li></ul></div> <div class="tutorial-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">➡️ Arrow Interactions</h3> <p class="svelte-1uha8ag">Click arrows to cycle through 4 stages:</p> <ol class="svelte-1uha8ag"><li class="svelte-1uha8ag"><strong>First click:</strong> Highlight arrow (white)</li> <li class="svelte-1uha8ag"><strong>Second click:</strong> Navigate to destination topic</li> <li class="svelte-1uha8ag"><strong>Third click:</strong> Navigate to source topic</li> <li class="svelte-1uha8ag"><strong>Fourth click:</strong> Reset arrow (back to default)</li></ol> <p class="note svelte-1uha8ag">Your highlighted arrows are saved automatically!</p></div> <div class="tutorial-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">🔍 Search & Features</h3> <ul class="svelte-1uha8ag"><li class="svelte-1uha8ag"><strong>Quick Search (🔍):</strong> Find topics and contributors</li> <li class="svelte-1uha8ag"><strong>Pathfinding (🗺️):</strong> Find routes between topics</li> <li class="svelte-1uha8ag"><strong>List View (📋):</strong> Browse all topics</li> <li class="svelte-1uha8ag"><strong>Difficulty Filter:</strong> Filter by education level</li></ul></div></div> <button class="tutorial-close-btn svelte-1uha8ag">Got it!</button></div></div>'),C_=it('<div class="tutorial-overlay svelte-1uha8ag"><div class="confirm-popup svelte-1uha8ag"><h3 class="svelte-1uha8ag">Reset All Arrows?</h3> <p class="svelte-1uha8ag">This will reset all highlighted arrows back to their default state. This action cannot be undone.</p> <div class="confirm-buttons svelte-1uha8ag"><button class="confirm-cancel svelte-1uha8ag">Cancel</button> <button class="confirm-reset svelte-1uha8ag">Reset</button></div></div></div>'),P_=it('<div class="scene-container svelte-1uha8ag"></div> <!>  <!> <!> <!> <button class="view-button svelte-1uha8ag" aria-label="Toggle view mode"> </button> <!> <!> <!> <!> <!>  <!> <!> <!> <!>',1);function O_(i,e){th(e,!1);const t=wt(),n=wt(),r=wt(),a=wt(),s=wt();let o=wt(),l,c,u,f,d=[],g=wt([]),_=wt(null),M=wt([]),p=new Map,h=wt(null),P=wt(!1),R=wt(!1),b=wt(""),z=wt(""),w=wt(null),C=wt("3d"),U=wt("year"),S=wt(new Set),x=wt(new Set),D=wt(new Set),V=wt(!1),H=wt(!1),X=wt("right"),te=wt(!1),Y=wt(!1);const fe=600,K=75,Me=.3,Pe=.1,Ue={Foundations:"#8b5cf6","Algebra and Discrete":"#3b82f6",Analysis:"#10b981","Geometry and Topology":"#f59e0b","Probability, Statistics and Stochastic Processes":"#ef4444","Optimisation and Control":"#ec4899",Computation:"#06b6d4",Physics:"#f97316"},tt={"High School":"#22c55e",UGrad:"#3b82f6",PGrad:"#f59e0b",Research:"#ef4444"};function _t(){const O=[];p.forEach((q,Q)=>{var Fe,ke,Re,m,T,N;const pe=(Re=(ke=(Fe=q.fromCard)==null?void 0:Fe.userData)==null?void 0:ke.topic)==null?void 0:Re.id,Ce=(N=(T=(m=q.toCard)==null?void 0:m.userData)==null?void 0:T.topic)==null?void 0:N.id;pe&&Ce&&O.push({fromId:pe,toId:Ce,clickCount:q.clickCount})}),localStorage.setItem("mathMapArrowStates",JSON.stringify(O))}function J(){try{const O=localStorage.getItem("mathMapArrowStates");if(O)return JSON.parse(O)}catch(O){console.error("Failed to load arrow states:",O)}return[]}function _e(O){O.forEach(q=>{const Q=y(g).find(pe=>{var Ce,Fe,ke,Re,m,T;return((ke=(Fe=(Ce=pe.userData.fromCard)==null?void 0:Ce.userData)==null?void 0:Fe.topic)==null?void 0:ke.id)===q.fromId&&((T=(m=(Re=pe.userData.toCard)==null?void 0:Re.userData)==null?void 0:m.topic)==null?void 0:T.id)===q.toId});Q&&q.clickCount>=1&&(p.set(Q,{clickCount:q.clickCount,fromCard:Q.userData.fromCard,toCard:Q.userData.toCard}),Q.children.forEach(pe=>{pe.material&&(pe.material.color.set(16777215),pe.material.emissive.set(13421772),pe.material.emissiveIntensity=.5,pe.material.opacity=1)}))})}function Oe(){p.forEach((O,q)=>{q.children.forEach(Q=>{Q.material&&(Q.material.color.set(6514417),Q.material.emissive.set(5195493),Q.material.emissiveIntensity=.2,Q.material.opacity=.6)})}),p=new Map,localStorage.setItem("mathMapArrowStates",JSON.stringify([])),Ve(Y,!1)}function Te(){Ve(X,y(X)==="right"?"left":"right")}function je(O,q,Q){const Ce=((O.year+600)/2700-.5)*fe,ke=O.type==="Pure Math"?-1:1,m=Object.keys(Ue).indexOf(O.category),T=q/Q-.5,N=ke*(m*4+8)+T*2.5,L=T*K;return new B(Ce,N,L)}function Qe(O,q){const Ce=new $i;Ce.userData={topic:O,type:"card"};const Fe=Ue[O.category]||"#ffffff",ke=20,Re=document.createElement("canvas"),m=Re.getContext("2d");Re.width=768,Re.height=1024,m.fillStyle=Fe,m.fillRect(0,0,Re.width,Re.height),m.fillStyle="#1a1a2e",m.fillRect(ke,ke,Re.width-ke*2,Re.height-ke*2);let T=60;m.fillStyle="#ffffff",m.font="bold 66px Arial",m.textAlign="center",m.textBaseline="top";const N=O.name.split(" "),L=[];let A=N[0];for(let le=1;le<N.length;le++){const We=N[le];m.measureText(A+" "+We).width<Re.width-100?A+=" "+We:(L.push(A),A=We)}if(L.push(A),L.forEach(le=>{m.fillText(le,Re.width/2,T),T+=75}),O.difficulty){const le=tt[O.difficulty]||"#888888";m.fillStyle=le,m.font="bold 28px Arial",m.textAlign="center",m.fillText(O.difficulty.toUpperCase(),Re.width/2,T),T+=45}T+=10,m.font="42px Arial",m.fillStyle="#aaaaaa";const k=O.year<0?`${Math.abs(O.year)} BC`:`${O.year} AD`;m.fillText(k,Re.width/2,T),T+=65,m.font="36px Arial",m.fillStyle=Fe;const W=O.category.split(" ");let re=[],de=W[0];for(let le=1;le<W.length;le++){const We=W[le];m.measureText(de+" "+We).width<Re.width-100?de+=" "+We:(re.push(de),de=We)}re.push(de),re.forEach(le=>{m.fillText(le,Re.width/2,T),T+=40}),T+=20,m.font="30px Arial",m.fillStyle="#999999",m.fillText(O.type,Re.width/2,T),T+=50,O.contributors&&O.contributors.length>0&&(m.fillStyle="#cccccc",m.font="bold 26px Arial",m.textAlign="center",m.fillText("Contributors",Re.width/2,T),T+=40,m.font="28px Arial",m.fillStyle="#aaaaaa",m.textAlign="left",O.contributors.slice(0,8).forEach(le=>{const We=gi.find(xt=>xt.id===le),Tt=We?We.name:le.charAt(0).toUpperCase()+le.slice(1);m.fillText(`• ${Tt}`,60,T),T+=34}),O.contributors.length>8&&(m.textAlign="center",m.fillStyle="#999",m.fillText(`+${O.contributors.length-8} more`,Re.width/2,T),T+=30),m.textAlign="center",T+=10),O.leadsTo&&O.leadsTo.length>0&&(m.fillStyle="#cccccc",m.font="bold 26px Arial",m.fillText("Leads To",Re.width/2,T),T+=40,m.font="26px Arial",m.fillStyle="#6366f1",m.textAlign="left",O.leadsTo.slice(0,10).forEach(le=>{const We=Ct.find(Tt=>Tt.id===le);if(We){const Tt=`➜ ${We.name}`;m.fillText(Tt,60,T),T+=34}}),O.leadsTo.length>10&&(m.textAlign="center",m.fillStyle="#999",m.fillText(`+${O.leadsTo.length-10} more`,Re.width/2,T)));const ve=new ds(Re),ce=document.createElement("canvas"),Z=ce.getContext("2d");if(ce.width=768,ce.height=1024,Z.fillStyle=Fe,Z.fillRect(0,0,ce.width,ce.height),Z.fillStyle="#1a1a2e",Z.fillRect(ke,ke,ce.width-ke*2,ce.height-ke*2),T=80,Z.fillStyle="#cccccc",Z.font="bold 22px Arial",Z.textAlign="center",Z.fillText("Prerequisites",ce.width/2,T),T+=35,O.prerequisites&&O.prerequisites.length>0?(Z.font="24px Arial",Z.fillStyle="#aaaaaa",Z.textAlign="left",O.prerequisites.forEach(le=>{const We=Ct.find(Tt=>Tt.id===le.id);if(We){const Tt=`• ${We.name} (${le.strength}%)`;Z.fillText(Tt,60,T),T+=32}}),Z.textAlign="center",T+=20):(Z.font="24px Arial",Z.fillStyle="#999999",Z.textAlign="center",Z.fillText("None",ce.width/2,T),T+=40),O.notes){Z.fillStyle="#cccccc",Z.font="bold 22px Arial",Z.fillText("Notes",ce.width/2,T),T+=35,Z.font="24px Arial",Z.fillStyle="#aaaaaa",Z.textAlign="left";const le=O.notes.split(" ");let We="";le.forEach(Tt=>{const xt=We+(We?" ":"")+Tt;Z.measureText(xt).width>ce.width-100&&We?(Z.fillText(We,50,T),T+=32,We=Tt):We=xt}),We&&Z.fillText(We,50,T)}const oe=new ds(ce),He=new Sr({map:ve,roughness:.7,metalness:.3}),ue=new Sr({map:oe,roughness:.7,metalness:.3}),De=new Sr({color:Fe,emissive:Fe,emissiveIntensity:0,roughness:.6,metalness:.4}),xe=[De,De,De,De,He,ue],ee=new cr(5,7,Me),Ge=new dn(ee,xe);return Ge.userData={topic:O,type:"cardMesh"},Ce.add(Ge),Ce.position.copy(q),Ce}function rt(O,q,Q=50){const pe=new B().subVectors(q,O),Ce=pe.length();pe.normalize();const Fe=.05+(Q-50)/50*.1,ke=Fe*4,Re=2.5,m=Re,T=Re-ke*.5,N=Ce-m-T;if(N<=0)return null;const L=new $i,A=O.clone().add(pe.clone().multiplyScalar(m)),k=q.clone().sub(pe.clone().multiplyScalar(T)),W=new Rr(Fe,Fe,N,8),re=new Sr({color:6514417,emissive:5195493,emissiveIntensity:.2,transparent:!0,opacity:.6}),de=new dn(W,re);de.position.copy(A).add(pe.clone().multiplyScalar(N/2)),de.quaternion.setFromUnitVectors(new B(0,1,0),pe),L.add(de);const ve=new vo(Fe*2,ke,8),ce=new dn(ve,re);return ce.position.copy(k).add(pe.clone().multiplyScalar(ke*.5)),ce.quaternion.setFromUnitVectors(new B(0,1,0),pe),L.add(ce),L.userData.originalMaterial=re.clone(),L.userData.isArrow=!0,L}function Rt(){l=new yg,l.background=new ft(0),c=new gn(75,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,0,50),u=new xg({antialias:!0}),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio),y(o).appendChild(u.domElement),f=new Pg(c,u.domElement),f.enableDamping=!0,f.dampingFactor=.05,f.screenSpacePanning=!0,f.minDistance=2,f.maxDistance=600;const O=new Ag(16777215,.6);l.add(O);const q=new Rl(16777215,.8);q.position.set(10,10,10),l.add(q);const Q=new Rl(16777215,.4);Q.position.set(-10,-10,-10),l.add(Q);const pe=new Rn,Ce=[];for(let ue=0;ue<1e3;ue++){const De=(Math.random()-.5)*1e3,xe=(Math.random()-.5)*1e3,ee=(Math.random()-.5)*1e3;Ce.push(De,xe,ee)}pe.setAttribute("position",new wn(Ce,3));const Fe=new Ec({color:16777215,size:Pe}),ke=new bg(pe,Fe);l.add(ke);const Re=fe+20,m=new Rr(.15,.15,Re,16),T=new Sr({color:5592405,emissive:3355443,emissiveIntensity:.3,metalness:.5,roughness:.5}),N=new dn(m,T);N.rotation.z=Math.PI/2,N.position.set(0,0,0),l.add(N);const L=(ue,De)=>{const xe=document.createElement("canvas"),ee=xe.getContext("2d");xe.width=512,xe.height=128,ee.fillStyle="#ffffff",ee.font="bold 48px Arial",ee.textAlign="center",ee.textBaseline="middle",ee.fillText(ue,xe.width/2,xe.height/2);const Ge=new ds(xe),le=new Sc({map:Ge,transparent:!0}),We=new Sg(le);return We.scale.set(15,3.75,1),We.position.set(-fe/2-15,De,0),We};l.add(L("PURE MATH",-20)),l.add(L("APPLIED MATH",20));const A=L("TIME",0);A.position.set(-fe/2-15,0,0),l.add(A);const k={};Ct.forEach(ue=>{k[ue.category]||(k[ue.category]=[]),k[ue.category].push(ue)}),Ct.forEach((ue,De)=>{const xe=k[ue.category],ee=xe.indexOf(ue),Ge=je(ue,ee,xe.length),le=Qe(ue,Ge);l.add(le),d.push(le)}),Ct.forEach(ue=>{const De=d.find(xe=>xe.userData.topic.id===ue.id);De&&ue.leadsTo&&ue.leadsTo.length>0&&ue.leadsTo.forEach(xe=>{const ee=d.find(Ge=>Ge.userData.topic.id===xe);if(ee){const Ge=rt(De.position,ee.position,75);Ge&&(Ge.userData.fromCard=De,Ge.userData.toCard=ee,l.add(Ge),y(g).push(Ge))}})});let W={x:0,y:0},re=!1;function de(ue){re=!1,W.x=ue.clientX||ue.touches&&ue.touches[0].clientX||0,W.y=ue.clientY||ue.touches&&ue.touches[0].clientY||0}function ve(ue){if(W.x!==0||W.y!==0){const De=(ue.clientX||0)-W.x,xe=(ue.clientY||0)-W.y;(Math.abs(De)>5||Math.abs(xe)>5)&&(re=!0)}}function ce(){setTimeout(()=>{W.x=0,W.y=0},10)}u.domElement.addEventListener("mousedown",de),u.domElement.addEventListener("mousemove",ve),u.domElement.addEventListener("mouseup",ce),u.domElement.addEventListener("touchstart",de),u.domElement.addEventListener("touchend",ce);const Z=new wg;Z.far=1e3;const oe=new Ye;function He(ue){if(re)return;oe.x=ue.clientX/window.innerWidth*2-1,oe.y=-(ue.clientY/window.innerHeight)*2+1,Z.setFromCamera(oe,c);const De=Z.intersectObjects(y(g),!0);if(De.length>0){let ee=null;for(let Ge of De){let le=Ge.object;for(;le;){if(le.userData&&le.userData.isArrow){ee=le;break}le=le.parent}if(ee)break}if(ee){let Ge=p.get(ee);Ge?Ge.clickCount===1?(Ge.clickCount=2,Ge.toCard&&(nt(Ge.toCard),Ve(_,Ge.toCard.userData.topic))):Ge.clickCount===2?(Ge.clickCount=3,Ge.fromCard&&(nt(Ge.fromCard),Ve(_,Ge.fromCard.userData.topic))):(ee.children.forEach(le=>{le.material&&(le.material.color.set(6514417),le.material.emissive.set(5195493),le.material.emissiveIntensity=.2,le.material.opacity=.6)}),p.delete(ee)):(Ge={clickCount:1,fromCard:ee.userData.fromCard,toCard:ee.userData.toCard},p.set(ee,Ge),ee.children.forEach(le=>{le.material&&(le.material.color.set(16777215),le.material.emissive.set(13421772),le.material.emissiveIntensity=.5,le.material.opacity=1)})),_t();return}}const xe=Z.intersectObjects(d,!0);if(xe.length>0){let ee=null;for(let Ge of xe){let le=Ge.object;for(;le;){if(le.userData&&le.userData.type==="card"){ee=le;break}le=le.parent}if(ee)break}ee&&(nt(ee),Ve(_,ee.userData.topic))}}u.domElement.addEventListener("click",He),window.addEventListener("resize",F),Zt(),setTimeout(()=>{const ue=[...Ct].sort((De,xe)=>De.year-xe.year)[0];if(ue){const De=d.find(xe=>xe.userData.topic.id===ue.id);if(De){Ve(_,ue);const xe=De.position.clone(),ee=new B(0,0,12),Ge=xe.clone().add(ee);c.position.copy(Ge),f.target.copy(xe),f.update()}}},500)}function nt(O){y(_)&&y(_).id!==O.userData.topic.id&&(Ve(M,[...y(M),y(_)]),console.log("Added to history:",y(_).name,"History length:",y(M).length));const q=O.position.clone(),Q=new B(0,0,12),pe=q.clone().add(Q),Ce=c.position.clone(),Fe=f.target.clone();let ke=0;function Re(){if(ke+=.03,ke>=1){c.position.copy(pe),f.target.copy(q),f.update();return}c.position.lerpVectors(Ce,pe,ke),f.target.lerpVectors(Fe,q,ke),f.update(),requestAnimationFrame(Re)}Re()}function Ut(){if(console.log("goToPreviousCard called, history length:",y(M).length),y(M).length>0){const O=y(M)[y(M).length-1];Ve(M,y(M).slice(0,-1)),console.log("Going back to:",O.name,"New history length:",y(M).length);const q=d.find(Q=>Q.userData.topic.id===O.id);if(q){let m=function(){if(Re+=.03,Re>=1){c.position.copy(Ce),f.target.copy(Q),f.update();return}c.position.lerpVectors(Fe,Ce,Re),f.target.lerpVectors(ke,Q,Re),f.update(),requestAnimationFrame(m)};Ve(_,O);const Q=q.position.clone(),pe=new B(0,0,12),Ce=Q.clone().add(pe),Fe=c.position.clone(),ke=f.target.clone();let Re=0;m()}}}function F(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}function Zt(){requestAnimationFrame(Zt),f.update(),d.forEach(O=>{const q=y(_)&&O.userData.topic.id===y(_).id;O.children.forEach(Q=>{if(Q.userData&&Q.userData.type==="cardMesh"&&Array.isArray(Q.material))for(let pe=0;pe<4;pe++)Q.material[pe].emissive&&(Q.material[pe].emissiveIntensity=q?.6:0)})}),u.render(l,c)}function lt(){Ve(C,y(C)==="3d"?"list":"3d"),y(C)==="list"&&Ve(P,!1)}function ct(){const O={"High School":0,UGrad:0,PGrad:0,Research:0};return Ct.forEach(q=>{q.difficulty&&O.hasOwnProperty(q.difficulty)&&O[q.difficulty]++}),O}function Xe(){const O={};return Object.keys(Ue).forEach(q=>{O[q]=0}),Ct.forEach(q=>{q.category&&O.hasOwnProperty(q.category)&&O[q.category]++}),O}function Et(){const O={"Pure Math":0,"Applied Math":0};return Ct.forEach(q=>{q.type&&O.hasOwnProperty(q.type)&&O[q.type]++}),O}function Be(O){y(S).has(O)?y(S).delete(O):y(S).add(O),Ve(S,y(S))}function E(O){y(x).has(O)?y(x).delete(O):y(x).add(O),Ve(x,y(x))}function v(O){y(D).has(O)?y(D).delete(O):y(D).add(O),Ve(D,y(D))}function G(){Ve(S,new Set),Ve(x,new Set),Ve(D,new Set),Ve(H,!1)}function ne(){Ve(P,!y(P)),y(P)||Ve(w,null)}function se(){const O={};Ct.forEach((m,T)=>{O[m.id]=T});const q=Ct.length,Q=Array(q).fill(null).map(()=>Array(q).fill(1/0)),pe=Array(q).fill(null).map(()=>Array(q).fill(null));for(let m=0;m<q;m++)Q[m][m]=0;Ct.forEach((m,T)=>{m.leadsTo&&m.leadsTo.forEach(N=>{const L=O[N];L!==void 0&&(Q[T][L]=1,pe[T][L]=L)})});for(let m=0;m<q;m++)for(let T=0;T<q;T++)for(let N=0;N<q;N++)Q[T][m]+Q[m][N]<Q[T][N]&&(Q[T][N]=Q[T][m]+Q[m][N],pe[T][N]=pe[T][m]);const Ce=O[y(b)],Fe=O[y(z)];if(Ce===void 0||Fe===void 0){Ve(w,{error:"Invalid topic selection"});return}if(Q[Ce][Fe]===1/0){Ve(w,{error:"No route, try again"});return}const ke=[Ce];let Re=Ce;for(;Re!==Fe;)Re=pe[Re][Fe],ke.push(Re);Ve(w,{path:ke.map(m=>Ct[m]),length:Q[Ce][Fe]}),$(y(w).path)}function $(O){y(g).forEach(q=>l.remove(q)),Ve(g,[]),Ct.forEach(q=>{const Q=d.find(pe=>pe.userData.topic.id===q.id);Q&&q.leadsTo&&q.leadsTo.length>0&&q.leadsTo.forEach(pe=>{const Ce=d.find(Fe=>Fe.userData.topic.id===pe);if(Ce){const Fe=rt(Q.position,Ce.position,75);Fe&&(Fe.children.forEach(ke=>{ke.material&&(ke.material.opacity=.2)}),l.add(Fe),y(g).push(Fe))}})});for(let q=0;q<O.length-1;q++){const Q=d.find(Ce=>Ce.userData.topic.id===O[q].id),pe=d.find(Ce=>Ce.userData.topic.id===O[q+1].id);if(Q&&pe){const Ce=rt(Q.position,pe.position,100);if(Ce){const Fe=q/(O.length-1)*.8,ke=new ft().setHSL(Fe,1,.5);Ce.children.forEach(Re=>{Re.material&&(Re.material.color=ke,Re.material.emissive=ke,Re.material.emissiveIntensity=.5,Re.material.opacity=1)}),l.add(Ce),y(g).push(Ce)}}}}wc(()=>{const O=J();return Rt(),O.length>0&&setTimeout(()=>{_e(O)},100),localStorage.getItem("mathMapHasSeenTutorial")||setTimeout(()=>{Ve(te,!0),localStorage.setItem("mathMapHasSeenTutorial","true")},2e3),()=>{window.removeEventListener("resize",F),u&&u.dispose()}}),Ri(()=>(y(S),y(x),y(D),y(g)),()=>{d.length>0&&(d.forEach(O=>{const q=O.userData.topic;let Q=!0;y(S).size>0&&!y(S).has(q.difficulty)&&(Q=!1),y(x).size>0&&!y(x).has(q.category)&&(Q=!1),y(D).size>0&&!y(D).has(q.type)&&(Q=!1),O.visible=Q}),y(g).forEach(O=>{const q=O.userData.fromCard,Q=O.userData.toCard;O.visible=q&&Q&&q.visible&&Q.visible}))}),Ri(()=>{},()=>{Ve(t,ct())}),Ri(()=>{},()=>{Ve(n,Xe())}),Ri(()=>{},()=>{Ve(r,Et())}),Ri(()=>(y(S),y(x),y(D)),()=>{Ve(a,y(S).size+y(x).size+y(D).size)}),Ri(()=>(y(S),y(x),y(D),y(U)),()=>{Ve(s,(()=>{let O=[...Ct];y(S).size>0&&(O=O.filter(Q=>y(S).has(Q.difficulty))),y(x).size>0&&(O=O.filter(Q=>y(x).has(Q.category))),y(D).size>0&&(O=O.filter(Q=>y(D).has(Q.type)));const q={"High School":1,UGrad:2,PGrad:3,Research:4};switch(y(U)){case"year":return O.sort((Q,pe)=>Q.year-pe.year);case"name":return O.sort((Q,pe)=>Q.name.localeCompare(pe.name));case"category":return O.sort((Q,pe)=>Q.category.localeCompare(pe.category)||Q.year-pe.year);case"type":return O.sort((Q,pe)=>Q.type.localeCompare(pe.type)||Q.year-pe.year);case"difficulty":return O.sort((Q,pe)=>{const Ce=q[Q.difficulty]||999,Fe=q[pe.difficulty]||999;return Ce-Fe||Q.year-pe.year});default:return O}})())}),nh(),oh();var ze=P_(),Se=Ci(ze);sh(Se,O=>Ve(o,O),()=>y(o));var Le=ae(Se,2);{var dt=O=>{var q=Jg(),Q=ye(q),pe=ae(ye(Q),2),Ce=ye(pe),Fe=ae(ye(Ce),2);pt(()=>{y(U),Ua(()=>{})});var ke=ye(Fe);ke.value=ke.__value="year";var Re=ae(ke);Re.value=Re.__value="name";var m=ae(Re);m.value=m.__value="category";var T=ae(m);T.value=T.__value="type";var N=ae(T);N.value=N.__value="difficulty",ge(Fe),ge(Ce);var L=ae(Ce,2),A=ye(L),k=ye(A),W=ae(k),re=ye(W,!0);ge(W),ge(A);var de=ae(A,2);{var ve=Z=>{var oe=Wg(),He=ye(oe),ue=ae(ye(He),2);ge(He);var De=ae(He,2),xe=ae(ye(De),2),ee=ye(xe);an(ee);var Ge=ae(ee,3);ge(xe);var le=ae(xe,2),We=ye(le);an(We);var Tt=ae(We,3);ge(le);var xt=ae(le,2),Lt=ye(xt);an(Lt);var ut=ae(Lt,3);ge(xt);var Nt=ae(xt,2),Gt=ye(Nt);an(Gt);var It=ae(Gt,3);ge(Nt),ge(De);var Yt=ae(De,2),$t=ae(ye(Yt),2),Fn=ye($t);an(Fn);var Ir=ae(Fn);ge($t);var Nr=ae($t,2),wi=ye(Nr);an(wi);var Ca=ae(wi);ge(Nr),ge(Yt);var At=ae(Yt,2),Ft=ae(ye(At),2);yn(Ft,1,()=>he(()=>Object.keys(Ue)),xn,(Jt,Bt)=>{var ci=Vg(),Kn=ye(ci);an(Kn);var fn=ae(Kn,2),Pn=ae(fn);ge(ci),pt(fr=>{sn(Kn,fr),Pi(fn,`background: ${y(Bt),he(()=>Ue[y(Bt)])??""}`),$e(Pn,` ${y(Bt)??""} (${y(n),y(Bt),he(()=>y(n)[y(Bt)])??""})`)},[()=>(y(x),y(Bt),he(()=>y(x).has(y(Bt))))]),st("change",Kn,()=>E(y(Bt))),Ze(Jt,ci)}),ge(At),ge(oe),pt((Jt,Bt,ci,Kn,fn,Pn)=>{sn(ee,Jt),$e(Ge,` High School (${y(t),he(()=>y(t)["High School"])??""})`),sn(We,Bt),$e(Tt,` Undergraduate (${y(t),he(()=>y(t).UGrad)??""})`),sn(Lt,ci),$e(ut,` Postgraduate (${y(t),he(()=>y(t).PGrad)??""})`),sn(Gt,Kn),$e(It,` Research (${y(t),he(()=>y(t).Research)??""})`),sn(Fn,fn),$e(Ir,` Pure Math (${y(r),he(()=>y(r)["Pure Math"])??""})`),sn(wi,Pn),$e(Ca,` Applied Math (${y(r),he(()=>y(r)["Applied Math"])??""})`)},[()=>(y(S),he(()=>y(S).has("High School"))),()=>(y(S),he(()=>y(S).has("UGrad"))),()=>(y(S),he(()=>y(S).has("PGrad"))),()=>(y(S),he(()=>y(S).has("Research"))),()=>(y(D),he(()=>y(D).has("Pure Math"))),()=>(y(D),he(()=>y(D).has("Applied Math")))]),st("click",ue,G),st("change",ee,()=>Be("High School")),st("change",We,()=>Be("UGrad")),st("change",Lt,()=>Be("PGrad")),st("change",Gt,()=>Be("Research")),st("change",Fn,()=>v("Pure Math")),st("change",wi,()=>v("Applied Math")),Ze(Z,oe)};mt(de,Z=>{y(H)&&Z(ve)})}ge(L),ge(pe),ge(Q);var ce=ae(Q,2);yn(ce,5,()=>y(s),xn,(Z,oe)=>{var He=$g(),ue=ye(He),De=ye(ue),xe=ye(De,!0);ge(De);var ee=ae(De,2),Ge=ye(ee);{var le=At=>{var Ft=Xg(),Jt=ye(Ft,!0);ge(Ft),pt(()=>{Pi(Ft,`background: ${y(oe),he(()=>tt[y(oe).difficulty])??""}`),$e(Jt,(y(oe),he(()=>y(oe).difficulty)))}),Ze(At,Ft)};mt(Ge,At=>{y(oe),he(()=>y(oe).difficulty)&&At(le)})}var We=ae(Ge,2),Tt=ye(We,!0);ge(We),ge(ee),ge(ue);var xt=ae(ue,2);{var Lt=At=>{var Ft=qg(),Jt=ae(ye(Ft));ge(Ft),pt(Bt=>$e(Jt,` ${Bt??""}`),[()=>(y(oe),he(()=>y(oe).aka.join(", ")))]),Ze(At,Ft)};mt(xt,At=>{y(oe),he(()=>y(oe).aka&&y(oe).aka.length>0)&&At(Lt)})}var ut=ae(xt,2);{var Nt=At=>{var Ft=Yg(),Jt=ae(ye(Ft));ge(Ft),pt(Bt=>$e(Jt,` ${Bt??""}`),[()=>(y(oe),he(()=>y(oe).notableYears.map(Bt=>Bt<0?`${Math.abs(Bt)} BC`:`${Bt} AD`).join(", ")))]),Ze(At,Ft)};mt(ut,At=>{y(oe),he(()=>y(oe).notableYears&&y(oe).notableYears.length>0)&&At(Nt)})}var Gt=ae(ut,2),It=ye(Gt),Yt=ye(It,!0);ge(It);var $t=ae(It,2),Fn=ye($t,!0);ge($t),ge(Gt);var Ir=ae(Gt,2);{var Nr=At=>{const Ft=br(()=>(y(oe),On(gi),he(()=>y(oe).contributors.slice(0,4).map(fn=>{const Pn=gi.find(fr=>fr.id===fn);return Pn?Pn.name:fn.charAt(0).toUpperCase()+fn.slice(1)}).join(", "))));var Jt=Kg(),Bt=ae(ye(Jt)),ci=ae(Bt);{var Kn=fn=>{var Pn=jg(),fr=ye(Pn);ge(Pn),pt(()=>$e(fr,`+${y(oe),he(()=>y(oe).contributors.length-4)??""} more`)),Ze(fn,Pn)};mt(ci,fn=>{y(oe),he(()=>y(oe).contributors.length>4)&&fn(Kn)})}ge(Jt),pt(()=>$e(Bt,` ${y(Ft)??""} `)),Ze(At,Jt)};mt(Ir,At=>{y(oe),he(()=>y(oe).contributors&&y(oe).contributors.length>0)&&At(Nr)})}var wi=ae(Ir,2);{var Ca=At=>{var Ft=Zg(),Jt=ye(Ft,!0);ge(Ft),pt(()=>$e(Jt,(y(oe),he(()=>y(oe).notes)))),Ze(At,Ft)};mt(wi,At=>{y(oe),he(()=>y(oe).notes)&&At(Ca)})}rh(2),ge(He),pt(At=>{Pi(He,`border-left: 4px solid ${y(oe),he(()=>Ue[y(oe).category]||"#fff")??""}`),$e(xe,(y(oe),he(()=>y(oe).name))),$e(Tt,At),Pi(It,`background: ${y(oe),he(()=>Ue[y(oe).category])??""}`),$e(Yt,(y(oe),he(()=>y(oe).category))),$e(Fn,(y(oe),he(()=>y(oe).type)))},[()=>(y(oe),he(()=>y(oe).year<0?`${Math.abs(y(oe).year)} BC`:`${y(oe).year} AD`))]),st("click",He,()=>{Ve(C,"3d"),setTimeout(()=>{const At=d.find(Ft=>Ft.userData.topic.id===y(oe).id);At&&(nt(At),Ve(_,y(oe)))},100)}),Ze(Z,He)}),ge(ce),ge(q),pt(()=>{$e(k,`${y(a)===0?"Filters":`Filters (${y(a)})`} `),$e(re,y(H)?"▲":"▼")}),Na(Fe,()=>y(U),Z=>Ve(U,Z)),st("click",A,()=>Ve(H,!y(H))),Ze(O,q)};mt(Le,O=>{y(C)==="list"&&O(dt)})}var me=ae(Le,2);{var Ne=O=>{var q=Qg(),Q=ye(q);ge(q),pt(()=>$e(Q,`← Back (${y(M),he(()=>y(M).length)??""})`)),st("click",q,Ut),Ze(O,q)};mt(me,O=>{y(C),y(M),he(()=>y(C)==="3d"&&y(M).length>0)&&O(Ne)})}var qe=ae(me,2);{var Ke=O=>{var q=e_();st("click",q,()=>Ve(te,!0)),Ze(O,q)};mt(qe,O=>{y(C)==="3d"&&O(Ke)})}var Ie=ae(qe,2);{var ht=O=>{var q=t_();st("click",q,()=>Ve(Y,!0)),Ze(O,q)};mt(Ie,O=>{y(C)==="3d"&&O(ht)})}var Je=ae(Ie,2),yt=ye(Je,!0);ge(Je);var I=ae(Je,2);{var Ee=O=>{var q=r_(),Q=ye(q),pe=ye(Q),Ce=ae(pe),Fe=ye(Ce,!0);ge(Ce),ge(Q);var ke=ae(Q,2);{var Re=m=>{var T=i_(),N=ye(T),L=ae(N,6),A=ye(L);an(A);var k=ae(A,3);ge(L);var W=ae(L,2),re=ye(W);an(re);var de=ae(re,3);ge(W);var ve=ae(W,2),ce=ye(ve);an(ce);var Z=ae(ce,3);ge(ve);var oe=ae(ve,2),He=ye(oe);an(He);var ue=ae(He,3);ge(oe);var De=ae(oe,6),xe=ye(De);an(xe);var ee=ae(xe);ge(De);var Ge=ae(De,2),le=ye(Ge);an(le);var We=ae(le);ge(Ge);var Tt=ae(Ge,6);yn(Tt,1,()=>he(()=>Object.keys(Ue)),xn,(xt,Lt)=>{var ut=n_(),Nt=ye(ut);an(Nt);var Gt=ae(Nt,2),It=ae(Gt);ge(ut),pt(Yt=>{sn(Nt,Yt),Pi(Gt,`color: ${y(Lt),he(()=>Ue[y(Lt)])??""}`),$e(It,` ${y(Lt)??""} (${y(n),y(Lt),he(()=>y(n)[y(Lt)])??""})`)},[()=>(y(x),y(Lt),he(()=>y(x).has(y(Lt))))]),st("change",Nt,()=>E(y(Lt))),Ze(xt,ut)}),ge(T),pt((xt,Lt,ut,Nt,Gt,It)=>{sn(A,xt),$e(k,` High School (${y(t),he(()=>y(t)["High School"])??""})`),sn(re,Lt),$e(de,` Undergraduate (${y(t),he(()=>y(t).UGrad)??""})`),sn(ce,ut),$e(Z,` Postgraduate (${y(t),he(()=>y(t).PGrad)??""})`),sn(He,Nt),$e(ue,` Research (${y(t),he(()=>y(t).Research)??""})`),sn(xe,Gt),$e(ee,` Pure Math (${y(r),he(()=>y(r)["Pure Math"])??""})`),sn(le,It),$e(We,` Applied Math (${y(r),he(()=>y(r)["Applied Math"])??""})`)},[()=>(y(S),he(()=>y(S).has("High School"))),()=>(y(S),he(()=>y(S).has("UGrad"))),()=>(y(S),he(()=>y(S).has("PGrad"))),()=>(y(S),he(()=>y(S).has("Research"))),()=>(y(D),he(()=>y(D).has("Pure Math"))),()=>(y(D),he(()=>y(D).has("Applied Math")))]),st("click",N,G),st("change",A,()=>Be("High School")),st("change",re,()=>Be("UGrad")),st("change",ce,()=>Be("PGrad")),st("change",He,()=>Be("Research")),st("change",xe,()=>v("Pure Math")),st("change",le,()=>v("Applied Math")),Ze(m,T)};mt(ke,m=>{y(V)&&m(Re)})}ge(q),pt(()=>{$e(pe,`${y(a)===0?"Filters":`Filters (${y(a)})`} `),$e(Fe,y(V)?"▲":"▼")}),st("click",Q,()=>Ve(V,!y(V))),Ze(O,q)};mt(I,O=>{y(C)==="3d"&&O(Ee)})}var j=ae(I,2);{var ie=O=>{var q=a_();st("click",q,ne),Ze(O,q)};mt(j,O=>{y(C)==="3d"&&O(ie)})}var Ae=ae(j,2);{var we=O=>{var q=s_();st("click",q,()=>Ve(R,!y(R))),Ze(O,q)};mt(Ae,O=>{y(C)==="3d"&&O(we)})}var et=ae(Ae,2);{var Dt=O=>{var q=c_(),Q=ye(q),pe=ae(Q,4),Ce=ae(ye(pe),2),Fe=ye(Ce);Fe.value=Fe.__value="";var ke=ae(Fe);yn(ke,1,()=>(On(Ct),he(()=>Ct.sort((L,A)=>L.name.localeCompare(A.name)))),xn,(L,A)=>{var k=o_(),W=ye(k,!0);ge(k);var re={};pt(()=>{$e(W,(y(A),he(()=>y(A).name))),re!==(re=(y(A),he(()=>y(A).id)))&&(k.value=(k.__value=(y(A),he(()=>y(A).id)))??"")}),Ze(L,k)}),ge(Ce),ge(pe);var Re=ae(pe,2),m=ae(ye(Re),2),T=ye(m);T.value=T.__value="";var N=ae(T);yn(N,1,()=>(On(gi),he(()=>gi.sort((L,A)=>L.name.localeCompare(A.name)))),xn,(L,A)=>{var k=l_(),W=ye(k,!0);ge(k);var re={};pt(()=>{$e(W,(y(A),he(()=>y(A).name))),re!==(re=(y(A),he(()=>y(A).id)))&&(k.value=(k.__value=(y(A),he(()=>y(A).id)))??"")}),Ze(L,k)}),ge(m),ge(Re),ge(q),st("click",Q,()=>Ve(R,!1)),st("change",Ce,L=>{const A=L.target.value;if(A){const k=Ct.find(re=>re.id===A),W=d.find(re=>re.userData.topic.id===A);k&&W&&(nt(W),Ve(_,k),Ve(R,!1))}}),st("change",m,L=>{const A=L.target.value;if(A){const k=Ct.find(W=>W.contributors&&W.contributors.includes(A));if(k){const W=d.find(re=>re.userData.topic.id===k.id);W&&(nt(W),Ve(_,k),Ve(R,!1))}}}),Ze(O,q)};mt(et,O=>{y(R)&&O(Dt)})}var kt=ae(et,2);{var vt=O=>{var q=m_(),Q=ye(q),pe=ae(Q,4);pt(()=>{y(b),Ua(()=>{})});var Ce=ye(pe);Ce.value=Ce.__value="";var Fe=ae(Ce);yn(Fe,1,()=>Ct,xn,(A,k)=>{var W=h_(),re=ye(W,!0);ge(W);var de={};pt(()=>{$e(re,(y(k),he(()=>y(k).name))),de!==(de=(y(k),he(()=>y(k).id)))&&(W.value=(W.__value=(y(k),he(()=>y(k).id)))??"")}),Ze(A,W)}),ge(pe);var ke=ae(pe,2);pt(()=>{y(z),Ua(()=>{})});var Re=ye(ke);Re.value=Re.__value="";var m=ae(Re);yn(m,1,()=>Ct,xn,(A,k)=>{var W=u_(),re=ye(W,!0);ge(W);var de={};pt(()=>{$e(re,(y(k),he(()=>y(k).name))),de!==(de=(y(k),he(()=>y(k).id)))&&(W.value=(W.__value=(y(k),he(()=>y(k).id)))??"")}),Ze(A,W)}),ge(ke);var T=ae(ke,2),N=ae(T,2);{var L=A=>{var k=Fr(),W=Ci(k);{var re=ve=>{var ce=d_(),Z=ye(ce,!0);ge(ce),pt(()=>$e(Z,(y(w),he(()=>y(w).error)))),Ze(ve,ce)},de=ve=>{var ce=p_(),Z=ye(ce),oe=ye(Z);ge(Z);var He=ae(Z,2);yn(He,5,()=>(y(w),he(()=>y(w).path)),xn,(ue,De)=>{var xe=f_(),ee=ye(xe,!0);ge(xe),pt(()=>$e(ee,(y(De),he(()=>y(De).name)))),Ze(ue,xe)}),ge(He),ge(ce),pt(()=>$e(oe,`Path Found (Length: ${y(w),he(()=>y(w).length)??""})`)),Ze(ve,ce)};mt(W,ve=>{y(w),he(()=>y(w).error)?ve(re):ve(de,!1)})}Ze(A,k)};mt(N,A=>{y(w)&&A(L)})}ge(q),st("click",Q,ne),Na(pe,()=>y(b),A=>Ve(b,A)),Na(ke,()=>y(z),A=>Ve(z,A)),st("click",T,se),Ze(O,q)};mt(kt,O=>{y(P)&&O(vt)})}var rn=ae(kt,2);{var vn=O=>{var q=S_();let Q;var pe=ye(q),Ce=ae(pe,2),Fe=ae(Ce,2),ke=ye(Fe,!0);ge(Fe);var Re=ae(Fe,2);{var m=k=>{var W=__(),re=ae(ye(W),2);yn(re,5,()=>(y(_),he(()=>y(_).contributors)),xn,(de,ve)=>{const ce=br(()=>(On(gi),y(ve),he(()=>gi.find(ue=>ue.id===y(ve)))));var Z=Fr(),oe=Ci(Z);{var He=ue=>{var De=g_(),xe=ye(De,!0);ge(De),pt(()=>$e(xe,(On(y(ce)),he(()=>y(ce).name)))),st("click",De,()=>{var ee;return Ve(h,((ee=y(h))==null?void 0:ee.id)===y(ce).id?null:{...y(ce)})}),Ze(ue,De)};mt(oe,ue=>{y(ce)&&ue(He)})}Ze(de,Z)}),ge(re),ge(W),Ze(k,W)};mt(Re,k=>{y(_),he(()=>y(_).contributors&&y(_).contributors.length>0)&&k(m)})}var T=ae(Re,2);{var N=k=>{var W=x_(),re=ae(ye(W),2);yn(re,5,()=>(y(_),he(()=>y(_).leadsTo)),xn,(de,ve)=>{const ce=br(()=>(On(Ct),y(ve),he(()=>Ct.find(ue=>ue.id===y(ve)))));var Z=Fr(),oe=Ci(Z);{var He=ue=>{var De=v_(),xe=ye(De,!0);ge(De),pt(()=>$e(xe,(On(y(ce)),he(()=>y(ce).name)))),st("click",De,()=>{const ee=d.find(Ge=>Ge.userData.topic.id===y(ve));ee&&(nt(ee),Ve(_,y(ce)))}),Ze(ue,De)};mt(oe,ue=>{y(ce)&&ue(He)})}Ze(de,Z)}),ge(re),ge(W),Ze(k,W)};mt(T,k=>{y(_),he(()=>y(_).leadsTo&&y(_).leadsTo.length>0)&&k(N)})}var L=ae(T,2);{var A=k=>{var W=M_(),re=ae(ye(W),2);yn(re,5,()=>(y(_),he(()=>y(_).prerequisites)),xn,(de,ve)=>{const ce=br(()=>(On(Ct),y(ve),he(()=>Ct.find(ue=>ue.id===y(ve).id))));var Z=Fr(),oe=Ci(Z);{var He=ue=>{var De=y_(),xe=ye(De),ee=ae(xe),Ge=ye(ee);ge(ee),ge(De),pt(()=>{$e(xe,`${On(y(ce)),he(()=>y(ce).name)??""} `),$e(Ge,`${y(ve),he(()=>y(ve).strength)??""}%`)}),st("click",De,()=>{const le=d.find(We=>We.userData.topic.id===y(ve).id);le&&(nt(le),Ve(_,y(ce)))}),Ze(ue,De)};mt(oe,ue=>{y(ce)&&ue(He)})}Ze(de,Z)}),ge(re),ge(W),Ze(k,W)};mt(L,k=>{y(_),he(()=>y(_).prerequisites&&y(_).prerequisites.length>0)&&k(A)})}ge(q),pt(k=>{Q=dh(q,1,"card-overlay-panel svelte-1uha8ag",null,Q,k),$e(ke,(y(_),he(()=>y(_).name)))},[()=>({"card-left":y(X)==="left"})]),st("click",pe,()=>Ve(_,null)),st("click",Ce,Te),Ze(O,q)};mt(rn,O=>{y(_)&&y(C)==="3d"&&O(vn)})}var ur=ae(rn,2);{var Dr=O=>{var q=w_(),Q=ye(q),pe=ae(Q,2),Ce=ye(pe);{var Fe=L=>{var A=b_();pt(()=>{_a(A,"src",`.${y(h),he(()=>y(h).image)??""}`),_a(A,"alt",(y(h),he(()=>y(h).name)))}),Ze(L,A)},ke=L=>{var A=E_(),k=ye(A,!0);ge(A),pt(W=>$e(k,W),[()=>(y(h),he(()=>y(h).name.split(" ").map(W=>W[0]).join("")))]),Ze(L,A)};mt(Ce,L=>{y(h),he(()=>y(h).image)?L(Fe):L(ke,!1)})}var Re=ae(Ce,2),m=ye(Re,!0);ge(Re);var T=ae(Re,2);{var N=L=>{var A=A_(),k=ye(A);{var W=ve=>{var ce=ah();pt(()=>$e(ce,`Born: ${y(h),he(()=>y(h).born)??""}`)),Ze(ve,ce)};mt(k,ve=>{y(h),he(()=>y(h).born)&&ve(W)})}var re=ae(k,2);{var de=ve=>{var ce=T_(),Z=ae(Ci(ce));pt(()=>$e(Z,`Died: ${y(h),he(()=>y(h).died)??""}`)),Ze(ve,ce)};mt(re,ve=>{y(h),he(()=>y(h).died)&&ve(de)})}ge(A),Ze(L,A)};mt(T,L=>{y(h),he(()=>y(h).born||y(h).died)&&L(N)})}ge(pe),ge(q),pt(()=>$e(m,(y(h),he(()=>y(h).name)))),st("click",Q,()=>Ve(h,null)),Ze(O,q)};mt(ur,O=>{y(h)&&O(Dr)})}var Cn=ae(ur,2);{var dr=O=>{var q=R_(),Q=ye(q),pe=ye(Q),Ce=ae(pe,6);ge(Q),ge(q),st("click",pe,()=>Ve(te,!1)),st("click",Ce,()=>Ve(te,!1)),Ze(O,q)};mt(Cn,O=>{y(te)&&O(dr)})}var Lr=ae(Cn,2);{var Ur=O=>{var q=C_(),Q=ye(q),pe=ae(ye(Q),4),Ce=ye(pe),Fe=ae(Ce,2);ge(pe),ge(Q),ge(q),st("click",Ce,()=>Ve(Y,!1)),st("click",Fe,Oe),Ze(O,q)};mt(Lr,O=>{y(Y)&&O(Ur)})}pt(()=>{Pi(Se,`display: ${y(C)==="3d"?"block":"none"}`),$e(yt,y(C)==="3d"?"📋":"🌌")}),st("click",Je,lt),Ze(i,ze),ih()}export{O_ as component};
