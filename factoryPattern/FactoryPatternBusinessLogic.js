
class Javascript {
    constructor(name) {
        this.name = name
        this.type = "Javascript"
    }
}
class Python {
    constructor(name) {
        this.name = name;
        this.type = "Python"
    }
}
class Java {
    constructor(name) {
        this.name = name;
        this.type = "Java"
    }
}
class LanguagesFactory {
    create(name, type) {
        switch (type) {
            case 1:
                return new Javascript(name);
                break;
            case 2:
                return new Python(name);
                break;
            case 3:
                return new Java(name);
                break;
            default:
                console.log("I don't have a knowledge of any Language");
                return null;
        }
    }

}

module.exports = new LanguagesFactory;