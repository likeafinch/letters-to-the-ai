import { default as loadable } from './LoadableBase';

export { default as Layout } from './Layout';
export const Button = loadable(() => import('./Button'));
export const Input = loadable(() => import('./Input'));
export const Textarea = loadable(() => import('./Textarea'));
export const Sections = loadable(() => import('./Sections'));
