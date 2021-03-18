const axios = require('axios')
const qs = require('querystring')

const validate = require('../../validators/example.validator')
const TenantID = process.env.TenantID
const ClientID = process.env.ClientID
const ClientSecret = process.env.ClientSecret


/**
 * @class - AccessToken class containing all the controllers
 */

class AccessToken {
    /**
     * @function - Get all the registered examples from the db
     *
     * @param - Express.req , Express.res
     *
     * @returns - List of registered examples
     */



    async createAccessToken(req, res) {
        // throw new Error("could not create a example")

        let URL = `https://login.microsoftonline.com/${TenantID}/oauth2/v2.0/token`

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        let body = qs.stringify({
            "grant_type": "client_credentials",
            "client_id": ClientID,
            "client_secret": ClientSecret,
            "scope": "https://graph.microsoft.com/.default"
        })
        try {
            let a = await axios.post(URL, body, { headers: headers })
            let { data, status } = a
            res.status(status).send({ status: true, "access_token": data.access_token });
        } catch (error) {
            console.log(error);
            let { data, status } = error.response
            res.status(status).send(data);
        }


    }




}

module.exports = AccessToken;
