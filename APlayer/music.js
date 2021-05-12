const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
            name: "Bones",
            artist: 'Low Roar / Jofridur Akadottir',
            url: 'http://music.163.com/song/media/outer/url?id=472045267.mp3',
            cover: 'http://p1.music.126.net/NFRfRmK8-xHkNgUYiL-FRQ==/109951163563295425.jpg?param=130y130',
        },
        {
            name: "空っぽの空に潰される",
            artist: 'amazarashi',
            url: 'http://music.163.com/song/media/outer/url?id=32046764.mp3',
            cover: 'http://p1.music.126.net/B0kBivyVtuxo2DYltwL2pg==/18355247114887956.jpg?param=130y130',
        },{
            name: "А зори здесь тихие-тихие",
            artist: 'Lube',
            url: 'http://music.163.com/song/media/outer/url?id=34928627.mp3',
            cover: 'http://p2.music.126.net/QMA8nyXIS32nvi2KML2rvA==/109951164922515213.jpg?param=130y130',
        }
    ]
});