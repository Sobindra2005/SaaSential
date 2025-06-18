import  { Account, AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      provider?: string;
      image?:string
    }
  }
}




export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
  
            throw new Error('Email and password are required');
          }

          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await response.json();
          console.log('Login response:', { status: response.status, data });

          if (!response.ok) {
            console.log('Login failed:', data);
            throw new Error(data.message || 'Invalid credentials');
          }

          if (!data || !data.id || !data.email) {
            console.log('Invalid response data:', data);
            throw new Error('Invalid response from server');
          }

          return {
            id: data.id,
            email: data.email,
            name: data.name,
          };
        } catch (error) {
          console.error('Error in authorize:', error);
          throw error;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'read:user user:email'
        }
      }
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      console.log('OAuth SignIn callback:', {
        user: { email: user?.email, name: user?.name },
        account: { provider: account?.provider, type: account?.type }
      });
    
      if (account?.provider === 'credentials') {
        return true;
      }

      if (!user?.email) {
        console.warn('OAuth provider did not return email.');
        return false;
      }
  
      return true;
    },
    async jwt({ token, user, account }: { token: JWT; user: User | AdapterUser; account: Account | null }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.provider = account?.provider;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
}; 