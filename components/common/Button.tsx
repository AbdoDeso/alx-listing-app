import { ButtonProps } from "@/interfaces";
const color = {
    black: "bg-black text-white" ,
    green: "text-amber-50 bg-green-800",
    white: "bg-gray-100 text-black"

}
const style = "flex sm:min-w-fit p-2 rounded-3xl";


export default function Button({label , variant}: ButtonProps) {
    return (
     <div className={`${style} ${color[variant]}`}>{label}</div>
    );
}
