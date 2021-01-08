// import React, { useState, useEffect } from 'react'
// import {
//   Link, 
//   Route,
//   useRouteMatch
// } from 'react-router-dom';
// import ItemDetail from './ItemDetail';

// export default function Shop() {
//   useEffect(() => {
//     fetchItems()
//   }, [])

//   const [items, setItems] = useState([]);

//   const fetchItems = async () => {
//     const data = await fetch('https://fortnite-api.com/v1/banners')

//     const items = await data.json()
//     setItems(items.data)
//   }

//   let { url, path } = useRouteMatch()
//   console.log(url, path)
//   return (
//     <div>
//       <h1>Shop Page</h1>
//       {items.map((item, index) => (
//         index < 10 ?
//           <div key={index}>
//             {/* <h3><Link to={`/shop/${item.id}`}>{item.devName}</Link></h3> */}
//             <h3><Link to={`${url}/${item.id}`}>{item.devName}</Link></h3>
//           </div>
//           : null
//       ))}

//       <Route path={`${path}/:id`}>
//         <ItemDetail />
//       </Route>
//       </div>
//   )
// }

