import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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

export const markComplete = trigger('markComplete', [
  state('true', style({ backgroundColor: '#e3e3e3' })),
  transition('* => true', [animate('0.5s ease-out')]),
]);

export const staggerList = trigger('staggerList', [
  transition('void => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('300ms', [
        animate(
          '1s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.3, transform: 'translateY(35px)', offset: 0.3, }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]),
        ),
      ]),
      { optional: true },
    ),
  ]),
]);
