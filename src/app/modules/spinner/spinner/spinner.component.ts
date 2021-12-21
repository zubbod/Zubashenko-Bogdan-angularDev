import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color } from 'src/app/shared/types/color';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() color: Color = 'primary';
}
