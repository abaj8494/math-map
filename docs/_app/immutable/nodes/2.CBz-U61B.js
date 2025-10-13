import"../chunks/Bzak7iHL.js";import"../chunks/B78LEuUD.js";import{o as lc,e as Yt,s as _t}from"../chunks/DN4Rsz9R.js";import{m as fa,j as un,ad as cc,o as gl,k as hc,i as dc,g as D,aC as cr,l as uc,H as fc,s as to,n as pa,x as Qi,T as pc,al as mc,p as Za,t as gc,aQ as aa,aR as sa,q as _c,aS as _l,ai as vl,ab as xl,aM as Wt,O as no,Q as io,v as yl,w as vc,aT as ma,A as xc,a0 as Ml,aU as yc,aV as Mc,a6 as Sc,aW as Ec,ah as bc,aX as Tc,R as Ac,aY as wc,y as Rc,aZ as Cc,a_ as Pc,a8 as Dc,a$ as Lc,b0 as Uc,b1 as Ic,b2 as Nc,B as Fc,b3 as Oc,b4 as Bc,C as tt,D as fi,F as ft,G as Ke,I as zc,aE as ct,L as Ie,J as He,K as Oe,b5 as vr,b as Pe,a1 as kc,M as xr,e as qn,aP as Hc}from"../chunks/O2leGY3W.js";import{b as Gc,i as pt}from"../chunks/BU7LXeop.js";import{i as Vc}from"../chunks/BDaR-vKx.js";function Yn(i,e){return e}function Wc(i,e,t){for(var n=i.items,r=[],a=e.length,s=0;s<a;s++)Ec(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;bc(l),l.append(t),n.clear(),dn(i,e[0].prev,e[a-1].next)}Tc(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(n.delete(d.k),dn(i,d.prev,d.next)),Ml(d.e,!o)}})}function jn(i,e,t,n,r,a=null){var s=i,o={flags:e,items:new Map,first:null},l=(e&_l)!==0;if(l){var c=i;s=un?fa(cc(c)):c.appendChild(gl())}un&&hc();var d=null,p=!1,u=new Map,g=cr(()=>{var h=t();return xl(h)?h:h==null?[]:vl(h)}),v,y;function f(){Xc(y,v,o,u,s,r,e,n,t),a!==null&&(v.length===0?d?yl(d):d=Za(()=>a(s)):d!==null&&vc(d,()=>{d=null}))}dc(()=>{y??(y=Ac),v=D(g);var h=v.length;if(p&&h===0)return;p=h===0;let w=!1;if(un){var b=uc(s)===fc;b!==(h===0)&&(s=to(),fa(s),pa(!1),w=!0)}if(un){for(var E=null,z,T=0;T<h;T++){if(Qi.nodeType===pc&&Qi.data===mc){s=Qi,w=!0,pa(!1);break}var R=v[T],L=n(R,T);z=$a(Qi,o,E,null,R,L,T,r,e,t),o.items.set(L,z),E=z}h>0&&fa(to())}if(un)h===0&&a&&(d=Za(()=>a(s)));else if(gc()){var S=new Set,M=_c;for(T=0;T<h;T+=1){R=v[T],L=n(R,T);var P=o.items.get(L)??u.get(L);P?(e&(aa|sa))!==0&&Sl(P,R,T,e):(z=$a(null,o,null,null,R,L,T,r,e,t,!0),u.set(L,z)),S.add(L)}for(const[W,H]of o.items)S.has(W)||M.skipped_effects.add(H.e);M.add_callback(f)}else f();w&&pa(!0),D(g)}),un&&(s=Qi)}function Xc(i,e,t,n,r,a,s,o,l){var ge,xe,Te,Ge;var c=(s&Mc)!==0,d=(s&(aa|sa))!==0,p=e.length,u=t.items,g=t.first,v=g,y,f=null,h,w=[],b=[],E,z,T,R;if(c)for(R=0;R<p;R+=1)E=e[R],z=o(E,R),T=u.get(z),T!==void 0&&((ge=T.a)==null||ge.measure(),(h??(h=new Set)).add(T));for(R=0;R<p;R+=1){if(E=e[R],z=o(E,R),T=u.get(z),T===void 0){var L=n.get(z);if(L!==void 0){n.delete(z),u.set(z,L);var S=f?f.next:v;dn(t,f,L),dn(t,L,S),ga(L,S,r),f=L}else{var M=v?v.e.nodes_start:r;f=$a(M,t,f,f===null?t.first:f.next,E,z,R,a,s,l)}u.set(z,f),w=[],b=[],v=f.next;continue}if(d&&Sl(T,E,R,s),(T.e.f&ma)!==0&&(yl(T.e),c&&((xe=T.a)==null||xe.unfix(),(h??(h=new Set)).delete(T))),T!==v){if(y!==void 0&&y.has(T)){if(w.length<b.length){var P=b[0],W;f=P.prev;var H=w[0],j=w[w.length-1];for(W=0;W<w.length;W+=1)ga(w[W],P,r);for(W=0;W<b.length;W+=1)y.delete(b[W]);dn(t,H.prev,j.next),dn(t,f,H),dn(t,j,P),v=P,f=j,R-=1,w=[],b=[]}else y.delete(T),ga(T,v,r),dn(t,T.prev,T.next),dn(t,T,f===null?t.first:f.next),dn(t,f,T),f=T;continue}for(w=[],b=[];v!==null&&v.k!==z;)(v.e.f&ma)===0&&(y??(y=new Set)).add(v),b.push(v),v=v.next;if(v===null)continue;T=v}w.push(T),f=T,v=T.next}if(v!==null||y!==void 0){for(var ae=y===void 0?[]:vl(y);v!==null;)(v.e.f&ma)===0&&ae.push(v),v=v.next;var J=ae.length;if(J>0){var ce=(s&_l)!==0&&p===0?r:null;if(c){for(R=0;R<J;R+=1)(Te=ae[R].a)==null||Te.measure();for(R=0;R<J;R+=1)(Ge=ae[R].a)==null||Ge.fix()}Wc(t,ae,ce)}}c&&xc(()=>{var Je;if(h!==void 0)for(T of h)(Je=T.a)==null||Je.apply()}),i.first=t.first&&t.first.e,i.last=f&&f.e;for(var $ of n.values())Ml($.e);n.clear()}function Sl(i,e,t,n){(n&aa)!==0&&io(i.v,e),(n&sa)!==0?io(i.i,t):i.i=t}function $a(i,e,t,n,r,a,s,o,l,c,d){var p=(l&aa)!==0,u=(l&yc)===0,g=p?u?Wt(r,!1,!1):no(r):r,v=(l&sa)===0?s:no(s),y={i:v,v:g,k:a,a:null,e:null,prev:t,next:n};try{if(i===null){var f=document.createDocumentFragment();f.append(i=gl())}return y.e=Za(()=>o(i,g,v,c),un),y.e.prev=t&&t.e,y.e.next=n&&n.e,t===null?d||(e.first=y):(t.next=y,t.e.next=y.e),n!==null&&(n.prev=y,n.e.prev=y.e),y}finally{}}function ga(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=i.e.nodes_start;a!==null&&a!==n;){var s=Sc(a);r.before(a),a=s}}function dn(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function qc(i,e){return i==null?null:String(i)}function yr(i,e,t,n){var r=i.__style;if(un||r!==e){var a=qc(e);(!un||a!==i.getAttribute("style"))&&(a==null?i.removeAttribute("style"):i.style.cssText=a),i.__style=e}return n}function El(i,e,t=!1){if(i.multiple){if(e==null)return;if(!xl(e))return Cc();for(var n of i.options)n.selected=e.includes(ur(n));return}for(n of i.options){var r=ur(n);if(Pc(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Yc(i){var e=new MutationObserver(()=>{El(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dc(()=>{e.disconnect()})}function Mr(i,e,t=e){var n=!0;wc(i,"change",r=>{var a=r?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(a),ur);else{var o=i.querySelector(a)??i.querySelector("option:not([disabled])");s=o&&ur(o)}t(s)}),Rc(()=>{var r=e();if(El(i,r,n),n&&r===void 0){var a=i.querySelector(":checked");a!==null&&(r=ur(a),t(r))}i.__value=r,n=!1}),Yc(i)}function ur(i){return"__value"in i?i.__value:i.value}const jc=Symbol("is custom element"),Kc=Symbol("is html");function ro(i,e,t,n){var r=Zc(i);un&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="loading"&&(i[Lc]=t),t==null?i.removeAttribute(e):typeof t!="string"&&$c(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Zc(i){return i.__attributes??(i.__attributes={[jc]:i.nodeName.includes("-"),[Kc]:i.namespaceURI===Uc})}var ao=new Map;function $c(i){var e=i.getAttribute("is")||i.nodeName,t=ao.get(e);if(t)return t;ao.set(e,t=[]);for(var n,r=i,a=Element.prototype;a!==r;){n=Nc(r);for(var s in n)n[s].set&&t.push(s);r=Ic(r)}return t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="170",Ni={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jc=0,so=1,Qc=2,bl=1,eh=2,bn=3,Wn=0,zt=1,Tn=2,Hn=0,Fi=1,oo=2,lo=3,co=4,th=5,ni=100,nh=101,ih=102,rh=103,ah=104,sh=200,oh=201,lh=202,ch=203,Ja=204,Qa=205,hh=206,dh=207,uh=208,fh=209,ph=210,mh=211,gh=212,_h=213,vh=214,es=0,ts=1,ns=2,zi=3,is=4,rs=5,as=6,ss=7,Tl=0,xh=1,yh=2,Gn=0,Mh=1,Sh=2,Eh=3,bh=4,Th=5,Ah=6,wh=7,Al=300,ki=301,Hi=302,os=303,ls=304,oa=306,cs=1e3,ri=1001,hs=1002,rn=1003,Rh=1004,Sr=1005,mn=1006,_a=1007,ai=1008,Cn=1009,wl=1010,Rl=1011,fr=1012,Vs=1013,si=1014,An=1015,mr=1016,Ws=1017,Xs=1018,Gi=1020,Cl=35902,Pl=1021,Dl=1022,nn=1023,Ll=1024,Ul=1025,Oi=1026,Vi=1027,Il=1028,qs=1029,Nl=1030,Ys=1031,js=1033,Kr=33776,Zr=33777,$r=33778,Jr=33779,ds=35840,us=35841,fs=35842,ps=35843,ms=36196,gs=37492,_s=37496,vs=37808,xs=37809,ys=37810,Ms=37811,Ss=37812,Es=37813,bs=37814,Ts=37815,As=37816,ws=37817,Rs=37818,Cs=37819,Ps=37820,Ds=37821,Qr=36492,Ls=36494,Us=36495,Fl=36283,Is=36284,Ns=36285,Fs=36286,Ch=3200,Ph=3201,Ol=0,Dh=1,kn="",Kt="srgb",Xi="srgb-linear",la="linear",rt="srgb",pi=7680,ho=519,Lh=512,Uh=513,Ih=514,Bl=515,Nh=516,Fh=517,Oh=518,Bh=519,Os=35044,uo="300 es",wn=2e3,na=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ea=Math.PI/180,Bs=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function va(i,e,t){return(1-t)*i+t*e}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:ea};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,a,s,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],g=n[5],v=n[8],y=r[0],f=r[3],h=r[6],w=r[1],b=r[4],E=r[7],z=r[2],T=r[5],R=r[8];return a[0]=s*y+o*w+l*z,a[3]=s*f+o*b+l*T,a[6]=s*h+o*E+l*R,a[1]=c*y+d*w+p*z,a[4]=c*f+d*b+p*T,a[7]=c*h+d*E+p*R,a[2]=u*y+g*w+v*z,a[5]=u*f+g*b+v*T,a[8]=u*h+g*E+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*a*d+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*a,g=c*a-s*l,v=t*p+n*u+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=p*y,e[1]=(r*c-d*n)*y,e[2]=(o*n-r*s)*y,e[3]=u*y,e[4]=(d*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=g*y,e[7]=(n*l-c*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new We;function zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=ia("canvas");return i.style.display="block",i}const fo={};function hr(i){i in fo||(fo[i]=!0,console.warn(i))}function Gh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Vh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const po=[.64,.33,.3,.6,.15,.06],mo=[.2126,.7152,.0722],go=[.3127,.329],_o=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Xi]:{primaries:po,whitePoint:go,transfer:la,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:mo,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:po,whitePoint:go,transfer:rt,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:mo,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let mi;class Xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=ia("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Rn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qh=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ya(r[s].image)):a.push(ya(r[s]))}else a=ya(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Ft extends ci{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=ri,r=ri,a=mn,s=ai,o=nn,l=Cn,c=Ft.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Vn(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Al;Ft.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],g=l[5],v=l[9],y=l[2],f=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(v+f)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(g+1)/2,z=(h+1)/2,T=(d+u)/4,R=(p+y)/4,L=(v+f)/4;return b>E&&b>z?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=T/n,a=R/n):E>z?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=T/r,a=L/r):z<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(z),n=R/a,r=L/a),this.set(n,r,a,t),this}let w=Math.sqrt((f-v)*(f-v)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(f-v)/w,this.y=(p-y)/w,this.z=(u-d)/w,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ft(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hl extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3];const u=a[s+0],g=a[s+1],v=a[s+2],y=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(p!==y||l!==u||c!==g||d!==v){let f=1-o;const h=l*u+c*g+d*v+p*y,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const z=Math.sqrt(b),T=Math.atan2(z,h*w);f=Math.sin(f*T)/z,o=Math.sin(o*T)/z}const E=o*w;if(l=l*f+u*E,c=c*f+g*E,d=d*f+v*E,p=p*f+y*E,f===1-o){const z=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=z,c*=z,d*=z,p*=z}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],p=a[s],u=a[s+1],g=a[s+2],v=a[s+3];return e[t]=o*v+d*p+l*g-c*u,e[t+1]=l*v+d*u+c*p-o*g,e[t+2]=c*v+d*g+o*u-l*p,e[t+3]=d*v-o*p-l*u-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),p=o(a/2),u=l(n/2),g=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=u*d*p+c*g*v,this._y=c*g*p-u*d*v,this._z=c*d*v+u*g*p,this._w=c*d*p-u*g*v;break;case"YXZ":this._x=u*d*p+c*g*v,this._y=c*g*p-u*d*v,this._z=c*d*v-u*g*p,this._w=c*d*p+u*g*v;break;case"ZXY":this._x=u*d*p-c*g*v,this._y=c*g*p+u*d*v,this._z=c*d*v+u*g*p,this._w=c*d*p-u*g*v;break;case"ZYX":this._x=u*d*p-c*g*v,this._y=c*g*p+u*d*v,this._z=c*d*v-u*g*p,this._w=c*d*p+u*g*v;break;case"YZX":this._x=u*d*p+c*g*v,this._y=c*g*p+u*d*v,this._z=c*d*v-u*g*p,this._w=c*d*p-u*g*v;break;case"XZY":this._x=u*d*p-c*g*v,this._y=c*g*p-u*d*v,this._z=c*d*v+u*g*p,this._w=c*d*p+u*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-n*c,this._z=a*d+s*c+n*l-r*o,this._w=s*d-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=s*p+this._w*u,this._x=n*p+this._x*u,this._y=r*p+this._y*u,this._z=a*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),d=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-a*p,this.z=r+l*p+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new F,xo=new li;class gr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Qt):Qt.fromBufferAttribute(a,s),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),br.subVectors(this.max,er),gi.subVectors(e.a,er),_i.subVectors(e.b,er),vi.subVectors(e.c,er),Un.subVectors(_i,gi),In.subVectors(vi,_i),Kn.subVectors(gi,vi);let t=[0,-Un.z,Un.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Un.z,0,-Un.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Un.y,Un.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Sa(t,gi,_i,vi,br)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,gi,_i,vi,br))?!1:(Tr.crossVectors(Un,In),t=[Tr.x,Tr.y,Tr.z],Sa(t,gi,_i,vi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new F,new F,new F,new F,new F,new F,new F,new F],Qt=new F,Er=new gr,gi=new F,_i=new F,vi=new F,Un=new F,In=new F,Kn=new F,er=new F,br=new F,Tr=new F,Zn=new F;function Sa(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Zn.fromArray(i,a);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),d=n.dot(Zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Zh=new gr,tr=new F,Ea=new F;class ca{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ea)),this.expandByPoint(tr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new F,ba=new F,Ar=new F,Nn=new F,Ta=new F,wr=new F,Aa=new F;class ha{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ba.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(ba);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ar),o=Nn.dot(this.direction),l=-Nn.dot(Ar),c=Nn.lengthSq(),d=Math.abs(1-s*s);let p,u,g,v;if(d>0)if(p=s*l-o,u=s*o-l,v=a*d,p>=0)if(u>=-v)if(u<=v){const y=1/d;p*=y,u*=y,g=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-s*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),g=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),g=u*(u+2*l)+c):(p=Math.max(0,-(s*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),g=-p*p+u*(u+2*l)+c);else u=s>0?-a:a,p=Math.max(0,-(s*u+o)),g=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ba).addScaledVector(Ar,u),g}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,a){Ta.subVectors(t,e),wr.subVectors(n,e),Aa.crossVectors(Ta,wr);let s=this.direction.dot(Aa),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Nn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(Nn,wr));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(Nn));if(c<0||l+c>s)return null;const d=-o*Nn.dot(Aa);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,a,s,o,l,c,d,p,u,g,v,y,f){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,d,p,u,g,v,y,f)}set(e,t,n,r,a,s,o,l,c,d,p,u,g,v,y,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=g,h[7]=v,h[11]=y,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),a=1/xi.setFromMatrixColumn(e,1).length(),s=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const u=s*d,g=s*p,v=o*d,y=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=g+v*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=v+g*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,g=l*p,v=c*d,y=c*p;t[0]=u+y*o,t[4]=v*o-g,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=g*o-v,t[6]=y+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,g=l*p,v=c*d,y=c*p;t[0]=u-y*o,t[4]=-s*p,t[8]=v+g*o,t[1]=g+v*o,t[5]=s*d,t[9]=y-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,g=s*p,v=o*d,y=o*p;t[0]=l*d,t[4]=v*c-g,t[8]=u*c+y,t[1]=l*p,t[5]=y*c+u,t[9]=g*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,g=s*c,v=o*l,y=o*c;t[0]=l*d,t[4]=y-u*p,t[8]=v*p+g,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=g*p+v,t[10]=u-y*p}else if(e.order==="XZY"){const u=s*l,g=s*c,v=o*l,y=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+y,t[5]=s*d,t[9]=g*p-v,t[2]=v*p-g,t[6]=o*d,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Jh)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Fn.crossVectors(n,Gt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Fn.crossVectors(n,Gt)),Fn.normalize(),Rr.crossVectors(Gt,Fn),r[0]=Fn.x,r[4]=Rr.x,r[8]=Gt.x,r[1]=Fn.y,r[5]=Rr.y,r[9]=Gt.y,r[2]=Fn.z,r[6]=Rr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],g=n[13],v=n[2],y=n[6],f=n[10],h=n[14],w=n[3],b=n[7],E=n[11],z=n[15],T=r[0],R=r[4],L=r[8],S=r[12],M=r[1],P=r[5],W=r[9],H=r[13],j=r[2],ae=r[6],J=r[10],ce=r[14],$=r[3],ge=r[7],xe=r[11],Te=r[15];return a[0]=s*T+o*M+l*j+c*$,a[4]=s*R+o*P+l*ae+c*ge,a[8]=s*L+o*W+l*J+c*xe,a[12]=s*S+o*H+l*ce+c*Te,a[1]=d*T+p*M+u*j+g*$,a[5]=d*R+p*P+u*ae+g*ge,a[9]=d*L+p*W+u*J+g*xe,a[13]=d*S+p*H+u*ce+g*Te,a[2]=v*T+y*M+f*j+h*$,a[6]=v*R+y*P+f*ae+h*ge,a[10]=v*L+y*W+f*J+h*xe,a[14]=v*S+y*H+f*ce+h*Te,a[3]=w*T+b*M+E*j+z*$,a[7]=w*R+b*P+E*ae+z*ge,a[11]=w*L+b*W+E*J+z*xe,a[15]=w*S+b*H+E*ce+z*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],g=e[14],v=e[3],y=e[7],f=e[11],h=e[15];return v*(+a*l*p-r*c*p-a*o*u+n*c*u+r*o*g-n*l*g)+y*(+t*l*g-t*c*u+a*s*u-r*s*g+r*c*d-a*l*d)+f*(+t*c*p-t*o*g-a*s*p+n*s*g+a*o*d-n*c*d)+h*(-r*o*d-t*l*p+t*o*u+r*s*p-n*s*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],g=e[11],v=e[12],y=e[13],f=e[14],h=e[15],w=p*f*c-y*u*c+y*l*g-o*f*g-p*l*h+o*u*h,b=v*u*c-d*f*c-v*l*g+s*f*g+d*l*h-s*u*h,E=d*y*c-v*p*c+v*o*g-s*y*g-d*o*h+s*p*h,z=v*p*l-d*y*l-v*o*u+s*y*u+d*o*f-s*p*f,T=t*w+n*b+r*E+a*z;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=w*R,e[1]=(y*u*a-p*f*a-y*r*g+n*f*g+p*r*h-n*u*h)*R,e[2]=(o*f*a-y*l*a+y*r*c-n*f*c-o*r*h+n*l*h)*R,e[3]=(p*l*a-o*u*a-p*r*c+n*u*c+o*r*g-n*l*g)*R,e[4]=b*R,e[5]=(d*f*a-v*u*a+v*r*g-t*f*g-d*r*h+t*u*h)*R,e[6]=(v*l*a-s*f*a-v*r*c+t*f*c+s*r*h-t*l*h)*R,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*g+t*l*g)*R,e[8]=E*R,e[9]=(v*p*a-d*y*a-v*n*g+t*y*g+d*n*h-t*p*h)*R,e[10]=(s*y*a-v*o*a+v*n*c-t*y*c-s*n*h+t*o*h)*R,e[11]=(d*o*a-s*p*a-d*n*c+t*p*c+s*n*g-t*o*g)*R,e[12]=z*R,e[13]=(d*y*r-v*p*r+v*n*u-t*y*u-d*n*f+t*p*f)*R,e[14]=(v*o*r-s*y*r-v*n*l+t*y*l+s*n*f-t*o*f)*R,e[15]=(s*p*r-d*o*r+d*n*l-t*p*l-s*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,p=o+o,u=a*c,g=a*d,v=a*p,y=s*d,f=s*p,h=o*p,w=l*c,b=l*d,E=l*p,z=n.x,T=n.y,R=n.z;return r[0]=(1-(y+h))*z,r[1]=(g+E)*z,r[2]=(v-b)*z,r[3]=0,r[4]=(g-E)*T,r[5]=(1-(u+h))*T,r[6]=(f+w)*T,r[7]=0,r[8]=(v+b)*R,r[9]=(f-w)*R,r[10]=(1-(u+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=xi.set(r[0],r[1],r[2]).length();const s=xi.set(r[4],r[5],r[6]).length(),o=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/a,d=1/s,p=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=p,en.elements[9]*=p,en.elements[10]*=p,t.setFromRotationMatrix(en),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=wn){const l=this.elements,c=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),u=(n+r)/(n-r);let g,v;if(o===wn)g=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===na)g=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=wn){const l=this.elements,c=1/(t-e),d=1/(n-r),p=1/(s-a),u=(t+e)*c,g=(n+r)*d;let v,y;if(o===wn)v=(s+a)*p,y=-2*p;else if(o===na)v=a*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new F,en=new vt,$h=new F(0,0,0),Jh=new F(1,1,1),Fn=new F,Rr=new F,Gt=new F,yo=new vt,Mo=new li;class gn{constructor(e=0,t=0,n=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],u=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Ks{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qh=0;const So=new F,yi=new li,Mn=new vt,Cr=new F,nr=new F,ed=new F,td=new li,Eo=new F(1,0,0),bo=new F(0,1,0),To=new F(0,0,1),Ao={type:"added"},nd={type:"removed"},Mi={type:"childadded",child:null},wa={type:"childremoved",child:null};class Rt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new F,t=new gn,n=new li,r=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(nr,Cr,this.up):Mn.lookAt(Cr,nr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ao),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ao),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),g=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new F,Sn=new F,Ra=new F,En=new F,Si=new F,Ei=new F,wo=new F,Ca=new F,Pa=new F,Da=new F,La=new Mt,Ua=new Mt,Ia=new Mt;class $t{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){tn.subVectors(r,t),Sn.subVectors(n,t),Ra.subVectors(e,t);const s=tn.dot(tn),o=tn.dot(Sn),l=tn.dot(Ra),c=Sn.dot(Sn),d=Sn.dot(Ra),p=s*c-o*o;if(p===0)return a.set(0,0,0),null;const u=1/p,g=(c*l-o*d)*u,v=(s*d-o*l)*u;return a.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,En.x),l.addScaledVector(s,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return La.setScalar(0),Ua.setScalar(0),Ia.setScalar(0),La.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(La,a.x),s.addScaledVector(Ua,a.y),s.addScaledVector(Ia,a.z),s}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),Sn.subVectors(e,t),tn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Si.subVectors(r,n),Ei.subVectors(a,n),Ca.subVectors(e,n);const l=Si.dot(Ca),c=Ei.dot(Ca);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,r);const d=Si.dot(Pa),p=Ei.dot(Pa);if(d>=0&&p<=d)return t.copy(r);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Si,s);Da.subVectors(e,a);const g=Si.dot(Da),v=Ei.dot(Da);if(v>=0&&g<=v)return t.copy(a);const y=g*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ei,o);const f=d*v-g*p;if(f<=0&&p-d>=0&&g-v>=0)return wo.subVectors(a,r),o=(p-d)/(p-d+(g-v)),t.copy(r).addScaledVector(wo,o);const h=1/(f+y+u);return s=y*h,o=u*h,t.copy(n).addScaledVector(Si,s).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=zh(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Na(s,a,e+1/3),this.g=Na(s,a,e),this.b=Na(s,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Nt(Dt.r*255,0,255))*65536+Math.round(Nt(Dt.g*255,0,255))*256+Math.round(Nt(Dt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,a=Dt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-n)/p+2;break;case a:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Kt){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Pr);const n=va(On.h,Pr.h,t),r=va(On.s,Pr.s,t),a=va(On.l,Pr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new $e;$e.NAMES=Gl;let id=0;class hi extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Vn(),this.name="",this.blending=Fi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vl extends hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,Dr=new Ne;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Os,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),a=at(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Os&&(e.usage=this.usage),e}}class Wl extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rd=0;const jt=new vt,Fa=new Rt,bi=new F,Vt=new gr,ir=new gr,At=new F;class on extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?Xl:Wl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new We().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new sn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Vt.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Vt.min,ir.min),Vt.expandByPoint(At),At.addVectors(Vt.max,ir.max),Vt.expandByPoint(At)):(Vt.expandByPoint(ir.min),Vt.expandByPoint(ir.max))}Vt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(At));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(e,c),At.add(bi)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new F,l[L]=new F;const c=new F,d=new F,p=new F,u=new Ne,g=new Ne,v=new Ne,y=new F,f=new F;function h(L,S,M){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,M),u.fromBufferAttribute(a,L),g.fromBufferAttribute(a,S),v.fromBufferAttribute(a,M),d.sub(c),p.sub(c),g.sub(u),v.sub(u);const P=1/(g.x*v.y-v.x*g.y);isFinite(P)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(P),f.copy(p).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(P),o[L].add(y),o[S].add(y),o[M].add(y),l[L].add(f),l[S].add(f),l[M].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,S=w.length;L<S;++L){const M=w[L],P=M.start,W=M.count;for(let H=P,j=P+W;H<j;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new F,E=new F,z=new F,T=new F;function R(L){z.fromBufferAttribute(r,L),T.copy(z);const S=o[L];b.copy(S),b.sub(z.multiplyScalar(z.dot(S))).normalize(),E.crossVectors(T,S);const P=E.dot(l[L])<0?-1:1;s.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,S=w.length;L<S;++L){const M=w[L],P=M.start,W=M.count;for(let H=P,j=P+W;H<j;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const r=new F,a=new F,s=new F,o=new F,l=new F,c=new F,d=new F,p=new F;if(e)for(let u=0,g=e.count;u<g;u+=3){const v=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,f),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,g=t.count;u<g;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),p.subVectors(r,a),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let g=0,v=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*d;for(let h=0;h<d;h++)u[v++]=c[g++]}return new an(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],g=e(u,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],p=a[c];for(let u=0,g=p.length;u<g;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new vt,$n=new ha,Lr=new ca,Co=new F,Ur=new F,Ir=new F,Nr=new F,Oa=new F,Fr=new F,Po=new F,Or=new F;class Xt extends Rt{constructor(e=new on,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Fr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],p=a[l];d!==0&&(Oa.fromBufferAttribute(p,e),s?Fr.addScaledVector(Oa,d):Fr.addScaledVector(Oa.sub(t),d))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(a),$n.copy(e.ray).recast(e.near),!(Lr.containsPoint($n.origin)===!1&&($n.intersectSphere(Lr,Co)===null||$n.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ro.copy(a).invert(),$n.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,y=u.length;v<y;v++){const f=u[v],h=s[f.materialIndex],w=Math.max(f.start,g.start),b=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let E=w,z=b;E<z;E+=3){const T=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);r=Br(this,h,e,n,c,d,p,T,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let f=v,h=y;f<h;f+=3){const w=o.getX(f),b=o.getX(f+1),E=o.getX(f+2);r=Br(this,s,e,n,c,d,p,w,b,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,y=u.length;v<y;v++){const f=u[v],h=s[f.materialIndex],w=Math.max(f.start,g.start),b=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let E=w,z=b;E<z;E+=3){const T=E,R=E+1,L=E+2;r=Br(this,h,e,n,c,d,p,T,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let f=v,h=y;f<h;f+=3){const w=f,b=f+1,E=f+2;r=Br(this,s,e,n,c,d,p,w,b,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function ad(i,e,t,n,r,a,s,o){let l;if(e.side===zt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Wn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:i}}function Br(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Ur),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Nr);const d=ad(i,e,t,n,Ur,Ir,Nr,Po);if(d){const p=new F;$t.getBarycoord(Po,Ur,Ir,Nr,p),r&&(d.uv=$t.getInterpolatedAttribute(r,o,l,c,p,new Ne)),a&&(d.uv1=$t.getInterpolatedAttribute(a,o,l,c,p,new Ne)),s&&(d.normal=$t.getInterpolatedAttribute(s,o,l,c,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};$t.getNormal(Ur,Ir,Nr,u.normal),d.face=u,d.barycoord=p}return d}class qi extends on{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],p=[];let u=0,g=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(p,2));function v(y,f,h,w,b,E,z,T,R,L,S){const M=E/R,P=z/L,W=E/2,H=z/2,j=T/2,ae=R+1,J=L+1;let ce=0,$=0;const ge=new F;for(let xe=0;xe<J;xe++){const Te=xe*P-H;for(let Ge=0;Ge<ae;Ge++){const Je=Ge*M-W;ge[y]=Je*w,ge[f]=Te*b,ge[h]=j,c.push(ge.x,ge.y,ge.z),ge[y]=0,ge[f]=0,ge[h]=T>0?1:-1,d.push(ge.x,ge.y,ge.z),p.push(Ge/R),p.push(1-xe/L),ce+=1}}for(let xe=0;xe<L;xe++)for(let Te=0;Te<R;Te++){const Ge=u+Te+ae*xe,Je=u+Te+ae*(xe+1),ne=u+(Te+1)+ae*(xe+1),he=u+(Te+1)+ae*xe;l.push(Ge,Je,he),l.push(Je,ne,he),$+=6}o.addGroup(g,$,S),g+=$,u+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const od={clone:Wi,merge:It};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new F,Do=new Ne,Lo=new Ne;class Zt extends Yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Lo),t.subVectors(Lo,Do)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class hd extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const s=new Zt(Ti,Ai,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ti,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,u,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jl extends Ft{constructor(e,t,n,r,a,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Hn});a.uniforms.tEquirect.value=t;const s=new Xt(r,a),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=mn),new hd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Ba=new F,ud=new F,fd=new We;class zn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ba.subVectors(n,t).cross(ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fd.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new ca,zr=new F;class Zs{constructor(e=new zn,t=new zn,n=new zn,r=new zn,a=new zn,s=new zn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],d=r[5],p=r[6],u=r[7],g=r[8],v=r[9],y=r[10],f=r[11],h=r[12],w=r[13],b=r[14],E=r[15];if(n[0].setComponents(l-a,u-c,f-g,E-h).normalize(),n[1].setComponents(l+a,u+c,f+g,E+h).normalize(),n[2].setComponents(l+s,u+d,f+v,E+w).normalize(),n[3].setComponents(l-s,u-d,f-v,E-w).normalize(),n[4].setComponents(l-o,u-p,f-y,E-b).normalize(),t===wn)n[5].setComponents(l+o,u+p,f+y,E+b).normalize();else if(t===na)n[5].setComponents(o,p,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function pd(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<p.length;g++){const v=p[u],y=p[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,p[u]=y)}p.length=u+1;for(let g=0,v=p.length;g<v;g++){const y=p[g];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class da extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,p=e/o,u=t/l,g=[],v=[],y=[],f=[];for(let h=0;h<d;h++){const w=h*u-s;for(let b=0;b<c;b++){const E=b*p-a;v.push(E,-w,0),y.push(0,0,1),f.push(b/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const b=w+c*h,E=w+c*(h+1),z=w+1+c*(h+1),T=w+1+c*h;g.push(b,E,T),g.push(E,z,T)}this.setIndex(g),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(y,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
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
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
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
#endif`,fu=`struct PhysicalMaterial {
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
}`,pu=`
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bu=`#if defined( USE_POINTS_UV )
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
#endif`,Tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
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
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qu=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`#include <common>
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
}`,Sf=`#if DEPTH_PACKING == 3200
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
}`,Ef=`#define DISTANCE
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
}`,bf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:yd,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:Ed,batching_vertex:bd,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:wd,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Ud,color_fragment:Id,color_pars_fragment:Nd,color_pars_vertex:Fd,color_vertex:Od,common:Bd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Kd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:ou,envmap_vertex:$d,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:eu,fog_pars_fragment:tu,gradientmap_pars_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:su,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:hu,lights_phong_pars_fragment:du,lights_physical_fragment:uu,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:yu,map_fragment:Mu,map_pars_fragment:Su,map_particle_fragment:Eu,map_particle_pars_fragment:bu,metalnessmap_fragment:Tu,metalnessmap_pars_fragment:Au,morphinstance_vertex:wu,morphcolor_vertex:Ru,morphnormal_vertex:Cu,morphtarget_pars_vertex:Pu,morphtarget_vertex:Du,normal_fragment_begin:Lu,normal_fragment_maps:Uu,normal_pars_fragment:Iu,normal_pars_vertex:Nu,normal_vertex:Fu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Vu,premultiplied_alpha_fragment:Wu,project_vertex:Xu,dithering_fragment:qu,dithering_pars_fragment:Yu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Ku,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:$u,shadowmap_vertex:Ju,shadowmask_pars_fragment:Qu,skinbase_vertex:ef,skinning_pars_vertex:tf,skinning_vertex:nf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:sf,tonemapping_fragment:of,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:hf,uv_pars_fragment:df,uv_pars_vertex:uf,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:_f,backgroundCube_frag:vf,cube_vert:xf,cube_frag:yf,depth_vert:Mf,depth_frag:Sf,distanceRGBA_vert:Ef,distanceRGBA_frag:bf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:wf,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:Df,meshlambert_frag:Lf,meshmatcap_vert:Uf,meshmatcap_frag:If,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:kf,meshtoon_vert:Hf,meshtoon_frag:Gf,points_vert:Vf,points_frag:Wf,shadow_vert:Xf,shadow_frag:qf,sprite_vert:Yf,sprite_frag:jf},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},fn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};fn.physical={uniforms:It([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const kr={r:0,b:0,g:0},Qn=new gn,Kf=new vt;function Zf(i,e,t,n,r,a,s){const o=new $e(0);let l=a===!0?0:1,c,d,p=null,u=0,g=null;function v(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function y(w){let b=!1;const E=v(w);E===null?h(o,l):E&&E.isColor&&(h(E,1),b=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(w,b){const E=v(b);E&&(E.isCubeTexture||E.mapping===oa)?(d===void 0&&(d=new Xt(new qi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Wi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Qn.copy(b.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Qn)),d.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,(p!==E||u!==E.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,u=E.version,g=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Xt(new da(2,2),new Xn({name:"BackgroundMaterial",uniforms:Wi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||u!==E.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,p=E,u=E.version,g=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,b){w.getRGB(kr,ql(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(o,l)},render:y,addToRenderList:f}}function $f(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let a=r,s=!1;function o(M,P,W,H,j){let ae=!1;const J=p(H,W,P);a!==J&&(a=J,c(a.object)),ae=g(M,H,W,j),ae&&v(M,H,W,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,E(M,P,W,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function p(M,P,W){const H=W.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let ae=j[P.id];ae===void 0&&(ae={},j[P.id]=ae);let J=ae[H];return J===void 0&&(J=u(l()),ae[H]=J),J}function u(M){const P=[],W=[],H=[];for(let j=0;j<t;j++)P[j]=0,W[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function g(M,P,W,H){const j=a.attributes,ae=P.attributes;let J=0;const ce=W.getAttributes();for(const $ in ce)if(ce[$].location>=0){const xe=j[$];let Te=ae[$];if(Te===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;J++}return a.attributesNum!==J||a.index!==H}function v(M,P,W,H){const j={},ae=P.attributes;let J=0;const ce=W.getAttributes();for(const $ in ce)if(ce[$].location>=0){let xe=ae[$];xe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),j[$]=Te,J++}a.attributes=j,a.attributesNum=J,a.index=H}function y(){const M=a.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function f(M){h(M,0)}function h(M,P){const W=a.newAttributes,H=a.enabledAttributes,j=a.attributeDivisors;W[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),j[M]!==P&&(i.vertexAttribDivisor(M,P),j[M]=P)}function w(){const M=a.newAttributes,P=a.enabledAttributes;for(let W=0,H=P.length;W<H;W++)P[W]!==M[W]&&(i.disableVertexAttribArray(W),P[W]=0)}function b(M,P,W,H,j,ae,J){J===!0?i.vertexAttribIPointer(M,P,W,j,ae):i.vertexAttribPointer(M,P,W,H,j,ae)}function E(M,P,W,H){y();const j=H.attributes,ae=W.getAttributes(),J=P.defaultAttributeValues;for(const ce in ae){const $=ae[ce];if($.location>=0){let ge=j[ce];if(ge===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const xe=ge.normalized,Te=ge.itemSize,Ge=e.get(ge);if(Ge===void 0)continue;const Je=Ge.buffer,ne=Ge.type,he=Ge.bytesPerElement,be=ne===i.INT||ne===i.UNSIGNED_INT||ge.gpuType===Vs;if(ge.isInterleavedBufferAttribute){const ve=ge.data,Fe=ve.stride,Be=ge.offset;if(ve.isInstancedInterleavedBuffer){for(let qe=0;qe<$.locationSize;qe++)h($.location+qe,ve.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let qe=0;qe<$.locationSize;qe++)f($.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let qe=0;qe<$.locationSize;qe++)b($.location+qe,Te/$.locationSize,ne,xe,Fe*he,(Be+Te/$.locationSize*qe)*he,be)}else{if(ge.isInstancedBufferAttribute){for(let ve=0;ve<$.locationSize;ve++)h($.location+ve,ge.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ve=0;ve<$.locationSize;ve++)f($.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ve=0;ve<$.locationSize;ve++)b($.location+ve,Te/$.locationSize,ne,xe,Te*he,Te/$.locationSize*ve*he,be)}}else if(J!==void 0){const xe=J[ce];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv($.location,xe);break;case 3:i.vertexAttrib3fv($.location,xe);break;case 4:i.vertexAttrib4fv($.location,xe);break;default:i.vertexAttrib1fv($.location,xe)}}}}w()}function z(){L();for(const M in n){const P=n[M];for(const W in P){const H=P[W];for(const j in H)d(H[j].object),delete H[j];delete P[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const W in P){const H=P[W];for(const j in H)d(H[j].object),delete H[j];delete P[W]}delete n[M.id]}function R(M){for(const P in n){const W=n[P];if(W[M.id]===void 0)continue;const H=W[M.id];for(const j in H)d(H[j].object),delete H[j];delete W[M.id]}}function L(){S(),s=!0,a!==r&&(a=r,c(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:z,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:f,disableUnusedAttributes:w}}function Jf(i,e,t){let n;function r(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(n,c,d,p),t.update(d,n,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v];t.update(g,n,1)}function l(c,d,p,u){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)s(c[v],d[v],u[v]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,p);let v=0;for(let y=0;y<p;y++)v+=d[y]*u[y];t.update(v,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:z,maxSamples:T}}function ep(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new zn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const g=p.length!==0||u||n!==0||r;return r=u,n=p.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,g){const v=p.clippingPlanes,y=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!r||v===null||v.length===0||a&&!f)a?d(null):c();else{const w=a?0:n,b=w*4;let E=h.clippingState||null;l.value=E,E=d(v,u,b,g);for(let z=0;z!==b;++z)E[z]=t[z];h.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,g,v){const y=p!==null?p.length:0;let f=null;if(y!==0){if(f=l.value,v!==!0||f===null){const h=g+y*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let b=0,E=g;b!==y;++b,E+=4)s.copy(p[b]).applyMatrix4(w,o),s.normal.toArray(f,E),f[E+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function tp(i){let e=new WeakMap;function t(s,o){return o===os?s.mapping=ki:o===ls&&(s.mapping=Hi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===os||o===ls)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Zl extends Yl{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Uo=[.125,.215,.35,.446,.526,.582],ii=20,za=new Zl,Io=new $e;let ka=null,Ha=0,Ga=0,Va=!1;const ti=(1+Math.sqrt(5))/2,wi=1/ti,No=[new F(-ti,wi,0),new F(ti,wi,0),new F(-wi,0,ti),new F(wi,0,ti),new F(0,ti,-wi),new F(0,ti,wi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ha,Ga),this._renderer.xr.enabled=Va,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:mr,format:nn,colorSpace:Xi,depthBuffer:!1},r=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(a)),this._blurMaterial=ip(a,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,r){const o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(Io),d.toneMapping=Gn,d.autoClear=!1;const g=new Vl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),v=new Xt(new qi,g);let y=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,y=!0):(g.color.copy(Io),y=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const b=this._cubeSize;Hr(r,w*b,h>2?b:0,b,b),d.setRenderTarget(r),y&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=u,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ki||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Xt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=No[(r-a-1)%No.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Xt(this._lodPlanes[r],c),u=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*ii-1),y=a/v,f=isFinite(a)?1+Math.floor(d*y):ii;f>ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ii}`);const h=[];let w=0;for(let R=0;R<ii;++R){const L=R/y,S=Math.exp(-L*L/2);h.push(S),R===0?w+=S:R<f&&(w+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/w;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=v,u.mipInt.value=b-n;const E=this._sizeLods[r],z=3*E*(r>b-Ui?r-b+Ui:0),T=4*(this._cubeSize-E);Hr(t,z,T,3*E,2*E),l.setRenderTarget(t),l.render(p,za)}}function np(i){const e=[],t=[],n=[];let r=i;const a=i-Ui+1+Uo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-Ui?l=Uo[s-i+Ui-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,v=6,y=3,f=2,h=1,w=new Float32Array(y*v*g),b=new Float32Array(f*v*g),E=new Float32Array(h*v*g);for(let T=0;T<g;T++){const R=T%3*2/3-1,L=T>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];w.set(S,y*v*T),b.set(u,f*v*T);const M=[T,T,T,T,T,T];E.set(M,h*v*T)}const z=new on;z.setAttribute("position",new an(w,y)),z.setAttribute("uv",new an(b,f)),z.setAttribute("faceIndex",new an(E,h)),e.push(z),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ip(i,e,t){const n=new Float32Array(ii),r=new F(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$s(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Bo(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function zo(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function $s(){return`

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
	`}function rp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===os||l===ls,d=l===ki||l===Hi;if(c||d){let p=e.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Fo(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&r(g)?(t===null&&(t=new Fo(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sp(i,e,t,n){const r={},a=new WeakMap;function s(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const y=u.morphAttributes[v];for(let f=0,h=y.length;f<h;f++)e.remove(y[f])}u.removeEventListener("dispose",s),delete r[u.id];const g=a.get(u);g&&(e.remove(g),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const v in u)e.update(u[v],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const v in g){const y=g[v];for(let f=0,h=y.length;f<h;f++)e.update(y[f],i.ARRAY_BUFFER)}}function c(p){const u=[],g=p.index,v=p.attributes.position;let y=0;if(g!==null){const w=g.array;y=g.version;for(let b=0,E=w.length;b<E;b+=3){const z=w[b+0],T=w[b+1],R=w[b+2];u.push(z,T,T,R,R,z)}}else if(v!==void 0){const w=v.array;y=v.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const z=b+0,T=b+1,R=b+2;u.push(z,T,T,R,R,z)}}else return;const f=new(zl(u)?Xl:Wl)(u,1);f.version=y;const h=a.get(p);h&&e.remove(h),a.set(p,f)}function d(p){const u=a.get(p);if(u){const g=p.index;g!==null&&u.version<g.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function op(i,e,t){let n;function r(u){n=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,g){i.drawElements(n,g,a,u*s),t.update(g,n,1)}function c(u,g,v){v!==0&&(i.drawElementsInstanced(n,g,a,u*s,v),t.update(g,n,v))}function d(u,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,u,0,v);let f=0;for(let h=0;h<v;h++)f+=g[h];t.update(f,n,1)}function p(u,g,v,y){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)c(u[h]/s,g[h],y[h]);else{f.multiDrawElementsInstancedWEBGL(n,g,0,a,u,0,y,0,v);let h=0;for(let w=0;w<v;w++)h+=g[w]*y[w];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function cp(i,e,t){const n=new WeakMap,r=new Mt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let E=o.attributes.position.count*b,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*z*4*p),R=new Hl(T,E,z,p);R.type=An,R.needsUpdate=!0;const L=b*4;for(let M=0;M<p;M++){const P=f[M],W=h[M],H=w[M],j=E*z*4*M;for(let ae=0;ae<P.count;ae++){const J=ae*L;g===!0&&(r.fromBufferAttribute(P,ae),T[j+J+0]=r.x,T[j+J+1]=r.y,T[j+J+2]=r.z,T[j+J+3]=0),v===!0&&(r.fromBufferAttribute(W,ae),T[j+J+4]=r.x,T[j+J+5]=r.y,T[j+J+6]=r.z,T[j+J+7]=0),y===!0&&(r.fromBufferAttribute(H,ae),T[j+J+8]=r.x,T[j+J+9]=r.y,T[j+J+10]=r.z,T[j+J+11]=H.itemSize===4?r.w:1)}}u={count:p,texture:R,size:new Ne(E,z)},n.set(o,u),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function hp(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return p}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class $l extends Ft{constructor(e,t,n,r,a,s,o,l,c,d=Oi){if(d!==Oi&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Oi&&(n=si),n===void 0&&d===Vi&&(n=Gi),super(null,r,a,s,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jl=new Ft,ko=new $l(1,1),Ql=new Hl,ec=new Kh,tc=new jl,Ho=[],Go=[],Vo=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ho[r];if(a===void 0&&(a=new Float32Array(r),Ho[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Xo.set(n),i.uniformMatrix2fv(this.addr,!1,Xo),Tt(t,n)}}function gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Wo.set(n),i.uniformMatrix3fv(this.addr,!1,Wo),Tt(t,n)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Vo.set(n),i.uniformMatrix4fv(this.addr,!1,Vo),Tt(t,n)}}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(ko.compareFunction=Bl,a=ko):a=Jl,t.setTexture2D(e||a,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ec,r)}function Rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tc,r)}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ql,r)}function Pp(i){switch(i){case 5126:return dp;case 35664:return up;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return yp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return Ep;case 36295:return bp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Dp(i,e){i.uniform1fv(this.addr,e)}function Lp(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Up(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ip(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Np(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fp(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Op(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bp(i,e){i.uniform1iv(this.addr,e)}function zp(i,e){i.uniform2iv(this.addr,e)}function kp(i,e){i.uniform3iv(this.addr,e)}function Hp(i,e){i.uniform4iv(this.addr,e)}function Gp(i,e){i.uniform1uiv(this.addr,e)}function Vp(i,e){i.uniform2uiv(this.addr,e)}function Wp(i,e){i.uniform3uiv(this.addr,e)}function Xp(i,e){i.uniform4uiv(this.addr,e)}function qp(i,e,t){const n=this.cache,r=e.length,a=ua(t,r);bt(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Jl,a[s])}function Yp(i,e,t){const n=this.cache,r=e.length,a=ua(t,r);bt(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ec,a[s])}function jp(i,e,t){const n=this.cache,r=e.length,a=ua(t,r);bt(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||tc,a[s])}function Kp(i,e,t){const n=this.cache,r=e.length,a=ua(t,r);bt(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ql,a[s])}function Zp(i){switch(i){case 5126:return Dp;case 35664:return Lp;case 35665:return Up;case 35666:return Ip;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Kp}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zp(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function qo(i,e){i.seq.push(e),i.map[e.id]=e}function em(i,e,t){const n=i.name,r=n.length;for(Wa.lastIndex=0;;){const a=Wa.exec(n),s=Wa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){qo(t,c===void 0?new $p(o,i,e):new Jp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Qp(o),qo(t,p)),t=p}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);em(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tm=37297;let nm=0;function im(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const jo=new We;function rm(i){Qe._getMatrix(jo,Qe.workingColorSpace,i);const e=`mat3( ${jo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ko(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+im(i.getShaderSource(e),s)}else return r}function am(i,e){const t=rm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sm(i,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case Eh:t="Cineon";break;case bh:t="ACESFilmic";break;case Ah:t="AgX";break;case wh:t="Neutral";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new F;function om(){Qe.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function cm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function dr(i){return i!==""}function Zo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(dm,fm)}const um=new Map;function fm(i,e){let t=Xe[e];if(t===void 0){const n=um.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zs(t)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(pm,mm)}function mm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Qo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function xm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case xh:e="ENVMAP_BLENDING_MIX";break;case yh:e="ENVMAP_BLENDING_ADD";break}return e}function ym(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mm(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=gm(t),c=_m(t),d=vm(t),p=xm(t),u=ym(t),g=lm(t),v=cm(a),y=r.createProgram();let f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),h.length>0&&(h+=`
`)):(f=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),h=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),s=zs(s),s=Zo(s,t),s=$o(s,t),o=zs(o),o=Zo(o,t),o=$o(o,t),s=Jo(s),o=Jo(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=w+f+s,E=w+h+o,z=Yo(r,r.VERTEX_SHADER,b),T=Yo(r,r.FRAGMENT_SHADER,E);r.attachShader(y,z),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(P){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(z).trim(),j=r.getShaderInfoLog(T).trim();let ae=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,z,T);else{const ce=Ko(r,z,"vertex"),$=Ko(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ce+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||j==="")&&(J=!1);J&&(P.diagnostics={runnable:ae,programLog:W,vertexShader:{log:H,prefix:f},fragmentShader:{log:j,prefix:h}})}r.deleteShader(z),r.deleteShader(T),L=new ta(r,y),S=hm(r,y)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,tm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=z,this.fragmentShader=T,this}let Sm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bm(e),t.set(e,n)),n}}class bm{constructor(e){this.id=Sm++,this.code=e,this.usedTimes=0}}function Tm(i,e,t,n,r,a,s){const o=new Ks,l=new Em,c=new Set,d=[],p=r.logarithmicDepthBuffer,u=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,P,W,H){const j=W.fog,ae=H.geometry,J=S.isMeshStandardMaterial?W.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),$=ce&&ce.mapping===oa?ce.image.height:null,ge=v[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Te=xe!==void 0?xe.length:0;let Ge=0;ae.morphAttributes.position!==void 0&&(Ge=1),ae.morphAttributes.normal!==void 0&&(Ge=2),ae.morphAttributes.color!==void 0&&(Ge=3);let Je,ne,he,be;if(ge){const me=fn[ge];Je=me.vertexShader,ne=me.fragmentShader}else Je=S.vertexShader,ne=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const ve=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,qe=H.isBatchedMesh===!0,ht=!!S.map,Ze=!!S.matcap,xt=!!ce,N=!!S.aoMap,Lt=!!S.lightMap,je=!!S.bumpMap,Ye=!!S.normalMap,Ue=!!S.displacementMap,ot=!!S.emissiveMap,Le=!!S.metalnessMap,_=!!S.roughnessMap,m=S.anisotropy>0,C=S.clearcoat>0,B=S.dispersion>0,G=S.iridescence>0,O=S.sheen>0,se=S.transmission>0,Q=m&&!!S.anisotropyMap,k=C&&!!S.clearcoatMap,oe=C&&!!S.clearcoatNormalMap,Z=C&&!!S.clearcoatRoughnessMap,V=G&&!!S.iridescenceMap,ue=G&&!!S.iridescenceThicknessMap,le=O&&!!S.sheenColorMap,re=O&&!!S.sheenRoughnessMap,Me=!!S.specularMap,pe=!!S.specularColorMap,Ee=!!S.specularIntensityMap,A=se&&!!S.transmissionMap,te=se&&!!S.thicknessMap,X=!!S.gradientMap,ee=!!S.alphaMap,K=S.alphaTest>0,ie=!!S.alphaHash,fe=!!S.extensions;let Se=Gn;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Se=i.toneMapping);const De={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:ne,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:qe,batchingColor:qe&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:Ze,envMap:xt,envMapMode:xt&&ce.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:Lt,bumpMap:je,normalMap:Ye,displacementMap:u&&Ue,emissiveMap:ot,normalMapObjectSpace:Ye&&S.normalMapType===Dh,normalMapTangentSpace:Ye&&S.normalMapType===Ol,metalnessMap:Le,roughnessMap:_,anisotropy:m,anisotropyMap:Q,clearcoat:C,clearcoatMap:k,clearcoatNormalMap:oe,clearcoatRoughnessMap:Z,dispersion:B,iridescence:G,iridescenceMap:V,iridescenceThicknessMap:ue,sheen:O,sheenColorMap:le,sheenRoughnessMap:re,specularMap:Me,specularColorMap:pe,specularIntensityMap:Ee,transmission:se,transmissionMap:A,thicknessMap:te,gradientMap:X,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:K,alphaHash:ie,combine:S.combine,mapUv:ht&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:Lt&&y(S.lightMap.channel),bumpMapUv:je&&y(S.bumpMap.channel),normalMapUv:Ye&&y(S.normalMap.channel),displacementMapUv:Ue&&y(S.displacementMap.channel),emissiveMapUv:ot&&y(S.emissiveMap.channel),metalnessMapUv:Le&&y(S.metalnessMap.channel),roughnessMapUv:_&&y(S.roughnessMap.channel),anisotropyMapUv:Q&&y(S.anisotropyMap.channel),clearcoatMapUv:k&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:re&&y(S.sheenRoughnessMap.channel),specularMapUv:Me&&y(S.specularMap.channel),specularColorMapUv:pe&&y(S.specularColorMap.channel),specularIntensityMapUv:Ee&&y(S.specularIntensityMap.channel),transmissionMapUv:A&&y(S.transmissionMap.channel),thicknessMapUv:te&&y(S.thicknessMap.channel),alphaMapUv:ee&&y(S.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ye||m),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(ht||ee),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(w(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=v[S.type];let P;if(M){const W=fn[M];P=od.clone(W.uniforms)}else P=S.uniforms;return P}function z(S,M){let P;for(let W=0,H=d.length;W<H;W++){const j=d[W];if(j.cacheKey===M){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Mm(i,M,S,a),d.push(P)),P}function T(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:E,acquireProgram:z,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:L}}function Am(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(p,u,g,v,y,f){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:u,material:g,groupOrder:v,renderOrder:p.renderOrder,z:y,group:f},i[e]=h):(h.id=p.id,h.object=p,h.geometry=u,h.material=g,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=y,h.group=f),e++,h}function o(p,u,g,v,y,f){const h=s(p,u,g,v,y,f);g.transmission>0?n.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(p,u,g,v,y,f){const h=s(p,u,g,v,y,f);g.transmission>0?n.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(p,u){t.length>1&&t.sort(p||wm),n.length>1&&n.sort(u||el),r.length>1&&r.sort(u||el)}function d(){for(let p=e,u=i.length;p<u;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function Rm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new tl,i.set(n,[s])):r>=a.length?(s=new tl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Pm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Dm=0;function Lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Um(i){const e=new Cm,t=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,a=new vt,s=new vt;function o(c){let d=0,p=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,v=0,y=0,f=0,h=0,w=0,b=0,E=0,z=0,T=0,R=0;c.sort(Lm);for(let S=0,M=c.length;S<M;S++){const P=c[S],W=P.color,H=P.intensity,j=P.distance,ae=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=W.r*H,p+=W.g*H,u+=W.b*H;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],H);R++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ce=P.shadow,$=t.get(P);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=J,g++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(W).multiplyScalar(H),J.distance=j,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[y]=J;const ce=P.shadow;if(P.map&&(n.spotLightMap[z]=P.map,z++,ce.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=ce.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=ae,E++}y++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(W).multiplyScalar(H),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=J,f++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const ce=P.shadow,$=t.get(P);$.shadowIntensity=ce.intensity,$.shadowBias=ce.bias,$.shadowNormalBias=ce.normalBias,$.shadowRadius=ce.radius,$.shadowMapSize=ce.mapSize,$.shadowCameraNear=ce.camera.near,$.shadowCameraFar=ce.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=ae,n.pointShadowMatrix[v]=P.shadow.matrix,b++}n.point[v]=J,v++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(H),J.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[h]=J,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==g||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==f||L.hemiLength!==h||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==z||L.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=f,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+z-T,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=g,L.pointLength=v,L.spotLength=y,L.rectAreaLength=f,L.hemiLength=h,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=z,L.numLightProbes=R,n.version=Dm++)}function l(c,d){let p=0,u=0,g=0,v=0,y=0;const f=d.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const b=c[h];if(b.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),p++}else if(b.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),s.identity(),a.copy(b.matrixWorld),a.premultiply(f),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(f),u++}else if(b.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(f),y++}}}return{setup:o,setupView:l,state:n}}function nl(i){const e=new Um(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Im(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new nl(i),e.set(r,[o])):a>=s.length?(o=new nl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Nm extends hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fm extends hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,e,t){let n=new Zs;const r=new Ne,a=new Ne,s=new Mt,o=new Nm({depthPacking:Ph}),l=new Fm,c={},d=t.maxTextureSize,p={[Wn]:zt,[zt]:Wn,[Tn]:Tn},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const v=new on;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xt(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let h=this.type;this.render=function(T,R,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Hn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=h!==bn&&this.type===bn,j=h===bn&&this.type!==bn;for(let ae=0,J=T.length;ae<J;ae++){const ce=T[ae],$=ce.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ge=$.getFrameExtents();if(r.multiply(ge),a.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ge.x),r.x=a.x*ge.x,$.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ge.y),r.y=a.y*ge.y,$.mapSize.y=a.y)),$.map===null||H===!0||j===!0){const Te=this.type!==bn?{minFilter:rn,magFilter:rn}:{};$.map!==null&&$.map.dispose(),$.map=new oi(r.x,r.y,Te),$.map.texture.name=ce.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const xe=$.getViewportCount();for(let Te=0;Te<xe;Te++){const Ge=$.getViewport(Te);s.set(a.x*Ge.x,a.y*Ge.y,a.x*Ge.z,a.y*Ge.w),W.viewport(s),$.updateMatrices(ce,Te),n=$.getFrustum(),E(R,L,$.camera,ce,this.type)}$.isPointLightShadow!==!0&&this.type===bn&&w($,L),$.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(S,M,P)};function w(T,R){const L=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,u,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,g,y,null)}function b(T,R,L,S){let M=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,H=R.uuid;let j=c[W];j===void 0&&(j={},c[W]=j);let ae=j[H];ae===void 0&&(ae=M.clone(),j[H]=ae,R.addEventListener("dispose",z)),M=ae}if(M.visible=R.visible,M.wireframe=R.wireframe,S===bn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:p[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=L}return M}function E(T,R,L,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=e.update(T),j=T.material;if(Array.isArray(j)){const ae=H.groups;for(let J=0,ce=ae.length;J<ce;J++){const $=ae[J],ge=j[$.materialIndex];if(ge&&ge.visible){const xe=b(T,ge,S,M);T.onBeforeShadow(i,T,R,L,H,xe,$),i.renderBufferDirect(L,null,H,xe,T,$),T.onAfterShadow(i,T,R,L,H,xe,$)}}}else if(j.visible){const ae=b(T,j,S,M);T.onBeforeShadow(i,T,R,L,H,ae,null),i.renderBufferDirect(L,null,H,ae,T,null),T.onAfterShadow(i,T,R,L,H,ae,null)}}const W=T.children;for(let H=0,j=W.length;H<j;H++)E(W[H],R,L,S,M)}function z(T){T.target.removeEventListener("dispose",z);for(const L in c){const S=c[L],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const km={[es]:ts,[ns]:as,[is]:ss,[zi]:rs,[ts]:es,[as]:ns,[ss]:is,[rs]:zi};function Hm(i,e){function t(){let A=!1;const te=new Mt;let X=null;const ee=new Mt(0,0,0,0);return{setMask:function(K){X!==K&&!A&&(i.colorMask(K,K,K,K),X=K)},setLocked:function(K){A=K},setClear:function(K,ie,fe,Se,De){De===!0&&(K*=Se,ie*=Se,fe*=Se),te.set(K,ie,fe,Se),ee.equals(te)===!1&&(i.clearColor(K,ie,fe,Se),ee.copy(te))},reset:function(){A=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let A=!1,te=!1,X=null,ee=null,K=null;return{setReversed:function(ie){if(te!==ie){const fe=e.get("EXT_clip_control");te?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const Se=K;K=null,this.setClear(Se)}te=ie},getReversed:function(){return te},setTest:function(ie){ie?ve(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ie){X!==ie&&!A&&(i.depthMask(ie),X=ie)},setFunc:function(ie){if(te&&(ie=km[ie]),ee!==ie){switch(ie){case es:i.depthFunc(i.NEVER);break;case ts:i.depthFunc(i.ALWAYS);break;case ns:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case is:i.depthFunc(i.EQUAL);break;case rs:i.depthFunc(i.GEQUAL);break;case as:i.depthFunc(i.GREATER);break;case ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ie}},setLocked:function(ie){A=ie},setClear:function(ie){K!==ie&&(te&&(ie=1-ie),i.clearDepth(ie),K=ie)},reset:function(){A=!1,X=null,ee=null,K=null,te=!1}}}function r(){let A=!1,te=null,X=null,ee=null,K=null,ie=null,fe=null,Se=null,De=null;return{setTest:function(me){A||(me?ve(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(me){te!==me&&!A&&(i.stencilMask(me),te=me)},setFunc:function(me,ze,dt){(X!==me||ee!==ze||K!==dt)&&(i.stencilFunc(me,ze,dt),X=me,ee=ze,K=dt)},setOp:function(me,ze,dt){(ie!==me||fe!==ze||Se!==dt)&&(i.stencilOp(me,ze,dt),ie=me,fe=ze,Se=dt)},setLocked:function(me){A=me},setClear:function(me){De!==me&&(i.clearStencil(me),De=me)},reset:function(){A=!1,te=null,X=null,ee=null,K=null,ie=null,fe=null,Se=null,De=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},u=new WeakMap,g=[],v=null,y=!1,f=null,h=null,w=null,b=null,E=null,z=null,T=null,R=new $e(0,0,0),L=0,S=!1,M=null,P=null,W=null,H=null,j=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ce=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec($)[1]),J=ce>=1):$.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=ce>=2);let ge=null,xe={};const Te=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Je=new Mt().fromArray(Te),ne=new Mt().fromArray(Ge);function he(A,te,X,ee){const K=new Uint8Array(4),ie=i.createTexture();i.bindTexture(A,ie),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<X;fe++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(te+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return ie}const be={};be[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),s.setFunc(zi),je(!1),Ye(so),ve(i.CULL_FACE),N(Hn);function ve(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function Fe(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function Be(A,te){return p[A]!==te?(i.bindFramebuffer(A,te),p[A]=te,A===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=te),A===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=te),!0):!1}function qe(A,te){let X=g,ee=!1;if(A){X=u.get(te),X===void 0&&(X=[],u.set(te,X));const K=A.textures;if(X.length!==K.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,fe=K.length;ie<fe;ie++)X[ie]=i.COLOR_ATTACHMENT0+ie;X.length=K.length,ee=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ee=!0);ee&&i.drawBuffers(X)}function ht(A){return v!==A?(i.useProgram(A),v=A,!0):!1}const Ze={[ni]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};Ze[rh]=i.MIN,Ze[ah]=i.MAX;const xt={[sh]:i.ZERO,[oh]:i.ONE,[lh]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[ph]:i.SRC_ALPHA_SATURATE,[uh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[ch]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[fh]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[mh]:i.CONSTANT_COLOR,[gh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(A,te,X,ee,K,ie,fe,Se,De,me){if(A===Hn){y===!0&&(Fe(i.BLEND),y=!1);return}if(y===!1&&(ve(i.BLEND),y=!0),A!==th){if(A!==f||me!==S){if((h!==ni||E!==ni)&&(i.blendEquation(i.FUNC_ADD),h=ni,E=ni),me)switch(A){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFunc(i.ONE,i.ONE);break;case lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case co:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,b=null,z=null,T=null,R.set(0,0,0),L=0,f=A,S=me}return}K=K||te,ie=ie||X,fe=fe||ee,(te!==h||K!==E)&&(i.blendEquationSeparate(Ze[te],Ze[K]),h=te,E=K),(X!==w||ee!==b||ie!==z||fe!==T)&&(i.blendFuncSeparate(xt[X],xt[ee],xt[ie],xt[fe]),w=X,b=ee,z=ie,T=fe),(Se.equals(R)===!1||De!==L)&&(i.blendColor(Se.r,Se.g,Se.b,De),R.copy(Se),L=De),f=A,S=!1}function Lt(A,te){A.side===Tn?Fe(i.CULL_FACE):ve(i.CULL_FACE);let X=A.side===zt;te&&(X=!X),je(X),A.blending===Fi&&A.transparent===!1?N(Hn):N(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),a.setMask(A.colorWrite);const ee=A.stencilWrite;o.setTest(ee),ee&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ot(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(A){M!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),M=A)}function Ye(A){A!==Jc?(ve(i.CULL_FACE),A!==P&&(A===so?i.cullFace(i.BACK):A===Qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),P=A}function Ue(A){A!==W&&(J&&i.lineWidth(A),W=A)}function ot(A,te,X){A?(ve(i.POLYGON_OFFSET_FILL),(H!==te||j!==X)&&(i.polygonOffset(te,X),H=te,j=X)):Fe(i.POLYGON_OFFSET_FILL)}function Le(A){A?ve(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function _(A){A===void 0&&(A=i.TEXTURE0+ae-1),ge!==A&&(i.activeTexture(A),ge=A)}function m(A,te,X){X===void 0&&(ge===null?X=i.TEXTURE0+ae-1:X=ge);let ee=xe[X];ee===void 0&&(ee={type:void 0,texture:void 0},xe[X]=ee),(ee.type!==A||ee.texture!==te)&&(ge!==X&&(i.activeTexture(X),ge=X),i.bindTexture(A,te||be[A]),ee.type=A,ee.texture=te)}function C(){const A=xe[ge];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function O(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(A){Je.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Je.copy(A))}function re(A){ne.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),ne.copy(A))}function Me(A,te){let X=c.get(te);X===void 0&&(X=new WeakMap,c.set(te,X));let ee=X.get(A);ee===void 0&&(ee=i.getUniformBlockIndex(te,A.name),X.set(A,ee))}function pe(A,te){const ee=c.get(te).get(A);l.get(te)!==ee&&(i.uniformBlockBinding(te,ee,A.__bindingPointIndex),l.set(te,ee))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ge=null,xe={},p={},u=new WeakMap,g=[],v=null,y=!1,f=null,h=null,w=null,b=null,E=null,z=null,T=null,R=new $e(0,0,0),L=0,S=!1,M=null,P=null,W=null,H=null,j=null,Je.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ve,disable:Fe,bindFramebuffer:Be,drawBuffers:qe,useProgram:ht,setBlending:N,setMaterial:Lt,setFlipSided:je,setCullFace:Ye,setLineWidth:Ue,setPolygonOffset:ot,setScissorTest:Le,activeTexture:_,bindTexture:m,unbindTexture:C,compressedTexImage2D:B,compressedTexImage3D:G,texImage2D:V,texImage3D:ue,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:Z,texSubImage2D:O,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:k,scissor:le,viewport:re,reset:Ee}}function il(i,e,t,n){const r=Gm(n);switch(t){case Pl:return i*e;case Ll:return i*e;case Ul:return i*e*2;case Il:return i*e/r.components*r.byteLength;case qs:return i*e/r.components*r.byteLength;case Nl:return i*e*2/r.components*r.byteLength;case Ys:return i*e*2/r.components*r.byteLength;case Dl:return i*e*3/r.components*r.byteLength;case nn:return i*e*4/r.components*r.byteLength;case js:return i*e*4/r.components*r.byteLength;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case us:case ps:return Math.max(i,16)*Math.max(e,8)/4;case ds:case fs:return Math.max(i,8)*Math.max(e,8)/2;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ps:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ds:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qr:case Ls:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fl:case Is:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ns:case Fs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gm(i){switch(i){case Cn:case wl:return{byteLength:1,components:1};case fr:case Rl:case mr:return{byteLength:2,components:1};case Ws:case Xs:return{byteLength:2,components:4};case si:case Vs:case An:return{byteLength:4,components:1};case Cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vm(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,d=new WeakMap;let p;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,m){return g?new OffscreenCanvas(_,m):ia("canvas")}function y(_,m,C){let B=1;const G=Le(_);if((G.width>C||G.height>C)&&(B=C/Math.max(G.width,G.height)),B<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const O=Math.floor(B*G.width),se=Math.floor(B*G.height);p===void 0&&(p=v(O,se));const Q=m?v(O,se):p;return Q.width=O,Q.height=se,Q.getContext("2d").drawImage(_,0,0,O,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+O+"x"+se+")."),Q}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),_;return _}function f(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function w(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(_,m,C,B,G=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let O=m;if(m===i.RED&&(C===i.FLOAT&&(O=i.R32F),C===i.HALF_FLOAT&&(O=i.R16F),C===i.UNSIGNED_BYTE&&(O=i.R8)),m===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.R8UI),C===i.UNSIGNED_SHORT&&(O=i.R16UI),C===i.UNSIGNED_INT&&(O=i.R32UI),C===i.BYTE&&(O=i.R8I),C===i.SHORT&&(O=i.R16I),C===i.INT&&(O=i.R32I)),m===i.RG&&(C===i.FLOAT&&(O=i.RG32F),C===i.HALF_FLOAT&&(O=i.RG16F),C===i.UNSIGNED_BYTE&&(O=i.RG8)),m===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RG8UI),C===i.UNSIGNED_SHORT&&(O=i.RG16UI),C===i.UNSIGNED_INT&&(O=i.RG32UI),C===i.BYTE&&(O=i.RG8I),C===i.SHORT&&(O=i.RG16I),C===i.INT&&(O=i.RG32I)),m===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RGB8UI),C===i.UNSIGNED_SHORT&&(O=i.RGB16UI),C===i.UNSIGNED_INT&&(O=i.RGB32UI),C===i.BYTE&&(O=i.RGB8I),C===i.SHORT&&(O=i.RGB16I),C===i.INT&&(O=i.RGB32I)),m===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),C===i.UNSIGNED_INT&&(O=i.RGBA32UI),C===i.BYTE&&(O=i.RGBA8I),C===i.SHORT&&(O=i.RGBA16I),C===i.INT&&(O=i.RGBA32I)),m===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),m===i.RGBA){const se=G?la:Qe.getTransfer(B);C===i.FLOAT&&(O=i.RGBA32F),C===i.HALF_FLOAT&&(O=i.RGBA16F),C===i.UNSIGNED_BYTE&&(O=se===rt?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function E(_,m){let C;return _?m===null||m===si||m===Gi?C=i.DEPTH24_STENCIL8:m===An?C=i.DEPTH32F_STENCIL8:m===fr&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===si||m===Gi?C=i.DEPTH_COMPONENT24:m===An?C=i.DEPTH_COMPONENT32F:m===fr&&(C=i.DEPTH_COMPONENT16),C}function z(_,m){return f(_)===!0||_.isFramebufferTexture&&_.minFilter!==rn&&_.minFilter!==mn?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function T(_){const m=_.target;m.removeEventListener("dispose",T),L(m),m.isVideoTexture&&d.delete(m)}function R(_){const m=_.target;m.removeEventListener("dispose",R),M(m)}function L(_){const m=n.get(_);if(m.__webglInit===void 0)return;const C=_.source,B=u.get(C);if(B){const G=B[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&S(_),Object.keys(B).length===0&&u.delete(C)}n.remove(_)}function S(_){const m=n.get(_);i.deleteTexture(m.__webglTexture);const C=_.source,B=u.get(C);delete B[m.__cacheKey],s.memory.textures--}function M(_){const m=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(m.__webglFramebuffer[B]))for(let G=0;G<m.__webglFramebuffer[B].length;G++)i.deleteFramebuffer(m.__webglFramebuffer[B][G]);else i.deleteFramebuffer(m.__webglFramebuffer[B]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[B])}else{if(Array.isArray(m.__webglFramebuffer))for(let B=0;B<m.__webglFramebuffer.length;B++)i.deleteFramebuffer(m.__webglFramebuffer[B]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let B=0;B<m.__webglColorRenderbuffer.length;B++)m.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[B]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const C=_.textures;for(let B=0,G=C.length;B<G;B++){const O=n.get(C[B]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),s.memory.textures--),n.remove(C[B])}n.remove(_)}let P=0;function W(){P=0}function H(){const _=P;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),P+=1,_}function j(_){const m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function ae(_,m){const C=n.get(_);if(_.isVideoTexture&&Ue(_),_.isRenderTargetTexture===!1&&_.version>0&&C.__version!==_.version){const B=_.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(C,_,m);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+m)}function J(_,m){const C=n.get(_);if(_.version>0&&C.__version!==_.version){ne(C,_,m);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+m)}function ce(_,m){const C=n.get(_);if(_.version>0&&C.__version!==_.version){ne(C,_,m);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+m)}function $(_,m){const C=n.get(_);if(_.version>0&&C.__version!==_.version){he(C,_,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+m)}const ge={[cs]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[hs]:i.MIRRORED_REPEAT},xe={[rn]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Te={[Lh]:i.NEVER,[Bh]:i.ALWAYS,[Uh]:i.LESS,[Bl]:i.LEQUAL,[Ih]:i.EQUAL,[Oh]:i.GEQUAL,[Nh]:i.GREATER,[Fh]:i.NOTEQUAL};function Ge(_,m){if(m.type===An&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===mn||m.magFilter===_a||m.magFilter===Sr||m.magFilter===ai||m.minFilter===mn||m.minFilter===_a||m.minFilter===Sr||m.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,ge[m.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,ge[m.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,ge[m.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,xe[m.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,xe[m.minFilter]),m.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Te[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===rn||m.minFilter!==Sr&&m.minFilter!==ai||m.type===An&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Je(_,m){let C=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",T));const B=m.source;let G=u.get(B);G===void 0&&(G={},u.set(B,G));const O=j(m);if(O!==_.__cacheKey){G[O]===void 0&&(G[O]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,C=!0),G[O].usedTimes++;const se=G[_.__cacheKey];se!==void 0&&(G[_.__cacheKey].usedTimes--,se.usedTimes===0&&S(m)),_.__cacheKey=O,_.__webglTexture=G[O].texture}return C}function ne(_,m,C){let B=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(B=i.TEXTURE_3D);const G=Je(_,m),O=m.source;t.bindTexture(B,_.__webglTexture,i.TEXTURE0+C);const se=n.get(O);if(O.version!==se.__version||G===!0){t.activeTexture(i.TEXTURE0+C);const Q=Qe.getPrimaries(Qe.workingColorSpace),k=m.colorSpace===kn?null:Qe.getPrimaries(m.colorSpace),oe=m.colorSpace===kn||Q===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Z=y(m.image,!1,r.maxTextureSize);Z=ot(m,Z);const V=a.convert(m.format,m.colorSpace),ue=a.convert(m.type);let le=b(m.internalFormat,V,ue,m.colorSpace,m.isVideoTexture);Ge(B,m);let re;const Me=m.mipmaps,pe=m.isVideoTexture!==!0,Ee=se.__version===void 0||G===!0,A=O.dataReady,te=z(m,Z);if(m.isDepthTexture)le=E(m.format===Vi,m.type),Ee&&(pe?t.texStorage2D(i.TEXTURE_2D,1,le,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,le,Z.width,Z.height,0,V,ue,null));else if(m.isDataTexture)if(Me.length>0){pe&&Ee&&t.texStorage2D(i.TEXTURE_2D,te,le,Me[0].width,Me[0].height);for(let X=0,ee=Me.length;X<ee;X++)re=Me[X],pe?A&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,re.width,re.height,V,ue,re.data):t.texImage2D(i.TEXTURE_2D,X,le,re.width,re.height,0,V,ue,re.data);m.generateMipmaps=!1}else pe?(Ee&&t.texStorage2D(i.TEXTURE_2D,te,le,Z.width,Z.height),A&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,V,ue,Z.data)):t.texImage2D(i.TEXTURE_2D,0,le,Z.width,Z.height,0,V,ue,Z.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){pe&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,le,Me[0].width,Me[0].height,Z.depth);for(let X=0,ee=Me.length;X<ee;X++)if(re=Me[X],m.format!==nn)if(V!==null)if(pe){if(A)if(m.layerUpdates.size>0){const K=il(re.width,re.height,m.format,m.type);for(const ie of m.layerUpdates){const fe=re.data.subarray(ie*K/re.data.BYTES_PER_ELEMENT,(ie+1)*K/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ie,re.width,re.height,1,V,fe)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,Z.depth,V,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,le,re.width,re.height,Z.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?A&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,re.width,re.height,Z.depth,V,ue,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,le,re.width,re.height,Z.depth,0,V,ue,re.data)}else{pe&&Ee&&t.texStorage2D(i.TEXTURE_2D,te,le,Me[0].width,Me[0].height);for(let X=0,ee=Me.length;X<ee;X++)re=Me[X],m.format!==nn?V!==null?pe?A&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,re.width,re.height,V,re.data):t.compressedTexImage2D(i.TEXTURE_2D,X,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?A&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,re.width,re.height,V,ue,re.data):t.texImage2D(i.TEXTURE_2D,X,le,re.width,re.height,0,V,ue,re.data)}else if(m.isDataArrayTexture)if(pe){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,te,le,Z.width,Z.height,Z.depth),A)if(m.layerUpdates.size>0){const X=il(Z.width,Z.height,m.format,m.type);for(const ee of m.layerUpdates){const K=Z.data.subarray(ee*X/Z.data.BYTES_PER_ELEMENT,(ee+1)*X/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,Z.width,Z.height,1,V,ue,K)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,V,ue,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,V,ue,Z.data);else if(m.isData3DTexture)pe?(Ee&&t.texStorage3D(i.TEXTURE_3D,te,le,Z.width,Z.height,Z.depth),A&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,V,ue,Z.data)):t.texImage3D(i.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,V,ue,Z.data);else if(m.isFramebufferTexture){if(Ee)if(pe)t.texStorage2D(i.TEXTURE_2D,te,le,Z.width,Z.height);else{let X=Z.width,ee=Z.height;for(let K=0;K<te;K++)t.texImage2D(i.TEXTURE_2D,K,le,X,ee,0,V,ue,null),X>>=1,ee>>=1}}else if(Me.length>0){if(pe&&Ee){const X=Le(Me[0]);t.texStorage2D(i.TEXTURE_2D,te,le,X.width,X.height)}for(let X=0,ee=Me.length;X<ee;X++)re=Me[X],pe?A&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,V,ue,re):t.texImage2D(i.TEXTURE_2D,X,le,V,ue,re);m.generateMipmaps=!1}else if(pe){if(Ee){const X=Le(Z);t.texStorage2D(i.TEXTURE_2D,te,le,X.width,X.height)}A&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,V,ue,Z)}else t.texImage2D(i.TEXTURE_2D,0,le,V,ue,Z);f(m)&&h(B),se.__version=O.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function he(_,m,C){if(m.image.length!==6)return;const B=Je(_,m),G=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+C);const O=n.get(G);if(G.version!==O.__version||B===!0){t.activeTexture(i.TEXTURE0+C);const se=Qe.getPrimaries(Qe.workingColorSpace),Q=m.colorSpace===kn?null:Qe.getPrimaries(m.colorSpace),k=m.colorSpace===kn||se===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const oe=m.isCompressedTexture||m.image[0].isCompressedTexture,Z=m.image[0]&&m.image[0].isDataTexture,V=[];for(let ee=0;ee<6;ee++)!oe&&!Z?V[ee]=y(m.image[ee],!0,r.maxCubemapSize):V[ee]=Z?m.image[ee].image:m.image[ee],V[ee]=ot(m,V[ee]);const ue=V[0],le=a.convert(m.format,m.colorSpace),re=a.convert(m.type),Me=b(m.internalFormat,le,re,m.colorSpace),pe=m.isVideoTexture!==!0,Ee=O.__version===void 0||B===!0,A=G.dataReady;let te=z(m,ue);Ge(i.TEXTURE_CUBE_MAP,m);let X;if(oe){pe&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Me,ue.width,ue.height);for(let ee=0;ee<6;ee++){X=V[ee].mipmaps;for(let K=0;K<X.length;K++){const ie=X[K];m.format!==nn?le!==null?pe?A&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K,0,0,ie.width,ie.height,le,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K,Me,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K,0,0,ie.width,ie.height,le,re,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K,Me,ie.width,ie.height,0,le,re,ie.data)}}}else{if(X=m.mipmaps,pe&&Ee){X.length>0&&te++;const ee=Le(V[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,te,Me,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Z){pe?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,V[ee].width,V[ee].height,le,re,V[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Me,V[ee].width,V[ee].height,0,le,re,V[ee].data);for(let K=0;K<X.length;K++){const fe=X[K].image[ee].image;pe?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K+1,0,0,fe.width,fe.height,le,re,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K+1,Me,fe.width,fe.height,0,le,re,fe.data)}}else{pe?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le,re,V[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Me,le,re,V[ee]);for(let K=0;K<X.length;K++){const ie=X[K];pe?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K+1,0,0,le,re,ie.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K+1,Me,le,re,ie.image[ee])}}}f(m)&&h(i.TEXTURE_CUBE_MAP),O.__version=G.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function be(_,m,C,B,G,O){const se=a.convert(C.format,C.colorSpace),Q=a.convert(C.type),k=b(C.internalFormat,se,Q,C.colorSpace),oe=n.get(m),Z=n.get(C);if(Z.__renderTarget=m,!oe.__hasExternalTextures){const V=Math.max(1,m.width>>O),ue=Math.max(1,m.height>>O);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,O,k,V,ue,m.depth,0,se,Q,null):t.texImage2D(G,O,k,V,ue,0,se,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Ye(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,G,Z.__webglTexture,0,je(m)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,G,Z.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(_,m,C){if(i.bindRenderbuffer(i.RENDERBUFFER,_),m.depthBuffer){const B=m.depthTexture,G=B&&B.isDepthTexture?B.type:null,O=E(m.stencilBuffer,G),se=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=je(m);Ye(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,O,m.width,m.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,O,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,O,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,_)}else{const B=m.textures;for(let G=0;G<B.length;G++){const O=B[G],se=a.convert(O.format,O.colorSpace),Q=a.convert(O.type),k=b(O.internalFormat,se,Q,O.colorSpace),oe=je(m);C&&Ye(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,k,m.width,m.height):Ye(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,k,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,k,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(_,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(m.depthTexture);B.__renderTarget=m,(!B.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ae(m.depthTexture,0);const G=B.__webglTexture,O=je(m);if(m.depthTexture.format===Oi)Ye(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(m.depthTexture.format===Vi)Ye(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Be(_){const m=n.get(_),C=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){const B=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),B){const G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,B.removeEventListener("dispose",G)};B.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=B}if(_.depthTexture&&!m.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Fe(m.__webglFramebuffer,_)}else if(C){m.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[B]),m.__webglDepthbuffer[B]===void 0)m.__webglDepthbuffer[B]=i.createRenderbuffer(),ve(m.__webglDepthbuffer[B],_,!1);else{const G=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=m.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,O)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ve(m.__webglDepthbuffer,_,!1);else{const B=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,G)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(_,m,C){const B=n.get(_);m!==void 0&&be(B.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Be(_)}function ht(_){const m=_.texture,C=n.get(_),B=n.get(m);_.addEventListener("dispose",R);const G=_.textures,O=_.isWebGLCubeRenderTarget===!0,se=G.length>1;if(se||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=m.version,s.memory.textures++),O){C.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer[Q]=[];for(let k=0;k<m.mipmaps.length;k++)C.__webglFramebuffer[Q][k]=i.createFramebuffer()}else C.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer=[];for(let Q=0;Q<m.mipmaps.length;Q++)C.__webglFramebuffer[Q]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(se)for(let Q=0,k=G.length;Q<k;Q++){const oe=n.get(G[Q]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),s.memory.textures++)}if(_.samples>0&&Ye(_)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Q=0;Q<G.length;Q++){const k=G[Q];C.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[Q]);const oe=a.convert(k.format,k.colorSpace),Z=a.convert(k.type),V=b(k.internalFormat,oe,Z,k.colorSpace,_.isXRRenderTarget===!0),ue=je(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,C.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(C.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,m);for(let Q=0;Q<6;Q++)if(m.mipmaps&&m.mipmaps.length>0)for(let k=0;k<m.mipmaps.length;k++)be(C.__webglFramebuffer[Q][k],_,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,k);else be(C.__webglFramebuffer[Q],_,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(m)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Q=0,k=G.length;Q<k;Q++){const oe=G[Q],Z=n.get(oe);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Ge(i.TEXTURE_2D,oe),be(C.__webglFramebuffer,_,oe,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),f(oe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Q=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,B.__webglTexture),Ge(Q,m),m.mipmaps&&m.mipmaps.length>0)for(let k=0;k<m.mipmaps.length;k++)be(C.__webglFramebuffer[k],_,m,i.COLOR_ATTACHMENT0,Q,k);else be(C.__webglFramebuffer,_,m,i.COLOR_ATTACHMENT0,Q,0);f(m)&&h(Q),t.unbindTexture()}_.depthBuffer&&Be(_)}function Ze(_){const m=_.textures;for(let C=0,B=m.length;C<B;C++){const G=m[C];if(f(G)){const O=w(_),se=n.get(G).__webglTexture;t.bindTexture(O,se),h(O),t.unbindTexture()}}}const xt=[],N=[];function Lt(_){if(_.samples>0){if(Ye(_)===!1){const m=_.textures,C=_.width,B=_.height;let G=i.COLOR_BUFFER_BIT;const O=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(_),Q=m.length>1;if(Q)for(let k=0;k<m.length;k++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let k=0;k<m.length;k++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[k]);const oe=n.get(m[k]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,C,B,0,0,C,B,G,i.NEAREST),l===!0&&(xt.length=0,N.length=0,xt.push(i.COLOR_ATTACHMENT0+k),_.depthBuffer&&_.resolveDepthBuffer===!1&&(xt.push(O),N.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let k=0;k<m.length;k++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,se.__webglColorRenderbuffer[k]);const oe=n.get(m[k]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const m=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function je(_){return Math.min(r.maxSamples,_.samples)}function Ye(_){const m=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Ue(_){const m=s.render.frame;d.get(_)!==m&&(d.set(_,m),_.update())}function ot(_,m){const C=_.colorSpace,B=_.format,G=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||C!==Xi&&C!==kn&&(Qe.getTransfer(C)===rt?(B!==nn||G!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),m}function Le(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=ae,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=$,this.rebindTextures=qe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function Wm(i,e){function t(n,r=kn){let a;const s=Qe.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Vs)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Dl)return i.RGB;if(n===nn)return i.RGBA;if(n===Ll)return i.LUMINANCE;if(n===Ul)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===Nl)return i.RG;if(n===Ys)return i.RG_INTEGER;if(n===js)return i.RGBA_INTEGER;if(n===Kr||n===Zr||n===$r||n===Jr)if(s===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ds||n===us||n===fs||n===ps)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ds)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===us)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ms||n===gs||n===_s)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ms||n===gs)return s===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===_s)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vs||n===xs||n===ys||n===Ms||n===Ss||n===Es||n===bs||n===Ts||n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ds)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===vs)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xs)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ys)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ms)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ss)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Es)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bs)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ts)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===As)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ws)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rs)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cs)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ps)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ds)return s===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Ls||n===Us)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Qr)return s===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ls)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Us)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Is||n===Ns||n===Fs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Qr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Is)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Xm extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),h=this._getHandJoint(c,y);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),g=.02,v=.005;c.inputState.pinching&&u>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ft,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:Ym,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends ci{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,g=null,v=null;const y=new Km,f=t.getContextAttributes();let h=null,w=null;const b=[],E=[],z=new Ne;let T=null;const R=new Zt;R.viewport=new Mt;const L=new Zt;L.viewport=new Mt;const S=[R,L],M=new Xm;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=b[ne];return he===void 0&&(he=new Xa,b[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=b[ne];return he===void 0&&(he=new Xa,b[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=b[ne];return he===void 0&&(he=new Xa,b[ne]=he),he.getHandSpace()};function H(ne){const he=E.indexOf(ne.inputSource);if(he===-1)return;const be=b[he];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||s),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<b.length;ne++){const he=E[ne];he!==null&&(E[ne]=null,b[ne].disconnect(he))}P=null,W=null,y.reset(),e.setRenderTarget(h),g=null,u=null,p=null,r=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ae),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),r.renderState.layers===void 0){const he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new oi(g.framebufferWidth,g.framebufferHeight,{format:nn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let he=null,be=null,ve=null;f.depth&&(ve=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?Vi:Oi,be=f.stencil?Gi:si);const Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};p=new XRWebGLBinding(r,t),u=p.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new oi(u.textureWidth,u.textureHeight,{format:nn,type:Cn,depthTexture:new $l(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ae(ne){for(let he=0;he<ne.removed.length;he++){const be=ne.removed[he],ve=E.indexOf(be);ve>=0&&(E[ve]=null,b[ve].disconnect(be))}for(let he=0;he<ne.added.length;he++){const be=ne.added[he];let ve=E.indexOf(be);if(ve===-1){for(let Be=0;Be<b.length;Be++)if(Be>=E.length){E.push(be),ve=Be;break}else if(E[Be]===null){E[Be]=be,ve=Be;break}if(ve===-1)break}const Fe=b[ve];Fe&&Fe.connect(be)}}const J=new F,ce=new F;function $(ne,he,be){J.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const ve=J.distanceTo(ce),Fe=he.projectionMatrix.elements,Be=be.projectionMatrix.elements,qe=Fe[14]/(Fe[10]-1),ht=Fe[14]/(Fe[10]+1),Ze=(Fe[9]+1)/Fe[5],xt=(Fe[9]-1)/Fe[5],N=(Fe[8]-1)/Fe[0],Lt=(Be[8]+1)/Be[0],je=qe*N,Ye=qe*Lt,Ue=ve/(-N+Lt),ot=Ue*-N;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ot),ne.translateZ(Ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Le=qe+Ue,_=ht+Ue,m=je-ot,C=Ye+(ve-ot),B=Ze*ht/_*Le,G=xt*ht/_*Le;ne.projectionMatrix.makePerspective(m,C,B,G,Le,_),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let he=ne.near,be=ne.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(be=y.depthFar)),M.near=L.near=R.near=he,M.far=L.far=R.far=be,(P!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),R.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ve=ne.parent,Fe=M.cameras;ge(M,ve);for(let Be=0;Be<Fe.length;Be++)ge(Fe[Be],ve);Fe.length===2?$(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),xe(ne,M,ve)};function xe(ne,he,be){be===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(ne){l=ne,u!==null&&(u.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Te=null;function Ge(ne,he){if(d=he.getViewerPose(c||s),v=he,d!==null){const be=d.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let ve=!1;be.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let Be=0;Be<be.length;Be++){const qe=be[Be];let ht=null;if(g!==null)ht=g.getViewport(qe);else{const xt=p.getViewSubImage(u,qe);ht=xt.viewport,Be===0&&(e.setRenderTargetTextures(w,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(w))}let Ze=S[Be];Ze===void 0&&(Ze=new Zt,Ze.layers.enable(Be),Ze.viewport=new Mt,S[Be]=Ze),Ze.matrix.fromArray(qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ht.x,ht.y,ht.width,ht.height),Be===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Ze)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Be=p.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&y.init(e,Be,r.renderState)}}for(let be=0;be<b.length;be++){const ve=E[be],Fe=b[be];ve!==null&&Fe!==void 0&&Fe.update(ve,he,c||s)}Te&&Te(ne,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}const Je=new Kl;Je.setAnimationLoop(Ge),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}}const ei=new gn,$m=new vt;function Jm(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,ql(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,w,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),p(f,h)):h.isMeshPhongMaterial?(a(f,h),d(f,h)):h.isMeshStandardMaterial?(a(f,h),u(f,h),h.isMeshPhysicalMaterial&&g(f,h,E)):h.isMeshMatcapMaterial?(a(f,h),v(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),y(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,w,b):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===zt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===zt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const w=e.get(h),b=w.envMap,E=w.envMapRotation;b&&(f.envMap.value=b,ei.copy(E),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),f.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(ei)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,b){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=b*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function g(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function y(f,h){const w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qm(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const E=b.program;n.uniformBlockBinding(w,E)}function c(w,b){let E=r[w.id];E===void 0&&(v(w),E=d(w),r[w.id]=E,w.addEventListener("dispose",f));const z=b.program;n.updateUBOMapping(w,z);const T=e.render.frame;a[w.id]!==T&&(u(w),a[w.id]=T)}function d(w){const b=p();w.__bindingPointIndex=b;const E=i.createBuffer(),z=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,z,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function p(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=r[w.id],E=w.uniforms,z=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=E.length;T<R;T++){const L=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,M=L.length;S<M;S++){const P=L[S];if(g(P,T,S,z)===!0){const W=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let ae=0;ae<H.length;ae++){const J=H[ae],ce=y(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,W+j,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,E,z){const T=w.value,R=b+"_"+E;if(z[R]===void 0)return typeof T=="number"||typeof T=="boolean"?z[R]=T:z[R]=T.clone(),!0;{const L=z[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return z[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function v(w){const b=w.uniforms;let E=0;const z=16;for(let R=0,L=b.length;R<L;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,P=S.length;M<P;M++){const W=S[M],H=Array.isArray(W.value)?W.value:[W.value];for(let j=0,ae=H.length;j<ae;j++){const J=H[j],ce=y(J),$=E%z,ge=$%ce.boundary,xe=$+ge;E+=ge,xe!==0&&z-xe<ce.storage&&(E+=z-xe),W.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=ce.storage}}}const T=E%z;return T>0&&(E+=z-T),w.__size=E,w.__cache={},this}function y(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function f(w){const b=w.target;b.removeEventListener("dispose",f);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const w in r)i.deleteBuffer(r[w]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class eg{constructor(e={}){const{canvas:t=Hh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;const v=new Uint32Array(4),y=new Int32Array(4);let f=null,h=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Gn,this.toneMappingExposure=1;const E=this;let z=!1,T=0,R=0,L=null,S=-1,M=null;const P=new Mt,W=new Mt;let H=null;const j=new $e(0);let ae=0,J=t.width,ce=t.height,$=1,ge=null,xe=null;const Te=new Mt(0,0,J,ce),Ge=new Mt(0,0,J,ce);let Je=!1;const ne=new Zs;let he=!1,be=!1;const ve=new vt,Fe=new vt,Be=new F,qe=new Mt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function xt(){return L===null?$:1}let N=n;function Lt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gs}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const U="webgl2";if(N=Lt(U,x),N===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,Ye,Ue,ot,Le,_,m,C,B,G,O,se,Q,k,oe,Z,V,ue,le,re,Me,pe,Ee,A;function te(){je=new ap(N),je.init(),pe=new Wm(N,je),Ye=new Qf(N,je,e,pe),Ue=new Hm(N,je),Ye.reverseDepthBuffer&&u&&Ue.buffers.depth.setReversed(!0),ot=new lp(N),Le=new Am,_=new Vm(N,je,Ue,Le,Ye,pe,ot),m=new tp(E),C=new rp(E),B=new pd(N),Ee=new $f(N,B),G=new sp(N,B,ot,Ee),O=new hp(N,G,B,ot),le=new cp(N,Ye,_),Z=new ep(Le),se=new Tm(E,m,C,je,Ye,Ee,Z),Q=new Jm(E,Le),k=new Rm,oe=new Im(je),ue=new Zf(E,m,C,Ue,O,g,l),V=new zm(E,O,Ye),A=new Qm(N,ot,Ye,Ue),re=new Jf(N,je,ot),Me=new op(N,je,ot),ot.programs=se.programs,E.capabilities=Ye,E.extensions=je,E.properties=Le,E.renderLists=k,E.shadowMap=V,E.state=Ue,E.info=ot}te();const X=new Zm(E,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(J,ce,!1))},this.getSize=function(x){return x.set(J,ce)},this.setSize=function(x,U,q=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,ce=U,t.width=Math.floor(x*$),t.height=Math.floor(U*$),q===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(J*$,ce*$).floor()},this.setDrawingBufferSize=function(x,U,q){J=x,ce=U,$=q,t.width=Math.floor(x*q),t.height=Math.floor(U*q),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,U,q,Y){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,U,q,Y),Ue.viewport(P.copy(Te).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(Ge)},this.setScissor=function(x,U,q,Y){x.isVector4?Ge.set(x.x,x.y,x.z,x.w):Ge.set(x,U,q,Y),Ue.scissor(W.copy(Ge).multiplyScalar($).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){Ue.setScissorTest(Je=x)},this.setOpaqueSort=function(x){ge=x},this.setTransparentSort=function(x){xe=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,U=!0,q=!0){let Y=0;if(x){let I=!1;if(L!==null){const de=L.texture.format;I=de===js||de===Ys||de===qs}if(I){const de=L.texture.type,ye=de===Cn||de===si||de===fr||de===Gi||de===Ws||de===Xs,Ae=ue.getClearColor(),we=ue.getClearAlpha(),ke=Ae.r,Ve=Ae.g,Re=Ae.b;ye?(v[0]=ke,v[1]=Ve,v[2]=Re,v[3]=we,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=ke,y[1]=Ve,y[2]=Re,y[3]=we,N.clearBufferiv(N.COLOR,0,y))}else Y|=N.COLOR_BUFFER_BIT}U&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),k.dispose(),oe.dispose(),Le.dispose(),m.dispose(),C.dispose(),O.dispose(),Ee.dispose(),A.dispose(),se.dispose(),X.dispose(),X.removeEventListener("sessionstart",ln),X.removeEventListener("sessionend",ji),_n.stop()};function ee(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const x=ot.autoReset,U=V.enabled,q=V.autoUpdate,Y=V.needsUpdate,I=V.type;te(),ot.autoReset=x,V.enabled=U,V.autoUpdate=q,V.needsUpdate=Y,V.type=I}function ie(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function fe(x){const U=x.target;U.removeEventListener("dispose",fe),Se(U)}function Se(x){De(x),Le.remove(x)}function De(x){const U=Le.get(x).programs;U!==void 0&&(U.forEach(function(q){se.releaseProgram(q)}),x.isShaderMaterial&&se.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,q,Y,I,de){U===null&&(U=ht);const ye=I.isMesh&&I.matrixWorld.determinant()<0,Ae=Pn(x,U,q,Y,I);Ue.setMaterial(Y,ye);let we=q.index,ke=1;if(Y.wireframe===!0){if(we=G.getWireframeAttribute(q),we===void 0)return;ke=2}const Ve=q.drawRange,Re=q.attributes.position;let et=Ve.start*ke,ut=(Ve.start+Ve.count)*ke;de!==null&&(et=Math.max(et,de.start*ke),ut=Math.min(ut,(de.start+de.count)*ke)),we!==null?(et=Math.max(et,0),ut=Math.min(ut,we.count)):Re!=null&&(et=Math.max(et,0),ut=Math.min(ut,Re.count));const mt=ut-et;if(mt<0||mt===1/0)return;Ee.setup(I,Y,Ae,q,we);let Ot,nt=re;if(we!==null&&(Ot=B.get(we),nt=Me,nt.setIndex(Ot)),I.isMesh)Y.wireframe===!0?(Ue.setLineWidth(Y.wireframeLinewidth*xt()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(I.isLine){let Ce=Y.linewidth;Ce===void 0&&(Ce=1),Ue.setLineWidth(Ce*xt()),I.isLineSegments?nt.setMode(N.LINES):I.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else I.isPoints?nt.setMode(N.POINTS):I.isSprite&&nt.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)nt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))nt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ce=I._multiDrawStarts,vn=I._multiDrawCounts,it=I._multiDrawCount,Jt=we?B.get(we).bytesPerElement:1,ui=Le.get(Y).currentProgram.getUniforms();for(let Ht=0;Ht<it;Ht++)ui.setValue(N,"_gl_DrawID",Ht),nt.render(Ce[Ht]/Jt,vn[Ht])}else if(I.isInstancedMesh)nt.renderInstances(et,mt,I.count);else if(q.isInstancedBufferGeometry){const Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vn=Math.min(q.instanceCount,Ce);nt.renderInstances(et,mt,vn)}else nt.render(et,mt)};function me(x,U,q){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,di(x,U,q),x.side=Wn,x.needsUpdate=!0,di(x,U,q),x.side=Tn):di(x,U,q)}this.compile=function(x,U,q=null){q===null&&(q=x),h=oe.get(q),h.init(U),b.push(h),q.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),x!==q&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const Y=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const de=I.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Ae=de[ye];me(Ae,q,I),Y.add(Ae)}else me(de,q,I),Y.add(de)}),b.pop(),h=null,Y},this.compileAsync=function(x,U,q=null){const Y=this.compile(x,U,q);return new Promise(I=>{function de(){if(Y.forEach(function(ye){Le.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){I(x);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ze=null;function dt(x){ze&&ze(x)}function ln(){_n.stop()}function ji(){_n.start()}const _n=new Kl;_n.setAnimationLoop(dt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(x){ze=x,X.setAnimationLoop(x),x===null?_n.stop():_n.start()},X.addEventListener("sessionstart",ln),X.addEventListener("sessionend",ji),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,L),h=oe.get(x,b.length),h.init(U),b.push(h),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(Fe),be=this.localClippingEnabled,he=Z.init(this.clippingPlanes,be),f=k.get(x,w.length),f.init(),w.push(f),X.enabled===!0&&X.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Ki(de,U,-1/0,E.sortObjects)}Ki(x,U,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(ge,xe),Ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ze&&ue.addToRenderList(f,x),this.info.render.frame++,he===!0&&Z.beginShadows();const q=h.state.shadowsArray;V.render(q,x,U),he===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=f.opaque,I=f.transmissive;if(h.setupLights(),U.isArrayCamera){const de=U.cameras;if(I.length>0)for(let ye=0,Ae=de.length;ye<Ae;ye++){const we=de[ye];yt(Y,I,x,we)}Ze&&ue.render(x);for(let ye=0,Ae=de.length;ye<Ae;ye++){const we=de[ye];lt(f,x,we,we.viewport)}}else I.length>0&&yt(Y,I,x,U),Ze&&ue.render(x),lt(f,x,U);L!==null&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(E,x,U),Ee.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(h=b[b.length-1],he===!0&&Z.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function Ki(x,U,q,Y){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ne.intersectsSprite(x)){Y&&qe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);const ye=O.update(x),Ae=x.material;Ae.visible&&f.push(x,ye,Ae,q,qe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ne.intersectsObject(x))){const ye=O.update(x),Ae=x.material;if(Y&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),qe.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),qe.copy(ye.boundingSphere.center)),qe.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ae)){const we=ye.groups;for(let ke=0,Ve=we.length;ke<Ve;ke++){const Re=we[ke],et=Ae[Re.materialIndex];et&&et.visible&&f.push(x,ye,et,q,qe.z,Re)}}else Ae.visible&&f.push(x,ye,Ae,q,qe.z,null)}}const de=x.children;for(let ye=0,Ae=de.length;ye<Ae;ye++)Ki(de[ye],U,q,Y)}function lt(x,U,q,Y){const I=x.opaque,de=x.transmissive,ye=x.transparent;h.setupLightsView(q),he===!0&&Z.setGlobalState(E.clippingPlanes,q),Y&&Ue.viewport(P.copy(Y)),I.length>0&&Ct(I,U,q),de.length>0&&Ct(de,U,q),ye.length>0&&Ct(ye,U,q),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function yt(x,U,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new oi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?mr:Cn,minFilter:ai,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=h.state.transmissionRenderTarget[Y.id],ye=Y.viewport||P;de.setSize(ye.z,ye.w);const Ae=E.getRenderTarget();E.setRenderTarget(de),E.getClearColor(j),ae=E.getClearAlpha(),ae<1&&E.setClearColor(16777215,.5),E.clear(),Ze&&ue.render(q);const we=E.toneMapping;E.toneMapping=Gn;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),he===!0&&Z.setGlobalState(E.clippingPlanes,Y),Ct(x,q,Y),_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Re=0,et=U.length;Re<et;Re++){const ut=U[Re],mt=ut.object,Ot=ut.geometry,nt=ut.material,Ce=ut.group;if(nt.side===Tn&&mt.layers.test(Y.layers)){const vn=nt.side;nt.side=zt,nt.needsUpdate=!0,kt(mt,q,Y,Ot,nt,Ce),nt.side=vn,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(_.updateMultisampleRenderTarget(de),_.updateRenderTargetMipmap(de))}E.setRenderTarget(Ae),E.setClearColor(j,ae),ke!==void 0&&(Y.viewport=ke),E.toneMapping=we}function Ct(x,U,q){const Y=U.isScene===!0?U.overrideMaterial:null;for(let I=0,de=x.length;I<de;I++){const ye=x[I],Ae=ye.object,we=ye.geometry,ke=Y===null?ye.material:Y,Ve=ye.group;Ae.layers.test(q.layers)&&kt(Ae,U,q,we,ke,Ve)}}function kt(x,U,q,Y,I,de){x.onBeforeRender(E,U,q,Y,I,de),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(E,U,q,Y,x,de),I.transparent===!0&&I.side===Tn&&I.forceSinglePass===!1?(I.side=zt,I.needsUpdate=!0,E.renderBufferDirect(q,U,Y,I,x,de),I.side=Wn,I.needsUpdate=!0,E.renderBufferDirect(q,U,Y,I,x,de),I.side=Tn):E.renderBufferDirect(q,U,Y,I,x,de),x.onAfterRender(E,U,q,Y,I,de)}function di(x,U,q){U.isScene!==!0&&(U=ht);const Y=Le.get(x),I=h.state.lights,de=h.state.shadowsArray,ye=I.state.version,Ae=se.getParameters(x,I.state,de,U,q),we=se.getProgramCacheKey(Ae);let ke=Y.programs;Y.environment=x.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(x.isMeshStandardMaterial?C:m).get(x.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,ke===void 0&&(x.addEventListener("dispose",fe),ke=new Map,Y.programs=ke);let Ve=ke.get(we);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===ye)return cn(x,Ae),Ve}else Ae.uniforms=se.getUniforms(x),x.onBeforeCompile(Ae,E),Ve=se.acquireProgram(Ae,we),ke.set(we,Ve),Y.uniforms=Ae.uniforms;const Re=Y.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=Z.uniform),cn(x,Ae),Y.needsLights=oc(x),Y.lightsStateVersion=ye,Y.needsLights&&(Re.ambientLightColor.value=I.state.ambient,Re.lightProbe.value=I.state.probe,Re.directionalLights.value=I.state.directional,Re.directionalLightShadows.value=I.state.directionalShadow,Re.spotLights.value=I.state.spot,Re.spotLightShadows.value=I.state.spotShadow,Re.rectAreaLights.value=I.state.rectArea,Re.ltc_1.value=I.state.rectAreaLTC1,Re.ltc_2.value=I.state.rectAreaLTC2,Re.pointLights.value=I.state.point,Re.pointLightShadows.value=I.state.pointShadow,Re.hemisphereLights.value=I.state.hemi,Re.directionalShadowMap.value=I.state.directionalShadowMap,Re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Re.spotShadowMap.value=I.state.spotShadowMap,Re.spotLightMatrix.value=I.state.spotLightMatrix,Re.spotLightMap.value=I.state.spotLightMap,Re.pointShadowMap.value=I.state.pointShadowMap,Re.pointShadowMatrix.value=I.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function _r(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=ta.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function cn(x,U){const q=Le.get(x);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Pn(x,U,q,Y,I){U.isScene!==!0&&(U=ht),_.resetTextureUnits();const de=U.fog,ye=Y.isMeshStandardMaterial?U.environment:null,Ae=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,we=(Y.isMeshStandardMaterial?C:m).get(Y.envMap||ye),ke=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let mt=Gn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(mt=E.toneMapping);const Ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=Ot!==void 0?Ot.length:0,Ce=Le.get(Y),vn=h.state.lights;if(he===!0&&(be===!0||x!==M)){const qt=x===M&&Y.id===S;Z.setState(Y,x,qt)}let it=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==vn.state.version||Ce.outputColorSpace!==Ae||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==we||Y.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Z.numPlanes||Ce.numIntersection!==Z.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==Ve||Ce.morphTargets!==Re||Ce.morphNormals!==et||Ce.morphColors!==ut||Ce.toneMapping!==mt||Ce.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ce.__version=Y.version);let Jt=Ce.currentProgram;it===!0&&(Jt=di(Y,U,I));let ui=!1,Ht=!1,$i=!1;const gt=Jt.getUniforms(),hn=Ce.uniforms;if(Ue.useProgram(Jt.program)&&(ui=!0,Ht=!0,$i=!0),Y.id!==S&&(S=Y.id,Ht=!0),ui||M!==x){Ue.buffers.depth.getReversed()?(ve.copy(x.projectionMatrix),Vh(ve),Wh(ve),gt.setValue(N,"projectionMatrix",ve)):gt.setValue(N,"projectionMatrix",x.projectionMatrix),gt.setValue(N,"viewMatrix",x.matrixWorldInverse);const Dn=gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(N,Be.setFromMatrixPosition(x.matrixWorld)),Ye.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ht=!0,$i=!0)}if(I.isSkinnedMesh){gt.setOptional(N,I,"bindMatrix"),gt.setOptional(N,I,"bindMatrixInverse");const qt=I.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),gt.setValue(N,"boneTexture",qt.boneTexture,_))}I.isBatchedMesh&&(gt.setOptional(N,I,"batchingTexture"),gt.setValue(N,"batchingTexture",I._matricesTexture,_),gt.setOptional(N,I,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",I._indirectTexture,_),gt.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",I._colorsTexture,_));const Ji=q.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&le.update(I,q,Jt),(Ht||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,gt.setValue(N,"receiveShadow",I.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hn.envMap.value=we,hn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Ht&&(gt.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&Zi(hn,$i),de&&Y.fog===!0&&Q.refreshFogUniforms(hn,de),Q.refreshMaterialUniforms(hn,Y,$,ce,h.state.transmissionRenderTarget[x.id]),ta.upload(N,_r(Ce),hn,_)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ta.upload(N,_r(Ce),hn,_),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(N,"center",I.center),gt.setValue(N,"modelViewMatrix",I.modelViewMatrix),gt.setValue(N,"normalMatrix",I.normalMatrix),gt.setValue(N,"modelMatrix",I.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const qt=Y.uniformsGroups;for(let Dn=0,Ln=qt.length;Dn<Ln;Dn++){const eo=qt[Dn];A.update(eo,Jt),A.bind(eo,Jt)}}return Jt}function Zi(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function oc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,q){Le.get(x.texture).__webglTexture=U,Le.get(x.depthTexture).__webglTexture=q;const Y=Le.get(x);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const q=Le.get(x);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,q=0){L=x,T=U,R=q;let Y=!0,I=null,de=!1,ye=!1;if(x){const we=Le.get(x);if(we.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)_.setupRenderTarget(x);else if(we.__hasExternalTextures)_.rebindTextures(x,Le.get(x.texture).__webglTexture,Le.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Re=x.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Le.has(Re)&&(x.width!==Re.image.width||x.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(x)}}const ke=x.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Ve=Le.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?I=Ve[U][q]:I=Ve[U],de=!0):x.samples>0&&_.useMultisampledRTT(x)===!1?I=Le.get(x).__webglMultisampledFramebuffer:Array.isArray(Ve)?I=Ve[q]:I=Ve,P.copy(x.viewport),W.copy(x.scissor),H=x.scissorTest}else P.copy(Te).multiplyScalar($).floor(),W.copy(Ge).multiplyScalar($).floor(),H=Je;if(Ue.bindFramebuffer(N.FRAMEBUFFER,I)&&Y&&Ue.drawBuffers(x,I),Ue.viewport(P),Ue.scissor(W),Ue.setScissorTest(H),de){const we=Le.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,q)}else if(ye){const we=Le.get(x.texture),ke=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,q||0,ke)}S=-1},this.readRenderTargetPixels=function(x,U,q,Y,I,de,ye){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Le.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Ue.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const we=x.texture,ke=we.format,Ve=we.type;if(!Ye.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-Y&&q>=0&&q<=x.height-I&&N.readPixels(U,q,Y,I,pe.convert(ke),pe.convert(Ve),de)}finally{const we=L!==null?Le.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,U,q,Y,I,de,ye){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Le.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const we=x.texture,ke=we.format,Ve=we.type;if(!Ye.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-Y&&q>=0&&q<=x.height-I){Ue.bindFramebuffer(N.FRAMEBUFFER,Ae);const Re=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(U,q,Y,I,pe.convert(ke),pe.convert(Ve),0);const et=L!==null?Le.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(N.FRAMEBUFFER,et);const ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gh(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(Re),N.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,q=0){x.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const Y=Math.pow(2,-q),I=Math.floor(x.image.width*Y),de=Math.floor(x.image.height*Y),ye=U!==null?U.x:0,Ae=U!==null?U.y:0;_.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ye,Ae,I,de),Ue.unbindTexture()},this.copyTextureToTexture=function(x,U,q=null,Y=null,I=0){x.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,x=arguments[1],U=arguments[2],I=arguments[3]||0,q=null);let de,ye,Ae,we,ke,Ve,Re,et,ut;const mt=x.isCompressedTexture?x.mipmaps[I]:x.image;q!==null?(de=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,ke=q.min.y,Ve=q.isBox3?q.min.z:0):(de=mt.width,ye=mt.height,Ae=mt.depth||1,we=0,ke=0,Ve=0),Y!==null?(Re=Y.x,et=Y.y,ut=Y.z):(Re=0,et=0,ut=0);const Ot=pe.convert(U.format),nt=pe.convert(U.type);let Ce;U.isData3DTexture?(_.setTexture3D(U,0),Ce=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(_.setTexture2DArray(U,0),Ce=N.TEXTURE_2D_ARRAY):(_.setTexture2D(U,0),Ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const vn=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jt=N.getParameter(N.UNPACK_SKIP_PIXELS),ui=N.getParameter(N.UNPACK_SKIP_ROWS),Ht=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const $i=x.isDataArrayTexture||x.isData3DTexture,gt=U.isDataArrayTexture||U.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const hn=Le.get(x),Ji=Le.get(U),qt=Le.get(hn.__renderTarget),Dn=Le.get(Ji.__renderTarget);Ue.bindFramebuffer(N.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Ln=0;Ln<Ae;Ln++)$i&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(x).__webglTexture,I,Ve+Ln),x.isDepthTexture?(gt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(U).__webglTexture,I,ut+Ln),N.blitFramebuffer(we,ke,de,ye,Re,et,de,ye,N.DEPTH_BUFFER_BIT,N.NEAREST)):gt?N.copyTexSubImage3D(Ce,I,Re,et,ut+Ln,we,ke,de,ye):N.copyTexSubImage2D(Ce,I,Re,et,ut+Ln,we,ke,de,ye);Ue.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else gt?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Ce,I,Re,et,ut,de,ye,Ae,Ot,nt,mt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,I,Re,et,ut,de,ye,Ae,Ot,mt.data):N.texSubImage3D(Ce,I,Re,et,ut,de,ye,Ae,Ot,nt,mt):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,Re,et,de,ye,Ot,nt,mt.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,Re,et,mt.width,mt.height,Ot,mt.data):N.texSubImage2D(N.TEXTURE_2D,I,Re,et,de,ye,Ot,nt,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,vn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht),I===0&&U.generateMipmaps&&N.generateMipmap(Ce),Ue.unbindTexture()},this.copyTextureToTexture3D=function(x,U,q=null,Y=null,I=0){return x.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,x=arguments[2],U=arguments[3],I=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,q,Y,I)},this.initRenderTarget=function(x){Le.get(x).__webglFramebuffer===void 0&&_.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?_.setTextureCube(x,0):x.isData3DTexture?_.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?_.setTexture2DArray(x,0):_.setTexture2D(x,0),Ue.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,Ue.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class tg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ng{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Os,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new F;class ra{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),a=at(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nc extends hi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ri;const rr=new F,Ci=new F,Pi=new F,Di=new Ne,ar=new Ne,ic=new vt,Vr=new F,sr=new F,Wr=new F,rl=new Ne,qa=new Ne,al=new Ne;class ig extends Rt{constructor(e=new nc){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ng(t,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new ra(n,3,0,!1)),Ri.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Ri,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),ic.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;Xr(Vr.set(-.5,-.5,0),Pi,s,Ci,r,a),Xr(sr.set(.5,-.5,0),Pi,s,Ci,r,a),Xr(Wr.set(.5,.5,0),Pi,s,Ci,r,a),rl.set(0,0),qa.set(1,0),al.set(1,1);let o=e.ray.intersectTriangle(Vr,sr,Wr,!1,rr);if(o===null&&(Xr(sr.set(-.5,.5,0),Pi,s,Ci,r,a),qa.set(0,1),o=e.ray.intersectTriangle(Vr,Wr,sr,!1,rr),o===null))return;const l=e.ray.origin.distanceTo(rr);l<e.near||l>e.far||t.push({distance:l,point:rr.clone(),uv:$t.getInterpolation(rr,Vr,sr,Wr,rl,qa,al,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(i,e,t,n,r,a){Di.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ar.x=a*Di.x-r*Di.y,ar.y=r*Di.x+a*Di.y):ar.copy(Di),i.copy(e),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(ic)}class rc extends hi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sl=new vt,ks=new ha,qr=new ca,Yr=new F;class rg extends Rt{constructor(e=new on,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=a,e.ray.intersectsSphere(qr)===!1)return;sl.copy(r).invert(),ks.copy(e.ray).applyMatrix4(sl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const u=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let v=u,y=g;v<y;v++){const f=c.getX(v);Yr.fromBufferAttribute(p,f),ol(Yr,f,l,r,e,t,this)}}else{const u=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=u,y=g;v<y;v++)Yr.fromBufferAttribute(p,v),ol(Yr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ol(i,e,t,n,r,a,s){const o=ks.distanceSqToPoint(i);if(o<t){const l=new F;ks.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ya extends Ft{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends on{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],u=[],g=[];let v=0;const y=[],f=n/2;let h=0;w(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(g,2));function w(){const E=new F,z=new F;let T=0;const R=(t-e)/n;for(let L=0;L<=a;L++){const S=[],M=L/a,P=M*(t-e)+e;for(let W=0;W<=r;W++){const H=W/r,j=H*l+o,ae=Math.sin(j),J=Math.cos(j);z.x=P*ae,z.y=-M*n+f,z.z=P*J,p.push(z.x,z.y,z.z),E.set(ae,R,J).normalize(),u.push(E.x,E.y,E.z),g.push(H,1-M),S.push(v++)}y.push(S)}for(let L=0;L<r;L++)for(let S=0;S<a;S++){const M=y[S][L],P=y[S+1][L],W=y[S+1][L+1],H=y[S][L+1];(e>0||S!==0)&&(d.push(M,P,H),T+=3),(t>0||S!==a-1)&&(d.push(P,W,H),T+=3)}c.addGroup(h,T,0),h+=T}function b(E){const z=v,T=new Ne,R=new F;let L=0;const S=E===!0?e:t,M=E===!0?1:-1;for(let W=1;W<=r;W++)p.push(0,f*M,0),u.push(0,M,0),g.push(.5,.5),v++;const P=v;for(let W=0;W<=r;W++){const j=W/r*l+o,ae=Math.cos(j),J=Math.sin(j);R.x=S*J,R.y=f*M,R.z=S*ae,p.push(R.x,R.y,R.z),u.push(0,M,0),T.x=ae*.5+.5,T.y=J*.5*M+.5,g.push(T.x,T.y),v++}for(let W=0;W<r;W++){const H=z+W,j=P+W;E===!0?d.push(j,j+1,H):d.push(j+1,j,H),L+=3}c.addGroup(h,L,E===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends pr{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ac extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ja=new vt,ll=new F,cl=new F;class ag{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cl),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sg extends ag{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class og extends ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const dl=new vt;class lg{constructor(e,t,n=0,r=1/0){this.ray=new ha(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(e,t=!0,n=[]){return Hs(e,this,n,t),n.sort(ul),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Hs(e[r],this,n,t);return n.sort(ul),n}}function ul(i,e){return i.distance-e.distance}function Hs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Hs(a[s],e,t,!0)}}class fl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cg extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);const pl={type:"change"},Qs={type:"start"},sc={type:"end"},jr=new ha,ml=new zn,hg=Math.cos(70*kh.DEG2RAD),Et=new F,Bt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ka=1e-6;class dg extends cg{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new li,this._lastTargetPosition=new F,this._quat=new li().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fl,this._sphericalDelta=new fl,this._scale=1,this._panOffset=new F,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new F,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fg.bind(this),this._onPointerDown=ug.bind(this),this._onPointerUp=pg.bind(this),this._onContextMenu=Mg.bind(this),this._onMouseWheel=_g.bind(this),this._onKeyDown=vg.bind(this),this._onTouchStart=xg.bind(this),this._onTouchMove=yg.bind(this),this._onMouseDown=mg.bind(this),this._onMouseMove=gg.bind(this),this._interceptControlDown=Sg.bind(this),this._interceptControlUp=Eg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pl),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),r<-Math.PI?r+=Bt:r>Math.PI&&(r-=Bt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Et.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(jr.origin.copy(this.object.position),jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jr.direction))<hg?this.object.lookAt(this.target):(ml.setFromNormalAndCoplanarPoint(this.object.up,this.target),jr.intersectPlane(ml,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ka||this._lastTargetPosition.distanceToSquared(this.target)>Ka?(this.dispatchEvent(pl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let a=Et.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ug(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sc),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=st.DOLLY;break;case Ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}break;case Ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Qs)}function gg(i){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _g(i){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(i.preventDefault(),this.dispatchEvent(Qs),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sc))}function vg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=st.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=st.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Qs)}function yg(i){switch(this._trackPointer(i),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=st.NONE}}function Mg(i){this.enabled!==!1&&i.preventDefault()}function Sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Eg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wt=JSON.parse('[{"id":"logic","name":"Logic","type":"Pure Math","category":"Foundations","year":-350,"era":{"start":-350,"peak":1930,"end":null},"difficulty":"High School","aka":["Philosophical Logic","Mathematical Logic"],"notableYears":[-350,1879,1931],"notes":"Classical syllogistic (Aristotle), modern predicate logic (Frege 1879), incompleteness (Gödel 1931).","leadsTo":["axiomatic-set-theory","category-theory","computation","model-theory"],"contributors":["aristotle","frege","peano","tarski","godel","church"],"prerequisites":[]},{"id":"axiomatic-set-theory","name":"Axiomatic Set Theory","type":"Pure Math","category":"Foundations","year":1908,"era":{"start":1874,"peak":1922,"end":null},"difficulty":"UGrad","aka":["ZFC","ZF + Choice"],"notableYears":[1874,1908,1922],"notes":"Cantor’s set theory (1870s), Zermelo axioms (1908), Fraenkel–Skolem refinements (1922).","leadsTo":["category-theory","measure-theory","topology","model-theory"],"contributors":["cantor","zermelo","fraenkel","skolem","godel","hilbert"],"prerequisites":[{"id":"logic","strength":75}]},{"id":"category-theory","name":"Category Theory","type":"Pure Math","category":"Foundations","year":1945,"era":{"start":1945,"peak":1960,"end":null},"difficulty":"PGrad","aka":["Eilenberg–Mac Lane framework"],"notableYears":[1945,1957,1970],"notes":"Introduced by Eilenberg & Mac Lane (1945); natural transformations, adjunctions; Grothendieck toposes.","leadsTo":["algebraic-topology","homological-algebra","type-theory"],"contributors":["eilenberg","maclane","grothendieck","lawvere"],"prerequisites":[{"id":"axiomatic-set-theory","strength":80},{"id":"abstract-algebra","strength":75}]},{"id":"elementary-geometry","name":"Elementary Geometry","type":"Pure Math","category":"Geometry and Topology","year":-300,"era":{"start":-600,"peak":-300,"end":null},"difficulty":"High School","aka":["Euclidean Geometry"],"notableYears":[-300],"notes":"Euclid’s Elements (~300 BCE); foundation for classical geometry and trigonometry.","leadsTo":["calculus","topology","differential-geometry","trigonometry"],"contributors":["euclid","pythagoras","archimedes"],"prerequisites":[]},{"id":"linear-algebra","name":"Linear Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1840,"peak":1870,"end":null},"difficulty":"High School","aka":["Matrix Theory","Vector Spaces"],"notableYears":[1844,1858,1870],"notes":"Grassmann (1844), Cayley (1858), Jordan normal form (1870s).","leadsTo":["abstract-algebra","functional-analysis","computational-linear-algebra","machine-learning"],"contributors":["gauss","cauchy","cayley","jordan","sylvester"],"prerequisites":[]},{"id":"abstract-algebra","name":"Abstract Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1870,"era":{"start":1830,"peak":1890,"end":null},"difficulty":"UGrad","aka":["Modern Algebra"],"notableYears":[1830,1846,1870],"notes":"From groups (Galois) to rings/fields (Dedekind, Kronecker); consolidation late 19th c.","leadsTo":["galois-theory","lie-groups","representation-theory","homological-algebra","commutative-algebra"],"contributors":["galois","cauchy","gauss","dedekind","noether","kronecker"],"prerequisites":[{"id":"linear-algebra","strength":70}]},{"id":"galois-theory","name":"Galois Theory","type":"Pure Math","category":"Algebra and Discrete","year":1832,"era":{"start":1832,"peak":1870,"end":null},"difficulty":"PGrad","aka":["Theory of Field Extensions"],"notableYears":[1832,1870],"notes":"Galois (1832); Jordan, Dedekind elaborations later.","leadsTo":["number-theory","algebraic-geometry"],"contributors":["galois","jordan","dedekind"],"prerequisites":[{"id":"abstract-algebra","strength":90}]},{"id":"representation-theory","name":"Module & Representation Theory","type":"Pure Math","category":"Algebra and Discrete","year":1897,"era":{"start":1897,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Linear Representations","Module Theory"],"notableYears":[1897,1900,1930],"notes":"Frobenius and Schur (1897–1905) for finite groups; module theory (Noether).","leadsTo":["lie-groups","homological-algebra","harmonic-analysis"],"contributors":["frobenius","schur","noether","weilang","artin"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"lie-groups","name":"Lie Groups & Lie Algebras","type":"Pure Math","category":"Algebra and Discrete","year":1873,"era":{"start":1870,"peak":1890,"end":null},"difficulty":"PGrad","aka":["Continuous Groups"],"notableYears":[1873,1880,1893],"notes":"Sophus Lie’s theory of continuous symmetry; Cartan classification in early 20th c.","leadsTo":["differential-geometry","representation-theory","theoretical-physics"],"contributors":["lie","cartan","weyl"],"prerequisites":[{"id":"abstract-algebra","strength":85},{"id":"calculus","strength":75}]},{"id":"homological-algebra","name":"Commutative and Homological Algebra","type":"Pure Math","category":"Algebra and Discrete","year":1956,"era":{"start":1945,"peak":1956,"end":null},"difficulty":"Research","aka":["Derived Functors","Ext/Tor"],"notableYears":[1945,1956],"notes":"Cartan–Eilenberg (1956); tools for modern algebra/topology.","leadsTo":["algebraic-topology","category-theory","algebraic-geometry"],"contributors":["cartan","eilenberg","grothendieck"],"prerequisites":[{"id":"abstract-algebra","strength":90},{"id":"category-theory","strength":75}]},{"id":"number-theory","name":"Number Theory","type":"Pure Math","category":"Algebra and Discrete","year":-300,"era":{"start":-600,"peak":1801,"end":null},"difficulty":"High School","aka":["Elementary Number Theory"],"notableYears":[1801,1859],"notes":"Ancient roots; Gauss’s Disquisitiones (1801); Riemann’s 1859 memoir.","leadsTo":["abstract-algebra","galois-theory","algebraic-number-theory"],"contributors":["euclid","euler","gauss","riemann","ramanujan","dirichlet"],"prerequisites":[]},{"id":"graph-theory","name":"Graph Theory & Combinatorics","type":"Pure Math","category":"Algebra and Discrete","year":1736,"era":{"start":1736,"peak":1970,"end":null},"difficulty":"High School","aka":["Networks","Discrete Mathematics"],"notableYears":[1736,1959,1976],"notes":"Euler (1736); Erdős–Rényi random graphs (1959); Four Color Theorem (1976).","leadsTo":["computation","optimization"],"contributors":["euler","erdos","renyi","tutte","conway"],"prerequisites":[]},{"id":"calculus","name":"Calculus","type":"Pure Math","category":"Analysis","year":1684,"era":{"start":1665,"peak":1687,"end":null},"difficulty":"High School","aka":["Differential and Integral Calculus"],"notableYears":[1684,1687],"notes":"Leibniz’s papers (1684–1686); Newton’s Principia (1687).","leadsTo":["vector-calculus","real-analysis","differential-equations","complex-analysis"],"contributors":["newton","leibniz","euler"],"prerequisites":[{"id":"elementary-geometry","strength":60}]},{"id":"vector-calculus","name":"Vector Calculus","type":"Pure Math","category":"Analysis","year":1854,"era":{"start":1813,"peak":1861,"end":null},"difficulty":"High School","aka":["Multivariable Calculus"],"notableYears":[1813,1854,1861],"notes":"Gauss’s divergence (1813), Stokes’ theorem (1854), Maxwell’s equations (1861–62).","leadsTo":["differential-equations","differential-geometry"],"contributors":["gauss","stokes","green","maxwell"],"prerequisites":[{"id":"calculus","strength":90},{"id":"linear-algebra","strength":70}]},{"id":"calculus-of-variations","name":"Calculus of Variations","type":"Pure Math","category":"Analysis","year":1755,"era":{"start":1755,"peak":1788,"end":null},"difficulty":"UGrad","aka":["Variational Calculus"],"notableYears":[1755,1788],"notes":"Euler (1755) and Lagrange’s Méchanique Analytique (1788).","leadsTo":["optimal-control","pde"],"contributors":["euler","lagrange","hilbert","tonelli"],"prerequisites":[{"id":"calculus","strength":85}]},{"id":"fractional-analysis","name":"Fractional and Non-linear Analysis","type":"Pure Math","category":"Analysis","year":1965,"era":{"start":1695,"peak":1965,"end":null},"difficulty":"PGrad","aka":["Fractional Calculus"],"notableYears":[1695,1965],"notes":"Fractional derivatives first queried by Leibniz (1695); modern theory flourished in mid-20th century.","leadsTo":["dynamical-systems"],"contributors":["liouville","riemann","grunwald","lettnikov"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"functional-analysis","strength":85}]},{"id":"complex-analysis","name":"Complex Analysis","type":"Pure Math","category":"Analysis","year":1851,"era":{"start":1814,"peak":1851,"end":null},"difficulty":"UGrad","aka":["Theory of Holomorphic Functions"],"notableYears":[1814,1825,1851],"notes":"Cauchy integral theorem (1814/1825); Riemann surfaces (1851).","leadsTo":["harmonic-analysis","number-theory"],"contributors":["cauchy","riemann","gauss","weierstrass"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"real-analysis","name":"Real Analysis","type":"Pure Math","category":"Analysis","year":1872,"era":{"start":1821,"peak":1900,"end":null},"difficulty":"UGrad","aka":["Mathematical Analysis"],"notableYears":[1821,1872,1890],"notes":"Cauchy’s Cours d’Analyse (1821); arithmetization with Dedekind/Cantor/Weierstrass (1870s).","leadsTo":["measure-theory","functional-analysis","topology"],"contributors":["cauchy","riemann","weierstrass","cantor","dedekind"],"prerequisites":[{"id":"calculus","strength":95}]},{"id":"measure-theory","name":"Measure Theory","type":"Pure Math","category":"Analysis","year":1902,"era":{"start":1899,"peak":1902,"end":null},"difficulty":"PGrad","aka":["Lebesgue Integration"],"notableYears":[1902,1904,1933],"notes":"Lebesgue’s thesis (1902); extension to probability by Kolmogorov axioms (1933).","leadsTo":["functional-analysis","probability-theory","stochastic-analysis"],"contributors":["lebesgue","borel","caratheodory","kolmogorov"],"prerequisites":[{"id":"real-analysis","strength":95},{"id":"axiomatic-set-theory","strength":70}]},{"id":"functional-analysis","name":"Functional Analysis","type":"Pure Math","category":"Analysis","year":1920,"era":{"start":1907,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Banach & Hilbert Space Theory","Operator Theory"],"notableYears":[1907,1932,1940],"notes":"Fréchet metric spaces (1907), Banach spaces (1932), von Neumann operator algebras.","leadsTo":["pde","stochastic-analysis","quantum-mechanics","harmonic-analysis"],"contributors":["hilbert","banach","vonneumann","riesz","stoner"],"prerequisites":[{"id":"real-analysis","strength":90},{"id":"linear-algebra","strength":85},{"id":"measure-theory","strength":80}]},{"id":"harmonic-analysis","name":"Harmonic Analysis","type":"Pure Math","category":"Analysis","year":1807,"era":{"start":1807,"peak":1915,"end":null},"difficulty":"PGrad","aka":["Fourier Analysis"],"notableYears":[1807,1822,1915],"notes":"Fourier series (1807–1822); Plancherel theorem (1910s); modern non-commutative directions.","leadsTo":["signal-processing","pde"],"contributors":["fourier","riemann","plancherel","hardy","littlewood"],"prerequisites":[{"id":"calculus","strength":85},{"id":"complex-analysis","strength":75}]},{"id":"topology","name":"Topology","type":"Pure Math","category":"Geometry and Topology","year":1895,"era":{"start":1895,"peak":1930,"end":null},"difficulty":"UGrad","aka":["General Topology","Point-Set Topology"],"notableYears":[1895,1914,1930],"notes":"Poincaré (1895); Hausdorff spaces (1914); foundations of modern topology in early 20th c.","leadsTo":["algebraic-topology","differential-topology","functional-analysis"],"contributors":["poincare","hausdorff","cantor","hilbert"],"prerequisites":[{"id":"real-analysis","strength":75},{"id":"axiomatic-set-theory","strength":70}]},{"id":"algebraic-topology","name":"Algebraic Topology","type":"Pure Math","category":"Geometry and Topology","year":1910,"era":{"start":1895,"peak":1950,"end":null},"difficulty":"Research","aka":["Homology and Homotopy Theory"],"notableYears":[1895,1935,1950],"notes":"From Poincaré’s analysis situs to Eilenberg–Steenrod axioms; Postnikov, Serre, and beyond.","leadsTo":["differential-topology","category-theory"],"contributors":["poincare","eilenberg","steenrod","hurewicz","serre"],"prerequisites":[{"id":"topology","strength":90},{"id":"abstract-algebra","strength":85}]},{"id":"differential-geometry","name":"Differential Geometry","type":"Pure Math","category":"Geometry and Topology","year":1827,"era":{"start":1827,"peak":1854,"end":null},"difficulty":"PGrad","aka":["Riemannian Geometry"],"notableYears":[1827,1854],"notes":"Gauss’s Theorema Egregium (1827), Riemann’s habilitation (1854).","leadsTo":["differential-topology","general-relativity","symplectic-geometry"],"contributors":["gauss","riemann","poincare","cartan"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"linear-algebra","strength":75}]},{"id":"differential-topology","name":"Differential Topology","type":"Pure Math","category":"Geometry and Topology","year":1950,"era":{"start":1950,"peak":1961,"end":null},"difficulty":"Research","aka":["Smooth Manifolds & Cobordism"],"notableYears":[1950,1961],"notes":"Thom’s cobordism (1950s), Milnor’s discoveries (exotic 7-spheres, 1956).","leadsTo":[],"contributors":["thom","milnor","smale"],"prerequisites":[{"id":"topology","strength":85},{"id":"differential-geometry","strength":85}]},{"id":"probability-theory","name":"Probability and Statistical Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1933,"era":{"start":1654,"peak":1933,"end":null},"difficulty":"UGrad","aka":["Measure-Theoretic Probability"],"notableYears":[1654,1703,1933],"notes":"Pascal–Fermat correspondence (1654); Bernoulli (1703); Kolmogorov’s axioms (1933).","leadsTo":["statistical-inference","stochastic-processes","information-theory"],"contributors":["pascal","fermat","bernoulli","laplace","kolmogorov"],"prerequisites":[{"id":"calculus","strength":70}]},{"id":"statistical-inference","name":"Statistical Inference","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1935,"era":{"start":1805,"peak":1935,"end":null},"difficulty":"UGrad","aka":["Mathematical Statistics"],"notableYears":[1805,1809,1922,1933],"notes":"Least squares (Legendre 1805, Gauss 1809); Fisher (1922); Neyman–Pearson (1933).","leadsTo":["bayesian-inference","regression-analysis","machine-learning"],"contributors":["legendre","gauss","fisher","neyman","pearson"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"linear-algebra","strength":65}]},{"id":"stochastic-processes","name":"Stochastic Processes","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1906,"era":{"start":1906,"peak":1930,"end":null},"difficulty":"PGrad","aka":["Markov Processes","Wiener Processes"],"notableYears":[1906,1923,1931],"notes":"Markov chains (1906), Wiener process (1923), Kolmogorov forward/backward equations (1931).","leadsTo":["stochastic-analysis","time-series"],"contributors":["markov","wiener","kolmogorov","doob"],"prerequisites":[{"id":"probability-theory","strength":90},{"id":"real-analysis","strength":75}]},{"id":"bayesian-inference","name":"Bayesian Inference and Computation","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1763,"era":{"start":1763,"peak":1990,"end":null},"difficulty":"UGrad","aka":["Bayesian Statistics"],"notableYears":[1763,1950,1990],"notes":"Bayes (1763) and Laplace; computational renaissance with MCMC/VI in 1990s.","leadsTo":["machine-learning"],"contributors":["bayes","laplace","jeffreys","jaynes","metropolis","hastings"],"prerequisites":[{"id":"probability-theory","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"stochastic-analysis","name":"Stochastic Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1944,"era":{"start":1944,"peak":1970,"end":null},"difficulty":"Research","aka":["Itô Calculus"],"notableYears":[1944,1951,1979],"notes":"Itô integral (1944), martingale theory (Doob), Malliavin calculus (1970s).","leadsTo":[],"contributors":["ito","doob","malliavin"],"prerequisites":[{"id":"stochastic-processes","strength":90},{"id":"measure-theory","strength":85},{"id":"functional-analysis","strength":80}]},{"id":"regression-analysis","name":"Regression Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1805,"era":{"start":1805,"peak":1900,"end":null},"difficulty":"High School","aka":["Least Squares","Linear Models"],"notableYears":[1805,1809,1877],"notes":"Legendre (1805), Gauss (1809); Pearson correlation (1890s).","leadsTo":["machine-learning"],"contributors":["legendre","gauss","pearson","fisher"],"prerequisites":[{"id":"statistical-inference","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"time-series","name":"Time Series Analysis","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1927,"era":{"start":1927,"peak":1970,"end":null},"difficulty":"UGrad","aka":["ARMA/ARIMA Models"],"notableYears":[1927,1938,1970],"notes":"Yule (1927), Wold decomposition (1938), Box–Jenkins (1970).","leadsTo":["machine-learning"],"contributors":["yule","wold","box","jenkins"],"prerequisites":[{"id":"stochastic-processes","strength":85},{"id":"statistical-inference","strength":80}]},{"id":"information-theory","name":"Information Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1948,"era":{"start":1948,"peak":1960,"end":null},"difficulty":"UGrad","aka":["Shannon Theory"],"notableYears":[1948,1959],"notes":"Shannon (1948) founded the field; coding theorems and rate–distortion theory followed.","leadsTo":["machine-learning"],"contributors":["shannon","cover","gallager","jaynes"],"prerequisites":[{"id":"probability-theory","strength":85}]},{"id":"machine-learning","name":"Machine Learning Theory","type":"Applied Math","category":"Probability, Statistics and Stochastic Processes","year":1957,"era":{"start":1957,"peak":2012,"end":null},"difficulty":"PGrad","aka":["Statistical Learning Theory"],"notableYears":[1957,1984,2001,2012],"notes":"Perceptron (1957), PAC learning (1984), kernel methods (1990s–2000s), deep learning surge (2012).","leadsTo":[],"contributors":["rosenblatt","vapnik","valiant","lecun","hinton","bengio"],"prerequisites":[{"id":"linear-algebra","strength":80},{"id":"statistical-inference","strength":85},{"id":"optimization","strength":75}]},{"id":"optimization","name":"Convex and Non-convex Optimisation","type":"Applied Math","category":"Optimisation and Control","year":1947,"era":{"start":1947,"peak":2004,"end":null},"difficulty":"UGrad","aka":["Mathematical Programming"],"notableYears":[1947,1951,1994,2004],"notes":"Linear programming (Dantzig 1947), convex analysis (Fenchel 1951), interior-point (Karmarkar 1984), convex optimization textbooks (2004).","leadsTo":["machine-learning","optimal-control"],"contributors":["dantzig","fenchel","rockafellar","nesterov","boyd"],"prerequisites":[{"id":"calculus","strength":85},{"id":"linear-algebra","strength":80}]},{"id":"optimal-control","name":"Optimal Control Theory","type":"Applied Math","category":"Optimisation and Control","year":1956,"era":{"start":1956,"peak":1962,"end":null},"difficulty":"PGrad","aka":["Pontryagin Maximum Principle","Dynamic Programming"],"notableYears":[1956,1962],"notes":"Bellman’s dynamic programming (1950s); Pontryagin maximum principle (1956–62).","leadsTo":[],"contributors":["bellman","pontryagin"],"prerequisites":[{"id":"calculus-of-variations","strength":85},{"id":"differential-equations","strength":80},{"id":"optimization","strength":75}]},{"id":"game-theory","name":"Game Theory","type":"Applied Math","category":"Optimisation and Control","year":1944,"era":{"start":1928,"peak":1951,"end":null},"difficulty":"UGrad","aka":["Non-cooperative Games"],"notableYears":[1928,1944,1951],"notes":"von Neumann minimax (1928), Theory of Games and Economic Behavior (1944), Nash equilibrium (1950–51).","leadsTo":[],"contributors":["vonneumann","morgenstern","nash"],"prerequisites":[{"id":"probability-theory","strength":70},{"id":"optimization","strength":70}]},{"id":"numerical-analysis","name":"Numerical Analysis","type":"Applied Math","category":"Computation","year":1940,"era":{"start":1940,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Scientific Computing"],"notableYears":[1947,1965],"notes":"Field matured with electronic computing; focus on stability, convergence, error.","leadsTo":["computational-linear-algebra"],"contributors":["vonneumann","turing","householder","golub"],"prerequisites":[{"id":"calculus","strength":80},{"id":"linear-algebra","strength":75}]},{"id":"computational-linear-algebra","name":"Computational Linear Algebra","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1950,"peak":1970,"end":null},"difficulty":"UGrad","aka":["Numerical Linear Algebra"],"notableYears":[1959,1965,1977],"notes":"QR algorithm (1959), Householder methods (1960s), Golub–Van Loan textbook (1977).","leadsTo":["machine-learning"],"contributors":["golub","vanloan","householder","givens"],"prerequisites":[{"id":"linear-algebra","strength":90},{"id":"numerical-analysis","strength":75}]},{"id":"computation","name":"Theory of Computation","type":"Applied Math","category":"Computation","year":1936,"era":{"start":1936,"peak":1971,"end":null},"difficulty":"UGrad","aka":["Automata, Complexity, Computability"],"notableYears":[1936,1943,1971],"notes":"Church–Turing (1936), Kleene (1943), Cook–Levin theorem (1971).","leadsTo":[],"contributors":["turing","church","kleene","cook","levin","knuth"],"prerequisites":[{"id":"logic","strength":85},{"id":"graph-theory","strength":70}]},{"id":"differential-equations","name":"Differential Equations","type":"Applied Math","category":"Physics","year":1687,"era":{"start":1671,"peak":1750,"end":null},"difficulty":"High School","aka":["ODEs"],"notableYears":[1687,1736,1760],"notes":"From Newton’s laws to Euler’s methods; existence/uniqueness developed in 19th c.","leadsTo":["pde","dynamical-systems"],"contributors":["newton","euler","leibniz","lagrange","cauchy"],"prerequisites":[{"id":"calculus","strength":90}]},{"id":"pde","name":"Partial Differential Equations","type":"Applied Math","category":"Physics","year":1750,"era":{"start":1750,"peak":1910,"end":null},"difficulty":"PGrad","aka":["Elliptic/Parabolic/Hyperbolic PDEs"],"notableYears":[1750,1822,1910],"notes":"Vibrating string and heat equation (d’Alembert, Fourier), Hilbert’s problems shaped 20th c PDE.","leadsTo":["dynamical-systems","quantum-mechanics","general-relativity"],"contributors":["euler","fourier","lagrange","hilbert","sobolev"],"prerequisites":[{"id":"vector-calculus","strength":90},{"id":"differential-equations","strength":85}]},{"id":"dynamical-systems","name":"Dynamical Systems and Chaos","type":"Applied Math","category":"Physics","year":1890,"era":{"start":1890,"peak":1963,"end":null},"difficulty":"PGrad","aka":["Qualitative Theory of Differential Equations","Chaos"],"notableYears":[1890,1963],"notes":"Poincaré (1890) qualitative theory; Lorenz (1963) chaos.","leadsTo":[],"contributors":["poincare","birkhoff","smale","lorenz"],"prerequisites":[{"id":"differential-equations","strength":90},{"id":"topology","strength":70}]},{"id":"quantum-mechanics","name":"Quantum Mechanics","type":"Applied Math","category":"Physics","year":1926,"era":{"start":1925,"peak":1932,"end":null},"difficulty":"PGrad","aka":["Wave & Matrix Mechanics"],"notableYears":[1925,1926,1932],"notes":"Heisenberg (1925) matrix mechanics; Schrödinger (1926) wave mechanics; von Neumann mathematical foundations (1932).","leadsTo":[],"contributors":["heisenberg","schrodinger","dirac","vonneumann","feynman"],"prerequisites":[{"id":"functional-analysis","strength":85},{"id":"pde","strength":80}]},{"id":"general-relativity","name":"General Relativity","type":"Applied Math","category":"Physics","year":1915,"era":{"start":1915,"peak":1916,"end":null},"difficulty":"Research","aka":["GR"],"notableYears":[1915,1916],"notes":"Einstein’s field equations (1915–16); differential geometry as the mathematical core.","leadsTo":[],"contributors":["einstein","riemann","levicivita","weyl","hawking","penrose"],"prerequisites":[{"id":"differential-geometry","strength":95},{"id":"pde","strength":80}]},{"id":"signal-processing","name":"Signal Processing","type":"Applied Math","category":"Computation","year":1965,"era":{"start":1948,"peak":1975,"end":null},"difficulty":"UGrad","aka":["DSP","Fourier & Wavelet Methods"],"notableYears":[1948,1965,1987],"notes":"Shannon lays groundwork (1948); digital signal processing (1960s–70s); wavelets (Daubechies 1987–92).","leadsTo":["machine-learning"],"contributors":["fourier","shannon","oppenheim","daubechies"],"prerequisites":[{"id":"harmonic-analysis","strength":85},{"id":"linear-algebra","strength":75}]},{"id":"trigonometry","name":"Trigonometry","type":"Pure Math","category":"Analysis","year":-150,"era":{"start":-150,"peak":1748,"end":null},"difficulty":"High School","aka":["Circular Functions"],"notableYears":[-150,1748],"notes":"Hipparchus & Ptolemy tables (classical); Euler’s Introductio in analysin infinitorum (1748) modernizes trig via analytic functions.","leadsTo":["calculus","harmonic-analysis","complex-analysis"],"contributors":["hipparchus","ptolemy","al-biruni","bhaskara-ii","euler"],"prerequisites":[]}]'),lr=JSON.parse('[{"id":"pythagoras","name":"Pythagoras","born":-570,"died":-495,"image":"/images/people/thales.jpg","gender":1},{"id":"euclid","name":"Euclid","born":-325,"died":-265,"image":"/images/people/euclid.jpg","gender":1},{"id":"aristotle","name":"Aristotle","born":-384,"died":-322,"image":"/images/people/aristotle.jpg","gender":1},{"id":"descartes","name":"René Descartes","born":1596,"died":1650,"image":"/images/people/descartes.jpg","gender":1},{"id":"newton","name":"Isaac Newton","born":1643,"died":1727,"image":"/images/people/newton.jpg","gender":1},{"id":"leibniz","name":"Gottfried Wilhelm Leibniz","born":1646,"died":1716,"image":"/images/people/newton.jpg","gender":1},{"id":"euler","name":"Leonhard Euler","born":1707,"died":1783,"image":"/images/people/euler.jpg","gender":1},{"id":"lagrange","name":"Joseph-Louis Lagrange","born":1736,"died":1813,"image":"/images/people/euler.jpg","gender":1},{"id":"fourier","name":"Joseph Fourier","born":1768,"died":1830,"image":"/images/people/fourier.jpg","gender":1},{"id":"gauss","name":"Carl Friedrich Gauss","born":1777,"died":1855,"image":"/images/people/gauss.jpg","gender":1},{"id":"cauchy","name":"Augustin-Louis Cauchy","born":1789,"died":1857,"image":"/images/people/gauss.jpg","gender":1},{"id":"galois","name":"Évariste Galois","born":1811,"died":1832,"image":"/images/people/gauss.jpg","gender":1},{"id":"lovelace","name":"Ada Lovelace","born":1815,"died":1852,"image":"/images/people/lovelace.jpg","gender":0},{"id":"cantor","name":"Georg Cantor","born":1845,"died":1918,"image":"/images/people/cantor.jpg","gender":1},{"id":"riemann","name":"Bernhard Riemann","born":1826,"died":1866,"image":"/images/people/gauss.jpg","gender":1},{"id":"hilbert","name":"David Hilbert","born":1862,"died":1943,"image":"/images/people/hilbert.jpg","gender":1},{"id":"poincare","name":"Henri Poincaré","born":1854,"died":1912,"image":"/images/people/hilbert.jpg","gender":1},{"id":"ramanujan","name":"Srinivasa Ramanujan","born":1887,"died":1920,"image":"/images/people/einstein.jpg","gender":1},{"id":"einstein","name":"Albert Einstein","born":1879,"died":1955,"image":"/images/people/einstein.jpg","gender":1},{"id":"tarski","name":"Alfred Tarski","born":1901,"died":1983,"image":"/images/people/tarski.jpg","gender":1},{"id":"banach","name":"Stefan Banach","born":1892,"died":1945,"image":"/images/people/hilbert.jpg","gender":1},{"id":"lebesgue","name":"Henri Lebesgue","born":1875,"died":1941,"image":"/images/people/hilbert.jpg","gender":1},{"id":"kolmogorov","name":"Andrey Kolmogorov","born":1903,"died":1987,"image":"/images/people/hawking.jpg","gender":1},{"id":"turing","name":"Alan Turing","born":1912,"died":1954,"image":"/images/people/turing.jpg","gender":1},{"id":"godel","name":"Kurt Gödel","born":1906,"died":1978,"image":"/images/people/einstein.jpg","gender":1},{"id":"vonneumann","name":"John von Neumann","born":1903,"died":1957,"image":"/images/people/einstein.jpg","gender":1},{"id":"conway","name":"John Horton Conway","born":1937,"died":2020,"image":"/images/people/conway.jpg","gender":1},{"id":"knuth","name":"Donald Knuth","born":1938,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"rudin","name":"Walter Rudin","born":1921,"died":2010,"image":"/images/people/feynman.jpg","gender":1},{"id":"halmos","name":"Paul Halmos","born":1916,"died":2006,"image":"/images/people/feynman.jpg","gender":1},{"id":"axler","name":"Sheldon Axler","born":1949,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"strang","name":"Gilbert Strang","born":1934,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"tao","name":"Terence Tao","born":1975,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"wasserman","name":"Larry Wasserman","born":1959,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"jaynes","name":"Edwin Thompson Jaynes","born":1922,"died":1998,"image":"/images/people/feynman.jpg","gender":1},{"id":"jordan","name":"Camille Jordan","born":1838,"died":1922,"image":"/images/people/gauss.jpg","gender":1},{"id":"feynman","name":"Richard Feynman","born":1918,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"hawking","name":"Stephen Hawking","born":1942,"died":2018,"image":"/images/people/hawking.jpg","gender":1},{"id":"penrose","name":"Roger Penrose","born":1931,"died":null,"image":"/images/people/penrose.jpg","gender":1},{"id":"curie","name":"Marie Curie","born":1867,"died":1934,"image":"/images/people/curie.jpg","gender":0},{"id":"thom","name":"René Thom","born":1923,"died":2002,"image":"/images/people/feynman.jpg","gender":1},{"id":"milnor","name":"John Milnor","born":1931,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"smale","name":"Stephen Smale","born":1930,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"ito","name":"Kiyoshi Itô","born":1915,"died":2008,"image":"/images/people/hawking.jpg","gender":1},{"id":"doob","name":"Joseph Doob","born":1910,"died":2004,"image":"/images/people/feynman.jpg","gender":1},{"id":"malliavin","name":"Paul Malliavin","born":1925,"died":2010,"image":"/images/people/feynman.jpg","gender":1},{"id":"frege","name":"Gottlob Frege","born":1848,"died":1925,"image":"/images/people/cantor.jpg","gender":1},{"id":"church","name":"Alonzo Church","born":1903,"died":1995,"image":"/images/people/turing.jpg","gender":1},{"id":"peano","name":"Giuseppe Peano","born":1858,"died":1932,"image":"/images/people/cantor.jpg","gender":1},{"id":"weierstrass","name":"Karl Weierstrass","born":1815,"died":1897,"image":"/images/people/gauss.jpg","gender":1},{"id":"dedekind","name":"Richard Dedekind","born":1831,"died":1916,"image":"/images/people/cantor.jpg","gender":1},{"id":"noether","name":"Emmy Noether","born":1882,"died":1935,"image":"/images/people/curie.jpg","gender":0},{"id":"dirac","name":"Paul Dirac","born":1902,"died":1984,"image":"/images/people/einstein.jpg","gender":1},{"id":"nash","name":"John Nash","born":1928,"died":2015,"image":"/images/people/hawking.jpg","gender":1},{"id":"shannon","name":"Claude Shannon","born":1916,"died":2001,"image":"/images/people/turing.jpg","gender":1},{"id":"archimedes","name":"Archimedes","born":-287,"died":-212,"image":"/images/people/euclid.jpg","gender":1},{"id":"hipparchus","name":"Hipparchus","born":-190,"died":-120,"image":"/images/people/euclid.jpg","gender":1},{"id":"ptolemy","name":"Claudius Ptolemy","born":100,"died":170,"image":"/images/people/euclid.jpg","gender":1},{"id":"al-biruni","name":"Al-Biruni","born":973,"died":1050,"image":"/images/people/euclid.jpg","gender":1},{"id":"bhaskara-ii","name":"Bhaskara II","born":1114,"died":1185,"image":"/images/people/euclid.jpg","gender":1},{"id":"pascal","name":"Blaise Pascal","born":1623,"died":1662,"image":"/images/people/descartes.jpg","gender":1},{"id":"fermat","name":"Pierre de Fermat","born":1607,"died":1665,"image":"/images/people/descartes.jpg","gender":1},{"id":"bernoulli","name":"Jacob Bernoulli","born":1654,"died":1705,"image":"/images/people/newton.jpg","gender":1},{"id":"laplace","name":"Pierre-Simon Laplace","born":1749,"died":1827,"image":"/images/people/euler.jpg","gender":1},{"id":"legendre","name":"Adrien-Marie Legendre","born":1752,"died":1833,"image":"/images/people/euler.jpg","gender":1},{"id":"kronecker","name":"Leopold Kronecker","born":1823,"died":1891,"image":"/images/people/gauss.jpg","gender":1},{"id":"cayley","name":"Arthur Cayley","born":1821,"died":1895,"image":"/images/people/gauss.jpg","gender":1},{"id":"sylvester","name":"James Joseph Sylvester","born":1814,"died":1897,"image":"/images/people/gauss.jpg","gender":1},{"id":"dirichlet","name":"Peter Gustav Lejeune Dirichlet","born":1805,"died":1859,"image":"/images/people/gauss.jpg","gender":1},{"id":"liouville","name":"Joseph Liouville","born":1809,"died":1882,"image":"/images/people/gauss.jpg","gender":1},{"id":"stokes","name":"George Gabriel Stokes","born":1819,"died":1903,"image":"/images/people/gauss.jpg","gender":1},{"id":"green","name":"George Green","born":1793,"died":1841,"image":"/images/people/gauss.jpg","gender":1},{"id":"maxwell","name":"James Clerk Maxwell","born":1831,"died":1879,"image":"/images/people/gauss.jpg","gender":1},{"id":"borel","name":"Émile Borel","born":1871,"died":1956,"image":"/images/people/poincare.jpg","gender":1},{"id":"caratheodory","name":"Constantin Carathéodory","born":1873,"died":1950,"image":"/images/people/hilbert.jpg","gender":1},{"id":"hausdorff","name":"Felix Hausdorff","born":1868,"died":1942,"image":"/images/people/cantor.jpg","gender":1},{"id":"zermelo","name":"Ernst Zermelo","born":1871,"died":1953,"image":"/images/people/cantor.jpg","gender":1},{"id":"fraenkel","name":"Abraham Fraenkel","born":1891,"died":1965,"image":"/images/people/cantor.jpg","gender":1},{"id":"skolem","name":"Thoralf Skolem","born":1887,"died":1963,"image":"/images/people/hilbert.jpg","gender":1},{"id":"frobenius","name":"Ferdinand Georg Frobenius","born":1849,"died":1917,"image":"/images/people/cantor.jpg","gender":1},{"id":"schur","name":"Issai Schur","born":1875,"died":1941,"image":"/images/people/hilbert.jpg","gender":1},{"id":"artin","name":"Emil Artin","born":1898,"died":1962,"image":"/images/people/hilbert.jpg","gender":1},{"id":"lie","name":"Sophus Lie","born":1842,"died":1899,"image":"/images/people/cantor.jpg","gender":1},{"id":"cartan","name":"Élie Cartan","born":1869,"died":1951,"image":"/images/people/poincare.jpg","gender":1},{"id":"weyl","name":"Hermann Weyl","born":1885,"died":1955,"image":"/images/people/hilbert.jpg","gender":1},{"id":"eilenberg","name":"Samuel Eilenberg","born":1913,"died":1998,"image":"/images/people/feynman.jpg","gender":1},{"id":"maclane","name":"Saunders Mac Lane","born":1909,"died":2005,"image":"/images/people/feynman.jpg","gender":1},{"id":"grothendieck","name":"Alexander Grothendieck","born":1928,"died":2014,"image":"/images/people/hawking.jpg","gender":1},{"id":"lawvere","name":"F. William Lawvere","born":1937,"died":2023,"image":"/images/people/hawking.jpg","gender":1},{"id":"erdos","name":"Paul Erdős","born":1913,"died":1996,"image":"/images/people/feynman.jpg","gender":1},{"id":"renyi","name":"Alfréd Rényi","born":1921,"died":1970,"image":"/images/people/feynman.jpg","gender":1},{"id":"tutte","name":"W. T. Tutte","born":1917,"died":2002,"image":"/images/people/turing.jpg","gender":1},{"id":"tonelli","name":"Leonida Tonelli","born":1885,"died":1946,"image":"/images/people/hilbert.jpg","gender":1},{"id":"grunwald","name":"Anton Karl Grünwald","born":1838,"died":1920,"image":"/images/people/cantor.jpg","gender":1},{"id":"lettnikov","name":"Aleksey Vasilievich Letnikov","born":1837,"died":1888,"image":"/images/people/cantor.jpg","gender":1},{"id":"riesz","name":"Frigyes Riesz","born":1880,"died":1956,"image":"/images/people/hilbert.jpg","gender":1},{"id":"stoner","name":"Marshall Stone","born":1903,"died":1989,"image":"/images/people/feynman.jpg","gender":1},{"id":"plancherel","name":"Michel Plancherel","born":1885,"died":1967,"image":"/images/people/hilbert.jpg","gender":1},{"id":"hardy","name":"G. H. Hardy","born":1877,"died":1947,"image":"/images/people/ramanujan.jpg","gender":1},{"id":"littlewood","name":"J. E. Littlewood","born":1885,"died":1977,"image":"/images/people/ramanujan.jpg","gender":1},{"id":"steenrod","name":"Norman Steenrod","born":1910,"died":1971,"image":"/images/people/feynman.jpg","gender":1},{"id":"hurewicz","name":"Witold Hurewicz","born":1904,"died":1956,"image":"/images/people/feynman.jpg","gender":1},{"id":"serre","name":"Jean-Pierre Serre","born":1926,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"fisher","name":"Ronald Fisher","born":1890,"died":1962,"image":"/images/people/feynman.jpg","gender":1},{"id":"neyman","name":"Jerzy Neyman","born":1894,"died":1981,"image":"/images/people/feynman.jpg","gender":1},{"id":"pearson","name":"Karl Pearson","born":1857,"died":1936,"image":"/images/people/cantor.jpg","gender":1},{"id":"markov","name":"Andrey Markov","born":1856,"died":1922,"image":"/images/people/cantor.jpg","gender":1},{"id":"wiener","name":"Norbert Wiener","born":1894,"died":1964,"image":"/images/people/feynman.jpg","gender":1},{"id":"bayes","name":"Thomas Bayes","born":1701,"died":1761,"image":"/images/people/euler.jpg","gender":1},{"id":"jeffreys","name":"Harold Jeffreys","born":1891,"died":1989,"image":"/images/people/feynman.jpg","gender":1},{"id":"metropolis","name":"Nicholas Metropolis","born":1915,"died":1999,"image":"/images/people/feynman.jpg","gender":1},{"id":"hastings","name":"W. K. Hastings","born":1930,"died":2016,"image":"/images/people/hawking.jpg","gender":1},{"id":"yule","name":"George Udny Yule","born":1871,"died":1951,"image":"/images/people/poincare.jpg","gender":1},{"id":"wold","name":"Herman Wold","born":1908,"died":1992,"image":"/images/people/feynman.jpg","gender":1},{"id":"box","name":"George E. P. Box","born":1919,"died":2013,"image":"/images/people/feynman.jpg","gender":1},{"id":"jenkins","name":"Gwilym Jenkins","born":1932,"died":1982,"image":"/images/people/hawking.jpg","gender":1},{"id":"cover","name":"Thomas M. Cover","born":1938,"died":2012,"image":"/images/people/hawking.jpg","gender":1},{"id":"gallager","name":"Robert G. Gallager","born":1931,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"rosenblatt","name":"Frank Rosenblatt","born":1928,"died":1971,"image":"/images/people/turing.jpg","gender":1},{"id":"vapnik","name":"Vladimir Vapnik","born":1936,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"valiant","name":"Leslie Valiant","born":1949,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"lecun","name":"Yann LeCun","born":1960,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"hinton","name":"Geoffrey Hinton","born":1947,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"bengio","name":"Yoshua Bengio","born":1964,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"dantzig","name":"George Dantzig","born":1914,"died":2005,"image":"/images/people/feynman.jpg","gender":1},{"id":"fenchel","name":"Werner Fenchel","born":1905,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"rockafellar","name":"R. Tyrrell Rockafellar","born":1935,"died":null,"image":"/images/people/hawking.jpg","gender":1},{"id":"nesterov","name":"Yurii Nesterov","born":1956,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"boyd","name":"Stephen Boyd","born":1958,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"bellman","name":"Richard Bellman","born":1920,"died":1984,"image":"/images/people/feynman.jpg","gender":1},{"id":"pontryagin","name":"Lev Pontryagin","born":1908,"died":1988,"image":"/images/people/feynman.jpg","gender":1},{"id":"morgenstern","name":"Oskar Morgenstern","born":1902,"died":1977,"image":"/images/people/vonneumann.jpg","gender":1},{"id":"householder","name":"Alston Householder","born":1904,"died":1993,"image":"/images/people/feynman.jpg","gender":1},{"id":"golub","name":"Gene H. Golub","born":1932,"died":2007,"image":"/images/people/knuth.jpg","gender":1},{"id":"vanloan","name":"Charles F. Van Loan","born":1947,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"givens","name":"Wallace Givens","born":1910,"died":1993,"image":"/images/people/feynman.jpg","gender":1},{"id":"kleene","name":"Stephen Cole Kleene","born":1909,"died":1994,"image":"/images/people/turing.jpg","gender":1},{"id":"cook","name":"Stephen Cook","born":1939,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"levin","name":"Leonid Levin","born":1948,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"sobolev","name":"Sergei Sobolev","born":1908,"died":1989,"image":"/images/people/kolmogorov.jpg","gender":1},{"id":"birkhoff","name":"George David Birkhoff","born":1884,"died":1944,"image":"/images/people/poincare.jpg","gender":1},{"id":"lorenz","name":"Edward Norton Lorenz","born":1917,"died":2008,"image":"/images/people/feynman.jpg","gender":1},{"id":"heisenberg","name":"Werner Heisenberg","born":1901,"died":1976,"image":"/images/people/einstein.jpg","gender":1},{"id":"schrodinger","name":"Erwin Schrödinger","born":1887,"died":1961,"image":"/images/people/einstein.jpg","gender":1},{"id":"levicivita","name":"Tullio Levi-Civita","born":1873,"died":1941,"image":"/images/people/poincare.jpg","gender":1},{"id":"oppenheim","name":"Alan V. Oppenheim","born":1937,"died":null,"image":"/images/people/knuth.jpg","gender":1},{"id":"daubechies","name":"Ingrid Daubechies","born":1954,"died":null,"image":"/images/people/curie.jpg","gender":0},{"id":"weilang","name":"André Weil","born":1906,"died":1998,"image":"/images/people/feynman.jpg","gender":1}]');var bg=tt('<span class="difficulty-badge svelte-1uha8ag"> </span>'),Tg=tt('<div class="list-card-aka svelte-1uha8ag"><strong class="svelte-1uha8ag">Also known as:</strong> </div>'),Ag=tt('<div class="list-card-notable svelte-1uha8ag"><strong class="svelte-1uha8ag">Notable Years:</strong> </div>'),wg=tt('<span class="more svelte-1uha8ag"> </span>'),Rg=tt('<div class="list-card-contributors svelte-1uha8ag"><strong class="svelte-1uha8ag">Contributors:</strong> <!></div>'),Cg=tt('<p class="list-card-notes svelte-1uha8ag"> </p>'),Pg=tt('<button class="list-card svelte-1uha8ag"><div class="list-card-header svelte-1uha8ag"><h3 class="svelte-1uha8ag"> </h3> <div class="header-right svelte-1uha8ag"><!> <span class="year svelte-1uha8ag"> </span></div></div> <!> <!> <div class="list-card-meta svelte-1uha8ag"><span class="badge svelte-1uha8ag"> </span> <span class="type svelte-1uha8ag"> </span></div> <!> <!> <div class="list-card-footer svelte-1uha8ag">Click to view in 3D →</div></button>'),Dg=tt('<div class="list-view svelte-1uha8ag"><div class="list-header svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mathematical Topics</h1> <div class="sort-controls svelte-1uha8ag"><label for="sort-select" class="svelte-1uha8ag">Sort by:</label> <select id="sort-select" class="svelte-1uha8ag"><option>Year (Chronological)</option><option>Name (A-Z)</option><option>Category</option><option>Type (Pure/Applied)</option></select></div></div> <div class="list-cards svelte-1uha8ag"></div></div>'),Lg=tt('<button class="back-button svelte-1uha8ag" aria-label="Go to previous card">← Back</button>'),Ug=tt('<div class="difficulty-filter svelte-1uha8ag"><select aria-label="Filter by difficulty" class="svelte-1uha8ag"><option>All Levels</option><option>High School</option><option>Undergraduate</option><option>Postgraduate</option><option>Research</option></select></div>'),Ig=tt('<button class="search-button svelte-1uha8ag" aria-label="Search paths">🔍</button>'),Ng=tt("<option> </option>"),Fg=tt("<option> </option>"),Og=tt('<div class="error svelte-1uha8ag"> </div>'),Bg=tt('<li class="svelte-1uha8ag"> </li>'),zg=tt('<div class="path-result svelte-1uha8ag"><h4 class="svelte-1uha8ag"> </h4> <ol class="svelte-1uha8ag"></ol></div>'),kg=tt('<div class="search-panel svelte-1uha8ag"><button class="close-search-button svelte-1uha8ag">✕</button> <h3 class="svelte-1uha8ag">Find Path Between Topics</h3> <select class="svelte-1uha8ag"><option>Select starting topic...</option><!></select> <select class="svelte-1uha8ag"><option>Select destination topic...</option><!></select> <button class="find-button svelte-1uha8ag">Find Path</button> <!></div>'),Hg=tt('<button class="overlay-back-button svelte-1uha8ag">← Back</button>'),Gg=tt('<button class="overlay-button svelte-1uha8ag"> </button>'),Vg=tt('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">👥 Contributors</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),Wg=tt('<button class="overlay-button leads-button svelte-1uha8ag"> </button>'),Xg=tt('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">➜ Leads To</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),qg=tt('<button class="overlay-button prereq-button svelte-1uha8ag"> <span class="strength-badge svelte-1uha8ag"> </span></button>'),Yg=tt('<div class="overlay-section svelte-1uha8ag"><h3 class="svelte-1uha8ag">📚 Prerequisites</h3> <div class="overlay-grid svelte-1uha8ag"></div></div>'),jg=tt('<div class="card-overlay-panel svelte-1uha8ag"><button class="overlay-close-button svelte-1uha8ag">✕</button> <!> <h2 class="svelte-1uha8ag"> </h2> <!> <!> <!></div>'),Kg=tt('<img class="svelte-1uha8ag"/>'),Zg=tt('<div class="placeholder-img svelte-1uha8ag"> </div>'),$g=tt("<br/> ",1),Jg=tt('<p class="dates svelte-1uha8ag"><!> <!></p>'),Qg=tt('<div class="person-detail-card svelte-1uha8ag"><button class="close-person svelte-1uha8ag">✕</button> <!> <h3 class="svelte-1uha8ag"> </h3> <!></div>'),e_=tt('<div class="scene-container svelte-1uha8ag"></div> <!> <!> <button class="view-button svelte-1uha8ag" aria-label="Toggle view mode"> </button> <!> <!> <!>  <!> <!>',1);function o_(i,e){Fc(e,!1);let t=Wt(),n,r,a,s,o=[],l=Wt([]),c=Wt(null),d=Wt(null),p=null,u=Wt(null),g=Wt(!1),v=Wt(""),y=Wt(""),f=Wt(null),h=Wt("3d"),w=Wt("year"),b=Wt("All");const E=600,z=75,T=.3,R=.1,L={Foundations:"#8b5cf6","Algebra and Discrete":"#3b82f6",Analysis:"#10b981","Geometry and Topology":"#f59e0b","Probability, Statistics and Stochastic Processes":"#ef4444","Optimisation and Control":"#ec4899",Computation:"#06b6d4",Physics:"#f97316"},S={"High School":"#22c55e",UGrad:"#3b82f6",PGrad:"#f59e0b",Research:"#ef4444"};function M(_,m,C){const G=((_.year+600)/2700-.5)*E,se=_.type==="Pure Math"?-1:1,k=Object.keys(L).indexOf(_.category),oe=m/C-.5,Z=se*(k*4+8)+oe*2.5,V=oe*z;return new F(G,Z,V)}function P(_,m){const G=new Ii;G.userData={topic:_,type:"card"};const O=L[_.category]||"#ffffff",se=20,Q=document.createElement("canvas"),k=Q.getContext("2d");Q.width=768,Q.height=1024,k.fillStyle=O,k.fillRect(0,0,Q.width,Q.height),k.fillStyle="#1a1a2e",k.fillRect(se,se,Q.width-se*2,Q.height-se*2);let oe=60;k.fillStyle="#ffffff",k.font="bold 66px Arial",k.textAlign="center",k.textBaseline="top";const Z=_.name.split(" "),V=[];let ue=Z[0];for(let me=1;me<Z.length;me++){const ze=Z[me];k.measureText(ue+" "+ze).width<Q.width-100?ue+=" "+ze:(V.push(ue),ue=ze)}if(V.push(ue),V.forEach(me=>{k.fillText(me,Q.width/2,oe),oe+=75}),_.difficulty){const me=S[_.difficulty]||"#888888";k.fillStyle=me,k.font="bold 28px Arial",k.textAlign="center",k.fillText(_.difficulty.toUpperCase(),Q.width/2,oe),oe+=45}oe+=10,k.font="42px Arial",k.fillStyle="#aaaaaa";const le=_.year<0?`${Math.abs(_.year)} BC`:`${_.year} AD`;k.fillText(le,Q.width/2,oe),oe+=65,k.font="36px Arial",k.fillStyle=O;const re=_.category.split(" ");let Me=[],pe=re[0];for(let me=1;me<re.length;me++){const ze=re[me];k.measureText(pe+" "+ze).width<Q.width-100?pe+=" "+ze:(Me.push(pe),pe=ze)}Me.push(pe),Me.forEach(me=>{k.fillText(me,Q.width/2,oe),oe+=40}),oe+=20,k.font="30px Arial",k.fillStyle="#999999",k.fillText(_.type,Q.width/2,oe),oe+=50,_.contributors&&_.contributors.length>0&&(k.fillStyle="#cccccc",k.font="bold 26px Arial",k.textAlign="center",k.fillText("Contributors",Q.width/2,oe),oe+=40,k.font="28px Arial",k.fillStyle="#aaaaaa",k.textAlign="left",_.contributors.slice(0,8).forEach(me=>{const ze=lr.find(ln=>ln.id===me),dt=ze?ze.name:me.charAt(0).toUpperCase()+me.slice(1);k.fillText(`• ${dt}`,60,oe),oe+=34}),_.contributors.length>8&&(k.textAlign="center",k.fillStyle="#999",k.fillText(`+${_.contributors.length-8} more`,Q.width/2,oe),oe+=30),k.textAlign="center",oe+=10),_.leadsTo&&_.leadsTo.length>0&&(k.fillStyle="#cccccc",k.font="bold 26px Arial",k.fillText("Leads To",Q.width/2,oe),oe+=40,k.font="26px Arial",k.fillStyle="#6366f1",k.textAlign="left",_.leadsTo.slice(0,10).forEach(me=>{const ze=wt.find(dt=>dt.id===me);if(ze){const dt=`➜ ${ze.name}`;k.fillText(dt,60,oe),oe+=34}}),_.leadsTo.length>10&&(k.textAlign="center",k.fillStyle="#999",k.fillText(`+${_.leadsTo.length-10} more`,Q.width/2,oe)));const Ee=new Ya(Q),A=document.createElement("canvas"),te=A.getContext("2d");if(A.width=768,A.height=1024,te.fillStyle=O,te.fillRect(0,0,A.width,A.height),te.fillStyle="#1a1a2e",te.fillRect(se,se,A.width-se*2,A.height-se*2),oe=80,_.prerequisites&&_.prerequisites.length>0&&(te.fillStyle="#cccccc",te.font="bold 22px Arial",te.textAlign="center",te.fillText("Prerequisites",A.width/2,oe),oe+=35,te.font="24px Arial",te.fillStyle="#aaaaaa",te.textAlign="left",_.prerequisites.forEach(me=>{const ze=wt.find(dt=>dt.id===me.id);if(ze){const dt=`• ${ze.name} (${me.strength}%)`;te.fillText(dt,60,oe),oe+=32}}),te.textAlign="center",oe+=20),_.notes){te.fillStyle="#cccccc",te.font="bold 22px Arial",te.fillText("Notes",A.width/2,oe),oe+=35,te.font="24px Arial",te.fillStyle="#aaaaaa",te.textAlign="left";const me=_.notes.split(" ");let ze="";me.forEach(dt=>{const ln=ze+(ze?" ":"")+dt;te.measureText(ln).width>A.width-100&&ze?(te.fillText(ze,50,oe),oe+=32,ze=dt):ze=ln}),ze&&te.fillText(ze,50,oe)}const X=new Ya(A),ee=new or({map:Ee,roughness:.7,metalness:.3}),K=new or({map:X,roughness:.7,metalness:.3}),ie=new or({color:O,emissive:O,emissiveIntensity:0,roughness:.6,metalness:.4}),fe=[ie,ie,ie,ie,ee,K],Se=new qi(5,7,T),De=new Xt(Se,fe);return De.userData={topic:_,type:"cardMesh"},G.add(De),G.position.copy(m),G}function W(_,m,C=50){const B=new F().subVectors(m,_),G=B.length();B.normalize();const O=.05+(C-50)/50*.1,se=O*4,Q=2.5,k=Q,oe=Q-se*.5,Z=G-k-oe;if(Z<=0)return null;const V=new Ii,ue=_.clone().add(B.clone().multiplyScalar(k)),le=m.clone().sub(B.clone().multiplyScalar(oe)),re=new pr(O,O,Z,8),Me=new or({color:6514417,emissive:5195493,emissiveIntensity:.2,transparent:!0,opacity:.6}),pe=new Xt(re,Me);pe.position.copy(ue).add(B.clone().multiplyScalar(Z/2)),pe.quaternion.setFromUnitVectors(new F(0,1,0),B),V.add(pe);const Ee=new Js(O*2,se,8),A=new Xt(Ee,Me);return A.position.copy(le).add(B.clone().multiplyScalar(se*.5)),A.quaternion.setFromUnitVectors(new F(0,1,0),B),V.add(A),V.userData.originalMaterial=Me.clone(),V.userData.isArrow=!0,V}function H(){n=new tg,n.background=new $e(0),r=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.set(0,0,50),a=new eg({antialias:!0}),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),D(t).appendChild(a.domElement),s=new dg(r,a.domElement),s.enableDamping=!0,s.dampingFactor=.05,s.screenSpacePanning=!0,s.minDistance=10,s.maxDistance=600;const _=new og(16777215,.6);n.add(_);const m=new hl(16777215,.8);m.position.set(10,10,10),n.add(m);const C=new hl(16777215,.4);C.position.set(-10,-10,-10),n.add(C);const B=new on,G=[];for(let K=0;K<1e3;K++){const ie=(Math.random()-.5)*1e3,fe=(Math.random()-.5)*1e3,Se=(Math.random()-.5)*1e3;G.push(ie,fe,Se)}B.setAttribute("position",new sn(G,3));const O=new rc({color:16777215,size:R}),se=new rg(B,O);n.add(se);const Q=E+20,k=new pr(.15,.15,Q,16),oe=new or({color:5592405,emissive:3355443,emissiveIntensity:.3,metalness:.5,roughness:.5}),Z=new Xt(k,oe);Z.rotation.z=Math.PI/2,Z.position.set(0,0,0),n.add(Z);const V=(K,ie)=>{const fe=document.createElement("canvas"),Se=fe.getContext("2d");fe.width=512,fe.height=128,Se.fillStyle="#ffffff",Se.font="bold 48px Arial",Se.textAlign="center",Se.textBaseline="middle",Se.fillText(K,fe.width/2,fe.height/2);const De=new Ya(fe),me=new nc({map:De,transparent:!0}),ze=new ig(me);return ze.scale.set(15,3.75,1),ze.position.set(-E/2-15,ie,0),ze};n.add(V("PURE MATH",-20)),n.add(V("APPLIED MATH",20));const ue=V("TIME",0);ue.position.set(-E/2-15,0,0),n.add(ue);const le={};wt.forEach(K=>{le[K.category]||(le[K.category]=[]),le[K.category].push(K)}),wt.forEach((K,ie)=>{const fe=le[K.category],Se=fe.indexOf(K),De=M(K,Se,fe.length),me=P(K,De);n.add(me),o.push(me)}),wt.forEach(K=>{const ie=o.find(fe=>fe.userData.topic.id===K.id);ie&&K.leadsTo&&K.leadsTo.length>0&&K.leadsTo.forEach(fe=>{const Se=o.find(De=>De.userData.topic.id===fe);if(Se){const De=W(ie.position,Se.position,75);De&&(n.add(De),D(l).push(De))}})});let re={x:0,y:0},Me=!1;function pe(K){Me=!1,re.x=K.clientX||K.touches&&K.touches[0].clientX||0,re.y=K.clientY||K.touches&&K.touches[0].clientY||0}function Ee(K){if(re.x!==0||re.y!==0){const ie=(K.clientX||0)-re.x,fe=(K.clientY||0)-re.y;(Math.abs(ie)>5||Math.abs(fe)>5)&&(Me=!0)}}function A(){setTimeout(()=>{re.x=0,re.y=0},10)}a.domElement.addEventListener("mousedown",pe),a.domElement.addEventListener("mousemove",Ee),a.domElement.addEventListener("mouseup",A),a.domElement.addEventListener("touchstart",pe),a.domElement.addEventListener("touchend",A);const te=new lg;te.far=1e3;const X=new Ne;function ee(K){if(Me)return;X.x=K.clientX/window.innerWidth*2-1,X.y=-(K.clientY/window.innerHeight)*2+1,te.setFromCamera(X,r);const ie=te.intersectObjects(D(l),!0);if(ie.length>0){let Se=null;for(let De of ie){let me=De.object;for(;me;){if(me.userData&&me.userData.isArrow){Se=me;break}me=me.parent}if(Se)break}if(Se){p&&p!==Se&&p.children.forEach(De=>{De.material&&(De.material.color.set(6514417),De.material.emissive.set(5195493),De.material.emissiveIntensity=.2,De.material.opacity=.6)}),p=Se,Se.children.forEach(De=>{De.material&&(De.material.color.set(16777215),De.material.emissive.set(13421772),De.material.emissiveIntensity=.5,De.material.opacity=1)});return}}const fe=te.intersectObjects(o,!0);if(fe.length>0){let Se=null;for(let De of fe){let me=De.object;for(;me;){if(me.userData&&me.userData.type==="card"){Se=me;break}me=me.parent}if(Se)break}Se&&(ct(c,Se.userData.topic),j(Se))}}a.domElement.addEventListener("click",ee),window.addEventListener("resize",J),ce(),setTimeout(()=>{const K=[...wt].sort((ie,fe)=>ie.year-fe.year)[0];if(K){const ie=o.find(fe=>fe.userData.topic.id===K.id);ie&&(ct(c,K),j(ie))}},500)}function j(_){D(c)&&D(c).id!==_.userData.topic.id&&ct(d,D(c));const m=_.position.clone(),C=new F(0,0,18),B=m.clone().add(C),G=r.position.clone(),O=s.target.clone();let se=0;function Q(){if(se+=.03,se>=1){r.position.copy(B),s.target.copy(m),s.update();return}r.position.lerpVectors(G,B,se),s.target.lerpVectors(O,m,se),s.update(),requestAnimationFrame(Q)}Q()}function ae(){if(D(d)){const _=o.find(m=>m.userData.topic.id===D(d).id);if(_){const m=D(c);ct(c,D(d)),ct(d,m),j(_),D(d)&&D(c)&&D(d).id===D(c).id&&ct(d,null)}}}function J(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function ce(){requestAnimationFrame(ce),s.update(),o.forEach(_=>{const m=D(c)&&_.userData.topic.id===D(c).id;_.children.forEach(C=>{if(C.userData&&C.userData.type==="cardMesh"&&Array.isArray(C.material))for(let B=0;B<4;B++)C.material[B].emissive&&(C.material[B].emissiveIntensity=m?.6:0)})}),a.render(n,r)}function $(){ct(h,D(h)==="3d"?"list":"3d"),D(h)==="list"&&ct(g,!1)}function ge(){const _=[...wt];switch(D(w)){case"year":return _.sort((m,C)=>m.year-C.year);case"name":return _.sort((m,C)=>m.name.localeCompare(C.name));case"category":return _.sort((m,C)=>m.category.localeCompare(C.category)||m.year-C.year);case"type":return _.sort((m,C)=>m.type.localeCompare(C.type)||m.year-C.year);default:return _}}function xe(){ct(g,!D(g)),D(g)||ct(f,null)}function Te(){const _={};wt.forEach((k,oe)=>{_[k.id]=oe});const m=wt.length,C=Array(m).fill(null).map(()=>Array(m).fill(1/0)),B=Array(m).fill(null).map(()=>Array(m).fill(null));for(let k=0;k<m;k++)C[k][k]=0;wt.forEach((k,oe)=>{k.leadsTo&&k.leadsTo.forEach(Z=>{const V=_[Z];V!==void 0&&(C[oe][V]=1,B[oe][V]=V)})});for(let k=0;k<m;k++)for(let oe=0;oe<m;oe++)for(let Z=0;Z<m;Z++)C[oe][k]+C[k][Z]<C[oe][Z]&&(C[oe][Z]=C[oe][k]+C[k][Z],B[oe][Z]=B[oe][k]);const G=_[D(v)],O=_[D(y)];if(G===void 0||O===void 0){ct(f,{error:"Invalid topic selection"});return}if(C[G][O]===1/0){ct(f,{error:"No route, try again"});return}const se=[G];let Q=G;for(;Q!==O;)Q=B[Q][O],se.push(Q);ct(f,{path:se.map(k=>wt[k]),length:C[G][O]}),Ge(D(f).path)}function Ge(_){D(l).forEach(m=>n.remove(m)),ct(l,[]),wt.forEach(m=>{const C=o.find(B=>B.userData.topic.id===m.id);C&&m.leadsTo&&m.leadsTo.length>0&&m.leadsTo.forEach(B=>{const G=o.find(O=>O.userData.topic.id===B);if(G){const O=W(C.position,G.position,75);O&&(O.children.forEach(se=>{se.material&&(se.material.opacity=.2)}),n.add(O),D(l).push(O))}})});for(let m=0;m<_.length-1;m++){const C=o.find(G=>G.userData.topic.id===_[m].id),B=o.find(G=>G.userData.topic.id===_[m+1].id);if(C&&B){const G=W(C.position,B.position,100);if(G){const O=m/(_.length-1)*.8,se=new $e().setHSL(O,1,.5);G.children.forEach(Q=>{Q.material&&(Q.material.color=se,Q.material.emissive=se,Q.material.emissiveIntensity=.5,Q.material.opacity=1)}),n.add(G),D(l).push(G)}}}}lc(()=>(H(),()=>{window.removeEventListener("resize",J),a&&a.dispose()})),Oc(()=>(D(b),D(l)),()=>{o.length>0&&D(b)&&(o.forEach(_=>{const m=_.userData.topic;D(b)==="All"||m.difficulty===D(b)?_.visible=!0:_.visible=!1}),D(l).forEach(_=>{_.visible=D(b)==="All"}))}),Bc(),Vc();var Je=e_(),ne=fi(Je);Gc(ne,_=>ct(t,_),()=>D(t));var he=Ie(ne,2);{var be=_=>{var m=Dg(),C=He(m),B=Ie(He(C),2),G=Ie(He(B),2);ft(()=>{D(w),vr(()=>{})});var O=He(G);O.value=O.__value="year";var se=Ie(O);se.value=se.__value="name";var Q=Ie(se);Q.value=Q.__value="category";var k=Ie(Q);k.value=k.__value="type",Oe(G),Oe(B),Oe(C);var oe=Ie(C,2);jn(oe,5,()=>Pe(ge),Yn,(Z,V)=>{var ue=Pg(),le=He(ue),re=He(le),Me=He(re,!0);Oe(re);var pe=Ie(re,2),Ee=He(pe);{var A=lt=>{var yt=bg(),Ct=He(yt,!0);Oe(yt),ft(()=>{yr(yt,`background: ${D(V),Pe(()=>S[D(V).difficulty])??""}`),_t(Ct,(D(V),Pe(()=>D(V).difficulty)))}),Ke(lt,yt)};pt(Ee,lt=>{D(V),Pe(()=>D(V).difficulty)&&lt(A)})}var te=Ie(Ee,2),X=He(te,!0);Oe(te),Oe(pe),Oe(le);var ee=Ie(le,2);{var K=lt=>{var yt=Tg(),Ct=Ie(He(yt));Oe(yt),ft(kt=>_t(Ct,` ${kt??""}`),[()=>(D(V),Pe(()=>D(V).aka.join(", ")))]),Ke(lt,yt)};pt(ee,lt=>{D(V),Pe(()=>D(V).aka&&D(V).aka.length>0)&&lt(K)})}var ie=Ie(ee,2);{var fe=lt=>{var yt=Ag(),Ct=Ie(He(yt));Oe(yt),ft(kt=>_t(Ct,` ${kt??""}`),[()=>(D(V),Pe(()=>D(V).notableYears.map(kt=>kt<0?`${Math.abs(kt)} BC`:`${kt} AD`).join(", ")))]),Ke(lt,yt)};pt(ie,lt=>{D(V),Pe(()=>D(V).notableYears&&D(V).notableYears.length>0)&&lt(fe)})}var Se=Ie(ie,2),De=He(Se),me=He(De,!0);Oe(De);var ze=Ie(De,2),dt=He(ze,!0);Oe(ze),Oe(Se);var ln=Ie(Se,2);{var ji=lt=>{const yt=cr(()=>(D(V),qn(lr),Pe(()=>D(V).contributors.slice(0,4).map(cn=>{const Pn=lr.find(Zi=>Zi.id===cn);return Pn?Pn.name:cn.charAt(0).toUpperCase()+cn.slice(1)}).join(", "))));var Ct=Rg(),kt=Ie(He(Ct)),di=Ie(kt);{var _r=cn=>{var Pn=wg(),Zi=He(Pn);Oe(Pn),ft(()=>_t(Zi,`+${D(V),Pe(()=>D(V).contributors.length-4)??""} more`)),Ke(cn,Pn)};pt(di,cn=>{D(V),Pe(()=>D(V).contributors.length>4)&&cn(_r)})}Oe(Ct),ft(()=>_t(kt,` ${D(yt)??""} `)),Ke(lt,Ct)};pt(ln,lt=>{D(V),Pe(()=>D(V).contributors&&D(V).contributors.length>0)&&lt(ji)})}var _n=Ie(ln,2);{var Ki=lt=>{var yt=Cg(),Ct=He(yt,!0);Oe(yt),ft(()=>_t(Ct,(D(V),Pe(()=>D(V).notes)))),Ke(lt,yt)};pt(_n,lt=>{D(V),Pe(()=>D(V).notes)&&lt(Ki)})}kc(2),Oe(ue),ft(lt=>{yr(ue,`border-left: 4px solid ${D(V),Pe(()=>L[D(V).category]||"#fff")??""}`),_t(Me,(D(V),Pe(()=>D(V).name))),_t(X,lt),yr(De,`background: ${D(V),Pe(()=>L[D(V).category])??""}`),_t(me,(D(V),Pe(()=>D(V).category))),_t(dt,(D(V),Pe(()=>D(V).type)))},[()=>(D(V),Pe(()=>D(V).year<0?`${Math.abs(D(V).year)} BC`:`${D(V).year} AD`))]),Yt("click",ue,()=>{ct(h,"3d"),setTimeout(()=>{const lt=o.find(yt=>yt.userData.topic.id===D(V).id);lt&&(ct(c,D(V)),j(lt))},100)}),Ke(Z,ue)}),Oe(oe),Oe(m),Mr(G,()=>D(w),Z=>ct(w,Z)),Ke(_,m)};pt(he,_=>{D(h)==="list"&&_(be)})}var ve=Ie(he,2);{var Fe=_=>{var m=Lg();Yt("click",m,ae),Ke(_,m)};pt(ve,_=>{D(h)==="3d"&&D(d)&&_(Fe)})}var Be=Ie(ve,2),qe=He(Be,!0);Oe(Be);var ht=Ie(Be,2);{var Ze=_=>{var m=Ug(),C=He(m);ft(()=>{D(b),vr(()=>{})});var B=He(C);B.value=B.__value="All";var G=Ie(B);G.value=G.__value="High School";var O=Ie(G);O.value=O.__value="UGrad";var se=Ie(O);se.value=se.__value="PGrad";var Q=Ie(se);Q.value=Q.__value="Research",Oe(C),Oe(m),Mr(C,()=>D(b),k=>ct(b,k)),Ke(_,m)};pt(ht,_=>{D(h)==="3d"&&_(Ze)})}var xt=Ie(ht,2);{var N=_=>{var m=Ig();Yt("click",m,xe),Ke(_,m)};pt(xt,_=>{D(h)==="3d"&&_(N)})}var Lt=Ie(xt,2);{var je=_=>{var m=kg(),C=He(m),B=Ie(C,4);ft(()=>{D(v),vr(()=>{})});var G=He(B);G.value=G.__value="";var O=Ie(G);jn(O,1,()=>wt,Yn,(ue,le)=>{var re=Ng(),Me=He(re,!0);Oe(re);var pe={};ft(()=>{_t(Me,(D(le),Pe(()=>D(le).name))),pe!==(pe=(D(le),Pe(()=>D(le).id)))&&(re.value=(re.__value=(D(le),Pe(()=>D(le).id)))??"")}),Ke(ue,re)}),Oe(B);var se=Ie(B,2);ft(()=>{D(y),vr(()=>{})});var Q=He(se);Q.value=Q.__value="";var k=Ie(Q);jn(k,1,()=>wt,Yn,(ue,le)=>{var re=Fg(),Me=He(re,!0);Oe(re);var pe={};ft(()=>{_t(Me,(D(le),Pe(()=>D(le).name))),pe!==(pe=(D(le),Pe(()=>D(le).id)))&&(re.value=(re.__value=(D(le),Pe(()=>D(le).id)))??"")}),Ke(ue,re)}),Oe(se);var oe=Ie(se,2),Z=Ie(oe,2);{var V=ue=>{var le=xr(),re=fi(le);{var Me=Ee=>{var A=Og(),te=He(A,!0);Oe(A),ft(()=>_t(te,(D(f),Pe(()=>D(f).error)))),Ke(Ee,A)},pe=Ee=>{var A=zg(),te=He(A),X=He(te);Oe(te);var ee=Ie(te,2);jn(ee,5,()=>(D(f),Pe(()=>D(f).path)),Yn,(K,ie)=>{var fe=Bg(),Se=He(fe,!0);Oe(fe),ft(()=>_t(Se,(D(ie),Pe(()=>D(ie).name)))),Ke(K,fe)}),Oe(ee),Oe(A),ft(()=>_t(X,`Path Found (Length: ${D(f),Pe(()=>D(f).length)??""})`)),Ke(Ee,A)};pt(re,Ee=>{D(f),Pe(()=>D(f).error)?Ee(Me):Ee(pe,!1)})}Ke(ue,le)};pt(Z,ue=>{D(f)&&ue(V)})}Oe(m),Yt("click",C,xe),Mr(B,()=>D(v),ue=>ct(v,ue)),Mr(se,()=>D(y),ue=>ct(y,ue)),Yt("click",oe,Te),Ke(_,m)};pt(Lt,_=>{D(g)&&_(je)})}var Ye=Ie(Lt,2);{var Ue=_=>{var m=jg(),C=He(m),B=Ie(C,2);{var G=le=>{var re=Hg();Yt("click",re,ae),Ke(le,re)};pt(B,le=>{D(d)&&le(G)})}var O=Ie(B,2),se=He(O,!0);Oe(O);var Q=Ie(O,2);{var k=le=>{var re=Vg(),Me=Ie(He(re),2);jn(Me,5,()=>(D(c),Pe(()=>D(c).contributors)),Yn,(pe,Ee)=>{const A=cr(()=>(qn(lr),D(Ee),Pe(()=>lr.find(K=>K.id===D(Ee)))));var te=xr(),X=fi(te);{var ee=K=>{var ie=Gg(),fe=He(ie,!0);Oe(ie),ft(()=>_t(fe,(qn(D(A)),Pe(()=>D(A).name)))),Yt("click",ie,()=>{var Se;return ct(u,((Se=D(u))==null?void 0:Se.id)===D(A).id?null:D(A))}),Ke(K,ie)};pt(X,K=>{D(A)&&K(ee)})}Ke(pe,te)}),Oe(Me),Oe(re),Ke(le,re)};pt(Q,le=>{D(c),Pe(()=>D(c).contributors&&D(c).contributors.length>0)&&le(k)})}var oe=Ie(Q,2);{var Z=le=>{var re=Xg(),Me=Ie(He(re),2);jn(Me,5,()=>(D(c),Pe(()=>D(c).leadsTo)),Yn,(pe,Ee)=>{const A=cr(()=>(qn(wt),D(Ee),Pe(()=>wt.find(K=>K.id===D(Ee)))));var te=xr(),X=fi(te);{var ee=K=>{var ie=Wg(),fe=He(ie,!0);Oe(ie),ft(()=>_t(fe,(qn(D(A)),Pe(()=>D(A).name)))),Yt("click",ie,()=>{const Se=o.find(De=>De.userData.topic.id===D(Ee));Se&&(ct(c,D(A)),j(Se))}),Ke(K,ie)};pt(X,K=>{D(A)&&K(ee)})}Ke(pe,te)}),Oe(Me),Oe(re),Ke(le,re)};pt(oe,le=>{D(c),Pe(()=>D(c).leadsTo&&D(c).leadsTo.length>0)&&le(Z)})}var V=Ie(oe,2);{var ue=le=>{var re=Yg(),Me=Ie(He(re),2);jn(Me,5,()=>(D(c),Pe(()=>D(c).prerequisites)),Yn,(pe,Ee)=>{const A=cr(()=>(qn(wt),D(Ee),Pe(()=>wt.find(K=>K.id===D(Ee).id))));var te=xr(),X=fi(te);{var ee=K=>{var ie=qg(),fe=He(ie),Se=Ie(fe),De=He(Se);Oe(Se),Oe(ie),ft(()=>{_t(fe,`${qn(D(A)),Pe(()=>D(A).name)??""} `),_t(De,`${D(Ee),Pe(()=>D(Ee).strength)??""}%`)}),Yt("click",ie,()=>{const me=o.find(ze=>ze.userData.topic.id===D(Ee).id);me&&(ct(d,D(c)),ct(c,D(A)),j(me))}),Ke(K,ie)};pt(X,K=>{D(A)&&K(ee)})}Ke(pe,te)}),Oe(Me),Oe(re),Ke(le,re)};pt(V,le=>{D(c),Pe(()=>D(c).prerequisites&&D(c).prerequisites.length>0)&&le(ue)})}Oe(m),ft(()=>_t(se,(D(c),Pe(()=>D(c).name)))),Yt("click",C,()=>ct(c,null)),Ke(_,m)};pt(Ye,_=>{D(c)&&D(h)==="3d"&&_(Ue)})}var ot=Ie(Ye,2);{var Le=_=>{var m=Qg(),C=He(m),B=Ie(C,2);{var G=Z=>{var V=Kg();ft(()=>{ro(V,"src",(D(u),Pe(()=>D(u).img))),ro(V,"alt",(D(u),Pe(()=>D(u).name)))}),Ke(Z,V)},O=Z=>{var V=Zg(),ue=He(V,!0);Oe(V),ft(le=>_t(ue,le),[()=>(D(u),Pe(()=>D(u).name.split(" ").map(le=>le[0]).join("")))]),Ke(Z,V)};pt(B,Z=>{D(u),Pe(()=>D(u).img)?Z(G):Z(O,!1)})}var se=Ie(B,2),Q=He(se,!0);Oe(se);var k=Ie(se,2);{var oe=Z=>{var V=Jg(),ue=He(V);{var le=pe=>{var Ee=Hc();ft(()=>_t(Ee,`Born: ${D(u),Pe(()=>D(u).born)??""}`)),Ke(pe,Ee)};pt(ue,pe=>{D(u),Pe(()=>D(u).born)&&pe(le)})}var re=Ie(ue,2);{var Me=pe=>{var Ee=$g(),A=Ie(fi(Ee));ft(()=>_t(A,`Died: ${D(u),Pe(()=>D(u).died)??""}`)),Ke(pe,Ee)};pt(re,pe=>{D(u),Pe(()=>D(u).died)&&pe(Me)})}Oe(V),Ke(Z,V)};pt(k,Z=>{D(u),Pe(()=>D(u).born||D(u).died)&&Z(oe)})}Oe(m),ft(()=>_t(Q,(D(u),Pe(()=>D(u).name)))),Yt("click",C,()=>ct(u,null)),Ke(_,m)};pt(ot,_=>{D(u)&&_(Le)})}ft(()=>{yr(ne,`display: ${D(h)==="3d"?"block":"none"}`),_t(qe,D(h)==="3d"?"📋":"🌌")}),Yt("click",Be,$),Ke(i,Je),zc()}export{o_ as component};
