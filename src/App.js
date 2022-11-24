import './App.css';
import { useState, useEffect } from 'react';
import Users from './component/User/Users';

function App() {
  const [users, setUsers] = useState([]);

  const [cart,setCart] =  useState([])
  
  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {setUsers(data)
    const a = data.map(user => user)
    console.log(a)
  });
  },[])

  const handleAddClick = (name) =>{
     //console.log('handleAddClick',name)
    const newCart = [...cart , name ]
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Total User:{users.length}</h1>
      <h2>Count User:{cart.length}</h2>
      <h2>User Name: {cart} </h2>
        {
          users.map(user => <Users handleAddClick={handleAddClick} key={user.id} user={user}></Users>)
        }
    </div>
  );

}
export default App;
