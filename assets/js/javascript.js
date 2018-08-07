var queryURL = "https://api.icowatchlist.com/public/v1/"
var currentHtml = document.location.pathname;
console.log(currentHtml);
// var dataTimer = setInterval(icoData, 5000);

// function icoData(){

// }

$.ajax({
url: (queryURL)
}).then (function(response){
    // var data = [];
    // data.push(response);
    var parsedData = JSON.parse(response);
    var live = parsedData.ico.live;
    var upcoming = parsedData.ico.upcoming;
    var finished = parsedData.ico.finished;
    // Live ico's
    for (var i=0;i<live.length;i++){
        var card = $('<div>');
        card.attr('class','card');
        var img = $('<img>');
        img.attr('class','card-img-top');
        img.attr('src',live[i].image);
        img.attr('alt','Card img cap');
        var cardBody = $('<div>');
        cardBody.attr('class','card-body');
        var name = $('<h5>');
        name.attr('class','card-title text-center');
        name.text(live[i].name);
        var des = $('<p>');
        des.attr('class','card-text');
        des.text(live[i].description);
        var time = $('<p>');
        time.attr('class','card-text');
        time.append('Start date: '+live[i].start_time+'<br>');
        time.append('End date: '+live[i].end_time);
        var companySite = $('<h6>');
        companySite.text('Company Site');
        var companyLink = live[i].website_link;
        var companyInternal = $('<button>');
        companyInternal.attr('href',companyLink);
        companyInternal.attr('class','btn btn-warning');
        companyInternal.attr('id','company-internal');
        companyInternal.text('Internal');
        var companyExternal = $('<a>');
        companyExternal.attr('href',companyLink);
        companyExternal.attr('class','btn btn-info');
        companyExternal.attr('target','_blank');
        companyExternal.text('External');
        var object = $('<object>');
        var icoWatchList = $('<h6>');
        icoWatchList.attr('id','ico-watch-list-head')
        icoWatchList.text('ICO Watch List');
        var icoLink = live[i].icowatchlist_url;
        var icoInternal = $('<button>');
        icoInternal.attr('href',icoLink);
        icoInternal.attr('class','btn btn-warning');
        icoInternal.attr('id','ico-internal');
        icoInternal.text('Internal');
        var icoExternal = $('<a>');
        icoExternal.attr('href',icoLink);
        icoExternal.attr('class','btn btn-info');
        icoExternal.attr('target','_blank');
        icoExternal.text('External');
        // console.log(live[i]);
        // console.log(live[i].name);
        cardBody.append(name,des,time,companySite,companyInternal,companyExternal,icoWatchList,icoInternal,icoExternal);
        card.append(img,cardBody);
        $('#container1-live').append(card);
        console.log(live[i]);
    }
    $(document).on('click','#company-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    $(document).on('click','#ico-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    if (currentHtml === 'tayloraanenson.github.io/cryptoform/'){
        $(document).ready(function(){
            var pageLoad = live[1].website_link;
            console.log(pageLoad);
            object.attr('data',pageLoad);
            $('#container2').append(object);
        });
    }
    // Upcoming ico's
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
        var companySite = $('<h6>');
        companySite.text('Company Site');
        var companyLink = upcoming[i].website_link;
        var companyInternal = $('<button>');
        companyInternal.attr('href',companyLink);
        companyInternal.attr('class','btn btn-warning');
        companyInternal.attr('id','company-internal');
        companyInternal.text('Internal');
        var companyExternal = $('<a>');
        companyExternal.attr('href',companyLink);
        companyExternal.attr('class','btn btn-info');
        companyExternal.attr('target','_blank');
        companyExternal.text('External');
        var object = $('<object>');
        var icoWatchList = $('<h6>');
        icoWatchList.attr('id','ico-watch-list-head')
        icoWatchList.text('ICO Watch List');
        var icoLink = upcoming[i].icowatchlist_url;
        var icoInternal = $('<button>');
        icoInternal.attr('href',icoLink);
        icoInternal.attr('class','btn btn-warning');
        icoInternal.attr('id','ico-internal');
        icoInternal.text('Internal');
        var icoExternal = $('<a>');
        icoExternal.attr('href',icoLink);
        icoExternal.attr('class','btn btn-info');
        icoExternal.attr('target','_blank');
        icoExternal.text('External');
        // console.log(upcoming[i]);
        // console.log(upcoming[i].name);
        cardBody.append(name,des,time,companySite,companyInternal,companyExternal,icoWatchList,icoInternal,icoExternal);
        card.append(img,cardBody);
        $('#container1-upcoming').append(card);
        console.log(upcoming[i]);
    }
    $(document).on('click','#company-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    $(document).on('click','#ico-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    if (currentHtml === 'tayloraanenson.github.io/cryptoform/upcoming.html'){
        $(document).ready(function(){
            var pageLoad = upcoming[0].website_link;
            console.log(pageLoad);
            object.attr('data',pageLoad);
            $('#container2').append(object);
        });
    }
    // Finished ico's
    for (var i=0;i<finished.length;i++){
        var card = $('<div>');
        card.attr('class','card');
        var img = $('<img>');
        img.attr('class','card-img-top');
        img.attr('src',finished[i].image);
        img.attr('alt','Card img cap');
        var cardBody = $('<div>');
        cardBody.attr('class','card-body');
        var name = $('<h5>');
        name.attr('class','card-title text-center');
        name.text(finished[i].name);
        var des = $('<p>');
        des.attr('class','card-text');
        des.text(finished[i].description);
        var time = $('<p>');
        time.attr('class','card-text');
        time.append('Start date: '+finished[i].start_time+'<br>');
        time.append('End date: '+finished[i].end_time);
        var roi = $('<p>');
        roi.attr('class','card-text');
        roi.text('ROI: '+finished[i].all_time_roi);
        var symbol = $('<p>');
        symbol.attr('class','card-text');
        symbol.text('Symbol: '+finished[i].coin_symbol);
        var price = $('<p>');
        price.attr('class','card-text');
        price.text('Price: '+finished[i].price_usd);
        var companySite = $('<h6>');
        companySite.text('Company Site');
        var companyLink = finished[i].website_link;
        var companyInternal = $('<button>');
        companyInternal.attr('href',companyLink);
        companyInternal.attr('class','btn btn-warning');
        companyInternal.attr('id','company-internal');
        companyInternal.text('Internal');
        var companyExternal = $('<a>');
        companyExternal.attr('href',companyLink);
        companyExternal.attr('class','btn btn-info');
        companyExternal.attr('target','_blank');
        companyExternal.text('External');
        var object = $('<object>');
        var icoWatchList = $('<h6>');
        icoWatchList.attr('id','ico-watch-list-head')
        icoWatchList.text('ICO Watch List');
        var icoLink = finished[i].icowatchlist_url;
        var icoInternal = $('<button>');
        icoInternal.attr('href',icoLink);
        icoInternal.attr('class','btn btn-warning');
        icoInternal.attr('id','ico-internal');
        icoInternal.text('Internal');
        var icoExternal = $('<a>');
        icoExternal.attr('href',icoLink);
        icoExternal.attr('class','btn btn-info');
        icoExternal.attr('target','_blank');
        icoExternal.text('External');
        // console.log(finished[i]);
        // console.log(finished[i].name);
        cardBody.append(name,des,time,roi,symbol,price,companySite,companyInternal,companyExternal,icoWatchList,icoInternal,icoExternal);
        card.append(img,cardBody);
        $('#container1-finished').append(card);
        console.log(finished[i]);
    }
    $(document).on('click','#company-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    $(document).on('click','#ico-internal',function(){
        var spam = $(this).button();
        var eggs = spam[0].attributes.href.value;
        object.attr('data',eggs);
        console.log(spam,eggs);
        $('#container2').append(object);
    });
    if (currentHtml === 'tayloraanenson.github.io/cryptoform/finished.html'){
        $(document).ready(function(){
            var pageLoad = finished[0].website_link;
            console.log(pageLoad);
            object.attr('data',pageLoad);
            $('#container2').append(object);
        });
    }
    // console.log(finished,live,upcoming);
});