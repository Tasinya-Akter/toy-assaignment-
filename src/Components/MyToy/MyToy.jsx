import React, { useContext,useState, useEffect } from 'react'
import { themeContext } from '../../Firebase/AuthProvider'
import SingleMyToy from './SingleMyToy';
import style from './MyToy.module.css';
import useTitle from '../../Hooks/useTitle';

const MyToy = () => {
  useTitle("My toys")
    const [refresh,setReFresh] = useState(true)
    const {user} = useContext(themeContext)
    const [allToy,setAllToy] = useState([])
    useEffect(() => {
        fetch(`https://toy-server-pearl.vercel.app/specific_toy/?email=${user.email}&order=-1`)
        .then(res => res.json())
        .then(result => setAllToy(result))
    },[refresh])

    const handleOrder = (e) => {
      const val = e.target.value;
      fetch(`https://toy-server-pearl.vercel.app/specific_toy/?email=${user.email}&order=${val}`)
        .then(res => res.json())
        .then(result => setAllToy(result))
    }
  return (
    <div >
      <div className={style.bg}>
        <h2 className='text-center font-Bubblegum text-white text-3xl'>Toy Details</h2>
      </div>

    <div className='py-14'>
        <div className="container mx-auto">
            <div className='text-right mb-6'>
            <select onChange={handleOrder} className="select select-bordered w-full max-w-xs">
                <option value="-1">Ascending</option>
                <option value="1">Descending </option>
            </select>
            </div>
            <div>
        <div className="overflow-x-auto w-full">
              <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>Photo</th>
        <th>Name</th>
        <th>Category</th>
        <th>price</th>
        <th>Action</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                allToy.map(item => <SingleMyToy refresh={refresh} setReFresh={setReFresh} item={item} key={item._id}></SingleMyToy>)
            }
    </tbody>
    {/* foot */}
    
  </table>
  </div>
  </div>
        </div>
    </div>
    </div>
  )
}

export default MyToy