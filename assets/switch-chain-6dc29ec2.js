import{d2 as e,bG as h}from"./index-0a26c4f0.js";async function c(t){var n;const{wallet:a,params:i}=t;return((n=a.getChain())==null?void 0:n.id)===e(i[0].chainId)||await a.switchChain(h(e(i[0].chainId))),"0x1"}export{c as handleSwitchChain};
