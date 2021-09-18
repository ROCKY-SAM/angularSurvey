import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-multiple-text',
  templateUrl: './multiple-text.component.html',
  styleUrls: ['./multiple-text.component.scss']
})
export class MultipleTextComponent implements OnInit {
  @Input() textObject:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
