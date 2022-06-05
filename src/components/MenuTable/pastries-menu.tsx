import * as React from "react";

class Pastries extends React.Component {
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
                    name="Plain croissant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={12}
                />
                <MenuRecord
                    name="Cheese croissant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={20}
                />
                <MenuRecord
                    name="Chocolate croissant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    price={19}
                />
            </div>
        );
    }
}
export default Pastries;