import { Translation } from './utils';

export const cs: Translation = {
  language: 'Česky',
  home: {
    title: 'Domov funguje!',
  },
  info: {
    title: 'Info funguje!',
  },
  langsSupported: (n: number) => {
    const plural = n === 1 ? '' : n >= 2 && n <= 4 ? 'y' : 'ů';
    return `Tohle demo podporuje ${n} jazyk${plural}.`;
  },
};
