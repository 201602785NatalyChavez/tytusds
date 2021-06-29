import { Apuntador, Tipo } from "./Dispersa";
import { NodoCabecera } from "./NodoCabecera";
import { Nodo } from "./Nodo"

export class ListaCabecera {
    private primero: NodoCabecera
    private ultimo: NodoCabecera
    private id: number

    constructor() {
        this.primero = null
        this.ultimo = null
        this.id = 0
    }

    public buscarCabecera(value: number | string) {
        let index = 0
        if (this.primero === null) return null
        let temp: NodoCabecera = this.primero
        while (temp !== null) {
            if (temp.getValue() === value) {
                return {
                    nodo: temp,
                    index: index
                }
            }
            temp = temp.getSiguiente()
            index++
        }
        return null
    }

    public addCabecera(value: number | string, tipo: Tipo) {
        let index = 0

        let nuevo: NodoCabecera = new NodoCabecera(this.id, value)
        this.id++
        if (this.primero === null) {
            this.primero = nuevo
            this.ultimo = nuevo
            return {
                nodo: nuevo,
                index: index
            }
        }

        if (this.primero.getValue() >= nuevo.getValue()) {
            nuevo.setSiguiente(this.primero)
            if (Tipo.DOBLE === tipo) this.primero.setAnterior(nuevo)
            this.primero = nuevo
            return {
                nodo: nuevo,
                index: index
            }
        }

        if (this.ultimo.getValue() < nuevo.getValue()) {
            let temp = this.primero
            while (temp != null) {
                index++
                temp = temp.getSiguiente()
            }
            this.ultimo.setSiguiente(nuevo)
            if (Tipo.DOBLE === tipo) nuevo.setAnterior(this.ultimo)
            this.ultimo = nuevo
            return {
                nodo: nuevo,
                index: index
            }
        }

        let temp = this.primero
        while (temp !== null) {
            index++
            let siguiente = temp.getSiguiente()
            if (nuevo.getValue() >= temp.getValue() && nuevo.getValue() < siguiente.getValue()) {
                nuevo.setSiguiente(siguiente)
                temp.setSiguiente(nuevo)
                if (Tipo.DOBLE === tipo) {
                    siguiente.setAnterior(nuevo)
                    nuevo.setAnterior(temp)
                }
                return {
                    nodo: nuevo,
                    index: index
                }
            }

            temp = temp.getSiguiente()
        }
        return null
    }

    public mostrarCabecera(apuntador: Apuntador, tipo: Tipo) {
        let temp: NodoCabecera = this.primero
        let res =
        {
            nodes: [],
            edges: []
        }
        let level = (apuntador === Apuntador.FILA) ? 1 : 0
        while (temp !== null) {
            let id = ((apuntador === Apuntador.COLUMNA) ? 'x' : 'y') + temp.getId()
            if (temp === this.primero) {
                if (tipo === Tipo.DOBLE) {
                    res.edges.push({
                        from: id,
                        to: 0

                    })
                }
                res.edges.push({
                    from: 0,
                    to: id
                })
            }
            //let data = temp.getLista().getLista(apuntador)
            res.nodes.push({
                id: id,
                label: '' + temp.getValue(),
                group: (apuntador === Apuntador.COLUMNA) ? 'horizontal' : 'vertical',
                level: level
            })
            if(apuntador === Apuntador.FILA) level++
            temp = temp.getSiguiente()
            if (temp !== null) {
                let id2 = ((apuntador === Apuntador.COLUMNA) ? 'x' : 'y') + temp.getId()
                res.edges.push({
                    from: id,
                    to: id2

                })
                if (tipo === Tipo.DOBLE) {
                    if (tipo === Tipo.DOBLE) {
                        res.edges.push({
                            from: id2,
                            to: id

                        })
                    }
                }
            }
        }
        return res
    }


    public getNodosHijos(apuntador: Apuntador, tipo: Tipo) {
        let temp: NodoCabecera = this.primero
        let res =
        {
            nodes: [],
            edges: []
        }

        while (temp !== null) {
            let id = ((apuntador === Apuntador.COLUMNA) ? 'x' : 'y') + temp.getId()
            let data = temp.getLista().getLista(apuntador, tipo)

            if (data.nodes.length > 0) {
                let hijoId = 'xy' + temp.getLista().getPrimero().getId()
                if (tipo === Tipo.DOBLE) {
                    res.edges.push({
                        from: id,
                        to: hijoId

                    })
                }
                res.edges.push({
                    from: hijoId,
                    to: id
                })
            }

       

            if (apuntador === Apuntador.COLUMNA)  res.nodes = res.nodes.concat(data.nodes)
            
            res.edges = res.edges.concat(data.edges)


            temp = temp.getSiguiente()

        }
        return res
    }


    public async addValor(nuevo: Nodo, x: number, y: number, apuntador: Apuntador, tipo: Tipo) {
        let index = 0
        let temp = this.primero
        while (temp !== null) {
            if (apuntador === Apuntador.FILA) {
                if (index === y) break
            }
            else if (apuntador === Apuntador.COLUMNA) {
                if (index === x) break
            }
            index++
            
            temp = temp.getSiguiente()
        }
        
        let resultado = temp.getLista().buscar(nuevo.getValue(), apuntador)
        if (resultado !== null) return resultado
        return await temp.getLista().add(nuevo, tipo, apuntador, x,y)


    }
}