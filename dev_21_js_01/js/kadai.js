// 言語切り替え

let lan = document.getElementById("lan");

console.log(lan.value);

$("#lan").on("change", function(){

    let title = ""
    let semititle = ""
    let about__sentence = "";
    let result__wrapper__text= "";
    let map__title = "";

    if (lan.value === "日本語") {
        title = 'ぐるれこめんど'
        semititle = '行きたいお店を見つけてくれる'
        about__sentence = 'あなたが食べたいグルメに合わせてお店を選んでくれるサービスです。紹介するお店は全て「食べログ百名店」に選べれている一流のお店です。新たなお店との出会いをお届けします。※β版のため紹介するお店は東京都内のお店に限定されています。'
        result = '<p id="result">れこめんどするお店</p>'
        map__title = 'マップ';
        // result__wrapper__text = 'れこめんどするお店'
    }else if (lan.value === "English") {
        title = 'GuruRecommend'
        semititle = 'It helps you find new restaurant.'
        about__sentence = 'It is a service that allows you to choose a restaurant　that matches the gourmet food you want to eat. This is a service that will help you choose a restaurant that matches the kind of food you want to eat. All of the restaurants we introduce are top-notch restaurants that have been selected as one of the "100 best restaurants on 食べログ". This is a great way to meet new restaurants. *This is a beta version, so the stores introduced are limited to those in Tokyo.'
        result = '<p id="result">Recommended Reutaurant</p>'   
        map__title = 'Map';   
        // result__wrapper__text = 'Recommended Reutaurant'
    }

    $(".top__title").text(title);
    $(".top__semititle").text(semititle);
    $(".about__sentence").text(about__sentence);
    $("#result").html(result);
    $("#map__title").text(map__title);

    $(".result__wrapper__text").css({
        'width':'100%',
        'font-size':'24px',
        'font-family':'Arial, Helvetica, sans-serif',
        'font-weight':'bold',
        'text-align':'center'
    });

});



// メニュー選び

let type = document.getElementById("type");

