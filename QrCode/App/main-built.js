/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,n;(function(i){function o(e,t){var n,i,o,r,a,s,c,u,l,d,f=t&&t.split("/"),v=w.map,p=v&&v["*"]||{};if(e&&"."===e.charAt(0)&&t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),u=0;e.length>u;u+=1)if(d=e[u],"."===d)e.splice(u,1),u-=1;else if(".."===d){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((f||p)&&v){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),f)for(l=f.length;l>0;l-=1)if(o=v[f.slice(0,l).join("/")],o&&(o=o[i])){r=o,a=u;break}if(r)break;!s&&p&&p[i]&&(s=p[i],c=u)}!r&&s&&(r=s,a=c),r&&(n.splice(0,a,r),e=n.join("/"))}return e}function r(e,t){return function(){return v.apply(i,y.call(arguments,0).concat([e,t]))}}function a(e){return function(t){return o(t,e)}}function s(e){return function(t){g[e]=t}}function c(e){if(h.hasOwnProperty(e)){var t=h[e];delete h[e],b[e]=!0,f.apply(i,t)}if(!g.hasOwnProperty(e)&&!b.hasOwnProperty(e))throw Error("No "+e);return g[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(t,n,i){e.onResourceLoad&&t&&e.onResourceLoad({defined:n},{id:t},i)}function d(e){return function(){return w&&w.config&&w.config[e]||{}}}var f,v,p,m,g={},h={},w={},b={},y=[].slice;p=function(e,t){var n,i=u(e),r=i[0];return e=i[1],r&&(r=o(r,t),n=c(r)),r?e=n&&n.normalize?n.normalize(e,a(t)):o(e,t):(e=o(e,t),i=u(e),r=i[0],e=i[1],r&&(n=c(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},m={require:function(e){return r(e)},exports:function(e){var t=g[e];return t!==void 0?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:d(e)}}},f=function(e,t,n,o){var a,u,d,f,v,w,y=[];if(o=o||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,v=0;t.length>v;v+=1)if(f=p(t[v],o),u=f.f,"require"===u)y[v]=m.require(e);else if("exports"===u)y[v]=m.exports(e),w=!0;else if("module"===u)a=y[v]=m.module(e);else if(g.hasOwnProperty(u)||h.hasOwnProperty(u)||b.hasOwnProperty(u))y[v]=c(u);else{if(!f.p)throw Error(e+" missing "+u);f.p.load(f.n,r(o,!0),s(u),{}),y[v]=g[u]}d=n.apply(g[e],y),e&&(a&&a.exports!==i&&a.exports!==g[e]?g[e]=a.exports:d===i&&w||(g[e]=d))}else e&&(g[e]=n);l(e,g,y)},e=t=v=function(e,t,n,o,r){return"string"==typeof e?m[e]?m[e](t):c(p(e,t).f):(e.splice||(w=e,t.splice?(e=t,t=n,n=null):e=i),t=t||function(){},"function"==typeof n&&(n=o,o=r),o?f(i,e,t,n):setTimeout(function(){f(i,e,t,n)},15),v)},v.config=function(e){return w=e,v},n=function(e,t,n){t.splice||(n=t,t=[]),h[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("durandal/amd/almond-custom",function(){}),n("main-built",function(){}),n("durandal/system",["require"],function(t){var n,i=!1,o=Object.keys,r=Object.prototype.hasOwnProperty,a=Object.prototype.toString,s=!1;if(Function.prototype.bind&&("object"==typeof console||"function"==typeof console)&&"object"==typeof console.log)try{["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}catch(c){s=!0}t.on&&t.on("moduleLoaded",function(e,t){n.setModuleId(e,t)}),e!==void 0&&(e.onResourceLoad=function(e,t){n.setModuleId(e.defined[t.id],t.id)});var u=function(){},l=function(){try{if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(var e=0;arguments.length>e;)console.log("Item "+(e+1)+": "+arguments[e]),e++;else 1==Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments));else Function.prototype.bind&&!s||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}catch(t){}};return n={version:"1.2.0",noop:u,getModuleId:function(e){return e?"function"==typeof e?e.prototype.__moduleId__:"string"==typeof e?null:e.__moduleId__:null},setModuleId:function(e,t){return e?"function"==typeof e?(e.prototype.__moduleId__=t,void 0):("string"!=typeof e&&(e.__moduleId__=t),void 0):void 0},debug:function(e){return 1!=arguments.length?i:(i=e,i?(this.log=l,this.log("Debug mode enabled.")):(this.log("Debug mode disabled."),this.log=u),void 0)},isArray:function(e){return"[object Array]"===a.call(e)},log:u,defer:function(e){return $.Deferred(e)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),n="x"==e?t:8|3&t;return n.toString(16)})},acquire:function(){var e=Array.prototype.slice.call(arguments,0);return this.defer(function(n){t(e,function(){var e=arguments;setTimeout(function(){n.resolve.apply(n,e)},1)})}).promise()}},n.keys=o||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)r.call(e,n)&&(t[t.length]=n);return t},n}),n("durandal/viewEngine",["./system"],function(e){var t;return t=$.parseHTML?function(e){return $.parseHTML(e)}:function(e){return $(e).get()},{viewExtension:".html",viewPlugin:"text",isViewUrl:function(e){return-1!==e.indexOf(this.viewExtension,e.length-this.viewExtension.length)},convertViewUrlToViewId:function(e){return e.substring(0,e.length-this.viewExtension.length)},convertViewIdToRequirePath:function(e){return this.viewPlugin+"!"+e+this.viewExtension},parseMarkup:function(e){var n=t(e);if(1==n.length)return n[0];for(var i=[],o=0;n.length>o;o++){var r=n[o];if(8!=r.nodeType){if(3==r.nodeType){var a=/\S/.test(r.nodeValue);if(!a)continue}i.push(r)}}return i.length>1?$(i).wrapAll('<div class="durandal-wrapper"></div>').parent().get(0):i[0]},createView:function(t){var n=this,i=this.convertViewIdToRequirePath(t);return e.defer(function(o){e.acquire(i).then(function(e){var i=n.parseMarkup(e);i.setAttribute("data-view",t),o.resolve(i)})}).promise()}}}),n("durandal/viewLocator",["./system","./viewEngine"],function(e,t){function n(e,t){for(var n=0;e.length>n;n++){var i=e[n],o=i.getAttribute("data-view");if(o==t)return i}}function i(e){return(e+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")}return{useConvention:function(e,t,n){e=e||"viewmodels",t=t||"views",n=n||t;var o=RegExp(i(e),"gi");this.convertModuleIdToViewId=function(e){return e.replace(o,t)},this.translateViewIdToArea=function(e,t){return t&&"partial"!=t?n+"/"+t+"/"+e:n+"/"+e}},locateViewForObject:function(t,n){var i;if(t.getView&&(i=t.getView()))return this.locateView(i,null,n);if(t.viewUrl)return this.locateView(t.viewUrl,null,n);var o=e.getModuleId(t);return o?this.locateView(this.convertModuleIdToViewId(o),null,n):this.locateView(this.determineFallbackViewId(t),null,n)},convertModuleIdToViewId:function(e){return e},determineFallbackViewId:function(e){var t=/function (.{1,})\(/,n=t.exec(""+e.constructor),i=n&&n.length>1?n[1]:"";return"views/"+i},translateViewIdToArea:function(e){return e},locateView:function(i,o,r){if("string"==typeof i){var a;if(a=t.isViewUrl(i)?t.convertViewUrlToViewId(i):i,o&&(a=this.translateViewIdToArea(a,o)),r){var s=n(r,a);if(s)return e.defer(function(e){e.resolve(s)}).promise()}return t.createView(a)}return e.defer(function(e){e.resolve(i)}).promise()}}}),n("durandal/viewModelBinder",["./system"],function(e){function t(t,r,a){if(!r||!t){if(n.throwOnErrors)throw Error(i);return e.log(i,r,t),void 0}if(!r.getAttribute){if(n.throwOnErrors)throw Error(o);return e.log(o,r,t),void 0}var s=r.getAttribute("data-view");try{e.log("Binding",s,t),n.beforeBind(t,r),a(),n.afterBind(t,r)}catch(c){if(n.throwOnErrors)throw Error(c.message+";\nView: "+s+";\nModuleId: "+e.getModuleId(t));e.log(c.message,s,t)}}var n,i="Insufficient Information to Bind",o="Unexpected View Type";return n={beforeBind:e.noop,afterBind:e.noop,bindContext:function(e,n,i){i&&(e=e.createChildContext(i)),t(e,n,function(){i&&i.beforeBind&&i.beforeBind(n),ko.applyBindings(e,n),i&&i.afterBind&&i.afterBind(n)})},bind:function(e,n){t(e,n,function(){e.beforeBind&&e.beforeBind(n),ko.applyBindings(e,n),e.afterBind&&e.afterBind(n)})}}}),n("durandal/viewModel",["./system"],function(e){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=s.defaults.closeOnDeactivate),e.beforeActivate||(e.beforeActivate=s.defaults.beforeActivate),e.afterDeactivate||(e.afterDeactivate=s.defaults.afterDeactivate),e.interpretResponse||(e.interpretResponse=s.defaults.interpretResponse),e.areSameItem||(e.areSameItem=s.defaults.areSameItem),e}function n(t,n,i,o,r){if(t&&t.deactivate){e.log("Deactivating",t);var a;try{a=t.deactivate(n)}catch(s){return e.log(s),o.resolve(!1),void 0}a&&a.then?a.then(function(){i.afterDeactivate(t,n,r),o.resolve(!0)},function(t){e.log(t),o.resolve(!1)}):(i.afterDeactivate(t,n,r),o.resolve(!0))}else t&&i.afterDeactivate(t,n,r),o.resolve(!0)}function i(t,n,i,o){if(t)if(t.activate){e.log("Activating",t);var r;try{r=t.activate(o)}catch(a){return e.log(a),i(!1),void 0}r&&r.then?r.then(function(){n(t),i(!0)},function(t){e.log(t),i(!1)}):(n(t),i(!0))}else n(t),i(!0);else i(!0)}function o(t,n,i){return e.defer(function(o){if(t&&t.canDeactivate){var r;try{r=t.canDeactivate(n)}catch(a){return e.log(a),o.resolve(!1),void 0}r.then?r.then(function(e){o.resolve(i.interpretResponse(e))},function(t){e.log(t),o.resolve(!1)}):o.resolve(i.interpretResponse(r))}else o.resolve(!0)}).promise()}function r(t,n,i,o){return e.defer(function(r){if(t==n())return r.resolve(!0),void 0;if(t&&t.canActivate){var a;try{a=t.canActivate(o)}catch(s){return e.log(s),r.resolve(!1),void 0}a.then?a.then(function(e){r.resolve(i.interpretResponse(e))},function(t){e.log(t),r.resolve(!1)}):r.resolve(i.interpretResponse(a))}else r.resolve(!0)}).promise()}function a(a,s){var c=ko.observable(null);s=t(s);var u=ko.computed({read:function(){return c()},write:function(e){u.viaSetter=!0,u.activateItem(e)}});return u.settings=s,s.activator=u,u.isActivating=ko.observable(!1),u.canDeactivateItem=function(e,t){return o(e,t,s)},u.deactivateItem=function(t,i){return e.defer(function(e){u.canDeactivateItem(t,i).then(function(o){o?n(t,i,s,e,c):(u.notifySubscribers(),e.resolve(!1))})}).promise()},u.canActivateItem=function(e,t){return r(e,c,s,t)},u.activateItem=function(t,o){var r=u.viaSetter;return u.viaSetter=!1,e.defer(function(a){if(u.isActivating())return a.resolve(!1),void 0;u.isActivating(!0);var l=c();return s.areSameItem(l,t,o)?(u.isActivating(!1),a.resolve(!0),void 0):(u.canDeactivateItem(l,s.closeOnDeactivate).then(function(d){d?u.canActivateItem(t,o).then(function(d){d?e.defer(function(e){n(l,s.closeOnDeactivate,s,e)}).promise().then(function(){t=s.beforeActivate(t,o),i(t,c,function(e){u.isActivating(!1),a.resolve(e)},o)}):(r&&u.notifySubscribers(),u.isActivating(!1),a.resolve(!1))}):(r&&u.notifySubscribers(),u.isActivating(!1),a.resolve(!1))}),void 0)}).promise()},u.canActivate=function(){var e;return a?(e=a,a=!1):e=u(),u.canActivateItem(e)},u.activate=function(){var e;return a?(e=a,a=!1):e=u(),u.activateItem(e)},u.canDeactivate=function(e){return u.canDeactivateItem(u(),e)},u.deactivate=function(e){return u.deactivateItem(u(),e)},u.includeIn=function(e){e.canActivate=function(){return u.canActivate()},e.activate=function(){return u.activate()},e.canDeactivate=function(e){return u.canDeactivate(e)},e.deactivate=function(e){return u.deactivate(e)}},s.includeIn?u.includeIn(s.includeIn):a&&u.activate(),u.forItems=function(t){s.closeOnDeactivate=!1,s.determineNextItemToActivate=function(e,t){var n=t-1;return-1==n&&e.length>1?e[1]:n>-1&&e.length-1>n?e[n]:null},s.beforeActivate=function(e){var n=u();if(e){var i=t.indexOf(e);-1==i?t.push(e):e=t()[i]}else e=s.determineNextItemToActivate(t,n?t.indexOf(n):0);return e},s.afterDeactivate=function(e,n){n&&t.remove(e)};var n=u.canDeactivate;u.canDeactivate=function(i){return i?e.defer(function(e){function n(){for(var t=0;r.length>t;t++)if(!r[t])return e.resolve(!1),void 0;e.resolve(!0)}for(var o=t(),r=[],a=0;o.length>a;a++)u.canDeactivateItem(o[a],i).then(function(e){r.push(e),r.length==o.length&&n()})}).promise():n()};var i=u.deactivate;return u.deactivate=function(n){return n?e.defer(function(e){function i(i){u.deactivateItem(i,n).then(function(){r++,t.remove(i),r==a&&e.resolve()})}for(var o=t(),r=0,a=o.length,s=0;a>s;s++)i(o[s])}).promise():i()},u},u}var s;return s={defaults:{closeOnDeactivate:!0,interpretResponse:function(e){if("string"==typeof e){var t=e.toLowerCase();return"yes"==t||"ok"==t}return e},areSameItem:function(e,t){return e==t},beforeActivate:function(e){return e},afterDeactivate:function(e,t,n){t&&n&&n(null)}},activator:a}}),n("durandal/composition",["./viewLocator","./viewModelBinder","./viewEngine","./system","./viewModel"],function(e,t,n,i,o){function r(e){return e.model&&e.model.activate&&(f.activateDuringComposition&&void 0==e.activate||e.activate)}function a(e,t){r(e)?o.activator().activateItem(e.model).then(function(e){e&&t()}):t()}function s(e){for(var t=[],n={childElements:t,activeView:null},i=ko.virtualElements.firstChild(e);i;)1==i.nodeType&&(t.push(i),i.getAttribute(d)&&(n.activeView=i)),i=ko.virtualElements.nextSibling(i);return n}function c(e,t,n){n.activeView&&n.activeView.removeAttribute(d),t&&(n.model&&n.model.viewAttached&&(n.composingNewView||n.alwaysAttachView)&&n.model.viewAttached(t),t.setAttribute(d,!0)),n.afterCompose&&n.afterCompose(e,t,n)}function u(e,t){if("string"==typeof t.transition){if(t.activeView){if(t.activeView==e)return!1;if(!e)return!0;if(t.skipTransitionOnSameViewId){var n=t.activeView.getAttribute("data-view"),i=e.getAttribute("data-view");return n!=i}}return!0}return!1}var l={},d="data-active-view",f={activateDuringComposition:!1,convertTransitionToModuleId:function(e){return"durandal/transitions/"+e},switchContent:function(e,t,n){if(n.transition=n.transition||this.defaultTransitionName,u(t,n)){var o=this.convertTransitionToModuleId(n.transition);i.acquire(o).then(function(i){n.transition=i,i(e,t,n).then(function(){c(e,t,n)})})}else t!=n.activeView&&(n.cacheViews&&n.activeView&&$(n.activeView).css("display","none"),t?n.cacheViews?n.composingNewView?(n.viewElements.push(t),ko.virtualElements.prepend(e,t)):$(t).css("display",""):(ko.virtualElements.emptyNode(e),ko.virtualElements.prepend(e,t)):n.cacheViews||ko.virtualElements.emptyNode(e)),c(e,t,n)},bindAndShow:function(e,i,o){o.composingNewView=o.cacheViews?-1==ko.utils.arrayIndexOf(o.viewElements,i):!0,a(o,function(){if(o.beforeBind&&o.beforeBind(e,i,o),o.preserveContext&&o.bindingContext)o.composingNewView&&t.bindContext(o.bindingContext,i,o.model);else if(i){var r=o.model||l,a=ko.dataFor(i);if(a!=r){if(!o.composingNewView)return $(i).remove(),n.createView(i.getAttribute("data-view")).then(function(t){f.bindAndShow(e,t,o)}),void 0;t.bind(r,i)}}f.switchContent(e,i,o)})},defaultStrategy:function(t){return e.locateViewForObject(t.model,t.viewElements)},getSettings:function(e){var t=ko.utils.unwrapObservable(e())||{};if("string"==typeof t)return t;var n=i.getModuleId(t);if(n)return{model:t};for(var o in t)t[o]=ko.utils.unwrapObservable(t[o]);return t},executeStrategy:function(e,t){t.strategy(t).then(function(n){f.bindAndShow(e,n,t)})},inject:function(t,n){return n.model?n.view?(e.locateView(n.view,n.area,n.viewElements).then(function(e){f.bindAndShow(t,e,n)}),void 0):((void 0===n.view||n.view)&&(n.strategy||(n.strategy=this.defaultStrategy),"string"==typeof n.strategy?i.acquire(n.strategy).then(function(e){n.strategy=e,f.executeStrategy(t,n)}):this.executeStrategy(t,n)),void 0):(this.bindAndShow(t,null,n),void 0)},compose:function(t,o,r){"string"==typeof o&&(o=n.isViewUrl(o)?{view:o}:{model:o});var a=i.getModuleId(o);a&&(o={model:o});var c=s(t);o.bindingContext=r,o.activeView=c.activeView,o.cacheViews&&!o.viewElements&&(o.viewElements=c.childElements),o.model?"string"==typeof o.model?i.acquire(o.model).then(function(e){o.model="function"==typeof e?new e(t,o):e,f.inject(t,o)}):f.inject(t,o):o.view?(o.area=o.area||"partial",o.preserveContext=!0,e.locateView(o.view,o.area,o.viewElements).then(function(e){f.bindAndShow(t,e,o)})):this.bindAndShow(t,null,o)}};return ko.bindingHandlers.compose={update:function(e,t,n,i,o){var r=f.getSettings(t);f.compose(e,r,o)}},ko.virtualElements.allowedBindings.compose=!0,f}),n("durandal/widget",["./system","./composition"],function(e,t){var n="data-part",i="["+n+"]",o={},r={},a=["model","view","kind"],s={getParts:function(t){var o={};e.isArray(t)||(t=[t]);for(var r=0;t.length>r;r++){var a=t[r];if(a.getAttribute){var s=a.getAttribute(n);s&&(o[s]=a);for(var c=$(i,a),u=0;c.length>u;u++){var l=c.get(u);o[l.getAttribute(n)]=l}}}return o},getSettings:function(e){var t=ko.utils.unwrapObservable(e())||{};if("string"==typeof t)return t;for(var n in t)t[n]=-1!=ko.utils.arrayIndexOf(a,n)?ko.utils.unwrapObservable(t[n]):t[n];return t},registerKind:function(e){ko.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,i,o,r){var a=s.getSettings(n);a.kind=e,s.create(t,a,r)}},ko.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(r[e]=t),n&&(o[e]=n)},convertKindToModuleId:function(e){return o[e]||"durandal/widgets/"+e+"/controller"},convertKindToViewId:function(e){return r[e]||"durandal/widgets/"+e+"/view"},beforeBind:function(e,t){var n=s.getParts(e),i=s.getParts(t);for(var o in n)$(i[o]).replaceWith(n[o])},createCompositionSettings:function(e){return e.model||(e.model=this.convertKindToModuleId(e.kind)),e.view||(e.view=this.convertKindToViewId(e.kind)),e.preserveContext=!0,e.beforeBind=this.beforeBind,e},create:function(e,n,i){"string"==typeof n&&(n={kind:n});var o=s.createCompositionSettings(n);t.compose(e,o,i)}};return ko.bindingHandlers.widget={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,o){var r=s.getSettings(t);s.create(e,r,o)}},ko.virtualElements.allowedBindings.widget=!0,s}),n("durandal/modalDialog",["./composition","./system","./viewModel"],function(e,t,n){function i(e){return t.defer(function(n){"string"==typeof e?t.acquire(e).then(function(e){"function"==typeof e?n.resolve(new e):n.resolve(e)}):n.resolve(e)}).promise()}var o={},r=0,a={currentZIndex:1050,getNextZIndex:function(){return++this.currentZIndex},isModalOpen:function(){return r>0},getContext:function(e){return o[e||"default"]},addContext:function(e,t){t.name=e,o[e]=t;var n="show"+e.substr(0,1).toUpperCase()+e.substr(1);this[n]=function(t,n){return this.show(t,n,e)}},createCompositionSettings:function(e,t){var n={model:e,activate:!1};return t.afterCompose&&(n.afterCompose=t.afterCompose),n},show:function(a,s,c){var u=this,l=o[c||"default"];return t.defer(function(t){i(a).then(function(i){var o=n.activator();o.activateItem(i,s).then(function(n){if(n){var a=i.modal={owner:i,context:l,activator:o,close:function(){var e=arguments;o.deactivateItem(i,!0).then(function(n){n&&(r--,l.removeHost(a),delete i.modal,t.resolve.apply(t,e))})}};a.settings=u.createCompositionSettings(i,l),l.addHost(a),r++,e.compose(a.host,a.settings)}else t.resolve(!1)})})}).promise()}};return a.addContext("default",{blockoutOpacity:.2,removeDelay:200,addHost:function(e){var t=$("body"),n=$('<div class="modalBlockout"></div>').css({"z-index":a.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(t),i=$('<div class="modalHost"></div>').css({"z-index":a.getNextZIndex()}).appendTo(t);if(e.host=i.get(0),e.blockout=n.get(0),!a.isModalOpen()){e.oldBodyMarginRight=$("body").css("margin-right");var o=$("html"),r=t.outerWidth(!0),s=o.scrollTop();$("html").css("overflow-y","hidden");var c=$("body").outerWidth(!0);t.css("margin-right",c-r+parseInt(e.oldBodyMarginRight)+"px"),o.scrollTop(s),$("#simplemodal-overlay").css("width",c+"px")}},removeHost:function(e){if($(e.host).css("opacity",0),$(e.blockout).css("opacity",0),setTimeout(function(){$(e.host).remove(),$(e.blockout).remove()},this.removeDelay),!a.isModalOpen()){var t=$("html"),n=t.scrollTop();t.css("overflow-y","").scrollTop(n),$("body").css("margin-right",e.oldBodyMarginRight)}},afterCompose:function(e,t,n){var i=$(t),o=i.width(),r=i.height();i.css({"margin-top":""+-r/2+"px","margin-left":""+-o/2+"px"}),$(n.model.modal.host).css("opacity",1),$(t).hasClass("autoclose")&&$(n.model.modal.blockout).click(function(){n.model.modal.close()}),$(".autofocus",t).each(function(){$(this).focus()})}}),a}),n("durandal/events",["./system"],function(e){var t=/\s+/,n=function(){},i=function(e,t){this.owner=e,this.events=t};return i.prototype.then=function(e,t){return this.callback=e||this.callback,this.context=t||this.context,this.callback?(this.owner.on(this.events,this.callback,this.context),this):this},i.prototype.on=i.prototype.then,i.prototype.off=function(){return this.owner.off(this.events,this.callback,this.context),this},n.prototype.on=function(e,n,o){var r,a,s;if(n){for(r=this.callbacks||(this.callbacks={}),e=e.split(t);a=e.shift();)s=r[a]||(r[a]=[]),s.push(n,o);return this}return new i(this,e)},n.prototype.off=function(n,i,o){var r,a,s,c;if(!(a=this.callbacks))return this;if(!(n||i||o))return delete this.callbacks,this;for(n=n?n.split(t):e.keys(a);r=n.shift();)if((s=a[r])&&(i||o))for(c=s.length-2;c>=0;c-=2)i&&s[c]!==i||o&&s[c+1]!==o||s.splice(c,2);else delete a[r];return this},n.prototype.trigger=function(e){var n,i,o,r,a,s,c,u;if(!(i=this.callbacks))return this;for(u=[],e=e.split(t),r=1,a=arguments.length;a>r;r++)u[r-1]=arguments[r];for(;n=e.shift();){if((c=i.all)&&(c=c.slice()),(o=i[n])&&(o=o.slice()),o)for(r=0,a=o.length;a>r;r+=2)o[r].apply(o[r+1]||this,u);if(c)for(s=[n].concat(u),r=0,a=c.length;a>r;r+=2)c[r].apply(c[r+1]||this,s)}return this},n.prototype.proxy=function(e){var t=this;return function(n){t.trigger(e,n)}},n.includeIn=function(e){e.on=n.prototype.on,e.off=n.prototype.off,e.trigger=n.prototype.trigger,e.proxy=n.prototype.proxy},n}),n("durandal/app",["./system","./viewEngine","./composition","./widget","./modalDialog","./events"],function(e,t,n,i,o,r){var a={title:"Application",showModal:function(e,t,n){return o.show(e,t,n)},showMessage:function(e,t,n){return o.show("./messageBox",{message:e,title:t||this.title,options:n})},start:function(){var t=this;return t.title&&(document.title=t.title),e.defer(function(t){$(function(){e.log("Starting Application"),t.resolve(),e.log("Started Application")})}).promise()},setRoot:function(e,i,o){var r,a={activate:!0,transition:i};r=o&&"string"!=typeof o?o:document.getElementById(o||"applicationHost"),"string"==typeof e?t.isViewUrl(e)?a.view=e:a.model=e:a.model=e,n.compose(r,a)},adaptToDevice:function(){document.ontouchmove=function(e){e.preventDefault()}}};return r.includeIn(a),a}),n("durandal/plugins/router",["../system","../viewModel","../app"],function(e,t,n){function i(t){V(!1),e.log("Redirecting"),h.navigateTo(t)}function o(){O=!0,e.log("Cancelling Navigation"),w&&g.setLocation(w),O=!1,V(!1);var t=g.last_location[1].split("#/")[1];w||!t?E():t!=y?window.location.replace("#/"+y):E()}function r(e,t,n){S(e),h.onNavigationComplete(e,t,n),b=n,w=g.last_location[1].replace("/",""),E()}function a(t,n,i){e.log("Activating Route",t,i,n),C.activateItem(i,n).then(function(e){e?r(t,n,i):o()})}function s(){return O||g.last_location[1].replace("/","")==w}function c(e,t,n){var r=h.guardRoute(e,t,n);r?r.then?r.then(function(r){r?"string"==typeof r?i(r):a(e,t,n):o()}):"string"==typeof r?i(r):a(e,t,n):o()}function u(){if(!V()){var t=R.shift();R=[],t&&(V(!0),e.acquire(t.routeInfo.moduleId).then(function(e){t.params.routeInfo=t.routeInfo,t.params.router=h;var n=h.getActivatableInstance(t.routeInfo,t.params,e);h.guardRoute?c(t.routeInfo,t.params,n):a(t.routeInfo,t.params,n)}))}}function l(e,t){R.unshift({routeInfo:e,params:t}),u()}function d(e,t){var n=I[e];if(!s()){if(!n){if(!h.autoConvertRouteToModuleId)return h.handleInvalidRoute(e,t),void 0;n={moduleId:h.autoConvertRouteToModuleId(e,t),name:h.convertRouteToName(e)}}l(n,t)}}function f(){d(y,this.params||{})}function v(){d(""+this.app.last_route.path,this.params||{})}function p(){var e,t=this.params||{};if(h.autoConvertRouteToModuleId){var n=this.path.split("#/");if(2==n.length){var i=n[1].split("/");return e=i[0],t.splat=i.splice(1),d(e,t),void 0}}h.handleInvalidRoute(this.app.last_location[1],t)}function m(e){return h.prepareRouteInfo(e),I[""+e.url]=e,k.push(e),e.visible&&(e.isActive=ko.computed(function(){return T()&&C()&&C().__moduleId__==e.moduleId}),A.push(e)),e}var g,h,w,b,y,x,I={},k=ko.observableArray([]),A=ko.observableArray([]),T=ko.observable(!1),V=ko.observable(!1),O=!1,C=t.activator(),S=ko.observable(),R=[],E=function(){E=e.noop,T(!0),h.dfd.resolve(),delete h.dfd};return C.settings.areSameItem=function(){return!1},h={ready:T,allRoutes:k,visibleRoutes:A,isNavigating:V,activeItem:C,activeRoute:S,afterCompose:function(){setTimeout(function(){V(!1),u()},10)},getActivatableInstance:function(e,t,n){return"function"==typeof n?new n:n},useConvention:function(e){e=null==e?"viewmodels":e,e&&(e+="/"),h.convertRouteToModuleId=function(t){return e+h.stripParameter(t)}},stripParameter:function(e){var t=e.indexOf(":"),n=t>0?t-1:e.length;return e.substring(0,n)},handleInvalidRoute:function(t,n){e.log("No Route Found",t,n)},onNavigationComplete:function(e){document.title=n.title?e.caption+" | "+n.title:e.caption},navigateBack:function(){window.history.back()},navigateTo:function(e,t){switch(t=t||"trigger",t.toLowerCase()){case"skip":x=e,g.setLocation(e);break;case"replace":window.location.replace(e);break;default:g.lookupRoute("get",e)?g.setLocation(e):window.location.href=e}},replaceLocation:function(e){this.navigateTo(e,"replace")},convertRouteToName:function(e){var t=h.stripParameter(e);return t.substring(0,1).toUpperCase()+t.substring(1)},convertRouteToModuleId:function(e){return h.stripParameter(e)},prepareRouteInfo:function(e){e.url instanceof RegExp||(e.name=e.name||h.convertRouteToName(e.url),e.moduleId=e.moduleId||h.convertRouteToModuleId(e.url),e.hash=e.hash||"#/"+e.url),e.caption=e.caption||e.name,e.settings=e.settings||{}},mapAuto:function(e){e=e||"viewmodels",e+="/",h.autoConvertRouteToModuleId=function(t){return e+h.stripParameter(t)}},mapNav:function(e,t,n){return"string"==typeof e?this.mapRoute(e,t,n,!0):(e.visible=!0,m(e))},mapRoute:function(e,t,n,i){return"string"==typeof e?m({url:e,moduleId:t,name:n,visible:i}):m(e)},map:function(t){if(!e.isArray(t))return m(t);for(var n=[],i=0;t.length>i;i++)n.push(m(t[i]));return n},activate:function(t){return e.defer(function(n){var i;h.dfd=n,y=t,g=Sammy(function(e){for(var t=k(),n=0;t.length>n;n++){var o=t[n];e.get(o.url,v),i=this.routes.get[n],I[""+i.path]=o}e.get("#/",f),e.get(/\#\/(.*)/,p)}),g._checkFormSubmission=function(){return!1},g.before(null,function(e){if(x){if(e.path==="/"+x)return x=null,!1;throw Error("Expected to skip url '"+x+"', but found url '"+e.path+"'")}return!0}),g.log=function(){var t=Array.prototype.slice.call(arguments,0);t.unshift("Sammy"),e.log.apply(e,t)},g.run("#/")}).promise()}}}),n("services/logger",["durandal/system"],function(e){function t(e,t,n,o){i(e,t,n,o,"info")}function n(e,t,n,o){i(e,t,n,o,"error")}function i(t,n,i,o,r){i=i?"["+i+"] ":"",n?e.log(i,t,n):e.log(i,t),o&&("error"===r?toastr.error(t):toastr.info(t))}var o={log:t,logError:n};return o}),t.config({paths:{text:"durandal/amd/text"}}),n("main",["durandal/app","durandal/viewLocator","durandal/system","durandal/plugins/router","services/logger"],function(e,t,n,i,o){n.debug(!0),e.start().then(function(){toastr.options.positionClass="toast-bottom-right",toastr.options.backgroundpositionClass="toast-bottom-right",i.handleInvalidRoute=function(e){o.logError("No Route Found",e,"main",!0)},i.useConvention(),t.useConvention(),e.adaptToDevice(),e.setRoot("viewmodels/shell","entrance")})}),n("durandal/http",[],function(){return{defaultJSONPCallbackParam:"callback",get:function(e,t){return $.ajax(e,{data:t})},jsonp:function(e,t,n){return-1==e.indexOf("=?")&&(n=n||this.defaultJSONPCallbackParam,e+=-1==e.indexOf("?")?"?":"&",e+=n+"=?"),$.ajax({url:e,dataType:"jsonp",data:t})},post:function(e,t){return $.ajax({url:e,data:ko.toJSON(t),type:"POST",contentType:"application/json",dataType:"json"})}}}),n("text",["module"],function(e){var n,i,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,c=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,l=s&&(location.port||void 0),d=[],f=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(r,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(i){}if(e){o=[n];break}}return e},parseName:function(e){var t=!1,n=e.indexOf("."),i=e.substring(0,n),o=e.substring(n+1,e.length);return n=o.indexOf("!"),-1!==n&&(t=o.substring(n+1,o.length),t="strip"===t,o=o.substring(0,n)),{moduleName:i,ext:o,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,o){var r,a,s,c=n.xdRegExp.exec(e);return c?(r=c[2],a=c[3],a=a.split(":"),s=a[1],a=a[0],!(r&&r!==t||a&&a.toLowerCase()!==i.toLowerCase()||(s||a)&&s!==o)):!0},finishLoad:function(e,t,i,o){i=t?n.strip(i):i,f.isBuild&&(d[e]=i),o(i)},load:function(e,t,i,o){if(o.isBuild&&!o.inlineText)return i(),void 0;f.isBuild=o.isBuild;var r=n.parseName(e),a=r.moduleName+"."+r.ext,d=t.toUrl(a),v=f.useXhr||n.useXhr;!s||v(d,c,u,l)?n.get(d,function(t){n.finishLoad(e,r.strip,t,i)},function(e){i.error&&i.error(e)}):t([a],function(e){n.finishLoad(r.moduleName+"."+r.ext,r.strip,e,i)})},write:function(e,t,i){if(d.hasOwnProperty(t)){var o=n.jsEscape(d[t]);i.asModule(e+"!"+t,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,t,i,o,r){var a=n.parseName(t),s=a.moduleName+"."+a.ext,c=i.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,i,function(){var t=function(e){return o(c,e)};t.asModule=function(e,t){return o.asModule(e,c,t)},n.write(e,s,t,r)},r)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(i=t.nodeRequire("fs"),n.get=function(e,t){var n=i.readFileSync(e,"utf8");0===n.indexOf("﻿")&&(n=n.substring(1)),t(n)}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,i){var o=n.createXhr();o.open("GET",e,!0),f.onXhr&&f.onXhr(o,e),o.onreadystatechange=function(){var n,r;4===o.readyState&&(n=o.status,n>399&&600>n?(r=Error(e+" HTTP status: "+n),r.xhr=o,i(r)):t(o.responseText))},o.send(null)}:("rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,t){var n,i,o="utf-8",r=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r),o)),c="";try{for(n=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),n.append(i);null!==(i=s.readLine());)n.append(a),n.append(i);c=""+n+""}finally{s.close()}t(c)}),n}),n("text!durandal/messageBox.html",[],function(){return'<div class="messageBox">\r\n    <div class="modal-header">\r\n        <h3 data-bind="html: title"></h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p class="message" data-bind="html: message"></p>\r\n    </div>\r\n    <div class="modal-footer" data-bind="foreach: options">\r\n        <button class="btn" data-bind="click: function () { $parent.selectOption($data); }, html: $data, css: { \'btn-primary\': $index() == 0, autofocus: $index() == 0 }"></button>\r\n    </div>\r\n</div>'}),n("durandal/messageBox",[],function(){var e=function(t,n,i){this.message=t,this.title=n||e.defaultTitle,this.options=i||e.defaultOptions};return e.prototype.selectOption=function(e){this.modal.close(e)},e.prototype.activate=function(t){t&&(this.message=t.message,this.title=t.title||e.defaultTitle,this.options=t.options||e.defaultOptions)
},e.defaultTitle="Application",e.defaultOptions=["Ok"],e}),n("durandal/transitions/entrance",["../system"],function(e){var t=100,n=function(n,i,o){return e.defer(function(e){function r(){e.resolve()}function a(){o.keepScrollPosition||$(document).scrollTop(0)}function s(){a(),o.cacheViews?o.composingNewView&&ko.virtualElements.prepend(n,i):(ko.virtualElements.emptyNode(n),ko.virtualElements.prepend(n,i));var e={marginLeft:"20px",marginRight:"-20px",opacity:0,display:"block"},t={marginRight:0,marginLeft:0,opacity:1};$(i).css(e),$(i).animate(t,u,"swing",r)}if(i){var c=$(o.activeView),u=o.duration||500;c.length?c.fadeOut(t,s):s()}else a(),o.activeView?$(o.activeView).fadeOut(t,function(){o.cacheViews||ko.virtualElements.emptyNode(n),r()}):(o.cacheViews||ko.virtualElements.emptyNode(n),r())}).promise()};return n}),n("services/backend",["services/logger"],function(e){function t(e,t,n){var o={CampaignId:t,QrCodeId:n,CustomerId:e};return $.post("/api/scan",o).fail(i)}function n(e){var t=breeze.EntityQuery.from("Subscriptions").where("Customer.Id","==",e);return r.executeQuery(t).fail(i)}function i(t){e.logError("Query failed: "+t.message)}var o={getSubscriptions:n,scan:t},r=new breeze.EntityManager("api/subscriptions");return o}),n("services/localstore",[],function(){function e(){return localStorage.getItem("qrcode.customerId")}function t(e){return localStorage.setItem("qrcode.customerId",e)}var n={getCustomerId:e,setCustomerId:t};return n}),n("viewmodels/details",["services/logger"],function(e){function t(){return e.log("Details View Activated",null,"details",!0),!0}var n={activate:t,title:"Details View"};return n}),n("viewmodels/home",["services/logger"],function(e){function t(){return e.log("Home View Activated",null,"home",!0),!0}var n={activate:t,title:"Home View"};return n}),n("viewmodels/scan",["services/logger","services/backend","services/localstore"],function(e,t,n){function i(i){e.log("Scan View Activated",null,"scan",!0);var r=n.getCustomerId();return t.scan(r,i.campaignId,i.qrId).then(function(e){n.setCustomerId(e.CustomerId),o.title("Congratulations!"),o.numberOfPoints(e.Subscription.NumberOfPoints),o.campaignDescription(e.CampaignDescription)}),!0}var o={activate:i,title:ko.observable("Scanning..."),campaignDescription:ko.observable(""),numberOfPoints:ko.observable(0)};return o}),n("viewmodels/shell",["durandal/system","durandal/plugins/router","services/logger"],function(e,t,n){function i(){return o()}function o(){return t.mapNav("subscriptions"),t.mapNav("scan/:campaignId/:qrId"),r("QR has been loaded!",null,!0),t.activate("subscriptions")}function r(t,i,o){n.log(t,i,e.getModuleId(a),o)}var a={activate:i,router:t};return a}),n("viewmodels/subscriptions",["services/logger","services/backend","services/localstore"],function(e,t,n){function i(){return e.log("Subscriptions View Activated",null,"home",!0),t.getSubscriptions(n.getCustomerId()).then(function(e){r.subscriptions(e.results)}),!0}function o(){return!1}var r={activate:i,isRedeemAvailable:o,title:"My subscriptions",subscriptions:ko.observableArray([])};return r}),n("text!views/details.html",[],function(){return'<section>\r\n    <h2 class="page-title" data-bind="text: title"></h2>\r\n</section>'}),n("text!views/footer.html",[],function(){return'<nav class="navbar navbar-fixed-bottom">\r\n    <div class="navbar-inner navbar-content-center">\r\n        <span class="pull-left"><a href="http://johnpapa.net/spa" target="_blank">Learn how to build a SPA </a></span>\r\n        <span class="pull-right"><a href="http://johnpapa.net/hottowel" target="_blank">Hot Towel SPA - © 2013 JohnPapa.net</a></span>\r\n    </div>\r\n</nav>\r\n'}),n("text!views/home.html",[],function(){return'<section>\r\n    <h2 class="page-title" data-bind="text: title"></h2>\r\n</section>'}),n("text!views/nav.html",[],function(){return'<nav class="navbar navbar-fixed-top">\r\n    <div class="navbar-inner">\r\n        <a class="brand" href="/">\r\n            <div data-bind="with: router.activeItem">\r\n                <h1 class="title" data-bind="text: title"></h1>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</nav>\r\n\r\n'}),n("text!views/scan.html",[],function(){return'<section>\r\n    \r\n    <div data-bind="if: numberOfPoints() > 0">\r\n        You now have earned <span data-bind="text: numberOfPoints"></span> points on <span data-bind="text: campaignDescription"></span>! \r\n\r\n        <div class="divider-vertical">&nbsp;</div>\r\n        \r\n        <a href="#subscriptions" class="btn">My subscriptions</a>\r\n    </div>\r\n    \r\n</section>'}),n("text!views/shell.html",[],function(){return"<div>\r\n    <header>\r\n        <!--ko compose: {view: 'nav'} --><!--/ko-->\r\n    </header>\r\n    \r\n    <section id=\"content\" class=\"main container-fluid\">\r\n        <!--ko compose: {model: router.activeItem, \r\n            afterCompose: router.afterCompose, \r\n            transition: 'entrance'} -->\r\n        <!--/ko-->\r\n    </section>\r\n    \r\n</div>\r\n"}),n("text!views/subscriptions.html",[],function(){return'<section>   \r\n    <table data-bind="foreach: subscriptions">\r\n        <tr>\r\n            <td>\r\n                <span class="badge" data-bind="text: NumberOfPoints, css: {\'badge-success\': NumberOfPoints() > Campaign().NumberOfPointsBeforeRedeem()}"></span>\r\n            </td>\r\n            <td>\r\n                <span data-bind="text: Campaign().Description"></span>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</section>'}),t(["main"])})();