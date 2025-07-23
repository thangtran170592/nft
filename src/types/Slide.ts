import { StaticImageData } from "next/image";

export type Slide = {
    id: number;
    title?: string;
    description?: string;
    image: StaticImageData | string;
    link?: string;
    order?: number
};