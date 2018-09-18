//1. and 2. speaker constructor function 
function Speaker(options) {
    this.givenName = options.givenName;
    this.surname = options.surname;
    this.email = options.email;
    this.biography = options.biography;
    //3. "isactive" property
    this.isActive = options.isActive || true;
    this.inactiveDate = null;
}

//4. prototype method "getbiography"
Speaker.prototype.getBiography = function () {
    return this.givenName + "" + this.surname;
}


//5. prototype method "markinactive"
Speaker.prototype.markInactive = function (date) {
    this.inactiveDate = date;
    this.isActive = false;
}

//6. keynote and workshop speaker constructors
function KeynoteSpeaker(options) {
        Speaker.call(this, options)
        this.website = []
        this.keynoteTopics = []
        this.breakouts = []
    }

KeynoteSpeaker.prototype = Object.create(Speaker.prototype)
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker

function WorkshopSpeaker(options) {
    Speaker.call(this,options)
    this.workshopTopics = []
}

WorkshopSpeaker.prototype = Object.create(Speaker.prototype)
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker


const McKenzie = new Speaker ({
    givenName: "John",
    surname: "Smith",
    email: "jsmith@fakemail.com",
    biography: "Blah blah blah."
})
const Morrow = new KeynoteSpeaker ({
    givenName: "Bob",
    surname: "Robertson",
    email: "brobertson@fakemail.com",
    biography: "Blah blah blah.",
    website: "www.brobertson.com",
    keynoteTopics: ["Topic 1", "Topic 2", "Topic 4", "Topic 'What Happened to Topic 3?"],
    breakouts: ["breakout 1", "breakout 2", "breakout 3"]
})
const Hoelzer = new WorkshopSpeaker ({
    givenName: "Sam",
    surname: "Johnson",
    email: "sjohnson@fakemail.com",
    biography: "Blah blah blah.",
    workshopTopics: ["Work It", "Working Hard", "Hardly Working"]
})

console.log(McKenzie)
console.log(Morrow)
console.log(Hoelzer)