import { InjectionToken } from '@angular/core';
import { en } from './en.translation';

export enum WebsiteLanguage {
  English = 'en',
  Czech = 'cs',
}

/**
 * Inferring the type of default translation (in this case english)
 * This makes type available for type checking of injected translations
 */
export type Translation = typeof en;

export const TRANSLATION = new InjectionToken<Translation>('TRANSLATION');
