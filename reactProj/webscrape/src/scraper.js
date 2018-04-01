import Cheerio from 'cheerio';
import Jsonframe from 'jsonframe-cheerio';

export default class Scraper {
    constructor(url) {
        this.url = url;
    }

    getJSON() {
        let cheerio = require('cheerio');
        let jsonframe = require('jsonframe-cheerio');

        let $ = cheerio.load(this.url);
        jsonframe($); // initializes the plugin

        let frame = {
            "dhall": "#jumbotronFeature :first-child", // gets the dining hall name, #id jumbotronFeature, first child
            "date": "#dateHeader :first-child", // gets the current date by scraping first date link
            "mealOfDay" : {
                _s: ".card.mealCard", // selector for meal 
                _d: [{
                    "meal": ".mealName", // name of meal
                    "categories": {       
                        _s: ".list-group-item", // selector for category
                        _d: [{
                            "cat": "h6 | trim",    // name of category
                            "recipes": {
                                _s: ".menuItems",   // selector for recipes
                                _d: [{
                                    "item": ".recipe || \"*\"" // selector and parse "*"
                                }]
                            }
                        }]
                    } 
                }]
            }
        }

        let companiesList = $('.list.items').scrape(frame);
        return companiesList;
    }   

    getJSONString(url) {
        let cheerio = require('cheerio');
        let jsonframe = require('jsonframe-cheerio');

        let $ = cheerio.load(url);
        jsonframe($); // initializes the plugin

        let frame = {
            "dhall": "#jumbotronFeature :first-child", // gets the dining hall name, #id jumbotronFeature, first child
            "date": "#dateHeader :first-child", // gets the current date by scraping first date link
            "mealOfDay" : {
                _s: ".card.mealCard", // selector for meal 
                _d: [{
                    "meal": ".mealName", // name of meal
                    "categories": {       
                        _s: ".list-group-item", // selector for category
                        _d: [{
                            "cat": "h6 | trim",    // name of category
                            "recipes": {
                                _s: ".menuItems",   // selector for recipes
                                _d: [{
                                    "item": ".recipe || \"*\"" // selector and parse "*"
                                }]
                            }
                        }]
                    } 
                }]
            }
        };

        frame = {
            "dhall": {
                _s: "#jumbotronFeature",
                _d: "a:first-child"
            }, // gets the dining hall name, #id jumbotronFeature, first child
            "date": "a.menuDates", // gets the current date by scraping first date link
            // "mealOfDay" : {
            //     _s: ".card.mealCard", // selector for meal 
            //     _d: [{
            //         "meal": ".mealName", // name of meal
            //         "categories": {       
            //             _s: ".list-group-item", // selector for category
            //             _d: [{
            //                 "cat": "h6 | trim",    // name of category
            //                 "recipes": {
            //                     _s: ".menuItems",   // selector for recipes
            //                     _d: [{
            //                         "item": ".recipe || \"*\"" // selector and parse "*"
            //                     }]
            //                 }
            //             }]
            //         } 
            //     }]
            // }
        };

        let companiesList = $('.list.items').scrape(frame, { string: true });
        return companiesList;
    }   
}

//module.exports = Scraper;