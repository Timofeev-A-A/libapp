import Link from "next/link";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getItems() {
    /*const res = await fetch('http://127.0.0.1:8090/api/collections/volumes/records?page=1&perPage=10', { cache: 'no-store', sort: '' });
    const data = await res.json();
    console.log(data.items);
    return data.items; */ 
    const res = await pb.collection('volumes').getList(1, 10, {sort: '+updated'});
    console.log(res.items);
    return res.items;
}

export default async function FoundPage() {
    
    const items = await getItems();

    return (
        <div className="mt-8 flex items-start justify-start flex-wrap max-w-6xl">
        {items?.map((result) => {
            console.log(result);
            return <Book key={result.id} result={result} />;
        })}
        </div>
    );
}

function Book(result) {
    console.log("result\n",result);
    const id = result.result.id;
    const title = result.result.title;
    const author = result.result.author;
    const thumbnail = result.result.thumbnail;

    return (
        <Link href={`/books/${id}`}>
          <div className="h-auto w-48 p-1 m-2 bg-gray-200 rounded-sm">
            <img src={thumbnail} alt="IMAGE"></img>
            <h2>{title}</h2>
            <h5>{author}</h5>
          </div>
        </Link>
      );
}