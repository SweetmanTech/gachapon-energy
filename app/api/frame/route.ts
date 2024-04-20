import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const url = [
    "https://cloudflare-ipfs.com/ipfs/bafybeidz67btzjqpafmdv2dszraw4a5iqhqexerzomx7zek5bykhvepnmy", 
    "https://cloudflare-ipfs.com/ipfs/bafybeig2bfjagttxrfbbmboposh5ghmwxugnnugk2c4snyxn3epinlai5y", 
    "https://cloudflare-ipfs.com/ipfs/bafybeigk7xpxe6zm76e74fqipdmgpy2uturank2dkgnshqxhuvg5htnaki", 
    "https://cloudflare-ipfs.com/ipfs/bafkreifu73mes36vcuyayptrs5fsivg56nscqow25uqbqpz4xooud6v4by",
    `${NEXT_PUBLIC_URL}/adn.gif`
  ]

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `START OVER`,
        },
      ],
      image: {
        src: `${url[Math.floor(Math.random() * url.length)]}`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/home`,
      state: {
        time: new Date().toISOString(),
      },
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
