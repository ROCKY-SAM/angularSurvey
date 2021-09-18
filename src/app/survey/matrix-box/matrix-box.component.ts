import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-matrix-box',
  templateUrl: './matrix-box.component.html',
  styleUrls: ['./matrix-box.component.scss']
})
export class MatrixBoxComponent implements OnInit {
  @Input() textObject:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
