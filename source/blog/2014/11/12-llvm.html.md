---
title: llvm lib に渡すポインタは所有権を奪われるという話
date: 2014-11-12 18:21 JST
tags: メモ
---

`llvm::Function::Create` とかに渡す`llvm::FunctionType*` を生ポインタを使いたくなかったので、
`std::unique_ptr<llvm::FunctionType>` に保存していたらなぜかSEGV が発生してライブラリの
内部の関数で落ちてるっぽくてつらいなーと思ってた。
いろいろ変えてデバッグしてたら全部生ポインタに戻したら正常に動作した。
多分挙動からして`llvm::Function::Create` が責任もって開放するような設計になってるんだと思う。

というメモ。

まちがってたり詳しい資料しってたりしたらおしえてくださいです。>
[@nonamea774](https://twitter.com/nonamea774) or [nonamea774@gmail.com](mailto:nonamea774@gmail.com)
