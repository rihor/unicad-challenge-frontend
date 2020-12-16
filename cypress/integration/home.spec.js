// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

import deliveriesFixtures from "../fixtures/deliveries.json"

describe("Home page", () => {
  it("load no deliveries", () => {
    cy.intercept("GET", "/deliveries", []).as("getDeliveries")

    cy.visit("/")
    cy.wait("@getDeliveries", { timeout: 15000 })
    cy.get("[data-test=empty-list-display]").should("be.visible")
  })

  it("load deliveries", () => {
    cy.intercept("GET", "/deliveries", { fixture: "deliveries.json" }).as(
      "getDeliveries",
    )

    cy.visit("/")

    cy.wait("@getDeliveries", { timeout: 15000 })

    cy.get("[data-test=empty-list-display]").should("not.exist")
    cy.get(`[data-test=delivery-item-${deliveriesFixtures[0].id}]`)
      .should("be.visible")
      .click()

    cy.get("[data-test=selected-delivery-container]")
      .should("be.visible")
      .within(() => {
        cy.get("[data-test=unselect-delivery]").click()
      })

    cy.get("[data-test=fab-create-delivery]").click()
    cy.get("form").should("be.visible")
  })
})
