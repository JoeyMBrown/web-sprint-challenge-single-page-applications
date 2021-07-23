describe('Tests form for Error messages and successful submition', function() {

    beforeEach(() => { //Before each test run this.
        cy.visit('http://localhost:3000/pizza');
    });

    const nameInput = () => cy.get('input[name="name"]');
    const specialInstructions = () => cy.get('input[name="specialInstructions"')
    const threeCheese = () => cy.get('input[name="threeCheese"]')
    const onions = () => cy.get('input[name="onions"]')
    const grilledChicken = () => cy.get('input[name="grilledChicken"]')
    const size = () => cy.get('select')
    const submitBtn = () => cy.contains('Add to Order');

    it('sanity test ensure cypress is working', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('Tests that you can type into text inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('boopbeepbop');

        specialInstructions()
            .should('have.value', '')
            .type('testytestingtesterson');
    })

    it('Select multiple toppings', () => {
        threeCheese()
            .click()

        onions()
            .click()

        grilledChicken()
            .click()
    })

    it('Checks that form is submitted properly', () => {
        submitBtn()
                .should('be.disabled')

        nameInput()
            .should('have.value', '')
            .type('b')
            .clear()

        cy.contains('your name is required')

        nameInput()
            .type('atLeast2Characters')

        submitBtn()
            .should('be.disabled')

        size()
            .select('small')
            .select('--Select--')

        cy.contains('A size is required')

        size()
            .select('medium')

        submitBtn()
            .should('be.enabled')

        submitBtn()
            .click()
        
    })
})