const axios = require('axios')
const qs = require('querystring')

const validate = require('../../validators/member/projectMemeber.validator')
const TenantID = process.env.TenantID
const ClientID = process.env.ClientID
const ClientSecret = process.env.ClientSecret


/**
 * @class - projectMembers class containing all the controllers
 */

class projectMembers {
    /**
     * @function - Get all the registered examples from the db
     *
     * @param - Express.req , Express.res
     *
     * @returns - List of registered examples
     */



    async createProjectMembers(req, res) {
        // throw new Error("could not create a example")
        let { error } = validate.validateProjectMember(req.body)
        if (error) {
            return res.status(400).send({
                message: "invalid body",
                result: error
            })
        }

        let URL = `https://graph.microsoft.com/v1.0/teams/${req.body.groupId}/members`
        // console.log(req.header("access_token"));

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.header("access_token")}`
        };
        let body = {
            "@odata.type": "#microsoft.graph.aadUserConversationMember",
            "roles": req.body.ownerRole ? ["owner"] : [],
            "user@odata.bind": `https://graph.microsoft.com/v1.0/users/${req.body.userId}`
        }
        try {
            let a = await axios.post(URL, body, { headers: headers })
            // console.log(a);
            let { data, status } = a
            res.status(status).send({
                status: true,
                message: `${data.displayName} is added`,
                displayName: data.displayName,
                userId: data.userId,
                email: data.email
            });
        } catch (error) {
            console.log(error);
            let { data, status } = error.response
            res.status(status).send(data);
        }


    }
    async getprojectMembers(req, res) {
        // throw new Error("could not create a example")
        let teamId = req.params.teamId
        console.log(teamId);
        // return 0

        let URL = `https://graph.microsoft.com/v1.0/groups/${teamId}/members`

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.access_token}`
        };

        try {
            let a = await axios.get(URL, { headers: headers })
            let { data, status } = a
            let value = data.value
            // console.log(value, "🔥 ");
            value = value.map(x => {

                let isGuest = x.userPrincipalName.toString().includes("#EXT#@")
                let obj = {
                    id: x.id,
                    displayName: x.displayName,
                    givenName: x.givenName,
                    email: x.mail,
                    surname: x.surname,
                    isGuest: isGuest
                }
                return obj
            })
            res.status(status).send({ status: true, members: value });
        } catch (error) {
            console.log(error);
            let { data, status } = error.response
            res.status(status).send(data);
        }


    }
    async RemoveprojectMembers(req, res) {
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

module.exports = projectMembers;
