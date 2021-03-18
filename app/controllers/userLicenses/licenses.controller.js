const axios = require('axios')
const qs = require('querystring')

// const validate = require('../../validators/member/projectMemeber.validator')
// const TenantID = process.env.TenantID
// const ClientID = process.env.ClientID
// const ClientSecret = process.env.ClientSecret

/**
 * @class - userLicenses class containing all the controllers
 */

class userLicenses {
    /**
     * @function - Get all user licenses 
     *
     * @param - Express.req , Express.res
     *
     * @returns - List of users with licneses
     * 
     * @author - Kunal Roy
     * 
     * @date - 12/12/2020
     */

    async getUserLicenses(req, res) {
        console.log("Entered into getUserLicenses");

        // let URL_Users = `https://graph.microsoft.com/v1.0/users`
        // let URL_SubsSkuid = `https://graph.microsoft.com/v1.0/subscribedSkus`;

        //Custom Endpoint to fetch filtered data 
        let URL_Users = `https://graph.microsoft.com/beta/users?$select=userPrincipalName,displayName,assignedLicenses,assignedPlans`
        let URL_SubsSkuid = `https://graph.microsoft.com/beta/subscribedSkus?$select=SKUPartNumber,skuId`

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.header("access_token")}`
        };

        //Body Is not reguired
        // let body = {
        //     "@odata.type": "#microsoft.graph.aadUserConversationMember",
        //     "roles": req.body.ownerRole ? ["owner"] : [],
        //     "user@odata.bind": `https://graph.microsoft.com/v1.0/users/${req.body.userId}`
        // }

        try {
            var userLicenseDetails = [];
            let subsSkuids = await axios.get(URL_SubsSkuid, { headers: headers });
            console.log(subsSkuids);
            let { data, status} = subsSkuids;
            let subSkuid = data.value;
            if (status) {
                let userDetails = await axios.get(URL_Users, { headers: headers });
                let { data, status } = userDetails;
                let value = data.value
                for (const val of value) {
                    var temp = {};
                    temp.users = [];
                    temp.users.push(val);
                    if (val.assignedLicenses.length > 0) {
                        let assignlicenses = val.assignedLicenses;
                        for (const assignedlincenses of assignlicenses) {
                            var temp2 = [];
                            for (const val2 of subSkuid) {
                                console.log(val2.skuId)
                                if (assignedlincenses.skuId == val2.skuId) {
                                    console.log("SUKID:", val2.skuId);
                                    console.log(val2.skuId);
                                    temp2.push(val2.skuPartNumber);
                                }
                            }
                            temp.subscriptions = [];
                            temp.subscriptions.push(temp2);
                        }
                    }
                    userLicenseDetails.push(temp);
                }
                res.status(status).send({
                    'status': true,
                    'userLicenseDetails': userLicenseDetails
                })
            }
        } catch (error) {
            console.log(error);
            // let { data, status } = error.response
            res.send(error);
        }
    }

    /**
     * @function - To assign license to particular to user
     *
     * @param - Express.req , Express.res
     *
     * @returns - users with assigned licneses
     * 
     * @author - Kunal Roy
     * 
     * @date - 14/12/2020
     */
    async assignUserLicense(req,res){
        let URL= `https://graph.microsoft.com/v1.0/users/${req.body.userPrincipalName}/assignLicense`;

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.header("access_token")}`
        };
        let body = {
                "addLicenses": [
                  {
                    "disabledPlans": [ ],
                    "skuId": `${req.body.skuId}`
                  }
                ],
                "removeLicenses": []
        }

        try {
            let a = await axios.post(URL, body, { headers: headers });
            let { data, status } = a;

            // let { data, status } = a
            res.status(status).send({
                status: true,
                data: data

            });

            
        } catch (error) {
            console.log(error);
            
        }

    }
     /**
     * @function - Get to 
     *
     * @param - Express.req , Express.res
     *
     * @returns - users with assigned licneses
     * 
     * @author - Kunal Roy
     * 
     * @date - 14/12/2020
     */
    async revokeUserLicense(req,res){
        let URL= `https://graph.microsoft.com/v1.0/users/${req.body.userPrincipalName}/assignLicense`;

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.header("access_token")}`
        };
        let body = {
                "addLicenses": [
                  {
                    "disabledPlans": [ ],
                    "skuId": ""
                  }
                ],
                "removeLicenses": [`${req.body.skuId}`]
        }

        try {
            let a = await axios.post(URL, body, { headers: headers });
            let { data, status } = a;

            // let { data, status } = a
            res.status(status).send({
                status: true,
                data: data

            });  
        } catch (error) {
            console.log(error);
            
        }

    }
}

module.exports = userLicenses;