import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'
import {
  LinkOptions,
  EachList,
  NavLinkContainer,
  ContactContainer,
  LogoImage,
  LogoContainer,
  ContactsQuotes,
  LinkContainer,
  HeadingContent,
  Navpage,
  NavLinkSmContainer,
  LinkOptionsSm,
  LinkContainerSm,
} from './styledComponents'

const NavigationComponent = () => (
  <ThemeAndRequiredContext>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const activeTabColor = isDarkTheme ? '#475569' : '#cbd5e1'

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }

      const onClickGaming = () => {
        changeTab('Gaming')
      }

      const onClickSaved = () => {
        changeTab('Saved')
      }

      return (
        <Navpage>
          <LinkContainer bgColor={bgColor} color={color}>
            <LinkOptions>
              <NavLinkContainer to="/" onClick={onClickHome} color={color}>
                <EachList
                  bgColor={activeTab === 'Home' ? activeTabColor : null}
                  color={activeTab === 'Home' ? color : null}
                >
                  <AiFillHome
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  Home
                </EachList>
              </NavLinkContainer>
              <NavLinkContainer to="/trending" onClick={onClickTrending}>
                <EachList
                  bgColor={activeTab === 'Trending' ? activeTabColor : null}
                  color={activeTab === 'Trending' ? color : null}
                >
                  <HiFire
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  Trending
                </EachList>
              </NavLinkContainer>
              <NavLinkContainer to="/gaming" onClick={onClickGaming}>
                <EachList
                  bgColor={activeTab === 'Gamaing' ? activeTabColor : null}
                  color={activeTab === 'Gaming' ? color : null}
                >
                  <SiYoutubegaming
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  Gaming
                </EachList>
              </NavLinkContainer>
              <NavLinkContainer to="/saved-videos" onClick={onClickSaved}>
                <EachList
                  bgColor={activeTab === 'Saved' ? activeTabColor : null}
                  color={activeTab === 'Saved' ? color : null}
                >
                  <CgPlayListAdd
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />
                  Saved Videos
                </EachList>
              </NavLinkContainer>
            </LinkOptions>

            <ContactContainer color={color}>
              <HeadingContent>CONTACT US</HeadingContent>
              <LogoContainer>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LogoContainer>
              <ContactsQuotes>
                Enjoy! Now to see your channels and recommendations!
              </ContactsQuotes>
            </ContactContainer>
          </LinkContainer>
          <LinkContainerSm bgColor={bgColor}>
            <LinkOptionsSm>
              <NavLinkSmContainer to="/" onClick={onClickHome} color={color}>
                <EachList
                  bgColor={activeTab === 'Home' ? activeTabColor : null}
                  color={activeTab === 'Home' ? color : null}
                >
                  <AiFillHome
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                </EachList>
              </NavLinkSmContainer>
              <NavLinkSmContainer to="/trending" onClick={onClickTrending}>
                <EachList
                  bgColor={activeTab === 'Trending' ? activeTabColor : null}
                  color={activeTab === 'Trending' ? color : null}
                >
                  <HiFire
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                </EachList>
              </NavLinkSmContainer>
              <NavLinkSmContainer to="/gaming" onClick={onClickGaming}>
                <EachList
                  bgColor={activeTab === 'Gamaing' ? activeTabColor : null}
                  color={activeTab === 'Gaming' ? color : null}
                >
                  <SiYoutubegaming
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                </EachList>
              </NavLinkSmContainer>
              <NavLinkSmContainer to="/saved-videos" onClick={onClickSaved}>
                <EachList
                  bgColor={activeTab === 'Saved' ? activeTabColor : null}
                  color={activeTab === 'Saved' ? color : null}
                >
                  <CgPlayListAdd
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />
                </EachList>
              </NavLinkSmContainer>
            </LinkOptionsSm>
          </LinkContainerSm>
        </Navpage>
      )
    }}
  </ThemeAndRequiredContext>
)

export default NavigationComponent
