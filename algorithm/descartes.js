/**
 * 笛卡尔积, 实际案例生成 sku 组合
 * 参考: 
 *   [前端电商 sku 的全排列算法很难吗](https://juejin.cn/post/6844904191379374087)
 *   [电商最小存货 - SKU 和 算法实现](https://juejin.cn/post/7002746459456176158)
 */
function descartes(list) {
  // 移动指针
  let point = {};
  // 返回数据
  let result = [];
  // 父级指针
  let pIndex = null;
  // 每层指针坐标
  let tempCount = 0;
  // 组装当前sku结果
  let temp = [];

  // 根据参数生成指针对象
  for (const index in list) {
    if (typeof list[index] === "object") {
      point[index] = { parent: pIndex, count: 0 };
      pIndex = index;
    }
  }

  // 单维度数据结构直接返回
  if (pIndex === null) return list;

  // 动态生成笛卡尔积
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let index;
    for (index in list) {
      tempCount = point[index].count;
      temp.push(list[index][tempCount]);
    }

    // 压入结果内
    result.push(temp);
    temp = [];

    // 检查指针最大值, 移动指针
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (point[index].count + 1 >= list[index].length) {
        point[index].count = 0;
        pIndex = point[index].parent;
        if (pIndex === null) return result;

        // 赋值 parent 进行再次检查
        index = pIndex;
      } else {
        point[index].count++;
        break;
      }
    }
  }
}
