"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
    return dateData.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
}

// 5 Mayıs 2025 Pazartesi => Full
// Timsetyle medium : 20.19.03