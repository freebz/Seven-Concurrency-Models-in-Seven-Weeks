// Compiled by ClojureScript 0.0-2173
goog.provide('animation.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.graphics');
goog.require('goog.graphics');
goog.require('goog.dom');
goog.require('goog.dom');
animation.core.get_events = (function get_events(elem,event_type){var ch = cljs.core.async.chan.call(null);goog.events.listen(elem,event_type,(function (p1__8366_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,p1__8366_SHARP_);
}));
return ch;
});
animation.core.stroke = (new goog.graphics.Stroke(1,"#ff0000"));
animation.core.shrinking_circle = (function shrinking_circle(graphics,x,y){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_8422){var state_val_8423 = (state_8422[1]);if((state_val_8423 === 7))
{var inst_8417 = (state_8422[2]);var state_8422__$1 = state_8422;var statearr_8424_8441 = state_8422__$1;(statearr_8424_8441[2] = inst_8417);
(statearr_8424_8441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8423 === 6))
{var state_8422__$1 = state_8422;var statearr_8425_8442 = state_8422__$1;(statearr_8425_8442[2] = null);
(statearr_8425_8442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8423 === 5))
{var inst_8405 = (state_8422[7]);var inst_8413 = (inst_8405 - 1);var inst_8405__$1 = inst_8413;var state_8422__$1 = (function (){var statearr_8426 = state_8422;(statearr_8426[7] = inst_8405__$1);
return statearr_8426;
})();var statearr_8427_8443 = state_8422__$1;(statearr_8427_8443[2] = null);
(statearr_8427_8443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8423 === 4))
{var inst_8405 = (state_8422[7]);var inst_8404 = (state_8422[8]);var inst_8409 = (state_8422[2]);var inst_8410 = inst_8404.setRadius(inst_8405,inst_8405);var inst_8411 = (inst_8405 > 0);var state_8422__$1 = (function (){var statearr_8428 = state_8422;(statearr_8428[9] = inst_8410);
(statearr_8428[10] = inst_8409);
return statearr_8428;
})();if(cljs.core.truth_(inst_8411))
{var statearr_8429_8444 = state_8422__$1;(statearr_8429_8444[1] = 5);
} else
{var statearr_8430_8445 = state_8422__$1;(statearr_8430_8445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8423 === 3))
{var inst_8404 = (state_8422[8]);var inst_8419 = (state_8422[2]);var inst_8420 = inst_8404.dispose();var state_8422__$1 = (function (){var statearr_8431 = state_8422;(statearr_8431[11] = inst_8419);
return statearr_8431;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8422__$1,inst_8420);
} else
{if((state_val_8423 === 2))
{var inst_8407 = cljs.core.async.timeout.call(null,25);var state_8422__$1 = state_8422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8422__$1,4,inst_8407);
} else
{if((state_val_8423 === 1))
{var inst_8404 = graphics.drawCircle(x,y,100,animation.core.stroke,null);var inst_8405 = 100;var state_8422__$1 = (function (){var statearr_8432 = state_8422;(statearr_8432[7] = inst_8405);
(statearr_8432[8] = inst_8404);
return statearr_8432;
})();var statearr_8433_8446 = state_8422__$1;(statearr_8433_8446[2] = null);
(statearr_8433_8446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_8437 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8437[0] = state_machine__5550__auto__);
(statearr_8437[1] = 1);
return statearr_8437;
});
var state_machine__5550__auto____1 = (function (state_8422){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_8422);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e8438){if((e8438 instanceof Object))
{var ex__5553__auto__ = e8438;var statearr_8439_8447 = state_8422;(statearr_8439_8447[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8448 = state_8422;
state_8422 = G__8448;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_8422){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_8422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_8440 = f__5565__auto__.call(null);(statearr_8440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_8440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
animation.core.create_graphics = (function create_graphics(elem){var G__8450 = goog.graphics.createGraphics("100%","100%");G__8450.render(elem);
return G__8450;
});
animation.core.start = (function start(){var canvas = goog.dom.getElement("canvas");var graphics = animation.core.create_graphics.call(null,canvas);var clicks = animation.core.get_events.call(null,canvas,"click");var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_8495){var state_val_8496 = (state_8495[1]);if((state_val_8496 === 7))
{var inst_8484 = (state_8495[2]);var inst_8485 = inst_8484.offsetX;var inst_8486 = inst_8484.offsetY;var inst_8487 = animation.core.shrinking_circle.call(null,graphics,inst_8485,inst_8486);var state_8495__$1 = (function (){var statearr_8497 = state_8495;(statearr_8497[7] = inst_8487);
return statearr_8497;
})();var statearr_8498_8511 = state_8495__$1;(statearr_8498_8511[2] = null);
(statearr_8498_8511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8496 === 6))
{var inst_8491 = (state_8495[2]);var state_8495__$1 = state_8495;var statearr_8499_8512 = state_8495__$1;(statearr_8499_8512[2] = inst_8491);
(statearr_8499_8512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8496 === 5))
{var state_8495__$1 = state_8495;var statearr_8500_8513 = state_8495__$1;(statearr_8500_8513[2] = null);
(statearr_8500_8513[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8496 === 4))
{var state_8495__$1 = state_8495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8495__$1,7,clicks);
} else
{if((state_val_8496 === 3))
{var inst_8493 = (state_8495[2]);var state_8495__$1 = state_8495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8495__$1,inst_8493);
} else
{if((state_val_8496 === 2))
{var state_8495__$1 = state_8495;if(true)
{var statearr_8501_8514 = state_8495__$1;(statearr_8501_8514[1] = 4);
} else
{var statearr_8502_8515 = state_8495__$1;(statearr_8502_8515[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8496 === 1))
{var state_8495__$1 = state_8495;var statearr_8503_8516 = state_8495__$1;(statearr_8503_8516[2] = null);
(statearr_8503_8516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_8507 = [null,null,null,null,null,null,null,null];(statearr_8507[0] = state_machine__5550__auto__);
(statearr_8507[1] = 1);
return statearr_8507;
});
var state_machine__5550__auto____1 = (function (state_8495){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_8495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e8508){if((e8508 instanceof Object))
{var ex__5553__auto__ = e8508;var statearr_8509_8517 = state_8495;(statearr_8509_8517[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8518 = state_8495;
state_8495 = G__8518;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_8495){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_8495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_8510 = f__5565__auto__.call(null);(statearr_8510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_8510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
window.onload = animation.core.start;
