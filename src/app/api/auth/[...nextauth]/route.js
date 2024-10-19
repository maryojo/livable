import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "@/lib/mongodb"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { db } = await connectToDatabase()
        const user = await db.collection('users').findOne({ username: credentials.username })
        
        if (user && user.password === credentials.password) {
          return { id: user._id.toString(), name: user.username }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }