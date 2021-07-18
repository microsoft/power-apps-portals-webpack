import "react-phone-number-input/style.css";
import "react";
import ReactDom from "react-dom";
import PhoneInput from "react-phone-number-input";
import domready from "domready";

domready(() => {
  const defaultInput = document.getElementById("ce_phonenumber");
  defaultInput.style.display = "none";
  const phoneContainer = defaultInput.parentElement;
  phoneContainer.parentElement.appendChild(defaultInput);
  ReactDom.render(
    <PhoneInput
      onChange={(value) => (defaultInput.value = value)}
      value={defaultInput.value}
      defaultCountry="US"
    />,
    phoneContainer
  );
});
