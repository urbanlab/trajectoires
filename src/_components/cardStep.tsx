import {Typography, Button} from 'antd'

interface CardProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
    text: string;
    buttonText?: string
    disabled: boolean
    onClick: () => void
}
export function CardStep({children, title, subtitle, text, buttonText, disabled, onClick}: CardProps){
    return (
        <div className='flex flex-col gap-3 bg-[#F7F7F7] '>
            <Typography>{title}</Typography>
            <Typography>{subtitle}</Typography>
            <Typography>{text}</Typography>
            <div className="flex items-center">
                {children}
            </div>
            <div className="flex items-center">
                <Button className={``} type="primary" disabled={disabled} onClick={onClick}>{buttonText ? buttonText :  "Compléter"}</Button>
            </div>

        </div>
    )

}