//Notary class Data Structure 
class Notary {
    constructor(data) {
            this.hash = "",
            this.height = 0,
            this.body = data,
            this.time = 0,
            this.previousNotaryHash = ""
    }
}
module.exports = new Notary('data entered')