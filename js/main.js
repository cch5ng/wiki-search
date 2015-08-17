//pseudocode

//search icon click event handler
//media wiki ajax query using form input field text value
//parse resulting urls and page titles
function searchBtnEventListener() {
  var query = document.getElementById('search').value;
  console.log(query);
  var queryUrl = 'http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + query + '&callback=results';

  var jqhxr = $.ajax({
    url: queryUrl,
    dataType: 'jsonp'
  }).
    done(function(results) {
      console.log(results);
      
    }).
    error(function(err) {
      console.log('err: ' + err);
    }).
    always(function() {
      console.log('query completed, thanks');
    });
  
}

//search icon click listener
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchBtnEventListener);