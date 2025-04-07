import { useAppSelector, useAppDispatch } from "../../redux-store/hooks"
import { changeDarkMode, selectDarkmode } from '../../redux-store/slices/darkmode'
import Switch from "react-switch";


function HeroSection() {
    const darkmode = useAppSelector(selectDarkmode);
    const dispatch = useAppDispatch()

    const handleSwitch = () => {
        dispatch(changeDarkMode({darkmode: !darkmode}))
    }
    
  return (
    <div style={{backgroundColor: darkmode ? "#3e3e42" : "#FFFDD0"}} className="px-[20px] md:px-[50px] lg:px-[150px] h-[50px] border-b flex items-center justify-between">
      <h1 style={{color: darkmode? 'white' : 'black'}} className='text-xl'>RecruiterHelper</h1>
      <Switch onChange={handleSwitch} checked={darkmode} checkedIcon={''} uncheckedIcon={""}/>
    </div>
  )
}

export default HeroSection
