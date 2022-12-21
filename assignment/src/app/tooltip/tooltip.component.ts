import { Component, Input, OnInit } from '@angular/core';
import { DataFlowService } from '../Service/data-flow.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  data: any;
  pos: any;
  constructor(private dataFlow: DataFlowService) {}

  ngOnInit(): void {
    this.data = this.dataFlow.inputData;
    this.pos = this.dataFlow.position;
  }
}
