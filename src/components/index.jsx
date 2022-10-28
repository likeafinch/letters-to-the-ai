import { default as loadable } from './LoadableBase';

export { default as Layout } from './Layout';
export const Button = loadable(() => import('./Button'));
export const Sections = loadable(() => import('./Sections'));
