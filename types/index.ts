export interface Collection {
	id: number;
	attributes: CollectionAttributes;
}

export interface CollectionAttributes {
	Title: string;
	Description: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	CoverPhoto: CoverPhoto;
	Photos: Photos;
}

export interface CoverPhoto {
	data: DAT;
}

export interface DAT {
	id: number;
	attributes: DataAttributes;
}

export interface DataAttributes {
	name: string;
	alternativeText: null;
	caption: null;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: EXT;
	mime: MIME;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: Date;
	updatedAt: Date;
}

export enum EXT {
	Jpg = ".JPG",
}

export interface Formats {
	thumbnail: Large;
	small: Large;
	medium: Large;
	large: Large;
}

export interface Large {
	name: string;
	hash: string;
	ext: EXT;
	mime: MIME;
	path: null;
	width: number;
	height: number;
	size: number;
	sizeInBytes: number;
	url: string;
}

export enum MIME {
	ImageJPEG = "image/jpeg",
}

export interface Photos {
	data: DAT[];
}
