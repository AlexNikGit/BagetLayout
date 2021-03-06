loadDefaultTabContent( );

function loadDefaultTabContent( ) {
   loadDecorationWidget( );
}

function loadDecorationWidget( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "tab_c1" );
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "w_OptDecoration" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/w_OptDecoration.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/w_OptDecoration.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/widgets/w_OptDecoration.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function loadPickingWidget( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "tab_c2" );
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "w_PickingOptions" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      /*var js_ref=document.createElement('script');
      js_ref.setAttribute("src", "js/w_PickingOptions.js");
      var css_ref=document.createElement("link");
      css_ref.setAttribute("rel", "stylesheet");
      css_ref.setAttribute("type", "text/css");
      css_ref.setAttribute("href", "css/w_PickingOptions.css");
      var doc_header = document.getElementsByTagName( "head" )[0];
      doc_header.appendChild( js_ref );
      doc_header.appendChild( css_ref );*/
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/widgets/w_OptPicking.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function loadMaterialWidget( ) {
   var onLoadHandler = function( event ) {
      var doc = event.target.response;

      var container = document.getElementById( "tab_c3" );
      container.innerHTML = '';       // очистка контейнера
      var wdg_element = doc.getElementById( "w_MaterialUsage" );
      container.appendChild( wdg_element );

      /* загружаем скрипты и стили для обработки загружаемого блока */
      /*var js_ref=document.createElement('script');
       js_ref.setAttribute("src", "js/w_MaterialUsage.js");
       var css_ref=document.createElement("link");
       css_ref.setAttribute("rel", "stylesheet");
       css_ref.setAttribute("type", "text/css");
       css_ref.setAttribute("href", "css/w_MaterialUsage.css");
       var doc_header = document.getElementsByTagName( "head" )[0];
       doc_header.appendChild( js_ref );
       doc_header.appendChild( css_ref );*/
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'pages/widgets/w_MaterialUsage.html' );
   xhr.responseType = "document";
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}