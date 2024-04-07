import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

const authOptions: AuthOptions = {
    providers: [
        Github({
            clientId: 'Iv1.10ddd604493d4b98',
            clientSecret: 'd66b9f992f7513db94103bd69ed6a57614773f02'
        }),
    ],
    callbacks: {
        async session({ session, token }: any) {
            console.log(session, token);
            
            session.user.name = `${session?.user?.name}_${token?.sub}`

            return session;
        }
    },
    secret: 'default_secret_key'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST } 