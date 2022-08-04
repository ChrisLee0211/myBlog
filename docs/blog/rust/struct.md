# 结构体
> rust的结构体基本上可以类比js的对象来学习，或者ts中的interface，它可以定义一组不同类型数据组成的结构。唯一需要注意的是，因为结构体内的变量是不限类型的，因此在使用过程中会出现所有权的问题

## 定义结构体
结构体使用`struct`关键字来定义：
```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
```
该结构体名称是 `User`，拥有 4 个字段，且每个字段都有对应的字段名及类型声明，例如 `username` 代表了用户名，是一个可变的 `String` 类型。

## 创建结构体
就像ts中根据一个interface来声明一个对象一样，rust中需要创建一个变量来绑定结构体并为它内部每个定义的字段进行赋值才可以使用：
```rust
let user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};
```
但是和ts的interface又有明显不同的是，ts中可以用`?`来表示某个字段非必需，比如：
```typescript
interface User {
    active: boolean;
    username: string;
    email?: string;
    sign_in_count: number;
}

// 此时email为可选字段
const user1: User = {
    active:true,
    username: '123',
    sign_in_count:1
}
```
而在rust中，创建结构体的时候，每个结构体定义的字段都必须拥有初始值！

## 使用结构体

### 访问结构体中的字段
就和js访问对象的值一样，rust也是使用类似`User.username`的语法读取`User`结构体中的`username`字段对应的值:
```rust
let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

let email_text = user1.email;
```
但是需要注意的是，`user1`中的`email`是个`String`类型，它是有所有权的，因此一旦被赋值到`email_text`之后，`user1`中的`email`便会被销毁，后续不能再访问。但是其他字段依然可用，比如`user1.username`。
### 更新结构体字段
更新结构体中的某个字段，和访问的语法基本一样，只是多了一个赋值过程。另外也能使用类似js中的拓展运算符去简洁地填充对象一样，rust也可以使用`..`来展开某个结构体，但是必须用在结构体的末尾：
```rust
let mut user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};

// 直接更改某个字段值，前提是该结构体是可变
user1.email = String::from("change");

let user2 = User{
    email: String::from("email"),
    // 除了email字段以外都是用uesr1结构体剩余的字段构建user2
    ..user1
}

```
## 其他结构体
### 元组结构体
除了类似js对象这种结构体以外，还存在元组结构体，它最大的不同是字段不需要名称，但是存在顺序关系：
```rust
   struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
```
元组结构体在你希望有一个整体名称，但是又不关心里面字段的名称时将非常有用。例如上面的 Point 元组结构体，众所周知 3D 点是` (x, y, z) `形式的坐标点，因此我们无需再为内部的字段逐一命名为：x, y, z。

### 单元结构体
这种结构体就像一个js的空对象，甚至可以类比为一个没有实现任何方法的class：
```rust
struct AlwaysEqual;

let subject = AlwaysEqual;

// 我们不关心 AlwaysEqual 的字段数据，只关心它的行为，因此将它声明为单元结构体，然后再为它实现某个特征
impl SomeTrait for AlwaysEqual {

}
```

## 如何debug清晰的结构体
- 如果想用`println!`宏+`{}`来打印结构体，是不行的。因为使用类似`test {},{}` 这种格式打印时，对应的变量必需实现`Display`特征，但结构体没有。
- 那么使用`{?:}`呢？也会报错，因为使用`{:?}`的变量需要实现`Debug`的特征。

因此要想清楚地打印结构体，我们要么手动对相应的结构体实现`Display`或`Debug`特征，要们直接使用`#[derive(Debug)]`:
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {:?}", rect1);
    //我们可能希望能够有更好的输出表现，此时可以使用 {:#?} 来替代 {:?}
    println!("rect2 is {:#?}", rect1);
}

//$ cargo run
//rect1 is Rectangle { width: 30, height: 50 }

//rect1 is Rectangle {
//    width: 30,
//    height: 50,
//}
```