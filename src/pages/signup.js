import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    //  do firebase stuff
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Input 
        placeholder='First Name'
        value={firstName}
        />
        <Form.Base onSubmit={handleSignUp} method='POST'></Form.Base>
      </Form>
    </HeaderContainer>
  );
}
