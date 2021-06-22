const dato = document.getElementById('dato')

const agregar = document.getElementById('agregar')
const ordenar = document.getElementById('ordenar')

const guardar = document.getElementById('guardar')
const cargar = document.getElementById('cargar')

const velocidad = document.getElementById("velocidad")
let num_velocidad;


let nuevo = []
let original = []

var options = {
    legend: { display: false },
    scales: {
      yAxes: [{
        afterBuildTicks: (x) => {
          console.log(x)
        },
        ticks: {
          callback: (value) => {
            console.log(value)
            return value
          },
          beginAtZero: true
        },
      }]
    }
};
var ctx = document.getElementById("lienzo").getContext('2d')
var grafica = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3'],
        datasets: [{
            data: [1, 2, 3],
            backgroundColor: 'rgb(240, 84, 84)',
        }]
    },
    options: options,
});

velocidad.oninput = () => {
    document.getElementById('numero').innerHTML = velocidad.value
    num_velocidad = velocidad.value
}

const salida ={
    operasion: 'Ordenamiento burbuja',
    lista: []
}

agregar.addEventListener("click", (e) => {
    e.preventDefault()
    let color = []
    if(dato.value != ''){
        nuevo = dato.value.split(', ')
        original = nuevo
    }
    for(let i = 0; i < original.length; i ++) {
        color.push('rgb(240, 84, 84)')
    }
    grafica.data.labels = original
    grafica.data.datasets[0].data = original
    grafica.data.datasets[0].backgroundColor = color
    grafica.update()
})

ordenar.addEventListener("click", (e) => {
    e.preventDefault()
    if(dato.value != '' || nuevo.length > 0){
        salida.lista = insercion(nuevo, nuevo.length)         
    }
})

async function insercion(lista, size) {
    let aux, j
    for(let i = 0; i < size; i++) {
        j = i
        grafica.data.datasets[0].backgroundColor[i] = 'rgb(48, 71, 94)'
        grafica.update()
        await new Promise(resolve => setTimeout(resolve, 500))

        aux = lista[i]
        while (j > 0 && lista[j-1] > aux) {
            lista[j] = lista[j - 1]
            j--
            
            grafica.data.datasets[0].backgroundColor[j] = 'rgb(48, 71, 94)'
            grafica.update()
            await new Promise(resolve => setTimeout(resolve, 500))
            grafica.data.datasets[0].backgroundColor[j] = 'rgb(240, 84, 84)'
            
        }
        lista[j] = aux
        this.interacion += 1
        
        grafica.data.datasets[0].backgroundColor[i] = 'rgb(240, 84, 84)'
    }
    grafica.update()
    return lista
}

let archivo = document.getElementById('file')
let entrada;

archivo.addEventListener('change', () => {
    let leer = new FileReader()
    leer.readAsText(archivo.files[0])
    leer.onload = function() {
    entrada = JSON.parse(leer.result)
    }
    document.getElementById('mensaje').innerText = 'Se cargo el archivo con exito'
})

cargar.addEventListener("click", (e) => {
    e.preventDefault()

    let labels = []
    let color = []

    let lista_ingresada = []
    let valores = entrada["valores"]

    for (let i = 0; i < valores.length; i++) {
        lista_ingresada.push(valores[i])
        labels.push(valores[i])
        color.push('rgb(240, 84, 84)')
    }

    nuevo = lista_ingresada

    document.getElementById('mensaje').innerText = ''
    archivo.setAttribute('disabled', '')

    grafica.data.labels = labels
    grafica.data.datasets[0].data = labels
    grafica.data.datasets[0].backgroundColor = color
    grafica.update()
})

guardar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(salida)
})
