import{p as e,j as t,u as s,k as l,c as a,a as n,t as o,l as c,n as d,o as u,m as r,r as i,F as p,q as b,b as x}from"./vendor.d1dd5c52.js";const w={props:{select:{type:Number},index:{type:Number},draw:{type:Boolean}},emits:["update:select"],setup(e,{emit:t}){const a=s(),n=l((()=>a.getters.isOpen(e.index))),o=l((()=>a.state.award)),c=l((()=>e.draw||n.value?o.value[e.index-1]:""));return{updateSelect:()=>{n.value||e.draw||t("update:select",e.index)},checked:n,showImg:c}}};e("data-v-2cd6eb06");const m={class:"front bg-yellow-600"},k={class:" font-mono text-yellow-600 w-10 h-10 rounded-full bg-white absolute top-0 bottom-0 my-auto leading-10"},v={key:0,class:" absolute top-2 left-2 text-blue-600 text-xl"},y=[n("i",{class:"bx bx-check-circle"},null,-1)],f=n("span",{class:" bg-black w-2 h-2 absolute top-0 bottom-0 my-auto left-2 rounded-full"},null,-1);t(),w.render=function(e,t,s,l,r,i){return u(),a("div",{class:d(["door",[{open:l.checked||s.draw},l.showImg]]),onClick:t[0]||(t[0]=(...e)=>l.updateSelect&&l.updateSelect(...e))},[n("div",m,[n("span",k,o(s.index),1),s.index===s.select?(u(),a("span",v,y)):c("",!0),f])],2)},w.__scopeId="data-v-2cd6eb06";const h={components:{Door:w},setup(){const e=r(1),t=r(!1),l=s(),a=r(!1);return{select:e,decide:t,userChecked:()=>{t.value||(l.commit("checked",e.value),t.value=!0)},draw:a}}},g={class:" flex items-center justify-around py-5"};h.render=function(e,t,s,l,o,c){const d=i("Door");return u(),a(p,null,[n("div",g,[(u(),a(p,null,b(3,(e=>x(d,{key:e,index:e,draw:l.draw,select:l.select,"onUpdate:select":t[0]||(t[0]=e=>l.select=e)},null,8,["index","draw","select"]))),64))]),n("div",null,[l.decide?(u(),a("input",{key:1,onClick:t[2]||(t[2]=e=>l.draw=!0),type:"button",value:"公布解答",class:"ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl"})):(u(),a("input",{key:0,onClick:t[1]||(t[1]=(...e)=>l.userChecked&&l.userChecked(...e)),type:"button",value:"決定好囉!",class:"ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl"}))])],64)};export{h as default};
