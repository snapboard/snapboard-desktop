(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{107:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},116:function(e,t,n){"use strict";var r=n(21),o=n(0),a=n(176);t.a=function(e){var t=Object(o.useState)(null),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(a.a)(e);return Object(o.useEffect)(function(){if(s)return e.onSnapshot(function(e){i(e)})},[s]),c}},118:function(e,t,n){"use strict";var r=n(23),o=n(24),a=n(26),c=n(25),i=n(27),s=n(1),l=n(0),u=n.n(l),d=n(188),p=n.n(d),f=n(181),b=n.n(f),m=n(257),j=n.n(m),h=n(258),v=n.n(h),O=n(161),g=n.n(O),x=n(259),y=n.n(x),w=function(){function e(t,n,o){Object(r.a)(this,e),this.value=t,this.counter=0,this.listeners=[],this.onChange=n,this.readOnly=o.readOnly||!1,this.setValue.bind(this),this.getValue.bind(this)}return Object(o.a)(e,[{key:"getValue",value:function(e){return e?b()(this.value,e):this.value}},{key:"setValue",value:function(e,t){var n=this;return this.readOnly?this:(void 0===this.value&&(this.value={}),j()(this.value,e,p()(t)?t(this.getValue(e)):t),this.onChange&&this.onChange(this.value,e,this),this.listeners.forEach(function(t){var r=t.field,o=t.cb,a=v()(e),c=v()(r);("*"===r||g()(a.slice(0,c.length),c))&&o(n.getValue(r),e,n)}),this)}},{key:"watch",value:function(e,t){var n=this,r=this.counter++;return this.listeners.push({id:r,cb:t,field:e}),function(){return y()(n.listeners,function(e){return e.id===r})}}}]),e}(),C=u.a.createContext(null),_=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).controller=new w(e.initialValue,function(e){n.props.onChange&&n.props.onChange(e,n.controller),p()(n.props.children)&&n.forceUpdate()},{readOnly:e.readOnly}),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.controller.readOnly=this.props.readOnly}},{key:"render",value:function(){var e=this.props.children;return Object(s.jsx)(C.Provider,{value:this.controller},p()(e)?e(this.controller,this.controller.value):e)}}]),t}(u.a.Component),T=n(21);function k(e){return Object(l.useContext)(C)}function A(e){var t=Object(l.useContext)(C),n=Object(l.useState)(t.getValue(e)),r=Object(T.a)(n,2),o=r[0],a=r[1];return Object(l.useEffect)(function(){return t.watch(e,function(e){a(e)})},[t,e]),[o,function(n){return t.setValue(e,n)},t]}var S=n(44),P=n(107);var E=function(e){var t=e.children,n=e.onSubmit,r=e.onChange,o=e.initialValue,a=e.readOnly,c=Object(P.a)(e,["children","onSubmit","onChange","initialValue","readOnly"]),i=Object(l.useRef)(null);return Object(s.jsx)(_,{ref:i,onChange:r,initialValue:o,readOnly:a},Object(s.jsx)("form",Object(S.a)({onSubmit:function(e){e.preventDefault();var t=i.current&&i.current.controller;n&&n(e,t)}},c),t))};n.d(t,"c",function(){return k}),n.d(t,"d",function(){return A}),n.d(t,"a",function(){return E});t.b=_},1324:function(e,t,n){"use strict";n.r(t);var r=n(21),o=n(1),a=n(0),c=n(35),i=n(14),s=n(137),l=n.n(s),u=n(69),d=n(48),p=n(473),f=n(11),b=n.n(f),m=n(17),j=n(134),h=n(136),v=n.n(h),O=n(171),g=n(118),x=u.a.firestore(),y={name:"1rki9kp",styles:"max-width:20em;"},w={name:"1v8nkjm",styles:"margin-top:2em;"},C={name:"1lwvnj9",styles:"display:inline-block;padding:1em;font-size:0.9em;color:#71b133;"};var _=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(d.a)(),s=Object(r.a)(i,2),l=s[0],u=s[1],p=l&&x.collection("users").doc(l.uid);if(u)return"Loading...";var f=function(){var e=Object(m.a)(b.a.mark(function e(t,n){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),r=n.value.name,e.next=4,p.update({name:r});case 4:c("Save complete");case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{css:y},Object(o.jsx)(g.a,{onSubmit:f,initialValue:l.profile},Object(o.jsx)(j.FormField,{label:"Name"},Object(o.jsx)(O.a,{field:"name",placeholder:"Name"})),Object(o.jsx)("div",{css:w},Object(o.jsx)(v.a,{primary:!0},"Save"),n&&Object(o.jsx)("span",{css:C},n))))},T=n(141),k=n(116),A=n(145),S=n(668),P=n(358),E=u.a.firestore(),z={name:"tgsorp",styles:"margin-bottom:0.3em;"},N={name:"14kcwq8",styles:"color:#999;"};function I(e){var t=e.account,n=t.data(),r=n.providerId,a=n.externalId,c=E.collection("providers").doc(r),i=Object(k.a)(c);if(!i)return null;var s=i.data(),u=s.name,d=s.icon;return Object(o.jsx)("div",{css:L.item,key:t.id,className:"clearfix"},d&&Object(o.jsx)("img",{css:L.icon,alt:u,src:d.url}),Object(o.jsx)(l.a,{as:"h4",css:z,noMargins:!0},u),Object(o.jsx)(l.a,{as:"p",css:N,noMargins:!0},a))}var R={name:"k8w2rj",styles:"max-width:40em;"};var L={item:{name:"1acppr9",styles:"border:1px solid #eee;border-radius:3px;margin:1em 0;padding:0.5em 1em;"},icon:{name:"6mowqd",styles:"float:left;width:50px;margin-right:1em;overflow:hidden;border-radius:3px;"}},M=function(){var e=u.a.auth().currentUser,t=e&&E.collection("accounts").where("userId","==",e.uid),n=Object(k.a)(t),r=Object(A.a)(S.a),a=Object(T.a)(n,function(e){return Object(o.jsx)(I,{key:e.id,account:e})}),c=function(){var e=Object(m.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:Object(P.a)(t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{css:R},Object(o.jsx)(v.a,{primary:!0,onClick:c},"Connect Account"),Object(o.jsx)("div",null,a))},q=n(377),B=n(472),V=u.a.firestore(),U={name:"1xo5moz",styles:"margin-bottom:2em;"},F={name:"19tzmjm",styles:"margin:1em 0;"};var D={card:{name:"1trorph",styles:"border:1px solid #eee;border-radius:3px;padding:1em;height:50px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;"}},G=function(e){var t=e.history,n=function(){var e=Object(m.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)("admin");case 2:n=e.sent,t.push("/editor/".concat(n));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),r=V.collection("cards").where("active","==",!0).where("workspaceId","==","admin"),a=Object(k.a)(r),i=a?Object(T.a)(a,function(e){return Object(o.jsx)(q.a,{key:e.id,css:U,sm:4,gutter:2},Object(o.jsx)(c.c,{to:"/editor/".concat(e.id)},Object(o.jsx)("div",{css:D.card},Object(o.jsx)("h2",null,e.data()&&e.data().name||e.id," "))))}):Object(o.jsx)(q.a,{gutter:2},"Loading...");return Object(o.jsx)("div",null,Object(o.jsx)("div",{css:F},Object(o.jsx)(v.a,{primary:!0,onClick:n},"Create Template")),Object(o.jsx)(q.b,{gutter:2},i))};var W={nav:{name:"1tp5op5",styles:"display:block;margin-right:2em;margin-left:-0.5em;padding:1em 0;margin-bottom:1em;& > ul > li > a{float:left;display:block;padding:0.5em 0.5em;margin:0 0.2em;color:#9E9E9E;&.active{color:#333;font-weight:600;}}"},content:Object(o.css)("")};t.default=function(e){var t=e.match,n=Object(d.a)(),a=Object(r.a)(n,2),s=a[0];return a[1]?null:Object(o.jsx)(p.a,null,Object(o.jsx)("div",null,Object(o.jsx)("div",null,Object(o.jsx)(l.a,{as:"h1"},"Settings"),Object(o.jsx)("div",{css:W.nav,className:"clearfix"},Object(o.jsx)("ul",null,Object(o.jsx)("li",null,Object(o.jsx)(c.d,{exact:!0,to:t.url},"Profile")),Object(o.jsx)("li",null,Object(o.jsx)(c.d,{to:"".concat(t.url,"/accounts")},"Accounts")),s.profile.admin?Object(o.jsx)("li",null,Object(o.jsx)(c.d,{to:"".concat(t.url,"/cards")},"Cards")):null,Object(o.jsx)("li",null,Object(o.jsx)(c.d,{exact:!0,onClick:function(){return u.a.auth().signOut()},to:"/"},"Logout")))),Object(o.jsx)("div",{css:W.content},Object(o.jsx)(i.d,null,Object(o.jsx)(i.b,{component:M,path:"".concat(t.url,"/accounts")}),s.profile.admin?Object(o.jsx)(i.b,{component:G,path:"".concat(t.url,"/cards")}):null,Object(o.jsx)(i.b,{component:_,path:t.url}))))))}},140:function(e,t,n){"use strict";var r=n(44),o=n(107),a=n(109),c=n(1);n(0),n(224);function i(e){var t=e.icon,n=e.className,a=Object(o.a)(e,["icon","className"]);return Object(c.jsx)("i",Object(r.a)({},a,{className:"".concat(t," ").concat(n," icon")}))}t.a=Object(a.default)(i,{target:"e1qdfwcz0"})(function(e){return e.size?"font-size: ".concat(e.size,";"):""}," ",function(e){return e.onClick?"cursor: pointer;":""}," ",function(e){return e.top||e.left||e.right||e.bottom?"position: absolute;":""}," ",function(e){return e.top?"top: ".concat(e.top,";"):""},"}",function(e){return e.left?"left: ".concat(e.left,";"):""},"}",function(e){return e.right?"right: ".concat(e.right,";"):""},"}",function(e){return e.bottom?"bottom: ".concat(e.bottom,";"):""},"}")},141:function(e,t,n){"use strict";t.a=function(e,t){var n=[];return e?(e.forEach(function(e,r){n.push(t(e,r))}),n):n}},145:function(e,t,n){"use strict";var r=n(0),o=n(49);t.a=function(e){var t=Object(r.useContext)(o.a);return function(n){return t.push(e,n)}}},154:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(44),o=n(107),a=n(1),c=(n(0),n(434)),i=n.n(c),s=n(247),l=n.n(s);i.a.setAppElement("#root");var u={overlay:{zIndex:9,background:"rgba(0, 0, 0, 0.8)"},content:{border:0,padding:0,zIndex:10}},d={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function p(e){var t=e.style,n=e.center,c=e.forwardRef,s=Object(o.a)(e,["style","center","forwardRef"]),p=l()({},u,n?d:{},t);return Object(a.jsx)(i.a,Object(r.a)({ref:c,style:p},s))}},169:function(e,t,n){"use strict";var r=n(459),o=n(179);t.a=Object(o.a)(r.a)},171:function(e,t,n){"use strict";var r=n(214),o=n.n(r),a=n(243);t.a=Object(a.a)(o.a)},176:function(e,t,n){"use strict";function r(e){return e?e._query?e._query.memoizedCanonicalId||e._query.canonicalId():e.memoizedCanonicalId?e.memoizedCanonicalId:e.canonicalId?e.canonicalId():e.path:null}n.d(t,"a",function(){return r})},179:function(e,t,n){"use strict";var r=n(44),o=n(107),a=n(148),c=n(1),i=(n(0),n(22)),s=n(45),l={container:function(e,t){var n=t.theme;return Object(a.a)({},e,{fontSize:n.fontSize_ui})},indicatorSeparator:function(){return{width:0}},placeholder:function(e,t){var n=t.theme;return Object(a.a)({},e,{color:n&&n.input_color_placeholder})},control:function(e,t){var n=t.theme;return Object(a.a)({},e,{minHeight:35,borderColor:"#c8d1e0",":hover":{borderColor:n&&n.borderColor_theme_hover,boxShadow:"none"},":active":{boxShadow:"0 0 0 1px #ffffff, 0 0 0 2px #1d5bbf",borderColor:"#c8d1e0"}})},option:function(e,t){var n=t.theme;return t.isSelected?e:Object(a.a)({},e,{":hover":{background:n&&n.color_gray_10}})},menuPortal:function(e,t){var n=t.theme;return Object(a.a)({},e,{fontSize:n&&n.fontSize_ui,zIndex:n&&n.zIndex_1600})},menu:function(e,t){var n=t.theme;Object(o.a)(t,["theme"]);return Object(a.a)({},e,{marginTop:4,zIndex:n&&n.zIndex_1600,boxShadow:n&&n.boxShadow_2,border:"1px solid #eee",borderColor:n&&n.panel_borderColor})}};t.a=function(e){return Object(i.themed)(Object(s.withTheme)(function(e){return function(t){var n=t.styles,i=Object(o.a)(t,["styles"]);return Object(c.jsx)(e,Object(r.a)({styles:Object(a.a)({},l,n||{})},i))}}(e)))(function(e){var t=e.theme;return{borderRadius:t.borderRadius_1,danger:t.backgroundColor_dangerPrimary,dangerLight:t.backgroundColor_danger_focus,neutral0:t.color_white,neutral5:t.color_gray_10,neutral10:t.color_gray_10,neutral20:t.color_gray_20,neutral30:t.color_gray_30,neutral40:t.color_gray_40,neutral50:t.color_gray_50,neutral60:t.color_gray_60,neutral70:t.color_gray_70,neutral80:t.color_gray_80,neutral90:t.color_gray_90,primary:t.color_theme,primary25:t.color_gray_10,primary50:t.color_theme_20,primary75:t.color_theme_70}})}},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},224:function(e,t,n){},238:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAAEk8BksAAAABGdBTUEAALGPC/xhBQAAAk9JREFUaAXtWl1ugzAMDoxjtAcq1R6n7Rb0KOUWmyZ1T+sOxG6w7XFluFqLY+zgRAFVKEiVHOfz3+fQBFpj8PX83uJhjgdULqgCxl+H7dlD3lRVCx8O5HTrnOy9vRwbg7Ltrdp21aOM6SeQFrI8Z4h0V5G1gFlxIrvaYgFlZ562A4zoDfugMss5BcH40geQC9yHdV0PUgEQvYLSCzLi07mwd5eV5qH8wOm5o/y2RwwG2W1A0SEGqr7gnnin5N1E7whLMODXEtNh/N1hTTN3qjUfsjqoA83YuxsapxSjWrbUSBr/vN1vTu3Juvu6fnxGrYQGgGS6PWZVNLvdxrT2vQ/RV3W9ljL21ec0wCW6ryMXPipdUqAURGKG1eewktgZjTLLLFvJV6dXXK/HjaFbHAR4LFXLXNd4GgDyIucqV6q6IC4PirkUREFSD5mFrqj7yfdh28BXe19Dd5LL8jJqJTQABIM9JmoQXAGWZwlSfFbVgEeTZeV6v7eO1TgzXznneOR2S1/HGD8LXSkIpnxUTnSNUoQBiS7MxqjM0jU4P5Hz1ahXBABfunMXMnKK8F5Ke1TyOLc5Y/5PsmxpDFmMtggw9sGywWxl3EJs37OOUiGz0q0IljqiIGlWSNRnhpiZc88fkn/YR252abFnc6ESwN5sIULOonoxhfDPcELdsBZjvvUUwgSp+edEwZXPuhVcTKZezNJKhUy2RgIdp44EEjeZWerIZNQGOk4dCSRuMrMFdaR7Nw5nqDGqzpgO68TB31c076cAA1jHBb99aPMC7B+QlYyCvz273QAAAABJRU5ErkJggg=="},243:function(e,t,n){"use strict";var r=n(44),o=n(21),a=n(107),c=n(1),i=(n(0),n(118));t.a=function(e){return function(t){var n=t.field,s=t.onChange,l=t.forwardedRef,u=Object(a.a)(t,["field","onChange","forwardedRef"]),d=Object(i.d)(n),p=Object(o.a)(d,2),f=p[0],b=p[1];return Object(c.jsx)(e,Object(r.a)({},u,{forwardedRef:l,value:f||0===f?f:"",onChange:function(e){b(e.target.value),s&&s(e)}}))}}},263:function(e,t,n){"use strict";t.__esModule=!0,t.tooltipTheme=void 0;var r=n(22),o=n(500);t.tooltipTheme=function(e){return(0,r.mapComponentThemes)({name:"Popover",theme:(0,o.popoverTheme)(e)},{name:"Tooltip",theme:{TooltipArrow_backgroundColor:e.panel_backgroundColor_inverted,TooltipArrow_borderColor:e.panel_borderColor_inverted,TooltipContent_backgroundColor:e.panel_backgroundColor_inverted,TooltipContent_borderColor:e.panel_borderColor_inverted,TooltipContent_color:e.color_inverted,TooltipContent_maxWidth:"18em",TooltipContentBlock_marginVertical:"0",TooltipContentBlock_paddingHorizontal:e.space_inset_md,TooltipTriggerText_borderStyle:"dashed",TooltipTriggerText_borderColor:"currentcolor",TooltipTriggerText_borderWidth:"1px"}},e)}},264:function(e,t,n){"use strict";t.__esModule=!0,t.PLACEMENT=t.DELAY_OPEN=void 0;var r,o=(r=n(499))&&r.__esModule?r:{default:r};t.DELAY_OPEN=250;var a=o.default.placements.sort().reduce(function(e,t){return e[t]=t,e},{});t.PLACEMENT=a},358:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(11),o=n.n(r),a=n(17),c=n(37),i=n.n(c),s=n(69),l="https://snapboard.io";function u(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",!i()()){e.next=9;break}return e.next=4,s.a.auth().currentUser.getIdToken(!1);case 4:return r=e.sent,e.next=7,s.a.auth().currentUser.uid;case 7:a=e.sent,n="?token=".concat(r,"&userId=").concat(a);case 9:window.open("".concat(l,"/auth/").concat(t).concat(n),"_blank","fullscreen=no,height=600,width=600,location=no,top=100,left=100");case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}},371:function(e,t,n){"use strict";var r=n(44),o=n(107),a=n(1),c=(n(0),n(69)),i=n(116),s=n(141),l=n(169),u=c.a.firestore();t.a=function(e){var t=e.value,n=e.onChange,d=Object(o.a)(e,["value","onChange"]),p=c.a.auth().currentUser,f=p&&u.collection("workspaces").where("members.".concat(p.uid),">=",""),b=Object(i.a)(f),m=Object(s.a)(b,function(e){var t=e.data();return{value:e.id,label:t.name||"Personal"}});return Object(a.jsx)(l.a,Object(r.a)({isLoading:!b,value:t,onChange:n,options:m},d))}},377:function(e,t,n){"use strict";var r=n(44),o=n(107),a=n(1),c=(n(0),n(219),n(220),n(221),["col","sm-col","md-col","lg-col"]),i=function(e){var t=e.col,n=e.sm,i=e.md,s=e.lg,l=e.gutter,u=e.pullRight,d=e.mb,p=e.className,f=void 0===p?"":p,b=Object(o.a)(e,["col","sm","md","lg","gutter","pullRight","mb","className"]),m=!1,j=[t,n,i,s].map(function(e,t){var n=c[t];return e&&(m=!0),e?"".concat(n," ").concat(n,"-").concat(e," "):""}).join(""),h=l?"px".concat(l," "):"",v=u?"col-right ":"",O=m?"":"col ",g=d?"mb".concat(d," "):"",x="".concat(g).concat(O).concat(j).concat(h).concat(v).concat(f);return Object(a.jsx)("div",Object(r.a)({className:x},b))},s=function(e){var t=e.gutter,n=e.className,c=void 0===n?"":n,i=Object(o.a)(e,["gutter","className"]),s=t?"mxn".concat(t):"";return Object(a.jsx)("div",Object(r.a)({className:"clearfix ".concat(s," ").concat(c)},i))};n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var l=i,u=s},379:function(e,t,n){"use strict";var r=n(1),o=(n(0),n(238)),a=n.n(o);n(426);var c={position:"absolute",height:18,width:36,margin:"-36px 0 0 -16px",top:"50%",left:"50%"," > div > div":{backgroundColor:"rgba(130, 130, 130, 0.5)",width:8,height:8}},i=function(){return Object(r.jsx)("div",{css:c},Object(r.jsx)("div",{className:"spinner"},Object(r.jsx)("img",{width:40,src:a.a,alt:"logo"})))};t.a=function(e){var t=e.loading,n=e.children,o=e.icon;return t?o?Object(r.jsx)(i,null):"Loading...":n}},426:function(e,t,n){},441:function(e,t,n){"use strict";t.__esModule=!0;var r={};t.default=void 0;var o,a=(o=n(460))&&o.__esModule?o:{default:o};t.default=a.default;var c=n(263);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||(t[e]=c[e]))})},442:function(e,t,n){"use strict";var r=n(11),o=n.n(r),a=n(17),c=n(21),i=n(1),s=n(0),l=n(14),u=n(69),d=n(134),p=n(214),f=n.n(p),b=n(136),m=n.n(b),j=n(167),h=n(154),v=n(371),O=u.a.firestore(),g={name:"16f1609",styles:"margin-top:1em;"},x={name:"1v8nkjm",styles:"margin-top:2em;"},y={name:"tokvmb",styles:"color:red;"};var w={content:{name:"sqxvk6",styles:"position:relative;padding:2em;min-width:300px;"}};t.a=Object(l.g)(function(e){var t=e.onDone,n=e.onCancel,r=e.history,l=Object(s.useState)(""),p=Object(c.a)(l,2),b=p[0],C=p[1],_=Object(s.useState)(null),T=Object(c.a)(_,2),k=T[0],A=T[1],S=Object(s.useState)(""),P=Object(c.a)(S,2),E=P[0],z=P[1],N=function(){var e=Object(a.a)(o.a.mark(function e(){var n,a,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u.a.auth().currentUser,a=k&&k.value,n){e.next=4;break}return e.abrupt("return",z("Please login"));case 4:if(b){e.next=6;break}return e.abrupt("return",z("Please enter a board name"));case 6:if(a){e.next=8;break}return e.abrupt("return",z("Workspace is required"));case 8:return e.next=10,O.collection("reports").add({name:b,workspaceId:a,active:!0,public:!1}).catch(function(e){return z(e.message),null});case 10:(c=e.sent)&&(r.push("/r/".concat(c.id)),t());case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(h.a,{center:!0,size:"small",showCloseButton:!0,isOpen:!0,title:"New Board",onRequestClose:n},Object(i.jsx)("div",{css:w.content},Object(i.jsx)(d.FormField,{label:"Board Name",input:f.a,onChange:function(e){return C(e.target.value)},value:b}),Object(i.jsx)(d.FormField,{css:g,label:"Workspace"},Object(i.jsx)(v.a,{onChange:function(e){return A(e)},value:k,menuPortalTarget:document.body,isSearchable:!0})),E&&Object(i.jsx)("p",{css:y},E),Object(i.jsx)(j.DialogActions,{css:x},Object(i.jsx)(m.a,{size:"medium",onClick:n},"Cancel"),Object(i.jsx)(m.a,{size:"medium",onClick:N},"Create Board"))))})},460:function(e,t,n){"use strict";(function(e){t.__esModule=!0,t.default=void 0;var r,o=n(1),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),c=n(168),i=(r=n(501))&&r.__esModule?r:{default:r},s=n(461),l=n(264);n(462);function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(t){var n,r;function b(){for(var n,r=arguments.length,b=new Array(r),m=0;m<r;m++)b[m]=arguments[m];return f(p(n=t.call.apply(t,[this].concat(b))||this),"state",{isOpen:Boolean(n.props.defaultIsOpen)}),f(p(n),"id",n.props.id||"tooltip-"+(0,c.generateId)()),f(p(n),"openTimer",void 0),f(p(n),"getTriggerProps",function(e){return void 0===e&&(e={}),d({},e,{"aria-expanded":void 0,onBlur:(0,c.composeEventHandlers)(e.onBlur,n.close),onFocus:(0,c.composeEventHandlers)(e.onFocus,n.handleDelayedOpen),onMouseEnter:(0,c.composeEventHandlers)(e.onMouseEnter,n.handleDelayedOpen),onMouseLeave:(0,c.composeEventHandlers)(e.onMouseLeave,n.close),tabIndex:0})}),f(p(n),"renderTrigger",function(){var e=n.props.children,t="string"===typeof e?(0,o.jsx)(s.TriggerText,null,e):e,r=a.Children.only(t);return(0,a.cloneElement)(r,n.getTriggerProps(r.props))}),f(p(n),"getContentProps",function(e){void 0===e&&(e={});var t=n.props.content,r=e;r.tabIndex;return d({},u(r,["tabIndex"]),{"aria-live":"polite",children:t,role:"tooltip"})}),f(p(n),"renderContent",function(e){var t=(void 0===e?{}:e).props;return(0,o.jsx)(i.default,n.getContentProps(t))}),f(p(n),"handleDelayedOpen",function(t){n.clearOpenTimer(),n.getControllableValue("isOpen")||(n.openTimer=e.setTimeout(function(){n.open(t)},l.DELAY_OPEN))}),f(p(n),"clearOpenTimer",function(){e.clearTimeout(n.openTimer),n.openTimer=null}),f(p(n),"open",function(e){n.isControlled("isOpen")?n.openActions(e):n.setState({isOpen:!0},function(){n.openActions(e)})}),f(p(n),"openActions",function(e){n.props.onOpen&&n.props.onOpen(e)}),f(p(n),"close",function(e){n.clearOpenTimer(),n.isControlled("isOpen")?n.closeActions(e):n.setState({isOpen:!1},function(){n.closeActions(e)})}),f(p(n),"closeActions",function(e){n.props.onClose&&n.props.onClose(e)}),f(p(n),"isControlled",function(e){return n.props.hasOwnProperty(e)}),f(p(n),"getControllableValue",function(e){return n.isControlled(e)?n.props[e]:n.state[e]}),n}r=t,(n=b).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var m=b.prototype;return m.componentWillUnmount=function(){this.clearOpenTimer()},m.render=function(){var e=this.props,t=e.children,n=e.disabled,r=(e.subtitle,e.title,u(e,["children","disabled","subtitle","title"]));if(n)return t;var a=d({},r,{children:this.renderTrigger(),focusTriggerOnClose:!1,id:this.id,isOpen:this.getControllableValue("isOpen"),onClose:this.close,onOpen:this.open,content:this.renderContent});return(0,o.jsx)(s.TooltipRoot,a)},b}(a.Component);t.default=b,f(b,"displayName","Tooltip"),f(b,"defaultProps",{hasArrow:!0,placement:l.PLACEMENT.bottom}),b.propTypes={}}).call(this,n(15))},461:function(e,t,n){"use strict";t.__esModule=!0,t.TriggerText=t.TooltipRoot=void 0;var r=i(n(109)),o=n(22),a=i(n(362)),c=n(263);function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,o.themed)(a.default)(function(e){var t=e.theme;return(0,o.mapComponentThemes)({name:"Tooltip",theme:(0,c.tooltipTheme)(t)},{name:"Popover",theme:{}},t)});t.TooltipRoot=s;var l=(0,r.default)("span",{target:"e3ztgjb0"})(function(e){var t=e.theme,n=(0,c.tooltipTheme)(t);return{borderBottomStyle:n.TooltipTriggerText_borderStyle,borderBottomColor:n.TooltipTriggerText_borderColor,borderBottomWidth:n.TooltipTriggerText_borderWidth}});t.TriggerText=l},462:function(e,t,n){"use strict";t.__esModule=!0,t.tooltipPropTypes=void 0;var r=n(12),o=n(264),a={children:r.node.isRequired,cursor:r.string,content:r.string.isRequired,defaultIsOpen:r.bool,disabled:r.bool,hasArrow:r.bool,id:r.string,isOpen:r.bool,modifiers:r.object,onClose:r.func,onOpen:r.func,placement:(0,r.oneOf)(Object.keys(o.PLACEMENT)),positionFixed:r.bool,subtitle:r.any,title:r.any,usePortal:r.bool};t.tooltipPropTypes=a},472:function(e,t,n){"use strict";var r=n(11),o=n.n(r),a=n(17),c=n(247),i=n.n(c),s=n(69),l="import React from 'react'\n\nfunction Component ({\n  inputs = {},\n  data = {},\n  update,\n}) {\n  return (\n    <div className=\"App\">\n      <h1>Hello \ud83c\udf0e!</h1>\n      <h2>You can now edit this card!</h2>\n    </div>\n  )\n}\n\nexport default Component\n",u=".App {\n  text-align: center;\n}\n",d="export default async ({ \n  auths, inputs, previous, time, \n}) => {\n  // Whatever value you return here is\n  // passed to component as the 'data' prop \n  return previous + 1\n}";n.d(t,"a",function(){return f});var p=s.a.firestore();function f(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(o.a.mark(function e(t){var n,r,a,c=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:{},s.a.auth().currentUser){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,p.collection("cards").add({published:!1,public:!0,workspaceId:t,active:!0});case 6:return r=e.sent,a=i()({safety:!0,name:"My custom card",public:!0,component:{code:l,css:u,demoParams:JSON.stringify({inputs:{},data:{}})},server:{code:d,testParams:JSON.stringify({inputs:{},previous:{}},null,2)}},n),e.next=10,p.collection("cards").doc(r.id).collection("versions").doc("draft").set(a);case 10:return e.abrupt("return",r.id);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}},473:function(e,t,n){"use strict";var r=n(21),o=n(1),a=(n(0),n(35)),c=n(109),i=n(441),s=n.n(i),l=Object(c.default)(s.a,{target:"e16nieg80"})({name:"1kfy055",styles:"& > div[role=\"tooltip\"]{box-shadow:none;& > div{font-weight:600;}& > span{font-family:'Open Sans';box-shadow:none;text-shadow:0 2px 0 #434a54;}}"}),u=n(140),d=n(48),p=n(145),f=n(379),b=n(238),m=n.n(b),j=n(442),h={name:"a5mea9",styles:"display:block;margin-bottom:1.7em;"},v={name:"15223kq",styles:"margin:1.5em 0;position:relative;"},O={name:"epvm6",styles:"white-space:nowrap;"},g={name:"15223kq",styles:"margin:1.5em 0;position:relative;"};var x={container:{name:"35exys",styles:"margin-left:auto;margin-right:auto;max-width:52em;padding:2em 3em;@media only screen and (max-width:900px){padding-left:5.5em;}"},nav:{name:"1uzw1qy",styles:"position:fixed;top:0;left:0;padding:2em;"},navIcon:{name:"lzj7sa",styles:"display:block;outline:none;cursor:pointer;"},settings:{name:"h8bj00",styles:"color:#dcdcdc;display:block;outline:none;"}};t.a=function(e){var t=e.children,n=e.loading,c=Object(d.a)(),i=Object(r.a)(c,2),s=i[0],b=i[1],y=!!s,w=Object(p.a)(j.a);return b?null:Object(o.jsx)("div",{css:x.container},Object(o.jsx)("div",{css:x.nav},Object(o.jsx)(a.c,{css:h,to:"/d"},Object(o.jsx)("img",{src:m.a,alt:"logo",width:"25px"})),Object(o.jsx)("div",{css:v},Object(o.jsx)(l,{content:"New Board",placement:"right",css:O},Object(o.jsx)("span",{css:x.navIcon,onClick:function(){return w()}},Object(o.jsx)(u.a,{size:"1.6em",css:x.settings,icon:"plus"})))),y&&Object(o.jsx)("div",{css:g},Object(o.jsx)(l,{content:"Settings",placement:"right"},Object(o.jsx)(a.c,{css:x.navIcon,to:"/settings"},Object(o.jsx)(u.a,{size:"1.55em",css:x.settings,icon:"settings"}))))),Object(o.jsx)("div",null,Object(o.jsx)(f.a,{loading:void 0!==n&&!!n},t)))}},668:function(e,t,n){"use strict";var r=n(21),o=n(1),a=n(0),c=n(137),i=n.n(c),s=n(154),l=n(69),u=n(141),d=n(116),p={content:{padding:0,maxWidth:400,margin:"0 auto",width:"80%"}},f=l.a.firestore(),b={name:"1ydy77b",styles:"color:#999;font-size:0.95em;"};function m(e){var t=e.provider,n=e.onSelect,r=t.data(),a=r.name,c=r.tagline,s=r.icon;return Object(o.jsx)("div",{onClick:function(){return n(t.id)},css:v.item},s&&Object(o.jsx)("img",{css:v.icon,alt:a,src:s.url}),Object(o.jsx)("div",null,Object(o.jsx)(i.a,{as:"h4"},a),Object(o.jsx)("p",{css:b},c)))}var j={name:"1ozc9hh",styles:"position:relative;height:100%;padding:0;"},h={name:"ydazc1",styles:"color:#999;padding:1em;text-align:center;"};var v={icon:{name:"1jw1tcc",styles:"float:left;width:50px;margin-right:1em;"},content:{name:"1ozc9hh",styles:"position:relative;height:100%;padding:0;"},header:{name:"1w9psei",styles:"border-botom:1px solid #eee;"},input:{name:"djq2jl",styles:"font-weight:600;box-sizing:border-box;font-size:1.3em;border:1px solid #eee;outline:none;width:100%;padding:0.6em 0.8em;border-radius:0.2em 0.2em 0 0;"},scroll:{name:"1q1darn",styles:"overflow-y:scroll;position:absolute;left:0;right:0;top:51px;bottom:0;background:#fafafa;"},results:{name:"c3vlm2",styles:"background:#fff;"},item:{name:"ndxpbr",styles:"cursor:pointer;border-bottom:1px solid #eee;padding:1em;:hover{background:#fafafa;}"}};t.a=function(e){var t=e.onDone,n=e.onCancel,c=e.filter,i=e.authOnly,l=Object(a.useState)(""),b=Object(r.a)(l,2),O=b[0],g=b[1],x=f.collection("providers").where("published","==",!0);i&&(x=x.where("hasAuth","==",!0));var y=Object(d.a)(x),w=Object(u.a)(y,function(e){return e}).filter(function(e){var t=e.data();return!(c&&c.indexOf(e.id)>-1)&&(!O||t.name.toLowerCase().match(O.toLowerCase()))}).map(function(e){var n=e.data();return Object(o.jsx)(m,{key:e.id,provider:e,data:n,onSelect:t})});return Object(o.jsx)(s.a,{"aria-label":"Provider Search",isOpen:!0,style:p,onRequestClose:n},Object(o.jsx)("div",{css:j},Object(o.jsx)("div",{css:v.header},Object(o.jsx)("input",{value:O,onChange:function(e){return g(e.target.value)},placeholder:"Search apps",css:v.input})),Object(o.jsx)("div",{css:v.scroll},w.length?w:Object(o.jsx)("p",{css:h},"No results"))))}}}]);
//# sourceMappingURL=17.aef2cfec.chunk.js.map