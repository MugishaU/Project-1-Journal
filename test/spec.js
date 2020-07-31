require('jsdom-global')();
const expect = require('chai').expect;
const puppeteer = require('puppeteer'); // https://devdocs.io/puppeteer/
const rewire = require('rewire');

const fs = require('fs');

const create = rewire('../frontend/create.js');

let browser;
let page;

before(async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
    const html = fs.readFileSync('../frontend/create.html', {encoding: 'utf-8'});
    await page.setContent(html)
});

// describe('create.html', () => {

//     describe('head', () => {
//         it('has a title', async () => {
//             const title = await page.title();
//             expect(title).to.be.a("string");
//             expect(title).to.equal("JS in the Browser");
//         });
//     });
    
//     describe('header', () => {
//         let header;
//         it('exists', async () => {
//             header = await page.$('header');
//             expect(header).to.exist;
//         })

//         it('has the correct content', async () => {
//             const headerh1 = await page.$('header h1');
//             const headerText = await headerh1.evaluate(el => el.textContent, headerh1);
//             expect(headerText).to.equal('JavaScript in the Browser');
//         })
//     });

// });

describe('charCount', () => {
    let charCount = create.__get__("charCount");

    it('should be a function', () => {
        expect(charCount).to.be.a('function');
    });
});

after(async () => {
    await browser.close();
});