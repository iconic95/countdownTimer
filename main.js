function setValue(e,t){e.innerHTML=t<10?`0${t}`:t}function setCounter(e){const t=document.getElementById("months"),n=document.getElementById("days"),o=document.getElementById("hours"),s=document.getElementById("minutes"),l=document.getElementById("seconds"),u=new Date;let a=e.getTime()-u.getTime();const c=Math.floor(a/26352e5);a-=1e3*c*60*60*24*30.5;const m=Math.floor(a/864e5);a-=1e3*m*60*60*24;const r=Math.floor(a/1e3/60/60);a-=1e3*r*60*60;const d=Math.floor(a/1e3/60);a-=1e3*d*60;const i=Math.floor(a/1e3);a-=1e3*i,setValue(t,c),setValue(n,m),setValue(o,r),setValue(s,d),setValue(l,i)}function init(){const e=document.getElementById("target"),t=new Date,n=new Date;n.setDate(29),n.setMonth(8),t>n&&n.setFullYear(n.getFullYear()+1),e.innerHTML=n.toString(),setInterval(function(){setCounter(n)},1e3)}init();