import tw, {styled} from 'twin.macro';
import { TextFieldStyles } from './TextField';

export const FieldStyles = tw`
    relative
    cursor-text
    transition-all
    duration-700
    opacity-70
    px-2
    py-3
    my-1
    w-full
    bg-slate-200
    bg-opacity-50
    shadow-input
    text-slate-700
    tracking-paragraph
    uppercase
    focus:shadow-input-focused
    hover:shadow-input-focused
    invalid:shadow-input-error
    disabled:shadow-input-disabled
    disabled:text-slate-500
    placeholder:text-opacity-50
    `;

export const MultiInputs = styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        w-full
        items-center
        justify-between
    `}
    ${TextFieldStyles}:nth-of-type(odd) {
        flex-basis: 60%;
    }
`;
