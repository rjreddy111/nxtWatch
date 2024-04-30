import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'
import {
  NavbarContainer,
  LogoImage,
  ProfileImage,
  ActionMainContainer,
  ButtonTheme,
  LogoutButton,
  WarningDisplay,
  WarningCancelButtons,
  ButtonsContainer,
  WarningConfirmButtons,
  LogoImageContainer,
  LogoutButtonsm,
  NavbarmainContainer,
} from './styledComponents'

const Navbar = props => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onCLickThemeChanage = () => {
        toggleTheme()
      }

      const onClickLogo = () => {
        const {history} = props
        history.replace('/')
      }
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      return (
        <NavbarContainer bgColor={bgColor}>
          <LogoImageContainer to="/" color={color}>
            <LogoImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoImageContainer>
          <ActionMainContainer>
            <ButtonTheme onClick={onCLickThemeChanage} data-testid="theme">
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ButtonTheme>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {close => (
                <WarningDisplay bgColor={bgColor} color={color}>
                  <p>Are you sure, you want to logout?</p>
                  <ButtonsContainer>
                    <WarningCancelButtons
                      type="button"
                      data-testid="closeButton"
                      color={color}
                      onClick={() => close()}
                    >
                      Cancel
                    </WarningCancelButtons>
                    <WarningConfirmButtons
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </WarningConfirmButtons>
                  </ButtonsContainer>
                </WarningDisplay>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButtonsm type="button">
                  <FiLogOut />
                </LogoutButtonsm>
              }
            >
              {close => (
                <WarningDisplay bgColor={bgColor} color={color}>
                  <p>Are you sure, you want to logout?</p>
                  <ButtonsContainer>
                    <WarningCancelButtons
                      type="button"
                      data-testid="closeButton"
                      color={color}
                      onClick={() => close()}
                    >
                      Cancel
                    </WarningCancelButtons>
                    <WarningConfirmButtons
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </WarningConfirmButtons>
                  </ButtonsContainer>
                </WarningDisplay>
              )}
            </Popup>
          </ActionMainContainer>
        </NavbarContainer>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default withRouter(Navbar)
