(function(){"use strict";var e={6061:function(e,t,r){var l=r(9242),i=r(3396),n=r(7139),o=r.p+"SertaoCred/img/LOGO-SERTÃOCRED.png";const a={class:"text-bg-dark"},s={class:"col-6 offset-3"},c=(0,i._)("div",{class:"col-4 offset-4 pt-5"},[(0,i._)("img",{alt:"Logo",class:"img-fluid",src:o})],-1),u={class:"mb-3"},f=(0,i._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Valor: ",-1),h={class:"col-12"},m=(0,i._)("label",{class:"form-label"},"Número de parcelas: ",-1),p={class:"text-center"},v={class:"form-check form-switch"},d={key:0,class:"form-check-label"},b={key:1,class:"form-check-label"},w={class:"jumbotron"},g=(0,i._)("h1",{class:"display-6"},"Detalhes da simulação",-1),_={class:"lead"},y={class:"lead"},k=(0,i._)("hr",{class:"my-4"},null,-1),C={class:"lead"},x=(0,i._)("br",null,null,-1),O=(0,i._)("br",null,null,-1),z=(0,i._)("br",null,null,-1),j=(0,i._)("br",null,null,-1),R=(0,i._)("br",null,null,-1);function S(e,t,r,o,S,V){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",s,[c,(0,i._)("div",u,[f,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),onChange:t[1]||(t[1]=e=>V.process())},null,544),[[l.nr,e.value]])]),(0,i._)("div",h,[m,(0,i.wy)((0,i._)("input",{type:"range",class:"form-range",min:"1",max:"18","onUpdate:modelValue":t[2]||(t[2]=t=>e.term=t),onChange:t[3]||(t[3]=e=>V.process())},null,544),[[l.nr,e.term]]),(0,i._)("h2",p,(0,n.zw)(e.term),1)]),(0,i._)("div",v,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[4]||(t[4]=t=>e.limit=t),onChange:t[5]||(t[5]=e=>V.process())},null,544),[[l.e8,e.limit]]),e.limit?((0,i.wg)(),(0,i.iD)("label",d,"Calcular a partir do limite")):(0,i.kq)("",!0),e.limit?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("label",b,"Calcular valor à receber"))]),(0,i._)("div",w,[g,(0,i._)("p",_,"Será cobrado no cartão: "+(0,n.zw)(this.result.willCharge),1),(0,i._)("p",y,"Você receberá: "+(0,n.zw)(this.result.willReceive),1),k,(0,i._)("p",null,"Ser"+(0,n.zw)(e.term>1?"ão":"á")+" "+(0,n.zw)(e.term)+" parcela"+(0,n.zw)(e.term>1?"s":"")+" de "+(0,n.zw)(e.result.portion),1)]),(0,i._)("p",C,[(0,i._)("a",{class:"btn btn-outline-primary btn-lg",role:"button",onClick:t[6]||(t[6]=(...e)=>V.copy&&V.copy(...e))},"Copiar")])]),x,O,z,j,R])}var V={name:"App",data:function(){return{rates:{receivable:[0,1.0799,1.0922,1.0984,1.1045,1.11,1.1178,1.128,1.11238,1.1268,1.1298,1.1348,1.1398,1.17,1.175,1.18,1.185,1.19,1.2],limit:[0, 0.074,  0.0845, 0.0896, 0.0947, 0.0991, 0.1055, 0.1079, 0.1102, 0.1126, 0.1150, 0.1188, 0.1227, 0.1451, 0.1490, 0.153, 0.156, 0.16, 0.1680]},value:1e3,term:1,limit:!1,result:{willCharge:0,willReceive:0,portion:0}}},mounted(){this.process()},methods:{process:function(){this.limit?this.result={willCharge:this.formatter(this.value),willReceive:this.formatter(this.value - ( this.value * this.rates.limit[this.term])),portion:this.formatter(this.value/this.term)}:this.result={willCharge:this.formatter(this.value*this.rates.receivable[this.term]),willReceive:this.formatter(this.value),portion:this.formatter(this.value*this.rates.receivable[this.term]/this.term)}},formatter:function(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},copy:function(){let e=`Simulador ZER075 CRED\nSerá cobrado no cartão: ${this.result.willCharge}.\nVocê receberá: ${this.result.willReceive}.\nSer${this.term>1?"ão":"á"} ${this.term} parcela${this.term>1?"s":""} de ${this.result.portion}`;navigator.clipboard.writeText(e)}}},$=r(89);const D=(0,$.Z)(V,[["render",S]]);var L=D;r(3455);(0,l.ri)(L).mount("#app")}},t={};function r(l){var i=t[l];if(void 0!==i)return i.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,l,i,n){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],i=e[u][1],n=e[u][2];for(var a=!0,s=0;s<l.length;s++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](l[s])}))?l.splice(s--,1):(a=!1,n<o&&(o=n));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,n,o=l[0],a=l[1],s=l[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var u=s(r)}for(t&&t(l);c<o.length;c++)n=o[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},l=self["webpackChunkzero75"]=self["webpackChunkzero75"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=r.O(void 0,[998],(function(){return r(6061)}));l=r.O(l)})();
//# sourceMappingURL=app.ed816b2b.js.map
