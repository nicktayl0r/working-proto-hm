(function(){"use strict";var e={7153:function(e,t,l){var n=l(9242),o=l(3396);function u(e,t,l,n,u,r){const a=(0,o.up)("test-comp");return(0,o.wg)(),(0,o.j4)(a)}const r=(0,o._)("h1",null,"Input",-1),a={class:"asdf"},i=(0,o._)("h2",null,"height",-1),v=(0,o._)("h2",null,"width",-1),s=(0,o._)("h2",null,"Grid Size",-1),d=(0,o._)("h2",null,"pValue",-1),c=(0,o._)("option",{disabled:"",value:""},"Please select one:",-1),h=(0,o._)("option",null,"2",-1),y=(0,o._)("option",null,"4",-1),p=(0,o._)("option",null,"8",-1),f=(0,o._)("option",null,"16",-1),x=[c,h,y,p,f],g={class:"jsonedit"},w=(0,o._)("h2",null,"Points",-1),_=(0,o._)("h2",null,"Colors",-1),m=["onInput","value"],b=["onClick"],C=(0,o._)("h1",null,"Output",-1),V={class:"foo",ref:"chart"};function O(e,t,l,u,c,h){const y=(0,o.up)("JsonEditorVue");return(0,o.wg)(),(0,o.iD)("div",null,[r,(0,o._)("div",a,[(0,o._)("div",null,[i,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>c.height=e)},null,512),[[n.nr,c.height,void 0,{number:!0}]]),v,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>c.width=e)},null,512),[[n.nr,c.width,void 0,{number:!0}]])]),(0,o._)("div",null,[s,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>c.gridSize=e)},null,512),[[n.nr,c.gridSize]])]),(0,o._)("div",null,[d,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>c.pValue=e)},x,512),[[n.bM,c.pValue,void 0,{number:!0}]])]),(0,o._)("div",g,[w,(0,o.Wm)(y,{modelValue:c.points,"onUpdate:modelValue":t[4]||(t[4]=e=>c.points=e)},null,8,["modelValue"])]),(0,o._)("div",null,[_,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.colors,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[((0,o.wg)(),(0,o.iD)("input",{key:e,type:"color",onInput:l=>h.changeColor(t,l,e),value:e},null,40,m)),(0,o._)("button",{onClick:e=>h.deleteColor(t)},"[X]",8,b)])))),128)),(0,o._)("button",{onClick:t[5]||(t[5]=(...e)=>h.addColor&&h.addColor(...e))},"Add Color")]),(0,o._)("button",{onClick:t[6]||(t[6]=(...e)=>h.redrawChart&&h.redrawChart(...e))},"redraw")]),C,(0,o._)("div",V,null,512)])}l(7658);var k=l(6723),j=l(8559),z={components:{JsonEditorVue:j.Z},data(){return{gridSize:5,pValue:2,points:[{x:17.7,y:241.7,value:65},{x:40.1,y:256.1,value:67},{x:22.5,y:194.5,value:71},{x:47.3,y:208.1,value:73},{x:69,y:228,value:70},{x:72,y:286.5,value:74},{x:101,y:297,value:79},{x:100,y:255,value:74},{x:165,y:301.7,value:74},{x:202,y:298,value:76},{x:207.5,y:256,value:79},{x:222.5,y:320,value:78},{x:253,y:306,value:80},{x:317.7,y:280,value:79},{x:343,y:314,value:74},{x:350,y:275,value:80},{x:413.7,y:288.9,value:75},{x:330,y:235,value:76},{x:364,y:224,value:79},{x:418,y:201,value:75},{x:427,y:229,value:74},{x:370,y:130,value:71},{x:413,y:57.7,value:74},{x:334.5,y:151,value:79},{x:297,y:182.5,value:80},{x:262.5,y:173,value:79},{x:198,y:193,value:80},{x:130,y:206,value:78},{x:77.7,y:196.1,value:73},{x:76,y:168,value:74},{x:100,y:174,value:71},{x:158,y:164,value:74},{x:233,y:154,value:80},{x:315,y:113,value:75},{x:349,y:65,value:75},{x:349,y:21,value:72},{x:286,y:31,value:71},{x:268,y:51,value:71},{x:251,y:28,value:65},{x:226,y:46,value:74},{x:274,y:100,value:74},{x:227,y:110,value:79},{x:150,y:119,value:74},{x:78,y:132,value:70},{x:47,y:143,value:67},{x:52,y:116,value:65},{x:90,y:74,value:66},{x:120,y:68,value:74},{x:160,y:83,value:79},{x:109,y:42.5,value:74},{x:181,y:19,value:75}],colors:["#ff0000","#00ff00","#00ffff"],height:336,width:432}},updated(){console.info("updated",this.colors)},mounted(){this.drawChart()},methods:{redrawChart(){var e=k.td_("svg");e.remove(),this.drawChart()},deleteColor(e){console.info("X"),this.colors=this.colors.splice(e,1)},addColor(){this.colors.push("#ff0000")},changeColor(e,t){console.log(t.target.value,this.colors,e),this.colors[e]=t.target.value},drawChart(){const e=this.points,t=this.colors,l=this.pValue,n=this.gridSize,o=this.width,u=this.height,r=k.Ys(this.$refs.chart).append("svg").attr("width",o).attr("height",u),a=k.cJy(k.u1K(t)).domain([65,80]),i=(t,n)=>{let o=0,u=0;return e.forEach((e=>{const r=Math.sqrt((t-e.x)**l+(n-e.y)**l)+1e-15,a=1/r;o+=a,u+=a*e.value})),u/o};for(let v=0;v<o;v+=n)for(let e=0;e<u;e+=n){const t=i(v,e);r.append("rect").attr("x",v).attr("y",e).attr("width",n).attr("height",n).style("fill",a(t))}}}},S=l(89);const U=(0,S.Z)(z,[["render",O]]);var D=U,E={name:"App",components:{TestComp:D}};const P=(0,S.Z)(E,[["render",u]]);var I=P;(0,n.ri)(I).mount("#app")}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,l),u.exports}l.m=e,function(){var e=[];l.O=function(t,n,o,u){if(!n){var r=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],u=e[s][2];for(var a=!0,i=0;i<n.length;i++)(!1&u||r>=u)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(a=!1,u<r&&(r=u));if(a){e.splice(s--,1);var v=o();void 0!==v&&(t=v)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[n,o,u]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,r=n[0],a=n[1],i=n[2],v=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(i)var s=i(l)}for(t&&t(n);v<r.length;v++)u=r[v],l.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return l.O(s)},n=self["webpackChunkproto"]=self["webpackChunkproto"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[998],(function(){return l(7153)}));n=l.O(n)})();
//# sourceMappingURL=app.88f2db10.js.map