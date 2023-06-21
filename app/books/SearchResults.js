'use server'

import PocketBase from 'pocketbase';

export default async function SearchResults(search) {
    
    const pb = new PocketBase('http://127.0.0.1:8090');

    async function AddToDB(data) {
        const info = {
            "google_id": data.id,
            "title": data.volumeInfo.title,
            "author": data.volumeInfo.authors[0],
            "publisher": data.volumeInfo.publisher,
            "description": data.volumeInfo.description,
            "thumbnail": data.volumeInfo.imageLinks.thumbnail,
            "pageCount": data.volumeInfo.pageCount
        }
        await pb.collection('volumes').create(info, { '$autoCancel': false });
    }
    
    const res = await fetch('https://www.googleapis.com/books/v1/volumes/?'+ new URLSearchParams({
            q: search,
            maxResults: '16',
            key: process.env.apiKey
        }), { 
            method: 'GET',
            cache: 'no-cache' 
        });
        const data = await res.json();
        //console.log('items xd\n',data.items);
        const items = await data.items;
        await items.map((result) => {
            console.log('item xd\n',result);
            AddToDB(result);
        });
        return items;
}