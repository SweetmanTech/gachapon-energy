import { Address } from 'viem';
import { getPublicClient } from '@/lib/clients';
import { zora } from 'viem/chains';
import { zora1155Implementation } from '@/lib/abi/zora1155Implementation';
import { BUENOS_AIRES_SONG_CAMP } from '@/app/config';
import getNextTokenId from './getNextTokenId';

const getVerifiedAddressBalanceOf = async (
  collectionAddress: Address = BUENOS_AIRES_SONG_CAMP,
  verifiedAddresses: Address[] = [],
) => {
  const nextTokenId = await getNextTokenId(collectionAddress);
  const publicClient = getPublicClient(zora.id);
  const contracts = verifiedAddresses.flatMap((address) =>
    Array.from({ length: parseInt(nextTokenId.toString()) }, (_, index) => ({
      address: collectionAddress,
      abi: zora1155Implementation,
      functionName: 'balanceOf',
      args: [address, BigInt(index + 1)],
    })),
  );
  const response = await publicClient.multicall({
    contracts,
  });

  const totalSum = response.reduce((sum, item) => {
    return item.status === 'success' ? sum + (item.result as bigint) : sum;
  }, 0n);
  return totalSum;
};

export default getVerifiedAddressBalanceOf;
