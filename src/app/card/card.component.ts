import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image: string = "https://www.tribuna.com.mx/u/fotografias/m/2021/6/14/f800x450-216998_268444_5050.jpg";
  public Titulo: string = "Curso de Angular con Interpolacion";
  constructor() { }

  ngOnInit(): void {
  }

}
