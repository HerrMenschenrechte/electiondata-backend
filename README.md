# electiondata-backend

Backend of the Facebook Election Advertising Data transparency tool

Write about

- Azure resources (computing needs, storage needs etc., choice between web app, function, local hosting)
- Memory leak in node application
- Bugs in Facebook API
- Approach to downloading
- Complete tech stack

## SQL statements

### copy table for backup

CREATE TABLE tbl_new AS SELECT \* FROM tbl_old;

### clean data from access token & create link to ad library

UPDATE germany_posts SET ad_snapshot_url = (REPLACE(ad_snapshot_url, '\&access_token=\*\*', ''));
UPDATE germany_posts SET ad_snapshot_url = (REPLACE(ad_snapshot_url, '\archive/render_ad', 'library'));
SELECT ad_snapshot_url FROM denmark_posts

### check for duplicate entries in ad_snapshot_url column

SELECT ad_snapshot_url, COUNT(_) occurences
FROM germany_posts
Group BY ad_snapshot_url
having COUNT(_) > 1;

### truncate all relevant tables

Truncate germany_posts;
Truncate germany_regions;
Truncate germany_demographic

### clean data from values that destroy csv formatting

UPDATE uk_posts SET ad_creative_link_title = (REPLACE(ad_creative_link_title, '\\n\\n', ' '));
UPDATE uk_posts SET ad_creative_link_title = (REPLACE(ad_creative_link_title, '\\n', ' '));
UPDATE uk_posts SET ad_creative_link_title = (REPLACE(ad_creative_link_title, '\\"', '""'));

UPDATE uk_posts SET ad_creative_link_caption = (REPLACE(ad_creative_link_caption, '\\n\\n', ' '));
UPDATE uk_posts SET ad_creative_link_caption = (REPLACE(ad_creative_link_caption, '\\n', ' '));
UPDATE uk_posts SET ad_creative_link_caption = (REPLACE(ad_creative_link_caption, '\\"', '""'));

UPDATE uk_posts SET ad_creative_link_description = (REPLACE(ad_creative_link_description, '\\n\\n', ' '));
UPDATE uk_posts SET ad_creative_link_description = (REPLACE(ad_creative_link_description, '\\n', ' '));
UPDATE uk_posts SET ad_creative_link_description = (REPLACE(ad_creative_link_description, '\\"', '""'));

UPDATE uk_posts SET ad_creative_body = (REPLACE(ad_creative_body, '\\n\\n', ' '));
UPDATE uk_posts SET ad_creative_body = (REPLACE(ad_creative_body, '\\n', ' '));
UPDATE uk_posts SET ad_creative_body = (REPLACE(ad_creative_body, '\\"', '""'));

SELECT \* FROM denmark_posts

## git commands

$ git checkout branch1 # ensure in branch1 is checked out and active
$ git checkout branch2 file.py
