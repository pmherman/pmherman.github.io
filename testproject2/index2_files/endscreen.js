(function(g){var window=this;var mxa=function(a,b,c,d){var e=b.dc();g.T(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.jd(c,d?d:"mqdefault.jpg");var k=b instanceof g.ZM?g.iV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.bP(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.ZM?b.za:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.U("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.En(c),is_live:m,is_list:l,
is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.dP&&(c.playlist_length=b.getLength());a.update(c)},Z5=function(a,b){g.IU.call(this,{G:"div",
aa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.l=a;this.created=!1},$5=function(a){var b={G:"span",
L:"ytp-upnext-top",J:[{G:"span",L:"ytp-upnext-header",J:[g.U("YTP_PLAYLIST_UP_NEXT")]},{G:"span",L:"ytp-upnext-title",J:["{{title}}"]},{G:"span",L:"ytp-upnext-author",J:["{{author}}"]}]},c={role:"button",href:"{{url}}","aria-label":g.U("YTP_AUTOPLAY_NEXT")};b={G:"div",L:"ytp-upnext",T:{"aria-label":"{{watch}}"},J:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},b,{G:"a",L:"ytp-upnext-autoplay-icon",T:c,J:[{G:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},
J:[{G:"circle",L:"ytp-svg-autoplay-circle",T:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{G:"circle",L:"ytp-svg-autoplay-ring",T:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{G:"polygon",L:"ytp-svg-autoplay-triangle",T:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{G:"span",L:"ytp-upnext-bottom",J:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",J:[g.U("YTP_AUTOPLAY_PAUSED_3")]}]}]};
g.X.call(this,b);this.A=null;b=this.ua["ytp-upnext-cancel"];this.A=new g.X({G:"button",aa:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":g.U("YTP_AUTOPLAY_CANCEL")},J:[g.U("YTP_CANCEL")]});g.N(this,this.A);this.A.R("click",this.bO,this);this.A.Ba(b);this.l=a;this.I=this.ua["ytp-svg-autoplay-ring"];this.D=this.C=this.o=this.B=null;this.F=new g.Ht(this.Tm,5E3,this);g.N(this,this.F);this.H=0;this.O(this.ua["ytp-upnext-autoplay-icon"],"click",this.kQ);this.wA();this.O(a,"autonavvisibility",
this.wA);this.O(a,"mdxnowautoplaying",this.zP);this.O(a,"mdxautoplaycanceled",this.AP);this.O(a,"mdxautoplayupnext",this.aD);3==this.l.Qa()&&(a=(a=g.KT(g.FT(this.l)))?a.tH():null)&&this.aD(a)},nxa=function(a,b){a.B=b;
mxa(a,b,g.W(a.l),"hqdefault.jpg")},a6=function(a,b){if(!a.o){g.pF("a11y-announce",g.U("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title);
a.H=g.BF();a.o=new g.Ht((0,g.z)(a.Np,a,b),25);a.Np(b);var c=b||g.W(a.l).experiments.l("autoplay_time")||1E4;a.l.ra("onAutonavCoundownStarted",c)}g.eq(a.element,"ytp-upnext-autoplay-paused")},c6=function(a){b6(a);
a.H=g.BF();a.Np();g.S(a.element,"ytp-upnext-autoplay-paused")},b6=function(a){a.o&&(a.o.dispose(),a.o=null)},d6=function(a,b){b=void 0===b?!1:b;
var c=g.W(a.l);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;g.UT(a.l,"xwebnotifications",{permission:d});"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.B.dc(),a.Tm(),a.C=new window.Notification(g.U("YTP_PLAYLIST_UP_NEXT"),{body:d.title,icon:d.jd(c)}),a.D=a.O(a.C,"click",a.aQ),a.F.start())}b6(a);a.l.Bj(!1,b)},oxa=function(a){Z5.call(this,a,"subscribecard-endscreen");
var b=a.ea();this.o=new g.X({G:"div",L:"ytp-subscribe-card",J:[{G:"img",L:"ytp-author-image",T:{src:b.profilePicture}},{G:"div",L:"ytp-subscribe-card-right",J:[{G:"div",L:"ytp-author-name",J:[b.author]},{G:"div",L:"html5-subscribe-button-container"}]}]});g.N(this,this.o);this.o.Ba(this.element);this.A=new g.P_(g.U("YTP_SUBSCRIBE"),null,g.U("YTP_UNSUBSCRIBE"),null,!0,!1,b.Jl,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.A);this.A.Ba(this.o.ua["html5-subscribe-button-container"]);this.hide()},
e6=function(a){var b=g.W(a),c=g.WI||g.Xe?{style:"will-change: opacity"}:void 0,d=b.l&&!b.D,e=["ytp-videowall-still"];
b.experiments.g("web_player_video_wall_show_text")&&b.g&&e.push("ytp-videowall-show-text");g.X.call(this,{G:"a",aa:e,T:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},J:[{G:"div",L:"ytp-videowall-still-image",T:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",J:[{G:"span",L:"ytp-videowall-still-info-bg",J:[{G:"span",L:"ytp-videowall-still-info-content",T:c,J:[{G:"span",L:"ytp-videowall-still-info-title",
J:["{{title}}"]},{G:"span",L:"ytp-videowall-still-info-author",J:["{{author_and_views}}"]},{G:"span",L:"ytp-videowall-still-info-live",J:[g.U("YTP_LIVE")]},{G:"span",L:"ytp-videowall-still-info-duration",J:["{{duration}}"]}]}]}]},{G:"span",aa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],J:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},g.U("YTP_PLAYLIST"),{G:"span",L:"ytp-videowall-still-listlabel-length",J:[" (",{G:"span",J:["{{playlist_length}}"]},")"]}]},{G:"span",
aa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],J:[{G:"span",L:"ytp-videowall-still-listlabel-mix-icon"},g.U("YTP_MIX"),{G:"span",L:"ytp-videowall-still-listlabel-length",J:[" (50+)"]}]}]});this.A=d;this.l=a;this.o=null;this.R("click",this.B);this.R("keypress",this.C);g.W(a).X&&(a=a.app.ca,b=this.element,g.D(a.g,b),g.Qa(a.g,b),c=String(a.F++),b.setAttribute("data-visual-id",c),g.Se(this,(0,g.z)(a.D,a,b)))},f6=function(a){Z5.call(this,a,"videowall-endscreen");
this.K=a;this.F=0;this.A=[];this.H=this.D=this.C=null;this.I=this.X=!1;this.B=new g.ZE(this);g.N(this,this.B);this.M=new g.Ht(g.Ea(g.S,this.element,"ytp-show-tiles"),0);g.N(this,this.M);var b=new g.X({G:"button",aa:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":g.U("YTP_PREVIOUS")},J:[g.MU()]});g.N(this,b);b.Ba(this.element);b.R("click",this.SK,this);this.N=new g.qU({G:"div",L:"ytp-endscreen-content"});g.N(this,this.N);this.N.Ba(this.element);b=new g.X({G:"button",aa:["ytp-button","ytp-endscreen-next"],
T:{"aria-label":g.U("YTP_NEXT")},J:[g.NU()]});g.N(this,b);b.Ba(this.element);b.R("click",this.RK,this);this.o=new $5(a);g.N(this,this.o);g.hU(this.l,this.o.element,4);this.hide()},g6=function(a){return g.iU(a.l)&&a.Rp()&&!a.H},pxa=function(a){return(0,g.I)(a.suggestions,function(a){return g.KZ(a)})},h6=function(a){var b=a.zs();
b!=a.X&&(a.X=b,a.l.P("autonavvisibility"))},i6=function(a){g.nU.call(this,a);
g.lG({YTP_AUTOPLAY_CANCEL:"Cancel autoplay",YTP_AUTOPLAY_NEXT:"Play next video",YTP_AUTOPLAY_PAUSED_3:"Autoplay is paused",YTP_CANCEL:"Cancel",YTP_MIX:"Mix",YTP_PLAYLIST_UP_NEXT:"Up Next",YTP_UNSUBSCRIBE:"Unsubscribe"});this.l=null;this.o=new g.ZE(this);g.N(this,this.o);this.A=g.W(a);qxa(a)?this.l=new f6(this.g):this.A.da?this.l=new oxa(this.g):this.l=new Z5(this.g);g.N(this,this.l);g.hU(this.g,this.l.element,4);this.NB();this.o.O(a,"videodatachange",this.NB,this);this.o.O(a,"crn_endscreen",this.qK,
this);this.o.O(a,"crx_endscreen",this.rK,this)},qxa=function(a){a=g.W(a);
return a.Kd&&!a.da};
g.p(Z5,g.IU);Z5.prototype.create=function(){this.created=!0};
Z5.prototype.destroy=function(){this.created=!1};
Z5.prototype.Rp=function(){return!1};
Z5.prototype.zs=function(){return!1};g.p($5,g.X);g.h=$5.prototype;g.h.Tm=function(){this.C&&(this.F.stop(),this.Ca(this.D),this.D=null,this.C.close(),this.C=null)};
g.h.wA=function(){g.zU(this,g.GT(this.l))};
g.h.aQ=function(){window.focus();this.Tm()};
g.h.hide=function(){g.X.prototype.hide.call(this)};
g.h.Np=function(a){a=a||g.W(this.l).experiments.l("autoplay_time")||1E4;var b=Math.min(g.BF()-this.H,a);a=Math.min(b/a,1);this.I.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.l.Qa()?d6(this,!0):this.o&&this.o.start()};
g.h.kQ=function(a){!g.Ld(this.A.element,g.OE(a))&&g.kX(a,this.l)&&d6(this)};
g.h.bO=function(){g.IT(this.l,!0)};
g.h.zP=function(a){this.l.Qa();this.show();a6(this,a)};
g.h.aD=function(a){this.l.Qa();this.B&&this.B.dc().videoId==a.dc().videoId||nxa(this,a)};
g.h.AP=function(){this.l.Qa();b6(this);this.hide()};
g.h.U=function(){b6(this);this.Tm();g.X.prototype.U.call(this)};g.p(oxa,Z5);g.p(e6,g.X);e6.prototype.Qj=function(){g.lU(this.l,this.element);var a=this.o.dc().videoId,b=this.o.getPlaylistId();g.R0(this.l.app,a,this.o.Yd,b,void 0,void 0,void 0)};
e6.prototype.B=function(a){g.kX(a,this.l,this.A,this.o.Yd||void 0)&&this.Qj()};
e6.prototype.C=function(a){switch(a.keyCode){case 13:case 32:g.TE(a)||(this.Qj(),g.SE(a))}};g.p(f6,Z5);g.h=f6.prototype;g.h.create=function(){Z5.prototype.create.call(this);var a=this.l.ea();a&&(this.C=pxa(a),this.D=a);this.Bg();this.B.O(this.l,"appresize",this.Bg);this.B.O(this.l,"onVideoAreaChange",this.Bg);this.B.O(this.l,"videodatachange",this.TK);this.B.O(this.l,"autonavchange",this.fz);this.B.O(this.l,"autonavcancel",this.QK);this.B.O(this.element,"transitionend",this.vR)};
g.h.destroy=function(){g.aF(this.B);g.Ue(this.A);this.A=[];this.C=null;Z5.prototype.destroy.call(this);g.eq(this.element,"ytp-show-tiles");this.M.stop()};
g.h.Rp=function(){return 1!=this.D.autonavState};
g.h.show=function(){Z5.prototype.show.call(this);g.eq(this.element,"ytp-show-tiles");g.W(this.l).g?g.Jt(this.M):this.M.start();(this.I||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.IT(this.l,!1);var a=g6(this);g.iU(this.l)&&g.W(this.l).experiments.g("ui_logging")&&g.UT(this.l,"end",{cancelButtonShow:a?"1":"0",state:this.Rp()?"enabled":"disabled"});a?(h6(this),2==this.D.autonavState?g.W(this.l).experiments.g("fast_autonav_in_background")&&3==this.l.wi()?d6(this.o,!0):a6(this.o):3==this.D.autonavState&&
c6(this.o)):(g.IT(this.l,!0),h6(this))};
g.h.hide=function(){Z5.prototype.hide.call(this);c6(this.o);h6(this)};
g.h.vR=function(a){g.OE(a)==this.element&&this.Bg()};
g.h.Bg=function(){if(this.C&&this.C.length){g.S(this.element,"ytp-endscreen-paginate");if(g.W(this.K).experiments.g("web_player_endscreen_size_killswitch"))var a=g.Bh(this.element);else{a=g.XT(this.K);var b=g.FT(this.K).H;b&&(b=b.Td()?48:32,a.width-=2*b)}var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,r=e/2,u=b<=f-2&&n>=r*m,B=e<=k-2&&n>=q*m;if((q+
1)/r*d/c>c/(q/(r+1)*d)&&B)n-=q*m,e+=2;else if(u)n-=r*m,b+=2;else if(B)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.Vc(a.width/m||1,1,1.21);n*=g.Vc(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.Ah(a,m,n);g.ih(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});nxa(this.o,this.C[0]);g.T(this.element,"ytp-endscreen-takeover",g6(this));h6(this);m+=4;
n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),q=g.Wc(q+this.F,l),0!=r){u=this.A[c];u||(u=new e6(this.l),this.A[c]=u,a.appendChild(u.element));B=Math.floor(n*k/e);var E=Math.floor(m*f/b),L=Math.floor(n*(k+r)/e)-B-4,Y=Math.floor(m*(f+r)/b)-E-4;g.ph(u.element,E,B);g.Ah(u.element,Y,L);g.ih(u.element,"transitionDelay",(k+f)/20+"s");g.T(u.element,"ytp-videowall-still-mini",1==r);g.T(u.element,"ytp-videowall-still-large",2<r);r=u;
q=this.C[q];r.o=q;mxa(r,q,g.W(r.l),g.cq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");u=q.Yd;q=r.l;g.W(q).X&&(q=q.app.ca,r=r.element,u=u&&u.itct,B=r.getAttribute("data-visual-id"),g.D(q.g,r),g.jU(q,"onLogServerVeCreated",{id:B,tracking_params:u}));c++}g.T(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.Ed(e.element),g.Te(e);this.A.length=c}};
g.h.TK=function(){var a=this.l.ea();this.D!=a&&(this.F=0,this.C=pxa(a),this.D=a,this.Bg())};
g.h.RK=function(){this.F+=this.A.length;this.Bg()};
g.h.SK=function(){this.F-=this.A.length;this.Bg()};
g.h.wJ=function(){return!!this.o.o};
g.h.fz=function(a){1==a?(this.I=!1,this.H=this.D.clientPlaybackNonce,b6(this.o),this.g&&this.Bg()):(this.I=!0,this.g&&g6(this)&&(2==a?a6(this.o):3==a&&c6(this.o)))};
g.h.QK=function(a){if(a){for(a=0;a<this.A.length;a++)g.mU(this.K,this.A[a].element,!0);this.fz(1)}else this.H=null,this.I=!1;this.Bg()};
g.h.zs=function(){return this.g&&g6(this)};g.p(i6,g.nU);g.h=i6.prototype;g.h.Zy=function(){var a=this.g.ea(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!qxa(this.g)||b;a=g.rN(a,"ypc_module");var c=g.S0(this.g.app);return b&&!a&&!c};
g.h.Yy=function(){return this.l.zs()};
g.h.sJ=function(){return this.Yy()?this.l.wJ():!1};
g.h.U=function(){g.dU(this.g,"endscreen");g.nU.prototype.U.call(this)};
g.h.load=function(){g.nU.prototype.load.call(this);this.l.show();g.W(this.g).da&&.01>Math.random()&&g.UT(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.nU.prototype.unload.call(this);this.l.hide();this.l.destroy()};
g.h.qK=function(a){this.Zy()&&(this.l.created||this.l.create(),"load"==a.ia&&this.load())};
g.h.rK=function(a){"load"==a.ia&&this.loaded&&this.unload()};
g.h.NB=function(){g.dU(this.g,"endscreen");var a=Math.max(1E3*(this.g.ea().lengthSeconds-10),0);a=new g.ZO(a,0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.ZO(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.aU(this.g,[a,b])};g.$_.endscreen=i6;})(_yt_player);
