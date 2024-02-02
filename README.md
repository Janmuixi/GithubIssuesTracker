## Getting Started

You can see the full app here: https://github-issues-tracker-bice.vercel.app/

## Run it locally

Generate a new Github Token at "https://github.com/settings/tokens and give it repo permissions"

Copy file `.env.local.example` into a new file called `.env.local`

Add the previous token in `.env.local`

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN={add your token here}
```

install dependencies:

```bash
npm install
# or
yarn install
```

execute the following command locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO LIST

- Add unit testing to custom hooks
- More E2E testing
- Save filter on URL (Rethink the seach depending on the needs)
- Review styled components
