import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Laptop', price: '$399.99', company:'Dell'},
    {name:'Watch', price: '$69.99', company:'Ajanta'},
    {name:'Mobile', price: '$249.99', company:'Samsung'},
    {name:'Apple', price: '$599.99', company:'HP'}
  ]
  const friends = [
    {name: 'Rokan Uddin', fatherName : 'Anwar Ullah', address: 'Nowakhali'},
    {name: 'Hamed Farid', fatherName : 'Farid Ahmed', address: 'Bashkhali'},
    {name: 'Mohammad Hassan', fatherName : 'Anwar Ullah', address: 'Shatkania'},
    {name: 'Abul Khair', fatherName : 'Abul Hashem', address: 'Comilla'},
    {name: 'Abul Khair', fatherName : 'Abul Hashem', address: 'Comilla'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React person</p>
        {/* <Count></Count> */}
        {/* <Users></Users> */}
        <Posts></Posts>
        {/* {
          products.map(product => <Products product={product}></Products>)
        } */}
        {/* {
          friends.map(friend => <Friends friend={friend}></Friends> )
        } */}

      </header>
    </div>
  );
}

function Posts(){
  const postStyle = {
    border: '2px solid gold'
  }
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[])
  return (
    <div style={postStyle}>
      
      <div>
        {
          posts.map(post => <p>{post.body}</p>)
        }
      </div>
    </div>
  )
}

function Users(){
  const [users, setUser]= useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUser(data));
  },[])
  return (
    <div>
      <h3>Dynamic Data: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0);
  // const handleIncrese = () => setCount(count + 1);

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=> setCount(count - 1)}>Decrese</button>
      <button onClick={()=> setCount(count + 1)} >Increese</button>
    </div>
  )
}

function Products(props){
  const productStyle = {
    border : '2px solid red',
    margin:'5px',
    borderRadius: '5px',
    backgroundColor: 'gray',
    color: 'gold',
    display: 'grid',
    
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.product.price}</h5>
      <p>Company Name: {props.product.company}</p>
      <p> Lorem ipsum dolor sit amet. </p>
      <button style={{padding:'5px', borderRadius:'5px', backgroundColor:'blue', color:'white'}}>Buy Now</button>
    </div>
  )
}
function Friends (props) {
  return (
    <div>
      <h3>{props.friend.name}</h3>
      <h4> {props.friend.fatherName}</h4>
      <p> {props.friend.address}</p>
    </div>
  )
}


export default App;
