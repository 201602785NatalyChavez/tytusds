export interface NodoArbol {
  symbols: Array<string>,
  weight: number,
  leafs: Array<NodoArbol>
}

//CODIFICAR TEXTO
export function codificar(text: string, codes: Map<string, string>): Array<string> {
  let result: Array<string> = [];
  for (let i = 0; i < text.length; i++) {
    result.push(codes.get(text[i]));
  }
  return result;
}

//DECODIFICAR TEXTO
export function decodificar(text: Array<string>, codes: Map<string, string>):string {
  let result: string = '';
  for (let i = 0; i < text.length; i++) {
    codes.forEach((code, symbol) => {
      if(text[i] === code) {
        result += symbol;
      }
    })
  }
  return result;

};

// ENTROPY
export function getEntropyOfText(text: string): number {
  let relFreq: Array<any> = obtenerFrecuenciaRelativa(obtenerFrecuencia(text));
  let entropy: number = 0;
  for (let i = 0; i < relFreq.length; i++) {
    entropy += relFreq[i][1] * Math.log2(relFreq[i][1]);
  }
  return -entropy;
}

//obtener codigo de simbolos de texto
export function obtenerCodigosDelTexto(text: string): Map<string, string> {
  const frequencyArr: Array<any> = obtenerFrecuencia(text);
  const symbols = frequencyArr.map((item) => item[0]);

  let tree = obtenerArbol(frequencyArr);

  let codes: Map<string, string> = new Map(); // Array with symbols and codes
  symbols.forEach(element => {
    codes.set(element, obtenerCodigodelSimbolo(tree, element))
  });

  return codes;
}

// OBTENER FRECUENCIA RELATIVA 
export function obtenerFrecuenciaRelativa(arr: Array<any>): Array<any> {
  let length: number = 0;
  let resArr: Array<any> = []
  for (let i = 0; i < arr.length; i++) {
    length += arr[i][1];
  }
  for (let i=0; i < arr.length; i++) {
    let relFreq = (arr[i][1] / length).toFixed(2);
    resArr.push([arr[i][0], relFreq]);
  }

  return resArr;
}

// OBTENER CODIGO DE SIMBOLO 
function obtenerCodigodelSimbolo(tree: NodoArbol, symbol: string, code: string = ''):string {
  let arr = [];
  if (typeof tree.leafs === undefined) {
    return code;
  } else {
    arr = tree.leafs;
  }
  
  if (arr[0].symbols.length === 1 && arr[0].symbols[0] === symbol) return code + 0;
  if (arr[0].symbols.length === 1 && arr[0].symbols[0] !== symbol) {
    if (arr[1].symbols.length === 1 && arr[1].symbols[0] === symbol) return code + 1;
    if (arr[1].symbols.includes(symbol) === true) return obtenerCodigodelSimbolo (arr[1], symbol, code + 1);
  }

  if (arr[1].symbols.length === 1 && arr[1].symbols[0] === symbol) return code + 1;
  if (arr[1].symbols.length === 1 && arr[1].symbols[0] !== symbol) {
    if (arr[0].symbols.length === 1 && arr[0].symbols[0] === symbol) return code + 0;
    if(arr[0].symbols.includes(symbol) === true) return obtenerCodigodelSimbolo (arr[0], symbol, code + 0);
  }

  if (arr[0].symbols.length >= 2 && arr[0].symbols.includes(symbol)) return obtenerCodigodelSimbolo(arr[0],symbol, code + 0);
  if (arr[1].symbols.length >= 2 && arr[1].symbols.includes(symbol)) return obtenerCodigodelSimbolo(arr[1],symbol, code + 1);
}

// OBTENER FRECUENCIA DE SIMBOLOS A PARTIR DE CADENA ENTRADA 
export function obtenerFrecuencia(text: string): Array<any> {
  let freq: Map<string, number> = new Map();

  for (let i = 0; i < text.length; i++) {
    let counter: number = 0;
    for (let j = 0; j < text.length; j++) {
      if (!freq.has(text[i])) {
        if (text[i] === text[j] && i !== j) {
          counter++;
        }
      }
    }
    if (!freq.has(text[i])) {
      freq.set(text[i], counter + 1);
    }
  }

  let sortArr = Array.from(freq); //descending sorting
  sortArr.sort((a, b) => b[1] - a[1]);
  return sortArr;
}

// GENERA ARBOL HUFFMAN 
export function obtenerArbol(arr: Array<any>) {
  let tree: NodoArbol;

  arr = arr.map((elem) => {
    return {
      symbols: [elem[0]],
      weight: elem[1],
      leafs: []
    }
  })

  let min1, min2, node: NodoArbol;

  while (arr.length > 2) {
    min1 = buscarNodoPesoMinimo(arr);
    arr.splice(arr.indexOf(min1), 1);
    min2 = buscarNodoPesoMinimo(arr);
    arr.splice(arr.indexOf(min2), 1);

    node = crearNodo(min1, min2);
    arr.push(node);
  }

  tree = crearNodo(arr[0], arr[1]);
  return tree;
}

// CREA NODO ARBOL A PARTIR DE 2 NODOS 
function crearNodo(node1: NodoArbol, node2: NodoArbol): any {
  let node: NodoArbol;
  let weight: number = node1.weight + node2.weight;
  let symbols: Array<string> = node1.symbols.concat(node2.symbols);
  let leafs: Array<NodoArbol> = [node1, node2]
  node = {
    symbols: symbols,
    weight: weight,
    leafs: leafs
  }
  return node;
}

// BUSCAR NODO PESO MINIMO EN ARBOL 
function buscarNodoPesoMinimo(arr: Array<any>, minNumber: number = -1): NodoArbol  {
  let min = 9999;
  let result: NodoArbol;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].weight <= min && arr[i].weight >= minNumber) {
      min = arr[i].weight;
      result = arr[i];
    }
  }
  return result;
}