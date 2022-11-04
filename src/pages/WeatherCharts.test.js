import { render, cleanup, waitForElement } from "@testing-library/react"
// import axiosMock from 'axios'
import axios from 'axios'
jest.mock('axios')
import WeatherCharts from "./WeatherCharts"

describe("test render of input field with data-testid of locationInput", () => {
  // could use two keywords: "it" or "test"
  // "it" -- describing an event within the component 
  it("rendered input field", () => {
    const { getByTestId } = render(<WeatherCharts />); 
    const location_input = getByTestId('locationInput'); 
    expect(location_input).toBeTruthy() // test whether the field appears in the DOM 
  })
})

// describe("it calls locationIQ with axios and returns an error" , () => {

//   // ADD 
//   // renders an h4 
// })



// test that input field displays DONE 
// test nonsensical input string (has error handling)
// test that location query works correctly 
// test that dropdown select shows if you have a locsArr
// test that weather query works correctly

// spies and mocks -- dealing with side effects 