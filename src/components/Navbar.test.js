import { render, cleanup } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./Navbar"


afterEach(() => {
  cleanup(); 
})

 describe(Navbar, () => {
  it("displays a logged in user's username if a user's data is passed in to this component", () => {
    const { getByTestId } = render( 
    <BrowserRouter>
      <Navbar currentUser="BenJerry55"/>
    </BrowserRouter>
    )
    const currentUserValue = getByTestId("current-user").textContent
    expect(currentUserValue).toEqual("BenJerry55")
  })
})

describe(Navbar, () => { 
  it("displays a link to the weather charts page if there is an active user", () => {
    // here, the passed in currentUser is a truthy string 
    const { getByTestId } = render(
    <BrowserRouter>
      <Navbar currentUser="BenJerry56" />
    </BrowserRouter>
    ); 
    const weatherChartsLink = getByTestId('weather-charts-link'); 
    expect(weatherChartsLink).toBeTruthy() // test whether the field appears in the DOM 
  })
})