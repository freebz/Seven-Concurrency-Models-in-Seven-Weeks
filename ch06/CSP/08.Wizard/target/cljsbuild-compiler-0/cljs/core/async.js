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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9483 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9483 = (function (f,fn_handler,meta9484){
this.f = f;
this.fn_handler = fn_handler;
this.meta9484 = meta9484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9483.cljs$lang$type = true;
cljs.core.async.t9483.cljs$lang$ctorStr = "cljs.core.async/t9483";
cljs.core.async.t9483.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9483");
});
cljs.core.async.t9483.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9485){var self__ = this;
var _9485__$1 = this;return self__.meta9484;
});
cljs.core.async.t9483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9485,meta9484__$1){var self__ = this;
var _9485__$1 = this;return (new cljs.core.async.t9483(self__.f,self__.fn_handler,meta9484__$1));
});
cljs.core.async.__GT_t9483 = (function __GT_t9483(f__$1,fn_handler__$1,meta9484){return (new cljs.core.async.t9483(f__$1,fn_handler__$1,meta9484));
});
}
return (new cljs.core.async.t9483(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9487 = buff;if(G__9487)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9487.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9487.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9487);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9487);
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
{var val_9488 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9488);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9488);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9489 = n;var x_9490 = 0;while(true){
if((x_9490 < n__4291__auto___9489))
{(a[x_9490] = 0);
{
var G__9491 = (x_9490 + 1);
x_9490 = G__9491;
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
var G__9492 = (i + 1);
i = G__9492;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9496 = (function (flag,alt_flag,meta9497){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9497 = meta9497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9496.cljs$lang$type = true;
cljs.core.async.t9496.cljs$lang$ctorStr = "cljs.core.async/t9496";
cljs.core.async.t9496.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9496");
});
cljs.core.async.t9496.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9498){var self__ = this;
var _9498__$1 = this;return self__.meta9497;
});
cljs.core.async.t9496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9498,meta9497__$1){var self__ = this;
var _9498__$1 = this;return (new cljs.core.async.t9496(self__.flag,self__.alt_flag,meta9497__$1));
});
cljs.core.async.__GT_t9496 = (function __GT_t9496(flag__$1,alt_flag__$1,meta9497){return (new cljs.core.async.t9496(flag__$1,alt_flag__$1,meta9497));
});
}
return (new cljs.core.async.t9496(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9502 = (function (cb,flag,alt_handler,meta9503){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9503 = meta9503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9502.cljs$lang$type = true;
cljs.core.async.t9502.cljs$lang$ctorStr = "cljs.core.async/t9502";
cljs.core.async.t9502.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9502");
});
cljs.core.async.t9502.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9504){var self__ = this;
var _9504__$1 = this;return self__.meta9503;
});
cljs.core.async.t9502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9504,meta9503__$1){var self__ = this;
var _9504__$1 = this;return (new cljs.core.async.t9502(self__.cb,self__.flag,self__.alt_handler,meta9503__$1));
});
cljs.core.async.__GT_t9502 = (function __GT_t9502(cb__$1,flag__$1,alt_handler__$1,meta9503){return (new cljs.core.async.t9502(cb__$1,flag__$1,alt_handler__$1,meta9503));
});
}
return (new cljs.core.async.t9502(cb,flag,alt_handler,null));
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
return (function (p1__9505_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9505_SHARP_,port], null));
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
var G__9506 = (i + 1);
i = G__9506;
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
var alts_BANG___delegate = function (ports,p__9507){var map__9509 = p__9507;var map__9509__$1 = ((cljs.core.seq_QMARK_.call(null,map__9509))?cljs.core.apply.call(null,cljs.core.hash_map,map__9509):map__9509);var opts = map__9509__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9507 = null;if (arguments.length > 1) {
  p__9507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9507);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9510){
var ports = cljs.core.first(arglist__9510);
var p__9507 = cljs.core.rest(arglist__9510);
return alts_BANG___delegate(ports,p__9507);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9518 = (function (ch,f,map_LT_,meta9519){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9519 = meta9519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9518.cljs$lang$type = true;
cljs.core.async.t9518.cljs$lang$ctorStr = "cljs.core.async/t9518";
cljs.core.async.t9518.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9518");
});
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9521 = (function (fn1,_,meta9519,ch,f,map_LT_,meta9522){
this.fn1 = fn1;
this._ = _;
this.meta9519 = meta9519;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9522 = meta9522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9521.cljs$lang$type = true;
cljs.core.async.t9521.cljs$lang$ctorStr = "cljs.core.async/t9521";
cljs.core.async.t9521.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9521");
});
cljs.core.async.t9521.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9521.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9511_SHARP_){return f1.call(null,(((p1__9511_SHARP_ == null))?null:self__.f.call(null,p1__9511_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9523){var self__ = this;
var _9523__$1 = this;return self__.meta9522;
});
cljs.core.async.t9521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9523,meta9522__$1){var self__ = this;
var _9523__$1 = this;return (new cljs.core.async.t9521(self__.fn1,self__._,self__.meta9519,self__.ch,self__.f,self__.map_LT_,meta9522__$1));
});
cljs.core.async.__GT_t9521 = (function __GT_t9521(fn1__$1,___$2,meta9519__$1,ch__$2,f__$2,map_LT___$2,meta9522){return (new cljs.core.async.t9521(fn1__$1,___$2,meta9519__$1,ch__$2,f__$2,map_LT___$2,meta9522));
});
}
return (new cljs.core.async.t9521(fn1,___$1,self__.meta9519,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9520){var self__ = this;
var _9520__$1 = this;return self__.meta9519;
});
cljs.core.async.t9518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9520,meta9519__$1){var self__ = this;
var _9520__$1 = this;return (new cljs.core.async.t9518(self__.ch,self__.f,self__.map_LT_,meta9519__$1));
});
cljs.core.async.__GT_t9518 = (function __GT_t9518(ch__$1,f__$1,map_LT___$1,meta9519){return (new cljs.core.async.t9518(ch__$1,f__$1,map_LT___$1,meta9519));
});
}
return (new cljs.core.async.t9518(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9527 = (function (ch,f,map_GT_,meta9528){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9528 = meta9528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9527.cljs$lang$type = true;
cljs.core.async.t9527.cljs$lang$ctorStr = "cljs.core.async/t9527";
cljs.core.async.t9527.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9527");
});
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9529){var self__ = this;
var _9529__$1 = this;return self__.meta9528;
});
cljs.core.async.t9527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9529,meta9528__$1){var self__ = this;
var _9529__$1 = this;return (new cljs.core.async.t9527(self__.ch,self__.f,self__.map_GT_,meta9528__$1));
});
cljs.core.async.__GT_t9527 = (function __GT_t9527(ch__$1,f__$1,map_GT___$1,meta9528){return (new cljs.core.async.t9527(ch__$1,f__$1,map_GT___$1,meta9528));
});
}
return (new cljs.core.async.t9527(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9533 = (function (ch,p,filter_GT_,meta9534){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9534 = meta9534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9533.cljs$lang$type = true;
cljs.core.async.t9533.cljs$lang$ctorStr = "cljs.core.async/t9533";
cljs.core.async.t9533.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9533");
});
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9535){var self__ = this;
var _9535__$1 = this;return self__.meta9534;
});
cljs.core.async.t9533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9535,meta9534__$1){var self__ = this;
var _9535__$1 = this;return (new cljs.core.async.t9533(self__.ch,self__.p,self__.filter_GT_,meta9534__$1));
});
cljs.core.async.__GT_t9533 = (function __GT_t9533(ch__$1,p__$1,filter_GT___$1,meta9534){return (new cljs.core.async.t9533(ch__$1,p__$1,filter_GT___$1,meta9534));
});
}
return (new cljs.core.async.t9533(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___9618 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9597){var state_val_9598 = (state_9597[1]);if((state_val_9598 === 1))
{var state_9597__$1 = state_9597;var statearr_9599_9619 = state_9597__$1;(statearr_9599_9619[2] = null);
(statearr_9599_9619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 2))
{var state_9597__$1 = state_9597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9597__$1,4,ch);
} else
{if((state_val_9598 === 3))
{var inst_9595 = (state_9597[2]);var state_9597__$1 = state_9597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9597__$1,inst_9595);
} else
{if((state_val_9598 === 4))
{var inst_9579 = (state_9597[7]);var inst_9579__$1 = (state_9597[2]);var inst_9580 = (inst_9579__$1 == null);var state_9597__$1 = (function (){var statearr_9600 = state_9597;(statearr_9600[7] = inst_9579__$1);
return statearr_9600;
})();if(cljs.core.truth_(inst_9580))
{var statearr_9601_9620 = state_9597__$1;(statearr_9601_9620[1] = 5);
} else
{var statearr_9602_9621 = state_9597__$1;(statearr_9602_9621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 5))
{var inst_9582 = cljs.core.async.close_BANG_.call(null,out);var state_9597__$1 = state_9597;var statearr_9603_9622 = state_9597__$1;(statearr_9603_9622[2] = inst_9582);
(statearr_9603_9622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 6))
{var inst_9579 = (state_9597[7]);var inst_9584 = p.call(null,inst_9579);var state_9597__$1 = state_9597;if(cljs.core.truth_(inst_9584))
{var statearr_9604_9623 = state_9597__$1;(statearr_9604_9623[1] = 8);
} else
{var statearr_9605_9624 = state_9597__$1;(statearr_9605_9624[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 7))
{var inst_9593 = (state_9597[2]);var state_9597__$1 = state_9597;var statearr_9606_9625 = state_9597__$1;(statearr_9606_9625[2] = inst_9593);
(statearr_9606_9625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 8))
{var inst_9579 = (state_9597[7]);var state_9597__$1 = state_9597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9597__$1,11,out,inst_9579);
} else
{if((state_val_9598 === 9))
{var state_9597__$1 = state_9597;var statearr_9607_9626 = state_9597__$1;(statearr_9607_9626[2] = null);
(statearr_9607_9626[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 10))
{var inst_9590 = (state_9597[2]);var state_9597__$1 = (function (){var statearr_9608 = state_9597;(statearr_9608[8] = inst_9590);
return statearr_9608;
})();var statearr_9609_9627 = state_9597__$1;(statearr_9609_9627[2] = null);
(statearr_9609_9627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9598 === 11))
{var inst_9587 = (state_9597[2]);var state_9597__$1 = state_9597;var statearr_9610_9628 = state_9597__$1;(statearr_9610_9628[2] = inst_9587);
(statearr_9610_9628[1] = 10);
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
var state_machine__5550__auto____0 = (function (){var statearr_9614 = [null,null,null,null,null,null,null,null,null];(statearr_9614[0] = state_machine__5550__auto__);
(statearr_9614[1] = 1);
return statearr_9614;
});
var state_machine__5550__auto____1 = (function (state_9597){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9615){if((e9615 instanceof Object))
{var ex__5553__auto__ = e9615;var statearr_9616_9629 = state_9597;(statearr_9616_9629[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9630 = state_9597;
state_9597 = G__9630;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9597){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9617 = f__5565__auto__.call(null);(statearr_9617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___9618);
return statearr_9617;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9782){var state_val_9783 = (state_9782[1]);if((state_val_9783 === 1))
{var state_9782__$1 = state_9782;var statearr_9784_9821 = state_9782__$1;(statearr_9784_9821[2] = null);
(statearr_9784_9821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 2))
{var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9782__$1,4,in$);
} else
{if((state_val_9783 === 3))
{var inst_9780 = (state_9782[2]);var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9782__$1,inst_9780);
} else
{if((state_val_9783 === 4))
{var inst_9728 = (state_9782[7]);var inst_9728__$1 = (state_9782[2]);var inst_9729 = (inst_9728__$1 == null);var state_9782__$1 = (function (){var statearr_9785 = state_9782;(statearr_9785[7] = inst_9728__$1);
return statearr_9785;
})();if(cljs.core.truth_(inst_9729))
{var statearr_9786_9822 = state_9782__$1;(statearr_9786_9822[1] = 5);
} else
{var statearr_9787_9823 = state_9782__$1;(statearr_9787_9823[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 5))
{var inst_9731 = cljs.core.async.close_BANG_.call(null,out);var state_9782__$1 = state_9782;var statearr_9788_9824 = state_9782__$1;(statearr_9788_9824[2] = inst_9731);
(statearr_9788_9824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 6))
{var inst_9728 = (state_9782[7]);var inst_9733 = f.call(null,inst_9728);var inst_9738 = cljs.core.seq.call(null,inst_9733);var inst_9739 = inst_9738;var inst_9740 = null;var inst_9741 = 0;var inst_9742 = 0;var state_9782__$1 = (function (){var statearr_9789 = state_9782;(statearr_9789[8] = inst_9741);
(statearr_9789[9] = inst_9742);
(statearr_9789[10] = inst_9740);
(statearr_9789[11] = inst_9739);
return statearr_9789;
})();var statearr_9790_9825 = state_9782__$1;(statearr_9790_9825[2] = null);
(statearr_9790_9825[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 7))
{var inst_9778 = (state_9782[2]);var state_9782__$1 = state_9782;var statearr_9791_9826 = state_9782__$1;(statearr_9791_9826[2] = inst_9778);
(statearr_9791_9826[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 8))
{var inst_9741 = (state_9782[8]);var inst_9742 = (state_9782[9]);var inst_9744 = (inst_9742 < inst_9741);var inst_9745 = inst_9744;var state_9782__$1 = state_9782;if(cljs.core.truth_(inst_9745))
{var statearr_9792_9827 = state_9782__$1;(statearr_9792_9827[1] = 10);
} else
{var statearr_9793_9828 = state_9782__$1;(statearr_9793_9828[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 9))
{var inst_9775 = (state_9782[2]);var state_9782__$1 = (function (){var statearr_9794 = state_9782;(statearr_9794[12] = inst_9775);
return statearr_9794;
})();var statearr_9795_9829 = state_9782__$1;(statearr_9795_9829[2] = null);
(statearr_9795_9829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 10))
{var inst_9742 = (state_9782[9]);var inst_9740 = (state_9782[10]);var inst_9747 = cljs.core._nth.call(null,inst_9740,inst_9742);var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9782__$1,13,out,inst_9747);
} else
{if((state_val_9783 === 11))
{var inst_9753 = (state_9782[13]);var inst_9739 = (state_9782[11]);var inst_9753__$1 = cljs.core.seq.call(null,inst_9739);var state_9782__$1 = (function (){var statearr_9799 = state_9782;(statearr_9799[13] = inst_9753__$1);
return statearr_9799;
})();if(inst_9753__$1)
{var statearr_9800_9830 = state_9782__$1;(statearr_9800_9830[1] = 14);
} else
{var statearr_9801_9831 = state_9782__$1;(statearr_9801_9831[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 12))
{var inst_9773 = (state_9782[2]);var state_9782__$1 = state_9782;var statearr_9802_9832 = state_9782__$1;(statearr_9802_9832[2] = inst_9773);
(statearr_9802_9832[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 13))
{var inst_9741 = (state_9782[8]);var inst_9742 = (state_9782[9]);var inst_9740 = (state_9782[10]);var inst_9739 = (state_9782[11]);var inst_9749 = (state_9782[2]);var inst_9750 = (inst_9742 + 1);var tmp9796 = inst_9741;var tmp9797 = inst_9740;var tmp9798 = inst_9739;var inst_9739__$1 = tmp9798;var inst_9740__$1 = tmp9797;var inst_9741__$1 = tmp9796;var inst_9742__$1 = inst_9750;var state_9782__$1 = (function (){var statearr_9803 = state_9782;(statearr_9803[8] = inst_9741__$1);
(statearr_9803[9] = inst_9742__$1);
(statearr_9803[14] = inst_9749);
(statearr_9803[10] = inst_9740__$1);
(statearr_9803[11] = inst_9739__$1);
return statearr_9803;
})();var statearr_9804_9833 = state_9782__$1;(statearr_9804_9833[2] = null);
(statearr_9804_9833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 14))
{var inst_9753 = (state_9782[13]);var inst_9755 = cljs.core.chunked_seq_QMARK_.call(null,inst_9753);var state_9782__$1 = state_9782;if(inst_9755)
{var statearr_9805_9834 = state_9782__$1;(statearr_9805_9834[1] = 17);
} else
{var statearr_9806_9835 = state_9782__$1;(statearr_9806_9835[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 15))
{var state_9782__$1 = state_9782;var statearr_9807_9836 = state_9782__$1;(statearr_9807_9836[2] = null);
(statearr_9807_9836[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 16))
{var inst_9771 = (state_9782[2]);var state_9782__$1 = state_9782;var statearr_9808_9837 = state_9782__$1;(statearr_9808_9837[2] = inst_9771);
(statearr_9808_9837[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 17))
{var inst_9753 = (state_9782[13]);var inst_9757 = cljs.core.chunk_first.call(null,inst_9753);var inst_9758 = cljs.core.chunk_rest.call(null,inst_9753);var inst_9759 = cljs.core.count.call(null,inst_9757);var inst_9739 = inst_9758;var inst_9740 = inst_9757;var inst_9741 = inst_9759;var inst_9742 = 0;var state_9782__$1 = (function (){var statearr_9809 = state_9782;(statearr_9809[8] = inst_9741);
(statearr_9809[9] = inst_9742);
(statearr_9809[10] = inst_9740);
(statearr_9809[11] = inst_9739);
return statearr_9809;
})();var statearr_9810_9838 = state_9782__$1;(statearr_9810_9838[2] = null);
(statearr_9810_9838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 18))
{var inst_9753 = (state_9782[13]);var inst_9762 = cljs.core.first.call(null,inst_9753);var state_9782__$1 = state_9782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9782__$1,20,out,inst_9762);
} else
{if((state_val_9783 === 19))
{var inst_9768 = (state_9782[2]);var state_9782__$1 = state_9782;var statearr_9811_9839 = state_9782__$1;(statearr_9811_9839[2] = inst_9768);
(statearr_9811_9839[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9783 === 20))
{var inst_9753 = (state_9782[13]);var inst_9764 = (state_9782[2]);var inst_9765 = cljs.core.next.call(null,inst_9753);var inst_9739 = inst_9765;var inst_9740 = null;var inst_9741 = 0;var inst_9742 = 0;var state_9782__$1 = (function (){var statearr_9812 = state_9782;(statearr_9812[8] = inst_9741);
(statearr_9812[9] = inst_9742);
(statearr_9812[10] = inst_9740);
(statearr_9812[11] = inst_9739);
(statearr_9812[15] = inst_9764);
return statearr_9812;
})();var statearr_9813_9840 = state_9782__$1;(statearr_9813_9840[2] = null);
(statearr_9813_9840[1] = 8);
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
var state_machine__5550__auto____0 = (function (){var statearr_9817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9817[0] = state_machine__5550__auto__);
(statearr_9817[1] = 1);
return statearr_9817;
});
var state_machine__5550__auto____1 = (function (state_9782){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9818){if((e9818 instanceof Object))
{var ex__5553__auto__ = e9818;var statearr_9819_9841 = state_9782;(statearr_9819_9841[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9842 = state_9782;
state_9782 = G__9842;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9782){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9820 = f__5565__auto__.call(null);(statearr_9820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_9820;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5564__auto___9923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9902){var state_val_9903 = (state_9902[1]);if((state_val_9903 === 1))
{var state_9902__$1 = state_9902;var statearr_9904_9924 = state_9902__$1;(statearr_9904_9924[2] = null);
(statearr_9904_9924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 2))
{var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9902__$1,4,from);
} else
{if((state_val_9903 === 3))
{var inst_9900 = (state_9902[2]);var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9902__$1,inst_9900);
} else
{if((state_val_9903 === 4))
{var inst_9885 = (state_9902[7]);var inst_9885__$1 = (state_9902[2]);var inst_9886 = (inst_9885__$1 == null);var state_9902__$1 = (function (){var statearr_9905 = state_9902;(statearr_9905[7] = inst_9885__$1);
return statearr_9905;
})();if(cljs.core.truth_(inst_9886))
{var statearr_9906_9925 = state_9902__$1;(statearr_9906_9925[1] = 5);
} else
{var statearr_9907_9926 = state_9902__$1;(statearr_9907_9926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 5))
{var state_9902__$1 = state_9902;if(cljs.core.truth_(close_QMARK_))
{var statearr_9908_9927 = state_9902__$1;(statearr_9908_9927[1] = 8);
} else
{var statearr_9909_9928 = state_9902__$1;(statearr_9909_9928[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 6))
{var inst_9885 = (state_9902[7]);var state_9902__$1 = state_9902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9902__$1,11,to,inst_9885);
} else
{if((state_val_9903 === 7))
{var inst_9898 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9910_9929 = state_9902__$1;(statearr_9910_9929[2] = inst_9898);
(statearr_9910_9929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 8))
{var inst_9889 = cljs.core.async.close_BANG_.call(null,to);var state_9902__$1 = state_9902;var statearr_9911_9930 = state_9902__$1;(statearr_9911_9930[2] = inst_9889);
(statearr_9911_9930[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 9))
{var state_9902__$1 = state_9902;var statearr_9912_9931 = state_9902__$1;(statearr_9912_9931[2] = null);
(statearr_9912_9931[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 10))
{var inst_9892 = (state_9902[2]);var state_9902__$1 = state_9902;var statearr_9913_9932 = state_9902__$1;(statearr_9913_9932[2] = inst_9892);
(statearr_9913_9932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9903 === 11))
{var inst_9895 = (state_9902[2]);var state_9902__$1 = (function (){var statearr_9914 = state_9902;(statearr_9914[8] = inst_9895);
return statearr_9914;
})();var statearr_9915_9933 = state_9902__$1;(statearr_9915_9933[2] = null);
(statearr_9915_9933[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_9919 = [null,null,null,null,null,null,null,null,null];(statearr_9919[0] = state_machine__5550__auto__);
(statearr_9919[1] = 1);
return statearr_9919;
});
var state_machine__5550__auto____1 = (function (state_9902){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9920){if((e9920 instanceof Object))
{var ex__5553__auto__ = e9920;var statearr_9921_9934 = state_9902;(statearr_9921_9934[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9935 = state_9902;
state_9902 = G__9935;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9902){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9922 = f__5565__auto__.call(null);(statearr_9922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___9923);
return statearr_9922;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5564__auto___10022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10000){var state_val_10001 = (state_10000[1]);if((state_val_10001 === 1))
{var state_10000__$1 = state_10000;var statearr_10002_10023 = state_10000__$1;(statearr_10002_10023[2] = null);
(statearr_10002_10023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 2))
{var state_10000__$1 = state_10000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10000__$1,4,ch);
} else
{if((state_val_10001 === 3))
{var inst_9998 = (state_10000[2]);var state_10000__$1 = state_10000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10000__$1,inst_9998);
} else
{if((state_val_10001 === 4))
{var inst_9981 = (state_10000[7]);var inst_9981__$1 = (state_10000[2]);var inst_9982 = (inst_9981__$1 == null);var state_10000__$1 = (function (){var statearr_10003 = state_10000;(statearr_10003[7] = inst_9981__$1);
return statearr_10003;
})();if(cljs.core.truth_(inst_9982))
{var statearr_10004_10024 = state_10000__$1;(statearr_10004_10024[1] = 5);
} else
{var statearr_10005_10025 = state_10000__$1;(statearr_10005_10025[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 5))
{var inst_9984 = cljs.core.async.close_BANG_.call(null,tc);var inst_9985 = cljs.core.async.close_BANG_.call(null,fc);var state_10000__$1 = (function (){var statearr_10006 = state_10000;(statearr_10006[8] = inst_9984);
return statearr_10006;
})();var statearr_10007_10026 = state_10000__$1;(statearr_10007_10026[2] = inst_9985);
(statearr_10007_10026[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 6))
{var inst_9981 = (state_10000[7]);var inst_9987 = p.call(null,inst_9981);var state_10000__$1 = state_10000;if(cljs.core.truth_(inst_9987))
{var statearr_10008_10027 = state_10000__$1;(statearr_10008_10027[1] = 9);
} else
{var statearr_10009_10028 = state_10000__$1;(statearr_10009_10028[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 7))
{var inst_9996 = (state_10000[2]);var state_10000__$1 = state_10000;var statearr_10010_10029 = state_10000__$1;(statearr_10010_10029[2] = inst_9996);
(statearr_10010_10029[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 8))
{var inst_9993 = (state_10000[2]);var state_10000__$1 = (function (){var statearr_10011 = state_10000;(statearr_10011[9] = inst_9993);
return statearr_10011;
})();var statearr_10012_10030 = state_10000__$1;(statearr_10012_10030[2] = null);
(statearr_10012_10030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 9))
{var state_10000__$1 = state_10000;var statearr_10013_10031 = state_10000__$1;(statearr_10013_10031[2] = tc);
(statearr_10013_10031[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 10))
{var state_10000__$1 = state_10000;var statearr_10014_10032 = state_10000__$1;(statearr_10014_10032[2] = fc);
(statearr_10014_10032[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10001 === 11))
{var inst_9981 = (state_10000[7]);var inst_9991 = (state_10000[2]);var state_10000__$1 = state_10000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10000__$1,8,inst_9991,inst_9981);
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
var state_machine__5550__auto____0 = (function (){var statearr_10018 = [null,null,null,null,null,null,null,null,null,null];(statearr_10018[0] = state_machine__5550__auto__);
(statearr_10018[1] = 1);
return statearr_10018;
});
var state_machine__5550__auto____1 = (function (state_10000){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10000);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10019){if((e10019 instanceof Object))
{var ex__5553__auto__ = e10019;var statearr_10020_10033 = state_10000;(statearr_10020_10033[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10000);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10034 = state_10000;
state_10000 = G__10034;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10000){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10021 = f__5565__auto__.call(null);(statearr_10021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10022);
return statearr_10021;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10081){var state_val_10082 = (state_10081[1]);if((state_val_10082 === 7))
{var inst_10077 = (state_10081[2]);var state_10081__$1 = state_10081;var statearr_10083_10099 = state_10081__$1;(statearr_10083_10099[2] = inst_10077);
(statearr_10083_10099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 6))
{var inst_10070 = (state_10081[7]);var inst_10067 = (state_10081[8]);var inst_10074 = f.call(null,inst_10067,inst_10070);var inst_10067__$1 = inst_10074;var state_10081__$1 = (function (){var statearr_10084 = state_10081;(statearr_10084[8] = inst_10067__$1);
return statearr_10084;
})();var statearr_10085_10100 = state_10081__$1;(statearr_10085_10100[2] = null);
(statearr_10085_10100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 5))
{var inst_10067 = (state_10081[8]);var state_10081__$1 = state_10081;var statearr_10086_10101 = state_10081__$1;(statearr_10086_10101[2] = inst_10067);
(statearr_10086_10101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 4))
{var inst_10070 = (state_10081[7]);var inst_10070__$1 = (state_10081[2]);var inst_10071 = (inst_10070__$1 == null);var state_10081__$1 = (function (){var statearr_10087 = state_10081;(statearr_10087[7] = inst_10070__$1);
return statearr_10087;
})();if(cljs.core.truth_(inst_10071))
{var statearr_10088_10102 = state_10081__$1;(statearr_10088_10102[1] = 5);
} else
{var statearr_10089_10103 = state_10081__$1;(statearr_10089_10103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 3))
{var inst_10079 = (state_10081[2]);var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10081__$1,inst_10079);
} else
{if((state_val_10082 === 2))
{var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10081__$1,4,ch);
} else
{if((state_val_10082 === 1))
{var inst_10067 = init;var state_10081__$1 = (function (){var statearr_10090 = state_10081;(statearr_10090[8] = inst_10067);
return statearr_10090;
})();var statearr_10091_10104 = state_10081__$1;(statearr_10091_10104[2] = null);
(statearr_10091_10104[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_10095 = [null,null,null,null,null,null,null,null,null];(statearr_10095[0] = state_machine__5550__auto__);
(statearr_10095[1] = 1);
return statearr_10095;
});
var state_machine__5550__auto____1 = (function (state_10081){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10096){if((e10096 instanceof Object))
{var ex__5553__auto__ = e10096;var statearr_10097_10105 = state_10081;(statearr_10097_10105[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10106 = state_10081;
state_10081 = G__10106;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10081){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10098 = f__5565__auto__.call(null);(statearr_10098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10098;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10168){var state_val_10169 = (state_10168[1]);if((state_val_10169 === 1))
{var inst_10148 = cljs.core.seq.call(null,coll);var inst_10149 = inst_10148;var state_10168__$1 = (function (){var statearr_10170 = state_10168;(statearr_10170[7] = inst_10149);
return statearr_10170;
})();var statearr_10171_10189 = state_10168__$1;(statearr_10171_10189[2] = null);
(statearr_10171_10189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 2))
{var inst_10149 = (state_10168[7]);var state_10168__$1 = state_10168;if(cljs.core.truth_(inst_10149))
{var statearr_10172_10190 = state_10168__$1;(statearr_10172_10190[1] = 4);
} else
{var statearr_10173_10191 = state_10168__$1;(statearr_10173_10191[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 3))
{var inst_10166 = (state_10168[2]);var state_10168__$1 = state_10168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10168__$1,inst_10166);
} else
{if((state_val_10169 === 4))
{var inst_10149 = (state_10168[7]);var inst_10152 = cljs.core.first.call(null,inst_10149);var state_10168__$1 = state_10168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10168__$1,7,ch,inst_10152);
} else
{if((state_val_10169 === 5))
{var state_10168__$1 = state_10168;if(cljs.core.truth_(close_QMARK_))
{var statearr_10174_10192 = state_10168__$1;(statearr_10174_10192[1] = 8);
} else
{var statearr_10175_10193 = state_10168__$1;(statearr_10175_10193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 6))
{var inst_10164 = (state_10168[2]);var state_10168__$1 = state_10168;var statearr_10176_10194 = state_10168__$1;(statearr_10176_10194[2] = inst_10164);
(statearr_10176_10194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 7))
{var inst_10149 = (state_10168[7]);var inst_10154 = (state_10168[2]);var inst_10155 = cljs.core.next.call(null,inst_10149);var inst_10149__$1 = inst_10155;var state_10168__$1 = (function (){var statearr_10177 = state_10168;(statearr_10177[7] = inst_10149__$1);
(statearr_10177[8] = inst_10154);
return statearr_10177;
})();var statearr_10178_10195 = state_10168__$1;(statearr_10178_10195[2] = null);
(statearr_10178_10195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 8))
{var inst_10159 = cljs.core.async.close_BANG_.call(null,ch);var state_10168__$1 = state_10168;var statearr_10179_10196 = state_10168__$1;(statearr_10179_10196[2] = inst_10159);
(statearr_10179_10196[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 9))
{var state_10168__$1 = state_10168;var statearr_10180_10197 = state_10168__$1;(statearr_10180_10197[2] = null);
(statearr_10180_10197[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10169 === 10))
{var inst_10162 = (state_10168[2]);var state_10168__$1 = state_10168;var statearr_10181_10198 = state_10168__$1;(statearr_10181_10198[2] = inst_10162);
(statearr_10181_10198[1] = 6);
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
var state_machine__5550__auto____0 = (function (){var statearr_10185 = [null,null,null,null,null,null,null,null,null];(statearr_10185[0] = state_machine__5550__auto__);
(statearr_10185[1] = 1);
return statearr_10185;
});
var state_machine__5550__auto____1 = (function (state_10168){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10186){if((e10186 instanceof Object))
{var ex__5553__auto__ = e10186;var statearr_10187_10199 = state_10168;(statearr_10187_10199[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10200 = state_10168;
state_10168 = G__10200;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10168){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10188 = f__5565__auto__.call(null);(statearr_10188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10188;
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
cljs.core.async.Mux = (function (){var obj10202 = {};return obj10202;
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
cljs.core.async.Mult = (function (){var obj10204 = {};return obj10204;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10428 = (function (cs,ch,mult,meta10429){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10429 = meta10429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10428.cljs$lang$type = true;
cljs.core.async.t10428.cljs$lang$ctorStr = "cljs.core.async/t10428";
cljs.core.async.t10428.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10428");
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10430){var self__ = this;
var _10430__$1 = this;return self__.meta10429;
});})(cs))
;
cljs.core.async.t10428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10430,meta10429__$1){var self__ = this;
var _10430__$1 = this;return (new cljs.core.async.t10428(self__.cs,self__.ch,self__.mult,meta10429__$1));
});})(cs))
;
cljs.core.async.__GT_t10428 = ((function (cs){
return (function __GT_t10428(cs__$1,ch__$1,mult__$1,meta10429){return (new cljs.core.async.t10428(cs__$1,ch__$1,mult__$1,meta10429));
});})(cs))
;
}
return (new cljs.core.async.t10428(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5564__auto___10651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10565){var state_val_10566 = (state_10565[1]);if((state_val_10566 === 32))
{var inst_10509 = (state_10565[7]);var inst_10433 = (state_10565[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10565,31,Object,null,30);var inst_10516 = cljs.core.async.put_BANG_.call(null,inst_10509,inst_10433,done);var state_10565__$1 = state_10565;var statearr_10567_10652 = state_10565__$1;(statearr_10567_10652[2] = inst_10516);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 1))
{var state_10565__$1 = state_10565;var statearr_10568_10653 = state_10565__$1;(statearr_10568_10653[2] = null);
(statearr_10568_10653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 33))
{var inst_10522 = (state_10565[9]);var inst_10524 = cljs.core.chunked_seq_QMARK_.call(null,inst_10522);var state_10565__$1 = state_10565;if(inst_10524)
{var statearr_10569_10654 = state_10565__$1;(statearr_10569_10654[1] = 36);
} else
{var statearr_10570_10655 = state_10565__$1;(statearr_10570_10655[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 2))
{var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10565__$1,4,ch);
} else
{if((state_val_10566 === 34))
{var state_10565__$1 = state_10565;var statearr_10571_10656 = state_10565__$1;(statearr_10571_10656[2] = null);
(statearr_10571_10656[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 3))
{var inst_10563 = (state_10565[2]);var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10565__$1,inst_10563);
} else
{if((state_val_10566 === 35))
{var inst_10547 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10572_10657 = state_10565__$1;(statearr_10572_10657[2] = inst_10547);
(statearr_10572_10657[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 4))
{var inst_10433 = (state_10565[8]);var inst_10433__$1 = (state_10565[2]);var inst_10434 = (inst_10433__$1 == null);var state_10565__$1 = (function (){var statearr_10573 = state_10565;(statearr_10573[8] = inst_10433__$1);
return statearr_10573;
})();if(cljs.core.truth_(inst_10434))
{var statearr_10574_10658 = state_10565__$1;(statearr_10574_10658[1] = 5);
} else
{var statearr_10575_10659 = state_10565__$1;(statearr_10575_10659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 36))
{var inst_10522 = (state_10565[9]);var inst_10526 = cljs.core.chunk_first.call(null,inst_10522);var inst_10527 = cljs.core.chunk_rest.call(null,inst_10522);var inst_10528 = cljs.core.count.call(null,inst_10526);var inst_10501 = inst_10527;var inst_10502 = inst_10526;var inst_10503 = inst_10528;var inst_10504 = 0;var state_10565__$1 = (function (){var statearr_10576 = state_10565;(statearr_10576[10] = inst_10504);
(statearr_10576[11] = inst_10503);
(statearr_10576[12] = inst_10501);
(statearr_10576[13] = inst_10502);
return statearr_10576;
})();var statearr_10577_10660 = state_10565__$1;(statearr_10577_10660[2] = null);
(statearr_10577_10660[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 5))
{var inst_10440 = cljs.core.deref.call(null,cs);var inst_10441 = cljs.core.seq.call(null,inst_10440);var inst_10442 = inst_10441;var inst_10443 = null;var inst_10444 = 0;var inst_10445 = 0;var state_10565__$1 = (function (){var statearr_10578 = state_10565;(statearr_10578[14] = inst_10444);
(statearr_10578[15] = inst_10445);
(statearr_10578[16] = inst_10443);
(statearr_10578[17] = inst_10442);
return statearr_10578;
})();var statearr_10579_10661 = state_10565__$1;(statearr_10579_10661[2] = null);
(statearr_10579_10661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 37))
{var inst_10522 = (state_10565[9]);var inst_10531 = cljs.core.first.call(null,inst_10522);var state_10565__$1 = (function (){var statearr_10580 = state_10565;(statearr_10580[18] = inst_10531);
return statearr_10580;
})();var statearr_10581_10662 = state_10565__$1;(statearr_10581_10662[2] = null);
(statearr_10581_10662[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 6))
{var inst_10493 = (state_10565[19]);var inst_10492 = cljs.core.deref.call(null,cs);var inst_10493__$1 = cljs.core.keys.call(null,inst_10492);var inst_10494 = cljs.core.count.call(null,inst_10493__$1);var inst_10495 = cljs.core.reset_BANG_.call(null,dctr,inst_10494);var inst_10500 = cljs.core.seq.call(null,inst_10493__$1);var inst_10501 = inst_10500;var inst_10502 = null;var inst_10503 = 0;var inst_10504 = 0;var state_10565__$1 = (function (){var statearr_10582 = state_10565;(statearr_10582[20] = inst_10495);
(statearr_10582[19] = inst_10493__$1);
(statearr_10582[10] = inst_10504);
(statearr_10582[11] = inst_10503);
(statearr_10582[12] = inst_10501);
(statearr_10582[13] = inst_10502);
return statearr_10582;
})();var statearr_10583_10663 = state_10565__$1;(statearr_10583_10663[2] = null);
(statearr_10583_10663[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 38))
{var inst_10544 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10584_10664 = state_10565__$1;(statearr_10584_10664[2] = inst_10544);
(statearr_10584_10664[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 7))
{var inst_10561 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10585_10665 = state_10565__$1;(statearr_10585_10665[2] = inst_10561);
(statearr_10585_10665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 39))
{var inst_10522 = (state_10565[9]);var inst_10540 = (state_10565[2]);var inst_10541 = cljs.core.next.call(null,inst_10522);var inst_10501 = inst_10541;var inst_10502 = null;var inst_10503 = 0;var inst_10504 = 0;var state_10565__$1 = (function (){var statearr_10586 = state_10565;(statearr_10586[10] = inst_10504);
(statearr_10586[11] = inst_10503);
(statearr_10586[12] = inst_10501);
(statearr_10586[13] = inst_10502);
(statearr_10586[21] = inst_10540);
return statearr_10586;
})();var statearr_10587_10666 = state_10565__$1;(statearr_10587_10666[2] = null);
(statearr_10587_10666[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 8))
{var inst_10444 = (state_10565[14]);var inst_10445 = (state_10565[15]);var inst_10447 = (inst_10445 < inst_10444);var inst_10448 = inst_10447;var state_10565__$1 = state_10565;if(cljs.core.truth_(inst_10448))
{var statearr_10588_10667 = state_10565__$1;(statearr_10588_10667[1] = 10);
} else
{var statearr_10589_10668 = state_10565__$1;(statearr_10589_10668[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 40))
{var inst_10531 = (state_10565[18]);var inst_10532 = (state_10565[2]);var inst_10533 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10534 = cljs.core.async.untap_STAR_.call(null,m,inst_10531);var state_10565__$1 = (function (){var statearr_10590 = state_10565;(statearr_10590[22] = inst_10532);
(statearr_10590[23] = inst_10533);
return statearr_10590;
})();var statearr_10591_10669 = state_10565__$1;(statearr_10591_10669[2] = inst_10534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 9))
{var inst_10490 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10592_10670 = state_10565__$1;(statearr_10592_10670[2] = inst_10490);
(statearr_10592_10670[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 41))
{var inst_10531 = (state_10565[18]);var inst_10433 = (state_10565[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10565,40,Object,null,39);var inst_10538 = cljs.core.async.put_BANG_.call(null,inst_10531,inst_10433,done);var state_10565__$1 = state_10565;var statearr_10593_10671 = state_10565__$1;(statearr_10593_10671[2] = inst_10538);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 10))
{var inst_10445 = (state_10565[15]);var inst_10443 = (state_10565[16]);var inst_10451 = cljs.core._nth.call(null,inst_10443,inst_10445);var inst_10452 = cljs.core.nth.call(null,inst_10451,0,null);var inst_10453 = cljs.core.nth.call(null,inst_10451,1,null);var state_10565__$1 = (function (){var statearr_10594 = state_10565;(statearr_10594[24] = inst_10452);
return statearr_10594;
})();if(cljs.core.truth_(inst_10453))
{var statearr_10595_10672 = state_10565__$1;(statearr_10595_10672[1] = 13);
} else
{var statearr_10596_10673 = state_10565__$1;(statearr_10596_10673[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 42))
{var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10565__$1,45,dchan);
} else
{if((state_val_10566 === 11))
{var inst_10442 = (state_10565[17]);var inst_10462 = (state_10565[25]);var inst_10462__$1 = cljs.core.seq.call(null,inst_10442);var state_10565__$1 = (function (){var statearr_10597 = state_10565;(statearr_10597[25] = inst_10462__$1);
return statearr_10597;
})();if(inst_10462__$1)
{var statearr_10598_10674 = state_10565__$1;(statearr_10598_10674[1] = 16);
} else
{var statearr_10599_10675 = state_10565__$1;(statearr_10599_10675[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 43))
{var state_10565__$1 = state_10565;var statearr_10600_10676 = state_10565__$1;(statearr_10600_10676[2] = null);
(statearr_10600_10676[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 12))
{var inst_10488 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10601_10677 = state_10565__$1;(statearr_10601_10677[2] = inst_10488);
(statearr_10601_10677[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 44))
{var inst_10558 = (state_10565[2]);var state_10565__$1 = (function (){var statearr_10602 = state_10565;(statearr_10602[26] = inst_10558);
return statearr_10602;
})();var statearr_10603_10678 = state_10565__$1;(statearr_10603_10678[2] = null);
(statearr_10603_10678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 13))
{var inst_10452 = (state_10565[24]);var inst_10455 = cljs.core.async.close_BANG_.call(null,inst_10452);var state_10565__$1 = state_10565;var statearr_10604_10679 = state_10565__$1;(statearr_10604_10679[2] = inst_10455);
(statearr_10604_10679[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 45))
{var inst_10555 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10608_10680 = state_10565__$1;(statearr_10608_10680[2] = inst_10555);
(statearr_10608_10680[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 14))
{var state_10565__$1 = state_10565;var statearr_10609_10681 = state_10565__$1;(statearr_10609_10681[2] = null);
(statearr_10609_10681[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 15))
{var inst_10444 = (state_10565[14]);var inst_10445 = (state_10565[15]);var inst_10443 = (state_10565[16]);var inst_10442 = (state_10565[17]);var inst_10458 = (state_10565[2]);var inst_10459 = (inst_10445 + 1);var tmp10605 = inst_10444;var tmp10606 = inst_10443;var tmp10607 = inst_10442;var inst_10442__$1 = tmp10607;var inst_10443__$1 = tmp10606;var inst_10444__$1 = tmp10605;var inst_10445__$1 = inst_10459;var state_10565__$1 = (function (){var statearr_10610 = state_10565;(statearr_10610[14] = inst_10444__$1);
(statearr_10610[15] = inst_10445__$1);
(statearr_10610[16] = inst_10443__$1);
(statearr_10610[17] = inst_10442__$1);
(statearr_10610[27] = inst_10458);
return statearr_10610;
})();var statearr_10611_10682 = state_10565__$1;(statearr_10611_10682[2] = null);
(statearr_10611_10682[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 16))
{var inst_10462 = (state_10565[25]);var inst_10464 = cljs.core.chunked_seq_QMARK_.call(null,inst_10462);var state_10565__$1 = state_10565;if(inst_10464)
{var statearr_10612_10683 = state_10565__$1;(statearr_10612_10683[1] = 19);
} else
{var statearr_10613_10684 = state_10565__$1;(statearr_10613_10684[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 17))
{var state_10565__$1 = state_10565;var statearr_10614_10685 = state_10565__$1;(statearr_10614_10685[2] = null);
(statearr_10614_10685[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 18))
{var inst_10486 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10615_10686 = state_10565__$1;(statearr_10615_10686[2] = inst_10486);
(statearr_10615_10686[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 19))
{var inst_10462 = (state_10565[25]);var inst_10466 = cljs.core.chunk_first.call(null,inst_10462);var inst_10467 = cljs.core.chunk_rest.call(null,inst_10462);var inst_10468 = cljs.core.count.call(null,inst_10466);var inst_10442 = inst_10467;var inst_10443 = inst_10466;var inst_10444 = inst_10468;var inst_10445 = 0;var state_10565__$1 = (function (){var statearr_10616 = state_10565;(statearr_10616[14] = inst_10444);
(statearr_10616[15] = inst_10445);
(statearr_10616[16] = inst_10443);
(statearr_10616[17] = inst_10442);
return statearr_10616;
})();var statearr_10617_10687 = state_10565__$1;(statearr_10617_10687[2] = null);
(statearr_10617_10687[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 20))
{var inst_10462 = (state_10565[25]);var inst_10472 = cljs.core.first.call(null,inst_10462);var inst_10473 = cljs.core.nth.call(null,inst_10472,0,null);var inst_10474 = cljs.core.nth.call(null,inst_10472,1,null);var state_10565__$1 = (function (){var statearr_10618 = state_10565;(statearr_10618[28] = inst_10473);
return statearr_10618;
})();if(cljs.core.truth_(inst_10474))
{var statearr_10619_10688 = state_10565__$1;(statearr_10619_10688[1] = 22);
} else
{var statearr_10620_10689 = state_10565__$1;(statearr_10620_10689[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 21))
{var inst_10483 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10621_10690 = state_10565__$1;(statearr_10621_10690[2] = inst_10483);
(statearr_10621_10690[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 22))
{var inst_10473 = (state_10565[28]);var inst_10476 = cljs.core.async.close_BANG_.call(null,inst_10473);var state_10565__$1 = state_10565;var statearr_10622_10691 = state_10565__$1;(statearr_10622_10691[2] = inst_10476);
(statearr_10622_10691[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 23))
{var state_10565__$1 = state_10565;var statearr_10623_10692 = state_10565__$1;(statearr_10623_10692[2] = null);
(statearr_10623_10692[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 24))
{var inst_10462 = (state_10565[25]);var inst_10479 = (state_10565[2]);var inst_10480 = cljs.core.next.call(null,inst_10462);var inst_10442 = inst_10480;var inst_10443 = null;var inst_10444 = 0;var inst_10445 = 0;var state_10565__$1 = (function (){var statearr_10624 = state_10565;(statearr_10624[14] = inst_10444);
(statearr_10624[15] = inst_10445);
(statearr_10624[16] = inst_10443);
(statearr_10624[17] = inst_10442);
(statearr_10624[29] = inst_10479);
return statearr_10624;
})();var statearr_10625_10693 = state_10565__$1;(statearr_10625_10693[2] = null);
(statearr_10625_10693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 25))
{var inst_10504 = (state_10565[10]);var inst_10503 = (state_10565[11]);var inst_10506 = (inst_10504 < inst_10503);var inst_10507 = inst_10506;var state_10565__$1 = state_10565;if(cljs.core.truth_(inst_10507))
{var statearr_10626_10694 = state_10565__$1;(statearr_10626_10694[1] = 27);
} else
{var statearr_10627_10695 = state_10565__$1;(statearr_10627_10695[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 26))
{var inst_10493 = (state_10565[19]);var inst_10551 = (state_10565[2]);var inst_10552 = cljs.core.seq.call(null,inst_10493);var state_10565__$1 = (function (){var statearr_10628 = state_10565;(statearr_10628[30] = inst_10551);
return statearr_10628;
})();if(inst_10552)
{var statearr_10629_10696 = state_10565__$1;(statearr_10629_10696[1] = 42);
} else
{var statearr_10630_10697 = state_10565__$1;(statearr_10630_10697[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 27))
{var inst_10504 = (state_10565[10]);var inst_10502 = (state_10565[13]);var inst_10509 = cljs.core._nth.call(null,inst_10502,inst_10504);var state_10565__$1 = (function (){var statearr_10631 = state_10565;(statearr_10631[7] = inst_10509);
return statearr_10631;
})();var statearr_10632_10698 = state_10565__$1;(statearr_10632_10698[2] = null);
(statearr_10632_10698[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 28))
{var inst_10522 = (state_10565[9]);var inst_10501 = (state_10565[12]);var inst_10522__$1 = cljs.core.seq.call(null,inst_10501);var state_10565__$1 = (function (){var statearr_10636 = state_10565;(statearr_10636[9] = inst_10522__$1);
return statearr_10636;
})();if(inst_10522__$1)
{var statearr_10637_10699 = state_10565__$1;(statearr_10637_10699[1] = 33);
} else
{var statearr_10638_10700 = state_10565__$1;(statearr_10638_10700[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 29))
{var inst_10549 = (state_10565[2]);var state_10565__$1 = state_10565;var statearr_10639_10701 = state_10565__$1;(statearr_10639_10701[2] = inst_10549);
(statearr_10639_10701[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 30))
{var inst_10504 = (state_10565[10]);var inst_10503 = (state_10565[11]);var inst_10501 = (state_10565[12]);var inst_10502 = (state_10565[13]);var inst_10518 = (state_10565[2]);var inst_10519 = (inst_10504 + 1);var tmp10633 = inst_10503;var tmp10634 = inst_10501;var tmp10635 = inst_10502;var inst_10501__$1 = tmp10634;var inst_10502__$1 = tmp10635;var inst_10503__$1 = tmp10633;var inst_10504__$1 = inst_10519;var state_10565__$1 = (function (){var statearr_10640 = state_10565;(statearr_10640[10] = inst_10504__$1);
(statearr_10640[11] = inst_10503__$1);
(statearr_10640[31] = inst_10518);
(statearr_10640[12] = inst_10501__$1);
(statearr_10640[13] = inst_10502__$1);
return statearr_10640;
})();var statearr_10641_10702 = state_10565__$1;(statearr_10641_10702[2] = null);
(statearr_10641_10702[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10566 === 31))
{var inst_10509 = (state_10565[7]);var inst_10510 = (state_10565[2]);var inst_10511 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10512 = cljs.core.async.untap_STAR_.call(null,m,inst_10509);var state_10565__$1 = (function (){var statearr_10642 = state_10565;(statearr_10642[32] = inst_10510);
(statearr_10642[33] = inst_10511);
return statearr_10642;
})();var statearr_10643_10703 = state_10565__$1;(statearr_10643_10703[2] = inst_10512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565__$1);
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
var state_machine__5550__auto____0 = (function (){var statearr_10647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10647[0] = state_machine__5550__auto__);
(statearr_10647[1] = 1);
return statearr_10647;
});
var state_machine__5550__auto____1 = (function (state_10565){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10648){if((e10648 instanceof Object))
{var ex__5553__auto__ = e10648;var statearr_10649_10704 = state_10565;(statearr_10649_10704[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10705 = state_10565;
state_10565 = G__10705;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10565){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10650 = f__5565__auto__.call(null);(statearr_10650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10651);
return statearr_10650;
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
cljs.core.async.Mix = (function (){var obj10707 = {};return obj10707;
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
;var m = (function (){if(typeof cljs.core.async.t10817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10817 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10818){
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
this.meta10818 = meta10818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10817.cljs$lang$type = true;
cljs.core.async.t10817.cljs$lang$ctorStr = "cljs.core.async/t10817";
cljs.core.async.t10817.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10817");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10819){var self__ = this;
var _10819__$1 = this;return self__.meta10818;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10819,meta10818__$1){var self__ = this;
var _10819__$1 = this;return (new cljs.core.async.t10817(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10818__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10817 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10817(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10818){return (new cljs.core.async.t10817(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10818));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10817(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5564__auto___10926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10884){var state_val_10885 = (state_10884[1]);if((state_val_10885 === 1))
{var inst_10823 = (state_10884[7]);var inst_10823__$1 = calc_state.call(null);var inst_10824 = cljs.core.seq_QMARK_.call(null,inst_10823__$1);var state_10884__$1 = (function (){var statearr_10886 = state_10884;(statearr_10886[7] = inst_10823__$1);
return statearr_10886;
})();if(inst_10824)
{var statearr_10887_10927 = state_10884__$1;(statearr_10887_10927[1] = 2);
} else
{var statearr_10888_10928 = state_10884__$1;(statearr_10888_10928[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 2))
{var inst_10823 = (state_10884[7]);var inst_10826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10823);var state_10884__$1 = state_10884;var statearr_10889_10929 = state_10884__$1;(statearr_10889_10929[2] = inst_10826);
(statearr_10889_10929[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 3))
{var inst_10823 = (state_10884[7]);var state_10884__$1 = state_10884;var statearr_10890_10930 = state_10884__$1;(statearr_10890_10930[2] = inst_10823);
(statearr_10890_10930[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 4))
{var inst_10823 = (state_10884[7]);var inst_10829 = (state_10884[2]);var inst_10830 = cljs.core.get.call(null,inst_10829,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10831 = cljs.core.get.call(null,inst_10829,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10832 = cljs.core.get.call(null,inst_10829,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10833 = inst_10823;var state_10884__$1 = (function (){var statearr_10891 = state_10884;(statearr_10891[8] = inst_10830);
(statearr_10891[9] = inst_10831);
(statearr_10891[10] = inst_10832);
(statearr_10891[11] = inst_10833);
return statearr_10891;
})();var statearr_10892_10931 = state_10884__$1;(statearr_10892_10931[2] = null);
(statearr_10892_10931[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 5))
{var inst_10833 = (state_10884[11]);var inst_10836 = cljs.core.seq_QMARK_.call(null,inst_10833);var state_10884__$1 = state_10884;if(inst_10836)
{var statearr_10893_10932 = state_10884__$1;(statearr_10893_10932[1] = 7);
} else
{var statearr_10894_10933 = state_10884__$1;(statearr_10894_10933[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 6))
{var inst_10882 = (state_10884[2]);var state_10884__$1 = state_10884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10884__$1,inst_10882);
} else
{if((state_val_10885 === 7))
{var inst_10833 = (state_10884[11]);var inst_10838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10833);var state_10884__$1 = state_10884;var statearr_10895_10934 = state_10884__$1;(statearr_10895_10934[2] = inst_10838);
(statearr_10895_10934[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 8))
{var inst_10833 = (state_10884[11]);var state_10884__$1 = state_10884;var statearr_10896_10935 = state_10884__$1;(statearr_10896_10935[2] = inst_10833);
(statearr_10896_10935[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 9))
{var inst_10841 = (state_10884[12]);var inst_10841__$1 = (state_10884[2]);var inst_10842 = cljs.core.get.call(null,inst_10841__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10843 = cljs.core.get.call(null,inst_10841__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10844 = cljs.core.get.call(null,inst_10841__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10884__$1 = (function (){var statearr_10897 = state_10884;(statearr_10897[12] = inst_10841__$1);
(statearr_10897[13] = inst_10843);
(statearr_10897[14] = inst_10844);
return statearr_10897;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10884__$1,10,inst_10842);
} else
{if((state_val_10885 === 10))
{var inst_10848 = (state_10884[15]);var inst_10849 = (state_10884[16]);var inst_10847 = (state_10884[2]);var inst_10848__$1 = cljs.core.nth.call(null,inst_10847,0,null);var inst_10849__$1 = cljs.core.nth.call(null,inst_10847,1,null);var inst_10850 = (inst_10848__$1 == null);var inst_10851 = cljs.core._EQ_.call(null,inst_10849__$1,change);var inst_10852 = (inst_10850) || (inst_10851);var state_10884__$1 = (function (){var statearr_10898 = state_10884;(statearr_10898[15] = inst_10848__$1);
(statearr_10898[16] = inst_10849__$1);
return statearr_10898;
})();if(cljs.core.truth_(inst_10852))
{var statearr_10899_10936 = state_10884__$1;(statearr_10899_10936[1] = 11);
} else
{var statearr_10900_10937 = state_10884__$1;(statearr_10900_10937[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 11))
{var inst_10848 = (state_10884[15]);var inst_10854 = (inst_10848 == null);var state_10884__$1 = state_10884;if(cljs.core.truth_(inst_10854))
{var statearr_10901_10938 = state_10884__$1;(statearr_10901_10938[1] = 14);
} else
{var statearr_10902_10939 = state_10884__$1;(statearr_10902_10939[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 12))
{var inst_10863 = (state_10884[17]);var inst_10844 = (state_10884[14]);var inst_10849 = (state_10884[16]);var inst_10863__$1 = inst_10844.call(null,inst_10849);var state_10884__$1 = (function (){var statearr_10903 = state_10884;(statearr_10903[17] = inst_10863__$1);
return statearr_10903;
})();if(cljs.core.truth_(inst_10863__$1))
{var statearr_10904_10940 = state_10884__$1;(statearr_10904_10940[1] = 17);
} else
{var statearr_10905_10941 = state_10884__$1;(statearr_10905_10941[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 13))
{var inst_10880 = (state_10884[2]);var state_10884__$1 = state_10884;var statearr_10906_10942 = state_10884__$1;(statearr_10906_10942[2] = inst_10880);
(statearr_10906_10942[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 14))
{var inst_10849 = (state_10884[16]);var inst_10856 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10849);var state_10884__$1 = state_10884;var statearr_10907_10943 = state_10884__$1;(statearr_10907_10943[2] = inst_10856);
(statearr_10907_10943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 15))
{var state_10884__$1 = state_10884;var statearr_10908_10944 = state_10884__$1;(statearr_10908_10944[2] = null);
(statearr_10908_10944[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 16))
{var inst_10859 = (state_10884[2]);var inst_10860 = calc_state.call(null);var inst_10833 = inst_10860;var state_10884__$1 = (function (){var statearr_10909 = state_10884;(statearr_10909[18] = inst_10859);
(statearr_10909[11] = inst_10833);
return statearr_10909;
})();var statearr_10910_10945 = state_10884__$1;(statearr_10910_10945[2] = null);
(statearr_10910_10945[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 17))
{var inst_10863 = (state_10884[17]);var state_10884__$1 = state_10884;var statearr_10911_10946 = state_10884__$1;(statearr_10911_10946[2] = inst_10863);
(statearr_10911_10946[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 18))
{var inst_10843 = (state_10884[13]);var inst_10844 = (state_10884[14]);var inst_10849 = (state_10884[16]);var inst_10866 = cljs.core.empty_QMARK_.call(null,inst_10844);var inst_10867 = inst_10843.call(null,inst_10849);var inst_10868 = cljs.core.not.call(null,inst_10867);var inst_10869 = (inst_10866) && (inst_10868);var state_10884__$1 = state_10884;var statearr_10912_10947 = state_10884__$1;(statearr_10912_10947[2] = inst_10869);
(statearr_10912_10947[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 19))
{var inst_10871 = (state_10884[2]);var state_10884__$1 = state_10884;if(cljs.core.truth_(inst_10871))
{var statearr_10913_10948 = state_10884__$1;(statearr_10913_10948[1] = 20);
} else
{var statearr_10914_10949 = state_10884__$1;(statearr_10914_10949[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 20))
{var inst_10848 = (state_10884[15]);var state_10884__$1 = state_10884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10884__$1,23,out,inst_10848);
} else
{if((state_val_10885 === 21))
{var state_10884__$1 = state_10884;var statearr_10915_10950 = state_10884__$1;(statearr_10915_10950[2] = null);
(statearr_10915_10950[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 22))
{var inst_10841 = (state_10884[12]);var inst_10877 = (state_10884[2]);var inst_10833 = inst_10841;var state_10884__$1 = (function (){var statearr_10916 = state_10884;(statearr_10916[19] = inst_10877);
(statearr_10916[11] = inst_10833);
return statearr_10916;
})();var statearr_10917_10951 = state_10884__$1;(statearr_10917_10951[2] = null);
(statearr_10917_10951[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10885 === 23))
{var inst_10874 = (state_10884[2]);var state_10884__$1 = state_10884;var statearr_10918_10952 = state_10884__$1;(statearr_10918_10952[2] = inst_10874);
(statearr_10918_10952[1] = 22);
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
var state_machine__5550__auto____0 = (function (){var statearr_10922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10922[0] = state_machine__5550__auto__);
(statearr_10922[1] = 1);
return statearr_10922;
});
var state_machine__5550__auto____1 = (function (state_10884){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10884);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10923){if((e10923 instanceof Object))
{var ex__5553__auto__ = e10923;var statearr_10924_10953 = state_10884;(statearr_10924_10953[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10954 = state_10884;
state_10884 = G__10954;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10884){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10925 = f__5565__auto__.call(null);(statearr_10925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10926);
return statearr_10925;
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
cljs.core.async.Pub = (function (){var obj10956 = {};return obj10956;
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
return (function (p1__10957_SHARP_){if(cljs.core.truth_(p1__10957_SHARP_.call(null,topic)))
{return p1__10957_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10957_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11082 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11083){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11083 = meta11083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11082.cljs$lang$type = true;
cljs.core.async.t11082.cljs$lang$ctorStr = "cljs.core.async/t11082";
cljs.core.async.t11082.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11082");
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11082.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11084){var self__ = this;
var _11084__$1 = this;return self__.meta11083;
});})(mults,ensure_mult))
;
cljs.core.async.t11082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11084,meta11083__$1){var self__ = this;
var _11084__$1 = this;return (new cljs.core.async.t11082(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11083__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11082 = ((function (mults,ensure_mult){
return (function __GT_t11082(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11083){return (new cljs.core.async.t11082(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11083));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11082(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5564__auto___11206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11158){var state_val_11159 = (state_11158[1]);if((state_val_11159 === 1))
{var state_11158__$1 = state_11158;var statearr_11160_11207 = state_11158__$1;(statearr_11160_11207[2] = null);
(statearr_11160_11207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 2))
{var state_11158__$1 = state_11158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11158__$1,4,ch);
} else
{if((state_val_11159 === 3))
{var inst_11156 = (state_11158[2]);var state_11158__$1 = state_11158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11158__$1,inst_11156);
} else
{if((state_val_11159 === 4))
{var inst_11087 = (state_11158[7]);var inst_11087__$1 = (state_11158[2]);var inst_11088 = (inst_11087__$1 == null);var state_11158__$1 = (function (){var statearr_11161 = state_11158;(statearr_11161[7] = inst_11087__$1);
return statearr_11161;
})();if(cljs.core.truth_(inst_11088))
{var statearr_11162_11208 = state_11158__$1;(statearr_11162_11208[1] = 5);
} else
{var statearr_11163_11209 = state_11158__$1;(statearr_11163_11209[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 5))
{var inst_11094 = cljs.core.deref.call(null,mults);var inst_11095 = cljs.core.vals.call(null,inst_11094);var inst_11096 = cljs.core.seq.call(null,inst_11095);var inst_11097 = inst_11096;var inst_11098 = null;var inst_11099 = 0;var inst_11100 = 0;var state_11158__$1 = (function (){var statearr_11164 = state_11158;(statearr_11164[8] = inst_11098);
(statearr_11164[9] = inst_11099);
(statearr_11164[10] = inst_11097);
(statearr_11164[11] = inst_11100);
return statearr_11164;
})();var statearr_11165_11210 = state_11158__$1;(statearr_11165_11210[2] = null);
(statearr_11165_11210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 6))
{var inst_11137 = (state_11158[12]);var inst_11135 = (state_11158[13]);var inst_11087 = (state_11158[7]);var inst_11135__$1 = topic_fn.call(null,inst_11087);var inst_11136 = cljs.core.deref.call(null,mults);var inst_11137__$1 = cljs.core.get.call(null,inst_11136,inst_11135__$1);var state_11158__$1 = (function (){var statearr_11166 = state_11158;(statearr_11166[12] = inst_11137__$1);
(statearr_11166[13] = inst_11135__$1);
return statearr_11166;
})();if(cljs.core.truth_(inst_11137__$1))
{var statearr_11167_11211 = state_11158__$1;(statearr_11167_11211[1] = 19);
} else
{var statearr_11168_11212 = state_11158__$1;(statearr_11168_11212[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 7))
{var inst_11154 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11169_11213 = state_11158__$1;(statearr_11169_11213[2] = inst_11154);
(statearr_11169_11213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 8))
{var inst_11099 = (state_11158[9]);var inst_11100 = (state_11158[11]);var inst_11102 = (inst_11100 < inst_11099);var inst_11103 = inst_11102;var state_11158__$1 = state_11158;if(cljs.core.truth_(inst_11103))
{var statearr_11173_11214 = state_11158__$1;(statearr_11173_11214[1] = 10);
} else
{var statearr_11174_11215 = state_11158__$1;(statearr_11174_11215[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 9))
{var inst_11133 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11175_11216 = state_11158__$1;(statearr_11175_11216[2] = inst_11133);
(statearr_11175_11216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 10))
{var inst_11098 = (state_11158[8]);var inst_11099 = (state_11158[9]);var inst_11097 = (state_11158[10]);var inst_11100 = (state_11158[11]);var inst_11105 = cljs.core._nth.call(null,inst_11098,inst_11100);var inst_11106 = cljs.core.async.muxch_STAR_.call(null,inst_11105);var inst_11107 = cljs.core.async.close_BANG_.call(null,inst_11106);var inst_11108 = (inst_11100 + 1);var tmp11170 = inst_11098;var tmp11171 = inst_11099;var tmp11172 = inst_11097;var inst_11097__$1 = tmp11172;var inst_11098__$1 = tmp11170;var inst_11099__$1 = tmp11171;var inst_11100__$1 = inst_11108;var state_11158__$1 = (function (){var statearr_11176 = state_11158;(statearr_11176[8] = inst_11098__$1);
(statearr_11176[9] = inst_11099__$1);
(statearr_11176[10] = inst_11097__$1);
(statearr_11176[11] = inst_11100__$1);
(statearr_11176[14] = inst_11107);
return statearr_11176;
})();var statearr_11177_11217 = state_11158__$1;(statearr_11177_11217[2] = null);
(statearr_11177_11217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 11))
{var inst_11097 = (state_11158[10]);var inst_11111 = (state_11158[15]);var inst_11111__$1 = cljs.core.seq.call(null,inst_11097);var state_11158__$1 = (function (){var statearr_11178 = state_11158;(statearr_11178[15] = inst_11111__$1);
return statearr_11178;
})();if(inst_11111__$1)
{var statearr_11179_11218 = state_11158__$1;(statearr_11179_11218[1] = 13);
} else
{var statearr_11180_11219 = state_11158__$1;(statearr_11180_11219[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 12))
{var inst_11131 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11181_11220 = state_11158__$1;(statearr_11181_11220[2] = inst_11131);
(statearr_11181_11220[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 13))
{var inst_11111 = (state_11158[15]);var inst_11113 = cljs.core.chunked_seq_QMARK_.call(null,inst_11111);var state_11158__$1 = state_11158;if(inst_11113)
{var statearr_11182_11221 = state_11158__$1;(statearr_11182_11221[1] = 16);
} else
{var statearr_11183_11222 = state_11158__$1;(statearr_11183_11222[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 14))
{var state_11158__$1 = state_11158;var statearr_11184_11223 = state_11158__$1;(statearr_11184_11223[2] = null);
(statearr_11184_11223[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 15))
{var inst_11129 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11185_11224 = state_11158__$1;(statearr_11185_11224[2] = inst_11129);
(statearr_11185_11224[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 16))
{var inst_11111 = (state_11158[15]);var inst_11115 = cljs.core.chunk_first.call(null,inst_11111);var inst_11116 = cljs.core.chunk_rest.call(null,inst_11111);var inst_11117 = cljs.core.count.call(null,inst_11115);var inst_11097 = inst_11116;var inst_11098 = inst_11115;var inst_11099 = inst_11117;var inst_11100 = 0;var state_11158__$1 = (function (){var statearr_11186 = state_11158;(statearr_11186[8] = inst_11098);
(statearr_11186[9] = inst_11099);
(statearr_11186[10] = inst_11097);
(statearr_11186[11] = inst_11100);
return statearr_11186;
})();var statearr_11187_11225 = state_11158__$1;(statearr_11187_11225[2] = null);
(statearr_11187_11225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 17))
{var inst_11111 = (state_11158[15]);var inst_11120 = cljs.core.first.call(null,inst_11111);var inst_11121 = cljs.core.async.muxch_STAR_.call(null,inst_11120);var inst_11122 = cljs.core.async.close_BANG_.call(null,inst_11121);var inst_11123 = cljs.core.next.call(null,inst_11111);var inst_11097 = inst_11123;var inst_11098 = null;var inst_11099 = 0;var inst_11100 = 0;var state_11158__$1 = (function (){var statearr_11188 = state_11158;(statearr_11188[8] = inst_11098);
(statearr_11188[9] = inst_11099);
(statearr_11188[10] = inst_11097);
(statearr_11188[11] = inst_11100);
(statearr_11188[16] = inst_11122);
return statearr_11188;
})();var statearr_11189_11226 = state_11158__$1;(statearr_11189_11226[2] = null);
(statearr_11189_11226[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 18))
{var inst_11126 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11190_11227 = state_11158__$1;(statearr_11190_11227[2] = inst_11126);
(statearr_11190_11227[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 19))
{var state_11158__$1 = state_11158;var statearr_11191_11228 = state_11158__$1;(statearr_11191_11228[2] = null);
(statearr_11191_11228[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 20))
{var state_11158__$1 = state_11158;var statearr_11192_11229 = state_11158__$1;(statearr_11192_11229[2] = null);
(statearr_11192_11229[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 21))
{var inst_11151 = (state_11158[2]);var state_11158__$1 = (function (){var statearr_11193 = state_11158;(statearr_11193[17] = inst_11151);
return statearr_11193;
})();var statearr_11194_11230 = state_11158__$1;(statearr_11194_11230[2] = null);
(statearr_11194_11230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 22))
{var inst_11148 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11195_11231 = state_11158__$1;(statearr_11195_11231[2] = inst_11148);
(statearr_11195_11231[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 23))
{var inst_11135 = (state_11158[13]);var inst_11139 = (state_11158[2]);var inst_11140 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11135);var state_11158__$1 = (function (){var statearr_11196 = state_11158;(statearr_11196[18] = inst_11139);
return statearr_11196;
})();var statearr_11197_11232 = state_11158__$1;(statearr_11197_11232[2] = inst_11140);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11158__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11159 === 24))
{var inst_11137 = (state_11158[12]);var inst_11087 = (state_11158[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11158,23,Object,null,22);var inst_11144 = cljs.core.async.muxch_STAR_.call(null,inst_11137);var state_11158__$1 = state_11158;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11158__$1,25,inst_11144,inst_11087);
} else
{if((state_val_11159 === 25))
{var inst_11146 = (state_11158[2]);var state_11158__$1 = state_11158;var statearr_11198_11233 = state_11158__$1;(statearr_11198_11233[2] = inst_11146);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11158__$1);
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
var state_machine__5550__auto____0 = (function (){var statearr_11202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11202[0] = state_machine__5550__auto__);
(statearr_11202[1] = 1);
return statearr_11202;
});
var state_machine__5550__auto____1 = (function (state_11158){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11158);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11203){if((e11203 instanceof Object))
{var ex__5553__auto__ = e11203;var statearr_11204_11234 = state_11158;(statearr_11204_11234[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11158);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11235 = state_11158;
state_11158 = G__11235;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11158){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11205 = f__5565__auto__.call(null);(statearr_11205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11206);
return statearr_11205;
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
,cljs.core.range.call(null,cnt));var c__5564__auto___11372 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11342){var state_val_11343 = (state_11342[1]);if((state_val_11343 === 1))
{var state_11342__$1 = state_11342;var statearr_11344_11373 = state_11342__$1;(statearr_11344_11373[2] = null);
(statearr_11344_11373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 2))
{var inst_11305 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11306 = 0;var state_11342__$1 = (function (){var statearr_11345 = state_11342;(statearr_11345[7] = inst_11306);
(statearr_11345[8] = inst_11305);
return statearr_11345;
})();var statearr_11346_11374 = state_11342__$1;(statearr_11346_11374[2] = null);
(statearr_11346_11374[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 3))
{var inst_11340 = (state_11342[2]);var state_11342__$1 = state_11342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11342__$1,inst_11340);
} else
{if((state_val_11343 === 4))
{var inst_11306 = (state_11342[7]);var inst_11308 = (inst_11306 < cnt);var state_11342__$1 = state_11342;if(cljs.core.truth_(inst_11308))
{var statearr_11347_11375 = state_11342__$1;(statearr_11347_11375[1] = 6);
} else
{var statearr_11348_11376 = state_11342__$1;(statearr_11348_11376[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 5))
{var inst_11326 = (state_11342[2]);var state_11342__$1 = (function (){var statearr_11349 = state_11342;(statearr_11349[9] = inst_11326);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11342__$1,12,dchan);
} else
{if((state_val_11343 === 6))
{var state_11342__$1 = state_11342;var statearr_11350_11377 = state_11342__$1;(statearr_11350_11377[2] = null);
(statearr_11350_11377[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 7))
{var state_11342__$1 = state_11342;var statearr_11351_11378 = state_11342__$1;(statearr_11351_11378[2] = null);
(statearr_11351_11378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 8))
{var inst_11324 = (state_11342[2]);var state_11342__$1 = state_11342;var statearr_11352_11379 = state_11342__$1;(statearr_11352_11379[2] = inst_11324);
(statearr_11352_11379[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 9))
{var inst_11306 = (state_11342[7]);var inst_11319 = (state_11342[2]);var inst_11320 = (inst_11306 + 1);var inst_11306__$1 = inst_11320;var state_11342__$1 = (function (){var statearr_11353 = state_11342;(statearr_11353[7] = inst_11306__$1);
(statearr_11353[10] = inst_11319);
return statearr_11353;
})();var statearr_11354_11380 = state_11342__$1;(statearr_11354_11380[2] = null);
(statearr_11354_11380[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 10))
{var inst_11310 = (state_11342[2]);var inst_11311 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11342__$1 = (function (){var statearr_11355 = state_11342;(statearr_11355[11] = inst_11310);
return statearr_11355;
})();var statearr_11356_11381 = state_11342__$1;(statearr_11356_11381[2] = inst_11311);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11342__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 11))
{var inst_11306 = (state_11342[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11342,10,Object,null,9);var inst_11315 = chs__$1.call(null,inst_11306);var inst_11316 = done.call(null,inst_11306);var inst_11317 = cljs.core.async.take_BANG_.call(null,inst_11315,inst_11316);var state_11342__$1 = state_11342;var statearr_11357_11382 = state_11342__$1;(statearr_11357_11382[2] = inst_11317);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11342__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 12))
{var inst_11328 = (state_11342[12]);var inst_11328__$1 = (state_11342[2]);var inst_11329 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11328__$1);var state_11342__$1 = (function (){var statearr_11358 = state_11342;(statearr_11358[12] = inst_11328__$1);
return statearr_11358;
})();if(cljs.core.truth_(inst_11329))
{var statearr_11359_11383 = state_11342__$1;(statearr_11359_11383[1] = 13);
} else
{var statearr_11360_11384 = state_11342__$1;(statearr_11360_11384[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 13))
{var inst_11331 = cljs.core.async.close_BANG_.call(null,out);var state_11342__$1 = state_11342;var statearr_11361_11385 = state_11342__$1;(statearr_11361_11385[2] = inst_11331);
(statearr_11361_11385[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 14))
{var inst_11328 = (state_11342[12]);var inst_11333 = cljs.core.apply.call(null,f,inst_11328);var state_11342__$1 = state_11342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11342__$1,16,out,inst_11333);
} else
{if((state_val_11343 === 15))
{var inst_11338 = (state_11342[2]);var state_11342__$1 = state_11342;var statearr_11362_11386 = state_11342__$1;(statearr_11362_11386[2] = inst_11338);
(statearr_11362_11386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11343 === 16))
{var inst_11335 = (state_11342[2]);var state_11342__$1 = (function (){var statearr_11363 = state_11342;(statearr_11363[13] = inst_11335);
return statearr_11363;
})();var statearr_11364_11387 = state_11342__$1;(statearr_11364_11387[2] = null);
(statearr_11364_11387[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11368[0] = state_machine__5550__auto__);
(statearr_11368[1] = 1);
return statearr_11368;
});
var state_machine__5550__auto____1 = (function (state_11342){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11369){if((e11369 instanceof Object))
{var ex__5553__auto__ = e11369;var statearr_11370_11388 = state_11342;(statearr_11370_11388[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11389 = state_11342;
state_11342 = G__11389;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11342){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11371 = f__5565__auto__.call(null);(statearr_11371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11372);
return statearr_11371;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11497 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11473){var state_val_11474 = (state_11473[1]);if((state_val_11474 === 1))
{var inst_11444 = cljs.core.vec.call(null,chs);var inst_11445 = inst_11444;var state_11473__$1 = (function (){var statearr_11475 = state_11473;(statearr_11475[7] = inst_11445);
return statearr_11475;
})();var statearr_11476_11498 = state_11473__$1;(statearr_11476_11498[2] = null);
(statearr_11476_11498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 2))
{var inst_11445 = (state_11473[7]);var inst_11447 = cljs.core.count.call(null,inst_11445);var inst_11448 = (inst_11447 > 0);var state_11473__$1 = state_11473;if(cljs.core.truth_(inst_11448))
{var statearr_11477_11499 = state_11473__$1;(statearr_11477_11499[1] = 4);
} else
{var statearr_11478_11500 = state_11473__$1;(statearr_11478_11500[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 3))
{var inst_11471 = (state_11473[2]);var state_11473__$1 = state_11473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11473__$1,inst_11471);
} else
{if((state_val_11474 === 4))
{var inst_11445 = (state_11473[7]);var state_11473__$1 = state_11473;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11473__$1,7,inst_11445);
} else
{if((state_val_11474 === 5))
{var inst_11467 = cljs.core.async.close_BANG_.call(null,out);var state_11473__$1 = state_11473;var statearr_11479_11501 = state_11473__$1;(statearr_11479_11501[2] = inst_11467);
(statearr_11479_11501[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 6))
{var inst_11469 = (state_11473[2]);var state_11473__$1 = state_11473;var statearr_11480_11502 = state_11473__$1;(statearr_11480_11502[2] = inst_11469);
(statearr_11480_11502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 7))
{var inst_11453 = (state_11473[8]);var inst_11452 = (state_11473[9]);var inst_11452__$1 = (state_11473[2]);var inst_11453__$1 = cljs.core.nth.call(null,inst_11452__$1,0,null);var inst_11454 = cljs.core.nth.call(null,inst_11452__$1,1,null);var inst_11455 = (inst_11453__$1 == null);var state_11473__$1 = (function (){var statearr_11481 = state_11473;(statearr_11481[10] = inst_11454);
(statearr_11481[8] = inst_11453__$1);
(statearr_11481[9] = inst_11452__$1);
return statearr_11481;
})();if(cljs.core.truth_(inst_11455))
{var statearr_11482_11503 = state_11473__$1;(statearr_11482_11503[1] = 8);
} else
{var statearr_11483_11504 = state_11473__$1;(statearr_11483_11504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 8))
{var inst_11445 = (state_11473[7]);var inst_11454 = (state_11473[10]);var inst_11453 = (state_11473[8]);var inst_11452 = (state_11473[9]);var inst_11457 = (function (){var c = inst_11454;var v = inst_11453;var vec__11450 = inst_11452;var cs = inst_11445;return ((function (c,v,vec__11450,cs,inst_11445,inst_11454,inst_11453,inst_11452,state_val_11474){
return (function (p1__11390_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11390_SHARP_);
});
;})(c,v,vec__11450,cs,inst_11445,inst_11454,inst_11453,inst_11452,state_val_11474))
})();var inst_11458 = cljs.core.filterv.call(null,inst_11457,inst_11445);var inst_11445__$1 = inst_11458;var state_11473__$1 = (function (){var statearr_11484 = state_11473;(statearr_11484[7] = inst_11445__$1);
return statearr_11484;
})();var statearr_11485_11505 = state_11473__$1;(statearr_11485_11505[2] = null);
(statearr_11485_11505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 9))
{var inst_11453 = (state_11473[8]);var state_11473__$1 = state_11473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11473__$1,11,out,inst_11453);
} else
{if((state_val_11474 === 10))
{var inst_11465 = (state_11473[2]);var state_11473__$1 = state_11473;var statearr_11487_11506 = state_11473__$1;(statearr_11487_11506[2] = inst_11465);
(statearr_11487_11506[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11474 === 11))
{var inst_11445 = (state_11473[7]);var inst_11462 = (state_11473[2]);var tmp11486 = inst_11445;var inst_11445__$1 = tmp11486;var state_11473__$1 = (function (){var statearr_11488 = state_11473;(statearr_11488[11] = inst_11462);
(statearr_11488[7] = inst_11445__$1);
return statearr_11488;
})();var statearr_11489_11507 = state_11473__$1;(statearr_11489_11507[2] = null);
(statearr_11489_11507[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11493 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11493[0] = state_machine__5550__auto__);
(statearr_11493[1] = 1);
return statearr_11493;
});
var state_machine__5550__auto____1 = (function (state_11473){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11473);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object))
{var ex__5553__auto__ = e11494;var statearr_11495_11508 = state_11473;(statearr_11495_11508[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11509 = state_11473;
state_11473 = G__11509;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11473){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11496 = f__5565__auto__.call(null);(statearr_11496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11497);
return statearr_11496;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11579){var state_val_11580 = (state_11579[1]);if((state_val_11580 === 1))
{var inst_11556 = 0;var state_11579__$1 = (function (){var statearr_11581 = state_11579;(statearr_11581[7] = inst_11556);
return statearr_11581;
})();var statearr_11582_11603 = state_11579__$1;(statearr_11582_11603[2] = null);
(statearr_11582_11603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 2))
{var inst_11556 = (state_11579[7]);var inst_11558 = (inst_11556 < n);var state_11579__$1 = state_11579;if(cljs.core.truth_(inst_11558))
{var statearr_11583_11604 = state_11579__$1;(statearr_11583_11604[1] = 4);
} else
{var statearr_11584_11605 = state_11579__$1;(statearr_11584_11605[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 3))
{var inst_11576 = (state_11579[2]);var inst_11577 = cljs.core.async.close_BANG_.call(null,out);var state_11579__$1 = (function (){var statearr_11585 = state_11579;(statearr_11585[8] = inst_11576);
return statearr_11585;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11579__$1,inst_11577);
} else
{if((state_val_11580 === 4))
{var state_11579__$1 = state_11579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11579__$1,7,ch);
} else
{if((state_val_11580 === 5))
{var state_11579__$1 = state_11579;var statearr_11586_11606 = state_11579__$1;(statearr_11586_11606[2] = null);
(statearr_11586_11606[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 6))
{var inst_11574 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11587_11607 = state_11579__$1;(statearr_11587_11607[2] = inst_11574);
(statearr_11587_11607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 7))
{var inst_11561 = (state_11579[9]);var inst_11561__$1 = (state_11579[2]);var inst_11562 = (inst_11561__$1 == null);var inst_11563 = cljs.core.not.call(null,inst_11562);var state_11579__$1 = (function (){var statearr_11588 = state_11579;(statearr_11588[9] = inst_11561__$1);
return statearr_11588;
})();if(inst_11563)
{var statearr_11589_11608 = state_11579__$1;(statearr_11589_11608[1] = 8);
} else
{var statearr_11590_11609 = state_11579__$1;(statearr_11590_11609[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 8))
{var inst_11561 = (state_11579[9]);var state_11579__$1 = state_11579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11579__$1,11,out,inst_11561);
} else
{if((state_val_11580 === 9))
{var state_11579__$1 = state_11579;var statearr_11591_11610 = state_11579__$1;(statearr_11591_11610[2] = null);
(statearr_11591_11610[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 10))
{var inst_11571 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11592_11611 = state_11579__$1;(statearr_11592_11611[2] = inst_11571);
(statearr_11592_11611[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 11))
{var inst_11556 = (state_11579[7]);var inst_11566 = (state_11579[2]);var inst_11567 = (inst_11556 + 1);var inst_11556__$1 = inst_11567;var state_11579__$1 = (function (){var statearr_11593 = state_11579;(statearr_11593[10] = inst_11566);
(statearr_11593[7] = inst_11556__$1);
return statearr_11593;
})();var statearr_11594_11612 = state_11579__$1;(statearr_11594_11612[2] = null);
(statearr_11594_11612[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11598 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11598[0] = state_machine__5550__auto__);
(statearr_11598[1] = 1);
return statearr_11598;
});
var state_machine__5550__auto____1 = (function (state_11579){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11579);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11599){if((e11599 instanceof Object))
{var ex__5553__auto__ = e11599;var statearr_11600_11613 = state_11579;(statearr_11600_11613[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11614 = state_11579;
state_11579 = G__11614;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11601 = f__5565__auto__.call(null);(statearr_11601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11602);
return statearr_11601;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11686){var state_val_11687 = (state_11686[1]);if((state_val_11687 === 1))
{var inst_11663 = null;var state_11686__$1 = (function (){var statearr_11688 = state_11686;(statearr_11688[7] = inst_11663);
return statearr_11688;
})();var statearr_11689_11712 = state_11686__$1;(statearr_11689_11712[2] = null);
(statearr_11689_11712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 2))
{var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11686__$1,4,ch);
} else
{if((state_val_11687 === 3))
{var inst_11683 = (state_11686[2]);var inst_11684 = cljs.core.async.close_BANG_.call(null,out);var state_11686__$1 = (function (){var statearr_11690 = state_11686;(statearr_11690[8] = inst_11683);
return statearr_11690;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11686__$1,inst_11684);
} else
{if((state_val_11687 === 4))
{var inst_11666 = (state_11686[9]);var inst_11666__$1 = (state_11686[2]);var inst_11667 = (inst_11666__$1 == null);var inst_11668 = cljs.core.not.call(null,inst_11667);var state_11686__$1 = (function (){var statearr_11691 = state_11686;(statearr_11691[9] = inst_11666__$1);
return statearr_11691;
})();if(inst_11668)
{var statearr_11692_11713 = state_11686__$1;(statearr_11692_11713[1] = 5);
} else
{var statearr_11693_11714 = state_11686__$1;(statearr_11693_11714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 5))
{var inst_11663 = (state_11686[7]);var inst_11666 = (state_11686[9]);var inst_11670 = cljs.core._EQ_.call(null,inst_11666,inst_11663);var state_11686__$1 = state_11686;if(inst_11670)
{var statearr_11694_11715 = state_11686__$1;(statearr_11694_11715[1] = 8);
} else
{var statearr_11695_11716 = state_11686__$1;(statearr_11695_11716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 6))
{var state_11686__$1 = state_11686;var statearr_11697_11717 = state_11686__$1;(statearr_11697_11717[2] = null);
(statearr_11697_11717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 7))
{var inst_11681 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11698_11718 = state_11686__$1;(statearr_11698_11718[2] = inst_11681);
(statearr_11698_11718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 8))
{var inst_11663 = (state_11686[7]);var tmp11696 = inst_11663;var inst_11663__$1 = tmp11696;var state_11686__$1 = (function (){var statearr_11699 = state_11686;(statearr_11699[7] = inst_11663__$1);
return statearr_11699;
})();var statearr_11700_11719 = state_11686__$1;(statearr_11700_11719[2] = null);
(statearr_11700_11719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 9))
{var inst_11666 = (state_11686[9]);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11686__$1,11,out,inst_11666);
} else
{if((state_val_11687 === 10))
{var inst_11678 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11701_11720 = state_11686__$1;(statearr_11701_11720[2] = inst_11678);
(statearr_11701_11720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 11))
{var inst_11666 = (state_11686[9]);var inst_11675 = (state_11686[2]);var inst_11663 = inst_11666;var state_11686__$1 = (function (){var statearr_11702 = state_11686;(statearr_11702[7] = inst_11663);
(statearr_11702[10] = inst_11675);
return statearr_11702;
})();var statearr_11703_11721 = state_11686__$1;(statearr_11703_11721[2] = null);
(statearr_11703_11721[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11707[0] = state_machine__5550__auto__);
(statearr_11707[1] = 1);
return statearr_11707;
});
var state_machine__5550__auto____1 = (function (state_11686){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11686);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11708){if((e11708 instanceof Object))
{var ex__5553__auto__ = e11708;var statearr_11709_11722 = state_11686;(statearr_11709_11722[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11723 = state_11686;
state_11686 = G__11723;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11686){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11710 = f__5565__auto__.call(null);(statearr_11710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11711);
return statearr_11710;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11858 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11828){var state_val_11829 = (state_11828[1]);if((state_val_11829 === 1))
{var inst_11791 = (new Array(n));var inst_11792 = inst_11791;var inst_11793 = 0;var state_11828__$1 = (function (){var statearr_11830 = state_11828;(statearr_11830[7] = inst_11792);
(statearr_11830[8] = inst_11793);
return statearr_11830;
})();var statearr_11831_11859 = state_11828__$1;(statearr_11831_11859[2] = null);
(statearr_11831_11859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 2))
{var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11828__$1,4,ch);
} else
{if((state_val_11829 === 3))
{var inst_11826 = (state_11828[2]);var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11828__$1,inst_11826);
} else
{if((state_val_11829 === 4))
{var inst_11796 = (state_11828[9]);var inst_11796__$1 = (state_11828[2]);var inst_11797 = (inst_11796__$1 == null);var inst_11798 = cljs.core.not.call(null,inst_11797);var state_11828__$1 = (function (){var statearr_11832 = state_11828;(statearr_11832[9] = inst_11796__$1);
return statearr_11832;
})();if(inst_11798)
{var statearr_11833_11860 = state_11828__$1;(statearr_11833_11860[1] = 5);
} else
{var statearr_11834_11861 = state_11828__$1;(statearr_11834_11861[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 5))
{var inst_11792 = (state_11828[7]);var inst_11801 = (state_11828[10]);var inst_11796 = (state_11828[9]);var inst_11793 = (state_11828[8]);var inst_11800 = (inst_11792[inst_11793] = inst_11796);var inst_11801__$1 = (inst_11793 + 1);var inst_11802 = (inst_11801__$1 < n);var state_11828__$1 = (function (){var statearr_11835 = state_11828;(statearr_11835[11] = inst_11800);
(statearr_11835[10] = inst_11801__$1);
return statearr_11835;
})();if(cljs.core.truth_(inst_11802))
{var statearr_11836_11862 = state_11828__$1;(statearr_11836_11862[1] = 8);
} else
{var statearr_11837_11863 = state_11828__$1;(statearr_11837_11863[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 6))
{var inst_11793 = (state_11828[8]);var inst_11814 = (inst_11793 > 0);var state_11828__$1 = state_11828;if(cljs.core.truth_(inst_11814))
{var statearr_11839_11864 = state_11828__$1;(statearr_11839_11864[1] = 12);
} else
{var statearr_11840_11865 = state_11828__$1;(statearr_11840_11865[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 7))
{var inst_11824 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11841_11866 = state_11828__$1;(statearr_11841_11866[2] = inst_11824);
(statearr_11841_11866[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 8))
{var inst_11792 = (state_11828[7]);var inst_11801 = (state_11828[10]);var tmp11838 = inst_11792;var inst_11792__$1 = tmp11838;var inst_11793 = inst_11801;var state_11828__$1 = (function (){var statearr_11842 = state_11828;(statearr_11842[7] = inst_11792__$1);
(statearr_11842[8] = inst_11793);
return statearr_11842;
})();var statearr_11843_11867 = state_11828__$1;(statearr_11843_11867[2] = null);
(statearr_11843_11867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 9))
{var inst_11792 = (state_11828[7]);var inst_11806 = cljs.core.vec.call(null,inst_11792);var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11828__$1,11,out,inst_11806);
} else
{if((state_val_11829 === 10))
{var inst_11812 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11844_11868 = state_11828__$1;(statearr_11844_11868[2] = inst_11812);
(statearr_11844_11868[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 11))
{var inst_11808 = (state_11828[2]);var inst_11809 = (new Array(n));var inst_11792 = inst_11809;var inst_11793 = 0;var state_11828__$1 = (function (){var statearr_11845 = state_11828;(statearr_11845[7] = inst_11792);
(statearr_11845[12] = inst_11808);
(statearr_11845[8] = inst_11793);
return statearr_11845;
})();var statearr_11846_11869 = state_11828__$1;(statearr_11846_11869[2] = null);
(statearr_11846_11869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 12))
{var inst_11792 = (state_11828[7]);var inst_11816 = cljs.core.vec.call(null,inst_11792);var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11828__$1,15,out,inst_11816);
} else
{if((state_val_11829 === 13))
{var state_11828__$1 = state_11828;var statearr_11847_11870 = state_11828__$1;(statearr_11847_11870[2] = null);
(statearr_11847_11870[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 14))
{var inst_11821 = (state_11828[2]);var inst_11822 = cljs.core.async.close_BANG_.call(null,out);var state_11828__$1 = (function (){var statearr_11848 = state_11828;(statearr_11848[13] = inst_11821);
return statearr_11848;
})();var statearr_11849_11871 = state_11828__$1;(statearr_11849_11871[2] = inst_11822);
(statearr_11849_11871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 15))
{var inst_11818 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11850_11872 = state_11828__$1;(statearr_11850_11872[2] = inst_11818);
(statearr_11850_11872[1] = 14);
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
var state_machine__5550__auto____0 = (function (){var statearr_11854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11854[0] = state_machine__5550__auto__);
(statearr_11854[1] = 1);
return statearr_11854;
});
var state_machine__5550__auto____1 = (function (state_11828){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11855){if((e11855 instanceof Object))
{var ex__5553__auto__ = e11855;var statearr_11856_11873 = state_11828;(statearr_11856_11873[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11874 = state_11828;
state_11828 = G__11874;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11828){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11857 = f__5565__auto__.call(null);(statearr_11857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11858);
return statearr_11857;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11987){var state_val_11988 = (state_11987[1]);if((state_val_11988 === 1))
{var inst_11946 = [];var inst_11947 = inst_11946;var inst_11948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11987__$1 = (function (){var statearr_11989 = state_11987;(statearr_11989[7] = inst_11947);
(statearr_11989[8] = inst_11948);
return statearr_11989;
})();var statearr_11990_12018 = state_11987__$1;(statearr_11990_12018[2] = null);
(statearr_11990_12018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 2))
{var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11987__$1,4,ch);
} else
{if((state_val_11988 === 3))
{var inst_11985 = (state_11987[2]);var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11987__$1,inst_11985);
} else
{if((state_val_11988 === 4))
{var inst_11951 = (state_11987[9]);var inst_11951__$1 = (state_11987[2]);var inst_11952 = (inst_11951__$1 == null);var inst_11953 = cljs.core.not.call(null,inst_11952);var state_11987__$1 = (function (){var statearr_11991 = state_11987;(statearr_11991[9] = inst_11951__$1);
return statearr_11991;
})();if(inst_11953)
{var statearr_11992_12019 = state_11987__$1;(statearr_11992_12019[1] = 5);
} else
{var statearr_11993_12020 = state_11987__$1;(statearr_11993_12020[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 5))
{var inst_11948 = (state_11987[8]);var inst_11955 = (state_11987[10]);var inst_11951 = (state_11987[9]);var inst_11955__$1 = f.call(null,inst_11951);var inst_11956 = cljs.core._EQ_.call(null,inst_11955__$1,inst_11948);var inst_11957 = cljs.core.keyword_identical_QMARK_.call(null,inst_11948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11958 = (inst_11956) || (inst_11957);var state_11987__$1 = (function (){var statearr_11994 = state_11987;(statearr_11994[10] = inst_11955__$1);
return statearr_11994;
})();if(cljs.core.truth_(inst_11958))
{var statearr_11995_12021 = state_11987__$1;(statearr_11995_12021[1] = 8);
} else
{var statearr_11996_12022 = state_11987__$1;(statearr_11996_12022[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 6))
{var inst_11947 = (state_11987[7]);var inst_11972 = inst_11947.length;var inst_11973 = (inst_11972 > 0);var state_11987__$1 = state_11987;if(cljs.core.truth_(inst_11973))
{var statearr_11998_12023 = state_11987__$1;(statearr_11998_12023[1] = 12);
} else
{var statearr_11999_12024 = state_11987__$1;(statearr_11999_12024[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 7))
{var inst_11983 = (state_11987[2]);var state_11987__$1 = state_11987;var statearr_12000_12025 = state_11987__$1;(statearr_12000_12025[2] = inst_11983);
(statearr_12000_12025[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 8))
{var inst_11947 = (state_11987[7]);var inst_11955 = (state_11987[10]);var inst_11951 = (state_11987[9]);var inst_11960 = inst_11947.push(inst_11951);var tmp11997 = inst_11947;var inst_11947__$1 = tmp11997;var inst_11948 = inst_11955;var state_11987__$1 = (function (){var statearr_12001 = state_11987;(statearr_12001[7] = inst_11947__$1);
(statearr_12001[8] = inst_11948);
(statearr_12001[11] = inst_11960);
return statearr_12001;
})();var statearr_12002_12026 = state_11987__$1;(statearr_12002_12026[2] = null);
(statearr_12002_12026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 9))
{var inst_11947 = (state_11987[7]);var inst_11963 = cljs.core.vec.call(null,inst_11947);var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11987__$1,11,out,inst_11963);
} else
{if((state_val_11988 === 10))
{var inst_11970 = (state_11987[2]);var state_11987__$1 = state_11987;var statearr_12003_12027 = state_11987__$1;(statearr_12003_12027[2] = inst_11970);
(statearr_12003_12027[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 11))
{var inst_11955 = (state_11987[10]);var inst_11951 = (state_11987[9]);var inst_11965 = (state_11987[2]);var inst_11966 = [];var inst_11967 = inst_11966.push(inst_11951);var inst_11947 = inst_11966;var inst_11948 = inst_11955;var state_11987__$1 = (function (){var statearr_12004 = state_11987;(statearr_12004[7] = inst_11947);
(statearr_12004[8] = inst_11948);
(statearr_12004[12] = inst_11965);
(statearr_12004[13] = inst_11967);
return statearr_12004;
})();var statearr_12005_12028 = state_11987__$1;(statearr_12005_12028[2] = null);
(statearr_12005_12028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 12))
{var inst_11947 = (state_11987[7]);var inst_11975 = cljs.core.vec.call(null,inst_11947);var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11987__$1,15,out,inst_11975);
} else
{if((state_val_11988 === 13))
{var state_11987__$1 = state_11987;var statearr_12006_12029 = state_11987__$1;(statearr_12006_12029[2] = null);
(statearr_12006_12029[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 14))
{var inst_11980 = (state_11987[2]);var inst_11981 = cljs.core.async.close_BANG_.call(null,out);var state_11987__$1 = (function (){var statearr_12007 = state_11987;(statearr_12007[14] = inst_11980);
return statearr_12007;
})();var statearr_12008_12030 = state_11987__$1;(statearr_12008_12030[2] = inst_11981);
(statearr_12008_12030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11988 === 15))
{var inst_11977 = (state_11987[2]);var state_11987__$1 = state_11987;var statearr_12009_12031 = state_11987__$1;(statearr_12009_12031[2] = inst_11977);
(statearr_12009_12031[1] = 14);
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
var state_machine__5550__auto____0 = (function (){var statearr_12013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12013[0] = state_machine__5550__auto__);
(statearr_12013[1] = 1);
return statearr_12013;
});
var state_machine__5550__auto____1 = (function (state_11987){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12014){if((e12014 instanceof Object))
{var ex__5553__auto__ = e12014;var statearr_12015_12032 = state_11987;(statearr_12015_12032[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12033 = state_11987;
state_11987 = G__12033;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11987){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12016 = f__5565__auto__.call(null);(statearr_12016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12017);
return statearr_12016;
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
