const config = require("../bin/config.json");
const api = require("axios");
const db = require("../api/dbqueries");
const unique_id = require("shortid");

// parameters for the search query

let token = process.env.fb_access_token;
let parameter =
  "&ad_active_status=" +
  config.parameter.ad_active_status
let field =
  config.field.ad_creation_time +
  "," +
  config.field.ad_creative_body +
  "," +
  config.field.ad_creative_link_caption +
  "," +
  config.field.ad_creative_link_description +
  "," +
  config.field.ad_creative_link_title +
  "," +
  config.field.ad_delivery_start_time +
  "," +
  config.field.ad_delivery_stop_time +
  "," +
  config.field.ad_snapshot_url +
  "," +
  config.field.currency +
  "," +
  config.field.demographic_distribution +
  "," +
  config.field.funding_entity +
  "," +
  config.field.impressions +
  "," +
  config.field.page_id +
  "," +
  config.field.page_name +
  "," +
  config.field.region_distribution +
  "," +
  config.field.spend;

exports.getDataCollection = async function (req, res, next) {


  let country = req.data

  let url =
    "https://graph.facebook.com/v7.0/ads_archive?" +
    'search_terms=""' +
    "&fields=" +
    field +
    "&ad_reached_countries=" + config.parameter[country] +
    parameter +
    "&limit=" +
    config.search.limit +
    "&access_token=" +
    token;
  console.log("Initial URL: " + url);

  processData(url, req.data).catch(error => console.log(error));


  res.redirect("/");


}




let counter = 1


async function processData(url, req) {

  let persistentReq = req
  console.log("Current URL: " + url)




  let response = await api.get(url).catch(err => {


    if (err.message.includes("400") == true) {

      if (err.response.data.error.code == 613) {

        let xBusiness = JSON.parse(err.response.headers['x-business-use-case-usage'])
        let timeToAccess = xBusiness['2381529675200446'][0].estimated_time_to_regain_access + 30000

        console.log(err.response.data.error)
        console.log("The Facebook API request failed because of API limit exhaustion. Waiting for timeout to expire")
        console.log("Minutes to regain access: " + xBusiness['2381529675200446'][0].estimated_time_to_regain_access)

        return new Promise((resolve => setTimeout(resolve, (timeToAccess * 1000 * 60))))

      } else {
        console.log(err)
        console.log("The Facebook API request failed because of invalid parameters")
        return;
      }
    }
  })

  if (typeof response == 'undefined') {
    processData(url, req)
  }
  let processedData = []
  let apiUsage = JSON.parse(response.headers['x-business-use-case-usage'])



  if (apiUsage['2381529675200446'][0].object_count_pct > 90) {
    console.log(apiUsage['2381529675200446'][0].object_count_pct + "% of rate limit reached. Pausing API calls for 1 hour")
    await pauseAPICalls()
    console.log("1 Hour has passed, continuing download...")
    processData(url, req)

  } else {
    response.data.data.forEach(element => {

      let post = {};
      let generated_id = unique_id.generate();

      if (typeof element.demographic_distribution === "undefined") {
        id = generated_id;
      } else {
        element.demographic_distribution.forEach(item => {
          item.id = generated_id;
          item.ad_snapshot_url = element.ad_snapshot_url;
        });
      }

      if (typeof element.region_distribution === "undefined") {
        id = generated_id;
      } else {
        element.region_distribution.forEach(item => {
          item.id = generated_id;
          item.ad_snapshot_url = element.ad_snapshot_url;
        });
      }

      post.ad_snapshot_url = element.ad_snapshot_url;
      post.id = generated_id;
      post.page_name = element.page_name;
      post.page_id = element.page_id;
      post.funding_entity = element.funding_entity;
      if (typeof element.impressions === "undefined") {
        post.impressions_lower_bound = null;
      } else {
        if (typeof element.impressions.lower_bound === "undefined") {
          post.impressions_lower_bound = null;
        } else {
          post.impressions_lower_bound = element.impressions.lower_bound;
        }
      }
      if (typeof element.impressions === "undefined") {
        post.impressions_upper_bound = null;
      } else {
        if (typeof element.impressions.upper_bound === " undefined") {
          post.impressions_upper_bound = null;
        } else {
          post.impressions_upper_bound = element.impressions.upper_bound;
        }
      }
      if (typeof element.spend === "undefined") {
        post.spend_lower_bound = null;
        post.spend_upper_bound = null;
      } else {
        if (typeof element.spend.lower_bound === "undefined") {
          post.spend_lower_bound = null;
        } else {
          post.spend_lower_bound = element.spend.lower_bound;
        }
        if (typeof element.spend.upper_bound === "undefined") {
          post.spend_upper_bound = null;
        } else {
          post.spend_upper_bound = element.spend.upper_bound;
        }
      }

      post.currency = element.currency;
      if (typeof element.demographic_distribution === "undefined") {
        post.demographic_distribution = {
          id: generated_id,
          percentage: "",
          age: "",
          gender: "",
          ad_snapshot_url: ""
        };
      } else {
        post.demographic_distribution = element.demographic_distribution;
      }
      if (typeof element.region_distribution === "undefined") {
        post.region_distribution = {
          id: generated_id,
          percentage: "",
          region: "",
          ad_snapshot_url: ""
        };
      } else {
        post.region_distribution = element.region_distribution;
      }
      post.ad_creative_body = JSON.stringify(element.ad_creative_body);
      post.ad_creative_link_caption = JSON.stringify(element.ad_creative_link_caption);
      post.ad_creative_link_description = JSON.stringify(element.ad_creative_link_description);
      post.ad_creative_link_title = JSON.stringify(element.ad_creative_link_title);
      post.ad_creation_time = element.ad_creation_time
        .replace("T", " ")
        .replace("+0000", "");
      if (typeof element.ad_delivery_start_time === "undefined") {
        post.ad_delivery_start_time = null;
      } else {
        post.ad_delivery_start_time = element.ad_delivery_start_time
          .replace("T", " ")
          .replace("+0000", "");
      }
      if (typeof element.ad_delivery_stop_time === "undefined") {
        post.ad_delivery_stop_time = null;
      } else {
        post.ad_delivery_stop_time = element.ad_delivery_stop_time
          .replace("T", " ")
          .replace("+0000", "");
      }
      processedData.push(post);
    })
    await db.storeInDB(processedData, req).catch(error => console.log(error))
    console.log(counter + " Pages Processed")
    console.log("API Rate Limit: " + apiUsage['2381529675200446'][0].object_count_pct + "% Reached")
    console.log("Time to Regain Access: " + apiUsage['2381529675200446'][0].estimated_time_to_regain_access + " Minutes")
    console.log("API CPU Time: " + apiUsage['2381529675200446'][0].total_cputime + "% Reached")
    console.log("Total API Request Time: " + apiUsage['2381529675200446'][0].total_time + "% Reached")



    if (response.data.paging.next !== undefined) {
      processData(response.data.paging.next, persistentReq)
      counter++
    } else {
      console.log("There is no more data")
    }


  }

}


async function pauseAPICalls() {
  return new Promise(resolve => setTimeout(resolve, 3600000))
}
