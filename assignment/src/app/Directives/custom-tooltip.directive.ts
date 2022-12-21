import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { DataFlowService } from '../Service/data-flow.service';

@Directive({
  selector: '[appCustomTooltip]',
})
export class CustomTooltipDirective implements OnInit {
  @Input('appCustomTooltip') tooltipContent: any;

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private dataFlow: DataFlowService
  ) {}

  ngOnInit(): void {
    if (this.tooltipContent) {
      const pos = this.setCustomPositionValue();

      const position = this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: pos.startPos,
            originY: pos.endPos,
            overlayX: pos.startOverlayPos,
            overlayY: pos.endOverlayPos,
            offsetX: pos.offSetX,
            offsetY: pos.offSetY,
          },
        ]);

      this.overlayRef = this.overlay.create({
        positionStrategy: position,
      });
    } else {
      console.error('something went wrong');
    }
  }

  setCustomPositionValue(): any {
    let startPos: any = 'center';
    let endPos: any = 'center';
    let startOverlayPos: any = 'center';
    let endOverlayPos: any = 'center';
    let offSetX = 0;
    let offSetY = 0;
    if (this.tooltipContent.postion === 'right') {
      startPos = 'end';
      endPos = 'center';
      startOverlayPos = 'start';
      endOverlayPos = 'center';
      offSetX = 10;
      offSetY = 0;
    } else if (this.tooltipContent.postion === 'left') {
      startPos = 'start';
      endPos = 'center';
      startOverlayPos = 'end';
      endOverlayPos = 'center';
      offSetX = -10;
      offSetY = 0;
    } else if (this.tooltipContent.postion === 'top') {
      startPos = 'center';
      endPos = 'top';
      startOverlayPos = 'center';
      endOverlayPos = 'bottom';
      offSetX = 0;
      offSetY = -10;
    } else {
      startPos = 'center';
      endPos = 'bottom';
      startOverlayPos = 'center';
      endOverlayPos = 'top';
      offSetX = 0;
      offSetY = 10;
    }

    return {
      startPos,
      endPos,
      startOverlayPos,
      endOverlayPos,
      offSetX,
      offSetY,
    };
  }

  @HostListener('mouseenter')
  private show(): void {
    if (this.overlayRef) {
      let containerPortal: TemplatePortal<any> | ComponentPortal<any>;
      this.dataFlow.inputData = this.tooltipContent.inputData;
      this.dataFlow.position = this.tooltipContent.postion;

      if (this.tooltipContent.tooltipContent instanceof TemplateRef) {
        containerPortal = new TemplatePortal(
          this.tooltipContent.tooltipContent,
          this.viewContainerRef
        );
      } else {
        containerPortal = new ComponentPortal(
          this.tooltipContent.tooltipContent,
          this.viewContainerRef
        );
      }

      this.overlayRef.attach(containerPortal);
    }
  }

  @HostListener('mouseout')
  private hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
