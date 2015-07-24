var xhr = new XMLHttpRequest();

window.onload = function ( ) {
   getWidget( );
};
/* Пример динамической загрузки страницы (https://gist.github.com/ebidel/3581825):
<script>
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.html5rocks.com/en/tutorials/', true);
xhr.responseType = 'document';
xhr.onload = function(e) {
   var doc = e.target.response;
   var container = document.querySelector('ol');
   container.innerHTML = ''; // clear out.
   var articles = doc.querySelectorAll('article.tutorial_listing');
   var frag = document.createDocumentFragment();
   [].forEach.call(articles, function(art, i) {
      var title = art.querySelector('h3');
      var summary = art.querySelector('.summary');
      var date = art.querySelector('.date');
      // Only include certain types.
      if (['tutorial', 'casestudy', 'article'].indexOf(art.dataset.type) != -1) {
         var li = document.createElement('li');
         li.appendChild(title);
         li.appendChild(date);
         li.appendChild(summary);
         frag.appendChild(li);
      }
   });
   container.appendChild(frag);
};
xhr.send( );
</script>*/
function getWidget( ) {
   var onLoadHandler = function(event) {
      var doc = event.target.response;

      var container = document.getElementById("wl_InputArea");
      var wdg_document = doc.getElementById("w_CreateOrder");
      container.innerHTML = '';       // очистка контейнера
      container.appendChild(wdg_document);
   };

   xhr.open('GET', 'wdg/order.html');
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send();
}