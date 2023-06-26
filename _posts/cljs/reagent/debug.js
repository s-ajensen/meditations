// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13324__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13325__i = 0, G__13325__a = new Array(arguments.length -  0);
while (G__13325__i < G__13325__a.length) {G__13325__a[G__13325__i] = arguments[G__13325__i + 0]; ++G__13325__i;}
  args = new cljs.core.IndexedSeq(G__13325__a,0,null);
} 
return G__13324__delegate.call(this,args);};
G__13324.cljs$lang$maxFixedArity = 0;
G__13324.cljs$lang$applyTo = (function (arglist__13326){
var args = cljs.core.seq(arglist__13326);
return G__13324__delegate(args);
});
G__13324.cljs$core$IFn$_invoke$arity$variadic = G__13324__delegate;
return G__13324;
})()
);

(o.error = (function() { 
var G__13327__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13328__i = 0, G__13328__a = new Array(arguments.length -  0);
while (G__13328__i < G__13328__a.length) {G__13328__a[G__13328__i] = arguments[G__13328__i + 0]; ++G__13328__i;}
  args = new cljs.core.IndexedSeq(G__13328__a,0,null);
} 
return G__13327__delegate.call(this,args);};
G__13327.cljs$lang$maxFixedArity = 0;
G__13327.cljs$lang$applyTo = (function (arglist__13329){
var args = cljs.core.seq(arglist__13329);
return G__13327__delegate(args);
});
G__13327.cljs$core$IFn$_invoke$arity$variadic = G__13327__delegate;
return G__13327;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
