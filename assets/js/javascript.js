var queryURL = "https://api.icowatchlist.com/public/v1/"
var dataTimer = setInterval(icoData, 5000);

function icoData(){

}

$.ajax({
url: (queryURL)
}).then (function(response){
    var data = [];
    data.push(response);
    var parsedData = JSON.parse(data);
    var finished = parsedData.ico.finished;
    var live = parsedData.ico.live;
    var upcoming = parsedData.ico.upcoming;
    for (var i=0;i<upcoming.length;i++){
        var card = $('<div>');
        card.attr('class','card');
        var img = $('<img>');
        img.attr('class','card-img-top');
        img.attr('src',upcoming[i].image);
        img.attr('alt','Card img cap');
        var cardBody = $('<div>');
        cardBody.attr('class','card-body');
        var name = $('<h5>');
        name.attr('class','card-title text-center');
        name.text(upcoming[i].name);
        var des = $('<p>');
        des.attr('class','card-text');
        des.text(upcoming[i].description);
        var time = $('<p>');
        time.attr('class','card-text');
        time.append('Start date: '+upcoming[i].start_time+'<br>');
        time.append('End date: '+upcoming[i].end_time);
        // time.slice(9);
        var site = $('<button>');
        var link = upcoming[i].website_link;
        site.attr('href',link);
        site.attr('class','btn btn-primary btn-lg btn-block');
        // site.attr('id','site')
        // site.attr('target','none');
        site.text('Site');
        var object = $('<object>');
        // console.log(upcoming[i]);
        // console.log(upcoming[i].name);
        cardBody.append(name,des,time,site);
        card.append(img,cardBody);
        $('#container1').append(card);
        console.log(upcoming[i]);
    }
    $(document).on('click','.btn',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(eggs);
        $('#container2').append(object);
    });
    // console.log(finished,live,upcoming);
});