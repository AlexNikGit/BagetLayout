genJSONData();

function genJSONData() {
   /* заменить на заполнение шаблона в контейнере <div> */
   var onLoadHandler = function( event ) {
      var json_array = event.target.response;
      console.log(json_array);

      var container = document.getElementById( "b_FrameList" );        // заменить на поиск внутри b_ProductOptions

      var arr = json_array.all_frames;
      var out = "";
      var i;
      for(i = 0; i < arr.length; i++) {
         out += "<li>" + "<img src='img/" + arr[i].profile + "'/>" +
                "<p>" + arr[i].text_1 + "</p>" +
                "<span>" + arr[i].text_2+ "</span>";
      }
      container.innerHTML = out;

    };
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', 'json/all_frames.json' );
   xhr.responseType = 'json';
   xhr.withCredentials = true;
   xhr.onload = onLoadHandler;
   xhr.send( );
}
