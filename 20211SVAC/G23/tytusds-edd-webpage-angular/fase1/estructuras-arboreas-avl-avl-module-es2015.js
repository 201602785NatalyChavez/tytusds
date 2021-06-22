(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estructuras-arboreas-avl-avl-module"],{

/***/ "8IfJ":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/avl-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AvlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvlRoutingModule", function() { return AvlRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _avl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avl.component */ "lxlG");




const routes = [
    {
        path: '',
        component: _avl_component__WEBPACK_IMPORTED_MODULE_3__["AvlComponent"]
    }
];
let AvlRoutingModule = class AvlRoutingModule {
};
AvlRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AvlRoutingModule);



/***/ }),

/***/ "C2QB":
/*!***************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/avl.module.ts ***!
  \***************************************************************/
/*! exports provided: AvlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvlModule", function() { return AvlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "M0ag");
/* harmony import */ var _avl_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avl-routing.module */ "8IfJ");
/* harmony import */ var _avl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avl.component */ "lxlG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let AvlModule = class AvlModule {
};
AvlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _avl_routing_module__WEBPACK_IMPORTED_MODULE_4__["AvlRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        declarations: [_avl_component__WEBPACK_IMPORTED_MODULE_5__["AvlComponent"]]
    })
], AvlModule);



/***/ }),

/***/ "JP0/":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/estructuras-arboreas/avl/avl.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div >\r\n    <h4>AVL</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    <input class=\"form-control\" placeholder=\"Ingresar nuevo valor\" [(ngModel)]=\"x\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-2 text-xs-center\">\r\n            <div class=\"card mb-3 text-center my-auto\">\r\n                <div class=\"card-body align-items-center\" >\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Insertar()\">Agregar</button>\r\n                    <button class=\"btn btn-secondary mr-3\" type=\"button\" (click)=\"Eliminar()\">Eliminar</button>\r\n                    </div>\r\n            </div>\r\n        </div>      \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <fieldset class=\"form-group\">\r\n                 <textarea class=\"form-control\" rows=\"2\">{{fileContent}}</textarea>\r\n                <input type=\"file\" (change)=\"cargarArchivo($event.target.files)\">\r\n                <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"clickCargar()\">Cargar a lista dinamica</button>\r\n            </fieldset>\r\n        </div>\r\n    </div>   \r\n    \r\n    <br>\r\n    <div id=\"mynetwork\" #siteConfigNetwork></div>\r\n    <div class=\"col-xl-6 text-xs-center\">\r\n        <fieldset class=\"form-group\">\r\n            <label>JSON salida</label>\r\n            <textarea class=\"form-control\" rows=\"2\">{{listaEnlJSon}}</textarea>\r\n            <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"downloadJson()\">Guardar</button>\r\n        </fieldset>\r\n    </div>\r\n</div>\r\n<style type=\"text/css\">\r\n    #mynetwork {\r\n        width: 1200px;\r\n        height: 500px;\r\n        border: 1px solid lightgray;\r\n    }\r\n</style>");

/***/ }),

/***/ "M9My":
/*!*************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/nodo-avl.ts ***!
  \*************************************************************/
/*! exports provided: Nodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nodo", function() { return Nodo; });
class Nodo {
    constructor(val, height, size) {
        this.value = val;
        this.size = size;
        this.height = height;
        this.right = null;
        this.left = null;
        this.ya = false;
    }
}


/***/ }),

/***/ "ZZ6e":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/avl.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "lxlG":
/*!******************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/avl.component.ts ***!
  \******************************************************************/
