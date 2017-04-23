// Compiled by ClojureScript 0.0-2173
goog.provide('hello_clojurescript.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom');
hello_clojurescript.core.output = (function output(elem,message){return goog.dom.append(elem,message,goog.dom.createDom("br"));
});
hello_clojurescript.core.start = (function start(){var content = goog.dom.getElement("content");var c__5564__auto___8482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_8437){var state_val_8438 = (state_8437[1]);if((state_val_8438 === 7))
{var inst_8428 = (state_8437[2]);var inst_8429 = hello_clojurescript.core.output.call(null,content,"Hello from task 1");var state_8437__$1 = (function (){var statearr_8439 = state_8437;(statearr_8439[7] = inst_8428);
(statearr_8439[8] = inst_8429);
return statearr_8439;
})();var statearr_8440_8483 = state_8437__$1;(statearr_8440_8483[2] = null);
(statearr_8440_8483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8438 === 6))
{var inst_8433 = (state_8437[2]);var state_8437__$1 = state_8437;var statearr_8441_8484 = state_8437__$1;(statearr_8441_8484[2] = inst_8433);
(statearr_8441_8484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8438 === 5))
{var state_8437__$1 = state_8437;var statearr_8442_8485 = state_8437__$1;(statearr_8442_8485[2] = null);
(statearr_8442_8485[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8438 === 4))
{var inst_8426 = cljs.core.async.timeout.call(null,1000);var state_8437__$1 = state_8437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8437__$1,7,inst_8426);
} else
{if((state_val_8438 === 3))
{var inst_8435 = (state_8437[2]);var state_8437__$1 = state_8437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8437__$1,inst_8435);
} else
{if((state_val_8438 === 2))
{var state_8437__$1 = state_8437;if(true)
{var statearr_8443_8486 = state_8437__$1;(statearr_8443_8486[1] = 4);
} else
{var statearr_8444_8487 = state_8437__$1;(statearr_8444_8487[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8438 === 1))
{var state_8437__$1 = state_8437;var statearr_8445_8488 = state_8437__$1;(statearr_8445_8488[2] = null);
(statearr_8445_8488[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_8449 = [null,null,null,null,null,null,null,null,null];(statearr_8449[0] = state_machine__5550__auto__);
(statearr_8449[1] = 1);
return statearr_8449;
});
var state_machine__5550__auto____1 = (function (state_8437){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_8437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e8450){if((e8450 instanceof Object))
{var ex__5553__auto__ = e8450;var statearr_8451_8489 = state_8437;(statearr_8451_8489[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8490 = state_8437;
state_8437 = G__8490;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_8437){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_8437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_8452 = f__5565__auto__.call(null);(statearr_8452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___8482);
return statearr_8452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_8466){var state_val_8467 = (state_8466[1]);if((state_val_8467 === 7))
{var inst_8457 = (state_8466[2]);var inst_8458 = hello_clojurescript.core.output.call(null,content,"Hello from task 2");var state_8466__$1 = (function (){var statearr_8468 = state_8466;(statearr_8468[7] = inst_8457);
(statearr_8468[8] = inst_8458);
return statearr_8468;
})();var statearr_8469_8491 = state_8466__$1;(statearr_8469_8491[2] = null);
(statearr_8469_8491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8467 === 6))
{var inst_8462 = (state_8466[2]);var state_8466__$1 = state_8466;var statearr_8470_8492 = state_8466__$1;(statearr_8470_8492[2] = inst_8462);
(statearr_8470_8492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8467 === 5))
{var state_8466__$1 = state_8466;var statearr_8471_8493 = state_8466__$1;(statearr_8471_8493[2] = null);
(statearr_8471_8493[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8467 === 4))
{var inst_8455 = cljs.core.async.timeout.call(null,1500);var state_8466__$1 = state_8466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8466__$1,7,inst_8455);
} else
{if((state_val_8467 === 3))
{var inst_8464 = (state_8466[2]);var state_8466__$1 = state_8466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8466__$1,inst_8464);
} else
{if((state_val_8467 === 2))
{var state_8466__$1 = state_8466;if(true)
{var statearr_8472_8494 = state_8466__$1;(statearr_8472_8494[1] = 4);
} else
{var statearr_8473_8495 = state_8466__$1;(statearr_8473_8495[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8467 === 1))
{var state_8466__$1 = state_8466;var statearr_8474_8496 = state_8466__$1;(statearr_8474_8496[2] = null);
(statearr_8474_8496[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_8478 = [null,null,null,null,null,null,null,null,null];(statearr_8478[0] = state_machine__5550__auto__);
(statearr_8478[1] = 1);
return statearr_8478;
});
var state_machine__5550__auto____1 = (function (state_8466){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_8466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e8479){if((e8479 instanceof Object))
{var ex__5553__auto__ = e8479;var statearr_8480_8497 = state_8466;(statearr_8480_8497[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8498 = state_8466;
state_8466 = G__8498;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_8466){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_8466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_8481 = f__5565__auto__.call(null);(statearr_8481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_8481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
window.onload = hello_clojurescript.core.start;
