"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13],{2013:(K,p,l)=>{l.r(p),l.d(p,{ExamplesModule:()=>O});var h=l(4238),c=l(177),f=l(1626),i=l(8089),I=l(7130),e=l(4438),L=l(4322);let G=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["examples"]],standalone:!1,decls:3,vars:0,consts:[["tagline","Examples"],[1,"main-content"]],template:function(t,s){1&t&&(e.nrm(0,"header-component",0),e.j41(1,"section",1),e.nrm(2,"router-outlet"),e.k0s())},dependencies:[h.n3,L.l],styles:[".with-sidebar[_ngcontent-%COMP%]{position:relative}.with-sidebar[_ngcontent-%COMP%]   .main-content-body[_ngcontent-%COMP%]{padding-left:16rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]{display:block;padding:0 1rem;margin-top:2rem;position:fixed;top:0;padding-top:290px;width:16rem;font-size:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:none;margin-bottom:1rem;font-weight:700}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1rem;list-style:none;margin-bottom:.875rem}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]{position:fixed;top:0}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar.scrolled[_ngcontent-%COMP%]   .back-top[_ngcontent-%COMP%]{display:block}.with-sidebar[_ngcontent-%COMP%]   .fixed-sidebar[_ngcontent-%COMP%]   .examples-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{font-weight:700}"]})}return a})(),g=(()=>{class a{data=[{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",status:"Active",passed:"Yes"},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",status:"Active",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",email:"Karley_Dach@jasper.info",status:"Active",passed:"Yes"},{id:7,name:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",status:"Inactive",passed:"No"},{id:8,name:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",status:"Active",passed:"Yes"},{id:9,name:"Glenna Reichert",email:"Chaim_McDermott@dana.io",status:"Active",passed:"No"},{id:10,name:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",status:"Inactive",passed:"No"},{id:11,name:"Nicholas DuBuque",email:"Rey.Padberg@rosamond.biz",status:"Active",passed:"Yes"},{id:12,name:"Chelsey Dietrichdottir",email:"Lucio_Hettinger@annie.ca",status:"Active",passed:"No"}];settings={columns:{id:{title:"ID",placeholder:"Prueba"},name:{title:"Full Name"},email:{title:"Email"},status:{title:"Status",filter:{type:"list",config:{selectText:"Show only...",list:["Inactive","Active"].map(n=>({value:n,title:n}))}}},passed:{title:"Passed",filter:{type:"checkbox",config:{true:"Yes",false:"No",resetText:"clear"}}}}};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["advanced-example-filters"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),b=(()=>{class a{data=[{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",companyName:"ACME Inc."},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",companyName:"Contoso Ltd."},{id:6,name:"Mrs. Dennis Schulist",email:"Karley_Dach@jasper.info",companyName:"ACME Inc."},{id:7,name:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",companyName:"Contoso Ltd."},{id:8,name:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",companyName:"ACME Inc."},{id:9,name:"Glenna Reichert",email:"Chaim_McDermott@dana.io",companyName:"Contoso Ltd."},{id:10,name:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",companyName:"ACME Inc."},{id:11,name:"Nicholas DuBuque",email:"Rey.Padberg@rosamond.biz",companyName:"Contoso Ltd."},{id:12,name:"Robert Parr",email:"robert.parr@awesomeinc.biz",companyName:"Awesome Inc."}];settings={actions:{add:!1,edit:!1,delete:!1},pager:{perPage:8},columns:{id:{title:"ID"},name:{title:"Full Name"},email:{title:"Email"},companyName:{title:"Company Name",filterFunction:(n,t)=>{if(t.length>0&&"-"===t[0]){const s=new RegExp(t.substring(1),"gi");return null===n.match(s)}{const s=new RegExp(t,"gi");return null!==n.match(s)}}}}};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["advanced-example-filter-function"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),C=(()=>{class a{data=[{id:4,name:"Patricia Lebsack",email:"Julianne.OConner@kory.org",passed:"Yes"},{id:5,name:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",email:"Karley_Dach@jasper.info",passed:"Yes"},{id:7,name:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",passed:"No"},{id:8,name:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",passed:"Yes"},{id:9,name:"Glenna Reichert",email:"Chaim_McDermott@dana.io",passed:"No"},{id:10,name:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",passed:"No"},{id:11,name:"Nicholas DuBuque",email:"Rey.Padberg@rosamond.biz",passed:"Yes"}];settings={hideable:!0,columns:{id:{title:"ID",placeholder:"Prueba"},name:{title:"Full Name"},email:{title:"Email",hide:!0},passed:{title:"Passed",filter:{type:"checkbox",config:{true:"Yes",false:"No",resetText:"clear"}}}}};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["column-hide-example"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),F=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["filter-examples"]],standalone:!1,decls:26,vars:0,consts:[[1,"with-source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filters.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filter-function.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/column-hide-example.component.ts","target","_blank",1,"source"]],template:function(t,s){1&t&&(e.j41(0,"h2"),e.EFF(1,"Filter and Hide Columns"),e.k0s(),e.j41(2,"h3"),e.EFF(3," Checkbox and Select filter types\n"),e.k0s(),e.j41(4,"p"),e.EFF(5,"An example on how to use the built-in column filter types:"),e.k0s(),e.j41(6,"div",0)(7,"a",1),e.EFF(8,"Demo Source"),e.k0s(),e.nrm(9,"advanced-example-filters"),e.k0s(),e.j41(10,"h3"),e.EFF(11," Using a filterFunction\n"),e.k0s(),e.j41(12,"p"),e.EFF(13,' An example on how to use a built-in column filter but define your own filterFunction. In this example you can filter the "Company" column using some advanced features. Such as being able to search with a regular expression or starting your search with minus sign (try search for "-acme") to exclude any rows that match what you type.\n'),e.k0s(),e.j41(14,"div",0)(15,"a",2),e.EFF(16,"Demo Source"),e.k0s(),e.nrm(17,"advanced-example-filter-function"),e.k0s(),e.j41(18,"h3"),e.EFF(19," Hide columns\n"),e.k0s(),e.j41(20,"p"),e.EFF(21,"An example on how to use the built-in hide column:"),e.k0s(),e.j41(22,"div",0)(23,"a",3),e.EFF(24,"Demo Source"),e.k0s(),e.nrm(25,"column-hide-example"),e.k0s())},dependencies:[g,b,C],encapsulation:2})}return a})(),y=(()=>{class a{settings={columns:{id:{title:"ID"},albumId:{title:"Album"},title:{title:"Title"},url:{title:"Url"}},filter:{debounceTime:800}};source;constructor(n){this.source=new i.Nr(n,{endPoint:"https://jsonplaceholder.typicode.com/photos"})}static \u0275fac=function(t){return new(t||a)(e.rXU(f.Qq))};static \u0275cmp=e.VBU({type:a,selectors:[["advanced-example-server"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.source)},dependencies:[i.T9],encapsulation:2})}return a})(),w=(()=>{class a{static DATA_SIZE=500;getData(){return new Promise((n,t)=>{setTimeout(()=>{n(this.generateData())},2e3)})}getNewExampleObj(n){return{id:n=typeof n<"u"?n:1e3*Math.random(),name:`Jack London ${n}`,username:`jack_london_${n}`,email:`jack_london_${n}@example.com`}}generateData(){const n=[];for(let t=0;t<a.DATA_SIZE;t++)n.push(this.getNewExampleObj(t));return n}static \u0275fac=function(t){return new(t||a)};static \u0275prov=e.jDH({token:a,factory:a.\u0275fac})}return a})(),v=(()=>{class a{service;source;settings={columns:{id:{title:"ID",isEditable:!1,isAddable:!1},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};constructor(n){this.service=n,this.source=new i.h0,this.service.getData().then(t=>{this.source.load(t)})}static \u0275fac=function(t){return new(t||a)(e.rXU(w))};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-load"]],standalone:!1,features:[e.Jv_([w])],decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.source)},dependencies:[i.T9],encapsulation:2})}return a})(),E=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["server-examples"]],standalone:!1,decls:24,vars:0,consts:[[1,"highlight"],[1,"with-source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/basic-example-load.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/server/advanced-example-server.component.ts","target","_blank",1,"source"]],template:function(t,s){1&t&&(e.j41(0,"h2"),e.EFF(1,"Get data from external source example"),e.k0s(),e.j41(2,"h3"),e.EFF(3,"Loading From Server Example"),e.k0s(),e.j41(4,"p"),e.EFF(5," This example shows how to pass the data loaded from some API to a "),e.j41(6,"span",0),e.EFF(7,"LocalDataSource"),e.k0s(),e.EFF(8,".\n"),e.k0s(),e.j41(9,"div",1)(10,"a",2),e.EFF(11,"Demo Source"),e.k0s(),e.nrm(12,"basic-example-load"),e.k0s(),e.j41(13,"h3"),e.EFF(14,"Server Data Source Example"),e.k0s(),e.j41(15,"p"),e.EFF(16," An example on how to load data using the "),e.j41(17,"span",0),e.EFF(18,"ServerDataSource"),e.k0s(),e.EFF(19,":\n"),e.k0s(),e.j41(20,"div",1)(21,"a",3),e.EFF(22,"Demo Source"),e.k0s(),e.nrm(23,"advanced-example-server"),e.k0s())},dependencies:[y,v],encapsulation:2})}return a})();var U=l(1006);let k=(()=>{class a extends i.ny{name="";url="";constructor(){super()}ngAfterViewInit(){const n=this.cell.getValue().match(/<a href="([^"]*)">([^<]*)<\/a>/);null!==n&&(this.url=n[1],this.name=n[2])}updateValue(){this.cell.setValue(`<a href='${this.url}'>${this.name}</a>`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["ng-component"]],standalone:!1,features:[e.Vt3],decls:5,vars:8,consts:[[3,"click","change","keydown.enter","keydown.esc","ngClass","value","disabled","placeholder"]],template:function(t,s){1&t&&(e.EFF(0," Name: "),e.j41(1,"input",0),e.bIt("click",function(r){return s.onClick.emit(r)})("change",function(r){return s.name=r.target.value,s.updateValue()})("keydown.enter",function(){return s.onEdited.emit()})("keydown.esc",function(){return s.onStopEditing.emit()}),e.k0s(),e.nrm(2,"br"),e.EFF(3," Url: "),e.j41(4,"input",0),e.bIt("click",function(r){return s.onClick.emit(r)})("change",function(r){return s.url=r.target.value,s.updateValue()})("keydown.enter",function(){return s.onEdited.emit()})("keydown.esc",function(){return s.onStopEditing.emit()}),e.k0s()),2&t&&(e.R7$(),e.Y8G("ngClass",s.inputClass)("value",s.name)("disabled",!s.cell.isEditable())("placeholder",s.cell.getTitle()),e.R7$(3),e.Y8G("ngClass",s.inputClass)("value",s.url)("disabled",!s.cell.isEditable())("placeholder",s.cell.getTitle()))},dependencies:[c.YU],encapsulation:2})}return a})(),u=(()=>{class a{renderValue="";static componentInit(n,t){n.renderValue=t.getValue().toUpperCase()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["ng-component"]],standalone:!1,decls:1,vars:1,template:function(t,s){1&t&&e.EFF(0),2&t&&e.SpI(" ",s.renderValue," ")},encapsulation:2})}return a})(),x=(()=>{class a extends i.yG{static \u0275fac=(()=>{let n;return function(s){return(n||(n=e.xGo(a)))(s||a)}})();static \u0275cmp=e.VBU({type:a,selectors:[["ng-component"]],standalone:!1,features:[e.Vt3],decls:2,vars:3,consts:[["textfield",""],["type","number",3,"change","keyup","ngClass","placeholder","value"]],template:function(t,s){if(1&t){const o=e.RV6();e.j41(0,"input",1,0),e.bIt("change",function(){e.eBV(o);const m=e.sdS(1);return e.Njj(s.onValueChanged(m.value))})("keyup",function(){e.eBV(o);const m=e.sdS(1);return e.Njj(s.onValueChanged(m.value))}),e.k0s()}2&t&&e.Y8G("ngClass",s.inputClass)("placeholder",s.column.title)("value",s.query)},dependencies:[c.YU],encapsulation:2})}return a})(),_=(()=>{class a{data=[{id:1,name:"Leanne Graham",username:"Bret",link:'<a href="http://www.google.com">Google</a>'},{id:2,name:"Ervin Howell",username:"Antonette",link:'<a href="http://www.google.com">Google</a>'},{id:3,name:"Clementine Bauch",username:"Samantha",link:'<a href="https://github.com/dj-fiorex/angular2-smart-table">Angular2 smart table</a>'},{id:4,name:"Patricia Lebsack",username:"Karianne",link:'<a href="http://www.google.com">Google</a>'}];settings={columns:{id:{title:"ID",type:"text",filter:{type:"custom",component:x}},name:{title:"Full Name",type:"custom",renderComponent:u,componentInitFunction:u.componentInit},username:{title:"User Name",type:"text"},link:{title:"Link",type:"html",editor:{type:"custom",component:k}}}};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["advanced-example-custom-editor"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),j=(()=>{class a{data=[{id:1,name:"Leanne Graham",username:"Bret",job:"Developer",email:"Sincere@april.biz",comments:"Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",passed:"Yes"},{id:2,name:"Ervin Howell",username:"Antonette",job:"Developer",email:"Shanna@melissa.tv",comments:"Vix iudico graecis in? Malis eirmod consectetuer duo ut?\n                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",passed:"Yes"},{id:3,name:"Clementine Bauch",username:"Samantha",job:"Team Lead",email:"Nathan@yesenia.net",comments:"Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",passed:"No"},{id:4,name:"Patricia Lebsack",username:"Karianne",job:"Developer",email:"Julianne.OConner@kory.org",comments:"Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",passed:"Yes"},{id:5,name:"Chelsey Dietrich",username:"Kamren",job:"Developer",email:"Lucio_Hettinger@annie.ca",comments:"Quo viris appellantur an, pro id eirmod oblique iuvaret,\n                timeam omittam comprehensam ad eam? Eos id dico gubergren,\n                cum dicant qualisque ea, id vim ferri moderatius?",passed:"No"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",job:"Management",email:"Karley_Dach@jasper.info",comments:"Audire appareat sententiae qui no. Sed no rebum vitae quidam.",passed:"No"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",job:"Developer",email:"Telly.Hoeger@billy.biz",comments:"Mel dicat sanctus accusata ut! Eu sit choro vituperata,\n                qui cu quod gubergren elaboraret, mollis vulputate ex cum!",passed:"Yes"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",job:"Team Lead",email:"Sherwood@rosamond.me",comments:"Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",passed:"No"},{id:9,name:"Glenna Reichert",username:"Delphine",job:"Developer",email:"Chaim_McDermott@dana.io",comments:"In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.",passed:"No"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",job:"Developer",email:"Rey.Padberg@karina.biz",comments:"Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.\n                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",passed:"Yes"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",job:"Developer",email:"Rey.Padberg@rosamond.biz",comments:"Lorem ipsum dolor sit amet, mea dolorum detraxit ea?",passed:"No"}];settings={columns:{id:{title:"ID",type:"text"},name:{title:"Full Name",type:"text"},username:{title:"User Name",type:"html"},job:{title:"Job",type:"text",editor:{type:"list",config:{list:[{value:"Developer",title:"Developer"},{value:"Team Lead",title:"Team Lead"},{value:"Management",title:"Management"}]}}},email:{title:"Email",type:"text"},comments:{title:"Comments",type:"text",classContent:"with-ellipsis",editor:{type:"textarea"}},passed:{title:"Passed",type:"text",editor:{type:"checkbox",config:{true:"Yes",false:"No"}}}}};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["advanced-example-types"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],styles:[".with-ellipsis{max-width:10rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}"]})}return a})(),d=(()=>{class a{renderValue;name="";save=new e.bkB;onClick(){this.save.emit()}static componentInit(n,t){n.renderValue=t.getValue().toUpperCase();const s=t.getRow().getData().name;n.save.subscribe(o=>{alert(`${s} saved!`)})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["button-view"]],outputs:{save:"save"},standalone:!1,decls:2,vars:1,consts:[[3,"click"]],template:function(t,s){1&t&&(e.j41(0,"button",0),e.bIt("click",function(){return s.onClick()}),e.EFF(1),e.k0s()),2&t&&(e.R7$(),e.JRh(s.renderValue))},encapsulation:2})}return a})(),D=(()=>{class a{settings={columns:{id:{title:"ID",type:"text"},name:{title:"Full Name",type:"text"},username:{title:"User Name",type:"text"},email:{title:"Email",type:"text"},button:{title:"Button",type:"custom",renderComponent:d,componentInitFunction:d.componentInit}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",button:"Button #1"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",button:"Button #2"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",button:"Button #3"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",button:"Button #4"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",button:"Button #5"}];constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-button-view"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),S=(()=>{class a{renderValue;action;rowData;ngOnInit(){this.renderValue=this.rowData.username}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-custom-actions-item"]],inputs:{action:"action",rowData:"rowData"},standalone:!1,decls:2,vars:2,consts:[["href","#"]],template:function(t,s){1&t&&(e.j41(0,"a",0),e.EFF(1),e.k0s()),2&t&&(e.R7$(),e.Lme("",s.action.title," ",s.renderValue," "))},encapsulation:2})}return a})(),N=(()=>{class a{settings={actions:{custom:[{name:"view",title:"View "},{name:"edit",title:"Edit "},{name:"delete",title:"Delete "},{name:"duplicate",title:"Duplicate "},{name:"component",title:"Show",renderComponent:S}]},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"}];onCustom(n){alert(`Custom event '${n.action}' fired on row \u2116: ${n.data.id}`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-custom-actions"]],standalone:!1,decls:1,vars:2,consts:[[3,"custom","settings","source"]],template:function(t,s){1&t&&(e.j41(0,"angular2-smart-table",0),e.bIt("custom",function(r){return s.onCustom(r)}),e.k0s()),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),H=(()=>{class a{rowData;onClick(){alert(this.rowData.name)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["div-view"]],inputs:{rowData:"rowData"},standalone:!1,decls:27,vars:4,consts:[[3,"click"]],template:function(t,s){1&t&&(e.j41(0,"div")(1,"table")(2,"thead")(3,"tr")(4,"th"),e.EFF(5,"Id"),e.k0s(),e.j41(6,"th"),e.EFF(7,"Name"),e.k0s(),e.j41(8,"th"),e.EFF(9,"Email"),e.k0s(),e.j41(10,"th"),e.EFF(11,"User Name"),e.k0s(),e.j41(12,"th"),e.EFF(13,"inner Action"),e.k0s()()(),e.j41(14,"tbody")(15,"tr")(16,"td"),e.EFF(17),e.k0s(),e.j41(18,"td"),e.EFF(19),e.k0s(),e.j41(20,"td"),e.EFF(21),e.k0s(),e.j41(22,"td"),e.EFF(23),e.k0s(),e.j41(24,"td")(25,"button",0),e.bIt("click",function(){return s.onClick()}),e.EFF(26,"click me"),e.k0s()()()()()()),2&t&&(e.R7$(17),e.JRh(null==s.rowData?null:s.rowData.id),e.R7$(2),e.JRh(null==s.rowData?null:s.rowData.name),e.R7$(2),e.JRh(null==s.rowData?null:s.rowData.email),e.R7$(2),e.JRh(null==s.rowData?null:s.rowData.username))},encapsulation:2})}return a})(),B=(()=>{class a{settings={resizable:!0,hideable:!0,expand:{component:H},columns:{id:{title:"ID",hide:!0},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"}];constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["row-expand-view"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),T=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["custom-edit-view-examples"]],standalone:!1,decls:74,vars:0,consts:[[1,"with-source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts","target","_blank",1,"source"],["highlight","",1,"typescript"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/row-expand-example.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts","target","_blank",1,"source"]],template:function(t,s){1&t&&(e.j41(0,"h2"),e.EFF(1,"Customized edit and view cells examples"),e.k0s(),e.j41(2,"h3"),e.EFF(3,"Select and Textarea column types"),e.k0s(),e.j41(4,"p"),e.EFF(5," An example on how to use select and textarea column types and use CSS classes to influence rendering:\n"),e.k0s(),e.j41(6,"div",0)(7,"a",1),e.EFF(8,"Demo Source"),e.k0s(),e.nrm(9,"advanced-example-types"),e.k0s(),e.j41(10,"h3"),e.EFF(11,"Custom editor/renderer column type"),e.k0s(),e.j41(12,"p"),e.EFF(13,"An example on how to use a custom cell editor and/or custom cell renderer:"),e.k0s(),e.j41(14,"div",0)(15,"a",2),e.EFF(16,"Demo Source"),e.k0s(),e.nrm(17,"advanced-example-custom-editor"),e.k0s(),e.j41(18,"p"),e.EFF(19,"When implementing a custom editor or renderer remember to add it to the "),e.j41(20,"code"),e.EFF(21,"entryComponents"),e.k0s(),e.EFF(22," and to the "),e.j41(23,"code"),e.EFF(24,"declarations"),e.k0s(),e.EFF(25," part of your module"),e.k0s(),e.j41(26,"pre"),e.EFF(27,"  "),e.j41(28,"code",3),e.EFF(29,"\n@NgModule({\n    imports: [\n      // ...\n    ],\n    entryComponents: [CustomEditorComponent, CustomRenderComponent],\n    declarations: [\n      // ...\n      CustomEditorComponent,\n      CustomRenderComponent,\n    ],\n})"),e.k0s(),e.EFF(30,"\n"),e.k0s(),e.j41(31,"p")(32,"b"),e.EFF(33,"For the custom cell editor:"),e.k0s(),e.nrm(34,"br"),e.EFF(35," To inherit the methods needed to interact with the table you can either extend the component with the "),e.j41(36,"code"),e.EFF(37,"DefaultEditor"),e.k0s(),e.EFF(38," class or implement the "),e.j41(39,"code"),e.EFF(40,"Editor"),e.k0s(),e.EFF(41," interface and reproduce the same methods on your component."),e.nrm(42,"br"),e.j41(43,"b"),e.EFF(44,"For the custom cell renderer:"),e.k0s(),e.nrm(45,"br"),e.EFF(46," In this example the custom component is applying a "),e.j41(47,"code"),e.EFF(48,".toUpperCase()"),e.k0s(),e.EFF(49," to one of the columns.\n"),e.k0s(),e.j41(50,"h3"),e.EFF(51," Button View\n"),e.k0s(),e.j41(52,"p"),e.EFF(53,"An example on how to use custom button view:"),e.k0s(),e.j41(54,"div",0)(55,"a",4),e.EFF(56,"Demo Source"),e.k0s(),e.nrm(57,"basic-example-button-view"),e.k0s(),e.j41(58,"h3"),e.EFF(59," Expand Row / Hide Columns\n"),e.k0s(),e.j41(60,"p"),e.EFF(61,"An example on how to expand/collapse rows and hide/show columns:"),e.k0s(),e.j41(62,"div",0)(63,"a",5),e.EFF(64,"Demo Source"),e.k0s(),e.nrm(65,"row-expand-view"),e.k0s(),e.j41(66,"h3"),e.EFF(67,"Custom actions"),e.k0s(),e.j41(68,"p"),e.EFF(69,"An example on how to use custom actions:"),e.k0s(),e.j41(70,"div",0)(71,"a",6),e.EFF(72,"Demo Source"),e.k0s(),e.nrm(73,"basic-example-custom-actions"),e.k0s())},dependencies:[U.N,_,j,D,N,B],encapsulation:2})}return a})(),V=(()=>{class a{settings={delete:{confirmDelete:!0},add:{confirmCreate:!0},edit:{confirmSave:!0},columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",notShownField:!0},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",notShownField:!0},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",notShownField:!1},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",notShownField:!1},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",notShownField:!1},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",notShownField:!1},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",notShownField:!1},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",notShownField:!0},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",notShownField:!1},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",notShownField:!1},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz",notShownField:!0}];source;constructor(){this.source=new i.h0(this.data)}onDeleteConfirm(n){window.confirm("Are you sure you want to delete?")?n.confirm.resolve():n.confirm.reject()}onSaveConfirm(n){window.confirm("Are you sure you want to save?")?(n.newData.name+=" + added in code",n.confirm.resolve(n.newData)):n.confirm.reject()}onCreateConfirm(n){window.confirm("Are you sure you want to create?")?(n.newData.name+=" + added in code",n.confirm.resolve(n.newData)):n.confirm.reject()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["advance-example-comfirm"]],standalone:!1,decls:1,vars:2,consts:[[3,"deleteConfirm","editConfirm","createConfirm","settings","source"]],template:function(t,s){1&t&&(e.j41(0,"angular2-smart-table",0),e.bIt("deleteConfirm",function(r){return s.onDeleteConfirm(r)})("editConfirm",function(r){return s.onSaveConfirm(r)})("createConfirm",function(r){return s.onCreateConfirm(r)}),e.k0s()),2&t&&e.Y8G("settings",s.settings)("source",s.source)},dependencies:[i.T9],encapsulation:2})}return a})(),M=(()=>{class a{settings={selectMode:"multi",columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-multi-select"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),R=(()=>{class a{settings={selectMode:"multi",columns:{id:{title:"ID"},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}];onGridInit(n){const t=n.getRows();setInterval(()=>{const s=Math.floor(Math.random()*t.length-1)+1;n.multipleSelectRow(t[s])},1e3)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-row-selection"]],standalone:!1,decls:1,vars:2,consts:[[3,"afterGridInit","settings","source"]],template:function(t,s){1&t&&(e.j41(0,"angular2-smart-table",0),e.bIt("afterGridInit",function(r){return s.onGridInit(r)}),e.k0s()),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})(),A=(()=>{class a{settings={columns:{id:{title:"ID",isRowHeading:!0},name:{title:"Full Name"},username:{title:"User Name"},email:{title:"Email"}}};data=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"},{id:11,name:"Nicholas DuBuque",username:"Nicholas.Stanton",email:"Rey.Padberg@rosamond.biz"}];static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["basic-example-row-headings"]],standalone:!1,decls:1,vars:2,consts:[[3,"settings","source"]],template:function(t,s){1&t&&e.nrm(0,"angular2-smart-table",0),2&t&&e.Y8G("settings",s.settings)("source",s.data)},dependencies:[i.T9],encapsulation:2})}return a})();const z=[{path:"",component:G,children:[{path:"",pathMatch:"full",redirectTo:"using-filters"},{path:"using-filters",component:F},{path:"populate-from-server",component:E},{path:"custom-editors-viewers",component:T},{path:"various",component:(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=e.VBU({type:a,selectors:[["various-examples"]],standalone:!1,decls:34,vars:0,consts:[[1,"with-source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/advanced-example-confirm.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/basic-example-multi-select.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/basic-example-row-selection.component.ts","target","_blank",1,"source"],["href","https://github.com/dj-fiorex/angular2-smart-table/blob/master/projects/demo/src/app/pages/examples/various/basic-example-row-headings.component.ts","target","_blank",1,"source"]],template:function(t,s){1&t&&(e.j41(0,"h2"),e.EFF(1,"Various examples"),e.k0s(),e.j41(2,"h3"),e.EFF(3," Confirm Action Example\n"),e.k0s(),e.j41(4,"p"),e.EFF(5,"An example on how to confirm an action before it's applied to the table:"),e.k0s(),e.j41(6,"div",0)(7,"a",1),e.EFF(8,"Demo Source"),e.k0s(),e.nrm(9,"advance-example-comfirm"),e.k0s(),e.j41(10,"h3"),e.EFF(11," Multi select\n"),e.k0s(),e.j41(12,"p"),e.EFF(13,"An example on how to use multi select mode:"),e.k0s(),e.j41(14,"div",0)(15,"a",2),e.EFF(16,"Demo Source"),e.k0s(),e.nrm(17,"basic-example-multi-select"),e.k0s(),e.j41(18,"h3"),e.EFF(19," Row Selection\n"),e.k0s(),e.j41(20,"p"),e.EFF(21,"An example on how select a row programmatically"),e.k0s(),e.j41(22,"div",0)(23,"a",3),e.EFF(24,"Demo Source"),e.k0s(),e.nrm(25,"basic-example-row-selection"),e.k0s(),e.j41(26,"h3"),e.EFF(27," Row Headings\n"),e.k0s(),e.j41(28,"p"),e.EFF(29,"An example on how to use row headings"),e.k0s(),e.j41(30,"div",0)(31,"a",4),e.EFF(32,"Demo Source"),e.k0s(),e.nrm(33,"basic-example-row-headings"),e.k0s())},dependencies:[V,M,R,A],encapsulation:2})}return a})()}]}];let O=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=e.$C({type:a});static \u0275inj=e.G2t({imports:[c.MD,f.q1,h.iI.forChild(z),i.gQ,I.G]})}return a})()}}]);