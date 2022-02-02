!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s=function(e,t,i,a,s,n,r,l){var h,o="function"==typeof e?e.options:e;if(t&&(o.render=t,o.staticRenderFns=i,o._compiled=!0),a&&(o.functional=!0),n&&(o._scopeId="data-v-"+n),r?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},o._ssrRegister=h):s&&(h=l?function(){s.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:s),h)if(o.functional){o._injectStyles=h;var u=o.render;o.render=function(e,t){return h.call(t),u(e,t)}}else{var d=o.beforeCreate;o.beforeCreate=d?[].concat(d,h):[h]}return{exports:e,options:o}}({props:{elementId:String,inputId:String,existingTags:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},idField:{type:String,default:"key"},textField:{type:String,default:"value"},displayField:{type:String,default:null},valueFields:{type:String,default:null},disabled:{type:Boolean,default:!1},typeahead:{type:Boolean,default:!1},typeaheadStyle:{type:String,default:"badges"},typeaheadActivationThreshold:{type:Number,default:1},typeaheadMaxResults:{type:Number,default:0},typeaheadAlwaysShow:{type:Boolean,default:!1},typeaheadShowOnFocus:{type:Boolean,default:!0},typeaheadHideDiscard:{type:Boolean,default:!1},typeaheadUrl:{type:String,default:""},typeaheadCallback:{type:Function,default:null},placeholder:{type:String,default:"Add a tag"},discardSearchText:{type:String,default:"Discard Search Results"},limit:{type:Number,default:0},hideInputOnLimit:{type:Boolean,default:!1},onlyExistingTags:{type:Boolean,default:!1},deleteOnBackspace:{type:Boolean,default:!0},allowDuplicates:{type:Boolean,default:!1},validate:{type:Function,default:function(){return!0}},addTagsOnComma:{type:Boolean,default:!1},addTagsOnSpace:{type:Boolean,default:!1},addTagsOnBlur:{type:Boolean,default:!1},wrapperClass:{type:String,default:"tags-input-wrapper-default"},sortSearchResults:{type:Boolean,default:!0},caseSensitiveTags:{type:Boolean,default:!1},beforeAddingTag:{type:Function,default:function(){return!0}},beforeRemovingTag:{type:Function,default:function(){return!0}}},data:function(){return{badgeId:0,tags:[],input:"",oldInput:"",hiddenInput:"",searchResults:[],searchSelection:0,selectedTag:-1,isActive:!1,composing:!1}},created:function(){this.typeaheadTags=this.cloneArray(this.existingTags),this.tagsFromValue(),this.typeaheadAlwaysShow&&this.searchTag(!1)},mounted:function(){var e=this;this.$emit("initialized"),document.addEventListener("click",(function(t){t.target!==e.$refs.taginput&&e.clearSearchResults()}))},computed:{hideInputField:function(){return this.hideInputOnLimit&&this.limit>0&&this.tags.length>=this.limit||this.disabled}},watch:{input:function(e,t){if(this.searchTag(!1),e.length&&e!=t){e.substring(t.length,e.length);this.addTagsOnSpace&&e.endsWith(" ")&&(this.input=e.trim(),this.tagFromInput(!0)),this.addTagsOnComma&&(e=e.trim()).endsWith(",")&&(this.input=e.substring(0,e.length-1),this.tagFromInput(!0)),this.$emit("change",e)}},existingTags:function(e){this.typeaheadTags.splice(0),this.typeaheadTags=this.cloneArray(e),this.searchTag()},tags:function(){this.hiddenInput=JSON.stringify(this.tags),this.$emit("input",this.tags)},value:function(){this.tagsFromValue()},typeaheadAlwaysShow:function(e){e?this.searchTag(!1):this.clearSearchResults()}},methods:{escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},tagFromInput:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.composing)if(this.searchResults.length&&this.searchSelection>=0&&!e)this.tagFromSearch(this.searchResults[this.searchSelection]),this.input="";else{var t=this.input.trim();if(!this.onlyExistingTags&&t.length&&this.validate(t)){var i;this.input="";var s=(a(i={},this.idField,""),a(i,this.textField,t),i),n=this.escapeRegExp(this.caseSensitiveTags?s[this.textField]:s[this.textField].toLowerCase()),r=!0,l=!1,h=void 0;try{for(var o,u=this.typeaheadTags[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var d=o.value,c=this.escapeRegExp(this.caseSensitiveTags?d[this.textField]:d[this.textField].toLowerCase());if(n===c){s=Object.assign({},d);break}}}catch(e){l=!0,h=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw h}}this.addTag(s)}}},tagFromSearchOnClick:function(e){this.tagFromSearch(e),this.$refs.taginput.blur()},tagFromSearch:function(e){var t=this;this.clearSearchResults(),this.addTag(e),this.$nextTick((function(){t.input="",t.oldInput=""}))},addTag:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.disabled||i)return!!this.beforeAddingTag(e)&&(this.limit>0&&this.tags.length>=this.limit?(this.$emit("limit-reached"),!1):void(this.tagSelected(e)||(this.tags.push(e),this.$nextTick((function(){t.$emit("tag-added",e),t.$emit("tags-updated")})))))},removeLastTag:function(){!this.input.length&&this.deleteOnBackspace&&this.tags.length&&this.removeTag(this.tags.length-1)},removeTag:function(e){var t=this;if(!this.disabled){var i=this.tags[e];if(!this.beforeRemovingTag(i))return!1;this.tags.splice(e,1),this.$nextTick((function(){t.$emit("tag-removed",i),t.$emit("tags-updated"),t.typeaheadAlwaysShow&&t.searchTag()}))}},searchTag:function(){var e=this;if(!0!==this.typeahead)return!1;if(this.oldInput!=this.input||!this.searchResults.length&&0==this.typeaheadActivationThreshold||this.typeaheadAlwaysShow||this.typeaheadShowOnFocus){this.typeaheadUrl.length||this.typeaheadCallback||(this.searchResults=[]),this.searchSelection=0;var t=this.input.trim();if(t.length&&t.length>=this.typeaheadActivationThreshold||0==this.typeaheadActivationThreshold||this.typeaheadAlwaysShow){var i=this.escapeRegExp(this.caseSensitiveTags?t:t.toLowerCase());if(this.typeaheadCallback)this.typeaheadCallback(i).then((function(t){e.typeaheadTags=t,e.doSearch(i)}));else if(this.typeaheadUrl.length>0){this.typeaheadTags.splice(0);var a=new XMLHttpRequest,s=this;a.onreadystatechange=function(){4==this.readyState&&200==this.status&&(s.typeaheadTags=JSON.parse(a.responseText),s.doSearch(i))};var n=this.typeaheadUrl.replace(":search",i);a.open("GET",n,!0),a.send()}else this.doSearch(i)}this.oldInput=this.input}},doSearch:function(e){var t=this;this.searchResults=[];var i=!0,a=!1,s=void 0;try{for(var n,r=this.typeaheadTags[Symbol.iterator]();!(i=(n=r.next()).done);i=!0){var l=n.value,h=this.caseSensitiveTags?l[this.textField]:l[this.textField].toLowerCase(),o=this.searchResults.map((function(e){return e[t.idField]}));h.search(e)>-1&&!this.tagSelected(l)&&!o.includes(l[this.idField])&&this.searchResults.push(l)}}catch(e){a=!0,s=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw s}}this.sortSearchResults&&this.searchResults.sort((function(e,i){return e[t.textField]<i[t.textField]?-1:e[t.textField]>i[t.textField]?1:0})),this.typeaheadMaxResults>0&&(this.searchResults=this.searchResults.slice(0,this.typeaheadMaxResults))},hideTypeahead:function(){var e=this;this.input.length||this.$nextTick((function(){e.clearSearchResults()}))},nextSearchResult:function(){this.searchSelection+1<=this.searchResults.length-1&&this.searchSelection++},prevSearchResult:function(){this.searchSelection>0&&this.searchSelection--},clearSearchResults:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.searchResults=[],this.searchSelection=0,this.typeaheadAlwaysShow&&this.$nextTick((function(){e.searchTag()})),t&&this.$refs.taginput.focus()},clearTags:function(){this.tags.splice(0,this.tags.length)},tagsFromValue:function(){if(this.value&&this.value.length){if(!Array.isArray(this.value))return void console.error("Voerro Tags Input: the v-model value must be an array!");var e=this.value;if(this.tags==e)return;this.clearTags();var t=!0,i=!1,a=void 0;try{for(var s,n=e[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var r=s.value;this.addTag(r,!0)}}catch(e){i=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw a}}}else{if(0==this.tags.length)return;this.clearTags()}},tagSelected:function(e){if(this.allowDuplicates)return!1;if(!e)return!1;var t=this.escapeRegExp(this.caseSensitiveTags?e[this.textField]:e[this.textField].toLowerCase()),i=!0,a=!1,s=void 0;try{for(var n,r=this.tags[Symbol.iterator]();!(i=(n=r.next()).done);i=!0){var l=n.value,h=this.caseSensitiveTags?l[this.textField]:l[this.textField].toLowerCase();if(l[this.idField]===e[this.idField]&&this.escapeRegExp(h).length==t.length&&h.search(t)>-1)return!0}}catch(e){a=!0,s=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw s}}return!1},clearInput:function(){this.input=""},onKeyUp:function(e){this.$emit("keyup",e)},onKeyDown:function(e){this.$emit("keydown",e)},onFocus:function(e){this.$emit("focus",e),this.isActive=!0},onClick:function(e){this.$emit("click",e),this.isActive=!0,this.searchTag()},onBlur:function(e){this.$emit("blur",e),this.addTagsOnBlur&&this.tagFromInput(!0),this.typeaheadAlwaysShow?this.searchTag():this.hideTypeahead(),this.isActive=!1},hiddenInputValue:function(e){if(!this.valueFields)return JSON.stringify(e);var t=this.valueFields.replace(/\s/,"").split(",");return 1===t.length?e[t[0]]:JSON.stringify(Object.assign.apply(Object,[{}].concat(function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(t.map((function(t){return a({},t,e[t])}))))))},getDisplayField:function(e){return void 0!==this.displayField&&null!==this.displayField&&void 0!==e[this.displayField]&&null!==e[this.displayField]&&""!==e[this.displayField]?e[this.displayField]:e[this.textField]},cloneArray:function(e){return e.map((function(e){return Object.assign({},e)}))}}},(function(){var e,t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"tags-input-root",staticStyle:{position:"relative"}},[a("div",{class:(e={},e[t.wrapperClass+" tags-input"]=!0,e.active=t.isActive,e.disabled=t.disabled,e)},[t._l(t.tags,(function(e,i){return a("span",{key:i,staticClass:"tags-input-badge tags-input-badge-pill tags-input-badge-selected-default",class:{disabled:t.disabled}},[t._t("selected-tag",[a("span",{domProps:{innerHTML:t._s(e[t.textField])}}),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}],staticClass:"tags-input-remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeTag(i)}}})],{tag:e,index:i,removeTag:t.removeTag})],2)})),t._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:!t.hideInputField,expression:"!hideInputField"}],ref:"taginput",attrs:{type:"text",id:t.inputId,name:t.inputId,placeholder:t.placeholder},domProps:{value:t.input},on:{input:function(e){return t.input=e.target.value},compositionstart:function(e){t.composing=!0},compositionend:function(e){t.composing=!1},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.tagFromInput(!1))},function(e){return e.type.indexOf("key")||8===e.keyCode?t.removeLastTag(e):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.nextSearchResult(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.prevSearchResult(e)},t.onKeyDown],keyup:[t.onKeyUp,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.clearSearchResults(e)}],focus:t.onFocus,click:t.onClick,blur:t.onBlur,value:t.tags}}),t._v(" "),t.elementId?a("div",{staticStyle:{display:"none"}},t._l(t.tags,(function(e,i){return a("input",{key:i,attrs:{type:"hidden",name:t.elementId+"[]"},domProps:{value:t.hiddenInputValue(e)}})})),0):t._e()],2),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.searchResults.length,expression:"searchResults.length"}]},["badges"===t.typeaheadStyle?a("p",{class:"typeahead-"+t.typeaheadStyle},[t.typeaheadHideDiscard?t._e():a("span",{staticClass:"tags-input-badge typeahead-hide-btn tags-input-typeahead-item-default",domProps:{textContent:t._s(t.discardSearchText)},on:{click:function(e){return e.preventDefault(),t.clearSearchResults(!0)}}}),t._v(" "),t._l(t.searchResults,(function(e,i){return a("span",{key:i,staticClass:"tags-input-badge",class:{"tags-input-typeahead-item-default":i!=t.searchSelection,"tags-input-typeahead-item-highlighted-default":i==t.searchSelection},domProps:{innerHTML:t._s(e[t.textField])},on:{mouseover:function(e){t.searchSelection=i},mousedown:function(i){return i.preventDefault(),t.tagFromSearchOnClick(e)}}})}))],2):"dropdown"===t.typeaheadStyle?a("ul",{class:"typeahead-"+t.typeaheadStyle},[t.typeaheadHideDiscard?t._e():a("li",{staticClass:"tags-input-typeahead-item-default typeahead-hide-btn",domProps:{textContent:t._s(t.discardSearchText)},on:{click:function(e){return e.preventDefault(),t.clearSearchResults(!0)}}}),t._v(" "),t._l(t.searchResults,(function(e,i){return a("li",{key:i,class:{"tags-input-typeahead-item-default":i!=t.searchSelection,"tags-input-typeahead-item-highlighted-default":i==t.searchSelection},domProps:{innerHTML:t._s(t.getDisplayField(e))},on:{mouseover:function(e){t.searchSelection=i},mousedown:function(i){return i.preventDefault(),t.tagFromSearchOnClick(e)}}})}))],2):t._e()])])}),[],!1,null,null,null).exports;window.VoerroTagsInput=s;t.default=s}]);
//# sourceMappingURL=voerro-vue-tagsinput.js.map