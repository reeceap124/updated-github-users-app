import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';
import { UserList } from './components/UserList';
import { EnterUser } from './components/EnterUser';
import {CurrentUser} from './components/CurrentUser'

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('reeceap124')
  const [url, setUrl] = useState(`https://api.github.com/users/${text}`)
  const [user, setUser] = useState({})

  


  useEffect(() => {
    axios.all([
      axios.get(url),
      axios.get(`${url}/followers`)
    ]).then(axios.spread((thisUser, followers) => {
        console.log('thisUser',thisUser.data)
        console.log('followers',followers.data)
        setUser(()=> thisUser.data)
        console.log('user from axios', user)
        setUsers([])
        followers.data.forEach(person=>{
          axios
            .get(person.url)
            .then(r => {
              setUsers(u => [...u, r.data])
              // Kevin Smith: To explain at a high level: when your .then callback was being added to the call stack, it was pointing to the initial users array. When you use a callback in setUsers, you'll always get the current state passed as an argument when it finally gets evaluated
              console.log(`got user ${r.data.name}`)
            })
            .catch(err => {
              console.log('there was an error fetching user', err)
            })
      })
    }))
    .catch(err=>{
      console.log('there was and error fetching list', err)
    })
  },[url]);

  
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleEnter = (e) => {
        e.preventDefault();
        setUrl(`https://api.github.com/users/${text}`)
        setText('')
    }
    


  

  return (
    <div className="App">
      <div className='currentUserWrapper'>
        <EnterUser handleChange={handleChange} handleEnter={handleEnter} text={text}/>
        <CurrentUser user={user}/>
      </div>
      <div className='followersWrapper'>
        <h2>Followers:</h2>
        <UserList users={users}/>
      </div>
      
    </div>
  );
}

export default App;





  // axios
  //   .get(url)
  //   .then(res=> {
  //     console.log(res.data)
  //     setUsers([])
  //     res.data.forEach(person=>{
        
  //         axios
  //           .get(person.url)
  //           .then(r => {
              
  //             setUsers(u => [...u, r.data])
  //             // Kevin Smith: To explain at a high level: when your .then callback was being added to the call stack, it was pointing to the initial users array. When you use a callback in setUsers, you'll always get the current state passed as an argument when it finally gets evaluated
  //             console.log(`got user ${r.data.name}`)
  //           })
  //           .catch(err => {
  //             console.log('there was an error fetching user', err)
  //           })
  //     })
  //   })
  //   .catch(err=>{
  //     console.log('there was and error fetching list', err)
  //   })
