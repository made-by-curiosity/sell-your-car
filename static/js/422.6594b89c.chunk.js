"use strict";(self.webpackChunksell_your_car=self.webpackChunksell_your_car||[]).push([[422],{126:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,i,o,a,l,s,c,d,u,f,p,h,x=t(433),v=t(861),g=t(439),b=t(687),m=t.n(b),w=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},Z=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=w(0,e.length-1);return e[r]},k=t(168),j=t(686),y=j.Z.div(r||(r=(0,k.Z)(["\n  width: 274px;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n\n  overflow: hidden;\n"]))),S=j.Z.div(i||(i=(0,k.Z)(["\n  height: 268px;\n  margin-bottom: 14px;\n\n  border-radius: 14px;\n  overflow: hidden;\n\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),C=j.Z.img(o||(o=(0,k.Z)(["\n  height: 100%;\n\n  object-fit: cover;\n"]))),W=j.Z.div(a||(a=(0,k.Z)(["\n  margin-bottom: 8px;\n\n  display: flex;\n\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),H=j.Z.span(l||(l=(0,k.Z)(["\n  color: #3470ff;\n"]))),E=j.Z.span(s||(s=(0,k.Z)(["\n  max-width: 200px;\n\n  display: inline-block;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),L=j.Z.span(c||(c=(0,k.Z)(["\n  min-width: 20px;\n\n  display: inline-block;\n  margin-left: auto;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),_=j.Z.div(d||(d=(0,k.Z)(["\n  margin-top: auto;\n  margin-bottom: 28px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  color: rgba(18, 20, 23, 0.5);\n\n  overflow: hidden;\n"]))),F=j.Z.p(u||(u=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 6px;\n\n  & > span {\n    white-space: nowrap;\n  }\n\n  & > span:last-child {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  & > span:not(:last-child):after {\n    content: '|';\n    height: 16px;\n    margin-left: 6px;\n\n    color: rgba(18, 20, 23, 0.1);\n  }\n"]))),P=j.Z.button(f||(f=(0,k.Z)(["\n  width: ",";\n  height: ",";\n  padding: 12px 50px;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-overflow: ellipsis;\n\n  background-color: #3470ff;\n\n  border-radius: 12px;\n\n  transition: 200ms background-color ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: #0b44cd;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n  ",";\n"])),(function(n){return n.fullWidth?"100%":"max-content"}),(function(n){return n.fullHeight?"100%":"max-content"}),(function(n){return n.btnStyles})),R=t(184),U=function(n){var e=n.text,t=void 0===e?"":e,r=n.type,i=void 0===r?"button":r,o=n.fullWidth,a=void 0!==o&&o,l=n.fullHeight,s=void 0!==l&&l,c=n.btnStyles,d=void 0===c?{}:c,u=n.disabled,f=void 0!==u&&u,p=n.onClick,h=void 0===p?function(){return null}:p;return(0,R.jsx)(P,{type:i,fullWidth:a,fullHeight:s,btnStyles:d,disabled:f,onClick:h,children:(0,R.jsx)("span",{children:t})})},z=j.Z.button(p||(p=(0,k.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n"]))),B=j.Z.svg(h||(h=(0,k.Z)(["\n  width: 20px;\n  height: 20px;\n\n  stroke: ",";\n  fill: ",";\n\n  transition: stroke 200ms ease-out;\n\n  &:hover,\n  &:focus {\n    stroke: #3470ff;\n  }\n"])),(function(n){return n.favorite?"#3470FF":"rgba(255, 255, 255, 0.8)"}),(function(n){return n.favorite?"#3470FF":"none"})),T=function(n){var e=n.icon,t=n.onClick,r=void 0===t?function(){return null}:t,i=n.type,o=void 0===i?"button":i,a=n.favorite,l=void 0!==a&&a;return(0,R.jsx)(z,{type:o,onClick:r,children:(0,R.jsx)(B,{favorite:l,children:(0,R.jsx)("use",{href:e})})})},I=t(791);var M,V,A=t.p+"static/media/normal.7d6d70062cbaa5f87a31751fece743c7.svg",K=t.p+"static/media/car_image.0d06ba4f824647789577.jpg",$=function(n){var e=n.carInfo,t=e.id,r=void 0===t?9582:t,i=e.year,o=void 0===i?2008:i,a=e.img,l=void 0===a?K:a,s=e.make,c=void 0===s?"Buick":s,d=e.model,u=void 0===d?"Enclave":d,f=e.rentalPrice,p=void 0===f?"$40":f,h=e.rentalCompany,v=void 0===h?"Luxury Car Rentals":h,b=e.address,m=void 0===b?"123 Example Street, Kiev, Ukraine":b,w=e.type,k=void 0===w?"SUV":w,j=e.accessories,P=void 0===j?["Leather seats","Panoramic sunroof","Premium audio system"]:j,z=e.functionalities,B=void 0===z?["Power liftgate","Remote start","Blind-spot monitoring"]:z,I=e.description,M=void 0===I?"The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.":I,V=m.split(", "),$=(0,g.Z)(V,3),q=($[0],$[1]),D=$[2],G=Z.apply(void 0,(0,x.Z)(P).concat((0,x.Z)(B)));return(0,R.jsxs)(y,{children:[(0,R.jsx)(S,{children:(0,R.jsx)(C,{src:l,alt:M,onError:function(n){n.currentTarget.onerror=null,n.currentTarget.src=K}})}),(0,R.jsx)(T,{icon:"".concat(A,"#heart"),onClick:function(n){console.log("added to favorite")}}),(0,R.jsxs)(W,{children:[(0,R.jsxs)(E,{children:[c+" ",(0,R.jsx)(H,{children:u+", "}),o]}),(0,R.jsx)(L,{children:p})]}),(0,R.jsxs)(_,{children:[(0,R.jsxs)(F,{children:[(0,R.jsx)("span",{children:q}),(0,R.jsx)("span",{children:D}),(0,R.jsx)("span",{children:v})]}),(0,R.jsxs)(F,{children:[(0,R.jsx)("span",{children:k}),(0,R.jsx)("span",{children:u}),(0,R.jsx)("span",{children:r}),(0,R.jsx)("span",{children:G})]})]}),(0,R.jsx)(U,{text:"Learn more",fullWidth:!0})]})},q=j.Z.ul(M||(M=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 50px;\n  column-gap: 29px;\n"]))),D=function(n){var e=n.children;return(0,R.jsx)(q,{children:e})},G=t(834),J=j.Z.a(V||(V=(0,k.Z)(["\n  width: ",";\n  height: ",";\n  padding: 12px 50px;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  background-color: #3470ff;\n\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: 200ms background-color ease-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n\n  ",";\n\n  & > span {\n    display: inline-block;\n    overflow: hidden;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n  }\n"])),(function(n){return n.fullWidth?"100%":"max-content"}),(function(n){return n.fullHeight?"100%":"max-content"}),(function(n){return n.linkStyles})),N=function(n){var e=n.text,t=n.href,r=n.fullWidth,i=void 0!==r&&r,o=n.fullHeight,a=void 0!==o&&o,l=n.linkStyles,s=void 0===l?{}:l;return(0,R.jsx)(J,{href:t,fullWidth:i,fullHeight:a,linkStyles:s,children:(0,R.jsx)("span",{children:e})})},O=t(243);O.Z.defaults.baseURL="https://65205105906e276284c45427.mockapi.io";var Q=function(){var n=(0,v.Z)(m().mark((function n(){var e,t,r,i=arguments;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t=i.length>1&&void 0!==i[1]?i[1]:8,n.next=4,O.Z.get("/api/cars?page=".concat(e,"&limit=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),X=function(){var n=(0,I.useState)([]),e=(0,g.Z)(n,2),t=e[0],r=e[1],i=(0,I.useState)(1),o=(0,g.Z)(i,2),a=o[0],l=o[1],s=(0,I.useState)(!1),c=(0,g.Z)(s,2),d=c[0],u=c[1];(0,I.useEffect)((function(){(0,v.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q(a);case 3:if(e=n.sent,1!==a){n.next=7;break}return r(e),n.abrupt("return");case 7:if(r((function(n){return[].concat((0,x.Z)(n),(0,x.Z)(e))})),!(e.length<=7)){n.next=11;break}return u(!0),n.abrupt("return");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()}),[a]);return(0,R.jsxs)(G.W,{children:[(0,R.jsx)("p",{children:"Catalog page"}),(0,R.jsx)(U,{text:"Search",type:"submit",disabled:!0,btnStyles:{height:"48px",width:"200px"}}),(0,R.jsx)(N,{text:"Rental car",href:"tel:+380730000000",linkStyles:{width:"168px"}}),(0,R.jsx)(D,{children:t.map((function(n){return(0,R.jsx)("li",{children:(0,R.jsx)($,{carInfo:n})},n.id)}))}),(0,R.jsx)("button",{disabled:d,onClick:function(){l((function(n){return n+1}))},style:{margin:"20px",padding:"10px",border:"1px solid black"},children:"Load more"})]})}}}]);
//# sourceMappingURL=422.6594b89c.chunk.js.map