/*! exports provided: AvlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvlComponent", function() { return AvlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_avl_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./avl.component.html */ "JP0/");
/* harmony import */ var _avl_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avl.component.css */ "ZZ6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _clas_avl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clas-avl */ "s0tH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let AvlComponent = class AvlComponent {
    constructor(route) {
        this.route = route;
        this.bst = new _clas_avl__WEBPACK_IMPORTED_MODULE_5__["AVL"]();
        this.fileContent = '';
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    ngOnInit() {
    }
    Insertar() {
        if (this.x.charCodeAt(0) == 8) {
            console.log("No hay nada");
        }
        else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
            this.bst.put(parseInt(this.x));
        }
        else {
            this.bst.string = true;
            this.bst.put(this.x);
            this.bst.string = false;
        }
        console.log("RAIZ", this.bst.root);
        this.x = '';
        console.log("----------------------");
        this.x = null;
        this.visit();
        this.listaEnlJSon = JSON.stringify(this.bst);
    }
    Eliminar() {
        console.log("IMPRIMIENDO EL ELIMINAR");
        if (this.x.charCodeAt(0) == 8) {
            console.log("No hay nada");
        }
        else if (this.x.charCodeAt(0) >= 48 && this.x.charCodeAt(0) <= 57) {
            this.bst.delete(parseInt(this.x));
        }
        else {
            this.bst.string = true;
            this.bst.delete(this.x);
            this.bst.string = false;
        }
        console.log(this.x);
        this.x = '';
        this.visit();
    }
    visit() {
        this.drawSvgNetwork();
        var treeData = this.getTreeData();
        this.loadVisTree(treeData);
    }
    loadVisTree(treedata) {
        var options = {
            nodes: {
                widthConstraint: 100,
            },
            layout: {
                hierarchical: {
                    levelSeparation: 100,
                    nodeSpacing: 100,
                    parentCentralization: true,
                    direction: 'UD',
                    sortMethod: 'directed',
                    shakeTowards: 'roots'
                },
            },
        };
        var container = this.networkContainer.nativeElement;
        this.network = new vis.Network(container, treedata, options);
        var that = this;
        this.network.on("hoverNode", function (params) {
            console.log('hoverNode Event:', params);
        });
        this.network.on("blurNode", function (params) {
            console.log('blurNode event:', params);
        });
    }
    getTreeData() {
        var nodes = [
            { id: 1, label: 'Node 1', title: 'I am node 1!' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
            { id: 4, label: 'Node 4' },
            { id: 5, label: 'Node 5' },
            { id: 6, label: 'Node 6' }
        ];
        this.bst.dot = '{';
        this.bst.dotgen(this.bst.root);
        this.bst.dot += '}';
        var DOTstring = this.bst.dot;
        var parsedData = vis.parseDOTNetwork(DOTstring);
        console.log("RAIz", this.bst.root);
        console.log("DOT", this.bst.dot);
        this.bst.dot = '';
        var edges = [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 },
            { from: 5, to: 6 }
        ];
        var treeData = {
            nodes: parsedData.nodes,
            edges: parsedData.edges
        };
        return treeData;
    }
    drawSvgNetwork() {
        var nodes = null;
        var edges = null;
        var network = null;
        var DIR = 'img/refresh-cl/';
        var LENGTH_MAIN = 150;
        var LENGTH_SUB = 50;
        nodes = [];
        edges = [];
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            nodes: {
                widthConstraint: 20,
            },
            layout: {
                hierarchical: {
                    levelSeparation: 100,
                    nodeSpacing: 100,
                    parentCentralization: true,
                    direction: 'UD',
                    sortMethod: 'directed',
                    shakeTowards: 'roots'
                },
            },
        };
        window.vis = __webpack_require__(/*! vis-network/standalone */ "WaTm");
    }
    cargarArchivo(fileList) {
        let file = fileList[0];
        let fileReader = new FileReader();
        let self = this;
        fileReader.onloadend = function (x) {
            self.fileContent = fileReader.result.toString();
        };
        fileReader.readAsText(file);
        this.strCarga = self.fileContent;
    }
    clickCargar() {
        this.strCarga = this.fileContent;
        let strIntoObj = JSON.parse(this.strCarga);
        for (let i = 0; i < strIntoObj.valores.length; i++) {
            this.x = strIntoObj.valores[i].toString();
            this.Insertar();
        }
    }
    downloadJson() {
        this.fakeValidateUserData().subscribe((res) => {
            this.dyanmicDownloadByHtmlTag({
                fileName: 'Avl.json',
                text: res
            });
        });
    }
    fakeValidateUserData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.listaEnlJSon);
    }
    dyanmicDownloadByHtmlTag(arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        const element = this.setting.element.dynamicDownload;
        const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
        element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
        element.setAttribute('download', arg.fileName);
        var event = new MouseEvent("click");
        element.dispatchEvent(event);
    }
};
AvlComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AvlComponent.propDecorators = {
    networkContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["siteConfigNetwork",] }]
};
AvlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-avl',
        template: _raw_loader_avl_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_avl_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], AvlComponent);



