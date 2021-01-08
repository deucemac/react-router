import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Nav from './Nav'
import About from './About'
// import ItemDetail from './ItemDetail';
// import Shop from './Shop'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          {/* <Route path="/shop">
            <Shop/>
          </Route> */}
          <Route path="/topics">
            <Topics />
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;

function Topics() {
  let { url, path } = useRouteMatch()
  console.log(url, path)
  return (
    <div>
    <ul>
      <li><Link to={`${url}/ties`}>ties</Link></li>
      <li><Link to={`${url}/coats`}>coats</Link></li>
    </ul>

    <Route path={`${path}/:topicId`}>
      <Topic />
    </Route>
    </div>
  )
}
const Topic = () => (
  <h1>Topic</h1>
)

function Shop() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v1/banners')

    const items = await data.json()
    setItems(items.data)
  }

  let { url, path } = useRouteMatch();
  console.log(url, path)
  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item, index) => (
        index < 10 ?
          <div key={index}>
            {/* <h3><Link to={`/shop/${item.id}`}>{item.devName}</Link></h3> */}
            <h3><Link to={`${url}/${item.id}`}>{item.devName}</Link></h3>
          </div>
          : null
      ))}

    <Route path={`${path}/:itemId`}>
      <Item />
    </Route>
    </div>
  );
}

function Item() {
  return <h1>Item</h1>
}