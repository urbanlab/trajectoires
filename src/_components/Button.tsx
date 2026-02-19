import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';


export interface ButtonProps {
    type? : string;
    title?: string;
    onPress?: () => void ;
    bgColor: string
    iconPath?: string,
    isLoading? : boolean,
    disabled?: boolean
}
export default function Button({iconPath, title, bgColor, onPress, disabled, isLoading}: ButtonProps) {
    const isWhite = bgColor.includes('white')
    const fontColor = isWhite  ? "text-(--red)" : "text-white"
    const iconColor = isWhite  ? "var(--red)" : "white"

    return (
        <button
        disabled={disabled}
        className={`cursor-pointer px-4 py-3 text-[2em] flex rounded-lg items-center justify-center flex-row gap-2 ${disabled ? " pointer-events-none border-none bg-(--disabled-grey)" : isWhite ? ` border-4 border-(--red) bg-(--${bgColor})` : `bg-(--${bgColor})`}  ` }
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
            <span className={`${disabled ? "text-black" : fontColor} font-bold text-[1.4em]`}>{title}</span>
        </button>
    )
}