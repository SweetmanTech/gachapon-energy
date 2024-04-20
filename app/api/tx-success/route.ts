import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Success!!!`,
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/giphy.gif`,
      },
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
