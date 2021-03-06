import React, { PropTypes, Component } from 'react'
import styles from './profile.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

class Profile extends Component {

  render() {
    return (
      <div className={styles.root}>
        <img className={styles.avatar} src={this.props.picture} alt="" />
        <span className={styles.name}>{this.props.displayName}</span>
        <ul className={styles.data}>
          <li>
            <span className='fa fa-user'></span> {this.props.username}
          </li>
          <li>
            <span className='fa fa-envelope'></span> {this.props.emailAddress}
          </li>
          <li>
            <span className='fa fa-map-marker'></span> {this.props.location}
          </li>
        </ul>
      </div>
    )
  }
}

Profile.propTypes = propTypes

export default Profile