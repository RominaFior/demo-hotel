(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{SwEK:function(n,o,t){"use strict";t.r(o),t.d(o,"VerifyEmailPageModule",function(){return p});var i=t("ofXK"),e=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),b=t("mrSG"),s=t("fXoL"),a=t("lGQG");function l(n,o){if(1&n){const n=s.Pb();s.Ob(0,"ion-content"),s.Ob(1,"ion-row"),s.Ob(2,"ion-col"),s.Ob(3,"h2"),s.kc(4,"Thanks for Registering!"),s.Nb(),s.Ob(5,"p"),s.kc(6,"We've sent a confirmation email to "),s.Ob(7,"strong"),s.kc(8),s.Nb(),s.Nb(),s.Ob(9,"p"),s.kc(10," Please check your email or click on the link to resend the verification. "),s.Nb(),s.Nb(),s.Nb(),s.Ob(11,"ion-row"),s.Ob(12,"ion-col"),s.Ob(13,"ion-button",1),s.Wb("click",function(){return s.gc(n),s.Yb().onSendEmail()}),s.kc(14," Resend verification email "),s.Nb(),s.Nb(),s.Nb(),s.Ob(15,"ion-row"),s.Ob(16,"ion-col"),s.Ob(17,"p",2),s.Ob(18,"a",3),s.kc(19,"Go to Login"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()}if(2&n){const n=o.ngIf;s.Bb(8),s.lc(n.email)}}const u=[{path:"",component:(()=>{class n{constructor(n){this.authSvc=n,this.user$=this.authSvc.afAuth.user}onSendEmail(){return Object(b.a)(this,void 0,void 0,function*(){try{yield this.authSvc.sendVerifcationEmail()}catch(n){console.log("Error->",n)}})}ngOnDestroy(){this.authSvc.logout()}}return n.\u0275fac=function(o){return new(o||n)(s.Lb(a.a))},n.\u0275cmp=s.Fb({type:n,selectors:[["app-verify-email"]],decls:6,vars:3,consts:[[4,"ngIf"],["expand","block","type","submit",3,"click"],[1,"ion-text-end"],["routerLink","/login"]],template:function(n,o){1&n&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-title"),s.kc(3,"Verification"),s.Nb(),s.Nb(),s.Nb(),s.jc(4,l,20,1,"ion-content",0),s.Zb(5,"async")),2&n&&(s.Bb(4),s.dc("ngIf",s.ac(5,1,o.user$)))},directives:[c.e,c.o,c.n,i.i,c.d,c.j,c.c,c.b,r.i,c.r],pipes:[i.b],styles:[""]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(o){return new(o||n)},imports:[[r.j.forChild(u)],r.j]}),n})(),p=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(o){return new(o||n)},imports:[[i.c,e.a,c.p,f]]}),n})()}}]);