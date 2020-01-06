## 添加右键快捷方式

[来源](https://jingyan.baidu.com/article/6c67b1d6ea3fd02787bb1eea.html)

1. `window + r` 输入 `regedit`
2. 选择 `HKEY_CLASSES_ROOT\Directory\shell`, 右键单击 `新建(N) - 项(K) - 自定义命名`
3. 双击 右侧 `[ab](默认)` - `数值数据` - `确定`
4. 右键单击自定义命名, `新建(N) - 项(K) - 自定义命名2`
5. 双击右侧`[ab](默认)` - `数值数据` - `cmd.exe /k cd "%1` - 确定
