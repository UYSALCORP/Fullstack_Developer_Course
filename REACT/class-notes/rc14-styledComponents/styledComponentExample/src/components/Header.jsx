import React from "react";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import ButtonSSS, { DetailButton } from "./styles/ButonSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png"/>

        <div>
          <ButtonSSS yunus="red">Apply Courses</ButtonSSS>
          <ButtonSSS recep>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
          <h1> The IT Career of Your Dreams Starts Here </h1>

          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButtonSSS recep>Start Your New Career</ButtonSSS>
          <DetailButton>Details</DetailButton>
        </div>

        <ImageSSS src="./images/hero.jpg" alt=""/>
      </DisplaySSS>
    </div>
  );
};

export default Header;
