import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { FrameMetadataType } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { Address } from 'viem';
import getUri from '@/lib/zora/getUri';
import getLink from '@/lib/metadata/getLink';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const queryParams = req.url.split("=")
  const collectionParam = queryParams[1] 
  const tokenId = queryParams[2]
  const collection = collectionParam.split("&")[0] as Address
  const uri = await getUri(collection, BigInt(tokenId))
  const urlLink = getLink(uri)
  const response = await fetch(urlLink)
  const data = await response.json()
  const {image: responseImage} = data
  const src = getLink(responseImage)
  const image = {
    src,
    aspectRatio: "1:1"
  } 
  const successFrame = {
    buttons: [
      {
        label: "START OVER",
      },
      {
        action: 'tx',
        label: "Collect New Prize",
        target: `${NEXT_PUBLIC_URL}/api/tx`,
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
      },
    ],
    image ,
    postUrl: `${NEXT_PUBLIC_URL}/api/home`,
    state: {
      time: new Date().toISOString(),
    },
  } as FrameMetadataType

  return new NextResponse(
    getFrameHtmlResponse(successFrame),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
