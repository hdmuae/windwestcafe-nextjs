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
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={18}
                />
                <SubMenuRecord
                    name="Double"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={22}
                />
                <SubMenuRecord
                    name="Freddo"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={23}
                />
                <SubMenuRecord
                    name="Tonic"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={27}
                />
                <MenuRecord
                    name="Americano"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={18}
                />
                <MenuRecord
                    name="Cappuccino"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    price={21}
                />
                <SubMenuRecord
                    name="Freddo"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={24}
                />
                <MenuRecord
                    name="Late"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={22}
                />
                <SubMenuRecord
                    name="Iced"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={22}
                />
                <SubMenuRecord
                    name="Spanish"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={26}
                />
                <SubMenuRecord
                    name="Vanilla"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={24}
                />
                <MenuRecord
                    name="Flat White"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    price={25}
                />
                <SubMenuRecord
                    name="Freddo"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={27}
                />
                <MenuRecord
                    name="Flat White"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    price={25}
                />
                <MenuRecord
                    name="Cacao"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    price={22}
                />
            </div>
        );
    }
}
export default Coffee;