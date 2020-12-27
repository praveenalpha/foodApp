function showDemo(req,res) {
    res.render("demo.pug");
}

function signup(req,res) {
    res.render("signup.pug");
}

function login(req,res) {
    res.render("login.pug");
}

module.exports.showDemo = showDemo;
module.exports.signup = signup;
module.exports.login = login;