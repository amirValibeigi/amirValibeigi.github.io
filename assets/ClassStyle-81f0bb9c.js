function u(...t){return t.reduce((n,e)=>{const r=typeof e;return r=="undefined"||!e?n:r=="function"?`${n} ${e(...t)}`:`${n} ${e}`},"")}export{u as c};
