var urlPart1 = "https://campusdining.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining&dtdate=";
var urlPart2 = "&locationNum=";
var urlPart3 = "&locationName=";
var urlPart4 = "&naFlag=1";
const fs = require('fs');

var dhall = {};

dhall["rm"] = ["01", "Rockefeller+%26+Mathey+Colleges"];
dhall["bw"] = ["02", "Butler+%26+Wilson+Colleges"];
dhall["fb"] = ["03", "Forbes+College"];
dhall["gc"] = ["04", "Graduate+College+"];
dhall["cj"] = ["05", "Center+for+Jewish+Life"];
dhall["wh"] = ["08", "Whitman+College"];

var locs = ["rm", "bw", "fb", "gc", "cj", "wh"]


// func to get array
function getArray(loc, disp) {
    const rp = require('request-promise');
    const cheerio = require('cheerio');

    let urlLocNum = dhall[loc][0];
    let urlLocName = dhall[loc][1];

    // const scraper = require("./scrape.js");
    let now = new Date();
    now.setDate(now.getDate() + disp);
    console.log(now);
    console.log(now.getMonth()+1);
    console.log(now.getDate());
    console.log(now.getFullYear());

    // let urlDate = "5%2F5%2F2018";
    let urlDate = (now.getMonth()+1) + "%2F" + now.getDate() + "%2F" + now.getFullYear();

    let url = urlPart1 + urlDate + urlPart2 + urlLocNum + urlPart3 + urlLocName + urlPart4;

    const options = {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return rp(options).then(($) => {
        var array = [];
        // for each column
        $('.col-md-4').each(function(i, elem) {
            let mealName = $(this).find('.mealName').text();
            let mealArray = [mealName];

            // print menu name 
            // console.log(mealName);
            // console.log('-------------------------------------');
            // for each category
            $(this).find('.list-group-item').each(function(i, elem) {
                // find category name and create array
                let catName = $(this).find('h6').text().trim();
                let catArray = [catName];

                // print category
                // console.log(catName);
                // for each item
                $(this).find('.recipe').each(function(i,elem) {
                    // find recipie name and add to array
                    let recName = $(this).text();
                    // print each item
                    // console.log(recName);
                    catArray.push(recName);
                });
                // add space
                // console.log(' ');

                mealArray.push(catArray);
            });

            // add space
            // console.log('-------------------------------------');
            // console.log(' ');
            // console.log(' '); 

            if (mealArray.length > 1)
                array.push(mealArray);
        });

        // console.log(array);
        return array;

    })
    .catch((err) => {
        console.log(err);
    });
}

// function to print array
function printArray(arr) {
    // Open file 
    var filename = loc + displace + ".txt" 
    var file = fs.createWriteStream(filename);
    file.on('error', function(err) { /* error handling */ });

    console.log(arr.length);
    file.write(arr.length + '\n');

    arr.forEach(function(v) 
        {   
            // print length of meal array and name of meal
            console.log(v.length);
            file.write(v.length + '\n');
            console.log(v[0]);
            file.write(v[0] + '\n');


            for (var i = 1; i < v.length; i++) {
                var u = v[i];
                u.forEach(function(w) {
                    console.log(w);
                    file.write(w + '\n');
                });
            }
        });

    file.end();
}

// function to update a file
function updateFile(loc, disp) {
    getArray(loc, disp).then(function (arr) {
        // Open file 
        var filename = loc + disp + ".txt" 
        var file = fs.createWriteStream(filename);
        file.on('error', function(err) { /* error handling */ });

        // console.log(arr.length);
        console.log(loc);
        file.write(arr.length + '\n');

        arr.forEach(function(v) 
            {   
                // print length of meal array and name of meal
                // console.log(v.length);
                file.write(v.length + '\n');
                console.log(v[0]);
                file.write(v[0] + '\n');


                for (var i = 1; i < v.length; i++) {
                    var u = v[i];
                    u.forEach(function(w) {
                        // console.log(w);
                        file.write(w + '\n');
                    });
                }
            });

        file.end();        
    });
}

locs.forEach(function (loc) {
    for (var i = 0; i < 7; i++) {
        updateFile(loc, i);
    }
});


// var loc = "rm";
// var displace = 1;


// // console.log(url);


// getArray(loc, displace).then(function (arr) {
//     // Open file 
//     var filename = loc + displace + ".txt" 
//     var file = fs.createWriteStream(filename);
//     file.on('error', function(err) { /* error handling */ });

//     console.log(arr.length);
//     file.write(arr.length + '\n');

//     arr.forEach(function(v) 
//         {   
//             // print length of meal array and name of meal
//             console.log(v.length);
//             file.write(v.length + '\n');
//             console.log(v[0]);
//             file.write(v[0] + '\n');


//             for (var i = 1; i < v.length; i++) {
//                 var u = v[i];
//                 u.forEach(function(w) {
//                     console.log(w);
//                     file.write(w + '\n');
//                 });
//             }
//         });

//     file.end();
// });



