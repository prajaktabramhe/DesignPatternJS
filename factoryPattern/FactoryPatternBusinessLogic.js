class Language
 {
    constructor(name) 
    {
        this.name = name
        console.log("Language name " + this.name);
    }
    
}
class Python extends Language {
    constructor(name, founderName) {
        super(name)
        this.founderName = founderName
        console.log(" and Devloped by " + this.founderName);
    }
}
class Java extends Language {
    constructor(name, founderName) {
        super(name)
        this.founderName = founderName
        console.log(" and Devloped by " + this.founderName);
    }
}
class LanguagesFactory {
    create(name, type, founderName) {
        switch (type) {
            case 1:
                return new Python(name, founderName);
                
            case 2:
                return new Java(name, founderName);
                
            default:
                console.log("Invalid Choice");
                return null;
        }
    }

}

module.exports = new LanguagesFactory;