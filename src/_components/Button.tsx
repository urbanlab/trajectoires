import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

type AllowedColors = 'red' | 'blue' | 'green' | 'white' | 'grey' | 'orange';

export interface ButtonProps {
    type? : string;
    title?: string;
    onPress?: () => void ;
    bgColor: AllowedColors
    iconPath?: string,
    isLoading? : boolean,
    disabled?: boolean

    
}

const colorVariants: Record<AllowedColors, string> = {
    red: 'bg-(--red)',
    blue: 'bg-(--blue)',
    green: 'bg-(--green)',
    white: 'bg-(--white) border-4 border-(--red)',
    grey: 'bg-(--dark-grey)',
    orange: 'bg-(--orange)'
  // ... ajoute les autres
}
export default function Button({iconPath, title, bgColor, onPress, disabled, isLoading}: ButtonProps) {

    const isWhite = bgColor.includes('white')
    const isGrey = bgColor.includes('grey')
    const fontColor = isWhite  ? "text-(--red)" : isGrey ? "text-black" : "text-white"
    const iconColor = isWhite  ? "var(--red)" : isGrey ? "black" : "white"
    const colorButton = colorVariants[bgColor]

    return (
        <button
        disabled={disabled}
        className={`cursor-pointer px-4 py-3 text-[2em] flex rounded-lg items-center justify-center flex-row gap-2 ${disabled ? " pointer-events-none border-none bg-(--disabled-grey)" : colorButton} ` }
        onClick={onPress}>
            { isLoading ?
            <div className="">
                <Icon path={mdiLoading} color="grey"/>
            </div>
            :
            disabled && iconPath ? 
            <Icon path={iconPath} color={disabled ? "black" : iconColor} size={1}></Icon>
            : iconPath ?
            <Icon path={iconPath} color={iconColor} size={1}></Icon>
            : null}
            <span className={`${disabled ? "text-black" : fontColor} font-bold text-[1em]`}>{title}</span>
        </button>
    )
}