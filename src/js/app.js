class GulpTest {
    constructor(user = 'there') {
        this.message = 'Hi ' + user + ', Thanks for using Gulp SASS Babel!';
        this.hi();
    }

    hi() {
        console.log(this.message);
    }

    updateText(message) {
        $('h1').html(message);
    }
}

let gulpTest = new GulpTest();
gulpTest.updateText(gulpTest.message);