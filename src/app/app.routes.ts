import { Routes } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NoteListComponent,
    }
];
