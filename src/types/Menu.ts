type BurgerType = 'burger' | 'drink';

interface IMenu {
    id: number;
    name: string;
    nameEn: string;
    price: number;
    comboPrice?: number;
    img: string;
    type: BurgerType;
    description: string;
}

export default IMenu;
