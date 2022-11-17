import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'foo-baz',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
})
export class BazComponent {}
