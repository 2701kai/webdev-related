const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

const boxColors = {
    '002': 'rgb(138, 43, 226)'
}

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

async function getElementByColor(color) {
    const allElements = await page.$$('body *')
    let element
    for(let i = 0; i < allElements.length; i++) {
        const bgColor = await page.evaluate(item => getComputedStyle(item).backgroundColor, allElements[i])
        if(bgColor === color) {
            element = allElements[i]
            break
        }
    }
    return element
}

describe('small screens 0px-600px', () => {
    it("All boxes should take up 100% of a row", async () => {
        await page.setViewport({ width: 550, height: 800 });
        const boxes = await getElementByColor(boxColors['002'])
        console.log(boxes)
        console.log(await page.evaluate(el => el.innerHTML, boxes))
        const flexBoxesDisplay = await page.evaluate(() => {
            return (Array.from(document.querySelector('div.flex-container').children).map(el => getComputedStyle(el).flex));
        });
        expect(flexBoxesDisplay).toEqual(
            expect.arrayContaining([
                '1 1 100%',
                '1 1 100%',
                '1 1 100%',
                '1 1 100%',
                '1 1 100%',
                '1 1 100%',
                '1 1 100%'
            ]));
    });
});
describe('medium screens 600px-800px', () => {
    it("boxes 1 and 2 should each take 100% of a row, 3, 4 and 5 should each take up 33.33% of a row and 6 & 7 should each take up 100% of one row", async () => {
        await page.setViewport({ width: 780, height: 800 });
        const flexBoxesDisplay = await page.evaluate(() => {
            return (Array.from(document.querySelector('div.flex-container').children).map(el => getComputedStyle(el).flex));
        });
        expect(flexBoxesDisplay).toEqual(
            expect.arrayContaining([
                '1 1 100%',
                '1 1 100%',
                '1 1 33.33%',
                '1 1 33.33%',
                '1 1 33.33%',
                '1 1 100%',
                '1 1 100%'
            ]));
    });
});
describe('large screens 800px and above', () => {
    it("boxes 1 and 2 should each take up 50% of a row, 3, 4 and 5 each should take up 33.33% of a row and 6 & 7 should each take up 50% of a row", async () => {
        await page.setViewport({ width: 1200, height: 800 });
        const flexBoxesDisplay = await page.evaluate(() => {
            return (Array.from(document.querySelector('div.flex-container').children).map(el => getComputedStyle(el).flex));
        });
        expect(flexBoxesDisplay).toEqual(
            expect.arrayContaining([
                '1 1 50%',
                '1 1 50%',
                '1 1 33.33%',
                '1 1 33.33%',
                '1 1 33.33%',
                '1 1 50%',
                '1 1 50%'
            ]));
    })
});