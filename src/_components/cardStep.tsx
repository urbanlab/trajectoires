import {Typography, theme} from 'antd'
import Button from './Button'
import {ButtonProps} from './Button'

const { useToken } = theme;

interface CardProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
    text: string;
    buttonConfig: ButtonProps
    
}
export function CardStep({children, title, subtitle, text, buttonConfig}: CardProps){
    const {token} = useToken()

    return (
        <div className='group relative flex flex-col justify-between gap-5 bg-(--light-grey) hover:bg-(--select-grey) p-8' style={{borderTopColor: token.colorPrimary}}>
            <div className="absolute bg-(--red) h-4 top-0 left-0 right-0 w-full opacity-0 group-hover:opacity-100"></div>
            <div className='flex flex-col gap-5'>
                <Typography.Title level={1}>{title}</Typography.Title>
                <Typography.Title style={{color: token.colorPrimary, fontWeight:'bold'}} level={3} >{subtitle}</Typography.Title>
                <p className='text-justify text-[1.3em]'>{text}</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex items-center">
                    {children}
                </div>
                <div className="flex justify-center">
                    <Button {...buttonConfig} ></Button>
                </div>
            </div>
        </div>
    )

}