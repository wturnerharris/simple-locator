jQuery(function(e){function t(){var t=e("#wpsl_address").val(),l=e("#wpsl_city").val(),o=e("#wpsl_state").val(),a=e("#wpsl_zip").val(),n=t+" "+l+" "+o+" "+a;return n}function l(t){geocoder=new google.maps.Geocoder,geocoder.geocode({address:t},function(t,l){if(l==google.maps.GeocoderStatus.OK){var a=t[0].geometry.location.lat(),n=t[0].geometry.location.lng();o(a,n),e("#publish").unbind("click").click()}else alert("The address could not be located.")})}function o(t,l){e("#wpsl_latitude").val(t),e("#wpsl_longitude").val(l)}function a(){if(e("#wpslmap").length>0){var t=e("#wpsl_latitude").val(),l=e("#wpsl_longitude").val();""!==t&&""!==l&&(e("#wpslmap").show(),n(t,l))}}function n(e,t){var l,o=new google.maps.Map(document.getElementById("wpslmap"),{zoom:14,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scaleControl:!1});l=new google.maps.Marker({position:new google.maps.LatLng(e,t),map:o})}function s(){var t=e("#wpsl_post_type").val();"location"!==t?(e("#field_wpsl").attr("disabled","disabled").removeAttr("checked"),e("#field_custom").attr("checked","checked"),e(".latlng").show()):(e("#field_wpsl").removeAttr("disabled"),i()),e("#lat_select, #lng_select").empty(),d(t)}function c(){var t=e("#lat_select").val(),l=e("#lng_select").val();e("#wpsl_lat_field").val(t),e("#wpsl_lng_field").val(l)}function i(){e("#field_wpsl").attr("checked","checked"),e("#field_custom").removeAttr("checked","checked"),e("#wpsl_lat_field").val("wpsl_latitude"),e("#wpsl_lng_field").val("wpsl_longitude"),e("#lat_select").val("wpsl_latitude"),e("#lng_select").val("wpsl_longitude")}function p(){"location"===e("#wpsl_post_type").val()?e(".wpsl-label-row").show():e(".wpsl-label-row").hide()}function d(t){var l=e("#wpsl_show_hidden").is(":checked")?"true":"false";e.ajax({type:"GET",url:ajaxurl,data:{action:"wpslposttype",nonce:wpsl_locator.locatorNonce,post_type:t,show_hidden:l},success:function(l){console.log(l),e("#lat_select, #lng_select").html(l.fields),c(),"location"===t&&i()}})}function u(t){"none"===t?e("#map-styles-choice, #map-styles-custom").hide():"custom"===t?(e("#map-styles-custom").show(),e("#map-styles-choice").hide()):(e("#map-styles-choice").show(),e("#map-styles-custom").hide())}var m=e("form[name='post']");e(m).find("#publish").on("click",function(e){e.preventDefault();var o=t();l(o)}),e(document).ready(function(){a()}),e(document).ready(function(){p();var t=e("#wpsl_post_type").val();"location"!==t&&(e("#field_wpsl").attr("disabled","disabled").removeAttr("checked"),e("#field_custom").attr("checked","checked"));var l=e('input[name="wpsl_field_type"]:checked').val();"wpsl"===l&&e(".latlng").hide()}),e(document).on("change","#wpsl_post_type, #wpsl_show_hidden",function(){s(),p()}),e(document).on("change",'input[name="wpsl_field_type"]:radio',function(){var t=e(this).val();"wpsl"==t?(e(".latlng").hide(),i()):(e(".latlng").show(),c())}),e(document).on("change","#lat_select, #lng_select",function(){c()}),e(document).ready(function(){e(document).on("click","#upload_image_button",function(){return formfield=e("#upload_image").attr("name"),tb_show("","media-upload.php?type=image&TB_iframe=true"),!1}),window.send_to_editor=function(t){imgurl=e("img",t).attr("src");var l='<img src="'+imgurl+'" id="map-pin-image" />';l+='<input id="remove_map_pin" type="button" value="'+wpsl_locator.remove+'" class="button action" style="margin-right:5px;margin-left:10px;" />',e("#map-pin-image-cont").append(l),e("#upload_image_button").remove(),e("#wpsl_map_pin").val(imgurl),tb_remove()}}),e(document).on("click","#remove_map_pin",function(t){t.preventDefault(),e("#map-pin-image").remove(),e("#wpsl_map_pin").prop("value",""),e("#map-pin-image-cont").append('<input id="upload_image_button" type="button" value="'+wpsl_locator.upload+'" class="button action" />'),e(this).remove()}),e(document).on("change","#wpsl_map_styles_type",function(){var t=e(this).val();u(t)})});