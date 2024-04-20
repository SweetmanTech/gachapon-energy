import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const hash = [
    "bafybeidz67btzjqpafmdv2dszraw4a5iqhqexerzomx7zek5bykhvepnmy", 
    "bafybeig2bfjagttxrfbbmboposh5ghmwxugnnugk2c4snyxn3epinlai5y", 
    "bafybeigk7xpxe6zm76e74fqipdmgpy2uturank2dkgnshqxhuvg5htnaki", 
    "bafybeieop26ciofle3ozb2xlylpwxwljxa6ravmuqgzar47ebxxqxeckqm",
    "bafkreifu73mes36vcuyayptrs5fsivg56nscqow25uqbqpz4xooud6v4by"
  ]

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `START OVER`,
        },
      ],
      image: {
        src: `https://cloudflare-ipfs.com/ipfs/${hash[Math.floor(Math.random() * hash.length)]}`,
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
