---
directory_index: false
title: Herokuの独自ドメインhttps対応(CloudFlare万歳)
date: 2016-01-26 02:51 JST
tags: 
---

最近[OpenYo](/OpenYo/)をRailsで再実装してみてるんだけど(RailsTutorial読んでたら何か作りたくなったので)、
Herokuに今は置いています。

[https://openyo.herokuapp.com/](https://openyo.herokuapp.com/) のURIがHerokuの提供するもので、
ここは \*.herokuapp.com の有効な証明書でhttpsが利用可能になっています。

でも独自ドメインをHerokuに置いたアプリでも利用したいわけで、今回で言うと、
[https://openyo.nna774.net/](https://openyo.nna774.net/) にしたかった感じです。

ダッシュボードのSettingsから、DomainsのCustom Domainsに設定したいドメインを入れて、
そのドメインをDNS Targetに書かれてるドメインにCNAMEで向ければ独自ドメインが利用できます。

httpで利用するだけならこれでよいのですが、httpsで運用したいとなると、
Herokuには有効な証明書が無いのでそういうことをしてくれるHeroku Pluginを利用しないといけないのですが、
このプラグインが$20/monthとかでちょっと高い。
ちゃんとしたのを動かしてるなら出してもいいと思うけど、
適当なアプリを動かすのには高すぎる。

で、ここでCloudFlareに頼るわけです
(そもそもうちのドメインはCloudFlare通してたので(CloudFlareの設置方法については省きます))。

普通にCNAMEした時はCloudFlareを通しても仕方ないので、
バイパスするように設定していましたが、
CloudFlareを通るように設定します。

で、設定の[CryptoのSSLのところ](https://gyazo.com/44ffedee5ace0ace1e2e2ef1c0de0f1a)をFullにしてやれば、
FullだとCloudFlare側では証明書の検証を行わないので、Herokuが提示してくる\*.herokuapp.comの証明書を受け入れ、
httpsで配信してくれます。

とまぁ普通はここまででよいのですが、
私の場合はいままでSSLの部分の設定はStrictにしていたので、Fullに落としたくないなぁと思っていたのですが、
Page Rulesの設定で以下のように、<br />
[![Page Rules設定](https://i.gyazo.com/2ab8563e0b9e3609e5e6780bca7a55ba.png)](https://gyazo.com/2ab8563e0b9e3609e5e6780bca7a55ba)<br />
SSLの設定を個別にFullにすることができました。
めでたしめでたし。

とこんな感じで無料でHerokuの独自ドメインをhttpsで利用することが可能となったのでした。
というメモ。
