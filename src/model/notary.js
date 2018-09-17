//Notary class Data Structure
const star = './Star';

class Notary {
    constructor(star) {
            this.hash = "",
            this.height = 0,
            this.body = star,
            this.time = 0,
            this.previousNotaryHash = ""
    }
}
module.exports = new Notary(star);