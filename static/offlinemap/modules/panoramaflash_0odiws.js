_jsload2&&_jsload2('panoramaflash', 'x.extend(Oa.prototype,{Pi:function(){for(var a=0;a<z.qr.length;a++)z.qr[a](this);this.Mf!=p&&this.dispatchEvent(new O("onvisible_poi_type_changed"),{visiblePOIType:this.Mf});this.bl=this.eh();this.Er=this.gd=q;this.zq={};this.fd=new zj(this);this.wS();this.eQ();this.gQ();if(this.Ya||this.Lb)this.Ya?this.rc(this.Ya,this.Ie):this.ta(this.Lb)},gQ:function(){var a=this;setInterval(function(){if(a.Zb()){var b=a.eh();b.nb(a.bl)||(a.fd.set("size",{width:b.width,height:b.height}),a.bl=b,a.dispatchEvent(new O("size_changed")))}}, 80)},wS:function(){var a=this.fd,b=this;a.addEventListener("clicked_position",function(a){b.dispatchEvent(new O("onclicked_position"),a)});a.addEventListener("thumbnail_complete",function(){b.dispatchEvent(new O("onthumbnail_complete"))});a.addEventListener("indoor_enter",function(a){a.data.I3===p?b.Kk({haveBreakId:q}):b.Kk({haveBreakId:o});b.dispatchEvent(new O("onhaveBreakId_changed"))});a.addEventListener("first_thumb_complete",function(){var a,d;if(b.gd!==o){b.gd=o;a=this;b.Ya=a.get("id");"street"!= b.Ie&&(b.Ie="street",b.yy("inter"));b.Xn=a.get("links");d=a.get("position");b.Lb=d;d=a.get("pov");!b.Da.heading&&!b.Da.pitch?b.Da=d:(d.heading!=b.Da.heading||d.pitch!=b.Da.pitch)&&a.set("pov",b.Da);d=a.get("zoom");1==!b.Jc&&1!=d?b.Jc==d:b.Jc!=d&&a.set("zoom",b.Jc);d=p;for(var e in b.He)d=b.He[e],delete b.He[e],b.Ja(d);b.k.navigationControl===q&&a.set("navigationControlVisible",q);var f=function(b){a.ws("toggleUI",{topo:b.linksControl,wellLid:b.clickOnRoad,innerExit:q,innerFloor:b.indoorFloorControl})}; f(b.k);b.addEventListener("clickonroad_changed",function(){f(b.k)});b.addEventListener("links_visible_changed",function(){f(b.k)});b.addEventListener("onindoorfloor_options_changed",function(){f(b.k)});b.addEventListener("navigation_visible_changed",function(){a.set("navigationControlVisible",b.k.navigationControl)});if(0<b.Pg.length){e=0;for(d=b.Pg.length;e<d;e++)b.Pg[e].register(b.B,b,b.fd);var g="",i=[];e=0;for(d=b.tr.length;e<d;e++)g=b.tr[e].NM,i=b.tr[e].MM,b[g].apply(b,i)}b.k.visible?b.show(): b.U()}});a.addEventListener("pano_error",function(){b.dispatchEvent(new O("error"))});a.addEventListener("id_changed",function(a){if(b.gd||b.Ya==p||"inter"==b.Ie)b.Ya=a.data;b.dispatchEvent(new O("onid_changed"))});a.addEventListener("position_changed",function(a){b.gd?b.Lb=b.fd.get("position"):b.Lb==p&&(b.Lb=a.data);b.dispatchEvent(new O("onposition_changed"))});a.addEventListener("pov_changed",function(a){if(b.gd||b.Da.heading==p)b.Da=a.data;b.dispatchEvent(new O("onpov_changed"))});a.addEventListener("links_changed", function(a){if(b.gd||0==b.Xn.length)b.Xn=a.data;b.dispatchEvent(new O("onlinks_changed"))});a.addEventListener("zoom_changed",function(a){if(b.gd||b.Jc==p)b.Jc=a.data;b.dispatchEvent(new O("onzoom_changed"))});a.addEventListener("sdata_loaded",function(a){b.yy(a.data.panoType);b.dispatchEvent(new O("oncopyright_changed"),{copyright:a.data.copyright});if(b.Er){for(var d in b.zq)b[d](b.zq[d]);b.Er=q;b.zq={}}});a.addEventListener("overlay_mouseclick",function(a){a=b.He[a.data.markerId];a.dispatchEvent(new O("onclick"), {type:"click",target:a})});a.addEventListener("overlay_mouseover",function(a){a=b.He[a.data.markerId];a.dispatchEvent(new O("onmouseover"),{type:"mouseover",target:a})});a.addEventListener("overlay_mouseout",function(a){a=b.He[a.data.markerId];a.dispatchEvent(new O("onmouseout"),{type:"mouseout",target:a})})},eQ:function(){var a=this;x.M(this.B,ja.da.nf?"DOMMouseScroll":"onmousewheel",function(b){if(a.k.enableScrollWheelZoom&&a.k.visible){var c=-b.detail/3||b.wheelDelta/120,c=a.fa()+c;a.Nc(c);Ab(b)}})}, rc:function(a,b,c){"object"===typeof b&&(c=b,b=j);if(!this.gd||a&&a!=this.Ya)this.gd||(this.Ya=a,this.Ie=b||"street",this.Lb=p),this.fd.set("id",{id:a,type:b||"street"}),this.Er=o,c&&c.pov&&this.Mc(c.pov)},ta:function(a){if(!this.gd||a&&!this.Lb.nb(a))this.gd||(this.Lb=a,this.Ya=p),this.fd.set("position",a),this.Er=o},Mc:function(a){a&&(90<a.pitch&&(a.pitch=90),-90>a.pitch&&(a.pitch=-90),this.gd?this.Er?this.zq.setPov=a:this.fd.set("pov",a):this.Da=a)},Nc:function(a){a!=this.Jc&&(a>Nd&&(a=Nd),a<Od&& (a=Od),this.gd?this.fd.set("zoom",a):this.Jc=a,this.zq.setZoom=a)},show:function(){this.k.visible=o;this.zf&&(this.C&&this.C.Na()===this.B)&&x.D.show(this.zf);this.fd&&this.fd.pr&&(this.fd.pr.style.left="0");this.gd&&(this.ol===this.Zb()&&this.fd.set("id",{id:this.ol,type:this.LS||"street"}),this.dispatchEvent(new O("onvisible_changed")))},U:function(){this.k.visible=q;this.gd&&(this.ol=this.Ya,this.LS=this.Ie,this.fd.ws("closePano"));this.Ya=p;this.fd&&this.fd.pr&&(this.fd.pr.style.left="-9999px"); this.dispatchEvent(new O("onvisible_changed"))},OB:function(a){function b(a,b){return function(){a.tr.push({NM:b,MM:arguments})}}if(this.gd)a.register(this.B,this,this.fd);else for(var c=a.getPanoMethodList(),d="",e=0,f=c.length;e<f;e++)d=c[e],this[d]=b(this,d);this.Pg.push(a)},aF:function(a){this.gd&&a.dispose();for(var b=this.Pg.length;b--;)this.Pg[b]===a&&this.Pg.splice(b,1)},St:function(a){this.Mf=a||"none";this.dispatchEvent(new O("onvisible_poi_type_changed"),{visiblePOIType:this.Mf})},Ja:function(a){this.He[a.hd]= a;this.gd&&this.dispatchEvent(new O("onadd_overlay"),{overlay:a})},Tb:function(a){var b=a.hd;this.gd&&this.dispatchEvent(new O("onremove_overlay"),{overlay:a});delete this.He[b]},Oo:function(){var a=this.fd.get("indoorData");a&&a.pid&&this.rc(a.pid)},qF:function(a){this.fd.set("interactiveState",a)}});Li=Oa.prototype; S(Li,{setId:Li.rc,setPosition:Li.ta,setPov:Li.Mc,setZoom:Li.Nc,show:Li.show,hide:Li.U,addPlugin:Li.OB,removePlugin:Li.aF,addOverlay:Li.Ja,removeOverlay:Li.Tb,setPanoramaPOIType:Li.St,exitInter:Li.Oo,setInteractiveState:Li.qF});function Aj(){this.hT=(this.oA=window.ActiveXObject&&!(window.opera&&!window.opera.nodeType))?\' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"\':\' type="application/x-shockwave-flash"\';this.rI=["id","width","height","align","data"];this.sI="wmode movie flashvars scale quality play loop menu salign bgcolor base allowscriptaccess allownetworking allowfullscreen seamlesstabbing devicefont swliveconnect".split(" ")} x.extend(Aj.prototype,{create:function(a,b){var c=this.DR(a);b&&"string"===typeof b&&(b=document.getElementById(b));b?b.innerHTML=c:document.write(c)},remove:function(a){if((a=this.EL(a))&&this.oA){a.style.display="none";for(var b in a)"function"===typeof a[b]&&(a[b]=p);window.dP&&setTimeout(window.dP,0)}a.parentNode.removeChild(a)},bX:function(){function a(){var c=function(){var a=navigator;if(a.plugins&&a.mimeTypes.length){if((a=a.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\\s)+/, "").replace(/(\\s)+r/,".")+".0"}else if(b.oA)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(c)return c.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,".")}catch(f){}}();a=function(){return c};return c}var b=this;return a()},EL:function(a){return document.getElementById(a)},$G:function(a,b){for(var a=a.split("."),b=b.split("."),c=Math.max(a.length,b.length),d=0;d<c;d++){var e=a[d],f=b[d];if(!e||!f)return!e&&!f?0:e?1:-1;e=Number(e);f=Number(f);if(e<f)return-1;if(e>f)return 1}return 0}, DR:function(a){a=a||{};a.movie=a.url||"";a.altHtml=a.errorMessage||"";if(a.vars){var b=a.vars,c=[],d=p,e=p;for(d in b)e=b[d],c.push(d+"="+encodeURIComponent(e));a.flashvars=c.join("&")}a.minVer=a.ver;b=a.minVer;c=a.maxVer;if(b||c)if(d=this.bX(),!d||b&&0>this.$G(d,b)||c&&0<this.$G(d,c))return a.altHtml||"";d=["<object",this.hT];a.data=a.movie;for(b=0;b<this.rI.length;b++)c=this.rI[b],a.hasOwnProperty(c)&&d.push(" ",c,\'="\',a[c],\'"\');d.push(">");for(b=0;b<this.sI.length;b++)c=this.sI[b],a.hasOwnProperty(c)&& d.push(\'<param name="\',c,\'" value="\',a[c],\'"/>\');d.push("</object>");return d.join("")}});function Bj(a,b){this.P=a;this.AR=b;this.Rh={};this.tz()}x.extend(Bj.prototype,{tz:function(){var a=this,b=a.P;b.addEventListener("add_overlay",function(b){b=b.overlay;b.ra(a.P,a.AR);a.Rh[b.hd]=b});b.addEventListener("remove_overlay",function(b){b=b.overlay;b.remove();delete a.Rh[b.hd]})}});x.extend(Rd.prototype,{ra:function(a,b){this.P=a;this.ha()||this.ta(this.P.ha());this.Aa=b;this.yb()},yb:function(){var a=this.ha(),a=cc.Ud.lh(a),a={markerId:this.hd,catalog:"FD01",name:this.tk(),rank:this.Ro(),x:a.x,y:a.y,color:this.vm(),hoverColor:this.QL,backgroundHoverColor:this.UJ,borderColor:this.borderColor,borderHoverColor:this.YJ,backgroundColor:this.backgroundColor,padding:this.padding,fontSize:this.fontSize,borderWidth:this.borderWidth};if(this.dE||this.getImageData())a.imageUrl=this.dE, a.imageData=this.getImageData(),a.size=this.Bb(),a.image=this.jx(),a.catalog="FD02",this.Bb()&&(a.width=this.Bb()[0],a.height=this.Bb()[1]);this.Aa.DN(a)},hide:function(){this.Qa=q;this.Aa&&this.Aa.Do(this.hd,"visible",q)},show:function(){this.Qa=o;this.Aa&&this.Aa.Do(this.hd,"visible",o)},isVisible:u("Qa"),Lf:function(a,b){this.Aa&&("position"==a&&(b=cc.Ud.lh(b),b={lng:b.x,lat:b.y}),this.Aa.Do(this.hd,a,b))},remove:function(){this.dispatchEvent(new O("onremove"),{type:"remove",target:this});this.Aa.BK([this.hd])}});var Cj={none:"",transit:"FE0A",hotel:"FE02",catering:"FE01",movie:"FE06",indoor_scene:"FEFE"},Dj={none:["-1",""],transit:["0","m_transit.png"],hotel:["1","m_hotel.png"],catering:["2","m_catering.png"],movie:["3","m_movie.png"],transit:["4","m_transit.png"],indoor_scene:["5","m_indoor_scene.png"]}; x.extend(Ud.prototype,{ra:function(a,b){this.P=a;this.Aa=b;this.yb()},yb:function(){var a=this.ha(),a=cc.Ud.lh(a),b=this.WR(),c=this.PD();this.Aa.DN({markerId:this.hd,catalog:b,name:this.cp(),rank:this.Ro(),x:a.x,y:a.y,heading:c.heading,pitch:c.pitch,pid:c.panoId,panoIId:c.panoIId})},WR:function(){var a=this.Uo().match(/.*\\/(.*)/)[1],b;for(b in Dj)if(Dj[b][1]==a)return Cj[b]},hide:function(){this.Qa=q;this.Aa.Do(this.hd,"visible",q)},show:function(){this.Qa=o;this.Aa.Do(this.hd,"visible",o)},isVisible:u("Qa"), Lf:function(a,b){"position"==a&&(b=cc.Ud.lh(b),b={lng:b.x,lat:b.y});this.Aa.Do(this.hd,a,b)},remove:function(){this.dispatchEvent(new O("onremove"),{type:"remove",target:this});this.Aa.BK([this.hd])}});zj.co=new cc(p,{Pf:"api"});function zj(a){x.lang.Ca.call(this);a&&(this.P=a,this.Ig=p,this.nH=a.B.clientWidth,this.mH=a.B.clientHeight,new Bj(a,this))}zj.DP=z.sg("pano");x.lang.ua(zj,x.lang.Ca,"PanoramaFlashWraper"); x.extend(zj.prototype,{DN:function(a){this.ws("addMarkers",[a])},BK:function(a){this.ws("removeMarkers",[a])},Do:function(a,b,c){var d={};d.markerId=a;d[b]=c;this.set("markerProperty",d)},get:function(a){var b=p;"position"==a?(b=this.Ig.get("mercatorPosition"),b=cc.Ud.zj(new Q(b.mercatorX,b.mercatorY))):b=this.Ig.get(a);return b},set:function(a,b){var c=this;"position"==a?zj.co.pj(b,function(a){a&&a.id?c.P.rc(a.id):c.dispatchEvent(new O("pano_error"))}):"id"==a?c.Ig==p?c.DS(c.P):c.Ig.set&&c.Ig.set("panoOptions", {id:b.id,panoType:b.type,width:c.nH,height:c.mH}):c.Ig&&c.Ig.set&&c.Ig.set(a,b)},ws:function(a,b){return this.Ig.doAction(a,b)},w2:u("pr"),DS:function(a){var b=this,c=a.k.swfSrc.match(/.*\\//)[0]+"BDStreetScape.swf";b.Ig=o;zj.co.vx(function(d){var e="",f="";"inter"===a.Ie?f=a.Ya:e=a.Ya;e={pid:e,iid:f,panoType:a.Ie,heading:a.Da.heading,pitch:a.Da.pitch,width:b.nH,height:b.mH,panoUrl:c,panoTileUrl:zj.DP.join("|"),domain:cc.Eu,jsInterfaceNamespace:"BMap.PanoramaFlashInterface",swfIndex:b.ba};f=a.k.swfSrc; d&&(d.panoUdt&&d.panoUdt.version&&e)&&(e.udtVersion=d.panoUdt.version);d&&(d.panoSwfAPI&&d.panoSwfAPI.version&&e)&&(e.panoUrl=e.panoUrl+"?version="+d.panoSwfAPI.version,f=f+"?version="+d.panoSwfAPI.version);b.Ig=b.SQ(a.B,e,f)})},SQ:function(a,b,c){var d=new Aj,e="PanoramaFlash"+this.ba,f=p,f=M("div");f.style.position="absolute";f.id="PanoramaFlashWraper"+this.ba;f.style.top="0";f.style.left="0";f.style.height="100%";f.style.width="100%";f.style.zIndex=1200;this.pr=f;a.appendChild(f);d.create({id:e, width:"100%",height:"100%",allowscriptaccess:"always",scale:"showall",wmode:"opaque",quality:"best",url:c,ver:"10.2",errorMessage:"\\u60a8\\u672a\\u5b89\\u88c5Flash Player\\u64ad\\u653e\\u5668\\u6216\\u8005\\u7248\\u672c\\u8fc7\\u4f4e",vars:b},f);return d.EL(e)}});var Ej=zj.prototype;S(Ej,{get:Ej.get,set:Ej.set,doAction:Ej.ws}); ');
