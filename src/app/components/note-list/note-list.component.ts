import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  notesService = inject(NotesService)

  notes = this.notesService.notes;

  onDelete(id: string) {
    this.notesService.deleteNote(id);
  }

  onComplete(id: string) {
    this.notesService.markNoteAsComplete(id);
  }

}
