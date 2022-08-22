# 流程控制

## 条件判断--if
>和js一样，rust也使用 `if/else` 做条件判断。但是特别不同的是，if还可以作为表达式来绑定变量。我们之前有讨论过，在rust中表达式和语句是不同的概念，表达式是有返回值的，因此 `if` 作为表达式也可以赋值给变量
- 基本用法：
```rust
fn main(){
    let mut a = 0;
    if a == 0 {
        //...
    }else{
        //...
    }
}
```
- 作为表达式赋值
```rust
fn main() {
    let condition = true;
    let number = if condition {
        5
    } else {
        6
    };

    println!("The value of number is: {}", number);
}
```
同时，rust也可以使用`else if`进行多重条件判断：
```rust
fn main() {
    let n = 6;
    if n % 4 == 0 {
        println!("number is divisible by 4");
    } else if n % 3 == 0 {
        println!("number is divisible by 3");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

## 循环--for