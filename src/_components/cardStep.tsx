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
        <div className='flex flex-col justify-between gap-10 bg-[#F7F7F7] hover:bg-[#EDEDED] hover:border-t-10 p-12' style={{borderTopColor: token.colorPrimary}}>
            <div className='flex flex-col gap-5'>
                <Typography.Title level={1}>{title}</Typography.Title>
                <Typography.Title style={{color: token.colorPrimary, fontWeight:'bold'}} level={2} >{subtitle}</Typography.Title>
                <p className='text-justify text-[1.6em] leading-7'>{text}</p>
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