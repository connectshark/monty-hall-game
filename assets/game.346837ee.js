import{p as e,j as t,u as l,k as s,c,a as n,t as o,l as a,o as u,m as d,r,F as i,n as p,b}from"./vendor.294cae04.js";const x={props:{select:{type:[null,Number]},index:{type:Number},checked:{type:Boolean}},emits:["update:select"],setup(e,{emit:t}){const c=l();return{updateSelect:()=>{t("update:select",e.index)},award:s((()=>c.getters.whatIAm(e.index-1)))}}};e("data-v-2c8c7535");const m={class:"front bg-yellow-600"},k={class:" font-mono text-yellow-600 w-10 h-10 rounded-full bg-white absolute top-0 bottom-0 my-auto leading-10"},f={key:0,class:" absolute top-2 left-2 text-blue-600 text-xl"},y=[n("i",{class:"bx bx-check-circle"},null,-1)],h=n("span",{class:" bg-black w-2 h-2 absolute top-0 bottom-0 my-auto left-2 rounded-full"},null,-1);t(),x.render=function(e,t,l,s,d,r){return u(),c("div",{class:"door",onClick:t[0]||(t[0]=(...e)=>s.updateSelect&&s.updateSelect(...e))},[n("div",m,[n("span",k,o(l.index),1),l.index===l.select?(u(),c("span",f,y)):a("",!0),h])])},x.__scopeId="data-v-2c8c7535";const g={components:{Door:x},setup:()=>({select:d(null),checked:d(!1)})},v={class:" flex items-center justify-around py-5"};g.render=function(e,t,l,s,o,d){const x=r("Door");return u(),c(i,null,[n("div",v,[(u(),c(i,null,p(3,(e=>b(x,{key:e,index:e,checked:s.checked,select:s.select,"onUpdate:select":t[0]||(t[0]=e=>s.select=e)},null,8,["index","checked","select"]))),64))]),n("div",null,[null!==s.select?(u(),c("input",{key:0,onClick:t[1]||(t[1]=e=>s.checked=!0),type:"button",value:"決定好囉!",class:"ring-blue-400 focus:ring-4 cursor-pointer bg-blue-600 text-white p-5 rounded-2xl"})):a("",!0)])],64)};export{g as default};