(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{wc8g:function(r,t,s){"use strict";s.r(t),s.d(t,"InsercionModule",function(){return u});var e=s("ofXK"),a=s("M0ag"),o=s("tyNb"),i=s("ZZ88"),n=s("fXoL");const h=[{path:"",component:(()=>{class r{constructor(){this.arreglo=[],this.barChartOptions={scaleShowVerticalLines:!0,responsive:!0},this.barChartLabels=["1","2","3","4","5"],this.barChartData=[{data:[85,25,55,40,15],label:"Datos le\xeddos"}]}ngOnInit(){this.arreglo.push(8),this.arreglo.push(16),this.arreglo.push(5),this.arreglo.push(11),this.arreglo.push(36),this.arreglo.push(1),this.arreglo.push(26),this.arreglo.push(10),this.arreglo.push(15),this.barChartType="bar",this.barChartLegend=!0}graficar(){}insercion(){let r,t,s;for(r=1;r<this.arreglo.length();r++){for(s=this.arreglo[r],t=r-1;t>=0&&this.arreglo[t]>s;)this.arreglo[t+1]=this.arreglo[t],t-=1;this.arreglo[t+1]=s}console.log("ARREGLO ORDENADO POR INSERCION")}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=n.Lb({type:r,selectors:[["app-insercion"]],decls:0,vars:0,template:function(r,t){},styles:[""],data:{animation:[Object(i.a)()]}}),r})()}];let l=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.Pb({type:r}),r.\u0275inj=n.Ob({imports:[[o.f.forChild(h)],o.f]}),r})();var c=s("QibW"),p=s("3Pt+");let u=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.Pb({type:r}),r.\u0275inj=n.Ob({imports:[[c.c,e.b,l,a.b,p.b]]}),r})()}}]);