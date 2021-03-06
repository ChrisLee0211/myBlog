# 变量
## 变量绑定
> 对，叫变量绑定，不是变量赋值！ 

rust比较奇怪的一点是，如果用其他语言赋值的概念去理解，因为有所有权的概念存在，就会很容易出现问题。
### 一、声明变量
不可变变量声明：
```rust
// 这意味着将字符串绑定到 a变量中，并且默认a是不可变的
let a = "hello world"
```
可变变量声明：
```rust
// a被字符串"hello world"绑定，并且a可以重复绑定其他同类型的变量
let mut a =  "hello world"
```
常量声明:
```rust
// a被字符串"hello world"绑定
const SAFE_A: &str =  "hello world"
```
常量和不可变变量差异：

- 常量不能用mut
- 常量必须标注类型
### 二、变量作用域
变量声明后，是有其生效的作用域的，一旦退出作用域后将不再允许访问。这个和js的let、const的代码作用域大致一样，即内部函数声明的变量外部函数无法访问。
```rust
fn main(){
    let y = 3
    {
        // 在当前的花括号作用域内，对的x进行变量绑定
        let x = 2;
        // x的作用域内访问有效
        println!("The value of x in the inner scope is: {}", x);
        // 内部作用域也处于y的作用域内，因为y有效
        println!("The value of y in the inner scope is: {}", y);
    }
    // 退出作用域后，x不再有效，但y依然有效
    println!("The value of x is: {}", x);
    println!("The value of x is: {}", y);
}
```

### 三、变量遮蔽
这是在多重作用域的前提下（同作用域内也可以重复声明），和js的let、const最大不同。在js中，let和const声明的变量名，在嵌套的子作用域内是不可以重复声明的，但是在rust中不同，rust中假设你在当前作用域已经用不上外部作用域的变量了，因此允许你重复声明一样的变量，这在当前作用域内会覆盖外部同名的变量，称之为变量遮蔽。
```rust
fn main() {
    let x = 5;
    // 在main函数的作用域内对之前的x进行遮蔽
    let x = x + 1;

    {
        // 在当前的花括号作用域内，对之前的x进行遮蔽
        let x = x * 2;
        //  此时打印会变成12
        println!("The value of x in the inner scope is: {}", x);
    }
    // 退出上面作用域后，x依然以外部作用域最后一次声明绑定的值为准，因此打印6
    println!("The value of x is: {}", x);
}
```

## 变量类型
### 基本类型
> rust的变量分为基本类型和复合类型（其实跟js很像了，基本类型和引用类型），并且这两大类型在内存中存储的结构基本和js并无二致，可以简单来类比。基本类型处于栈上，复合类型处于堆中，但指向堆的指针会存在栈中。

#### 数值类型
> rust的数值主要分为整数和浮点数两大类，但是表示方法会比较多（相对js而言），并且也有着和其他语言一样存在的坑（常见的0.1+0.2之谜）
##### 整数类型
比较特别的是rust的整数有着多种类型，类型的组合规则基本是`有无符号`+`位数大小`，比如`i8`和`u8`，前者表示有符号的8位数，后者表示无符号的8位数。那么它们各自可以表示的数值是多大呢？有以下公式：

- 有符号：-(2<sup>n-1</sup>) ~(2<sup>n-1</sup>) - 1
- 无符号： 0 ~ 2<sup>n-1</sup>

那就意味着，`i8`类型的整数，可以表示的数值范围是-2<sup>7</sup>~ 2<sup>7</sup> - 1，即 -128 ~ 127；而`u8`表示的则是0 ~ 2<sup>8</sup> - 1，即 0 ~ 255；（32位、64位亦同理），rust整数支持的类型如下：
|  长度   | 有符号类型  | 无符号类型  |
|  ----  | ----  |----  |
| 8位  | i8 |u8 |
| 16位  | i16 |u16 |
| 32位  | i32 |u32 |
| 64位  | i64 |u64 |
| 128位  | i128 |u128 |
| 跟随系统  | isize |usize |

在不标注任何类型的情况下，rust默认使用`i32`。而`isize`和`usize`因为是根据当前系统架构而定，一般用于集合的索引（因为你不知道运行时集合会有多少个元素,导致可能真实的索引溢出自己定义的类型）。
> 什么是整数溢出？就是运行时实际变量数值超过了你定义的整数类型范围。比如定义了一个整数为u8类型，那么意味着最多就只能用来表示255，一旦随意+1导致超出，那么rust在不同模式下会有对应溢出表现：
- debug模式下编译会报错
- release模式下会自动补码处理，导致256变成0，257变成1，以此类推。

