(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{73:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,l=t(0),p=t.n(l),d=t(9),s=t.n(d),b=t(13),u=t(6),x=t(22),h=t.n(x),g=t(7),f=t(23),j=t.n(f),m="20832523-2bf34066ca306390d6c2fd3bb",O="https://pixabay.com/api/",v={fetchGalleryWithQuery:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return j.a.get("".concat(O,"?q=").concat(n,"&page=").concat(e,"&key=").concat(m,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(n){return n.data.hits}))}},w=v,y=t(2),k=t(3),S=k.a.div(i||(i=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),z=k.a.div(a||(a=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),C=k.a.button(r||(r=Object(y.a)(["\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),E=t(1);function I(n){var e=n.onClick;return Object(E.jsx)(C,{type:"button",onClick:e,children:"Load more"})}var L,q=k.a.li(o||(o=Object(y.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),F=k.a.img(c||(c=Object(y.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));function M(n){var e=n.handleClick,t=n.alt,i=n.image,a=i.webformatURL,r=i.largeImageURL;return Object(E.jsx)(q,{children:Object(E.jsx)(F,{src:a,alt:t,className:"ImageGalleryItem-image",onClick:function(n){return e(n,r)}})})}var G,R,T,B,D,J=k.a.ul(L||(L=Object(y.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));function N(n){var e=n.images,t=n.alt,i=n.handleClick;return Object(E.jsx)(J,{children:e.map((function(n){return Object(E.jsx)(M,{image:n,alt:t,handleClick:i},n.id)}))})}var Q,U,W=k.a.header(G||(G=Object(y.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),_=k.a.form(R||(R=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),H=k.a.button(T||(T=Object(y.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=k.a.span(B||(B=Object(y.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),A=k.a.input(D||(D=Object(y.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"])));function K(n){var e=n.onSubmit;return Object(E.jsx)(W,{children:Object(E.jsxs)(_,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.SearchInput.value;e(t)},children:[Object(E.jsx)(H,{type:"submit",children:Object(E.jsx)(P,{children:"Search"})}),Object(E.jsx)(A,{name:"SearchInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var V=k.a.div(Q||(Q=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),X=k.a.div(U||(U=Object(y.a)(["\n  max-width: calc(100vw - 36%);\n  max-height: calc(100vh - 2%);\n  /* max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px); */\n"]))),Y=document.querySelector("#rootModal");function Z(n){var e=n.alt,t=n.url,i=n.closeModal;return Object(l.useEffect)((function(){var n=function(n){i(n)};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[i]),Object(d.createPortal)(Object(E.jsx)(V,{onClick:i,children:Object(E.jsx)(X,{children:Object(E.jsx)("img",{src:t,alt:e})})}),Y)}var $=function(){var n=Object(l.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],a=Object(l.useState)(null),r=Object(u.a)(a,2),o=r[0],c=r[1],p=Object(l.useState)(1),d=Object(u.a)(p,2),s=d[0],x=d[1],f=Object(l.useState)(null),j=Object(u.a)(f,2),m=j[0],O=j[1],v=Object(l.useState)(""),y=Object(u.a)(v,2),k=y[0],C=y[1],L=Object(l.useState)("idle"),q=Object(u.a)(L,2),F=q[0],M=q[1];Object(l.useEffect)((function(){o&&(M("pending"),w.fetchGalleryWithQuery(o,s).then((function(n){return 0===n.length&&1===s?(g.b.error("Nothing found"),void M("idle")):0===n.length&&s>1?(g.b.error("End of image list"),void M("idle")):(i((function(e){return[].concat(Object(b.a)(e),Object(b.a)(n))})),void M("resolved"))})))}),[s,o]),Object(l.useEffect)((function(){t.length<=12||G()}),[t]);var G=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},R=function(n){n.target!==n.currentTarget&&"Escape"!==n.code||O((function(n){return!n}))};return Object(E.jsxs)(z,{children:[Object(E.jsx)(K,{onSubmit:function(n){""!==n.trim()?n!==o?(x(1),i([]),c(n)):g.b.error("Repeated request"):g.b.error("Invalid request")}}),t.length&&Object(E.jsx)(N,{images:t,alt:o,handleClick:function(n,e){C(e),R(n)}}),"pending"===F&&Object(E.jsx)(S,{children:Object(E.jsx)(h.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})}),"resolved"===F&&Object(E.jsx)(I,{onClick:function(){return x((function(n){return n+1}))}}),m&&Object(E.jsx)(Z,{alt:o,url:k,closeModal:R}),Object(E.jsx)(g.a,{})]})};t(73);s.a.render(Object(E.jsx)(p.a.StrictMode,{children:Object(E.jsx)($,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2206ca54.chunk.js.map