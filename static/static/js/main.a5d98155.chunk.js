(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{48:function(e,t,n){"use strict";var o=n(21),r=n(11),a=n.n(r),c=n(17),i=n(0),s=n(19),u=n.n(s),l=(n(54),[]),p=null,b=!1;function d(e){return l.push(e),b&&e(p),function(){var t=l.indexOf(e);t>-1&&l.splice(t,1)}}u.a.auth().onAuthStateChanged(function(){var e=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(b||(b=!0),!t){e.next=6;break}return e.next=4,u.a.firestore().collection("users").doc(t.uid).get();case 4:n=e.sent,t.profile=n&&n.data()||{};case 6:l.forEach(function(e){return e(t)}),p=t;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),t.a=function(){var e=Object(i.useState)([null,!0]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)(function(){return d(function(e){r([e,!1])})},[]),n}},49:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var o=n(44),r=n(11),a=n.n(r),c=n(51),i=n(17),s=n(23),u=n(24),l=n(26),p=n(25),b=n(27),d=n(1),f=n(0),h=n.n(f),j=n(12),m=n.n(j),x=0,O=h.a.createContext(null),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={stack:[]},n.push=function(){var e=Object(i.a)(a.a.mark(function e(t,o){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=x++,e.abrupt("return",new Promise(function(e,a){n.setState(function(n){var a=n.stack;return{stack:[].concat(Object(c.a)(a),[{id:r,Component:t,props:o,resolve:e,reject:function(){return e(null)}}])}})}).then(function(e){return setTimeout(function(){n.removeModal(r)},0),e}));case 2:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.pop=function(e){var t=n.state.stack;t[t.length-1].resolve(e)},n.removeModal=function(e){n.setState(function(t){return{stack:t.stack.filter(function(t){return t.id!==e})}})},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"getChildContext",value:function(){return{modalProvider:this}}},{key:"render",value:function(){var e=this,t=this.state.stack,n=this.props.children,r=t.map(function(t){var n=t.id,r=t.Component,a=t.resolve,c=t.reject,i=t.props;return Object(d.jsx)(r,Object(o.a)({},i,{modalProvider:e,key:n,show:!0,isOpen:!0,onCancel:c,onDone:a}))});return Object(d.jsx)(O.Provider,{value:this},n,r)}}]),t}(h.a.Component);v.childContextTypes={client:m.a.object.isRequired},v.childContextTypes={modalProvider:m.a.object.isRequired},t.b=v},69:function(e,t,n){"use strict";var o=n(19),r=n.n(o);n(82),n(54);r.a.initializeApp({apiKey:"AIzaSyBH1fhCdn4SZqakYWM_aHc2wTvNr7f5AUU",authDomain:"snapreport.firebaseapp.com",databaseURL:"https://snapreport.firebaseio.com",projectId:"snapreport",storageBucket:"snapreport.appspot.com",messagingSenderId:"763644300967",appId:"1:763644300967:web:8e8aff3149b7fc8d"}),t.a=r.a},74:function(e,t,n){e.exports=n(98)},79:function(e,t,n){},81:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),a=n(46),c=n.n(a),i=n(105),s=(n(79),n(80),n(81),n(69),n(21)),u=n(37),l=n.n(u),p=n(35),b=n(14),d=n(22),f=n(49),h=n(11),j=n.n(h),m=n(17),x=n(23),O=n(24),v=n(26),g=n(25),w=n(27);function k(e){return function(t){function n(e){var t;return Object(x.a)(this,n),(t=Object(v.a)(this,Object(g.a)(n).call(this,e))).state={component:null},t}return Object(w.a)(n,t),Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(j.a.mark(function t(){var n,o;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,o=n.default,this.setState({component:o});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?Object(o.jsx)(e,this.props):"Loading"}}]),n}(r.Component)}var P=n(48),y=Object(d.createTheme)({overrides:{fontFamily:"Source Sans Pro",fontSize_base:"16px",boxShadow_2:"0 2px 4px 0 rgba(187, 187, 187, 0.2)",boxShadow_5:"0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)",SecondaryNav_backgroundColor_tabs:"#fff",SecondaryNav_paddingHorizontal:0,Text_color_h3:"#424852",FormFieldSecondaryText_color:"#8591a5",SecondaryNavItem_color_tabs:"#999",Dialog_zIndex:1500}}),S=l()()?p.b:p.a,C=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,1331))}),_=k(function(){return Promise.all([n.e(2),n.e(5),n.e(4),n.e(23)]).then(n.bind(null,1330))}),I=k(function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,1329))}),T=k(function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,1325))}),z=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,1326))}),A=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,1322))}),B=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,1312))}),D=k(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(21),n.e(22)]).then(n.bind(null,1327))}),M=k(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(6),n.e(17)]).then(n.bind(null,1324))}),N=k(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(19)]).then(n.bind(null,1313))}),q=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(20)]).then(n.bind(null,1323))}),E=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,1321))}),F=k(function(){return Promise.all([n.e(1),n.e(18)]).then(n.bind(null,1314))}),H=k(function(){return Promise.all([n.e(2),n.e(5),n.e(4),n.e(27)]).then(n.bind(null,1332))}),R=k(function(){return Promise.all([n.e(2),n.e(5),n.e(4),n.e(28)]).then(n.bind(null,1328))}),U=k(function(){return Promise.all([n.e(4),n.e(26)]).then(n.bind(null,1315))}),W=k(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1316))});var J=function(){var e=Object(P.a)(),t=Object(s.a)(e,2),n=!!t[0];return t[1]?null:Object(o.jsx)(d.ThemeProvider,{theme:y},Object(o.jsx)(S,null,Object(o.jsx)(f.b,null,Object(o.jsx)(b.d,null,!n&&l()()&&Object(o.jsx)(b.a,{exact:!0,from:"/",to:"/login"}),Object(o.jsx)(b.b,{component:C,exact:!0,path:"/"}),!n&&Object(o.jsx)(b.a,{from:"/settings",to:"/login?from=settings"}),!n&&Object(o.jsx)(b.a,{from:"/d",to:"/login"}),n&&Object(o.jsx)(b.a,{exact:!0,from:"/login",to:"/d"}),n&&Object(o.jsx)(b.a,{exact:!0,from:"/signup",to:"/d"}),n&&Object(o.jsx)(b.b,{component:D,exact:!0,path:"/"}),Object(o.jsx)(b.b,{component:_,path:"/docs"}),Object(o.jsx)(b.b,{component:D,exact:!0,path:"/d"}),Object(o.jsx)(b.b,{component:I,path:"/login"}),Object(o.jsx)(b.b,{component:T,path:"/signup"}),Object(o.jsx)(b.b,{component:A,path:"/r/:reportId"}),Object(o.jsx)(b.b,{component:z,path:"/workspace/:workspaceId"}),Object(o.jsx)(b.b,{component:F,path:"/editor/new"}),Object(o.jsx)(b.b,{component:E,path:"/editor/:cardId"}),Object(o.jsx)(b.b,{component:N,path:"/cards"}),Object(o.jsx)(b.b,{component:B,path:"/embed/:instanceId"}),Object(o.jsx)(b.b,{component:M,path:"/settings"}),Object(o.jsx)(b.b,{component:U,path:"/pricing"}),Object(o.jsx)(b.b,{component:W,path:"/apps"}),Object(o.jsx)(b.b,{component:H,path:"/privacy"}),Object(o.jsx)(b.b,{component:R,path:"/terms"}),Object(o.jsx)(b.b,{component:function(){return window.close(),null},path:"/oauth"}),Object(o.jsx)(b.b,{component:q,path:"/auth/:providerId"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a({dsn:"https://5e6f7a088550417cb5a530c75860c49e@sentry.io/1500430"}),c.a.render(Object(o.jsx)(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[74,9,16]]]);
//# sourceMappingURL=main.a5d98155.chunk.js.map