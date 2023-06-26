// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.platform');
goog.require('cljs.core');
goog.require('clojure.string');
speclj.platform.endl = "\n";
speclj.platform.file_separator = "/";
speclj.platform.re_type = cljs.core.type.call(null,/./);
speclj.platform.re_QMARK_ = (function speclj$platform$re_QMARK_(obj){
return cljs.core._EQ_.call(null,speclj.platform.re_type,cljs.core.type.call(null,obj));
});

/**
* @constructor
*/
speclj.platform.SpecFailure = (function (message){
this.message = message;
});

(speclj.platform.SpecFailure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(speclj.platform.SpecFailure.cljs$lang$type = true);

(speclj.platform.SpecFailure.cljs$lang$ctorStr = "speclj.platform/SpecFailure");

(speclj.platform.SpecFailure.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.platform/SpecFailure");
}));

/**
 * Positional factory function for speclj.platform/SpecFailure.
 */
speclj.platform.__GT_SpecFailure = (function speclj$platform$__GT_SpecFailure(message){
return (new speclj.platform.SpecFailure(message));
});


/**
* @constructor
*/
speclj.platform.SpecPending = (function (message){
this.message = message;
});

(speclj.platform.SpecPending.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(speclj.platform.SpecPending.cljs$lang$type = true);

(speclj.platform.SpecPending.cljs$lang$ctorStr = "speclj.platform/SpecPending");

(speclj.platform.SpecPending.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.platform/SpecPending");
}));

/**
 * Positional factory function for speclj.platform/SpecPending.
 */
speclj.platform.__GT_SpecPending = (function speclj$platform$__GT_SpecPending(message){
return (new speclj.platform.SpecPending(message));
});

speclj.platform.bound_by_should_invoke_QMARK_ = (function speclj$platform$bound_by_should_invoke_QMARK_(){
return speclj.platform._STAR_bound_by_should_invoke_STAR_;
});
speclj.platform.throwable = Object;
speclj.platform.exception = Error;
speclj.platform.failure = speclj.platform.SpecFailure;
speclj.platform.pending = speclj.platform.SpecPending;
speclj.platform.difference_greater_than_delta_QMARK_ = (function speclj$platform$difference_greater_than_delta_QMARK_(expected,actual,delta){
return (Math.abs((expected - actual)) > Math.abs(delta));
});
speclj.platform.pending_QMARK_ = (function speclj$platform$pending_QMARK_(e){
return cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,e),speclj.platform.pending);
});
speclj.platform.failure_QMARK_ = (function speclj$platform$failure_QMARK_(e){
return cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,e),speclj.platform.failure);
});
speclj.platform.error_message = (function speclj$platform$error_message(e){
return e.message;
});
speclj.platform.failure_source = (function speclj$platform$failure_source(e){
if(cljs.core.truth_(e.fileName)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.fileName),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = e.lineNumber;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})())].join('');
} else {
if(cljs.core.truth_(e.stack)){
return clojure.string.trim.call(null,cljs.core.nth.call(null,clojure.string.split_lines.call(null,e.stack),cljs.core.count.call(null,clojure.string.split_lines.call(null,e.message))));
} else {
return "unkown-file:?";

}
}
});
speclj.platform.stack_trace = (function speclj$platform$stack_trace(e){
return cljs.core.rest.call(null,clojure.string.split_lines.call(null,(function (){var or__4126__auto__ = e.stack;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e.toString();
}
})()));
});
speclj.platform.cause = (function speclj$platform$cause(e){
return null;
});
speclj.platform.print_stack_trace = (function speclj$platform$print_stack_trace(e){
return cljs.core.println.call(null,(function (){var or__4126__auto__ = e.stack;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "missing stack trace";
}
})());
});
speclj.platform.elide_level_QMARK_ = (function speclj$platform$elide_level_QMARK_(stack_element){
return false;
});
speclj.platform.type_name = (function speclj$platform$type_name(t){
if(cljs.core.truth_(t)){
return t.name;
} else {
return "nil";
}
});
speclj.platform.format_seconds = (function speclj$platform$format_seconds(secs){
return secs.toFixed((5));
});
speclj.platform.current_time = (function speclj$platform$current_time(){
return (new Date()).getTime();
});
speclj.platform.secs_since = (function speclj$platform$secs_since(start){
return (((new Date()).getTime() - start) / 1000.0);
});
(cljs.core._STAR_print_fn_STAR_ = (function (thing){
return console.log(thing);
}));
speclj.platform.dynamically_invoke = (function speclj$platform$dynamically_invoke(ns_name,fn_name){
var code = [clojure.string.replace.call(null,ns_name,"-","_"),".",clojure.string.replace.call(null,fn_name,"-","_"),"();"].join('');
return eval(code);
});

//# sourceMappingURL=platform.js.map
