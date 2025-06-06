"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
    return dateData.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
}

// datastyle -> 5 Mayıs 2025 Pazartesi -> "Full"
// timeStyle -> medium -> 20.19.03