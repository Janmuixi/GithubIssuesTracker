import { Issue } from "@/services/types";

export const mockIssues: Issue[] = [
    {
        id: "I_kwDOAJy2Ks5xRUX4",
        author: {
            login: "Jarred-Sumner",
            avatarUrl: "https://avatars.githubusercontent.com/u/709451?u=c72c2dd8b0368dc63bf2278e0f4f2ff290449cfb&v=4",
        },
        title: "Bug: react-dom/server.bun in `@canary` hangs without flushing or terminating the connection on long class names(?)",
        body: "<!--\r\n  Please provide a clear and concise description of what the bug is. Include\r\n  screenshots if needed. Please test using the latest version of the relevant\r\n  React packages to make sure your issue has not already been fixed.\r\n-->\r\n\r\nReact version: canary\r\n\r\n## Steps To Reproduce\r\n\r\nSee https://github.com/oven-sh/bun/issues/5664\r\n\r\n1.  Run `bun ./server.tsx`:\r\n```tsx\r\nimport { type Server as BunServer } from \"bun\";\r\nimport { renderToReadableStream } from \"react-dom/server\";\r\n\r\nBun.serve({\r\n  hostname: \"0.0.0.0\",\r\n  port: 3000,\r\n  fetch: async (request: Request, server: BunServer) => {\r\n    return new Response(\r\n      await renderToReadableStream(\r\n<div className=\"w-[40rem] a b c d e f g h i j k l m n o pc d e f g h i j k l m n o pc d e f g h i j k l m n o p a b  c d e f g h i j k l m n o pc d e f g h i j k l m n o pc d e f g h i j k l m n o p a b  c d e f g h i j k l m n o pc d e f g h i j k l m n o pc d e f g h i j k l m n o p a b  c d e f g h i j k l m n o pc d e f g h i j k l m n o pc d e f g h i j k l m n o p a b  c d e f g h i j k l m n o pc d e f g h i j k l m n o pc d e f g h i j k l m n o p\"></div>\r\n      ),\r\n      {\r\n        headers: {\r\n          \"Content-Type\": \"text/html\",\r\n        },\r\n      }\r\n    );\r\n  },\r\n});\r\n```\r\n2. In another terminal, run `oha http://localhost:3000` (`oha` can be installed with `cargo install oha`, or you can use bombardier, wrk, or most other HTTP benchmarking tools)\r\n\r\nThis started sometime in the last few days on a recent `@canary` build of react-dom/server.\r\n\r\n\r\n\r\n\r\n## The current behavior\r\n\r\nThe connections never close until timeout, which eventually leads to resource exhaustion\r\n\r\n```\r\n[2596] Can't assign requested address (os error 49)\r\n```\r\n\r\nThis does not happen when the request is suffiiciently small. It doesn't reproduce, for example, on Bun's homepage benchmark. It happens in a larger request/response. My current guess is there is some chunking/batching logic in react-dom/server that needs to flush and it is not flushing in the bun version.\r\n\r\n## The expected behavior\r\n\r\nIt should work. I tried going back quite far in Bun versions and the behavior is the same. I suspect this is caused by a recent change in react-dom. But I'm not sure. It's also entirely possible that this is a bug in Bun. But I wanted to make sure to file an issue so your team knows before 18.3 is released non-canary.\r\n\r\n",
        number: 27389,
        state: "OPEN",
        createdAt: "2023-09-18T07:50:27Z",
        updatedAt: "2023-10-19T06:52:20Z",
        closedAt: null,
    },
    {
        id: "MDU6SXNzdWUzNjk1MjE3NTg=",
        author: {
            login: "oliviertassinari",
            avatarUrl: "https://avatars.githubusercontent.com/u/3165635?u=15a7ca3a64c1839a55c83a987d6f906c817d9e85&v=4",
        },
        title: "head > meta > content escaping issue",
        body: "<!--\r\n  Note: if the issue is about documentation or the website, please file it at:\r\n  https://github.com/reactjs/reactjs.org/issues/new\r\n-->\r\n\r\n**Do you want to request a *feature* or report a *bug*?**\r\n\r\nI'm guessing it's a bug.\r\n\r\n**What is the current behavior?**\r\n\r\nThe following source code,\r\n\r\n```jsx\r\n<meta property=\"og:image\" content=\"https://onepixel.imgix.net/60366a63-1ac8-9626-1df8-9d8d5e5e2601_1000.jpg?auto=format&q=80&mark=watermark%2Fcenter-v5.png&markalign=center%2Cmiddle&h=500&w=500&s=60ec785603e5f71fe944f76b4dacef08\" />\r\n```\r\n\r\n, is being escaped once server side rendered:\r\n```jsx\r\n<meta property=\"og:image\" content=\"https://onepixel.imgix.net/60366a63-1ac8-9626-1df8-9d8d5e5e2601_1000.jpg?auto=format&amp;q=80&amp;mark=watermark%2Fcenter-v5.png&amp;markalign=center%2Cmiddle&amp;h=500&amp;w=500&amp;s=60ec785603e5f71fe944f76b4dacef08\"/>\r\n```\r\n\r\nYou can reproduce the behavior like this:\r\n```jsx\r\nconst React = require(\"react\");\r\nconst ReactDOMServer = require(\"react-dom/server\");\r\nconst http = require(\"http\");\r\n\r\nconst doc = React.createElement(\"html\", {\r\n  children: [\r\n    React.createElement(\"head\", {\r\n      children: React.createElement(\"meta\", {\r\n        property: \"og:image\",\r\n        content:\r\n          \"https://onepixel.imgix.net/60366a63-1ac8-9626-1df8-9d8d5e5e2601_1000.jpg?auto=format&q=80&mark=watermark%2Fcenter-v5.png&markalign=center%2Cmiddle&h=500&w=500&s=60ec785603e5f71fe944f76b4dacef08\"\r\n      })\r\n    }),\r\n    React.createElement(\"body\", { children: \"og:image\" })\r\n  ]\r\n});\r\n\r\n//create a server object:\r\nhttp\r\n  .createServer(function(req, res) {\r\n    res.write(\"<!DOCTYPE html>\" + ReactDOMServer.renderToStaticMarkup(doc)); //write a response to the client\r\n    res.end(); //end the response\r\n  })\r\n  .listen(8080); //the server object listens on port 8080\r\n```\r\neditor: https://codesandbox.io/s/my299jk7qp\r\noutput : https://my299jk7qp.sse.codesandbox.io/\r\n\r\n**What is the expected behavior?**\r\n\r\nI would expect the content not being escaped. It's related to https://github.com/zeit/next.js/issues/2006#issuecomment-355917446.\r\nI'm using the `og:image` meta element so my pages can have nice previews within Facebook :).\r\n\r\n![capture d ecran 2018-10-12 a 14 15 26](https://user-images.githubusercontent.com/3165635/46868650-52076f00-ce29-11e8-892f-cfbf924bba82.png)\r\n\r\n**Which versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?**\r\n16.5.2",
        number: 13838,
        state: "OPEN",
        createdAt: "2018-10-12T12:01:36Z",
        updatedAt: "2023-11-27T23:08:27Z",
        closedAt: null,
    },
]