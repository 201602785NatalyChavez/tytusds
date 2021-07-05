export class AnimacionRecorrido{
    private contador=0;
    public bndAnimacionTerminada=false;
    constructor(private recorrido:any[],private grafoImpl){
        this.contador=0;
        this.bndAnimacionTerminada=false;
    }
    animar(){
        let strGraphviz="";
        if(this.grafoImpl.aristas!=undefined){
            strGraphviz='digraph G{ \n';
            for(let i = 0 ; i < this.grafoImpl.vertices.length;i++){
              strGraphviz+=this.grafoImpl.vertices[i].name+" [label=\""
              +this.grafoImpl.vertices[i].name+"\" " 
              +(this.recorrido[this.contador].name==this.grafoImpl.vertices[i].name?",fillcolor=red, style=filled":"")
              +"]\n"
            }
            for(let i = 0 ; i < this.grafoImpl.aristas.length;i++){
              strGraphviz+=this.grafoImpl.aristas[i][0]+'->'+this.grafoImpl.aristas[i][1]+'[label="'+this.grafoImpl.aristas[i][2]+'"]'+(i==this.grafoImpl.aristas.length-1?"":";");
            }
            strGraphviz+='}';
            this.contador++;
            if(this.contador==this.recorrido.length) this.bndAnimacionTerminada=true;
            //graphviz('#graph').renderDot(strGraphviz);
        }
        //console.log(strGraphviz);
        return strGraphviz;
    }
}