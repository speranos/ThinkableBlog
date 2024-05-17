import GoogleProvider from "next-auth/providers/google";
import NextAuthOptions from "next-auth"
import { redirect } from "../../node_modules/next/navigation";
import { useRouter } from "next/navigation";
import { prisma } from "@/lib/prismaclt"



export const MyAuth: NextAuthOptions =
{
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
],
callbacks: {
  async signIn({ user }) {
    console.log(user);
    await prisma.user.upsert({
      where: {
        email: user.email,
      },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        avatar: user.image,
      },
    });
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
    // console.log("token ==== ")
    // console.log(token)
    return token
  }
}

};


