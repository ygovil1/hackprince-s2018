const url = "https://campusdining.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining&dtdate=4%2F14%2F2018&locationNum=02&locationName=%20+++Butler+%26+Wilson+Colleges&naFlag=1";

const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: url,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
.then(($) => {
    // for each column
    $('.col-md-4').each(function(i, elem) {
        // print menu name 
        console.log($(this).find('.mealName').text());
        console.log('------------------------------------');
        // for each category
        $(this).find('.list-group-item').each(function(i, elem) {
            // print category
            console.log($(this).find('h6').text().trim());
            // for each item
            $(this).find('.recipe').each(function(i,elem) {
                // print each item
                console.log($(this).text());
            });
            // add space
            console.log(' ');
        });

        // add space
        console.log('-------------------------------------');
        console.log(' ');
        console.log(' '); 
    });

    //debug
    // $('.col-md-4').each(function(i, elem) {
    //     // print menu name 
    //     console.log($(this).find('.mealName').text());

    //     console.log('----------------');
    //     // for each category
    //     $(this).children('.list-group-item').each(function(i, elem) {
    //         // print category
    //         console.log($(this).find('h6').text());
    //     //     // for each item
    //     //     $(this).children('.recipe').each(function(i,elem) {
    //     //         // print each item
    //     //         console.log($(this).text());
    //     //     });
    //     });
    // });

    // alternate method
    // $('.recipe').each(function(i, elem) {
    //     console.log($(this).parent().parent().find('h6').text());
    // });

})
.catch((err) => {
    console.log(err);
});