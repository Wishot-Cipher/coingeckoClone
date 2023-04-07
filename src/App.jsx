import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'



function App() {
  const [post, setpost] = useState([])
  const [error, seterror] = useState("")
  

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
     .then(response => {
      setpost(response.data)
      seterror("")
      console.log(response.data);
    })
    .catch(error => {
        console.log(error);
        setpost("")
        seterror("Something went wrong")
    })
  
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <div className="App">

            
            <table>
            <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                </tr>

                {post.map((posts) => (
               <tr key={posts.id}>
                  <td>{posts.market_cap_rank}</td>
                  <td>{posts.name}</td>
                  <td> <img src={posts.image} className="images" /> </td>
                  <td>{posts.current_price}</td>
                </tr>
                   ))}
            </table>
           </div>
  )
}

export default App
