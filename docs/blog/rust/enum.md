# 枚举
> rust支持枚举来管理一组带有同属一类但具体意义不同的成员。（枚举的意思是，允许你一直穷举该类型下所有可能存在的值）
## 枚举类型
需要注意区分的是，枚举类型和枚举值不是一回事。枚举类型是一种类型，而枚举值是该类型里某个具体成员的实例。

rust也和ts一样，使用`enum`关键字声明枚举，但是它是声明一个枚举类型，而不包含对应的成员对应的值：
```rust
// rust中
enum PokerSuit {
  Clubs,
  Spades,
  Diamonds,
  Hearts,
}
```
可以发现，rust的枚举实际上在声明的时候并不像ts那样可以带上成员的值：
```typescript
// typescript中
enum PokerSuit{
    Clubs=1,
    Spades=2,
    Diamonds=3,
    Hearts=4,
}
```
可以简单理解为，rust中的枚举`enum`更多的作用是用来管理各个同类成员的名称或代表的语义。因此其实还可以定义成员的具体类型：
```rust
// 定义为简单的u8或char类型
enum PokerCard {
    Clubs(u8),
    Spades(u8),
    Diamonds(char),
    Hearts(char),
}

struct Pos {
    x: i32, y: i32
}

// 甚至直接定义复杂结构
enum Message {
    Quit,
    // 包含x和y的匿名结构体，其实也可以表示为 Move(Pos)
    Move { x: i32, y: i32 },
    // String字符串
    Write(String),
    // 是一个包含三个i32的元组
    ChangeColor(i32, i32, i32),
}
```
## 枚举值
> 比ts麻烦的是，rust的枚举值需要显式地创建使用，通过 `::` 操作符来访问枚举类型的某个成员，再加 `()` 传入初始值进行实例化具体的值
```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move{x:1,y:1};
    let m3 = Message::ChangeColor(255,255,0);
}
```

## null的替代品——Option枚举类型
> rust中没有`null`关键字，取而代之的是使用Option中的枚举类型作为null的替代品，它强制开发者必需处理变量空值时的场景

`Option`枚举包含两个成员类型：
```rust
enum Option<T> {
    Some(T),
    None,
}
```
一个成员表示含有值：`Some(T)`, 另一个表示没有值：`None`，T是泛型参数。由于Option枚举非常常用，因此它被包含在了`prelude`标准库中，因此开发者使用时不需要显式手动引入：
```rust
let some_number = Some(5);
let some_string = Some("a string");

// 当只使用None时需要显式地传入类型给Option，因为Option只有在Some的时候才可以推导类型
let absent_number: Option<i32> = None;
```
可以发现，当我们对一个值不确定可不可能为空时，就可以使用 `Option` 枚举来对它进行包裹，比如`Some(5)`，它可能为5也可能为空值。并且对于 `Option` 类型的值，rust是由对应的模式匹配语法来实现读写逻辑的：
```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```
总的来说，为了使用 ` Option<T> `值，需要编写处理每个成员的代码。