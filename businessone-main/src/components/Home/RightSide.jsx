import React from 'react'
import {ReactComponent as HomeIcon1} from '../../HomeImg/briefcase.svg'
import {ReactComponent as HomeIcon3} from '../../HomeImg/happyclients.svg'
import InternetLogo from '../../HomeImg/internet.png'
import { Icons } from './Icons'
export const RightSide = () => {
    const icons = [
        {
            img:  <HomeIcon1/>,
            title: '08+',
            describe: 'Years Industry Experience Web and Graphic Design'
        },
        {
            img:  InternetLogo,
            title: '250+',
            describe: 'We have built and successful finished websites.'
        },
        {
            img:  <HomeIcon3/>,
            title: '100%',
            describe: 'Our client rate us the best when it comes to reaching their goals.'
        },
    ]
  return (
    <div className='w-full'>
        {icons.map((icon, index) => (
            <Icons key={icon.index} index={icon.index} img={icon.img} title={icon.title} describe={icon.describe} />
        ))}
    </div>
  )
}
