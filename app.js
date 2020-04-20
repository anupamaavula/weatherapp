
$('.button').click(
		function(){

			var inputValue=$('input').val();
			console.log(inputValue);

			$.ajax({

				method:'GET',
				url  : 'https://api.openweathermap.org/data/2.5/weather?zip='+inputValue+'	&appid=93366594e122065ac46ecc951c9a81df',
				dataType : 'json',
				success: function(data){

					console.log(data);
					//GEt values from the JSON  result of API.
					var nameValue=data['name'];
					var iconValue=data['weather'][0]['icon'];
					var tempValue=data['main']['temp'];
					var desValue=data['weather'][0]['description'];
					var dateValue=[moment().format("llll")];
					var timezonev=data['timezone'];
					var timevalue=moment().utcOffset(timezonev/60).format("llll"); 

					/// Display values back in HTMl.
					$('.name').html(nameValue);
					$(".icon").html("<img src=http://openweathermap.org/img/w/"+ iconValue + ".png >")
					$('.temp').html( parseInt( ((tempValue-273.15)*1.8)+32)+'&#8457' );
					$('.des').html(desValue)
					$('.time').html(timevalue) 


				},
				error: function(data){
            		alert("Invalid ZIPCODE Entered");
        		}

			})
		}
);














