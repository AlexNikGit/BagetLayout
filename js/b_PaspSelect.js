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

      var arr = json_array.pasp_sheets;
      var sps = 1;    /* selected paspartu sheet */
      var out = '';
      var i;
      out += '<section class="dropdown">';
      out +=    '<label>Слои багета</label>';
      out +=    '<div>';
      out +=       '<ul>';
      for( i = 0; i < arr.length; i++ ) {
         out +=       '<li><a href="index.html">' + arr[ i ].sheet_num + '-й слой</a></li>';
      }
      out +=       '</ul>';
      out +=    '</div>';
      out += '</section>';
      out += '<section class="lc_PaspSheetInfo gc_ThinBorder">';
      out +=    '<h5>' + arr[ sps ].sheet_num + '-й слой [' + arr[ sps ].pasp_code + ']<button>...</button></h5>';
      out +=    '<div>';
      /* добавить возможность выбора разной ширины для разных (верх, право, низ, лево) полей */
      out +=       '<span>Ширина поля</span>';
      out +=       '<input type="text" name="SheetWidth" id="txtPaspSheetWidth" value="' + arr[ sps ].pasp_width + '">';
      out +=    '</div>';
      out +=    '<div>';
      out +=       '<span>Цвет/текстура</span>';
      out +=       '<img style="background-color: ' + arr[ sps ].color + ';"/>';
      out +=    '</div>';
      out += '</section>';
      out += '<section class="lc_PaspSheetManip  gc_ThinBorder">';
      out +=    '<div>';
      /* добавить обработчик oncheck (при выборе появляется выбор декора для паспарту в поле "кант/декор") */
      out +=       '<input type="checkbox">';
      out +=       '<span>Добавить декор</span>';
      out +=    '</div>';
      out +=    '<button>Добавить слой</button>';
      out += '</section>';
      container.innerHTML = out;
   };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/pasp_sheets.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}
