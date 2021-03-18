const axios = require('axios')
const qs = require('querystring')


/**
 * @class - userLicenses class containing all the controllers
 */

class userAnalytics {

  /**
     * @function - Get all Active users Analytics 
     *
     * @param - Express.req , Express.res
     *
     * @returns - List of users with licneses
     * 
     * @author - Kunal Roy
     * 
     * @date - 12/12/2020
     */

        /*You can use the Microsoft 365 active users reports to find out how many
        product licenses are being used by individuals in your organization,
        and drill down for information about which users are using what products.
        These reports can help administrators identify underutilized products or
        users that might need additional training or information.*/

        async getActiveUserAnalytics(req, res) {
                console.log("Days:::",req.body.period);

                // let URL = `https://graph.microsoft.com/beta/users/${req.body.userPrincipalName}/analytics/activitystatistics`;
                // let URL =  `https://graph.microsoft.com/beta/me/analytics/activitystatistics`

                let URL = `https://graph.microsoft.com/beta/reports/getOffice365ActiveUserDetail(period='${req.body.period}')?$format=application/json`;

                // console.log(URL);

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }


        async getActiveUserCountAnalytics(req, res) {
                console.log("Days:::",req.body.period);

                // let URL = `https://graph.microsoft.com/beta/reports/getOffice365ServicesUserCounts(period='${req.body.period}'))?$format=application/json`;

                let URL = `https://graph.microsoft.com/beta/reports/getOffice365ActiveUserCounts(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //Get the count of users by activity type and service.
        async getServicesUserCountsAnalytics(req, res) {
                console.log("Days:::",req.body.period);

                let URL =  `https://graph.microsoft.com/beta/reports/getOffice365ServicesUserCounts(period='${req.body.period}')?$format=application/json`
                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        /*
        You can use the Groups activity reports to gain insights into the activity of Microsoft 365 groups in your 
        organization and see how many Microsoft 365 groups are being created and used.
        */
       
        //Get details about Microsoft 365 groups activity by group.

        async getGroupActivityAnalytics(req, res) {
                console.log("Days:::",req.body.period);

                let URL = `https://graph.microsoft.com/beta/reports/getOffice365GroupsActivityDetail(period='${req.body.period}')?$format=application/json`

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //Get the number of group activities across group workloads.
        async getGroupActivityCountAnalytics(req, res) {
                console.log("Days:::",req.body.period);
                

                let URL = `hhttps://graph.microsoft.com/beta/reports/getOffice365GroupsActivityCounts(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //Get the daily total number of groups and how many of them were active based on email conversations, Yammer posts, and SharePoint file activities
        async getGroupsActivityGroupCountsAnalytics(req, res) {
                console.log("Days:::",req.body.period);
                
                let URL=  `https://graph.microsoft.com/beta/reports/getOffice365GroupsActivityGroupCounts(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //Get the total storage used across all group mailboxes and group sites.
        async getGroupsActivityStorageAnalytics(req, res) {
                console.log("Days:::",req.body.period);
                
               let URL=   `https://graph.microsoft.com/beta/reports/getOffice365GroupsActivityStorage(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //Get the total number of files and how many of them were active across all group sites associated with a Microsoft 365 group.
        async getGroupsActivityFileCountsAnalytics(req, res) {
                console.log("Days:::",req.body.period);
        
               let URL=   `https://graph.microsoft.com/beta/reports/getOffice365GroupsActivityFileCounts(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }



        /* 
        One Drive Api's
        */

        //To get users Activity in One Drive
        async getOneDriveUserActivityAnalytics(req, res) {
                console.log("Days:::", req.body.period);

                let URL = `https://graph.microsoft.com/beta/reports/getOneDriveActivityUserDetail(period='${req.body.period}')?$format=application/json`

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

        //
        async getOneDriveUserActivityCountAnalytics(req, res) {
                console.log("Days:::", req.body.period);

                let URL = `https://graph.microsoft.com/beta/reports/getOneDriveActivityUserCounts(period='${req.body.period}')?$format=application/json`;

                console.log(URL);

                const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${req.header("access_token")}`
                };

                try {
                        let a = await axios.get(URL, { headers: headers });
                        let { data, status } = a;

                        res.status(status).send({
                                status: true,
                                data: data

                        });

                } catch (error) {
                        console.log(error);

                }
        }

}

module.exports = userAnalytics;