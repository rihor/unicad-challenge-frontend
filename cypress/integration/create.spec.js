// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe("Create delivery page", () => {
  it("create delivery", () => {
    cy.server()
    cy.route({
      method: "POST",
      url: "/deliveries",
      status: 200,
      response: {
        body: {
          id: "55eae56e-08f9-4188-a5d2-2b1dc100ab21",
          client_name: "Matrim",
          start: "Bahia",
          destination: "Ceará",
          date: "2020-12-26T13:15:37.627Z",
        },
      },
    }).as("createDelivery")

    cy.visit("/create")

    cy.get("input[name=client_name]").type("Test user")
    cy.get("input[name=start]").type("Rio de Janeiro")
    cy.get("input[name=destination]").type("São Paulo")
    cy.get("input[name=date]")
      .click()
      .then((input) => {
        input[0].dispatchEvent(new Event("input", { bubbles: true }))
        input.val("2020-12-24T20:00")
      })
      .click()

    cy.get("[data-test=form-button]").click()
    cy.wait("@createDelivery", { timeout: 15000 })
  })
})
