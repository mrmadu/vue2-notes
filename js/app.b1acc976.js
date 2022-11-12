(function(){"use strict";var t={2005:function(t,e,r){var n=r(6369),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"wrapper-content"},[e("section",[e("div",{staticClass:"container"},[e("NewNoteVue",{attrs:{note:t.note},on:{addNote:t.addNote,updateTitle:t.updateTitle,updateDescr:t.updateDescr}}),t.message?e("MessageVue",{attrs:{message:t.message}}):t._e(),e("div",{staticClass:"list-header"},[e("h1",{staticClass:"list-title"},[t._v(t._s(t.title))]),e("SearchVue",{on:{search:t.search}}),e("div",{staticClass:"icons"},[e("svg",{class:{active:t.grid},attrs:{title:"Вид плиткой",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!0}}},[e("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),e("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),e("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),e("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),e("svg",{class:{active:!t.grid},attrs:{title:"Вид списком",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!1}}},[e("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),e("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),e("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),e("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),e("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),e("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),e("NotesVue",{attrs:{notes:t.notesFilter,grid:t.grid},on:{removeNote:t.removeNote}})],1)])])])},i=[],o=(r(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"message"},[e("p",[t._v(t._s(t.message))])])}),a=[],l={name:"MessageVue",props:{message:{type:String,required:!1}}},c=l,u=r(1001),d=(0,u.Z)(c,o,a,!1,null,"711f37f1",null),h=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-note"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.addNote.apply(null,arguments)}}},[e("label",[t._v("Заголовок")]),e("input",{attrs:{type:"text",placeholder:"Обязательное поле"},domProps:{value:t.note.title},on:{input:function(e){return t.$emit("updateTitle",e.target.value)}}}),e("label",[t._v("Описание")]),e("textarea",{attrs:{placeholder:"Укажите подробности"},domProps:{value:t.note.descr},on:{input:function(e){return t.$emit("updateDescr",e.target.value)}}}),e("button",{staticClass:"btn btnPrimary"},[t._v("Добавить")])])])},v=[],f={name:"NewNoteVue",props:{note:{type:Object,required:!0}},methods:{addNote(){this.$emit("addNote",this.note)}}},g=f,w=(0,u.Z)(g,p,v,!1,null,"5aa2c3a0",null),m=w.exports,y=function(){var t=this,e=t._self._c;return t.notes.length>0?e("div",{staticClass:"notes"},t._l(t.notes,(function(r){return e("div",{key:r.id,staticClass:"note",class:{w100:!t.grid}},[e("div",{staticClass:"note-header"},[e("h3",[t._v(t._s(r.title))]),e("span",{staticClass:"btnDel",attrs:{title:"Удалить"},on:{click:function(e){return t.removeNote(r.id)}}},[t._v("x")])]),e("div",{staticClass:"note-body"},[e("p",[t._v(t._s(r.descr))]),e("span",[t._v(t._s(r.date))])])])})),0):e("div",{staticClass:"notes no-notes"},[e("p",[t._v("Заметок пока нет")])])},x=[],_={name:"NotesVue",props:{notes:{type:Array,required:!1},grid:{type:Boolean,required:!0}},methods:{removeNote(t){this.$emit("removeNote",t)}}},C=_,b=(0,u.Z)(C,y,x,!1,null,"a90b0004",null),k=b.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-search"},[e("div",{staticClass:"search"},[e("div",{staticClass:"search-icon"},[e("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),e("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Поиск"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},O=[],D={name:"SearchVue",data(){return{search:this.value}},watch:{search(t){this.$emit("search",t)}}},V=D,j=(0,u.Z)(V,N,O,!1,null,"91937196",null),P=j.exports,T={name:"App",components:{MessageVue:h,NewNoteVue:m,NotesVue:k,SearchVue:P},data(){return{title:"Заметки",windowWidth:window.innerWidth,grid:!0,searchQuery:"",note:{title:"",descr:"",id:null},message:null,notes:[{title:"Первая заметка",descr:"Попробуй добавить еще 😉",id:Date.now(),date:new Date(Date.now()).toLocaleString()}]}},computed:{notesFilter(){let t=this.searchQuery,e=this.notes;return t?(e=e.filter((e=>{const r={...e};return Object.keys(r).some((e=>(""+r[e]).trim().toLowerCase().includes(t.trim().toLowerCase())))})),e):e}},methods:{updateTitle(t){this.note.title=t},updateDescr(t){this.note.descr=t},addNote(){let{title:t,descr:e}=this.note;if(""===t)return this.message="Заголовок не может быть пустым",!1;this.notes.push({title:t,descr:e,id:Date.now(),date:new Date(Date.now()).toLocaleString()}),this.note.title="",this.note.descr="",this.message=null},removeNote(t){this.notes.splice(this.notes.findIndex((e=>e.id==t)),1)},search(t){this.searchQuery=t}},mounted(){return window.innerWidth>600?this.grid=!0:this.grid=!1,this.grid}},Z=T,S=(0,u.Z)(Z,s,i,!1,null,null,null),$=S.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t($)}).$mount("#app")}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,s,i){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],i=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(a=!1,i<o&&(o=i));if(a){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,s,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,o=n[0],a=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(l)var u=l(r)}for(e&&e(n);c<o.length;c++)i=o[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self["webpackChunkvue2_notes"]=self["webpackChunkvue2_notes"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2005)}));n=r.O(n)})();