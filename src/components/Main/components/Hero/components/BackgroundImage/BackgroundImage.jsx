import RedRing from './images/RedRing.png'

import './styles/BackgroundImage.css'

const BackgroundImage = () => {
  return (
    <figure>
        <img src={RedRing} alt="Red ring" loading='lazy'/>
    </figure>
  )
}

export default BackgroundImage