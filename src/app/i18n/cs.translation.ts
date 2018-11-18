import { Translation } from './utils';

export const cs: Translation = {
  language: 'Česky',
  home: {
    title: 'Domov funguje!',
  },
  info: {
    title: 'Info funguje!',
  },

  // function using string literal and interpolation with constant determining the plural postfix
  // in more complicated cases you could use this function to implement logic yourself or integrate ICU message format
  langsSupported: (n: number) => {
    const plural = n === 1 ? '' : n >= 2 && n <= 4 ? 'y' : 'ů';
    return `Tohle demo podporuje ${n} jazyk${plural}.`;
  },
};
