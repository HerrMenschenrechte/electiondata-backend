const _ = require('lodash')
const sql = require('../database/sql')
const db = require('../database/db')


exports.storeInDB = async function processData(info, url) {


    let connection = await db.createPool().catch(error => console.log(error))

    let data = []
    let flat_demographic = []
    let flat_region = []

    for await (const post of info) {
        let nested_demographic = []
        let nested_region = []
        let temp_demographic = []
        let temp_region = []
        nested_demographic.push(post.demographic_distribution)
        nested_region.push(post.region_distribution)
        delete post.region_distribution
        delete post.demographic_distribution
        data.push(Object.values(post))
        _.flatten(data)
        temp_demographic = _.flattenDeep(nested_demographic)
        temp_region = _.flattenDeep(nested_region)
        for await (const region of temp_region) {
            flat_region.push(Object.values(region))
        }

        for await (const demographic of temp_demographic) {
            flat_demographic.push(Object.values(demographic))
        }
    }

    await storePosts(data, connection, url).catch(error => {
        console.log(error)
    })

    await storeDemographic(flat_demographic, connection, url).catch(err => {
        console.log(err)
    })
    await storeRegions(flat_region, connection, url).catch(err => {
        console.log(err)
    })

    await connection.end()

}


async function truncatePosts(connection, url) {
    await connection.query(sql).catch(err => {console.log(err)})

}

async function storePosts(data, connection, url) {
    await connection.query(sql["sql_insert_posts_" + url], [data]).catch(err => {
        console.log(err)

    })
}

async function storeDemographic(flat_demographic, connection, url) {
    await connection.query(sql["sql_insert_demographic_" + url], [flat_demographic]).catch(err => {
        console.log(err)
    })


}

async function storeRegions(flat_region, connection, url) {

    await connection.query(sql["sql_insert_regions_" + url], [flat_region]).catch(err => {
        console.log(err)
    })

}