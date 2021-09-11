---
directory_index: false
title: "使ってますか？ GCP - KMCアドベントカレンダー 13日目"
date: 2015-12-13 00:00 JST
tags: アドベントカレンダー
---

この記事は[KMC Advent Calendar 2015 - Adventar](http://www.adventar.org/calendars/809)13日目の記事です。
KMCID: nona7です。
普段はKMCのサーバの管理をしたり、サーバの破壊をしたりしています。

# 宣伝

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">サークル「京大マイコンクラブ」は、コミックマーケット89で「木曜日　東地区　&quot;モ&quot;　42b」に配置されました！　コミケWebカタログにてサークル情報公開中です <a href="https://t.co/BtKSerlV6R">https://t.co/BtKSerlV6R</a> <a href="https://twitter.com/hashtag/C89WebCatalog?src=hash">#C89WebCatalog</a></p>&mdash; 京大マイコンクラブ(KMC) (@KMC_JP) <a href="https://twitter.com/KMC_JP/status/660019366717554688">2015, 10月 30</a></blockquote>

3日目(12月31日)東地区 "モ" 42bです！ よろしくお願いします！
わたしも記事を書いてます。遠野旅行記なので技術的な記事では無いですが……。

# ■■■■

エージェントnona7は現在サイト31で発生中の大規模な収容違反の収拾にあたっています。
セキュリティクリアランスレベル1以上の部員のみが現状についての情報を得ることを許可されています。

lxcによって部室のサービスを切り分けて素晴らしい発展！！！ という記事を想定していたのですが、間に合いませんでした。
許してください。。。

# 本編

みなさん巨人の肩に乗ってますか。
私は最近ずっと乗っています。

[Google Cloud Platform](https://cloud.google.com/)(GCP)、使ってるでしょうか。
今回は普段私が使ってるGCPのツールを雑に紹介していきます。

## Google Cloud DNS

最近はCloudFlareをここには使ってるのですが、そこがネームサーバをやっていて、
Google Cloud DNSはいざというときのための(とは？)バックアップ用だったのですが、
今眺めたら結構古かったのでゾーン削除しました。
月0.5ドルか0.25ドルだったと思うから残しておいてもよかったけど。
R53とかと同じようなWebUIとAPIでゾーンの設定ができる感じです(CloudFlareもそうだけど)。

## [Google Cloud Storage](https://cloud.google.com/storage/)
[S3](https://aws.amazon.com/jp/s3/)より速い、安いので最近はこっちばっかり使っている。
stangardストレージでもS3より安いし速いので良いんだけれど、
私の用途は主にデータバックアップなのでDRAバケットを使っている。
DRAバケットはAvailabilityの低いバケットで値段も安いのでバックアップに向いている(※後述のより良いものがある)。
バックアップ用途にAWSの[glacier](https://aws.amazon.com/jp/glacier/pricing/)を以前は使ってたんだけど、
glacier、ややこしいし取り出すのも時間かかるしでDRAに乗り換えました。
値段で言うとglacierの$0.007/GB月が一番安いんだけど(DRAは$0.02/GB月)、
100GB預けても(今はそんなに入れてない)月2ドルと月0.7ドルだし利便性考えるとDRAのほうが私はいいとおもいますね……。

### [NEARLINE](https://cloud.google.com/storage-nearline/)
Googleの謎技術。
ほぼglacier相当の値段($0.01/GB月)でglacier対抗サービスっぽさ。
違いはAWS glacierは預けたファイルを取り出すのに3時間ぐらい待つ必要があるのに対して、
NEARLINEは3秒で帰ってくる。
DRAやstangardほどの速さは出ないものの、3秒で帰ってくるなら自分でバックアップ用途に個人利用する文には十分すぎる……。
早く乗り換えたいんだけど、バケットを作りなおすのが面倒でまだできていない。
まぁ月2ドルが月1ドルになるだけだしなー(もうちょっと少ないけど)、と思うとめんどくさくて……。

## [Google Compute Engine](https://cloud.google.com/compute/)
普通にスタンダードインスタンス個人で借りるのはちょっと高いなー という感じ。
バイト先では普通に運用してるけど、管理コストが低いから全然いいんだけど。
私が個人利用で主に使ってるのは[プリエンプティブルVM](https://cloud.google.com/preemptible-vms/)のほうですね。
バイト先でも諸事情でImageMagickのバージョンを二分探査する必要が出て16コアのマシンを3時間ほど借りたのだけれど、
普通のインスタンスなら$0.512\*3時間で$1.5ほどなんだけど(この時点で安すぎるし説得力無い気がしてきた)、
プリエンプティブルVMなら$0.176\*3時間で$0.5ほど！ 約3分の1で済む！(やっぱりどっちも安い という感想しか出ないな)
まぁおいといて、自分はよく[g1-smallインスタンス](https://cloud.google.com/compute/pricing)を
作業するときに立ててます。
スペックはまぁSSH越しに開発するには十分で、通常のインスタンスなら$0.030/hourするところを(あれこの時点で3円/時だし安いな……)、
$0.011/hour、まぁ大体一時間一円で利用できます。
この値段なら適当に作業してても、ぜんぜんいい値段なので気軽にインスタンスを起こして作業できます。

もちろんプリエンプティブルVMにデメリットがあって、Googleの方の都合でこちらのインスタンスが殺されます。
そのへんはAWSのスポットインスタンスと似てるのですが、こっちはずっと安い代わりに殺されるのを回避できません。

なんで最近ずっとGCPのインスタンスの上で作業してるかというと、
家のNASが今止まっていてそこの修復がめんどくさいからなんですが……。
家の開発マシンのスペックがちょっと低かったので最近は快適だと思ってるので治っても戻れないかも……。
VPSとかで月額利用よりも使う時だけだから安いかなー という感じですね。その代わりにWebサーバとか置けないけど。

# おわり
そろそろ公開のタイミングが迫ってきたこともあるし、
あと腱鞘炎ぎみて文字を打つのが結構つらいのでそろそろ終わっていいですか……。

あんまり説得力のある文がかけなかったのですが、まとめとしては私が言いたいのは、
GCPは個人利用の範囲では実質無料なのでどんどん使っていきましょう ということです(どこにそんなこと書いてたのか)。
GCP以外にも[AWS SQS](https://aws.amazon.com/jp/sqs/)とか[AWS Lambda](https://aws.amazon.com/jp/lambda/)とかも
実質無料だし見てみてください。
[Google App Engine](https://cloud.google.com/appengine/)とか[BigQuery](https://cloud.google.com/bigquery/)とかも
今回かけなかったけど実質無料だし見てみてください。
[Cloud SQL](https://cloud.google.com/sql/)とかも便利そうだなー と思ってまだ使ってないです。

雑だ……。

# 宣伝

<blockquote class="twitter-tweet" data-conversation="none" lang="ja"><p lang="ja" dir="ltr">今回初参加のサークル「いっと☆わーくす！」で、木曜日(三日目) 東-ム55bに配置されました。全てがうまくいけばおそらくPietに関する本が出ると思います。需要は無いでしょうがよろしくお願いします。 <a href="https://twitter.com/hashtag/C89WebCatalog?src=hash">#C89WebCatalog</a> <a href="https://t.co/Spsotf9ewt">https://t.co/Spsotf9ewt</a></p>&mdash; 友利のな (@nonamea774) <a href="https://twitter.com/nonamea774/status/660055067983089664">2015, 10月 30</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

3日目(12月31日)東地区 ム-55bです！ よろしくお願いします！
現時点では3人目のサクチケの受け取り手がいないので、売り子も募集しています。
原稿が現行 :genkou_on_fire: なのでがんばります……。

# 次回予告

この記事は[KMC Advent Calendar 2015 - Adventar](http://www.adventar.org/calendars/809)13日目の記事でした。
なので明日は[KMC Advent Calendar 2015 - Adventar](http://www.adventar.org/calendars/809)14日目の記事です。
明日の記事は[@jf_nights](https://twitter.com/jf_nights)さんによる「」です。

腱鞘炎のいい病院教えてください。
