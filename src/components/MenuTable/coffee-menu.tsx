import * as React from "react";

class Coffee extends React.Component {
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
                    name="Espresso"
                    description=""
                    price={20}
                />
                <SubMenuRecord
                    name="Double"
                    description=""
                    price={23}
                />
                <SubMenuRecord
                    name="Freddo"
                    description=""
                    price={23}
                />
                <SubMenuRecord
                    name="Tonic"
                    description=""
                    price={30}
                />
                <MenuRecord
                    name="Americano"
                    description="With Milk, plant based milk"
                    price={18}
                />
                <MenuRecord
                    name="Cappuccino"
                    description="Plant based milk"
                    price={21}
                />
                <SubMenuRecord
                    name="Freddo"
                    description=""
                    price={24}
                />
                <MenuRecord
                    name="Late"
                    description="Plant based milk"
                    price={22}
                />
                <SubMenuRecord
                    name="Iced"
                    description=""
                    price={22}
                />
                <SubMenuRecord
                    name="Spanish"
                    description=""
                    price={26}
                />
                <SubMenuRecord
                    name="Vanilla"
                    description=""
                    price={24}
                />
                <MenuRecord
                    name="Flat White"
                    description="Plant based milk"
                    price={25}
                />
                <SubMenuRecord
                    name="Freddo"
                    description=""
                    price={27}
                />
                <MenuRecord
                    name="Cacao"
                    description="Dark chocolate, Hazelnut, Orange&Cinnamon, White chocolate, Coconut, Amaretto"
                    price={22}
                />
            </div>
        );
    }
}
export default Coffee;
