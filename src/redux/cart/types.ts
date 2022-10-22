export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  carType: string;
  carSize: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
