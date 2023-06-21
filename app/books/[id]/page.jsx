
async function getVolume(id) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/volumes/records/${id}`, { next: { revalidate: 10 } });
    const data = await res.json();
    return data; 
}

export default async function BookPage({ params }) {

    const volume = await getVolume(params.id);
    return (
        <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
            className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={volume.thumbnail}
            alt="" />
        <div className="flex flex-col justify-start p-6">
            <h5
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {volume.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {volume.description}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {volume.author}
            </p>
        </div>
        </div>      
      );
}