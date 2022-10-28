import tw from 'twin.macro';

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
    text-slate-900
    tracking-paragraph
    focus:shadow-input-focused
    hover:shadow-input-focused
    invalid:shadow-input-error
    disabled:shadow-input-disabled
    disabled:text-slate-500
    placeholder:text-opacity-50
    `;

export const MultiInputs = tw.div`
    flex
    flex-col
    xl:flex-row
    w-full
    items-center
    justify-between
    `;
