"use strict";(self.webpackChunkmovie_portal=self.webpackChunkmovie_portal||[]).push([[226],{496:(e,a,t)=>{t.d(a,{A:()=>u});var s=t(43);const r="InputText_coolinput__98AYw",o="InputText_label__Xioq0",n="InputText_input__f0IAQ";var l=t(52),i=t(579);const u=e=>{const{autoComplete:a,label:t,onChange:u,type:p,placeholder:d,name:g,defaultValue:m,children:c}=e,h=(0,s.useId)();return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("label",{className:(0,l.x)("",{},[o]),htmlFor:h,children:t}),(0,i.jsx)("input",{className:(0,l.x)("",{},[n]),type:p,id:h,autoComplete:a,onChange:u,placeholder:d,name:g,defaultValue:m}),c]})}},180:(e,a,t)=>{t.d(a,{A:()=>u});t(43);const s="LoginForm_loginForm__Sh-aT",r="LoginForm_submit__nqYRc",o="LoginForm_error__6GvHp";var n=t(52),l=t(496),i=t(579);const u=e=>{let{handleInputChange:a,handleSubmit:t,submitButtonText:u,errorMessage:p}=e;return(0,i.jsxs)("form",{className:(0,n.x)("",{},[s]),onSubmit:t,children:[(0,i.jsx)(l.A,{label:"Login",name:"login",type:"text",autoComplete:"username",onChange:a}),(0,i.jsx)(l.A,{label:"Password",name:"password",type:"password",autoComplete:"current-password",onChange:a,children:(0,i.jsx)("p",{className:o,children:p})}),(0,i.jsx)("input",{className:r,type:"submit",value:u||"Login"})]})}},226:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var s=t(180),r=t(778),o=t(52),n=t(579);const l=()=>{const{handleInputChange:e,handleSubmitRegister:a,formState:t}=(0,r.A)();return(0,n.jsx)("div",{className:(0,o.x)("page-center"),children:(0,n.jsx)(s.A,{handleInputChange:e,handleSubmit:a,submitButtonText:"Register",errorMessage:t.errorMessage})})}},778:(e,a,t)=>{t.d(a,{A:()=>u});var s=t(43),r=t(603),o=t(148);const n=/^[a-zA-Z0-9]{4,10}$/,l=/^[a-zA-Z0-9@\$!%*?#]{4,10}$/,i={login:"",password:"",errorMessage:""},u=()=>{const[e,a]=(0,s.useState)(i),t=(0,r.j)(),u=()=>{return t=e.login,n.test(t)&&(a=e.password,l.test(a));var a,t},p=()=>{a(i)};return{formState:e,handleInputChange:e=>{const{name:t,value:s}=e.target;a((e=>({...e,[t]:s})))},handleSubmitLogin:s=>{s.preventDefault();const{login:r,password:n}=e;u()?((e,a)=>Object.keys(localStorage).filter((e=>e.startsWith("userData"))).map((e=>JSON.parse(localStorage.getItem(e)))).some((t=>t.login===e&&t.password===a)))(r,n)?(t((0,o.Lx)(r,n)),p()):a({...e,errorMessage:"Invalid login or password"}):a((e=>({...e,errorMessage:"Invalid login or password"})))},handleSubmitRegister:s=>{s.preventDefault();const{login:r,password:n}=e;u()?(e=>!Object.keys(localStorage).filter((e=>e.startsWith("userData"))).map((e=>JSON.parse(localStorage.getItem(e)))).some((a=>a.login===e)))(r)?(t((0,o.DY)(r,n)),p()):a((e=>({...e,errorMessage:"This login is already taken"}))):a((e=>({...e,errorMessage:"Invalid login or password"})))},resetForm:p}}}}]);
//# sourceMappingURL=226.a2fdb0ab.chunk.js.map