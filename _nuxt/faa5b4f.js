(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{335:function(e,t,r){"use strict";r.r(t);var n={name:"Formulario",data:function(){return{abierto:!1,valid:!0,val:0,select:"",date:"",checkbox:!1,items:["uno","dos","tres"]}},methods:{required:function(e){return!!e||"dato requerido"},add:function(){this.$emit("input",{f1:this.val,f2:this.select,f3:this.date})}}},l=r(73),o=r(107),c=r.n(o),d=r(176),v=r(439),f=r(432),m=r(431),h=r(362),x=r(395),k=r(363),_=r(330),V=r(427),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-text-field",{attrs:{label:"Gasto",rules:[e.required]},model:{value:e.val,callback:function(t){e.val=e._n(t)},expression:"val"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-select",{attrs:{items:e.items,rules:[e.required],label:"Tipo de gasto",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),r("v-row",[r("v-checkbox",{attrs:{rules:[function(e){return!!e||"¡Debe estar de acuerdo para continuar!"}],label:"¿Está de acuerdo con los datos introducidos?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Fecha","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",l,!1),n))]}}]),model:{value:e.abierto,callback:function(t){e.abierto=t},expression:"abierto"}},[e._v(" "),r("v-date-picker",{on:{input:function(t){e.abierto=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),r("v-row",[r("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.add}},[e._v(" Submit ")])],1)],1)}),[],!1,null,"58e70383",null);t.default=component.exports;c()(component,{VBtn:d.a,VCheckbox:v.a,VDatePicker:f.a,VForm:m.a,VMenu:h.a,VRow:x.a,VSelect:k.a,VSpacer:_.a,VTextField:V.a})},336:function(e,t,r){"use strict";r.r(t);var n={name:"Tabla",props:{items:{type:Array,value:function(){return[]}}},data:function(){return{headers:[{text:"Fecha",value:"f3"},{text:"Tipo de gasto",value:"f2"},{text:"Gasto",value:"f1"}]}}},l=r(73),o=r(107),c=r.n(o),d=r(433),component=Object(l.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("v-data-table",{staticClass:"elevation-1",attrs:{headers:this.headers,items:this.items,"items-per-page":5}})}),[],!1,null,"55e31fc4",null);t.default=component.exports;c()(component,{VDataTable:d.a})},435:function(e,t,r){"use strict";r.r(t);var n=r(335),l=r(336),o={name:"pruebaFormulario",components:{Formulario:n.default,Tabla:l.default},data:function(){return{items:[]}},methods:{add:function(e){this.items.push(e)}}},c=r(73),d=r(107),v=r.n(d),f=r(359),m=r(334),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-card",{attrs:{elevation:"2"}},[t("v-card-text",[t("formulario",{on:{input:this.add}})],1)],1),this._v(" "),t("tabla",{staticClass:"mt-5",attrs:{items:this.items}})],1)}),[],!1,null,"395de4f8",null);t.default=component.exports;v()(component,{Formulario:r(335).default,Tabla:r(336).default}),v()(component,{VCard:f.a,VCardText:m.b})}}]);