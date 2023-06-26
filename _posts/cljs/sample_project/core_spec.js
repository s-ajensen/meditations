// Compiled by ClojureScript 1.10.764 {}
goog.provide('sample_project.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('reagent.core');
goog.require('sample_project.components');
goog.require('sample_project.util');
sample_project.core_spec.contains_like_QMARK_ = (function sample_project$core_spec$contains_like_QMARK_(coll,target){
return clojure.set.subset_QMARK_.call(null,clojure.set(target),clojure.set(coll));
});
sample_project.core_spec.get_by_type = (function sample_project$core_spec$get_by_type(coll,target){
var tags = cljs.core.filter.call(null,cljs.core.sequential_QMARK_,coll);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__22043_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__22043_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function sample_project$core_spec$get_by_type_$_iter__22044(s__22045){
return (new cljs.core.LazySeq(null,(function (){
var s__22045__$1 = s__22045;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__22045__$1);
if(temp__5753__auto__){
var s__22045__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22045__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__22045__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__22047 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__22046 = (0);
while(true){
if((i__22046 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__22046);
cljs.core.chunk_append.call(null,b__22047,sample_project.core_spec.get_by_type.call(null,tag,target));

var G__22048 = (i__22046 + (1));
i__22046 = G__22048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22047),sample_project$core_spec$get_by_type_$_iter__22044.call(null,cljs.core.chunk_rest.call(null,s__22045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22047),null);
}
} else {
var tag = cljs.core.first.call(null,s__22045__$2);
return cljs.core.cons.call(null,sample_project.core_spec.get_by_type.call(null,tag,target),sample_project$core_spec$get_by_type_$_iter__22044.call(null,cljs.core.rest.call(null,s__22045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tags);
})());
});
var description__8012__auto___22055 = speclj.components.new_description.call(null,"state changer",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22049_22056 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22050_22057 = description__8012__auto___22055;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22050_22057);

try{var seq__22051_22058 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__22049_22056,_STAR_parent_description_STAR__temp_val__22050_22057,description__8012__auto___22055){
return (function (){
sample_project.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__8145__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__8146__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sample_project.components.state));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22049_22056,_STAR_parent_description_STAR__temp_val__22050_22057,description__8012__auto___22055))
,false)],null)));
var chunk__22052_22059 = null;
var count__22053_22060 = (0);
var i__22054_22061 = (0);
while(true){
if((i__22054_22061 < count__22053_22060)){
var component__8013__auto___22062 = cljs.core._nth.call(null,chunk__22052_22059,i__22054_22061);
speclj.components.install.call(null,component__8013__auto___22062,description__8012__auto___22055);


var G__22063 = seq__22051_22058;
var G__22064 = chunk__22052_22059;
var G__22065 = count__22053_22060;
var G__22066 = (i__22054_22061 + (1));
seq__22051_22058 = G__22063;
chunk__22052_22059 = G__22064;
count__22053_22060 = G__22065;
i__22054_22061 = G__22066;
continue;
} else {
var temp__5753__auto___22067 = cljs.core.seq.call(null,seq__22051_22058);
if(temp__5753__auto___22067){
var seq__22051_22068__$1 = temp__5753__auto___22067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22051_22068__$1)){
var c__4556__auto___22069 = cljs.core.chunk_first.call(null,seq__22051_22068__$1);
var G__22070 = cljs.core.chunk_rest.call(null,seq__22051_22068__$1);
var G__22071 = c__4556__auto___22069;
var G__22072 = cljs.core.count.call(null,c__4556__auto___22069);
var G__22073 = (0);
seq__22051_22058 = G__22070;
chunk__22052_22059 = G__22071;
count__22053_22060 = G__22072;
i__22054_22061 = G__22073;
continue;
} else {
var component__8013__auto___22074 = cljs.core.first.call(null,seq__22051_22068__$1);
speclj.components.install.call(null,component__8013__auto___22074,description__8012__auto___22055);


var G__22075 = cljs.core.next.call(null,seq__22051_22068__$1);
var G__22076 = null;
var G__22077 = (0);
var G__22078 = (0);
seq__22051_22058 = G__22075;
chunk__22052_22059 = G__22076;
count__22053_22060 = G__22077;
i__22054_22061 = G__22078;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22049_22056);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___22055);
}

