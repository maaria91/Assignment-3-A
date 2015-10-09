
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('#plot')
    .append('svg')
    .attr('width', width + margin.l + margin.r)
    .attr('height', height + margin.t + margin.b)
    .append('g')
    .attr('transform','translate('+margin.l + ',' + margin.r +')')

//Start with 100 symbols
var numOfSymbols = 100;

var symbols = [];
var trials = [];

for(var i=0;i<numOfSymbols;i++) {
    var newObj = {};
    var size= [];
    var newNumber = Math.random();
    var rand_width = Math.random() * 100;
    var rand_height = Math.random() * 100;
    var rand_x = Math.random() * width;
    var rand_y = Math.random() * height;
    var type = Math.random();
    var rgb = "rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*250)+ ","+ Math.round(Math.random()*200) + ")"
    console.log(rgb);

    newObj = {
        x: rand_x,
        y: rand_y,
        size: [rand_width, rand_height],
        r: rand_width,
        type:type,
        color: rgb

    }
    trials.push(newNumber);
    symbols.push(newObj);
    var sum = sum + newNumber;
}

symbols.forEach(function (symbol, index) {
            console.log(symbol);
        if (symbol.type < 0.5) {

        plot
            .append('circle')
            .attr('cx', symbol.x)
            .attr('cy', symbol.y)
            .attr('r', symbol.r)
            .style('fill',symbol.color);


    } else {

                        plot
                            .append('rect')
                            .attr('x', symbol.x)
                            .attr('y', symbol.y)
                            .attr('width', symbol.size[0])
                            .attr('height', symbol.size[1])
                            .style('fill',symbol.color);



            }
        }

        )
//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
/*var symbols = [];


//With the array you've created and populated, draw circles to represent these symbols
symbols.forEach(function(symbol){

})
*/
