import React from 'react'
import * as nookies from 'nookies'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

// Components
import { Navbar } from 'components/Navbar'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'

// Icons

import iconKey from 'static/assets/icons/ui/key.svg'
import iconUser from 'static/assets/icons/ui/user.svg'
import iconMail from 'static/assets/icons/ui/mail.svg'
import iconGoogle from 'static/assets/icons/ui/google-color.svg'
import iconFacebook from 'static/assets/icons/ui/facebook-color.svg'

// Utils

import { opacity, transition, spacing, outline, colors } from 'utils/theme'

// Lib

import {
  buildAuthorizeURL,
  facebookLogin,
  googleLogin,
  databaseLogin,
} from 'lib/auth0'
import { redirect } from 'lib/redirect'

// Styles

const AuthCol = styled(FlexCol)`
  display: block;
  position: relative;
  max-width: 512px;
  margin: ${spacing.xlarge} auto;
  padding: ${spacing.medium};
  ${outline()};
  box-shadow: ${colors.shadowActive};
  overflow: hidden;
`
const AuthHeaderCol = styled(FlexCol)``
const AuthLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const AuthButton = styled(Button)`
  width: 100%;
`
const activeAuthRowStyles = () => `
  opacity: 1;
  background: ${colors.grayLightest};
`
const AuthRow = styled(FlexRow)`
  height: 50px;
  padding: ${spacing.regular};
  margin-top: ${spacing.regular};
  ${outline()};
  opacity: ${opacity};
  transition: ${transition};
  cursor: pointer;
  box-sizing: border-box;
  ${props => (props.active ? activeAuthRowStyles() : null)};
  &:hover {
    ${activeAuthRowStyles()};
  }
`
const SocialText = styled(Text)`
  margin: 3px 0 0;
`
const FacebookText = styled(SocialText)`
  color: #3b5998;
`
const GoogleText = styled(SocialText)`
  color: #4285f4;
`
const SocialIcon = styled(Icon)`
  margin-right: ${spacing.regular};
`
const AuthForm = styled.form`
  margin-top: ${spacing.medium};
`

// Auth

class Auth extends React.Component {
  state = {
    showSignUp: false,
    showLogin: false,
    email: '',
    password: '',
    rePassword: '',
  }

  static async getInitialProps(ctx) {
    const token = nookies.parseCookies(ctx).token
    if (token) {
      return redirect(ctx, '/')
    } else {
      // return redirect(ctx, buildAuthorizeURL({ nonce: 'homeroom' }))
    }
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    })
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
    })
  }

  handleRePasswordChange = e => {
    this.setState({
      rePassword: e.target.value,
    })
  }

  handleDatabaseLogin = e => {
    e.preventDefault()
    const { email, password, rePassword } = this.state
    if (
      this.state.showLogin ||
      (this.state.showSignUp && password === rePassword)
    ) {
      databaseLogin({
        email,
        password,
      })
    }
  }

  toggleSignUp = () => {
    this.setState({
      showLogin: false,
      showSignUp: !this.state.showSignUp,
    })
  }

  toggleLogin = () => {
    this.setState({
      showSignUp: false,
      showLogin: !this.state.showLogin,
    })
  }

  getHeight = () => {
    if (this.state.showSignUp) {
      return 702
    } else if (this.state.showLogin) {
      return 617
    } else {
      return 381
    }
  }

  render() {
    return (
      <>
        <Navbar transparent />
        <Motion
          style={{
            height: spring(this.getHeight()),
            opacity: spring(
              this.state.showSignUp || this.state.showLogin ? 1 : 0,
            ),
          }}
        >
          {style => (
            <AuthCol style={{ height: `${style.height}px` }}>
              <AuthHeaderCol>
                <Header>Welcome to Homeroom!</Header>
                <Text weight="bold" color="gray">
                  Sign up or login to continue.
                </Text>
              </AuthHeaderCol>

              <AuthRow onClick={googleLogin}>
                <SocialIcon src={iconGoogle} />
                <GoogleText weight="bold">Continue with Google</GoogleText>
              </AuthRow>

              <AuthRow onClick={facebookLogin}>
                <SocialIcon src={iconFacebook} />
                <FacebookText weight="bold">
                  Continue with Facebook
                </FacebookText>
              </AuthRow>

              <AuthRow
                active={this.state.showSignUp}
                onClick={this.toggleSignUp}
              >
                <SocialIcon src={iconMail} />
                <SocialText weight="bold">Sign up with Email</SocialText>
              </AuthRow>

              <AuthRow active={this.state.showLogin} onClick={this.toggleLogin}>
                <SocialIcon src={iconUser} />
                <SocialText weight="bold">Login with Email</SocialText>
              </AuthRow>

              <AuthForm
                style={{ opacity: style.opacity }}
                onSubmit={this.handleDatabaseLogin}
              >
                <AuthLabel>
                  Email
                  <Input
                    required
                    autocomplete="email"
                    type="text"
                    icon={iconMail}
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </AuthLabel>
                <AuthLabel>
                  Password
                  <Input
                    required
                    type="password"
                    autocomplete="new-password"
                    icon={iconKey}
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </AuthLabel>
                {this.state.showSignUp && (
                  <AuthLabel>
                    Re-enter Password
                    <Input
                      required
                      type="password"
                      autocomplete="new-password"
                      icon={iconKey}
                      value={this.state.rePassword}
                      onChange={this.handleRePasswordChange}
                    />
                  </AuthLabel>
                )}
                <AuthButton type="submit" color="primary">
                  Continue
                </AuthButton>
              </AuthForm>
            </AuthCol>
          )}
        </Motion>
      </>
    )
  }
}

export default Auth
