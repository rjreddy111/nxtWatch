import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {ShowErrorMsg} from './styledComponents'

import './index.css'

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    showError: false,
    errMsg: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {userName} = this.state
    return (
      <div>
        <label className="label" htmlFor="username-id">
          USERNAME
        </label>
        <input
          id="username-id"
          value={userName}
          type="text"
          className="userInput"
          onChange={this.onChangeUserName}
        />
      </div>
    )
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <div className="each-input">
        <label className="label" htmlFor="password-id">
          PASSWORD
        </label>
        <input
          className="userInput"
          value={password}
          type={inputType}
          id="password-id"
          onChange={this.onChangePassword}
        />
        <div className="each-input">
          <input
            type="checkbox"
            id="checkboxId"
            onChange={this.onShowPassword}
          />
          <label htmlFor="checkboxId" className="text-color">
            Show Password
          </label>
        </div>
      </div>
    )
  }

  onSubmitFailure = error => {
    this.setState({showError: true, errMsg: error})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userName, password, showError, errMsg} = this.state
    console.log(userName)
    console.log(password)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-login-page">
        <form className="login-box-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="nxt-logo"
            alt="nxt watch logo"
          />
          {this.renderUserName()}
          {this.renderPassword()}

          <button className="button" type="submit">
            Login
          </button>
          {showError && <ShowErrorMsg>*{errMsg}</ShowErrorMsg>}
        </form>
      </div>
    )
  }
}

export default LoginPage