var description__8012__auto___22085 = speclj.components.new_description.call(null,"radio menu component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22079_22086 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22080_22087 = description__8012__auto___22085;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22080_22087);

try{var seq__22081_22088 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__22079_22086,_STAR_parent_description_STAR__temp_val__22080_22087,description__8012__auto___22085){
return (function (){
var menu = sample_project.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__8196__auto___22092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8197__auto___22093 = menu;
if((actual__8197__auto___22093 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22092)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___22092 === 'string') && (typeof actual__8197__auto___22093 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___22093.indexOf(expected__8196__auto___22092))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22092)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22093))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___22092)) && (typeof actual__8197__auto___22093 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___22092,actual__8197__auto___22093))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22093)),speclj.platform.endl,"to match: ",(((expected__8196__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22092))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___22093)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___22093,expected__8196__auto___22092)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22092)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22093))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___22093)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___22092,p1__8195__8198__auto__);
}),actual__8197__auto___22093))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22092)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22093))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___22092 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___22092)));
var type_b__8127__auto__ = (((actual__8197__auto___22093 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___22093)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__8197__auto__ = menu;
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22079_22086,_STAR_parent_description_STAR__temp_val__22080_22087,description__8012__auto___22085))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__22079_22086,_STAR_parent_description_STAR__temp_val__22080_22087,description__8012__auto___22085){
return (function (){
var menu = sample_project.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__8196__auto___22094 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__8197__auto___22095 = menu;
if((actual__8197__auto___22095 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22094)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___22094 === 'string') && (typeof actual__8197__auto___22095 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___22095.indexOf(expected__8196__auto___22094))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22094)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22095))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___22094)) && (typeof actual__8197__auto___22095 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___22094,actual__8197__auto___22095))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22095)),speclj.platform.endl,"to match: ",(((expected__8196__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22094))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___22095)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___22095,expected__8196__auto___22094)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22094)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22095))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___22095)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___22094,p1__8195__8198__auto__);
}),actual__8197__auto___22095))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22094)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22095))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___22094 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___22094)));
var type_b__8127__auto__ = (((actual__8197__auto___22095 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___22095)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto___22096 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8197__auto___22097 = menu;
if((actual__8197__auto___22097 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22096)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___22096 === 'string') && (typeof actual__8197__auto___22097 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___22097.indexOf(expected__8196__auto___22096))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22096)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22097))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___22096)) && (typeof actual__8197__auto___22097 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___22096,actual__8197__auto___22097))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22097)),speclj.platform.endl,"to match: ",(((expected__8196__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22096))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___22097)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___22097,expected__8196__auto___22096)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22096)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22097))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___22097)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___22096,p1__8195__8198__auto__);
}),actual__8197__auto___22097))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22096)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22097))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___22096 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___22096)));
var type_b__8127__auto__ = (((actual__8197__auto___22097 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___22097)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto___22098 = "opt1";
var actual__8197__auto___22099 = cljs.core.last.call(null,menu);
if((actual__8197__auto___22099 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22098)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___22098 === 'string') && (typeof actual__8197__auto___22099 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___22099.indexOf(expected__8196__auto___22098))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22098)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22099))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___22098)) && (typeof actual__8197__auto___22099 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___22098,actual__8197__auto___22099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22099)),speclj.platform.endl,"to match: ",(((expected__8196__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22098))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___22099)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___22099,expected__8196__auto___22098)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22098)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22099))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___22099)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___22098,p1__8195__8198__auto__);
}),actual__8197__auto___22099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___22098)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___22099))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___22098 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___22098)));
var type_b__8127__auto__ = (((actual__8197__auto___22099 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___22099)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__8197__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22079_22086,_STAR_parent_description_STAR__temp_val__22080_22087,description__8012__auto___22085))
,false)],null)));
var chunk__22082_22089 = null;
var count__22083_22090 = (0);
var i__22084_22091 = (0);
while(true){
if((i__22084_22091 < count__22083_22090)){
var component__8013__auto___22100 = cljs.core._nth.call(null,chunk__22082_22089,i__22084_22091);
speclj.components.install.call(null,component__8013__auto___22100,description__8012__auto___22085);


var G__22101 = seq__22081_22088;
var G__22102 = chunk__22082_22089;
var G__22103 = count__22083_22090;
var G__22104 = (i__22084_22091 + (1));
seq__22081_22088 = G__22101;
chunk__22082_22089 = G__22102;
count__22083_22090 = G__22103;
i__22084_22091 = G__22104;
continue;
} else {
var temp__5753__auto___22105 = cljs.core.seq.call(null,seq__22081_22088);
if(temp__5753__auto___22105){
var seq__22081_22106__$1 = temp__5753__auto___22105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22081_22106__$1)){
var c__4556__auto___22107 = cljs.core.chunk_first.call(null,seq__22081_22106__$1);
var G__22108 = cljs.core.chunk_rest.call(null,seq__22081_22106__$1);
var G__22109 = c__4556__auto___22107;
var G__22110 = cljs.core.count.call(null,c__4556__auto___22107);
var G__22111 = (0);
seq__22081_22088 = G__22108;
chunk__22082_22089 = G__22109;
count__22083_22090 = G__22110;
i__22084_22091 = G__22111;
continue;
} else {
var component__8013__auto___22112 = cljs.core.first.call(null,seq__22081_22106__$1);
speclj.components.install.call(null,component__8013__auto___22112,description__8012__auto___22085);


var G__22113 = cljs.core.next.call(null,seq__22081_22106__$1);
var G__22114 = null;
var G__22115 = (0);
var G__22116 = (0);
seq__22081_22088 = G__22113;
chunk__22082_22089 = G__22114;
count__22083_22090 = G__22115;
i__22084_22091 = G__22116;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22079_22086);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___22085);
}

