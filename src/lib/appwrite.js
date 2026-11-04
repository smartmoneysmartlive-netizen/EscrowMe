import { Client, Account, Databases, Storage, ID } from 'appwrite';
export const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || 'demo');
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };
export const DATABASE_ID = 'escrowme_db';
export const COLLECTIONS = { ESCROWS: 'escrows', TRANSACTIONS: 'transactions' };