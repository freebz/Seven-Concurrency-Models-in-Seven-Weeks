// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9567 = (function (f,fn_handler,meta9568){
this.f = f;
this.fn_handler = fn_handler;
this.meta9568 = meta9568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9567.cljs$lang$type = true;
cljs.core.async.t9567.cljs$lang$ctorStr = "cljs.core.async/t9567";
cljs.core.async.t9567.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9567");
});
cljs.core.async.t9567.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9569){var self__ = this;
var _9569__$1 = this;return self__.meta9568;
});
cljs.core.async.t9567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9569,meta9568__$1){var self__ = this;
var _9569__$1 = this;return (new cljs.core.async.t9567(self__.f,self__.fn_handler,meta9568__$1));
});
cljs.core.async.__GT_t9567 = (function __GT_t9567(f__$1,fn_handler__$1,meta9568){return (new cljs.core.async.t9567(f__$1,fn_handler__$1,meta9568));
});
}
return (new cljs.core.async.t9567(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9571 = buff;if(G__9571)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9571.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9571.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9571);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9571);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9572 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9572);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9572);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9573 = n;var x_9574 = 0;while(true){
if((x_9574 < n__4291__auto___9573))
{(a[x_9574] = 0);
{
var G__9575 = (x_9574 + 1);
x_9574 = G__9575;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9576 = (i + 1);
i = G__9576;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9580 = (function (flag,alt_flag,meta9581){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9581 = meta9581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9580.cljs$lang$type = true;
cljs.core.async.t9580.cljs$lang$ctorStr = "cljs.core.async/t9580";
cljs.core.async.t9580.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9580");
});
cljs.core.async.t9580.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9582){var self__ = this;
var _9582__$1 = this;return self__.meta9581;
});
cljs.core.async.t9580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9582,meta9581__$1){var self__ = this;
var _9582__$1 = this;return (new cljs.core.async.t9580(self__.flag,self__.alt_flag,meta9581__$1));
});
cljs.core.async.__GT_t9580 = (function __GT_t9580(flag__$1,alt_flag__$1,meta9581){return (new cljs.core.async.t9580(flag__$1,alt_flag__$1,meta9581));
});
}
return (new cljs.core.async.t9580(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9586 = (function (cb,flag,alt_handler,meta9587){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9587 = meta9587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9586.cljs$lang$type = true;
cljs.core.async.t9586.cljs$lang$ctorStr = "cljs.core.async/t9586";
cljs.core.async.t9586.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9586");
});
cljs.core.async.t9586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9588){var self__ = this;
var _9588__$1 = this;return self__.meta9587;
});
cljs.core.async.t9586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9588,meta9587__$1){var self__ = this;
var _9588__$1 = this;return (new cljs.core.async.t9586(self__.cb,self__.flag,self__.alt_handler,meta9587__$1));
});
cljs.core.async.__GT_t9586 = (function __GT_t9586(cb__$1,flag__$1,alt_handler__$1,meta9587){return (new cljs.core.async.t9586(cb__$1,flag__$1,alt_handler__$1,meta9587));
});
}
return (new cljs.core.async.t9586(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9589_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9589_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9590 = (i + 1);
i = G__9590;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9591){var map__9593 = p__9591;var map__9593__$1 = ((cljs.core.seq_QMARK_.call(null,map__9593))?cljs.core.apply.call(null,cljs.core.hash_map,map__9593):map__9593);var opts = map__9593__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9591 = null;if (arguments.length > 1) {
  p__9591 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9591);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9594){
var ports = cljs.core.first(arglist__9594);
var p__9591 = cljs.core.rest(arglist__9594);
return alts_BANG___delegate(ports,p__9591);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9602 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9602 = (function (ch,f,map_LT_,meta9603){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9603 = meta9603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9602.cljs$lang$type = true;
cljs.core.async.t9602.cljs$lang$ctorStr = "cljs.core.async/t9602";
cljs.core.async.t9602.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9602");
});
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9605 = (function (fn1,_,meta9603,ch,f,map_LT_,meta9606){
this.fn1 = fn1;
this._ = _;
this.meta9603 = meta9603;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9606 = meta9606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9605.cljs$lang$type = true;
cljs.core.async.t9605.cljs$lang$ctorStr = "cljs.core.async/t9605";
cljs.core.async.t9605.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9605");
});
cljs.core.async.t9605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9605.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9595_SHARP_){return f1.call(null,(((p1__9595_SHARP_ == null))?null:self__.f.call(null,p1__9595_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9607){var self__ = this;
var _9607__$1 = this;return self__.meta9606;
});
cljs.core.async.t9605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9607,meta9606__$1){var self__ = this;
var _9607__$1 = this;return (new cljs.core.async.t9605(self__.fn1,self__._,self__.meta9603,self__.ch,self__.f,self__.map_LT_,meta9606__$1));
});
cljs.core.async.__GT_t9605 = (function __GT_t9605(fn1__$1,___$2,meta9603__$1,ch__$2,f__$2,map_LT___$2,meta9606){return (new cljs.core.async.t9605(fn1__$1,___$2,meta9603__$1,ch__$2,f__$2,map_LT___$2,meta9606));
});
}
return (new cljs.core.async.t9605(fn1,___$1,self__.meta9603,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9604){var self__ = this;
var _9604__$1 = this;return self__.meta9603;
});
cljs.core.async.t9602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9604,meta9603__$1){var self__ = this;
var _9604__$1 = this;return (new cljs.core.async.t9602(self__.ch,self__.f,self__.map_LT_,meta9603__$1));
});
cljs.core.async.__GT_t9602 = (function __GT_t9602(ch__$1,f__$1,map_LT___$1,meta9603){return (new cljs.core.async.t9602(ch__$1,f__$1,map_LT___$1,meta9603));
});
}
return (new cljs.core.async.t9602(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9611 = (function (ch,f,map_GT_,meta9612){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9612 = meta9612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9611.cljs$lang$type = true;
cljs.core.async.t9611.cljs$lang$ctorStr = "cljs.core.async/t9611";
cljs.core.async.t9611.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9611");
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9613){var self__ = this;
var _9613__$1 = this;return self__.meta9612;
});
cljs.core.async.t9611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9613,meta9612__$1){var self__ = this;
var _9613__$1 = this;return (new cljs.core.async.t9611(self__.ch,self__.f,self__.map_GT_,meta9612__$1));
});
cljs.core.async.__GT_t9611 = (function __GT_t9611(ch__$1,f__$1,map_GT___$1,meta9612){return (new cljs.core.async.t9611(ch__$1,f__$1,map_GT___$1,meta9612));
});
}
return (new cljs.core.async.t9611(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9617 = (function (ch,p,filter_GT_,meta9618){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9618 = meta9618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9617.cljs$lang$type = true;
cljs.core.async.t9617.cljs$lang$ctorStr = "cljs.core.async/t9617";
cljs.core.async.t9617.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9617");
});
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9619){var self__ = this;
var _9619__$1 = this;return self__.meta9618;
});
cljs.core.async.t9617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9619,meta9618__$1){var self__ = this;
var _9619__$1 = this;return (new cljs.core.async.t9617(self__.ch,self__.p,self__.filter_GT_,meta9618__$1));
});
cljs.core.async.__GT_t9617 = (function __GT_t9617(ch__$1,p__$1,filter_GT___$1,meta9618){return (new cljs.core.async.t9617(ch__$1,p__$1,filter_GT___$1,meta9618));
});
}
return (new cljs.core.async.t9617(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___9702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9681){var state_val_9682 = (state_9681[1]);if((state_val_9682 === 1))
{var state_9681__$1 = state_9681;var statearr_9683_9703 = state_9681__$1;(statearr_9683_9703[2] = null);
(statearr_9683_9703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 2))
{var state_9681__$1 = state_9681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9681__$1,4,ch);
} else
{if((state_val_9682 === 3))
{var inst_9679 = (state_9681[2]);var state_9681__$1 = state_9681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9681__$1,inst_9679);
} else
{if((state_val_9682 === 4))
{var inst_9663 = (state_9681[7]);var inst_9663__$1 = (state_9681[2]);var inst_9664 = (inst_9663__$1 == null);var state_9681__$1 = (function (){var statearr_9684 = state_9681;(statearr_9684[7] = inst_9663__$1);
return statearr_9684;
})();if(cljs.core.truth_(inst_9664))
{var statearr_9685_9704 = state_9681__$1;(statearr_9685_9704[1] = 5);
} else
{var statearr_9686_9705 = state_9681__$1;(statearr_9686_9705[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 5))
{var inst_9666 = cljs.core.async.close_BANG_.call(null,out);var state_9681__$1 = state_9681;var statearr_9687_9706 = state_9681__$1;(statearr_9687_9706[2] = inst_9666);
(statearr_9687_9706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 6))
{var inst_9663 = (state_9681[7]);var inst_9668 = p.call(null,inst_9663);var state_9681__$1 = state_9681;if(cljs.core.truth_(inst_9668))
{var statearr_9688_9707 = state_9681__$1;(statearr_9688_9707[1] = 8);
} else
{var statearr_9689_9708 = state_9681__$1;(statearr_9689_9708[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 7))
{var inst_9677 = (state_9681[2]);var state_9681__$1 = state_9681;var statearr_9690_9709 = state_9681__$1;(statearr_9690_9709[2] = inst_9677);
(statearr_9690_9709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 8))
{var inst_9663 = (state_9681[7]);var state_9681__$1 = state_9681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9681__$1,11,out,inst_9663);
} else
{if((state_val_9682 === 9))
{var state_9681__$1 = state_9681;var statearr_9691_9710 = state_9681__$1;(statearr_9691_9710[2] = null);
(statearr_9691_9710[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 10))
{var inst_9674 = (state_9681[2]);var state_9681__$1 = (function (){var statearr_9692 = state_9681;(statearr_9692[8] = inst_9674);
return statearr_9692;
})();var statearr_9693_9711 = state_9681__$1;(statearr_9693_9711[2] = null);
(statearr_9693_9711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9682 === 11))
{var inst_9671 = (state_9681[2]);var state_9681__$1 = state_9681;var statearr_9694_9712 = state_9681__$1;(statearr_9694_9712[2] = inst_9671);
(statearr_9694_9712[1] = 10);
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
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_9698 = [null,null,null,null,null,null,null,null,null];(statearr_9698[0] = state_machine__5550__auto__);
(statearr_9698[1] = 1);
return statearr_9698;
});
var state_machine__5550__auto____1 = (function (state_9681){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9699){if((e9699 instanceof Object))
{var ex__5553__auto__ = e9699;var statearr_9700_9713 = state_9681;(statearr_9700_9713[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9714 = state_9681;
state_9681 = G__9714;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9681){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9701 = f__5565__auto__.call(null);(statearr_9701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___9702);
return statearr_9701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9866){var state_val_9867 = (state_9866[1]);if((state_val_9867 === 1))
{var state_9866__$1 = state_9866;var statearr_9868_9905 = state_9866__$1;(statearr_9868_9905[2] = null);
(statearr_9868_9905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 2))
{var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9866__$1,4,in$);
} else
{if((state_val_9867 === 3))
{var inst_9864 = (state_9866[2]);var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9866__$1,inst_9864);
} else
{if((state_val_9867 === 4))
{var inst_9812 = (state_9866[7]);var inst_9812__$1 = (state_9866[2]);var inst_9813 = (inst_9812__$1 == null);var state_9866__$1 = (function (){var statearr_9869 = state_9866;(statearr_9869[7] = inst_9812__$1);
return statearr_9869;
})();if(cljs.core.truth_(inst_9813))
{var statearr_9870_9906 = state_9866__$1;(statearr_9870_9906[1] = 5);
} else
{var statearr_9871_9907 = state_9866__$1;(statearr_9871_9907[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 5))
{var inst_9815 = cljs.core.async.close_BANG_.call(null,out);var state_9866__$1 = state_9866;var statearr_9872_9908 = state_9866__$1;(statearr_9872_9908[2] = inst_9815);
(statearr_9872_9908[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 6))
{var inst_9812 = (state_9866[7]);var inst_9817 = f.call(null,inst_9812);var inst_9822 = cljs.core.seq.call(null,inst_9817);var inst_9823 = inst_9822;var inst_9824 = null;var inst_9825 = 0;var inst_9826 = 0;var state_9866__$1 = (function (){var statearr_9873 = state_9866;(statearr_9873[8] = inst_9826);
(statearr_9873[9] = inst_9825);
(statearr_9873[10] = inst_9824);
(statearr_9873[11] = inst_9823);
return statearr_9873;
})();var statearr_9874_9909 = state_9866__$1;(statearr_9874_9909[2] = null);
(statearr_9874_9909[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 7))
{var inst_9862 = (state_9866[2]);var state_9866__$1 = state_9866;var statearr_9875_9910 = state_9866__$1;(statearr_9875_9910[2] = inst_9862);
(statearr_9875_9910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 8))
{var inst_9826 = (state_9866[8]);var inst_9825 = (state_9866[9]);var inst_9828 = (inst_9826 < inst_9825);var inst_9829 = inst_9828;var state_9866__$1 = state_9866;if(cljs.core.truth_(inst_9829))
{var statearr_9876_9911 = state_9866__$1;(statearr_9876_9911[1] = 10);
} else
{var statearr_9877_9912 = state_9866__$1;(statearr_9877_9912[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 9))
{var inst_9859 = (state_9866[2]);var state_9866__$1 = (function (){var statearr_9878 = state_9866;(statearr_9878[12] = inst_9859);
return statearr_9878;
})();var statearr_9879_9913 = state_9866__$1;(statearr_9879_9913[2] = null);
(statearr_9879_9913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 10))
{var inst_9826 = (state_9866[8]);var inst_9824 = (state_9866[10]);var inst_9831 = cljs.core._nth.call(null,inst_9824,inst_9826);var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9866__$1,13,out,inst_9831);
} else
{if((state_val_9867 === 11))
{var inst_9823 = (state_9866[11]);var inst_9837 = (state_9866[13]);var inst_9837__$1 = cljs.core.seq.call(null,inst_9823);var state_9866__$1 = (function (){var statearr_9883 = state_9866;(statearr_9883[13] = inst_9837__$1);
return statearr_9883;
})();if(inst_9837__$1)
{var statearr_9884_9914 = state_9866__$1;(statearr_9884_9914[1] = 14);
} else
{var statearr_9885_9915 = state_9866__$1;(statearr_9885_9915[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 12))
{var inst_9857 = (state_9866[2]);var state_9866__$1 = state_9866;var statearr_9886_9916 = state_9866__$1;(statearr_9886_9916[2] = inst_9857);
(statearr_9886_9916[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 13))
{var inst_9826 = (state_9866[8]);var inst_9825 = (state_9866[9]);var inst_9824 = (state_9866[10]);var inst_9823 = (state_9866[11]);var inst_9833 = (state_9866[2]);var inst_9834 = (inst_9826 + 1);var tmp9880 = inst_9825;var tmp9881 = inst_9824;var tmp9882 = inst_9823;var inst_9823__$1 = tmp9882;var inst_9824__$1 = tmp9881;var inst_9825__$1 = tmp9880;var inst_9826__$1 = inst_9834;var state_9866__$1 = (function (){var statearr_9887 = state_9866;(statearr_9887[8] = inst_9826__$1);
(statearr_9887[14] = inst_9833);
(statearr_9887[9] = inst_9825__$1);
(statearr_9887[10] = inst_9824__$1);
(statearr_9887[11] = inst_9823__$1);
return statearr_9887;
})();var statearr_9888_9917 = state_9866__$1;(statearr_9888_9917[2] = null);
(statearr_9888_9917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 14))
{var inst_9837 = (state_9866[13]);var inst_9839 = cljs.core.chunked_seq_QMARK_.call(null,inst_9837);var state_9866__$1 = state_9866;if(inst_9839)
{var statearr_9889_9918 = state_9866__$1;(statearr_9889_9918[1] = 17);
} else
{var statearr_9890_9919 = state_9866__$1;(statearr_9890_9919[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 15))
{var state_9866__$1 = state_9866;var statearr_9891_9920 = state_9866__$1;(statearr_9891_9920[2] = null);
(statearr_9891_9920[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 16))
{var inst_9855 = (state_9866[2]);var state_9866__$1 = state_9866;var statearr_9892_9921 = state_9866__$1;(statearr_9892_9921[2] = inst_9855);
(statearr_9892_9921[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 17))
{var inst_9837 = (state_9866[13]);var inst_9841 = cljs.core.chunk_first.call(null,inst_9837);var inst_9842 = cljs.core.chunk_rest.call(null,inst_9837);var inst_9843 = cljs.core.count.call(null,inst_9841);var inst_9823 = inst_9842;var inst_9824 = inst_9841;var inst_9825 = inst_9843;var inst_9826 = 0;var state_9866__$1 = (function (){var statearr_9893 = state_9866;(statearr_9893[8] = inst_9826);
(statearr_9893[9] = inst_9825);
(statearr_9893[10] = inst_9824);
(statearr_9893[11] = inst_9823);
return statearr_9893;
})();var statearr_9894_9922 = state_9866__$1;(statearr_9894_9922[2] = null);
(statearr_9894_9922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 18))
{var inst_9837 = (state_9866[13]);var inst_9846 = cljs.core.first.call(null,inst_9837);var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9866__$1,20,out,inst_9846);
} else
{if((state_val_9867 === 19))
{var inst_9852 = (state_9866[2]);var state_9866__$1 = state_9866;var statearr_9895_9923 = state_9866__$1;(statearr_9895_9923[2] = inst_9852);
(statearr_9895_9923[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9867 === 20))
{var inst_9837 = (state_9866[13]);var inst_9848 = (state_9866[2]);var inst_9849 = cljs.core.next.call(null,inst_9837);var inst_9823 = inst_9849;var inst_9824 = null;var inst_9825 = 0;var inst_9826 = 0;var state_9866__$1 = (function (){var statearr_9896 = state_9866;(statearr_9896[8] = inst_9826);
(statearr_9896[9] = inst_9825);
(statearr_9896[10] = inst_9824);
(statearr_9896[11] = inst_9823);
(statearr_9896[15] = inst_9848);
return statearr_9896;
})();var statearr_9897_9924 = state_9866__$1;(statearr_9897_9924[2] = null);
(statearr_9897_9924[1] = 8);
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
}
}
}
}
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_9901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9901[0] = state_machine__5550__auto__);
(statearr_9901[1] = 1);
return statearr_9901;
});
var state_machine__5550__auto____1 = (function (state_9866){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9902){if((e9902 instanceof Object))
{var ex__5553__auto__ = e9902;var statearr_9903_9925 = state_9866;(statearr_9903_9925[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9926 = state_9866;
state_9866 = G__9926;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9866){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9904 = f__5565__auto__.call(null);(statearr_9904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_9904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5564__auto___10007 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9986){var state_val_9987 = (state_9986[1]);if((state_val_9987 === 1))
{var state_9986__$1 = state_9986;var statearr_9988_10008 = state_9986__$1;(statearr_9988_10008[2] = null);
(statearr_9988_10008[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 2))
{var state_9986__$1 = state_9986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9986__$1,4,from);
} else
{if((state_val_9987 === 3))
{var inst_9984 = (state_9986[2]);var state_9986__$1 = state_9986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9986__$1,inst_9984);
} else
{if((state_val_9987 === 4))
{var inst_9969 = (state_9986[7]);var inst_9969__$1 = (state_9986[2]);var inst_9970 = (inst_9969__$1 == null);var state_9986__$1 = (function (){var statearr_9989 = state_9986;(statearr_9989[7] = inst_9969__$1);
return statearr_9989;
})();if(cljs.core.truth_(inst_9970))
{var statearr_9990_10009 = state_9986__$1;(statearr_9990_10009[1] = 5);
} else
{var statearr_9991_10010 = state_9986__$1;(statearr_9991_10010[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 5))
{var state_9986__$1 = state_9986;if(cljs.core.truth_(close_QMARK_))
{var statearr_9992_10011 = state_9986__$1;(statearr_9992_10011[1] = 8);
} else
{var statearr_9993_10012 = state_9986__$1;(statearr_9993_10012[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 6))
{var inst_9969 = (state_9986[7]);var state_9986__$1 = state_9986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9986__$1,11,to,inst_9969);
} else
{if((state_val_9987 === 7))
{var inst_9982 = (state_9986[2]);var state_9986__$1 = state_9986;var statearr_9994_10013 = state_9986__$1;(statearr_9994_10013[2] = inst_9982);
(statearr_9994_10013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 8))
{var inst_9973 = cljs.core.async.close_BANG_.call(null,to);var state_9986__$1 = state_9986;var statearr_9995_10014 = state_9986__$1;(statearr_9995_10014[2] = inst_9973);
(statearr_9995_10014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 9))
{var state_9986__$1 = state_9986;var statearr_9996_10015 = state_9986__$1;(statearr_9996_10015[2] = null);
(statearr_9996_10015[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 10))
{var inst_9976 = (state_9986[2]);var state_9986__$1 = state_9986;var statearr_9997_10016 = state_9986__$1;(statearr_9997_10016[2] = inst_9976);
(statearr_9997_10016[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9987 === 11))
{var inst_9979 = (state_9986[2]);var state_9986__$1 = (function (){var statearr_9998 = state_9986;(statearr_9998[8] = inst_9979);
return statearr_9998;
})();var statearr_9999_10017 = state_9986__$1;(statearr_9999_10017[2] = null);
(statearr_9999_10017[1] = 2);
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
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10003 = [null,null,null,null,null,null,null,null,null];(statearr_10003[0] = state_machine__5550__auto__);
(statearr_10003[1] = 1);
return statearr_10003;
});
var state_machine__5550__auto____1 = (function (state_9986){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10004){if((e10004 instanceof Object))
{var ex__5553__auto__ = e10004;var statearr_10005_10018 = state_9986;(statearr_10005_10018[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10019 = state_9986;
state_9986 = G__10019;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9986){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10006 = f__5565__auto__.call(null);(statearr_10006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10007);
return statearr_10006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5564__auto___10106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10084){var state_val_10085 = (state_10084[1]);if((state_val_10085 === 1))
{var state_10084__$1 = state_10084;var statearr_10086_10107 = state_10084__$1;(statearr_10086_10107[2] = null);
(statearr_10086_10107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 2))
{var state_10084__$1 = state_10084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10084__$1,4,ch);
} else
{if((state_val_10085 === 3))
{var inst_10082 = (state_10084[2]);var state_10084__$1 = state_10084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10084__$1,inst_10082);
} else
{if((state_val_10085 === 4))
{var inst_10065 = (state_10084[7]);var inst_10065__$1 = (state_10084[2]);var inst_10066 = (inst_10065__$1 == null);var state_10084__$1 = (function (){var statearr_10087 = state_10084;(statearr_10087[7] = inst_10065__$1);
return statearr_10087;
})();if(cljs.core.truth_(inst_10066))
{var statearr_10088_10108 = state_10084__$1;(statearr_10088_10108[1] = 5);
} else
{var statearr_10089_10109 = state_10084__$1;(statearr_10089_10109[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 5))
{var inst_10068 = cljs.core.async.close_BANG_.call(null,tc);var inst_10069 = cljs.core.async.close_BANG_.call(null,fc);var state_10084__$1 = (function (){var statearr_10090 = state_10084;(statearr_10090[8] = inst_10068);
return statearr_10090;
})();var statearr_10091_10110 = state_10084__$1;(statearr_10091_10110[2] = inst_10069);
(statearr_10091_10110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 6))
{var inst_10065 = (state_10084[7]);var inst_10071 = p.call(null,inst_10065);var state_10084__$1 = state_10084;if(cljs.core.truth_(inst_10071))
{var statearr_10092_10111 = state_10084__$1;(statearr_10092_10111[1] = 9);
} else
{var statearr_10093_10112 = state_10084__$1;(statearr_10093_10112[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 7))
{var inst_10080 = (state_10084[2]);var state_10084__$1 = state_10084;var statearr_10094_10113 = state_10084__$1;(statearr_10094_10113[2] = inst_10080);
(statearr_10094_10113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 8))
{var inst_10077 = (state_10084[2]);var state_10084__$1 = (function (){var statearr_10095 = state_10084;(statearr_10095[9] = inst_10077);
return statearr_10095;
})();var statearr_10096_10114 = state_10084__$1;(statearr_10096_10114[2] = null);
(statearr_10096_10114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 9))
{var state_10084__$1 = state_10084;var statearr_10097_10115 = state_10084__$1;(statearr_10097_10115[2] = tc);
(statearr_10097_10115[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 10))
{var state_10084__$1 = state_10084;var statearr_10098_10116 = state_10084__$1;(statearr_10098_10116[2] = fc);
(statearr_10098_10116[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10085 === 11))
{var inst_10065 = (state_10084[7]);var inst_10075 = (state_10084[2]);var state_10084__$1 = state_10084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10084__$1,8,inst_10075,inst_10065);
} else
{return null;
}
}
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_10102 = [null,null,null,null,null,null,null,null,null,null];(statearr_10102[0] = state_machine__5550__auto__);
(statearr_10102[1] = 1);
return statearr_10102;
});
var state_machine__5550__auto____1 = (function (state_10084){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10084);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10103){if((e10103 instanceof Object))
{var ex__5553__auto__ = e10103;var statearr_10104_10117 = state_10084;(statearr_10104_10117[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10118 = state_10084;
state_10084 = G__10118;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10084){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10105 = f__5565__auto__.call(null);(statearr_10105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10106);
return statearr_10105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10165){var state_val_10166 = (state_10165[1]);if((state_val_10166 === 7))
{var inst_10161 = (state_10165[2]);var state_10165__$1 = state_10165;var statearr_10167_10183 = state_10165__$1;(statearr_10167_10183[2] = inst_10161);
(statearr_10167_10183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10166 === 6))
{var inst_10154 = (state_10165[7]);var inst_10151 = (state_10165[8]);var inst_10158 = f.call(null,inst_10151,inst_10154);var inst_10151__$1 = inst_10158;var state_10165__$1 = (function (){var statearr_10168 = state_10165;(statearr_10168[8] = inst_10151__$1);
return statearr_10168;
})();var statearr_10169_10184 = state_10165__$1;(statearr_10169_10184[2] = null);
(statearr_10169_10184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10166 === 5))
{var inst_10151 = (state_10165[8]);var state_10165__$1 = state_10165;var statearr_10170_10185 = state_10165__$1;(statearr_10170_10185[2] = inst_10151);
(statearr_10170_10185[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10166 === 4))
{var inst_10154 = (state_10165[7]);var inst_10154__$1 = (state_10165[2]);var inst_10155 = (inst_10154__$1 == null);var state_10165__$1 = (function (){var statearr_10171 = state_10165;(statearr_10171[7] = inst_10154__$1);
return statearr_10171;
})();if(cljs.core.truth_(inst_10155))
{var statearr_10172_10186 = state_10165__$1;(statearr_10172_10186[1] = 5);
} else
{var statearr_10173_10187 = state_10165__$1;(statearr_10173_10187[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10166 === 3))
{var inst_10163 = (state_10165[2]);var state_10165__$1 = state_10165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10165__$1,inst_10163);
} else
{if((state_val_10166 === 2))
{var state_10165__$1 = state_10165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10165__$1,4,ch);
} else
{if((state_val_10166 === 1))
{var inst_10151 = init;var state_10165__$1 = (function (){var statearr_10174 = state_10165;(statearr_10174[8] = inst_10151);
return statearr_10174;
})();var statearr_10175_10188 = state_10165__$1;(statearr_10175_10188[2] = null);
(statearr_10175_10188[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_10179 = [null,null,null,null,null,null,null,null,null];(statearr_10179[0] = state_machine__5550__auto__);
(statearr_10179[1] = 1);
return statearr_10179;
});
var state_machine__5550__auto____1 = (function (state_10165){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10165);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10180){if((e10180 instanceof Object))
{var ex__5553__auto__ = e10180;var statearr_10181_10189 = state_10165;(statearr_10181_10189[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10190 = state_10165;
state_10165 = G__10190;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10165){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10182 = f__5565__auto__.call(null);(statearr_10182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10252){var state_val_10253 = (state_10252[1]);if((state_val_10253 === 1))
{var inst_10232 = cljs.core.seq.call(null,coll);var inst_10233 = inst_10232;var state_10252__$1 = (function (){var statearr_10254 = state_10252;(statearr_10254[7] = inst_10233);
return statearr_10254;
})();var statearr_10255_10273 = state_10252__$1;(statearr_10255_10273[2] = null);
(statearr_10255_10273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 2))
{var inst_10233 = (state_10252[7]);var state_10252__$1 = state_10252;if(cljs.core.truth_(inst_10233))
{var statearr_10256_10274 = state_10252__$1;(statearr_10256_10274[1] = 4);
} else
{var statearr_10257_10275 = state_10252__$1;(statearr_10257_10275[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 3))
{var inst_10250 = (state_10252[2]);var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10252__$1,inst_10250);
} else
{if((state_val_10253 === 4))
{var inst_10233 = (state_10252[7]);var inst_10236 = cljs.core.first.call(null,inst_10233);var state_10252__$1 = state_10252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10252__$1,7,ch,inst_10236);
} else
{if((state_val_10253 === 5))
{var state_10252__$1 = state_10252;if(cljs.core.truth_(close_QMARK_))
{var statearr_10258_10276 = state_10252__$1;(statearr_10258_10276[1] = 8);
} else
{var statearr_10259_10277 = state_10252__$1;(statearr_10259_10277[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 6))
{var inst_10248 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10260_10278 = state_10252__$1;(statearr_10260_10278[2] = inst_10248);
(statearr_10260_10278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 7))
{var inst_10233 = (state_10252[7]);var inst_10238 = (state_10252[2]);var inst_10239 = cljs.core.next.call(null,inst_10233);var inst_10233__$1 = inst_10239;var state_10252__$1 = (function (){var statearr_10261 = state_10252;(statearr_10261[8] = inst_10238);
(statearr_10261[7] = inst_10233__$1);
return statearr_10261;
})();var statearr_10262_10279 = state_10252__$1;(statearr_10262_10279[2] = null);
(statearr_10262_10279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 8))
{var inst_10243 = cljs.core.async.close_BANG_.call(null,ch);var state_10252__$1 = state_10252;var statearr_10263_10280 = state_10252__$1;(statearr_10263_10280[2] = inst_10243);
(statearr_10263_10280[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 9))
{var state_10252__$1 = state_10252;var statearr_10264_10281 = state_10252__$1;(statearr_10264_10281[2] = null);
(statearr_10264_10281[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10253 === 10))
{var inst_10246 = (state_10252[2]);var state_10252__$1 = state_10252;var statearr_10265_10282 = state_10252__$1;(statearr_10265_10282[2] = inst_10246);
(statearr_10265_10282[1] = 6);
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
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_10269 = [null,null,null,null,null,null,null,null,null];(statearr_10269[0] = state_machine__5550__auto__);
(statearr_10269[1] = 1);
return statearr_10269;
});
var state_machine__5550__auto____1 = (function (state_10252){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10270){if((e10270 instanceof Object))
{var ex__5553__auto__ = e10270;var statearr_10271_10283 = state_10252;(statearr_10271_10283[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10284 = state_10252;
state_10252 = G__10284;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10252){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10272 = f__5565__auto__.call(null);(statearr_10272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return c__5564__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10286 = {};return obj10286;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10288 = {};return obj10288;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10512 = (function (cs,ch,mult,meta10513){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10513 = meta10513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10512.cljs$lang$type = true;
cljs.core.async.t10512.cljs$lang$ctorStr = "cljs.core.async/t10512";
cljs.core.async.t10512.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10512");
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10512.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10514){var self__ = this;
var _10514__$1 = this;return self__.meta10513;
});})(cs))
;
cljs.core.async.t10512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10514,meta10513__$1){var self__ = this;
var _10514__$1 = this;return (new cljs.core.async.t10512(self__.cs,self__.ch,self__.mult,meta10513__$1));
});})(cs))
;
cljs.core.async.__GT_t10512 = ((function (cs){
return (function __GT_t10512(cs__$1,ch__$1,mult__$1,meta10513){return (new cljs.core.async.t10512(cs__$1,ch__$1,mult__$1,meta10513));
});})(cs))
;
}
return (new cljs.core.async.t10512(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5564__auto___10735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10649){var state_val_10650 = (state_10649[1]);if((state_val_10650 === 32))
{var inst_10517 = (state_10649[7]);var inst_10593 = (state_10649[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10649,31,Object,null,30);var inst_10600 = cljs.core.async.put_BANG_.call(null,inst_10593,inst_10517,done);var state_10649__$1 = state_10649;var statearr_10651_10736 = state_10649__$1;(statearr_10651_10736[2] = inst_10600);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 1))
{var state_10649__$1 = state_10649;var statearr_10652_10737 = state_10649__$1;(statearr_10652_10737[2] = null);
(statearr_10652_10737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 33))
{var inst_10606 = (state_10649[9]);var inst_10608 = cljs.core.chunked_seq_QMARK_.call(null,inst_10606);var state_10649__$1 = state_10649;if(inst_10608)
{var statearr_10653_10738 = state_10649__$1;(statearr_10653_10738[1] = 36);
} else
{var statearr_10654_10739 = state_10649__$1;(statearr_10654_10739[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 2))
{var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10649__$1,4,ch);
} else
{if((state_val_10650 === 34))
{var state_10649__$1 = state_10649;var statearr_10655_10740 = state_10649__$1;(statearr_10655_10740[2] = null);
(statearr_10655_10740[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 3))
{var inst_10647 = (state_10649[2]);var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10649__$1,inst_10647);
} else
{if((state_val_10650 === 35))
{var inst_10631 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10656_10741 = state_10649__$1;(statearr_10656_10741[2] = inst_10631);
(statearr_10656_10741[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 4))
{var inst_10517 = (state_10649[7]);var inst_10517__$1 = (state_10649[2]);var inst_10518 = (inst_10517__$1 == null);var state_10649__$1 = (function (){var statearr_10657 = state_10649;(statearr_10657[7] = inst_10517__$1);
return statearr_10657;
})();if(cljs.core.truth_(inst_10518))
{var statearr_10658_10742 = state_10649__$1;(statearr_10658_10742[1] = 5);
} else
{var statearr_10659_10743 = state_10649__$1;(statearr_10659_10743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 36))
{var inst_10606 = (state_10649[9]);var inst_10610 = cljs.core.chunk_first.call(null,inst_10606);var inst_10611 = cljs.core.chunk_rest.call(null,inst_10606);var inst_10612 = cljs.core.count.call(null,inst_10610);var inst_10585 = inst_10611;var inst_10586 = inst_10610;var inst_10587 = inst_10612;var inst_10588 = 0;var state_10649__$1 = (function (){var statearr_10660 = state_10649;(statearr_10660[10] = inst_10587);
(statearr_10660[11] = inst_10588);
(statearr_10660[12] = inst_10586);
(statearr_10660[13] = inst_10585);
return statearr_10660;
})();var statearr_10661_10744 = state_10649__$1;(statearr_10661_10744[2] = null);
(statearr_10661_10744[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 5))
{var inst_10524 = cljs.core.deref.call(null,cs);var inst_10525 = cljs.core.seq.call(null,inst_10524);var inst_10526 = inst_10525;var inst_10527 = null;var inst_10528 = 0;var inst_10529 = 0;var state_10649__$1 = (function (){var statearr_10662 = state_10649;(statearr_10662[14] = inst_10526);
(statearr_10662[15] = inst_10528);
(statearr_10662[16] = inst_10527);
(statearr_10662[17] = inst_10529);
return statearr_10662;
})();var statearr_10663_10745 = state_10649__$1;(statearr_10663_10745[2] = null);
(statearr_10663_10745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 37))
{var inst_10606 = (state_10649[9]);var inst_10615 = cljs.core.first.call(null,inst_10606);var state_10649__$1 = (function (){var statearr_10664 = state_10649;(statearr_10664[18] = inst_10615);
return statearr_10664;
})();var statearr_10665_10746 = state_10649__$1;(statearr_10665_10746[2] = null);
(statearr_10665_10746[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 6))
{var inst_10577 = (state_10649[19]);var inst_10576 = cljs.core.deref.call(null,cs);var inst_10577__$1 = cljs.core.keys.call(null,inst_10576);var inst_10578 = cljs.core.count.call(null,inst_10577__$1);var inst_10579 = cljs.core.reset_BANG_.call(null,dctr,inst_10578);var inst_10584 = cljs.core.seq.call(null,inst_10577__$1);var inst_10585 = inst_10584;var inst_10586 = null;var inst_10587 = 0;var inst_10588 = 0;var state_10649__$1 = (function (){var statearr_10666 = state_10649;(statearr_10666[10] = inst_10587);
(statearr_10666[11] = inst_10588);
(statearr_10666[12] = inst_10586);
(statearr_10666[19] = inst_10577__$1);
(statearr_10666[13] = inst_10585);
(statearr_10666[20] = inst_10579);
return statearr_10666;
})();var statearr_10667_10747 = state_10649__$1;(statearr_10667_10747[2] = null);
(statearr_10667_10747[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 38))
{var inst_10628 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10668_10748 = state_10649__$1;(statearr_10668_10748[2] = inst_10628);
(statearr_10668_10748[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 7))
{var inst_10645 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10669_10749 = state_10649__$1;(statearr_10669_10749[2] = inst_10645);
(statearr_10669_10749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 39))
{var inst_10606 = (state_10649[9]);var inst_10624 = (state_10649[2]);var inst_10625 = cljs.core.next.call(null,inst_10606);var inst_10585 = inst_10625;var inst_10586 = null;var inst_10587 = 0;var inst_10588 = 0;var state_10649__$1 = (function (){var statearr_10670 = state_10649;(statearr_10670[21] = inst_10624);
(statearr_10670[10] = inst_10587);
(statearr_10670[11] = inst_10588);
(statearr_10670[12] = inst_10586);
(statearr_10670[13] = inst_10585);
return statearr_10670;
})();var statearr_10671_10750 = state_10649__$1;(statearr_10671_10750[2] = null);
(statearr_10671_10750[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 8))
{var inst_10528 = (state_10649[15]);var inst_10529 = (state_10649[17]);var inst_10531 = (inst_10529 < inst_10528);var inst_10532 = inst_10531;var state_10649__$1 = state_10649;if(cljs.core.truth_(inst_10532))
{var statearr_10672_10751 = state_10649__$1;(statearr_10672_10751[1] = 10);
} else
{var statearr_10673_10752 = state_10649__$1;(statearr_10673_10752[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 40))
{var inst_10615 = (state_10649[18]);var inst_10616 = (state_10649[2]);var inst_10617 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10618 = cljs.core.async.untap_STAR_.call(null,m,inst_10615);var state_10649__$1 = (function (){var statearr_10674 = state_10649;(statearr_10674[22] = inst_10616);
(statearr_10674[23] = inst_10617);
return statearr_10674;
})();var statearr_10675_10753 = state_10649__$1;(statearr_10675_10753[2] = inst_10618);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 9))
{var inst_10574 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10676_10754 = state_10649__$1;(statearr_10676_10754[2] = inst_10574);
(statearr_10676_10754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 41))
{var inst_10615 = (state_10649[18]);var inst_10517 = (state_10649[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10649,40,Object,null,39);var inst_10622 = cljs.core.async.put_BANG_.call(null,inst_10615,inst_10517,done);var state_10649__$1 = state_10649;var statearr_10677_10755 = state_10649__$1;(statearr_10677_10755[2] = inst_10622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 10))
{var inst_10527 = (state_10649[16]);var inst_10529 = (state_10649[17]);var inst_10535 = cljs.core._nth.call(null,inst_10527,inst_10529);var inst_10536 = cljs.core.nth.call(null,inst_10535,0,null);var inst_10537 = cljs.core.nth.call(null,inst_10535,1,null);var state_10649__$1 = (function (){var statearr_10678 = state_10649;(statearr_10678[24] = inst_10536);
return statearr_10678;
})();if(cljs.core.truth_(inst_10537))
{var statearr_10679_10756 = state_10649__$1;(statearr_10679_10756[1] = 13);
} else
{var statearr_10680_10757 = state_10649__$1;(statearr_10680_10757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 42))
{var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10649__$1,45,dchan);
} else
{if((state_val_10650 === 11))
{var inst_10546 = (state_10649[25]);var inst_10526 = (state_10649[14]);var inst_10546__$1 = cljs.core.seq.call(null,inst_10526);var state_10649__$1 = (function (){var statearr_10681 = state_10649;(statearr_10681[25] = inst_10546__$1);
return statearr_10681;
})();if(inst_10546__$1)
{var statearr_10682_10758 = state_10649__$1;(statearr_10682_10758[1] = 16);
} else
{var statearr_10683_10759 = state_10649__$1;(statearr_10683_10759[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 43))
{var state_10649__$1 = state_10649;var statearr_10684_10760 = state_10649__$1;(statearr_10684_10760[2] = null);
(statearr_10684_10760[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 12))
{var inst_10572 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10685_10761 = state_10649__$1;(statearr_10685_10761[2] = inst_10572);
(statearr_10685_10761[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 44))
{var inst_10642 = (state_10649[2]);var state_10649__$1 = (function (){var statearr_10686 = state_10649;(statearr_10686[26] = inst_10642);
return statearr_10686;
})();var statearr_10687_10762 = state_10649__$1;(statearr_10687_10762[2] = null);
(statearr_10687_10762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 13))
{var inst_10536 = (state_10649[24]);var inst_10539 = cljs.core.async.close_BANG_.call(null,inst_10536);var state_10649__$1 = state_10649;var statearr_10688_10763 = state_10649__$1;(statearr_10688_10763[2] = inst_10539);
(statearr_10688_10763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 45))
{var inst_10639 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10692_10764 = state_10649__$1;(statearr_10692_10764[2] = inst_10639);
(statearr_10692_10764[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 14))
{var state_10649__$1 = state_10649;var statearr_10693_10765 = state_10649__$1;(statearr_10693_10765[2] = null);
(statearr_10693_10765[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 15))
{var inst_10526 = (state_10649[14]);var inst_10528 = (state_10649[15]);var inst_10527 = (state_10649[16]);var inst_10529 = (state_10649[17]);var inst_10542 = (state_10649[2]);var inst_10543 = (inst_10529 + 1);var tmp10689 = inst_10526;var tmp10690 = inst_10528;var tmp10691 = inst_10527;var inst_10526__$1 = tmp10689;var inst_10527__$1 = tmp10691;var inst_10528__$1 = tmp10690;var inst_10529__$1 = inst_10543;var state_10649__$1 = (function (){var statearr_10694 = state_10649;(statearr_10694[14] = inst_10526__$1);
(statearr_10694[15] = inst_10528__$1);
(statearr_10694[16] = inst_10527__$1);
(statearr_10694[27] = inst_10542);
(statearr_10694[17] = inst_10529__$1);
return statearr_10694;
})();var statearr_10695_10766 = state_10649__$1;(statearr_10695_10766[2] = null);
(statearr_10695_10766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 16))
{var inst_10546 = (state_10649[25]);var inst_10548 = cljs.core.chunked_seq_QMARK_.call(null,inst_10546);var state_10649__$1 = state_10649;if(inst_10548)
{var statearr_10696_10767 = state_10649__$1;(statearr_10696_10767[1] = 19);
} else
{var statearr_10697_10768 = state_10649__$1;(statearr_10697_10768[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 17))
{var state_10649__$1 = state_10649;var statearr_10698_10769 = state_10649__$1;(statearr_10698_10769[2] = null);
(statearr_10698_10769[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 18))
{var inst_10570 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10699_10770 = state_10649__$1;(statearr_10699_10770[2] = inst_10570);
(statearr_10699_10770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 19))
{var inst_10546 = (state_10649[25]);var inst_10550 = cljs.core.chunk_first.call(null,inst_10546);var inst_10551 = cljs.core.chunk_rest.call(null,inst_10546);var inst_10552 = cljs.core.count.call(null,inst_10550);var inst_10526 = inst_10551;var inst_10527 = inst_10550;var inst_10528 = inst_10552;var inst_10529 = 0;var state_10649__$1 = (function (){var statearr_10700 = state_10649;(statearr_10700[14] = inst_10526);
(statearr_10700[15] = inst_10528);
(statearr_10700[16] = inst_10527);
(statearr_10700[17] = inst_10529);
return statearr_10700;
})();var statearr_10701_10771 = state_10649__$1;(statearr_10701_10771[2] = null);
(statearr_10701_10771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 20))
{var inst_10546 = (state_10649[25]);var inst_10556 = cljs.core.first.call(null,inst_10546);var inst_10557 = cljs.core.nth.call(null,inst_10556,0,null);var inst_10558 = cljs.core.nth.call(null,inst_10556,1,null);var state_10649__$1 = (function (){var statearr_10702 = state_10649;(statearr_10702[28] = inst_10557);
return statearr_10702;
})();if(cljs.core.truth_(inst_10558))
{var statearr_10703_10772 = state_10649__$1;(statearr_10703_10772[1] = 22);
} else
{var statearr_10704_10773 = state_10649__$1;(statearr_10704_10773[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 21))
{var inst_10567 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10705_10774 = state_10649__$1;(statearr_10705_10774[2] = inst_10567);
(statearr_10705_10774[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 22))
{var inst_10557 = (state_10649[28]);var inst_10560 = cljs.core.async.close_BANG_.call(null,inst_10557);var state_10649__$1 = state_10649;var statearr_10706_10775 = state_10649__$1;(statearr_10706_10775[2] = inst_10560);
(statearr_10706_10775[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 23))
{var state_10649__$1 = state_10649;var statearr_10707_10776 = state_10649__$1;(statearr_10707_10776[2] = null);
(statearr_10707_10776[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 24))
{var inst_10546 = (state_10649[25]);var inst_10563 = (state_10649[2]);var inst_10564 = cljs.core.next.call(null,inst_10546);var inst_10526 = inst_10564;var inst_10527 = null;var inst_10528 = 0;var inst_10529 = 0;var state_10649__$1 = (function (){var statearr_10708 = state_10649;(statearr_10708[29] = inst_10563);
(statearr_10708[14] = inst_10526);
(statearr_10708[15] = inst_10528);
(statearr_10708[16] = inst_10527);
(statearr_10708[17] = inst_10529);
return statearr_10708;
})();var statearr_10709_10777 = state_10649__$1;(statearr_10709_10777[2] = null);
(statearr_10709_10777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 25))
{var inst_10587 = (state_10649[10]);var inst_10588 = (state_10649[11]);var inst_10590 = (inst_10588 < inst_10587);var inst_10591 = inst_10590;var state_10649__$1 = state_10649;if(cljs.core.truth_(inst_10591))
{var statearr_10710_10778 = state_10649__$1;(statearr_10710_10778[1] = 27);
} else
{var statearr_10711_10779 = state_10649__$1;(statearr_10711_10779[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 26))
{var inst_10577 = (state_10649[19]);var inst_10635 = (state_10649[2]);var inst_10636 = cljs.core.seq.call(null,inst_10577);var state_10649__$1 = (function (){var statearr_10712 = state_10649;(statearr_10712[30] = inst_10635);
return statearr_10712;
})();if(inst_10636)
{var statearr_10713_10780 = state_10649__$1;(statearr_10713_10780[1] = 42);
} else
{var statearr_10714_10781 = state_10649__$1;(statearr_10714_10781[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 27))
{var inst_10588 = (state_10649[11]);var inst_10586 = (state_10649[12]);var inst_10593 = cljs.core._nth.call(null,inst_10586,inst_10588);var state_10649__$1 = (function (){var statearr_10715 = state_10649;(statearr_10715[8] = inst_10593);
return statearr_10715;
})();var statearr_10716_10782 = state_10649__$1;(statearr_10716_10782[2] = null);
(statearr_10716_10782[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 28))
{var inst_10585 = (state_10649[13]);var inst_10606 = (state_10649[9]);var inst_10606__$1 = cljs.core.seq.call(null,inst_10585);var state_10649__$1 = (function (){var statearr_10720 = state_10649;(statearr_10720[9] = inst_10606__$1);
return statearr_10720;
})();if(inst_10606__$1)
{var statearr_10721_10783 = state_10649__$1;(statearr_10721_10783[1] = 33);
} else
{var statearr_10722_10784 = state_10649__$1;(statearr_10722_10784[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 29))
{var inst_10633 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10723_10785 = state_10649__$1;(statearr_10723_10785[2] = inst_10633);
(statearr_10723_10785[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 30))
{var inst_10587 = (state_10649[10]);var inst_10588 = (state_10649[11]);var inst_10586 = (state_10649[12]);var inst_10585 = (state_10649[13]);var inst_10602 = (state_10649[2]);var inst_10603 = (inst_10588 + 1);var tmp10717 = inst_10587;var tmp10718 = inst_10586;var tmp10719 = inst_10585;var inst_10585__$1 = tmp10719;var inst_10586__$1 = tmp10718;var inst_10587__$1 = tmp10717;var inst_10588__$1 = inst_10603;var state_10649__$1 = (function (){var statearr_10724 = state_10649;(statearr_10724[10] = inst_10587__$1);
(statearr_10724[11] = inst_10588__$1);
(statearr_10724[31] = inst_10602);
(statearr_10724[12] = inst_10586__$1);
(statearr_10724[13] = inst_10585__$1);
return statearr_10724;
})();var statearr_10725_10786 = state_10649__$1;(statearr_10725_10786[2] = null);
(statearr_10725_10786[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 31))
{var inst_10593 = (state_10649[8]);var inst_10594 = (state_10649[2]);var inst_10595 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10596 = cljs.core.async.untap_STAR_.call(null,m,inst_10593);var state_10649__$1 = (function (){var statearr_10726 = state_10649;(statearr_10726[32] = inst_10595);
(statearr_10726[33] = inst_10594);
return statearr_10726;
})();var statearr_10727_10787 = state_10649__$1;(statearr_10727_10787[2] = inst_10596);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_10731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10731[0] = state_machine__5550__auto__);
(statearr_10731[1] = 1);
return statearr_10731;
});
var state_machine__5550__auto____1 = (function (state_10649){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10649);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10732){if((e10732 instanceof Object))
{var ex__5553__auto__ = e10732;var statearr_10733_10788 = state_10649;(statearr_10733_10788[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10789 = state_10649;
state_10649 = G__10789;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10649){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10734 = f__5565__auto__.call(null);(statearr_10734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10735);
return statearr_10734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10791 = {};return obj10791;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10901 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10902){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10902 = meta10902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10901.cljs$lang$type = true;
cljs.core.async.t10901.cljs$lang$ctorStr = "cljs.core.async/t10901";
cljs.core.async.t10901.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10901");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10903){var self__ = this;
var _10903__$1 = this;return self__.meta10902;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10903,meta10902__$1){var self__ = this;
var _10903__$1 = this;return (new cljs.core.async.t10901(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10902__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10901 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10901(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10902){return (new cljs.core.async.t10901(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10902));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10901(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5564__auto___11010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10968){var state_val_10969 = (state_10968[1]);if((state_val_10969 === 1))
{var inst_10907 = (state_10968[7]);var inst_10907__$1 = calc_state.call(null);var inst_10908 = cljs.core.seq_QMARK_.call(null,inst_10907__$1);var state_10968__$1 = (function (){var statearr_10970 = state_10968;(statearr_10970[7] = inst_10907__$1);
return statearr_10970;
})();if(inst_10908)
{var statearr_10971_11011 = state_10968__$1;(statearr_10971_11011[1] = 2);
} else
{var statearr_10972_11012 = state_10968__$1;(statearr_10972_11012[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 2))
{var inst_10907 = (state_10968[7]);var inst_10910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10907);var state_10968__$1 = state_10968;var statearr_10973_11013 = state_10968__$1;(statearr_10973_11013[2] = inst_10910);
(statearr_10973_11013[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 3))
{var inst_10907 = (state_10968[7]);var state_10968__$1 = state_10968;var statearr_10974_11014 = state_10968__$1;(statearr_10974_11014[2] = inst_10907);
(statearr_10974_11014[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 4))
{var inst_10907 = (state_10968[7]);var inst_10913 = (state_10968[2]);var inst_10914 = cljs.core.get.call(null,inst_10913,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10915 = cljs.core.get.call(null,inst_10913,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10916 = cljs.core.get.call(null,inst_10913,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10917 = inst_10907;var state_10968__$1 = (function (){var statearr_10975 = state_10968;(statearr_10975[8] = inst_10916);
(statearr_10975[9] = inst_10917);
(statearr_10975[10] = inst_10914);
(statearr_10975[11] = inst_10915);
return statearr_10975;
})();var statearr_10976_11015 = state_10968__$1;(statearr_10976_11015[2] = null);
(statearr_10976_11015[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 5))
{var inst_10917 = (state_10968[9]);var inst_10920 = cljs.core.seq_QMARK_.call(null,inst_10917);var state_10968__$1 = state_10968;if(inst_10920)
{var statearr_10977_11016 = state_10968__$1;(statearr_10977_11016[1] = 7);
} else
{var statearr_10978_11017 = state_10968__$1;(statearr_10978_11017[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 6))
{var inst_10966 = (state_10968[2]);var state_10968__$1 = state_10968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10968__$1,inst_10966);
} else
{if((state_val_10969 === 7))
{var inst_10917 = (state_10968[9]);var inst_10922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10917);var state_10968__$1 = state_10968;var statearr_10979_11018 = state_10968__$1;(statearr_10979_11018[2] = inst_10922);
(statearr_10979_11018[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 8))
{var inst_10917 = (state_10968[9]);var state_10968__$1 = state_10968;var statearr_10980_11019 = state_10968__$1;(statearr_10980_11019[2] = inst_10917);
(statearr_10980_11019[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 9))
{var inst_10925 = (state_10968[12]);var inst_10925__$1 = (state_10968[2]);var inst_10926 = cljs.core.get.call(null,inst_10925__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10927 = cljs.core.get.call(null,inst_10925__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10928 = cljs.core.get.call(null,inst_10925__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10968__$1 = (function (){var statearr_10981 = state_10968;(statearr_10981[13] = inst_10927);
(statearr_10981[14] = inst_10928);
(statearr_10981[12] = inst_10925__$1);
return statearr_10981;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10968__$1,10,inst_10926);
} else
{if((state_val_10969 === 10))
{var inst_10933 = (state_10968[15]);var inst_10932 = (state_10968[16]);var inst_10931 = (state_10968[2]);var inst_10932__$1 = cljs.core.nth.call(null,inst_10931,0,null);var inst_10933__$1 = cljs.core.nth.call(null,inst_10931,1,null);var inst_10934 = (inst_10932__$1 == null);var inst_10935 = cljs.core._EQ_.call(null,inst_10933__$1,change);var inst_10936 = (inst_10934) || (inst_10935);var state_10968__$1 = (function (){var statearr_10982 = state_10968;(statearr_10982[15] = inst_10933__$1);
(statearr_10982[16] = inst_10932__$1);
return statearr_10982;
})();if(cljs.core.truth_(inst_10936))
{var statearr_10983_11020 = state_10968__$1;(statearr_10983_11020[1] = 11);
} else
{var statearr_10984_11021 = state_10968__$1;(statearr_10984_11021[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 11))
{var inst_10932 = (state_10968[16]);var inst_10938 = (inst_10932 == null);var state_10968__$1 = state_10968;if(cljs.core.truth_(inst_10938))
{var statearr_10985_11022 = state_10968__$1;(statearr_10985_11022[1] = 14);
} else
{var statearr_10986_11023 = state_10968__$1;(statearr_10986_11023[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 12))
{var inst_10933 = (state_10968[15]);var inst_10947 = (state_10968[17]);var inst_10928 = (state_10968[14]);var inst_10947__$1 = inst_10928.call(null,inst_10933);var state_10968__$1 = (function (){var statearr_10987 = state_10968;(statearr_10987[17] = inst_10947__$1);
return statearr_10987;
})();if(cljs.core.truth_(inst_10947__$1))
{var statearr_10988_11024 = state_10968__$1;(statearr_10988_11024[1] = 17);
} else
{var statearr_10989_11025 = state_10968__$1;(statearr_10989_11025[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 13))
{var inst_10964 = (state_10968[2]);var state_10968__$1 = state_10968;var statearr_10990_11026 = state_10968__$1;(statearr_10990_11026[2] = inst_10964);
(statearr_10990_11026[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 14))
{var inst_10933 = (state_10968[15]);var inst_10940 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10933);var state_10968__$1 = state_10968;var statearr_10991_11027 = state_10968__$1;(statearr_10991_11027[2] = inst_10940);
(statearr_10991_11027[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 15))
{var state_10968__$1 = state_10968;var statearr_10992_11028 = state_10968__$1;(statearr_10992_11028[2] = null);
(statearr_10992_11028[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 16))
{var inst_10943 = (state_10968[2]);var inst_10944 = calc_state.call(null);var inst_10917 = inst_10944;var state_10968__$1 = (function (){var statearr_10993 = state_10968;(statearr_10993[18] = inst_10943);
(statearr_10993[9] = inst_10917);
return statearr_10993;
})();var statearr_10994_11029 = state_10968__$1;(statearr_10994_11029[2] = null);
(statearr_10994_11029[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 17))
{var inst_10947 = (state_10968[17]);var state_10968__$1 = state_10968;var statearr_10995_11030 = state_10968__$1;(statearr_10995_11030[2] = inst_10947);
(statearr_10995_11030[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 18))
{var inst_10933 = (state_10968[15]);var inst_10927 = (state_10968[13]);var inst_10928 = (state_10968[14]);var inst_10950 = cljs.core.empty_QMARK_.call(null,inst_10928);var inst_10951 = inst_10927.call(null,inst_10933);var inst_10952 = cljs.core.not.call(null,inst_10951);var inst_10953 = (inst_10950) && (inst_10952);var state_10968__$1 = state_10968;var statearr_10996_11031 = state_10968__$1;(statearr_10996_11031[2] = inst_10953);
(statearr_10996_11031[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 19))
{var inst_10955 = (state_10968[2]);var state_10968__$1 = state_10968;if(cljs.core.truth_(inst_10955))
{var statearr_10997_11032 = state_10968__$1;(statearr_10997_11032[1] = 20);
} else
{var statearr_10998_11033 = state_10968__$1;(statearr_10998_11033[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 20))
{var inst_10932 = (state_10968[16]);var state_10968__$1 = state_10968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10968__$1,23,out,inst_10932);
} else
{if((state_val_10969 === 21))
{var state_10968__$1 = state_10968;var statearr_10999_11034 = state_10968__$1;(statearr_10999_11034[2] = null);
(statearr_10999_11034[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 22))
{var inst_10925 = (state_10968[12]);var inst_10961 = (state_10968[2]);var inst_10917 = inst_10925;var state_10968__$1 = (function (){var statearr_11000 = state_10968;(statearr_11000[19] = inst_10961);
(statearr_11000[9] = inst_10917);
return statearr_11000;
})();var statearr_11001_11035 = state_10968__$1;(statearr_11001_11035[2] = null);
(statearr_11001_11035[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10969 === 23))
{var inst_10958 = (state_10968[2]);var state_10968__$1 = state_10968;var statearr_11002_11036 = state_10968__$1;(statearr_11002_11036[2] = inst_10958);
(statearr_11002_11036[1] = 22);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_11006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11006[0] = state_machine__5550__auto__);
(statearr_11006[1] = 1);
return statearr_11006;
});
var state_machine__5550__auto____1 = (function (state_10968){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11007){if((e11007 instanceof Object))
{var ex__5553__auto__ = e11007;var statearr_11008_11037 = state_10968;(statearr_11008_11037[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11038 = state_10968;
state_10968 = G__11038;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10968){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11009 = f__5565__auto__.call(null);(statearr_11009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11010);
return statearr_11009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11040 = {};return obj11040;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__11041_SHARP_){if(cljs.core.truth_(p1__11041_SHARP_.call(null,topic)))
{return p1__11041_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11041_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11166 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11167){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11167 = meta11167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11166.cljs$lang$type = true;
cljs.core.async.t11166.cljs$lang$ctorStr = "cljs.core.async/t11166";
cljs.core.async.t11166.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11166");
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11168){var self__ = this;
var _11168__$1 = this;return self__.meta11167;
});})(mults,ensure_mult))
;
cljs.core.async.t11166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11168,meta11167__$1){var self__ = this;
var _11168__$1 = this;return (new cljs.core.async.t11166(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11167__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11166 = ((function (mults,ensure_mult){
return (function __GT_t11166(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11167){return (new cljs.core.async.t11166(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11167));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11166(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5564__auto___11290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11242){var state_val_11243 = (state_11242[1]);if((state_val_11243 === 1))
{var state_11242__$1 = state_11242;var statearr_11244_11291 = state_11242__$1;(statearr_11244_11291[2] = null);
(statearr_11244_11291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 2))
{var state_11242__$1 = state_11242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11242__$1,4,ch);
} else
{if((state_val_11243 === 3))
{var inst_11240 = (state_11242[2]);var state_11242__$1 = state_11242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11242__$1,inst_11240);
} else
{if((state_val_11243 === 4))
{var inst_11171 = (state_11242[7]);var inst_11171__$1 = (state_11242[2]);var inst_11172 = (inst_11171__$1 == null);var state_11242__$1 = (function (){var statearr_11245 = state_11242;(statearr_11245[7] = inst_11171__$1);
return statearr_11245;
})();if(cljs.core.truth_(inst_11172))
{var statearr_11246_11292 = state_11242__$1;(statearr_11246_11292[1] = 5);
} else
{var statearr_11247_11293 = state_11242__$1;(statearr_11247_11293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 5))
{var inst_11178 = cljs.core.deref.call(null,mults);var inst_11179 = cljs.core.vals.call(null,inst_11178);var inst_11180 = cljs.core.seq.call(null,inst_11179);var inst_11181 = inst_11180;var inst_11182 = null;var inst_11183 = 0;var inst_11184 = 0;var state_11242__$1 = (function (){var statearr_11248 = state_11242;(statearr_11248[8] = inst_11184);
(statearr_11248[9] = inst_11181);
(statearr_11248[10] = inst_11183);
(statearr_11248[11] = inst_11182);
return statearr_11248;
})();var statearr_11249_11294 = state_11242__$1;(statearr_11249_11294[2] = null);
(statearr_11249_11294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 6))
{var inst_11221 = (state_11242[12]);var inst_11171 = (state_11242[7]);var inst_11219 = (state_11242[13]);var inst_11219__$1 = topic_fn.call(null,inst_11171);var inst_11220 = cljs.core.deref.call(null,mults);var inst_11221__$1 = cljs.core.get.call(null,inst_11220,inst_11219__$1);var state_11242__$1 = (function (){var statearr_11250 = state_11242;(statearr_11250[12] = inst_11221__$1);
(statearr_11250[13] = inst_11219__$1);
return statearr_11250;
})();if(cljs.core.truth_(inst_11221__$1))
{var statearr_11251_11295 = state_11242__$1;(statearr_11251_11295[1] = 19);
} else
{var statearr_11252_11296 = state_11242__$1;(statearr_11252_11296[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 7))
{var inst_11238 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11253_11297 = state_11242__$1;(statearr_11253_11297[2] = inst_11238);
(statearr_11253_11297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 8))
{var inst_11184 = (state_11242[8]);var inst_11183 = (state_11242[10]);var inst_11186 = (inst_11184 < inst_11183);var inst_11187 = inst_11186;var state_11242__$1 = state_11242;if(cljs.core.truth_(inst_11187))
{var statearr_11257_11298 = state_11242__$1;(statearr_11257_11298[1] = 10);
} else
{var statearr_11258_11299 = state_11242__$1;(statearr_11258_11299[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 9))
{var inst_11217 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11259_11300 = state_11242__$1;(statearr_11259_11300[2] = inst_11217);
(statearr_11259_11300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 10))
{var inst_11184 = (state_11242[8]);var inst_11181 = (state_11242[9]);var inst_11183 = (state_11242[10]);var inst_11182 = (state_11242[11]);var inst_11189 = cljs.core._nth.call(null,inst_11182,inst_11184);var inst_11190 = cljs.core.async.muxch_STAR_.call(null,inst_11189);var inst_11191 = cljs.core.async.close_BANG_.call(null,inst_11190);var inst_11192 = (inst_11184 + 1);var tmp11254 = inst_11181;var tmp11255 = inst_11183;var tmp11256 = inst_11182;var inst_11181__$1 = tmp11254;var inst_11182__$1 = tmp11256;var inst_11183__$1 = tmp11255;var inst_11184__$1 = inst_11192;var state_11242__$1 = (function (){var statearr_11260 = state_11242;(statearr_11260[8] = inst_11184__$1);
(statearr_11260[9] = inst_11181__$1);
(statearr_11260[10] = inst_11183__$1);
(statearr_11260[11] = inst_11182__$1);
(statearr_11260[14] = inst_11191);
return statearr_11260;
})();var statearr_11261_11301 = state_11242__$1;(statearr_11261_11301[2] = null);
(statearr_11261_11301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 11))
{var inst_11181 = (state_11242[9]);var inst_11195 = (state_11242[15]);var inst_11195__$1 = cljs.core.seq.call(null,inst_11181);var state_11242__$1 = (function (){var statearr_11262 = state_11242;(statearr_11262[15] = inst_11195__$1);
return statearr_11262;
})();if(inst_11195__$1)
{var statearr_11263_11302 = state_11242__$1;(statearr_11263_11302[1] = 13);
} else
{var statearr_11264_11303 = state_11242__$1;(statearr_11264_11303[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 12))
{var inst_11215 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11265_11304 = state_11242__$1;(statearr_11265_11304[2] = inst_11215);
(statearr_11265_11304[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 13))
{var inst_11195 = (state_11242[15]);var inst_11197 = cljs.core.chunked_seq_QMARK_.call(null,inst_11195);var state_11242__$1 = state_11242;if(inst_11197)
{var statearr_11266_11305 = state_11242__$1;(statearr_11266_11305[1] = 16);
} else
{var statearr_11267_11306 = state_11242__$1;(statearr_11267_11306[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 14))
{var state_11242__$1 = state_11242;var statearr_11268_11307 = state_11242__$1;(statearr_11268_11307[2] = null);
(statearr_11268_11307[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 15))
{var inst_11213 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11269_11308 = state_11242__$1;(statearr_11269_11308[2] = inst_11213);
(statearr_11269_11308[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 16))
{var inst_11195 = (state_11242[15]);var inst_11199 = cljs.core.chunk_first.call(null,inst_11195);var inst_11200 = cljs.core.chunk_rest.call(null,inst_11195);var inst_11201 = cljs.core.count.call(null,inst_11199);var inst_11181 = inst_11200;var inst_11182 = inst_11199;var inst_11183 = inst_11201;var inst_11184 = 0;var state_11242__$1 = (function (){var statearr_11270 = state_11242;(statearr_11270[8] = inst_11184);
(statearr_11270[9] = inst_11181);
(statearr_11270[10] = inst_11183);
(statearr_11270[11] = inst_11182);
return statearr_11270;
})();var statearr_11271_11309 = state_11242__$1;(statearr_11271_11309[2] = null);
(statearr_11271_11309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 17))
{var inst_11195 = (state_11242[15]);var inst_11204 = cljs.core.first.call(null,inst_11195);var inst_11205 = cljs.core.async.muxch_STAR_.call(null,inst_11204);var inst_11206 = cljs.core.async.close_BANG_.call(null,inst_11205);var inst_11207 = cljs.core.next.call(null,inst_11195);var inst_11181 = inst_11207;var inst_11182 = null;var inst_11183 = 0;var inst_11184 = 0;var state_11242__$1 = (function (){var statearr_11272 = state_11242;(statearr_11272[8] = inst_11184);
(statearr_11272[9] = inst_11181);
(statearr_11272[10] = inst_11183);
(statearr_11272[16] = inst_11206);
(statearr_11272[11] = inst_11182);
return statearr_11272;
})();var statearr_11273_11310 = state_11242__$1;(statearr_11273_11310[2] = null);
(statearr_11273_11310[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 18))
{var inst_11210 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11274_11311 = state_11242__$1;(statearr_11274_11311[2] = inst_11210);
(statearr_11274_11311[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 19))
{var state_11242__$1 = state_11242;var statearr_11275_11312 = state_11242__$1;(statearr_11275_11312[2] = null);
(statearr_11275_11312[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 20))
{var state_11242__$1 = state_11242;var statearr_11276_11313 = state_11242__$1;(statearr_11276_11313[2] = null);
(statearr_11276_11313[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 21))
{var inst_11235 = (state_11242[2]);var state_11242__$1 = (function (){var statearr_11277 = state_11242;(statearr_11277[17] = inst_11235);
return statearr_11277;
})();var statearr_11278_11314 = state_11242__$1;(statearr_11278_11314[2] = null);
(statearr_11278_11314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 22))
{var inst_11232 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11279_11315 = state_11242__$1;(statearr_11279_11315[2] = inst_11232);
(statearr_11279_11315[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 23))
{var inst_11219 = (state_11242[13]);var inst_11223 = (state_11242[2]);var inst_11224 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11219);var state_11242__$1 = (function (){var statearr_11280 = state_11242;(statearr_11280[18] = inst_11223);
return statearr_11280;
})();var statearr_11281_11316 = state_11242__$1;(statearr_11281_11316[2] = inst_11224);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 24))
{var inst_11221 = (state_11242[12]);var inst_11171 = (state_11242[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11242,23,Object,null,22);var inst_11228 = cljs.core.async.muxch_STAR_.call(null,inst_11221);var state_11242__$1 = state_11242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11242__$1,25,inst_11228,inst_11171);
} else
{if((state_val_11243 === 25))
{var inst_11230 = (state_11242[2]);var state_11242__$1 = state_11242;var statearr_11282_11317 = state_11242__$1;(statearr_11282_11317[2] = inst_11230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242__$1);
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
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_11286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11286[0] = state_machine__5550__auto__);
(statearr_11286[1] = 1);
return statearr_11286;
});
var state_machine__5550__auto____1 = (function (state_11242){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11242);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11287){if((e11287 instanceof Object))
{var ex__5553__auto__ = e11287;var statearr_11288_11318 = state_11242;(statearr_11288_11318[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11319 = state_11242;
state_11242 = G__11319;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11242){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11289 = f__5565__auto__.call(null);(statearr_11289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11290);
return statearr_11289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5564__auto___11456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11426){var state_val_11427 = (state_11426[1]);if((state_val_11427 === 1))
{var state_11426__$1 = state_11426;var statearr_11428_11457 = state_11426__$1;(statearr_11428_11457[2] = null);
(statearr_11428_11457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 2))
{var inst_11389 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11390 = 0;var state_11426__$1 = (function (){var statearr_11429 = state_11426;(statearr_11429[7] = inst_11389);
(statearr_11429[8] = inst_11390);
return statearr_11429;
})();var statearr_11430_11458 = state_11426__$1;(statearr_11430_11458[2] = null);
(statearr_11430_11458[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 3))
{var inst_11424 = (state_11426[2]);var state_11426__$1 = state_11426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11426__$1,inst_11424);
} else
{if((state_val_11427 === 4))
{var inst_11390 = (state_11426[8]);var inst_11392 = (inst_11390 < cnt);var state_11426__$1 = state_11426;if(cljs.core.truth_(inst_11392))
{var statearr_11431_11459 = state_11426__$1;(statearr_11431_11459[1] = 6);
} else
{var statearr_11432_11460 = state_11426__$1;(statearr_11432_11460[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 5))
{var inst_11410 = (state_11426[2]);var state_11426__$1 = (function (){var statearr_11433 = state_11426;(statearr_11433[9] = inst_11410);
return statearr_11433;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11426__$1,12,dchan);
} else
{if((state_val_11427 === 6))
{var state_11426__$1 = state_11426;var statearr_11434_11461 = state_11426__$1;(statearr_11434_11461[2] = null);
(statearr_11434_11461[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 7))
{var state_11426__$1 = state_11426;var statearr_11435_11462 = state_11426__$1;(statearr_11435_11462[2] = null);
(statearr_11435_11462[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 8))
{var inst_11408 = (state_11426[2]);var state_11426__$1 = state_11426;var statearr_11436_11463 = state_11426__$1;(statearr_11436_11463[2] = inst_11408);
(statearr_11436_11463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 9))
{var inst_11390 = (state_11426[8]);var inst_11403 = (state_11426[2]);var inst_11404 = (inst_11390 + 1);var inst_11390__$1 = inst_11404;var state_11426__$1 = (function (){var statearr_11437 = state_11426;(statearr_11437[10] = inst_11403);
(statearr_11437[8] = inst_11390__$1);
return statearr_11437;
})();var statearr_11438_11464 = state_11426__$1;(statearr_11438_11464[2] = null);
(statearr_11438_11464[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 10))
{var inst_11394 = (state_11426[2]);var inst_11395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11426__$1 = (function (){var statearr_11439 = state_11426;(statearr_11439[11] = inst_11394);
return statearr_11439;
})();var statearr_11440_11465 = state_11426__$1;(statearr_11440_11465[2] = inst_11395);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11426__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 11))
{var inst_11390 = (state_11426[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11426,10,Object,null,9);var inst_11399 = chs__$1.call(null,inst_11390);var inst_11400 = done.call(null,inst_11390);var inst_11401 = cljs.core.async.take_BANG_.call(null,inst_11399,inst_11400);var state_11426__$1 = state_11426;var statearr_11441_11466 = state_11426__$1;(statearr_11441_11466[2] = inst_11401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11426__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 12))
{var inst_11412 = (state_11426[12]);var inst_11412__$1 = (state_11426[2]);var inst_11413 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11412__$1);var state_11426__$1 = (function (){var statearr_11442 = state_11426;(statearr_11442[12] = inst_11412__$1);
return statearr_11442;
})();if(cljs.core.truth_(inst_11413))
{var statearr_11443_11467 = state_11426__$1;(statearr_11443_11467[1] = 13);
} else
{var statearr_11444_11468 = state_11426__$1;(statearr_11444_11468[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 13))
{var inst_11415 = cljs.core.async.close_BANG_.call(null,out);var state_11426__$1 = state_11426;var statearr_11445_11469 = state_11426__$1;(statearr_11445_11469[2] = inst_11415);
(statearr_11445_11469[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 14))
{var inst_11412 = (state_11426[12]);var inst_11417 = cljs.core.apply.call(null,f,inst_11412);var state_11426__$1 = state_11426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11426__$1,16,out,inst_11417);
} else
{if((state_val_11427 === 15))
{var inst_11422 = (state_11426[2]);var state_11426__$1 = state_11426;var statearr_11446_11470 = state_11426__$1;(statearr_11446_11470[2] = inst_11422);
(statearr_11446_11470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11427 === 16))
{var inst_11419 = (state_11426[2]);var state_11426__$1 = (function (){var statearr_11447 = state_11426;(statearr_11447[13] = inst_11419);
return statearr_11447;
})();var statearr_11448_11471 = state_11426__$1;(statearr_11448_11471[2] = null);
(statearr_11448_11471[1] = 2);
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
}
}
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
var state_machine__5550__auto____0 = (function (){var statearr_11452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11452[0] = state_machine__5550__auto__);
(statearr_11452[1] = 1);
return statearr_11452;
});
var state_machine__5550__auto____1 = (function (state_11426){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11426);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object))
{var ex__5553__auto__ = e11453;var statearr_11454_11472 = state_11426;(statearr_11454_11472[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11473 = state_11426;
state_11426 = G__11473;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11426){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11455 = f__5565__auto__.call(null);(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11456);
return statearr_11455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11581 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11557){var state_val_11558 = (state_11557[1]);if((state_val_11558 === 1))
{var inst_11528 = cljs.core.vec.call(null,chs);var inst_11529 = inst_11528;var state_11557__$1 = (function (){var statearr_11559 = state_11557;(statearr_11559[7] = inst_11529);
return statearr_11559;
})();var statearr_11560_11582 = state_11557__$1;(statearr_11560_11582[2] = null);
(statearr_11560_11582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 2))
{var inst_11529 = (state_11557[7]);var inst_11531 = cljs.core.count.call(null,inst_11529);var inst_11532 = (inst_11531 > 0);var state_11557__$1 = state_11557;if(cljs.core.truth_(inst_11532))
{var statearr_11561_11583 = state_11557__$1;(statearr_11561_11583[1] = 4);
} else
{var statearr_11562_11584 = state_11557__$1;(statearr_11562_11584[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 3))
{var inst_11555 = (state_11557[2]);var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11557__$1,inst_11555);
} else
{if((state_val_11558 === 4))
{var inst_11529 = (state_11557[7]);var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11557__$1,7,inst_11529);
} else
{if((state_val_11558 === 5))
{var inst_11551 = cljs.core.async.close_BANG_.call(null,out);var state_11557__$1 = state_11557;var statearr_11563_11585 = state_11557__$1;(statearr_11563_11585[2] = inst_11551);
(statearr_11563_11585[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 6))
{var inst_11553 = (state_11557[2]);var state_11557__$1 = state_11557;var statearr_11564_11586 = state_11557__$1;(statearr_11564_11586[2] = inst_11553);
(statearr_11564_11586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 7))
{var inst_11536 = (state_11557[8]);var inst_11537 = (state_11557[9]);var inst_11536__$1 = (state_11557[2]);var inst_11537__$1 = cljs.core.nth.call(null,inst_11536__$1,0,null);var inst_11538 = cljs.core.nth.call(null,inst_11536__$1,1,null);var inst_11539 = (inst_11537__$1 == null);var state_11557__$1 = (function (){var statearr_11565 = state_11557;(statearr_11565[8] = inst_11536__$1);
(statearr_11565[10] = inst_11538);
(statearr_11565[9] = inst_11537__$1);
return statearr_11565;
})();if(cljs.core.truth_(inst_11539))
{var statearr_11566_11587 = state_11557__$1;(statearr_11566_11587[1] = 8);
} else
{var statearr_11567_11588 = state_11557__$1;(statearr_11567_11588[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 8))
{var inst_11536 = (state_11557[8]);var inst_11529 = (state_11557[7]);var inst_11538 = (state_11557[10]);var inst_11537 = (state_11557[9]);var inst_11541 = (function (){var c = inst_11538;var v = inst_11537;var vec__11534 = inst_11536;var cs = inst_11529;return ((function (c,v,vec__11534,cs,inst_11536,inst_11529,inst_11538,inst_11537,state_val_11558){
return (function (p1__11474_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11474_SHARP_);
});
;})(c,v,vec__11534,cs,inst_11536,inst_11529,inst_11538,inst_11537,state_val_11558))
})();var inst_11542 = cljs.core.filterv.call(null,inst_11541,inst_11529);var inst_11529__$1 = inst_11542;var state_11557__$1 = (function (){var statearr_11568 = state_11557;(statearr_11568[7] = inst_11529__$1);
return statearr_11568;
})();var statearr_11569_11589 = state_11557__$1;(statearr_11569_11589[2] = null);
(statearr_11569_11589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 9))
{var inst_11537 = (state_11557[9]);var state_11557__$1 = state_11557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11557__$1,11,out,inst_11537);
} else
{if((state_val_11558 === 10))
{var inst_11549 = (state_11557[2]);var state_11557__$1 = state_11557;var statearr_11571_11590 = state_11557__$1;(statearr_11571_11590[2] = inst_11549);
(statearr_11571_11590[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11558 === 11))
{var inst_11529 = (state_11557[7]);var inst_11546 = (state_11557[2]);var tmp11570 = inst_11529;var inst_11529__$1 = tmp11570;var state_11557__$1 = (function (){var statearr_11572 = state_11557;(statearr_11572[7] = inst_11529__$1);
(statearr_11572[11] = inst_11546);
return statearr_11572;
})();var statearr_11573_11591 = state_11557__$1;(statearr_11573_11591[2] = null);
(statearr_11573_11591[1] = 2);
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
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_11577 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11577[0] = state_machine__5550__auto__);
(statearr_11577[1] = 1);
return statearr_11577;
});
var state_machine__5550__auto____1 = (function (state_11557){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11578){if((e11578 instanceof Object))
{var ex__5553__auto__ = e11578;var statearr_11579_11592 = state_11557;(statearr_11579_11592[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11593 = state_11557;
state_11557 = G__11593;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11557){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11580 = f__5565__auto__.call(null);(statearr_11580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11581);
return statearr_11580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11686 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11663){var state_val_11664 = (state_11663[1]);if((state_val_11664 === 1))
{var inst_11640 = 0;var state_11663__$1 = (function (){var statearr_11665 = state_11663;(statearr_11665[7] = inst_11640);
return statearr_11665;
})();var statearr_11666_11687 = state_11663__$1;(statearr_11666_11687[2] = null);
(statearr_11666_11687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 2))
{var inst_11640 = (state_11663[7]);var inst_11642 = (inst_11640 < n);var state_11663__$1 = state_11663;if(cljs.core.truth_(inst_11642))
{var statearr_11667_11688 = state_11663__$1;(statearr_11667_11688[1] = 4);
} else
{var statearr_11668_11689 = state_11663__$1;(statearr_11668_11689[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 3))
{var inst_11660 = (state_11663[2]);var inst_11661 = cljs.core.async.close_BANG_.call(null,out);var state_11663__$1 = (function (){var statearr_11669 = state_11663;(statearr_11669[8] = inst_11660);
return statearr_11669;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11663__$1,inst_11661);
} else
{if((state_val_11664 === 4))
{var state_11663__$1 = state_11663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11663__$1,7,ch);
} else
{if((state_val_11664 === 5))
{var state_11663__$1 = state_11663;var statearr_11670_11690 = state_11663__$1;(statearr_11670_11690[2] = null);
(statearr_11670_11690[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 6))
{var inst_11658 = (state_11663[2]);var state_11663__$1 = state_11663;var statearr_11671_11691 = state_11663__$1;(statearr_11671_11691[2] = inst_11658);
(statearr_11671_11691[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 7))
{var inst_11645 = (state_11663[9]);var inst_11645__$1 = (state_11663[2]);var inst_11646 = (inst_11645__$1 == null);var inst_11647 = cljs.core.not.call(null,inst_11646);var state_11663__$1 = (function (){var statearr_11672 = state_11663;(statearr_11672[9] = inst_11645__$1);
return statearr_11672;
})();if(inst_11647)
{var statearr_11673_11692 = state_11663__$1;(statearr_11673_11692[1] = 8);
} else
{var statearr_11674_11693 = state_11663__$1;(statearr_11674_11693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 8))
{var inst_11645 = (state_11663[9]);var state_11663__$1 = state_11663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11663__$1,11,out,inst_11645);
} else
{if((state_val_11664 === 9))
{var state_11663__$1 = state_11663;var statearr_11675_11694 = state_11663__$1;(statearr_11675_11694[2] = null);
(statearr_11675_11694[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 10))
{var inst_11655 = (state_11663[2]);var state_11663__$1 = state_11663;var statearr_11676_11695 = state_11663__$1;(statearr_11676_11695[2] = inst_11655);
(statearr_11676_11695[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11664 === 11))
{var inst_11640 = (state_11663[7]);var inst_11650 = (state_11663[2]);var inst_11651 = (inst_11640 + 1);var inst_11640__$1 = inst_11651;var state_11663__$1 = (function (){var statearr_11677 = state_11663;(statearr_11677[10] = inst_11650);
(statearr_11677[7] = inst_11640__$1);
return statearr_11677;
})();var statearr_11678_11696 = state_11663__$1;(statearr_11678_11696[2] = null);
(statearr_11678_11696[1] = 2);
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
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_11682 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11682[0] = state_machine__5550__auto__);
(statearr_11682[1] = 1);
return statearr_11682;
});
var state_machine__5550__auto____1 = (function (state_11663){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11683){if((e11683 instanceof Object))
{var ex__5553__auto__ = e11683;var statearr_11684_11697 = state_11663;(statearr_11684_11697[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11698 = state_11663;
state_11663 = G__11698;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11663){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11685 = f__5565__auto__.call(null);(statearr_11685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11686);
return statearr_11685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11795 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11770){var state_val_11771 = (state_11770[1]);if((state_val_11771 === 1))
{var inst_11747 = null;var state_11770__$1 = (function (){var statearr_11772 = state_11770;(statearr_11772[7] = inst_11747);
return statearr_11772;
})();var statearr_11773_11796 = state_11770__$1;(statearr_11773_11796[2] = null);
(statearr_11773_11796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 2))
{var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11770__$1,4,ch);
} else
{if((state_val_11771 === 3))
{var inst_11767 = (state_11770[2]);var inst_11768 = cljs.core.async.close_BANG_.call(null,out);var state_11770__$1 = (function (){var statearr_11774 = state_11770;(statearr_11774[8] = inst_11767);
return statearr_11774;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11770__$1,inst_11768);
} else
{if((state_val_11771 === 4))
{var inst_11750 = (state_11770[9]);var inst_11750__$1 = (state_11770[2]);var inst_11751 = (inst_11750__$1 == null);var inst_11752 = cljs.core.not.call(null,inst_11751);var state_11770__$1 = (function (){var statearr_11775 = state_11770;(statearr_11775[9] = inst_11750__$1);
return statearr_11775;
})();if(inst_11752)
{var statearr_11776_11797 = state_11770__$1;(statearr_11776_11797[1] = 5);
} else
{var statearr_11777_11798 = state_11770__$1;(statearr_11777_11798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 5))
{var inst_11747 = (state_11770[7]);var inst_11750 = (state_11770[9]);var inst_11754 = cljs.core._EQ_.call(null,inst_11750,inst_11747);var state_11770__$1 = state_11770;if(inst_11754)
{var statearr_11778_11799 = state_11770__$1;(statearr_11778_11799[1] = 8);
} else
{var statearr_11779_11800 = state_11770__$1;(statearr_11779_11800[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 6))
{var state_11770__$1 = state_11770;var statearr_11781_11801 = state_11770__$1;(statearr_11781_11801[2] = null);
(statearr_11781_11801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 7))
{var inst_11765 = (state_11770[2]);var state_11770__$1 = state_11770;var statearr_11782_11802 = state_11770__$1;(statearr_11782_11802[2] = inst_11765);
(statearr_11782_11802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 8))
{var inst_11747 = (state_11770[7]);var tmp11780 = inst_11747;var inst_11747__$1 = tmp11780;var state_11770__$1 = (function (){var statearr_11783 = state_11770;(statearr_11783[7] = inst_11747__$1);
return statearr_11783;
})();var statearr_11784_11803 = state_11770__$1;(statearr_11784_11803[2] = null);
(statearr_11784_11803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 9))
{var inst_11750 = (state_11770[9]);var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11770__$1,11,out,inst_11750);
} else
{if((state_val_11771 === 10))
{var inst_11762 = (state_11770[2]);var state_11770__$1 = state_11770;var statearr_11785_11804 = state_11770__$1;(statearr_11785_11804[2] = inst_11762);
(statearr_11785_11804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 11))
{var inst_11750 = (state_11770[9]);var inst_11759 = (state_11770[2]);var inst_11747 = inst_11750;var state_11770__$1 = (function (){var statearr_11786 = state_11770;(statearr_11786[7] = inst_11747);
(statearr_11786[10] = inst_11759);
return statearr_11786;
})();var statearr_11787_11805 = state_11770__$1;(statearr_11787_11805[2] = null);
(statearr_11787_11805[1] = 2);
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
}
}
}
}
});return ((function (switch__5549__auto__){
return (function() {
var state_machine__5550__auto__ = null;
var state_machine__5550__auto____0 = (function (){var statearr_11791 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11791[0] = state_machine__5550__auto__);
(statearr_11791[1] = 1);
return statearr_11791;
});
var state_machine__5550__auto____1 = (function (state_11770){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11770);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11792){if((e11792 instanceof Object))
{var ex__5553__auto__ = e11792;var statearr_11793_11806 = state_11770;(statearr_11793_11806[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11807 = state_11770;
state_11770 = G__11807;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11794 = f__5565__auto__.call(null);(statearr_11794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11795);
return statearr_11794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11942 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11912){var state_val_11913 = (state_11912[1]);if((state_val_11913 === 1))
{var inst_11875 = (new Array(n));var inst_11876 = inst_11875;var inst_11877 = 0;var state_11912__$1 = (function (){var statearr_11914 = state_11912;(statearr_11914[7] = inst_11876);
(statearr_11914[8] = inst_11877);
return statearr_11914;
})();var statearr_11915_11943 = state_11912__$1;(statearr_11915_11943[2] = null);
(statearr_11915_11943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 2))
{var state_11912__$1 = state_11912;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11912__$1,4,ch);
} else
{if((state_val_11913 === 3))
{var inst_11910 = (state_11912[2]);var state_11912__$1 = state_11912;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11912__$1,inst_11910);
} else
{if((state_val_11913 === 4))
{var inst_11880 = (state_11912[9]);var inst_11880__$1 = (state_11912[2]);var inst_11881 = (inst_11880__$1 == null);var inst_11882 = cljs.core.not.call(null,inst_11881);var state_11912__$1 = (function (){var statearr_11916 = state_11912;(statearr_11916[9] = inst_11880__$1);
return statearr_11916;
})();if(inst_11882)
{var statearr_11917_11944 = state_11912__$1;(statearr_11917_11944[1] = 5);
} else
{var statearr_11918_11945 = state_11912__$1;(statearr_11918_11945[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 5))
{var inst_11885 = (state_11912[10]);var inst_11876 = (state_11912[7]);var inst_11877 = (state_11912[8]);var inst_11880 = (state_11912[9]);var inst_11884 = (inst_11876[inst_11877] = inst_11880);var inst_11885__$1 = (inst_11877 + 1);var inst_11886 = (inst_11885__$1 < n);var state_11912__$1 = (function (){var statearr_11919 = state_11912;(statearr_11919[10] = inst_11885__$1);
(statearr_11919[11] = inst_11884);
return statearr_11919;
})();if(cljs.core.truth_(inst_11886))
{var statearr_11920_11946 = state_11912__$1;(statearr_11920_11946[1] = 8);
} else
{var statearr_11921_11947 = state_11912__$1;(statearr_11921_11947[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 6))
{var inst_11877 = (state_11912[8]);var inst_11898 = (inst_11877 > 0);var state_11912__$1 = state_11912;if(cljs.core.truth_(inst_11898))
{var statearr_11923_11948 = state_11912__$1;(statearr_11923_11948[1] = 12);
} else
{var statearr_11924_11949 = state_11912__$1;(statearr_11924_11949[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 7))
{var inst_11908 = (state_11912[2]);var state_11912__$1 = state_11912;var statearr_11925_11950 = state_11912__$1;(statearr_11925_11950[2] = inst_11908);
(statearr_11925_11950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 8))
{var inst_11885 = (state_11912[10]);var inst_11876 = (state_11912[7]);var tmp11922 = inst_11876;var inst_11876__$1 = tmp11922;var inst_11877 = inst_11885;var state_11912__$1 = (function (){var statearr_11926 = state_11912;(statearr_11926[7] = inst_11876__$1);
(statearr_11926[8] = inst_11877);
return statearr_11926;
})();var statearr_11927_11951 = state_11912__$1;(statearr_11927_11951[2] = null);
(statearr_11927_11951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 9))
{var inst_11876 = (state_11912[7]);var inst_11890 = cljs.core.vec.call(null,inst_11876);var state_11912__$1 = state_11912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11912__$1,11,out,inst_11890);
} else
{if((state_val_11913 === 10))
{var inst_11896 = (state_11912[2]);var state_11912__$1 = state_11912;var statearr_11928_11952 = state_11912__$1;(statearr_11928_11952[2] = inst_11896);
(statearr_11928_11952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 11))
{var inst_11892 = (state_11912[2]);var inst_11893 = (new Array(n));var inst_11876 = inst_11893;var inst_11877 = 0;var state_11912__$1 = (function (){var statearr_11929 = state_11912;(statearr_11929[12] = inst_11892);
(statearr_11929[7] = inst_11876);
(statearr_11929[8] = inst_11877);
return statearr_11929;
})();var statearr_11930_11953 = state_11912__$1;(statearr_11930_11953[2] = null);
(statearr_11930_11953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 12))
{var inst_11876 = (state_11912[7]);var inst_11900 = cljs.core.vec.call(null,inst_11876);var state_11912__$1 = state_11912;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11912__$1,15,out,inst_11900);
} else
{if((state_val_11913 === 13))
{var state_11912__$1 = state_11912;var statearr_11931_11954 = state_11912__$1;(statearr_11931_11954[2] = null);
(statearr_11931_11954[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 14))
{var inst_11905 = (state_11912[2]);var inst_11906 = cljs.core.async.close_BANG_.call(null,out);var state_11912__$1 = (function (){var statearr_11932 = state_11912;(statearr_11932[13] = inst_11905);
return statearr_11932;
})();var statearr_11933_11955 = state_11912__$1;(statearr_11933_11955[2] = inst_11906);
(statearr_11933_11955[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11913 === 15))
{var inst_11902 = (state_11912[2]);var state_11912__$1 = state_11912;var statearr_11934_11956 = state_11912__$1;(statearr_11934_11956[2] = inst_11902);
(statearr_11934_11956[1] = 14);
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
}
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
var state_machine__5550__auto____0 = (function (){var statearr_11938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11938[0] = state_machine__5550__auto__);
(statearr_11938[1] = 1);
return statearr_11938;
});
var state_machine__5550__auto____1 = (function (state_11912){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11912);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11939){if((e11939 instanceof Object))
{var ex__5553__auto__ = e11939;var statearr_11940_11957 = state_11912;(statearr_11940_11957[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11912);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11958 = state_11912;
state_11912 = G__11958;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11912){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11941 = f__5565__auto__.call(null);(statearr_11941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11942);
return statearr_11941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12101 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12071){var state_val_12072 = (state_12071[1]);if((state_val_12072 === 1))
{var inst_12030 = [];var inst_12031 = inst_12030;var inst_12032 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12071__$1 = (function (){var statearr_12073 = state_12071;(statearr_12073[7] = inst_12031);
(statearr_12073[8] = inst_12032);
return statearr_12073;
})();var statearr_12074_12102 = state_12071__$1;(statearr_12074_12102[2] = null);
(statearr_12074_12102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 2))
{var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12071__$1,4,ch);
} else
{if((state_val_12072 === 3))
{var inst_12069 = (state_12071[2]);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12071__$1,inst_12069);
} else
{if((state_val_12072 === 4))
{var inst_12035 = (state_12071[9]);var inst_12035__$1 = (state_12071[2]);var inst_12036 = (inst_12035__$1 == null);var inst_12037 = cljs.core.not.call(null,inst_12036);var state_12071__$1 = (function (){var statearr_12075 = state_12071;(statearr_12075[9] = inst_12035__$1);
return statearr_12075;
})();if(inst_12037)
{var statearr_12076_12103 = state_12071__$1;(statearr_12076_12103[1] = 5);
} else
{var statearr_12077_12104 = state_12071__$1;(statearr_12077_12104[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 5))
{var inst_12035 = (state_12071[9]);var inst_12032 = (state_12071[8]);var inst_12039 = (state_12071[10]);var inst_12039__$1 = f.call(null,inst_12035);var inst_12040 = cljs.core._EQ_.call(null,inst_12039__$1,inst_12032);var inst_12041 = cljs.core.keyword_identical_QMARK_.call(null,inst_12032,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12042 = (inst_12040) || (inst_12041);var state_12071__$1 = (function (){var statearr_12078 = state_12071;(statearr_12078[10] = inst_12039__$1);
return statearr_12078;
})();if(cljs.core.truth_(inst_12042))
{var statearr_12079_12105 = state_12071__$1;(statearr_12079_12105[1] = 8);
} else
{var statearr_12080_12106 = state_12071__$1;(statearr_12080_12106[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 6))
{var inst_12031 = (state_12071[7]);var inst_12056 = inst_12031.length;var inst_12057 = (inst_12056 > 0);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12057))
{var statearr_12082_12107 = state_12071__$1;(statearr_12082_12107[1] = 12);
} else
{var statearr_12083_12108 = state_12071__$1;(statearr_12083_12108[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 7))
{var inst_12067 = (state_12071[2]);var state_12071__$1 = state_12071;var statearr_12084_12109 = state_12071__$1;(statearr_12084_12109[2] = inst_12067);
(statearr_12084_12109[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 8))
{var inst_12035 = (state_12071[9]);var inst_12031 = (state_12071[7]);var inst_12039 = (state_12071[10]);var inst_12044 = inst_12031.push(inst_12035);var tmp12081 = inst_12031;var inst_12031__$1 = tmp12081;var inst_12032 = inst_12039;var state_12071__$1 = (function (){var statearr_12085 = state_12071;(statearr_12085[7] = inst_12031__$1);
(statearr_12085[8] = inst_12032);
(statearr_12085[11] = inst_12044);
return statearr_12085;
})();var statearr_12086_12110 = state_12071__$1;(statearr_12086_12110[2] = null);
(statearr_12086_12110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 9))
{var inst_12031 = (state_12071[7]);var inst_12047 = cljs.core.vec.call(null,inst_12031);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12071__$1,11,out,inst_12047);
} else
{if((state_val_12072 === 10))
{var inst_12054 = (state_12071[2]);var state_12071__$1 = state_12071;var statearr_12087_12111 = state_12071__$1;(statearr_12087_12111[2] = inst_12054);
(statearr_12087_12111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 11))
{var inst_12035 = (state_12071[9]);var inst_12039 = (state_12071[10]);var inst_12049 = (state_12071[2]);var inst_12050 = [];var inst_12051 = inst_12050.push(inst_12035);var inst_12031 = inst_12050;var inst_12032 = inst_12039;var state_12071__$1 = (function (){var statearr_12088 = state_12071;(statearr_12088[7] = inst_12031);
(statearr_12088[8] = inst_12032);
(statearr_12088[12] = inst_12049);
(statearr_12088[13] = inst_12051);
return statearr_12088;
})();var statearr_12089_12112 = state_12071__$1;(statearr_12089_12112[2] = null);
(statearr_12089_12112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 12))
{var inst_12031 = (state_12071[7]);var inst_12059 = cljs.core.vec.call(null,inst_12031);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12071__$1,15,out,inst_12059);
} else
{if((state_val_12072 === 13))
{var state_12071__$1 = state_12071;var statearr_12090_12113 = state_12071__$1;(statearr_12090_12113[2] = null);
(statearr_12090_12113[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 14))
{var inst_12064 = (state_12071[2]);var inst_12065 = cljs.core.async.close_BANG_.call(null,out);var state_12071__$1 = (function (){var statearr_12091 = state_12071;(statearr_12091[14] = inst_12064);
return statearr_12091;
})();var statearr_12092_12114 = state_12071__$1;(statearr_12092_12114[2] = inst_12065);
(statearr_12092_12114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 15))
{var inst_12061 = (state_12071[2]);var state_12071__$1 = state_12071;var statearr_12093_12115 = state_12071__$1;(statearr_12093_12115[2] = inst_12061);
(statearr_12093_12115[1] = 14);
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
}
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
var state_machine__5550__auto____0 = (function (){var statearr_12097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12097[0] = state_machine__5550__auto__);
(statearr_12097[1] = 1);
return statearr_12097;
});
var state_machine__5550__auto____1 = (function (state_12071){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12098){if((e12098 instanceof Object))
{var ex__5553__auto__ = e12098;var statearr_12099_12116 = state_12071;(statearr_12099_12116[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12117 = state_12071;
state_12071 = G__12117;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12100 = f__5565__auto__.call(null);(statearr_12100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12101);
return statearr_12100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5566__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
