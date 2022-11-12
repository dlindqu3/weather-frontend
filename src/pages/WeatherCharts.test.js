import { render, cleanup } from "@testing-library/react"
import WeatherCharts from "./WeatherCharts"


afterEach(() => {
  cleanup(); 
})

describe("test render of input field with data-testid of locationInput", () => {
  // could use two keywords: "it" or "test"
  // "it" -- describing an event within the component 
  it("rendered input field", () => {
    const { getByTestId } = render(<WeatherCharts />); 
    const location_input = getByTestId('locationInput'); 
    expect(location_input).toBeTruthy() // test whether the field appears in the DOM 
  })
})