import{p as N,o as k,s as M,K as w,aa as U,_ as n,V as v,r as m,q as O,w as h,ad as C,ae as V,y as G,j as f,z as L,A as F,T as b}from"./index-B1jCPqfU.js";function _(t){return k("MuiListItemButton",t)}const E=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),x=E,W=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],z=(t,s)=>{const{ownerState:e}=t;return[s.root,e.dense&&s.dense,e.alignItems==="flex-start"&&s.alignItemsFlexStart,e.divider&&s.divider,!e.disableGutters&&s.gutters]},A=t=>{const{alignItems:s,classes:e,dense:a,disabled:r,disableGutters:l,divider:i,selected:p}=t,c=F({root:["root",a&&"dense",!l&&"gutters",i&&"divider",r&&"disabled",s==="flex-start"&&"alignItemsFlexStart",p&&"selected"]},_,e);return n({},e,c)},D=M(w,{shouldForwardProp:t=>U(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:z})(({theme:t,ownerState:s})=>n({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:v(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${x.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.alignItems==="flex-start"&&{alignItems:"flex-start"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.dense&&{paddingTop:4,paddingBottom:4})),q=m.forwardRef(function(s,e){const a=O({props:s,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:l=!1,component:i="div",children:p,dense:u=!1,disableGutters:c=!1,divider:$=!1,focusVisibleClassName:T,selected:B=!1,className:I}=a,o=h(a,W),d=m.useContext(C),g=m.useMemo(()=>({dense:u||d.dense||!1,alignItems:r,disableGutters:c}),[r,d.dense,u,c]),y=m.useRef(null);V(()=>{l&&y.current&&y.current.focus()},[l]);const P=n({},a,{alignItems:r,dense:g.dense,disableGutters:c,divider:$,selected:B}),R=A(P),S=G(y,e);return f.jsx(C.Provider,{value:g,children:f.jsx(D,n({ref:S,href:o.href||o.to,component:(o.href||o.to)&&i==="div"?"button":i,focusVisibleClassName:L(R.focusVisible,T),ownerState:P,className:L(R.root,I)},o,{classes:R,children:p}))})}),nt=q;function K(t){return k("MuiListItemIcon",t)}N("MuiListItemIcon",["root","alignItemsFlexStart"]);const H=["className"],J=t=>{const{alignItems:s,classes:e}=t;return F({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},K,e)},Q=M("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({theme:t,ownerState:s})=>n({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},s.alignItems==="flex-start"&&{marginTop:8})),X=m.forwardRef(function(s,e){const a=O({props:s,name:"MuiListItemIcon"}),{className:r}=a,l=h(a,H),i=m.useContext(C),p=n({},a,{alignItems:i.alignItems}),u=J(p);return f.jsx(Q,n({className:L(u.root,r),ownerState:p,ref:e},l))}),rt=X;function Y(t){return k("MuiListItemText",t)}const Z=N("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),j=Z,tt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],st=t=>{const{classes:s,inset:e,primary:a,secondary:r,dense:l}=t;return F({root:["root",e&&"inset",l&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]},Y,s)},et=M("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[{[`& .${j.primary}`]:s.primary},{[`& .${j.secondary}`]:s.secondary},s.root,e.inset&&s.inset,e.primary&&e.secondary&&s.multiline,e.dense&&s.dense]}})(({ownerState:t})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),at=m.forwardRef(function(s,e){const a=O({props:s,name:"MuiListItemText"}),{children:r,className:l,disableTypography:i=!1,inset:p=!1,primary:u,primaryTypographyProps:c,secondary:$,secondaryTypographyProps:T}=a,B=h(a,tt),{dense:I}=m.useContext(C);let o=u??r,d=$;const g=n({},a,{disableTypography:i,inset:p,primary:!!o,secondary:!!d,dense:I}),y=st(g);return o!=null&&o.type!==b&&!i&&(o=f.jsx(b,n({variant:I?"body2":"body1",className:y.primary,component:c!=null&&c.variant?void 0:"span",display:"block"},c,{children:o}))),d!=null&&d.type!==b&&!i&&(d=f.jsx(b,n({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},T,{children:d}))),f.jsxs(et,n({className:L(y.root,l),ownerState:g,ref:e},B,{children:[o,d]}))}),it=at;export{nt as L,rt as a,it as b};
