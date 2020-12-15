(this.webpackJsonpcovidwebapp=this.webpackJsonpcovidwebapp||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),r=t.n(c),s=(t(84),t(85),t(75)),o=t(7),i=t(128),m=t(129),u=t(127);function d(e){return console.log("/covid-19-webapp"),l.a.createElement("div",null,l.a.createElement(i.a,{bg:"dark",variant:"dark",className:"nav-header"},l.a.createElement(i.a.Brand,{href:"/",style:{fontFamily:"sans-serif"}},e.name),l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,{href:"/covid-19-webapp",className:"tabs-section"},"Home"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/continents",className:"tabs-section"},"Continents"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/countries",className:"tabs-section"},"Countries"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/news",className:"tabs-section"},"News"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/county",className:"tabs-section"},"Local County Info"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/usstates",className:"tabs-section"},"US States"),l.a.createElement(m.a.Link,{href:"/covid-19-webapp/#/testing-sites",className:"tabs-section"},"Testing Sites")),l.a.createElement(u.a,{inline:!0},l.a.createElement(m.a.Link,{href:"/about",className:"tabs-section"},"About"))))}var E=t(5),b=t(130);function v(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"card-pos-death",style:{}},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,e.title)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle"},"+Today: ",e.posVal),l.a.createElement(b.a.Text,{className:"covid-counts"},"Cases: ",e.content))))}function h(e){return l.a.createElement("div",null,l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:e.image}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,e.name),l.a.createElement(b.a.Text,null,e.continent))))}function p(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"card-pos-death",style:{}},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,e.title)),l.a.createElement(b.a.Text,{className:"covid-counts"},e.name1," ",e.cont1),l.a.createElement(b.a.Text,{className:"covid-counts"},e.name2," ",e.cont2))))}function f(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"card-News"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h4",null,e.obj.title)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"green"}},e.obj.description),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"blue"}},"Author: ",e.obj.author),l.a.createElement(b.a.Text,{className:"covid-counts"},l.a.createElement("a",{href:e.obj.url},"Read More ",">>")))))}var y=t(124),C=t(125),g=t(70);function N(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"card-tab-header"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,e.title)))))}var S=t(6),j=t.n(S),x=t(24),O=t.n(x),w=t(32),A=t.n(w),M=t(71),T=t(33),k=t.n(T),D=t(34),I=t.n(D),L=t(111),P=new L({Florida:"FL",Texas:"TX","New Jersey":"NJ",California:"CA","New York":"NY",Alabama:"AL",Alaska:"AK",Arkansas:"AR",Arizona:"AZ",Colorado:"CO",Connecticut:"CT",Delaware:"DE","District of Columbia":"DC",Georgia:"GA",Hawaii:"HI",Idaho:"ID",Illinois:"IL",Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Maine:"ME",Maryland:"MD",Massachusetts:"MA",Michigan:"MI",Minnesota:"MN",Mississippi:"MS",Missouri:"MO",Montana:"MT",Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Mexico":"NM","North Carolina":"NC","North Dakota":"ND",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Utah:"UT",Vermont:"VT",Virginia:"VA",Washington:"WA","West Virginia":"WV",Wisconsin:"WI",Wyoming:"WY"}),B=new L({"North America":"NA",Asia:"AS","South America":"SA","Australia/Oceania":"AU",Europe:"EU",Africa:"AF"}),_=P;O.a.fcRoot(A.a,M.a,k.a,I.a);var F=[],R={type:"world",width:"700",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Continents Total covid-19 Cases",subcaption:"Asia(AS)North America(NA)South America(SA)Australia(AU)Europe(EU)Africa(AF)",numbersuffix:"",includevalueinlabels:"0",labelsepchar:": ",entityFillHoverColor:"#FFF9C4",theme:"fusion"},colorrange:{minvalue:"0",code:"#FFE0B2",gradient:"1",color:[{minvalue:"10000.0",maxvalue:"50000.0",color:"#96d674"},{minvalue:"50000.0",maxvalue:"150000.0",color:"#0f4a0f"},{minvalue:"150000.0",maxvalue:"500000.0",color:"#0f4a2d"},{minvalue:"500000.0",maxvalue:"1000000.0",color:"#097572"},{minvalue:"1000000.0",maxvalue:"5000000.0",color:"#090c4a"},{minvalue:"5000000.0",maxvalue:"10000000.0",color:"#af74e3"},{minvalue:"10000000.0",maxvalue:"12500000.0",color:"#e37474"},{minvalue:"12500000.0",maxvalue:"15000000.0",color:"#c22d0c"},{minvalue:"15000000.0",maxvalue:"20000000.0",color:"#9e1f03"}]},data:F}};function V(){var e=Object(n.useState)({}),a=Object(E.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/continents?yesterday=true").then((function(e){c(e.data)}))}),[]),0!==Object.keys(t).length&&0===F.length&&t.map((function(e){console.log(e.continent),F.push({ID:B.get(e.continent),value:e.cases,showLabel:"1"})})),0===F.length&&(R.dataSource.data=F),l.a.createElement(O.a,R)}var U=t(72);O.a.fcRoot(A.a,U.a,k.a,I.a);var G=[],W={type:"USA",width:"700",height:"400",dataFormat:"json",dataSource:{chart:{caption:"StateWise Covid Cases",subcaption:" 1955-2015",numbersuffix:"",includevalueinlabels:"0",labelsepchar:": ",entityFillHoverColor:"#FFF9C4",theme:"fusion"},colorrange:{minvalue:"0",code:"#FFE0B2",gradient:"1",color:[{minvalue:"50000.0",maxvalue:"100000.0",color:"#FFD74D"},{minvalue:"100000.0",maxvalue:"500000.0",color:"#FB8C00"},{minvalue:"500000.0",maxvalue:"1000000.0",color:"#E65100"},{minvalue:"1000000.0",maxvalue:"1500000.0",color:"#fb0000"}]},data:G}};function K(){var e=Object(n.useState)({}),a=Object(E.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/states").then((function(e){c(e.data)}))}),[]),0!==Object.keys(t).length&&0===G.length&&t.map((function(e){G.push({Label:e.state,ID:_.get(e.state),value:e.cases,showLabel:"1"})})),0===G.length&&(W.dataSource.data=G),l.a.createElement(O.a,W)}var z=function(){var e,a,t,c,r,s,o,i,m,u=Object(n.useState)({totalCases:{},usCases:{}}),d=Object(E.a)(u,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){!function(){var e=j.a.get("https://disease.sh/v3/covid-19/all?yesterday=true"),a=j.a.get("https://disease.sh/v3/covid-19/countries/United%20States?yesterday=true&strict=true");j.a.all([e,a]).then(j.a.spread((function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];h({totalCases:a[0].data,usCases:a[1].data})}))).catch((function(e){console.log(e)}))}()}),[]),0!==Object.keys(b.totalCases).length&&(console.log(b.totalCases),e=l.a.createElement(v,{title:"Positive Cases",content:b.totalCases.cases,posVal:b.totalCases.todayCases}),a=l.a.createElement(v,{title:"Death Cases",content:b.totalCases.deaths,posVal:b.totalCases.todayDeaths}),r=l.a.createElement(v,{title:"Recovery Cases",content:b.totalCases.recovered,posVal:b.totalCases.todayRecovered}),o=l.a.createElement(p,{title:"Cases Status",name1:"Active:",cont1:b.totalCases.active,name2:"Critical:",cont2:b.totalCases.critical}),i=l.a.createElement(p,{title:"Per Million Cases Counts",name2:"Cases/Million:",name1:"Deaths/Million:",cont1:b.totalCases.deathsPerOneMillion,cont2:b.totalCases.casesPerOneMillion}),m=l.a.createElement(p,{title:"Test Counts",name2:"Test/Million:",name1:"Tests:",cont1:b.totalCases.tests,cont2:b.totalCases.testsPerOneMillion})),0!==Object.keys(b.usCases).length&&(t=l.a.createElement(v,{title:"Positive Cases",content:b.usCases.cases,posVal:b.usCases.todayCases}),c=l.a.createElement(v,{title:"Death Cases",content:b.usCases.deaths,posVal:b.usCases.todayDeaths}),s=l.a.createElement(v,{title:"Recovery Cases",content:b.usCases.recovered,posVal:b.usCases.todayRecovered})),l.a.createElement("div",null,console.log("Hello there! wtf"),l.a.createElement(y.a,{fluid:!0},l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement(N,{title:"Global Covid-19 Data"}))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"}," ",e," "),l.a.createElement(g.a,{xs:"12",md:"4"}," ",a),l.a.createElement(g.a,{xs:"12",md:"4"}," ",r)),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"}," ",o," "),l.a.createElement(g.a,{xs:"12",md:"4"}," ",i),l.a.createElement(g.a,{xs:"12",md:"4"}," ",m)),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement(N,{title:"United States Covid-19 Data"}))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"}," ",t," "),l.a.createElement(g.a,{xs:"12",md:"4"}," ",c),l.a.createElement(g.a,{xs:"12",md:"4"},s," ")),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{md:"6",lg:"6",xs:"12"},l.a.createElement(V,null)),l.a.createElement(g.a,{md:"6",lg:"6",xs:"12"},l.a.createElement(K,null))),l.a.createElement("br",null)))};function H(){var e=l.a.createElement("a",{href:"/vaccine-news",style:{textDecoration:"None"}},"Vaccine"),a=Object(n.useState)([]),t=Object(E.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){j.a.get("https://newsapi.org/v2/everything?q=COVID+vaccine+today&sortBy=publishedAt&apiKey=c70b84aa4fde411f808f50858fff1da2&pageSize=100&page=1").then((function(e){r(e.data.articles)}))}),[]),l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"6",lg:"6"},l.a.createElement("center",null,l.a.createElement(N,{title:"Covid-19 News"}))),l.a.createElement(g.a,{xs:"12",md:"6",lg:"6"},l.a.createElement("center",null,l.a.createElement(N,{title:e})))),l.a.createElement("br",null),l.a.createElement(C.a,null,c.map((function(e,a){return l.a.createElement(g.a,{key:a,xs:"12",md:"12"},l.a.createElement(f,{obj:e}),l.a.createElement("br",null))})))))}var Y=t(126);function J(e){return l.a.createElement("div",null,l.a.createElement(b.a,{className:"continent-title"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,e.title)))))}function Z(){var e,a,t,c,r,s,o=Object(n.useState)(""),i=Object(E.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)({}),h=Object(E.a)(b,2),f=h[0],S=h[1],x=Object(n.useState)(!1),O=Object(E.a)(x,2),w=O[0],A=O[1],M=Object(n.useState)(!1),T=Object(E.a)(M,2),k=T[0],D=T[1];return Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/continents/North%20America?yesterday=true&strict=true").then((function(e){S(e.data)}))}),[]),0!==Object.keys(f).length&&(e=l.a.createElement(v,{title:"Positive Cases",content:f.cases,posVal:f.todayCases}),a=l.a.createElement(v,{title:"Death Cases",content:f.deaths,posVal:f.todayDeaths}),t=l.a.createElement(v,{title:"Recovery Cases",content:f.recovered,posVal:f.todayRecovered}),c=l.a.createElement(p,{title:"Cases Status",name1:"Active:",cont1:f.active,name2:"Critical:",cont2:f.critical}),r=l.a.createElement(p,{title:"Per Million Cases Counts",name2:"Cases/Million:",name1:"Deaths/Million:",cont1:f.deathsPerOneMillion,cont2:f.casesPerOneMillion}),s=l.a.createElement(p,{title:"Test Counts",name2:"Test/Million:",name1:"Tests:",cont1:f.tests,cont2:f.testsPerOneMillion})),l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement("center",null,l.a.createElement(N,{title:"Continent Data"})),l.a.createElement(u.a,{onSubmit:function(e){var a="https://disease.sh/v3/covid-19/continents/".concat(m,"?yesterday=true&strict=true");"Australia/Oceania"===m&&(a="https://disease.sh/v3/covid-19/continents/Australia%2FOceania?yesterday=true&strict=true"),j.a.get(a).then((function(e){S(e.data),A(!1)})).catch((function(e){A(!0),S({})})),e.preventDefault()},autoComplete:"off"},l.a.createElement(u.a.Group,{controlId:"formBasicPassword"},l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(u.a.Control,{className:"country-field",onChange:function(e){d(e.target.value)},onClick:function(){D(!0)},value:m,type:"text",placeholder:"Enter Continent Name"}),w&&l.a.createElement("div",{style:{color:"red"}},"Please provide a valid continent name."))),l.a.createElement("center",null,l.a.createElement(Y.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement("center",null,l.a.createElement(C.a,null,l.a.createElement(g.a,null,k&&l.a.createElement("div",{className:"autoContainer"},["Africa","Asia","Australia/Oceania","Europe","North America","South America"].filter((function(e){return e.toLowerCase().indexOf(m.toLowerCase())>-1})).map((function(e,a){return l.a.createElement("div",{onClick:function(){return a=e,D(!1),void d(a);var a},className:"option",key:a,tabIndex:"0"},e)})))))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(J,{title:f.continent})),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"},e),l.a.createElement(g.a,{xs:"12",md:"4"},a),l.a.createElement(g.a,{xs:"12",md:"4"},t)),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"},c),l.a.createElement(g.a,{xs:"12",md:"4"},r),l.a.createElement(g.a,{xs:"12",md:"4"},s)),l.a.createElement("br",null)))}var q=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Austrian Empire","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Bavaria","Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Brunswick and L\xfcneburg","Bulgaria","Burma","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Central American Federation","Chad","Chile","China","Colombia","Comoros","Congo Free State, The","Costa Rica","Cote d\u2019Ivoire (Ivory Coast)","Croatia","Cuba","Cyprus","Czechia","Czechoslovakia","Congo","Denmark","Djibouti","Dominica","Dominican Republic","Duchy of Parma","Ecuador","Egypt","El Salvador","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Grand Duchy of Tuscany","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Hanover","Hanseatic Republics","Hesse","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Serbia","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Lew Chew (Loochoo)","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mecklenburg-Schwerin","Mecklenburg-Strelitz","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nassau","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North German Confederation","North German Union","North Macedonia","Norway","Oldenburg","Oman","Orange Free State","Pakistan","Palau","Panama","Papal States","Papua New Guinea","Paraguay","Peru","Philippines","Piedmont-Sardinia","Poland","Portugal","Qatar","Republic of Genoa","South Korea","Republic of the Congo","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Schaumburg-Lippe","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Texas","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Two Sicilies","Uganda","Ukraine","Union of Soviet Socialist Republics","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","W\xfcrttemberg","Yemen","Zambia","Zimbabwe"];function X(){var e,a,t,c,r,s,o=Object(n.useState)(""),i=Object(E.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)({}),f=Object(E.a)(b,2),S=f[0],x=f[1],O=Object(n.useState)("https://disease.sh/assets/img/flags/us.png"),w=Object(E.a)(O,2),A=w[0],M=w[1],T=Object(n.useState)(!1),k=Object(E.a)(T,2),D=k[0],I=k[1],L=Object(n.useState)(!1),P=Object(E.a)(L,2),B=P[0],_=P[1];Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/countries/United%20States?yesterday=true&strict=true").then((function(e){x(e.data)}))}),[]);0!==Object.keys(S).length&&(e=l.a.createElement(v,{title:"Positive Cases",content:S.cases,posVal:S.todayCases}),a=l.a.createElement(v,{title:"Death Cases",content:S.deaths,posVal:S.todayDeaths}),t=l.a.createElement(v,{title:"Recovery Cases",content:S.recovered,posVal:S.todayRecovered}),c=l.a.createElement(p,{title:"Cases Status",name1:"Active:",cont1:S.active,name2:"Critical:",cont2:S.critical}),r=l.a.createElement(p,{title:"Per Million Cases Counts",name2:"Cases/Million:",name1:"Deaths/Million:",cont1:S.deathsPerOneMillion,cont2:S.casesPerOneMillion}),s=l.a.createElement(p,{title:"Test Counts",name2:"Test/Million:",name1:"Tests:",cont1:S.tests,cont2:S.testsPerOneMillion}));return l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement("center",null,l.a.createElement(N,{title:"Country Data"})),l.a.createElement(u.a,{onSubmit:function(e){j.a.get("https://disease.sh/v3/covid-19/countries/".concat(m,"?yesterday=true&strict=true")).then((function(e){x(e.data),M(e.data.countryInfo.flag),I(!1)})).catch((function(e){console.log(e),I(!0),x({}),M("")})),console.log(S),e.preventDefault()},autoComplete:"off"},l.a.createElement(u.a.Group,{controlId:"formBasicPassword"},l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(u.a.Control,{className:"country-field",onClick:function(){return _(!0)},onChange:function(e){d(e.target.value)},type:"text",value:m,placeholder:"Enter Country Name"}),D&&l.a.createElement("div",{style:{color:"red"}},"Please provide a valid country name."))),l.a.createElement("center",null,l.a.createElement(Y.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement("center",null,l.a.createElement(C.a,null,l.a.createElement(g.a,null,B&&l.a.createElement("div",{className:"autoContainer"},q.filter((function(e){return e.toLowerCase().indexOf(m.toLowerCase())>-1})).map((function(e,a){return l.a.createElement("div",{onClick:function(){return d(e),void _(!1)},className:"option",key:a,tabIndex:"0"},e)})))))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(h,{name:S.country,continent:S.continent,image:A})),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"},e),l.a.createElement(g.a,{xs:"12",md:"4"},a),l.a.createElement(g.a,{xs:"12",md:"4"},t)),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"4"},c),l.a.createElement(g.a,{xs:"12",md:"4"},r),l.a.createElement(g.a,{xs:"12",md:"4"},s)),l.a.createElement("br",null)))}var Q={florida:"FL",newjersey:"NJ",california:"CA",texas:"TX",newyork:"NY",connecticut:"CT",ohio:"OH",georgia:"GA",northcarolina:"NC",southcarolina:"SC",missouri:"MO",alabama:"AL",arizona:"AZ",alaska:"AK",arkansas:"AK",colorado:"CO",delaware:"DE",districtofcolumbia:"DC",hawaii:"HI",idaho:"ID",illinois:"IL",indiana:"IN",iowa:"IA",kansas:"KS",kentucky:"KY",louisiana:"LA",maine:"ME",maryland:"MD",massachusetts:"MA",michigan:"MI",minnesota:"MN",mississippi:"MS",montana:"MT",nebraska:"NE",nevada:"NV",newhampshire:"NH",newmexico:"NM",northdakota:"ND",oklahoma:"OK",oregon:"OR",pennsylvania:"PA",rhodeisland:"RI",southdakota:"SD",tennessee:"TN",utah:"UT",vermont:"VT",virginia:"VA",washington:"WA",westvirginia:"WV",wisconsin:"WI",wyoming:"WY"},$=["Alabama","Alaska","Arizona","Arkansas","California","connecticut","Colorado","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Missouri","Mississippi","Montana","Nebraska","Nevada","New Hampshire","New Mexico","New Jersey","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","Westvirginia","Wisconsin","Wyoming"],ee=t(18),ae=t(19),te=function(e){return l.a.createElement(ee.a,{collapsed:!0,duration:800,render:function(a){var t=a.onToggle,n=a.setCollapsibleElement,c=a.progress;return l.a.createElement("div",{className:"my-collapsible"},l.a.createElement(b.a,{className:"card-News"},l.a.createElement(b.a.Body,{className:"vaccine-Card"},l.a.createElement("center",null,l.a.createElement(b.a.Title,null,l.a.createElement("h4",null,e.obj.county)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"red",fontWeight:"bolder"}},e.obj.state),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"#bb2205",fontWeight:"bolder"}},"+ Cases Today: ",e.obj.actuals.newCases),l.a.createElement(b.a.Text,{className:"covid-counts",style:{color:"green",fontWeight:"bolder"}},"Cases: ",e.obj.actuals.cases),l.a.createElement(b.a.Text,{className:"covid-counts",style:{color:"green",fontWeight:"bolder"}},"Deaths: ",e.obj.actuals.deaths)))),l.a.createElement("button",{className:"my-collapsible__toggle",onClick:t},l.a.createElement("label",{style:{fontSize:"20px",color:"blue",fontWeight:"bolder"}},"Details"),l.a.createElement(ae.a,{style:{fontSize:"25px",color:"blue"}})),l.a.createElement("div",{className:"my-collapsible__content",ref:n},l.a.createElement("div",{className:"my-collapsible__content-inner",style:{transform:"translateY(".concat(Math.round(20*(-1+c)),"px)")}},l.a.createElement(b.a.Text,{className:"state-covid-counts"},"Test Positivity Ratio: ",e.obj.metrics.testPositivityRatio),l.a.createElement(b.a.Text,{className:"state-covid-counts"},"Case Density: ",e.obj.metrics.caseDensity),l.a.createElement(b.a.Text,{className:"state-covid-counts"},"Infection Rate: ",e.obj.metrics.infectionRate),l.a.createElement(b.a.Text,{className:"state-covid-counts"},"Hospital Beds Capacity: ",e.obj.actuals.hospitalBeds.capacity),l.a.createElement(b.a.Text,{className:"state-covid-counts"},"ICU Beds Capacity: ",e.obj.actuals.icuBeds.capacity),l.a.createElement(b.a.Text,{className:"state-covid-counts"},"Last Updated Date: ",e.obj.lastUpdatedDate))))}})};function ne(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({}),s=Object(E.a)(r,2),o=s[0],i=s[1],m=Object(n.useState)([]),d=Object(E.a)(m,2),b=d[0],v=d[1],h=Object(n.useState)(!1),p=Object(E.a)(h,2),f=p[0],S=p[1],x=Object(n.useState)(!1),O=Object(E.a)(x,2),w=O[0],A=O[1],M=Object(n.useRef)(null);Object(n.useEffect)((function(){j.a.get("https://api.covidactnow.org/v2/counties.json?apiKey=c50a0970b11e4e5698159f28a81e52e3").then((function(e){i(e.data)}))}),[]),Object(n.useEffect)((function(){return document.addEventListener("mousedown",T),function(){console.log("removed"),document.removeEventListener("mousedown",T)}}),[M]);var T=function(e){console.log("mousedown",M.current.contains(e.target)),M.current&&!M.current.contains(e.target)&&A(!1)};return l.a.createElement("div",{ref:M},l.a.createElement(y.a,{fluid:!0},l.a.createElement("center",null,l.a.createElement(N,{title:"County Covid-19 Data"})),l.a.createElement("br",null),l.a.createElement(u.a,{onSubmit:function(e){var a=[];o.map((function(e){var n=t.replaceAll(" ","").toLowerCase();n in Q&&Q[n]===e.state&&a.push(e)})),0===a.length?S(!0):S(!1),v(a),e.preventDefault()},autoComplete:"off"},l.a.createElement(u.a.Group,{controlId:"formBasicPassword"},l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(u.a.Control,{className:"country-field",onChange:function(e){c(e.target.value)},onClick:function(){A(!0)},value:t,type:"text",placeholder:"Enter State Name"}),f&&l.a.createElement("div",{style:{color:"red"}},"Please provide a valid US state name."))),l.a.createElement("center",null,l.a.createElement(Y.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement("center",null,l.a.createElement(C.a,null,l.a.createElement(g.a,null,w&&l.a.createElement("div",{className:"autoContainer"},$.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1})).map((function(e,a){return l.a.createElement("div",{className:"option",onClick:function(){return c(e),void A(!1)},key:a,tabIndex:"0"},e)})))))),l.a.createElement("br",null),l.a.createElement(C.a,null,b.map((function(e,a){return l.a.createElement(g.a,{key:a,xs:"12",md:"3"},l.a.createElement(te,{obj:e}),l.a.createElement("br",null))})))))}var le=function(e){return l.a.createElement(ee.a,{collapsed:!0,duration:800,render:function(a){var t=a.onToggle,n=a.setCollapsibleElement,c=a.progress;return l.a.createElement("div",{className:"my-collapsible"},l.a.createElement(b.a,{className:"card-pos-death"},l.a.createElement(b.a.Body,{className:"state-Card"},l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,e.obj.state)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle"},"+Today: ",e.obj.todayCases),l.a.createElement(b.a.Text,{className:"covid-counts"},"Cases: ",e.obj.cases))),l.a.createElement("button",{className:"my-collapsible__toggle",onClick:t},l.a.createElement(ae.a,{style:{fontSize:"25px",color:"blue"}})),l.a.createElement("div",{className:"my-collapsible__content",ref:n},l.a.createElement("div",{className:"my-collapsible__content-inner",style:{transform:"translateY(".concat(Math.round(20*(-1+c)),"px)")}},l.a.createElement("p",{className:"state-covid-counts"},"Active: ",e.obj.active),l.a.createElement("p",{className:"state-covid-counts"},"Deaths: ",e.obj.deaths),l.a.createElement("p",{className:"state-covid-counts"},"Today Deaths: ",e.obj.todayDeaths),l.a.createElement("p",{className:"state-covid-counts"},"Cases/Million: ",e.obj.casesPerOneMillion),l.a.createElement("p",{className:"state-covid-counts"},"Deaths/Million: ",e.obj.deathsPerOneMillion),l.a.createElement("p",{className:"state-covid-counts"},"Recovered: ",e.obj.recovered),l.a.createElement("p",{className:"state-covid-counts"},"Tests: ",e.obj.tests),l.a.createElement("p",{className:"state-covid-counts"},"Tests/Million: ",e.obj.testsPerOneMillion),l.a.createElement("p",{className:"state-covid-counts"},"Population: ",e.obj.population))))}})};function ce(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/states?yesterday=true").then((function(e){c(e.data)}))}),[]),l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement("center",null,l.a.createElement(N,{title:"United States State Data"})),l.a.createElement("br",null),l.a.createElement(C.a,null,t.map((function(e,a){return l.a.createElement(g.a,{key:a,xs:"12",md:"3"},l.a.createElement(le,{obj:e}),l.a.createElement("br",null))})))))}var re=function(e){return l.a.createElement(ee.a,{collapsed:!0,duration:800,render:function(a){var t=a.onToggle,n=a.setCollapsibleElement,c=a.progress;return l.a.createElement("div",{className:"my-collapsible"},l.a.createElement(b.a,{className:"card-pos-death"},l.a.createElement(b.a.Body,{className:"state-Card"},l.a.createElement(b.a.Title,null,l.a.createElement("h3",null,e.obj.name)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"red",fontWeight:"bolder"}},e.obj.physical_address[0].state_province),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"Address: ",e.obj.physical_address[0].address_1),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"City: ",e.obj.physical_address[0].city),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"ZIP Code: ",e.obj.physical_address[0].postal_code),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"Phone No: ",e.phone),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"Days: Opens Everyday"),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"Opens At: ",e.opens),l.a.createElement(b.a.Text,{className:"covid-counts-site"},"Closes At: ",e.closes))),l.a.createElement("button",{className:"my-collapsible__toggle",onClick:t},l.a.createElement(ae.a,{style:{fontSize:"25px",color:"blue"}})),l.a.createElement("div",{className:"my-collapsible__content",ref:n},l.a.createElement("div",{className:"my-collapsible__content-inner",style:{transform:"translateY(".concat(Math.round(20*(-1+c)),"px)")}},l.a.createElement("p",{className:"state-covid-counts"},"Active: ",e.obj.description))))}})};function se(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),s=Object(E.a)(r,2),o=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(E.a)(m,2),b=d[0],v=d[1],h=Object(n.useState)(!1),p=Object(E.a)(h,2),f=p[0],S=p[1],x=Object(n.useRef)(null);Object(n.useEffect)((function(){return document.addEventListener("mousedown",O),function(){console.log("removed"),document.removeEventListener("mousedown",O)}}),[x]);var O=function(e){console.log("mousedown",x.current.contains(e.target)),x.current&&!x.current.contains(e.target)&&S(!1)};return l.a.createElement("div",{ref:x},l.a.createElement(y.a,{fluid:!0},l.a.createElement("center",null,l.a.createElement(N,{title:"State Covid-19 Testing Sites"})),l.a.createElement("br",null),l.a.createElement(u.a,{onSubmit:function(e){j.a.post("http://127.0.0.1:5000/testing",{state:t.toLowerCase().replaceAll(" ","")}).then((function(e){void 0===e.data.Item?(v(!0),i({})):(i(e.data.Item.data),v(!1))})),e.preventDefault()},autoComplete:"off"},l.a.createElement(u.a.Group,{controlId:"formBasicPassword"},l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(u.a.Control,{className:"country-field",value:t,onClick:function(){return S(!0)},onChange:function(e){c(e.target.value)},type:"text",oncl:!0,placeholder:"Enter State Name"}),b&&l.a.createElement("div",{style:{color:"red"}},"Please Provide correct state name."))),l.a.createElement("center",null,l.a.createElement(Y.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement("center",null,l.a.createElement(C.a,null,l.a.createElement(g.a,null,f&&l.a.createElement("div",{className:"autoContainer"},$.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1})).map((function(e,a){return l.a.createElement("div",{className:"option",onClick:function(){return c(e),void S(!1)},key:a,tabIndex:"0"},e)})))))),l.a.createElement("br",null),l.a.createElement(C.a,null,!b&&o.map((function(e,a){var t="",n="",c="";return e.regular_schedule.length>0&&(t=e.regular_schedule[0].opens_at,n=e.regular_schedule[0].closes_at),e.phones.length>0&&(c=e.phones[0].number),0===e.physical_address.length&&(e.physical_address=[{state_province:"",address_1:"",postal_code:""}]),l.a.createElement(g.a,{key:a,xs:"12",md:"4"},l.a.createElement(re,{obj:e,phone:c,opens:t,closes:n}),l.a.createElement("br",null))})))))}var oe=function(e){return l.a.createElement(ee.a,{collapsed:!0,duration:800,render:function(a){var t=a.onToggle,n=a.setCollapsibleElement,c=a.progress;return l.a.createElement("div",{className:"my-collapsible"},l.a.createElement(b.a,{className:"card-News"},l.a.createElement(b.a.Body,{className:"vaccine-Card"},l.a.createElement(b.a.Title,null,l.a.createElement("h4",null,e.obj.candidate)),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"green"}},"Mechanism: ",e.obj.mechanism),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle",style:{color:"blue"}},"Sponsors: ",e.obj.sponsors),l.a.createElement(b.a.Text,{className:"covid-counts"},l.a.createElement("label",{style:{fontWeight:"bolder"}},"Trail Phase: ",e.obj.trialPhase)))),l.a.createElement("button",{className:"my-collapsible__toggle",onClick:t},l.a.createElement("label",{style:{fontSize:"20px",color:"blue",fontWeight:"bolder"}},"Details"),l.a.createElement(ae.a,{style:{fontSize:"25px",color:"blue"}})),l.a.createElement("div",{className:"my-collapsible__content",ref:n},l.a.createElement("div",{className:"my-collapsible__content-inner",style:{transform:"translateY(".concat(Math.round(20*(-1+c)),"px)")}},l.a.createElement("p",{className:"state-covid-counts"},e.obj.details))))}})};function ie(){var e=l.a.createElement("a",{href:"/news",style:{textDecoration:"None"}},"Covid-19 News"),a=Object(n.useState)([]),t=Object(E.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){j.a.get("https://disease.sh/v3/covid-19/vaccine").then((function(e){r(e.data.data)}))}),[]),l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement(C.a,null,l.a.createElement(g.a,{xs:"12",md:"6",lg:"6"},l.a.createElement("center",null,l.a.createElement(N,{title:e}))),l.a.createElement(g.a,{xs:"12",md:"6",lg:"6"},l.a.createElement("center",null,l.a.createElement(N,{title:"Vaccine"})))),l.a.createElement("br",null),l.a.createElement(C.a,null,c.map((function(e,a){return l.a.createElement(g.a,{key:a,xs:"12",md:"4"},l.a.createElement(oe,{obj:e}),l.a.createElement("br",null))})))))}function me(){var e={fontFamily:"Montserrat, sans-serif",fontWeight:"bolder"};return l.a.createElement("div",null,l.a.createElement(y.a,{fluid:!0},l.a.createElement(C.a,null,l.a.createElement(g.a,{className:"about-heading"},l.a.createElement("center",null,l.a.createElement("h3",{style:e},"About this App")),l.a.createElement("div",{className:"about-app"},"This application is designed to track the covid-19 pandemic with the global as well as local data of United States. In addition to this feature, it also shows the current Covid-19 news with the status of different vaccines being developed across the globe. As for any United States resident, this application gives a clearer picture about the pandemic in different states, counties and the testing centers across the states."))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,{style:e},l.a.createElement("center",null,l.a.createElement("h3",null,"Contributors")))),l.a.createElement("br",null),l.a.createElement(C.a,null,l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"card-pos-death",style:{}},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,"Mohammad Asif Khan")),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle"},"Miami,FL"),l.a.createElement(b.a.Text,{className:"covid-counts"},"Florida International University")))),l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"card-pos-death",style:{}},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,"Mario Jacas Alfonso")),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle"},"Miami,FL"),l.a.createElement(b.a.Text,{className:"covid-counts"},"Florida International University")))),l.a.createElement(g.a,null,l.a.createElement(b.a,{className:"card-pos-death",style:{}},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,l.a.createElement("h2",null,"Daniela Garcia")),l.a.createElement(b.a.Subtitle,{className:"mb-2 card-subtitle"},"Miami,FL"),l.a.createElement(b.a.Text,{className:"covid-counts"},"Florida International University")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",null,l.a.createElement("center",null,l.a.createElement("p",{style:e},"\xa9 covid-19app.com"))))}var ue=function(){return l.a.createElement(s.a,{basename:"/covid-19-webapp"},l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(d,{name:"Covid-19 App"})),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,render:function(e){return l.a.createElement("div",null,l.a.createElement(z,null))}}),l.a.createElement(o.a,{path:"/news",exact:!0,component:H}),l.a.createElement(o.a,{path:"/countries",exact:!0,component:X}),l.a.createElement(o.a,{path:"/continents",exact:!0,component:Z}),l.a.createElement(o.a,{path:"/county",exact:!0,component:ne}),l.a.createElement(o.a,{path:"/usstates",exact:!0,component:ce}),l.a.createElement(o.a,{path:"/testing-sites",exact:!0,component:se}),l.a.createElement(o.a,{path:"/vaccine-news",exact:!0,component:ie}),l.a.createElement(o.a,{path:"/about",exact:!0,component:me}))))};t(121),t(64);r.a.render(l.a.createElement("div",null,l.a.createElement(ue,null)),document.getElementById("root"))},79:function(e,a,t){e.exports=t(122)},84:function(e,a,t){},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.ef5165a2.chunk.js.map