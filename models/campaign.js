const mongoose = require("mongoose");

const { Schema } = mongoose;

const campaignSchema = new Schema(
  {
    isCampaignOn: {
      type: Boolean,
      required: true,
      default: true,
    },
    campaign: {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
    dateRange: {
      type: Object,
      start: Number,
      end: Number,
    },
    clicks: Number,
    budget: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "live",
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("campaign", campaignSchema);

module.exports = Campaign;
