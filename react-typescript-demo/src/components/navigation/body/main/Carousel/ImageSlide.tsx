import Beone from '../../../../../assets/BeOne.webp'
import Astranis from '../../../../../assets/Client_logo_astranis.webp'
import Conversica from '../../../../../assets/Conversica.webp'
import Partners from '../../../../../assets/DBL_Partners.webp'
import Capital from '../../../../../assets/Foundation_Capital.webp'
import Lime from '../../../../../assets/logo_home_lime.png'
import Thistle from '../../../../../assets/logo_home_thistle.png'
import Ycombinator from '../../../../../assets/logo_home_y-combinator.png'
import Calm from '../../../../../assets/logo_home_calm.png'

export const ImageSlide=()=>{
    const slides=[Calm,Ycombinator,Thistle,Lime,Partners,Astranis,Beone,Capital,Conversica]
    return(
<div className='flex gap-4 mt-20'>
    {slides.map((slide,index)=>(
        <img className=' w-[15rem] h-[15rem] rounded-4xl shadow-md ' key={index} src={slide} alt="" />
    ))}
</div>
    )
}