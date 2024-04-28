import { Address } from 'viem';
import { getPublicClient } from '@/lib/clients';
import { zora } from 'viem/chains';
import { zora1155Implementation } from '@/lib/abi/zora1155Implementation';
import { BUENOS_AIRES_SONG_CAMP } from '@/app/config';
import getNextTokenId from './getNextTokenId';

const getVerifiedAddressBalance = async (
  collectionAddress: Address = BUENOS_AIRES_SONG_CAMP,
  verifiedAddresses: Address[] = [],
) => {
  const nextTokenId = await getNextTokenId(collectionAddress);
  const publicClient = getPublicClient(zora.id);
  const contracts = verifiedAddresses.flatMap((address, addressIndex) =>
    Array.from({ length: parseInt(nextTokenId.toString()) }, (_, tokenIndex) => ({
      address: collectionAddress,
      abi: zora1155Implementation,
      functionName: 'balanceOf',
      args: [address, BigInt(tokenIndex + 1)],
    })),
  );

  const response = await publicClient.multicall({
    contracts,
  });

  const ownedTokens = [];
  let responseIndex = 0;
  for (const address of verifiedAddresses) {
    for (let tokenId = 1; tokenId <= parseInt(nextTokenId.toString()); tokenId++) {
      const responseItem = response[responseIndex++];
      if (responseItem.status === 'success' && (responseItem.result as bigint) > 0n) {
        ownedTokens.push({
          address,
          tokenId,
          balance: responseItem.result,
        });
      }
    }
  }

  const randomOwnedToken = ownedTokens[Math.floor(Math.random() * ownedTokens.length)];
  return {
    balanceOf: randomOwnedToken ? (randomOwnedToken.balance as bigint) : 0n,
    tokenId: randomOwnedToken ? randomOwnedToken.tokenId : null,
  };
};

export default getVerifiedAddressBalance;
