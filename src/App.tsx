import React, { Component } from 'react';
import Info from './components/Info';
import './App.css';
import {apiCall} from './Services';
import Image from './components/Image';
import Counter from './components/Counter';
import { API_URL } from './Constants';
import { IUsersResponse } from './Interface';
import { IUsersPostResponse } from './Interface';

interface Istate {
  counter: number;
  data: IUsersResponse[];
  posts: IUsersPostResponse[];
}



class app extends React.Component<{}, Istate>{
    constructor(props: {}) {
    super(props);
    this.state = {
    counter: 0,
    data: [],
    posts: []
  }
}

componentDidMount() {
apiCall(API_URL.users)
  .then((data: any) => {
    this.setState({data:data})

    data.forEach((user:IUsersResponse) => {
      let url = API_URL.posts.replace('(userId)', user.id.toString());
      //console.log(url);

      // panggil url post
      apiCall(url)
      .then((posts:any) => {
          //hasilnya
          console.log(posts);

          // hasilnya di masukin ke user
          user.posts = posts;

      })
      console.log(user);


    });
  })
  .catch((err) => {
    console.log(err);
  })
}

componentDidUpdate() {
  console.log("did Update")
}
// class App extends React.Component {
//   render() {
//     return (     
//       <div className="app-wrapper">
//         {/* {<Info nama="Karin" kelas= "XD/21" isMorning={true} />
//       //   <Counter />
//       //   <Image /> */}
//       </div>
//       );
//   }
// }
// export default App;

renderUsers = () => {
  const { data } = this.state;

  return data.map((user) => {
    return (
      <div key={user.id}> 
      <h5>{user.name}</h5>
      <p>{user.email}</p>
      <p>{user.posts}</p>
      </div>
    )
  })
}



render() {
  const { counter } = this.state;
  return (
    <div className='app-wrapper'>
      {this.renderUsers()}
    </div>
    );
  }
}

export default app;