var description__8012__auto___22179 = speclj.components.new_description.call(null,"options-bar component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22117_22180 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22118_22181 = description__8012__auto___22179;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22118_22181);

try{var seq__22119_22182 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8012__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22151_22186 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22152_22187 = description__8012__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22152_22187);

try{var seq__22153_22188 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179){
return (function (it__8373__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22165 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22166 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22166);

try{return it__8373__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22165);
}});})(_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179){
return (function (){
var radio_menu_orig_val__22167 = sample_project.components.radio_menu;
var radio_menu_temp_val__22168 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__22168);

try{var expected__8196__auto__ = "game mode menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__22167);
}});})(_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179){
return (function (){
var radio_menu_orig_val__22169 = sample_project.components.radio_menu;
var radio_menu_temp_val__22170 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__22170);

try{var expected__8196__auto__ = "difficulty menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__22169);
}});})(_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179){
return (function (){
var radio_menu_orig_val__22171 = sample_project.components.radio_menu;
var radio_menu_temp_val__22172 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__22172);

try{var expected__8196__auto__ = "size menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__22171);
}});})(_STAR_parent_description_STAR__orig_val__22151_22186,_STAR_parent_description_STAR__temp_val__22152_22187,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__22117_22180,_STAR_parent_description_STAR__temp_val__22118_22181,description__8012__auto___22179))
,false)],null)));
var chunk__22154_22189 = null;
var count__22155_22190 = (0);
var i__22156_22191 = (0);
while(true){
if((i__22156_22191 < count__22155_22190)){
var component__8013__auto___22192 = cljs.core._nth.call(null,chunk__22154_22189,i__22156_22191);
speclj.components.install.call(null,component__8013__auto___22192,description__8012__auto____$1);


var G__22193 = seq__22153_22188;
var G__22194 = chunk__22154_22189;
var G__22195 = count__22155_22190;
var G__22196 = (i__22156_22191 + (1));
seq__22153_22188 = G__22193;
chunk__22154_22189 = G__22194;
count__22155_22190 = G__22195;
i__22156_22191 = G__22196;
continue;
} else {
var temp__5753__auto___22197 = cljs.core.seq.call(null,seq__22153_22188);
if(temp__5753__auto___22197){
var seq__22153_22198__$1 = temp__5753__auto___22197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22153_22198__$1)){
var c__4556__auto___22199 = cljs.core.chunk_first.call(null,seq__22153_22198__$1);
var G__22200 = cljs.core.chunk_rest.call(null,seq__22153_22198__$1);
var G__22201 = c__4556__auto___22199;
var G__22202 = cljs.core.count.call(null,c__4556__auto___22199);
var G__22203 = (0);
seq__22153_22188 = G__22200;
chunk__22154_22189 = G__22201;
count__22155_22190 = G__22202;
i__22156_22191 = G__22203;
continue;
} else {
var component__8013__auto___22204 = cljs.core.first.call(null,seq__22153_22198__$1);
speclj.components.install.call(null,component__8013__auto___22204,description__8012__auto____$1);


var G__22205 = cljs.core.next.call(null,seq__22153_22198__$1);
var G__22206 = null;
var G__22207 = (0);
var G__22208 = (0);
seq__22153_22188 = G__22205;
chunk__22154_22189 = G__22206;
count__22155_22190 = G__22207;
i__22156_22191 = G__22208;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22151_22186);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto____$1);
}

