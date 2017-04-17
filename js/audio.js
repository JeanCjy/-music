var audioControler = {
	server : 'http://musicapi.duapp.com/api.php',
	playAudio:function (music){console.log(music)
		var $play = $('.play');
		$play.find('.songname').html(music.name).end()
		     .find('.ar').html(music.ar[0].name).end()
		     .find('.pic img').attr('src','img/default.gif');
		
		$.ajax({
		type:"get",
		url:this.server + "?type=url&id=" + music.id,
		success:function(data){
			if(data.code == 200){console.log(data)
				var audio = $('#audio')[0];
				audio.src = data.data[0].url;
				audio.play();
				$play.find('.pic img').attr('src',music.al.picUrl);
				$('#play').addClass('hide');
				$('#pause').removeClass('hide');
				
				}
			}
		});
	}
	
};

(function(){
	var flag = true;
	$('#pause').on('click',function(){
		if(flag){
			$(this).addClass('hide');$('#play').removeClass('hide');
			$('#audio')[0].pause();flag = false;
		}
	})
	$('#play').on('click',function(){
		if(!flag){
			$(this).addClass('hide');$('#pause').removeClass('hide');
			$('#audio')[0].play();flag = true;
		}
	})

	$('#audio')[0].onended = function(){
		$('#next').trigger('click');
	}
	
	
})()




