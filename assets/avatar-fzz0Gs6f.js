import{a as x,j as e}from"./jsx-runtime-5BUNAZ9W.js";import{r as _}from"./index-4g5l5LRQ.js";import{b as j}from"./icon-VHqa4iO4.js";import{u as k}from"./use-image-Jm5nckRw.js";import{u as g,c as w,a as F,K as S,h as E}from"./factory-1uJrB2de.js";import{f as M}from"./forward-ref-A-8Arhkk.js";import{u as P}from"./use-component-style-a9Y1koMB.js";import{o as R}from"./theme-provider-4KOeReOn.js";const T=t=>x(j,{viewBox:"0 0 128 128",color:["white","black"],width:"100%",height:"100%",className:"ui-avatar__icon",...t,children:[e("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),$=t=>{const a=t.trim().split(" "),s=a[0]??"",r=a.length>1?a[a.length-1]:"";return s&&r?`${s.charAt(0)}${r.charAt(0)}`:s.charAt(0)},B=({name:t,format:a=$,...s})=>{const o={...O().name};return e(g.div,{className:"ui-avatar__name",role:"img","aria-label":t,__css:o,...s,children:t?a(t):null})},[K,O]=w({strict:!1,name:"AvatarContext"}),U=M((t,a)=>{const[s,r]=P("Avatar",t),{className:o,src:c,srcSet:m,name:d,loading:n,alt:u,icon:f,ignoreFallback:h,borderRadius:i="full",rounded:l="full",onError:A,onLoad:p,crossOrigin:C,format:v,children:b,...L}=R(r),[N,y]=_.useState(!1),I={position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",...s.container};return e(K,{value:s,children:x(g.span,{ref:a,className:F("ui-avatar",o),"data-loaded":S(N),borderRadius:i,rounded:l,__css:I,...L,children:[e(W,{src:c,alt:u,srcSet:m,loading:n,borderRadius:i,rounded:l,onLoad:E(p,()=>y(!0)),onError:A,crossOrigin:C,format:v,name:d,icon:f,ignoreFallback:h}),b]})})}),W=({src:t,alt:a,srcSet:s,onError:r,onLoad:o,format:c,borderRadius:m,rounded:d,name:n,loading:u,icon:f=e(T,{}),ignoreFallback:h,crossOrigin:i,referrerPolicy:l})=>{const p=k({src:t,onLoad:o,onError:r,crossOrigin:i,ignoreFallback:h})==="loaded";if(!t||!p)return n?e(B,{name:n,format:c}):_.cloneElement(f,{role:"img"});const v={width:"100%",height:"100%",objectFit:"cover"};return e(g.img,{className:"ui-avatar__image",src:t,srcSet:s,alt:a??n,loading:u,referrerPolicy:l,borderRadius:m,rounded:d,__css:v})};export{U as A,O as u};
