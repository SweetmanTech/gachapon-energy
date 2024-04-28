import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata, ResolvingMetadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import getHomeFrame from '@/lib/getHomeFrame';
import { Address } from 'viem';

export type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { collection } = searchParams;
  const frameMetadata = getFrameMetadata(getHomeFrame(collection as Address));

  const metadata: Metadata = {
    title: 'gachapon',
    description: 'by energy',
    openGraph: {
      title: 'gachapon',
      description: 'by energy',
      images: [`${NEXT_PUBLIC_URL}/giphy.gif`],
    },
    other: {
      ...frameMetadata,
    },
  };

  return metadata;
}

export default function Page() {
  return (
    <>
      <h1>gachapon-energy.vercel.app</h1>
    </>
  );
}
