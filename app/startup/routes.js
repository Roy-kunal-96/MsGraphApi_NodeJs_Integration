const express = require("express")
const helmet = require('helmet')
const morgan = require('morgan')
// const corsOption = require('../middlewares/corsoptions')
var cors = require('cors');
const error = require('../middlewares/error.middleware')
require('express-async-errors')
const path = require('path')

const _appointment_folder = "dasboard";



module.exports = function (server) {

    /**
     * Middlewares
     */
    // server.use(require("../middlewares/path.middleware"));
    server.use(morgan('tiny'))
    server.use(express.json({ limit: "50mb" }))
    server.use(express.urlencoded({ limit: "50mb", extended: true }))


    // server.use(helmet())

    // //hides powered by express and to throw them of we can use { setTo: 'PHP 4.2.0' } in params 
    // server.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))

    // // for clickjacking attacks .It restricts who can put your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.
    // server.use(helmet.frameguard({ action: 'deny' }))

    // // Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
    // server.use(helmet.xssFilter({}))

    // // Avoid Inferring the Response MIME Type
    // server.use(helmet.noSniff())

    // // Prevent IE from Opening Untrusted HTML
    // server.use(helmet.ieNoOpen())

    // // Ask Browsers to Access Your Site via HTTPS Only
    // let ninetyDaysInMilliseconds = 90 * 24 * 60 * 60 * 1000
    // server.use(helmet.hsts({ maxAge: ninetyDaysInMilliseconds, force: true }))

    // // Disable DNS Prefetching
    // server.use(helmet.dnsPrefetchControl({
    //     allow: true,
    // }))

    // Disable Client-Side Caching
    // server.use(helmet.noCache())

    // 😕   verify from NEERAJ SIR
    // Set a Content Security Policy
    // server.use(helmet.contentSecurityPolicy({
    //     directives: {
    //         defaultSrc: ["'self'"],
    //         scriptSrc: ["'self'", "trusted-cdn.com"]
    //     }
    // }))


    // 😕   verify from NEERAJ SIR
    // header which helps mitigate misissued SSL certificates
    // server.use(helmet.expectCt({
    //     maxAge: 86400,
    // }))


    server.use(cors())

    // var whitelist = ['http://example1.com', 'http://example2.com']
    // var corsOptions = {
    //   origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //       callback(null, true)
    //     } else {
    //       callback(new Error('Not allowed by CORS'))
    //     }
    //   }
    // }

    // server.use(cors(corsOption))
    /**
     * Server Routes here
     */
    server.use("/api/v1/example", require("../routes/example/example.routes"));
    server.use("/api/v1/accessToken", require("../routes/accessToken/accessToken.routes"));
    server.use("/api/v1/member/projectMember", require("../routes/member/projectMember.routes"));
    server.use("/api/v1/project", require("../routes/project/project.routes"));
    server.use("/api/v1/userLicences",require("../routes/licenses/licenses.routes"));
    server.use("/api/v1/userAnalytics",require("../routes/analytics/userAnalytics.routes"));
    


    // ---- SERVE STATIC FILES ---- //
    server.get("*.*", express.static(_appointment_folder, { maxAge: "1y" }));

    // ---- SERVE APLICATION PATHS ---- //
    server.all("*", function (req, res) {
        res.status(200).sendFile(`/`, { root: _appointment_folder });
    });

    server.use(error)

}