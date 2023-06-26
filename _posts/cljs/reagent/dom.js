// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14355 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14356 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14356);

try{var G__14357 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14358 = container;
var G__14359 = (function (){
var _STAR_always_update_STAR__orig_val__14360 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14361 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14361);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14360);
}});
return reagent.dom.global$module$react_dom.render(G__14357,G__14358,G__14359);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14355);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14363 = arguments.length;
switch (G__14363) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__14364 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__14368_14384 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14369_14385 = null;
var count__14370_14386 = (0);
var i__14371_14387 = (0);
while(true){
if((i__14371_14387 < count__14370_14386)){
var vec__14378_14388 = chunk__14369_14385.cljs$core$IIndexed$_nth$arity$2(null,i__14371_14387);
var container_14389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378_14388,(0),null);
var comp_14390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378_14388,(1),null);
reagent.dom.re_render_component(comp_14390,container_14389);


var G__14391 = seq__14368_14384;
var G__14392 = chunk__14369_14385;
var G__14393 = count__14370_14386;
var G__14394 = (i__14371_14387 + (1));
seq__14368_14384 = G__14391;
chunk__14369_14385 = G__14392;
count__14370_14386 = G__14393;
i__14371_14387 = G__14394;
continue;
} else {
var temp__5753__auto___14395 = cljs.core.seq(seq__14368_14384);
if(temp__5753__auto___14395){
var seq__14368_14396__$1 = temp__5753__auto___14395;
if(cljs.core.chunked_seq_QMARK_(seq__14368_14396__$1)){
var c__4556__auto___14397 = cljs.core.chunk_first(seq__14368_14396__$1);
var G__14398 = cljs.core.chunk_rest(seq__14368_14396__$1);
var G__14399 = c__4556__auto___14397;
var G__14400 = cljs.core.count(c__4556__auto___14397);
var G__14401 = (0);
seq__14368_14384 = G__14398;
chunk__14369_14385 = G__14399;
count__14370_14386 = G__14400;
i__14371_14387 = G__14401;
continue;
} else {
var vec__14381_14402 = cljs.core.first(seq__14368_14396__$1);
var container_14403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14381_14402,(0),null);
var comp_14404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14381_14402,(1),null);
reagent.dom.re_render_component(comp_14404,container_14403);


var G__14405 = cljs.core.next(seq__14368_14396__$1);
var G__14406 = null;
var G__14407 = (0);
var G__14408 = (0);
seq__14368_14384 = G__14405;
chunk__14369_14385 = G__14406;
count__14370_14386 = G__14407;
i__14371_14387 = G__14408;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
