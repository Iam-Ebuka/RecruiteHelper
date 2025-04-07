import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux-store/hooks';
import { selectDarkmode } from '../../redux-store/slices/darkmode';
import { useLazySearchRepoQuery } from '../../redux-store/api/apiCalls';
import { GitHubUserRepo } from '../../types/responseType';

function SearchUserRepository() {
    const [search, setSearch] = useState('')
     const darkmode = useAppSelector(selectDarkmode);
     const [userQuery, {isError, isSuccess, error, data}] = useLazySearchRepoQuery()
     const [result, setResult] = useState<GitHubUserRepo | null>(null)
 
     console.log('result', result)
 
     useEffect(() => {
         console.log("search", result)
     }, [result])
 
     useEffect(() => {
         if(isError) {
             console.log("error", error)
         }
     }, [error, isError])
 
     useEffect(() => {
         if(isSuccess) {
             setResult(data)
         }
     }, [data, isSuccess])
 
     const handleInput = (value: string) => {
         setSearch(value)
     }
 
     const searchApi = async (query: string, userQuery: any) => {
         try {
           const cacheKey = `search-${query.toLowerCase()}`;
       
           // Check if data is already in localStorage
           const cachedResult = localStorage.getItem(cacheKey);
       
           if (cachedResult !== null) {
             console.log('Loaded from cache');
             return JSON.parse(cachedResult); // return cached data
         
           }
       
           // Call your API
           const result = await userQuery(query).unwrap();
       
           // Store in localStorage
           localStorage.setItem(cacheKey, JSON.stringify(result));
           console.log('Fetched from API and cached');
       
           return data;
         } catch (error) {
           console.error('Search error:', error);
           return [];
         }
       };
 
     const handleSearch = async () => {
         const data = await searchApi(search, userQuery);
         setResult(data)
     }
   return (
     <div>
         <div style={{borderColor: darkmode ? 'white' : 'black'}} className='border flex mt-10 rounded-xl h-[50px] w-[80%] md:w-[50%] mx-auto'>
             <input 
                 value={search}
                 onChange={(e) => handleInput(e.target.value)}
                 placeholder='Search user Repo'
                 style={{flex: 1, fontSize: 20, color: darkmode? 'white' : 'black'}}
                 className='px-[20px] h-full w-full'
                 
             />
             <button 
                 style={{
                     backgroundColor: "GrayText",
                     color: 'white'
                 }}
                 onClick={handleSearch}
             >
                 Search
             </button>
         </div>
 
         <div style={{borderColor: darkmode ? "white" : 'black'}} className='border mt-6 rounded-md max-w-[500px] px-[10px] w-[50%] mx-auto'>
             <p style={{color: darkmode ? "white" : 'black'}} className='text-center font-bold border-b py-3'>GitHub User Info</p>
             <p style={{color: darkmode ? "white" : 'black'}} className='border-b py-3 text-center'>Name: {result?.name }</p>
             <p style={{color: darkmode ? "white" : 'black'}} className='border-b py-3 text-center'>UserName: {result?.login}</p>
             <p style={{color: darkmode ? "white" : 'black'}} className='border-b py-3 text-center'>Bio: {result?.bio}</p>
             <p style={{color: darkmode ? "white" : 'black'}} className='py-3 text-center'>Number of Repos: {result?.public_repos }</p>
         </div>
     </div>
   )
}

export default SearchUserRepository