This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
The project is part of technical assessment conducted by lalals.com

## Getting Started

- Project is deployed in vercel and can be accessed via url https://music-app-lalals-task.vercel.app/
- the site has 2 pages

1. https://music-app-lalals-task.vercel.app/

- This page includes a button `Show Media Player` which will show/hide the media player

2. https://music-app-lalals-task.vercel.app/dashboard

- This page includes a `Dashboard` with `Media Player`

## For local

- This project was built on node version 20

```bash
npm install
# or
npm run dev
# or
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Issues

- Duration of audio content at the moment is set as static `400s`
- Media player is not entirely responsive. Tooltip to move to desired timestamp, at the moment, does not exactly position above the cursor for screen sizes less than 880px
