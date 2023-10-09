"use strict";(self.webpackChunksell_your_car=self.webpackChunksell_your_car||[]).push([[588],{8014:function(n,e,i){i.d(e,{R:function(){return s}});var r,t=i(168),o=i(5706).Z.a(r||(r=(0,t.Z)(["\n  width: ",";\n  height: ",";\n  padding: 12px 50px;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  background-color: #3470ff;\n\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: 200ms background-color ease-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n\n  ",";\n\n  & > span {\n    display: inline-block;\n    overflow: hidden;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n  }\n"])),(function(n){return n.fullWidth?"100%":"max-content"}),(function(n){return n.fullHeight?"100%":"max-content"}),(function(n){return n.linkStyles})),a=i(184),s=function(n){var e=n.text,i=n.href,r=n.fullWidth,t=void 0!==r&&r,s=n.fullHeight,c=void 0!==s&&s,l=n.linkStyles,d=void 0===l?{}:l;return(0,a.jsx)(o,{href:i,fullWidth:t,fullHeight:c,linkStyles:d,children:(0,a.jsx)("span",{children:e})})}},6076:function(n,e,i){i.d(e,{k:function(){return s}});var r,t=i(168),o=i(5706).Z.button(r||(r=(0,t.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: #3470ff;\n  line-height: 1.5;\n  text-decoration-line: underline;\n\n  transition: color 200ms ease-out;\n\n  &:hover,\n  &:focus {\n    color: rgba(11, 68, 205, 1);\n  }\n"]))),a=i(184),s=function(n){var e=n.text,i=n.onClick,r=n.disabled,t=n.type;return(0,a.jsx)(o,{type:t,disabled:r,onClick:i,children:e})}},4814:function(n,e,i){i.d(e,{$:function(){return s}});var r,t=i(168),o=i(5706).Z.section(r||(r=(0,t.Z)(["\n  padding: 150px 0;\n"]))),a=i(184),s=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},2588:function(n,e,i){i.r(e),i.d(e,{default:function(){return wn}});var r,t,o,a,s,c,l,d,p,x,h,u,f,g,b,v,m,w,j,Z,y,k,C,z,S,I=i(5861),_=i(9439),R=i(4687),E=i.n(R),F=i(5834),W=i(9771),A=i(168),H=i(5706),L=i(8273),M=H.Z.div(r||(r=(0,A.Z)(["\n  height: 100px;\n  width: 150px;\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n  }\n"]))),T=H.Z.label(t||(t=(0,A.Z)(["\n  height: 100%;\n\n  display: block;\n\n  cursor: pointer;\n"]))),$=H.Z.input(o||(o=(0,A.Z)(["\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n  appearance: none;\n\n  &:focus ~ div {\n    box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n    -webkit-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n    -moz-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n  }\n\n  &:checked ~ div {\n    box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n    -webkit-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n    -moz-box-shadow: 0px 0px 44px 16px rgba(0, 0, 0, 0.75) inset;\n  }\n"]))),P=H.Z.div(a||(a=(0,A.Z)(["\n  height: 100%;\n  padding: 10px;\n\n  background-color: #b0c4de;\n\n  border-radius: 20px;\n\n  overflow: hidden;\n\n  transition: box-shadow 200ms ease-out, background 200ms ease-out;\n\n  &:hover {\n    box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;\n    -webkit-box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;\n    -moz-box-shadow: 0px 0px 44px 16px rgba(176, 196, 222, 0.5) inset;\n  }\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 3px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #fff;\n\n  background: linear-gradient(to right, rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4)),\n    url(","), url(",");\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n"])),(function(n){return n.bgImg}),L),U=i(184),q=function(n){var e=n.carInfo,i=n.activeCar,r=n.setActiveCar,t=e.year,o=e.make,a=e.model,s=e.img,c=void 0===s?L:s,l=e.id;return(0,U.jsx)(M,{children:(0,U.jsxs)(T,{children:[(0,U.jsx)($,{type:"radio",name:"car-item",value:l,checked:(null===i||void 0===i?void 0:i.id)===l,onChange:function(n){r(e)}}),(0,U.jsxs)(P,{bgImg:c,onError:W.y,children:[(0,U.jsx)("span",{children:o}),(0,U.jsx)("span",{children:a}),(0,U.jsx)("span",{children:t})]})]})})},X=H.Z.div(s||(s=(0,A.Z)(["\n  width: 100%;\n\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  gap: 20px;\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n\n    flex-direction: row;\n  }\n"]))),Y=H.Z.div(c||(c=(0,A.Z)(["\n  width: 100%;\n"]))),B=H.Z.div(l||(l=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  overflow: hidden;\n"]))),D=H.Z.div(d||(d=(0,A.Z)(["\n  width: 100%;\n  height: 248px;\n  margin-bottom: 14px;\n\n  border-radius: 14px;\n  overflow: hidden;\n\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),G=H.Z.img(p||(p=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n"]))),J=H.Z.div(x||(x=(0,A.Z)(["\n  margin-bottom: 24px;\n"]))),K=H.Z.div(h||(h=(0,A.Z)(["\n  margin-bottom: 8px;\n\n  display: flex;\n\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),N=H.Z.span(u||(u=(0,A.Z)(["\n  color: #3470ff;\n"]))),O=H.Z.span(f||(f=(0,A.Z)(["\n  max-width: 200px;\n\n  display: inline-block;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),Q=H.Z.p(g||(g=(0,A.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n"]))),V=H.Z.p(b||(b=(0,A.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n"]))),nn=H.Z.div(v||(v=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  overflow: hidden;\n"]))),en=H.Z.p(m||(m=(0,A.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 6px;\n\n  & > span:not(:last-child):after {\n    content: '|';\n    height: 16px;\n    margin-left: 6px;\n\n    color: rgba(18, 20, 23, 0.1);\n  }\n"]))),rn=H.Z.ul(w||(w=(0,A.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 6px;\n  row-gap: 4px;\n\n  & > li:not(:last-child):after {\n    content: '|';\n    height: 16px;\n    margin-left: 6px;\n\n    color: rgba(18, 20, 23, 0.1);\n  }\n"]))),tn=H.Z.div(j||(j=(0,A.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),on=H.Z.span(Z||(Z=(0,A.Z)(["\n  padding: 7px 14px;\n\n  font-family: Montserrat;\n  line-height: 18px;\n  letter-spacing: -0.24px;\n\n  border-radius: 35px;\n  background-color: #f9f9f9;\n"]))),an=H.Z.span(y||(y=(0,A.Z)(["\n  font-weight: 600;\n  color: #3470ff;\n"]))),sn=H.Z.div(k||(k=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n\n  gap: 20px;\n"]))),cn=i(8014),ln=i(6076),dn=function(n){var e=n.carInfo,i=n.toggleFavorite,r=e.id,t=e.year,o=e.img,a=void 0===o?L:o,s=e.make,c=e.model,l=e.rentalPrice,d=e.address,p=e.type,x=e.accessories,h=e.functionalities,u=e.description,f=e.fuelConsumption,g=e.engineSize,b=e.mileage,v=e.rentalConditions,m=d.split(", "),w=(0,_.Z)(m,3),j=w[1],Z=w[2],y=v.split("\n"),k=(0,_.Z)(y,3),C=k[0],z=k[1],S=k[2],I=C.split(": "),R=(0,_.Z)(I,2)[1],E=b.toLocaleString("en-US"),F="".concat(l.slice(1),"$");return(0,U.jsxs)(X,{children:[(0,U.jsxs)(Y,{children:[(0,U.jsx)(D,{children:(0,U.jsx)(G,{src:a,alt:u,onError:W.y})}),(0,U.jsx)(K,{children:(0,U.jsxs)(O,{children:[s+" ",(0,U.jsx)(N,{children:c+", "}),t]})}),(0,U.jsxs)(nn,{children:[(0,U.jsxs)(en,{children:[(0,U.jsx)("span",{children:j}),(0,U.jsx)("span",{children:Z}),(0,U.jsxs)("span",{children:["Id: ",r]}),(0,U.jsxs)("span",{children:["Year: ",t]}),(0,U.jsxs)("span",{children:["Type: ",p]})]}),(0,U.jsxs)(en,{children:[(0,U.jsxs)("span",{children:["Fuel Consumption: ",f]}),(0,U.jsxs)("span",{children:["Engine Size: ",g]})]})]})]}),(0,U.jsxs)(B,{children:[(0,U.jsx)(J,{children:(0,U.jsx)(Q,{children:u})}),(0,U.jsxs)(J,{children:[(0,U.jsx)(V,{children:"Accessories and functionalities:"}),(0,U.jsxs)(nn,{children:[(0,U.jsx)(rn,{children:x.map((function(n){return(0,U.jsx)("li",{children:n},n)}))}),(0,U.jsx)(rn,{children:h.map((function(n){return(0,U.jsx)("li",{children:n},n)}))})]})]}),(0,U.jsxs)(J,{children:[(0,U.jsx)(V,{children:"Rental Conditions:"}),(0,U.jsxs)(tn,{children:[(0,U.jsxs)(on,{children:["Minimum age: ",(0,U.jsx)(an,{children:""+R})]}),(0,U.jsx)(on,{children:z}),(0,U.jsx)(on,{children:S}),(0,U.jsxs)(on,{children:["Mileage: ",(0,U.jsx)(an,{children:E})]}),(0,U.jsxs)(on,{children:["Price: ",(0,U.jsx)(an,{children:F})]})]})]}),(0,U.jsxs)(sn,{children:[(0,U.jsx)(cn.R,{text:"Rental car",href:"tel:+380730000000",linkStyles:{width:"168px"}}),(0,U.jsx)(ln.k,{text:"Remove from favorites",onClick:function(){return i(r)}})]})]})]})},pn=H.Z.div(C||(C=(0,A.Z)(["\n  padding: 20px 0;\n\n  overflow-y: auto;\n\n  @media screen and (min-width: 768px) {\n    min-width: 250px;\n    padding: 0 20px;\n\n    height: 400px;\n    display: block;\n  }\n"]))),xn=H.Z.ul(z||(z=(0,A.Z)(["\n  display: flex;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n\n  & > li {\n    &:not(:last-child) {\n      margin-right: 10px;\n\n      @media screen and (min-width: 768px) {\n        margin-right: 0px;\n        margin-bottom: 20px;\n      }\n    }\n  }\n"]))),hn=function(n){var e=n.children;return(0,U.jsx)(pn,{children:e})},un=i(4814),fn=H.Z.div(S||(S=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]))),gn=function(n){var e=n.children;return(0,U.jsx)(fn,{children:e})},bn=i(3456),vn=i(2791),mn=i(4290),wn=function(){var n=(0,vn.useState)([]),e=(0,_.Z)(n,2),i=e[0],r=e[1],t=(0,bn.s4)(),o=t.favoriteCars,a=t.toggleFavorite,s=(0,vn.useState)(null),c=(0,_.Z)(s,2),l=c[0],d=c[1];return(0,vn.useEffect)((function(){(0,I.Z)(E().mark((function n(){var e,i;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,mn.x)();case 3:e=n.sent,i=e.filter((function(n){return o.includes(n.id)})),r(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[o]),(0,vn.useEffect)((function(){i.length&&d(i[0])}),[i]),(0,U.jsx)(un.$,{children:(0,U.jsx)(F.W,{children:!!o.length&&(0,U.jsxs)(gn,{children:[(0,U.jsx)(hn,{children:(0,U.jsx)(xn,{children:i.map((function(n){return(0,U.jsx)("li",{children:(0,U.jsx)(q,{carInfo:n,activeCar:l,setActiveCar:d})},n.id)}))})}),l&&(0,U.jsx)(dn,{carInfo:l,toggleFavorite:a})]})})})}},4290:function(n,e,i){i.d(e,{x:function(){return l},z:function(){return c}});var r=i(5861),t=i(4687),o=i.n(t),a=i(1243),s=i(3585);a.Z.defaults.baseURL=s._n;var c=function(){var n=(0,r.Z)(o().mark((function n(){var e,i,r,t=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:s.qX,i=t.length>1&&void 0!==t[1]?t[1]:s.LZ,n.next=4,a.Z.get("/api/cars?page=".concat(e,"&limit=").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/api/cars");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},9771:function(n,e,i){i.d(e,{y:function(){return t}});var r=i(8273),t=function(n){n.currentTarget.onerror=null,n.currentTarget.src=r}},8273:function(n,e,i){n.exports=i.p+"static/media/no_image_available.2b032a720f23bb77b6c2.jpeg"}}]);
//# sourceMappingURL=588.d8b9b457.chunk.js.map