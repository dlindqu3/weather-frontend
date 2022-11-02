import { render, cleanup, waitForElement } from "@testing-library/react"
import axiosMock from 'axios'
import WeatherCharts from "./WeatherCharts"

describe("test input with data-testid of locationInput", () => {
  // could use two keywords: "it" or "test"
  // "it" -- describing an event within the component 
  it("rendered input field", () => {
    const { getByTestId } = render(<WeatherCharts />); 
    const location_input = getByTestId('locationInput'); 
    expect(location_input).toBeTruthy() // test whether the field appears in the DOM 
  })
})


// test that input field displays 
// test that input changes state
// test that location query works correctly 
// test that dropdown select shows if you have a locsArr
// test that weather query works correctly