import { Collection } from "@/types";
import { getCollections } from "../actions";
import CollectionCard from "./CollectionCard";

const Gallery = async () => {
	const apiResponse = await getCollections();
	const collections = apiResponse.data;

	return (
		<div id="gallery-container" className="px-4 pt-20 flex flex-col gap-10 pb-8 md:flex-row md:p-0 md:absolute md:translate-x-[48rem] md:translate-y-44 md:h-full">
			{collections.map((collection: Collection) => (
				<CollectionCard key={collection.id} collection={collection} />
			))}
		</div>
	);
};

export default Gallery;
