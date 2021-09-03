module Foo where

data Rec f = In (f (Rec f))

type List a = Rec (L a)
data L a x = Nil | Cons a x

type Tree a = Rec (T a)
data T a x = Prune | Leaf a | Branch x x

instance Functor (L a) where
  fmap _ Nil = Nil
  fmap f (Cons a x) = Cons a (f x)

instance Functor (T a) where
  fmap _ Prune = Prune
  fmap f (Leaf x) = Leaf x
  fmap f (Branch x y) = Branch (f x) (f y)

cata :: Functor f => (f a -> a) -> (Rec f -> a)
cata phi (In x) = phi (fmap (cata phi) x)

class Lengthable f where
  lengthBase :: f Int -> Int

length :: (Functor f, Lengthable f) => Rec f -> Int
length = cata lengthBase

instance Lengthable (L a) where
  lengthBase Nil = 0
  lengthBase (Cons _ n) = 1 + n

instance Lengthable (T a) where
  lengthBase Prune = 0
  lengthBase (Leaf _) = 1
  lengthBase (Branch m n) = m + n

class Filterable t where
  filterBase :: (a -> Bool) -> t a (Rec (t a)) -> Rec (t a)

filter :: (Functor (t a), Filterable t) => (a -> Bool) -> Rec (t a) -> Rec (t a)
filter p = cata (filterBase p)

instance Filterable L where
  filterBase _ Nil = In Nil
  filterBase p (Cons a as)
     | p a = In (Cons a as)
     | otherwise = as

instance Filterable T where
  filterBase _ Prune = In Prune
  filterBase p (Leaf x)
	   | p x = In (Leaf x)
	   | otherwise = In Prune
  filterBase _ (Branch a b) = In (Branch a b)

main = do
    putStrLn $ show $ Foo.length $ In $ Nil
    putStrLn $ show $ Foo.length $ In $ Cons 1 $ In Nil
    putStrLn $ show $ Foo.length $ In $ Prune
    putStrLn $ show $ Foo.length $ In $ Leaf 1
    putStrLn $ show $ Foo.length $ In $ Branch (In (Leaf 2)) (In (Branch (In Prune) (In (Leaf 2))))

    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Nil
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Cons 1 $ In Nil
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Cons 2 $ In Nil
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Prune
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Leaf 1
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Leaf 2
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Branch (In (Leaf 1)) (In (Branch (In Prune) (In (Leaf 1))))
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Branch (In (Leaf 2)) (In (Branch (In Prune) (In (Leaf 2))))
    putStrLn $ show . Foo.length $ Foo.filter odd $ In $ Branch (In (Leaf 1)) (In (Branch (In Prune) (In (Leaf 2))))
