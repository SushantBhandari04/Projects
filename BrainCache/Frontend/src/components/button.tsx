import { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary" | "tertiary",
    size: "sm" | "md" | "lg",
    title: string,
    startIcon ?: ReactElement,
    endIcon ?: ReactElement,
    onClick ?: () => void
}

const buttonColor = {
    primary: "bg-violet-500 text-white rounded-md",
    secondary: "bg-violet-200 text-violet-500 rounded-md",
    tertiary: "bg-yellow-400  text-black rounded-full "
}

const buttonSize = {
    sm: "h-10 w-24",
    md: "h-9 w-36",
    lg: "h-10 w-44 text-md",
}

export function Button(props: ButtonProps){
    return <div onClick={props.onClick} className={`gap-3 text-sm cursor-pointer flex justify-center items-center font-medium ${buttonColor[props.variant]} ${buttonSize[props.size]}`}>
        {props.startIcon}
        {props.title}
        {props.endIcon}
    </div>
}