import React, { useState } from "react";
import { FormTexts } from "./MapAndFormStyled";
import { ContentRow, MapAndFormContainer, MapImage,FormContainer } from "./MapAndFormStyled";
import "./Form.css";
const MapAndForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <MapAndFormContainer>
      <ContentRow>
        <MapImage src="./assets/Mask Group 60@2x.png" />

        {/* Form */}
        <FormTexts>
          <h4>ENQUIRY</h4>
        </FormTexts>
        <FormContainer>
          <form>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              name="firstName"
              required
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              name="lastName"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </ContentRow>
    </MapAndFormContainer>
  );
};

export default MapAndForm;
