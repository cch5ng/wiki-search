(function() {

  var queryTerm;

  function displayNoResults(str) {
    $('.search-results').removeClass('hidden');
    var section = document.querySelector('.search-results');
    var p = document.createElement('p');
    p.innerHTML = 'There were no search results for <em>' + str + '</em>...';
    section.appendChild(p);
  }

  function displaySearchResultsHead(str) {
    $('.search-results').removeClass('hidden');
    var section = document.querySelector('.search-results');
    var p = document.createElement('p');
    p.innerHTML = 'Search results for <em>' + str + '</em>...';
    section.appendChild(p);
  }

  //helper function to display search results
  function displayWikiPageSummary(ar, idx) {
    var section = document.querySelector('.search-results');

    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    h3.innerHTML = "<a href='" + ar[3][idx] + "' target='_blank'>" + ar[1][idx] + "</a>";
    article.appendChild(h3);

    var p = document.createElement('p');
    p.innerHTML = ar[2][idx];
    article.appendChild(p);

    section.appendChild(article);
  }

  //search icon click event handler
  //media wiki ajax query using form input field text value
  //parse resulting urls and page titles
  function searchIconEventListener() {
    var section = document.querySelector('.search-results');

    if (section.childElementCount > 0) {
      section.innerHTML = '';
    }

    queryTerm = document.querySelector('#search').value;
    var url = 'http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=' + queryTerm+ '&callback=results';

    var jqhxr = $.ajax({
      url: url,
      dataType: 'jsonp'
    }).
      done(function(results) {
        var resultsAr = results;
        //console.log(resultsAr);
        var resultsLength = resultsAr[1].length;

        if (resultsLength > 0) {
          displaySearchResultsHead(resultsAr[0]);

          for (var i = 0; i < resultsLength; i++) {
            displayWikiPageSummary(resultsAr, i);
          }
        } else {
          displayNoResults(resultsAr[0]);
        }
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
  searchIcon.addEventListener('click', searchIconEventListener);

}());