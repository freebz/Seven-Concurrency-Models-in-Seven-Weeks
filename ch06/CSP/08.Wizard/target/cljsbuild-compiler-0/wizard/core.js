// Compiled by ClojureScript 0.0-2173
goog.provide('wizard.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
wizard.core.show = (function show(elem){return elem.style.display = "block";
});
wizard.core.hide = (function hide(elem){return elem.style.display = "none";
});
wizard.core.set_value = (function set_value(elem,value){return elem.value = value;
});
wizard.core.get_events = (function get_events(elem,event_type){var ch = cljs.core.async.chan.call(null);goog.events.listen(elem,event_type,(function (p1__8366_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,p1__8366_SHARP_);
}));
return ch;
});
wizard.core.start = (function start(){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_8420){var state_val_8421 = (state_8420[1]);if((state_val_8421 === 4))
{var inst_8400 = (state_8420[7]);var inst_8417 = (state_8420[2]);var inst_8418 = inst_8400.submit();var state_8420__$1 = (function (){var statearr_8422 = state_8420;(statearr_8422[8] = inst_8417);
return statearr_8422;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8420__$1,inst_8418);
} else
{if((state_val_8421 === 3))
{var inst_8405 = (state_8420[9]);var inst_8404 = (state_8420[10]);var inst_8403 = (state_8420[11]);var inst_8402 = (state_8420[12]);var inst_8412 = (state_8420[2]);var inst_8413 = wizard.core.set_value.call(null,inst_8404,"Finish");var inst_8414 = wizard.core.hide.call(null,inst_8402);var inst_8415 = wizard.core.show.call(null,inst_8403);var state_8420__$1 = (function (){var statearr_8423 = state_8420;(statearr_8423[13] = inst_8412);
(statearr_8423[14] = inst_8413);
(statearr_8423[15] = inst_8415);
(statearr_8423[16] = inst_8414);
return statearr_8423;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8420__$1,4,inst_8405);
} else
{if((state_val_8421 === 2))
{var inst_8405 = (state_8420[9]);var inst_8401 = (state_8420[17]);var inst_8402 = (state_8420[12]);var inst_8408 = (state_8420[2]);var inst_8409 = wizard.core.hide.call(null,inst_8401);var inst_8410 = wizard.core.show.call(null,inst_8402);var state_8420__$1 = (function (){var statearr_8424 = state_8420;(statearr_8424[18] = inst_8410);
(statearr_8424[19] = inst_8408);
(statearr_8424[20] = inst_8409);
return statearr_8424;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8420__$1,3,inst_8405);
} else
{if((state_val_8421 === 1))
{var inst_8405 = (state_8420[9]);var inst_8404 = (state_8420[10]);var inst_8401 = (state_8420[17]);var inst_8400 = goog.dom.getElement("wizard");var inst_8401__$1 = goog.dom.getElement("step1");var inst_8402 = goog.dom.getElement("step2");var inst_8403 = goog.dom.getElement("step3");var inst_8404__$1 = goog.dom.getElement("next");var inst_8405__$1 = wizard.core.get_events.call(null,inst_8404__$1,"click");var inst_8406 = wizard.core.show.call(null,inst_8401__$1);var state_8420__$1 = (function (){var statearr_8425 = state_8420;(statearr_8425[21] = inst_8406);
(statearr_8425[9] = inst_8405__$1);
(statearr_8425[10] = inst_8404__$1);
(statearr_8425[11] = inst_8403);
(statearr_8425[17] = inst_8401__$1);
(statearr_8425[12] = inst_8402);
(statearr_8425[7] = inst_8400);
return statearr_8425;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8420__$1,2,inst_8405__$1);
} else
{return null;
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_8429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8429[0] = state_machine__5550__auto__);
(statearr_8429[1] = 1);
return statearr_8429;
});
var state_machine__5550__auto____1 = (function (state_8420){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_8420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e8430){if((e8430 instanceof Object))
{var ex__5553__auto__ = e8430;var statearr_8431_8433 = state_8420;(statearr_8431_8433[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8434 = state_8420;
state_8420 = G__8434;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_8420){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_8420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_8432 = f__5565__auto__.call(null);(statearr_8432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_8432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
window.onload = wizard.core.start;
