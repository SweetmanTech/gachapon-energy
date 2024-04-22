import { FrameRequest } from '@coinbase/onchainkit';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';

const getVerifiedAddressesFromBody = async (body: FrameRequest) => {
  const { untrustedData } = body;
  const { fid } = untrustedData;
  const userAddress = await getFarcasterUserAddress(fid);
  const { verifiedAddresses } = userAddress;
  return verifiedAddresses;
};

export default getVerifiedAddressesFromBody;
