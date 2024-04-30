import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetailsComponent from './components/VideoDetailsComponent'
import ProtectedComponent from './components/ProtectedComponent'
import SavedVideos from './components/SavedVideos'
import ThemeAndRequiredContext from './context/ThemeAndRequiredContext'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const findVideo = savedVideos.findIndex(
      eachVideo => eachVideo.id === video.id,
    )
    if (findVideo === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    console.log(savedVideos.length)
    return (
      <ThemeAndRequiredContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          changeTab: this.changeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedComponent exact path="/" component={Home} />
          <ProtectedComponent
            exact
            path="/videos/:id"
            component={VideoDetailsComponent}
          />

          <ProtectedComponent exact path="/trending" component={Trending} />
          <ProtectedComponent exact path="/gaming" component={Gaming} />
          <ProtectedComponent
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
          <ProtectedComponent component={NotFound} />
        </Switch>
      </ThemeAndRequiredContext.Provider>
    )
  }
}

export default App
