const charactersController = require("../controllers/CharactersController");
const expect = require("chai").expect;

//todo o escopo e tudo o que for relacionado ao teste estará vinculado ao describe
describe("testando a classe controller com os seus respectivos métodos. Mas atenção, 'x' biblioteca precisa ser instalada", () => {
    {/*é possível descrever cada parte do teste através do método it*/}
    it ("testando o método soma", () => {
        {/*'expect' é o que vc espera ou quer testar. O 'to' é o resultado esperado, e 'equal' é o que se quer comparar/conferir - no caso se é igual */}
        let a = 14
        let b = 50
        expect(charactersController.soma(a, b)).to.equal(64) 
    });
});