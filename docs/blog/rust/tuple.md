# 元组
> rust中的元组与python的元组比较像，就是一堆固定长度可容纳不同类型元素的集合。
## 如何表示元组
元组使用`()`包裹元素：
```rust
// 可以是相同类型的元素
let a:(u8,u8,u8) = (1,2,3);
// 也可以是不同类型的元素
let b:(&str,u8) = ("hello", 3);
// 元组的成员还可以是一个元组
let _t1: (u8, (i16, u32)) = (0, (-1, 1));
```
## 如何访问元组
元组支持两种访问方式，分别是`解构`和`索引`。
> 从元组的表示方式`(1, "xy", 3)`我们可以知道，它是固定长度的，并且元素是有序的，因此可以用索引的方式来访问

- 解构:
```rust
let tuple = ("hello", 45, "world");
let (str_1, nun, mut str_2) = tuple;
```
其中`str_1`会自动映射到`"hello"`，是个`&str`类型，而`num`则会自动绑定到`45`，可以看到`str_2`前面增加了 `mut` 关键字，说明`str_2`绑定了`"world"`的可变引用。

- 索引:
```rust
let x: (i32, f64, u8) = (500, 6.4, 1);

let five_hundred = x.0;

let six_point_four = x.1;

let one = x.2;
```
有点类似js对象中访问指定key对应的value一样，只不过rust中key变为了索引。

## 使用场景
rust不像js那么自由，函数如果希望返回多个不同类型的值时我们可以用对象或者数组装载返回出去。在rust中，可以使用元组来装载不同元素作为函数的返回。（ps：为什么不能用数组？其实也可以，但是rust的数组规定内部元素必须类型相同）
```rust
fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() 返回字符串的长度

    (s, length)
}
```