/***/ }),

/***/ "s0tH":
/*!*************************************************************!*\
  !*** ./src/app/layout/estructuras-arboreas/avl/clas-avl.ts ***!
  \*************************************************************/
/*! exports provided: AVL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVL", function() { return AVL; });
/* harmony import */ var _nodo_avl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodo-avl */ "M9My");

class AVL {
    constructor() {
        this.root = null;
        this.dot = '';
        this.contadores = 0;
        this.nulls = 0;
        this.string = false;
    }
    isEmpty() {
        return this.root == null;
    }
    //size() {
    //  return size(root);
    //}
    size(x) {
        if (x == null)
            return 0;
        return x.size;
    }
    height(x) {
        if (x == null)
            return -1;
        return x.height;
    }
    put(val) {
        this.root = this.puts(this.root, val);
    }
    find(val, x) {
        if (x == null) {
            return null;
        }
        if (x.value == val) {
            return x;
        }
        else if (val < x.value) {
            return this.find(val, x.left);
        }
        else {
            return this.find(val, x.right);
        }
    }
    puts(x, value) {
        if (this.string) {
            let val = 0;
            for (let q = 0; q < value.length; q++) {
                val += value.charCodeAt(0);
            }
            console.log("VALOR EN AscII: ", value);
            //console.log("Nodos")
            //console.log(node.data, value)
            //console.log("Nodos Padre")
            let nodedata = 0;
            for (let q = 0; q < x.value.length; q++) {
                nodedata += x.value.charCodeAt(0);
            }
            if (x == null) {
                this.contadores += 1;
                var q = new _nodo_avl__WEBPACK_IMPORTED_MODULE_0__["Nodo"](val, 0, 1);
                q.ya = true;
                return q;
            }
            if (val < nodedata) {
                x.left = this.puts(x.left, val);
            }
            else if (val > nodedata) {
                x.right = this.puts(x.right, val);
            }
            else {
                x.value = val;
                return x;
            }
            x.size = 1 + this.size(x.left) + this.size(x.right);
            x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
            return this.balance(x);
        }
        else {
            let val = value;
            if (x == null) {
                this.contadores += 1;
                var q = new _nodo_avl__WEBPACK_IMPORTED_MODULE_0__["Nodo"](val, 0, 1);
                q.ya = true;
                return q;
            }
            if (val < x.value) {
                x.left = this.puts(x.left, val);
            }
            else if (val > x.value) {
                x.right = this.puts(x.right, val);
            }
            else {
                x.value = val;
                return x;
            }
            x.size = 1 + this.size(x.left) + this.size(x.right);
            x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
            return this.balance(x);
        }
    }
    balance(x) {
        if (this.balanceFactor(x) > 1) {
            if (this.balanceFactor(x.right) < 0) {
                x.right = this.rotateRight(x.right);
            }
            x = this.rotateLeft(x);
        }
        else if (this.balanceFactor(x) < -1) {
            if (this.balanceFactor(x.left) > 0) {
                x.left = this.rotateLeft(x.left);
            }
            x = this.rotateRight(x);
        }
        return x;
    }
    balanceFactor(x) {
        return this.height(x.right) - this.height(x.left);
    }
    rotateRight(x) {
        var y = x.left;
        x.left = y.right;
        y.right = x;
        y.size = x.size;
        x.size = 1 + this.size(x.left) + this.size(x.right);
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }
    rotateLeft(x) {
        var y = x.right;
        x.right = y.left;
        y.left = x;
        y.size = x.size;
        x.size = 1 + this.size(x.left) + this.size(x.right);
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }
    delete(val) {
        this.root = this.delete2(this.root, val);
    }
    delete2(x, value) {
        if (this.string) {
            let val = 0;
            for (let q = 0; q < value.length; q++) {
                val += value.charCodeAt(0);
            }
            console.log("VALOR EN AscII: ", value);
            //console.log("Nodos")
            //console.log(node.data, value)
            //console.log("Nodos Padre")
            let nodedata = 0;
            for (let q = 0; q < x.value.length; q++) {
                nodedata += x.value.charCodeAt(0);
            }
            if (val < x.value) {
                x.left = this.delete2(x.left, val);
            }
            else if (val > x.value) {
                x.right = this.delete2(x.right, val);
            }
            else {
                if (x.left == null) {
                    return x.right;
                }
                else if (x.right == null) {
                    console.log("X:RIGHT == UNDEFINED");
                    return x.left;
                }
                else {
                    var y = x;
                    console.log("Y.RIGHT2", y.right.value);
                    console.log("X.RIGHT", x.right.value);
                    x = this.min(y.right);
                    x.right = this.deleteMin(y.right);
                    x.left = y.left;
                }
            }
            x.size = 1 + this.size(x.left) + this.size(x.right);
            x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
            return this.balance(x);
        }
        else {
            let val = value;
            if (val < x.value) {
                x.left = this.delete2(x.left, val);
            }
            else if (val > x.value) {
                x.right = this.delete2(x.right, val);
            }
            else {
                if (x.left == null) {
                    return x.right;
                }
                else if (x.right == null) {
                    console.log("X:RIGHT == UNDEFINED");
                    return x.left;
                }
                else {
                    var y = x;
                    console.log("Y.RIGHT2", y.right.value);
                    console.log("X.RIGHT", x.right.value);
                    x = this.min(y.right);
                    x.right = this.deleteMin(y.right);
                    x.left = y.left;
                }
            }
            x.size = 1 + this.size(x.left) + this.size(x.right);
            x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
            return this.balance(x);
        }
    }
    deleteMin(x) {
        if (x.left == null)
            return x.right;
        x.left = this.deleteMin(x.left);
        x.size = 1 + this.size(x.left) + this.size(x.right);
        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        return this.balance(x);
    }
    min(x) {
        if (x.left == null)
            return x;
        return this.min(x.left);
    }
    inOrden(n) {
        if (n != null) {
            this.inOrden(n.left);
            console.log(n.value + ", ");
            this.inOrden(n.right);
        }
    }
    preOrden(n) {
        if (n != null) {
            console.log(n.value + ", ");
            this.preOrden(n.left);
            this.preOrden(n.right);
        }
    }
    postOrden(n) {
        if (n != null) {
            this.postOrden(n.left);
            this.postOrden(n.right);
            console.log(n.value + ", ");
        }
    }
    dotgen(tmp) {
        if (tmp != null) {
            console.log("DENTRO DE DOTGEN", tmp.value);
            if (tmp.ya) {
                this.dot += tmp.value + '[style="filled",color="turquoise"];';
                tmp.ya = false;
            }
            if (tmp.left != null)
                this.dot += tmp.value + '--' + tmp.left.value + ';';
            else {
                this.dot += 'null' + this.nulls + '[color="white", label=""];\n';
                this.dot += tmp.value + '-- null' + this.nulls + '[color="white", label=""];';
            }
            this.nulls += 1;
            if (tmp.right != null)
                this.dot += tmp.value + '--' + tmp.right.value + ';';
            else {
                this.dot += 'null' + this.nulls + '[color="white", label=""];\n';
                this.dot += tmp.value + '-- null' + this.nulls + '[color="white", label=""];';
            }
            this.nulls += 1;
            this.dotgen(tmp.left);
            this.dotgen(tmp.right);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=estructuras-arboreas-avl-avl-module-es2015.js.map