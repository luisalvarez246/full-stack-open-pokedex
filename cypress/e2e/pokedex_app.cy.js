/* eslint-disable no-undef */
describe('Pokedex', () =>
{
  it('front page can be opened', () =>
  {
    cy.visit('')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page shows the right content', () =>
  {
    cy.visit('')
    cy.contains('charmander').click()
    cy.contains('solar power')
  })
})