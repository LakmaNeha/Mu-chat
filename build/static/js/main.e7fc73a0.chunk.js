(this["webpackJsonpmu-chat"]=this["webpackJsonpmu-chat"]||[]).push([[0],{51:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(22),o=n.n(r),s=(n(51),n(11)),i=n(24),l=n(17);n(54),n(55);l.a.initializeApp({apiKey:"AIzaSyBeyg6i516kxJsBvv4AzXS5hPAIJDN57GY",authDomain:"mu-chat-36c25.firebaseapp.com",projectId:"mu-chat-36c25",storageBucket:"mu-chat-36c25.appspot.com",messagingSenderId:"144402752533",appId:"1:144402752533:web:8272c882fc2934a8bdda1c"});var u=l.a.firestore(),j=l.a.firestore.FieldValue.serverTimestamp,d=l.a.auth(),b=(n(56),n.p+"static/media/appimg.f54cdccf.svg"),h=n(5);function m(){var e=Object(i.a)(d),t=Object(s.a)(e,1)[0];return console.log("user"+t),Object(h.jsxs)("div",{className:"loginContainer",children:[Object(h.jsx)("h1",{children:"Mu-chat"}),Object(h.jsx)("img",{className:"appimg",src:b,alt:"app-img"}),Object(h.jsx)("p",{children:"This is a chat app. As you can see the name of this chat app is Mu-chat, many of you are wondering what it means right?? If you are from telangana state, you would have known.  . Mu-chat means gossip , discussion ... it has many other similar meanings too, in our telangana slang. . Okay now let's dive in."}),Object(h.jsx)("button",{className:"loginbtn",onClick:function(){var e=new l.a.auth.GoogleAuthProvider;d.signInWithPopup(e)},children:"Sign-in with Google"})]})}var p=n(18),O=n.n(p),x=n(25),f=n(39);function v(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,r=c===d.currentUser.uid?"sent":"received";return console.log("authcurr"+d.currentUser),Object(h.jsxs)("div",{className:"message  ".concat(r," "),children:[Object(h.jsx)("img",{className:"round-picture",src:a,alt:"profile"}),Object(h.jsx)("p",{children:n})]})}var g=n(44);function N(e){var t=e.collectionName,n=u.collection("messages"),a=n.where("roomName","==",t),r=Object(f.a)(a,{idField:"id"}),o=Object(s.a)(r,1)[0];o&&o.sort((function(e,t){return e.createdAt-t.createdAt}));var i=Object(c.useState)(""),l=Object(s.a)(i,2),b=l[0],m=l[1],p=Object(c.useRef)();Object(c.useEffect)((function(){p.current.scrollIntoView({behavior:"smooth"})}));var N=function(){var e=Object(x.a)(O.a.mark((function e(c){var a,r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),0!==b.trim().length){e.next=4;break}e.next=9;break;case 4:return a=d.currentUser,r=a.uid,o=a.photoURL,e.next=7,n.add({text:b,roomName:t,createdAt:j(),uid:r,photoURL:o});case 7:m(""),p.current.scrollIntoView({behavior:"smooth"});case 9:console.log("authCurrentUser"+d.currentUser);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"scroll",children:[o&&o.map((function(e){return Object(h.jsx)(v,{message:e,photo:e.photoURL},e.id)})),Object(h.jsx)("span",{ref:p})]}),console.log("msg"+o),Object(h.jsxs)("form",{className:"msgform",onSubmit:N,children:[Object(h.jsx)("input",{className:"msginput",placeholder:"message...",value:b,onChange:function(e){return m(e.target.value)}}),Object(h.jsxs)("button",{className:"sendbtn",type:"submit",children:[" ",Object(h.jsx)(g.a,{})]})]})]})}var y=n(80),k=n(78);function w(e){var t=e.collectionName,n=e.setCollectionName,a=Object(c.useState)(!1),r=Object(s.a)(a,2),o=r[0],i=r[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],m=Object(c.useState)(null),p=Object(s.a)(m,2),f=p[0],v=p[1];Object(c.useEffect)((function(){u.collection("rooms").onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data();return t.id=e.id,t}));console.log(t),v(t)}))}),[]);var g=function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==d.trim().length){e.next=4;break}e.next=9;break;case 4:return console.log(d),e.next=7,u.collection("rooms").add({room:d});case 7:b(""),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:t?"hide":"backdrop",children:[Object(h.jsx)("h2",{style:{color:"white",textAlign:"center"},children:"create a new room"}),Object(h.jsx)("button",{className:"addbtn",onClick:function(){i(!0)},children:"+"}),o?Object(h.jsxs)("form",{className:"createForm",onSubmit:g,children:[Object(h.jsx)("input",{placeholder:"Group name...",value:d,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("button",{className:"cancelBtn",onClick:function(){i(!1)},children:"\u274c"}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)("button",{className:"saveBtn",type:"submit",children:"Save"})]})]}):null,Object(h.jsx)(y.a,{children:f.map((function(e,t){return Object(h.jsxs)("div",{onClick:function(){return function(e){n(e)}(e)},style:{cursor:"pointer"},children:[Object(h.jsx)("div",{className:"listOfRooms",children:e.room},t),Object(h.jsx)(k.a,{})]})}))})]}),console.log("collectionName"+t),console.log(f),t&&Object(h.jsx)(N,{collectionName:t})]}):Object(h.jsx)("div",{})}var C=n(42),S=n.n(C);function A(){return d.currentUser&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{style:{backgroundColor:"transparent",border:"none",outline:"none",padding:"1rem",cursor:"pointer"},onClick:function(){return d.signOut()},children:Object(h.jsx)(S.a,{style:{color:"white",fontSize:"xx-large"}})})})}var I=n(79),U=n(43),B=n.n(U);function R(e){var t=e.collectionName,n=e.setCollectionName;return Object(h.jsxs)("div",{children:[console.log("GoBack-collectionName"+t),Object(h.jsx)("button",{onClick:function(){n(null)},style:{backgroundColor:"transparent",border:"none",outline:"none",padding:"1rem",cursor:"pointer"},children:Object(h.jsx)(B.a,{style:{color:"white",fontSize:"xx-large"}})})]})}var z=function(){var e=Object(i.a)(d),t=Object(s.a)(e,1)[0],n=Object(c.useState)(null),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(h.jsxs)("div",{className:"App",children:[t?Object(h.jsx)("div",{children:Object(h.jsx)("header",{children:Object(h.jsxs)(I.a,{container:!0,justify:"space-between",children:[Object(h.jsxs)(I.a,{children:[r&&Object(h.jsx)(R,{style:{display:"inline"},collectionName:r,setCollectionName:o})," "]}),Object(h.jsx)(I.a,{children:Object(h.jsx)("h1",{children:"Mu-chat"})}),Object(h.jsx)(I.a,{children:Object(h.jsx)(A,{style:{display:"inline"}})})]})})}):null,t?Object(h.jsx)(w,{collectionName:r,setCollectionName:o}):Object(h.jsx)(m,{})]})};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e7fc73a0.chunk.js.map