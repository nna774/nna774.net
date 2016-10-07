---
title: Free Monad は難しいなぁってアレ
date: 2014-06-15 18:34 JST
tags: Haskell
customCSS: ["https://yandex.st/highlightjs/8.0/styles/default.min.css"]
customJS:  ["https://yandex.st/highlightjs/8.0/highlight.min.js", "http://yandex.st/highlightjs/8.0/languages/haskell.min.js"]
published: false
---

一時期良く聞いたFree Monad, 最近KMC の中で話が出て, いまいちよくわからないところとかが出てきたので, ちょっとメモ的な.

# まず定義

[ここ](http://hackage.haskell.org/package/free-3.2/docs/Control-Monad-Free.html) にある.
<script>hljs.initHighlightingOnLoad();</script>
<pre><code>data Free f a = Pure a | Free (f (Free f a))

instance Functor f => Monad (Free f) where
    return = Pure
    Pure a >>= k = k a
    Free fm >>= k = Free (fmap (>>= k) fm)
</code></pre>

# なんなのか
[λカ娘の5巻](http://www.paraiso-lang.org/ikmsm/books/c84.html), 第三章 「侵略者と転校生とアイドルとイカが再帰を学ぶそうですよ！」
に, 一般的なリスト

<pre><code>data List a = Nil | Cons a (List a)
</code></pre>

を,

<pre><code>data Rec f = In (f (Rec f))

type List a = Rec (L a)
data L a x = Nil | Cons a x
</code></pre>

のように定義し, 一般的なツリー

<pre><code>data Tree a = Prune | Leaf a | Branch (Tree a) (Tree a)
</code></pre>

をさっきのRec をこっちでも使って,

<pre><code>type Tree a = Rec (T a)
data T a x = Prune | Leaf a | Branch x x
</code></pre>

と書くことができると書いてあった.

もともとList とTree は再帰的構造を持っていたが,
この書き換えによって, 
L , T という再帰的構造を持たない単なるデータ型と,
Rec という再帰構造だけを持つ型の組み合わせに分けることができる.

これと,

<pre><code>cata :: Functor f => (f a -> a) -> (Rec f -> a)
cata phi (In x) = phi (fmap (cata phi) x)
</code></pre>


# ref
* そろそろFreeモナドに関して一言いっとくか - fumievalの日記 [http://d.hatena.ne.jp/fumiexcel/20121111/1352614885](http://d.hatena.ne.jp/fumiexcel/20121111/1352614885)


