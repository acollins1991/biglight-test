const GoogleSheet = require('./GoogleSheet')

module.exports = class GetAboutContent extends GoogleSheet {
    constructor() {
        super(2122353974, 'A1:F20')
    }

    async getHeadline() {
        return await this.sheet.getCellByA1('A4').formattedValue;
    }

    async getSubHeadline() {
        return await this.sheet.getCellByA1('B4').formattedValue;
    }

    async getSections() {
        const rows = await this.sheet.getRows({ offset: 2 });
        return rows.filter( row => {
            if( row['image.mobileUrl'] && row['image.desktopUrl'] && row['image.title'] && row['image.description'] ) {
                return true
            } 
            return false
        } ).map( (row, index) => {
            return {
                section: {
                    mobile: row['image.mobileUrl'],
                    desktop: row['image.desktopUrl'],
                    title: row['image.title'],
                    description: row['image.description']
                }
            }
        } )
    }
}