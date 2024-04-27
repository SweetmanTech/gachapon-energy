# A Frame in 100 lines (or less)

Farcaster Frames in less than 100 lines, and ready to be deployed to Vercel.

To test a **deployed** Frame, use: https://warpcast.com/~/developers/frames.

To test a **localhost** Frame, use: [Framegear](https://onchainkit.xyz/frame/framegear).
A simple tool that allows you to run and test your frames locally:

- without publishing
- without casting
- without spending warps

And let us know what you build by either mentioning @zizzamia on [Warpcast](https://warpcast.com/zizzamia) or [X](https://twitter.com/Zizzamia).

<br />

Have fun! ⛵️

<br />

## App Routing files

- app/
  - [config.ts](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appconfigts)
  - [layout.tsx](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#applayouttsx)
  - [page.tsx](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#apppagetsx)
- api/
  - frame/
    - [route.ts](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appapiframeroutets)

<br />

### `app/layout.tsx`

```tsx
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### `app/config.ts`

```ts
export const NEXT_PUBLIC_URL = 'https://zizzamia.xyz';
```

## Resources

- [Official Farcaster Frames documentation](https://docs.farcaster.xyz/learn/what-is-farcaster/frames)
- [Official Farcaster Frame specification](https://docs.farcaster.xyz/reference/frames/spec)
- [OnchainKit documentation](https://onchainkit.xyz)

<br />

## Community ☁️ 🌁 ☁️

Check out the following places for more OnchainKit-related content:

- Follow @zizzamia ([X](https://twitter.com/zizzamia), [Farcaster](https://warpcast.com/zizzamia)) for project updates
- Join the discussions on our [OnchainKit warpcast channel](https://warpcast.com/~/channel/onchainkit)

## Authors

- [@zizzamia](https://github.com/zizzamia.png) ([X](https://twitter.com/Zizzamia))
- [@cnasc](https://github.com/cnasc.png) ([warpcast](https://warpcast.com/cnasc))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