##### 浮点数类型
浮点数即带小数点的数值，rust只有两种类型，分别是`f32`和`f64`.默认的浮点类型是`f64`。其中`f32`是单精度，`f64`是双精度.另外，rust的浮点数一样存在精度陷阱，比如：
```rust
fn main() {
    let abc: (f32, f32, f32) = (0.1, 0.2, 0.3);
    let xyz: (f64, f64, f64) = (0.1, 0.2, 0.3);

    println!("abc (f32)");
    println!("   0.1 + 0.2: {:x}", (abc.0 + abc.1).to_bits());
    println!("         0.3: {:x}", (abc.2).to_bits());
    println!();

    println!("xyz (f64)");
    println!("   0.1 + 0.2: {:x}", (xyz.0 + xyz.1).to_bits());
    println!("         0.3: {:x}", (xyz.2).to_bits());
    println!();

    assert!(abc.0 + abc.1 == abc.2);
    assert!(xyz.0 + xyz.1 == xyz.2);
}
```
这段代码的输出：
```
abc (f32)
   0.1 + 0.2: 3e99999a
         0.3: 3e99999a

xyz (f64)
   0.1 + 0.2: 3fd3333333333334
         0.3: 3fd3333333333333
```
这是因为，在`f32`类型精度下，0.1+0.2的结果刚好与0.3表示的值相等，因此比较结果是为`true`的，但是在`f64`的双精度下，0.1+0.2的结果尾数已经和0.3不一样，因此比较回返回`false`。

另外，浮点数也存在以下需要主要的问题：

- 浮点数在标准库中实现的接口和其他普通数值类型并不一样，这导致它有些场景在使用上不能够和普通数值一视同仁。比如它没用实现`std::cmp::Eq`，这意味着它不能像其他数值类型那样作为hashMap的key
- 对于数学上未定义的值(比如对负数取平方根)，浮点数用`NaN`(not a number)值来处理。`NaN`是不能用来比较的，用NaN来比较会报错

##### 数值表示
rust有多种数值的表示方式，主要用于提高可读性，以下一个例子大致含括：
```rust
fn main() {
  // 编译器会进行自动推导，给予twenty i32的类型
  let twenty = 20;
  // 类型标注
  let twenty_one: i32 = 21;
  // 通过类型后缀的方式进行类型标注：22是i32类型
  let twenty_two = 22i32;

  // 只有同样类型，才能运算
  let addition = twenty + twenty_one + twenty_two;
  println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);

  // 对于较长的数字，可以用_进行分割，提升可读性
  let one_million: i64 = 1_000_000;
  println!("{}", one_million.pow(2));

  // 定义一个f32数组，其中42.0会自动被推导为f32类型
  let forty_twos = [
    42.0,
    42f32,
    42.0_f32,
  ];

  // 打印数组中第一个值，并控制小数位为2位
  println!("{:.2}", forty_twos[0]);
}

```

##### 序列
rust提供了一个简洁的表示方式来表示一个连续的数值区间。比如在js中如果要循环3-10之间的数字，我们可能需要这样写：
```javascript
for(let i=3;i<=10;i++) {
    //do something
}
```
但是在rust中，3-10之间的区间可以这样表示:
```rust
// 如果不加=号则表示只取到9为止
for i in 3..=10 {
    //do something
}
```
相比较js会简洁很多，有点类似python中的循环常常带上的range函数。

但是，**序列**除了可以表示数字以外，还可以用于字符：
```rust
fn main() {
    for i in 'a'..='z' {
        println!("{}",i);
    }
}
```
#### 其他类型
##### 字符
这里说的是**字符**，不是**字符串**！rust的字符是用来表示单个unicode或ASCII值的，比如：
```rust
fn main() {
    let c = 'z';
    let z = 'ℤ';
    let g = '国';
    let heart_eyed_cat = '😻';
}

```
而且值得注意的是，**字符**用的是`''`号来包裹，而双引号`""`是留给**字符串**用的。同时由于unicode使用4个字节编码来表示一个值，因此一个字符占用4个字节。

##### 布尔值
和其他语言一样，没有特别

##### 单元类型
单元类型就是`()`，比如`main`函数或者`println!`宏的返回类型就是单元类型，而不是没有返回。对于没有返回值的函数，rust又单独的定义：发散函数。另外单元类型不占任何内存，是0字节的