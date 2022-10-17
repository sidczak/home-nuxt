import Welcome from './Welcome.vue'

describe('<Welcome />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Welcome)
  })
})