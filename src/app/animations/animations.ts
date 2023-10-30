import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ backgroundColor: '#fafafa', opacity: 0 }),
    animate(1000),
  ]),
]);
