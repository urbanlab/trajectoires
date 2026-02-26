import Icon from '@mdi/react';
import { mdiLoading, mdiLockOutline} from '@mdi/js';


type AllowedColors = 'red' | 'blue' | 'green' | 'white' | 'grey' | 'orange' | 'whiteBlue';

export interface ButtonProps {
    type? : string;
    title?: string;
    onPress?: () => void ;
    bgColor: AllowedColors
    iconPath?: string,
    iconRight?: boolean
    isLoading? : boolean,
    disabled?: boolean
    htmlType?: "button" | "submit" | "reset"

    
}

const colorVariants: Record<AllowedColors, string> = {
    red: 'bg-(--red)',
    blue: 'bg-(--blue)',
    green: 'bg-(--green)',
    white: 'bg-(--white) border-4 border-(--red)',
    grey: 'bg-(--dark-grey)',
    orange: 'bg-(--orange)',
    whiteBlue: 'bg-(--white) border-4 border-(--blue)' 
  // ... ajoute les autres
}
export default function Button({iconPath, iconRight, title, bgColor, onPress, disabled, isLoading, htmlType, }: ButtonProps) {

    const isWhite = bgColor === ('white')
    const isWhiteBlue = bgColor === ('whiteBlue')
    const isGrey = bgColor.includes('grey')
    const fontColor = isWhite  ? "text-(--red)" : isWhiteBlue ? "text-(--blue)" :isGrey ? "text-black" : "text-white"
    const iconColor = isWhite  ? "var(--red)" : isGrey ? "black" : "white"
    const colorButton = colorVariants[bgColor]

    return (
        <button
        type={htmlType}
        disabled={disabled}
        className={`flex ${iconRight ? "flex-row-reverse" : ""} cursor-pointer px-4 py-3 text-[2em] rounded-lg items-center justify-center flex-row gap-2 ${disabled ? " pointer-events-none border-none bg-(--disabled-grey)" : colorButton} ` }
        onClick={onPress}>
            { isLoading ?
            <div className="">
                <Icon path={mdiLoading} color="grey"/>
            </div>
            :
            disabled ? 
            <Icon path={mdiLockOutline} color={disabled ? "black" : iconColor} size={1}></Icon>
            : iconPath ?
            <Icon path={iconPath} color={iconColor} size={1}></Icon>
            : null}
            <span className={`${disabled ? "text-black" : fontColor} font-bold text-[1em]`}>{title}</span>
        </button>
    )
}