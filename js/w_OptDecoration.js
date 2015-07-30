function loadFrameSelectBlock( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "bl_FrameSelect" );        // заменить на поиск внутри b_ProductOptions
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "b_FrameSelect" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/b_FrameSelect.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/b_FrameSelect.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/blocks/b_FrameSelect.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function loadPaspSelectBlock( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "bl_PaspSelect" );        // заменить на поиск внутри b_ProductOptions
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "b_PaspSelect" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/b_PaspSelect.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/b_PaspSelect.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/blocks/b_PaspSelect.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function loadDecorSelectBlock( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "bl_DecorSelect" );        // заменить на поиск внутри b_ProductOptions
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "b_DecorSelect" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      /*var js_ref=document.createElement('script');
       js_ref.setAttribute("src", "js/b_DecorSelect.js");*/
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/b_DecorSelect.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      /*doc_header.appendChild( js_ref );*/
      doc_header.appendChild( css_ref );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/blocks/b_DecorSelect.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}