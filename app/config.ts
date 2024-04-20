// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://gachapon.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const HOME_FRAME = {
  buttons: [
    {
      label: 'PLAY',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/giphy.gif`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
}
