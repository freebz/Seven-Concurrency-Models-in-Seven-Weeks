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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9547 = (function (f,fn_handler,meta9548){
this.f = f;
this.fn_handler = fn_handler;
this.meta9548 = meta9548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9547.cljs$lang$type = true;
cljs.core.async.t9547.cljs$lang$ctorStr = "cljs.core.async/t9547";
cljs.core.async.t9547.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9547");
});
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9549){var self__ = this;
var _9549__$1 = this;return self__.meta9548;
});
cljs.core.async.t9547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9549,meta9548__$1){var self__ = this;
var _9549__$1 = this;return (new cljs.core.async.t9547(self__.f,self__.fn_handler,meta9548__$1));
});
cljs.core.async.__GT_t9547 = (function __GT_t9547(f__$1,fn_handler__$1,meta9548){return (new cljs.core.async.t9547(f__$1,fn_handler__$1,meta9548));
});
}
return (new cljs.core.async.t9547(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9551 = buff;if(G__9551)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9551.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9551.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9551);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9551);
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
{var val_9552 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9552);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9552);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9553 = n;var x_9554 = 0;while(true){
if((x_9554 < n__4291__auto___9553))
{(a[x_9554] = 0);
{
var G__9555 = (x_9554 + 1);
x_9554 = G__9555;
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
var G__9556 = (i + 1);
i = G__9556;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9560 = (function (flag,alt_flag,meta9561){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9561 = meta9561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9560.cljs$lang$type = true;
cljs.core.async.t9560.cljs$lang$ctorStr = "cljs.core.async/t9560";
cljs.core.async.t9560.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9560");
});
cljs.core.async.t9560.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9562){var self__ = this;
var _9562__$1 = this;return self__.meta9561;
});
cljs.core.async.t9560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9562,meta9561__$1){var self__ = this;
var _9562__$1 = this;return (new cljs.core.async.t9560(self__.flag,self__.alt_flag,meta9561__$1));
});
cljs.core.async.__GT_t9560 = (function __GT_t9560(flag__$1,alt_flag__$1,meta9561){return (new cljs.core.async.t9560(flag__$1,alt_flag__$1,meta9561));
});
}
return (new cljs.core.async.t9560(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9566 = (function (cb,flag,alt_handler,meta9567){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9567 = meta9567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9566.cljs$lang$type = true;
cljs.core.async.t9566.cljs$lang$ctorStr = "cljs.core.async/t9566";
cljs.core.async.t9566.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9566");
});
cljs.core.async.t9566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9568){var self__ = this;
var _9568__$1 = this;return self__.meta9567;
});
cljs.core.async.t9566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9568,meta9567__$1){var self__ = this;
var _9568__$1 = this;return (new cljs.core.async.t9566(self__.cb,self__.flag,self__.alt_handler,meta9567__$1));
});
cljs.core.async.__GT_t9566 = (function __GT_t9566(cb__$1,flag__$1,alt_handler__$1,meta9567){return (new cljs.core.async.t9566(cb__$1,flag__$1,alt_handler__$1,meta9567));
});
}
return (new cljs.core.async.t9566(cb,flag,alt_handler,null));
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
return (function (p1__9569_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9569_SHARP_,port], null));
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
var G__9570 = (i + 1);
i = G__9570;
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
var alts_BANG___delegate = function (ports,p__9571){var map__9573 = p__9571;var map__9573__$1 = ((cljs.core.seq_QMARK_.call(null,map__9573))?cljs.core.apply.call(null,cljs.core.hash_map,map__9573):map__9573);var opts = map__9573__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9571 = null;if (arguments.length > 1) {
  p__9571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9571);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9574){
var ports = cljs.core.first(arglist__9574);
var p__9571 = cljs.core.rest(arglist__9574);
return alts_BANG___delegate(ports,p__9571);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9582 = (function (ch,f,map_LT_,meta9583){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9583 = meta9583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9582.cljs$lang$type = true;
cljs.core.async.t9582.cljs$lang$ctorStr = "cljs.core.async/t9582";
cljs.core.async.t9582.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9582");
});
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9585 = (function (fn1,_,meta9583,ch,f,map_LT_,meta9586){
this.fn1 = fn1;
this._ = _;
this.meta9583 = meta9583;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9586 = meta9586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9585.cljs$lang$type = true;
cljs.core.async.t9585.cljs$lang$ctorStr = "cljs.core.async/t9585";
cljs.core.async.t9585.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9585");
});
cljs.core.async.t9585.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9585.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9575_SHARP_){return f1.call(null,(((p1__9575_SHARP_ == null))?null:self__.f.call(null,p1__9575_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9587){var self__ = this;
var _9587__$1 = this;return self__.meta9586;
});
cljs.core.async.t9585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9587,meta9586__$1){var self__ = this;
var _9587__$1 = this;return (new cljs.core.async.t9585(self__.fn1,self__._,self__.meta9583,self__.ch,self__.f,self__.map_LT_,meta9586__$1));
});
cljs.core.async.__GT_t9585 = (function __GT_t9585(fn1__$1,___$2,meta9583__$1,ch__$2,f__$2,map_LT___$2,meta9586){return (new cljs.core.async.t9585(fn1__$1,___$2,meta9583__$1,ch__$2,f__$2,map_LT___$2,meta9586));
});
}
return (new cljs.core.async.t9585(fn1,___$1,self__.meta9583,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9584){var self__ = this;
var _9584__$1 = this;return self__.meta9583;
});
cljs.core.async.t9582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9584,meta9583__$1){var self__ = this;
var _9584__$1 = this;return (new cljs.core.async.t9582(self__.ch,self__.f,self__.map_LT_,meta9583__$1));
});
cljs.core.async.__GT_t9582 = (function __GT_t9582(ch__$1,f__$1,map_LT___$1,meta9583){return (new cljs.core.async.t9582(ch__$1,f__$1,map_LT___$1,meta9583));
});
}
return (new cljs.core.async.t9582(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9591 = (function (ch,f,map_GT_,meta9592){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9592 = meta9592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9591.cljs$lang$type = true;
cljs.core.async.t9591.cljs$lang$ctorStr = "cljs.core.async/t9591";
cljs.core.async.t9591.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9591");
});
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9593){var self__ = this;
var _9593__$1 = this;return self__.meta9592;
});
cljs.core.async.t9591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9593,meta9592__$1){var self__ = this;
var _9593__$1 = this;return (new cljs.core.async.t9591(self__.ch,self__.f,self__.map_GT_,meta9592__$1));
});
cljs.core.async.__GT_t9591 = (function __GT_t9591(ch__$1,f__$1,map_GT___$1,meta9592){return (new cljs.core.async.t9591(ch__$1,f__$1,map_GT___$1,meta9592));
});
}
return (new cljs.core.async.t9591(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9597 = (function (ch,p,filter_GT_,meta9598){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9598 = meta9598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9597.cljs$lang$type = true;
cljs.core.async.t9597.cljs$lang$ctorStr = "cljs.core.async/t9597";
cljs.core.async.t9597.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9597");
});
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9599){var self__ = this;
var _9599__$1 = this;return self__.meta9598;
});
cljs.core.async.t9597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9599,meta9598__$1){var self__ = this;
var _9599__$1 = this;return (new cljs.core.async.t9597(self__.ch,self__.p,self__.filter_GT_,meta9598__$1));
});
cljs.core.async.__GT_t9597 = (function __GT_t9597(ch__$1,p__$1,filter_GT___$1,meta9598){return (new cljs.core.async.t9597(ch__$1,p__$1,filter_GT___$1,meta9598));
});
}
return (new cljs.core.async.t9597(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___9682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9661){var state_val_9662 = (state_9661[1]);if((state_val_9662 === 1))
{var state_9661__$1 = state_9661;var statearr_9663_9683 = state_9661__$1;(statearr_9663_9683[2] = null);
(statearr_9663_9683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 2))
{var state_9661__$1 = state_9661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9661__$1,4,ch);
} else
{if((state_val_9662 === 3))
{var inst_9659 = (state_9661[2]);var state_9661__$1 = state_9661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9661__$1,inst_9659);
} else
{if((state_val_9662 === 4))
{var inst_9643 = (state_9661[7]);var inst_9643__$1 = (state_9661[2]);var inst_9644 = (inst_9643__$1 == null);var state_9661__$1 = (function (){var statearr_9664 = state_9661;(statearr_9664[7] = inst_9643__$1);
return statearr_9664;
})();if(cljs.core.truth_(inst_9644))
{var statearr_9665_9684 = state_9661__$1;(statearr_9665_9684[1] = 5);
} else
{var statearr_9666_9685 = state_9661__$1;(statearr_9666_9685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 5))
{var inst_9646 = cljs.core.async.close_BANG_.call(null,out);var state_9661__$1 = state_9661;var statearr_9667_9686 = state_9661__$1;(statearr_9667_9686[2] = inst_9646);
(statearr_9667_9686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 6))
{var inst_9643 = (state_9661[7]);var inst_9648 = p.call(null,inst_9643);var state_9661__$1 = state_9661;if(cljs.core.truth_(inst_9648))
{var statearr_9668_9687 = state_9661__$1;(statearr_9668_9687[1] = 8);
} else
{var statearr_9669_9688 = state_9661__$1;(statearr_9669_9688[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 7))
{var inst_9657 = (state_9661[2]);var state_9661__$1 = state_9661;var statearr_9670_9689 = state_9661__$1;(statearr_9670_9689[2] = inst_9657);
(statearr_9670_9689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 8))
{var inst_9643 = (state_9661[7]);var state_9661__$1 = state_9661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9661__$1,11,out,inst_9643);
} else
{if((state_val_9662 === 9))
{var state_9661__$1 = state_9661;var statearr_9671_9690 = state_9661__$1;(statearr_9671_9690[2] = null);
(statearr_9671_9690[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 10))
{var inst_9654 = (state_9661[2]);var state_9661__$1 = (function (){var statearr_9672 = state_9661;(statearr_9672[8] = inst_9654);
return statearr_9672;
})();var statearr_9673_9691 = state_9661__$1;(statearr_9673_9691[2] = null);
(statearr_9673_9691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9662 === 11))
{var inst_9651 = (state_9661[2]);var state_9661__$1 = state_9661;var statearr_9674_9692 = state_9661__$1;(statearr_9674_9692[2] = inst_9651);
(statearr_9674_9692[1] = 10);
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
var state_machine__5550__auto____0 = (function (){var statearr_9678 = [null,null,null,null,null,null,null,null,null];(statearr_9678[0] = state_machine__5550__auto__);
(statearr_9678[1] = 1);
return statearr_9678;
});
var state_machine__5550__auto____1 = (function (state_9661){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9661);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9679){if((e9679 instanceof Object))
{var ex__5553__auto__ = e9679;var statearr_9680_9693 = state_9661;(statearr_9680_9693[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9661);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9694 = state_9661;
state_9661 = G__9694;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9661){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9681 = f__5565__auto__.call(null);(statearr_9681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___9682);
return statearr_9681;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9846){var state_val_9847 = (state_9846[1]);if((state_val_9847 === 1))
{var state_9846__$1 = state_9846;var statearr_9848_9885 = state_9846__$1;(statearr_9848_9885[2] = null);
(statearr_9848_9885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 2))
{var state_9846__$1 = state_9846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9846__$1,4,in$);
} else
{if((state_val_9847 === 3))
{var inst_9844 = (state_9846[2]);var state_9846__$1 = state_9846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9846__$1,inst_9844);
} else
{if((state_val_9847 === 4))
{var inst_9792 = (state_9846[7]);var inst_9792__$1 = (state_9846[2]);var inst_9793 = (inst_9792__$1 == null);var state_9846__$1 = (function (){var statearr_9849 = state_9846;(statearr_9849[7] = inst_9792__$1);
return statearr_9849;
})();if(cljs.core.truth_(inst_9793))
{var statearr_9850_9886 = state_9846__$1;(statearr_9850_9886[1] = 5);
} else
{var statearr_9851_9887 = state_9846__$1;(statearr_9851_9887[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 5))
{var inst_9795 = cljs.core.async.close_BANG_.call(null,out);var state_9846__$1 = state_9846;var statearr_9852_9888 = state_9846__$1;(statearr_9852_9888[2] = inst_9795);
(statearr_9852_9888[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 6))
{var inst_9792 = (state_9846[7]);var inst_9797 = f.call(null,inst_9792);var inst_9802 = cljs.core.seq.call(null,inst_9797);var inst_9803 = inst_9802;var inst_9804 = null;var inst_9805 = 0;var inst_9806 = 0;var state_9846__$1 = (function (){var statearr_9853 = state_9846;(statearr_9853[8] = inst_9804);
(statearr_9853[9] = inst_9805);
(statearr_9853[10] = inst_9806);
(statearr_9853[11] = inst_9803);
return statearr_9853;
})();var statearr_9854_9889 = state_9846__$1;(statearr_9854_9889[2] = null);
(statearr_9854_9889[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 7))
{var inst_9842 = (state_9846[2]);var state_9846__$1 = state_9846;var statearr_9855_9890 = state_9846__$1;(statearr_9855_9890[2] = inst_9842);
(statearr_9855_9890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 8))
{var inst_9805 = (state_9846[9]);var inst_9806 = (state_9846[10]);var inst_9808 = (inst_9806 < inst_9805);var inst_9809 = inst_9808;var state_9846__$1 = state_9846;if(cljs.core.truth_(inst_9809))
{var statearr_9856_9891 = state_9846__$1;(statearr_9856_9891[1] = 10);
} else
{var statearr_9857_9892 = state_9846__$1;(statearr_9857_9892[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 9))
{var inst_9839 = (state_9846[2]);var state_9846__$1 = (function (){var statearr_9858 = state_9846;(statearr_9858[12] = inst_9839);
return statearr_9858;
})();var statearr_9859_9893 = state_9846__$1;(statearr_9859_9893[2] = null);
(statearr_9859_9893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 10))
{var inst_9804 = (state_9846[8]);var inst_9806 = (state_9846[10]);var inst_9811 = cljs.core._nth.call(null,inst_9804,inst_9806);var state_9846__$1 = state_9846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9846__$1,13,out,inst_9811);
} else
{if((state_val_9847 === 11))
{var inst_9817 = (state_9846[13]);var inst_9803 = (state_9846[11]);var inst_9817__$1 = cljs.core.seq.call(null,inst_9803);var state_9846__$1 = (function (){var statearr_9863 = state_9846;(statearr_9863[13] = inst_9817__$1);
return statearr_9863;
})();if(inst_9817__$1)
{var statearr_9864_9894 = state_9846__$1;(statearr_9864_9894[1] = 14);
} else
{var statearr_9865_9895 = state_9846__$1;(statearr_9865_9895[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 12))
{var inst_9837 = (state_9846[2]);var state_9846__$1 = state_9846;var statearr_9866_9896 = state_9846__$1;(statearr_9866_9896[2] = inst_9837);
(statearr_9866_9896[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 13))
{var inst_9804 = (state_9846[8]);var inst_9805 = (state_9846[9]);var inst_9806 = (state_9846[10]);var inst_9803 = (state_9846[11]);var inst_9813 = (state_9846[2]);var inst_9814 = (inst_9806 + 1);var tmp9860 = inst_9804;var tmp9861 = inst_9805;var tmp9862 = inst_9803;var inst_9803__$1 = tmp9862;var inst_9804__$1 = tmp9860;var inst_9805__$1 = tmp9861;var inst_9806__$1 = inst_9814;var state_9846__$1 = (function (){var statearr_9867 = state_9846;(statearr_9867[8] = inst_9804__$1);
(statearr_9867[9] = inst_9805__$1);
(statearr_9867[14] = inst_9813);
(statearr_9867[10] = inst_9806__$1);
(statearr_9867[11] = inst_9803__$1);
return statearr_9867;
})();var statearr_9868_9897 = state_9846__$1;(statearr_9868_9897[2] = null);
(statearr_9868_9897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 14))
{var inst_9817 = (state_9846[13]);var inst_9819 = cljs.core.chunked_seq_QMARK_.call(null,inst_9817);var state_9846__$1 = state_9846;if(inst_9819)
{var statearr_9869_9898 = state_9846__$1;(statearr_9869_9898[1] = 17);
} else
{var statearr_9870_9899 = state_9846__$1;(statearr_9870_9899[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 15))
{var state_9846__$1 = state_9846;var statearr_9871_9900 = state_9846__$1;(statearr_9871_9900[2] = null);
(statearr_9871_9900[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 16))
{var inst_9835 = (state_9846[2]);var state_9846__$1 = state_9846;var statearr_9872_9901 = state_9846__$1;(statearr_9872_9901[2] = inst_9835);
(statearr_9872_9901[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 17))
{var inst_9817 = (state_9846[13]);var inst_9821 = cljs.core.chunk_first.call(null,inst_9817);var inst_9822 = cljs.core.chunk_rest.call(null,inst_9817);var inst_9823 = cljs.core.count.call(null,inst_9821);var inst_9803 = inst_9822;var inst_9804 = inst_9821;var inst_9805 = inst_9823;var inst_9806 = 0;var state_9846__$1 = (function (){var statearr_9873 = state_9846;(statearr_9873[8] = inst_9804);
(statearr_9873[9] = inst_9805);
(statearr_9873[10] = inst_9806);
(statearr_9873[11] = inst_9803);
return statearr_9873;
})();var statearr_9874_9902 = state_9846__$1;(statearr_9874_9902[2] = null);
(statearr_9874_9902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 18))
{var inst_9817 = (state_9846[13]);var inst_9826 = cljs.core.first.call(null,inst_9817);var state_9846__$1 = state_9846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9846__$1,20,out,inst_9826);
} else
{if((state_val_9847 === 19))
{var inst_9832 = (state_9846[2]);var state_9846__$1 = state_9846;var statearr_9875_9903 = state_9846__$1;(statearr_9875_9903[2] = inst_9832);
(statearr_9875_9903[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9847 === 20))
{var inst_9817 = (state_9846[13]);var inst_9828 = (state_9846[2]);var inst_9829 = cljs.core.next.call(null,inst_9817);var inst_9803 = inst_9829;var inst_9804 = null;var inst_9805 = 0;var inst_9806 = 0;var state_9846__$1 = (function (){var statearr_9876 = state_9846;(statearr_9876[15] = inst_9828);
(statearr_9876[8] = inst_9804);
(statearr_9876[9] = inst_9805);
(statearr_9876[10] = inst_9806);
(statearr_9876[11] = inst_9803);
return statearr_9876;
})();var statearr_9877_9904 = state_9846__$1;(statearr_9877_9904[2] = null);
(statearr_9877_9904[1] = 8);
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
var state_machine__5550__auto____0 = (function (){var statearr_9881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9881[0] = state_machine__5550__auto__);
(statearr_9881[1] = 1);
return statearr_9881;
});
var state_machine__5550__auto____1 = (function (state_9846){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9882){if((e9882 instanceof Object))
{var ex__5553__auto__ = e9882;var statearr_9883_9905 = state_9846;(statearr_9883_9905[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9906 = state_9846;
state_9846 = G__9906;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9846){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9884 = f__5565__auto__.call(null);(statearr_9884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_9884;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5564__auto___9987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_9966){var state_val_9967 = (state_9966[1]);if((state_val_9967 === 1))
{var state_9966__$1 = state_9966;var statearr_9968_9988 = state_9966__$1;(statearr_9968_9988[2] = null);
(statearr_9968_9988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 2))
{var state_9966__$1 = state_9966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9966__$1,4,from);
} else
{if((state_val_9967 === 3))
{var inst_9964 = (state_9966[2]);var state_9966__$1 = state_9966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9966__$1,inst_9964);
} else
{if((state_val_9967 === 4))
{var inst_9949 = (state_9966[7]);var inst_9949__$1 = (state_9966[2]);var inst_9950 = (inst_9949__$1 == null);var state_9966__$1 = (function (){var statearr_9969 = state_9966;(statearr_9969[7] = inst_9949__$1);
return statearr_9969;
})();if(cljs.core.truth_(inst_9950))
{var statearr_9970_9989 = state_9966__$1;(statearr_9970_9989[1] = 5);
} else
{var statearr_9971_9990 = state_9966__$1;(statearr_9971_9990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 5))
{var state_9966__$1 = state_9966;if(cljs.core.truth_(close_QMARK_))
{var statearr_9972_9991 = state_9966__$1;(statearr_9972_9991[1] = 8);
} else
{var statearr_9973_9992 = state_9966__$1;(statearr_9973_9992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 6))
{var inst_9949 = (state_9966[7]);var state_9966__$1 = state_9966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9966__$1,11,to,inst_9949);
} else
{if((state_val_9967 === 7))
{var inst_9962 = (state_9966[2]);var state_9966__$1 = state_9966;var statearr_9974_9993 = state_9966__$1;(statearr_9974_9993[2] = inst_9962);
(statearr_9974_9993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 8))
{var inst_9953 = cljs.core.async.close_BANG_.call(null,to);var state_9966__$1 = state_9966;var statearr_9975_9994 = state_9966__$1;(statearr_9975_9994[2] = inst_9953);
(statearr_9975_9994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 9))
{var state_9966__$1 = state_9966;var statearr_9976_9995 = state_9966__$1;(statearr_9976_9995[2] = null);
(statearr_9976_9995[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 10))
{var inst_9956 = (state_9966[2]);var state_9966__$1 = state_9966;var statearr_9977_9996 = state_9966__$1;(statearr_9977_9996[2] = inst_9956);
(statearr_9977_9996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9967 === 11))
{var inst_9959 = (state_9966[2]);var state_9966__$1 = (function (){var statearr_9978 = state_9966;(statearr_9978[8] = inst_9959);
return statearr_9978;
})();var statearr_9979_9997 = state_9966__$1;(statearr_9979_9997[2] = null);
(statearr_9979_9997[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_9983 = [null,null,null,null,null,null,null,null,null];(statearr_9983[0] = state_machine__5550__auto__);
(statearr_9983[1] = 1);
return statearr_9983;
});
var state_machine__5550__auto____1 = (function (state_9966){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_9966);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e9984){if((e9984 instanceof Object))
{var ex__5553__auto__ = e9984;var statearr_9985_9998 = state_9966;(statearr_9985_9998[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9999 = state_9966;
state_9966 = G__9999;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_9966){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_9966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_9986 = f__5565__auto__.call(null);(statearr_9986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___9987);
return statearr_9986;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5564__auto___10086 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10064){var state_val_10065 = (state_10064[1]);if((state_val_10065 === 1))
{var state_10064__$1 = state_10064;var statearr_10066_10087 = state_10064__$1;(statearr_10066_10087[2] = null);
(statearr_10066_10087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 2))
{var state_10064__$1 = state_10064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10064__$1,4,ch);
} else
{if((state_val_10065 === 3))
{var inst_10062 = (state_10064[2]);var state_10064__$1 = state_10064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10064__$1,inst_10062);
} else
{if((state_val_10065 === 4))
{var inst_10045 = (state_10064[7]);var inst_10045__$1 = (state_10064[2]);var inst_10046 = (inst_10045__$1 == null);var state_10064__$1 = (function (){var statearr_10067 = state_10064;(statearr_10067[7] = inst_10045__$1);
return statearr_10067;
})();if(cljs.core.truth_(inst_10046))
{var statearr_10068_10088 = state_10064__$1;(statearr_10068_10088[1] = 5);
} else
{var statearr_10069_10089 = state_10064__$1;(statearr_10069_10089[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 5))
{var inst_10048 = cljs.core.async.close_BANG_.call(null,tc);var inst_10049 = cljs.core.async.close_BANG_.call(null,fc);var state_10064__$1 = (function (){var statearr_10070 = state_10064;(statearr_10070[8] = inst_10048);
return statearr_10070;
})();var statearr_10071_10090 = state_10064__$1;(statearr_10071_10090[2] = inst_10049);
(statearr_10071_10090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 6))
{var inst_10045 = (state_10064[7]);var inst_10051 = p.call(null,inst_10045);var state_10064__$1 = state_10064;if(cljs.core.truth_(inst_10051))
{var statearr_10072_10091 = state_10064__$1;(statearr_10072_10091[1] = 9);
} else
{var statearr_10073_10092 = state_10064__$1;(statearr_10073_10092[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 7))
{var inst_10060 = (state_10064[2]);var state_10064__$1 = state_10064;var statearr_10074_10093 = state_10064__$1;(statearr_10074_10093[2] = inst_10060);
(statearr_10074_10093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 8))
{var inst_10057 = (state_10064[2]);var state_10064__$1 = (function (){var statearr_10075 = state_10064;(statearr_10075[9] = inst_10057);
return statearr_10075;
})();var statearr_10076_10094 = state_10064__$1;(statearr_10076_10094[2] = null);
(statearr_10076_10094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 9))
{var state_10064__$1 = state_10064;var statearr_10077_10095 = state_10064__$1;(statearr_10077_10095[2] = tc);
(statearr_10077_10095[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 10))
{var state_10064__$1 = state_10064;var statearr_10078_10096 = state_10064__$1;(statearr_10078_10096[2] = fc);
(statearr_10078_10096[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10065 === 11))
{var inst_10045 = (state_10064[7]);var inst_10055 = (state_10064[2]);var state_10064__$1 = state_10064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10064__$1,8,inst_10055,inst_10045);
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
var state_machine__5550__auto____0 = (function (){var statearr_10082 = [null,null,null,null,null,null,null,null,null,null];(statearr_10082[0] = state_machine__5550__auto__);
(statearr_10082[1] = 1);
return statearr_10082;
});
var state_machine__5550__auto____1 = (function (state_10064){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10064);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10083){if((e10083 instanceof Object))
{var ex__5553__auto__ = e10083;var statearr_10084_10097 = state_10064;(statearr_10084_10097[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10098 = state_10064;
state_10064 = G__10098;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10064){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10085 = f__5565__auto__.call(null);(statearr_10085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10086);
return statearr_10085;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10145){var state_val_10146 = (state_10145[1]);if((state_val_10146 === 7))
{var inst_10141 = (state_10145[2]);var state_10145__$1 = state_10145;var statearr_10147_10163 = state_10145__$1;(statearr_10147_10163[2] = inst_10141);
(statearr_10147_10163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10146 === 6))
{var inst_10134 = (state_10145[7]);var inst_10131 = (state_10145[8]);var inst_10138 = f.call(null,inst_10131,inst_10134);var inst_10131__$1 = inst_10138;var state_10145__$1 = (function (){var statearr_10148 = state_10145;(statearr_10148[8] = inst_10131__$1);
return statearr_10148;
})();var statearr_10149_10164 = state_10145__$1;(statearr_10149_10164[2] = null);
(statearr_10149_10164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10146 === 5))
{var inst_10131 = (state_10145[8]);var state_10145__$1 = state_10145;var statearr_10150_10165 = state_10145__$1;(statearr_10150_10165[2] = inst_10131);
(statearr_10150_10165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10146 === 4))
{var inst_10134 = (state_10145[7]);var inst_10134__$1 = (state_10145[2]);var inst_10135 = (inst_10134__$1 == null);var state_10145__$1 = (function (){var statearr_10151 = state_10145;(statearr_10151[7] = inst_10134__$1);
return statearr_10151;
})();if(cljs.core.truth_(inst_10135))
{var statearr_10152_10166 = state_10145__$1;(statearr_10152_10166[1] = 5);
} else
{var statearr_10153_10167 = state_10145__$1;(statearr_10153_10167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10146 === 3))
{var inst_10143 = (state_10145[2]);var state_10145__$1 = state_10145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10145__$1,inst_10143);
} else
{if((state_val_10146 === 2))
{var state_10145__$1 = state_10145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10145__$1,4,ch);
} else
{if((state_val_10146 === 1))
{var inst_10131 = init;var state_10145__$1 = (function (){var statearr_10154 = state_10145;(statearr_10154[8] = inst_10131);
return statearr_10154;
})();var statearr_10155_10168 = state_10145__$1;(statearr_10155_10168[2] = null);
(statearr_10155_10168[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_10159 = [null,null,null,null,null,null,null,null,null];(statearr_10159[0] = state_machine__5550__auto__);
(statearr_10159[1] = 1);
return statearr_10159;
});
var state_machine__5550__auto____1 = (function (state_10145){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10160){if((e10160 instanceof Object))
{var ex__5553__auto__ = e10160;var statearr_10161_10169 = state_10145;(statearr_10161_10169[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10170 = state_10145;
state_10145 = G__10170;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10145){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10162 = f__5565__auto__.call(null);(statearr_10162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10162;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5564__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10232){var state_val_10233 = (state_10232[1]);if((state_val_10233 === 1))
{var inst_10212 = cljs.core.seq.call(null,coll);var inst_10213 = inst_10212;var state_10232__$1 = (function (){var statearr_10234 = state_10232;(statearr_10234[7] = inst_10213);
return statearr_10234;
})();var statearr_10235_10253 = state_10232__$1;(statearr_10235_10253[2] = null);
(statearr_10235_10253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 2))
{var inst_10213 = (state_10232[7]);var state_10232__$1 = state_10232;if(cljs.core.truth_(inst_10213))
{var statearr_10236_10254 = state_10232__$1;(statearr_10236_10254[1] = 4);
} else
{var statearr_10237_10255 = state_10232__$1;(statearr_10237_10255[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 3))
{var inst_10230 = (state_10232[2]);var state_10232__$1 = state_10232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10232__$1,inst_10230);
} else
{if((state_val_10233 === 4))
{var inst_10213 = (state_10232[7]);var inst_10216 = cljs.core.first.call(null,inst_10213);var state_10232__$1 = state_10232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10232__$1,7,ch,inst_10216);
} else
{if((state_val_10233 === 5))
{var state_10232__$1 = state_10232;if(cljs.core.truth_(close_QMARK_))
{var statearr_10238_10256 = state_10232__$1;(statearr_10238_10256[1] = 8);
} else
{var statearr_10239_10257 = state_10232__$1;(statearr_10239_10257[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 6))
{var inst_10228 = (state_10232[2]);var state_10232__$1 = state_10232;var statearr_10240_10258 = state_10232__$1;(statearr_10240_10258[2] = inst_10228);
(statearr_10240_10258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 7))
{var inst_10213 = (state_10232[7]);var inst_10218 = (state_10232[2]);var inst_10219 = cljs.core.next.call(null,inst_10213);var inst_10213__$1 = inst_10219;var state_10232__$1 = (function (){var statearr_10241 = state_10232;(statearr_10241[8] = inst_10218);
(statearr_10241[7] = inst_10213__$1);
return statearr_10241;
})();var statearr_10242_10259 = state_10232__$1;(statearr_10242_10259[2] = null);
(statearr_10242_10259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 8))
{var inst_10223 = cljs.core.async.close_BANG_.call(null,ch);var state_10232__$1 = state_10232;var statearr_10243_10260 = state_10232__$1;(statearr_10243_10260[2] = inst_10223);
(statearr_10243_10260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 9))
{var state_10232__$1 = state_10232;var statearr_10244_10261 = state_10232__$1;(statearr_10244_10261[2] = null);
(statearr_10244_10261[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 10))
{var inst_10226 = (state_10232[2]);var state_10232__$1 = state_10232;var statearr_10245_10262 = state_10232__$1;(statearr_10245_10262[2] = inst_10226);
(statearr_10245_10262[1] = 6);
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
var state_machine__5550__auto____0 = (function (){var statearr_10249 = [null,null,null,null,null,null,null,null,null];(statearr_10249[0] = state_machine__5550__auto__);
(statearr_10249[1] = 1);
return statearr_10249;
});
var state_machine__5550__auto____1 = (function (state_10232){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10250){if((e10250 instanceof Object))
{var ex__5553__auto__ = e10250;var statearr_10251_10263 = state_10232;(statearr_10251_10263[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10264 = state_10232;
state_10232 = G__10264;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10232){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10252 = f__5565__auto__.call(null);(statearr_10252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto__);
return statearr_10252;
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
cljs.core.async.Mux = (function (){var obj10266 = {};return obj10266;
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
cljs.core.async.Mult = (function (){var obj10268 = {};return obj10268;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10492 = (function (cs,ch,mult,meta10493){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10493 = meta10493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10492.cljs$lang$type = true;
cljs.core.async.t10492.cljs$lang$ctorStr = "cljs.core.async/t10492";
cljs.core.async.t10492.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10492");
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10492.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10494){var self__ = this;
var _10494__$1 = this;return self__.meta10493;
});})(cs))
;
cljs.core.async.t10492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10494,meta10493__$1){var self__ = this;
var _10494__$1 = this;return (new cljs.core.async.t10492(self__.cs,self__.ch,self__.mult,meta10493__$1));
});})(cs))
;
cljs.core.async.__GT_t10492 = ((function (cs){
return (function __GT_t10492(cs__$1,ch__$1,mult__$1,meta10493){return (new cljs.core.async.t10492(cs__$1,ch__$1,mult__$1,meta10493));
});})(cs))
;
}
return (new cljs.core.async.t10492(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5564__auto___10715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10629){var state_val_10630 = (state_10629[1]);if((state_val_10630 === 32))
{var inst_10497 = (state_10629[7]);var inst_10573 = (state_10629[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10629,31,Object,null,30);var inst_10580 = cljs.core.async.put_BANG_.call(null,inst_10573,inst_10497,done);var state_10629__$1 = state_10629;var statearr_10631_10716 = state_10629__$1;(statearr_10631_10716[2] = inst_10580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 1))
{var state_10629__$1 = state_10629;var statearr_10632_10717 = state_10629__$1;(statearr_10632_10717[2] = null);
(statearr_10632_10717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 33))
{var inst_10586 = (state_10629[9]);var inst_10588 = cljs.core.chunked_seq_QMARK_.call(null,inst_10586);var state_10629__$1 = state_10629;if(inst_10588)
{var statearr_10633_10718 = state_10629__$1;(statearr_10633_10718[1] = 36);
} else
{var statearr_10634_10719 = state_10629__$1;(statearr_10634_10719[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 2))
{var state_10629__$1 = state_10629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10629__$1,4,ch);
} else
{if((state_val_10630 === 34))
{var state_10629__$1 = state_10629;var statearr_10635_10720 = state_10629__$1;(statearr_10635_10720[2] = null);
(statearr_10635_10720[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 3))
{var inst_10627 = (state_10629[2]);var state_10629__$1 = state_10629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10629__$1,inst_10627);
} else
{if((state_val_10630 === 35))
{var inst_10611 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10636_10721 = state_10629__$1;(statearr_10636_10721[2] = inst_10611);
(statearr_10636_10721[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 4))
{var inst_10497 = (state_10629[7]);var inst_10497__$1 = (state_10629[2]);var inst_10498 = (inst_10497__$1 == null);var state_10629__$1 = (function (){var statearr_10637 = state_10629;(statearr_10637[7] = inst_10497__$1);
return statearr_10637;
})();if(cljs.core.truth_(inst_10498))
{var statearr_10638_10722 = state_10629__$1;(statearr_10638_10722[1] = 5);
} else
{var statearr_10639_10723 = state_10629__$1;(statearr_10639_10723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 36))
{var inst_10586 = (state_10629[9]);var inst_10590 = cljs.core.chunk_first.call(null,inst_10586);var inst_10591 = cljs.core.chunk_rest.call(null,inst_10586);var inst_10592 = cljs.core.count.call(null,inst_10590);var inst_10565 = inst_10591;var inst_10566 = inst_10590;var inst_10567 = inst_10592;var inst_10568 = 0;var state_10629__$1 = (function (){var statearr_10640 = state_10629;(statearr_10640[10] = inst_10565);
(statearr_10640[11] = inst_10566);
(statearr_10640[12] = inst_10567);
(statearr_10640[13] = inst_10568);
return statearr_10640;
})();var statearr_10641_10724 = state_10629__$1;(statearr_10641_10724[2] = null);
(statearr_10641_10724[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 5))
{var inst_10504 = cljs.core.deref.call(null,cs);var inst_10505 = cljs.core.seq.call(null,inst_10504);var inst_10506 = inst_10505;var inst_10507 = null;var inst_10508 = 0;var inst_10509 = 0;var state_10629__$1 = (function (){var statearr_10642 = state_10629;(statearr_10642[14] = inst_10506);
(statearr_10642[15] = inst_10509);
(statearr_10642[16] = inst_10507);
(statearr_10642[17] = inst_10508);
return statearr_10642;
})();var statearr_10643_10725 = state_10629__$1;(statearr_10643_10725[2] = null);
(statearr_10643_10725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 37))
{var inst_10586 = (state_10629[9]);var inst_10595 = cljs.core.first.call(null,inst_10586);var state_10629__$1 = (function (){var statearr_10644 = state_10629;(statearr_10644[18] = inst_10595);
return statearr_10644;
})();var statearr_10645_10726 = state_10629__$1;(statearr_10645_10726[2] = null);
(statearr_10645_10726[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 6))
{var inst_10557 = (state_10629[19]);var inst_10556 = cljs.core.deref.call(null,cs);var inst_10557__$1 = cljs.core.keys.call(null,inst_10556);var inst_10558 = cljs.core.count.call(null,inst_10557__$1);var inst_10559 = cljs.core.reset_BANG_.call(null,dctr,inst_10558);var inst_10564 = cljs.core.seq.call(null,inst_10557__$1);var inst_10565 = inst_10564;var inst_10566 = null;var inst_10567 = 0;var inst_10568 = 0;var state_10629__$1 = (function (){var statearr_10646 = state_10629;(statearr_10646[10] = inst_10565);
(statearr_10646[11] = inst_10566);
(statearr_10646[12] = inst_10567);
(statearr_10646[13] = inst_10568);
(statearr_10646[19] = inst_10557__$1);
(statearr_10646[20] = inst_10559);
return statearr_10646;
})();var statearr_10647_10727 = state_10629__$1;(statearr_10647_10727[2] = null);
(statearr_10647_10727[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 38))
{var inst_10608 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10648_10728 = state_10629__$1;(statearr_10648_10728[2] = inst_10608);
(statearr_10648_10728[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 7))
{var inst_10625 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10649_10729 = state_10629__$1;(statearr_10649_10729[2] = inst_10625);
(statearr_10649_10729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 39))
{var inst_10586 = (state_10629[9]);var inst_10604 = (state_10629[2]);var inst_10605 = cljs.core.next.call(null,inst_10586);var inst_10565 = inst_10605;var inst_10566 = null;var inst_10567 = 0;var inst_10568 = 0;var state_10629__$1 = (function (){var statearr_10650 = state_10629;(statearr_10650[10] = inst_10565);
(statearr_10650[11] = inst_10566);
(statearr_10650[12] = inst_10567);
(statearr_10650[13] = inst_10568);
(statearr_10650[21] = inst_10604);
return statearr_10650;
})();var statearr_10651_10730 = state_10629__$1;(statearr_10651_10730[2] = null);
(statearr_10651_10730[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 8))
{var inst_10509 = (state_10629[15]);var inst_10508 = (state_10629[17]);var inst_10511 = (inst_10509 < inst_10508);var inst_10512 = inst_10511;var state_10629__$1 = state_10629;if(cljs.core.truth_(inst_10512))
{var statearr_10652_10731 = state_10629__$1;(statearr_10652_10731[1] = 10);
} else
{var statearr_10653_10732 = state_10629__$1;(statearr_10653_10732[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 40))
{var inst_10595 = (state_10629[18]);var inst_10596 = (state_10629[2]);var inst_10597 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10598 = cljs.core.async.untap_STAR_.call(null,m,inst_10595);var state_10629__$1 = (function (){var statearr_10654 = state_10629;(statearr_10654[22] = inst_10597);
(statearr_10654[23] = inst_10596);
return statearr_10654;
})();var statearr_10655_10733 = state_10629__$1;(statearr_10655_10733[2] = inst_10598);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 9))
{var inst_10554 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10656_10734 = state_10629__$1;(statearr_10656_10734[2] = inst_10554);
(statearr_10656_10734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 41))
{var inst_10497 = (state_10629[7]);var inst_10595 = (state_10629[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10629,40,Object,null,39);var inst_10602 = cljs.core.async.put_BANG_.call(null,inst_10595,inst_10497,done);var state_10629__$1 = state_10629;var statearr_10657_10735 = state_10629__$1;(statearr_10657_10735[2] = inst_10602);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 10))
{var inst_10509 = (state_10629[15]);var inst_10507 = (state_10629[16]);var inst_10515 = cljs.core._nth.call(null,inst_10507,inst_10509);var inst_10516 = cljs.core.nth.call(null,inst_10515,0,null);var inst_10517 = cljs.core.nth.call(null,inst_10515,1,null);var state_10629__$1 = (function (){var statearr_10658 = state_10629;(statearr_10658[24] = inst_10516);
return statearr_10658;
})();if(cljs.core.truth_(inst_10517))
{var statearr_10659_10736 = state_10629__$1;(statearr_10659_10736[1] = 13);
} else
{var statearr_10660_10737 = state_10629__$1;(statearr_10660_10737[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 42))
{var state_10629__$1 = state_10629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10629__$1,45,dchan);
} else
{if((state_val_10630 === 11))
{var inst_10506 = (state_10629[14]);var inst_10526 = (state_10629[25]);var inst_10526__$1 = cljs.core.seq.call(null,inst_10506);var state_10629__$1 = (function (){var statearr_10661 = state_10629;(statearr_10661[25] = inst_10526__$1);
return statearr_10661;
})();if(inst_10526__$1)
{var statearr_10662_10738 = state_10629__$1;(statearr_10662_10738[1] = 16);
} else
{var statearr_10663_10739 = state_10629__$1;(statearr_10663_10739[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 43))
{var state_10629__$1 = state_10629;var statearr_10664_10740 = state_10629__$1;(statearr_10664_10740[2] = null);
(statearr_10664_10740[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 12))
{var inst_10552 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10665_10741 = state_10629__$1;(statearr_10665_10741[2] = inst_10552);
(statearr_10665_10741[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 44))
{var inst_10622 = (state_10629[2]);var state_10629__$1 = (function (){var statearr_10666 = state_10629;(statearr_10666[26] = inst_10622);
return statearr_10666;
})();var statearr_10667_10742 = state_10629__$1;(statearr_10667_10742[2] = null);
(statearr_10667_10742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 13))
{var inst_10516 = (state_10629[24]);var inst_10519 = cljs.core.async.close_BANG_.call(null,inst_10516);var state_10629__$1 = state_10629;var statearr_10668_10743 = state_10629__$1;(statearr_10668_10743[2] = inst_10519);
(statearr_10668_10743[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 45))
{var inst_10619 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10672_10744 = state_10629__$1;(statearr_10672_10744[2] = inst_10619);
(statearr_10672_10744[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 14))
{var state_10629__$1 = state_10629;var statearr_10673_10745 = state_10629__$1;(statearr_10673_10745[2] = null);
(statearr_10673_10745[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 15))
{var inst_10506 = (state_10629[14]);var inst_10509 = (state_10629[15]);var inst_10507 = (state_10629[16]);var inst_10508 = (state_10629[17]);var inst_10522 = (state_10629[2]);var inst_10523 = (inst_10509 + 1);var tmp10669 = inst_10506;var tmp10670 = inst_10507;var tmp10671 = inst_10508;var inst_10506__$1 = tmp10669;var inst_10507__$1 = tmp10670;var inst_10508__$1 = tmp10671;var inst_10509__$1 = inst_10523;var state_10629__$1 = (function (){var statearr_10674 = state_10629;(statearr_10674[27] = inst_10522);
(statearr_10674[14] = inst_10506__$1);
(statearr_10674[15] = inst_10509__$1);
(statearr_10674[16] = inst_10507__$1);
(statearr_10674[17] = inst_10508__$1);
return statearr_10674;
})();var statearr_10675_10746 = state_10629__$1;(statearr_10675_10746[2] = null);
(statearr_10675_10746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 16))
{var inst_10526 = (state_10629[25]);var inst_10528 = cljs.core.chunked_seq_QMARK_.call(null,inst_10526);var state_10629__$1 = state_10629;if(inst_10528)
{var statearr_10676_10747 = state_10629__$1;(statearr_10676_10747[1] = 19);
} else
{var statearr_10677_10748 = state_10629__$1;(statearr_10677_10748[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 17))
{var state_10629__$1 = state_10629;var statearr_10678_10749 = state_10629__$1;(statearr_10678_10749[2] = null);
(statearr_10678_10749[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 18))
{var inst_10550 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10679_10750 = state_10629__$1;(statearr_10679_10750[2] = inst_10550);
(statearr_10679_10750[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 19))
{var inst_10526 = (state_10629[25]);var inst_10530 = cljs.core.chunk_first.call(null,inst_10526);var inst_10531 = cljs.core.chunk_rest.call(null,inst_10526);var inst_10532 = cljs.core.count.call(null,inst_10530);var inst_10506 = inst_10531;var inst_10507 = inst_10530;var inst_10508 = inst_10532;var inst_10509 = 0;var state_10629__$1 = (function (){var statearr_10680 = state_10629;(statearr_10680[14] = inst_10506);
(statearr_10680[15] = inst_10509);
(statearr_10680[16] = inst_10507);
(statearr_10680[17] = inst_10508);
return statearr_10680;
})();var statearr_10681_10751 = state_10629__$1;(statearr_10681_10751[2] = null);
(statearr_10681_10751[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 20))
{var inst_10526 = (state_10629[25]);var inst_10536 = cljs.core.first.call(null,inst_10526);var inst_10537 = cljs.core.nth.call(null,inst_10536,0,null);var inst_10538 = cljs.core.nth.call(null,inst_10536,1,null);var state_10629__$1 = (function (){var statearr_10682 = state_10629;(statearr_10682[28] = inst_10537);
return statearr_10682;
})();if(cljs.core.truth_(inst_10538))
{var statearr_10683_10752 = state_10629__$1;(statearr_10683_10752[1] = 22);
} else
{var statearr_10684_10753 = state_10629__$1;(statearr_10684_10753[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 21))
{var inst_10547 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10685_10754 = state_10629__$1;(statearr_10685_10754[2] = inst_10547);
(statearr_10685_10754[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 22))
{var inst_10537 = (state_10629[28]);var inst_10540 = cljs.core.async.close_BANG_.call(null,inst_10537);var state_10629__$1 = state_10629;var statearr_10686_10755 = state_10629__$1;(statearr_10686_10755[2] = inst_10540);
(statearr_10686_10755[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 23))
{var state_10629__$1 = state_10629;var statearr_10687_10756 = state_10629__$1;(statearr_10687_10756[2] = null);
(statearr_10687_10756[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 24))
{var inst_10526 = (state_10629[25]);var inst_10543 = (state_10629[2]);var inst_10544 = cljs.core.next.call(null,inst_10526);var inst_10506 = inst_10544;var inst_10507 = null;var inst_10508 = 0;var inst_10509 = 0;var state_10629__$1 = (function (){var statearr_10688 = state_10629;(statearr_10688[14] = inst_10506);
(statearr_10688[15] = inst_10509);
(statearr_10688[16] = inst_10507);
(statearr_10688[17] = inst_10508);
(statearr_10688[29] = inst_10543);
return statearr_10688;
})();var statearr_10689_10757 = state_10629__$1;(statearr_10689_10757[2] = null);
(statearr_10689_10757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 25))
{var inst_10567 = (state_10629[12]);var inst_10568 = (state_10629[13]);var inst_10570 = (inst_10568 < inst_10567);var inst_10571 = inst_10570;var state_10629__$1 = state_10629;if(cljs.core.truth_(inst_10571))
{var statearr_10690_10758 = state_10629__$1;(statearr_10690_10758[1] = 27);
} else
{var statearr_10691_10759 = state_10629__$1;(statearr_10691_10759[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 26))
{var inst_10557 = (state_10629[19]);var inst_10615 = (state_10629[2]);var inst_10616 = cljs.core.seq.call(null,inst_10557);var state_10629__$1 = (function (){var statearr_10692 = state_10629;(statearr_10692[30] = inst_10615);
return statearr_10692;
})();if(inst_10616)
{var statearr_10693_10760 = state_10629__$1;(statearr_10693_10760[1] = 42);
} else
{var statearr_10694_10761 = state_10629__$1;(statearr_10694_10761[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 27))
{var inst_10566 = (state_10629[11]);var inst_10568 = (state_10629[13]);var inst_10573 = cljs.core._nth.call(null,inst_10566,inst_10568);var state_10629__$1 = (function (){var statearr_10695 = state_10629;(statearr_10695[8] = inst_10573);
return statearr_10695;
})();var statearr_10696_10762 = state_10629__$1;(statearr_10696_10762[2] = null);
(statearr_10696_10762[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 28))
{var inst_10565 = (state_10629[10]);var inst_10586 = (state_10629[9]);var inst_10586__$1 = cljs.core.seq.call(null,inst_10565);var state_10629__$1 = (function (){var statearr_10700 = state_10629;(statearr_10700[9] = inst_10586__$1);
return statearr_10700;
})();if(inst_10586__$1)
{var statearr_10701_10763 = state_10629__$1;(statearr_10701_10763[1] = 33);
} else
{var statearr_10702_10764 = state_10629__$1;(statearr_10702_10764[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 29))
{var inst_10613 = (state_10629[2]);var state_10629__$1 = state_10629;var statearr_10703_10765 = state_10629__$1;(statearr_10703_10765[2] = inst_10613);
(statearr_10703_10765[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 30))
{var inst_10565 = (state_10629[10]);var inst_10566 = (state_10629[11]);var inst_10567 = (state_10629[12]);var inst_10568 = (state_10629[13]);var inst_10582 = (state_10629[2]);var inst_10583 = (inst_10568 + 1);var tmp10697 = inst_10565;var tmp10698 = inst_10566;var tmp10699 = inst_10567;var inst_10565__$1 = tmp10697;var inst_10566__$1 = tmp10698;var inst_10567__$1 = tmp10699;var inst_10568__$1 = inst_10583;var state_10629__$1 = (function (){var statearr_10704 = state_10629;(statearr_10704[10] = inst_10565__$1);
(statearr_10704[11] = inst_10566__$1);
(statearr_10704[12] = inst_10567__$1);
(statearr_10704[13] = inst_10568__$1);
(statearr_10704[31] = inst_10582);
return statearr_10704;
})();var statearr_10705_10766 = state_10629__$1;(statearr_10705_10766[2] = null);
(statearr_10705_10766[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10630 === 31))
{var inst_10573 = (state_10629[8]);var inst_10574 = (state_10629[2]);var inst_10575 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10576 = cljs.core.async.untap_STAR_.call(null,m,inst_10573);var state_10629__$1 = (function (){var statearr_10706 = state_10629;(statearr_10706[32] = inst_10575);
(statearr_10706[33] = inst_10574);
return statearr_10706;
})();var statearr_10707_10767 = state_10629__$1;(statearr_10707_10767[2] = inst_10576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629__$1);
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
var state_machine__5550__auto____0 = (function (){var statearr_10711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10711[0] = state_machine__5550__auto__);
(statearr_10711[1] = 1);
return statearr_10711;
});
var state_machine__5550__auto____1 = (function (state_10629){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10712){if((e10712 instanceof Object))
{var ex__5553__auto__ = e10712;var statearr_10713_10768 = state_10629;(statearr_10713_10768[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10769 = state_10629;
state_10629 = G__10769;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10629){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10714 = f__5565__auto__.call(null);(statearr_10714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10715);
return statearr_10714;
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
cljs.core.async.Mix = (function (){var obj10771 = {};return obj10771;
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
;var m = (function (){if(typeof cljs.core.async.t10881 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10881 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10882){
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
this.meta10882 = meta10882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10881.cljs$lang$type = true;
cljs.core.async.t10881.cljs$lang$ctorStr = "cljs.core.async/t10881";
cljs.core.async.t10881.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10881");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10883){var self__ = this;
var _10883__$1 = this;return self__.meta10882;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10883,meta10882__$1){var self__ = this;
var _10883__$1 = this;return (new cljs.core.async.t10881(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10882__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10881 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10881(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10882){return (new cljs.core.async.t10881(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10882));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10881(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5564__auto___10990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_10948){var state_val_10949 = (state_10948[1]);if((state_val_10949 === 1))
{var inst_10887 = (state_10948[7]);var inst_10887__$1 = calc_state.call(null);var inst_10888 = cljs.core.seq_QMARK_.call(null,inst_10887__$1);var state_10948__$1 = (function (){var statearr_10950 = state_10948;(statearr_10950[7] = inst_10887__$1);
return statearr_10950;
})();if(inst_10888)
{var statearr_10951_10991 = state_10948__$1;(statearr_10951_10991[1] = 2);
} else
{var statearr_10952_10992 = state_10948__$1;(statearr_10952_10992[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 2))
{var inst_10887 = (state_10948[7]);var inst_10890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10887);var state_10948__$1 = state_10948;var statearr_10953_10993 = state_10948__$1;(statearr_10953_10993[2] = inst_10890);
(statearr_10953_10993[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 3))
{var inst_10887 = (state_10948[7]);var state_10948__$1 = state_10948;var statearr_10954_10994 = state_10948__$1;(statearr_10954_10994[2] = inst_10887);
(statearr_10954_10994[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 4))
{var inst_10887 = (state_10948[7]);var inst_10893 = (state_10948[2]);var inst_10894 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10895 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10896 = cljs.core.get.call(null,inst_10893,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10897 = inst_10887;var state_10948__$1 = (function (){var statearr_10955 = state_10948;(statearr_10955[8] = inst_10894);
(statearr_10955[9] = inst_10895);
(statearr_10955[10] = inst_10896);
(statearr_10955[11] = inst_10897);
return statearr_10955;
})();var statearr_10956_10995 = state_10948__$1;(statearr_10956_10995[2] = null);
(statearr_10956_10995[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 5))
{var inst_10897 = (state_10948[11]);var inst_10900 = cljs.core.seq_QMARK_.call(null,inst_10897);var state_10948__$1 = state_10948;if(inst_10900)
{var statearr_10957_10996 = state_10948__$1;(statearr_10957_10996[1] = 7);
} else
{var statearr_10958_10997 = state_10948__$1;(statearr_10958_10997[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 6))
{var inst_10946 = (state_10948[2]);var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10948__$1,inst_10946);
} else
{if((state_val_10949 === 7))
{var inst_10897 = (state_10948[11]);var inst_10902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10897);var state_10948__$1 = state_10948;var statearr_10959_10998 = state_10948__$1;(statearr_10959_10998[2] = inst_10902);
(statearr_10959_10998[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 8))
{var inst_10897 = (state_10948[11]);var state_10948__$1 = state_10948;var statearr_10960_10999 = state_10948__$1;(statearr_10960_10999[2] = inst_10897);
(statearr_10960_10999[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 9))
{var inst_10905 = (state_10948[12]);var inst_10905__$1 = (state_10948[2]);var inst_10906 = cljs.core.get.call(null,inst_10905__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10907 = cljs.core.get.call(null,inst_10905__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10908 = cljs.core.get.call(null,inst_10905__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10948__$1 = (function (){var statearr_10961 = state_10948;(statearr_10961[13] = inst_10908);
(statearr_10961[14] = inst_10907);
(statearr_10961[12] = inst_10905__$1);
return statearr_10961;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10948__$1,10,inst_10906);
} else
{if((state_val_10949 === 10))
{var inst_10913 = (state_10948[15]);var inst_10912 = (state_10948[16]);var inst_10911 = (state_10948[2]);var inst_10912__$1 = cljs.core.nth.call(null,inst_10911,0,null);var inst_10913__$1 = cljs.core.nth.call(null,inst_10911,1,null);var inst_10914 = (inst_10912__$1 == null);var inst_10915 = cljs.core._EQ_.call(null,inst_10913__$1,change);var inst_10916 = (inst_10914) || (inst_10915);var state_10948__$1 = (function (){var statearr_10962 = state_10948;(statearr_10962[15] = inst_10913__$1);
(statearr_10962[16] = inst_10912__$1);
return statearr_10962;
})();if(cljs.core.truth_(inst_10916))
{var statearr_10963_11000 = state_10948__$1;(statearr_10963_11000[1] = 11);
} else
{var statearr_10964_11001 = state_10948__$1;(statearr_10964_11001[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 11))
{var inst_10912 = (state_10948[16]);var inst_10918 = (inst_10912 == null);var state_10948__$1 = state_10948;if(cljs.core.truth_(inst_10918))
{var statearr_10965_11002 = state_10948__$1;(statearr_10965_11002[1] = 14);
} else
{var statearr_10966_11003 = state_10948__$1;(statearr_10966_11003[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 12))
{var inst_10908 = (state_10948[13]);var inst_10913 = (state_10948[15]);var inst_10927 = (state_10948[17]);var inst_10927__$1 = inst_10908.call(null,inst_10913);var state_10948__$1 = (function (){var statearr_10967 = state_10948;(statearr_10967[17] = inst_10927__$1);
return statearr_10967;
})();if(cljs.core.truth_(inst_10927__$1))
{var statearr_10968_11004 = state_10948__$1;(statearr_10968_11004[1] = 17);
} else
{var statearr_10969_11005 = state_10948__$1;(statearr_10969_11005[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 13))
{var inst_10944 = (state_10948[2]);var state_10948__$1 = state_10948;var statearr_10970_11006 = state_10948__$1;(statearr_10970_11006[2] = inst_10944);
(statearr_10970_11006[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 14))
{var inst_10913 = (state_10948[15]);var inst_10920 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10913);var state_10948__$1 = state_10948;var statearr_10971_11007 = state_10948__$1;(statearr_10971_11007[2] = inst_10920);
(statearr_10971_11007[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 15))
{var state_10948__$1 = state_10948;var statearr_10972_11008 = state_10948__$1;(statearr_10972_11008[2] = null);
(statearr_10972_11008[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 16))
{var inst_10923 = (state_10948[2]);var inst_10924 = calc_state.call(null);var inst_10897 = inst_10924;var state_10948__$1 = (function (){var statearr_10973 = state_10948;(statearr_10973[18] = inst_10923);
(statearr_10973[11] = inst_10897);
return statearr_10973;
})();var statearr_10974_11009 = state_10948__$1;(statearr_10974_11009[2] = null);
(statearr_10974_11009[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 17))
{var inst_10927 = (state_10948[17]);var state_10948__$1 = state_10948;var statearr_10975_11010 = state_10948__$1;(statearr_10975_11010[2] = inst_10927);
(statearr_10975_11010[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 18))
{var inst_10908 = (state_10948[13]);var inst_10907 = (state_10948[14]);var inst_10913 = (state_10948[15]);var inst_10930 = cljs.core.empty_QMARK_.call(null,inst_10908);var inst_10931 = inst_10907.call(null,inst_10913);var inst_10932 = cljs.core.not.call(null,inst_10931);var inst_10933 = (inst_10930) && (inst_10932);var state_10948__$1 = state_10948;var statearr_10976_11011 = state_10948__$1;(statearr_10976_11011[2] = inst_10933);
(statearr_10976_11011[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 19))
{var inst_10935 = (state_10948[2]);var state_10948__$1 = state_10948;if(cljs.core.truth_(inst_10935))
{var statearr_10977_11012 = state_10948__$1;(statearr_10977_11012[1] = 20);
} else
{var statearr_10978_11013 = state_10948__$1;(statearr_10978_11013[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 20))
{var inst_10912 = (state_10948[16]);var state_10948__$1 = state_10948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10948__$1,23,out,inst_10912);
} else
{if((state_val_10949 === 21))
{var state_10948__$1 = state_10948;var statearr_10979_11014 = state_10948__$1;(statearr_10979_11014[2] = null);
(statearr_10979_11014[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 22))
{var inst_10905 = (state_10948[12]);var inst_10941 = (state_10948[2]);var inst_10897 = inst_10905;var state_10948__$1 = (function (){var statearr_10980 = state_10948;(statearr_10980[19] = inst_10941);
(statearr_10980[11] = inst_10897);
return statearr_10980;
})();var statearr_10981_11015 = state_10948__$1;(statearr_10981_11015[2] = null);
(statearr_10981_11015[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10949 === 23))
{var inst_10938 = (state_10948[2]);var state_10948__$1 = state_10948;var statearr_10982_11016 = state_10948__$1;(statearr_10982_11016[2] = inst_10938);
(statearr_10982_11016[1] = 22);
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
var state_machine__5550__auto____0 = (function (){var statearr_10986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10986[0] = state_machine__5550__auto__);
(statearr_10986[1] = 1);
return statearr_10986;
});
var state_machine__5550__auto____1 = (function (state_10948){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_10948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e10987){if((e10987 instanceof Object))
{var ex__5553__auto__ = e10987;var statearr_10988_11017 = state_10948;(statearr_10988_11017[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11018 = state_10948;
state_10948 = G__11018;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_10948){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_10948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_10989 = f__5565__auto__.call(null);(statearr_10989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___10990);
return statearr_10989;
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
cljs.core.async.Pub = (function (){var obj11020 = {};return obj11020;
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
return (function (p1__11021_SHARP_){if(cljs.core.truth_(p1__11021_SHARP_.call(null,topic)))
{return p1__11021_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11021_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11146 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11147){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11147 = meta11147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11146.cljs$lang$type = true;
cljs.core.async.t11146.cljs$lang$ctorStr = "cljs.core.async/t11146";
cljs.core.async.t11146.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11146");
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11146.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11148){var self__ = this;
var _11148__$1 = this;return self__.meta11147;
});})(mults,ensure_mult))
;
cljs.core.async.t11146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11148,meta11147__$1){var self__ = this;
var _11148__$1 = this;return (new cljs.core.async.t11146(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11147__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11146 = ((function (mults,ensure_mult){
return (function __GT_t11146(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11147){return (new cljs.core.async.t11146(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11147));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11146(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5564__auto___11270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11222){var state_val_11223 = (state_11222[1]);if((state_val_11223 === 1))
{var state_11222__$1 = state_11222;var statearr_11224_11271 = state_11222__$1;(statearr_11224_11271[2] = null);
(statearr_11224_11271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 2))
{var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11222__$1,4,ch);
} else
{if((state_val_11223 === 3))
{var inst_11220 = (state_11222[2]);var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11222__$1,inst_11220);
} else
{if((state_val_11223 === 4))
{var inst_11151 = (state_11222[7]);var inst_11151__$1 = (state_11222[2]);var inst_11152 = (inst_11151__$1 == null);var state_11222__$1 = (function (){var statearr_11225 = state_11222;(statearr_11225[7] = inst_11151__$1);
return statearr_11225;
})();if(cljs.core.truth_(inst_11152))
{var statearr_11226_11272 = state_11222__$1;(statearr_11226_11272[1] = 5);
} else
{var statearr_11227_11273 = state_11222__$1;(statearr_11227_11273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 5))
{var inst_11158 = cljs.core.deref.call(null,mults);var inst_11159 = cljs.core.vals.call(null,inst_11158);var inst_11160 = cljs.core.seq.call(null,inst_11159);var inst_11161 = inst_11160;var inst_11162 = null;var inst_11163 = 0;var inst_11164 = 0;var state_11222__$1 = (function (){var statearr_11228 = state_11222;(statearr_11228[8] = inst_11164);
(statearr_11228[9] = inst_11162);
(statearr_11228[10] = inst_11163);
(statearr_11228[11] = inst_11161);
return statearr_11228;
})();var statearr_11229_11274 = state_11222__$1;(statearr_11229_11274[2] = null);
(statearr_11229_11274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 6))
{var inst_11151 = (state_11222[7]);var inst_11201 = (state_11222[12]);var inst_11199 = (state_11222[13]);var inst_11199__$1 = topic_fn.call(null,inst_11151);var inst_11200 = cljs.core.deref.call(null,mults);var inst_11201__$1 = cljs.core.get.call(null,inst_11200,inst_11199__$1);var state_11222__$1 = (function (){var statearr_11230 = state_11222;(statearr_11230[12] = inst_11201__$1);
(statearr_11230[13] = inst_11199__$1);
return statearr_11230;
})();if(cljs.core.truth_(inst_11201__$1))
{var statearr_11231_11275 = state_11222__$1;(statearr_11231_11275[1] = 19);
} else
{var statearr_11232_11276 = state_11222__$1;(statearr_11232_11276[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 7))
{var inst_11218 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11233_11277 = state_11222__$1;(statearr_11233_11277[2] = inst_11218);
(statearr_11233_11277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 8))
{var inst_11164 = (state_11222[8]);var inst_11163 = (state_11222[10]);var inst_11166 = (inst_11164 < inst_11163);var inst_11167 = inst_11166;var state_11222__$1 = state_11222;if(cljs.core.truth_(inst_11167))
{var statearr_11237_11278 = state_11222__$1;(statearr_11237_11278[1] = 10);
} else
{var statearr_11238_11279 = state_11222__$1;(statearr_11238_11279[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 9))
{var inst_11197 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11239_11280 = state_11222__$1;(statearr_11239_11280[2] = inst_11197);
(statearr_11239_11280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 10))
{var inst_11164 = (state_11222[8]);var inst_11162 = (state_11222[9]);var inst_11163 = (state_11222[10]);var inst_11161 = (state_11222[11]);var inst_11169 = cljs.core._nth.call(null,inst_11162,inst_11164);var inst_11170 = cljs.core.async.muxch_STAR_.call(null,inst_11169);var inst_11171 = cljs.core.async.close_BANG_.call(null,inst_11170);var inst_11172 = (inst_11164 + 1);var tmp11234 = inst_11162;var tmp11235 = inst_11163;var tmp11236 = inst_11161;var inst_11161__$1 = tmp11236;var inst_11162__$1 = tmp11234;var inst_11163__$1 = tmp11235;var inst_11164__$1 = inst_11172;var state_11222__$1 = (function (){var statearr_11240 = state_11222;(statearr_11240[14] = inst_11171);
(statearr_11240[8] = inst_11164__$1);
(statearr_11240[9] = inst_11162__$1);
(statearr_11240[10] = inst_11163__$1);
(statearr_11240[11] = inst_11161__$1);
return statearr_11240;
})();var statearr_11241_11281 = state_11222__$1;(statearr_11241_11281[2] = null);
(statearr_11241_11281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 11))
{var inst_11175 = (state_11222[15]);var inst_11161 = (state_11222[11]);var inst_11175__$1 = cljs.core.seq.call(null,inst_11161);var state_11222__$1 = (function (){var statearr_11242 = state_11222;(statearr_11242[15] = inst_11175__$1);
return statearr_11242;
})();if(inst_11175__$1)
{var statearr_11243_11282 = state_11222__$1;(statearr_11243_11282[1] = 13);
} else
{var statearr_11244_11283 = state_11222__$1;(statearr_11244_11283[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 12))
{var inst_11195 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11245_11284 = state_11222__$1;(statearr_11245_11284[2] = inst_11195);
(statearr_11245_11284[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 13))
{var inst_11175 = (state_11222[15]);var inst_11177 = cljs.core.chunked_seq_QMARK_.call(null,inst_11175);var state_11222__$1 = state_11222;if(inst_11177)
{var statearr_11246_11285 = state_11222__$1;(statearr_11246_11285[1] = 16);
} else
{var statearr_11247_11286 = state_11222__$1;(statearr_11247_11286[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 14))
{var state_11222__$1 = state_11222;var statearr_11248_11287 = state_11222__$1;(statearr_11248_11287[2] = null);
(statearr_11248_11287[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 15))
{var inst_11193 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11249_11288 = state_11222__$1;(statearr_11249_11288[2] = inst_11193);
(statearr_11249_11288[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 16))
{var inst_11175 = (state_11222[15]);var inst_11179 = cljs.core.chunk_first.call(null,inst_11175);var inst_11180 = cljs.core.chunk_rest.call(null,inst_11175);var inst_11181 = cljs.core.count.call(null,inst_11179);var inst_11161 = inst_11180;var inst_11162 = inst_11179;var inst_11163 = inst_11181;var inst_11164 = 0;var state_11222__$1 = (function (){var statearr_11250 = state_11222;(statearr_11250[8] = inst_11164);
(statearr_11250[9] = inst_11162);
(statearr_11250[10] = inst_11163);
(statearr_11250[11] = inst_11161);
return statearr_11250;
})();var statearr_11251_11289 = state_11222__$1;(statearr_11251_11289[2] = null);
(statearr_11251_11289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 17))
{var inst_11175 = (state_11222[15]);var inst_11184 = cljs.core.first.call(null,inst_11175);var inst_11185 = cljs.core.async.muxch_STAR_.call(null,inst_11184);var inst_11186 = cljs.core.async.close_BANG_.call(null,inst_11185);var inst_11187 = cljs.core.next.call(null,inst_11175);var inst_11161 = inst_11187;var inst_11162 = null;var inst_11163 = 0;var inst_11164 = 0;var state_11222__$1 = (function (){var statearr_11252 = state_11222;(statearr_11252[16] = inst_11186);
(statearr_11252[8] = inst_11164);
(statearr_11252[9] = inst_11162);
(statearr_11252[10] = inst_11163);
(statearr_11252[11] = inst_11161);
return statearr_11252;
})();var statearr_11253_11290 = state_11222__$1;(statearr_11253_11290[2] = null);
(statearr_11253_11290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 18))
{var inst_11190 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11254_11291 = state_11222__$1;(statearr_11254_11291[2] = inst_11190);
(statearr_11254_11291[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 19))
{var state_11222__$1 = state_11222;var statearr_11255_11292 = state_11222__$1;(statearr_11255_11292[2] = null);
(statearr_11255_11292[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 20))
{var state_11222__$1 = state_11222;var statearr_11256_11293 = state_11222__$1;(statearr_11256_11293[2] = null);
(statearr_11256_11293[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 21))
{var inst_11215 = (state_11222[2]);var state_11222__$1 = (function (){var statearr_11257 = state_11222;(statearr_11257[17] = inst_11215);
return statearr_11257;
})();var statearr_11258_11294 = state_11222__$1;(statearr_11258_11294[2] = null);
(statearr_11258_11294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 22))
{var inst_11212 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11259_11295 = state_11222__$1;(statearr_11259_11295[2] = inst_11212);
(statearr_11259_11295[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 23))
{var inst_11199 = (state_11222[13]);var inst_11203 = (state_11222[2]);var inst_11204 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11199);var state_11222__$1 = (function (){var statearr_11260 = state_11222;(statearr_11260[18] = inst_11203);
return statearr_11260;
})();var statearr_11261_11296 = state_11222__$1;(statearr_11261_11296[2] = inst_11204);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 24))
{var inst_11151 = (state_11222[7]);var inst_11201 = (state_11222[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11222,23,Object,null,22);var inst_11208 = cljs.core.async.muxch_STAR_.call(null,inst_11201);var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11222__$1,25,inst_11208,inst_11151);
} else
{if((state_val_11223 === 25))
{var inst_11210 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11262_11297 = state_11222__$1;(statearr_11262_11297[2] = inst_11210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222__$1);
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
var state_machine__5550__auto____0 = (function (){var statearr_11266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11266[0] = state_machine__5550__auto__);
(statearr_11266[1] = 1);
return statearr_11266;
});
var state_machine__5550__auto____1 = (function (state_11222){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11267){if((e11267 instanceof Object))
{var ex__5553__auto__ = e11267;var statearr_11268_11298 = state_11222;(statearr_11268_11298[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11299 = state_11222;
state_11222 = G__11299;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11269 = f__5565__auto__.call(null);(statearr_11269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11270);
return statearr_11269;
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
,cljs.core.range.call(null,cnt));var c__5564__auto___11436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11406){var state_val_11407 = (state_11406[1]);if((state_val_11407 === 1))
{var state_11406__$1 = state_11406;var statearr_11408_11437 = state_11406__$1;(statearr_11408_11437[2] = null);
(statearr_11408_11437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 2))
{var inst_11369 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11370 = 0;var state_11406__$1 = (function (){var statearr_11409 = state_11406;(statearr_11409[7] = inst_11370);
(statearr_11409[8] = inst_11369);
return statearr_11409;
})();var statearr_11410_11438 = state_11406__$1;(statearr_11410_11438[2] = null);
(statearr_11410_11438[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 3))
{var inst_11404 = (state_11406[2]);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11406__$1,inst_11404);
} else
{if((state_val_11407 === 4))
{var inst_11370 = (state_11406[7]);var inst_11372 = (inst_11370 < cnt);var state_11406__$1 = state_11406;if(cljs.core.truth_(inst_11372))
{var statearr_11411_11439 = state_11406__$1;(statearr_11411_11439[1] = 6);
} else
{var statearr_11412_11440 = state_11406__$1;(statearr_11412_11440[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 5))
{var inst_11390 = (state_11406[2]);var state_11406__$1 = (function (){var statearr_11413 = state_11406;(statearr_11413[9] = inst_11390);
return statearr_11413;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11406__$1,12,dchan);
} else
{if((state_val_11407 === 6))
{var state_11406__$1 = state_11406;var statearr_11414_11441 = state_11406__$1;(statearr_11414_11441[2] = null);
(statearr_11414_11441[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 7))
{var state_11406__$1 = state_11406;var statearr_11415_11442 = state_11406__$1;(statearr_11415_11442[2] = null);
(statearr_11415_11442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 8))
{var inst_11388 = (state_11406[2]);var state_11406__$1 = state_11406;var statearr_11416_11443 = state_11406__$1;(statearr_11416_11443[2] = inst_11388);
(statearr_11416_11443[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 9))
{var inst_11370 = (state_11406[7]);var inst_11383 = (state_11406[2]);var inst_11384 = (inst_11370 + 1);var inst_11370__$1 = inst_11384;var state_11406__$1 = (function (){var statearr_11417 = state_11406;(statearr_11417[7] = inst_11370__$1);
(statearr_11417[10] = inst_11383);
return statearr_11417;
})();var statearr_11418_11444 = state_11406__$1;(statearr_11418_11444[2] = null);
(statearr_11418_11444[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 10))
{var inst_11374 = (state_11406[2]);var inst_11375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11406__$1 = (function (){var statearr_11419 = state_11406;(statearr_11419[11] = inst_11374);
return statearr_11419;
})();var statearr_11420_11445 = state_11406__$1;(statearr_11420_11445[2] = inst_11375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11406__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 11))
{var inst_11370 = (state_11406[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11406,10,Object,null,9);var inst_11379 = chs__$1.call(null,inst_11370);var inst_11380 = done.call(null,inst_11370);var inst_11381 = cljs.core.async.take_BANG_.call(null,inst_11379,inst_11380);var state_11406__$1 = state_11406;var statearr_11421_11446 = state_11406__$1;(statearr_11421_11446[2] = inst_11381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11406__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 12))
{var inst_11392 = (state_11406[12]);var inst_11392__$1 = (state_11406[2]);var inst_11393 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11392__$1);var state_11406__$1 = (function (){var statearr_11422 = state_11406;(statearr_11422[12] = inst_11392__$1);
return statearr_11422;
})();if(cljs.core.truth_(inst_11393))
{var statearr_11423_11447 = state_11406__$1;(statearr_11423_11447[1] = 13);
} else
{var statearr_11424_11448 = state_11406__$1;(statearr_11424_11448[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 13))
{var inst_11395 = cljs.core.async.close_BANG_.call(null,out);var state_11406__$1 = state_11406;var statearr_11425_11449 = state_11406__$1;(statearr_11425_11449[2] = inst_11395);
(statearr_11425_11449[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 14))
{var inst_11392 = (state_11406[12]);var inst_11397 = cljs.core.apply.call(null,f,inst_11392);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11406__$1,16,out,inst_11397);
} else
{if((state_val_11407 === 15))
{var inst_11402 = (state_11406[2]);var state_11406__$1 = state_11406;var statearr_11426_11450 = state_11406__$1;(statearr_11426_11450[2] = inst_11402);
(statearr_11426_11450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 16))
{var inst_11399 = (state_11406[2]);var state_11406__$1 = (function (){var statearr_11427 = state_11406;(statearr_11427[13] = inst_11399);
return statearr_11427;
})();var statearr_11428_11451 = state_11406__$1;(statearr_11428_11451[2] = null);
(statearr_11428_11451[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11432[0] = state_machine__5550__auto__);
(statearr_11432[1] = 1);
return statearr_11432;
});
var state_machine__5550__auto____1 = (function (state_11406){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11433){if((e11433 instanceof Object))
{var ex__5553__auto__ = e11433;var statearr_11434_11452 = state_11406;(statearr_11434_11452[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11453 = state_11406;
state_11406 = G__11453;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11406){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11435 = f__5565__auto__.call(null);(statearr_11435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11436);
return statearr_11435;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11537){var state_val_11538 = (state_11537[1]);if((state_val_11538 === 1))
{var inst_11508 = cljs.core.vec.call(null,chs);var inst_11509 = inst_11508;var state_11537__$1 = (function (){var statearr_11539 = state_11537;(statearr_11539[7] = inst_11509);
return statearr_11539;
})();var statearr_11540_11562 = state_11537__$1;(statearr_11540_11562[2] = null);
(statearr_11540_11562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 2))
{var inst_11509 = (state_11537[7]);var inst_11511 = cljs.core.count.call(null,inst_11509);var inst_11512 = (inst_11511 > 0);var state_11537__$1 = state_11537;if(cljs.core.truth_(inst_11512))
{var statearr_11541_11563 = state_11537__$1;(statearr_11541_11563[1] = 4);
} else
{var statearr_11542_11564 = state_11537__$1;(statearr_11542_11564[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 3))
{var inst_11535 = (state_11537[2]);var state_11537__$1 = state_11537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11537__$1,inst_11535);
} else
{if((state_val_11538 === 4))
{var inst_11509 = (state_11537[7]);var state_11537__$1 = state_11537;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11537__$1,7,inst_11509);
} else
{if((state_val_11538 === 5))
{var inst_11531 = cljs.core.async.close_BANG_.call(null,out);var state_11537__$1 = state_11537;var statearr_11543_11565 = state_11537__$1;(statearr_11543_11565[2] = inst_11531);
(statearr_11543_11565[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 6))
{var inst_11533 = (state_11537[2]);var state_11537__$1 = state_11537;var statearr_11544_11566 = state_11537__$1;(statearr_11544_11566[2] = inst_11533);
(statearr_11544_11566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 7))
{var inst_11516 = (state_11537[8]);var inst_11517 = (state_11537[9]);var inst_11516__$1 = (state_11537[2]);var inst_11517__$1 = cljs.core.nth.call(null,inst_11516__$1,0,null);var inst_11518 = cljs.core.nth.call(null,inst_11516__$1,1,null);var inst_11519 = (inst_11517__$1 == null);var state_11537__$1 = (function (){var statearr_11545 = state_11537;(statearr_11545[8] = inst_11516__$1);
(statearr_11545[10] = inst_11518);
(statearr_11545[9] = inst_11517__$1);
return statearr_11545;
})();if(cljs.core.truth_(inst_11519))
{var statearr_11546_11567 = state_11537__$1;(statearr_11546_11567[1] = 8);
} else
{var statearr_11547_11568 = state_11537__$1;(statearr_11547_11568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 8))
{var inst_11509 = (state_11537[7]);var inst_11516 = (state_11537[8]);var inst_11518 = (state_11537[10]);var inst_11517 = (state_11537[9]);var inst_11521 = (function (){var c = inst_11518;var v = inst_11517;var vec__11514 = inst_11516;var cs = inst_11509;return ((function (c,v,vec__11514,cs,inst_11509,inst_11516,inst_11518,inst_11517,state_val_11538){
return (function (p1__11454_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11454_SHARP_);
});
;})(c,v,vec__11514,cs,inst_11509,inst_11516,inst_11518,inst_11517,state_val_11538))
})();var inst_11522 = cljs.core.filterv.call(null,inst_11521,inst_11509);var inst_11509__$1 = inst_11522;var state_11537__$1 = (function (){var statearr_11548 = state_11537;(statearr_11548[7] = inst_11509__$1);
return statearr_11548;
})();var statearr_11549_11569 = state_11537__$1;(statearr_11549_11569[2] = null);
(statearr_11549_11569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 9))
{var inst_11517 = (state_11537[9]);var state_11537__$1 = state_11537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11537__$1,11,out,inst_11517);
} else
{if((state_val_11538 === 10))
{var inst_11529 = (state_11537[2]);var state_11537__$1 = state_11537;var statearr_11551_11570 = state_11537__$1;(statearr_11551_11570[2] = inst_11529);
(statearr_11551_11570[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 11))
{var inst_11509 = (state_11537[7]);var inst_11526 = (state_11537[2]);var tmp11550 = inst_11509;var inst_11509__$1 = tmp11550;var state_11537__$1 = (function (){var statearr_11552 = state_11537;(statearr_11552[7] = inst_11509__$1);
(statearr_11552[11] = inst_11526);
return statearr_11552;
})();var statearr_11553_11571 = state_11537__$1;(statearr_11553_11571[2] = null);
(statearr_11553_11571[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11557 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11557[0] = state_machine__5550__auto__);
(statearr_11557[1] = 1);
return statearr_11557;
});
var state_machine__5550__auto____1 = (function (state_11537){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11558){if((e11558 instanceof Object))
{var ex__5553__auto__ = e11558;var statearr_11559_11572 = state_11537;(statearr_11559_11572[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11573 = state_11537;
state_11537 = G__11573;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11537){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11560 = f__5565__auto__.call(null);(statearr_11560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11561);
return statearr_11560;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11666 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11643){var state_val_11644 = (state_11643[1]);if((state_val_11644 === 1))
{var inst_11620 = 0;var state_11643__$1 = (function (){var statearr_11645 = state_11643;(statearr_11645[7] = inst_11620);
return statearr_11645;
})();var statearr_11646_11667 = state_11643__$1;(statearr_11646_11667[2] = null);
(statearr_11646_11667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 2))
{var inst_11620 = (state_11643[7]);var inst_11622 = (inst_11620 < n);var state_11643__$1 = state_11643;if(cljs.core.truth_(inst_11622))
{var statearr_11647_11668 = state_11643__$1;(statearr_11647_11668[1] = 4);
} else
{var statearr_11648_11669 = state_11643__$1;(statearr_11648_11669[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 3))
{var inst_11640 = (state_11643[2]);var inst_11641 = cljs.core.async.close_BANG_.call(null,out);var state_11643__$1 = (function (){var statearr_11649 = state_11643;(statearr_11649[8] = inst_11640);
return statearr_11649;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11643__$1,inst_11641);
} else
{if((state_val_11644 === 4))
{var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11643__$1,7,ch);
} else
{if((state_val_11644 === 5))
{var state_11643__$1 = state_11643;var statearr_11650_11670 = state_11643__$1;(statearr_11650_11670[2] = null);
(statearr_11650_11670[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 6))
{var inst_11638 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11651_11671 = state_11643__$1;(statearr_11651_11671[2] = inst_11638);
(statearr_11651_11671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 7))
{var inst_11625 = (state_11643[9]);var inst_11625__$1 = (state_11643[2]);var inst_11626 = (inst_11625__$1 == null);var inst_11627 = cljs.core.not.call(null,inst_11626);var state_11643__$1 = (function (){var statearr_11652 = state_11643;(statearr_11652[9] = inst_11625__$1);
return statearr_11652;
})();if(inst_11627)
{var statearr_11653_11672 = state_11643__$1;(statearr_11653_11672[1] = 8);
} else
{var statearr_11654_11673 = state_11643__$1;(statearr_11654_11673[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 8))
{var inst_11625 = (state_11643[9]);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11643__$1,11,out,inst_11625);
} else
{if((state_val_11644 === 9))
{var state_11643__$1 = state_11643;var statearr_11655_11674 = state_11643__$1;(statearr_11655_11674[2] = null);
(statearr_11655_11674[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 10))
{var inst_11635 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11656_11675 = state_11643__$1;(statearr_11656_11675[2] = inst_11635);
(statearr_11656_11675[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 11))
{var inst_11620 = (state_11643[7]);var inst_11630 = (state_11643[2]);var inst_11631 = (inst_11620 + 1);var inst_11620__$1 = inst_11631;var state_11643__$1 = (function (){var statearr_11657 = state_11643;(statearr_11657[7] = inst_11620__$1);
(statearr_11657[10] = inst_11630);
return statearr_11657;
})();var statearr_11658_11676 = state_11643__$1;(statearr_11658_11676[2] = null);
(statearr_11658_11676[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11662 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11662[0] = state_machine__5550__auto__);
(statearr_11662[1] = 1);
return statearr_11662;
});
var state_machine__5550__auto____1 = (function (state_11643){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11643);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11663){if((e11663 instanceof Object))
{var ex__5553__auto__ = e11663;var statearr_11664_11677 = state_11643;(statearr_11664_11677[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11678 = state_11643;
state_11643 = G__11678;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11643){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11665 = f__5565__auto__.call(null);(statearr_11665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11666);
return statearr_11665;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11750){var state_val_11751 = (state_11750[1]);if((state_val_11751 === 1))
{var inst_11727 = null;var state_11750__$1 = (function (){var statearr_11752 = state_11750;(statearr_11752[7] = inst_11727);
return statearr_11752;
})();var statearr_11753_11776 = state_11750__$1;(statearr_11753_11776[2] = null);
(statearr_11753_11776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 2))
{var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11750__$1,4,ch);
} else
{if((state_val_11751 === 3))
{var inst_11747 = (state_11750[2]);var inst_11748 = cljs.core.async.close_BANG_.call(null,out);var state_11750__$1 = (function (){var statearr_11754 = state_11750;(statearr_11754[8] = inst_11747);
return statearr_11754;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11750__$1,inst_11748);
} else
{if((state_val_11751 === 4))
{var inst_11730 = (state_11750[9]);var inst_11730__$1 = (state_11750[2]);var inst_11731 = (inst_11730__$1 == null);var inst_11732 = cljs.core.not.call(null,inst_11731);var state_11750__$1 = (function (){var statearr_11755 = state_11750;(statearr_11755[9] = inst_11730__$1);
return statearr_11755;
})();if(inst_11732)
{var statearr_11756_11777 = state_11750__$1;(statearr_11756_11777[1] = 5);
} else
{var statearr_11757_11778 = state_11750__$1;(statearr_11757_11778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 5))
{var inst_11730 = (state_11750[9]);var inst_11727 = (state_11750[7]);var inst_11734 = cljs.core._EQ_.call(null,inst_11730,inst_11727);var state_11750__$1 = state_11750;if(inst_11734)
{var statearr_11758_11779 = state_11750__$1;(statearr_11758_11779[1] = 8);
} else
{var statearr_11759_11780 = state_11750__$1;(statearr_11759_11780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 6))
{var state_11750__$1 = state_11750;var statearr_11761_11781 = state_11750__$1;(statearr_11761_11781[2] = null);
(statearr_11761_11781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 7))
{var inst_11745 = (state_11750[2]);var state_11750__$1 = state_11750;var statearr_11762_11782 = state_11750__$1;(statearr_11762_11782[2] = inst_11745);
(statearr_11762_11782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 8))
{var inst_11727 = (state_11750[7]);var tmp11760 = inst_11727;var inst_11727__$1 = tmp11760;var state_11750__$1 = (function (){var statearr_11763 = state_11750;(statearr_11763[7] = inst_11727__$1);
return statearr_11763;
})();var statearr_11764_11783 = state_11750__$1;(statearr_11764_11783[2] = null);
(statearr_11764_11783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 9))
{var inst_11730 = (state_11750[9]);var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11750__$1,11,out,inst_11730);
} else
{if((state_val_11751 === 10))
{var inst_11742 = (state_11750[2]);var state_11750__$1 = state_11750;var statearr_11765_11784 = state_11750__$1;(statearr_11765_11784[2] = inst_11742);
(statearr_11765_11784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11751 === 11))
{var inst_11730 = (state_11750[9]);var inst_11739 = (state_11750[2]);var inst_11727 = inst_11730;var state_11750__$1 = (function (){var statearr_11766 = state_11750;(statearr_11766[7] = inst_11727);
(statearr_11766[10] = inst_11739);
return statearr_11766;
})();var statearr_11767_11785 = state_11750__$1;(statearr_11767_11785[2] = null);
(statearr_11767_11785[1] = 2);
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
var state_machine__5550__auto____0 = (function (){var statearr_11771 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11771[0] = state_machine__5550__auto__);
(statearr_11771[1] = 1);
return statearr_11771;
});
var state_machine__5550__auto____1 = (function (state_11750){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11750);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11772){if((e11772 instanceof Object))
{var ex__5553__auto__ = e11772;var statearr_11773_11786 = state_11750;(statearr_11773_11786[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11787 = state_11750;
state_11750 = G__11787;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11750){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11774 = f__5565__auto__.call(null);(statearr_11774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11775);
return statearr_11774;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___11922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_11892){var state_val_11893 = (state_11892[1]);if((state_val_11893 === 1))
{var inst_11855 = (new Array(n));var inst_11856 = inst_11855;var inst_11857 = 0;var state_11892__$1 = (function (){var statearr_11894 = state_11892;(statearr_11894[7] = inst_11857);
(statearr_11894[8] = inst_11856);
return statearr_11894;
})();var statearr_11895_11923 = state_11892__$1;(statearr_11895_11923[2] = null);
(statearr_11895_11923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 2))
{var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11892__$1,4,ch);
} else
{if((state_val_11893 === 3))
{var inst_11890 = (state_11892[2]);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11892__$1,inst_11890);
} else
{if((state_val_11893 === 4))
{var inst_11860 = (state_11892[9]);var inst_11860__$1 = (state_11892[2]);var inst_11861 = (inst_11860__$1 == null);var inst_11862 = cljs.core.not.call(null,inst_11861);var state_11892__$1 = (function (){var statearr_11896 = state_11892;(statearr_11896[9] = inst_11860__$1);
return statearr_11896;
})();if(inst_11862)
{var statearr_11897_11924 = state_11892__$1;(statearr_11897_11924[1] = 5);
} else
{var statearr_11898_11925 = state_11892__$1;(statearr_11898_11925[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 5))
{var inst_11860 = (state_11892[9]);var inst_11857 = (state_11892[7]);var inst_11856 = (state_11892[8]);var inst_11865 = (state_11892[10]);var inst_11864 = (inst_11856[inst_11857] = inst_11860);var inst_11865__$1 = (inst_11857 + 1);var inst_11866 = (inst_11865__$1 < n);var state_11892__$1 = (function (){var statearr_11899 = state_11892;(statearr_11899[11] = inst_11864);
(statearr_11899[10] = inst_11865__$1);
return statearr_11899;
})();if(cljs.core.truth_(inst_11866))
{var statearr_11900_11926 = state_11892__$1;(statearr_11900_11926[1] = 8);
} else
{var statearr_11901_11927 = state_11892__$1;(statearr_11901_11927[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 6))
{var inst_11857 = (state_11892[7]);var inst_11878 = (inst_11857 > 0);var state_11892__$1 = state_11892;if(cljs.core.truth_(inst_11878))
{var statearr_11903_11928 = state_11892__$1;(statearr_11903_11928[1] = 12);
} else
{var statearr_11904_11929 = state_11892__$1;(statearr_11904_11929[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 7))
{var inst_11888 = (state_11892[2]);var state_11892__$1 = state_11892;var statearr_11905_11930 = state_11892__$1;(statearr_11905_11930[2] = inst_11888);
(statearr_11905_11930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 8))
{var inst_11856 = (state_11892[8]);var inst_11865 = (state_11892[10]);var tmp11902 = inst_11856;var inst_11856__$1 = tmp11902;var inst_11857 = inst_11865;var state_11892__$1 = (function (){var statearr_11906 = state_11892;(statearr_11906[7] = inst_11857);
(statearr_11906[8] = inst_11856__$1);
return statearr_11906;
})();var statearr_11907_11931 = state_11892__$1;(statearr_11907_11931[2] = null);
(statearr_11907_11931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 9))
{var inst_11856 = (state_11892[8]);var inst_11870 = cljs.core.vec.call(null,inst_11856);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11892__$1,11,out,inst_11870);
} else
{if((state_val_11893 === 10))
{var inst_11876 = (state_11892[2]);var state_11892__$1 = state_11892;var statearr_11908_11932 = state_11892__$1;(statearr_11908_11932[2] = inst_11876);
(statearr_11908_11932[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 11))
{var inst_11872 = (state_11892[2]);var inst_11873 = (new Array(n));var inst_11856 = inst_11873;var inst_11857 = 0;var state_11892__$1 = (function (){var statearr_11909 = state_11892;(statearr_11909[7] = inst_11857);
(statearr_11909[8] = inst_11856);
(statearr_11909[12] = inst_11872);
return statearr_11909;
})();var statearr_11910_11933 = state_11892__$1;(statearr_11910_11933[2] = null);
(statearr_11910_11933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 12))
{var inst_11856 = (state_11892[8]);var inst_11880 = cljs.core.vec.call(null,inst_11856);var state_11892__$1 = state_11892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11892__$1,15,out,inst_11880);
} else
{if((state_val_11893 === 13))
{var state_11892__$1 = state_11892;var statearr_11911_11934 = state_11892__$1;(statearr_11911_11934[2] = null);
(statearr_11911_11934[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 14))
{var inst_11885 = (state_11892[2]);var inst_11886 = cljs.core.async.close_BANG_.call(null,out);var state_11892__$1 = (function (){var statearr_11912 = state_11892;(statearr_11912[13] = inst_11885);
return statearr_11912;
})();var statearr_11913_11935 = state_11892__$1;(statearr_11913_11935[2] = inst_11886);
(statearr_11913_11935[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11893 === 15))
{var inst_11882 = (state_11892[2]);var state_11892__$1 = state_11892;var statearr_11914_11936 = state_11892__$1;(statearr_11914_11936[2] = inst_11882);
(statearr_11914_11936[1] = 14);
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
var state_machine__5550__auto____0 = (function (){var statearr_11918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11918[0] = state_machine__5550__auto__);
(statearr_11918[1] = 1);
return statearr_11918;
});
var state_machine__5550__auto____1 = (function (state_11892){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_11892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e11919){if((e11919 instanceof Object))
{var ex__5553__auto__ = e11919;var statearr_11920_11937 = state_11892;(statearr_11920_11937[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11938 = state_11892;
state_11892 = G__11938;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_11892){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_11892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_11921 = f__5565__auto__.call(null);(statearr_11921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___11922);
return statearr_11921;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5564__auto___12081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5565__auto__ = (function (){var switch__5549__auto__ = (function (state_12051){var state_val_12052 = (state_12051[1]);if((state_val_12052 === 1))
{var inst_12010 = [];var inst_12011 = inst_12010;var inst_12012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12051__$1 = (function (){var statearr_12053 = state_12051;(statearr_12053[7] = inst_12011);
(statearr_12053[8] = inst_12012);
return statearr_12053;
})();var statearr_12054_12082 = state_12051__$1;(statearr_12054_12082[2] = null);
(statearr_12054_12082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 2))
{var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12051__$1,4,ch);
} else
{if((state_val_12052 === 3))
{var inst_12049 = (state_12051[2]);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12051__$1,inst_12049);
} else
{if((state_val_12052 === 4))
{var inst_12015 = (state_12051[9]);var inst_12015__$1 = (state_12051[2]);var inst_12016 = (inst_12015__$1 == null);var inst_12017 = cljs.core.not.call(null,inst_12016);var state_12051__$1 = (function (){var statearr_12055 = state_12051;(statearr_12055[9] = inst_12015__$1);
return statearr_12055;
})();if(inst_12017)
{var statearr_12056_12083 = state_12051__$1;(statearr_12056_12083[1] = 5);
} else
{var statearr_12057_12084 = state_12051__$1;(statearr_12057_12084[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 5))
{var inst_12019 = (state_12051[10]);var inst_12015 = (state_12051[9]);var inst_12012 = (state_12051[8]);var inst_12019__$1 = f.call(null,inst_12015);var inst_12020 = cljs.core._EQ_.call(null,inst_12019__$1,inst_12012);var inst_12021 = cljs.core.keyword_identical_QMARK_.call(null,inst_12012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12022 = (inst_12020) || (inst_12021);var state_12051__$1 = (function (){var statearr_12058 = state_12051;(statearr_12058[10] = inst_12019__$1);
return statearr_12058;
})();if(cljs.core.truth_(inst_12022))
{var statearr_12059_12085 = state_12051__$1;(statearr_12059_12085[1] = 8);
} else
{var statearr_12060_12086 = state_12051__$1;(statearr_12060_12086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 6))
{var inst_12011 = (state_12051[7]);var inst_12036 = inst_12011.length;var inst_12037 = (inst_12036 > 0);var state_12051__$1 = state_12051;if(cljs.core.truth_(inst_12037))
{var statearr_12062_12087 = state_12051__$1;(statearr_12062_12087[1] = 12);
} else
{var statearr_12063_12088 = state_12051__$1;(statearr_12063_12088[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 7))
{var inst_12047 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12064_12089 = state_12051__$1;(statearr_12064_12089[2] = inst_12047);
(statearr_12064_12089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 8))
{var inst_12019 = (state_12051[10]);var inst_12015 = (state_12051[9]);var inst_12011 = (state_12051[7]);var inst_12024 = inst_12011.push(inst_12015);var tmp12061 = inst_12011;var inst_12011__$1 = tmp12061;var inst_12012 = inst_12019;var state_12051__$1 = (function (){var statearr_12065 = state_12051;(statearr_12065[11] = inst_12024);
(statearr_12065[7] = inst_12011__$1);
(statearr_12065[8] = inst_12012);
return statearr_12065;
})();var statearr_12066_12090 = state_12051__$1;(statearr_12066_12090[2] = null);
(statearr_12066_12090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 9))
{var inst_12011 = (state_12051[7]);var inst_12027 = cljs.core.vec.call(null,inst_12011);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12051__$1,11,out,inst_12027);
} else
{if((state_val_12052 === 10))
{var inst_12034 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12067_12091 = state_12051__$1;(statearr_12067_12091[2] = inst_12034);
(statearr_12067_12091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 11))
{var inst_12019 = (state_12051[10]);var inst_12015 = (state_12051[9]);var inst_12029 = (state_12051[2]);var inst_12030 = [];var inst_12031 = inst_12030.push(inst_12015);var inst_12011 = inst_12030;var inst_12012 = inst_12019;var state_12051__$1 = (function (){var statearr_12068 = state_12051;(statearr_12068[12] = inst_12029);
(statearr_12068[13] = inst_12031);
(statearr_12068[7] = inst_12011);
(statearr_12068[8] = inst_12012);
return statearr_12068;
})();var statearr_12069_12092 = state_12051__$1;(statearr_12069_12092[2] = null);
(statearr_12069_12092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 12))
{var inst_12011 = (state_12051[7]);var inst_12039 = cljs.core.vec.call(null,inst_12011);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12051__$1,15,out,inst_12039);
} else
{if((state_val_12052 === 13))
{var state_12051__$1 = state_12051;var statearr_12070_12093 = state_12051__$1;(statearr_12070_12093[2] = null);
(statearr_12070_12093[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 14))
{var inst_12044 = (state_12051[2]);var inst_12045 = cljs.core.async.close_BANG_.call(null,out);var state_12051__$1 = (function (){var statearr_12071 = state_12051;(statearr_12071[14] = inst_12044);
return statearr_12071;
})();var statearr_12072_12094 = state_12051__$1;(statearr_12072_12094[2] = inst_12045);
(statearr_12072_12094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 15))
{var inst_12041 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12073_12095 = state_12051__$1;(statearr_12073_12095[2] = inst_12041);
(statearr_12073_12095[1] = 14);
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
var state_machine__5550__auto____0 = (function (){var statearr_12077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12077[0] = state_machine__5550__auto__);
(statearr_12077[1] = 1);
return statearr_12077;
});
var state_machine__5550__auto____1 = (function (state_12051){while(true){
var ret_value__5551__auto__ = (function (){try{while(true){
var result__5552__auto__ = switch__5549__auto__.call(null,state_12051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5552__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5552__auto__;
}
break;
}
}catch (e12078){if((e12078 instanceof Object))
{var ex__5553__auto__ = e12078;var statearr_12079_12096 = state_12051;(statearr_12079_12096[5] = ex__5553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5551__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12097 = state_12051;
state_12051 = G__12097;
continue;
}
} else
{return ret_value__5551__auto__;
}
break;
}
});
state_machine__5550__auto__ = function(state_12051){
switch(arguments.length){
case 0:
return state_machine__5550__auto____0.call(this);
case 1:
return state_machine__5550__auto____1.call(this,state_12051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5550__auto____0;
state_machine__5550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5550__auto____1;
return state_machine__5550__auto__;
})()
;})(switch__5549__auto__))
})();var state__5566__auto__ = (function (){var statearr_12080 = f__5565__auto__.call(null);(statearr_12080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5564__auto___12081);
return statearr_12080;
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
