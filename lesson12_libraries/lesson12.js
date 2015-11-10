1) Open Chrome

2) Using Javascript Libraries
// Since Javascript is so popular, there is already code written for almost
// anything you want to do. 

// We've already used Jquery, let's explore other libraries and how they might be used.

// Here are some examples
// If you are designing a website and don't want to worry about creating all the User Interface 
// elements? Try Bootstrap
// http://getbootstrap.com/

// Need to perform some common operations on arrays or objects?
// Check out underscore http://underscorejs.org/

// Want to create some amazing interactive charts?
// Get highcharts http://www.highcharts.com/download

// 3D animations in your future?
// You have to use three.js http://threejs.org/

// Here's a list of other libraries you might be interested in
// https://codegeekz.com/collection-of-best-javascript-libraries-for-2014/

// By the way, I've added jquery for you in the example page, you'll need it
// later on. 


3) Download underscore
// Download underscore and save it in lesson12_libraries folder (the one this document 
// is in)
// http://underscorejs.org/underscore.js

// Include it using a script tag in example.html
//<script type='text/javascript' src='underscore.js'></script>

// Take a quick look through the documentation here: http://underscorejs.org/
// See anything you might want to use?
// I want to try out range and once

// it looks like I call underscore methods using the _ object (similar to $ for jquery)

// write the following lines to example.html between the script tags
// range give me a list of numbers from given start, stop (exclusive) and step values
var one_to_ten = _.range(1,11);
console.log(one_to_ten);

// once turns a function into one I can only call once, subsequent calls don't do anything
// I know what I'm using this for!
var alrt = _once(alert);
alrt("Here i am");
// These should never run.
alrt("Ahhh I'm here");
alrt("Are you having fun yet?");

// TRY IT
// Create and array of numbers from 20 - 39.


4) Download highcharts
// Highcharts is a javascript library that allows you to make interactive charts
// You can get some pretty amazing charts 
// while very few lines of your own code
// Check out what it can do
// http://www.highcharts.com/

// Now download it and extract it into the lesson12_libraries folder
// http://www.highcharts.com/download

// Include highcharts using a script tag in example.html
// <script src="js/highcharts.js"></script>

// Now lets look at examples
// http://www.highcharts.com/demo

// I want to try a simple column graph so I click on the example 
// http://www.highcharts.com/demo/column-basic
// Notice the link called 'Edit in JSFiddle' at the bottom?
// Click on that and then steal all their code
// Just copy and paste from the javascript window into your script tag
// On example.html
/*
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});
*/

// Now lets play with it
// Read through and try to figure out what each option is doing.
// Change a few and reload the page


5)  Project
// Let modify the bar graph to show on a scale of 1-10 how comfortable you felt with 
// Javascript after lessons 1 through 12.
// Adjust the title and labels accordingly
// Use underscore to create the x-axis categories (1-12)
// Add another series of how difficult the projects were from (1 very easy - 10 nearly impossible)
// for each lesson.