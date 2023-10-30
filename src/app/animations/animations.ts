import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ backgroundColor: '#fafafa', opacity: 0 }),
    animate('1s ease-in-out'),
  ]),
]);

export const fadeDelete = trigger('fadeDelete', [
  transition('* => void', [
    style({ backgroundColor: 'red', opacity: 1 }),
    animate('1s ease-in'),
  ]),
]);

