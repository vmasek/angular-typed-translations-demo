export const en = {
  language: 'English',
  home: {
    title: 'Home works!',
  },
  info: {
    title: 'Info works!',
  },

  // simple function using string literal and interpolation
  // see the cs.translation.ts for another example
  langsSupported: (n: number) => `This demo supports ${n} language${n === 1 ? '' : 's'}.`,
};
