import GoogleProvider from "next-auth/providers/google";
import NextAuthOptions from "next-auth"
import { redirect } from "../../node_modules/next/navigation";
import { useRouter } from "next/navigation";


export const MyAuth: NextAuthOptions =
{
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    console.log(user);
    return true
  },
  async redirect({ url, baseUrl }) {
    console.log(baseUrl);
    return baseUrl
  },
  async session({ session, user, token }) {
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token
  }
}

};