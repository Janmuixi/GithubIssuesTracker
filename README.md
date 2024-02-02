

## Getting Started

First, run the development server:

Generate a new Github Token at "https://github.com/settings/tokens and give it repo permissions"

Add this new token after "Bearer " in `src/services/apollo-client.ts`

```
    headers: {
        Authorization: `Bearer {insert token here}`,
    },
```


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
