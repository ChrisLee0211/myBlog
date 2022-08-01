# 数组
> 在rust中说的数组一般指的是固定长度和元素类型的数组(array)，而不是指那种可以随意增删数组内容的动态数组Vector。（Vector更像js的数组，但是显然这种运行时才能确定内存大小的数据结构注定性能会有损耗）
## 创建数组
创建数组的语法和其他语言大体相同，都是用`[]`进行包裹元素：
```rust
let a = [1, 2, 3, 4, 5];
```
有些时候还需要显式为数组声明类型：
```rust
// [i32;5]类型表示有长度为5的i32整数类型元素
let a: [i32; 5] = [1, 2, 3, 4, 5];
```
有时候我们想快速创建一组元素相同的数组，在js中可能会用类似`new Array(n).fill(0)`这种方式快速填充指定长度的数组。在rust中:
```rust
// 变量a绑定在一个长度为5，各个元素是3的数组上
let a = [3; 5];
```

## 访问数组
同样地，数组的访问也和js差不多：
```rust 
fn main() {
    let a = [9, 8, 7, 6, 5];

    let first = a[0]; // 获取a数组第一个元素
    let second = a[1]; // 获取第二个元素
}
```
索引依然是从0开始，也是使用`x[n]`的方式取第n+1个值

### 越界访问
得益于rust的数组都是固定长度固定元素类型，因此在编写代码的时候如果显式地读取了不存在的索引，那么编译时也能检查出来：
```rust
let a = [1, 2, 3, 4, 5];
let element = a[7];


error: this operation will panic at runtime
  --> src/main.rs:18:19
   |
18 |     let element = a[7];
   |                   ^^^^ index out of bounds: the length is 5 but the index is 7
   |
   = note: `#[deny(unconditional_panic)]` on by default

error: could not compile `rust-demo` due to previous error
```
但是对于运行时获取到的索引，如果有可能产生越界的访问，那么依然会报错抛出异常panic，程序会马上退出。而其他语言比如js、python，很可能会继续读取一个不存在的值比如`undefined`或者`null`之类的让程序继续执行下去，导致预期外的结果（比如产生了脏数据）。这也是rust的安全特性之一.

## 数组切片
