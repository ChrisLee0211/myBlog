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
基本语法： for x in y

### 循环指定整数区间:
```rust
// 循环0到5之间的次数(不包括5)
for x in 0..5 {
    //...
}

// 循环0到6之间测次数(包括6)
for x in 0..=6 {
    //...
}

// 假如只想循环指定次数但是不想使用元素变量
for _ in 0..5 {
    // 在Rust中_的含义是忽略该值或类型，编译器会允许通过编译但会有警告
}
```
### 循环指定变量：
```rust
let arr = [1,2,4,5];
for x in arr {
     // 此时x是arr中的每个元素
    println!("{}", x);
}

// 获取索引
for (x, i) in arr.iter().enumerate() {
    // `.iter()` 方法把 `arr` 数组变成一个迭代器
    println!("第{}个元素是{}", i + 1, x);
}

```
> rust使用for循环和js的 `for xxx in yyy` 语法很像，但是这里面的`yyy`还会涉及所有权的问题。

一个所有权例子：
```rust
let arr = vec!['s', 't', 'r'];
    for x in arr {
        // 此时x是arr中的每个元素
        println!("{}", x);
    };
    // 编译会报错，因为arr的所有权已经转移
    println!("{:?}", arr);
```
> <p>对于实现了 <code class="hljs">copy</code> 特征的数组(例如 [i32; 10] )而言， <code class="hljs">for item in arr</code> 并不会把 <code class="hljs">arr</code> 的所有权转移，而是直接对其进行了拷贝，因此循环之后仍然可以使用 <code class="hljs">arr</code> 。</p>

总结如下：
<table><thead><tr><th>使用方法</th><th>等价使用方式</th><th>所有权</th></tr></thead><tbody>
<tr><td><code class="hljs">for item in collection</code></td><td><code class="hljs">for item in IntoIterator::into_iter(collection)</code></td><td>转移所有权</td></tr>
<tr><td><code class="hljs">for item in &amp;collection</code></td><td><code class="hljs">for item in collection.iter()</code></td><td>不可变借用</td></tr>
<tr><td><code class="hljs">for item in &amp;mut collection</code></td><td><code class="hljs">for item in collection.iter_mut()</code></td><td>可变借用</td></tr>
</tbody></table>

### for 循环的性能差别
有以下两种for循环获取元素方式：
- 利用索引访问
```rust
let collection = [1, 2, 3, 4, 5];
for i in 0..collection.len() {
  let item = collection[i];
  // ...
}
```
- 直接访问
```rust
let collection = [1, 2, 3, 4, 5];
for item in collection {
     // ...
}
```
结论：
第二种方式更高性能！因为第一种方式会触发rust的运行时边界检查，确认i是否正确落在collection的长度之内。而第二种方式则不会，编译器会在编译期间就确认了访问的安全性

### 跳出for循环
同样地，rust也和js一样可以使用`continue`和`break`关键字跳出循环.

## 循环--while