// export default {
//     providers: [
//       {
//         domain: "https://together-lioness-71.clerk.accounts.dev/",
//         applicationID: "convex",
//       },
//     ],
//   };
import { ClerkProvider } from "@clerk/nextjs";

interface AuthConfig {
  providers: {
    domain: string;
    applicationID: string;
  }[];
}

const authConfig: AuthConfig = {
  providers: [
    {
      domain: "https://together-lioness-71.clerk.accounts.dev/",
      applicationID: "convex",
    },
  ],
};

export default authConfig;