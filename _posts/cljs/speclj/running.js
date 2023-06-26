// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__20559 = parent;
component = G__20559;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__20560 = parent;
component = G__20560;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__20561 = cljs.core.seq.call(null,descriptions);
var chunk__20562 = null;
var count__20563 = (0);
var i__20564 = (0);
while(true){
if((i__20564 < count__20563)){
var component = cljs.core._nth.call(null,chunk__20562,i__20564);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__20565 = seq__20561;
var G__20566 = chunk__20562;
var G__20567 = count__20563;
var G__20568 = (i__20564 + (1));
seq__20561 = G__20565;
chunk__20562 = G__20566;
count__20563 = G__20567;
i__20564 = G__20568;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20561);
if(temp__5753__auto__){
var seq__20561__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20561__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20561__$1);
var G__20569 = cljs.core.chunk_rest.call(null,seq__20561__$1);
var G__20570 = c__4556__auto__;
var G__20571 = cljs.core.count.call(null,c__4556__auto__);
var G__20572 = (0);
seq__20561 = G__20569;
chunk__20562 = G__20570;
count__20563 = G__20571;
i__20564 = G__20572;
continue;
} else {
var component = cljs.core.first.call(null,seq__20561__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__20573 = cljs.core.next.call(null,seq__20561__$1);
var G__20574 = null;
var G__20575 = (0);
var G__20576 = (0);
seq__20561 = G__20573;
chunk__20562 = G__20574;
count__20563 = G__20575;
i__20564 = G__20576;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__20577 = cljs.core.seq.call(null,characteristics);
var chunk__20579 = null;
var count__20580 = (0);
var i__20581 = (0);
while(true){
if((i__20581 < count__20580)){
var characteristic = cljs.core._nth.call(null,chunk__20579,i__20581);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__20583 = seq__20577;
var G__20584 = chunk__20579;
var G__20585 = count__20580;
var G__20586 = (i__20581 + (1));
seq__20577 = G__20583;
chunk__20579 = G__20584;
count__20580 = G__20585;
i__20581 = G__20586;
continue;
} else {
var G__20587 = seq__20577;
var G__20588 = chunk__20579;
var G__20589 = count__20580;
var G__20590 = (i__20581 + (1));
seq__20577 = G__20587;
chunk__20579 = G__20588;
count__20580 = G__20589;
i__20581 = G__20590;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20577);
if(temp__5753__auto__){
var seq__20577__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20577__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20577__$1);
var G__20591 = cljs.core.chunk_rest.call(null,seq__20577__$1);
var G__20592 = c__4556__auto__;
var G__20593 = cljs.core.count.call(null,c__4556__auto__);
var G__20594 = (0);
seq__20577 = G__20591;
chunk__20579 = G__20592;
count__20580 = G__20593;
i__20581 = G__20594;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__20577__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__20595 = cljs.core.next.call(null,seq__20577__$1);
var G__20596 = null;
var G__20597 = (0);
var G__20598 = (0);
seq__20577 = G__20595;
chunk__20579 = G__20596;
count__20580 = G__20597;
i__20581 = G__20598;
continue;
} else {
var G__20599 = cljs.core.next.call(null,seq__20577__$1);
var G__20600 = null;
var G__20601 = (0);
var G__20602 = (0);
seq__20577 = G__20599;
chunk__20579 = G__20600;
count__20580 = G__20601;
i__20581 = G__20602;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__20603_20607 = cljs.core.seq.call(null,descriptions);
var chunk__20604_20608 = null;
var count__20605_20609 = (0);
var i__20606_20610 = (0);
while(true){
if((i__20606_20610 < count__20605_20609)){
var description_20611 = cljs.core._nth.call(null,chunk__20604_20608,i__20606_20610);
speclj.running.scan_for_focus_BANG_.call(null,description_20611);


var G__20612 = seq__20603_20607;
var G__20613 = chunk__20604_20608;
var G__20614 = count__20605_20609;
var G__20615 = (i__20606_20610 + (1));
seq__20603_20607 = G__20612;
chunk__20604_20608 = G__20613;
count__20605_20609 = G__20614;
i__20606_20610 = G__20615;
continue;
} else {
var temp__5753__auto___20616 = cljs.core.seq.call(null,seq__20603_20607);
if(temp__5753__auto___20616){
var seq__20603_20617__$1 = temp__5753__auto___20616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20603_20617__$1)){
var c__4556__auto___20618 = cljs.core.chunk_first.call(null,seq__20603_20617__$1);
var G__20619 = cljs.core.chunk_rest.call(null,seq__20603_20617__$1);
var G__20620 = c__4556__auto___20618;
var G__20621 = cljs.core.count.call(null,c__4556__auto___20618);
var G__20622 = (0);
seq__20603_20607 = G__20619;
chunk__20604_20608 = G__20620;
count__20605_20609 = G__20621;
i__20606_20610 = G__20622;
continue;
} else {
var description_20623 = cljs.core.first.call(null,seq__20603_20617__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_20623);


var G__20624 = cljs.core.next.call(null,seq__20603_20617__$1);
var G__20625 = null;
var G__20626 = (0);
var G__20627 = (0);
seq__20603_20607 = G__20624;
chunk__20604_20608 = G__20625;
count__20605_20609 = G__20626;
i__20606_20610 = G__20627;
continue;
}
} else {
}
}
break;
}

var or__4126__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__20628 = cljs.core.seq.call(null,components);
var chunk__20629 = null;
var count__20630 = (0);
var i__20631 = (0);
while(true){
if((i__20631 < count__20630)){
var component = cljs.core._nth.call(null,chunk__20629,i__20631);
component.body.call(null);


var G__20632 = seq__20628;
var G__20633 = chunk__20629;
var G__20634 = count__20630;
var G__20635 = (i__20631 + (1));
seq__20628 = G__20632;
chunk__20629 = G__20633;
count__20630 = G__20634;
i__20631 = G__20635;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20628);
if(temp__5753__auto__){
var seq__20628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20628__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20628__$1);
var G__20636 = cljs.core.chunk_rest.call(null,seq__20628__$1);
var G__20637 = c__4556__auto__;
var G__20638 = cljs.core.count.call(null,c__4556__auto__);
var G__20639 = (0);
seq__20628 = G__20636;
chunk__20629 = G__20637;
count__20630 = G__20638;
i__20631 = G__20639;
continue;
} else {
var component = cljs.core.first.call(null,seq__20628__$1);
component.body.call(null);


var G__20640 = cljs.core.next.call(null,seq__20628__$1);
var G__20641 = null;
var G__20642 = (0);
var G__20643 = (0);
seq__20628 = G__20640;
chunk__20629 = G__20641;
count__20630 = G__20642;
i__20631 = G__20643;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__20644 = cljs.core.seq.call(null,withs);
var chunk__20645 = null;
var count__20646 = (0);
var i__20647 = (0);
while(true){
if((i__20647 < count__20646)){
var with$ = cljs.core._nth.call(null,chunk__20645,i__20647);
speclj.components.reset_with.call(null,with$);


var G__20648 = seq__20644;
var G__20649 = chunk__20645;
var G__20650 = count__20646;
var G__20651 = (i__20647 + (1));
seq__20644 = G__20648;
chunk__20645 = G__20649;
count__20646 = G__20650;
i__20647 = G__20651;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20644);
if(temp__5753__auto__){
var seq__20644__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20644__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20644__$1);
var G__20652 = cljs.core.chunk_rest.call(null,seq__20644__$1);
var G__20653 = c__4556__auto__;
var G__20654 = cljs.core.count.call(null,c__4556__auto__);
var G__20655 = (0);
seq__20644 = G__20652;
chunk__20645 = G__20653;
count__20646 = G__20654;
i__20647 = G__20655;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__20644__$1);
speclj.components.reset_with.call(null,with$);


var G__20656 = cljs.core.next.call(null,seq__20644__$1);
var G__20657 = null;
var G__20658 = (0);
var G__20659 = (0);
seq__20644 = G__20656;
chunk__20645 = G__20657;
count__20646 = G__20658;
i__20647 = G__20659;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__20660 = cljs.core.deref.call(null,description__$1.parent);
var G__20661 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__20660;
components = G__20661;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__20662_SHARP_){
return cljs.core.deref.call(null,p1__20662_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__20663_SHARP_){
return cljs.core.deref.call(null,p1__20663_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__20664_SHARP_){
return cljs.core.deref.call(null,p1__20664_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__20665_SHARP_){
return p1__20665_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__20666_SHARP_){
return cljs.core.deref.call(null,p1__20666_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e20667){var e = e20667;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__20668(s__20669){
return (new cljs.core.LazySeq(null,(function (){
var s__20669__$1 = s__20669;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__20669__$1);
if(temp__5753__auto__){
var s__20669__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20669__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20669__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20671 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20670 = (0);
while(true){
if((i__20670 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__20670);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__20671,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__20672 = (i__20670 + (1));
i__20670 = G__20672;
continue;
} else {
var G__20673 = (i__20670 + (1));
i__20670 = G__20673;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20671),speclj$running$do_characteristics_$_iter__20668.call(null,cljs.core.chunk_rest.call(null,s__20669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20671),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__20669__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__20668.call(null,cljs.core.rest.call(null,s__20669__$2)));
} else {
var G__20674 = cljs.core.rest.call(null,s__20669__$2);
s__20669__$1 = G__20674;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__20675 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__20676 = cljs.core.rest.call(null,children);
results__$1 = G__20675;
children = G__20676;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__20679_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__20679_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__20680_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__20680_SHARP_.unique_name)].join('');
}),withs);
var seq__20681_20713 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__20682_20714 = null;
var count__20683_20715 = (0);
var i__20684_20716 = (0);
while(true){
if((i__20684_20716 < count__20683_20715)){
var vec__20691_20717 = cljs.core._nth.call(null,chunk__20682_20714,i__20684_20716);
var n_20718 = cljs.core.nth.call(null,vec__20691_20717,(0),null);
var un_20719 = cljs.core.nth.call(null,vec__20691_20717,(1),null);
var code_20720 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20718)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_20719),";"].join('');
eval(code_20720);


var G__20721 = seq__20681_20713;
var G__20722 = chunk__20682_20714;
var G__20723 = count__20683_20715;
var G__20724 = (i__20684_20716 + (1));
seq__20681_20713 = G__20721;
chunk__20682_20714 = G__20722;
count__20683_20715 = G__20723;
i__20684_20716 = G__20724;
continue;
} else {
var temp__5753__auto___20725 = cljs.core.seq.call(null,seq__20681_20713);
if(temp__5753__auto___20725){
var seq__20681_20726__$1 = temp__5753__auto___20725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20681_20726__$1)){
var c__4556__auto___20727 = cljs.core.chunk_first.call(null,seq__20681_20726__$1);
var G__20728 = cljs.core.chunk_rest.call(null,seq__20681_20726__$1);
var G__20729 = c__4556__auto___20727;
var G__20730 = cljs.core.count.call(null,c__4556__auto___20727);
var G__20731 = (0);
seq__20681_20713 = G__20728;
chunk__20682_20714 = G__20729;
count__20683_20715 = G__20730;
i__20684_20716 = G__20731;
continue;
} else {
var vec__20694_20732 = cljs.core.first.call(null,seq__20681_20726__$1);
var n_20733 = cljs.core.nth.call(null,vec__20694_20732,(0),null);
var un_20734 = cljs.core.nth.call(null,vec__20694_20732,(1),null);
var code_20735 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20733)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_20734),";"].join('');
eval(code_20735);


var G__20736 = cljs.core.next.call(null,seq__20681_20726__$1);
var G__20737 = null;
var G__20738 = (0);
var G__20739 = (0);
seq__20681_20713 = G__20736;
chunk__20682_20714 = G__20737;
count__20683_20715 = G__20738;
i__20684_20716 = G__20739;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__20697_20740 = cljs.core.seq.call(null,var_names);
var chunk__20698_20741 = null;
var count__20699_20742 = (0);
var i__20700_20743 = (0);
while(true){
if((i__20700_20743 < count__20699_20742)){
var vec__20707_20744 = cljs.core._nth.call(null,chunk__20698_20741,i__20700_20743);
var n_20745 = cljs.core.nth.call(null,vec__20707_20744,(0),null);
var code_20746 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20745)," = null;"].join('');
eval(code_20746);


var G__20747 = seq__20697_20740;
var G__20748 = chunk__20698_20741;
var G__20749 = count__20699_20742;
var G__20750 = (i__20700_20743 + (1));
seq__20697_20740 = G__20747;
chunk__20698_20741 = G__20748;
count__20699_20742 = G__20749;
i__20700_20743 = G__20750;
continue;
} else {
var temp__5753__auto___20751 = cljs.core.seq.call(null,seq__20697_20740);
if(temp__5753__auto___20751){
var seq__20697_20752__$1 = temp__5753__auto___20751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20697_20752__$1)){
var c__4556__auto___20753 = cljs.core.chunk_first.call(null,seq__20697_20752__$1);
var G__20754 = cljs.core.chunk_rest.call(null,seq__20697_20752__$1);
var G__20755 = c__4556__auto___20753;
var G__20756 = cljs.core.count.call(null,c__4556__auto___20753);
var G__20757 = (0);
seq__20697_20740 = G__20754;
chunk__20698_20741 = G__20755;
count__20699_20742 = G__20756;
i__20700_20743 = G__20757;
continue;
} else {
var vec__20710_20758 = cljs.core.first.call(null,seq__20697_20752__$1);
var n_20759 = cljs.core.nth.call(null,vec__20710_20758,(0),null);
var code_20760 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_20759)," = null;"].join('');
eval(code_20760);


var G__20761 = cljs.core.next.call(null,seq__20697_20752__$1);
var G__20762 = null;
var G__20763 = (0);
var G__20764 = (0);
seq__20697_20740 = G__20761;
chunk__20698_20741 = G__20762;
count__20699_20742 = G__20763;
i__20700_20743 = G__20764;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__20765_SHARP_){
return p1__20765_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_20766 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_20766.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_20767 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_20767.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_20768 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_20768.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_20769 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_20769.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
