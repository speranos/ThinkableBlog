import { MyAuth } from "@/lib/auth";
import NextAuth from "next-auth/next";
// import



const handler = NextAuth(MyAuth);

export {handler as GET, handler as POST};