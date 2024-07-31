import { Collection, Photos } from "@/types";
import { getCollectionById } from "../actions";
import Image from "next/image";

const Page = async({ params }: { params: { id: string } }) => {
    const response = await getCollectionById(parseInt(params.id));
    const collection: Collection = response.data;
    const photos: Photos = collection.attributes.Photos;
    
    return (
        <section id="collection-gallery" className="flex flex-col gap-10 py-8 px-4">
            <h1 className="text-linen text-3xl">{collection.attributes.Title}</h1>
            {photos.data.map((photo) => (
                <Image 
                    key={photo.id}
                    alt={photo.attributes.name}
                    width={photo.attributes.width}
                    height={photo.attributes.height}
                    src={process.env.NEXT_PUBLIC_STRAPI_API_URL + photo.attributes.url}
                />
            ))}
        </section>
    );
};

export default Page;
