// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory} from "react-router-dom"


// export default function PrivateScreen() {
//     const [error, setError] = useState("")
//     const [privateData, setPrivateData] = useState("")
//     const history = useHistory();

//     useEffect(() => {
//         if (!localStorage.getItem("authToken")) {
//             history.push("/login")
//         }

//         const fetchPrivateData = async() => {
//             const config = {
//                 header: {
//                     "Content-Type": "applicatio/json",
//                     Authorization: `Bearer ${localStorage.getItem("authToken")}`
//                 }
//             }

//             try {
//                 const {data} = await axios.get("/api/private", config)
//                 setPrivateData(data.data)
//             } catch (error) {
//                 localStorage.removeItem("authToken")
//                 setError("You are not authorized, please login")
               
//             }
//         }
//         fetchPrivateData()
//      }, [history])

//      const logOutHandler = () => {
//          localStorage.removeItem("authToken")
//          history.push("/login")
//      }
//     return (
//         <div>
//            { error ? (<span>{error}</span>) :
//             <>
//             (  <div>Welcome to Btc pages</div>
//                 <button onClick= {logOutHandler}> LogOut</button>)
//             </>}
//         </div>
//     )
// }
