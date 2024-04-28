import { BUENOS_AIRES_SONG_CAMP, HOME_FRAME } from '@/app/config';
import { Address } from 'viem';

const getHomeFrame = (collection: Address = BUENOS_AIRES_SONG_CAMP) => {
  const response = { ...HOME_FRAME };
  response.postUrl = `${response.postUrl}?collection=${collection}`;
  return response;
};

export default getHomeFrame;
