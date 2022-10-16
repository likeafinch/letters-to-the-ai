import React from 'react';
import tw from 'twin.macro';
import { introCopy } from '../../utils';

const IntroStyle = tw.div`
      w-full
      mb-6
      flex
      flex-col
      items-center
      p-1
      `;

const ParagraphStyle = tw.p`
        w-full
        break-words
        text-lg
        font-light
        tracking-wide
        leading-relaxed
      `;

const Intro = () => {
  const Paragraphs = introCopy.map((paragraph, index) => (
    <ParagraphStyle key={`${paragraph.split(' ')[0]}${index}`}>
      {paragraph}
    </ParagraphStyle>
  ));
  return <IntroStyle>{Paragraphs}</IntroStyle>;
};

export default Intro;

