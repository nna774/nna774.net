---
title: ISUCON予選落ち。
directory_index: false
date: 2018-09-18 01:05 JST
tags: ISUCON
hasTweet: true
---

# ISUCON8

:money_with_wings: のチームでISUCON8に出てきました。
学生枠で出たかったけど、人望が無くてチームが組めなかったので、
出るのあきらめるかなー とおもっていたところ、
去年卒業した人たちに連れられて社会人枠で出場。
社会人枠では厳しいだろうなー と思っていたけど厳しかったですね。

[![score](https://i.gyazo.com/03826e24463a1baf254ec8a0f10522cc.png)](https://gyazo.com/03826e24463a1baf254ec8a0f10522cc)

[![scores](https://i.gyazo.com/2c01d35c40cb6be0ac42607d41f97cc6.png)](https://gyazo.com/2c01d35c40cb6be0ac42607d41f97cc6)

結果は17000点ぐらい。

レポジトリは[ここ](https://github.com/nna774/isucon8-preliminary)。

## 準備

今回は前日にmitamaeを準備していった。 → [タグ](https://github.com/nna774/isucon8-preliminary/releases/tag/hajimarumae)
準備してたのに、前もってmitamaeを流してもらったりしていなかったのは普通によくなかったな という反省です。

前日にいくつかslack reminderを仕込んでいた。

[![Image from Gyazo](https://i.gyazo.com/fe85d4fc7ed64d1937ed53918c90dbbb.png)](https://gyazo.com/fe85d4fc7ed64d1937ed53918c90dbbb)

事前に読んでいた[mackerelの外形監視が便利](https://blog.yuuk.io/entry/web-operations-isucon)というのを見てしかけたもの。

[![Image from Gyazo](https://i.gyazo.com/37c7343973c7fc3ff39c029fd9604ed1.png)](https://gyazo.com/37c7343973c7fc3ff39c029fd9604ed1)

意外と手詰りじゃなかった。

[![Image from Gyazo](https://i.gyazo.com/a770705be5cf75cb6319ad8d9c973016.png)](https://gyazo.com/a770705be5cf75cb6319ad8d9c973016)

再起動テストは大切。
普通にしてたらsystemdで問題無いはずだけどボケててenableしてなくて死 とかこわい……。

[![Image from Gyazo](https://i.gyazo.com/615625e6f6f7093f929d145202cf1fdf.png)](https://gyazo.com/615625e6f6f7093f929d145202cf1fdf)

[netdata](https://github.com/firehol/netdata/wiki/Installation)はやっぱり便利。

## 本番

新社会人の残り二人は東京であつまって、私は京都の自宅でリモートという形でやっていた。
Slack call意外と行けますね。

9:45ぐらいに目覚めてギリギリ。

最初は公開鍵で入れるようにしたりnetdata入れたり(この2つはレシピ準備してた)、ruby実装に切り替えたり外形監視の設定をしたり、[deployの設定](https://github.com/nna774/isucon8-preliminary/commit/da26bae946114b923c0e83471fa3bf95d0590d50)をしたりであわただしくいつものをする感じ。
その間にアプリを眺めてもらったりしていた。

おちついて見てみるとh2oで動いていたので、一瞬でnginxに切り替える。
nginx用のレシピも仮なものは準備していたけれども、
入っていないことなんか無いとおもっていたので `package 'nginx'` をあわてて追記して入れる。

ベンチマーカを流しながらnetdataを眺めていると、メモリが厳しく、死ぬほどswapしたりして厳しい感じだった(これ、結局leakがあった感じなんですか……？)。
その時ぐらいにunicornにpumaから変更してるんだけれど、なんでメモリが厳しいのに変えたのだっけ……？

とりあえずメモリが厳しかったので、DBを3のインスタンスに移したり、static fileはnginxで返すような設定を入れる。

遅いリクエストは、nginxのapptimeで見ていたけれども、メモリがswapして遅いものとの区別が付きづらいのが少しつらかった。

dbを3にして1と2でappを動かしたら、initializeがデフォルトだとlocalでしか走らないので、鈴木 明さんのconflictが発生するので、
[雑に3でinitするようにした](https://github.com/nna774/isucon8-preliminary/commit/890438f40ae055566c730c5143c03f92d5a6683f)が、
終了後の打ち上げで[init.sh](https://github.com/nna774/isucon8-preliminary/blob/master/app/db/init.sh)の中で `-h` で済むと言われて「たしかに……」となっていた。

apptimeを相変わらず眺めたり、ベンチマーカのvalidationを眺めたりすると `/admin/` が遅いなということに気づいたので(13:52ごろ)、
そのへんになってやっと私もコードを眺めて3重のN+1ということに気づき直してもらう。

[![Image from Gyazo](https://i.gyazo.com/33fa7ef57eea44e8582c6517d173887c.png)](https://gyazo.com/33fa7ef57eea44e8582c6517d173887c)

手づまりじゃなかった。

そこを改善することで7000点ぐらい？ まで上がった。

`/admin/api/reports/events/11/sales` のdead lockは発生するなとは気づいていたが、
確率的にしか発生しなかったのでとりあえず後回しとされたところ、そのまま終了した。

その後しばらくはあまりぱっとする変更は入れられなかったが、
[謎のtransaction](https://github.com/nna774/isucon8-preliminary/commit/a3f16278fab1d59662a324a650b0a8d9e801549d)を消したら一気に14000ぐらい？ まで上がったように思う。
結局このtransactionだけは「自然に書くとこうはならんやろ」という感じがして、
なんで囲まれていたのかよくわからなった(実は深淵な理由がある？)。

あとはDBのレイテンシがでかい？ からか、DBクエリの削減([これ](https://github.com/nna774/isucon8-preliminary/commit/e7440a9e64978d8cbe3e625b3a3d96fda2d7a54d)と[これ](https://github.com/nna774/isucon8-preliminary/commit/ae23afb356f8df40bbdfc4d02ee6773079934777))でちょっと上がった気がする？

適当にexplainしてそれっぽくalter tableをする(ぜんぜんDBについての知見を持っていない)などの活動をして、終了して結果17000点で終了
(「次でラストにするか」と言って回したのが死ぬほどswapして4000点台を出したので、あわててappをrestartして回しなおして17:59:26にこの点数が無事出るなどのドキドキがあったりしたなどはあったが)。

今回は急造チームということもあり、けっこう全体を見るなどして大変だった。
「私ができそうなところはだいたいやったなー」という感じにはなってこの点数だったので、
「普通の学生ぐらいの筋力かー」というきもちになったので、
もっとやっていく必要がありますね……。
とりあえず各位のwrite upを読んでやっていきましょう……。

来年も多分学生なので(そろそろ卒業したい)、
次こそは[また本戦に](/blog/2015/11/02/isucon.html)行きたいですね……(社会人枠で勝てるぐらい強くなりましょう(むずかしそう……))。
