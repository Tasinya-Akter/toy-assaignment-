import React, { useContext,useState, useEffect } from 'react'
import { themeContext } from '../../Firebase/AuthProvider'
import SingleMyToy from './SingleMyToy'

const MyToy = () => {
    const [refresh,setReFresh] = useState(true)
    const {user} = useContext(themeContext)
    const [allToy,setAllToy] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.displayName}`)
        .then(res => res.json())
        .then(result => setAllToy(result))
    },[refresh])

  return (
    <div className='py-14'>
        <div className="container mx-auto">
            
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
  )
}

export default MyToy