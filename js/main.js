//pseudocode
(function() {

  var queryTerm;

  //search icon click event handler
  //media wiki ajax query using form input field text value
  //parse resulting urls and page titles
  function searchIconEventListener() {
    queryTerm = document.querySelector('#search').value;
    console.log('queryTerm: ' + queryTerm);
    console.log('got here');
    var url = 'http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + queryTerm+ '&callback=results';
    console.log(url);

    var jqhxr = $.ajax({
      url: url,
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
  var searchIcon = document.querySelector('.ion-search');
  console.log(searchIcon);

  // var searchBtn = document.getElementById('searchBtn');
  searchIcon.addEventListener('click', searchIconEventListener);


}());