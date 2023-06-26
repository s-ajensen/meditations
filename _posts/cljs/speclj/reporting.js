// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__19171_SHARP_){
return p1__19171_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_19172 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_19172.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_19173 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_19173.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_19174 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_19174.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_19175 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_19175.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_19176 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_19176.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_19177 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_19177.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_19178 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_19178.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__19179 = cljs.core.seq.call(null,reporters);
var chunk__19180 = null;
var count__19181 = (0);
var i__19182 = (0);
while(true){
if((i__19182 < count__19181)){
var reporter = cljs.core._nth.call(null,chunk__19180,i__19182);
speclj.reporting.report_pass.call(null,reporter,result);


var G__19183 = seq__19179;
var G__19184 = chunk__19180;
var G__19185 = count__19181;
var G__19186 = (i__19182 + (1));
seq__19179 = G__19183;
chunk__19180 = G__19184;
count__19181 = G__19185;
i__19182 = G__19186;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19179);
if(temp__5753__auto__){
var seq__19179__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19179__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19179__$1);
var G__19187 = cljs.core.chunk_rest.call(null,seq__19179__$1);
var G__19188 = c__4556__auto__;
var G__19189 = cljs.core.count.call(null,c__4556__auto__);
var G__19190 = (0);
seq__19179 = G__19187;
chunk__19180 = G__19188;
count__19181 = G__19189;
i__19182 = G__19190;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19179__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__19191 = cljs.core.next.call(null,seq__19179__$1);
var G__19192 = null;
var G__19193 = (0);
var G__19194 = (0);
seq__19179 = G__19191;
chunk__19180 = G__19192;
count__19181 = G__19193;
i__19182 = G__19194;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__19195 = cljs.core.seq.call(null,reporters);
var chunk__19196 = null;
var count__19197 = (0);
var i__19198 = (0);
while(true){
if((i__19198 < count__19197)){
var reporter = cljs.core._nth.call(null,chunk__19196,i__19198);
speclj.reporting.report_fail.call(null,reporter,result);


var G__19199 = seq__19195;
var G__19200 = chunk__19196;
var G__19201 = count__19197;
var G__19202 = (i__19198 + (1));
seq__19195 = G__19199;
chunk__19196 = G__19200;
count__19197 = G__19201;
i__19198 = G__19202;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19195);
if(temp__5753__auto__){
var seq__19195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19195__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19195__$1);
var G__19203 = cljs.core.chunk_rest.call(null,seq__19195__$1);
var G__19204 = c__4556__auto__;
var G__19205 = cljs.core.count.call(null,c__4556__auto__);
var G__19206 = (0);
seq__19195 = G__19203;
chunk__19196 = G__19204;
count__19197 = G__19205;
i__19198 = G__19206;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19195__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__19207 = cljs.core.next.call(null,seq__19195__$1);
var G__19208 = null;
var G__19209 = (0);
var G__19210 = (0);
seq__19195 = G__19207;
chunk__19196 = G__19208;
count__19197 = G__19209;
i__19198 = G__19210;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__19211 = cljs.core.seq.call(null,reporters);
var chunk__19212 = null;
var count__19213 = (0);
var i__19214 = (0);
while(true){
if((i__19214 < count__19213)){
var reporter = cljs.core._nth.call(null,chunk__19212,i__19214);
speclj.reporting.report_pending.call(null,reporter,result);


var G__19215 = seq__19211;
var G__19216 = chunk__19212;
var G__19217 = count__19213;
var G__19218 = (i__19214 + (1));
seq__19211 = G__19215;
chunk__19212 = G__19216;
count__19213 = G__19217;
i__19214 = G__19218;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19211);
if(temp__5753__auto__){
var seq__19211__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19211__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19211__$1);
var G__19219 = cljs.core.chunk_rest.call(null,seq__19211__$1);
var G__19220 = c__4556__auto__;
var G__19221 = cljs.core.count.call(null,c__4556__auto__);
var G__19222 = (0);
seq__19211 = G__19219;
chunk__19212 = G__19220;
count__19213 = G__19221;
i__19214 = G__19222;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19211__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__19223 = cljs.core.next.call(null,seq__19211__$1);
var G__19224 = null;
var G__19225 = (0);
var G__19226 = (0);
seq__19211 = G__19223;
chunk__19212 = G__19224;
count__19213 = G__19225;
i__19214 = G__19226;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__19227 = cljs.core.seq.call(null,reporters);
var chunk__19228 = null;
var count__19229 = (0);
var i__19230 = (0);
while(true){
if((i__19230 < count__19229)){
var reporter = cljs.core._nth.call(null,chunk__19228,i__19230);
speclj.reporting.report_error.call(null,reporter,result);


var G__19231 = seq__19227;
var G__19232 = chunk__19228;
var G__19233 = count__19229;
var G__19234 = (i__19230 + (1));
seq__19227 = G__19231;
chunk__19228 = G__19232;
count__19229 = G__19233;
i__19230 = G__19234;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19227);
if(temp__5753__auto__){
var seq__19227__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19227__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19227__$1);
var G__19235 = cljs.core.chunk_rest.call(null,seq__19227__$1);
var G__19236 = c__4556__auto__;
var G__19237 = cljs.core.count.call(null,c__4556__auto__);
var G__19238 = (0);
seq__19227 = G__19235;
chunk__19228 = G__19236;
count__19229 = G__19237;
i__19230 = G__19238;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19227__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__19239 = cljs.core.next.call(null,seq__19227__$1);
var G__19240 = null;
var G__19241 = (0);
var G__19242 = (0);
seq__19227 = G__19239;
chunk__19228 = G__19240;
count__19229 = G__19241;
i__19230 = G__19242;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_19243 = speclj.platform.stack_trace.call(null,exception);
var elides_19244 = (0);
while(true){
if(cljs.core.seq.call(null,levels_19243)){
var level_19245 = cljs.core.first.call(null,levels_19243);
if(speclj.platform.elide_level_QMARK_.call(null,level_19245)){
var G__19246 = cljs.core.rest.call(null,levels_19243);
var G__19247 = (elides_19244 + (1));
levels_19243 = G__19246;
elides_19244 = G__19247;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_19244);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_19245));

var G__19248 = cljs.core.rest.call(null,levels_19243);
var G__19249 = (0);
levels_19243 = G__19248;
elides_19244 = G__19249;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_19244);
}
break;
}

var temp__5751__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5751__auto__)){
var cause = temp__5751__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19250_19254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19251_19255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19252_19256 = true;
var _STAR_print_fn_STAR__temp_val__19253_19257 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19252_19256);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19253_19257);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19251_19255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19250_19254);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19261 = arguments.length;
var i__4737__auto___19262 = (0);
while(true){
if((i__4737__auto___19262 < len__4736__auto___19261)){
args__4742__auto__.push((arguments[i__4737__auto___19262]));

var G__19263 = (i__4737__auto___19262 + (1));
i__4737__auto___19262 = G__19263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__19258_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19258_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq19259){
var G__19260 = cljs.core.first.call(null,seq19259);
var seq19259__$1 = cljs.core.next.call(null,seq19259);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19260,seq19259__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19266 = arguments.length;
var i__4737__auto___19267 = (0);
while(true){
if((i__4737__auto___19267 < len__4736__auto___19266)){
args__4742__auto__.push((arguments[i__4737__auto___19267]));

var G__19268 = (i__4737__auto___19267 + (1));
i__4737__auto___19267 = G__19268;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq19264){
var G__19265 = cljs.core.first.call(null,seq19264);
var seq19264__$1 = cljs.core.next.call(null,seq19264);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19265,seq19264__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__19269 = cljs.core.seq.call(null,reporters);
var chunk__19270 = null;
var count__19271 = (0);
var i__19272 = (0);
while(true){
if((i__19272 < count__19271)){
var reporter = cljs.core._nth.call(null,chunk__19270,i__19272);
speclj.reporting.report_description.call(null,reporter,description);


var G__19273 = seq__19269;
var G__19274 = chunk__19270;
var G__19275 = count__19271;
var G__19276 = (i__19272 + (1));
seq__19269 = G__19273;
chunk__19270 = G__19274;
count__19271 = G__19275;
i__19272 = G__19276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19269);
if(temp__5753__auto__){
var seq__19269__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19269__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19269__$1);
var G__19277 = cljs.core.chunk_rest.call(null,seq__19269__$1);
var G__19278 = c__4556__auto__;
var G__19279 = cljs.core.count.call(null,c__4556__auto__);
var G__19280 = (0);
seq__19269 = G__19277;
chunk__19270 = G__19278;
count__19271 = G__19279;
i__19272 = G__19280;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19269__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__19281 = cljs.core.next.call(null,seq__19269__$1);
var G__19282 = null;
var G__19283 = (0);
var G__19284 = (0);
seq__19269 = G__19281;
chunk__19270 = G__19282;
count__19271 = G__19283;
i__19272 = G__19284;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__19285 = cljs.core.seq.call(null,reporters);
var chunk__19286 = null;
var count__19287 = (0);
var i__19288 = (0);
while(true){
if((i__19288 < count__19287)){
var reporter = cljs.core._nth.call(null,chunk__19286,i__19288);
speclj.reporting.report_runs.call(null,reporter,results);


var G__19289 = seq__19285;
var G__19290 = chunk__19286;
var G__19291 = count__19287;
var G__19292 = (i__19288 + (1));
seq__19285 = G__19289;
chunk__19286 = G__19290;
count__19287 = G__19291;
i__19288 = G__19292;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19285);
if(temp__5753__auto__){
var seq__19285__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19285__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19285__$1);
var G__19293 = cljs.core.chunk_rest.call(null,seq__19285__$1);
var G__19294 = c__4556__auto__;
var G__19295 = cljs.core.count.call(null,c__4556__auto__);
var G__19296 = (0);
seq__19285 = G__19293;
chunk__19286 = G__19294;
count__19287 = G__19295;
i__19288 = G__19296;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19285__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__19297 = cljs.core.next.call(null,seq__19285__$1);
var G__19298 = null;
var G__19299 = (0);
var G__19300 = (0);
seq__19285 = G__19297;
chunk__19286 = G__19298;
count__19287 = G__19299;
i__19288 = G__19300;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__19301 = cljs.core.seq.call(null,reporters);
var chunk__19302 = null;
var count__19303 = (0);
var i__19304 = (0);
while(true){
if((i__19304 < count__19303)){
var reporter = cljs.core._nth.call(null,chunk__19302,i__19304);
speclj.reporting.report_message.call(null,reporter,message);


var G__19305 = seq__19301;
var G__19306 = chunk__19302;
var G__19307 = count__19303;
var G__19308 = (i__19304 + (1));
seq__19301 = G__19305;
chunk__19302 = G__19306;
count__19303 = G__19307;
i__19304 = G__19308;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19301);
if(temp__5753__auto__){
var seq__19301__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19301__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19301__$1);
var G__19309 = cljs.core.chunk_rest.call(null,seq__19301__$1);
var G__19310 = c__4556__auto__;
var G__19311 = cljs.core.count.call(null,c__4556__auto__);
var G__19312 = (0);
seq__19301 = G__19309;
chunk__19302 = G__19310;
count__19303 = G__19311;
i__19304 = G__19312;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19301__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__19313 = cljs.core.next.call(null,seq__19301__$1);
var G__19314 = null;
var G__19315 = (0);
var G__19316 = (0);
seq__19301 = G__19313;
chunk__19302 = G__19314;
count__19303 = G__19315;
i__19304 = G__19316;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__19317 = cljs.core.seq.call(null,reporters);
var chunk__19318 = null;
var count__19319 = (0);
var i__19320 = (0);
while(true){
if((i__19320 < count__19319)){
var reporter = cljs.core._nth.call(null,chunk__19318,i__19320);
speclj.reporting.report_error.call(null,reporter,exception);


var G__19321 = seq__19317;
var G__19322 = chunk__19318;
var G__19323 = count__19319;
var G__19324 = (i__19320 + (1));
seq__19317 = G__19321;
chunk__19318 = G__19322;
count__19319 = G__19323;
i__19320 = G__19324;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__19317);
if(temp__5753__auto__){
var seq__19317__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19317__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19317__$1);
var G__19325 = cljs.core.chunk_rest.call(null,seq__19317__$1);
var G__19326 = c__4556__auto__;
var G__19327 = cljs.core.count.call(null,c__4556__auto__);
var G__19328 = (0);
seq__19317 = G__19325;
chunk__19318 = G__19326;
count__19319 = G__19327;
i__19320 = G__19328;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__19317__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__19329 = cljs.core.next.call(null,seq__19317__$1);
var G__19330 = null;
var G__19331 = (0);
var G__19332 = (0);
seq__19317 = G__19329;
chunk__19318 = G__19330;
count__19319 = G__19331;
i__19320 = G__19332;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