$("#btn").on("click", function(){
    
    let view = "";
    let picture = "";

    if (type.value === "カレー") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '<a href="https://tabelog.com/tokyo/A1306/A130601/13076645/" target="balnk" style="text-decoration:none;color:#b99b00">ヨゴロウ</a>'
            $("#result__picture").attr('src', 'img/curry__1.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1130333619203!2d139.70876521525864!3d35.67421868019599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cbd5d585555%3A0xfa0e08f9331f2889!2z44Oo44K044Ot44Km!5e0!3m2!1sja!2sjp!4v1628900373722!5m2!1sja!2sjp');
        }
        if (r === 2) {
            view = '<a href="https://tabelog.com/tokyo/A1314/A131402/13239329/" target="balnk" style="text-decoration:none;color:#b99b00">ゼロワンカレーA.o.D(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/curry__2.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3242.202264214934!2d139.743345!3d35.647388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7168af400f9c179e!2z44K844Ot44Ov44Oz44Kr44Os44O8IEEuby5ELg!5e0!3m2!1sja!2sus!4v1628911144615!5m2!1sja!2sus');
        }
        if (r === 3) {
            view = '<a href="https://tabelog.com/tokyo/A1323/A132302/13120294/" target="balnk" style="text-decoration:none;color:#b99b00">カッチャル バッチャル</a>'
            $("#result__picture").attr('src', 'img/curry__3.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9569656044564!2d139.7272682146449!3d35.727276880183574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d74df5fe229%3A0xd2b531cdf7ba2112!2z44Kr44OD44OB44Oj44Or44OQ44OD44OB44Oj44Or!5e0!3m2!1sja!2sjp!4v1628911410585!5m2!1sja!2sjp');
        }
        if (r === 4) {
            view = '<a href="https://tabelog.com/tokyo/A1315/A131503/13178494/" target="balnk" style="text-decoration:none;color:#b99b00">とんかつ檍のカレー屋いっぺこっぺ</a>'
            $("#result__picture").attr('src', 'img/curry__4.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51841.69323964793!2d139.71394917910155!3d35.699013300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0fe8aabaa3%3A0x322753cbfcac654f!2z44Go44KT44GL44Gk5qqN44Gu44Kr44Os44O85bGLIOOBhOOBo-OBuuOBk-OBo-OBuiDpo6_nlLDmqYvlupc!5e0!3m2!1sja!2sjp!4v1628911548049!5m2!1sja!2sjp');
        }
        if (r === 5) {
            view = '<a href="https://tabelog.com/tokyo/A1305/A130503/13212319/" target="balnk" style="text-decoration:none;color:#b99b00">カレーライス専門店 ブラザー(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/curry__5.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.501635093452!2d139.70216021464444!3d35.71387968018667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d4bbdb5aa1f%3A0xd5f5c0a0d6ba88e3!2z44Kr44Os44O844Op44Kk44K55bCC6ZaA5bqX44OW44Op44K244O8!5e0!3m2!1sja!2sjp!4v1628911645408!5m2!1sja!2sjp');
        }

    } else if (type.value === "中華料理") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '<a href="https://tabelog.com/tokyo/A1316/A131602/13190771/" target="balnk" style="text-decoration:none;color:#b99b00">蓮香（レンシャン）</a>'
            $("#result__picture").attr('src', 'img/china__1.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.329853781268!2d139.724543714642!3d35.64424398020287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0f32ff1a31%3A0x6d614dc5b6d88b8e!2z6JOu6aaZ!5e0!3m2!1sja!2sjp!4v1628911722657!5m2!1sja!2sjp');
        }
        if (r === 2) {
            view = '<a href="https://tabelog.com/tokyo/A1307/A130701/13017089/" target="balnk" style="text-decoration:none;color:#b99b00">チャイナルーム</a>'
            $("#result__picture").attr('src', 'img/china__2.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.687196615386!2d139.72613211464258!3d35.660077680199265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b76fbddfd29%3A0x8913153af9c520bf!2z5Lit5Zu95paZ55CGIOODgeODo-OCpOODiuODq-ODvOODoA!5e0!3m2!1sja!2sjp!4v1628911995072!5m2!1sja!2sjp');
        }
        if (r === 3) {
            view = '<a href="https://tabelog.com/tokyo/A1313/A131301/13153417/" target="balnk" style="text-decoration:none;color:#b99b00">京チャイニーズ 一凛</a>'
            $("#result__picture").attr('src', 'img/china__3.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2901432412013!2d139.769349114643!3d35.669857180196914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be0754f21d1%3A0x27f1704b66c42e8f!2z5LiA5Yeb!5e0!3m2!1sja!2sjp!4v1628912071627!5m2!1sja!2sjp');
        }
        if (r === 4) {
            view = '<a href="https://tabelog.com/tokyo/A1310/A131002/13026144/" target="balnk" style="text-decoration:none;color:#b99b00">川菜館（センサイカン）</a>'
            $("#result__picture").attr('src', 'img/china__4.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2300139493977!2d139.76129261464385!3d35.6959569801908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1a8e426e53%3A0xebb3a7cac081035a!2z5bed6I-c6aSo!5e0!3m2!1sja!2sjp!4v1628912140130!5m2!1sja!2sjp');
        }
        if (r === 5) {
            view = '<a href="https://tabelog.com/tokyo/A1301/A130102/13025787/" target="balnk" style="text-decoration:none;color:#b99b00">交通飯店 （コウツウハンテン）</a>'
            $("#result__picture").attr('src', 'img/china__5.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0709489846026!2d139.7624831146431!3d35.6752549801957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be53d8f6d49%3A0x8bccf68ab6a5abab!2z5Lqk6YCa6aOv5bqX!5e0!3m2!1sja!2sjp!4v1628912208791!5m2!1sja!2sjp');
        }
    }　else if (type.value === "ラーメン") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '<a href="https://tabelog.com/tokyo/A1305/A130504/13182315/" target="balnk" style="text-decoration:none;color:#b99b00">自家製中華そば としおか</a>'
            $("#result__picture").attr('src', 'img/ramen__1.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.874055124779!2d139.72433951464413!3d35.70471678018883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cfdd38436bb%3A0xaa71aafcc49bf1d2!2z6Ieq5a626KO95Lit6I-v44Gd44GwIOOBqOOBl-OBiuOBiw!5e0!3m2!1sja!2sjp!4v1628912280028!5m2!1sja!2sjp');
        }
        if (r === 2) {
            view = '<a href="https://tabelog.com/tokyo/A1329/A132903/13229181/" target="balnk" style="text-decoration:none;color:#b99b00">中華そば うお青(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/ramen__2.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.300237715197!2d139.41694281464285!3d35.66960858019703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e33c483e7fd7%3A0x19c850c68103edf3!2z5Lit6I-v44Gd44GwIOOBhuOBiumdkg!5e0!3m2!1sja!2sjp!4v1628912341164!5m2!1sja!2sjp');
        }
        if (r === 3) {
            view = '<a href="https://tabelog.com/tokyo/A1313/A131305/13168253/" target="balnk" style="text-decoration:none;color:#b99b00">スパイス・ラー麺 卍力 西葛西店</a>'
            $("#result__picture").attr('src', 'img/ramen__3.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.452402689974!2d139.8557873146428!3d35.665860980197884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601887e0e546aaab%3A0x7b0d8c6cfc32c9f2!2z44K544OR44Kk44K544O744Op44O86bq6IOWNjeWKm--8iOOBvuOCk-OCiuOBje-8iQ!5e0!3m2!1sja!2sjp!4v1628912406272!5m2!1sja!2sjp');
        }
        if (r === 4) {
            view = '<a href="https://tabelog.com/tokyo/A1319/A131903/13219341/" target="balnk" style="text-decoration:none;color:#b99b00">クラム＆ボニート 貝節麺ライク(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/ramen__4.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.714580185612!2d139.6557910146434!3d35.68402928019368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2fb81eeed77%3A0x10af1ca012b477a6!2zQ0xBTSAmIEJPTklUTyDosp3nr4DpurogUkFJSw!5e0!3m2!1sja!2sjp!4v1628912474353!5m2!1sja!2sjp');
        }
        if (r === 5) {
            view = '<a href="https://tabelog.com/tokyo/A1301/A130101/13164932/" target="balnk" style="text-decoration:none;color:#b99b00">むぎとオリーブ 銀座店</a>'
            $("#result__picture").attr('src', 'img/ramen__5.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3247955371157!2d139.76217171464296!3d35.66900378019722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be7b3f21b49%3A0x7ad3e08de0900acf!2z44KA44GO44Go44Kq44Oq44O844OWIOmKgOW6p-W6lw!5e0!3m2!1sja!2sjp!4v1628912542004!5m2!1sja!2sjp');
        }
    } else if (type.value === "パン") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '<a href="https://tabelog.com/tokyo/A1317/A131705/13093803/" target="balnk" style="text-decoration:none;color:#b99b00">TOLO PAN TOKYO(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/pan__1.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0904788503944!2d139.68319581464218!3d35.65014238020153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4a95cf90883%3A0xd82134e17a9a5!2z44OI44Ot44OR44OzIOODiOOCpuOCreODp-OCpg!5e0!3m2!1sja!2sjp!4v1628912609419!5m2!1sja!2sjp');
        }
        if (r === 2) {
            view = '<a href="https://tabelog.com/tokyo/A1303/A130302/13164057/" target="balnk" style="text-decoration:none;color:#b99b00">空と麦と</a>'
            $("#result__picture").attr('src', 'img/pan__2.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.137221023018!2d139.70431771464206!3d35.64899068020179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b43f7b3177b%3A0x2f78e359eb99962b!2z56m644Go6bqm44Go!5e0!3m2!1sja!2sjp!4v1628912669002!5m2!1sja!2sjp');
        }
        if (r === 3) {
            view = '<a href="https://tabelog.com/tokyo/A1319/A131907/13060088/" target="balnk" style="text-decoration:none;color:#b99b00">えんツコ堂 製パン(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/pan__3.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.806989950796!2d139.5939082146442!3d35.7063669801884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee13ba864653%3A0xaa6e0c202702829f!2z44GI44KT44OE44Kz5aCC6KO944OR44Oz!5e0!3m2!1sja!2sjp!4v1628912735305!5m2!1sja!2sjp');
        }
        if (r === 4) {
            view = '<a href="https://tabelog.com/tokyo/A1314/A131403/13022775/" target="balnk" style="text-decoration:none;color:#b99b00">小麦と酵母 満 ecute品川店(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/pan__4.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.9601385665633!2d139.73720451464143!3d35.62870918020656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a5a630ded05%3A0x616232927e984ca2!2z5bCP6bqm44Go6YW15q-NIOa6gCDjgqjjgq3jg6Xjg7zjg4jlk4Hlt53lupc!5e0!3m2!1sja!2sjp!4v1628912802242!5m2!1sja!2sjp');
        }
        if (r === 5) {
            view = '<a href="https://tabelog.com/tokyo/A1316/A131602/13010793/" target="balnk" style="text-decoration:none;color:#b99b00">マルイチベーグル</a>'
            $("#result__picture").attr('src', 'img/pan__5.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.277723750635!2d139.73088661464206!3d35.6455285802027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ba7e14f4a7f%3A0x42129c56a4ece3b4!2z44Oe44Or44Kk44OB44OZ44O844Kw44Or!5e0!3m2!1sja!2sjp!4v1628912869857!5m2!1sja!2sjp');
        }
    } else if (type.value === "スイーツ") {
        let r = Math.ceil(Math.random()*5);
        if (r === 1) {
            view = '<a href="https://tabelog.com/tokyo/A1308/A130801/13002850/" target="balnk" style="text-decoration:none;color:#b99b00">西洋菓子 しろたえ</a>'
            $("#result__picture").attr('src', 'img/sweet__1.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.015226062082!2d139.73321041464303!3d35.6766270801953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7eef9b57cd%3A0xce8829db418eb50c!2z44GX44KN44Gf44GI!5e0!3m2!1sja!2sjp!4v1628912927326!5m2!1sja!2sjp');
        }
        if (r === 2) {
            view = '<a href="https://tabelog.com/tokyo/A1317/A131702/13171753/" target="balnk" style="text-decoration:none;color:#b99b00">アディクト オ シュクル</a>'
            $("#result__picture").attr('src', 'img/sweet__2.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.372623079984!2d139.67028421464104!3d35.6185393802089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4dda738c475%3A0x25d63f414041af14!2z44Ki44OH44Kj44Kv44OIIOOCqiDjgrfjg6Xjgq_jg6s!5e0!3m2!1sja!2sjp!4v1628912986588!5m2!1sja!2sjp');
        }
        if (r === 3) {
            view = '<a href="https://tabelog.com/tokyo/A1309/A130902/13000848/" target="balnk" style="text-decoration:none;color:#b99b00">たいやき わかば</a>'
            $("#result__picture").attr('src', 'img/sweet__3.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6350617567573!2d139.72468321464348!3d35.68598688019312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c8c7a3c71fb%3A0x632ffd7fb0ca76d8!2z44Gf44GE44KE44GNIOOCj-OBi-OBsA!5e0!3m2!1sja!2sjp!4v1628913052183!5m2!1sja!2sjp');
        }
        if (r === 4) {
            view = '<a href="https://tabelog.com/tokyo/A1312/A131201/13009563/" target="balnk" style="text-decoration:none;color:#b99b00">北斎茶房</a>'
            $("#result__picture").attr('src', 'img/sweet__4.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.172922112697!2d139.80522271464386!3d35.69736208019051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018892e97fa0e69%3A0x49ae5e9ad2d97053!2z5YyX5paO6Iy25oi_!5e0!3m2!1sja!2sjp!4v1628913114327!5m2!1sja!2sjp');
        }
        if (r === 5) {
            view = '<a href="https://tabelog.com/tokyo/A1317/A131707/13188208/" target="balnk" style="text-decoration:none;color:#b99b00">リョウラ(百名店初選出)</a>'
            $("#result__picture").attr('src', 'img/sweet__5.jpeg');
            $("#map__wrapper").show();
            $("#map").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.9510763722396!2d139.63092171464146!3d35.62893258020658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f474661b9c77%3A0xbb075abbfe790470!2z44Oq44On44Km44Op!5e0!3m2!1sja!2sjp!4v1628913176415!5m2!1sja!2sjp');
        }
    } else if (type.value === "") {
        if (lan.value === "日本語") {
            view = '<p id="result">れこめんどするお店</p>'
        } else if (lan.value === "English") {
            view = '<p id="result">Recommended Reutaurant</p>'
        }
        $("#result__picture").attr('src', 'img/logo.jpeg');
    }

    $("#result").html(view);
    $("#result").addcss({
        'text-decoration':'none'
    });

    $(".result__wrapper__text").css({
        'width':'100%',
        'font-size':'24px',
        'font-family':'Arial, Helvetica, sans-serif',
        'font-weight':'bold',
        'text-align':'center'
    });
});



