---
directory_index: false
title: GR-SAKURA であそんでみた(1回目)
date: 2014-03-20 03:35 JST
tags: KMC, GR-SAKURA
---
GR-SAKURA が部室にあったので遊んでみた。

# さいしょに
[オンラインコンパイラ](http://japan.renesas.com/gr) があるのでとりあえず試す。

さくら用テンプレートを選んでとりあえず、build。
左のほうのエクスプローラっぽいところにsketch.bin が表示されるので、右クリックのちダウンロード。
さくらをUSB で繋いで、赤いボタンを二回ほど押せば、USBデバイスとして認識されたので、ダウンロードした。sketch.bin を書きこむ。
実行が始まるっぽい。

テンプレートはLED がウェーブしてるのっぽい。

## なんか
void setup() 関数が初期化の一回のみ呼ばれるもので、void loop() がループするものらしい。
loop() が処理を戻さないと(while(1) なんかで中で無限ループしてたりすると) 不幸が起こるってことがヘッダを読んでたら書いてあった。

# シリアル通信
Serial.begin(9600); をsetup() で呼ぶとPC とのシリアル通信をすることができる。
Serial.println() を使ってシリアルに書きこむことができる。
Serial.println(); には文字リテラルと数字は渡すことができた。 他にも渡せるものもあると思う(ちゃんとドキュメント読めって感じだ)。

Serial.setDefault() をsetup() で呼んでおくことで、printf() でもシリアルに出力できるらしい。(serial.h に書いてあった)
最初printf("hoge"); して何も出ないなーと思っていたら、printf() は改行が来るまでバッファしているらしい。

/dev/ttyACM0 に見えてるので、

    $ cat /dev/ttyACM0

でsakura 側で書いたものが見えた。

# rx-elf-gcc
オンラインコンパイラで毎回build するのは面倒だなーと思っていたら、makefile を眺めていたらrx-elf-gcc でクロスコンパイルできるらしい。
クロスコンパイル環境整えたいけど、AUR のrx-elf-gcc はbuild できなかったので、自分でビルドしないとなー って感じだ。

# HTTP API
[API](http://tool-cloud.renesas.com/Renesas/ref/api.html) が存在して、
これを使ってAPI 経由でWeb Compiler を使えるっぽい。
手元でビルドする環境を簡単に整えられないならこっちだけでがんばってもいいかも

ビルドもこれでできるので、いい感じのelisp でも気が向いたら書きたい。
