(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b219b0"],{"016a":function(e,t,a){},"0a49":function(e,t,a){var o=a("9b43"),r=a("626a"),n=a("4bf8"),i=a("9def"),c=a("cd1c");e.exports=function(e,t){var a=1==e,s=2==e,l=3==e,u=4==e,d=6==e,m=5==e||d,f=t||c;return function(t,c,h){for(var g,p,_=n(t),b=r(_),k=o(c,h,3),v=i(b.length),x=0,y=a?f(t,v):s?f(t,0):void 0;v>x;x++)if((m||x in b)&&(g=b[x],p=k(g,x,_),e))if(a)y[x]=p;else if(p)switch(e){case 3:return!0;case 5:return g;case 6:return x;case 2:y.push(g)}else if(u)return!1;return d?-1:l||u?u:y}}},"4fa5":function(e,t,a){"use strict";a("016a")},"61fa":function(e,t){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,a){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},n.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};o.inherits(n,r),n.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},n.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},n.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=n})),ace.define("ace/mode/mysql_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,a){var o=e("../lib/oop"),r=(e("../lib/lang"),e("./doc_comment_highlight_rules").DocCommentHighlightRules),n=e("./text_highlight_rules").TextHighlightRules,i=function(){var e="alter|and|as|asc|between|count|create|delete|desc|distinct|drop|from|having|in|insert|into|is|join|like|not|on|or|order|select|set|table|union|update|values|where|accessible|action|add|after|algorithm|all|analyze|asensitive|at|authors|auto_increment|autocommit|avg|avg_row_length|before|binary|binlog|both|btree|cache|call|cascade|cascaded|case|catalog_name|chain|change|changed|character|check|checkpoint|checksum|class_origin|client_statistics|close|coalesce|code|collate|collation|collations|column|columns|comment|commit|committed|completion|concurrent|condition|connection|consistent|constraint|contains|continue|contributors|convert|cross|current_date|current_time|current_timestamp|current_user|cursor|data|database|databases|day_hour|day_microsecond|day_minute|day_second|deallocate|dec|declare|default|delay_key_write|delayed|delimiter|des_key_file|describe|deterministic|dev_pop|dev_samp|deviance|directory|disable|discard|distinctrow|div|dual|dumpfile|each|elseif|enable|enclosed|end|ends|engine|engines|enum|errors|escape|escaped|even|event|events|every|execute|exists|exit|explain|extended|fast|fetch|field|fields|first|flush|for|force|foreign|found_rows|full|fulltext|function|general|global|grant|grants|group|groupby_concat|handler|hash|help|high_priority|hosts|hour_microsecond|hour_minute|hour_second|if|ignore|ignore_server_ids|import|index|index_statistics|infile|inner|innodb|inout|insensitive|insert_method|install|interval|invoker|isolation|iterate|key|keys|kill|language|last|leading|leave|left|level|limit|linear|lines|list|load|local|localtime|localtimestamp|lock|logs|low_priority|master|master_heartbeat_period|master_ssl_verify_server_cert|masters|match|max|max_rows|maxvalue|message_text|middleint|migrate|min|min_rows|minute_microsecond|minute_second|mod|mode|modifies|modify|mutex|mysql_errno|natural|next|no|no_write_to_binlog|offline|offset|one|online|open|optimize|option|optionally|out|outer|outfile|pack_keys|parser|partition|partitions|password|phase|plugin|plugins|prepare|preserve|prev|primary|privileges|procedure|processlist|profile|profiles|purge|query|quick|range|read|read_write|reads|real|rebuild|recover|references|regexp|relaylog|release|remove|rename|reorganize|repair|repeatable|replace|acequire|resignal|restrict|resume|return|returns|revoke|right|rlike|rollback|rollup|row|row_format|rtree|savepoint|schedule|schema|schema_name|schemas|second_microsecond|security|sensitive|separator|serializable|server|session|share|show|signal|slave|slow|smallint|snapshot|soname|spatial|specific|sql|sql_big_result|sql_buffer_result|sql_cache|sql_calc_found_rows|sql_no_cache|sql_small_result|sqlexception|sqlstate|sqlwarning|ssl|start|starting|starts|status|std|stddev|stddev_pop|stddev_samp|storage|straight_join|subclass_origin|sum|suspend|table_name|table_statistics|tables|tablespace|temporary|terminated|to|trailing|transaction|trigger|triggers|truncate|uncommitted|undo|uninstall|unique|unlock|upgrade|usage|use|use_frm|user|user_resources|user_statistics|using|utc_date|utc_time|utc_timestamp|value|variables|varying|view|views|warnings|when|while|with|work|write|xa|xor|year_month|zerofill|begin|do|then|else|loop|repeat",t="by|bool|boolean|bit|blob|decimal|double|enum|float|long|longblob|longtext|medium|mediumblob|mediumint|mediumtext|time|timestamp|tinyblob|tinyint|tinytext|text|bigint|int|int1|int2|int3|int4|int8|integer|float|float4|float8|double|char|varbinary|varchar|varcharacter|precision|date|datetime|year|unsigned|signed|numeric|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",a="charset|clear|connect|edit|ego|exit|go|help|nopager|notee|nowarning|pager|print|prompt|quit|rehash|source|status|system|tee",o=this.createKeywordMapper({"support.function":t,keyword:e,constant:"false|true|null|unknown|date|time|timestamp|ODBCdotTable|zerolessFloat","variable.language":a},"identifier",!0);function n(e){var t=e.start,a=e.escape;return{token:"string.start",regex:t,next:[{token:"constant.language.escape",regex:a},{token:"string.end",next:"start",regex:t},{defaultToken:"string"}]}}this.$rules={start:[{token:"comment",regex:"(?:-- |#).*$"},n({start:'"',escape:/\\[0'"bnrtZ\\%_]?/}),n({start:"'",escape:/\\[0'"bnrtZ\\%_]?/}),r.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+|[xX]'[0-9a-fA-F]+'|0[bB][01]+|[bB]'[01]+'/},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"constant.class",regex:"@@?[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"constant.buildin",regex:"`[^`]*`"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.embedRules(r,"doc-",[r.getEndRule("start")]),this.normalizeRules()};o.inherits(i,n),t.MysqlHighlightRules=i})),ace.define("ace/mode/mysql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mysql_highlight_rules"],(function(e,t,a){var o=e("../lib/oop"),r=e("../mode/text").Mode,n=e("./mysql_highlight_rules").MysqlHighlightRules,i=function(){this.HighlightRules=n,this.$behaviour=this.$defaultBehaviour};o.inherits(i,r),function(){this.lineCommentStart=["--","#"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/mysql"}.call(i.prototype),t.Mode=i}))},7514:function(e,t,a){"use strict";var o=a("5ca1"),r=a("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},9210:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"md-sync"}}),e._v("\n        autoTask\n      ")],1),a("Form",{attrs:{inline:""}},[a("FormItem"),a("FormItem",[a("Button",{attrs:{type:"warning"},on:{click:e.toggleShow}},[e._v("新建Task")])],1),a("FormItem",[a("Input",{attrs:{placeholder:"AutoTask名称"},model:{value:e.find.text,callback:function(t){e.$set(e.find,"text",t)},expression:"find.text"}})],1),a("FormItem",[a("Button",{attrs:{type:"success"},on:{click:e.queryData}},[e._v("查询")]),a("Button",{staticClass:"margin-left-10",attrs:{type:"primary"},on:{click:e.queryCancel}},[e._v("重置")])],1)],1),a("Table",{attrs:{columns:e.task_columns,data:e.task_data},scopedSlots:e._u([{key:"tp",fn:function(t){var o=t.row;return[0===o.Tp?a("Tag",{attrs:{checkable:"",color:"primary"}},[e._v("Insert")]):e._e(),1===o.Tp?a("Tag",{attrs:{checkable:"",color:"warning"}},[e._v("Update")]):e._e(),2===o.Tp?a("Tag",{attrs:{checkable:"",color:"error"}},[e._v("Delete")]):e._e()]}},{key:"status",fn:function(t){var o=t.row;return[a("i-switch",{on:{"on-change":function(t){return e.activityStatus(o)}},model:{value:o.Status,callback:function(t){e.$set(o,"Status",t)},expression:"row.Status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"action",fn:function(t){var o=t.row;return[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.openEditModal(o)}}},[e._v("编辑")]),a("Poptip",{attrs:{confirm:"",title:"确定要删除吗？",transfer:""},on:{"on-ok":function(t){return e.delAutoTask(o)}}},[a("Button",{staticClass:"margin-left-10",attrs:{type:"error"}},[e._v("删除")])],1)]}}])}),a("br"),a("Page",{ref:"page",attrs:{total:e.pg,"show-elevator":"","page-size":15},on:{"on-change":e.fetchAutoTaskList}})],1)],1),a("Modal",{attrs:{title:e.diffArgs.title},on:{"on-ok":e.referAutoTask},model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}},[a("Form",{ref:"formItem",attrs:{model:e.formItem,rules:e.ruleValidate}},[a("FormItem",{attrs:{label:"Task名称",prop:"name"}},[a("Input",{attrs:{disabled:e.disable},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),a("FormItem",{attrs:{label:"类型",required:""}},[a("Select",{model:{value:e.formItem.tp,callback:function(t){e.$set(e.formItem,"tp",t)},expression:"formItem.tp"}},e._l(e.fetchList.tp,(function(t){return a("Option",{key:t.v,attrs:{value:t.v}},[e._v(e._s(t.title))])})),1)],1),a("FormItem",{attrs:{label:"数据源",prop:"source"}},[a("Select",{attrs:{filterable:""},on:{"on-change":e.fetchBase},model:{value:e.formItem.source,callback:function(t){e.$set(e.formItem,"source",t)},expression:"formItem.source"}},e._l(e.fetchData.source,(function(t){return a("Option",{key:t.Source,attrs:{value:t.Source}},[e._v(e._s(t.Source))])})),1)],1),a("FormItem",{attrs:{label:"库",prop:"database"}},[a("Select",{attrs:{filterable:""},on:{"on-change":e.fetchTable},model:{value:e.formItem.database,callback:function(t){e.$set(e.formItem,"database",t)},expression:"formItem.database"}},e._l(e.fetchData.base,(function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"表",prop:"table"}},[a("Select",{attrs:{filterable:""},model:{value:e.formItem.table,callback:function(t){e.$set(e.formItem,"table",t)},expression:"formItem.table"}},e._l(e.fetchData.table,(function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"最大影响行数",prop:"row"}},[a("InputNumber",{attrs:{min:1},model:{value:e.formItem.row,callback:function(t){e.$set(e.formItem,"row",t)},expression:"formItem.row"}})],1)],1)],1)],1)},r=[],n=(a("ac6a"),a("7514"),a("efd9")),i=a("bc3a"),c=a.n(i),s={name:"autoTask",mixins:[n["c"],n["a"],n["d"]],data:function(){return{openTask:!1,fetchList:{source:[],tp:[{title:"Insert",v:0},{title:"Update",v:1},{title:"Delete",v:2}]},task_columns:[{title:"名称",key:"Name"},{title:"类型",key:"Tp",slot:"tp"},{title:"数据源",key:"Source"},{title:"数据库",key:"Base"},{title:"数据表",key:"Table"},{title:"最大影响行数",key:"Affectrow"},{title:"状态",key:"status",slot:"status"},{title:"操作",key:"action",slot:"action"}],task_data:[],pg:1,wordList:[],formItem:{name:"",source:"",database:"",table:"",tp:0,row:1},find:{}}},methods:{referAutoTask:function(){var e=this;this.$refs["formItem"].validate((function(t){t?c.a.post("".concat(e.$config.url,"/").concat(e.diffArgs.url),{Tp:e.formItem}).then((function(t){e.$config.notice(t.data),e.fetchAutoTaskList(e.$refs.page.currentPage)})).catch((function(t){return e.$config.err_notice(e,t)})):e.$Message.error("请填写相关性信息！")}))},fetchAutoTaskList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;c.a.put("".concat(this.$config.url,"/auto/fetch"),{page:t,find:this.find}).then((function(t){e.task_data=t.data.data,e.task_data.forEach((function(e){1===e.Status?e.Status=!0:e.Status=!1})),e.pg=t.data.pg}))},openEditModal:function(e){this.showing=!0,this.formItem={id:e.ID,row:e.Affectrow,name:e.Name,table:"",database:"",tp:e.Tp},this.disable=!0,this.diffArgs={title:"编辑AutoTask",url:"auto/edit"}},delAutoTask:function(e){var t=this,a=this.$refs.page.currentPage;1===this.task_data.length&&(a-=1),c.a.delete("".concat(this.$config.url,"/auto/").concat(e.ID)).then((function(e){t.$config.notice(e.data),t.fetchAutoTaskList(a)})).catch((function(e){return t.$config.err_notice(t,e)}))},queryData:function(){this.find.valve=!0,this.fetchAutoTaskList()},queryCancel:function(){this.find=this.$config.clearPicker(this.find),this.fetchAutoTaskList()},activityStatus:function(e){var t=this,a=0;e.Status&&(a=1),c.a.post("".concat(this.$config.url,"/auto/active"),{Tp:{id:e.ID,status:a}}).then((function(e){return t.$config.notice(e.data)})).catch((function(e){return t.$config.err_notice(t,e)}))}},mounted:function(){var e=this;this.fetchAutoTaskList(),c.a.get("".concat(this.$config.url,"/auto")).then((function(t){e.fetchData.source=t.data})).catch((function(t){return e.$config.err_notice(e,t)}))}},l=s,u=(a("4fa5"),a("2877")),d=Object(u["a"])(l,o,r,!1,null,"0dbaedfa",null);t["default"]=d.exports},b5a8:function(e,t){ace.define("ace/theme/xcode",["require","exports","module","ace/lib/dom"],(function(e,t,a){t.isDark=!1,t.cssClass="ace-xcode",t.cssText=".ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}";var o=e("../lib/dom");o.importCssString(t.cssText,t.cssClass)}))},cd1c:function(e,t,a){var o=a("e853");e.exports=function(e,t){return new(o(e))(t)}},e853:function(e,t,a){var o=a("d3f4"),r=a("1169"),n=a("2b4c")("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),o(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}},efd9:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s}));var o=a("bc3a"),r=a.n(o),n={data:function(){return{showing:!1,disable:!1,diffArgs:{title:"新建AutoTask",url:"auto"}}},methods:{toggleShow:function(){this.showing=this.showing=!0,this.disable=!1,this.diffArgs={title:"新建AutoTask",url:"auto"}}}},i={data:function(){return{fetchData:{idc:[],source:[],base:[],table:[],assigned:[]}}},methods:{fetchSource:function(e){var t=this;e&&r.a.get("".concat(this.$config.url,"/fetch/source/").concat(e,"/dml")).then((function(e){"dml"===e.data.x?(t.fetchData.source=e.data.source,t.fetchData.assigned=e.data.assigned):t.$config.notice("非法劫持参数！")})).catch((function(e){t.$config.err_notice(t,e)}))},fetchBase:function(e){var t=this;e&&r.a.get("".concat(this.$config.url,"/fetch/base/").concat(e)).then((function(e){t.fetchData.base=e.data})).catch((function(e){t.$config.err_notice(t,e)}))},fetchIDC:function(){var e=this;r.a.get("".concat(this.$config.url,"/fetch/idc")).then((function(t){e.fetchData.idc=t.data})).catch((function(t){e.$config.err_notice(e,t)}))},fetchTable:function(){var e=this;this.formItem.database&&r.a.put("".concat(this.$config.url,"/fetch/table"),{source:this.formItem.source,base:this.formItem.database}).then((function(t){e.fetchData.table=t.data.table,e.wordList=e.$config.concat(e.wordList,t.data.highlight)})).catch((function(t){e.$config.err_notice(e,t)}))}}},c={data:function(){return{testColumns:[{title:"阶段",key:"Status",width:"150"},{title:"错误等级",key:"Level",width:"100"},{title:"错误信息",key:"Error",tooltip:!0},{title:"当前检查的sql",key:"SQL",tooltip:!0},{title:"影响行数",key:"AffectRows",width:"120"}],ruleValidate:{idc:[{required:!0,message:"环境地址不得为空",trigger:"change"}],source:[{required:!0,message:"连接名不得为空",trigger:"change"}],database:[{required:!0,message:"数据库名不得为空",trigger:"change"}],table:[{required:!0,message:"数据表名不得为空",trigger:"change"}],tp:[{required:!0,message:"类型不得为空",trigger:"change"}],name:[{required:!0,message:"名称不得为空",trigger:"blur"}],text:[{required:!0,message:"提交说明不得为空",trigger:"blur"}],assigned:[{required:!0,message:"审核人不得为空",trigger:"change"}],backup:{required:!0,type:"number",message:"备份不得为空",trigger:"change"}},invalidDate:{disabledDate:function(e){return e&&e.valueOf()<Date.now()-864e5}}}},methods:{clearForm:function(){this.formItem=this.$config.clearObj(this.formItem)},setCompletions:function(e,t,a,o,r){r(null,this.wordList.map((function(e){return{caption:e.vl,value:e.vl,meta:e.meta}})))},editorInit:function(){a("61fa"),a("b5a8")}}},s={data:function(){return{connectionList:{connection:[],person:[],query:[]},pagenumber:1,data6:[],query:{username:"",valve:!1},indeterminate:{ddl:!0,dml:!0,query:!0,person:!0},checkAll:{ddl:!1,dml:!1,query:!1,person:!1},permission:{ddl:"0",ddlsource:[],dml:"0",dmlsource:[],query:"0",querysource:[],user:"0",base:"0",auditor:[]},addAuthGroupModal:!1,isReadOnly:!1}},methods:{queryData:function(){this.query.valve=!0,this.refreshgroup()},queryCancel:function(){this.$config.clearObj(this.query),this.refreshgroup()},batchOpen:function(){this.addAuthGroupModal=!0,this.isReadOnly=!1,this.addAuthGroupForm.groupname="",this.permission=this.$config.clearOption(this.permission),this.refreshgroup()},editAuthGroup:function(e){this.isReadOnly=!0,this.addAuthGroupModal=!0,this.id=e.ID,this.addAuthGroupForm.groupname=e.Name,this.permission=e.Permissions},ddlCheckAll:function(e,t,a){this.checkAll[t]=!this.checkAll[t],this.indeterminate[t]=!1,this.checkAll[t]?this.permission[e]="person"===a?this.connectionList[a].map((function(e){return e.Username})):this.connectionList[a].map((function(e){return e.Source})):this.permission[e]=[]}}}}}]);
//# sourceMappingURL=chunk-61b219b0.f4da5fcc.js.map