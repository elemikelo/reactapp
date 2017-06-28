import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/837798884999114756/b8NM7dto_400x400.jpg',
        displayName: 'Luis Miguel Alvarez',
        email: 'lm.alvarezmaidero@gmail.com',
        onOpenText: false
      }
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>

    )
  }
}

export default App