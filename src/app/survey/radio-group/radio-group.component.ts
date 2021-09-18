import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() textObject:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
