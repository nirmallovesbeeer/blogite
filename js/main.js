$(document).ready(function() {
    getLatestNews();
    getInspQuotes();

});

getLatestNews = () => {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://google-news.p.rapidapi.com/v1/topic_headlines?country=US&lang=en&topic=technology",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-news.p.rapidapi.com",
            "x-rapidapi-key": "136cbf9dfamsha7f0f5fcb62cb58p12cbbcjsn535fa2193b47"
        }
    }

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}

getInspQuotes = () => {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }

    $.ajax(settings).done(function(response) {
        const data = JSON.parse(response);
        var news_Item = $(".news-item");
        news_Item.empty();

        $.each(data, function(index, item) {
            if (index < 4) {
                news_Item.append(
                    '<div class="col-md-6">'+
                            '<blockquote class="blockquote text-center">'+
                                '<p class="mb-0">'+item.text+'</p>'+
                                '<footer class="blockquote-footer">'+item.author+'</footer>'+
                              '</blockquote>'+
                        '</div>'
                )
            } else {
                index = data.length;
            }
        });
    });
}