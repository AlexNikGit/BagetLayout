loadProductOptions( );

function loadProductOptions( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "bl_ProductOptions" );
      var bl_element = doc.getElementById( "b_ProductOptions" );
      //container.innerHTML = '';       // очистка контейнера
      container.appendChild( bl_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/b_ProductOptions.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/b_ProductOptions.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/blocks/b_ProductOptions.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

