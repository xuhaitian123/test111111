_jsload2&&_jsload2('drawbycanvas', 'function xg(a){this.C=a;this.pQ={strokeweight:"lineWidth",strokecolor:"strokeStyle",fillcolor:"fillStyle",strokeopacity:"globalAlpha",fillopacity:"globalAlpha"};this.Mb="canvas"}xg.prototype=new z.Vy;var yg=xg.prototype;yg.uo=function(){if(!this.canvas||this.canvas&&!xb(this.canvas)){var a=this.canvas=M("canvas");this.C.Rf().vt.appendChild(a);a.style.position="absolute";a=a.getContext("2d");a.lineCap="round";a.lineJoin="round";a.save();this.$T(this.canvas)}return this.canvas}; yg.he=function(a,b,c){if(a&&0!==b[0].length){var d=a.getContext("2d");this.ta(a);var e=parseInt(a.style.top),f=parseInt(a.style.left);d.beginPath();x.kc.Gb(b,function(a){if(0!==a.length){d.moveTo(a[0].x-f,a[0].y-e);for(var b=1,c=a.length;b<c;b++)d.lineTo(a[b].x-f,a[b].y-e)}});this.hR(a,c);"dashed"===c.strokeStyle&&this.jR(d,b,f,e,c)}}; yg.jR=function(a,b,c,d,e){var f=this;a.beginPath();x.kc.Gb(b,function(b){if(0!==b.length){for(var i=[],k=0,l=b.length;k<l;k++)i.push({x:b[k].x-c,y:b[k].y-d});a.strokeStyle=e.strokeColor||"#3a6bdb";f.iR(a,i,{lineWidth:e.nc||5,interval:2*e.nc||10,lineLength:2*e.nc||10,strokeStyle:f.lS(a.strokeStyle,e.rd)})}})}; yg.iR=function(a,b,c){for(var c=c||{},d=c.Jx||10,e=c.lineWidth||5,f=c.m3||10,c=c.strokeStyle||"#3a6bdb",g=b.length-1,i=0,k=f+d,l=0,m=0;m<g;m++)var n=b[m].x,t=b[m].y,v=b[m+1].x,w=b[m+1].y,l=l+Math.sqrt((v-n)*(v-n)+(w-t)*(w-t));if(l<f)a.strokeStyle=c,a.lineWidth=e,a.lineJoin="round",a.lineCap="round",a.beginPath(),a.moveTo(b[0].x,b[0].y),a.lineTo(b[g].x,b[g].y),a.stroke();else for(l=0;l<g;l++){var n=b[l].x,t=b[l].y,v=b[l+1].x,w=b[l+1].y,m=Math.sqrt((v-n)*(v-n)+(w-t)*(w-t))+i+f,y=k-Math.abs(i);if(i<= k){var C=parseInt(m/k),A=d*(v-n)/m,D=d*(w-t)/m;xMove=f*(v-n)/m;yMove=f*(w-t)/m;startX=n+y*(v-n)/m;startY=t+y*(w-t)/m;tailX=n+(f-Math.abs(i))*(v-n)/m;tailY=t+(f-Math.abs(i))*(w-t)/m;a.beginPath();a.strokeStyle=c;a.lineJoin="round";a.lineCap="round";a.lineWidth=e;B?a.moveTo(B,F):a.moveTo(n,t);0>=i&&a.lineTo(n,t);a.lineTo(tailX,tailY);a.moveTo(startX,startY);B=0;for(F=2*C;B<F;B++)if(B%2)startX+=A,startY+=D,a.moveTo(startX,startY);else{startX+=xMove;startY+=yMove;if(0>(v-startX)*xMove)break;a.lineTo(startX, startY)}a.stroke()}var i=parseInt(m-k*C)-f,B=v-Math.abs(i)*(v-n)/m,F=w-Math.abs(i)*(w-t)/m;l===g-1&&0<i&&(a.beginPath(),a.strokeStyle=c,n=v-i*(v-n)/m,leftY=w-i*(w-t)/m,i<=f?(a.moveTo(n,leftY),a.lineTo(v,w)):(a.moveTo(n,leftY),a.moveTo(n+xMove,leftY+yMove)),a.stroke())}}; yg.lS=function(a,b){if(4===a.length)var c=parseInt(a.substr(1,1)+a.substr(1,1),16),d=parseInt(a.substr(2,1)+a.substr(2,1),16),e=parseInt(a.substr(3,1)+a.substr(3,1),16);else c=parseInt(a.substr(1,2),16),d=parseInt(a.substr(3,2),16),e=parseInt(a.substr(5,2),16);return c="rgba("+c+","+d+","+e+","+b+")"};yg.setAttribute=function(a,b,c){if(a){var d=a.getContext("2d"),e=this.Rq(b);try{d[e]=c}catch(f){}a.setAttribute("_"+b,c||"");d.save()}};yg.Rq=function(a){return this.pQ[a]||a}; yg.$T=function(a){var b=this.C,c=b.K.Vw,d=b.width+2*c,e=b.height+2*c,f=-b.offsetX-c,b=-b.offsetY-c,c=a.getContext("2d"),g={strokeStyle:c.strokeStyle,fillStyle:c.fillStyle,globalAlpha:c.globalAlpha,lineWidth:c.lineWidth,lineCap:"round",lineJoin:"round"};a.setAttribute("width",d);a.setAttribute("height",e);for(var i in g)c[i]=g[i];c.save();a=a.style;a.top=b+"px";a.left=f+"px"};yg.zQ=function(a){a.clearRect(0,0,9999,9999)}; yg.hR=function(a,b){var c=a.getContext("2d");c.globalAlpha=a.getAttribute("_fillopacity");0!==c.globalAlpha&&a.getAttribute("_fillcolor")&&c.fill();c.globalAlpha=a.getAttribute("_strokeopacity");0!==c.globalAlpha&&(a.getAttribute("_strokecolor")&&"dashed"!==b.strokeStyle)&&c.stroke()};yg.ta=function(a){var b=this.C,c=b.K.Vw,d=-b.offsetX-c,a=a.style;a.top=-b.offsetY-c+"px";a.left=d+"px"};z.cP=xg; ');
