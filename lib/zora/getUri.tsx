import { zora1155Implementation } from '@/lib/abi/zora1155Implementation';
import { getPublicClient } from '../clients';
import { zora } from 'viem/chains';
import { Address } from 'viem';
import { BUENOS_AIRES_SONG_CAMP } from '@/app/config';

const getUri = async (collection: Address = BUENOS_AIRES_SONG_CAMP, tokenId: bigint = 1n) => {
  const publicClient = getPublicClient(zora.id);

  const response = await publicClient.readContract({
    address: collection,
    abi: zora1155Implementation,
    functionName: 'uri',
    args: [tokenId],
  });
  return response;
};

export default getUri;
