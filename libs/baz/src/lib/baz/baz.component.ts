import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent, SvgIconRegistry } from '@ngneat/svg-icon';
import { sqIcons } from '../svg/sq';

@Component({
  selector: 'foo-baz',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
})
export class BazComponent {
  constructor(registry: SvgIconRegistry) {
    registry.register([...sqIcons]);
  }
}
