(this.webpackJsonpxmile=this.webpackJsonpxmile||[]).push([[0],{20:function(e,t,r){},21:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r.n(o),s=r(7),a=r.n(s),n=(r(20),r(21),r(4)),i=r(14),d=r(8),l=r(1),u=function(e){var t=e.column,r=t.filterValue,o=t.setFilter;return Object(l.jsx)("input",{style:{borderRadius:"5px","&:focus":{outline:"none"}},placeholder:"Search",value:r||"",onChange:function(e){return o(e.target.value)}})},j=[{Header:"Id",Footer:"Id",accessor:"id",Filter:u},{Header:"Project",Footer:"Project",accessor:"project",Filter:u},{Header:"Course",Footer:"Course",accessor:"course",Filter:u},{Header:"Person",Footer:"Person",accessor:"person",Filter:u},{Header:"Email",Footer:"Email",accessor:"email",Filter:u},{Header:"Department",Footer:"Department",accessor:"department",Filter:u},{Header:"Location",Footer:"Location",accessor:"location",Filter:u},{Header:"Course Started Date",Footer:"Course Started Date",accessor:"courseStartedDate",Filter:u},{Header:"Opened Lessons Count",Footer:"Opened Lessons Count",accessor:"openedLessonsCount",Filter:u},{Header:"Completed Date",Footer:"Completed Date",accessor:"completedDate",Filter:u},{Header:"Completed Lessons Count",Footer:"Completed Lessons Count",accessor:"completedLessonsCount",Filter:u},{Header:"Total Lessons Count",Footer:"Total Lessons Count",accessor:"totalLessonsCount",Filter:u},{Header:"Have Not Started",Footer:"Have Not Started",accessor:"haveNotStarted",Filter:u},{Header:"Not On Schedule",Footer:"Not On Schedule",accessor:"notOnSchedule",Filter:u},{Header:"Have Started",Footer:"Have Started",accessor:"haveStarted",Filter:u},{Header:"Quiz Score",Footer:"Quiz Score",accessor:"quizScore",Filter:u},{Header:"Quiz Score Total",Footer:"Quiz Score Total",accessor:"quizScoreTotal",Filter:u},{Header:"Certificate Title",Footer:"Certificate Title",accessor:"certificateTitle",Filter:u}],b=r(11),p=r(34),F=r(33),O=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],s="https://xtramile.azure-api.net/stats/lukaszcoding?apiSecret=".concat("i34nvn324gdfg5");Object(o.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[s]);var a=Object(o.useMemo)((function(){return j}),[]),u=Object(d.useTable)({columns:a,data:r},d.useFilters,d.useGlobalFilter,d.useSortBy),O=u.getTableProps,h=u.getTableBodyProps,f=u.headerGroups,m=u.footerGroups,x=u.rows,S=u.prepareRow;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{bg:"dark",expand:"lg",responsive:!0,sticky:"top",children:Object(l.jsx)("h2",{style:{color:"#eee"},children:"XtraMile React Front-End Assignment"})}),Object(l.jsxs)(F.a,Object(n.a)(Object(n.a)({striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,variant:"dark",className:"justify-content-md-center",condensed:!0},O()),{},{children:[Object(l.jsx)("thead",{children:f.map((function(e){return Object(l.jsx)("tr",Object(n.a)(Object(n.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(l.jsxs)("th",Object(n.a)(Object(n.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(l.jsx)("div",{children:e.canFilter?e.render("Filter"):null}),Object(l.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(l.jsx)(b.b,{}):Object(l.jsx)(b.a,{}):""})]}))}))}))}))}),Object(l.jsx)("tbody",Object(n.a)(Object(n.a)({},h()),{},{children:x.map((function(e){return S(e),Object(l.jsx)("tr",Object(n.a)(Object(n.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(l.jsx)("td",Object(n.a)(Object(n.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(l.jsx)("tfoot",{children:m.map((function(e){return Object(l.jsx)("tr",Object(n.a)(Object(n.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(l.jsx)("td",Object(n.a)(Object(n.a)({},e.getFooterGroupProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})};r(29);var h=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(O,{})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,35)).then((function(t){var r=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),o(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.1417a893.chunk.js.map