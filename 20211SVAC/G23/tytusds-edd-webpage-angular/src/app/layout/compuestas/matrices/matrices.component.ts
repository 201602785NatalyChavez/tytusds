import { query } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';

import {Matriz} from '../clase-matriz'

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  matriz = new Matriz()
  canvaswidth:number = 100
  canvasheight:number = 100
  ctx : CanvasRenderingContext2D
  
  constructor() { }

  ngOnInit(): void {
  }

  drawCanvas(){
    let tamH
    let tamV
    this.matriz.insertar(0,0,0)
    this.matriz.insertar(1,1,0)
    this.matriz.insertar(2,1,1)
    this.matriz.insertar(3,2,1)
    this.matriz.insertar(4,2,2)
    this.matriz.insertar(5,2,3)
    this.matriz.insertar(6,2,4)
    this.matriz.insertar(7,2,5)
    this.matriz.insertar(8,3,1)
    this.matriz.insertar(9,5,3)
    this.matriz.insertar(10,5,5)

    if(this.matriz.estaVaciaH() != false) tamH = this.matriz.obtenerTamH()

    if(this.matriz.estaVaciaV() != false) tamV = this.matriz.obtenerTamV()

    //let tamH = this.bst.obtenerTamH()
    //this.canvaswidth = 
    //let tamV = this.bst.obtenerTamV()
    //let query = document.querySelector('#mynetwork')
    let c = document.getElementById('mycanvas')
    this.ctx = this.canvas.nativeElement.getContext('2d')
    c.style.height='1000px'
    c.style.width='1000px'
    this.ctx.moveTo(1,10)
    this.ctx.lineTo(1,30)
    this.ctx.lineTo(10,30)
    this.ctx.lineTo(10,10)
    this.ctx.lineTo(1,10)
    this.ctx.stroke()
    this.ctx.fillText("VALOR",3,20)
    //pppp.style.color= '#FF00FF'
    //query.innerHTML = `<canvas id="mycanvas" #canvas  width="${this.canvaswidth}" height="${this.canvasheight}">`
    //let c = document.getElementById('mycanvas')
    //let ctx = c.getContext("2d")
    //query.innerHTML += ""
  }



}
