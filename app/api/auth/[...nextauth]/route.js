import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import { user } from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Geting sesssion for next
  async session({ session }) {
    const sessionUser = await user.findOne({ email: session.user.email });
    session.user.id = sessionUser._id.toString();
    return session;
  },

  // Signin functionality
  async signIn({ profile }) {
    try {
      // check connection to database
      await connectToDB();

      // check if a user is already exist
      const userExists = await user.findOne({ email: profile.email });

      // create a new user
      if (!userExists) {
        await user.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
