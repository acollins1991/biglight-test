require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class GoogleSheet {

    constructor(sheetID, cellRange) {
        this.sheetID = sheetID
        this.doc = new GoogleSpreadsheet(process.env.GOOGLESHEETID);
        this.doc.useApiKey(process.env.GOOGLEAPIKEY);
        this.cellRange = cellRange;
        this.sheet;
    }

    async getGoogleSheet () {
        return await this.doc.sheetsById[this.sheetID];
    }

    async loadInfo() {
        await this.doc.loadInfo();
    }

    async loadCells(cellRange) {
        await this.sheet.loadCells(cellRange)
    }

    async init() {
        await this.loadInfo()
        this.sheet = await this.getGoogleSheet()
        await this.loadCells(this.cellRange)
        return this;
    }
}