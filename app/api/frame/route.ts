import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import getVerifiedAddressBalance from '@/lib/zora/getVerifiedAddressBalance';
import getBallFrame from '@/lib/getBallFrame';
import getVerifiedAddressesFromBody from '@/lib/farcaster/getVerifiedAddressesFromBody';
import { Address } from 'viem';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const collection = req.url.split("collection=")[1] as Address
  const verifiedAddresses = await getVerifiedAddressesFromBody(body)
  const {balanceOf, tokenId} = await getVerifiedAddressBalance(collection, verifiedAddresses as Address[])
  const isCollector = balanceOf > 0n 
  const responseFrame = getBallFrame(isCollector)
  responseFrame.postUrl = `${responseFrame.postUrl}?collection=${collection}&tokenId=${tokenId}`
  return new NextResponse(
    getFrameHtmlResponse(responseFrame),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
