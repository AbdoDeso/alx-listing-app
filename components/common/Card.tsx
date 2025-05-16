import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({label = 'ReskillHub',imageSrc = 'https://via.placeholder.com/400x200', variant = 'primiary'} ) => {
    const baseStyle = 'max-w-sm rounded overflow-hidden shadow-lg bg-white'
    
    const variantStyle ={
        primiary: 'w-full',
    };

    return (
      <div
      className={`${baseStyle}`}
      >
        <img className={`${variantStyle[variant]}`} src={`${imageSrc}`} alt={`${label}`}/>
      </div>
    )
};

export default Card;
