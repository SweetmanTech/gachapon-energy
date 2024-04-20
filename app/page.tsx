import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'PLAY',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/giphy.gif`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'gachapon',
  description: 'gachapon',
  openGraph: {
    title: 'gachapon',
    description: 'gachapon',
    images: [`${NEXT_PUBLIC_URL}/giphy.gif`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
