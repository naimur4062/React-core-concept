import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const stylePerson = {
  color: 'salmon',
  border: '2px solid blue',
  backgroundColor: 'gray',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px',
  width: '300px'
}
function App() {
  const friends = ['Abdur', 'Munira', 'Trisha', 'Mutassim', 'Shuvo']
  const products = [
    { name: 'Photoshop', price: '$99' },
    { name: 'Laptop', price: '$799' },
    { name: 'Mobile', price: '$399' },
    { name: 'Tab', price: '$999' },
    { name: 'Bike', price: '$1399' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    margin: '10px',
    padding: '10px',
    width: '200px',
    float: 'left',
    color: 'black'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2> {name} </h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect (() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
