export class CodigoHammingImpl{
    r:number;
    m:number;
    strSalida:string;

    constructor(private cadenaEntrada:string){
        this.m=cadenaEntrada.length;
        this.r=0;
        this.calcularNumeroParidad();
        this.algoritmoCodigoHamming();
    }

    calcularNumeroParidad(){
        while(true)
		{
			if(this.m + this.r + 1 <= Math.pow(2,this.r))
			{
				break;
			}
			this.r++;
		}
        this.strSalida='M: '+this.m+", R: "+this.r+"\n";
        console.log('M: '+this.m+", R: "+this.r);
    }
    algoritmoCodigoHamming(){
        let transLength = this.cadenaEntrada.length+this.r;
        let temp=0;
        let temp2=0;
        let j=0;
		let transMsg=new Array(transLength+1); //+1 because starts with 1
		for(let i=1;i<=transLength;i++)
		{
			temp2 = parseInt(Math.pow(2,temp).toString()) ;
			if(i%temp2!=0)
			{
				transMsg[i]=parseInt( this.cadenaEntrada.charAt(j) );
				j++;
			}
			else
			{
				temp++;
			}
		}
		for(let i=1;i<=transLength;i++)
		{
            //this.strSalida+= transMsg[i]==undefined?" - ":transMsg[i];
		}
		let smallSteps=[];
		let bitsVerifica=Array();
		for(let i=0;i<this.r;i++)
		{
			let smallStep= parseInt( Math.pow(2,i).toString() ) ;
			smallSteps.push(smallStep);
			let bigStep=smallStep*2;
			let start=smallStep,checkPos=start;
            //this.strSalida+="\n"+"Calculating Parity bit for Position : "+smallStep;
            //this.strSalida+="\n"+"Bits to be checked : ";
			let row=[]; 
            while(true)
			{
				
				for(let k=start;k<=start+smallStep-1;k++)
				{
					checkPos=k;
					row.push(checkPos);
					//this.strSalida+=checkPos+" ";
					if(k>transLength)
					{
						break;
					}
					transMsg[smallStep]^=transMsg[checkPos];
				}
				
				if(checkPos>transLength)
				{
					break;
				}
				else
				{
					start=start+bigStep;
				}
				
			}
			bitsVerifica.push(row);
		}	
		//Display encoded message
		/*this.strSalida+="\n"+"Hamming Encoded Message : ";
		for(let i=1;i<=transLength;i++)
		{
			this.strSalida+=transMsg[i];
		}*/

		//Imprimir tabla salida
		this.strSalida+="\n";
		this.strSalida+="Palabra";
		for(let i =0;i<this.cadenaEntrada.length;i++){
			this.strSalida+="\t"+this.cadenaEntrada[i]+"";
		}
		this.strSalida+="\tBit\nDato";
		for(let i =0;i<this.cadenaEntrada.length;i++){
			this.strSalida+="\t"+this.encodedDataBits[i]+"";
		}
		this.strSalida+="\tComprobación";
		for(let i =0;i<smallSteps.length;i++){
			this.strSalida+="\np"+smallSteps[i]+"\t";
			let sumaFila=0;
			for(let j=0;j<this.cadenaEntrada.length;j++){
				if( (bitsVerifica[i]).indexOf(j+1)>=0){
					this.strSalida+="\t"+this.cadenaEntrada[j];
					sumaFila+=parseInt(this.cadenaEntrada[j]);
				}else{
					this.strSalida+="\t-";
				}
			}
			sumaFila=sumaFila%2;
			let strComprobacion="";
			let todoCorrecto=true;
			if(sumaFila!=0) {
				strComprobacion="1\tIncorrecto";
				todoCorrecto=false;
			}else strComprobacion="0\tCorrecto";
			this.strSalida+="\t"+strComprobacion;
		}
    }
	encodedDataBits=[]=["p1","p2","d1","p4","d2","d3","d4","p8","d5","d6","d7","d8","d9","d10","d11","p16","d12","d13","d14","d15"]


}