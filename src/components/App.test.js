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

    describe("when creating a note", () => {
        let testNote = "test note"

        beforeEach(() => {
            app.find("FormControl").simulate("change", {
                target: {
                    value: testNote
                }
            })
        })

        it("updates the text in state", () => {
            expect(app.state().text).toEqual(testNote)
        })

        describe("when submitting a new note", () => {
            beforeEach(() => {
                app.find(".btn")
                    .at(0)
                    .simulate("click")
            })

            it("adds the new note to state", () => {
                expect(app.state().notes[0].text).toEqual(testNote)
            })

            describe("when clicking the clear button after saving", () => {
                beforeEach(() => {
                    app.find(".btn")
                        .at(1)
                        .simulate("click")
                })

                it("clears the notes in state", () => {
                    // console.log(app.state().notes)
                    expect(app.state().notes.length).toEqual(0)
                })
            })
        })
    })
})
