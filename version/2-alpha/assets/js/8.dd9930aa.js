(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{343:function(e,t,n){"use strict";n.r(t);n(168),n(169),n(93);var o,a=n(56),i=n(321),s=n.n(i),r={data:function(){return{selected:void 0,options:[]}},created:(o=Object(a.a)(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/NotifyBC/versions.json");case 3:t=e.sent,this.options=t.data,(n=window.location.pathname.toLowerCase()).startsWith("/notifybc/version/")?(o=n.indexOf("/",18),this.selected=n.substring(18,o)):this.selected="main",e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return o.apply(this,arguments)}),methods:{onChange:function(e){var t="main"===this.selected?"":"/version/".concat(this.selected),n=window.location.pathname.toLowerCase(),o=9,a=n.indexOf("/version/");a>=0&&(o=a+9);var i=n.indexOf("/",o);window.location.pathname=window.location.pathname.substring(0,9)+t+window.location.pathname.substring(i)}}},c=n(42),l=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.options&&e.options.length>0?n("span",{staticClass:"nav-item"},[e._v("\n  Version:\n  "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]},e.onChange]}},e._l(e.options,(function(t){return n("option",{domProps:{value:t.value}},[e._v("\n      "+e._s(t.text)+"\n    ")])})),0)]):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);