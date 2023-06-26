// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sample_project.move');
goog.require('sample_project.util');
sample_project.game.build_board = (function sample_project$game$build_board(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$3x3,sample_project.util.new_game.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$4x4,sample_project.util.new_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((16),null)], 0))], null),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(state));
});
sample_project.game.build_game = (function sample_project$game$build_game(state){
var board = sample_project.game.build_board(state);
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(state);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cvp,mode)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cvc,mode)))){
return sample_project.move.move((0),"X",board);
} else {
return board;
}
});
if((typeof sample_project !== 'undefined') && (typeof sample_project.game !== 'undefined') && (typeof sample_project.game.progress_game !== 'undefined')){
} else {
sample_project.game.progress_game = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14274 = cljs.core.get_global_hierarchy;
return (fexpr__14274.cljs$core$IFn$_invoke$arity$0 ? fexpr__14274.cljs$core$IFn$_invoke$arity$0() : fexpr__14274.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sample-project.game","progress-game"),cljs.core.cst$kw$mode,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sample_project.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pvp,(function (state,selection){
var board = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
return sample_project.move.move(selection,sample_project.move.cur_token(board),board);
}));
sample_project.game.progress_ai = (function sample_project$game$progress_ai(state,selection){
var board = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(state);
var G__14275 = cljs.core.cst$kw$difficulty.cljs$core$IFn$_invoke$arity$1(state);
var G__14276 = sample_project.move.move(selection,sample_project.move.cur_token(board),board);
return (sample_project.move.next_move.cljs$core$IFn$_invoke$arity$2 ? sample_project.move.next_move.cljs$core$IFn$_invoke$arity$2(G__14275,G__14276) : sample_project.move.next_move.call(null,G__14275,G__14276));
});
sample_project.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pvc,(function (state,selection){
return sample_project.game.progress_ai(state,selection);
}));
sample_project.game.progress_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cvp,(function (state,selection){
return sample_project.game.progress_ai(state,selection);
}));
