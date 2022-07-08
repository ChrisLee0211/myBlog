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

#### 数值类型
> rust的数值主要分为整数和浮点数两大类，但是表示方法会比较多（相对js而言），并且也有着和其他语言一样存在的坑（常见的0.1+0.2之谜）