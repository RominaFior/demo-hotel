(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{x5bZ:function(t,e,i){"use strict";i.r(e),i.d(e,"RegisterPageModule",function(){return p});var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),s=i("mrSG"),b=i("fXoL"),a=i("lGQG");const l=[{path:"",component:(()=>{class t{constructor(t,e){this.authSvc=t,this.router=e}ngOnInit(){}onRegister(t,e){return Object(s.a)(this,void 0,void 0,function*(){try{const i=yield this.authSvc.register(t.value,e.value);if(i){const t=this.authSvc.isEmailVerified(i);this.redirectUser(t)}}catch(i){console.log("Error",i)}})}redirectUser(t){this.router.navigate(t?["admin"]:["verify-email"])}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(a.a),b.Lb(c.g))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-register"]],decls:27,vars:0,consts:[["lines","full"],["position","floating"],["color","danger"],["required","","type","text"],["email",""],["required","","type","password"],["password",""],["color","primary","type","submit","expand","block",3,"click"],["routerLink","/login"]],template:function(t,e){if(1&t){const t=b.Pb();b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-title"),b.kc(3,"Register User"),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content"),b.Ob(5,"form"),b.Ob(6,"ion-item",0),b.Ob(7,"ion-label",1),b.kc(8,"E-Mail "),b.Ob(9,"ion-text",2),b.kc(10,"*"),b.Nb(),b.Nb(),b.Mb(11,"ion-input",3,4),b.Nb(),b.Ob(13,"ion-item"),b.Ob(14,"ion-label",1),b.kc(15,"Password "),b.Ob(16,"ion-text",2),b.kc(17,"*"),b.Nb(),b.Nb(),b.Mb(18,"ion-input",5,6),b.Nb(),b.Ob(20,"ion-button",7),b.Wb("click",function(){b.gc(t);const i=b.fc(12),n=b.fc(19);return e.onRegister(i,n)}),b.kc(21," Register "),b.Nb(),b.Nb(),b.Ob(22,"ion-row"),b.Ob(23,"ion-col"),b.Ob(24,"p"),b.Ob(25,"a",8),b.kc(26,"Already have an account?"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()}},directives:[r.e,r.o,r.n,r.d,o.g,o.d,o.e,r.g,r.h,r.m,r.f,r.t,r.b,r.j,r.c,c.i,r.r],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[c.j.forChild(l)],c.j]}),t})(),p=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[n.c,o.a,o.f,r.p,u]]}),t})()}}]);