$("#result").on("reload",function(){


if (lan.value === "日本語") {
    view = '<p id="result">れこめんどするお店</p>'
} else if (lan.value === "English") {
    view = '<p id="result">Recommended Reutaurant</p>'
}
$("#result__picture").attr('src', 'img/logo.jpeg');

$("#result").html(view);
$("#result").addcss({
    'text-decoration':'none'
});

$(".result__wrapper__text").css({
    'width':'100%',
    'font-size':'24px',
    'font-family':'Arial, Helvetica, sans-serif',
    'font-weight':'bold',
    'text-align':'center'
});


});


// jqueryでdivを非表示にしたかったが、できなかったか・・・
// $("#map__wrapper").on("reload",function(){
//     $("#map__title").css('display','hide');
//     $("#map__wrapper").addcss({
//         'display':'none'
//     });
// });







// $(function(){
//     /* クッキーをセットする
//      -------------------------------------------------- */
//       function setSiteviewCookie() {
//         $('.btn-lang a').bind('click', function() {　//言語切り替えボタンを押下したときに発火
//           $.cookie('siteview', $(this).data('siteview'), { path: '/' }); //siteviewという名前でcookieに値をセット
//          });
//       }
//       setSiteviewCookie();
     
//     /* 日本語 or 英語を選んだ場合の処理
//      -------------------------------------------------- */
//       if($.cookie('siteview') == 'en') {
//         //英語が選択されている場合(coockieの値にenが設定されている時)
//         $('.content-en').css('display', 'block'); //英語を表示
//         $('.content-jp').css('display', 'none');　//日本語を非表示
//         $('.btn-lang .en').addClass('selected');　//言語切り替えボタンにクラスを振る処理
//         $('.btn-lang .jp').removeClass('selected');
//       } else {
//         //日本語が選択されている場合
//         $('.content-jp').css('display', 'block'); //日本語を表示
//         $('.content-en').css('display', 'none');　//英語を非表示
//         $('.btn-lang .jp').addClass('selected');
//         $('.btn-lang .en').removeClass('selected');
//       }
//     });
