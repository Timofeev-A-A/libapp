'use client';

import { useState } from "react";
import PocketBase from 'pocketbase';
import SearchResults from "./SearchResults";
import { redirect } from "next/navigation";

const pb = new PocketBase('http://127.0.0.1:8090');

export default function BooksPage() {

    const [search, setSearch] = useState('');    

    const handle = async() => {
        console.log("start");
        const real = await SearchResults(search);
        console.log("finish");
        redirect('/books/found');
    }

    return (
        <div className="mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border-1 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                />

                <button
                className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out bg-neutral-300 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                data-te-ripple-init
                onClick={handle}>
                Search
                </button>
            </div>
        </div>
    );
}