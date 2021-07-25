let http = require("http");
let urlDetails = require("url");
let loginPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="aboutUs">About Us Page</a>
    <a href="contactUs">Contact Us Page</a>
    <hr/>
    <form action="checkLogin" method="get">
        <h2>Login Page</h2>
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
</body>
</html>
`
let homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Home Page</h2>
</body>
</html>
`
let server = http.createServer((req,res)=> {
    let urlPath = urlDetails.parse(req.url,true);
    if(urlPath.path != '/favicon.ico'){
        if(urlPath.path=="/"){
                res.write(loginPage);
        }else if(urlPath.path=="/aboutUs"){
                res.write("About Us Page")
        }else if(urlPath.path=="/contactUs"){
            res.write("Contact Us Page")
        }else if(urlPath.pathname=="/login"){
            let login = urlPath.query;
            res.write("Wecome user "+login.name)
        }else if(urlPath.pathname="/checkLogin"){
            let login = urlPath.query;
            if(login.user=="Raj" && login.pass=="123"){
                res.setHeader("content-type","text/html");
                res.write("<h2>successfully login!</h2>")
                res.write(homePage);
            }   else {
                res.write("failure try once again!")
            } 
        }
        else {
            res.write("Not Found Page")
        }

    }
    res.end();
});

server.listen(9999);
console.log("Server running on port number 9999")