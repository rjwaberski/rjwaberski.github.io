webpackJsonp([2],{ExFo:function(t,s,e){"use strict";var i=e("qDFz"),a=e("Jazc"),c=!1;var r=function(t){c||e("ts9r")},l=e("VU/8")(i.a,a.a,!1,r,null,null);l.options.__file="components\\Project.vue",s.a=l.exports},Jazc:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"project__container card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:t.img.src,alt:t.img.alt}})])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:t.img.srcSmall,alt:t.img.alt}})])]),e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(" "+t._s(t.client.name))]),e("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.client.email)+" ")])])]),e("div",{staticClass:"content"},[t._v("\n            "+t._s(t.desc)+"\n            "),e("a",{attrs:{href:"#"}},[t._v("#css")]),e("a",{attrs:{href:"#"}},[t._v("#responsive")])]),e("hr"),e("ul",t._l(t.stack,function(s){return e("li",{key:s},[t._v(" "+t._s(s)+" ")])})),e("hr"),e("time",{attrs:{datetime:t.time}},[t._v(" "+t._s(t.time))])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},NBDz:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section is-large programming"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v("front-end development")]),e("h2",{staticClass:"subtitle"},[t._v("websites I made")]),t._l(t.projects,function(s){return e("div",{key:s.client.name},[e("p",{staticClass:"subtitle"},[e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.client.name))])])])})],2)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},OhiD:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Vd2G"),a=e("NBDz"),c=!1;var r=function(t){c||e("hhVd")},l=e("VU/8")(i.a,a.a,!1,r,null,null);l.options.__file="pages\\programming.vue",s.default=l.exports},Vd2G:function(t,s,e){"use strict";var i=e("ExFo");s.a={components:{Project:i.a},data:function(){return{projects:{hmproject:{url:"http://www.hm-projekt.pl/",img:{src:"https://bulma.io/images/placeholders/1280x960.png",srcSmall:"https://bulma.io/images/placeholders/96x96.png",alt:"project"},client:{name:"Pracownia projektowa HM-PROJEKT",email:"egmail@mail.com"},desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",stack:["html5","javascript","jquery"],time:"2016/1/1"},waberskij:{url:"http://www.jedrzejwaberski.pl",img:{src:"https://bulma.io/images/placeholders/1280x960.png",srcSmall:"https://bulma.io/images/placeholders/96x96.png",alt:"project"},client:{name:"Iluzjonista Jędrzej Waberski",email:"egmail@mail.com"},desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",stack:["javascript","vue","jquery"],time:"2016/1/1"}}}}}},hhVd:function(t,s,e){var i=e("zld6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("39f02c83",i,!1,{sourceMap:!1})},qDFz:function(t,s,e){"use strict";s.a={data:function(){return{img:{src:"",srcSmall:"",alt:""},client:{name:"",email:""},desc:"",stack:[""],time:""}},props:{project:null},mounted:function(){this.setProject()},methods:{setProject:function(){this.img.src=this.project.img.src,this.img.srcSmall=this.project.img.srcSmall,this.img.alt=this.project.img.alt,this.client=this.project.client,this.desc=this.project.desc,this.stack=this.project.stack,this.time=this.project.time}}}},sOsK:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},ts9r:function(t,s,e){var i=e("sOsK");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("efc46f5c",i,!1,{sourceMap:!1})},zld6:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])}});