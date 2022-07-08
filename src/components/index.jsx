import { default as loadable } from './LoadableBase';

export { default as Layout } from './Layout';
export const Button = loadable(() => import('./Button'));
export const ContactForm = loadable(() => import('./ContactForm'));
export const LetterForm = loadable(() => import('./LetterForm'));
export const LetterList = loadable(() => import('./LetterList'));
export const Input = loadable(() => import('./Input'));
export const Textarea = loadable(() => import('./Textarea'));
export const Header = loadable(() => import('./Header'));
export const Navigation = loadable(() => import('./Navigation'));
export const Section = loadable(() => import('./Section'));
