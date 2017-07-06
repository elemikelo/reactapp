import React, { Component } from 'react'
import 'normalize-css'
import { HashRouter, Match } from 'react-router'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
      // user: {
      //   photoURL: 'https://pbs.twimg.com/profile_images/837798884999114756/b8NM7dto_400x400.jpg',
      //   displayName: 'Luis Miguel Alvarez',
      //   email: 'lm.alvarezmaidero@gmail.com',
      //   onOpenText: false,
      //   location: 'Madrid, España'
      // }
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
  }


  handleOnAuth() {
    console.log('Auth')
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header />

          <Match exactly pattern='/' render={() => {
            if (this.state.user) {
              return (
                <Main user={this.state.user} />
              )
            } else {
              return (
                <Login onAuth={this.handleOnAuth} />
              )
            }
          }} />

          <Match pattern='/profile' render={() => {
            return (
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email.split('@')[0]}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAddress={this.state.user.email}
              />
            )
          }} />

          <Match pattern='/user/:username' render={({ params }) => {
            return (
              <Profile
                username={params.username}
                displayName={params.username}
              />
            )
          }} />
        </div>
      </HashRouter>
    )
  }
}

export default App