import IMenu from './Menu';

interface IOrder {
    id: number;
    menuInfo: IMenu;
    combo: boolean;
    quantity: number;
}

export default IOrder;
