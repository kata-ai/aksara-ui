import * as React from 'react';
import { Stack } from '../stack';
import { Anchor, Heading, Paragraph, Text, HeadingScale, TextScale, ParagraphScale } from '../typography';

export default {
  title: 'Core/Foundations/Typography',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const headingScales: HeadingScale[] = [900, 800, 700, 600, 500, 400, 300, 200, 100];
const textScales: TextScale[] = [500, 400, 300, 200];
const paragraphScales: ParagraphScale[] = [400, 300];

export const BrandFonts = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={300}>
      Inter Light
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={400}>
      Inter Regular
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={500}>
      Inter Medium
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={600}>
      Inter SemiBold
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="brand" fontWeight={700}>
      Inter Bold
    </Text>
  </Stack>
);

export const SystemFonts = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={300}>
      System Light
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={400}>
      System Regular
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={500}>
      System Medium
    </Text>
    <Text display="block" fontSize={700} lineHeight={700} fontFamily="system" fontWeight={700}>
      System Bold
    </Text>
  </Stack>
);

export const HeadingScales = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    {headingScales.map(scale => (
      <Heading scale={scale}>We are making AI technology accessible to everyone</Heading>
    ))}
  </Stack>
);

export const TextScales = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    {textScales.map(scale => (
      <Text display="block" scale={scale}>
        We are making AI technology accessible to everyone
      </Text>
    ))}
  </Stack>
);

export const ParagraphScales = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    {paragraphScales.map(scale => (
      <Paragraph scale={scale}>
        We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
        conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
        Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
        Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and
        Retail.
      </Paragraph>
    ))}
  </Stack>
);

export const AnchorScales = () => (
  <Stack spacing="md" p="md" backgroundColor="grey02">
    <Anchor
      display="block"
      href="https://www.youtube.com/watch?v=wQ2YjYGqL8I"
      target="_blank"
      rel="noopener noreferrer"
    >
      We are making AI technology accessible to everyone
    </Anchor>
  </Stack>
);
