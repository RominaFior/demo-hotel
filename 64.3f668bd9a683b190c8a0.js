(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{X3zk:function(o,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",function(){return d});var i=t("ofXK"),e=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),s=t("mrSG"),b=t("fXoL"),a=t("lGQG");function l(o,n){if(1&o&&(b.Ob(0,"ion-row"),b.Ob(1,"ion-col"),b.kc(2),b.Nb(),b.Nb()),2&o){const o=b.Yb();b.Bb(2),b.mc(" ",o.error," ")}}const u=[{path:"",component:(()=>{class o{constructor(o,n){this.authSvc=o,this.router=n}ngOnInit(){}onLogin(o,n){return Object(s.a)(this,void 0,void 0,function*(){try{(yield this.authSvc.login(o.value,n.value))&&this.redirectUser()}catch(t){this.error=t}})}onLoginGoogle(){return Object(s.a)(this,void 0,void 0,function*(){try{(yield this.authSvc.loginGoogle())&&this.redirectUser()}catch(o){console.log(o)}})}redirectUser(){this.subscription=this.authSvc.user$.subscribe(o=>{var n,t;this.userInfo=o,this.userInfo?this.authSvc.isEmailVerified(this.userInfo)&&("admin"==(null===(n=this.userInfo)||void 0===n?void 0:n.role)?this.router.navigate(["admin"]):"kitchen"==(null===(t=this.userInfo)||void 0===t?void 0:t.role)?this.router.navigate(["kitchen"]):"user"===this.userInfo.role?(console.log("rol user"),this.router.navigate(["home"])):this.router.navigate(["login"])):(console.log("entra en login verify"),this.router.navigate(["verify-email"]))})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(b.Lb(a.a),b.Lb(c.g))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-login"]],decls:42,vars:1,consts:[["lines","full"],["position","floating"],["color","danger"],["required","","type","text"],["email",""],["required","","type","password"],["password",""],["color","primary","type","submit","expand","block",3,"click"],[4,"ngIf"],[1,"ion-text-end"],["routerLink","/forgot-password"],[1,"center-span"],["type","submit","expand","block","color","danger",3,"click"],["routerLink","/register"],["routerLink","/login-staff"]],template:function(o,n){if(1&o){const o=b.Pb();b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-title"),b.kc(3,"Login"),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content"),b.Ob(5,"form"),b.Ob(6,"ion-item",0),b.Ob(7,"ion-label",1),b.kc(8,"E-Mail "),b.Ob(9,"ion-text",2),b.kc(10,"*"),b.Nb(),b.Nb(),b.Mb(11,"ion-input",3,4),b.Nb(),b.Ob(13,"ion-item"),b.Ob(14,"ion-label",1),b.kc(15,"Password "),b.Ob(16,"ion-text",2),b.kc(17,"*"),b.Nb(),b.Nb(),b.Mb(18,"ion-input",5,6),b.Nb(),b.Ob(20,"ion-button",7),b.Wb("click",function(){b.gc(o);const t=b.fc(12),i=b.fc(19);return n.onLogin(t,i)}),b.kc(21," Login "),b.Nb(),b.jc(22,l,3,1,"ion-row",8),b.Ob(23,"ion-row"),b.Ob(24,"ion-col"),b.Ob(25,"p",9),b.Ob(26,"a",10),b.kc(27,"Forgot password?"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(28,"span",11),b.kc(29,"or"),b.Nb(),b.Ob(30,"ion-button",12),b.Wb("click",function(){return n.onLoginGoogle()}),b.kc(31," Login with Google "),b.Nb(),b.Nb(),b.Ob(32,"ion-row"),b.Ob(33,"ion-col"),b.Ob(34,"p",9),b.Ob(35,"a",13),b.kc(36,"Create an account"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(37,"ion-row"),b.Ob(38,"ion-col"),b.Ob(39,"p",9),b.Ob(40,"a",14),b.kc(41,"Staff access"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()}2&o&&(b.Bb(22),b.dc("ngIf",n.error))},directives:[r.e,r.o,r.n,r.d,e.g,e.d,e.e,r.g,r.h,r.m,r.f,r.t,r.b,i.i,r.j,r.c,c.i,r.r],styles:[".center-span[_ngcontent-%COMP%]{display:block;text-align:center}"]}),o})()}];let g=(()=>{class o{}return o.\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({factory:function(n){return new(n||o)},imports:[[c.j.forChild(u)],c.j]}),o})(),d=(()=>{class o{}return o.\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({factory:function(n){return new(n||o)},imports:[[i.c,e.a,r.p,g]]}),o})()}}]);