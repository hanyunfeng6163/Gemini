(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f659c8f"],{"3b2b":function(t,e,a){var n=a("7726"),o=a("5dbc"),r=a("86cc").f,i=a("9093").f,s=a("aae3"),c=a("0bfb"),l=n.RegExp,u=l,m=l.prototype,f=/a/g,d=/a/g,p=new l(f)!==f;if(a("9e1e")&&(!p||a("79e5")((function(){return d[a("2b4c")("match")]=!1,l(f)!=f||l(d)==d||"/a/i"!=l(f,"i")})))){l=function(t,e){var a=this instanceof l,n=s(t),r=void 0===e;return!a&&n&&t.constructor===l&&r?t:o(p?new u(n&&!r?t.source:t,e):u((n=t instanceof l)?t.source:t,n&&r?c.call(t):e),a?this:m,l)};for(var b=function(t){t in l||r(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=i(u),I=0;g.length>I;)b(g[I++]);m.constructor=l,l.prototype=m,a("2aba")(n,"RegExp",l)}a("7a56")("RegExp")},"5ef1":function(t,e,a){},7155:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Col",{attrs:{span:"5"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"md-refresh"}}),t._v("\n        添加数据库\n      ")],1),a("div",{staticClass:"edittable-testauto-con"},[a("Form",{ref:"formValidate",attrs:{model:t.formItem,"label-width":100,rules:t.ruleInline}},[a("Form-item",{attrs:{label:"环境:",prop:"add"}},[a("Select",{model:{value:t.formItem.add,callback:function(e){t.$set(t.formItem,"add",e)},expression:"formItem.add"}},t._l(t.comList,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),a("Form-item",{attrs:{label:"连接名称:",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1),a("Form-item",{attrs:{label:"数据库地址:",prop:"ip"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formItem.ip,callback:function(e){t.$set(t.formItem,"ip",e)},expression:"formItem.ip"}})],1),a("Form-item",{attrs:{label:"端口:",prop:"port"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formItem.port,callback:function(e){t.$set(t.formItem,"port",e)},expression:"formItem.port"}})],1),a("Form-item",{attrs:{label:"用户名:",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formItem.username,callback:function(e){t.$set(t.formItem,"username",e)},expression:"formItem.username"}})],1),a("Form-item",{attrs:{label:"密码:",prop:"password"}},[a("Input",{attrs:{placeholder:"请输入",type:"password"},model:{value:t.formItem.password,callback:function(e){t.$set(t.formItem,"password",e)},expression:"formItem.password"}})],1),a("Form-item",{attrs:{label:"数据源类型:"}},[a("RadioGroup",{model:{value:t.formItem.isquery,callback:function(e){t.$set(t.formItem,"isquery",e)},expression:"formItem.isquery"}},[a("Radio",{attrs:{label:2}},[t._v("读写")]),a("Radio",{attrs:{label:1}},[t._v("读")]),a("Radio",{attrs:{label:0}},[t._v("写")])],1)],1),a("Button",{attrs:{type:"info"},on:{click:function(e){return t.testConnection()}}},[t._v("测试连接")]),a("Button",{staticStyle:{"margin-left":"5%"},attrs:{type:"success"},on:{click:function(e){return t.addConnection()}}},[t._v("确定")]),a("Button",{staticStyle:{"margin-left":"5%"},attrs:{type:"warning"},on:{click:function(e){return t.resetForm()}}},[t._v("重置")])],1)],1)])],1),a("Col",{staticClass:"padding-left-10",attrs:{span:"19"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"md-apps"}}),t._v("\n        数据库详情表\n      ")],1),a("Input",{staticStyle:{width:"15%"},attrs:{placeholder:"请填写连接名",clearable:""},model:{value:t.query.connection_name,callback:function(e){t.$set(t.query,"connection_name",e)},expression:"query.connection_name"}}),a("Select",{staticClass:"margin-left-10",staticStyle:{width:"15%"},attrs:{placeholder:"请填写环境"},model:{value:t.query.computer_room,callback:function(e){t.$set(t.query,"computer_room",e)},expression:"query.computer_room"}},t._l(t.comList,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1),a("Button",{staticClass:"margin-left-10",attrs:{type:"primary"},on:{click:t.queryData}},[t._v("查询")]),a("Button",{staticClass:"margin-left-10",attrs:{type:"warning"},on:{click:t.queryCancel}},[t._v("重置")]),a("div",{staticClass:"edittable-con-1"},[a("Table",{attrs:{columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"is_query",fn:function(e){var n=e.row;return[0===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"primary"}},[t._v("写")]):t._e(),1===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"success"}},[t._v("读")]):t._e(),2===n.IsQuery?a("Tag",{attrs:{checkable:"",color:"warning"}},[t._v("读写")]):t._e()]}},{key:"action",fn:function(e){var n=e.row;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(e){return t.viewConnectionModal(n)}}},[t._v("详细信息")]),a("Poptip",{attrs:{confirm:"",title:"删除数据源将会删除对应的所有工单信息,确定要删除吗？",transfer:""},on:{"on-ok":function(e){return t.delConnection(n)}}},[a("Button",{attrs:{type:"warning",size:"small"}},[t._v("删除")])],1)]}}])})],1),a("br"),a("Page",{ref:"page",attrs:{total:t.pagenumber,"show-elevator":"","page-size":10},on:{"on-change":t.getPageInfo}})],1)],1),a("Modal",{attrs:{width:500,okText:"保存"},on:{"on-ok":t.modifyBase},model:{value:t.baseinfo,callback:function(e){t.baseinfo=e},expression:"baseinfo"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("数据库连接信息")]),a("Form",{attrs:{"label-width":100,"label-position":"right"}},[a("FormItem",{attrs:{label:"环境"}},[a("Input",{attrs:{readonly:""},model:{value:t.editbaseinfo.IDC,callback:function(e){t.$set(t.editbaseinfo,"IDC",e)},expression:"editbaseinfo.IDC"}})],1),a("FormItem",{attrs:{label:"连接名称:"}},[a("Input",{attrs:{readonly:""},model:{value:t.editbaseinfo.Source,callback:function(e){t.$set(t.editbaseinfo,"Source",e)},expression:"editbaseinfo.Source"}})],1),a("FormItem",{attrs:{label:"数据库地址:"}},[a("Input",{model:{value:t.editbaseinfo.IP,callback:function(e){t.$set(t.editbaseinfo,"IP",e)},expression:"editbaseinfo.IP"}})],1),a("FormItem",{attrs:{label:"端口:"}},[a("Input",{model:{value:t.editbaseinfo.Port,callback:function(e){t.$set(t.editbaseinfo,"Port",e)},expression:"editbaseinfo.Port"}})],1),a("FormItem",{attrs:{label:"用户名:"}},[a("Input",{model:{value:t.editbaseinfo.Username,callback:function(e){t.$set(t.editbaseinfo,"Username",e)},expression:"editbaseinfo.Username"}})],1),a("FormItem",{attrs:{label:"密码:"}},[a("Input",{attrs:{type:"password"},model:{value:t.editbaseinfo.Password,callback:function(e){t.$set(t.editbaseinfo,"Password",e)},expression:"editbaseinfo.Password"}})],1)],1)],1)],1)},o=[],r=(a("7f7f"),a("3b2b"),a("a32f"),a("bc3a")),i=a.n(r),s={name:"sqlist",data:function(){var t=this,e=function(e,a,n){var o=new RegExp("[`~!@#$^&*()={}':;',\\[\\]<>/?~！@#￥……&*（）——{}【】‘；：”“'。，、？]");o.test(t.formItem.name)?n(new Error("特殊字符仅可使用|与-")):n()},a=function(e,a,n){var o=new RegExp("[`？?@^$]");o.test(t.formItem.password)?n(new Error("密码中不得含有? @ ^ $")):n()};return{tableData:[],columns:[{title:"连接名称",key:"Source"},{title:"查询数据源",key:"IsQuery",slot:"is_query"},{title:"数据库地址",key:"IP"},{title:"环境",key:"IDC"},{title:"操作",key:"action",width:300,slot:"action"}],formItem:{isquery:2,name:"",ip:"",add:"",username:"",password:"",port:""},ruleInline:{add:[{required:!0,message:"请选择对应环境",trigger:"change"}],name:[{required:!0,message:"请填写连接名称",trigger:"blur"},{validator:e,trigger:"blur"}],ip:[{required:!0,message:"请填写连接地址",trigger:"blur"}],username:[{required:!0,message:"请填写用户名",trigger:"blur"}],port:[{required:!0,message:"请填写端口",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{validator:a,trigger:"blur"}]},comList:[],pagenumber:1,baseinfo:!1,editbaseinfo:{},query:{computer_room:"",connection_name:"",valve:!1}}},methods:{resetForm:function(){this.formItem=this.$config.clearObj(this.formItem)},testConnection:function(){var t=this;i.a.put("".concat(this.$config.url,"/management_db/test"),{ip:this.formItem.ip,user:this.formItem.username,password:this.formItem.password,port:parseInt(this.formItem.port)}).then((function(e){t.$config.notice(e.data)})).catch((function(e){t.$config.err_notice(t,e)}))},addConnection:function(){var t=this;this.$refs["formValidate"].validate((function(e){e&&(i.a.post("".concat(t.$config.url,"/management_db/add"),{source:t.formItem.name,idc:t.formItem.add,ip:t.formItem.ip,user:t.formItem.username,password:t.formItem.password,port:parseInt(t.formItem.port),isQuery:t.formItem.isquery}).then((function(e){t.$config.notice(e.data),t.getPageInfo(t.$refs.page.currentPage),t.$refs["formValidate"].resetFields()})).catch((function(e){t.$config.err_notice(t,e)})),t.reset())}))},viewConnectionModal:function(t){this.baseinfo=!0,this.editbaseinfo=t},delConnection:function(t){var e=this,a=this.$refs.page.currentPage;1===this.tableData.length&&(a-=1),i.a.delete("".concat(this.$config.url,"/management_db/del/").concat(t.Source)).then((function(t){e.$config.notice(t.data),e.getPageInfo(a)})).catch((function(t){e.$config.err_notice(e,t)}))},getPageInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i.a.get("".concat(this.$config.url,"/management_db/fetch/?page=").concat(e,"&con=").concat(JSON.stringify(this.query))).then((function(e){t.tableData=e.data.data,t.pagenumber=parseInt(e.data.page),t.comList=e.data.custom})).catch((function(e){t.$config.err_notice(t,e)}))},modifyBase:function(){var t=this,e=JSON.parse(JSON.stringify(this.editbaseinfo));e.Port=parseInt(e.Port),e.IsQuery=0,i.a.put("".concat(this.$config.url,"/management_db/edit"),{data:e}).then((function(e){return t.$config.notice(e.data)})).catch((function(e){return t.$config.err_notice(t,e)}))},queryData:function(){this.query.valve=!0,this.getPageInfo()},queryCancel:function(){this.$config.clearObj(this.query),this.getPageInfo()}},mounted:function(){this.getPageInfo()}},c=s,l=(a("a48a"),a("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports},a32f:function(t,e,a){},a48a:function(t,e,a){"use strict";a("5ef1")},aae3:function(t,e,a){var n=a("d3f4"),o=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==o(t))}}}]);
//# sourceMappingURL=chunk-7f659c8f.a55d9811.js.map