exports.sql_truncate_posts_Denmark = 'TRUNCATE denmark_posts;'
exports.sql_truncate_demographic_Denmark = 'TRUNCATE denmark_demographic;'
exports.sql_truncate_regions_Denmark = 'TRUNCATE denmark_regions;'
exports.sql_truncate_posts_Germany = 'TRUNCATE germany_posts;'
exports.sql_truncate_demographic_Germany = 'TRUNCATE germany_demographic;'
exports.sql_truncate_regions_Germany = 'TRUNCATE germany_regions;'
exports.sql_truncate_posts_France = 'TRUNCATE france_posts;'
exports.sql_truncate_demographic_France = 'TRUNCATE france_demographic;'
exports.sql_truncate_regions_France = 'TRUNCATE france_regions;'


exports.sql_insert_posts_Denmark = `INSERT INTO denmark_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_Denmark = `INSERT INTO facebook_data.denmark_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_Denmark = `INSERT INTO facebook_data.denmark_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_Germany = `INSERT INTO germany_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_Germany = `INSERT INTO facebook_data.germany_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_Germany = `INSERT INTO facebook_data.germany_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_France = `INSERT INTO france_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_France = `INSERT INTO facebook_data.france_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_France = `INSERT INTO facebook_data.france_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_uk = `INSERT INTO uk_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_uk = `INSERT INTO facebook_data.uk_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_uk = `INSERT INTO facebook_data.uk_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_Hungary = `INSERT INTO hungary_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_Hungary = `INSERT INTO facebook_data.hungary_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_Hungary = `INSERT INTO facebook_data.hungary_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_Slovakia = `INSERT INTO slovakia_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_Slovakia = `INSERT INTO facebook_data.slovakia_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_Slovakia = `INSERT INTO facebook_data.slovakia_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`


exports.sql_insert_posts_Australia = `INSERT INTO australia_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_Australia = `INSERT INTO facebook_data.australia_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_Australia = `INSERT INTO facebook_data.australia_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_India = `INSERT INTO india_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_India = `INSERT INTO facebook_data.india_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_India = `INSERT INTO facebook_data.india_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_us = `INSERT INTO us_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_us = `INSERT INTO facebook_data.us_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_us = `INSERT INTO facebook_data.us_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_posts_georgia = `INSERT INTO georgia_senate_posts (ad_snapshot_url, post_id, page_name, page_id, funding_entity, 
  impressions_lower, impressions_upper, spend_lower_bound, spend_upper_bound, currency, 
  ad_creative_body, ad_creative_link_caption, ad_creative_link_description, ad_creative_link_title, ad_creation_time, 
  ad_delivery_start_time, ad_delivery_stop_time) VALUES ?`;


exports.sql_insert_regions_georgia = `INSERT INTO facebook_data.georgia_senate_regions (percentage, region, post_id, ad_snapshot_url) VALUES ?`

exports.sql_insert_demographic_georgia = `INSERT INTO facebook_data.georgia_senate_demographic (percentage, age, gender, post_id, ad_snapshot_url) VALUES ?`