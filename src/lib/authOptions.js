import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/actions/server/auth";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await loginUser(credentials);
        if (!user) return null;
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),


    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })



  ],



  
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {


    const isExist = await dbConnect(collections.USERS).find({email: user.email, provider:account?.provider,

    });

    if(isExist){
      return true
    }

       const newUser = {
            provider: account?.provider,
            name:user.name,
            email:user.email,
            image:user.image, 
            role: "user"
        }
    
        const result = await dbConnect(collections.USERS).insertOne(newUser);
        return result.acknowledged



    // return true
  },
  // async redirect({ url, baseUrl }) {
  //   return baseUrl
  // },
  // async session({ session, token, user }) {
  //   return session
  // },
  // async jwt({ token, user, account, profile, isNewUser }) {
  //   return token
  // }
}
};


