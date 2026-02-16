import {Typography, Button, theme} from 'antd'

const { useToken } = theme;


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
    const {token} = useToken()

    return (
        <div className='flex flex-col gap-10 bg-[#F7F7F7] hover:bg-[#EDEDED] hover:border-t-10 p-10' style={{borderTopColor: token.colorPrimary}}>
            <Typography.Title level={1}>{title}</Typography.Title>
            <Typography.Title style={{color: token.colorPrimary, fontWeight:'bold'}} level={2} >{subtitle}</Typography.Title>
            <Typography>{text}</Typography>
            <div className="flex items-center">
                {children}
            </div>
            <div className="flex justify-center">
                <Button className="" type="primary" disabled={disabled} onClick={onClick}>{buttonText ? buttonText :  "Compléter"}</Button>
            </div>

        </div>
    )

}