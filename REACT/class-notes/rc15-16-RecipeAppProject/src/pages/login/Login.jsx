import React, { useContext } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { setUser, setPass, user, pass } = useContext(RecipeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", user);
    localStorage.setItem("pass", pass);
    navigate("/home");
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="username"
            required
          />
          <StyledInput
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
