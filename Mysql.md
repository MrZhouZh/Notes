## MySql 基本用法

此处略过安装步骤...

环境: windows 7

## 用法

```bash
# 进入数据库
mysql -u 用户名 -p

# 查看数据库所有用户的信息
show distinct concat('user: ''',user,'''@''',host,''';') as query from mysql.user;

# 查看数据库
show databases;

# 创建数据库
create database 数据库名称;

# 创建用户授权数据库
# privileges: 用户的操作权限
# identified: 
grant all privileges on 数据库名.* to '用户名'@'host' identified by 'password';

# 删除数据库
drop database 数据库名称;

# 创建数据表
# 操作当前数据库
use 数据库名称;
# 创建表
create table 表名(
  -> id varchar(50) not null,
  -> name varchar(100) not null,
  -> gender bool not null,
  -> birth varchar(10) not null,
  -> createdAt bigint not null,
  -> updatedAt bigint not null,
  -> primary key (id)
  -> );

# 查看数据库下所有的表
show tables;

# 修改表
alter table 表名 change 字段名称 新的字段描述;

# 增
insert into 表名(字段名称1, 字段名称2, ...) values(value1, value2, ...);
# 多条增加
insert into 表名 values(value1, value2, value3, ...), (value1, value2, value3, ...), ...;

# 查
############# 单表
# 查询全部
select * from 表名;
# 查询某个字段
select 字段名 from 表名;
# 条件查询
select * from 表名 where 字段名=值;
# 关键字查询 in or not in
select * from 表名 where 字段名 in(值,...);
# between...and
select * from 表名 where 字段名 between 值 and 值;
# is...null 空值查询
select * from 表名 where 字段名 is null;
# distinct 关键字
select distinct 字段名 from 表名;
# like 关键字 查询以 h 开头, e 结尾的数据
select * from 表名 where 字段名 like "h%e";
# and 多条件, 或者用 or 关键字
select * from 表名 where (字段名 表达式 值) and (字段名 表达式 值);

############# 

# 改 更新某一条数据 单条
update 表名 set 字段名1=值1, 字段名2=值2... where 字段名=值;
# 多条更新 如果没有 where 则会更新表中所有对应的数据
update 表名 set 字段名1=值1 where (字段名 表达式 值);

# 删 单条
delete from 表名 where 字段名=值;
# 批删
delete from 表名 where (字段名 表达式 值);
# 全删
delete from 表名;
```
