!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=60)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},60:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+v+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:C+"px",height:b+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:C,height:b,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"followers_24",use:"followers_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="followers_24"><path d="M4.83814008,5.02919906 C5.109433,5.04214786 5.33254937,5.05735095 5.5074892,5.07480833 C12.5438641,5.77697354 18.1482047,11.3417425 18.9113734,18.3599775 C18.9337183,18.5654653 18.9529506,18.8323842 18.9690702,19.1607341 L18.969109,19.1607322 C18.9907746,19.6020499 18.6505793,19.9773721 18.2092615,19.9990376 C18.196195,19.9996791 18.1831148,20 18.1700325,20 L16.7679281,20.0000105 C16.3431162,20.0000105 15.9923811,19.6679839 15.969118,19.2438094 C15.9537992,18.9644906 15.9356245,18.7368496 15.914594,18.5608866 C15.2483494,12.9863994 10.7605116,8.58585581 5.14581927,8.05399445 C5.03982293,8.04395377 4.9106277,8.03494716 4.75823359,8.02697464 L4.7582321,8.02700318 C4.33321271,8.00476821 4,7.65366775 4,7.22806715 L4.00000974,5.82827962 C4.00000974,5.3864572 4.35817758,5.02828936 4.8,5.02828936 C4.81271879,5.02828936 4.82543576,5.02859268 4.83814008,5.02919906 Z M4.85727954,10.0599174 C5.23665994,10.087152 5.44618056,10.1037232 5.48584139,10.109631 C9.71963121,10.7402843 13.0869279,14.0247654 13.8414773,18.2168203 C13.8831912,18.4485705 13.9189162,18.7556235 13.9486524,19.1379792 L13.9486438,19.1379798 C13.9829013,19.5784728 13.6535825,19.9633341 13.2130896,19.9975916 C13.1924523,19.9991966 13.1717604,20 13.1510608,20 L11.8967479,19.9999504 C11.481355,19.9999504 11.1350791,19.6820088 11.0997036,19.268125 C11.085979,19.1075515 11.0704048,18.9727626 11.052981,18.8637585 C10.5681127,15.8304087 8.17344635,13.4344872 5.140725,12.9477372 C5.13365806,12.9466029 4.99907517,12.9356788 4.73697632,12.9149648 L4.73697593,12.9149696 C4.32088626,12.8820855 4,12.5348386 4,12.1174515 L4.00003916,10.8578249 C4.00003916,10.4160187 4.35819383,10.0578641 4.8,10.0578641 C4.81911158,10.0578641 4.83821702,10.0585489 4.85727954,10.0599174 Z M8.1189656,20 L4.8,20 C4.3581722,20 4,19.6418278 4,19.2 L4.00004446,15.87618 C4.00004446,15.4343768 4.35819675,15.0762245 4.8,15.0762245 C4.84713704,15.0762245 4.89418184,15.0803908 4.94058525,15.0886747 C4.95911746,15.091983 4.97690727,15.0953564 4.99395468,15.0987949 C6.89271353,15.4817714 8.40179689,16.9404907 8.85793317,18.811681 C8.87631712,18.8870968 8.89341828,18.9750551 8.90923665,19.0755558 L8.90929499,19.0755466 C8.97799606,19.5120335 8.67984676,19.9215693 8.2433599,19.9902703 C8.20221164,19.9967469 8.16062042,20 8.1189656,20 Z" /></symbol>'})),C=(a.default.add(d),d.viewBox.split(" ")[2]),b=d.viewBox.split(" ")[3],v=Math.max(C,b);i.displayName="icon-"+d.id,r.default=i}})});