(this["webpackJsonpdistraction-alternatives-lws"]=this["webpackJsonpdistraction-alternatives-lws"]||[]).push([[0],{15:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(8),i=n.n(a),s=(n(15),n(10)),c=n(6),l=n(7),d=n(1),o={0:"bg-red-600",1:"bg-red-400",2:"bg-red-200",3:"bg-gray-200",4:"bg-green-200",5:"bg-green-400",6:"bg-green-500",7:"bg-green-600",8:"bg-green-700",9:"bg-green-800","?":"bg-purple-600"};function g(e){function t(e){return Number.isFinite(e)?e<0?"-"+new Date(-1*e*1e3).toISOString().substr(11,5):new Date(1e3*e).toISOString().substr(11,5):"N/A"}var n=t(e.nh),r=t(e.dur);return Object(d.jsxs)("div",{className:"flex bg-gray-50 rounded-3xl shadow-md ml-1 mr-6 mt-3 mb-3 border-2 border-gray-50 max-w-xs",children:[Object(d.jsx)("div",{className:"flex flex-wrap h-auto text-center relative p-5 rounded-l-3xl content-evenly text-white font-black "+o[e.rating],children:Object(d.jsx)("div",{className:"text-4xl w-5",children:e.rating})}),Object(d.jsxs)("div",{className:"h-auto p-3 grid grid-rows-2 place-items-center h-40 w-64",children:[Object(d.jsx)("div",{className:"text-md font-light text-black max-w-sm px-1",children:e.name}),Object(d.jsx)("div",{className:"flex flex-auto text-gray-400 text-sm mt-2",children:Object(d.jsxs)("div",{class:"space-x-4 flex",children:[Object(d.jsxs)("div",{className:"bg-gray-100 rounded-full px-2 py-1",children:[Object(d.jsx)(c.a,{icon:l.b})," ",r]}),Object(d.jsxs)("div",{className:"bg-gray-100 rounded-full px-2 py-1",children:[Object(d.jsx)(c.a,{icon:l.a})," ",n]})]})})]})]})}var x=n(9),b=new(n.n(x).a)({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Activities");function u(e){var t=Object(r.useState)({}),n=Object(s.a)(t,2),a=n[0],i=n[1];function c(e){return Number.isFinite(e)||"string"==typeof e?e:"NaD"}return Object(r.useEffect)((function(){b.list({maxRecords:999,pageSize:100,view:"All (no hidden)",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(a),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(a),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-xl font-small text-black max-w-sm px-1",children:e.title}),Object(d.jsx)("div",{className:"grid grid-cols-1 overflow-auto max-w-screen-lg",children:a.length>0?a.filter((function(e){return!!e.fields.distraction_alternative})).filter((function(t){return t.fields.distraction_alternative.includes(e.category)})).filter((function(e){return e.fields.Name.length<100})).map((function(e){return Object(d.jsx)(g,{name:e.fields.Name,rating:e.fields.Rting_UL.toString(),nh:c(e.fields.Nh),dur:c(e.fields["Avg. duration"])},e.fields.Name)})):Object(d.jsx)("p",{children:"Fetching Data..."})})]})}var m=function(e){return Object(d.jsxs)("div",{className:"grid mx-auto max-w-screen-md grid-cols-2",children:[Object(d.jsx)(u,{title:"Relaxation",category:"Relaxation"}),Object(d.jsx)(u,{title:"Stimulation",category:"Stimulation"})]})};i.a.render(Object(d.jsx)(m,{tasks:[]}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9d1af4fd.chunk.js.map