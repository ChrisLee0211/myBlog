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