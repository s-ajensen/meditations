// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.move');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sample_project.util');
sample_project.move.move = (function sample_project$move$move(n,t,board){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,n) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,n,t);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["tile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"is already occupied!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(board)], null));
}
});
sample_project.move.cur_token = (function sample_project$move$cur_token(board){
var x = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("X",p1__14259_SHARP_);
}),board));
var y = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14260_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("O",p1__14260_SHARP_);
}),board));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return "X";
} else {
return "O";
}
});
sample_project.move.next_token = (function sample_project$move$next_token(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sample_project.move.cur_token(board),"X")){
return "O";
} else {
return "X";
}
});
sample_project.move.open_moves = (function sample_project$move$open_moves(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__14261_SHARP_),null);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,board)));
});
sample_project.move.reverse_diag = (function sample_project$move$reverse_diag(board){
return cljs.core.flatten(cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(sample_project.util.length(board),board)));
});
sample_project.move.winnable_lines = (function sample_project$move$winnable_lines(board){
var length = sample_project.util.length(board);
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(length,board);
var cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14262_SHARP_){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(length,p1__14262_SHARP_);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.iterate(cljs.core.rest,board)));
var diag = (new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((length + (1)),board),(new cljs.core.List(null,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((length + (1)),sample_project.move.reverse_diag(board)),null,(1),null)),(2),null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diag], 0));
});
sample_project.move.win_QMARK_ = (function sample_project$move$win_QMARK_(board){
return cljs.core.some((function (p1__14266_SHARP_){
return (!(cljs.core.every_QMARK_(cljs.core.nil_QMARK_,p1__14266_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14265_SHARP_){
return cljs.core.flatten(p1__14265_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14264_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p1__14264_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14263_SHARP_){
return cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,p1__14263_SHARP_);
}),sample_project.move.winnable_lines(board)))));
});
sample_project.move.tie_QMARK_ = (function sample_project$move$tie_QMARK_(board){
return ((cljs.core.not(sample_project.move.win_QMARK_(board))) && (cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,board))));
});
sample_project.move.game_over_QMARK_ = (function sample_project$move$game_over_QMARK_(board){
var or__4126__auto__ = sample_project.move.win_QMARK_(board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,board));
}
});
sample_project.move.winner = (function sample_project$move$winner(board){
if(sample_project.move.tie_QMARK_(board)){
return cljs.core.cst$kw$tie;
} else {
if(cljs.core.not(sample_project.move.win_QMARK_(board))){
return null;
} else {
return sample_project.move.next_token(board);

}
}
});
sample_project.move.prioritize = (function sample_project$move$prioritize(board,depth){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([depth], 0));

if(cljs.core.truth_(sample_project.move.win_QMARK_(board))){
return ((10) - depth);
} else {
if(sample_project.move.tie_QMARK_(board)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),depth)){
return (0);
} else {
var best = (sample_project.move.best_move.cljs$core$IFn$_invoke$arity$1 ? sample_project.move.best_move.cljs$core$IFn$_invoke$arity$1(board) : sample_project.move.best_move.call(null,board));
return ((-1) * (function (){var G__14267 = sample_project.move.move(best,sample_project.move.cur_token(board),board);
var G__14268 = (depth + (1));
return (sample_project.move.prioritize.cljs$core$IFn$_invoke$arity$2 ? sample_project.move.prioritize.cljs$core$IFn$_invoke$arity$2(G__14267,G__14268) : sample_project.move.prioritize.call(null,G__14267,G__14268));
})());

}
}
}
});
sample_project.move.prioritize = cljs.core.memoize(sample_project.move.prioritize);
sample_project.move.max_move = (function sample_project$move$max_move(moves){
return cljs.core.first(cljs.core.first(moves));
});
sample_project.move.possible_moves = (function sample_project$move$possible_moves(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14269_SHARP_){
return sample_project.move.move(p1__14269_SHARP_,sample_project.move.cur_token(board),board);
}),sample_project.move.open_moves(board));
});
sample_project.move.sort_moves = (function sample_project$move$sort_moves(board){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._GT_,cljs.core.zipmap(sample_project.move.open_moves(board),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14270_SHARP_){
return (sample_project.move.prioritize.cljs$core$IFn$_invoke$arity$2 ? sample_project.move.prioritize.cljs$core$IFn$_invoke$arity$2(p1__14270_SHARP_,(0)) : sample_project.move.prioritize.call(null,p1__14270_SHARP_,(0)));
}),sample_project.move.possible_moves(board))));
});
sample_project.move.best_move = (function sample_project$move$best_move(board){
return sample_project.move.max_move(sample_project.move.sort_moves(board));
});
if((typeof sample_project !== 'undefined') && (typeof sample_project.move !== 'undefined') && (typeof sample_project.move.next_move !== 'undefined')){
} else {
sample_project.move.next_move = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14271 = cljs.core.get_global_hierarchy;
return (fexpr__14271.cljs$core$IFn$_invoke$arity$0 ? fexpr__14271.cljs$core$IFn$_invoke$arity$0() : fexpr__14271.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sample-project.move","next-move"),(function (difficulty,board){
return difficulty;
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sample_project.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,board){
return sample_project.move.move(sample_project.move.best_move(board),sample_project.move.cur_token(board),board);
}));
sample_project.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$easy,(function (_,board){
var chosen_move = cljs.core.first(cljs.core.last(sample_project.move.sort_moves(board)));
return sample_project.move.move(chosen_move,sample_project.move.cur_token(board),board);
}));
sample_project.move.next_move.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$med,(function (_,board){
var chosen_move = cljs.core.first(cljs.core.second(cljs.core.cycle(sample_project.move.sort_moves(board))));
return sample_project.move.move(chosen_move,sample_project.move.cur_token(board),board);
}));
