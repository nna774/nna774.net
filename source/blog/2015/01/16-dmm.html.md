---
directory_index: false
title: DMM のSim が来た
date: 2015-01-16 23:00 JST
tags:
---

[DMM のやってるMVNO サービス](http://mvno.dmm.com/) に契約してみた。

月1GB の高速通信分がついて、月660円。 実際現時点で私が知ってる中では、高速通信があるSim の中では最安。
(高速通信が無くてもいいのなら、ヨドバシカメラとかで売ってる[この](http://www.wirelessgate.co.jp/service/sim.html)
ワイヤレスゲートのSim が480円で250kbps、さらに公衆無線スポットがスマートフォンからなら専用のアプリを入れれば使えるらしい。
実際こっちも悪くもないかなーと思ってた。)

一昨年契約したイーモバイルの端末, GL06-P がSim フリーだったそうで、それに挿して設定したらもうそのまま使えた。

既に解約して使っていないiPhone4s(au) に[Kingmobile](http://kingmobile.jp/) の下駄を履かせて、適当に設定しても使えた。

この前秋葉原でなんとなく購入してしまったDocomo の[L-05A](https://www.nttdocomo.co.jp/support/trouble/data/l05a/) に挿してもwvdial で使うことができた。(Arch Linux)

以下設定ファイルのメモ的な

/etc/wvdial.conf
<pre>[Dialer Defaults]
;Init1 = ATZ
Init1 = ATX3
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2
;Init2 = AT
;Init2 = ATQ0 V1 E1 S0=0 &C1 &D2 +FCLASS=0
Init4 = AT+CGDCONT=1,"IP","vmobile.jp" 
Stupid Mode = yes
Modem Type = USB Modem
ISDN = 0
;Baud = 460800
;Phone = *99***1#
Phone = *99#
Modem = /dev/ttyACM0
Username = dmm@dmm.com
Carrier Check = no
Password = dmm
Baud = 460800
Dial Command = ATDT
;Dial Command = ATM1L3DT
;Dial Command = ATM0L0DT
</pre>

e-mobile の二年縛りの契約更新が半年後ぐらいに迫ってるけど、更新月待たずに違約金払ってでも解約したほうがいいかなぁ……(違約金が1万円なら、月2500円払ってるので4ヶ月分なので、長期的には切ったほうが得)。

しばらく使ってみて様子見かな。

# とりあえずひとつ

<blockquote class="twitter-tweet" lang="ja"><p>どっちがOn なのか、これすごくわかりづらいので、DMM Mobile さんにははやくわかりやすようにしてもらいたい(今がOn の状態です(多分)) <a href="http://t.co/nPhFlNOaR6">http://t.co/nPhFlNOaR6</a></p>&mdash; 駆逐艦のな(NoNameA 774) (@nonamea774) <a href="https://twitter.com/nonamea774/status/556082070208802816">2015, 1月 16</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
