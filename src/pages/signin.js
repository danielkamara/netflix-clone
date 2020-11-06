import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const isInValid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
      event.preventDefault();

    //   firebase work here!!! 
  }

  // check if form input elements are valid

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onchange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onchange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type='submit'>
                Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix?<Form.Link to='/signup'>Sign up now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
