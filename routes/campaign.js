const { Router } = require("express");
const Campaign = require("../models/campaign");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("campaign");

    return res.status(200).json({ campaigns });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.post("/new", async (req, res) => {
  try {
    const { isCampaignOn, campaign, dateRange, budget, location, platform } =
      req.body;

    const newCampaign = new Campaign({
      isCampaignOn,
      campaign,
      dateRange,
      budget,
      location,
      platform,
    });

    await newCampaign.save();

    return res.status(201).json({ newCampaign });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Campaign.findByIdAndDelete(id);

    return res.status(200).json({ msg: "item deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

module.exports = router;
