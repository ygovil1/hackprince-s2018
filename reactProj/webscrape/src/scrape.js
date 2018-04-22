import Cheerio from 'cheerio';
// import Request from 'request-promise';

export default class Scrape {
    constructor(url) {
        this.url = url;
    }

    getJSON() {
        const rp = require('request-promise');
        const cheerio = require('cheerio');

        const options = {
            uri: this.url,
            transform: function (body) {
                return cheerio.load(body);
            }
        };

        rp(options)
        .then(($) => {
            $('.mealName').each((i, elem) => {
                console.log($(this).text());
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }   
}