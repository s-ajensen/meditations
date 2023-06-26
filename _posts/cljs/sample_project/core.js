// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('sample_project.components');
sample_project.core.main = (function sample_project$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sample_project.components.main], null),document.getElementById("app"));
});
goog.exportSymbol('sample_project.core.main', sample_project.core.main);
sample_project.core.main();
