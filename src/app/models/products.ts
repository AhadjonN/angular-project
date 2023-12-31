export interface IProducts {
  id: number,
  title: string,
  price: number,
  image?: string,
  configure: IProductsConfig;
}

export interface IProductsConfig {
  year: number,
  stats: string
}

