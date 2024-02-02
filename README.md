

## Getting Started

You can see the full app here: https://github-issues-tracker-bice.vercel.app/

but if you want to execute it online...

First, run the development server:

Generate a new Github Token at "https://github.com/settings/tokens and give it repo permissions"

Add this new token in `.env.local`

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN={add your token here}
```

execute the following commands:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO LIST

- Add unit testing to custom hooks
- More E2E testing
- Save filter on URL (Rethink the seach depending on the needs)
- Review styled components
