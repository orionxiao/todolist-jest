import React from "react"
import { mount } from "enzyme"
import App from "./App"

describe("App Component", () => {
    let app = mount(<App />)

    it("renders the app title", () => {
        // console.log(app.debug())
        expect(app.find("h2").text()).toEqual("To-Do List")
    })

    it("renders the clear button", () => {
        expect(
            app
                .find(".btn")
                .at(1)
                .text()
        ).toEqual("Clear List")
    })

    describe("Form Component", () => {
        it("renders a Form component", () => {
            expect(app.find("Form").exists()).toBe(true)
        })

        it("renders a FormControl component", () => {
            expect(app.find("FormControl").exists()).toBe(true)
        })

        it("renders an add button", () => {
            expect(
                app
                    .find(".btn")
                    .at(0)
                    .text()
            ).toEqual("Add")
        })
    })
})
