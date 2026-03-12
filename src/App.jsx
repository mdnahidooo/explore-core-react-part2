
import Batsman from './Batsman';
import Counter from './Counter';
import './App.css'
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


// another way
const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


function App() {



  const friendsPromise = fetchFriends();


  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("I am clicked");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h2>Vite + React</h2>


      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>



      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Batsman></Batsman>
      <Counter></Counter>




      <section id="center">

        <button onClick={handleClick}>Click Me</button>

        {/* another way below: never use */}
        <button onClick={function handleClick2() {
          alert("Clicked 2")
        }}>Clicked 2</button>


        <button onClick={handleClick3}>Clicked 3</button>
        <button onClick={() => { alert("Clicked 4") }}>Clicked 4</button>


        <button onClick={() => { handleAdd5(7) }}>Clicked 5</button>



      </section>




    </>
  )
}

export default App
