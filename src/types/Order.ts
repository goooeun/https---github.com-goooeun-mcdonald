import IMenu from './Menu';

interface IOrder {
    id?: number;
    menu: IMenu;
    combo: boolean;
    quantity: number;
}

export default IOrder;
