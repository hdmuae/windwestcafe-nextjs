import * as React from "react";

class SpecialCoctails extends React.Component {
    render() {
        const MenuRecord: React.FC<{
            name: string;
            description: string;
            price: number;
        }> = ({name, description, price}) => (
            <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-2">
                <div className="flex w-3/4 flex-col justify-between">
                    <p className="mb-2 font-minion text-2xl font-bold">{name}</p>
                    <p className="w-3/4 font-nexa text-sm font-light text-primary opacity-50 lg:w-full">
                        {description}
                    </p>
                </div>
                <div className="w-1/4">
                    <p className="font-minion text-2xl font-bold md:text-right">
                        {price} AED
                    </p>
                </div>
            </div>
        );
        const SubMenuRecord: React.FC<{
            name: string;
            description: string;
            price: number;
        }> = ({name, description, price}) => (
            <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-2">
                <div className="flex w-3/4 flex-col justify-between">
                    <p className="mb-2 font-minion text-lg font-bold pl-8">{name}</p>
                    <p className="w-3/4 font-nexa text-sm font-light text-primary opacity-50 lg:w-full pl-8">
                        {description}
                    </p>
                </div>
                <div className="w-1/4">
                    <p className="font-minion text-2xl font-bold md:text-right">
                        {price} AED
                    </p>
                </div>
            </div>
        );
        return (
            <div className="m-auto w-11/12">
                <MenuRecord
                    name="Caffè Viennese"
                    description="Double espresso Dersut, whipped cream, Low fat cocoa"
                    price={30}
                />
                <MenuRecord
                    name="Marocchino"
                    description="Espresso Dersut, a sprinkling of cocoa, milk cream, sprinkled with cocoa"
                    price={25}
                />
                <MenuRecord
                    name="Malfatto"
                    description="Base: yogurt, honey, almond. Amaretti grains, Pear juice, Espresso Dersut"
                    price={26}
                />
                <MenuRecord
                    name="Buongusto"
                    description="Base: yogurt, honey, almond. Mango juice, Espresso Dersut"
                    price={25}
                />
                <MenuRecord
                    name="Ricercato"
                    description="Pomegranate juice. Base: Espresso Dersut, cream, almond. Amaretti grains"
                    price={25}
                />
                <MenuRecord
                    name="Goloso"
                    description="Base: Philadelphia, nutella, chilli. Espresso Dersut, Chopped hazelnuts"
                    price={27}
                />
                <MenuRecord
                    name="Caffè Shakerato"
                    description="Espresso Dersut, Ice, Sugar for a taste"
                    price={23}
                />
                <MenuRecord
                    name="Caffè Leccese"
                    description="Espresso Dersut, 40 ml. Almond milk, Ice"
                    price={23}
                />
                <MenuRecord
                    name="Crema Fredda"
                    description="Skimmed milk (0.1% fat), Frozen skimmed milk in cubes"
                    price={28}
                />
            </div>
        );
    }
}
export default SpecialCoctails;