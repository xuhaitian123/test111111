_jsload2&&_jsload2('newvectordrawlib', 'function Gf(a){this.$H=o;this.k=x.object.extend(a||{},{Ch:o});Hc.call(this,this.k);this.yg={};this.loaded=q;this.Et=p;this.WB=q}Gf.prototype=new Hc; Gf.prototype.ra=function(a){if(!this.loaded){this.loaded=o;var b=this;b.map=a;b.cb=b.map.cb;b.map=a;this.Ib=this.map.pa();this.Pb=this.Ib.k.Pb;this.yc=this.map.K.devicePixelRatio;b.Tw=q;b.vK=p;b.Qe=b.k.style||"normal";b.hn=b.k.styleStr||p;b.aq=200;b.ze=p;b.Zd=0;b.xb=this.cb.Kn(0);b.cb.ld.appendChild(this.xb);b.cb.xb=b.xb;b.Jb=new z.NewVectorDrawLib(a);b.Jb.Pb=this.Ib.k.Pb;b.fs="";b.Jb.lC=b.Qe;b.Xl();b.Qe&&"normal"!==b.Qe||b.hn&&0<b.hn.length?b.Nt(b.Qe,b.hn,function(){b.map.addEventListener("click", function(a){b.Zd++;if(1===b.Zd)b.ze=setTimeout(function(){b.qu(a);b.Zd=0},b.aq);else return clearTimeout(b.ze),b.Zd=0,q});b.xb.innerHTML="";b.$d(o)}):(b.$d(),b.map.addEventListener("click",function(a){b.Zd++;if(1===b.Zd)a.ab||(b.ze=setTimeout(function(){b.qu(a);b.Zd=0},b.aq));else return clearTimeout(b.ze),b.Zd=0,q}));b.map.K.lj&&(G()&&b.Gf==j)&&(b.Gf=new z.sG(b.map),b.map.Ja(b.Gf))}}; x.extend(Gf.prototype,{Xl:function(){var a=this;setTimeout(function(){a.map.addEventListener("moveend",function(b){"centerAndZoom"!=b.jH&&a.$d()});a.map.addEventListener("zoomend",function(){a.Tw=q;a.$d()});a.map.addEventListener("onresize",function(){a.$d()});Va()&&(a.map.addEventListener("onmoving",function(){a.$d()}),a.map.addEventListener("onmaptypechange",function(){a.$d()}));a.map.addEventListener("mousemove",function(b){a.map.Vb()&&a.DC(b)})},1);a.map.addEventListener("setcustomstyles",function(b){a.mC(b.target)})}, Nt:function(a,b,c){if(this.map.Vb()){var d=this,e=z.Ac+"custom/",f;b&&0<b.length?(f="setStyle_"+b.length,e+="mapstyle?styles="+encodeURIComponent(b)):(f="setStyle_"+a,e+="getstyle?customid="+a);f+=this.map.ba;window[f]=function(b,e){var k=x.extend({},d.Jb.nz);d.Jb.Fb=x.extend(k,b);k=z.Db.re(d.Jb.Fb["3181"][1]);d.map.K.xo=k;d.map.Na().style.backgroundColor=k;c(a);d.map.dispatchEvent(new O("onsetmapstylesuccess",e));delete window[f]};pa(e+("&callback="+f+"&udt=20150526"),q)}},Ip:function(a){var b=this; b.Nt(a.style,a.styleStr,function(a){b.Qe=a;b.Jb.lC=b.Qe;var a=b.Jb.Ks,d;for(d in a)delete a[d];b.XE()})},$d:function(){this.map.fa();this.map.Vb()?(this.xb.style.display="block",this.Jb.Bs(this.wm())):(this.xb.style.display="none",this.xb.innerHTML="")},wm:function(){var a=this.map,b=this.Ib,c=a.fa(),d=a.mc,e=b.Bc(c),f=b.$D(c),b=a.ba.replace(/^TANGRAM_/,""),g=Math.ceil(d.lng/f);column=Math.ceil(d.lat/f);var i=this.Pb,k=[g,column,(d.lng-g*f)/f*i,(d.lat-column*f)/f*i],f=k[0]-Math.ceil((a.width/2-k[2])/ i),l=k[1]-Math.ceil((a.height/2-k[3])/i),m=k[0]+Math.ceil((a.width/2+k[2])/i),n=k[1]+Math.ceil((a.height/2+k[3])/i);for(this.Qc?this.Qc.length=0:this.Qc=[];f<m;f++)for(g=l;g<n;g++)this.Qc.push([f,g]);this.Qc.sort(function(a){return function(b,c){return 0.4*Math.abs(b[0]-a[0])+0.6*Math.abs(b[1]-a[1])-(0.4*Math.abs(c[0]-a[0])+0.6*Math.abs(c[1]-a[1]))}}([k[0]-1,k[1]-1]));d=[Math.round(-d.lng/e),Math.round(d.lat/e)];f=-a.offsetY+a.height/2;e=this.xb;e.style.left=-a.offsetX+a.width/2+"px";e.style.top= f+"px";this.Me?this.Me.length=0:this.Me=[];f=0;for(a=e.childNodes.length;f<a;f++)g=e.childNodes[f],g.er=q,this.Me.push(g);if(f=this.Pm)for(var t in f)delete f[t];else this.Pm={};this.Ne?this.Ne.length=0:this.Ne=[];f=0;for(a=this.Qc.length;f<a;f++){t=this.Qc[f][0];k=this.Qc[f][1];g=0;for(l=this.Me.length;g<l;g++)if(m=this.Me[g],m.id==b+"_"+t+"_"+k+"_"+c){m.er=o;this.Pm[m.id]=m;break}}f=0;for(a=this.Me.length;f<a;f++)m=this.Me[f],m.er||(m.Xd=p,delete m.Xd,this.Ne.push(m));this.kn=[];g=i*this.yc;f=0; for(a=this.Qc.length;f<a;f++)t=this.Qc[f][0],k=this.Qc[f][1],l=t*i+d[0],m=(-1-k)*i+d[1],n=b+"_"+t+"_"+k+"_"+c,cvs=this.Pm[n],cvsStyle=p,cvs?(cvsStyle=cvs.style,cvsStyle.left=l+"px",cvsStyle.top=m+"px",cvs.Ze||(cvs.Xd=p,delete cvs.Xd,this.kn.push([t,k,cvs]))):(0<this.Ne.length?(cvs=this.Ne.shift(),cvs.getContext("2d").clearRect(0,0,g,g),cvsStyle=cvs.style):(cvs=document.createElement("canvas"),cvsStyle=cvs.style,cvsStyle.position="absolute",cvsStyle.background="#F5F3F0",cvsStyle.width=i+"px",cvsStyle.height= i+"px",this.Mx()&&(cvsStyle.WebkitTransform="scale(1.001)"),cvs.setAttribute("width",g),cvs.setAttribute("height",g),e.appendChild(cvs)),cvs.id=n,cvsStyle.left=l+"px",cvsStyle.top=m+"px",this.kn.push([t,k,cvs])),cvs.style.visibility="";f=0;for(a=this.Ne.length;f<a;f++)this.Ne[f].style.visibility="hidden";return this.kn},XE:function(){for(var a=this.xb,b=0,c=a.childNodes.length;b<c;b++)a.childNodes[b].Ze=q;this.$d()},qu:function(a){this.map.K.lj&&(a=this.qs(a),this.map.K.xw?this.map.K.xw(a):this.Nb(a))}, Nb:function(a){a?(Va()&&this.Pz(a),G()&&this.Gf&&this.Gf.switchTo(a)):G()&&this.Gf&&this.Gf.U()},DC:function(a){this.map.K.lj&&(this.qs(a)?(this.map.platform.style.cursor="pointer",this.map.R.Nx=o):(this.map.R.Nx=q,this.map.platform.style.cursor!=this.map.K.Xb&&0==this.map.R.Pe.length&&(this.map.platform.style.cursor=this.map.K.Xb)))},Pz:function(a){var b=a.uid;if(b){var c=this;dd.bb(function(d){c.UG(b,d,a)},{qt:"inf",uid:b,operate:"mapclick",clicktype:"vector"})}},UG:function(a,b,c){var d=this;if(b&& b.content){var e=b.content,f=e.pano||0,c=d.map.wb(c.point);if(!g)var g={};g.isFromMPC=o;var i=e.addr,g=e.street_id||"";if(1==e.poiType||3==e.poiType)i=P.unique(i.split(";")).join("; ");var k=e.tel;k&&(k=k.replace(/,/g,", "));d.Sq(e.cla);var l=M("div",{style:"font-size:12px;padding:5px 0;overflow:hidden;*zoom:1;"}),b=q;f&&(360>d.map.height?b=o:(f=[],f.push("<div class=\'panoInfoBox\' id=\'panoInfoBox\' title=\'"+e.name+"\\u5916\\u666f\' title=\'\\u67e5\\u770b\\u5168\\u666f\' >"),f.push("<img filter = \'pano_thumnail_img\' class=\'pano_thumnail_img\' width=323 height=101 border=\'0\' alt=\'"+ e.name+"\\u5916\\u666f\' src=\'"+(z.url.proto+z.url.domain.pano[0]+"/pr/?qt=poiprv&uid="+g+"&width=323&height=101&quality=80&fovx=200")+"\' id=\'pano_"+a+"\'/>"),f.push("<div filter = \'panoInfoBoxTitleBg\' class=\'panoInfoBoxTitleBg\'></div><a href=\'javascript:void(0)\' filter=\'panoInfoBoxTitleContent\' class=\'panoInfoBoxTitleContent\' >\\u8fdb\\u5165\\u5168\\u666f&gt;&gt;</a>"),f.push("</div>"),l.innerHTML=f.join("")));i&&(f=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"}),f.innerHTML= "\\u5730\\u5740\\uff1a"+i,l.appendChild(f));k&&(f=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"}),f.innerHTML="\\u7535\\u8bdd\\uff1a"+k,l.appendChild(f));e.tag&&(k=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;color:#7f7f7f;"}),k.innerHTML="\\u6807\\u7b7e\\uff1a"+e.tag,l.appendChild(k));a="http://api.map.baidu.com/place/detail?uid="+a+"&output=html&source=jsapi&operate=mapclick&clicktype=vector";k="<div style=\'height:26px;\'><a href=\'"+a+"\' target=\'_blank\' style=\'font-size:14px;color:#4d4d4d;font-weight:bold;text-decoration:none;\' onmouseover=\'this.style.textDecoration=\\"underline\\";this.style.color=\\"#3d6dcc\\"\' onmouseout =\'this.style.textDecoration=\\"none\\";this.style.color=\\"#4d4d4d\\"\'>"+ e.name+"</a>";a=new tc(l,{width:322,enableSearchTool:o,title:k+("<a href=\'"+a+"\' target=\'_blank\' style=\'font-size:12px;color:#3d6dcc;margin-left:5px;text-decoration:none;\' onmouseover=\'this.style.textDecoration=\\"underline\\"\' onmouseout =\'this.style.textDecoration=\\"none\\"\'>\\u8be6\\u60c5&raquo;</a>")+"</div>",enableParano:b});b&&(a.street_id=g);a.addEventListener("open",function(){var a=x.$("panoInfoBox");if(a){var b=e.street_id||"";Pb(function(){Ra(5052);d.Aq(b)},a,"pano_thumnail_img|panoInfoBoxTitleBg|panoInfoBoxTitleContent")}}); this.map.Nb(a,c)}},Aq:function(a){var b=z.sg("pano","scape/")[0],c=this,d=(new Date).getTime(),e="Pano"+d;z[e]=function(a){var b=c.map.qm(),a=a.content[0];b.rc(a.poiinfo.PID);b.show();b.Mc({heading:a.poiinfo.Dir,pitch:a.poiinfo.Pitch})};d=(new Date).getTime();pa(b+("?qt=poi&udt=20131021&uid="+a+"&t="+d+"&fn=BMap."+e),q)},Sq:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c][1]),c<d-1&&b.push(", ");return b.join("")},qs:function(a){var b=this.xb.getElementsByTagName("canvas"),c=a.offsetX, d=a.offsetY,e=j,f=j;this.map.Bb();for(var f=this.map.pa().k.Pb,g=0,i=b.length;g<i;g++){var k=this.Qf(b[g]);if(c>k.left&&c<=k.left+f&&d>k.top&&d<=k.top+f){e=b[g];break}}if(e==j||e.Xd==j)return q;f=e.Xd;b=0;for(i=f.length;b<i;b++){var c=f[b],d=c[0],g=c[1],l=this.Jb.Fb[c[3]]||window.Fb[c[3]],m=l[0],l=this.Jb.Ss(l,this.Jb.Fb[c[4]]||window.Fb[c[4]])[1],n=c[5]||{};if(l==j||"empty"==l)break;if(2!=m&&(3!=m&&4!=m&&0<l.length&&n.u)&&(iconX=g[0]+k.left,iconY=g[1]+k.top,a.offsetX>=iconX-15&&a.offsetX<=iconX+ 15&&a.offsetY>=iconY-15&&a.offsetY<=iconY+15))return{type:c[5].c||"",name:d,uid:n.u||"",point:{x:iconX,y:iconY},clickFea:{tileId:e.id,tile:e,fea:c}}}return q},Mx:function(){return/M040/i.test(navigator.userAgent)},Qf:function(a){for(var b=a.offsetLeft,c=a.offsetTop,a=a.offsetParent;a&&a!=this.map.Na();)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{top:c,left:b}},mC:function(a){if(this.map.Vb()){this.map.pa().k.$b=18;var a=this.Et=a,b;for(b in a)switch(b){case "style":this.Ip(a);break;case "styleStr":this.Ip(a); break;case "features":this.NN(a[b]);break;case "poiElements":this.VN(a[b])}}},aE:function(){this.nu();"dark"==this.Qe?x.D.Ua(this.xb,"light_gray_background"):x.D.Ua(this.xb,"gray_background")},nu:function(){x.D.Sb(this.xb,"gray_background");x.D.Sb(this.xb,"light_gray_background")}});window.VectorLayer=Gf;var Hf=1,If=2,Jf=3,Kf=4,Lf=5; function Mf(a){this.Gm=q;this.ct=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/"];this.QF=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[2]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[3]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[4]+"/gvd/?"];this.cb=p;this.pk={};this.map=a;this.We=this.jj=0;this.bi=p;this.Fb=window.Fb;this.nz=x.extend({},window.Fb);this.cm={dark:{backColor:"#2D2D2D",textColor:"#bfbfbf",iconUrl:"vector/dicons"},normal:{backColor:"#F3F1EC", textColor:"#c61b1b",iconUrl:"vector/nicons_hd"},light:{backColor:"#EBF8FC",textColor:"#017fb4",iconUrl:"vector/licons"}};this.Ks={};this.lp=o;this.nk=p;this.Yl=/.*GT-I9300.*Version\\/\\d+.*Safari\\/\\d+\\.\\d+$/ig.test(navigator.userAgent)||/baiduboxapp/ig.test(navigator.userAgent)} Mf.prototype={Bs:function(a){var b=this.map,c=b.fa();this.We=a.length;this.jj=0;this.yc=this.map.K.devicePixelRatio;this.jz=this.kz=this.iz=this.Hu=0;b=b.Ka();new H(b.lng,b.lat);this.map.dispatchEvent(new O("onvectorbegin"));for(var b=0,d=this.We;b<d;b++){var e=a[b][2],f=a[b][0],g=a[b][1];e.Ze=q;e.nq=+new Date;this.gy(f,g,c,e)}},gK:function(){for(var a in this.pk)delete this.pk[a]},gy:function(a,b,c,d){var e=this,f=e.map,g=e.QF,i=Math.abs(parseInt(a,10)+parseInt(b,10))%g.length,k="x="+a+"&y="+b+"&z="+ c,l="_"+(0>a?"_":"")+(0>b?"$":"")+parseInt(Math.abs(a)+""+Math.abs(b)+""+c,10).toString(36),g=g[i]+"qt=lgvd&layers=bg,df&"+k+"&styles=pl&f=jsapi&v=002&udt=20150526",g=g+("&fn=BMap."+l),f=f.Ka(),m=new H(f.lng,f.lat),n=e.map.fa();z[l]=function(f){if(f=f.content){d.lq=(new Date).getTime();var g=e.map,i=g.Ka(),g=g.fa();if(!i.nb(m)||g!=n){delete z[l];return}f=(f.bg||[]).concat(f.df||[]);d.Xd=f;d.Ya="#c"+a+"r"+b+"z"+c;f&&e.Io(f,d,m,n)}delete z[l]};pa(g)},nj:function(a){var a=a.getContext("2d"),b=this.Pb* this.yc;this.Yl||(a.save(),a.clearRect(0,0,b,b),a.restore())},TC:function(a,b,c){a.fillStyle=c||"#F5F3F0";a.fillRect(0,0,b,b)},Io:function(a,b,c,d){function e(){b.NP=+new Date;var e=i.map.Ka(),f=i.map.fa();if(e.nb(c)&&f==d){for(i.map.K.NF&&a.L_&&i.P1(g,a.L_);l<k;l++){var e=i.NE(a[l]),f=m[e[3]],n=m[e[4]],t=f[0];e.tc=f;e.Pc=n;t==Jf?i.Ww(g,e,d):t==If?i.pe(g,e[1],f,n,e[2]):t==Kf?i.SC(g,e):i.UC(g,e)}b.Ze=o;b.JP=+new Date;i.iz+=b.HP-b.LP;i.kz+=b.IP-b.MP;i.jz+=b.JP-b.NP;i.Hu=i.iz+i.kz+i.jz;i.jj++;i.We== i.jj&&(i.lp&&(i.lp=q,e={},4E3<+new Date-PDC.OP&&(e.FirstScreenTime=+new Date-PDC.OP,e.FST_V_B=+new Date-PDC.E0,e.VectorDrawTime=i.Hu,e.userAgent=navigator.userAgent,Ra(8080,e)),z.An("cus.fire","time",{z_vectorfirstdrawtime:i.Hu})),e=new O("onvectorloaded"),e.R1=i.Hu,e.Q1=i.jj,i.map.dispatchEvent(e),i.map.dispatchEvent(new O("ontilesloaded")))}}function f(){b.MP=+new Date;var e=i.map.Ka(),f=i.map.fa();if(e.nb(c)&&f==d){for(;l<k;l++){var e=a[l],f=m[e[3]],n=m[e[4]];17<=d&&(f[5]&&0<f[5].length&&1==f[5][0]&& 6==f[5][1])&&(f[5].length=0,f[6]=0,n[6]=0);5<=d&&(9>=d&&f[5]&&0<f[5].length)&&(f[1]="115,115,115,0.3",f[5].length=0);e.tc=f;e.Pc=n;if(f[0]==If)i.NE(e);else break}i.dF(g,a,w,l,d);b.IP=+new Date}}b.LP=+new Date;var g=b.getContext("2d");1<this.yc&&!b.lg&&(g.scale(this.yc,this.yc),b.lg=o);g.textBaseline="bottom";this.TC(g,this.Pb,this.map.K.xo);for(var i=this,k=a.length,l=0,m=this.Fb;l<k;l++){var n=a[l],t=m[n[3]]||window.Fb[n[3]],v=m[n[4]]||window.Fb[n[4]];n.tc=t;n.Pc=v;if(t[0]==Jf)i.Ww(g,i.NE(n),d); else break}b.HP=+new Date;var w=l;i.g3===o?(f(),e()):(window.setTimeout(f,1),window.setTimeout(e,1))},NE:function(a){for(var b=a[1],c=0,d=0,e=0,f=b.length;e<f;e+=2)c+=b[e]/10,d+=b[e+1]/10,b[e]=c,b[e+1]=d;return a},Ww:function(a,b,c){var d=b.tc,e=d[2],b=b[1];a.fillStyle=z.Db.re(d[1]);a.beginPath();a.moveTo(b[0],b[1]);for(var d=2,f=b.length;d<f;d+=2)a.lineTo(b[d],b[d+1]);a.closePath();a.fill();0<e.length&&(a.strokeStyle=a.fillStyle,a.lineWidth=12<=c?3:e[3],a.stroke())},pe:function(a,b,c,d){if(c||d){var e= z.Db.re,f=z.Db.lx,g=z.Db.mx;if(this.it(c,d))firstColor=backColor=(e=d&&d[5]&&0<d[5].length?o:q)?z.Db.re(c[1]):"rgba(0, 0, 0, 0)",backLineWidth=c[2],foreLineWidth=e?d[2]:c[2],intervalLen=e?d[5][0]:c[5][0],intervalColor=z.Db.re(e?d[1]:c[1]),z.Db.rW(a,b,intervalLen,backLineWidth,foreLineWidth,firstColor,p,backColor,intervalColor);else if(1==c[7])a.strokeStyle=e(c[1]),a.fillStyle=a.strokeStyle,a.lineWidth=c[2],a.lineCap=f(c[3]),a.lineJoin=g(c[4]),z.Db.JK(a,b,a.lineWidth);else{a.beginPath();a.moveTo(b[0], b[1]);for(var i=2,k=b.length;i<k;i+=2)a.lineTo(b[i],b[i+1]);a.strokeStyle=e(c[1]);a.lineCap=f(c[3]);a.lineJoin=g(c[4]);a.lineWidth=c[2];a.stroke();d&&(a.strokeStyle=e(d[1]),a.lineWidth=d[2],a.lineCap=f(d[3]),a.lineJoin=g(d[4]),a.stroke())}}},SC:function(a,b){var c=b[1],d=b.tc,e=z.Db.re,f=e(d[1]),g=e(d[2]),i=d[4],e=e(i[1]),i=i[2],d=d[5];z.Db.WC(a,c,0,d,0,f,g,e,i)},UC:function(a,b){a.save();var c=b[1],d=b[0],e=b[2],f=this.Ss(b.tc,b.Pc),g=f[1],i=0;if(!("undefined"==typeof g||"number"==typeof g)){var k= -1<g.indexOf("biaopai");g.indexOf("ditie");if(0<g.length){var l="undefined"!=typeof TVC?TVC.QJ.a0:{},l=this.ct[g.length%this.ct.length]+this.cm.normal.iconUrl+"/"+g+".png?v="+(l.version?l.version:"002")+"&udt="+(l.ou?l.ou:"20150601"),m=new Image,n=c[0],t=c[1];2<c.length&&(i+=2);var v=this;m.onload=function(){var b=this.width,l=this.height;a.drawImage(this,n-b/4,t-l/4,b/2,l/2);k&&v.Cs(a,c,f,e,d,g,i,k);m.onload=p;delete m.onload;m=p};m.src=l}!k&&(f[2]&&0<f[2].length)&&this.Cs(a,c,f,e,d,g,i,k)}a.restore()}, Cs:function(a,b,c,d,e,f,g,i){var k=z.Db.re,l=c[2];if(e&&0<l.length){var m=[],c=l[2],n=l[3],t=l[4],l=l[5];m.push(z.Db.rL(t));x.platform.mE?(m.push("bold"),m.push(c+"px"),m.push("arial,\\u9ed1\\u4f53")):(m.push(c+"px"),m.push("\\u9ed1\\u4f53"));i||m.push("Helvetica Neue,Arial,Hiragino Sans GB,\\u9ed1\\u4f53,sans-serif");a.font=m.join(" ");a.fillStyle=k(n);if(m=z.Db.bM(t))a.strokeStyle=k(l),a.lineWidth=i?0.5:2;for(var f=-1<f.indexOf("biaopai_xiandao"),n=e.split("\\\\"),v=0,w=n.length,y=b.length;v<w&&g<y;v++){var C= b[g],A=b[g+1],e=n[v],e=a.measureText(e).width,D=c,g=g+2;10<d&&350>d&&this.OF(a,C,A,d);var B=1;z.Db.aM(t)&&(z.Db.XK(a,C-e/2,A-D/2,e,D,{fillStyle:k(l)}),B=0);f?(a.save(),a.scale(0.9,0.9),m&&a.strokeText(n[v],(C-e/2+1)/0.9,(A+D/2+1)/0.9),a.fillText(n[v],(C-e/2+1)/0.9,(A+D/2+1)/0.9),a.restore()):(B=i?2:B,m&&a.strokeText(n[v],C-e/2,A+D/2+B),a.fillText(n[v],C-e/2,A+D/2+B))}}},Ss:function(a,b){var c=[Hf,"",[]];a&&(a[0]==Lf?c[2]=a:c=a);b&&(b[0]==Lf?c[2]=b:c[1]=b[1]);return c},OF:function(a,b,c,d){d=d/180* Math.PI;cv=Math.cos(d);sv=Math.sin(d);yy=xx=cv;xy=sv;yx=-sv;x0=b-b*cv-c*sv;y0=c+b*sv-c*cv;a.transform(xx,yx,xy,yy,x0,y0)},dF:function(a,b,c,d,e){if(16>=e)for(var f=c;f<d;){for(var g=b[f],i=this.Ws(g.tc,g.Pc),c=f+1;c<d;c++){var k=b[c];if(i!=this.Ws(k.tc,k.Pc))break}for(g=f;g<c;g++){var l=b[g],m=l[1],i=l.tc,k=l.Pc;this.it(i,k)?l.jE=o:10<=e&&13>=e?"228,218,201,1"!=i[1]&&this.pe(a,m,i,q):this.pe(a,m,i,q)}for(g=f;g<c;g++)l=b[g],m=l[1],i=l.tc,k=l.Pc,l.jE?this.pe(a,m,i,k,l[2],o):(10<=e&&13>=e&&"228,218,201,1"== i[1]&&(k[1]="231,231,157,1"),this.pe(a,m,k,q));f=c}else{for(f=c;f<d;f++)g=b[f],i=g.tc,k=g.Pc,e=i[6]&1?o:q,k&&!e&&(e=k[6]&1?o:q),e?g.sE=o:this.pe(a,g[1],i,q);for(f=c;f<d;f++)g=b[f],i=g.tc,k=g.Pc,g.sE?this.pe(a,g[1],i,k,g[2]):this.pe(a,g[1],k,q)}},Ws:function(a,b){if(!b)return 0;var c=a[6],d=b[6];if(1==c||1==d)return 1;switch(c){case 2:return 2==d?1:0;case 4:case 6:case 8:case 10:return 4<=d&&10>=d?1:0;default:return 0}},it:function(a,b){return a&&0<a.length&&0<a[5].length||b&&0<b.length&&0<b[5].length? o:q}};z.NewVectorDrawLib=Mf; ');
