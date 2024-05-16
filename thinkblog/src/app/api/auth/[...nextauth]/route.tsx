import { MyAuth } from "@/lib/auth";
import NextAuth from "next-auth/next";



const handler = NextAuth(MyAuth);

export {handler as GET, handler as POST};