import { Collection } from "@/types";
import Link from "next/link";
import Image from "next/image";

const CollectionCard = ({ collection }: { collection: Collection }) => {
	const collectionURL = JSON.stringify(collection.id);
	const name = collection.attributes.CoverPhoto.data.attributes.name;
	const imageWidth = collection.attributes.CoverPhoto.data.attributes.width;
	const imageHeight = collection.attributes.CoverPhoto.data.attributes.height;
	const image =
		process.env.NEXT_PUBLIC_STRAPI_API_URL +
		collection.attributes.CoverPhoto.data.attributes.url;

	return (
		<Link href={collectionURL} className="md:h-[34rem] md:w-[20rem]">
			<Image
				alt={name}
				width={imageWidth}
				height={imageHeight}
				src={image}
                className="h-full object-cover"
			/>
		</Link>
	);
};

export default CollectionCard;
