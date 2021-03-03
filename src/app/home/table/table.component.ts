import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  elements: any = [
    {id: 1, name: 'Presenza', descr: 'F130 ed.8'},
    {id: 2, name: 'Analisi', descr: 'Su Teams il venerdì pomeriggio'},
    {id: 3, name: 'Algebra', descr: 'Sempre in presenza'},
    {id: 4, name: 'Architettura', descr: 'Sempre in presenza'},
    {id: 5, name: 'Fisica', descr: 'Solo su Teams'},
    {id: 6, name: 'Fondamenti', descr: 'Solo su Teams'},
  ];

  headElements = ['ID', 'Name', 'Descrizione'];

  ngOnInit(): void {
  }

}
