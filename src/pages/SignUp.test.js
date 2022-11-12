import { render, cleanup } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "./SignUp"

afterEach(() => {
  cleanup(); 
})

describe(SignUp, () => {
  it("displays a username input field", () => {
    const { getByTestId } = render( 
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
    )
    const usernameInputField = getByTestId("username-field")
    expect(usernameInputField).toBeTruthy() // test whether the field appears in the DOM 
  })
})

describe(SignUp, () => {
  it("displays a span with text 'Show password' if displayPassword is false", () => {
    const { getByTestId } = render( 
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
      )
    const displayPasswordText = getByTestId("show-password-span")
    expect(displayPasswordText).toBeTruthy() // test whether the field appears in the DOM 
  })
})

