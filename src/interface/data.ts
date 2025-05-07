export interface Data {
  id?: string,
  creator: string,
  title: string,
  pricingOption: 0 | 1 | 2, // 0 -> paid, 1 -> free, 2 -> view_only
  imagePath: string,
  price: number
}