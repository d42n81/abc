import "@axe-devtools/cypress";
describe("abc home", () => {
    beforeEach(() => {
        cy.visit("http://abcdcomputech.dequecloud.com/");
      });

      it('Should have an accessible homepage', () => {

        // cy.location('href', {timeout: 6000}).should('eq', ''+Cypress.config().baseUrl + "/");
  
        cy.setAxeRuleset('wcag2.1').axeAnalyze({name: "home"});
        cy.getAxeResults().then(async results => {
          const resultsDir = './a11y-results/'
          await cy.writeFile(`${resultsDir}home.json`, results);
          await cy.task('reportAsHTML', { resultsDir });
          await cy.task('reportAsCSV', { resultsDir });
          await cy.task('reportAsJunit', {resultsDir});
          // expect(results.findings.violations).to.equal([]);
          cy.readFile(`${resultsDir}home.json`).then((data) =>{
            expect(data.findings.violations.length).to.equal(0);
          });
        })
      });
});