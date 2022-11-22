export interface ProductInterface {
  _id: string,
  image: string,
  name: string,
  Collection: string,
  price: number,
  quantityInStock: number,
}

// export const data: ProductInterface[] = [
//   //
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_cf942a5a4ffa4735a1c1153e7a3ac428~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_cf942a5a4ffa4735a1c1153e7a3ac428~mv2.webp',
//     name: "Cabo - 7 Panel Cork - Black / Navy / White",
//   Collection:"Cabo",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_4df40ea6cbcc46f2b0910dbd8bd160f9~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_4df40ea6cbcc46f2b0910dbd8bd160f9~mv2.webp',
//     name: "Cabo - Traditional - Sheer Blue",
//   Collection:"Cabo",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_40662e9533f44edfb1cb739f0ed53750~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_40662e9533f44edfb1cb739f0ed53750~mv2.webp',
//     name: "Cabo - Pastel - Gray",
//   Collection:"Cabo",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_f34c14ac0cab4f3f84885176ebc4232d~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_f34c14ac0cab4f3f84885176ebc4232d~mv2.webp',
//     name: "Cabo - Cork - Heather Gray",
//   Collection:"Cabo",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_181517afe04244e9a0e6f544a6df7fa7~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_181517afe04244e9a0e6f544a6df7fa7~mv2.webp',
//     name: "Cabo - Cork - Pink",
//   Collection:"Cabo",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_819cd1b18e0c424db4a49f1ee09fa42f~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_819cd1b18e0c424db4a49f1ee09fa42f~mv2.webp',
//     name: "Tahoe - Straw - Sunset",
//   Collection:"Tahoe",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_e196128bc52746e18b9984cd876f9432~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_e196128bc52746e18b9984cd876f9432~mv2.webp',
//     name: "Tahoe - Cork Hybrid - Sand Harbor",
//   Collection:"Tahoe",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_75ad3377214a4a4a8a9a116f2df62d05~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_75ad3377214a4a4a8a9a116f2df62d05~mv2.webp',
//     name: "Tahoe - Cork - Pink",
//   Collection:"Tahoe",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_280e3a544a8040029b49f96cd778086f~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_280e3a544a8040029b49f96cd778086f~mv2.webp',
//     name: "Tahoe - Cork Hybrid - Bliss",
//   Collection:"Tahoe",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_2e35b93cc5374700b1374b651ee93f90~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_2e35b93cc5374700b1374b651ee93f90~mv2.webp',
//     name: "Tahoe - Cork - Black",
//   Collection:"Tahoe",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_7d5382c60d76425f9486be072ba32dec~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_7d5382c60d76425f9486be072ba32dec~mv2.webp',
//     name: "Surf - Traditional - Charcoal Gray",
//   Collection:"Surf",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_ba9b9f3368b549069ee08f26b506745b~mv2.png/v1/fill/w_580,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_ba9b9f3368b549069ee08f26b506745b~mv2.webp',
//     name: "Surf - Straw - Surfboards",
//   Collection:"Surf",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_e71e9c67375846deb70a69a7ea5ef54e~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_e71e9c67375846deb70a69a7ea5ef54e~mv2.webp',
//     name: "Surf - Cork - Charcoal Gray",
//   Collection:"Surf",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_fce8786b5bab49798fe7f4d427f8bc7f~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_fce8786b5bab49798fe7f4d427f8bc7f~mv2.webp',
//     name: "Surf - Pastel - Gray",
//   Collection:"Surf",
//   price: 34.99,
//   quantityInStock: 17,
//   },
//   {
//     image: 'https://static.wixstatic.com/media/ac9cb6_23f90d769a92498484302f058cd04440~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/ac9cb6_23f90d769a92498484302f058cd04440~mv2.webp',
//     name: "Surf -Traditional - Camo Green",
//   Collection:"Surf",
//   price: 34.99,
//   quantityInStock: 17,
//   },
// ]