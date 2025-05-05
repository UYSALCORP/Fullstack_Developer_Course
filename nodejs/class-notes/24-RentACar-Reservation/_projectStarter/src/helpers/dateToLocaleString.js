"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
    return dateData.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
}