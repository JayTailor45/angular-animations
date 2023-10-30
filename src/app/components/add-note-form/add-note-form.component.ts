import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'add-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note-form.component.html',
})
export class AddNoteFormComponent {

  notesService = inject(NotesService);

  note = '';

  addNote() {
    if(!this.note) return;
    this.notesService.addNote(this.note);
    this.note = '';
  }

}
