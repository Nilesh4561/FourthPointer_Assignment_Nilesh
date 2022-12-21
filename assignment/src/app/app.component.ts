import { Component } from '@angular/core';
import { DataFlowService } from './Service/data-flow.service';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment';
  tooltipComponent = TooltipComponent;

  constructor(public dataFlow: DataFlowService) {}
}
