import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  console.log("SWEETS body", body)

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `PLAY`,
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/giphy.gif`,
        aspectRatio: '1:1',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
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
