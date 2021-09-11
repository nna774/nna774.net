---
directory_index: false
title: gistまとめ
date: 2016-10-27 06:03 JST
tags: Git, gist
---

gistに雑にけっこういろいろ溜まってきたので、このへんで一回自分の為にもindex作っておきたい。

# 徳の低いCSS系

* [nijie.info.css](https://gist.github.com/nna774/6c6a74515e02d74f2fe89940d228c411)

* [twitter-com.css](https://gist.github.com/nna774/8fc7eea89f146d732b8a)

# binding.pryがあるとコミットさせない。

* [pre-commit](https://gist.github.com/nna774/695479b0cf94b671915381d41881654f)

# .serviceファイルとか

* [dataimage.service](https://gist.github.com/nna774/a2390705faabbd3b1c64958903f54a27)
時刻の入った画像を生成してくれるぞ！

* [update-ddns.sh](https://gist.github.com/nna774/9447e6336acb8e4d411e6c0e8d82f8f8)
cloudflareのAPIを叩いてDDNSをします。

* [mackerel-agent.service](https://gist.github.com/nna774/0322780153d4d663e446c7e388d9c13b)
mackerel-agent用の

* [acpi.rb](https://gist.github.com/nna774/5992a4eaf59570c086a0c9cb133c7798)
Google Cloud PlatformのプリエンプティブルVM([このへん](http://googlecloudplatform-japan.blogspot.jp/2015/05/vm-3-vm.html))を普段よく使ってるので、そこで起動時と終了時にSlackに通知するやつ。
実はGCPで使う分にはshutdown-scriptとstartup-scriptをメタデータにしこめばこれば要らないんじゃないかという気もするけど試していない。

* [saku.service](https://gist.github.com/nna774/2657df31f27dab3b8bb5)
sshポートフォワードでトンネルを作ってくれるやつ。[autossh.serice](https://gist.github.com/nna774/1d5e8683440b4cdca86c9df837bd060a)のほうがいいのかも。

* [emacs daemonの設定](https://wiki.archlinuxjp.org/index.php/Emacs#systemd_.E3.83.A6.E3.83.8B.E3.83.83.E3.83.88.E3.81.A8.E3.81.97.E3.81.A6) も便利なのでついでにここにメモっておきます。

# その他

* [com.rb](https://gist.github.com/nna774/ce0cfd761263cc52ceda05e62b0282b8)
`git com` を矯正したかった時に使っていたやつ。

* [keybase.md](https://gist.github.com/nna774/7a578ad62d29939e0e3420e28c8ebcae)
[keybase.io](keybase.io)の認証用。[これ](https://keybase.io/nona)が私です。keybase.ioの招待枠余ってるので、欲しかったら声かけてください。

* [.emacs](https://gist.github.com/nna774/46be4fe303b06b56c66d)
説明不要っぽい。

* [backupdir.sh](https://gist.github.com/nna774/23c66df39ac40731bcf5)
cronでbackupする時に定フォルダに書きだしたりすればいいようにこれで毎日シンボリックリンクを貼ってたりしていた。

* [gist](https://gist.github.com/nna774/c28c8c908a9feea4e44d)
家の中でのunboundの設定だったけど、RaspberryPiが止まってから今家の中でのDNSなくて不便だし、そのうちなんとかしなくちゃ。

* [proxy.pac](https://gist.github.com/nna774/145ac9f24901b5d6a9a6)
家の中にsquid立ててたけど今は止まっちゃってるな。

* [naniittenda_koitu.rb](https://gist.github.com/nna774/ca2f424a52631bad9a1b)
何を言っとるんだゆゆ式を見ろ

# はい

とりあえず最近の有用そうなのはこれぐらいか(最近とは)(有用とは)。
