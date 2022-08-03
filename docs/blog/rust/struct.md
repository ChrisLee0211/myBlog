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
但是需要注意的是，`user1`中的`email`是个`String`类型，它是有所有权的，因此一旦被赋值到`email_text`之后，`user1`中的`email`便会被销毁，后续不能再访问。但是其他字段依然可用，比如`user1.username`