
type ButtonProps = {
    label: string;
    icon: any
    onClick: () => void;
};

const CustomButton = ({ label, icon, onClick }: ButtonProps) => {
    return (
        <button
            className="inline-flex items-center text-center justify-center  w-full px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={onClick}
        >
            <div className="flex items-center justify-center text-center">
                <span className="mr-2">
                    {icon}
                </span>
                {label}

            </div>
        </button>
    );
};

export default CustomButton;