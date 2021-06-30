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
            this.strSalida+= transMsg[i]==undefined?"0":transMsg[i];
		}

		for(let i=0;i<this.r;i++)
		{
			let smallStep= parseInt( Math.pow(2,i).toString() ) ;
			let bigStep=smallStep*2;
			let start=smallStep,checkPos=start;
            this.strSalida+="\n"+"Calculating Parity bit for Position : "+smallStep;
            this.strSalida+="\n"+"Bits to be checked : ";
			
            while(true)
			{
				for(let k=start;k<=start+smallStep-1;k++)
				{
					checkPos=k;
					this.strSalida+=checkPos+" ";
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
		}	
		//Display encoded message
		this.strSalida+="\n"+"Hamming Encoded Message : ";
		for(let i=1;i<=transLength;i++)
		{
			this.strSalida+=transMsg[i];
		}
    }


}