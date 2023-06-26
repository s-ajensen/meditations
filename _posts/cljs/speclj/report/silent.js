// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.report.silent');
goog.require('cljs.core');
goog.require('speclj.reporting');

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.silent.SilentReporter = (function (passes,fails,results){
this.passes = passes;
this.fails = fails;
this.results = results;
});
(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (this$,results__$1){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (this$,exception){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.silent.SilentReporter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"passes","passes",-501330314,null),new cljs.core.Symbol(null,"fails","fails",1758545447,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.report.silent.SilentReporter.cljs$lang$type = true);

(speclj.report.silent.SilentReporter.cljs$lang$ctorStr = "speclj.report.silent/SilentReporter");

(speclj.report.silent.SilentReporter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.report.silent/SilentReporter");
}));

/**
 * Positional factory function for speclj.report.silent/SilentReporter.
 */
speclj.report.silent.__GT_SilentReporter = (function speclj$report$silent$__GT_SilentReporter(passes,fails,results){
return (new speclj.report.silent.SilentReporter(passes,fails,results));
});

speclj.report.silent.new_silent_reporter = (function speclj$report$silent$new_silent_reporter(){
return (new speclj.report.silent.SilentReporter(cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,null)));
});

//# sourceMappingURL=silent.js.map
