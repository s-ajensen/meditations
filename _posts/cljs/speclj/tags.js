// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.tags');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('speclj.config');
speclj.tags.pass_includes_QMARK_ = (function speclj$tags$pass_includes_QMARK_(includes,tags){
if(cljs.core.empty_QMARK_.call(null,includes)){
return true;
} else {
return cljs.core._EQ_.call(null,includes,clojure.set.intersection.call(null,includes,cljs.core.set.call(null,tags)));
}
});
speclj.tags.pass_excludes_QMARK_ = (function speclj$tags$pass_excludes_QMARK_(excludes,tags){
if(cljs.core.empty_QMARK_.call(null,excludes)){
return true;
} else {
return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__20332_SHARP_){
return cljs.core.contains_QMARK_.call(null,excludes,p1__20332_SHARP_);
}),tags));
}
});
speclj.tags.pass_tag_filter_QMARK_ = (function speclj$tags$pass_tag_filter_QMARK_(var_args){
var G__20334 = arguments.length;
switch (G__20334) {
case 1:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (tags){
return speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.config._STAR_tag_filter_STAR_,tags);
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (filter,tags){
return ((speclj.tags.pass_includes_QMARK_.call(null,new cljs.core.Keyword(null,"includes","includes",-438304563).cljs$core$IFn$_invoke$arity$1(filter),tags)) && (speclj.tags.pass_excludes_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(filter),tags)));
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$lang$maxFixedArity = 2);

speclj.tags.tags_for = (function speclj$tags$tags_for(context){
if(cljs.core.truth_(context)){
return clojure.set.union.call(null,speclj.tags.tags_for.call(null,cljs.core.deref.call(null,context.parent)),cljs.core.deref.call(null,context.tags));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
speclj.tags.tag_sets_for = (function speclj$tags$tag_sets_for(context){
var context_seq = cljs.core.tree_seq.call(null,(function (p1__20336_SHARP_){
return (!((p1__20336_SHARP_ == null)));
}),(function (p1__20337_SHARP_){
return cljs.core.deref.call(null,p1__20337_SHARP_.children);
}),context);
return cljs.core.map.call(null,speclj.tags.tags_for,context_seq);
});
speclj.tags.context_with_tags_seq = (function speclj$tags$context_with_tags_seq(context){
var context_seq = cljs.core.tree_seq.call(null,(function (p1__20338_SHARP_){
return (!((p1__20338_SHARP_ == null)));
}),(function (p1__20339_SHARP_){
return cljs.core.deref.call(null,p1__20339_SHARP_.children);
}),context);
return cljs.core.map.call(null,(function (p1__20340_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"tag-set","tag-set",-711527597)],[p1__20340_SHARP_,speclj.tags.tags_for.call(null,p1__20340_SHARP_)]);
}),context_seq);
});
speclj.tags.describe_filter = (function speclj$tags$describe_filter(var_args){
var G__20342 = arguments.length;
switch (G__20342) {
case 0:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0 = (function (){
return speclj.tags.describe_filter.call(null,speclj.config._STAR_tag_filter_STAR_);
}));

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1 = (function (filter){
var includes = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"includes","includes",-438304563).cljs$core$IFn$_invoke$arity$1(filter)));
var excludes = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(filter)));
if(((includes) || (excludes))){
return ["Filtering tags.",((includes)?[" Including: ",clojure.string.join.call(null,", ",includes),"."].join(''):null),((excludes)?[" Excluding: ",clojure.string.join.call(null,", ",excludes),"."].join(''):null)].join('');
} else {
return null;
}
}));

(speclj.tags.describe_filter.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=tags.js.map
