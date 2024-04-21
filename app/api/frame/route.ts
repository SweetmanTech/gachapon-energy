import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import getVerifiedAddressBalanceOf from '@/lib/zora/getVerifiedAddressBalanceOf';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  // GET VERIFIED WALLETS FROM FID
  const {untrustedData} = body
  const {fid} = untrustedData
  const userAddress = await getFarcasterUserAddress(fid); 
  const {verifiedAddresses} = userAddress
  const balanceOf = await getVerifiedAddressBalanceOf(verifiedAddresses)
  console.log("SWEETS balanceOf", balanceOf)
  const isCollector = balanceOf > 0n
  const src = isCollector ?  `${NEXT_PUBLIC_URL}/pokeball.gif`  : `${NEXT_PUBLIC_URL}/insert-token.gif`
  const txLabel = isCollector ? 'Collect New Prize' : "Insert Token"
  const actionLabel = isCollector ? 'OPEN CAPSULE' : "START OVER"
  const image = {
    src,
  } as any
  if (isCollector) {
    image.aspectRatio = "1:1"
  }
  const ballFrame = {
    buttons: [
      {
        label: actionLabel,
      },
      {
        action: 'tx',
        label: txLabel,
        target: `${NEXT_PUBLIC_URL}/api/tx`,
        postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
      },
    ],
    image ,
    postUrl: isCollector ?  `${NEXT_PUBLIC_URL}/api/success` : `${NEXT_PUBLIC_URL}/api/home`,
    state: {
      time: new Date().toISOString(),
    },
  }

  return new NextResponse(
    getFrameHtmlResponse(ballFrame),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
