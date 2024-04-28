import { Address } from 'viem';
import { getPublicClient } from '@/lib/clients';
import { zora } from 'viem/chains';
import { zora1155Implementation } from '@/lib/abi/zora1155Implementation';
import { BUENOS_AIRES_SONG_CAMP } from '@/app/config';

const getNextTokenId = async (collectionAddress: Address) => {
  const publicClient = getPublicClient(zora.id);
  const response = await publicClient.readContract({
    address: collectionAddress,
    abi: zora1155Implementation,
    functionName: 'nextTokenId',
  });

  return response;
};

export default getNextTokenId;
