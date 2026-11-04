import { account, ID } from './appwrite';
export const authService = {
  signUp: (email, pass, name) => account.create(ID.unique(), email, pass, name),
  signIn: (email, pass) => account.createEmailPasswordSession(email, pass),
  getUser: async () => { try { return await account.get(); } catch { return null; } },
  signOut: () => account.deleteSession('current')
};