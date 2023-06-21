'use server'

import { cookies } from 'next/dist/client/components/headers';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function Authorize(username, password) {
    
    async function setUser(id, name) {
        cookies().set('id', id);
        cookies().set('name', name); 
    }

    const res = await pb.collection('users').authWithPassword(
        username,
        password
    );
    
    await setUser(res.record.id, res.record.name);
    return true;
}