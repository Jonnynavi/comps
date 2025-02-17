import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
    children,
    primary, 
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
    //gives warning if more than one color has been selected
    const color = [primary, secondary, success, warning, danger].filter(Boolean);
    if(color.length > 1){
        console.error("ERROR: You can only have one of the following props active PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER")
    }

    //twMerge will allow me to overwrite classes
    //classname function will allow me to create a classname turning them or off 
    const classes = twMerge(
        className(
            rest.className,
            'flex items-center px-3 py-1.5 border', 
            {
                'border-blue-500 bg-blue-500 text-white': primary,
                'border-gray-900 bg-gray-900 text-white':secondary,
                'border-green-500 bg-green-500 text-white': success,
                'border-yellow-400 bg-yellow-400 text-white': warning,
                'border-red-500 bg-red-500 text-white': danger,
                'rounded-full': rounded,
                'bg-white':outline,
                'text-blue-500': outline && primary,
                'text-gray-900': outline && secondary,
                'text-green-500': outline && success,
                'text-yellow-400': outline && warning,
                'text-red-500': outline && danger
            }
        )
    );

    return(
        <div>
            <button {...rest} className={classes}>{children}</button>
        </div>
    )
}

export default Button;