const axios = require('axios');
const qs = require('qs');
const TenantID = process.env.TenantID
const ClientID = process.env.ClientID
const ClientSecret = process.env.ClientSecret
const UserName=process.env.UserName
const UserPassword=process.env.UserPassword
class Project {
    async getAllProjects(req, res) {
        
    let URL=`https://graph.microsoft.com/v1.0/teams/${req.headers.team_id}`
    let access_token=req.header('access_token');
    // console.log("access_toke"+access_token)
    const headers = {
        "Authorization":`Bearer ${access_token}`
    };
    try {
        let a = await axios.get(URL, { headers: headers })
        console.log("abss",a)
        let {  status,data } = a
        res.status(status).send({ status: true, "Detail":data});
    } catch (error) {
        console.log(error);
        let { data, status } = error
        res.status(status).send(error);
    }
    }
    
async createProject(req, res) {
    let URL = `https://graph.microsoft.com/v1.0/teams`
    // console.log('asassasapost',req.headers,req.query.access_token,req.query)
    let access_token=req.header('access_token');
    // console.log("access_toke"+access_token)
    const headers = {
        "Authorization":`Bearer ${access_token}`
    };
    let body = req.body;
    try {
        let a = await axios.post(URL, body, { headers: headers })
        console.log("aaaa",a)
        let { data, status} = a
        
        res.status(status).send({ status: true, "Details": data,...a.headers});
    } catch (error) {
        console.log(error);
        let { data, status } = error
        res.status(status).send(data);
    }

}
async deleteProject(req, res) {
    let URL=`https://graph.microsoft.com/v1.0/groups/${req.headers.team_id}`
    // console.log('asassasapost',req.headers,req.query.access_token,req.query)
    let access_token=req.header('access_token');
    const headers = {
        "Authorization":`Bearer ${access_token}`
    };
    try { console.log("aaaa1d")
        let a = await axios.delete(URL,{ headers: headers })
        console.log("aaaa1d",a)
        let {  status, data} = a       
        res.status(status).send({ status: true, "Details": data});
    } catch (error) {
        console.log(error);
        let { status,data } = error
        res.status(status).send(data);
    }

}
async updateProject(req, res) {
    let URL = `https://graph.microsoft.com/v1.0/teams/${req.headers.team_id}`
    // console.log('asassasapost',req.headers,req.query.access_token,req.query)
    let access_token=req.header('access_token');
    // console.log("access_toke"+access_token)
    const headers = {
        "Authorization":`Bearer ${access_token}`
    };
    let body = req.body;
    try {
        let a = await axios.patch(URL, body, { headers: headers })
        let { data, status } = a
        console.log("aaaa",a)
        res.status(status).send({ status: true, "Details": data });
    } catch (error) {
        console.log(error);
        let { data, status } = error
        res.status(status).send(error);
    }

}
async archiveProject(req, res) {
    let URL = `https://graph.microsoft.com/v1.0/teams/${req.headers.team_id}/archive`
    // console.log('asassasapost',req.headers,req.query.access_token,req.query)
    let access_token=req.header('access_token');
    // console.log("access_toke"+access_token)
    const headers = {
        "Authorization":`Bearer ${access_token}`
    };
    let body = req.body;
    try {
        let a = await axios.post(URL, body, { headers: headers })
        let { data, status } = a
        console.log("aaaar",a)
        res.status(status).send({ status: true, "Details": data});
    } catch (error) {
        console.log(error);
        let { data, status } = error
        res.status(status).send(data);
    }

}

}

module.exports = Project;