return description__8012__auto____$1;
})(),(function (){var description__8012__auto____$1 = speclj.components.new_description.call(null,"new game button",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22173_22209 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22174_22210 = description__8012__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22174_22210);

try{var seq__22175_22211 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__22176_22212 = null;
var count__22177_22213 = (0);
var i__22178_22214 = (0);
while(true){
if((i__22178_22214 < count__22177_22213)){
var component__8013__auto___22215 = cljs.core._nth.call(null,chunk__22176_22212,i__22178_22214);
speclj.components.install.call(null,component__8013__auto___22215,description__8012__auto____$1);


var G__22216 = seq__22175_22211;
var G__22217 = chunk__22176_22212;
var G__22218 = count__22177_22213;
var G__22219 = (i__22178_22214 + (1));
seq__22175_22211 = G__22216;
chunk__22176_22212 = G__22217;
count__22177_22213 = G__22218;
i__22178_22214 = G__22219;
continue;
} else {
var temp__5753__auto___22220 = cljs.core.seq.call(null,seq__22175_22211);
if(temp__5753__auto___22220){
var seq__22175_22221__$1 = temp__5753__auto___22220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22175_22221__$1)){
var c__4556__auto___22222 = cljs.core.chunk_first.call(null,seq__22175_22221__$1);
var G__22223 = cljs.core.chunk_rest.call(null,seq__22175_22221__$1);
var G__22224 = c__4556__auto___22222;
var G__22225 = cljs.core.count.call(null,c__4556__auto___22222);
var G__22226 = (0);
seq__22175_22211 = G__22223;
chunk__22176_22212 = G__22224;
count__22177_22213 = G__22225;
i__22178_22214 = G__22226;
continue;
} else {
var component__8013__auto___22227 = cljs.core.first.call(null,seq__22175_22221__$1);
speclj.components.install.call(null,component__8013__auto___22227,description__8012__auto____$1);


var G__22228 = cljs.core.next.call(null,seq__22175_22221__$1);
var G__22229 = null;
var G__22230 = (0);
var G__22231 = (0);
seq__22175_22211 = G__22228;
chunk__22176_22212 = G__22229;
count__22177_22213 = G__22230;
i__22178_22214 = G__22231;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22173_22209);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto____$1);
}

return description__8012__auto____$1;
})()],null)));
var chunk__22120_22183 = null;
var count__22121_22184 = (0);
var i__22122_22185 = (0);
while(true){
if((i__22122_22185 < count__22121_22184)){
var component__8013__auto___22232 = cljs.core._nth.call(null,chunk__22120_22183,i__22122_22185);
speclj.components.install.call(null,component__8013__auto___22232,description__8012__auto___22179);


var G__22233 = seq__22119_22182;
var G__22234 = chunk__22120_22183;
var G__22235 = count__22121_22184;
var G__22236 = (i__22122_22185 + (1));
seq__22119_22182 = G__22233;
chunk__22120_22183 = G__22234;
count__22121_22184 = G__22235;
i__22122_22185 = G__22236;
continue;
} else {
var temp__5753__auto___22237 = cljs.core.seq.call(null,seq__22119_22182);
if(temp__5753__auto___22237){
var seq__22119_22238__$1 = temp__5753__auto___22237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22119_22238__$1)){
var c__4556__auto___22239 = cljs.core.chunk_first.call(null,seq__22119_22238__$1);
var G__22240 = cljs.core.chunk_rest.call(null,seq__22119_22238__$1);
var G__22241 = c__4556__auto___22239;
var G__22242 = cljs.core.count.call(null,c__4556__auto___22239);
var G__22243 = (0);
seq__22119_22182 = G__22240;
chunk__22120_22183 = G__22241;
count__22121_22184 = G__22242;
i__22122_22185 = G__22243;
continue;
} else {
var component__8013__auto___22244 = cljs.core.first.call(null,seq__22119_22238__$1);
speclj.components.install.call(null,component__8013__auto___22244,description__8012__auto___22179);


var G__22245 = cljs.core.next.call(null,seq__22119_22238__$1);
var G__22246 = null;
var G__22247 = (0);
var G__22248 = (0);
seq__22119_22182 = G__22245;
chunk__22120_22183 = G__22246;
count__22121_22184 = G__22247;
i__22122_22185 = G__22248;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22117_22180);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___22179);
}

