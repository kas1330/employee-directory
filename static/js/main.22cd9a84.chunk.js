(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),a=n(4),o=n.n(a),l=n(13),i=n(14),j=n(17),h=n(16);var u=function(){return Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(c.jsx)("p",{className:"lead"})]})})},d=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search"}),Object(c.jsx)("input",{type:"text",value:e.inp,onChange:function(t){return e.searchFilterOnChange(t)}})]})},b=n(15),p=n.n(b),m={getRandEmpInfo:function(){return p.a.get("https://randomuser.me/api/?results=10&nat=us,gb,au")}};var O=function(e){return Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Age"})]})}),Object(c.jsxs)("tbody",{children:[console.log(e.emp),e.emp.length>0?e.emp.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{scope:"row",children:[Object(c.jsx)("img",{src:e.picture.thumbnail})," "]}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:e.cell}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob.age})]},e.id.value)})):Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"row",children:"1"})})]})]})},x=function(e){return Object(c.jsxs)("div",{children:[console.log(e.emp),Object(c.jsx)(O,{emp:e.emp})]})};var g=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("span",{className:"text-muted"})})})},f=(n(41),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employee:[],employeeSort:[],inputValue:""},e.searchFilterOnChange=function(t){console.log("OnChange running",t.target.value),e.setState({inputValue:t.target.value});var n=e.state.employee.filter((function(e){var n=e.name.first.toLowerCase(),c=e.name.last.toLowerCase();return n.includes(t.target.value.toLowerCase())||c.includes(t.target.value.toLowerCase())}));e.setState({employeeSort:n})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("component was born"),m.getRandEmpInfo().then((function(t){e.setState({employee:t.data.results,employeeSort:t.data.results})}))}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(d,{emp:this.state.employeeSort,inp:this.state.inputValue,searchFilterOnChange:this.searchFilterOnChange}),Object(c.jsx)(x,{emp:this.state.employeeSort}),";",Object(c.jsx)(g,{})]})}}]),n}(r.Component));o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.22cd9a84.chunk.js.map