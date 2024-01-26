import {useState} from 'react'
import {NavMenu} from './navMenu'
import {NavElements} from './navElements'

export const Nav = () => {
  const [isActive, setActive] = useState(false);
  return(
    <div>
      <NavElements isActive={isActive} setActive={setActive}/>
      <NavMenu isActive={isActive} setActive={setActive}/>
    </div>
  )
 
}
