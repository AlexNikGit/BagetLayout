var xhr = new XMLHttpRequest();

window.onload = function ( ) { };
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
function loadCWidget( ) {    /* Load Composite Widget */
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "wl_InputArea" );
      var cw_element = doc.getElementById( "cw_OrderingStage" );
      container.innerHTML = '';       // очистка контейнера
      container.appendChild( cw_element );

      /* загружаем скрипты и стили для обработки загружаемого комопзитного виджета */
      var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/cw_OrderingStage.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/cw_OrderingStage.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );
   };
   xhr.open( 'GET', 'pages/c_widgets/order.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}
