"use strict";const defaultOptions={clear:!0,debug:!0,debugTime:3e3,bfcache:!0},EBrowser={Chrome:0,Firefox:1,Safari:2},completion=t=>t?t[0]!=="/"?`/${t}`:t:"/",isUserAgentContains=t=>~navigator.userAgent.toLowerCase().indexOf(t),isString=t=>typeof t=="string",locationChange=(t,e)=>{if(e===EBrowser.Safari){location.replace(t);return}location.href=t};let c=0,n=0;const getChromeRerenderTestFunc=t=>{let e=0;const i=1<<c++;return()=>{n&&!(n&i)||(e++,e===2&&(n|=i,t(),e=1))}},g=t=>{const e=new Error;Object.defineProperty(e,"message",{get(){t()}}),console.log(e)},getChromeTest=t=>{const e=/./;e.toString=getChromeRerenderTestFunc(t);const i=()=>e;i.toString=getChromeRerenderTestFunc(t);const r=new Date;r.toString=getChromeRerenderTestFunc(t),console.log("%c",i,i(),r);const o=getChromeRerenderTestFunc(t);g(o)},getFirefoxTest=t=>{const e=/./;e.toString=t,console.log(e)},getSafariTest=t=>{const e=new Image;Object.defineProperty(e,"id",{get:()=>{t(EBrowser.Safari)}}),console.log(e)};class ConsoleBan{constructor(e){const{clear:i,debug:r,debugTime:o,callback:s,redirect:a,write:l,bfcache:h}={...defaultOptions,...e};this._debug=r,this._debugTime=o,this._clear=i,this._bfcache=h,this._callback=s,this._redirect=a,this._write=l}clear(){this._clear&&(console.clear=()=>{})}bfcache(){this._bfcache&&(window.addEventListener("unload",()=>{}),window.addEventListener("beforeunload",()=>{}))}debug(){if(this._debug){const e=new Function("debugger");setInterval(e,this._debugTime)}}redirect(e){const i=this._redirect;if(!i)return;if(i.indexOf("http")===0){location.href!==i&&locationChange(i,e);return}const r=location.pathname+location.search;completion(i)!==r&&locationChange(i,e)}callback(){if(!this._callback&&!this._redirect&&!this._write||!window)return;const e=this.fire.bind(this),i=window.chrome||isUserAgentContains("chrome"),r=isUserAgentContains("firefox");if(i){getChromeTest(e);return}if(r){getFirefoxTest(e);return}getSafariTest(e)}write(){const e=this._write;e&&(document.body.innerHTML=isString(e)?e:e.innerHTML)}fire(e){if(this._callback){this._callback.call(null);return}this.redirect(e),!this._redirect&&this.write()}prepare(){this.clear(),this.bfcache(),this.debug()}ban(){this.prepare(),this.callback()}}const init=t=>{new ConsoleBan(t).ban()};exports.init=init;
