# 源码阅读

入口： src/index.js

---

## 具体源码

1. import { Vex } from './vex';

   - 工具函数，以及定义基础类 Vex

2. import { Flow } from './tables';

   - fraction.js 表示有理数的分数类
   - Glyph.js 表示有理数的分数类

3. import { Element } from './element';

   - 实现了 vexflow 的一个通用基类，其中包含所有 vexflow 元素都可以继承的常规函数和属性。

4. import { Fraction } from './fraction';

   - Fraction class that represents a rational number（表示有理数的分数类）

5. import { Renderer } from './renderer';

   - 渲染函数

6. import { Formatter } from './formatter';

   - 格式化

7. import { Music } from './music';

   - This class implements some standard music theory routines.(实现了一些标准的音乐理论程序。)

8. import { Glyph } from './glyph';

   - 图形符号

9. import { Stave } from './stave';

   - 五线谱

---

1. import { StaveNote } from './stavenote';

   - 音符

2. import { StaveModifier } from './stavemodifier';

   - 修饰符

3. import { StaveTempo } from './stavetempo';

   - 速度，节拍

4. import { Voice } from './voice';

   - 声音

5. import { Accidental } from './accidental';

   - 临时记号

6. import { Beam } from './beam';

   - 特别音符

7. import { StaveTie } from './stavetie';

   - 线条

8. import { TabStave } from './tabstave';

   - 制表符

9. import { TabNote } from './tabnote';

   - 记号

---

剩下得按照重要程度，对对应英文进行注释

```dash

Bend : 曲线
Vibrato : 颤音
Vibrato : 颤音括号

```
