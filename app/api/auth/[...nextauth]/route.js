import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import AtlassianProvider from 'next-auth/providers/atlassian';

const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        AtlassianProvider({
            clientId: process.env.ATLASSIAN_CLIENT_ID,
            clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
            authorization: {
              params: {
                scope: 'read:me'
              }
            }
          })
        // add more providers...
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }