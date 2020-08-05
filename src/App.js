import React from 'react';
import './App.css';
import axios from 'axios'

import UserCard from './components/UserCard'
import FollowersCard from './components/FollowersCard'

// const data = [{
//   "avatar_url": "https://avatars0.githubusercontent.com/u/65781305?v=4",
//   "bio": "New Yorker living in San Francisco, CA. Studying Front End Web Development at Lambda School.",
//   "blog": "",
//   "company": null,
//   "created_at": "2020-05-22T16:51:43Z",
//   "email": null,
//   "events_url": "https://api.github.com/users/beaadelrosario/events{/privacy}",
//   "followers": 6,
//   "followers_url": "https://api.github.com/users/beaadelrosario/followers",
//   "following": 3,
//   "following_url": "https://api.github.com/users/beaadelrosario/following{/other_user}",
//   "gists_url": "https://api.github.com/users/beaadelrosario/gists{/gist_id}",
//   "gravatar_id": "",
//   "hireable": null,
//   "html_url": "https://github.com/beaadelrosario",
//   "id": 65781305,
//   "location": "San Francisco, CA",
//   "login": "beaadelrosario",
//   "name": "Bea Del Rosario",
//   "node_id": "MDQ6VXNlcjY1NzgxMzA1",
//   "organizations_url": "https://api.github.com/users/beaadelrosario/orgs",
//   "public_gists": 0,
//   "public_repos": 20,
//   "received_events_url": "https://api.github.com/users/beaadelrosario/received_events",
//   "repos_url": "https://api.github.com/users/beaadelrosario/repos",
//   "site_admin": false,
//   "starred_url": "https://api.github.com/users/beaadelrosario/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/beaadelrosario/subscriptions",
//   "twitter_username": null,
//   "type": "User",
//   "updated_at": "2020-07-09T20:21:30Z",
//   "url": "https://api.github.com/users/beaadelrosario"
// },
// {
//   "avatar_url": "https://avatars1.githubusercontent.com/u/66022270?v=4",
//   "bio": "This is my bio",
//   "blog": "",
//   "company": null, 
//   "created_at": "2020-05-27T14:45:40Z",
//   "email": null,
//   "events_url": "https://api.github.com/users/zavier-lambda/events{/privacy}",
//   "followers": 0,
//   "followers_url": "https://api.github.com/users/zavier-lambda/followers", 
//   "following": 0,
//   "following_url": "https://api.github.com/users/zavier-lambda/following{/other_user}",
//   "gists_url": "https://api.github.com/users/zavier-lambda/gists{/gist_id}",
//   "gravatar_id": "", 
//   "hireable": null,
//   "html_url": "https://github.com/zavier-lambda",
//   "id": 66022270,
//   "location": "Orlando, FL", 
//   "login": "zavier-lambda",
//   "name": "Zavier",
//   "node_id": "MDQ6VXNlcjY2MDIyMjcw",
//   "organizations_url": "https://api.github.com/users/zavier-lambda/orgs", 
//   "public_gists": 0,
//   "public_repos": 20,
//   "received_events_url": "https://api.github.com/users/zavier-lambda/received_events",
//   "repos_url": "https://api.github.com/users/zavier-lambda/repos", 
//   "site_admin": false,
//   "starred_url": "https://api.github.com/users/zavier-lambda/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/zavier-lambda/subscriptions",
//   "twitter_username": null,
//   "type": "User",
//   "updated_at": "2020-07-09T18:24:27Z",
//   "url": "https://api.github.com/users/zavier-lambda"
// }]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user:{},
      followers:[]
      }
    }
    componentDidMount() {
      axios
        .get('https://api.github.com/users/beaadelrosario')
        .then(response => {
          console.log(response)
          this.setState({
            user:response.data
          })
        })
      axios
      .get('https://api.github.com/users/beaadelrosario/followers')
      .then(response => {

        this.setState({
          followers:response.data
        })
      })
      .catch(err => console.log(err))
      }
    
    render() {
      return (
        <div className="App">
          <UserCard user={this.state.user}/>
          <h2>Followers:</h2>
          <div className='followersCard'>
          {
            this.state.followers.map(user => {
              return <FollowersCard user={user}/>
            })
          }
          </div>
        </div>
      )
  }
}

export default App;


