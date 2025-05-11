export type Product = {
  id: string;
  imgUrls: string[];
  rating: number;
  price: number;
  originalPrice: number;
  discount: number;
  title: string;
  description: string;
  colorOptions: ColorOption[];
  sizeOptions: SizeOption[];
};

export type Testimonial = {
  id: string;
  title: string;
  description: string;
  author: string;
  avatarUrl: string;
  rating: number;
};

export type Competition = {
  id: string;
  title: string;
  description: string;
  date: Date;
  prize: number;
  prizeNote: string;
  location: string;
};

export type Category = {
  id: string;
  name: string;
};

export type ColorOption = {
  label: string;
  value: string;
};

export interface SizeOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Blog {
  id: string;
  imgUrl: string;
  tags: string[];
  title: string;
  subtitle?: string;
  content: BlogContent[];
  author: string;
  authorImg: string;
  createdAt: Date;
  readDuration: number; // in minutes
  shareCount: number;
  viewCount: number;
}

export interface BlogContent {
  type: "image" | "paragraph";
  content: string;
}
