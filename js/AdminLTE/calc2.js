 /*!
 * Author: Jasmine Lee
 * Date: Jul 9 2014
 * Description:
 *      This file should be included in the form pages
 !**/

 // This function performs a basic calcuation. 

function percent(num){
    return num/100;
}

function calculate() {

    var companyName = $('companyName').val();
    $('companyName').val(companyName);

    // Retrieve value from the amount field
    var B8 = $('#B8').val();
    var B9 = $('#B9').val();

    // Do actual calculation
    var B14 = Number(B8) * percent( Number(B9) );
    // Store the value in the total field. Note that the 'Number' 
    // function converts a string of numbers into numbers
    $('#B14').val( B14.toLocaleString() ); //.toFixed(2) );
    // toFixed ensures there are only two digits after the dec point


    var B16 = $('#B16').val();
    var B17 = B14 / percent( Number(B16) );
    $('#B17').val( B17.toLocaleString() );


    //var B20 = $('#B20').val();
    //var B21 = $('#B21').val();
    var B20= 1;
    $('#B20').val(B20);
    var B21 = 99;
    $('#B21').val(B21);


    var B23 = B17 * percent( Number(B20) );
    var B24 = B17 * percent( Number(B21) );
    var B25 = B23 + B24;

    $('#B23').val( B23.toLocaleString() );
    $('#B24').val( B24.toLocaleString() );
    $('#B25').val( B25.toLocaleString() );

    var B27 = B16;

    // var B28 = $('#B28').val(); 
    var B28 = 10;
    $('#B28').val(B28);

    var B29 = B27 * (1 + percent( Number(B28) ) );
    $('#B27').val( B27 );
    $('#B29').val( B29) ;
    var B31 = B23 * percent( B27 );
    var B32 = B24 * percent( B29 );

    $('#B31').val( B31.toLocaleString() );
    $('#B32').val( B32.toLocaleString() );

    var B34 = B25 * percent( B27 );
    var B35 = B25 * percent( B29 );

    $('#B34').val( B34.toLocaleString() );
    $('#B35').val( B35.toLocaleString() );

    var B37 = B35 - B34;
    var B38 = B32 - (B34 - B31);

    $('#B37').val( B37.toLocaleString() );
    $('#B38').val( B38.toLocaleString() );


    // var B40 = $('#B40').val();
    B40 =  0.005;
    $('#B40').val(B40);

    var B42 = Number(B40) * B38; 
    $('#B42').val( B42.toLocaleString() );

    var B46 = B38
    var B47 = $('#B47').val();
    var B48 = $('#B48').val();
    var B49 = $('#B49').val();
    var B50 = (B46 * Number(B47) / 1000 * percent( Number(B48) ) *  Number(B49) ).toLocaleString();
    $('#B46').val( B46.toLocaleString() );
    $('#B50').val( B50.toLocaleString() );

    var B54 = parseFloat(B50.replace(/,/g,'')); //turn B50 from a string to a number
    var B55 = B42;
    var B56 = B54 - B55;

    var B58 = (B55/B54) * 100; 
    var B59 = (B56/B54) * 100;

    $('#B54').val( B54.toLocaleString() );
    $('#B55').val( B55.toLocaleString() );
    $('#B56').val( B56.toLocaleString() );
    $('#B58').val( B58 );
    $('#B59').val( B59 )

    //scrollTop 
    if (i == 0){
        $("html,body").animate({ scrollTop: 0}, 600);
        i++;
    } else {
        //don't scroll
    }

    //Unhide Shit
    $('#B14_CONTAINER').show();
    $('#B17_CONTAINER').show();
    $('#B23_CONTAINER').show();
    $('#B24_CONTAINER').hide();
    $('#B25_CONTAINER').show();
    $('#B27_CONTAINER').show();
    $('#B29_CONTAINER').show();
    $('#B31_CONTAINER').show();
    $('#B32_CONTAINER').show();
    $('#B34_CONTAINER').show();
    $('#B35_CONTAINER').show();
    $('#B37_CONTAINER').show();
    $('#B38_CONTAINER').show();
    $('#B42_CONTAINER').show();
    $('#B46_CONTAINER').show();
    $('#B50_CONTAINER').show();
    $('#B54_CONTAINER').show();
    $('#B55_CONTAINER').show();
    $('#B56_CONTAINER').show();
    $('#B58_CONTAINER').show();
    $('#B59_CONTAINER').show();
    $('#SummaryEconomicImpact').show();
    $('#submit_Box3').hide(); 
    $('#saveBox1').show();
    $('#saveBox2').show();
    $('#saveBox3').show();
    $('#box1-footer').show();
    $('#rightSidebar').show();

    $('#DuringAnImplementation').show();

    $('#collapse').show();
    //submit event function returns false in order to tell browser not to reload page
    return false;
}

