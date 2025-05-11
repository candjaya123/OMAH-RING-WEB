import { Blog, Category, Competition, Product, Testimonial } from "./types";

export const products: Product[] = [
  {
    id: "1",
    imgUrls: [
      "https://placehold.co/300x200",
      "https://placehold.co/300",
      "https://placehold.co/300x400",
      "https://placehold.co/300x500",
      "https://placehold.co/300x600",
      "https://placehold.co/300x300",
    ],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 30,
    title: "product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus non arcu a sollicitudin. Sed libero tortor, dignissim at aliquet id, elementum sit amet mi. Duis vulputate, ipsum varius vestibulum luctus, lorem enim vehicula turpis, et tempus enim ligula finibus.",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L", disabled: true },
      { label: "XL", value: "XL" },
    ],
  },
  {
    id: "2",
    imgUrls: ["https://placehold.co/300x200"],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 35,
    title: "product 2",
    description:
      "lorefakjfdf dljfal jdflaeifja fajlfd oaiejf aldkjf lakjfoaei ffdfdf",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L" },
      { label: "XL", value: "XL" },
    ],
  },
  {
    id: "3",
    imgUrls: ["https://placehold.co/300x300"],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 40,
    title: "product 3",
    description:
      "lorefakjfdf dljfal jdflaeifja fajlfd oaiejf aldkjf lakjfoaei ffdfdf",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L", disabled: true },
      { label: "XL", value: "XL" },
    ],
  },
  {
    id: "4",
    imgUrls: ["https://placehold.co/300x200"],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 45,
    title: "product 4",
    description:
      "lorefakjfdf dljfal jdflaeifja fajlfd oaiejf aldkjf lakjfoaei ffdfdf",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L", disabled: true },
      { label: "XL", value: "XL" },
    ],
  },
  {
    id: "5",
    imgUrls: ["https://placehold.co/300x200"],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 50,
    title: "product 5",
    description:
      "lorefakjfdf dljfal jdflaeifja fajlfd oaiejf aldkjf lakjfoaei ffdfdf",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L", disabled: true },
      { label: "XL", value: "XL" },
    ],
  },
  {
    id: "6",
    imgUrls: ["https://placehold.co/300x200"],
    rating: 90,
    price: 290,
    originalPrice: 390,
    discount: 50,
    title: "product 6",
    description:
      "lorefakjfdf dljfal jdflaeifja fajlfd oaiejf aldkjf lakjfoaei ffdfdf",
    colorOptions: [
      { label: "Red", value: "#f83e1b" },
      { label: "Blue", value: "#4189f9" },
    ],
    sizeOptions: [
      { label: "XS", value: "XS" },
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L", disabled: true },
      { label: "XL", value: "XL" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "3",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "5",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "6",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "7",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
  {
    id: "8",
    title: "Kualiatas Terbaik",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Ucup Sunandar",
    rating: 5.0,
    avatarUrl: "https://i.pravatar.cc/300",
  },
];

export const competition: Competition = {
  id: "1",
  title: "LOMBA BURUNG BERKICAU PIALA WALIKOTA GRESIK",
  description: "gaada",
  date: new Date(),
  prize: 12_000_000,
  prizeNote: "Hadiah dibagi 7 org pemenang",
  location: "jl. gatau apa dah",
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronic",
  },
  {
    id: "2",
    name: "Computer & Laptop",
  },
  {
    id: "3",
    name: "Computer Accessories",
  },
  {
    id: "4",
    name: "Smartphone",
  },
  {
    id: "5",
    name: "Headphone",
  },
  {
    id: "6",
    name: "Mobile accessories",
  },
  {
    id: "7",
    name: "Gaming console",
  },
  {
    id: "8",
    name: "Camera & photo",
  },
  {
    id: "9",
    name: "TV & home appliances",
  },
  {
    id: "10",
    name: "Wearable tech",
  },
];

export const blogs: Blog[] = [
  {
    id: "1",
    imgUrl:
      "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Aenean Eleifend", "Aliquam"],
    title:
      "ini judul blog id: 1, abckedfdijf idfjao feji dkjflf odifja iefjiefje ii",
    subtitle: "ini sub-title judul blog id: 1",
    content: [
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
    ],
    author:
      "budi iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii abc",
    authorImg: "https://i.pravatar.cc/300",
    createdAt: new Date(),
    readDuration: 2,
    shareCount: 1000,
    viewCount: 1000,
  },
  {
    id: "2",
    imgUrl:
      "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["gatau", "gatau juga", "abc"],
    title: "ini judul blog id: 2",
    subtitle: "ini sub-title judul blog id: 2",
    content: [
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
    ],
    author: "budi def",
    authorImg: "https://i.pravatar.cc/300",
    createdAt: new Date(),
    readDuration: 3,
    shareCount: 1000,
    viewCount: 1000,
  },
  {
    id: "3",
    imgUrl: "https://placehold.co/300x200",
    tags: ["gatau", "gatau juga", "abc"],
    title: "ini judul blog id: 3",
    subtitle: "ini sub-title judul blog id: 3",
    content: [
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
    ],
    author: "budi ghi",
    authorImg: "https://i.pravatar.cc/300",
    createdAt: new Date(),
    readDuration: 4,
    shareCount: 1000,
    viewCount: 1000,
  },
  {
    id: "4",
    imgUrl: "https://placehold.co/300x200",
    tags: ["gatau", "gatau juga", "abc"],
    title: "ini judul blog id: 4",
    subtitle: "ini sub-title judul blog id: 4",
    content: [
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
      {
        type: "image",
        content:
          "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        type: "paragraph",
        content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum aliquam hendrerit. Sed sed elit enim. Sed vitae velit at magna blandit semper eu sed sem. Nullam risus ligula, gravida eu dui eget, condimentum fermentum nisl. Sed nulla orci, facilisis et pellentesque eget, convallis et nulla. Phasellus eget urna dapibus, vehicula massa sit amet, consectetur massa. Duis quis lacinia felis.

Pellentesque sit amet turpis pharetra tortor lacinia malesuada. Vivamus aliquam rutrum convallis. Integer at metus eleifend, ultricies erat at, aliquet sem. Mauris viverra diam eu mi ultricies, non maximus magna facilisis. Vivamus vitae mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nibh leo, vestibulum at ornare vitae, ultricies nec magna. Fusce dui mauris, dictum sed ligula feugiat, vehicula imperdiet arcu. Aenean tempus risus ut neque tincidunt, et luctus velit pretium. Integer ut mollis sem. Vestibulum eu arcu diam. Etiam imperdiet elit vel faucibus tempus.

Sed risus velit, mollis eu feugiat id, efficitur sit amet sem. Pellentesque at nisl bibendum, laoreet risus at, vulputate massa. In porttitor tortor molestie mattis fringilla. Aliquam sit amet lorem erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet lorem pellentesque feugiat. Aliquam id erat at felis porttitor tincidunt quis sed nisi. Nulla et felis ac arcu aliquet mollis. Ut porttitor lacus ac felis pretium, eu mollis sem rhoncus. Curabitur volutpat dui justo, nec bibendum felis porttitor sed.`,
      },
    ],
    author: "budi jkl",
    authorImg: "https://i.pravatar.cc/300",
    createdAt: new Date(),
    readDuration: 3,
    shareCount: 1000,
    viewCount: 1000,
  },
];
