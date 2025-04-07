import { useState } from 'react'
import { useAppSelector } from '../../redux-store/hooks';
import { selectDarkmode } from '../../redux-store/slices/darkmode';
import SearchUserInfo from './SearchUserInfo';
import SearchUserRepository from './SearchUserRepository';

function SearchComponent() {
    const [type, setType] = useState(1)
    const darkmode = useAppSelector(selectDarkmode);
    const buttonColor = darkmode === true ? "#3e3e42" : "#3e3e42"
  return (
    <div style={{backgroundColor: darkmode ? "#3e3e42" : "#FFFDD0"}} className='py-10 '>
        <div className='flex justify-center gap-4 mt-10'>
            <button 
                onClick={() => setType(1)}
                style={{
                    backgroundColor: type === 1 ? buttonColor: '',
                    marginTop: 10
                }}
            >
                <h3 className='sm:text-sm' style={{color: type === 1 ? 'white': 'black'}}>Search user info</h3>
            </button>
            <button
            onClick={() => setType(2)}
            style={{
                backgroundColor: type === 2 ? buttonColor: '',
                marginTop: 10
            }}
            >
                <h3 className='sm:text-sm' style={{color: type === 2 ? 'white': 'black'}}>Search user repository</h3>
            </button> 
        </div>
        {type === 1 ? (
            <SearchUserInfo />
        ) : 
        (
            <SearchUserRepository />
        )}
    </div>
  )
}

export default SearchComponent