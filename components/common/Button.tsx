import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({label = 'click'}, ) => {
    const baseStyle = 'bg-neutral-500 text-white px-4 py-2 rounded hover:bg-neutral-600'

    return (
        <button
        className={`${baseStyle}`}
        >
        {label}
        </button>
    )
};

export default Button;
