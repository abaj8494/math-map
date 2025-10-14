import"../chunks/Bzak7iHL.js";import"../chunks/C4pPj8Q1.js";import{o as fc,e as wt,s as dt}from"../chunks/BTq9xqjW.js";import{m as ga,j as cn,ad as pc,o as yl,k as mc,i as gc,g as R,aC as cr,l as _c,H as vc,s as so,n as _a,x as Qi,T as xc,al as yc,p as ts,t as Mc,aQ as sa,aR as oa,q as Sc,aS as Ml,ai as Sl,ab as bl,aM as Gt,O as oo,Q as lo,v as El,w as bc,aT as va,A as Tl,a0 as Al,aU as Ec,aV as Tc,a6 as Ac,aW as wc,ah as Rc,aX as Cc,R as Pc,aY as Dc,y as Lc,aZ as Uc,a_ as Ic,a8 as Nc,a$ as Fc,b0 as Oc,b1 as Bc,b2 as zc,b3 as kc,B as Gc,b4 as Hc,b5 as Vc,C as ot,D as $n,F as pt,G as $e,I as Wc,aE as it,L as we,b as Me,J as Pe,K as be,b6 as xa,a1 as er,e as Sn,M as vr,aP as Xc}from"../chunks/Bvkk6tmS.js";import{b as qc,i as gt}from"../chunks/DDySOoCC.js";import{i as Yc}from"../chunks/DvgqMaFo.js";function bn(i,e){return e}function jc(i,e,t){for(var n=i.items,r=[],a=e.length,s=0;s<a;s++)wc(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;Rc(l),l.append(t),n.clear(),gn(i,e[0].prev,e[a-1].next)}Cc(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(n.delete(d.k),gn(i,d.prev,d.next)),Al(d.e,!o)}})}function En(i,e,t,n,r,a=null){var s=i,o={flags:e,items:new Map,first:null},l=(e&Ml)!==0;if(l){var c=i;s=cn?ga(pc(c)):c.appendChild(yl())}cn&&mc();var d=null,p=!1,u=new Map,m=cr(()=>{var h=t();return bl(h)?h:h==null?[]:Sl(h)}),g,y;function f(){Kc(y,g,o,u,s,r,e,n,t),a!==null&&(g.length===0?d?El(d):d=ts(()=>a(s)):d!==null&&bc(d,()=>{d=null}))}gc(()=>{y??(y=Pc),g=R(m);var h=g.length;if(p&&h===0)return;p=h===0;let A=!1;if(cn){var T=_c(s)===vc;T!==(h===0)&&(s=so(),ga(s),_a(!1),A=!0)}if(cn){for(var M=null,k,w=0;w<h;w++){if(Qi.nodeType===xc&&Qi.data===yc){s=Qi,A=!0,_a(!1);break}var C=g[w],U=n(C,w);k=ns(Qi,o,M,null,C,U,w,r,e,t),o.items.set(U,k),M=k}h>0&&ga(so())}if(cn)h===0&&a&&(d=ts(()=>a(s)));else if(Mc()){var S=new Set,x=Sc;for(w=0;w<h;w+=1){C=g[w],U=n(C,w);var D=o.items.get(U)??u.get(U);D?(e&(sa|oa))!==0&&wl(D,C,w,e):(k=ns(null,o,null,null,C,U,w,r,e,t,!0),u.set(U,k)),S.add(U)}for(const[X,V]of o.items)S.has(X)||x.skipped_effects.add(V.e);x.add_callback(f)}else f();A&&_a(!0),R(m)}),cn&&(s=Qi)}function Kc(i,e,t,n,r,a,s,o,l){var ge,Se,Re,qe;var c=(s&Tc)!==0,d=(s&(sa|oa))!==0,p=e.length,u=t.items,m=t.first,g=m,y,f=null,h,A=[],T=[],M,k,w,C;if(c)for(C=0;C<p;C+=1)M=e[C],k=o(M,C),w=u.get(k),w!==void 0&&((ge=w.a)==null||ge.measure(),(h??(h=new Set)).add(w));for(C=0;C<p;C+=1){if(M=e[C],k=o(M,C),w=u.get(k),w===void 0){var U=n.get(k);if(U!==void 0){n.delete(k),u.set(k,U);var S=f?f.next:g;gn(t,f,U),gn(t,U,S),ya(U,S,r),f=U}else{var x=g?g.e.nodes_start:r;f=ns(x,t,f,f===null?t.first:f.next,M,k,C,a,s,l)}u.set(k,f),A=[],T=[],g=f.next;continue}if(d&&wl(w,M,C,s),(w.e.f&va)!==0&&(El(w.e),c&&((Se=w.a)==null||Se.unfix(),(h??(h=new Set)).delete(w))),w!==g){if(y!==void 0&&y.has(w)){if(A.length<T.length){var D=T[0],X;f=D.prev;var V=A[0],$=A[A.length-1];for(X=0;X<A.length;X+=1)ya(A[X],D,r);for(X=0;X<T.length;X+=1)y.delete(T[X]);gn(t,V.prev,$.next),gn(t,f,V),gn(t,$,D),g=D,f=$,C-=1,A=[],T=[]}else y.delete(w),ya(w,g,r),gn(t,w.prev,w.next),gn(t,w,f===null?t.first:f.next),gn(t,f,w),f=w;continue}for(A=[],T=[];g!==null&&g.k!==k;)(g.e.f&va)===0&&(y??(y=new Set)).add(g),T.push(g),g=g.next;if(g===null)continue;w=g}A.push(w),f=w,g=w.next}if(g!==null||y!==void 0){for(var ae=y===void 0?[]:Sl(y);g!==null;)(g.e.f&va)===0&&ae.push(g),g=g.next;var Z=ae.length;if(Z>0){var fe=(s&Ml)!==0&&p===0?r:null;if(c){for(C=0;C<Z;C+=1)(Re=ae[C].a)==null||Re.measure();for(C=0;C<Z;C+=1)(qe=ae[C].a)==null||qe.fix()}jc(t,ae,fe)}}c&&Tl(()=>{var ct;if(h!==void 0)for(w of h)(ct=w.a)==null||ct.apply()}),i.first=t.first&&t.first.e,i.last=f&&f.e;for(var J of n.values())Al(J.e);n.clear()}function wl(i,e,t,n){(n&sa)!==0&&lo(i.v,e),(n&oa)!==0?lo(i.i,t):i.i=t}function ns(i,e,t,n,r,a,s,o,l,c,d){var p=(l&sa)!==0,u=(l&Ec)===0,m=p?u?Gt(r,!1,!1):oo(r):r,g=(l&oa)===0?s:oo(s),y={i:g,v:m,k:a,a:null,e:null,prev:t,next:n};try{if(i===null){var f=document.createDocumentFragment();f.append(i=yl())}return y.e=ts(()=>o(i,m,g,c),cn),y.e.prev=t&&t.e,y.e.next=n&&n.e,t===null?d||(e.first=y):(t.next=y,t.e.next=y.e),n!==null&&(n.prev=y,n.e.prev=y.e),y}finally{}}function ya(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=i.e.nodes_start;a!==null&&a!==n;){var s=Ac(a);r.before(a),a=s}}function gn(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Zc(i,e){return i==null?null:String(i)}function xr(i,e,t,n){var r=i.__style;if(cn||r!==e){var a=Zc(e);(!cn||a!==i.getAttribute("style"))&&(a==null?i.removeAttribute("style"):i.style.cssText=a),i.__style=e}return n}function Rl(i,e,t=!1){if(i.multiple){if(e==null)return;if(!bl(e))return Uc();for(var n of i.options)n.selected=e.includes(ur(n));return}for(n of i.options){var r=ur(n);if(Ic(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function $c(i){var e=new MutationObserver(()=>{Rl(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Nc(()=>{e.disconnect()})}function Ma(i,e,t=e){var n=!0;Dc(i,"change",r=>{var a=r?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(a),ur);else{var o=i.querySelector(a)??i.querySelector("option:not([disabled])");s=o&&ur(o)}t(s)}),Lc(()=>{var r=e();if(Rl(i,r,n),n&&r===void 0){var a=i.querySelector(":checked");a!==null&&(r=ur(a),t(r))}i.__value=r,n=!1}),$c(i)}function ur(i){return"__value"in i?i.__value:i.value}const Jc=Symbol("is custom element"),Qc=Symbol("is html");function yr(i){if(cn){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;na(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var r=i.checked;na(i,"checked",null),i.checked=r}}};i.__on_r=t,Tl(t),Fc()}}function Mr(i,e){var t=Cl(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function na(i,e,t,n){var r=Cl(i);cn&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="loading"&&(i[Oc]=t),t==null?i.removeAttribute(e):typeof t!="string"&&eh(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Cl(i){return i.__attributes??(i.__attributes={[Jc]:i.nodeName.includes("-"),[Qc]:i.namespaceURI===Bc})}var co=new Map;function eh(i){var e=i.getAttribute("is")||i.nodeName,t=co.get(e);if(t)return t;co.set(e,t=[]);for(var n,r=i,a=Element.prototype;a!==r;){n=kc(r);for(var s in n)n[s].set&&t.push(s);r=zc(r)}return t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ys="170",Bi={ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},th=0,ho=1,nh=2,Pl=1,ih=2,Pn=3,Kn=0,Yt=1,Dn=2,qn=0,zi=1,uo=2,fo=3,po=4,rh=5,si=100,ah=101,sh=102,oh=103,lh=104,ch=200,hh=201,dh=202,uh=203,is=204,rs=205,fh=206,ph=207,mh=208,gh=209,_h=210,vh=211,xh=212,yh=213,Mh=214,as=0,ss=1,os=2,Hi=3,ls=4,cs=5,hs=6,ds=7,Dl=0,Sh=1,bh=2,Yn=0,Eh=1,Th=2,Ah=3,wh=4,Rh=5,Ch=6,Ph=7,Ll=300,Vi=301,Wi=302,us=303,fs=304,la=306,ps=1e3,li=1001,ms=1002,dn=1003,Dh=1004,Sr=1005,xn=1006,Sa=1007,ci=1008,Nn=1009,Ul=1010,Il=1011,fr=1012,js=1013,hi=1014,Ln=1015,mr=1016,Ks=1017,Zs=1018,Xi=1020,Nl=35902,Fl=1021,Ol=1022,hn=1023,Bl=1024,zl=1025,ki=1026,qi=1027,kl=1028,$s=1029,Gl=1030,Js=1031,Qs=1033,Kr=33776,Zr=33777,$r=33778,Jr=33779,gs=35840,_s=35841,vs=35842,xs=35843,ys=36196,Ms=37492,Ss=37496,bs=37808,Es=37809,Ts=37810,As=37811,ws=37812,Rs=37813,Cs=37814,Ps=37815,Ds=37816,Ls=37817,Us=37818,Is=37819,Ns=37820,Fs=37821,Qr=36492,Os=36494,Bs=36495,Hl=36283,zs=36284,ks=36285,Gs=36286,Lh=3200,Uh=3201,Vl=0,Ih=1,Xn="",en="srgb",ji="srgb-linear",ca="linear",_t="srgb",_i=7680,mo=519,Nh=512,Fh=513,Oh=514,Wl=515,Bh=516,zh=517,kh=518,Gh=519,Hs=35044,go="300 es",Un=2e3,ia=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ea=Math.PI/180,Vs=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function ba(i,e,t){return(1-t)*i+t*e}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:ea};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,r,a,s,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],m=n[5],g=n[8],y=r[0],f=r[3],h=r[6],A=r[1],T=r[4],M=r[7],k=r[2],w=r[5],C=r[8];return a[0]=s*y+o*A+l*k,a[3]=s*f+o*T+l*w,a[6]=s*h+o*M+l*C,a[1]=c*y+d*A+p*k,a[4]=c*f+d*T+p*w,a[7]=c*h+d*M+p*C,a[2]=u*y+m*A+g*k,a[5]=u*f+m*T+g*w,a[8]=u*h+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*a,m=c*a-s*l,g=t*p+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=p*y,e[1]=(r*c-d*n)*y,e[2]=(o*n-r*s)*y,e[3]=u*y,e[4]=(d*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Ke;function Xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){const i=ra("canvas");return i.style.display="block",i}const _o={};function hr(i){i in _o||(_o[i]=!0,console.warn(i))}function Xh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function qh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vo=[.64,.33,.3,.6,.15,.06],xo=[.2126,.7152,.0722],yo=[.3127,.329],Mo=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),So=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[ji]:{primaries:vo,whitePoint:yo,transfer:ca,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:xo,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:vo,whitePoint:yo,transfer:_t,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:xo,outputColorSpaceConfig:{drawingBufferColorSpace:en}}});let vi;class jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=ra("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=In(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kh=0;class ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ta(r[s].image)):a.push(Ta(r[s]))}else a=Ta(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class Wt extends fi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=li,r=li,a=xn,s=ci,o=hn,l=Nn,c=Wt.DEFAULT_ANISOTROPY,d=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=jn(),this.name="",this.source=new ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ll;Wt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],m=l[5],g=l[9],y=l[2],f=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(m+1)/2,k=(h+1)/2,w=(d+u)/4,C=(p+y)/4,U=(g+f)/4;return T>M&&T>k?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=w/n,a=C/n):M>k?M<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),n=w/r,a=U/r):k<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(k),n=C/a,r=U/a),this.set(n,r,a,t),this}let A=Math.sqrt((f-g)*(f-g)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(A)<.001&&(A=1),this.x=(f-g)/A,this.y=(p-y)/A,this.z=(u-d)/A,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends $h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yl extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const u=a[s+0],m=a[s+1],g=a[s+2],y=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(p!==y||l!==u||c!==m||d!==g){let f=1-o;const h=l*u+c*m+d*g+p*y,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const k=Math.sqrt(T),w=Math.atan2(k,h*A);f=Math.sin(f*w)/k,o=Math.sin(o*w)/k}const M=o*A;if(l=l*f+u*M,c=c*f+m*M,d=d*f+g*M,p=p*f+y*M,f===1-o){const k=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=k,c*=k,d*=k,p*=k}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=a[s],u=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+d*p+l*m-c*u,e[t+1]=l*g+d*u+c*p-o*m,e[t+2]=c*g+d*m+o*u-l*p,e[t+3]=d*g-o*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(a/2),u=l(n/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=u*d*p+c*m*g,this._y=c*m*p-u*d*g,this._z=c*d*g+u*m*p,this._w=c*d*p-u*m*g;break;case"YXZ":this._x=u*d*p+c*m*g,this._y=c*m*p-u*d*g,this._z=c*d*g-u*m*p,this._w=c*d*p+u*m*g;break;case"ZXY":this._x=u*d*p-c*m*g,this._y=c*m*p+u*d*g,this._z=c*d*g+u*m*p,this._w=c*d*p-u*m*g;break;case"ZYX":this._x=u*d*p-c*m*g,this._y=c*m*p+u*d*g,this._z=c*d*g-u*m*p,this._w=c*d*p+u*m*g;break;case"YZX":this._x=u*d*p+c*m*g,this._y=c*m*p+u*d*g,this._z=c*d*g-u*m*p,this._w=c*d*p-u*m*g;break;case"XZY":this._x=u*d*p-c*m*g,this._y=c*m*p-u*d*g,this._z=c*d*g+u*m*p,this._w=c*d*p+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-r*o,this._w=s*d-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=s*p+this._w*u,this._x=n*p+this._x*u,this._y=r*p+this._y*u,this._z=a*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),d=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-a*p,this.z=r+l*p+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new B,bo=new ui;class gr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,sn):sn.fromBufferAttribute(a,s),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Er.subVectors(this.max,tr),xi.subVectors(e.a,tr),yi.subVectors(e.b,tr),Mi.subVectors(e.c,tr),Bn.subVectors(yi,xi),zn.subVectors(Mi,yi),Jn.subVectors(xi,Mi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Jn.z,Jn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Jn.z,0,-Jn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Jn.y,Jn.x,0];return!wa(t,xi,yi,Mi,Er)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,xi,yi,Mi,Er))?!1:(Tr.crossVectors(Bn,zn),t=[Tr.x,Tr.y,Tr.z],wa(t,xi,yi,Mi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new B,new B,new B,new B,new B,new B,new B,new B],sn=new B,br=new gr,xi=new B,yi=new B,Mi=new B,Bn=new B,zn=new B,Jn=new B,tr=new B,Er=new B,Tr=new B,Qn=new B;function wa(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Qn.fromArray(i,a);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),d=n.dot(Qn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Qh=new gr,nr=new B,Ra=new B;class ha{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(nr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Ra)),this.expandByPoint(nr.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new B,Ca=new B,Ar=new B,kn=new B,Pa=new B,wr=new B,Da=new B;class da{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ca.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ca);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ar),o=kn.dot(this.direction),l=-kn.dot(Ar),c=kn.lengthSq(),d=Math.abs(1-s*s);let p,u,m,g;if(d>0)if(p=s*l-o,u=s*o-l,g=a*d,p>=0)if(u>=-g)if(u<=g){const y=1/d;p*=y,u*=y,m=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ca).addScaledVector(Ar,u),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,a){Pa.subVectors(t,e),wr.subVectors(n,e),Da.crossVectors(Pa,wr);let s=this.direction.dot(Da),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(kn,wr));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(kn));if(c<0||l+c>s)return null;const d=-o*kn.dot(Da);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,r,a,s,o,l,c,d,p,u,m,g,y,f){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,d,p,u,m,g,y,f)}set(e,t,n,r,a,s,o,l,c,d,p,u,m,g,y,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=m,h[7]=g,h[11]=y,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),a=1/Si.setFromMatrixColumn(e,1).length(),s=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*d,m=s*p,g=o*d,y=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,m=l*p,g=c*d,y=c*p;t[0]=u+y*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=m*o-g,t[6]=y+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,m=l*p,g=c*d,y=c*p;t[0]=u-y*o,t[4]=-s*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*d,t[9]=y-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,m=s*p,g=o*d,y=o*p;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+y,t[1]=l*p,t[5]=y*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,m=s*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-u*p,t[8]=g*p+m,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+g,t[10]=u-y*p}else if(e.order==="XZY"){const u=s*l,m=s*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+y,t[5]=s*d,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*d,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ed,e,td)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Gn.crossVectors(n,Kt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Gn.crossVectors(n,Kt)),Gn.normalize(),Rr.crossVectors(Kt,Gn),r[0]=Gn.x,r[4]=Rr.x,r[8]=Kt.x,r[1]=Gn.y,r[5]=Rr.y,r[9]=Kt.y,r[2]=Gn.z,r[6]=Rr.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],m=n[13],g=n[2],y=n[6],f=n[10],h=n[14],A=n[3],T=n[7],M=n[11],k=n[15],w=r[0],C=r[4],U=r[8],S=r[12],x=r[1],D=r[5],X=r[9],V=r[13],$=r[2],ae=r[6],Z=r[10],fe=r[14],J=r[3],ge=r[7],Se=r[11],Re=r[15];return a[0]=s*w+o*x+l*$+c*J,a[4]=s*C+o*D+l*ae+c*ge,a[8]=s*U+o*X+l*Z+c*Se,a[12]=s*S+o*V+l*fe+c*Re,a[1]=d*w+p*x+u*$+m*J,a[5]=d*C+p*D+u*ae+m*ge,a[9]=d*U+p*X+u*Z+m*Se,a[13]=d*S+p*V+u*fe+m*Re,a[2]=g*w+y*x+f*$+h*J,a[6]=g*C+y*D+f*ae+h*ge,a[10]=g*U+y*X+f*Z+h*Se,a[14]=g*S+y*V+f*fe+h*Re,a[3]=A*w+T*x+M*$+k*J,a[7]=A*C+T*D+M*ae+k*ge,a[11]=A*U+T*X+M*Z+k*Se,a[15]=A*S+T*V+M*fe+k*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],m=e[14],g=e[3],y=e[7],f=e[11],h=e[15];return g*(+a*l*p-r*c*p-a*o*u+n*c*u+r*o*m-n*l*m)+y*(+t*l*m-t*c*u+a*s*u-r*s*m+r*c*d-a*l*d)+f*(+t*c*p-t*o*m-a*s*p+n*s*m+a*o*d-n*c*d)+h*(-r*o*d-t*l*p+t*o*u+r*s*p-n*s*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],m=e[11],g=e[12],y=e[13],f=e[14],h=e[15],A=p*f*c-y*u*c+y*l*m-o*f*m-p*l*h+o*u*h,T=g*u*c-d*f*c-g*l*m+s*f*m+d*l*h-s*u*h,M=d*y*c-g*p*c+g*o*m-s*y*m-d*o*h+s*p*h,k=g*p*l-d*y*l-g*o*u+s*y*u+d*o*f-s*p*f,w=t*A+n*T+r*M+a*k;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=A*C,e[1]=(y*u*a-p*f*a-y*r*m+n*f*m+p*r*h-n*u*h)*C,e[2]=(o*f*a-y*l*a+y*r*c-n*f*c-o*r*h+n*l*h)*C,e[3]=(p*l*a-o*u*a-p*r*c+n*u*c+o*r*m-n*l*m)*C,e[4]=T*C,e[5]=(d*f*a-g*u*a+g*r*m-t*f*m-d*r*h+t*u*h)*C,e[6]=(g*l*a-s*f*a-g*r*c+t*f*c+s*r*h-t*l*h)*C,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*m+t*l*m)*C,e[8]=M*C,e[9]=(g*p*a-d*y*a-g*n*m+t*y*m+d*n*h-t*p*h)*C,e[10]=(s*y*a-g*o*a+g*n*c-t*y*c-s*n*h+t*o*h)*C,e[11]=(d*o*a-s*p*a-d*n*c+t*p*c+s*n*m-t*o*m)*C,e[12]=k*C,e[13]=(d*y*r-g*p*r+g*n*u-t*y*u-d*n*f+t*p*f)*C,e[14]=(g*o*r-s*y*r-g*n*l+t*y*l+s*n*f-t*o*f)*C,e[15]=(s*p*r-d*o*r+d*n*l-t*p*l-s*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,p=o+o,u=a*c,m=a*d,g=a*p,y=s*d,f=s*p,h=o*p,A=l*c,T=l*d,M=l*p,k=n.x,w=n.y,C=n.z;return r[0]=(1-(y+h))*k,r[1]=(m+M)*k,r[2]=(g-T)*k,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(u+h))*w,r[6]=(f+A)*w,r[7]=0,r[8]=(g+T)*C,r[9]=(f-A)*C,r[10]=(1-(u+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Si.set(r[0],r[1],r[2]).length();const s=Si.set(r[4],r[5],r[6]).length(),o=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/a,d=1/s,p=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,t.setFromRotationMatrix(on),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Un){const l=this.elements,c=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),u=(n+r)/(n-r);let m,g;if(o===Un)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===ia)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Un){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-a),u=(t+e)*c,m=(n+r)*d;let g,y;if(o===Un)g=(s+a)*p,y=-2*p;else if(o===ia)g=a*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new B,on=new At,ed=new B(0,0,0),td=new B(1,1,1),Gn=new B,Rr=new B,Kt=new B,Eo=new At,To=new ui;class yn{constructor(e=0,t=0,n=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nd=0;const Ao=new B,bi=new ui,wn=new At,Cr=new B,ir=new B,id=new B,rd=new ui,wo=new B(1,0,0),Ro=new B(0,1,0),Co=new B(0,0,1),Po={type:"added"},ad={type:"removed"},Ei={type:"childadded",child:null},La={type:"childremoved",child:null};class Ft extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,t=new yn,n=new ui,r=new B(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(wo,e)}rotateY(e){return this.rotateOnAxis(Ro,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wo,e)}translateY(e){return this.translateOnAxis(Ro,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ir,Cr,this.up):wn.lookAt(Cr,ir,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(wn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Po),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Po),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new B,Rn=new B,Ua=new B,Cn=new B,Ti=new B,Ai=new B,Do=new B,Ia=new B,Na=new B,Fa=new B,Oa=new Ct,Ba=new Ct,za=new Ct;class nn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ln.subVectors(e,t),r.cross(ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){ln.subVectors(r,t),Rn.subVectors(n,t),Ua.subVectors(e,t);const s=ln.dot(ln),o=ln.dot(Rn),l=ln.dot(Ua),c=Rn.dot(Rn),d=Rn.dot(Ua),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,m=(c*l-o*d)*u,g=(s*d-o*l)*u;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Cn.x),l.addScaledVector(s,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,n),za.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Oa,a.x),s.addScaledVector(Ba,a.y),s.addScaledVector(za,a.z),s}static isFrontFacing(e,t,n,r){return ln.subVectors(n,t),Rn.subVectors(e,t),ln.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Ti.subVectors(r,n),Ai.subVectors(a,n),Ia.subVectors(e,n);const l=Ti.dot(Ia),c=Ai.dot(Ia);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,r);const d=Ti.dot(Na),p=Ai.dot(Na);if(d>=0&&p<=d)return t.copy(r);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Ti,s);Fa.subVectors(e,a);const m=Ti.dot(Fa),g=Ai.dot(Fa);if(g>=0&&m<=g)return t.copy(a);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ai,o);const f=d*g-m*p;if(f<=0&&p-d>=0&&m-g>=0)return Do.subVectors(a,r),o=(p-d)/(p-d+(m-g)),t.copy(r).addScaledVector(Do,o);const h=1/(f+y+u);return s=y*h,o=u*h,t.copy(n).addScaledVector(Ti,s).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Hh(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ka(s,a,e+1/3),this.g=ka(s,a,e),this.b=ka(s,a,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return lt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Vt(Bt.r*255,0,255))*65536+Math.round(Vt(Bt.g*255,0,255))*256+Math.round(Vt(Bt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,r=Bt.g,a=Bt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=en){lt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,r=Bt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Pr);const n=ba(Hn.h,Pr.h,t),r=ba(Hn.s,Pr.s,t),a=ba(Hn.l,Pr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new st;st.NAMES=jl;let sd=0;class pi extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=jn(),this.name="",this.blending=zi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==rs&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kl extends pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new B,Dr=new ke;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hs,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hs&&(e.usage=this.usage),e}}class Zl extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let od=0;const Qt=new At,Ga=new Ft,wi=new B,Zt=new gr,rr=new gr,Nt=new B;class pn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?$l:Zl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new fn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Zt.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Zt.min,rr.min),Zt.expandByPoint(Nt),Nt.addVectors(Zt.max,rr.max),Zt.expandByPoint(Nt)):(Zt.expandByPoint(rr.min),Zt.expandByPoint(rr.max))}Zt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Nt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Nt.add(wi)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new B,l[U]=new B;const c=new B,d=new B,p=new B,u=new ke,m=new ke,g=new ke,y=new B,f=new B;function h(U,S,x){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,x),u.fromBufferAttribute(a,U),m.fromBufferAttribute(a,S),g.fromBufferAttribute(a,x),d.sub(c),p.sub(c),m.sub(u),g.sub(u);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),o[U].add(y),o[S].add(y),o[x].add(y),l[U].add(f),l[S].add(f),l[x].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,S=A.length;U<S;++U){const x=A[U],D=x.start,X=x.count;for(let V=D,$=D+X;V<$;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new B,M=new B,k=new B,w=new B;function C(U){k.fromBufferAttribute(r,U),w.copy(k);const S=o[U];T.copy(S),T.sub(k.multiplyScalar(k.dot(S))).normalize(),M.crossVectors(w,S);const D=M.dot(l[U])<0?-1:1;s.setXYZW(U,T.x,T.y,T.z,D)}for(let U=0,S=A.length;U<S;++U){const x=A[U],D=x.start,X=x.count;for(let V=D,$=D+X;V<$;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new B,a=new B,s=new B,o=new B,l=new B,c=new B,d=new B,p=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,f),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let h=0;h<d;h++)u[g++]=c[m++]}return new un(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],p=a[c];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new At,ei=new da,Lr=new ha,Uo=new B,Ur=new B,Ir=new B,Nr=new B,Ha=new B,Fr=new B,Io=new B,Or=new B;class $t extends Ft{constructor(e=new pn,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Fr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],p=a[l];d!==0&&(Ha.fromBufferAttribute(p,e),s?Fr.addScaledVector(Ha,d):Fr.addScaledVector(Ha.sub(t),d))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(a),ei.copy(e.ray).recast(e.near),!(Lr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Lr,Uo)===null||ei.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Lo.copy(a).invert(),ei.copy(e.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,y=u.length;g<y;g++){const f=u[g],h=s[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=A,k=T;M<k;M+=3){const w=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);r=Br(this,h,e,n,c,d,p,w,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=g,h=y;f<h;f+=3){const A=o.getX(f),T=o.getX(f+1),M=o.getX(f+2);r=Br(this,s,e,n,c,d,p,A,T,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=u.length;g<y;g++){const f=u[g],h=s[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=A,k=T;M<k;M+=3){const w=M,C=M+1,U=M+2;r=Br(this,h,e,n,c,d,p,w,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=g,h=y;f<h;f+=3){const A=f,T=f+1,M=f+2;r=Br(this,s,e,n,c,d,p,A,T,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function ld(i,e,t,n,r,a,s,o){let l;if(e.side===Yt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Kn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:i}}function Br(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Nr);const d=ld(i,e,t,n,Ur,Ir,Nr,Io);if(d){const p=new B;nn.getBarycoord(Io,Ur,Ir,Nr,p),r&&(d.uv=nn.getInterpolatedAttribute(r,o,l,c,p,new ke)),a&&(d.uv1=nn.getInterpolatedAttribute(a,o,l,c,p,new ke)),s&&(d.normal=nn.getInterpolatedAttribute(s,o,l,c,p,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};nn.getNormal(Ur,Ir,Nr,u.normal),d.face=u,d.barycoord=p}return d}class Ki extends pn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,r,s,2),g("x","z","y",1,-1,e,n,-t,r,s,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(p,2));function g(y,f,h,A,T,M,k,w,C,U,S){const x=M/C,D=k/U,X=M/2,V=k/2,$=w/2,ae=C+1,Z=U+1;let fe=0,J=0;const ge=new B;for(let Se=0;Se<Z;Se++){const Re=Se*D-V;for(let qe=0;qe<ae;qe++){const ct=qe*x-X;ge[y]=ct*A,ge[f]=Re*T,ge[h]=$,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[f]=0,ge[h]=w>0?1:-1,d.push(ge.x,ge.y,ge.z),p.push(qe/C),p.push(1-Se/U),fe+=1}}for(let Se=0;Se<U;Se++)for(let Re=0;Re<C;Re++){const qe=u+Re+ae*Se,ct=u+Re+ae*(Se+1),te=u+(Re+1)+ae*(Se+1),pe=u+(Re+1)+ae*Se;l.push(qe,ct,pe),l.push(ct,te,pe),J+=6}o.addGroup(m,J,S),m+=J,u+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Yi(i[t]);for(const r in n)e[r]=n[r]}return e}function cd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const hd={clone:Yi,merge:Ht};var dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ql extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new B,No=new ke,Fo=new ke;class tn extends Ql{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,No,Fo),t.subVectors(Fo,No)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ci=1;class fd extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const a=new tn(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const s=new tn(Ri,Ci,e,t);s.layers=this.layers,this.add(s);const o=new tn(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new tn(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ec extends Wt{constructor(e,t,n,r,a,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pd extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ec(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),a=new Zn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:qn});a.uniforms.tEquirect.value=t;const s=new $t(r,a),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=xn),new fd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Va=new B,md=new B,gd=new Ke;class Wn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Va.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gd.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new ha,zr=new B;class to{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,a=new Wn,s=new Wn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],u=r[7],m=r[8],g=r[9],y=r[10],f=r[11],h=r[12],A=r[13],T=r[14],M=r[15];if(n[0].setComponents(l-a,u-c,f-m,M-h).normalize(),n[1].setComponents(l+a,u+c,f+m,M+h).normalize(),n[2].setComponents(l+s,u+d,f+g,M+A).normalize(),n[3].setComponents(l-s,u-d,f-g,M-A).normalize(),n[4].setComponents(l-o,u-p,f-y,M-T).normalize(),t===Un)n[5].setComponents(l+o,u+p,f+y,M+T).normalize();else if(t===ia)n[5].setComponents(o,p,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function _d(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],y=p[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,p[u]=y)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const y=p[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class ua extends pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,u=t/l,m=[],g=[],y=[],f=[];for(let h=0;h<d;h++){const A=h*u-s;for(let T=0;T<c;T++){const M=T*p-a;g.push(M,-A,0),y.push(0,0,1),f.push(T/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+c*h,M=A+c*(h+1),k=A+1+c*(h+1),w=A+1+c*h;m.push(T,M,w),m.push(M,k,w)}this.setIndex(m),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
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
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cu=`uniform bool receiveShadow;
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
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
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
#endif`,gu=`struct PhysicalMaterial {
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
}`,_u=`
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`#ifdef USE_MORPHTARGETS
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
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
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,Tf=`#if DEPTH_PACKING == 3200
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
}`,Af=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Uf=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define MATCAP
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
}`,Bf=`#define NORMAL
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
}`,zf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Wf=`#define TOON
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
}`,Xf=`#define TOON
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
}`,qf=`uniform float size;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,jf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,Zf=`uniform float rotation;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:yd,alphamap_pars_fragment:Md,alphatest_fragment:Sd,alphatest_pars_fragment:bd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:Ad,batching_vertex:wd,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Gd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:jd,colorspace_pars_fragment:Kd,envmap_fragment:Zd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hu,envmap_vertex:eu,fog_vertex:tu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:ru,gradientmap_pars_fragment:au,lightmap_pars_fragment:su,lights_lambert_fragment:ou,lights_lambert_pars_fragment:lu,lights_pars_begin:cu,lights_toon_fragment:du,lights_toon_pars_fragment:uu,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:vu,lights_fragment_end:xu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:bu,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:Au,map_particle_pars_fragment:wu,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Pu,morphcolor_vertex:Du,morphnormal_vertex:Lu,morphtarget_pars_vertex:Uu,morphtarget_vertex:Iu,normal_fragment_begin:Nu,normal_fragment_maps:Fu,normal_pars_fragment:Ou,normal_pars_vertex:Bu,normal_vertex:zu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:ju,dithering_fragment:Ku,dithering_pars_fragment:Zu,roughnessmap_fragment:$u,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:sf,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:hf,tonemapping_pars_fragment:df,transmission_fragment:uf,transmission_pars_fragment:ff,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:_f,background_vert:vf,background_frag:xf,backgroundCube_vert:yf,backgroundCube_frag:Mf,cube_vert:Sf,cube_frag:bf,depth_vert:Ef,depth_frag:Tf,distanceRGBA_vert:Af,distanceRGBA_frag:wf,equirect_vert:Rf,equirect_frag:Cf,linedashed_vert:Pf,linedashed_frag:Df,meshbasic_vert:Lf,meshbasic_frag:Uf,meshlambert_vert:If,meshlambert_frag:Nf,meshmatcap_vert:Ff,meshmatcap_frag:Of,meshnormal_vert:Bf,meshnormal_frag:zf,meshphong_vert:kf,meshphong_frag:Gf,meshphysical_vert:Hf,meshphysical_frag:Vf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:qf,points_frag:Yf,shadow_vert:jf,shadow_frag:Kf,sprite_vert:Zf,sprite_frag:$f},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},_n={basic:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ht([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ht([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ht([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ht([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ht([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ht([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ht([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ht([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ht([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ht([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_n.physical={uniforms:Ht([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const kr={r:0,b:0,g:0},ni=new yn,Jf=new At;function Qf(i,e,t,n,r,a,s){const o=new st(0);let l=a===!0?0:1,c,d,p=null,u=0,m=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function y(A){let T=!1;const M=g(A);M===null?h(o,l):M&&M.isColor&&(h(M,1),T=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,s):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(A,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===la)?(d===void 0&&(d=new $t(new Ki(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Yi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ni.copy(T.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(ni)),d.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,(p!==M||u!==M.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=M,u=M.version,m=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $t(new ua(2,2),new Zn({name:"BackgroundMaterial",uniforms:Yi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||u!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=M,u=M.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,T){A.getRGB(kr,Jl(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,T,s)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:y,addToRenderList:f}}function ep(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let a=r,s=!1;function o(x,D,X,V,$){let ae=!1;const Z=p(V,X,D);a!==Z&&(a=Z,c(a.object)),ae=m(x,V,X,$),ae&&g(x,V,X,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,M(x,D,X,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function p(x,D,X){const V=X.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let ae=$[D.id];ae===void 0&&(ae={},$[D.id]=ae);let Z=ae[V];return Z===void 0&&(Z=u(l()),ae[V]=Z),Z}function u(x){const D=[],X=[],V=[];for(let $=0;$<t;$++)D[$]=0,X[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:x,attributes:{},index:null}}function m(x,D,X,V){const $=a.attributes,ae=D.attributes;let Z=0;const fe=X.getAttributes();for(const J in fe)if(fe[J].location>=0){const Se=$[J];let Re=ae[J];if(Re===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;Z++}return a.attributesNum!==Z||a.index!==V}function g(x,D,X,V){const $={},ae=D.attributes;let Z=0;const fe=X.getAttributes();for(const J in fe)if(fe[J].location>=0){let Se=ae[J];Se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),$[J]=Re,Z++}a.attributes=$,a.attributesNum=Z,a.index=V}function y(){const x=a.newAttributes;for(let D=0,X=x.length;D<X;D++)x[D]=0}function f(x){h(x,0)}function h(x,D){const X=a.newAttributes,V=a.enabledAttributes,$=a.attributeDivisors;X[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),$[x]!==D&&(i.vertexAttribDivisor(x,D),$[x]=D)}function A(){const x=a.newAttributes,D=a.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==x[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function T(x,D,X,V,$,ae,Z){Z===!0?i.vertexAttribIPointer(x,D,X,$,ae):i.vertexAttribPointer(x,D,X,V,$,ae)}function M(x,D,X,V){y();const $=V.attributes,ae=X.getAttributes(),Z=D.defaultAttributeValues;for(const fe in ae){const J=ae[fe];if(J.location>=0){let ge=$[fe];if(ge===void 0&&(fe==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),fe==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ge!==void 0){const Se=ge.normalized,Re=ge.itemSize,qe=e.get(ge);if(qe===void 0)continue;const ct=qe.buffer,te=qe.type,pe=qe.bytesPerElement,Ce=te===i.INT||te===i.UNSIGNED_INT||ge.gpuType===js;if(ge.isInterleavedBufferAttribute){const xe=ge.data,Be=xe.stride,He=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<J.locationSize;Qe++)h(J.location+Qe,xe.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<J.locationSize;Qe++)f(J.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Qe=0;Qe<J.locationSize;Qe++)T(J.location+Qe,Re/J.locationSize,te,Se,Be*pe,(He+Re/J.locationSize*Qe)*pe,Ce)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<J.locationSize;xe++)h(J.location+xe,ge.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<J.locationSize;xe++)f(J.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let xe=0;xe<J.locationSize;xe++)T(J.location+xe,Re/J.locationSize,te,Se,Re*pe,Re/J.locationSize*xe*pe,Ce)}}else if(Z!==void 0){const Se=Z[fe];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(J.location,Se);break;case 3:i.vertexAttrib3fv(J.location,Se);break;case 4:i.vertexAttrib4fv(J.location,Se);break;default:i.vertexAttrib1fv(J.location,Se)}}}}A()}function k(){U();for(const x in n){const D=n[x];for(const X in D){const V=D[X];for(const $ in V)d(V[$].object),delete V[$];delete D[X]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const X in D){const V=D[X];for(const $ in V)d(V[$].object),delete V[$];delete D[X]}delete n[x.id]}function C(x){for(const D in n){const X=n[D];if(X[x.id]===void 0)continue;const V=X[x.id];for(const $ in V)d(V[$].object),delete V[$];delete X[x.id]}}function U(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:f,disableUnusedAttributes:A}}function tp(i,e,t){let n;function r(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function l(c,d,p,u){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,p);let g=0;for(let y=0;y<p;y++)g+=d[y]*u[y];t.update(g,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function np(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:k,maxSamples:w}}function ip(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Wn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||r;return r=u,n=p.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,y=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!r||g===null||g.length===0||a&&!f)a?d(null):c();else{const A=a?0:n,T=A*4;let M=h.clippingState||null;l.value=M,M=d(g,u,T,m);for(let k=0;k!==T;++k)M[k]=t[k];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,m,g){const y=p!==null?p.length:0;let f=null;if(y!==0){if(f=l.value,g!==!0||f===null){const h=m+y*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,M=m;T!==y;++T,M+=4)s.copy(p[T]).applyMatrix4(A,o),s.normal.toArray(f,M),f[M+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function rp(i){let e=new WeakMap;function t(s,o){return o===us?s.mapping=Vi:o===fs&&(s.mapping=Wi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===us||o===fs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new pd(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class nc extends Ql{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Oo=[.125,.215,.35,.446,.526,.582],oi=20,Wa=new nc,Bo=new st;let Xa=null,qa=0,Ya=0,ja=!1;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,zo=[new B(-ai,Pi,0),new B(ai,Pi,0),new B(-Pi,0,ai),new B(Pi,0,ai),new B(0,ai,-Pi),new B(0,ai,Pi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:mr,format:hn,colorSpace:ji,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ap(a)),this._blurMaterial=sp(a,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r){const o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(Bo),d.toneMapping=Yn,d.autoClear=!1;const m=new Kl({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new $t(new Ki,m);let y=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,y=!0):(m.color.copy(Bo),y=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;Gr(r,A*T,h>2?T:0,T,T),d.setRenderTarget(r),y&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new $t(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=zo[(r-a-1)%zo.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new $t(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*oi-1),y=a/g,f=isFinite(a)?1+Math.floor(d*y):oi;f>oi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${oi}`);const h=[];let A=0;for(let C=0;C<oi;++C){const U=C/y,S=Math.exp(-U*U/2);h.push(S),C===0?A+=S:C<f&&(A+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const M=this._sizeLods[r],k=3*M*(r>T-Fi?r-T+Fi:0),w=4*(this._cubeSize-M);Gr(t,k,w,3*M,2*M),l.setRenderTarget(t),l.render(p,Wa)}}function ap(i){const e=[],t=[],n=[];let r=i;const a=i-Fi+1+Oo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-Fi?l=Oo[s-i+Fi-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,y=3,f=2,h=1,A=new Float32Array(y*g*m),T=new Float32Array(f*g*m),M=new Float32Array(h*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,U=w>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(S,y*g*w),T.set(u,f*g*w);const x=[w,w,w,w,w,w];M.set(x,h*g*w)}const k=new pn;k.setAttribute("position",new un(A,y)),k.setAttribute("uv",new un(T,f)),k.setAttribute("faceIndex",new un(M,h)),e.push(k),r>Fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Go(i,e,t){const n=new di(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sp(i,e,t){const n=new Float32Array(oi),r=new B(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:no(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ho(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Vo(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function no(){return`

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
	`}function op(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===us||l===fs,d=l===Vi||l===Wi;if(c||d){let p=e.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new ko(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new ko(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function lp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cp(i,e,t,n){const r={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const y=u.morphAttributes[g];for(let f=0,h=y.length;f<h;f++)e.remove(y[f])}u.removeEventListener("dispose",s),delete r[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const y=m[g];for(let f=0,h=y.length;f<h;f++)e.update(y[f],i.ARRAY_BUFFER)}}function c(p){const u=[],m=p.index,g=p.attributes.position;let y=0;if(m!==null){const A=m.array;y=m.version;for(let T=0,M=A.length;T<M;T+=3){const k=A[T+0],w=A[T+1],C=A[T+2];u.push(k,w,w,C,C,k)}}else if(g!==void 0){const A=g.array;y=g.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const k=T+0,w=T+1,C=T+2;u.push(k,w,w,C,C,k)}}else return;const f=new(Xl(u)?$l:Zl)(u,1);f.version=y;const h=a.get(p);h&&e.remove(h),a.set(p,f)}function d(p){const u=a.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function hp(i,e,t){let n;function r(u){n=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,m){i.drawElements(n,m,a,u*s),t.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,u*s,g),t.update(m,n,g))}function d(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,u,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,n,1)}function p(u,m,g,y){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)c(u[h]/s,m[h],y[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,a,u,0,y,0,g);let h=0;for(let A=0;A<g;A++)h+=m[A]*y[A];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function dp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function up(i,e,t){const n=new WeakMap,r=new Ct;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*k*4*p),C=new Yl(w,M,k,p);C.type=Ln,C.needsUpdate=!0;const U=T*4;for(let x=0;x<p;x++){const D=f[x],X=h[x],V=A[x],$=M*k*4*x;for(let ae=0;ae<D.count;ae++){const Z=ae*U;m===!0&&(r.fromBufferAttribute(D,ae),w[$+Z+0]=r.x,w[$+Z+1]=r.y,w[$+Z+2]=r.z,w[$+Z+3]=0),g===!0&&(r.fromBufferAttribute(X,ae),w[$+Z+4]=r.x,w[$+Z+5]=r.y,w[$+Z+6]=r.z,w[$+Z+7]=0),y===!0&&(r.fromBufferAttribute(V,ae),w[$+Z+8]=r.x,w[$+Z+9]=r.y,w[$+Z+10]=r.z,w[$+Z+11]=V.itemSize===4?r.w:1)}}u={count:p,texture:C,size:new ke(M,k)},n.set(o,u),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function fp(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return p}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class ic extends Wt{constructor(e,t,n,r,a,s,o,l,c,d=ki){if(d!==ki&&d!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ki&&(n=hi),n===void 0&&d===qi&&(n=Xi),super(null,r,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rc=new Wt,Wo=new ic(1,1),ac=new Yl,sc=new Jh,oc=new ec,Xo=[],qo=[],Yo=new Float32Array(16),jo=new Float32Array(9),Ko=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Xo[r];if(a===void 0&&(a=new Float32Array(r),Xo[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),It(t,n)}}function xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),It(t,n)}}function yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Yo.set(n),i.uniformMatrix4fv(this.addr,!1,Yo),It(t,n)}}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Wo.compareFunction=Wl,a=Wo):a=rc,t.setTexture2D(e||a,r)}function Pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sc,r)}function Dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||oc,r)}function Lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ac,r)}function Up(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return bp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Ip(i,e){i.uniform1fv(this.addr,e)}function Np(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Fp(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Op(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Bp(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zp(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kp(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gp(i,e){i.uniform1iv(this.addr,e)}function Hp(i,e){i.uniform2iv(this.addr,e)}function Vp(i,e){i.uniform3iv(this.addr,e)}function Wp(i,e){i.uniform4iv(this.addr,e)}function Xp(i,e){i.uniform1uiv(this.addr,e)}function qp(i,e){i.uniform2uiv(this.addr,e)}function Yp(i,e){i.uniform3uiv(this.addr,e)}function jp(i,e){i.uniform4uiv(this.addr,e)}function Kp(i,e,t){const n=this.cache,r=e.length,a=fa(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||rc,a[s])}function Zp(i,e,t){const n=this.cache,r=e.length,a=fa(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||sc,a[s])}function $p(i,e,t){const n=this.cache,r=e.length,a=fa(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||oc,a[s])}function Jp(i,e,t){const n=this.cache,r=e.length,a=fa(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ac,a[s])}function Qp(i){switch(i){case 5126:return Ip;case 35664:return Np;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Gp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Jp}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Up(t.type)}}class tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qp(t.type)}}class nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Zo(i,e){i.seq.push(e),i.map[e.id]=e}function im(i,e,t){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const a=Ka.exec(n),s=Ka.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Zo(t,c===void 0?new em(o,i,e):new tm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new nm(o),Zo(t,p)),t=p}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);im(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function $o(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rm=37297;let am=0;function sm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Jo=new Ke;function om(i){lt._getMatrix(Jo,lt.workingColorSpace,i);const e=`mat3( ${Jo.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sm(i.getShaderSource(e),s)}else return r}function lm(i,e){const t=om(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,e){let t;switch(e){case Eh:t="Linear";break;case Th:t="Reinhard";break;case Ah:t="Cineon";break;case wh:t="ACESFilmic";break;case Ch:t="AgX";break;case Ph:t="Neutral";break;case Rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new B;function hm(){lt.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function dr(i){return i!==""}function el(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(i){return i.replace(pm,gm)}const mm=new Map;function gm(i,e){let t=Je[e];if(t===void 0){const n=mm.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ws(t)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(_m,vm)}function vm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function il(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function ym(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Sm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case bh:e="ENVMAP_BLENDING_ADD";break}return e}function bm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Em(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=xm(t),c=ym(t),d=Mm(t),p=Sm(t),u=bm(t),m=dm(t),g=um(a),y=r.createProgram();let f,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),h.length>0&&(h+=`
`)):(f=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),h=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Yn?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,lm("linearToOutputTexel",t.outputColorSpace),hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),s=Ws(s),s=el(s,t),s=tl(s,t),o=Ws(o),o=el(o,t),o=tl(o,t),s=nl(s),o=nl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+f+s,M=A+h+o,k=$o(r,r.VERTEX_SHADER,T),w=$o(r,r.FRAGMENT_SHADER,M);r.attachShader(y,k),r.attachShader(y,w),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(D){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(k).trim(),$=r.getShaderInfoLog(w).trim();let ae=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,k,w);else{const fe=Qo(r,k,"vertex"),J=Qo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+fe+`
`+J)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||$==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ae,programLog:X,vertexShader:{log:V,prefix:f},fragmentShader:{log:$,prefix:h}})}r.deleteShader(k),r.deleteShader(w),U=new ta(r,y),S=fm(r,y)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,rm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=w,this}let Tm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wm(e),t.set(e,n)),n}}class wm{constructor(e){this.id=Tm++,this.code=e,this.usedTimes=0}}function Rm(i,e,t,n,r,a,s){const o=new eo,l=new Am,c=new Set,d=[],p=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,x,D,X,V){const $=X.fog,ae=V.geometry,Z=S.isMeshStandardMaterial?X.environment:null,fe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),J=fe&&fe.mapping===la?fe.image.height:null,ge=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Re=Se!==void 0?Se.length:0;let qe=0;ae.morphAttributes.position!==void 0&&(qe=1),ae.morphAttributes.normal!==void 0&&(qe=2),ae.morphAttributes.color!==void 0&&(qe=3);let ct,te,pe,Ce;if(ge){const me=_n[ge];ct=me.vertexShader,te=me.fragmentShader}else ct=S.vertexShader,te=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const xe=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,Qe=V.isBatchedMesh===!0,yt=!!S.map,rt=!!S.matcap,Mt=!!fe,O=!!S.aoMap,zt=!!S.lightMap,tt=!!S.bumpMap,et=!!S.normalMap,ze=!!S.displacementMap,mt=!!S.emissiveMap,Oe=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,H=S.clearcoat>0,re=S.dispersion>0,le=S.iridescence>0,ne=S.sheen>0,De=S.transmission>0,ye=_&&!!S.anisotropyMap,N=H&&!!S.clearcoatMap,ee=H&&!!S.clearcoatNormalMap,z=H&&!!S.clearcoatRoughnessMap,j=le&&!!S.iridescenceMap,se=le&&!!S.iridescenceThicknessMap,he=ne&&!!S.sheenColorMap,ie=ne&&!!S.sheenRoughnessMap,ce=!!S.specularMap,Y=!!S.specularColorMap,oe=!!S.specularIntensityMap,P=De&&!!S.transmissionMap,q=De&&!!S.thicknessMap,E=!!S.gradientMap,I=!!S.alphaMap,K=S.alphaTest>0,Q=!!S.alphaHash,de=!!S.extensions;let Le=Yn;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Ee={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:te,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Qe,batchingColor:Qe&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:rt,envMap:Mt,envMapMode:Mt&&fe.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:zt,bumpMap:tt,normalMap:et,displacementMap:u&&ze,emissiveMap:mt,normalMapObjectSpace:et&&S.normalMapType===Ih,normalMapTangentSpace:et&&S.normalMapType===Vl,metalnessMap:Oe,roughnessMap:b,anisotropy:_,anisotropyMap:ye,clearcoat:H,clearcoatMap:N,clearcoatNormalMap:ee,clearcoatRoughnessMap:z,dispersion:re,iridescence:le,iridescenceMap:j,iridescenceThicknessMap:se,sheen:ne,sheenColorMap:he,sheenRoughnessMap:ie,specularMap:ce,specularColorMap:Y,specularIntensityMap:oe,transmission:De,transmissionMap:P,thicknessMap:q,gradientMap:E,opaque:S.transparent===!1&&S.blending===zi&&S.alphaToCoverage===!1,alphaMap:I,alphaTest:K,alphaHash:Q,combine:S.combine,mapUv:yt&&y(S.map.channel),aoMapUv:O&&y(S.aoMap.channel),lightMapUv:zt&&y(S.lightMap.channel),bumpMapUv:tt&&y(S.bumpMap.channel),normalMapUv:et&&y(S.normalMap.channel),displacementMapUv:ze&&y(S.displacementMap.channel),emissiveMapUv:mt&&y(S.emissiveMap.channel),metalnessMapUv:Oe&&y(S.metalnessMap.channel),roughnessMapUv:b&&y(S.roughnessMap.channel),anisotropyMapUv:ye&&y(S.anisotropyMap.channel),clearcoatMapUv:N&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&y(S.sheenRoughnessMap.channel),specularMapUv:ce&&y(S.specularMap.channel),specularColorMapUv:Y&&y(S.specularColorMap.channel),specularIntensityMapUv:oe&&y(S.specularIntensityMap.channel),transmissionMapUv:P&&y(S.transmissionMap.channel),thicknessMapUv:q&&y(S.thicknessMap.channel),alphaMapUv:I&&y(S.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(et||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ae.attributes.uv&&(yt||I),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:mt&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:de&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&S.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const x=g[S.type];let D;if(x){const X=_n[x];D=hd.clone(X.uniforms)}else D=S.uniforms;return D}function k(S,x){let D;for(let X=0,V=d.length;X<V;X++){const $=d[X];if($.cacheKey===x){D=$,++D.usedTimes;break}}return D===void 0&&(D=new Em(i,x,S,a),d.push(D)),D}function w(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:M,acquireProgram:k,releaseProgram:w,releaseShaderCache:C,programs:d,dispose:U}}function Cm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(p,u,m,g,y,f){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:u,material:m,groupOrder:g,renderOrder:p.renderOrder,z:y,group:f},i[e]=h):(h.id=p.id,h.object=p,h.geometry=u,h.material=m,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=y,h.group=f),e++,h}function o(p,u,m,g,y,f){const h=s(p,u,m,g,y,f);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(p,u,m,g,y,f){const h=s(p,u,m,g,y,f);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(p,u){t.length>1&&t.sort(p||Pm),n.length>1&&n.sort(u||rl),r.length>1&&r.sort(u||rl)}function d(){for(let p=e,u=i.length;p<u;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function Dm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new al,i.set(n,[s])):r>=a.length?(s=new al,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new st};break;case"SpotLight":t={position:new B,direction:new B,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Im=0;function Nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fm(i){const e=new Lm,t=Um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,a=new At,s=new At;function o(c){let d=0,p=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,y=0,f=0,h=0,A=0,T=0,M=0,k=0,w=0,C=0;c.sort(Nm);for(let S=0,x=c.length;S<x;S++){const D=c[S],X=D.color,V=D.intensity,$=D.distance,ae=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*V,p+=X.g*V,u+=X.b*V;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],V);C++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,J=t.get(D);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=D.shadow.matrix,A++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(X).multiplyScalar(V),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[y]=Z;const fe=D.shadow;if(D.map&&(n.spotLightMap[k]=D.map,k++,fe.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[y]=fe.matrix,D.castShadow){const J=t.get(D);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=ae,M++}y++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(X).multiplyScalar(V),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[f]=Z,f++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const fe=D.shadow,J=t.get(D);J.shadowIntensity=fe.intensity,J.shadowBias=fe.bias,J.shadowNormalBias=fe.normalBias,J.shadowRadius=fe.radius,J.shadowMapSize=fe.mapSize,J.shadowCameraNear=fe.camera.near,J.shadowCameraFar=fe.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=ae,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(V),Z.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[h]=Z,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==M||U.numSpotMaps!==k||U.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+k-w,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=M,U.numSpotMaps=k,U.numLightProbes=C,n.version=Im++)}function l(c,d){let p=0,u=0,m=0,g=0,y=0;const f=d.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),p++}else if(T.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),s.identity(),a.copy(T.matrixWorld),a.premultiply(f),s.extractRotation(a),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),y++}}}return{setup:o,setupView:l,state:n}}function sl(i){const e=new Fm(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Om(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new sl(i),e.set(r,[o])):a>=s.length?(o=new sl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Bm extends pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zm extends pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function Hm(i,e,t){let n=new to;const r=new ke,a=new ke,s=new Ct,o=new Bm({depthPacking:Uh}),l=new zm,c={},d=t.maxTextureSize,p={[Kn]:Yt,[Yt]:Kn,[Dn]:Dn},u=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:km,fragmentShader:Gm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $t(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let h=this.type;this.render=function(w,C,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=h!==Pn&&this.type===Pn,$=h===Pn&&this.type!==Pn;for(let ae=0,Z=w.length;ae<Z;ae++){const fe=w[ae],J=fe.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ge=J.getFrameExtents();if(r.multiply(ge),a.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ge.x),r.x=a.x*ge.x,J.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ge.y),r.y=a.y*ge.y,J.mapSize.y=a.y)),J.map===null||V===!0||$===!0){const Re=this.type!==Pn?{minFilter:dn,magFilter:dn}:{};J.map!==null&&J.map.dispose(),J.map=new di(r.x,r.y,Re),J.map.texture.name=fe.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Se=J.getViewportCount();for(let Re=0;Re<Se;Re++){const qe=J.getViewport(Re);s.set(a.x*qe.x,a.y*qe.y,a.x*qe.z,a.y*qe.w),X.viewport(s),J.updateMatrices(fe,Re),n=J.getFrustum(),M(C,U,J.camera,fe,this.type)}J.isPointLightShadow!==!0&&this.type===Pn&&A(J,U),J.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(S,x,D)};function A(w,C){const U=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,U,u,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,U,m,y,null)}function T(w,C,U,S){let x=null;const D=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)x=D;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=x.uuid,V=C.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let ae=$[V];ae===void 0&&(ae=x.clone(),$[V]=ae,C.addEventListener("dispose",k)),x=ae}if(x.visible=C.visible,x.wireframe=C.wireframe,S===Pn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:p[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=i.properties.get(x);X.light=U}return x}function M(w,C,U,S,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const V=e.update(w),$=w.material;if(Array.isArray($)){const ae=V.groups;for(let Z=0,fe=ae.length;Z<fe;Z++){const J=ae[Z],ge=$[J.materialIndex];if(ge&&ge.visible){const Se=T(w,ge,S,x);w.onBeforeShadow(i,w,C,U,V,Se,J),i.renderBufferDirect(U,null,V,Se,w,J),w.onAfterShadow(i,w,C,U,V,Se,J)}}}else if($.visible){const ae=T(w,$,S,x);w.onBeforeShadow(i,w,C,U,V,ae,null),i.renderBufferDirect(U,null,V,ae,w,null),w.onAfterShadow(i,w,C,U,V,ae,null)}}const X=w.children;for(let V=0,$=X.length;V<$;V++)M(X[V],C,U,S,x)}function k(w){w.target.removeEventListener("dispose",k);for(const U in c){const S=c[U],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Vm={[as]:ss,[os]:hs,[ls]:ds,[Hi]:cs,[ss]:as,[hs]:os,[ds]:ls,[cs]:Hi};function Wm(i,e){function t(){let P=!1;const q=new Ct;let E=null;const I=new Ct(0,0,0,0);return{setMask:function(K){E!==K&&!P&&(i.colorMask(K,K,K,K),E=K)},setLocked:function(K){P=K},setClear:function(K,Q,de,Le,Ee){Ee===!0&&(K*=Le,Q*=Le,de*=Le),q.set(K,Q,de,Le),I.equals(q)===!1&&(i.clearColor(K,Q,de,Le),I.copy(q))},reset:function(){P=!1,E=null,I.set(-1,0,0,0)}}}function n(){let P=!1,q=!1,E=null,I=null,K=null;return{setReversed:function(Q){if(q!==Q){const de=e.get("EXT_clip_control");q?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT);const Le=K;K=null,this.setClear(Le)}q=Q},getReversed:function(){return q},setTest:function(Q){Q?xe(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Q){E!==Q&&!P&&(i.depthMask(Q),E=Q)},setFunc:function(Q){if(q&&(Q=Vm[Q]),I!==Q){switch(Q){case as:i.depthFunc(i.NEVER);break;case ss:i.depthFunc(i.ALWAYS);break;case os:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case ls:i.depthFunc(i.EQUAL);break;case cs:i.depthFunc(i.GEQUAL);break;case hs:i.depthFunc(i.GREATER);break;case ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}I=Q}},setLocked:function(Q){P=Q},setClear:function(Q){K!==Q&&(q&&(Q=1-Q),i.clearDepth(Q),K=Q)},reset:function(){P=!1,E=null,I=null,K=null,q=!1}}}function r(){let P=!1,q=null,E=null,I=null,K=null,Q=null,de=null,Le=null,Ee=null;return{setTest:function(me){P||(me?xe(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(me){q!==me&&!P&&(i.stencilMask(me),q=me)},setFunc:function(me,Ye,at){(E!==me||I!==Ye||K!==at)&&(i.stencilFunc(me,Ye,at),E=me,I=Ye,K=at)},setOp:function(me,Ye,at){(Q!==me||de!==Ye||Le!==at)&&(i.stencilOp(me,Ye,at),Q=me,de=Ye,Le=at)},setLocked:function(me){P=me},setClear:function(me){Ee!==me&&(i.clearStencil(me),Ee=me)},reset:function(){P=!1,q=null,E=null,I=null,K=null,Q=null,de=null,Le=null,Ee=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},u=new WeakMap,m=[],g=null,y=!1,f=null,h=null,A=null,T=null,M=null,k=null,w=null,C=new st(0,0,0),U=0,S=!1,x=null,D=null,X=null,V=null,$=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,fe=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=fe>=1):J.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=fe>=2);let ge=null,Se={};const Re=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ct=new Ct().fromArray(Re),te=new Ct().fromArray(qe);function pe(P,q,E,I){const K=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<E;de++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,I,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(q+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return Q}const Ce={};Ce[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),s.setFunc(Hi),tt(!1),et(ho),xe(i.CULL_FACE),O(qn);function xe(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Be(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function He(P,q){return p[P]!==q?(i.bindFramebuffer(P,q),p[P]=q,P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=q),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Qe(P,q){let E=m,I=!1;if(P){E=u.get(q),E===void 0&&(E=[],u.set(q,E));const K=P.textures;if(E.length!==K.length||E[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,de=K.length;Q<de;Q++)E[Q]=i.COLOR_ATTACHMENT0+Q;E.length=K.length,I=!0}}else E[0]!==i.BACK&&(E[0]=i.BACK,I=!0);I&&i.drawBuffers(E)}function yt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const rt={[si]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};rt[oh]=i.MIN,rt[lh]=i.MAX;const Mt={[ch]:i.ZERO,[hh]:i.ONE,[dh]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[fh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[rs]:i.ONE_MINUS_SRC_ALPHA,[gh]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(P,q,E,I,K,Q,de,Le,Ee,me){if(P===qn){y===!0&&(Be(i.BLEND),y=!1);return}if(y===!1&&(xe(i.BLEND),y=!0),P!==rh){if(P!==f||me!==S){if((h!==si||M!==si)&&(i.blendEquation(i.FUNC_ADD),h=si,M=si),me)switch(P){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,k=null,w=null,C.set(0,0,0),U=0,f=P,S=me}return}K=K||q,Q=Q||E,de=de||I,(q!==h||K!==M)&&(i.blendEquationSeparate(rt[q],rt[K]),h=q,M=K),(E!==A||I!==T||Q!==k||de!==w)&&(i.blendFuncSeparate(Mt[E],Mt[I],Mt[Q],Mt[de]),A=E,T=I,k=Q,w=de),(Le.equals(C)===!1||Ee!==U)&&(i.blendColor(Le.r,Le.g,Le.b,Ee),C.copy(Le),U=Ee),f=P,S=!1}function zt(P,q){P.side===Dn?Be(i.CULL_FACE):xe(i.CULL_FACE);let E=P.side===Yt;q&&(E=!E),tt(E),P.blending===zi&&P.transparent===!1?O(qn):O(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const I=P.stencilWrite;o.setTest(I),I&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function et(P){P!==th?(xe(i.CULL_FACE),P!==D&&(P===ho?i.cullFace(i.BACK):P===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),D=P}function ze(P){P!==X&&(Z&&i.lineWidth(P),X=P)}function mt(P,q,E){P?(xe(i.POLYGON_OFFSET_FILL),(V!==q||$!==E)&&(i.polygonOffset(q,E),V=q,$=E)):Be(i.POLYGON_OFFSET_FILL)}function Oe(P){P?xe(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+ae-1),ge!==P&&(i.activeTexture(P),ge=P)}function _(P,q,E){E===void 0&&(ge===null?E=i.TEXTURE0+ae-1:E=ge);let I=Se[E];I===void 0&&(I={type:void 0,texture:void 0},Se[E]=I),(I.type!==P||I.texture!==q)&&(ge!==E&&(i.activeTexture(E),ge=E),i.bindTexture(P,q||Ce[P]),I.type=P,I.texture=q)}function H(){const P=Se[ge];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(P){ct.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ct.copy(P))}function ie(P){te.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function ce(P,q){let E=c.get(q);E===void 0&&(E=new WeakMap,c.set(q,E));let I=E.get(P);I===void 0&&(I=i.getUniformBlockIndex(q,P.name),E.set(P,I))}function Y(P,q){const I=c.get(q).get(P);l.get(q)!==I&&(i.uniformBlockBinding(q,I,P.__bindingPointIndex),l.set(q,I))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ge=null,Se={},p={},u=new WeakMap,m=[],g=null,y=!1,f=null,h=null,A=null,T=null,M=null,k=null,w=null,C=new st(0,0,0),U=0,S=!1,x=null,D=null,X=null,V=null,$=null,ct.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:xe,disable:Be,bindFramebuffer:He,drawBuffers:Qe,useProgram:yt,setBlending:O,setMaterial:zt,setFlipSided:tt,setCullFace:et,setLineWidth:ze,setPolygonOffset:mt,setScissorTest:Oe,activeTexture:b,bindTexture:_,unbindTexture:H,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:j,texImage3D:se,updateUBOMapping:ce,uniformBlockBinding:Y,texStorage2D:ee,texStorage3D:z,texSubImage2D:ne,texSubImage3D:De,compressedTexSubImage2D:ye,compressedTexSubImage3D:N,scissor:he,viewport:ie,reset:oe}}function ol(i,e,t,n){const r=Xm(n);switch(t){case Fl:return i*e;case Bl:return i*e;case zl:return i*e*2;case kl:return i*e/r.components*r.byteLength;case $s:return i*e/r.components*r.byteLength;case Gl:return i*e*2/r.components*r.byteLength;case Js:return i*e*2/r.components*r.byteLength;case Ol:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case Qs:return i*e*4/r.components*r.byteLength;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:case xs:return Math.max(i,16)*Math.max(e,8)/4;case gs:case vs:return Math.max(i,8)*Math.max(e,8)/2;case ys:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ts:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qr:case Os:case Bs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hl:case zs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ks:case Gs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(i){switch(i){case Nn:case Ul:return{byteLength:1,components:1};case fr:case Il:case mr:return{byteLength:2,components:1};case Ks:case Zs:return{byteLength:2,components:4};case hi:case js:case Ln:return{byteLength:4,components:1};case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qm(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):ra("canvas")}function y(b,_,H){let re=1;const le=Oe(b);if((le.width>H||le.height>H)&&(re=H/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(re*le.width),De=Math.floor(re*le.height);p===void 0&&(p=g(ne,De));const ye=_?g(ne,De):p;return ye.width=ne,ye.height=De,ye.getContext("2d").drawImage(b,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+De+")."),ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),b;return b}function f(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,H,re,le=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=_;if(_===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),_===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),_===i.RGBA){const De=le?ca:lt.getTransfer(re);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=De===_t?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(b,_){let H;return b?_===null||_===hi||_===Xi?H=i.DEPTH24_STENCIL8:_===Ln?H=i.DEPTH32F_STENCIL8:_===fr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===Xi?H=i.DEPTH_COMPONENT24:_===Ln?H=i.DEPTH_COMPONENT32F:_===fr&&(H=i.DEPTH_COMPONENT16),H}function k(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){const _=b.target;_.removeEventListener("dispose",w),U(_),_.isVideoTexture&&d.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),x(_)}function U(b){const _=n.get(b);if(_.__webglInit===void 0)return;const H=b.source,re=u.get(H);if(re){const le=re[_.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(b),Object.keys(re).length===0&&u.delete(H)}n.remove(b)}function S(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const H=b.source,re=u.get(H);delete re[_.__cacheKey],s.memory.textures--}function x(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(_.__webglFramebuffer[re]))for(let le=0;le<_.__webglFramebuffer[re].length;le++)i.deleteFramebuffer(_.__webglFramebuffer[re][le]);else i.deleteFramebuffer(_.__webglFramebuffer[re]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[re])}else{if(Array.isArray(_.__webglFramebuffer))for(let re=0;re<_.__webglFramebuffer.length;re++)i.deleteFramebuffer(_.__webglFramebuffer[re]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let re=0;re<_.__webglColorRenderbuffer.length;re++)_.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[re]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=b.textures;for(let re=0,le=H.length;re<le;re++){const ne=n.get(H[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(H[re])}n.remove(b)}let D=0;function X(){D=0}function V(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function $(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ae(b,_){const H=n.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,b,_);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function Z(b,_){const H=n.get(b);if(b.version>0&&H.__version!==b.version){te(H,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function fe(b,_){const H=n.get(b);if(b.version>0&&H.__version!==b.version){te(H,b,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function J(b,_){const H=n.get(b);if(b.version>0&&H.__version!==b.version){pe(H,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const ge={[ps]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[ms]:i.MIRRORED_REPEAT},Se={[dn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Re={[Nh]:i.NEVER,[Gh]:i.ALWAYS,[Fh]:i.LESS,[Wl]:i.LEQUAL,[Oh]:i.EQUAL,[kh]:i.GEQUAL,[Bh]:i.GREATER,[zh]:i.NOTEQUAL};function qe(b,_){if(_.type===Ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Sa||_.magFilter===Sr||_.magFilter===ci||_.minFilter===xn||_.minFilter===Sa||_.minFilter===Sr||_.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ge[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ge[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ge[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Se[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==Sr&&_.minFilter!==ci||_.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ct(b,_){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));const re=_.source;let le=u.get(re);le===void 0&&(le={},u.set(re,le));const ne=$(_);if(ne!==b.__cacheKey){le[ne]===void 0&&(le[ne]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,H=!0),le[ne].usedTimes++;const De=le[b.__cacheKey];De!==void 0&&(le[b.__cacheKey].usedTimes--,De.usedTimes===0&&S(_)),b.__cacheKey=ne,b.__webglTexture=le[ne].texture}return H}function te(b,_,H){let re=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=i.TEXTURE_3D);const le=ct(b,_),ne=_.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+H);const De=n.get(ne);if(ne.version!==De.__version||le===!0){t.activeTexture(i.TEXTURE0+H);const ye=lt.getPrimaries(lt.workingColorSpace),N=_.colorSpace===Xn?null:lt.getPrimaries(_.colorSpace),ee=_.colorSpace===Xn||ye===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let z=y(_.image,!1,r.maxTextureSize);z=mt(_,z);const j=a.convert(_.format,_.colorSpace),se=a.convert(_.type);let he=T(_.internalFormat,j,se,_.colorSpace,_.isVideoTexture);qe(re,_);let ie;const ce=_.mipmaps,Y=_.isVideoTexture!==!0,oe=De.__version===void 0||le===!0,P=ne.dataReady,q=k(_,z);if(_.isDepthTexture)he=M(_.format===qi,_.type),oe&&(Y?t.texStorage2D(i.TEXTURE_2D,1,he,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,he,z.width,z.height,0,j,se,null));else if(_.isDataTexture)if(ce.length>0){Y&&oe&&t.texStorage2D(i.TEXTURE_2D,q,he,ce[0].width,ce[0].height);for(let E=0,I=ce.length;E<I;E++)ie=ce[E],Y?P&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ie.width,ie.height,j,se,ie.data):t.texImage2D(i.TEXTURE_2D,E,he,ie.width,ie.height,0,j,se,ie.data);_.generateMipmaps=!1}else Y?(oe&&t.texStorage2D(i.TEXTURE_2D,q,he,z.width,z.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,j,se,z.data)):t.texImage2D(i.TEXTURE_2D,0,he,z.width,z.height,0,j,se,z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Y&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,he,ce[0].width,ce[0].height,z.depth);for(let E=0,I=ce.length;E<I;E++)if(ie=ce[E],_.format!==hn)if(j!==null)if(Y){if(P)if(_.layerUpdates.size>0){const K=ol(ie.width,ie.height,_.format,_.type);for(const Q of _.layerUpdates){const de=ie.data.subarray(Q*K/ie.data.BYTES_PER_ELEMENT,(Q+1)*K/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,Q,ie.width,ie.height,1,j,de)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ie.width,ie.height,z.depth,j,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,E,he,ie.width,ie.height,z.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ie.width,ie.height,z.depth,j,se,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,E,he,ie.width,ie.height,z.depth,0,j,se,ie.data)}else{Y&&oe&&t.texStorage2D(i.TEXTURE_2D,q,he,ce[0].width,ce[0].height);for(let E=0,I=ce.length;E<I;E++)ie=ce[E],_.format!==hn?j!==null?Y?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,E,0,0,ie.width,ie.height,j,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,E,he,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?P&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ie.width,ie.height,j,se,ie.data):t.texImage2D(i.TEXTURE_2D,E,he,ie.width,ie.height,0,j,se,ie.data)}else if(_.isDataArrayTexture)if(Y){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,q,he,z.width,z.height,z.depth),P)if(_.layerUpdates.size>0){const E=ol(z.width,z.height,_.format,_.type);for(const I of _.layerUpdates){const K=z.data.subarray(I*E/z.data.BYTES_PER_ELEMENT,(I+1)*E/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,z.width,z.height,1,j,se,K)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,j,se,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,z.width,z.height,z.depth,0,j,se,z.data);else if(_.isData3DTexture)Y?(oe&&t.texStorage3D(i.TEXTURE_3D,q,he,z.width,z.height,z.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,j,se,z.data)):t.texImage3D(i.TEXTURE_3D,0,he,z.width,z.height,z.depth,0,j,se,z.data);else if(_.isFramebufferTexture){if(oe)if(Y)t.texStorage2D(i.TEXTURE_2D,q,he,z.width,z.height);else{let E=z.width,I=z.height;for(let K=0;K<q;K++)t.texImage2D(i.TEXTURE_2D,K,he,E,I,0,j,se,null),E>>=1,I>>=1}}else if(ce.length>0){if(Y&&oe){const E=Oe(ce[0]);t.texStorage2D(i.TEXTURE_2D,q,he,E.width,E.height)}for(let E=0,I=ce.length;E<I;E++)ie=ce[E],Y?P&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,j,se,ie):t.texImage2D(i.TEXTURE_2D,E,he,j,se,ie);_.generateMipmaps=!1}else if(Y){if(oe){const E=Oe(z);t.texStorage2D(i.TEXTURE_2D,q,he,E.width,E.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j,se,z)}else t.texImage2D(i.TEXTURE_2D,0,he,j,se,z);f(_)&&h(re),De.__version=ne.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function pe(b,_,H){if(_.image.length!==6)return;const re=ct(b,_),le=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const ne=n.get(le);if(le.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+H);const De=lt.getPrimaries(lt.workingColorSpace),ye=_.colorSpace===Xn?null:lt.getPrimaries(_.colorSpace),N=_.colorSpace===Xn||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const ee=_.isCompressedTexture||_.image[0].isCompressedTexture,z=_.image[0]&&_.image[0].isDataTexture,j=[];for(let I=0;I<6;I++)!ee&&!z?j[I]=y(_.image[I],!0,r.maxCubemapSize):j[I]=z?_.image[I].image:_.image[I],j[I]=mt(_,j[I]);const se=j[0],he=a.convert(_.format,_.colorSpace),ie=a.convert(_.type),ce=T(_.internalFormat,he,ie,_.colorSpace),Y=_.isVideoTexture!==!0,oe=ne.__version===void 0||re===!0,P=le.dataReady;let q=k(_,se);qe(i.TEXTURE_CUBE_MAP,_);let E;if(ee){Y&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,q,ce,se.width,se.height);for(let I=0;I<6;I++){E=j[I].mipmaps;for(let K=0;K<E.length;K++){const Q=E[K];_.format!==hn?he!==null?Y?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K,0,0,Q.width,Q.height,he,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K,ce,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K,0,0,Q.width,Q.height,he,ie,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K,ce,Q.width,Q.height,0,he,ie,Q.data)}}}else{if(E=_.mipmaps,Y&&oe){E.length>0&&q++;const I=Oe(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,q,ce,I.width,I.height)}for(let I=0;I<6;I++)if(z){Y?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,j[I].width,j[I].height,he,ie,j[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ce,j[I].width,j[I].height,0,he,ie,j[I].data);for(let K=0;K<E.length;K++){const de=E[K].image[I].image;Y?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K+1,0,0,de.width,de.height,he,ie,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K+1,ce,de.width,de.height,0,he,ie,de.data)}}else{Y?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,he,ie,j[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ce,he,ie,j[I]);for(let K=0;K<E.length;K++){const Q=E[K];Y?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K+1,0,0,he,ie,Q.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,K+1,ce,he,ie,Q.image[I])}}}f(_)&&h(i.TEXTURE_CUBE_MAP),ne.__version=le.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ce(b,_,H,re,le,ne){const De=a.convert(H.format,H.colorSpace),ye=a.convert(H.type),N=T(H.internalFormat,De,ye,H.colorSpace),ee=n.get(_),z=n.get(H);if(z.__renderTarget=_,!ee.__hasExternalTextures){const j=Math.max(1,_.width>>ne),se=Math.max(1,_.height>>ne);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,N,j,se,_.depth,0,De,ye,null):t.texImage2D(le,ne,N,j,se,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,le,z.__webglTexture,0,tt(_)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,le,z.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(b,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const re=_.depthTexture,le=re&&re.isDepthTexture?re.type:null,ne=M(_.stencilBuffer,le),De=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=tt(_);et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ne,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,b)}else{const re=_.textures;for(let le=0;le<re.length;le++){const ne=re[le],De=a.convert(ne.format,ne.colorSpace),ye=a.convert(ne.type),N=T(ne.internalFormat,De,ye,ne.colorSpace),ee=tt(_);H&&et(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,N,_.width,_.height):et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,N,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,N,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(_.depthTexture);re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const le=re.__webglTexture,ne=tt(_);if(_.depthTexture.format===ki)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(_.depthTexture.format===qi)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function He(b){const _=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const re=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),re){const le=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),_.__depthDisposeCallback=le}_.__boundDepthTexture=re}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Be(_.__webglFramebuffer,b)}else if(H){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]===void 0)_.__webglDepthbuffer[re]=i.createRenderbuffer(),xe(_.__webglDepthbuffer[re],b,!1);else{const le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),xe(_.__webglDepthbuffer,b,!1);else{const re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(b,_,H){const re=n.get(b);_!==void 0&&Ce(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&He(b)}function yt(b){const _=b.texture,H=n.get(b),re=n.get(_);b.addEventListener("dispose",C);const le=b.textures,ne=b.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=_.version,s.memory.textures++),ne){H.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[ye]=[];for(let N=0;N<_.mipmaps.length;N++)H.__webglFramebuffer[ye][N]=i.createFramebuffer()}else H.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let ye=0;ye<_.mipmaps.length;ye++)H.__webglFramebuffer[ye]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(De)for(let ye=0,N=le.length;ye<N;ye++){const ee=n.get(le[ye]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&et(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const N=le[ye];H.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ye]);const ee=a.convert(N.format,N.colorSpace),z=a.convert(N.type),j=T(N.internalFormat,ee,z,N.colorSpace,b.isXRRenderTarget===!0),se=tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,H.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),qe(i.TEXTURE_CUBE_MAP,_);for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0)for(let N=0;N<_.mipmaps.length;N++)Ce(H.__webglFramebuffer[ye][N],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,N);else Ce(H.__webglFramebuffer[ye],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);f(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ye=0,N=le.length;ye<N;ye++){const ee=le[ye],z=n.get(ee);t.bindTexture(i.TEXTURE_2D,z.__webglTexture),qe(i.TEXTURE_2D,ee),Ce(H.__webglFramebuffer,b,ee,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),f(ee)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ye=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),qe(ye,_),_.mipmaps&&_.mipmaps.length>0)for(let N=0;N<_.mipmaps.length;N++)Ce(H.__webglFramebuffer[N],b,_,i.COLOR_ATTACHMENT0,ye,N);else Ce(H.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ye,0);f(_)&&h(ye),t.unbindTexture()}b.depthBuffer&&He(b)}function rt(b){const _=b.textures;for(let H=0,re=_.length;H<re;H++){const le=_[H];if(f(le)){const ne=A(b),De=n.get(le).__webglTexture;t.bindTexture(ne,De),h(ne),t.unbindTexture()}}}const Mt=[],O=[];function zt(b){if(b.samples>0){if(et(b)===!1){const _=b.textures,H=b.width,re=b.height;let le=i.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(b),ye=_.length>1;if(ye)for(let N=0;N<_.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let N=0;N<_.length;N++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[N]);const ee=n.get(_[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,re,0,0,H,re,le,i.NEAREST),l===!0&&(Mt.length=0,O.length=0,Mt.push(i.COLOR_ATTACHMENT0+N),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Mt.push(ne),O.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let N=0;N<_.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,De.__webglColorRenderbuffer[N]);const ee=n.get(_[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function tt(b){return Math.min(r.maxSamples,b.samples)}function et(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ze(b){const _=s.render.frame;d.get(b)!==_&&(d.set(b,_),b.update())}function mt(b,_){const H=b.colorSpace,re=b.format,le=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==ji&&H!==Xn&&(lt.getTransfer(H)===_t?(re!==hn||le!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=ae,this.setTexture2DArray=Z,this.setTexture3D=fe,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=et}function Ym(i,e){function t(n,r=Xn){let a;const s=lt.getTransfer(r);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ks)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.BYTE;if(n===Il)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===js)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===hn)return i.RGBA;if(n===Bl)return i.LUMINANCE;if(n===zl)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===$s)return i.RED_INTEGER;if(n===Gl)return i.RG;if(n===Js)return i.RG_INTEGER;if(n===Qs)return i.RGBA_INTEGER;if(n===Kr||n===Zr||n===$r||n===Jr)if(s===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gs||n===_s||n===vs||n===xs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===gs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_s)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Ms||n===Ss)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ys||n===Ms)return s===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ss)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bs||n===Es||n===Ts||n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===bs)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Es)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ts)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===As)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cs)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ps)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ds)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ls)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Us)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Is)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ns)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fs)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Os||n===Bs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Qr)return s===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Os)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hl||n===zs||n===ks||n===Gs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Qr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class jm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),h=this._getHandJoint(c,y);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Wt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:Zm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends fi{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,m=null,g=null;const y=new Jm,f=t.getContextAttributes();let h=null,A=null;const T=[],M=[],k=new ke;let w=null;const C=new tn;C.viewport=new Ct;const U=new tn;U.viewport=new Ct;const S=[C,U],x=new jm;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=T[te];return pe===void 0&&(pe=new Za,T[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=T[te];return pe===void 0&&(pe=new Za,T[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=T[te];return pe===void 0&&(pe=new Za,T[te]=pe),pe.getHandSpace()};function V(te){const pe=M.indexOf(te.inputSource);if(pe===-1)return;const Ce=T[pe];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||s),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ae);for(let te=0;te<T.length;te++){const pe=M[te];pe!==null&&(M[te]=null,T[te].disconnect(pe))}D=null,X=null,y.reset(),e.setRenderTarget(h),m=null,u=null,p=null,r=null,A=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ae),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),r.renderState.layers===void 0){const pe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new di(m.framebufferWidth,m.framebufferHeight,{format:hn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let pe=null,Ce=null,xe=null;f.depth&&(xe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=f.stencil?qi:ki,Ce=f.stencil?Xi:hi);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};p=new XRWebGLBinding(r,t),u=p.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new di(u.textureWidth,u.textureHeight,{format:hn,type:Nn,depthTexture:new ic(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(te){for(let pe=0;pe<te.removed.length;pe++){const Ce=te.removed[pe],xe=M.indexOf(Ce);xe>=0&&(M[xe]=null,T[xe].disconnect(Ce))}for(let pe=0;pe<te.added.length;pe++){const Ce=te.added[pe];let xe=M.indexOf(Ce);if(xe===-1){for(let He=0;He<T.length;He++)if(He>=M.length){M.push(Ce),xe=He;break}else if(M[He]===null){M[He]=Ce,xe=He;break}if(xe===-1)break}const Be=T[xe];Be&&Be.connect(Ce)}}const Z=new B,fe=new B;function J(te,pe,Ce){Z.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(Ce.matrixWorld);const xe=Z.distanceTo(fe),Be=pe.projectionMatrix.elements,He=Ce.projectionMatrix.elements,Qe=Be[14]/(Be[10]-1),yt=Be[14]/(Be[10]+1),rt=(Be[9]+1)/Be[5],Mt=(Be[9]-1)/Be[5],O=(Be[8]-1)/Be[0],zt=(He[8]+1)/He[0],tt=Qe*O,et=Qe*zt,ze=xe/(-O+zt),mt=ze*-O;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Be[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Oe=Qe+ze,b=yt+ze,_=tt-mt,H=et+(xe-mt),re=rt*yt/b*Oe,le=Mt*yt/b*Oe;te.projectionMatrix.makePerspective(_,H,re,le,Oe,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let pe=te.near,Ce=te.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),x.near=U.near=C.near=pe,x.far=U.far=C.far=Ce,(D!==x.near||X!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,X=x.far),C.layers.mask=te.layers.mask|2,U.layers.mask=te.layers.mask|4,x.layers.mask=C.layers.mask|U.layers.mask;const xe=te.parent,Be=x.cameras;ge(x,xe);for(let He=0;He<Be.length;He++)ge(Be[He],xe);Be.length===2?J(x,C,U):x.projectionMatrix.copy(C.projectionMatrix),Se(te,x,xe)};function Se(te,pe,Ce){Ce===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Vs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Re=null;function qe(te,pe){if(d=pe.getViewerPose(c||s),g=pe,d!==null){const Ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let xe=!1;Ce.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let He=0;He<Ce.length;He++){const Qe=Ce[He];let yt=null;if(m!==null)yt=m.getViewport(Qe);else{const Mt=p.getViewSubImage(u,Qe);yt=Mt.viewport,He===0&&(e.setRenderTargetTextures(A,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(A))}let rt=S[He];rt===void 0&&(rt=new tn,rt.layers.enable(He),rt.viewport=new Ct,S[He]=rt),rt.matrix.fromArray(Qe.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Qe.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(yt.x,yt.y,yt.width,yt.height),He===0&&(x.matrix.copy(rt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(rt)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const He=p.getDepthInformation(Ce[0]);He&&He.isValid&&He.texture&&y.init(e,He,r.renderState)}}for(let Ce=0;Ce<T.length;Ce++){const xe=M[Ce],Be=T[Ce];xe!==null&&Be!==void 0&&Be.update(xe,pe,c||s)}Re&&Re(te,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const ct=new tc;ct.setAnimationLoop(qe),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}}const ii=new yn,eg=new At;function tg(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Jl(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,A,T,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),p(f,h)):h.isMeshPhongMaterial?(a(f,h),d(f,h)):h.isMeshStandardMaterial?(a(f,h),u(f,h),h.isMeshPhysicalMaterial&&m(f,h,M)):h.isMeshMatcapMaterial?(a(f,h),g(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),y(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,A,T):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Yt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Yt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,M=A.envMapRotation;T&&(f.envMap.value=T,ii.copy(M),ii.x*=-1,ii.y*=-1,ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),f.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(ii)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,A,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*A,f.scale.value=T*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,A){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function y(f,h){const A=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ng(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const M=T.program;n.uniformBlockBinding(A,M)}function c(A,T){let M=r[A.id];M===void 0&&(g(A),M=d(A),r[A.id]=M,A.addEventListener("dispose",f));const k=T.program;n.updateUBOMapping(A,k);const w=e.render.frame;a[A.id]!==w&&(u(A),a[A.id]=w)}function d(A){const T=p();A.__bindingPointIndex=T;const M=i.createBuffer(),k=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,k,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function p(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){const T=r[A.id],M=A.uniforms,k=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,C=M.length;w<C;w++){const U=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,x=U.length;S<x;S++){const D=U[S];if(m(D,w,S,k)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let ae=0;ae<V.length;ae++){const Z=V[ae],fe=y(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,X+$,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,$),$+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,M,k){const w=A.value,C=T+"_"+M;if(k[C]===void 0)return typeof w=="number"||typeof w=="boolean"?k[C]=w:k[C]=w.clone(),!0;{const U=k[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return k[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(A){const T=A.uniforms;let M=0;const k=16;for(let C=0,U=T.length;C<U;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,D=S.length;x<D;x++){const X=S[x],V=Array.isArray(X.value)?X.value:[X.value];for(let $=0,ae=V.length;$<ae;$++){const Z=V[$],fe=y(Z),J=M%k,ge=J%fe.boundary,Se=J+ge;M+=ge,Se!==0&&k-Se<fe.storage&&(M+=k-Se),X.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=fe.storage}}}const w=M%k;return w>0&&(M+=k-w),A.__size=M,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function f(A){const T=A.target;T.removeEventListener("dispose",f);const M=s.indexOf(T.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function h(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class ig{constructor(e={}){const{canvas:t=Wh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),y=new Int32Array(4);let f=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Yn,this.toneMappingExposure=1;const M=this;let k=!1,w=0,C=0,U=null,S=-1,x=null;const D=new Ct,X=new Ct;let V=null;const $=new st(0);let ae=0,Z=t.width,fe=t.height,J=1,ge=null,Se=null;const Re=new Ct(0,0,Z,fe),qe=new Ct(0,0,Z,fe);let ct=!1;const te=new to;let pe=!1,Ce=!1;const xe=new At,Be=new At,He=new B,Qe=new Ct,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Mt(){return U===null?J:1}let O=n;function zt(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Q,!1),O===null){const L="webgl2";if(O=zt(L,v),O===null)throw zt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let tt,et,ze,mt,Oe,b,_,H,re,le,ne,De,ye,N,ee,z,j,se,he,ie,ce,Y,oe,P;function q(){tt=new lp(O),tt.init(),Y=new Ym(O,tt),et=new np(O,tt,e,Y),ze=new Wm(O,tt),et.reverseDepthBuffer&&u&&ze.buffers.depth.setReversed(!0),mt=new dp(O),Oe=new Cm,b=new qm(O,tt,ze,Oe,et,Y,mt),_=new rp(M),H=new op(M),re=new _d(O),oe=new ep(O,re),le=new cp(O,re,mt,oe),ne=new fp(O,le,re,mt),he=new up(O,et,b),z=new ip(Oe),De=new Rm(M,_,H,tt,et,oe,z),ye=new tg(M,Oe),N=new Dm,ee=new Om(tt),se=new Qf(M,_,H,ze,ne,m,l),j=new Hm(M,ne,et),P=new ng(O,mt,et,ze),ie=new tp(O,tt,mt),ce=new hp(O,tt,mt),mt.programs=De.programs,M.capabilities=et,M.extensions=tt,M.properties=Oe,M.renderLists=N,M.shadowMap=j,M.state=ze,M.info=mt}q();const E=new Qm(M,O);this.xr=E,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(Z,fe,!1))},this.getSize=function(v){return v.set(Z,fe)},this.setSize=function(v,L,G=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,fe=L,t.width=Math.floor(v*J),t.height=Math.floor(L*J),G===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Z*J,fe*J).floor()},this.setDrawingBufferSize=function(v,L,G){Z=v,fe=L,J=G,t.width=Math.floor(v*G),t.height=Math.floor(L*G),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,L,G,W){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,L,G,W),ze.viewport(D.copy(Re).multiplyScalar(J).round())},this.getScissor=function(v){return v.copy(qe)},this.setScissor=function(v,L,G,W){v.isVector4?qe.set(v.x,v.y,v.z,v.w):qe.set(v,L,G,W),ze.scissor(X.copy(qe).multiplyScalar(J).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(v){ze.setScissorTest(ct=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(v=!0,L=!0,G=!0){let W=0;if(v){let F=!1;if(U!==null){const ue=U.texture.format;F=ue===Qs||ue===Js||ue===$s}if(F){const ue=U.texture.type,_e=ue===Nn||ue===hi||ue===fr||ue===Xi||ue===Ks||ue===Zs,Ae=se.getClearColor(),Ue=se.getClearAlpha(),We=Ae.r,je=Ae.g,Ie=Ae.b;_e?(g[0]=We,g[1]=je,g[2]=Ie,g[3]=Ue,O.clearBufferuiv(O.COLOR,0,g)):(y[0]=We,y[1]=je,y[2]=Ie,y[3]=Ue,O.clearBufferiv(O.COLOR,0,y))}else W|=O.COLOR_BUFFER_BIT}L&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),N.dispose(),ee.dispose(),Oe.dispose(),_.dispose(),H.dispose(),ne.dispose(),oe.dispose(),P.dispose(),De.dispose(),E.dispose(),E.removeEventListener("sessionstart",Fe),E.removeEventListener("sessionend",Ze),Ge.stop()};function I(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const v=mt.autoReset,L=j.enabled,G=j.autoUpdate,W=j.needsUpdate,F=j.type;q(),mt.autoReset=v,j.enabled=L,j.autoUpdate=G,j.needsUpdate=W,j.type=F}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function de(v){const L=v.target;L.removeEventListener("dispose",de),Le(L)}function Le(v){Ee(v),Oe.remove(v)}function Ee(v){const L=Oe.get(v).programs;L!==void 0&&(L.forEach(function(G){De.releaseProgram(G)}),v.isShaderMaterial&&De.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,G,W,F,ue){L===null&&(L=yt);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Ae=pa(v,L,G,W,F);ze.setMaterial(W,_e);let Ue=G.index,We=1;if(W.wireframe===!0){if(Ue=le.getWireframeAttribute(G),Ue===void 0)return;We=2}const je=G.drawRange,Ie=G.attributes.position;let ht=je.start*We,bt=(je.start+je.count)*We;ue!==null&&(ht=Math.max(ht,ue.start*We),bt=Math.min(bt,(ue.start+ue.count)*We)),Ue!==null?(ht=Math.max(ht,0),bt=Math.min(bt,Ue.count)):Ie!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ie.count));const Et=bt-ht;if(Et<0||Et===1/0)return;oe.setup(F,W,Ae,G,Ue);let Xt,ut=ie;if(Ue!==null&&(Xt=re.get(Ue),ut=ce,ut.setIndex(Xt)),F.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*Mt()),ut.setMode(O.LINES)):ut.setMode(O.TRIANGLES);else if(F.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),ze.setLineWidth(Ne*Mt()),F.isLineSegments?ut.setMode(O.LINES):F.isLineLoop?ut.setMode(O.LINE_LOOP):ut.setMode(O.LINE_STRIP)}else F.isPoints?ut.setMode(O.POINTS):F.isSprite&&ut.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,Mn=F._multiDrawCounts,ft=F._multiDrawCount,an=Ue?re.get(Ue).bytesPerElement:1,gi=Oe.get(W).currentProgram.getUniforms();for(let jt=0;jt<ft;jt++)gi.setValue(O,"_gl_DrawID",jt),ut.render(Ne[jt]/an,Mn[jt])}else if(F.isInstancedMesh)ut.renderInstances(ht,Et,F.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mn=Math.min(G.instanceCount,Ne);ut.renderInstances(ht,Et,Mn)}else ut.render(ht,Et)};function me(v,L,G){v.transparent===!0&&v.side===Dn&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,rn(v,L,G),v.side=Kn,v.needsUpdate=!0,rn(v,L,G),v.side=Dn):rn(v,L,G)}this.compile=function(v,L,G=null){G===null&&(G=v),h=ee.get(G),h.init(L),T.push(h),G.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),v!==G&&v.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const W=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ue=F.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Ae=ue[_e];me(Ae,G,F),W.add(Ae)}else me(ue,G,F),W.add(ue)}),T.pop(),h=null,W},this.compileAsync=function(v,L,G=null){const W=this.compile(v,L,G);return new Promise(F=>{function ue(){if(W.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(v);return}setTimeout(ue,10)}tt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function at(v){Ye&&Ye(v)}function Fe(){Ge.stop()}function Ze(){Ge.start()}const Ge=new tc;Ge.setAnimationLoop(at),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(v){Ye=v,E.setAnimationLoop(v),v===null?Ge.stop():Ge.start()},E.addEventListener("sessionstart",Fe),E.addEventListener("sessionend",Ze),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(L),L=E.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,L,U),h=ee.get(v,T.length),h.init(L),T.push(h),Be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),te.setFromProjectionMatrix(Be),Ce=this.localClippingEnabled,pe=z.init(this.clippingPlanes,Ce),f=N.get(v,A.length),f.init(),A.push(f),E.enabled===!0&&E.isPresenting===!0){const ue=M.xr.getDepthSensingMesh();ue!==null&&Ve(ue,L,-1/0,M.sortObjects)}Ve(v,L,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(ge,Se),rt=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,rt&&se.addToRenderList(f,v),this.info.render.frame++,pe===!0&&z.beginShadows();const G=h.state.shadowsArray;j.render(G,v,L),pe===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=f.opaque,F=f.transmissive;if(h.setupLights(),L.isArrayCamera){const ue=L.cameras;if(F.length>0)for(let _e=0,Ae=ue.length;_e<Ae;_e++){const Ue=ue[_e];Te(W,F,v,Ue)}rt&&se.render(v);for(let _e=0,Ae=ue.length;_e<Ae;_e++){const Ue=ue[_e];Xe(f,v,Ue,Ue.viewport)}}else F.length>0&&Te(W,F,v,L),rt&&se.render(v),Xe(f,v,L);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(M,v,L),oe.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],pe===!0&&z.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?f=A[A.length-1]:f=null};function Ve(v,L,G,W){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){W&&Qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Be);const _e=ne.update(v),Ae=v.material;Ae.visible&&f.push(v,_e,Ae,G,Qe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){const _e=ne.update(v),Ae=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qe.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Qe.copy(_e.boundingSphere.center)),Qe.applyMatrix4(v.matrixWorld).applyMatrix4(Be)),Array.isArray(Ae)){const Ue=_e.groups;for(let We=0,je=Ue.length;We<je;We++){const Ie=Ue[We],ht=Ae[Ie.materialIndex];ht&&ht.visible&&f.push(v,_e,ht,G,Qe.z,Ie)}}else Ae.visible&&f.push(v,_e,Ae,G,Qe.z,null)}}const ue=v.children;for(let _e=0,Ae=ue.length;_e<Ae;_e++)Ve(ue[_e],L,G,W)}function Xe(v,L,G,W){const F=v.opaque,ue=v.transmissive,_e=v.transparent;h.setupLightsView(G),pe===!0&&z.setGlobalState(M.clippingPlanes,G),W&&ze.viewport(D.copy(W)),F.length>0&&nt(F,L,G),ue.length>0&&nt(ue,L,G),_e.length>0&&nt(_e,L,G),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Te(v,L,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?mr:Nn,minFilter:ci,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ue=h.state.transmissionRenderTarget[W.id],_e=W.viewport||D;ue.setSize(_e.z,_e.w);const Ae=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor($),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),rt&&se.render(G);const Ue=M.toneMapping;M.toneMapping=Yn;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),pe===!0&&z.setGlobalState(M.clippingPlanes,W),nt(v,G,W),b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue),tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ie=0,ht=L.length;Ie<ht;Ie++){const bt=L[Ie],Et=bt.object,Xt=bt.geometry,ut=bt.material,Ne=bt.group;if(ut.side===Dn&&Et.layers.test(W.layers)){const Mn=ut.side;ut.side=Yt,ut.needsUpdate=!0,Pt(Et,G,W,Xt,ut,Ne),ut.side=Mn,ut.needsUpdate=!0,je=!0}}je===!0&&(b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue))}M.setRenderTarget(Ae),M.setClearColor($,ae),We!==void 0&&(W.viewport=We),M.toneMapping=Ue}function nt(v,L,G){const W=L.isScene===!0?L.overrideMaterial:null;for(let F=0,ue=v.length;F<ue;F++){const _e=v[F],Ae=_e.object,Ue=_e.geometry,We=W===null?_e.material:W,je=_e.group;Ae.layers.test(G.layers)&&Pt(Ae,L,G,Ue,We,je)}}function Pt(v,L,G,W,F,ue){v.onBeforeRender(M,L,G,W,F,ue),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(M,L,G,W,v,ue),F.transparent===!0&&F.side===Dn&&F.forceSinglePass===!1?(F.side=Yt,F.needsUpdate=!0,M.renderBufferDirect(G,L,W,F,v,ue),F.side=Kn,F.needsUpdate=!0,M.renderBufferDirect(G,L,W,F,v,ue),F.side=Dn):M.renderBufferDirect(G,L,W,F,v,ue),v.onAfterRender(M,L,G,W,F,ue)}function rn(v,L,G){L.isScene!==!0&&(L=yt);const W=Oe.get(v),F=h.state.lights,ue=h.state.shadowsArray,_e=F.state.version,Ae=De.getParameters(v,F.state,ue,L,G),Ue=De.getProgramCacheKey(Ae);let We=W.programs;W.environment=v.isMeshStandardMaterial?L.environment:null,W.fog=L.fog,W.envMap=(v.isMeshStandardMaterial?H:_).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,We===void 0&&(v.addEventListener("dispose",de),We=new Map,W.programs=We);let je=We.get(Ue);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===_e)return _r(v,Ae),je}else Ae.uniforms=De.getUniforms(v),v.onBeforeCompile(Ae,M),je=De.acquireProgram(Ae,Ue),We.set(Ue,je),W.uniforms=Ae.uniforms;const Ie=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ie.clippingPlanes=z.uniform),_r(v,Ae),W.needsLights=St(v),W.lightsStateVersion=_e,W.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function mi(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=ta.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function _r(v,L){const G=Oe.get(v);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function pa(v,L,G,W,F){L.isScene!==!0&&(L=yt),b.resetTextureUnits();const ue=L.fog,_e=W.isMeshStandardMaterial?L.environment:null,Ae=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ji,Ue=(W.isMeshStandardMaterial?H:_).get(W.envMap||_e),We=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,je=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,bt=!!G.morphAttributes.color;let Et=Yn;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Et=M.toneMapping);const Xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=Xt!==void 0?Xt.length:0,Ne=Oe.get(W),Mn=h.state.lights;if(pe===!0&&(Ce===!0||v!==x)){const Jt=v===x&&W.id===S;z.setState(W,v,Jt)}let ft=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Mn.state.version||Ne.outputColorSpace!==Ae||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==Ue||W.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==z.numPlanes||Ne.numIntersection!==z.numIntersection)||Ne.vertexAlphas!==We||Ne.vertexTangents!==je||Ne.morphTargets!==Ie||Ne.morphNormals!==ht||Ne.morphColors!==bt||Ne.toneMapping!==Et||Ne.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Ne.__version=W.version);let an=Ne.currentProgram;ft===!0&&(an=rn(W,L,F));let gi=!1,jt=!1,$i=!1;const Tt=an.getUniforms(),mn=Ne.uniforms;if(ze.useProgram(an.program)&&(gi=!0,jt=!0,$i=!0),W.id!==S&&(S=W.id,jt=!0),gi||x!==v){ze.buffers.depth.getReversed()?(xe.copy(v.projectionMatrix),qh(xe),Yh(xe),Tt.setValue(O,"projectionMatrix",xe)):Tt.setValue(O,"projectionMatrix",v.projectionMatrix),Tt.setValue(O,"viewMatrix",v.matrixWorldInverse);const Fn=Tt.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,He.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&Tt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,jt=!0,$i=!0)}if(F.isSkinnedMesh){Tt.setOptional(O,F,"bindMatrix"),Tt.setOptional(O,F,"bindMatrixInverse");const Jt=F.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Tt.setValue(O,"boneTexture",Jt.boneTexture,b))}F.isBatchedMesh&&(Tt.setOptional(O,F,"batchingTexture"),Tt.setValue(O,"batchingTexture",F._matricesTexture,b),Tt.setOptional(O,F,"batchingIdTexture"),Tt.setValue(O,"batchingIdTexture",F._indirectTexture,b),Tt.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(O,"batchingColorTexture",F._colorsTexture,b));const Ji=G.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&he.update(F,G,an),(jt||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Tt.setValue(O,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mn.envMap.value=Ue,mn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&L.environment!==null&&(mn.envMapIntensity.value=L.environmentIntensity),jt&&(Tt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&ma(mn,$i),ue&&W.fog===!0&&ye.refreshFogUniforms(mn,ue),ye.refreshMaterialUniforms(mn,W,J,fe,h.state.transmissionRenderTarget[v.id]),ta.upload(O,mi(Ne),mn,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ta.upload(O,mi(Ne),mn,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(O,"center",F.center),Tt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(O,"normalMatrix",F.normalMatrix),Tt.setValue(O,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Jt=W.uniformsGroups;for(let Fn=0,On=Jt.length;Fn<On;Fn++){const ao=Jt[Fn];P.update(ao,an),P.bind(ao,an)}}return an}function ma(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function St(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,L,G){Oe.get(v.texture).__webglTexture=L,Oe.get(v.depthTexture).__webglTexture=G;const W=Oe.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const G=Oe.get(v);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,G=0){U=v,w=L,C=G;let W=!0,F=null,ue=!1,_e=!1;if(v){const Ue=Oe.get(v);if(Ue.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Ue.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(Ue.__hasExternalTextures)b.rebindTextures(v,Oe.get(v.texture).__webglTexture,Oe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ie=v.depthTexture;if(Ue.__boundDepthTexture!==Ie){if(Ie!==null&&Oe.has(Ie)&&(v.width!==Ie.image.width||v.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}const We=v.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(_e=!0);const je=Oe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(je[L])?F=je[L][G]:F=je[L],ue=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?F=Oe.get(v).__webglMultisampledFramebuffer:Array.isArray(je)?F=je[G]:F=je,D.copy(v.viewport),X.copy(v.scissor),V=v.scissorTest}else D.copy(Re).multiplyScalar(J).floor(),X.copy(qe).multiplyScalar(J).floor(),V=ct;if(ze.bindFramebuffer(O.FRAMEBUFFER,F)&&W&&ze.drawBuffers(v,F),ze.viewport(D),ze.scissor(X),ze.setScissorTest(V),ue){const Ue=Oe.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ue.__webglTexture,G)}else if(_e){const Ue=Oe.get(v.texture),We=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,We)}S=-1},this.readRenderTargetPixels=function(v,L,G,W,F,ue,_e){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){ze.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Ue=v.texture,We=Ue.format,je=Ue.type;if(!et.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-W&&G>=0&&G<=v.height-F&&O.readPixels(L,G,W,F,Y.convert(We),Y.convert(je),ue)}finally{const Ue=U!==null?Oe.get(U).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,L,G,W,F,ue,_e){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Oe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){const Ue=v.texture,We=Ue.format,je=Ue.type;if(!et.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-W&&G>=0&&G<=v.height-F){ze.bindFramebuffer(O.FRAMEBUFFER,Ae);const Ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(L,G,W,F,Y.convert(We),Y.convert(je),0);const ht=U!==null?Oe.get(U).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,ht);const bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Xh(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.deleteBuffer(Ie),O.deleteSync(bt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,G=0){v.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(v.image.width*W),ue=Math.floor(v.image.height*W),_e=L!==null?L.x:0,Ae=L!==null?L.y:0;b.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,_e,Ae,F,ue),ze.unbindTexture()},this.copyTextureToTexture=function(v,L,G=null,W=null,F=0){v.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],L=arguments[2],F=arguments[3]||0,G=null);let ue,_e,Ae,Ue,We,je,Ie,ht,bt;const Et=v.isCompressedTexture?v.mipmaps[F]:v.image;G!==null?(ue=G.max.x-G.min.x,_e=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,Ue=G.min.x,We=G.min.y,je=G.isBox3?G.min.z:0):(ue=Et.width,_e=Et.height,Ae=Et.depth||1,Ue=0,We=0,je=0),W!==null?(Ie=W.x,ht=W.y,bt=W.z):(Ie=0,ht=0,bt=0);const Xt=Y.convert(L.format),ut=Y.convert(L.type);let Ne;L.isData3DTexture?(b.setTexture3D(L,0),Ne=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(b.setTexture2DArray(L,0),Ne=O.TEXTURE_2D_ARRAY):(b.setTexture2D(L,0),Ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);const Mn=O.getParameter(O.UNPACK_ROW_LENGTH),ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),gi=O.getParameter(O.UNPACK_SKIP_ROWS),jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,We),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const $i=v.isDataArrayTexture||v.isData3DTexture,Tt=L.isDataArrayTexture||L.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const mn=Oe.get(v),Ji=Oe.get(L),Jt=Oe.get(mn.__renderTarget),Fn=Oe.get(Ji.__renderTarget);ze.bindFramebuffer(O.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Ae;On++)$i&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(v).__webglTexture,F,je+On),v.isDepthTexture?(Tt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(L).__webglTexture,F,bt+On),O.blitFramebuffer(Ue,We,ue,_e,Ie,ht,ue,_e,O.DEPTH_BUFFER_BIT,O.NEAREST)):Tt?O.copyTexSubImage3D(Ne,F,Ie,ht,bt+On,Ue,We,ue,_e):O.copyTexSubImage2D(Ne,F,Ie,ht,bt+On,Ue,We,ue,_e);ze.bindFramebuffer(O.READ_FRAMEBUFFER,null),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Tt?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Ne,F,Ie,ht,bt,ue,_e,Ae,Xt,ut,Et.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,F,Ie,ht,bt,ue,_e,Ae,Xt,Et.data):O.texSubImage3D(Ne,F,Ie,ht,bt,ue,_e,Ae,Xt,ut,Et):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,Ie,ht,ue,_e,Xt,ut,Et.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,Ie,ht,Et.width,Et.height,Xt,Et.data):O.texSubImage2D(O.TEXTURE_2D,F,Ie,ht,ue,_e,Xt,ut,Et);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,gi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jt),F===0&&L.generateMipmaps&&O.generateMipmap(Ne),ze.unbindTexture()},this.copyTextureToTexture3D=function(v,L,G=null,W=null,F=0){return v.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,v=arguments[2],L=arguments[3],F=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,G,W,F)},this.initRenderTarget=function(v){Oe.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),ze.unbindTexture()},this.resetState=function(){w=0,C=0,U=null,ze.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class rg extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hs,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new B;class aa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),a=vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lc extends pi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Di;const ar=new B,Li=new B,Ui=new B,Ii=new ke,sr=new ke,cc=new At,Vr=new B,or=new B,Wr=new B,ll=new ke,$a=new ke,cl=new ke;class sg extends Ft{constructor(e=new lc){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ag(t,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new aa(n,3,0,!1)),Di.setAttribute("uv",new aa(n,2,3,!1))}this.geometry=Di,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),cc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ui.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Xr(Vr.set(-.5,-.5,0),Ui,s,Li,r,a),Xr(or.set(.5,-.5,0),Ui,s,Li,r,a),Xr(Wr.set(.5,.5,0),Ui,s,Li,r,a),ll.set(0,0),$a.set(1,0),cl.set(1,1);let o=e.ray.intersectTriangle(Vr,or,Wr,!1,ar);if(o===null&&(Xr(or.set(-.5,.5,0),Ui,s,Li,r,a),$a.set(0,1),o=e.ray.intersectTriangle(Vr,Wr,or,!1,ar),o===null))return;const l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:nn.getInterpolation(ar,Vr,or,Wr,ll,$a,cl,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(i,e,t,n,r,a){Ii.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(sr.x=a*Ii.x-r*Ii.y,sr.y=r*Ii.x+a*Ii.y):sr.copy(Ii),i.copy(e),i.x+=sr.x,i.y+=sr.y,i.applyMatrix4(cc)}class hc extends pi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hl=new At,Xs=new da,qr=new ha,Yr=new B;class og extends Ft{constructor(e=new pn,t=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=a,e.ray.intersectsSphere(qr)===!1)return;hl.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(hl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const u=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=u,y=m;g<y;g++){const f=c.getX(g);Yr.fromBufferAttribute(p,f),dl(Yr,f,l,r,e,t,this)}}else{const u=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let g=u,y=m;g<y;g++)Yr.fromBufferAttribute(p,g),dl(Yr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function dl(i,e,t,n,r,a,s){const o=Xs.distanceSqToPoint(i);if(o<t){const l=new B;Xs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ja extends Wt{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends pn{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],u=[],m=[];let g=0;const y=[],f=n/2;let h=0;A(),s===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(m,2));function A(){const M=new B,k=new B;let w=0;const C=(t-e)/n;for(let U=0;U<=a;U++){const S=[],x=U/a,D=x*(t-e)+e;for(let X=0;X<=r;X++){const V=X/r,$=V*l+o,ae=Math.sin($),Z=Math.cos($);k.x=D*ae,k.y=-x*n+f,k.z=D*Z,p.push(k.x,k.y,k.z),M.set(ae,C,Z).normalize(),u.push(M.x,M.y,M.z),m.push(V,1-x),S.push(g++)}y.push(S)}for(let U=0;U<r;U++)for(let S=0;S<a;S++){const x=y[S][U],D=y[S+1][U],X=y[S+1][U+1],V=y[S][U+1];(e>0||S!==0)&&(d.push(x,D,V),w+=3),(t>0||S!==a-1)&&(d.push(D,X,V),w+=3)}c.addGroup(h,w,0),h+=w}function T(M){const k=g,w=new ke,C=new B;let U=0;const S=M===!0?e:t,x=M===!0?1:-1;for(let X=1;X<=r;X++)p.push(0,f*x,0),u.push(0,x,0),m.push(.5,.5),g++;const D=g;for(let X=0;X<=r;X++){const $=X/r*l+o,ae=Math.cos($),Z=Math.sin($);C.x=S*Z,C.y=f*x,C.z=S*ae,p.push(C.x,C.y,C.z),u.push(0,x,0),w.x=ae*.5+.5,w.y=Z*.5*x+.5,m.push(w.x,w.y),g++}for(let X=0;X<r;X++){const V=k+X,$=D+X;M===!0?d.push($,$+1,V):d.push($+1,$,V),U+=3}c.addGroup(h,U,M===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends pr{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dc extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qa=new At,ul=new B,fl=new B;class lg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cg extends lg{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pl extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hg extends dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ml=new At;class dg{constructor(e,t,n=0,r=1/0){this.ray=new da(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ml.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ml),this}intersectObject(e,t=!0,n=[]){return qs(e,this,n,t),n.sort(gl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)qs(e[r],this,n,t);return n.sort(gl),n}}function gl(i,e){return i.distance-e.distance}function qs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)qs(a[s],e,t,!0)}}class _l{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ug extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);const vl={type:"change"},ro={type:"start"},uc={type:"end"},jr=new da,xl=new Wn,fg=Math.cos(70*Vh.DEG2RAD),Lt=new B,qt=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},es=1e-6;class pg extends ug{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ui,this._lastTargetPosition=new B,this._quat=new ui().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _l,this._sphericalDelta=new _l,this._scale=1,this._panOffset=new B,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new B,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gg.bind(this),this._onPointerDown=mg.bind(this),this._onPointerUp=_g.bind(this),this._onContextMenu=Eg.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=Mg.bind(this),this._onTouchStart=Sg.bind(this),this._onTouchMove=bg.bind(this),this._onMouseDown=vg.bind(this),this._onMouseMove=xg.bind(this),this._interceptControlDown=Tg.bind(this),this._interceptControlUp=Ag.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vl),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qt:n>Math.PI&&(n-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Lt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(jr.origin.copy(this.object.position),jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jr.direction))<fg?this.object.lookAt(this.target):(xl.setFromNormalAndCoplanarPoint(this.object.up,this.target),jr.intersectPlane(xl,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>es||8*(1-this._lastQuaternion.dot(this.object.quaternion))>es||this._lastTargetPosition.distanceToSquared(this.target)>es?(this.dispatchEvent(vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let a=Lt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-qt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _g(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uc),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ro)}function xg(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yg(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(ro),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uc))}function Mg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Sg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(ro)}function bg(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Eg(i){this.enabled!==!1&&i.preventDefault()}function Tg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ag(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Rt=JSON.parse(`[{"id":"logic","name":"Logic","type":"Pure Math","category":"Foundations","year":-350,"era":{"start":-350,"peak":1930,"end":null},"difficulty":"High School","aka":["Philosophical Logic","Mathematical Logic"],"notableYears":[-350,1879,1931],"notes":"Classical syllogistic (Aristotle), modern predicate logic (Frege 1879), incompleteness (Gödel 1931).","leadsTo":["axiomatic-set-theory","category-theory","computation","model-theory"],"contributors":["aristotle","frege","peano","tarski","godel","church"],"prerequisites":[]},{"id":"axiomatic-set-theory","name":"Axiomatic Set Theory","type":"Pure Math","category":"Foundations","year":1908,"era":{"start":1874,"peak":1922,"end":null},"difficulty":"UGrad","aka":["ZFC","ZF + Choice"],"notableYears":[1874,1908,1922],"notes":"Cantor’s set theory (1870s), Zermelo axioms (1908), Fraenkel–Skolem refinements (1922).","leadsTo":["category-theory","measure-theory","topology","model-theory"],"contributors":["cantor","zermelo","fraenkel","skolem","godel","hilbert"],"prerequisites":[{"id":"logic","strength":75}]},{"id":"category-theory","name":"Category Theory","type":"Pure Math","category":"Foundations","year":1945,"era":{"start":1945,"peak":1960,"end":null},"difficulty":"PGrad","aka":["Eilenberg–Mac Lane framework"],"notableYears":[1945,1957,1970],"notes":"Introduced by Eilenberg & Mac Lane (1945); natural transformations, adjunctions; Grothendieck toposes.","leadsTo":["algebraic-topology","homological-algebra","type-theory"],"contributors":["eilenberg","maclane","grothendieck","lawvere"],"prerequisites":[{"id":"axiomatic-set-theory","strength":80},{"id":"abstract-algebra","strength":75}]},{"id":"elementary-geometry","name":"Elementary Geometry","type":"Pure Math","category":"Geometry and Topology","year":-300,"era":{"start":-600,"peak":-300,"end":null},"difficulty":"High School","aka":["Euclidean Geometry"],"notableYears":[-300],"notes":"Euclid’s Elements (~300 BCE); foundation for classical geometry and trigonometry.","leadsTo":["calculus","topology","differential-geometry","trigonometry"],"contributors":["euclid","pythagoras","archimedes"],"prerequisites":[]},{"id":"elementary-algebra","name":"Elementary Algebra","type":"Pure Math","category":"Algebra and Discrete","year":-820,"era":{"start":-820,"peak":825,"end":null},"difficulty":"High School","aka":["Basic Algebra","School Algebra"],"notableYears":[-820,825,1591],"notes":"Ancient Babylonian algebra (~1800 BCE), Al-Khwarizmi's 'Al-Jabr' (825 CE), Viète's symbolic notation (1591).","leadsTo":["trigonometry","linear-algebra"],"contributors":["euclid","descartes"],"prerequisites":[]},{"id":"linear-algebra","name":"Linear Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1840,"peak":1870,"end":null},"difficulty":"UGrad","aka":["Matrix Theory","Vector Spaces"],"notableYears":[1844,1858,1870],"notes":"Grassmann (1844), Cayley (1858), Jordan normal form (1870s).","leadsTo":["abstract-algebra","functional-analysis","computational-linear-algebra","machine-learning"],"contributors":["gauss","cauchy","cayley","jordan","sylvester"],"prerequisites":[{"id":"elementary-algebra","strength":70}]},{"id":"abstract-algebra","name":"Abstract Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1830,"peak":1890,"end":null},"difficulty":"UGrad","aka":["Modern Algebra"],"notableYears":[1830,1846,1870],"notes":"From groups (Galois) to rings/fields (Dedekind, Kronecker); consolidation late 19th c.","leadsTo":["galois-theory","lie-groups","representation-theory","homological-algebra","commutative-algebra"],"contributors":["galois","cauchy","gauss","dedekind","noether","kronecker"],"prerequisites":[{"id":"linear-algebra","strength":70}]},{"id":"galois-theory","name":"Galois Theory","type":"Pure Math","category":"Algebra and Discrete","year":1832,"era":{"start":1832,"peak":1870,"end":null},"difficulty":"PGrad","aka":["Theory of Field Extensions"],"notableYears":[1832,1870],"notes":"Galois (1832); Jordan, Dedekind elaborations later.","leadsTo":["number-theory","algebraic-geometry"],"contributors":["galois","jordan","dedekind"],"prerequisites":[{"id":"abstract-algebra","strength":90}]},{"id":"representation-theory","name":"Module & Representation Theory","type":"Pure Math","category":"Algebra and Discrete","year":1897,"era":{"start":1897,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Linear Representations","Module Theory"],"notableYears":[1897,1900,1930],"notes":"Frobenius and Schur (1897–1905) for finite groups; module theory (Noether).","leadsTo":["lie-groups","homological-algebra","harmonic-analysis"],"contributors":["frobenius","schur","noether","weilang","artin"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"lie-groups","name":"Lie Groups & Lie Algebras","type":"Pure Math","category":"Algebra and Discrete","year":1873,"era":{"start":1870,"peak":1890,"end":null},"difficulty":"PGrad","aka":["Continuous Groups"],"notableYears":[1873,1880,1893],"notes":"Sophus Lie’s theory of continuous symmetry; Cartan classification in early 20th c.","leadsTo":["differential-geometry","representation-theory","theoretical-physics"],"contributors":["lie","cartan","weyl"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"calculus","strength":75}]},{"id":"homological-algebra","name":"Commutative and Homological Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1956,"era":{"start":1945,"peak":1956,"end":null},"difficulty":"Research","aka":["Derived Functors","Ext/Tor"],"notableYears":[1945,1956],"notes":"Cartan–Eilenberg (1956); tools for modern algebra/topology.","leadsTo":["algebraic-topology","category-theory","algebraic-geometry"],"contributors":["cartan","eilenberg","grothendieck"],"prerequisites":[{"id":"abstract-algebra","strength":90},{"id":"category-theory","strength":75}]},{"id":"number-theory","name":"Number Theory","type":"Pure Math","category":"Algebra and Discrete","year":1601,"era":{"start":-600,"peak":1801,"end":null},"difficulty":"UGrad","aka":["Elementary Number Theory"],"notableYears":[1601,1801,1859],"notes":"Ancient roots; Fermat’s contributions (1601+); Gauss’s Disquisitiones (1801); Riemann’s 1859 memoir.","leadsTo":["abstract-algebra","galois-theory","algebraic-number-theory"],"contributors":["euclid","fermat","euler","gauss","riemann","ramanujan","dirichlet"],"prerequisites":[]},{"id":"graph-theory","name":"Graph Theory & Combinatorics","type":"Pure Math","category":"Algebra and Discrete","year":1736,"era":{"start":1736,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Networks","Discrete Mathematics"],"notableYears":[1736,1959,1976],"notes":"Euler (1736); Erdős–Rényi random graphs (1959); Four Color Theorem (1976).","leadsTo":["computation","optimization"],"contributors":["euler","erdos","renyi","tutte","conway"],"prerequisites":[]},{"id":"calculus","name":"Calculus","type":"Pure Math","category":"Analysis","year":1684,"era":{"start":1665,"peak":1687,"end":null},"difficulty":"High School","aka":["Differential and Integral Calculus"],"notableYears":[1684,1687],"notes":"Leibniz’s papers (1684–1686); Newton’s Principia (1687).","leadsTo":["vector-calculus","real-analysis","differential-equations","complex-analysis"],"contributors":["newton","leibniz","euler"],"prerequisites":[{"id":"elementary-geometry","strength":70},{"id":"elementary-algebra","strength":80},{"id":"trigonometry","strength":60}]},{"id":"vector-calculus","name":"Vector Calculus","type":"Pure Math","category":"Analysis","year":1854,"era":{"start":1813,"peak":1861,"end":null},"difficulty":"UGrad","aka":["Multivariable Calculus"],"notableYears":[1813,1854,1861],"notes":"Gauss’s divergence (1813), Stokes’ theorem (1854), Maxwell’s equations (1861–62).","leadsTo":["differential-equations","differential-geometry"],"contributors":["gauss","stokes","green","maxwell"],"prerequisites":[{"id":"calculus","strength":90},{"id":"linear-algebra","strength":70}]},{"id":"calculus-of-variations","name":"Calculus of Variations","type":"Pure Math","category":"Analysis","year":1755,"era":{"start":1755,"peak":1788,"end":null},"difficulty":"PGrad","aka":["Variational Calculus"],"notableYears":[1755,1788],"notes":"Euler (1755) and Lagrange’s Méchanique Analytique (1788).","leadsTo":["optimal-control","pde"],"contributors":["euler","lagrange","hilbert","tonelli"],"prerequisites":[{"id":"calculus","strength":85}]},{"id":"fractional-analysis","name":"Fractional and Non-linear Analysis","type":"Pure Math","category":"Analysis","year":1965,"era":{"start":1695,"peak":1965,"end":null},"difficulty":"PGrad","aka":["Fractional Calculus"],"notableYears":[1695,1965],"notes":"Fractional derivatives first queried by Leibniz (1695); modern theory flourished in mid-20th century.","leadsTo":["dynamical-systems"],"contributors":["liouville","riemann","grunwald","lettnikov"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"functional-analysis","strength":85}]},{"id":"complex-analysis","name":"Complex Analysis","type":"Pure Math","category":"Analysis","year":1851,"era":{"start":1814,"peak":1851,"end":null},"difficulty":"UGrad","aka":["Theory of Holomorphic Functions"],"notableYears":[1814,1825,1851],"notes":"Cauchy integral theorem (1814/1825); Riemann surfaces (1851).","leadsTo":["harmonic-analysis","number-theory"],"contributors":["cauchy","riemann","gauss","weierstrass"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"real-analysis","name":"Real Analysis","type":"Pure Math","category":"Analysis","year":1872,"era":{"start":1821,"peak":1900,"end":null},"difficulty":"UGrad","aka":["Mathematical Analysis"],"notableYears":[1821,1872,1890],"notes":"Cauchy’s Cours d’Analyse (1821); arithmetization with Dedekind/Cantor/Weierstrass (1870s).","leadsTo":["measure-theory","functional-analysis","topology"],"contributors":["cauchy","riemann","weierstrass","cantor","dedekind"],"prerequisites":[{"id":"calculus","strength":95}]},{"id":"measure-theory","name":"Measure Theory","type":"Pure Math","category":"Analysis","year":1902,"era":{"start":1899,"peak":1902,"end":null},"difficulty":"PGrad","aka":["Lebesgue Integration"],"notableYears":[1902,1904,1933],"notes":"Lebesgue’s thesis (1902); extension to probability by Kolmogorov axioms (1933).","leadsTo":["functional-analysis","probability-theory","stochastic-analysis"],"contributors":["lebesgue","borel","caratheodory","kolmogorov"],"prerequisites":[{"id":"real-analysis","strength":95},{"id":"axiomatic-set-theory","strength":70}]},{"id":"functional-analysis","name":"Functional Analysis","type":"Pure Math","category":"Analysis","year":1920,"era":{"start":1907,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Banach & Hilbert Space Theory","Operator Theory"],"notableYears":[1907,1932,1940],"notes":"Fréchet metric spaces (1907), Banach spaces (1932), von Neumann operator algebras.","leadsTo":["pde","stochastic-analysis","quantum-mechanics","harmonic-analysis"],"contributors":["hilbert","banach","vonneumann","riesz","stoner"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"linear-algebra","strength":85},{"id":"measure-theory","strength":80}]},{"id":"harmonic-analysis","name":"Harmonic Analysis","type":"Pure Math","category":"Analysis","year":1807,"era":{"start":1807,"peak":1915,"end":null},"difficulty":"PGrad","aka":["Fourier Analysis"],"notableYears":[1807,1822,1915],"notes":"Fourier series (1807–1822); Plancherel theorem (1910s); modern non-commutative directions.","leadsTo":["signal-processing","pde"],"contributors":["fourier","riemann","plancherel","hardy","littlewood"],"prerequisites":[{"id":"calculus","strength":85},{"id":"complex-analysis","strength":75}]},{"id":"topology","name":"Topology","type":"Pure Math","category":"Geometry and Topology","year":1895,"era":{"start":1895,"peak":1930,"end":null},"difficulty":"UGrad","aka":["General Topology","Point-Set Topology"],"notableYears":[1895,1914,1930],"notes":"Poincaré (1895); Hausdorff spaces (1914); foundations of modern topology in early 20th c.","leadsTo":["algebraic-topology","differential-topology","functional-analysis"],"contributors":["poincare","hausdorff","cantor","hilbert"],"prerequisites":[{"id":"real-analysis","strength":75},{"id":"axiomatic-set-theory","strength":70}]},{"id":"algebraic-topology","name":"Algebraic Topology","type":"Pure Math","category":"Geometry and Topology","year":1910,"era":{"start":1895,"peak":1950,"end":null},"difficulty":"Research","aka":["Homology and Homotopy Theory"],"notableYears":[1895,1935,1950],"notes":"From Poincaré’s analysis situs to Eilenberg–Steenrod axioms; Postnikov, Serre, and beyond.","leadsTo":["differential-topology","category-theory"],"contributors":["poincare","eilenberg","steenrod","hurewicz","serre"],"prerequisites":[{"id":"topology","strength":90},{"id":"abstract-algebra","strength":85}]},{"id":"differential-geometry","name":"Differential Geometry","type":"Pure Math","category":"Geometry and Topology","year":1827,"era":{"start":1827,"peak":1854,"end":null},"difficulty":"PGrad","aka":["Riemannian Geometry"],"notableYears":[1827,1854],"notes":"Gauss’s Theorema Egregium (1827), Riemann’s habilitation (1854).","leadsTo":["differential-topology","general-relativity","symplectic-geometry"],"contributors":["gauss","riemann","poincare","cartan"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"linear-algebra","strength":75}]},{"id":"differential-topology","name":"Differential Topology","type":"Pure Math","category":"Geometry and Topology","year":1950,"era":{"start":1950,"peak":1961,"end":null},"difficulty":"Research","aka":["Smooth Manifolds & Cobordism"],"notableYears":[1950,1961],"notes":"Thom’s cobordism (1950s), Milnor’s discoveries (exotic 7-spheres, 1956).","leadsTo":[],"contributors":["thom","milnor","smale"],"prerequisites":[{"id":"topology","strength":85},{"id":"differential-geometry","strength":85}]},{"id":"probability-theory","name":"Probability and Statistical Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1933,"era":{"start":1654,"peak":1933,"end":null},"difficulty":"UGrad","aka":["Measure-Theoretic Probability"],"notableYears":[1654,1703,1933],"notes":"Pascal–Fermat correspondence (1654); Bernoulli (1703); Kolmogorov’s axioms (1933).","leadsTo":["statistical-inference","stochastic-processes","information-theory"],"contributors":["pascal","fermat","bernoulli","laplace","kolmogorov"],"prerequisites":[{"id":"calculus","strength":70}]},{"id":"statistical-inference","name":"Statistical Inference","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1935,"era":{"start":1805,"peak":1935,"end":null},"difficulty":"UGrad","aka":["Mathematical Statistics"],"notableYears":[1805,1809,1922,1933],"notes":"Least squares (Legendre 1805, Gauss 1809); Fisher (1922); Neyman–Pearson (1933).","leadsTo":["bayesian-inference","regression-analysis","machine-learning"],"contributors":["legendre","gauss","fisher","neyman","pearson"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"linear-algebra","strength":65}]},{"id":"stochastic-processes","name":"Stochastic Processes","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1906,"era":{"start":1906,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Markov Processes","Wiener Processes"],"notableYears":[1906,1923,1931],"notes":"Markov chains (1906), Wiener process (1923), Kolmogorov forward/backward equations (1931).","leadsTo":["stochastic-analysis","time-series"],"contributors":["markov","wiener","kolmogorov","doob"],"prerequisites":[{"id":"probability-theory","strength":90},{"id":"real-analysis","strength":75}]},{"id":"bayesian-inference","name":"Bayesian Inference and Computation","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1763,"era":{"start":1763,"peak":1990,"end":null},"difficulty":"UGrad","aka":["Bayesian Statistics"],"notableYears":[1763,1950,1990],"notes":"Bayes (1763) and Laplace; computational renaissance with MCMC/VI in 1990s.","leadsTo":["machine-learning"],"contributors":["bayes","laplace","jeffreys","jaynes","metropolis","hastings"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"stochastic-analysis","name":"Stochastic Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1944,"era":{"start":1944,"peak":1970,"end":null},"difficulty":"PGrad","aka":["Itô Calculus"],"notableYears":[1944,1951,1979],"notes":"Itô integral (1944), martingale theory (Doob), Malliavin calculus (1970s).","leadsTo":[],"contributors":["ito","doob","malliavin"],"prerequisites":[{"id":"stochastic-processes","strength":90},{"id":"measure-theory","strength":85},{"id":"functional-analysis","strength":80}]},{"id":"regression-analysis","name":"Regression Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1805,"era":{"start":1805,"peak":1900,"end":null},"difficulty":"UGrad","aka":["Least Squares","Linear Models"],"notableYears":[1805,1809,1877],"notes":"Legendre (1805), Gauss (1809); Pearson correlation (1890s).","leadsTo":["machine-learning"],"contributors":["legendre","gauss","pearson","fisher"],"prerequisites":[{"id":"statistical-inference","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"time-series","name":"Time Series Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1927,"era":{"start":1927,"peak":1970,"end":null},"difficulty":"UGrad","aka":["ARMA/ARIMA Models"],"notableYears":[1927,1938,1970],"notes":"Yule (1927), Wold decomposition (1938), Box–Jenkins (1970).","leadsTo":["machine-learning"],"contributors":["yule","wold","box","jenkins"],"prerequisites":[{"id":"stochastic-processes","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"information-theory","name":"Information Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1948,"era":{"start":1948,"peak":1960,"end":null},"difficulty":"PGrad","aka":["Shannon Theory"],"notableYears":[1948,1959],"notes":"Shannon (1948) founded the field; coding theorems and rate–distortion theory followed.","leadsTo":["machine-learning"],"contributors":["shannon","cover","gallager","jaynes"],"prerequisites":[{"id":"probability-theory","strength":85}]},{"id":"machine-learning","name":"Machine Learning Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1957,"era":{"start":1957,"peak":2012,"end":null},"difficulty":"PGrad","aka":["Statistical Learning Theory"],"notableYears":[1957,1984,2001,2012],"notes":"Perceptron (1957), PAC learning (1984), kernel methods (1990s–2000s), deep learning surge (2012).","leadsTo":[],"contributors":["rosenblatt","vapnik","valiant","lecun","hinton","bengio"],"prerequisites":[{"id":"linear-algebra","strength":80},{"id":"statistical-inference","strength":85},{"id":"optimization","strength":75}]},{"id":"optimization","name":"Convex and Non-convex Optimisation","type":"Applied Math","category":"Optimisation and Control","year":1947,"era":{"start":1947,"peak":2004,"end":null},"difficulty":"UGrad","aka":["Mathematical Programming"],"notableYears":[1947,1951,1994,2004],"notes":"Linear programming (Dantzig 1947), convex analysis (Fenchel 1951), interior-point (Karmarkar 1984), convex optimisation textbooks (2004).","leadsTo":["machine-learning","optimal-control"],"contributors":["dantzig","fenchel","rockafellar","nesterov","boyd"],"prerequisites":[{"id":"calculus","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"optimal-control","name":"Optimal Control Theory","type":"Applied Math","category":"Optimisation and Control","year":1956,"era":{"start":1956,"peak":1962,"end":null},"difficulty":"PGrad","aka":["Pontryagin Maximum Principle","Dynamic Programming"],"notableYears":[1956,1962],"notes":"Bellman’s dynamic programming (1950s); Pontryagin maximum principle (1956–62).","leadsTo":[],"contributors":["bellman","pontryagin"],"prerequisites":[{"id":"calculus-of-variations","strength":85},{"id":"differential-equations","strength":80},{"id":"optimization","strength":75}]},{"id":"game-theory","name":"Game Theory","type":"Applied Math","category":"Optimisation and Control","year":1944,"era":{"start":1928,"peak":1951,"end":null},"difficulty":"UGrad","aka":["Non-cooperative Games"],"notableYears":[1928,1944,1951],"notes":"von Neumann minimax (1928), Theory of Games and Economic Behavior (1944), Nash equilibrium (1950–51).","leadsTo":[],"contributors":["vonneumann","morgenstern","nash"],"prerequisites":[{"id":"probability-theory","strength":70},{"id":"optimization","strength":70}]},{"id":"numerical-analysis","name":"Numerical Analysis","type":"Applied Math","category":"Computation","year":1940,"era":{"start":1940,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Scientific Computing"],"notableYears":[1947,1965],"notes":"Field matured with electronic computing; focus on stability, convergence, error.","leadsTo":["computational-linear-algebra"],"contributors":["vonneumann","turing","householder","golub"],"prerequisites":[{"id":"calculus","strength":80},{"id":"linear-algebra","strength":75}]},{"id":"computational-linear-algebra","name":"Computational Linear Algebra","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1950,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Numerical Linear Algebra"],"notableYears":[1959,1965,1977],"notes":"QR algorithm (1959), Householder methods (1960s), Golub–Van Loan textbook (1977).","leadsTo":["machine-learning"],"contributors":["golub","vanloan","householder","givens"],"prerequisites":[{"id":"linear-algebra","strength":90},{"id":"numerical-analysis","strength":75}]},{"id":"computation","name":"Theory of Computation","type":"Applied Math","category":"Computation","year":1936,"era":{"start":1936,"peak":1971,"end":null},"difficulty":"UGrad","aka":["Automata, Complexity, Computability"],"notableYears":[1936,1943,1971],"notes":"Church–Turing (1936), Kleene (1943), Cook–Levin theorem (1971).","leadsTo":[],"contributors":["turing","church","kleene","cook","levin","knuth"],"prerequisites":[{"id":"logic","strength":85},{"id":"graph-theory","strength":70}]},{"id":"differential-equations","name":"Differential Equations","type":"Applied Math","category":"Physics","year":1687,"era":{"start":1671,"peak":1750,"end":null},"difficulty":"UGrad","aka":["ODEs"],"notableYears":[1687,1736,1760],"notes":"From Newton’s laws to Euler’s methods; existence/uniqueness developed in 19th c.","leadsTo":["pde","dynamical-systems"],"contributors":["newton","euler","leibniz","lagrange","cauchy"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"pde","name":"Partial Differential Equations","type":"Applied Math","category":"Physics","year":1750,"era":{"start":1750,"peak":1910,"end":null},"difficulty":"PGrad","aka":["Elliptic/Parabolic/Hyperbolic PDEs"],"notableYears":[1750,1822,1910],"notes":"Vibrating string and heat equation (d’Alembert, Fourier), Hilbert’s problems shaped 20th c PDE.","leadsTo":["dynamical-systems","quantum-mechanics","general-relativity"],"contributors":["euler","fourier","lagrange","hilbert","sobolev"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"differential-equations","strength":85}]},{"id":"dynamical-systems","name":"Dynamical Systems and Chaos","type":"Applied Math","category":"Physics","year":1890,"era":{"start":1890,"peak":1963,"end":null},"difficulty":"PGrad","aka":["Qualitative Theory of Differential Equations","Chaos"],"notableYears":[1890,1963],"notes":"Poincaré (1890) qualitative theory; Lorenz (1963) chaos.","leadsTo":[],"contributors":["poincare","birkhoff","smale","lorenz"],"prerequisites":[{"id":"differential-equations","strength":90},{"id":"topology","strength":70}]},{"id":"quantum-mechanics","name":"Quantum Mechanics","type":"Applied Math","category":"Physics","year":1926,"era":{"start":1925,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Wave & Matrix Mechanics"],"notableYears":[1925,1926,1932],"notes":"Heisenberg (1925) matrix mechanics; Schrödinger (1926) wave mechanics; von Neumann mathematical foundations (1932).","leadsTo":[],"contributors":["heisenberg","schrodinger","dirac","vonneumann","feynman"],"prerequisites":[{"id":"functional-analysis","strength":85},{"id":"pde","strength":80}]},{"id":"general-relativity","name":"General Relativity","type":"Applied Math","category":"Physics","year":1915,"era":{"start":1915,"peak":1916,"end":null},"difficulty":"Research","aka":["GR"],"notableYears":[1915,1916],"notes":"Einstein’s field equations (1915–16); differential geometry as the mathematical core.","leadsTo":[],"contributors":["einstein","riemann","levicivita","weyl","hawking","penrose"],"prerequisites":[{"id":"differential-geometry","strength":95},{"id":"pde","strength":80}]},{"id":"signal-processing","name":"Signal Processing","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1948,"peak":1975,"end":null},"difficulty":"UGrad","aka":["DSP","Fourier & Wavelet Methods"],"notableYears":[1948,1965,1987],"notes":"Shannon lays groundwork (1948); digital signal processing (1960s–70s); wavelets (Daubechies 1987–92).","leadsTo":["machine-learning"],"contributors":["fourier","shannon","oppenheim","daubechies"],"prerequisites":[{"id":"harmonic-analysis","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"trigonometry","name":"Trigonometry","type":"Pure Math","category":"Analysis","year":-150,"era":{"start":-150,"peak":1748,"end":null},"difficulty":"High School","aka":["Circular Functions"],"notableYears":[-150,1748],"notes":"Hipparchus & Ptolemy tables (classical); Euler’s Introductio in analysin infinitorum (1748) modernises trig via analytic functions.","leadsTo":["calculus","harmonic-analysis","complex-analysis"],"contributors":["hipparchus","ptolemy","al-biruni","bhaskara-ii","euler"],"prerequisites":[]}]`),ri=JSON.parse('[{"id":"pythagoras","name":"Pythagoras","born":-570,"died":-495,"image":"/images/people/thales.jpg","gender":1},{"id":"euclid","name":"Euclid","born":-325,"died":-265,"image":"/images/people/euclid.jpg","gender":1},{"id":"aristotle","name":"Aristotle","born":-384,"died":-322,"image":"/images/people/aristotle.jpg","gender":1},{"id":"descartes","name":"René Descartes","born":1596,"died":1650,"image":"/images/people/descartes.jpg","gender":1},{"id":"newton","name":"Isaac Newton","born":1643,"died":1727,"image":"/images/people/newton.jpg","gender":1},{"id":"leibniz","name":"Gottfried Wilhelm Leibniz","born":1646,"died":1716,"image":"/images/people/newton.jpg","gender":1},{"id":"euler","name":"Leonhard Euler","born":1707,"died":1783,"image":"/images/people/euler.jpg","gender":1},{"id":"lagrange","name":"Joseph-Louis Lagrange","born":1736,"died":1813,"image":"/images/people/euler.jpg","gender":1},{"id":"fourier","name":"Joseph Fourier","born":1768,"died":1830,"image":"/images/people/fourier.jpg","gender":1},{"id":"gauss","name":"Carl Friedrich Gauss","born":1777,"died":1855,"image":"/images/people/gauss.jpg","gender":1},{"id":"cauchy","name":"Augustin-Louis Cauchy","born":1789,"died":1857,"image":"/images/people/gauss.jpg","gender":1},{"id":"galois","name":"Évariste Galois","born":1811,"died":1832,"image":"/images/people/gauss.jpg","gender":1},{"id":"lovelace","name":"Ada Lovelace","born":1815,"died":1852,"image":"/images/people/lovelace.jpg","gender":0},{"id":"cantor","name":"Georg Cantor","born":1845,"died":1918,"image":"/images/people/cantor.jpg","gender":1},{"id":"riemann","name":"Bernhard Riemann","born":1826,"died":1866,"image":"/images/people/gauss.jpg","gender":1},{"id":"hilbert","name":"David Hilbert","born":1862,"died":1943,"image":"/images/people/hilbert.jpg","gender":1},{"id":"poincare","name":"Henri Poincaré","born":1854,"died":1912,"image":"/images/people/hilbert.jpg","gender":1},{"id":"ramanujan","name":"Srinivasa Ramanujan","born":1887,"died":1920,"image":"/images/people/einstein.jpg","gender":1},{"id":"einstein","name":"Albert Einstein","born":1879,"died":1955,"image":"/images/people/einstein.jpg","gender":1},{"id":"tarski","name":"Alfred Tarski","born":1901,"died":1983,"image":"/images/people/tarski.jpg","gender":1},{"id":"banach","name":"Stefan Banach","born":1892,"died":1945,"image":"/images/people/hilbert.jpg","gender":1},{"id":"lebesgue","name":"Henri Lebesgue","born":1875,"died":1941,"image":"/images/people/hilbert.jpg","gender":1},{"id":"kolmogorov","name":"Andrey Kolmogorov","born":1903,"died":1987,"image":"/images/people/hawking.jpg","gender":1},{"id":"turing","name":"Alan Turing","born":1912,"died":1954,"image":"/images/people/turing.jpg","gender":1},{"id":"godel","name":"Kurt Gödel","born":1906,"died":1978,"image":"/images/people/einstein.jpg","gender":1},{"id":"vonneumann","name":"John von Neumann","born":1903,"died":1957,"image":"/images/people/einstein.jpg","gender":1},{"id":"conway","name":"John Horton Conway","born":1937,"died":2020,"image":"/images/people/conway.jpg","gender":1},{"id":"knuth","name":"Donald Knuth","born":1938,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"rudin","name":"Walter Rudin","born":1921,"died":2010,"image":"/images/people/feynman.jpg","gender":1},{"id":"halmos","name":"Paul Halmos","born":1916,"died":2006,"image":"/images/people/feynman.jpg","gender":1},{"id":"axler","name":"Sheldon Axler","born":1949,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"strang","name":"Gilbert Strang","born":1934,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"tao","name":"Terence Tao","born":1975,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"wasserman","name":"Larry Wasserman","born":1959,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"jaynes","name":"Edwin Thompson Jaynes","born":1922,"died":1998,"image":"/images/people/feynman.jpg","gender":1},{"id":"jordan","name":"Camille Jordan","born":1838,"died":1922,"image":"/images/people/gauss.jpg","gender":1},{"id":"feynman","name":"Richard Feynman","born":1918,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"hawking","name":"Stephen Hawking","born":1942,"died":2018,"image":"/images/people/hawking.jpg","gender":1},{"id":"penrose","name":"Roger Penrose","born":1931,"died":null,"image":"/images/people/penrose.jpg","gender":1},{"id":"curie","name":"Marie Curie","born":1867,"died":1934,"image":"/images/people/curie.jpg","gender":0},{"id":"thom","name":"René Thom","born":1923,"died":2002,"image":"/images/people/feynman.jpg","gender":1},{"id":"milnor","name":"John Milnor","born":1931,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"smale","name":"Stephen Smale","born":1930,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"ito","name":"Kiyoshi Itô","born":1915,"died":2008,"image":"/images/people/hawking.jpg","gender":1},{"id":"doob","name":"Joseph Doob","born":1910,"died":2004,"image":"/images/people/feynman.jpg","gender":1},{"id":"malliavin","name":"Paul Malliavin","born":1925,"died":2010,"image":"/images/people/feynman.jpg","gender":1},{"id":"frege","name":"Gottlob Frege","born":1848,"died":1925,"image":"/images/people/cantor.jpg","gender":1},{"id":"church","name":"Alonzo Church","born":1903,"died":1995,"image":"/images/people/turing.jpg","gender":1},{"id":"peano","name":"Giuseppe Peano","born":1858,"died":1932,"image":"/images/people/cantor.jpg","gender":1},{"id":"weierstrass","name":"Karl Weierstrass","born":1815,"died":1897,"image":"/images/people/gauss.jpg","gender":1},{"id":"dedekind","name":"Richard Dedekind","born":1831,"died":1916,"image":"/images/people/cantor.jpg","gender":1},{"id":"noether","name":"Emmy Noether","born":1882,"died":1935,"image":"/images/people/curie.jpg","gender":0},{"id":"dirac","name":"Paul Dirac","born":1902,"died":1984,"image":"/images/people/einstein.jpg","gender":1},{"id":"nash","name":"John Nash","born":1928,"died":2015,"image":"/images/people/hawking.jpg","gender":1},{"id":"shannon","name":"Claude Shannon","born":1916,"died":2001,"image":"/images/people/turing.jpg","gender":1},{"id":"archimedes","name":"Archimedes","born":-287,"died":-212,"image":"/images/people/euclid.jpg","gender":1},{"id":"hipparchus","name":"Hipparchus","born":-190,"died":-120,"image":"/images/people/euclid.jpg","gender":1},{"id":"ptolemy","name":"Claudius Ptolemy","born":100,"died":170,"image":"/images/people/euclid.jpg","gender":1},{"id":"al-biruni","name":"Al-Biruni","born":973,"died":1050,"image":"/images/people/euclid.jpg","gender":1},{"id":"bhaskara-ii","name":"Bhaskara II","born":1114,"died":1185,"image":"/images/people/euclid.jpg","gender":1},{"id":"pascal","name":"Blaise Pascal","born":1623,"died":1662,"image":"/images/people/descartes.jpg","gender":1},{"id":"fermat","name":"Pierre de Fermat","born":1607,"died":1665,"image":"/images/people/fermat.jpg","gender":1},{"id":"bernoulli","name":"Jacob Bernoulli","born":1654,"died":1705,"image":"/images/people/newton.jpg","gender":1},{"id":"laplace","name":"Pierre-Simon Laplace","born":1749,"died":1827,"image":"/images/people/euler.jpg","gender":1},{"id":"legendre","name":"Adrien-Marie Legendre","born":1752,"died":1833,"image":"/images/people/euler.jpg","gender":1},{"id":"kronecker","name":"Leopold Kronecker","born":1823,"died":1891,"image":"/images/people/gauss.jpg","gender":1},{"id":"cayley","name":"Arthur Cayley","born":1821,"died":1895,"image":"/images/people/gauss.jpg","gender":1},{"id":"sylvester","name":"James Joseph Sylvester","born":1814,"died":1897,"image":"/images/people/gauss.jpg","gender":1},{"id":"dirichlet","name":"Peter Gustav Lejeune Dirichlet","born":1805,"died":1859,"image":"/images/people/gauss.jpg","gender":1},{"id":"liouville","name":"Joseph Liouville","born":1809,"died":1882,"image":"/images/people/gauss.jpg","gender":1},{"id":"stokes","name":"George Gabriel Stokes","born":1819,"died":1903,"image":"/images/people/gauss.jpg","gender":1},{"id":"green","name":"George Green","born":1793,"died":1841,"image":"/images/people/gauss.jpg","gender":1},{"id":"maxwell","name":"James Clerk Maxwell","born":1831,"died":1879,"image":"/images/people/gauss.jpg","gender":1},{"id":"borel","name":"Émile Borel","born":1871,"died":1956,"image":"/images/people/poincare.jpg","gender":1},{"id":"caratheodory","name":"Constantin Carathéodory","born":1873,"died":1950,"image":"/images/people/hilbert.jpg","gender":1},{"id":"hausdorff","name":"Felix Hausdorff","born":1868,"died":1942,"image":"/images/people/cantor.jpg","gender":1},{"id":"zermelo","name":"Ernst Zermelo","born":1871,"died":1953,"image":"/images/people/cantor.jpg","gender":1},{"id":"fraenkel","name":"Abraham Fraenkel","born":1891,"died":1965,"image":"/images/people/cantor.jpg","gender":1},{"id":"skolem","name":"Thoralf Skolem","born":1887,"died":1963,"image":"/images/people/hilbert.jpg","gender":1},{"id":"frobenius","name":"Ferdinand Georg Frobenius","born":1849,"died":1917,"image":"/images/people/cantor.jpg","gender":1},{"id":"schur","name":"Issai Schur","born":1875,"died":1941,"image":"/images/people/hilbert.jpg","gender":1},{"id":"artin","name":"Emil Artin","born":1898,"died":1962,"image":"/images/people/hilbert.jpg","gender":1},{"id":"lie","name":"Sophus Lie","born":1842,"died":1899,"image":"/images/people/cantor.jpg","gender":1},{"id":"cartan","name":"Élie Cartan","born":1869,"died":1951,"image":"/images/people/poincare.jpg","gender":1},{"id":"weyl","name":"Hermann Weyl","born":1885,"died":1955,"image":"/images/people/hilbert.jpg","gender":1},{"id":"eilenberg","name":"Samuel Eilenberg","born":1913,"died":1998,"image":"/images/people/feynman.jpg","gender":1},{"id":"maclane","name":"Saunders Mac Lane","born":1909,"died":2005,"image":"/images/people/feynman.jpg","gender":1},{"id":"grothendieck","name":"Alexander Grothendieck","born":1928,"died":2014,"image":"/images/people/hawking.jpg","gender":1},{"id":"lawvere","name":"F. William Lawvere","born":1937,"died":2023,"image":"/images/people/hawking.jpg","gender":1},{"id":"erdos","name":"Paul Erdős","born":1913,"died":1996,"image":"/images/people/feynman.jpg","gender":1},{"id":"renyi","name":"Alfréd Rényi","born":1921,"died":1970,"image":"/images/people/feynman.jpg","gender":1},{"id":"tutte","name":"W. T. Tutte","born":1917,"died":2002,"image":"/images/people/turing.jpg","gender":1},{"id":"tonelli","name":"Leonida Tonelli","born":1885,"died":1946,"image":"/images/people/hilbert.jpg","gender":1},{"id":"grunwald","name":"Anton Karl Grünwald","born":1838,"died":1920,"image":"/images/people/cantor.jpg","gender":1},{"id":"lettnikov","name":"Aleksey Vasilievich Letnikov","born":1837,"died":1888,"image":"/images/people/cantor.jpg","gender":1},{"id":"riesz","name":"Frigyes Riesz","born":1880,"died":1956,"image":"/images/people/hilbert.jpg","gender":1},{"id":"stoner","name":"Marshall Stone","born":1903,"died":1989,"image":"/images/people/feynman.jpg","gender":1},{"id":"plancherel","name":"Michel Plancherel","born":1885,"died":1967,"image":"/images/people/hilbert.jpg","gender":1},{"id":"hardy","name":"G. H. Hardy","born":1877,"died":1947,"image":"/images/people/ramanujan.jpg","gender":1},{"id":"littlewood","name":"J. E. Littlewood","born":1885,"died":1977,"image":"/images/people/ramanujan.jpg","gender":1},{"id":"steenrod","name":"Norman Steenrod","born":1910,"died":1971,"image":"/images/people/feynman.jpg","gender":1},{"id":"hurewicz","name":"Witold Hurewicz","born":1904,"died":1956,"image":"/images/people/feynman.jpg","gender":1},{"id":"serre","name":"Jean-Pierre Serre","born":1926,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"fisher","name":"Ronald Fisher","born":1890,"died":1962,"image":"/images/people/feynman.jpg","gender":1},{"id":"neyman","name":"Jerzy Neyman","born":1894,"died":1981,"image":"/images/people/feynman.jpg","gender":1},{"id":"pearson","name":"Karl Pearson","born":1857,"died":1936,"image":"/images/people/cantor.jpg","gender":1},{"id":"markov","name":"Andrey Markov","born":1856,"died":1922,"image":"/images/people/cantor.jpg","gender":1},{"id":"wiener","name":"Norbert Wiener","born":1894,"died":1964,"image":"/images/people/feynman.jpg","gender":1},{"id":"bayes","name":"Thomas Bayes","born":1701,"died":1761,"image":"/images/people/euler.jpg","gender":1},{"id":"jeffreys","name":"Harold Jeffreys","born":1891,"died":1989,"image":"/images/people/feynman.jpg","gender":1},{"id":"metropolis","name":"Nicholas Metropolis","born":1915,"died":1999,"image":"/images/people/feynman.jpg","gender":1},{"id":"hastings","name":"W. K. Hastings","born":1930,"died":2016,"image":"/images/people/hawking.jpg","gender":1},{"id":"yule","name":"George Udny Yule","born":1871,"died":1951,"image":"/images/people/poincare.jpg","gender":1},{"id":"wold","name":"Herman Wold","born":1908,"died":1992,"image":"/images/people/feynman.jpg","gender":1},{"id":"box","name":"George E. P. Box","born":1919,"died":2013,"image":"/images/people/feynman.jpg","gender":1},{"id":"jenkins","name":"Gwilym Jenkins","born":1932,"died":1982,"image":"/images/people/hawking.jpg","gender":1},{"id":"cover","name":"Thomas M. Cover","born":1938,"died":2012,"image":"/images/people/hawking.jpg","gender":1},{"id":"gallager","name":"Robert G. Gallager","born":1931,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"rosenblatt","name":"Frank Rosenblatt","born":1928,"died":1971,"image":"/images/people/turing.jpg","gender":1},{"id":"vapnik","name":"Vladimir Vapnik","born":1936,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"valiant","name":"Leslie Valiant","born":1949,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"lecun","name":"Yann LeCun","born":1960,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"hinton","name":"Geoffrey Hinton","born":1947,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"bengio","name":"Yoshua Bengio","born":1964,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"dantzig","name":"George Dantzig","born":1914,"died":2005,"image":"/images/people/feynman.jpg","gender":1},{"id":"fenchel","name":"Werner Fenchel","born":1905,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"rockafellar","name":"R. Tyrrell Rockafellar","born":1935,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"nesterov","name":"Yurii Nesterov","born":1956,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"boyd","name":"Stephen Boyd","born":1958,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"bellman","name":"Richard Bellman","born":1920,"died":1984,"image":"/images/people/feynman.jpg","gender":1},{"id":"pontryagin","name":"Lev Pontryagin","born":1908,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"morgenstern","name":"Oskar Morgenstern","born":1902,"died":1977,"image":"/images/people/vonneumann.jpg","gender":1},{"id":"householder","name":"Alston Householder","born":1904,"died":1993,"image":"/images/people/feynman.jpg","gender":1},{"id":"golub","name":"Gene H. Golub","born":1932,"died":2007,"image":"/images/people/knuth.jpg","gender":1},{"id":"vanloan","name":"Charles F. Van Loan","born":1947,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"givens","name":"Wallace Givens","born":1910,"died":1993,"image":"/images/people/feynman.jpg","gender":1},{"id":"kleene","name":"Stephen Cole Kleene","born":1909,"died":1994,"image":"/images/people/turing.jpg","gender":1},{"id":"cook","name":"Stephen Cook","born":1939,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"levin","name":"Leonid Levin","born":1948,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"sobolev","name":"Sergei Sobolev","born":1908,"died":1989,"image":"/images/people/kolmogorov.jpg","gender":1},{"id":"birkhoff","name":"George David Birkhoff","born":1884,"died":1944,"image":"/images/people/poincare.jpg","gender":1},{"id":"lorenz","name":"Edward Norton Lorenz","born":1917,"died":2008,"image":"/images/people/feynman.jpg","gender":1},{"id":"heisenberg","name":"Werner Heisenberg","born":1901,"died":1976,"image":"/images/people/einstein.jpg","gender":1},{"id":"schrodinger","name":"Erwin Schrödinger","born":1887,"died":1961,"image":"/images/people/einstein.jpg","gender":1},{"id":"levicivita","name":"Tullio Levi-Civita","born":1873,"died":1941,"image":"/images/people/poincare.jpg","gender":1},{"id":"oppenheim","name":"Alan V. Oppenheim","born":1937,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"daubechies","name":"Ingrid Daubechies","born":1954,"died":null,"image":"/images/people/curie.jpg","gender":0},{"id":"weilang","name":"André Weil","born":1906,"died":1998,"image":"/images/people/feynman.jpg","gender":1}]');var wg=ot('<span class="difficulty-badge svelte-1uha8ag"> </span>'),Rg=ot('<div class="list-card-aka svelte-1uha8ag"><strong class="svelte-1uha8ag">Also known as:</strong> </div>'),Cg=ot('<div class="list-card-notable svelte-1uha8ag"><strong class="svelte-1uha8ag">Notable Years:</strong> </div>'),Pg=ot('<span class="more svelte-1uha8ag"> </span>'),Dg=ot('<div class="list-card-contributors svelte-1uha8ag"><strong class="svelte-1uha8ag">Contributors:</strong> <!></div>'),Lg=ot('<p class="list-card-notes svelte-1uha8ag"> </p>'),Ug=ot('<button class="list-card svelte-1uha8ag"><div class="list-card-header svelte-1uha8ag"><h3 class="svelte-1uha8ag"> </h3> <div class="header-right svelte-1uha8ag"><!> <span class="year svelte-1uha8ag"> </span></div></div> <!> <!> <div class="list-card-meta svelte-1uha8ag"><span class="badge svelte-1uha8ag"> </span> <span class="type svelte-1uha8ag"> </span></div> <!> <!> <div class="list-card-footer svelte-1uha8ag">Click to view in 3D →</div></button>'),Ig=ot('<div class="list-view svelte-1uha8ag"><div class="list-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mathematical Topics</h1> <div class="sort-controls svelte-1uha8ag"><label for="sort-select" class="svelte-1uha8ag">Sort by:</label> <select id="sort-select" class="svelte-1uha8ag"><option>Year (Chronological)</option><option>Name (A-Z)</option><option>Category</option><option>Type (Pure/Applied)</option><option>Difficulty</option></select></div></div> <div class="list-cards svelte-1uha8ag"></div></div>'),Ng=ot('<button class="back-button svelte-1uha8ag" aria-label="Go to previous card"> </button>'),Fg=ot('<div class="difficulty-menu svelte-1uha8ag"><button class="difficulty-option clear-option svelte-1uha8ag">✓ All Levels</button> <div class="difficulty-separator svelte-1uha8ag"></div> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #22c55e">●</span> High School</label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #3b82f6">●</span> Undergraduate</label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #f59e0b">●</span> Postgraduate</label> <label class="difficulty-option svelte-1uha8ag"><input type="checkbox" class="svelte-1uha8ag"/> <span class="difficulty-label svelte-1uha8ag" style="color: #ef4444">●</span> Research</label></div>'),Og=ot('<div class="difficulty-filter svelte-1uha8ag"><button class="difficulty-toggle svelte-1uha8ag" aria-label="Filter by difficulty"> <span class="arrow svelte-1uha8ag"> </span></button> <!></div>'),Bg=ot('<button class="search-button svelte-1uha8ag" aria-label="Find path between topics" title="Pathfinding">🗺️</button>'),zg=ot('<button class="quick-search-button svelte-1uha8ag" aria-label="Quick search" title="Quick search topics/contributors">🔍</button>'),kg=ot("<option> </option>"),Gg=ot("<option> </option>"),Hg=ot('<div class="quick-search-panel svelte-1uha8ag"><button class="close-search-button svelte-1uha8ag">✕</button> <h3 class="svelte-1uha8ag">Quick Search</h3> <div class="search-section svelte-1uha8ag"><label for="topic-search" class="svelte-1uha8ag">Search Topics:</label> <select id="topic-search" class="svelte-1uha8ag"><option>Select a topic...</option><!></select></div> <div class="search-section svelte-1uha8ag"><label for="contributor-search" class="svelte-1uha8ag">Search Contributors:</label> <select id="contributor-search" class="svelte-1uha8ag"><option>Select a contributor...</option><!></select></div></div>'),Vg=ot("<option> </option>"),Wg=ot("<option> </option>"),Xg=ot('<div class="error svelte-1uha8ag"> </div>'),qg=ot('<li class="svelte-1uha8ag"> </li>'),Yg=ot('<div class="path-result svelte-1uha8ag"><h4 class="svelte-1uha8ag"> </h4> <ol class="svelte-1uha8ag"></ol></div>'),jg=ot('<div class="search-panel svelte-1uha8ag"><button class="close-search-button svelte-1uha8ag">✕</button> <h3 class="svelte-1uha8ag">Find Path Between Topics</h3> <select class="svelte-1uha8ag"><option>Select starting topic...</option><!></select> <select class="svelte-1uha8ag"><option>Select destination topic...</option><!></select> <button class="find-button svelte-1uha8ag">Find Path</button> <!></div>'),Kg=ot('<button class="overlay-button svelte-1uha8ag"> </button>'),Zg=ot('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">👥 Contributors</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),$g=ot('<button class="overlay-button leads-button svelte-1uha8ag"> </button>'),Jg=ot('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">➜ Leads To</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),Qg=ot('<button class="overlay-button prereq-button svelte-1uha8ag"> <span class="strength-badge svelte-1uha8ag"> </span></button>'),e_=ot('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">📚 Prerequisites</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),t_=ot('<div class="card-overlay-panel svelte-1uha8ag"><button class="overlay-close-button svelte-1uha8ag">✕</button> <h2 class="svelte-1uha8ag"> </h2> <!> <!> <!></div>'),n_=ot('<img class="svelte-1uha8ag"/> <div class="placeholder-img svelte-1uha8ag" style="display: none;"> </div>',1),i_=ot('<div class="placeholder-img svelte-1uha8ag"> </div>'),r_=ot("<br/> ",1),a_=ot('<p class="dates svelte-1uha8ag"><!> <!></p>'),s_=ot('<div class="person-detail-card svelte-1uha8ag"><button class="close-person svelte-1uha8ag">✕</button> <div class="person-detail-content svelte-1uha8ag"><!> <h3 class="svelte-1uha8ag"> </h3> <!></div></div>'),o_=ot('<div class="scene-container svelte-1uha8ag"></div> <!>  <!> <button class="view-button svelte-1uha8ag" aria-label="Toggle view mode"> </button> <!> <!> <!> <!> <!>  <!> <!>',1);function p_(i,e){Gc(e,!1);let t=Gt(),n,r,a,s,o=[],l=Gt([]),c=Gt(null),d=Gt([]),p=new Map,u=Gt(null),m=Gt(!1),g=Gt(!1),y=Gt(""),f=Gt(""),h=Gt(null),A=Gt("3d"),T=Gt("year"),M=Gt(new Set),k=Gt(!1);const w=600,C=75,U=.3,S=.1,x={Foundations:"#8b5cf6","Algebra and Discrete":"#3b82f6",Analysis:"#10b981","Geometry and Topology":"#f59e0b","Probability, Statistics and Stochastic Processes":"#ef4444","Optimisation and Control":"#ec4899",Computation:"#06b6d4",Physics:"#f97316"},D={"High School":"#22c55e",UGrad:"#3b82f6",PGrad:"#f59e0b",Research:"#ef4444"};function X(N,ee,z){const se=((N.year+600)/2700-.5)*w,ie=N.type==="Pure Math"?-1:1,Y=Object.keys(x).indexOf(N.category),oe=ee/z-.5,P=ie*(Y*4+8)+oe*2.5,q=oe*C;return new B(se,P,q)}function V(N,ee){const se=new Oi;se.userData={topic:N,type:"card"};const he=x[N.category]||"#ffffff",ie=20,ce=document.createElement("canvas"),Y=ce.getContext("2d");ce.width=768,ce.height=1024,Y.fillStyle=he,Y.fillRect(0,0,ce.width,ce.height),Y.fillStyle="#1a1a2e",Y.fillRect(ie,ie,ce.width-ie*2,ce.height-ie*2);let oe=60;Y.fillStyle="#ffffff",Y.font="bold 66px Arial",Y.textAlign="center",Y.textBaseline="top";const P=N.name.split(" "),q=[];let E=P[0];for(let Te=1;Te<P.length;Te++){const nt=P[Te];Y.measureText(E+" "+nt).width<ce.width-100?E+=" "+nt:(q.push(E),E=nt)}if(q.push(E),q.forEach(Te=>{Y.fillText(Te,ce.width/2,oe),oe+=75}),N.difficulty){const Te=D[N.difficulty]||"#888888";Y.fillStyle=Te,Y.font="bold 28px Arial",Y.textAlign="center",Y.fillText(N.difficulty.toUpperCase(),ce.width/2,oe),oe+=45}oe+=10,Y.font="42px Arial",Y.fillStyle="#aaaaaa";const I=N.year<0?`${Math.abs(N.year)} BC`:`${N.year} AD`;Y.fillText(I,ce.width/2,oe),oe+=65,Y.font="36px Arial",Y.fillStyle=he;const K=N.category.split(" ");let Q=[],de=K[0];for(let Te=1;Te<K.length;Te++){const nt=K[Te];Y.measureText(de+" "+nt).width<ce.width-100?de+=" "+nt:(Q.push(de),de=nt)}Q.push(de),Q.forEach(Te=>{Y.fillText(Te,ce.width/2,oe),oe+=40}),oe+=20,Y.font="30px Arial",Y.fillStyle="#999999",Y.fillText(N.type,ce.width/2,oe),oe+=50,N.contributors&&N.contributors.length>0&&(Y.fillStyle="#cccccc",Y.font="bold 26px Arial",Y.textAlign="center",Y.fillText("Contributors",ce.width/2,oe),oe+=40,Y.font="28px Arial",Y.fillStyle="#aaaaaa",Y.textAlign="left",N.contributors.slice(0,8).forEach(Te=>{const nt=ri.find(rn=>rn.id===Te),Pt=nt?nt.name:Te.charAt(0).toUpperCase()+Te.slice(1);Y.fillText(`• ${Pt}`,60,oe),oe+=34}),N.contributors.length>8&&(Y.textAlign="center",Y.fillStyle="#999",Y.fillText(`+${N.contributors.length-8} more`,ce.width/2,oe),oe+=30),Y.textAlign="center",oe+=10),N.leadsTo&&N.leadsTo.length>0&&(Y.fillStyle="#cccccc",Y.font="bold 26px Arial",Y.fillText("Leads To",ce.width/2,oe),oe+=40,Y.font="26px Arial",Y.fillStyle="#6366f1",Y.textAlign="left",N.leadsTo.slice(0,10).forEach(Te=>{const nt=Rt.find(Pt=>Pt.id===Te);if(nt){const Pt=`➜ ${nt.name}`;Y.fillText(Pt,60,oe),oe+=34}}),N.leadsTo.length>10&&(Y.textAlign="center",Y.fillStyle="#999",Y.fillText(`+${N.leadsTo.length-10} more`,ce.width/2,oe)));const Le=new Ja(ce),Ee=document.createElement("canvas"),me=Ee.getContext("2d");if(Ee.width=768,Ee.height=1024,me.fillStyle=he,me.fillRect(0,0,Ee.width,Ee.height),me.fillStyle="#1a1a2e",me.fillRect(ie,ie,Ee.width-ie*2,Ee.height-ie*2),oe=80,me.fillStyle="#cccccc",me.font="bold 22px Arial",me.textAlign="center",me.fillText("Prerequisites",Ee.width/2,oe),oe+=35,N.prerequisites&&N.prerequisites.length>0?(me.font="24px Arial",me.fillStyle="#aaaaaa",me.textAlign="left",N.prerequisites.forEach(Te=>{const nt=Rt.find(Pt=>Pt.id===Te.id);if(nt){const Pt=`• ${nt.name} (${Te.strength}%)`;me.fillText(Pt,60,oe),oe+=32}}),me.textAlign="center",oe+=20):(me.font="24px Arial",me.fillStyle="#999999",me.textAlign="center",me.fillText("None",Ee.width/2,oe),oe+=40),N.notes){me.fillStyle="#cccccc",me.font="bold 22px Arial",me.fillText("Notes",Ee.width/2,oe),oe+=35,me.font="24px Arial",me.fillStyle="#aaaaaa",me.textAlign="left";const Te=N.notes.split(" ");let nt="";Te.forEach(Pt=>{const rn=nt+(nt?" ":"")+Pt;me.measureText(rn).width>Ee.width-100&&nt?(me.fillText(nt,50,oe),oe+=32,nt=Pt):nt=rn}),nt&&me.fillText(nt,50,oe)}const Ye=new Ja(Ee),at=new lr({map:Le,roughness:.7,metalness:.3}),Fe=new lr({map:Ye,roughness:.7,metalness:.3}),Ze=new lr({color:he,emissive:he,emissiveIntensity:0,roughness:.6,metalness:.4}),Ge=[Ze,Ze,Ze,Ze,at,Fe],Ve=new Ki(5,7,U),Xe=new $t(Ve,Ge);return Xe.userData={topic:N,type:"cardMesh"},se.add(Xe),se.position.copy(ee),se}function $(N,ee,z=50){const j=new B().subVectors(ee,N),se=j.length();j.normalize();const he=.05+(z-50)/50*.1,ie=he*4,ce=2.5,Y=ce,oe=ce-ie*.5,P=se-Y-oe;if(P<=0)return null;const q=new Oi,E=N.clone().add(j.clone().multiplyScalar(Y)),I=ee.clone().sub(j.clone().multiplyScalar(oe)),K=new pr(he,he,P,8),Q=new lr({color:6514417,emissive:5195493,emissiveIntensity:.2,transparent:!0,opacity:.6}),de=new $t(K,Q);de.position.copy(E).add(j.clone().multiplyScalar(P/2)),de.quaternion.setFromUnitVectors(new B(0,1,0),j),q.add(de);const Le=new io(he*2,ie,8),Ee=new $t(Le,Q);return Ee.position.copy(I).add(j.clone().multiplyScalar(ie*.5)),Ee.quaternion.setFromUnitVectors(new B(0,1,0),j),q.add(Ee),q.userData.originalMaterial=Q.clone(),q.userData.isArrow=!0,q}function ae(){n=new rg,n.background=new st(0),r=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.set(0,0,50),a=new ig({antialias:!0}),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),R(t).appendChild(a.domElement),s=new pg(r,a.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.screenSpacePanning=!0,s.minDistance=2,s.maxDistance=600;const N=new hg(16777215,.6);n.add(N);const ee=new pl(16777215,.8);ee.position.set(10,10,10),n.add(ee);const z=new pl(16777215,.4);z.position.set(-10,-10,-10),n.add(z);const j=new pn,se=[];for(let Fe=0;Fe<1e3;Fe++){const Ze=(Math.random()-.5)*1e3,Ge=(Math.random()-.5)*1e3,Ve=(Math.random()-.5)*1e3;se.push(Ze,Ge,Ve)}j.setAttribute("position",new fn(se,3));const he=new hc({color:16777215,size:S}),ie=new og(j,he);n.add(ie);const ce=w+20,Y=new pr(.15,.15,ce,16),oe=new lr({color:5592405,emissive:3355443,emissiveIntensity:.3,metalness:.5,roughness:.5}),P=new $t(Y,oe);P.rotation.z=Math.PI/2,P.position.set(0,0,0),n.add(P);const q=(Fe,Ze)=>{const Ge=document.createElement("canvas"),Ve=Ge.getContext("2d");Ge.width=512,Ge.height=128,Ve.fillStyle="#ffffff",Ve.font="bold 48px Arial",Ve.textAlign="center",Ve.textBaseline="middle",Ve.fillText(Fe,Ge.width/2,Ge.height/2);const Xe=new Ja(Ge),Te=new lc({map:Xe,transparent:!0}),nt=new sg(Te);return nt.scale.set(15,3.75,1),nt.position.set(-w/2-15,Ze,0),nt};n.add(q("PURE MATH",-20)),n.add(q("APPLIED MATH",20));const E=q("TIME",0);E.position.set(-w/2-15,0,0),n.add(E);const I={};Rt.forEach(Fe=>{I[Fe.category]||(I[Fe.category]=[]),I[Fe.category].push(Fe)}),Rt.forEach((Fe,Ze)=>{const Ge=I[Fe.category],Ve=Ge.indexOf(Fe),Xe=X(Fe,Ve,Ge.length),Te=V(Fe,Xe);n.add(Te),o.push(Te)}),Rt.forEach(Fe=>{const Ze=o.find(Ge=>Ge.userData.topic.id===Fe.id);Ze&&Fe.leadsTo&&Fe.leadsTo.length>0&&Fe.leadsTo.forEach(Ge=>{const Ve=o.find(Xe=>Xe.userData.topic.id===Ge);if(Ve){const Xe=$(Ze.position,Ve.position,75);Xe&&(Xe.userData.fromCard=Ze,Xe.userData.toCard=Ve,n.add(Xe),R(l).push(Xe))}})});let K={x:0,y:0},Q=!1;function de(Fe){Q=!1,K.x=Fe.clientX||Fe.touches&&Fe.touches[0].clientX||0,K.y=Fe.clientY||Fe.touches&&Fe.touches[0].clientY||0}function Le(Fe){if(K.x!==0||K.y!==0){const Ze=(Fe.clientX||0)-K.x,Ge=(Fe.clientY||0)-K.y;(Math.abs(Ze)>5||Math.abs(Ge)>5)&&(Q=!0)}}function Ee(){setTimeout(()=>{K.x=0,K.y=0},10)}a.domElement.addEventListener("mousedown",de),a.domElement.addEventListener("mousemove",Le),a.domElement.addEventListener("mouseup",Ee),a.domElement.addEventListener("touchstart",de),a.domElement.addEventListener("touchend",Ee);const me=new dg;me.far=1e3;const Ye=new ke;function at(Fe){if(Q)return;Ye.x=Fe.clientX/window.innerWidth*2-1,Ye.y=-(Fe.clientY/window.innerHeight)*2+1,me.setFromCamera(Ye,r);const Ze=me.intersectObjects(R(l),!0);if(Ze.length>0){let Ve=null;for(let Xe of Ze){let Te=Xe.object;for(;Te;){if(Te.userData&&Te.userData.isArrow){Ve=Te;break}Te=Te.parent}if(Ve)break}if(Ve){let Xe=p.get(Ve);Xe?Xe.clickCount===1?(Xe.clickCount=2,Xe.toCard&&(Z(Xe.toCard),it(c,Xe.toCard.userData.topic))):Xe.clickCount===2?(Xe.clickCount=3,Xe.fromCard&&(Z(Xe.fromCard),it(c,Xe.fromCard.userData.topic))):(Ve.children.forEach(Te=>{Te.material&&(Te.material.color.set(6514417),Te.material.emissive.set(5195493),Te.material.emissiveIntensity=.2,Te.material.opacity=.6)}),p.delete(Ve)):(Xe={clickCount:1,fromCard:Ve.userData.fromCard,toCard:Ve.userData.toCard},p.set(Ve,Xe),Ve.children.forEach(Te=>{Te.material&&(Te.material.color.set(16777215),Te.material.emissive.set(13421772),Te.material.emissiveIntensity=.5,Te.material.opacity=1)}));return}}const Ge=me.intersectObjects(o,!0);if(Ge.length>0){let Ve=null;for(let Xe of Ge){let Te=Xe.object;for(;Te;){if(Te.userData&&Te.userData.type==="card"){Ve=Te;break}Te=Te.parent}if(Ve)break}Ve&&(Z(Ve),it(c,Ve.userData.topic))}}a.domElement.addEventListener("click",at),window.addEventListener("resize",J),ge(),setTimeout(()=>{const Fe=[...Rt].sort((Ze,Ge)=>Ze.year-Ge.year)[0];if(Fe){const Ze=o.find(Ge=>Ge.userData.topic.id===Fe.id);if(Ze){it(c,Fe);const Ge=Ze.position.clone(),Ve=new B(0,0,12),Xe=Ge.clone().add(Ve);r.position.copy(Xe),s.target.copy(Ge),s.update()}}},500)}function Z(N){R(c)&&R(c).id!==N.userData.topic.id&&(it(d,[...R(d),R(c)]),console.log("Added to history:",R(c).name,"History length:",R(d).length));const ee=N.position.clone(),z=new B(0,0,12),j=ee.clone().add(z),se=r.position.clone(),he=s.target.clone();let ie=0;function ce(){if(ie+=.03,ie>=1){r.position.copy(j),s.target.copy(ee),s.update();return}r.position.lerpVectors(se,j,ie),s.target.lerpVectors(he,ee,ie),s.update(),requestAnimationFrame(ce)}ce()}function fe(){if(console.log("goToPreviousCard called, history length:",R(d).length),R(d).length>0){const N=R(d)[R(d).length-1];it(d,R(d).slice(0,-1)),console.log("Going back to:",N.name,"New history length:",R(d).length);const ee=o.find(z=>z.userData.topic.id===N.id);if(ee){let Y=function(){if(ce+=.03,ce>=1){r.position.copy(se),s.target.copy(z),s.update();return}r.position.lerpVectors(he,se,ce),s.target.lerpVectors(ie,z,ce),s.update(),requestAnimationFrame(Y)};it(c,N);const z=ee.position.clone(),j=new B(0,0,12),se=z.clone().add(j),he=r.position.clone(),ie=s.target.clone();let ce=0;Y()}}}function J(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function ge(){requestAnimationFrame(ge),s.update(),o.forEach(N=>{const ee=R(c)&&N.userData.topic.id===R(c).id;N.children.forEach(z=>{if(z.userData&&z.userData.type==="cardMesh"&&Array.isArray(z.material))for(let j=0;j<4;j++)z.material[j].emissive&&(z.material[j].emissiveIntensity=ee?.6:0)})}),a.render(n,r)}function Se(){it(A,R(A)==="3d"?"list":"3d"),R(A)==="list"&&it(m,!1)}function Re(N){R(M).has(N)?R(M).delete(N):R(M).add(N),it(M,R(M))}function qe(){it(M,new Set),it(k,!1)}function ct(){const N=[...Rt],ee={"High School":1,UGrad:2,PGrad:3,Research:4};switch(R(T)){case"year":return N.sort((z,j)=>z.year-j.year);case"name":return N.sort((z,j)=>z.name.localeCompare(j.name));case"category":return N.sort((z,j)=>z.category.localeCompare(j.category)||z.year-j.year);case"type":return N.sort((z,j)=>z.type.localeCompare(j.type)||z.year-j.year);case"difficulty":return N.sort((z,j)=>{const se=ee[z.difficulty]||999,he=ee[j.difficulty]||999;return se-he||z.year-j.year});default:return N}}function te(){it(m,!R(m)),R(m)||it(h,null)}function pe(){const N={};Rt.forEach((Y,oe)=>{N[Y.id]=oe});const ee=Rt.length,z=Array(ee).fill(null).map(()=>Array(ee).fill(1/0)),j=Array(ee).fill(null).map(()=>Array(ee).fill(null));for(let Y=0;Y<ee;Y++)z[Y][Y]=0;Rt.forEach((Y,oe)=>{Y.leadsTo&&Y.leadsTo.forEach(P=>{const q=N[P];q!==void 0&&(z[oe][q]=1,j[oe][q]=q)})});for(let Y=0;Y<ee;Y++)for(let oe=0;oe<ee;oe++)for(let P=0;P<ee;P++)z[oe][Y]+z[Y][P]<z[oe][P]&&(z[oe][P]=z[oe][Y]+z[Y][P],j[oe][P]=j[oe][Y]);const se=N[R(y)],he=N[R(f)];if(se===void 0||he===void 0){it(h,{error:"Invalid topic selection"});return}if(z[se][he]===1/0){it(h,{error:"No route, try again"});return}const ie=[se];let ce=se;for(;ce!==he;)ce=j[ce][he],ie.push(ce);it(h,{path:ie.map(Y=>Rt[Y]),length:z[se][he]}),Ce(R(h).path)}function Ce(N){R(l).forEach(ee=>n.remove(ee)),it(l,[]),Rt.forEach(ee=>{const z=o.find(j=>j.userData.topic.id===ee.id);z&&ee.leadsTo&&ee.leadsTo.length>0&&ee.leadsTo.forEach(j=>{const se=o.find(he=>he.userData.topic.id===j);if(se){const he=$(z.position,se.position,75);he&&(he.children.forEach(ie=>{ie.material&&(ie.material.opacity=.2)}),n.add(he),R(l).push(he))}})});for(let ee=0;ee<N.length-1;ee++){const z=o.find(se=>se.userData.topic.id===N[ee].id),j=o.find(se=>se.userData.topic.id===N[ee+1].id);if(z&&j){const se=$(z.position,j.position,100);if(se){const he=ee/(N.length-1)*.8,ie=new st().setHSL(he,1,.5);se.children.forEach(ce=>{ce.material&&(ce.material.color=ie,ce.material.emissive=ie,ce.material.emissiveIntensity=.5,ce.material.opacity=1)}),n.add(se),R(l).push(se)}}}}fc(()=>(ae(),()=>{window.removeEventListener("resize",J),a&&a.dispose()})),Hc(()=>(R(M),R(l)),()=>{o.length>0&&(o.forEach(N=>{const ee=N.userData.topic;R(M).size===0||R(M).has(ee.difficulty)?N.visible=!0:N.visible=!1}),R(l).forEach(N=>{if(R(M).size===0)N.visible=!0;else{const ee=N.userData.fromCard,z=N.userData.toCard;N.visible=ee&&z&&ee.visible&&z.visible}}))}),Vc(),Yc();var xe=o_(),Be=$n(xe);qc(Be,N=>it(t,N),()=>R(t));var He=we(Be,2);{var Qe=N=>{var ee=Ig(),z=Pe(ee),j=we(Pe(z),2),se=we(Pe(j),2);pt(()=>{R(T),xa(()=>{})});var he=Pe(se);he.value=he.__value="year";var ie=we(he);ie.value=ie.__value="name";var ce=we(ie);ce.value=ce.__value="category";var Y=we(ce);Y.value=Y.__value="type";var oe=we(Y);oe.value=oe.__value="difficulty",be(se),be(j),be(z);var P=we(z,2);En(P,5,()=>Me(ct),bn,(q,E)=>{var I=Ug(),K=Pe(I),Q=Pe(K),de=Pe(Q,!0);be(Q);var Le=we(Q,2),Ee=Pe(Le);{var me=St=>{var v=wg(),L=Pe(v,!0);be(v),pt(()=>{xr(v,`background: ${R(E),Me(()=>D[R(E).difficulty])??""}`),dt(L,(R(E),Me(()=>R(E).difficulty)))}),$e(St,v)};gt(Ee,St=>{R(E),Me(()=>R(E).difficulty)&&St(me)})}var Ye=we(Ee,2),at=Pe(Ye,!0);be(Ye),be(Le),be(K);var Fe=we(K,2);{var Ze=St=>{var v=Rg(),L=we(Pe(v));be(v),pt(G=>dt(L,` ${G??""}`),[()=>(R(E),Me(()=>R(E).aka.join(", ")))]),$e(St,v)};gt(Fe,St=>{R(E),Me(()=>R(E).aka&&R(E).aka.length>0)&&St(Ze)})}var Ge=we(Fe,2);{var Ve=St=>{var v=Cg(),L=we(Pe(v));be(v),pt(G=>dt(L,` ${G??""}`),[()=>(R(E),Me(()=>R(E).notableYears.map(G=>G<0?`${Math.abs(G)} BC`:`${G} AD`).join(", ")))]),$e(St,v)};gt(Ge,St=>{R(E),Me(()=>R(E).notableYears&&R(E).notableYears.length>0)&&St(Ve)})}var Xe=we(Ge,2),Te=Pe(Xe),nt=Pe(Te,!0);be(Te);var Pt=we(Te,2),rn=Pe(Pt,!0);be(Pt),be(Xe);var mi=we(Xe,2);{var _r=St=>{const v=cr(()=>(R(E),Sn(ri),Me(()=>R(E).contributors.slice(0,4).map(ue=>{const _e=ri.find(Ae=>Ae.id===ue);return _e?_e.name:ue.charAt(0).toUpperCase()+ue.slice(1)}).join(", "))));var L=Dg(),G=we(Pe(L)),W=we(G);{var F=ue=>{var _e=Pg(),Ae=Pe(_e);be(_e),pt(()=>dt(Ae,`+${R(E),Me(()=>R(E).contributors.length-4)??""} more`)),$e(ue,_e)};gt(W,ue=>{R(E),Me(()=>R(E).contributors.length>4)&&ue(F)})}be(L),pt(()=>dt(G,` ${R(v)??""} `)),$e(St,L)};gt(mi,St=>{R(E),Me(()=>R(E).contributors&&R(E).contributors.length>0)&&St(_r)})}var pa=we(mi,2);{var ma=St=>{var v=Lg(),L=Pe(v,!0);be(v),pt(()=>dt(L,(R(E),Me(()=>R(E).notes)))),$e(St,v)};gt(pa,St=>{R(E),Me(()=>R(E).notes)&&St(ma)})}er(2),be(I),pt(St=>{xr(I,`border-left: 4px solid ${R(E),Me(()=>x[R(E).category]||"#fff")??""}`),dt(de,(R(E),Me(()=>R(E).name))),dt(at,St),xr(Te,`background: ${R(E),Me(()=>x[R(E).category])??""}`),dt(nt,(R(E),Me(()=>R(E).category))),dt(rn,(R(E),Me(()=>R(E).type)))},[()=>(R(E),Me(()=>R(E).year<0?`${Math.abs(R(E).year)} BC`:`${R(E).year} AD`))]),wt("click",I,()=>{it(A,"3d"),setTimeout(()=>{const St=o.find(v=>v.userData.topic.id===R(E).id);St&&(Z(St),it(c,R(E)))},100)}),$e(q,I)}),be(P),be(ee),Ma(se,()=>R(T),q=>it(T,q)),$e(N,ee)};gt(He,N=>{R(A)==="list"&&N(Qe)})}var yt=we(He,2);{var rt=N=>{var ee=Ng(),z=Pe(ee);be(ee),pt(()=>dt(z,`← Back (${R(d),Me(()=>R(d).length)??""})`)),wt("click",ee,fe),$e(N,ee)};gt(yt,N=>{R(A),R(d),Me(()=>R(A)==="3d"&&R(d).length>0)&&N(rt)})}var Mt=we(yt,2),O=Pe(Mt,!0);be(Mt);var zt=we(Mt,2);{var tt=N=>{var ee=Og(),z=Pe(ee),j=Pe(z),se=we(j),he=Pe(se,!0);be(se),be(z);var ie=we(z,2);{var ce=Y=>{var oe=Fg(),P=Pe(oe),q=we(P,4),E=Pe(q);yr(E),er(3),be(q);var I=we(q,2),K=Pe(I);yr(K),er(3),be(I);var Q=we(I,2),de=Pe(Q);yr(de),er(3),be(Q);var Le=we(Q,2),Ee=Pe(Le);yr(Ee),er(3),be(Le),be(oe),pt((me,Ye,at,Fe)=>{Mr(E,me),Mr(K,Ye),Mr(de,at),Mr(Ee,Fe)},[()=>(R(M),Me(()=>R(M).has("High School"))),()=>(R(M),Me(()=>R(M).has("UGrad"))),()=>(R(M),Me(()=>R(M).has("PGrad"))),()=>(R(M),Me(()=>R(M).has("Research")))]),wt("click",P,qe),wt("change",E,()=>Re("High School")),wt("change",K,()=>Re("UGrad")),wt("change",de,()=>Re("PGrad")),wt("change",Ee,()=>Re("Research")),$e(Y,oe)};gt(ie,Y=>{R(k)&&Y(ce)})}be(ee),pt(()=>{dt(j,`${R(M),Me(()=>R(M).size===0?"All Levels":`${R(M).size} Level${R(M).size>1?"s":""}`)??""} `),dt(he,R(k)?"▲":"▼")}),wt("click",z,()=>it(k,!R(k))),$e(N,ee)};gt(zt,N=>{R(A)==="3d"&&N(tt)})}var et=we(zt,2);{var ze=N=>{var ee=Bg();wt("click",ee,te),$e(N,ee)};gt(et,N=>{R(A)==="3d"&&N(ze)})}var mt=we(et,2);{var Oe=N=>{var ee=zg();wt("click",ee,()=>it(g,!R(g))),$e(N,ee)};gt(mt,N=>{R(A)==="3d"&&N(Oe)})}var b=we(mt,2);{var _=N=>{var ee=Hg(),z=Pe(ee),j=we(z,4),se=we(Pe(j),2),he=Pe(se);he.value=he.__value="";var ie=we(he);En(ie,1,()=>(Sn(Rt),Me(()=>Rt.sort((q,E)=>q.name.localeCompare(E.name)))),bn,(q,E)=>{var I=kg(),K=Pe(I,!0);be(I);var Q={};pt(()=>{dt(K,(R(E),Me(()=>R(E).name))),Q!==(Q=(R(E),Me(()=>R(E).id)))&&(I.value=(I.__value=(R(E),Me(()=>R(E).id)))??"")}),$e(q,I)}),be(se),be(j);var ce=we(j,2),Y=we(Pe(ce),2),oe=Pe(Y);oe.value=oe.__value="";var P=we(oe);En(P,1,()=>(Sn(ri),Me(()=>ri.sort((q,E)=>q.name.localeCompare(E.name)))),bn,(q,E)=>{var I=Gg(),K=Pe(I,!0);be(I);var Q={};pt(()=>{dt(K,(R(E),Me(()=>R(E).name))),Q!==(Q=(R(E),Me(()=>R(E).id)))&&(I.value=(I.__value=(R(E),Me(()=>R(E).id)))??"")}),$e(q,I)}),be(Y),be(ce),be(ee),wt("click",z,()=>it(g,!1)),wt("change",se,q=>{const E=q.target.value;if(E){const I=Rt.find(Q=>Q.id===E),K=o.find(Q=>Q.userData.topic.id===E);I&&K&&(Z(K),it(c,I),it(g,!1))}}),wt("change",Y,q=>{const E=q.target.value;if(E){const I=Rt.find(K=>K.contributors&&K.contributors.includes(E));if(I){const K=o.find(Q=>Q.userData.topic.id===I.id);K&&(Z(K),it(c,I),it(g,!1))}}}),$e(N,ee)};gt(b,N=>{R(g)&&N(_)})}var H=we(b,2);{var re=N=>{var ee=jg(),z=Pe(ee),j=we(z,4);pt(()=>{R(y),xa(()=>{})});var se=Pe(j);se.value=se.__value="";var he=we(se);En(he,1,()=>Rt,bn,(E,I)=>{var K=Vg(),Q=Pe(K,!0);be(K);var de={};pt(()=>{dt(Q,(R(I),Me(()=>R(I).name))),de!==(de=(R(I),Me(()=>R(I).id)))&&(K.value=(K.__value=(R(I),Me(()=>R(I).id)))??"")}),$e(E,K)}),be(j);var ie=we(j,2);pt(()=>{R(f),xa(()=>{})});var ce=Pe(ie);ce.value=ce.__value="";var Y=we(ce);En(Y,1,()=>Rt,bn,(E,I)=>{var K=Wg(),Q=Pe(K,!0);be(K);var de={};pt(()=>{dt(Q,(R(I),Me(()=>R(I).name))),de!==(de=(R(I),Me(()=>R(I).id)))&&(K.value=(K.__value=(R(I),Me(()=>R(I).id)))??"")}),$e(E,K)}),be(ie);var oe=we(ie,2),P=we(oe,2);{var q=E=>{var I=vr(),K=$n(I);{var Q=Le=>{var Ee=Xg(),me=Pe(Ee,!0);be(Ee),pt(()=>dt(me,(R(h),Me(()=>R(h).error)))),$e(Le,Ee)},de=Le=>{var Ee=Yg(),me=Pe(Ee),Ye=Pe(me);be(me);var at=we(me,2);En(at,5,()=>(R(h),Me(()=>R(h).path)),bn,(Fe,Ze)=>{var Ge=qg(),Ve=Pe(Ge,!0);be(Ge),pt(()=>dt(Ve,(R(Ze),Me(()=>R(Ze).name)))),$e(Fe,Ge)}),be(at),be(Ee),pt(()=>dt(Ye,`Path Found (Length: ${R(h),Me(()=>R(h).length)??""})`)),$e(Le,Ee)};gt(K,Le=>{R(h),Me(()=>R(h).error)?Le(Q):Le(de,!1)})}$e(E,I)};gt(P,E=>{R(h)&&E(q)})}be(ee),wt("click",z,te),Ma(j,()=>R(y),E=>it(y,E)),Ma(ie,()=>R(f),E=>it(f,E)),wt("click",oe,pe),$e(N,ee)};gt(H,N=>{R(m)&&N(re)})}var le=we(H,2);{var ne=N=>{var ee=t_(),z=Pe(ee),j=we(z,2),se=Pe(j,!0);be(j);var he=we(j,2);{var ie=q=>{var E=Zg(),I=we(Pe(E),2);En(I,5,()=>(R(c),Me(()=>R(c).contributors)),bn,(K,Q)=>{const de=cr(()=>(Sn(ri),R(Q),Me(()=>ri.find(Ye=>Ye.id===R(Q)))));var Le=vr(),Ee=$n(Le);{var me=Ye=>{var at=Kg(),Fe=Pe(at,!0);be(at),pt(()=>dt(Fe,(Sn(R(de)),Me(()=>R(de).name)))),wt("click",at,()=>{var Ze;return it(u,((Ze=R(u))==null?void 0:Ze.id)===R(de).id?null:{...R(de)})}),$e(Ye,at)};gt(Ee,Ye=>{R(de)&&Ye(me)})}$e(K,Le)}),be(I),be(E),$e(q,E)};gt(he,q=>{R(c),Me(()=>R(c).contributors&&R(c).contributors.length>0)&&q(ie)})}var ce=we(he,2);{var Y=q=>{var E=Jg(),I=we(Pe(E),2);En(I,5,()=>(R(c),Me(()=>R(c).leadsTo)),bn,(K,Q)=>{const de=cr(()=>(Sn(Rt),R(Q),Me(()=>Rt.find(Ye=>Ye.id===R(Q)))));var Le=vr(),Ee=$n(Le);{var me=Ye=>{var at=$g(),Fe=Pe(at,!0);be(at),pt(()=>dt(Fe,(Sn(R(de)),Me(()=>R(de).name)))),wt("click",at,()=>{const Ze=o.find(Ge=>Ge.userData.topic.id===R(Q));Ze&&(Z(Ze),it(c,R(de)))}),$e(Ye,at)};gt(Ee,Ye=>{R(de)&&Ye(me)})}$e(K,Le)}),be(I),be(E),$e(q,E)};gt(ce,q=>{R(c),Me(()=>R(c).leadsTo&&R(c).leadsTo.length>0)&&q(Y)})}var oe=we(ce,2);{var P=q=>{var E=e_(),I=we(Pe(E),2);En(I,5,()=>(R(c),Me(()=>R(c).prerequisites)),bn,(K,Q)=>{const de=cr(()=>(Sn(Rt),R(Q),Me(()=>Rt.find(Ye=>Ye.id===R(Q).id))));var Le=vr(),Ee=$n(Le);{var me=Ye=>{var at=Qg(),Fe=Pe(at),Ze=we(Fe),Ge=Pe(Ze);be(Ze),be(at),pt(()=>{dt(Fe,`${Sn(R(de)),Me(()=>R(de).name)??""} `),dt(Ge,`${R(Q),Me(()=>R(Q).strength)??""}%`)}),wt("click",at,()=>{const Ve=o.find(Xe=>Xe.userData.topic.id===R(Q).id);Ve&&(Z(Ve),it(c,R(de)))}),$e(Ye,at)};gt(Ee,Ye=>{R(de)&&Ye(me)})}$e(K,Le)}),be(I),be(E),$e(q,E)};gt(oe,q=>{R(c),Me(()=>R(c).prerequisites&&R(c).prerequisites.length>0)&&q(P)})}be(ee),pt(()=>dt(se,(R(c),Me(()=>R(c).name)))),wt("click",z,()=>it(c,null)),$e(N,ee)};gt(le,N=>{R(c)&&R(A)==="3d"&&N(ne)})}var De=we(le,2);{var ye=N=>{var ee=s_(),z=Pe(ee),j=we(z,2),se=Pe(j);{var he=q=>{var E=n_(),I=$n(E),K=we(I,2),Q=Pe(K,!0);be(K),pt(de=>{na(I,"src",`.${R(u),Me(()=>R(u).image)??""}`),na(I,"alt",(R(u),Me(()=>R(u).name))),dt(Q,de)},[()=>(R(u),Me(()=>R(u).name.split(" ").map(de=>de[0]).join("")))]),wt("error",I,de=>{de.target.style.display="none",de.target.nextElementSibling.style.display="flex"}),$e(q,E)},ie=q=>{var E=i_(),I=Pe(E,!0);be(E),pt(K=>dt(I,K),[()=>(R(u),Me(()=>R(u).name.split(" ").map(K=>K[0]).join("")))]),$e(q,E)};gt(se,q=>{R(u),Me(()=>R(u).image)?q(he):q(ie,!1)})}var ce=we(se,2),Y=Pe(ce,!0);be(ce);var oe=we(ce,2);{var P=q=>{var E=a_(),I=Pe(E);{var K=Le=>{var Ee=Xc();pt(()=>dt(Ee,`Born: ${R(u),Me(()=>R(u).born)??""}`)),$e(Le,Ee)};gt(I,Le=>{R(u),Me(()=>R(u).born)&&Le(K)})}var Q=we(I,2);{var de=Le=>{var Ee=r_(),me=we($n(Ee));pt(()=>dt(me,`Died: ${R(u),Me(()=>R(u).died)??""}`)),$e(Le,Ee)};gt(Q,Le=>{R(u),Me(()=>R(u).died)&&Le(de)})}be(E),$e(q,E)};gt(oe,q=>{R(u),Me(()=>R(u).born||R(u).died)&&q(P)})}be(j),be(ee),pt(()=>dt(Y,(R(u),Me(()=>R(u).name)))),wt("click",z,()=>it(u,null)),$e(N,ee)};gt(De,N=>{R(u)&&N(ye)})}pt(()=>{xr(Be,`display: ${R(A)==="3d"?"block":"none"}`),dt(O,R(A)==="3d"?"📋":"🌌")}),wt("click",Mt,Se),$e(i,xe),Wc()}export{p_ as component};
