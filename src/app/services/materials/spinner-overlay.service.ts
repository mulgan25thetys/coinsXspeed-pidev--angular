import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerOverlayComponent } from 'src/app/components/spinner-overlay/spinner-overlay.component';
import { defer, finalize, NEVER, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {

  private overlayRef: OverlayRef = undefined;

  constructor(private overlay: Overlay) {}
  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());

  public show(): void {
    // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: 
        this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(SpinnerOverlayComponent));
    });
  }

  public hide(): void {
    this.overlayRef.detach();
    this.overlayRef = undefined;
  }
}