var i =0; //counter to stop scrolling to top after first submission of #main_form
$('#main_form').submit( calculate );


// Hide Shit
$(document).ready(function(){
    $('#B14_CONTAINER').hide();
    $('#B17_CONTAINER').hide();
    $('#B23_CONTAINER').hide();
    $('#B24_CONTAINER').hide();
    $('#B25_CONTAINER').hide();
    $('#B27_CONTAINER').hide();
    $('#B29_CONTAINER').hide();
    $('#B31_CONTAINER').hide();
    $('#B32_CONTAINER').hide();
    $('#B34_CONTAINER').hide();
    $('#B35_CONTAINER').hide();
    $('#B37_CONTAINER').hide();
    $('#B38_CONTAINER').hide();
    $('#B42_CONTAINER').hide();
    $('#B46_CONTAINER').hide();
    $('#B50_CONTAINER').hide();
    $('#B54_CONTAINER').hide();
    $('#B55_CONTAINER').hide();
    $('#B56_CONTAINER').hide();
    $('#B58_CONTAINER').hide();
    $('#B59_CONTAINER').hide();
    $('#SummaryEconomicImpact').hide();
    $('#DuringAnImplementation').hide();
    $('#saveBox1').hide();
    $('#saveBox2').hide();
    $('#saveBox3').hide();
    $('#box1-footer').hide();
    $('#saveSuccessful').hide();
    $('#saveSuccessful2').hide();
    $('#saveSuccessful3').hide();
    $('#collapse').hide();
    $('#rightSidebar').hide();

});

/* /Create our Firebase reference
var myDataRef = new Firebase('https://neonpricing.firebaseio.com/');
$('#main_form').submit(function () {
        console.log(B14);
        var B14 = $('#B14').val();
        console.log(B14);
        myDataRef.push({
            B14: B14
        });
}) */

/* Create our Firebase reference
var myDataRef = new Firebase("https://neonpricing.firebaseio.com/");

$('#main_form').submit(function () {
        var B14 = $('#B14').val();
        var companyName = $('#companyName').val();
        //console.log(companyName);

        myDataRef.push({
            B14: B14,
            companyName:companyName
        });
}) */


var newPushRef;
var myDataRef;

$('#main_form').submit(function () {

    var companyName = $('#companyName').val();
    console.log(companyName);
    myDataRef = new Firebase("https://neonpricing.firebaseio.com/"+ companyName);
    newPushRef = myDataRef.push();

 newPushRef.set({
    companyName: $('#companyName').val(),
    B8: $('#B8').val(),
    B9: $('#B9').val(),
    B14: $('#B14').val(),
    B16: $('#B16').val(),
    B17: $('#B17').val(),
    B20: 1,
    B21: 99,
    B23: $('#B23').val(),
    B24: $('#B24').val(),
    B25: $('#B25').val(),
    B27: $('#B27').val(),
    B29: $('#B29').val(),
    B31: $('#B31').val(),
    B32: $('#B32').val(),
    B34: $('#B34').val(),
    B35: $('#B35').val(),
    B37: $('#B37').val(),
    B38: $('#B38').val(),
    B42: $('#B42').val(),
    B46: $('#B46').val(),
    B50: $('#B50').val(),
    B54: $('#B54').val(),
    B55: $('#B55').val(),
    B56: $('#B56').val(),
    B58: $('#B58').val(),
    B59: $('#B59').val(),
    });    

})


var pushedMyDataRef =  newPushRef; //what do I .set()? pushedMyDataRef or newPushRef? 

$('#saveBox1').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
    
        B8: $('#B8').val(),
        B9: $('#B9').val(),
        B14: $('#B14').val(),
        B16: $('#B16').val(),
        B17: $('#B17').val(),
        });

        $('#saveSuccessful').fadeIn(500).delay(2000).fadeOut(1000);
})

$('#saveBox2').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
        B20: 1,
        B21: 99,
        B23: $('#B23').val(),
        B24: $('#B24').val(),
        B25: $('#B25').val(),
        B27: $('#B27').val(),
        B28: $('#B28').val(),
        B29: $('#B29').val(),
        B31: $('#B31').val(),
        B32: $('#B32').val(),
        B34: $('#B34').val(),
        B35: $('#B35').val(),
        B37: $('#B37').val(),
        B38: $('#B38').val(),
        B42: $('#B42').val(),
        });

        $('#saveSuccessful2').fadeIn(500).delay(1500).fadeOut(1000);
})

$('#saveBox3').click(function (){
    console.log("whuu");
     pushedMyDataRef.set({
        B46: $('#B46').val(),
        B47: $('#B47').val(),
        B48: $('#B48').val(),
        B49: $('#B49').val(),
        B50: $('#B50').val(),
        });

        $('#saveSuccessful3').fadeIn(500).delay(2000).fadeOut(1000);
})



