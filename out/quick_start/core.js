// Compiled by ClojureScript 1.11.121 {:optimizations :none}
goog.provide('quick_start.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('goog.events.EventType');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"quick-start");
quick_start.core.fac = (function quick_start$core$fac(n){
var cnt = n;
var acc = (1);
while(true){
if((cnt === (0))){
return acc;
} else {
var G__2013 = (cnt - (1));
var G__2014 = (acc * cnt);
cnt = G__2013;
acc = G__2014;
continue;
}
break;
}
});
quick_start.core.event = (function quick_start$core$event(){
var out = cljs.core.async.chan.call(null);
var button = document.querySelector("button");
var type = goog.events.EventType.CLICK;
goog.events.listen(button,type,(function (){
return cljs.core.async.put_BANG_.call(null,out,document.querySelector("input[type=number]").value);
}));

return out;
});
quick_start.core.view = (function quick_start$core$view(in$){
var msg = ((cljs.core._EQ_.call(null,in$,""))?"Can't convert string '' to number, NaN":(((parseInt(in$) < (0)))?"Positive integer, please :)":["factorial ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quick_start.core.fac.call(null,parseInt(in$)))].join('')
));
var p = document.querySelector("p");
return (p.innerHTML = msg);
});
var c__1935__auto___2042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__1936__auto__ = (function (){var switch__1912__auto__ = (function (state_2028){
var state_val_2029 = (state_2028[(1)]);
if((state_val_2029 === (1))){
var state_2028__$1 = state_2028;
var statearr_2030_2043 = state_2028__$1;
(statearr_2030_2043[(2)] = null);

(statearr_2030_2043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2029 === (2))){
var state_2028__$1 = state_2028;
var statearr_2031_2044 = state_2028__$1;
(statearr_2031_2044[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2029 === (3))){
var inst_2026 = (state_2028[(2)]);
var state_2028__$1 = state_2028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2028__$1,inst_2026);
} else {
if((state_val_2029 === (4))){
var inst_2017 = quick_start.core.event.call(null);
var state_2028__$1 = state_2028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2028__$1,(7),inst_2017);
} else {
if((state_val_2029 === (5))){
var state_2028__$1 = state_2028;
var statearr_2033_2045 = state_2028__$1;
(statearr_2033_2045[(2)] = null);

(statearr_2033_2045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2029 === (6))){
var inst_2024 = (state_2028[(2)]);
var state_2028__$1 = state_2028;
var statearr_2034_2046 = state_2028__$1;
(statearr_2034_2046[(2)] = inst_2024);

(statearr_2034_2046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2029 === (7))){
var inst_2019 = (state_2028[(2)]);
var inst_2020 = quick_start.core.view.call(null,inst_2019);
var state_2028__$1 = (function (){var statearr_2035 = state_2028;
(statearr_2035[(7)] = inst_2020);

return statearr_2035;
})();
var statearr_2036_2047 = state_2028__$1;
(statearr_2036_2047[(2)] = null);

(statearr_2036_2047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var quick_start$core$state_machine__1913__auto__ = null;
var quick_start$core$state_machine__1913__auto____0 = (function (){
var statearr_2037 = [null,null,null,null,null,null,null,null];
(statearr_2037[(0)] = quick_start$core$state_machine__1913__auto__);

(statearr_2037[(1)] = (1));

return statearr_2037;
});
var quick_start$core$state_machine__1913__auto____1 = (function (state_2028){
while(true){
var ret_value__1914__auto__ = (function (){try{while(true){
var result__1915__auto__ = switch__1912__auto__.call(null,state_2028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1915__auto__;
}
break;
}
}catch (e2038){var ex__1916__auto__ = e2038;
var statearr_2039_2048 = state_2028;
(statearr_2039_2048[(2)] = ex__1916__auto__);


if(cljs.core.seq.call(null,(state_2028[(4)]))){
var statearr_2040_2049 = state_2028;
(statearr_2040_2049[(1)] = cljs.core.first.call(null,(state_2028[(4)])));

} else {
throw ex__1916__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2050 = state_2028;
state_2028 = G__2050;
continue;
} else {
return ret_value__1914__auto__;
}
break;
}
});
quick_start$core$state_machine__1913__auto__ = function(state_2028){
switch(arguments.length){
case 0:
return quick_start$core$state_machine__1913__auto____0.call(this);
case 1:
return quick_start$core$state_machine__1913__auto____1.call(this,state_2028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quick_start$core$state_machine__1913__auto__.cljs$core$IFn$_invoke$arity$0 = quick_start$core$state_machine__1913__auto____0;
quick_start$core$state_machine__1913__auto__.cljs$core$IFn$_invoke$arity$1 = quick_start$core$state_machine__1913__auto____1;
return quick_start$core$state_machine__1913__auto__;
})()
})();
var state__1937__auto__ = (function (){var statearr_2041 = f__1936__auto__.call(null);
(statearr_2041[(6)] = c__1935__auto___2042);

return statearr_2041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1937__auto__);
}));


//# sourceMappingURL=core.js.map
