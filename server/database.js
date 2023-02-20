const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


async function getTracks(count) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM track
    ORDER BY track_id DESC
    LIMIT ?
    `, [count])
    return rows
}

async function getTrackInfo(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM track
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function createTrackInfo(artist, name, year) {
    const [result] = await pool.query(`
    INSERT INTO track (artist_name, track_name, track_year)
    VALUES (?, ?, ?)
    `, [artist, name, year])
    return result.insertId
}

async function getTrackName(id) {
    const [rows] = await pool.query(`
    SELECT track_name FROM track
    WHERE track_id = ?
    `, [id])
    return rows[0]
}


module.exports = { getTrackInfo, getTracks, createTrackInfo, getTrackName}