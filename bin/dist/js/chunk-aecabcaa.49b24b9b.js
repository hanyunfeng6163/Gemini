(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aecabcaa"],{"54fb":function(t,e,a){},"5d9d":function(t,e,a){"use strict";a("54fb")},"98aa":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"6"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-redo"}}),t._v("\n          选择数据库\n        ")],1),a("div",{staticClass:"edittable-test-con"},[a("div",{staticClass:"margin-bottom-10",attrs:{id:"showImage"}},[a("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"环境:",prop:"idc"}},[a("Select",{on:{"on-change":t.fetchSource},model:{value:t.formItem.idc,callback:function(e){t.$set(t.formItem,"idc",e)},expression:"formItem.idc"}},t._l(t.fetchData.idc,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),a("FormItem",{attrs:{label:"连接名:",prop:"source"}},[a("Select",{on:{"on-change":t.fetchBase},model:{value:t.formItem.source,callback:function(e){t.$set(t.formItem,"source",e)},expression:"formItem.source"}},t._l(t.fetchData.source,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e)+"\n                  ")])})),1)],1),a("FormItem",{attrs:{label:"库名:",prop:"database"}},[a("Select",{attrs:{placeholder:"请选择"},on:{"on-change":t.fetchTable},model:{value:t.formItem.database,callback:function(e){t.$set(t.formItem,"database",e)},expression:"formItem.database"}},t._l(t.fetchData.base,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),a("FormItem",{attrs:{label:"工单说明:",prop:"text"}},[a("Input",{attrs:{placeholder:"请输入",type:"textarea",rows:4},model:{value:t.formItem.text,callback:function(e){t.$set(t.formItem,"text",e)},expression:"formItem.text"}})],1),a("FormItem",{attrs:{label:"审核人:",prop:"assigned"}},[a("Select",{attrs:{filterable:""},model:{value:t.formItem.assigned,callback:function(e){t.$set(t.formItem,"assigned",e)},expression:"formItem.assigned"}},t._l(t.fetchData.assigned,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),a("FormItem",{attrs:{label:"是否备份",prop:"backup"}},[a("RadioGroup",{model:{value:t.formItem.backup,callback:function(e){t.$set(t.formItem,"backup",e)},expression:"formItem.backup"}},[a("Radio",{attrs:{label:1}},[t._v("是")]),a("Radio",{attrs:{label:0}},[t._v("否")])],1)],1),a("FormItem",{attrs:{label:"定时执行"}},[a("DatePicker",{attrs:{format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"选择时间点",options:t.invalidDate,editable:!1},on:{"on-change":function(e){t.formItem.delay=e}},model:{value:t.formItem.delay,callback:function(e){t.$set(t.formItem,"delay",e)},expression:"formItem.delay"}})],1)],1),a("Form",[a("FormItem",[a("Col",{staticClass:"margin-left-10",attrs:{span:"5"}},[a("Button",{attrs:{type:"error",icon:"md-trash"},nativeOn:{click:function(e){return t.clearForm()}}},[t._v("重置\n                  ")])],1),a("Col",{staticClass:"margin-left-10",attrs:{span:"5"}},[a("Button",{attrs:{type:"primary",icon:"md-search",loading:t.loading},nativeOn:{click:function(e){return t.testSql()}}},[t._v("检测\n                  ")])],1),a("Col",{staticClass:"margin-left-10",attrs:{span:"5"}},[a("Button",{attrs:{type:"warning",icon:"ios-brush",loading:t.loading},nativeOn:{click:function(e){return t.beauty()}}},[t._v("美化\n                  ")])],1),a("Col",{staticClass:"margin-left-10",attrs:{span:"5"}},[a("Button",{attrs:{type:"success",icon:"ios-redo",disabled:this.validate_gen},nativeOn:{click:function(e){return t.commitOrder()}}},[t._v("提交\n                  ")])],1)],1)],1),a("Alert",[t._v("检测表字段提示信息\n              "),a("template",{slot:"desc"},[a("p",[t._v("1.错误等级 0正常,其他均为有问题。")]),a("p",[t._v("2.阶段状态 审核成功")]),a("p",[t._v("3.错误信息 用来表示错误信息")]),a("p",[t._v("4.当前检查的sql")]),a("p",[t._v("注:只有错误等级等于0时提交按钮才会激活")])])],2)],1)])])],1),a("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-crop"}}),t._v("\n          填写sql语句\n        ")],1),a("editor",{on:{init:t.editorInit,setCompletions:t.setCompletions},model:{value:t.formItem.textarea,callback:function(e){t.$set(t.formItem,"textarea",e)},expression:"formItem.textarea"}}),a("br"),a("br"),a("Table",{attrs:{columns:t.testColumns,data:t.Testresults,"highlight-row":""}})],1)],1)],1)],1)},n=[],o=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("28a5"),a("ac6a"),a("bc3a")),s=a.n(o),i=a("a897"),l=a("efd9");function c(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=m(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){i=!0,o=t},f:function(){try{s||null==a.return||a.return()}finally{if(i)throw o}}}}function m(t,e){if(t){if("string"===typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var f={components:{editor:i["a"]},mixins:[l["a"],l["d"]],name:"SQLsyntax",data:function(){return{validate_gen:!0,formItem:{text:"",idc:"",source:"",database:"",table:"",backup:1,assigned:"",delay:null,textarea:""},Testresults:[],item:{},id:null,assigned:[],wordList:[],loading:!1}},methods:{beauty:function(){var t=this;s.a.put("".concat(this.$config.url,"/query/beauty"),{sql:this.formItem.textarea}).then((function(e){t.formItem.textarea=e.data})).catch((function(e){return t.$config.err_notice(t,e)}))},testSql:function(){var t=this;this.$refs["formItem"].validate((function(e){e?(t.loading=!0,s.a.put("".concat(t.$config.url,"/fetch/test"),{source:t.formItem.source,database:t.formItem.database,sql:t.formItem.textarea,isDMl:!0}).then((function(e){t.Testresults=e.data;var a=0;t.Testresults.forEach((function(t){0!==t.Level&&(a+=1)})),t.validate_gen=0!==a,t.loading=!1})).catch((function(e){t.loading=!1,t.$config.err_notice(t,e)}))):t.$Message.error("请填写具体地址或sql语句后再测试!")}))},commitOrder:function(){var t=this;this.$refs["formItem"].validate((function(e){e&&s.a.post("".concat(t.$config.url,"/sql/refer"),{ddl:t.formItem,sql:t.formItem.textarea,ty:1}).then((function(e){t.validate_gen=!0,t.$Notice.success({title:"成功",desc:e.data})})).catch((function(e){t.validate_gen=!0,t.$config.err_notice(t,e)}))}))}},mounted:function(){this.fetchIDC();var t,e=c(this.$config.highlight.split("|"));try{for(e.s();!(t=e.n()).done;){var a=t.value;this.wordList.push({vl:a,meta:"关键字"})}}catch(r){e.e(r)}finally{e.f()}}},d=f,p=(a("5d9d"),a("2877")),v=Object(p["a"])(d,r,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-aecabcaa.49b24b9b.js.map