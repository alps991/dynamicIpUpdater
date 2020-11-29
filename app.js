const express = require('express');
const Site = require('./models/site');
require('./db/mongoose');

const app = express();

app.get('/api/ip/:site', async (req, res) => {
    const site = req.params.site;
    const ip = req.ip.slice(7);
    try {
        let existingSite = await Site.findOne({ site });
        if (existingSite) {
            const oldIp = existingSite.ip;
            if (ip !== oldIp) {
                existingSite.changeHistory.push({ oldIp, newIp: ip });
                existingSite.ip = ip;
            }
            existingSite.updatedAt = Date.now();
            await existingSite.save();
        } else {
            await new Site({ site, ip }).save();
        }

        console.log(site, ip)
        res.send({ site, ip });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

app.listen(3001, () => {
    console.log("App is running on 3001");
});