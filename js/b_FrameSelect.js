genFrameTypes();
genFrameModel();

function genFrameTypes() {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_FrameList" );

      var block = document.createElement('div');
      block.id = 'b_FrameTypeList';

      var arr = json_array.frame_types;
      var out = '';
      out += '<div class="gc_ThinBorder">Профили</div>';
      out += '<ul id="listFrameType">';
      var i;
      for( i = 0; i < arr.length; i++ ) {
         out += '<li>' +
                   '<img src="img/frame_types/' + arr[ i ].profile + '"/>' +
                   '<span>' + arr[ i ].code + '</span>' +
                   '<span>' + arr[ i ].type + '</span>' +
                   '<span>' + arr[ i ].size + '</span>' +
                   '<span>' + arr[ i ].mater + '</span>' +
                   '<span>' + arr[ i ].price + '</span>' +
                '</li>';
      }
      out += '</ul>';

      block.innerHTML = out;
      container.appendChild( block );
    };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/frame_types.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}

function genFrameModel( ) {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_FrameList" );

      var block = document.createElement('div');
      block.id = 'b_FrameModelList';

      var arr = json_array.frame_models;
      var out = '';
      out += '<div class="gc_ThinBorder">Модели</div>';
      out += '<ul id="listFrameModel">';
      var i;
      for( i = 0; i < arr.length; i++ ) {
         out += '<li>' +
                   '<figure>' +
                      '<p><img src="img/frame_models/' + arr[ i ].image + '" alt="изображение багета"></p>' +
                      '<figcaption>' + arr[ i ].code + '<br>' + arr[ i ].color + '</figcaption>' +
                   '</figure>' +
                '</li>';
      }
      out += '</ul>';

      block.innerHTML = out;
      container.appendChild( block );
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/frame_models.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}