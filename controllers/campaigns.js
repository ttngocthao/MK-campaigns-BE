const campaignsRouter = require("express").Router();
const config = require("../utils/config");
const axios = require("axios");

const uuid = require("uuid");
const qs = require("qs");

const axiosOptions = {
  responseType: "application/json",
  headers: {
    "X-API-Key": config.API_KEY,
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
};
/*
path: /api/campaigns
 */
campaignsRouter.get("/", async (req, res) => {
  const campaigns = await axios({
    method: "get",
    url: `${config.DATA_URL}/campaigns/*`,
    ...axiosOptions,
  });
  //console.log("campaigns", campaigns);
  res.status(200).json(campaigns.data);
});

campaignsRouter.post("/", async (req, res) => {
  const id = `thao---${uuid.v4()}`;
  // const body = {
  //   id,
  //   startDate: 1621863173300,
  //   endDate: 1622381520000,
  //   targetImpressions: 1011010,
  // };

  const { startDate, endDate, targetImpressions } = req.body;
  const campaignDetails = { id, startDate, endDate, targetImpressions };

  const campaign = await axios({
    method: "post",
    url: `${config.DATA_URL}/campaigns/`,
    data: qs.stringify(campaignDetails),

    headers: axiosOptions.headers,
  });
  res.status(200).json(campaign.data);
});

module.exports = campaignsRouter;
