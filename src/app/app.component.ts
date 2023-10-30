import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddNoteFormComponent } from './components/add-note-form/add-note-form.component';
import { fadeUp } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddNoteFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeUp],
})
export class AppComponent {
  title = 'ng-16';
}
