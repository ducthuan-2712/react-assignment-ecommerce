export interface ProductModuleProps {
  products: any,
  handleSorted: (...args: any[]) => any,
}

export interface ProductProps {
  id: number,
  thumb_url?: string,
  thumb_url_alt?: string,
  title?: string,
  description?: string,
}