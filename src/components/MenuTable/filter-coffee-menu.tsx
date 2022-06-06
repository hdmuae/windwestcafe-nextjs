import * as React from "react";

class FilterCoffee extends React.Component {
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
                    name="Cold Brew"
                    description="Dripped coffee that has been brewed with cold rather hot water"
                    price={30}
                />
                <MenuRecord
                    name="Cascara Tonic"
                    description="Caffeinated, tea-like drink with a fruity flavour made from dried coffee cherries"
                    price={35}
                />
                <MenuRecord
                    name="Nitro"
                    description="It’s a variation of cold brewed coffee that used addition of nitrogen gas to create
                    a smooth texture"
                    price={32}
                />
                <MenuRecord
                    name="V60"
                    description="The name stems from the shape of device. It is “V” shaped with angles of 60 degrees
                    in which hot water passes through ground coffee in a special funnel with a paper filter"
                    price={32}
                />
            </div>
        );
    }
}
export default FilterCoffee;