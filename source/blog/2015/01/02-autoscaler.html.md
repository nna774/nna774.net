---
title: Google Compute Engine のAutoscaler をさわってみたメモ
date: 2015-01-02 00:14 JST
tags: Google
---

[Google Compute EngineのAutoscalerを触るお ~GCEでAuto Scale~](http://qiita.com/soundTricker/items/951a02266a5c95165863) の焼きなおし記事な気もする。
GUI のほうから操作もある程度できるようになっている。

[Google Cloud SDK](https://cloud.google.com/sdk/) を入れて、<br />
`$ gcloud components update app` <br /> `$ gcloud components update preview` <br />
したあと、[この](http://qiita.com/soundTricker/items/951a02266a5c95165863#%E6%A6%82%E8%A6%81--%E6%BA%96%E5%82%99) API たちをオンにしたら準備完了

インスタンステンプレートを、Google Developers Console の「計算処理」 → 「Compute Engine」 → 「インスタンステンプレート」 → 「新しいインスタンステンプレート」 から作成する。インスタンステンプレートは編集できないので、ここでいい感じに作ってやる必要がある。オートスケールするサービスが起動時に自動的に起きるようなインスタンステンプレートを作らないといけない。私は今回、既に動いているサービスのディスクのスナップショットを取り、それをディスクにして(この時、一度スナップショットからインスタンスを作ってやり、起動ディスクを削除しない設定でインスタンスを殺すことでしかスナップショットをディスクにする方法わからなかったのだけれど、ちゃんとした方法あるのかな……)、そこからインスタンステンプレートを作りました。

インスタンステンプレートができたら、インスタンスグループを作りましょう。
「Compute Engine」 → 「インスタンスグループ」 → 「新しいインスタンスグループ」で、「インスタンステンプレートを使用」を選び、「自動スケーリング」をオンにしておく。
「Compute Engine」 → 「ネットワーク負荷分散」 から「ターゲットプール」を選び、適当にターゲットプールを作る。
ヘルスチェックを適切に設定する必要がある。既に動いてるサービスで使ってるのがあるなら、それと同じのを使うのが正しいように思う。<br />
ターゲットプールができたら、それを使うような転送ルールを作る。それっぽく設定して欲しい。

最後にスケーリングした時できるインスタンスをロードバランサ自動で追加して欲しいので、それの設定をしないといけないが、現時点ではこれはGUI からはできないらしい。
[ここ](https://cloud.google.com/compute/docs/autoscaler/#network_load_balancing) を参考に、既につくったインスタンスグループを、ターゲットプールに紐付ける。
むしろ[こっち](https://cloud.google.com/compute/docs/instance-groups/manager/v1beta2/instanceGroupManagers/setTargetPools) と言うべきかも。<br />
`$ gcloud preview managed-instance-groups --zone us-central1-a set-target-pools INSTANCE_GROUP --target-pool TARGET_POOL`  <br />
のようなコマンドでAPI を叩いて設定する。インスタンスグループの名前、ターゲットプールの名前はそれぞれさっき作ったのを入れる。

`$ gcloud preview managed-instance-groups --zone us-central1-a resize INSTANCE_GROUP --new-size 10` とかのコマンドでLB にインスタンスが追加されてたら成功っぽい。

実際に立ってるインスタンスにSSH して、中で`yes > /dev/null` をいくつも走らせてちゃんとスケーリングするのを見て満足しましょう。