var description__8012__auto___22257 = speclj.components.new_description.call(null,"game board component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__22251_22258 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22252_22259 = description__8012__auto___22257;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22252_22259);

try{var seq__22253_22260 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257){
return (function (){
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__8146__auto__ = sample_project.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257){
return (function (){
cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),sample_project.util.new_game.call(null));

var buttons = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__8146__auto__ = cljs.core.map.call(null,(function (p1__22249_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22249_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257){
return (function (){
cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),sample_project.util.new_game.call(null));

sample_project.components.progress_game.call(null,(0));

var expected__8145__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__8146__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sample_project.components.state));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257){
return (function (){
var buttons = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8205__auto__ = null;
var actual__8206__auto__ = cljs.core.map.call(null,(function (p1__22250_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22250_SHARP_));
}),buttons);
if((actual__8206__auto__ == null)){
return null;
} else {
if(((typeof expected__8205__auto__ === 'string') && (typeof actual__8206__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__8206__auto__.indexOf(expected__8205__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8205__auto__)) && (typeof actual__8206__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8205__auto__,actual__8206__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__)),speclj.platform.endl,"not to match: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8206__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8206__auto__,expected__8205__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8206__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8204__8207__auto__){
return cljs.core._EQ_.call(null,expected__8205__auto__,p1__8204__8207__auto__);
}),actual__8206__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8205__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8205__auto__)));
var type_b__8127__auto__ = (((actual__8206__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8206__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257){
return (function (){
var headers_22264 = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8145__auto___22265 = cljs.core.PersistentVector.EMPTY;
var actual__8146__auto___22266 = headers_22264;
if(cljs.core._EQ_.call(null,expected__8145__auto___22265,actual__8146__auto___22266)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto___22265 == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto___22265)),speclj.platform.endl,"     got: ",(((actual__8146__auto___22266 == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto___22266))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__8146__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22251_22258,_STAR_parent_description_STAR__temp_val__22252_22259,description__8012__auto___22257))
,false)],null)));
var chunk__22254_22261 = null;
var count__22255_22262 = (0);
var i__22256_22263 = (0);
while(true){
if((i__22256_22263 < count__22255_22262)){
var component__8013__auto___22267 = cljs.core._nth.call(null,chunk__22254_22261,i__22256_22263);
speclj.components.install.call(null,component__8013__auto___22267,description__8012__auto___22257);


var G__22268 = seq__22253_22260;
var G__22269 = chunk__22254_22261;
var G__22270 = count__22255_22262;
var G__22271 = (i__22256_22263 + (1));
seq__22253_22260 = G__22268;
chunk__22254_22261 = G__22269;
count__22255_22262 = G__22270;
i__22256_22263 = G__22271;
continue;
} else {
var temp__5753__auto___22272 = cljs.core.seq.call(null,seq__22253_22260);
if(temp__5753__auto___22272){
var seq__22253_22273__$1 = temp__5753__auto___22272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22253_22273__$1)){
var c__4556__auto___22274 = cljs.core.chunk_first.call(null,seq__22253_22273__$1);
var G__22275 = cljs.core.chunk_rest.call(null,seq__22253_22273__$1);
var G__22276 = c__4556__auto___22274;
var G__22277 = cljs.core.count.call(null,c__4556__auto___22274);
var G__22278 = (0);
seq__22253_22260 = G__22275;
chunk__22254_22261 = G__22276;
count__22255_22262 = G__22277;
i__22256_22263 = G__22278;
continue;
} else {
var component__8013__auto___22279 = cljs.core.first.call(null,seq__22253_22273__$1);
speclj.components.install.call(null,component__8013__auto___22279,description__8012__auto___22257);


var G__22280 = cljs.core.next.call(null,seq__22253_22273__$1);
var G__22281 = null;
var G__22282 = (0);
var G__22283 = (0);
seq__22253_22260 = G__22280;
chunk__22254_22261 = G__22281;
count__22255_22262 = G__22282;
i__22256_22263 = G__22283;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22251_22258);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___22257);
}


//# sourceMappingURL=core_spec.js.map
