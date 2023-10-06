"use strict";(self.webpackChunksell_your_car=self.webpackChunksell_your_car||[]).push([[92],{403:function(n,e,i){i.r(e),i.d(e,{default:function(){return A}});var t,o,r,l,a,s,d,c,u,f,h,x=i(433),p=i(439),g=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},v=function(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];var t=g(0,e.length-1);return e[t]},b=i(168),m=i(686),j=m.Z.div(t||(t=(0,b.Z)(["\n  width: 274px;\n  max-height: 426px;\n\n  position: relative;\n"]))),y=m.Z.div(o||(o=(0,b.Z)(["\n  height: 268px;\n  margin-bottom: 14px;\n\n  border-radius: 14px;\n  overflow: hidden;\n\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n"]))),Z=m.Z.img(r||(r=(0,b.Z)([""]))),k=m.Z.div(l||(l=(0,b.Z)(["\n  margin-bottom: 8px;\n\n  display: flex;\n\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),w=m.Z.span(a||(a=(0,b.Z)(["\n  color: #3470ff;\n"]))),S=m.Z.span(s||(s=(0,b.Z)(["\n  display: inline-flex;\n  margin-left: auto;\n"]))),C=m.Z.div(d||(d=(0,b.Z)(["\n  margin-bottom: 28px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  color: rgba(18, 20, 23, 0.5);\n"]))),W=m.Z.p(c||(c=(0,b.Z)(["\n  display: flex;\n  gap: 6px;\n\n  & > span:not(:last-child):after {\n    content: '|';\n    height: 16px;\n    margin-left: 6px;\n\n    color: rgba(18, 20, 23, 0.1);\n  }\n"]))),H=m.Z.button(u||(u=(0,b.Z)(["\n  width: ",";\n  height: ",";\n  padding: 12px 50px;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  background-color: #3470ff;\n\n  border-radius: 12px;\n\n  transition: 200ms background-color ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: #0b44cd;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n  ",";\n"])),(function(n){return n.fullWidth?"100%":"max-content"}),(function(n){return n.fullHeight?"100%":"max-content"}),(function(n){return n.btnStyles})),_=i(184),F=function(n){var e=n.text,i=void 0===e?"":e,t=n.type,o=void 0===t?"button":t,r=n.fullWidth,l=void 0!==r&&r,a=n.fullHeight,s=void 0!==a&&a,d=n.btnStyles,c=void 0===d?{}:d,u=n.disabled,f=void 0!==u&&u,h=n.onClick,x=void 0===h?function(){return null}:h;return(0,_.jsx)(H,{type:o,fullWidth:l,fullHeight:s,btnStyles:c,disabled:f,onClick:x,children:i})},P=m.Z.button(f||(f=(0,b.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n"]))),z=m.Z.svg(h||(h=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n\n  stroke: ",";\n  fill: ",";\n\n  transition: stroke 200ms ease-out;\n\n  &:hover,\n  &:focus {\n    stroke: #3470ff;\n  }\n"])),(function(n){return n.favorite?"#3470FF":"rgba(255, 255, 255, 0.8)"}),(function(n){return n.favorite?"#3470FF":"none"})),B=function(n){var e=n.icon,i=n.onClick,t=void 0===i?function(){return null}:i,o=n.type,r=void 0===o?"button":o,l=n.favorite,a=void 0!==l&&l;return(0,_.jsx)(P,{type:r,onClick:t,children:(0,_.jsx)(z,{favorite:a,children:(0,_.jsx)("use",{href:e})})})};i(791);var E,L=i.p+"static/media/normal.7d6d70062cbaa5f87a31751fece743c7.svg",R=i.p+"static/media/car_image.0d06ba4f824647789577.jpg",U=function(n){var e=n.carInfo,i=e.id,t=void 0===i?9582:i,o=e.year,r=void 0===o?2008:o,l=e.img,a=void 0===l?R:l,s=e.make,d=void 0===s?"Buick":s,c=e.model,u=void 0===c?"Enclave":c,f=e.rentalPrice,h=void 0===f?"$40":f,g=e.rentalCompany,b=void 0===g?"Luxury Car Rentals":g,m=e.address,H=void 0===m?"123 Example Street, Kiev, Ukraine":m,P=e.type,z=void 0===P?"SUV":P,E=e.accessories,U=void 0===E?["Leather seats","Panoramic sunroof","Premium audio system"]:E,I=e.functionalities,M=void 0===I?["Power liftgate","Remote start","Blind-spot monitoring"]:I,V=e.description,A=void 0===V?"The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.":V,K=H.split(", "),T=(0,p.Z)(K,3),$=(T[0],T[1]),q=T[2],D=v.apply(void 0,(0,x.Z)(U).concat((0,x.Z)(M)));return(0,_.jsxs)(j,{children:[(0,_.jsx)(y,{children:(0,_.jsx)(Z,{src:a,alt:A})}),(0,_.jsx)(B,{icon:"".concat(L,"#heart"),onClick:function(n){console.log("added to favorite")}}),(0,_.jsxs)(k,{children:[(0,_.jsxs)("span",{children:[d+" ",(0,_.jsx)(w,{children:u+", "}),r]}),(0,_.jsx)(S,{children:h})]}),(0,_.jsxs)(C,{children:[(0,_.jsxs)(W,{children:[(0,_.jsx)("span",{children:$}),(0,_.jsx)("span",{children:q}),(0,_.jsx)("span",{children:b})]}),(0,_.jsxs)(W,{children:[(0,_.jsx)("span",{children:z}),(0,_.jsx)("span",{children:u}),(0,_.jsx)("span",{children:t}),(0,_.jsx)("span",{children:D})]})]}),(0,_.jsx)(F,{text:"Learn more",fullWidth:!0})]})},I=i(834),M=m.Z.a(E||(E=(0,b.Z)(["\n  width: ",";\n  height: ",";\n  padding: 12px 50px;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  background-color: #3470ff;\n\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: 200ms background-color ease-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"])),(function(n){return n.fullWidth?"100%":"max-content"}),(function(n){return n.fullHeight?"100%":"max-content"})),V=function(n){var e=n.text,i=n.href,t=n.fullWidth,o=void 0!==t&&t,r=n.fullHeight,l=void 0!==r&&r,a=n.linkStyles,s=void 0===a?{}:a;return(0,_.jsx)(M,{href:i,fullWidth:o,fullHeight:l,linkStyles:s,children:e})},A=function(){return(0,_.jsxs)(I.W,{children:[(0,_.jsx)("p",{children:"Home page"}),(0,_.jsx)(F,{text:"Search",type:"submit",disabled:!0,btnStyles:{height:"48px"}}),(0,_.jsx)("div",{style:{height:"100px"},children:(0,_.jsx)(V,{text:"Rental car",href:"tel:+380730000000"})}),(0,_.jsx)(U,{carInfo:{}})]})}}}]);
//# sourceMappingURL=92.9e22af83.chunk.js.map