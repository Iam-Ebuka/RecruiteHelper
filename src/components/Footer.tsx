import { useAppSelector } from '../../redux-store/hooks';
import { selectDarkmode } from '../../redux-store/slices/darkmode';

function Footer() {
        const darkmode = useAppSelector(selectDarkmode);
  return (
    <div style={{backgroundColor: darkmode ? "#3e3e42" : "#FFFDD0", flex: 1}} className="">
      <h1 style={{color: darkmode? 'white' : 'black'}} className='text-xl text-center'>Made with love and a little bit of rush</h1>
    </div>
  )
}

export default Footer