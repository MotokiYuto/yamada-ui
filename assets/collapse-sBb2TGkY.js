import{j as f}from"./jsx-runtime-TtYKBvr-.js";import{r as x}from"./index-IybTgENJ.js";import{A as _}from"./index-dKw0visz.js";import{M as T}from"./motion-YDUrcbbR.js";import{M as m,a as b,t as j}from"./utils-pTLoFQxU.js";import{f as k}from"./forward-ref-6T0UNPU-.js";import{a as B,r as C}from"./factory-APG2CWDq.js";const F=e=>e!=null&&parseFloat(e.toString())>0,H={enter:({animationOpacity:e,endingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,enter:s}={})=>({...e?{opacity:1}:{},height:t,transition:b(o==null?void 0:o.enter)(c,r),transitionEnd:a==null?void 0:a.enter,...s}),exit:({animationOpacity:e,startingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,exit:s}={})=>({...e?{opacity:F(t)?1:0}:{},height:t,transition:j(o==null?void 0:o.exit)(c,r),transitionEnd:a==null?void 0:a.exit,...s})},P={initial:"exit",animate:"enter",exit:"exit",variants:H},L=k(({unmountOnExit:e,isOpen:t,animationOpacity:o=!0,startingHeight:a=0,endingHeight:c="auto",transition:r,transitionEnd:s,delay:i,duration:l,className:u,style:g,__css:h,...y},S)=>{const[N,w]=x.useState(!1);x.useEffect(()=>{C()&&w(!0)},[]);const M=parseFloat(a.toString())>0,A=t||e?"enter":"exit";t=e?t:!0,r=N?r??{enter:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}},exit:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}}}:{enter:{duration:0}},s=e?s:{...s,exit:{...s==null?void 0:s.exit,display:M?"block":"none"}};const p={animationOpacity:o,startingHeight:a,endingHeight:c,transition:r,transitionEnd:s,delay:i,duration:l},I={w:"100%",...h};return f(_,{initial:!1,custom:p,children:t?f(T,{ref:S,className:B("ui-collapse",u),...y,...P,custom:p,animate:A,initial:e?"exit":!1,__css:I,style:{overflow:"hidden",display:"block",...g}}):null})});export{L as C};
