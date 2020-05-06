function initMap() {
    var options = {
        zoom: 4,
        center: {lat:8.375486, lng:36.039577}
    }
    var map = new google.maps.Map(document.querySelector('.map'), options)

    var markers = [

        {
            coords:{lat:8.254900, lng:34.593900},
            content: `
                <p>
                    Wenraya Aballa sings "Ngato dwöt cengnge" ("The one who sits idly") in Gambella town. Recorded 2017. Find more information and read a translation at <a href="http://sbmusicology.com/ngato.html" target="_blank">sbmusicology.com/ngato.html</a>
                </p>
                <br>
                
                <audio
                controls
                src="http://sbmusicology.com/my-project_music-map/audio/worksong.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>`
            },
        {
            coords:{lat:9.090485, lng:36.545092},
            content: `
            <p>
                Nuredin Abas sings "Iyasee," a traditional Oromo song, in Nekemte in 2016. Find more information and read a translation at <a href="http://sbmusicology.com/iyasee.html" target="_blank">sbmusicology.com/iyasee.html</a>
            </p>
            <br>
            
            <audio
            controls
            src="http://sbmusicology.com/my-project_music-map/audio/iyasee.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>`
        },
        {
            coords:{lat:7.8976, lng:34.5390},
            content: `
            
            <p>
                Okwori Ojullu sings and accompanies himself on the Ethiopian thumb piano (called the thoom) in Abwobo in 2016.
            </p>
            <br>
            
            <audio
            controls
            src="http://sbmusicology.com/my-project_music-map/audio/okwori.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>`
        },
        {
            coords: {lat:7.552787, lng:37.855030},
            content: `
            
            <p>
                Seblewerk Eshetu leads the Hadiya cultural troupe in "Uweye," a traditional song that women sing to one another in the marketplace. Recorded in Hoseana in 2015.
            </p>
            <br>
            
            <audio
            controls
            src="http://sbmusicology.com/my-project_music-map/audio/uwaye.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>`
        },
        {
            coords: {lat:-6.098700, lng:36.036900},
            content: `
                <p>
                    Wagogo performers sing and play at the Annual Cigogo Music Festival in Dodoma, Tanzania.
                </p>
                <br>
                <audio
                controls
                src="http://sbmusicology.com/my-project_music-map/audio/wagogo.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            `
        },
    ]

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }



    // add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            // icon:'put url here'
        });

        //
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        }
    
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        }); 
    }
}
