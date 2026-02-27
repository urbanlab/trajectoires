import Icon from '@mdi/react';
import { mdiThumbDownOutline, mdiThumbUpOutline  } from '@mdi/js';

const TEXT = {
    1 :  "Ce n'est que le début",
    2: "C'est bien mais on peut encore faire mieux !",
    3: "Quelques réponses de plus seraient top",
    4: "On tient quelque chose !",
    5: " C'est un bon taux de réponse, on tente plus ?",
    6: "C'est super, vous avez beaucoup de réponse !"
}


export default function ResponsesPercentage({percentage}:{percentage: number}) {
    const text = percentage < 11 ? TEXT[1] : percentage < 21 ? TEXT[2] : percentage < 31 ? TEXT[3] : percentage < 41 ? TEXT[4] : percentage < 51 ? TEXT[5] : TEXT[6]
    const icon = percentage > 19 ? mdiThumbUpOutline : mdiThumbDownOutline
    const textColor =  percentage < 20 ? "text-(--red)" : percentage > 49 ? "text-(--green)" : "text-(--blue)"
    const IconColor = percentage < 20 ? "var(--red)" : percentage > 49 ? "var(--green)" : "var(--blue)"
    return (
        <div className="flex items-center gap-3">
            <Icon path={icon } color={IconColor} size={1}/>
            <p className= {`font-bold text-[1.5em] ${textColor}`} >{text}</p>
        </div>
    )
}