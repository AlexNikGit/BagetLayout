genPaspList();

function genPaspList( ) {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_PaspList" );

      /* var block = document.createElement('div');
      block.id = 'b_FrameTypeList'; */

      var arr = json_array.pasp_list;
      var out = '';
      out += '<div class="gc_ThinBorder">Профили</div>';
      out += '<ul id="listFrameType">';
      var i;
      for( i = 0; i < arr.length; i++ ) {
         out += '<li>' +
            '<img style="background-color: ' + arr[ i ].color + ';"/>' +
            '<span>' + arr[ i ].code + '</span>' +
            '<span>' + arr[ i ].c_text + '</span>' +
            '</li>';
      }
      out += '</ul>';

      /* block.innerHTML = out;
      container.appendChild( block ); */

      container.innerHTML = out;
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/pasp_list.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}
