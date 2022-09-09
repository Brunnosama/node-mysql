class CharactersController {
    //static significa que é um método estático, não precisa criar uma nova isntância da classe através do 'new' (é chamado sem instância)
    static async getAll(req, res) {
        return res.send("Characters Class Controller");
    }
    static soma(a, b) {
        let soma = a + b;
        return soma;
    }
};

module.exports = CharactersController;