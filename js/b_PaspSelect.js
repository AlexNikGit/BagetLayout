genPaspList();
genPaspSheets();

function genPaspList( ) {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_PaspList" );

      var arr = json_array.pasp_list;
      var out = '';
      out += '<ul id="listPaspartu">';
      var i;
      for( i = 0; i < arr.length; i++ ) {
         out += '<li>' +
            '<img style="background-color: ' + arr[ i ].color + ';"/>' +
            '<span>' + arr[ i ].code + '</span>' +
            '<span>' + arr[ i ].c_text + '</span>' +
            '</li>';
      }
      out += '</ul>';

      container.innerHTML = out;
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/pasp_list.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function genPaspSheets( ) {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_PaspSheets" );

      var arr = json_array.pasp_list;
      var out = '';
      out += '<ul id="listPaspartu">';
      var i;
      for( i = 0; i < arr.length; i++ ) {
         out += '<li>' +
            '<img style="background-color: ' + arr[ i ].color + ';"/>' +
            '<span>' + arr[ i ].code + '</span>' +
            '<span>' + arr[ i ].c_text + '</span>' +
            '</li>';
      }
      out += '</ul>';

      container.innerHTML = out;
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/pasp_list.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}
