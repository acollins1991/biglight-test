const GoogleSheet = require('./GoogleSheet')

module.exports = class GetHompageContent extends GoogleSheet {
    constructor() {
        super(501141897, 'A1:F4')
    }

    async getHeadline() {
        return await this.sheet.getCellByA1('A4').formattedValue;
    }

    async getSubHeadline() {
        return await this.sheet.getCellByA1('B4').formattedValue;
    }

    async getMobileImage() {
        return await this.sheet.getCellByA1('C4').formattedValue;
    }

    async getDesktopImage() {
        return await this.sheet.getCellByA1('D4').formattedValue;
    }
}