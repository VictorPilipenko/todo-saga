(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[5],{389:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"c",(function(){return p})),t.d(n,"b",(function(){return b}));t(184);var a=t(88),r=t(16),c=t(17),i=t(187);function o(){var e=Object(r.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return o=function(){return e},e}function l(){var e=Object(r.a)(["\n  width: 100%;\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n    max-width: 70%;\n    width: 100%;\n    margin: auto;\n  "]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n    max-width: 400px;\n    width: 100%;\n    margin: auto;\n  "]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: left;\n  flex-direction: column;\n  ","\n  ","\n"]);return d=function(){return e},e}var f=c.c.div(d(),i.a.desktop(s()),i.a.tablet(u())),p=Object(c.c)(a.a)(l()),b=c.c.div(o())},391:function(e,n,t){"use strict";t(392);var a=t(393),r=(t(395),t(397)),c=t(2),i=t(39),o=t(79),l=t(389),u=r.a.Paragraph;n.a=function(e){var n=e.children,t=Object(i.e)((function(e){return e.auth})).error;return Object(c.jsxs)(l.a,{children:[n,t&&Object(c.jsx)(l.b,{children:Object(c.jsx)(a.a,{message:t,type:"error"})}),Object(c.jsx)(u,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.a,{to:"/sign-in",children:"sign-in"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.a,{to:"/sign-up",children:"sign-up"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.a,{to:"/password-recovery",children:"password-recovery"})})]})})]})}},416:function(e,n,t){"use strict";t(78),t(417)},417:function(e,n,t){},422:function(e,n,t){"use strict";var a=t(10),r=t.n(a),c=t(3),i=t.n(c),o=t(0),l=t.n(o),u=t(5),s=t.n(u),d=t(12),f=t(7),p=t(19),b=t(1),v=t(21),h=t(25),m=t(26),j=t(31),O=function(e){Object(m.a)(t,e);var n=Object(j.a)(t);function t(e){var a;Object(v.a)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(b.a)(Object(b.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(h.a)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,a=n.className,r=n.style,c=n.name,i=n.id,o=n.type,u=n.disabled,b=n.readOnly,v=n.tabIndex,h=n.onClick,m=n.onFocus,j=n.onBlur,O=n.onKeyDown,y=n.onKeyPress,x=n.onKeyUp,g=n.autoFocus,k=n.value,C=n.required,w=Object(p.a)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),P=this.state.checked,N=s()(t,a,(e={},Object(f.a)(e,"".concat(t,"-checked"),P),Object(f.a)(e,"".concat(t,"-disabled"),u),e));return l.a.createElement("span",{className:N,style:r},l.a.createElement("input",Object(d.a)({name:c,id:i,type:o,required:C,readOnly:b,disabled:u,tabIndex:v,className:"".concat(t,"-input"),checked:!!P,onClick:h,onFocus:m,onBlur:j,onKeyUp:x,onKeyDown:O,onKeyPress:y,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:k},E)),l.a.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?Object(b.a)(Object(b.a)({},n),{},{checked:e.checked}):null}}]),t}(o.Component);O.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var y=O,x=t(139),g=t.n(x),k=t(34),C=t.n(k),w=t(61),E=t(77),P=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},N=o.createContext(null),F=function(e){var n=e.defaultValue,t=e.children,a=e.options,c=void 0===a?[]:a,l=e.prefixCls,u=e.className,d=e.style,f=e.onChange,p=P(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),b=o.useContext(E.b),v=b.getPrefixCls,h=b.direction,m=o.useState(p.value||n||[]),j=C()(m,2),O=j[0],y=j[1],x=o.useState([]),k=C()(x,2),F=k[0],I=k[1];o.useEffect((function(){"value"in p&&y(p.value||[])}),[p.value]);var K=function(){return c.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},M=v("checkbox",l),S="".concat(M,"-group"),V=Object(w.a)(p,["value","disabled"]);c&&c.length>0&&(t=K().map((function(e){return o.createElement(D,{prefixCls:M,key:e.value.toString(),disabled:"disabled"in e?e.disabled:p.disabled,value:e.value,checked:-1!==O.indexOf(e.value),onChange:e.onChange,className:"".concat(S,"-item"),style:e.style},e.label)})));var q={toggleOption:function(e){var n=O.indexOf(e.value),t=g()(O);if(-1===n?t.push(e.value):t.splice(n,1),"value"in p||y(t),f){var a=K();f(t.filter((function(e){return-1!==F.indexOf(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))}},value:O,disabled:p.disabled,name:p.name,registerValue:function(e){I((function(n){return[].concat(g()(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},B=s()(S,r()({},"".concat(S,"-rtl"),"rtl"===h),u);return o.createElement("div",i()({className:B,style:d},V),o.createElement(N.Provider,{value:q},t))},I=o.memo(F),K=t(74),M=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},S=function(e,n){var t,a=e.prefixCls,c=e.className,l=e.children,u=e.indeterminate,d=void 0!==u&&u,f=e.style,p=e.onMouseEnter,b=e.onMouseLeave,v=M(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),h=o.useContext(E.b),m=h.getPrefixCls,j=h.direction,O=o.useContext(N),x=o.useRef(v.value);o.useEffect((function(){null===O||void 0===O||O.registerValue(v.value),Object(K.a)("checked"in v||!!O||!("value"in v),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),o.useEffect((function(){return v.value!==x.current&&(null===O||void 0===O||O.cancelValue(x.current),null===O||void 0===O||O.registerValue(v.value)),function(){return null===O||void 0===O?void 0:O.cancelValue(v.value)}}),[v.value]);var g=m("checkbox",a),k=i()({},v);O&&(k.onChange=function(){v.onChange&&v.onChange.apply(v,arguments),O.toggleOption&&O.toggleOption({label:l,value:v.value})},k.name=O.name,k.checked=-1!==O.value.indexOf(v.value),k.disabled=v.disabled||O.disabled);var C=s()((t={},r()(t,"".concat(g,"-wrapper"),!0),r()(t,"".concat(g,"-rtl"),"rtl"===j),r()(t,"".concat(g,"-wrapper-checked"),k.checked),r()(t,"".concat(g,"-wrapper-disabled"),k.disabled),t),c),w=s()(r()({},"".concat(g,"-indeterminate"),d));return o.createElement("label",{className:C,style:f,onMouseEnter:p,onMouseLeave:b},o.createElement(y,i()({},k,{prefixCls:g,className:w,ref:n})),void 0!==l&&o.createElement("span",null,l))},V=o.forwardRef(S);V.displayName="Checkbox";var D=V,q=D;q.Group=I,q.__ANT_CHECKBOX=!0;n.a=q},588:function(e,n,t){"use strict";t.r(n);var a=t(2),r=(t(416),t(422)),c=(t(394),t(405)),i=(t(398),t(404)),o=t(44),l=t(39),u=t(391),s=t(109),d=t(389),f=function(){var e=Object(l.d)(),n=Object(l.e)((function(e){return e.auth})).loading,t=i.a.useForm(),f=Object(o.a)(t,1)[0];return Object(a.jsx)(u.a,{children:Object(a.jsxs)(i.a,{layout:"vertical",form:f,name:"register",onFinish:function(n){e(Object(s.d)(n))},initialValues:{rememberMe:!1},scrollToFirstError:!0,children:[Object(a.jsx)(i.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(a.jsx)(c.a,{})}),Object(a.jsx)(i.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(a.jsx)(c.a.Password,{})}),Object(a.jsx)(i.a.Item,{name:"rememberMe",valuePropName:"checked",children:Object(a.jsx)(r.a,{children:"Remember Me"})}),Object(a.jsx)(i.a.Item,{children:Object(a.jsx)(d.c,{type:"primary",htmlType:"submit",loading:n,children:"sign in"})})]})})};n.default=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f,{})})}}}]);
//# sourceMappingURL=5.39e08af2.chunk.js.map