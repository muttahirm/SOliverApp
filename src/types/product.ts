export interface Product {
    id: number;
    name: string;
    retailPrice: number;
    discount: number;
    tag: tagType;
    type: ArticleType;
    variants: ProductVariant[];
}

export interface ProductVariant {
    key: number;
    color: Color;
    hexColor: string;
    images: string[];
    sizes: Size[];
}

type ArticleType =
    | 'T-Shirt'
    | 'Shorts'
    | 'Jeans'
    | 'Shirt'
    | 'Jacket'
    | 'Hoodie'
    | 'Dress'
    | 'Skirt'
    | 'Blazer'
    | 'Sweater'
    | 'Coat'
    | 'Pants'
    | 'Beanie'
    | 'Shacket';


export type Color =
    | 'Beige'
    | 'Black'
    | 'Blue'
    | 'Dark Blue'
    | 'Deep Blue'
    | 'Light Blue'
    | 'Ocean Blue'
    | 'Brown'
    | 'Light Brown'
    | 'Camel'
    | 'Caramel'
    | 'Graphite'
    | 'Gray'
    | 'Slate Gray'
    | 'Green'
    | 'Dark Green'
    | 'Deep Green'
    | 'Fir Green'
    | 'Light Green'
    | 'Olive Green'
    | 'Khaki'
    | 'Lavender'
    | 'Navy'
    | 'Petrol'
    | 'Pink'
    | 'Red'
    | 'Chili Red'
    | 'Sandstone'
    | 'White'
    | 'Yellow';


export type Size =
    | '25'
    | '26'
    | '27'
    | '29'
    | '30'
    | '31'
    | '32'
    | '33'
    | '34'
    | '36'
    | '38'
    | '44'
    | '46'
    | '48'
    | '50'
    | '52'
    | '54'
    | '56'
    | '90'
    | '94'
    | '98'
    | '102'
    | '29/30'
    | '30/30'
    | '31/32'
    | '32/30'
    | '32/32'
    | '32/34'
    | '33/32'
    | '34/30'
    | '34/32'
    | '34/36'
    | '36/30'
    | '36/32'
    | '36/34'
    | '38/32'
    | 'One Size'
    | 'XS'
    | 'S'
    | 'M'
    | 'L'
    | 'XL'
    | 'XXL'
    | '3XL';

export type tagType =
    | 'Sustainable'
    | 'New'
    | 'Vegan'
