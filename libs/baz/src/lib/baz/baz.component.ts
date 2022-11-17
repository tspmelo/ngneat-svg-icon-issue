import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'foo-baz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
})
export class BazComponent {}
