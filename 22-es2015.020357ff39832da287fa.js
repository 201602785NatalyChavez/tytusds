(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{tpvR:function(t,e,s){"use strict";s.r(e),s.d(e,"MerkleModule",function(){return m});var i=s("ofXK"),n=s("M0ag"),o=s("tyNb"),r=s("LRne");class a{constructor(t){this.hash=t,this.left=null,this.right=null}}class l{constructor(t){this.value=t}}class h{constructor(){this.tophash=null,this.root=null,this.datablock=[],this.dot="",this.index=0,this.string=!1}insert(t){throw new Error("Method not implemented.")}includes(t){throw new Error("Method not implemented.")}push(t){throw new Error("Method not implemented.")}add(t){this.datablock.push(new l(t))}search(t,e){return null===t?null:e<t.data?this.search(t.left,e):e>t.data?this.search(t.right,e):(console.log(t.data),t)}eliminar(t){this.root=this.eliminarN(this.root,t)}eliminarN(t,e){if(this.string){let s=0;for(let t=0;t<e.length;t++)s+=e.charCodeAt(0);console.log("VALOR EN AscII: ",s);let i=0;for(let e=0;e<t.data.length;e++)i+=t.data.charCodeAt(0);if(console.log("ENTRO A ELIMINAR N.---- Y est\xe1 eliminando : ",e),null==t)return null;if(e<i){let s=this.eliminarN(t.left,e);t.left=s}else if(e>i){let s=this.eliminarN(t.right,e);t.right=s}else{let e=t;null==e.right?t=e.left:null==e.left?t=e.right:e=this.cambiar(e),e=null}return t}if(console.log("ENTRO A ELIMINAR N.---- Y est\xe1 eliminando : ",e),null==t)return null;if(e<t.data){let s=this.eliminarN(t.left,e);t.left=s}else if(e>t.data){let s=this.eliminarN(t.right,e);t.right=s}else{let e=t;null==e.right?t=e.left:null==e.left?t=e.right:e=this.cambiar(e),e=null}return t}cambiar(t){throw new Error("Method not implemented.")}createTree(t){this.tophash=new a(0),this._createTree(this.tophash,t)}_createTree(t,e){e>0&&(t.left=new a(0),t.right=new a(0),this._createTree(t.left,e-1),this._createTree(t.right,e-1))}genHash(t,e){if(null!=t)if(this.genHash(t.left,e),this.genHash(t.right,e),null==t.left&&null==t.right){t.left=this.datablock[e-this.index--];var s=new Uint32Array(1);window.crypto.getRandomValues(s),t.hash=s[0]}else t.hash=(parseInt(t.left.hash,16)+parseInt(t.right.hash,16)).toString(16)}preorder(t){null!=t&&(console.log(t.value),this.preorder(t.left),this.preorder(t.right))}auth(){for(var t=1;Math.pow(2,t)<this.datablock.length;)t+=1;for(var e=this.datablock.length;e<Math.pow(2,t);e++)this.datablock.push(new l(100*e));this.index=Math.pow(2,t),this.createTree(t),this.genHash(this.tophash,Math.pow(2,t)),this.preorder(this.tophash)}dotgen(t){null!=t&&(null!=t.left&&t.left instanceof l&&(this.dot+='"'+t.left.value+'" [color=gray] -> "0x'+t.hash+'";'),t.left instanceof a&&(null!=t.left&&(this.dot+='"0x'+t.left.hash+'" -> "0x'+t.hash+'";'),null!=t.right&&(this.dot+='"0x'+t.right.hash+'" -> "0x'+t.hash+'";')),this.dotgen(t.left),this.dotgen(t.right))}}var c=s("fXoL"),d=s("3Pt+");const b=["siteConfigNetwork"];function g(t,e){1&t&&(c.Xb(0,"p"),c.Ec(1,"Se encontraron valores repetidos al insertar valores a la lista"),c.Wb())}function u(t,e){if(1&t&&(c.Xb(0,"p"),c.Ec(1),c.Wb()),2&t){const t=c.jc();c.Eb(1),c.Fc(t.strMessageBuscar)}}const f=[{path:"",component:(()=>{class t{constructor(){this.bst=new h,this.valores=0,this.showMessage=!1,this.fileContent="",this.setting={element:{dynamicDownload:null}}}ngOnInit(){this.listaEnlJSon="",this.opcionRepeticiones="true",this.opcionOperar="Inicio",this.esCarga=!1}Iniciar(){this.listaEnlJSon="",this.showMessage=!1,this.opcionRepeticiones="true"}Insertar(){8==this.x.charCodeAt(0)?console.log("No hay nada"):this.x.charCodeAt(0)>=48&&this.x.charCodeAt(0)<=57?(this.bst.add(parseInt(this.x)),this.valores+=1):(this.bst.string=!0,this.bst.add(this.x),this.bst.string=!1,this.valores+=1),this.x="",console.log("----------------------"),this.x="",this.visit(),console.log("TOPHASH",this.bst.tophash),this.listaEnlJSon=JSON.stringify(this.bst)}visit(){if(this.valores%2==0){this.drawSvgNetwork();var t=this.getTreeData();this.loadVisTree(t)}}loadVisTree(t){this.network=new vis.Network(this.networkContainer.nativeElement,t,{nodes:{widthConstraint:100},layout:{hierarchical:{levelSeparation:100,nodeSpacing:100,parentCentralization:!0,direction:"DU",sortMethod:"directed",shakeTowards:"roots"}}}),this.network.on("hoverNode",function(t){console.log("hoverNode Event:",t)}),this.network.on("blurNode",function(t){console.log("blurNode event:",t)})}getTreeData(){this.bst.auth(),this.bst.dot="{node [shape=box];",this.bst.dotgen(this.bst.tophash),this.bst.dot+="}";var t=vis.parseDOTNetwork(this.bst.dot);this.bst.dot="";var e={nodes:t.nodes,edges:t.edges};return this.bst.datagraph=[],this.bst.edgegraph=[],e}drawSvgNetwork(){window.vis=s("WaTm")}cargarArchivo(t){let e=t[0],s=new FileReader,i=this;s.onloadend=function(t){i.fileContent=s.result.toString()},s.readAsText(e),this.strCarga=i.fileContent}clickCargar(){this.strCarga=this.fileContent,console.log(this.strCarga);let t=JSON.parse(this.strCarga);console.log(t),this.bst=new h,null!=t.animacion&&null!=t.animacion&&(this.velocidadAnimacion=t.animacion),null!=t.repeticion&&(this.opcionRepeticiones=t.repeticion);for(let e of t.valores)e=e.toString(),this.valoresinsertados.push(e),this.valoresinsertados.includes(e)&&"false"==this.opcionRepeticiones?console.log("El valor",e,"est\xe1 repetido"):(this.x=e,this.Insertarcarga(),this.esCarga=!0);this.visit(),this.valoresinsertados=[]}Insertarcarga(){8==this.x.charCodeAt(0)?console.log("No hay nada"):this.x.charCodeAt(0)>=48&&this.x.charCodeAt(0)<=57?this.bst.add(parseInt(this.x)):(this.bst.string=!0,this.bst.add(this.x),this.bst.string=!1),console.log("RAIZ",this.bst.root),this.listaEnlJSon=JSON.stringify(this.bst),this.x=""}Eliminar(){console.log("IMPRIMIENDO EL ELIMINAR"),8==this.x.charCodeAt(0)?console.log("No hay nada"):this.x.charCodeAt(0)>=48&&this.x.charCodeAt(0)<=57?this.bst.eliminar(parseInt(this.x)):(this.bst.string=!0,this.bst.eliminar(this.x),this.bst.string=!1),console.log(this.x),this.x=null,this.visit()}clickBuscarNodo(){this.showMessageBuscar=!1,null!=this.x&&""!=this.x&&(this.strMessageBuscar=this.listaEnlJSon.search(this.x)?"Si se encontro el dato":"No se encontro el dato",this.showMessageBuscar=!0,this.x="")}downloadJson(){this.fakeValidateUserData().subscribe(t=>{this.dyanmicDownloadByHtmlTag({fileName:"Merkle.json",text:t})})}fakeValidateUserData(){return Object(r.a)(this.listaEnlJSon)}dyanmicDownloadByHtmlTag(t){this.setting.element.dynamicDownload||(this.setting.element.dynamicDownload=document.createElement("a"));const e=this.setting.element.dynamicDownload,s=t.fileName.indexOf(".json")>-1?"text/json":"text/plain";e.setAttribute("href",`data:${s};charset=utf-8,${encodeURIComponent(t.text)}`),e.setAttribute("download",t.fileName);var i=new MouseEvent("click");e.dispatchEvent(i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Lb({type:t,selectors:[["app-merkle"]],viewQuery:function(t,e){if(1&t&&c.Ic(b,1),2&t){let t;c.vc(t=c.ic())&&(e.networkContainer=t.first)}},decls:36,vars:4,consts:[[4,"ngIf"],[1,"row"],[1,"col-xs-2","text-xs-center"],[1,"card","mb-3"],[1,"card-body"],["placeholder","Ingresar nuevo valor",1,"form-control",3,"ngModel","ngModelChange"],[1,"card","mb-3","text-center","my-auto"],[1,"card-body","align-items-center"],["type","button",1,"btn","btn-secondary","mr-3",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"col-xl-6","text-xs-center"],[1,"form-group"],["type","file",3,"change"],["type","submit",1,"btn","btn-secondary",3,"click"],["id","mynetwork"],["siteConfigNetwork",""],["rows","2",1,"form-control"]],template:function(t,e){1&t&&(c.Xb(0,"div"),c.Xb(1,"h4"),c.Ec(2,"Merkle"),c.Wb(),c.Cc(3,g,2,0,"p",0),c.Cc(4,u,2,1,"p",0),c.Xb(5,"div",1),c.Xb(6,"div",2),c.Xb(7,"div",3),c.Xb(8,"div",4),c.Xb(9,"input",5),c.hc("ngModelChange",function(t){return e.x=t}),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(10,"div",2),c.Xb(11,"div",6),c.Xb(12,"div",7),c.Xb(13,"button",8),c.hc("click",function(){return e.Insertar()}),c.Ec(14,"Agregar"),c.Wb(),c.Xb(15,"button",8),c.hc("click",function(){return e.clickBuscarNodo()}),c.Ec(16,"Buscar"),c.Wb(),c.Xb(17,"button",9),c.hc("click",function(){return e.Eliminar()}),c.Ec(18,"Eliminar"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(19,"div",1),c.Xb(20,"div",10),c.Xb(21,"fieldset",11),c.Xb(22,"input",12),c.hc("change",function(t){return e.cargarArchivo(t.target.files)}),c.Wb(),c.Xb(23,"button",13),c.hc("click",function(){return e.clickCargar()}),c.Ec(24,"Cargar a lista dinamica"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Sb(25,"br"),c.Sb(26,"div",14,15),c.Xb(28,"div",10),c.Xb(29,"fieldset",11),c.Xb(30,"label"),c.Ec(31,"JSON salida"),c.Wb(),c.Xb(32,"textarea",16),c.Ec(33),c.Wb(),c.Xb(34,"button",13),c.hc("click",function(){return e.downloadJson()}),c.Ec(35,"Guardar"),c.Wb(),c.Wb(),c.Wb(),c.Wb()),2&t&&(c.Eb(3),c.oc("ngIf",e.showMessage),c.Eb(1),c.oc("ngIf",e.showMessageBuscar),c.Eb(5),c.oc("ngModel",e.x),c.Eb(24),c.Fc(e.listaEnlJSon))},directives:[i.k,d.a,d.e,d.f],styles:["","#mynetwork[_ngcontent-%COMP%] {\n        width: 1200px;\n        height: 500px;\n        border: 1px solid lightgray;\n    }"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({imports:[[o.f.forChild(f)],o.f]}),t})();var w=s("QibW");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({imports:[[w.c,i.b,p,n.b,d.b]]}),t})()}}]);