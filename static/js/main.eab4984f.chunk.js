(this["webpackJsonpget-users-from-api-react"]=this["webpackJsonpget-users-from-api-react"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(5),r=s.n(n),a=(s(11),s(3)),i=s.n(a),j=s(6),u=s(4),l=(s(13),s(14),s(0)),o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"loader"})})})},d=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(!1),a=Object(u.a)(r,2),d=a[0],b=a[1],h=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),"https://reqres.in/api/users?page=1",e.next=4,fetch("https://reqres.in/api/users?page=1");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n(c.data),b(!1),console.log(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("span",{children:"GetUsersThroughAPI"}),Object(l.jsx)("button",{onClick:h,children:"Get Users"})]}),Object(l.jsx)("header",{className:"App-header",children:Object(l.jsxs)("ul",{className:"card-container",children:[d&&Object(l.jsx)(o,{}),s.map((function(e){e.id;var t=e.email,s=e.first_name,c=e.last_name,n=e.avatar;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:n,alt:s}),Object(l.jsxs)("h4",{children:[s," ",c]}),Object(l.jsx)("p",{className:"title",children:t})]})})}))]})})]})};r.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eab4984f.chunk.js.map