[Sass repl](https://www.sassmeister.com/)

[返回首页](./README.md)

```sass
// @extend
.class1 {
  border: 1px solid #ddd;
}

.class2 {
  @extend .class1;
  font-size: 12px;
}


// @mixin 可重用代码块
@mixin left ($value:10px) {
  float: left;
　margin-left: $value;
}

div {
  @include left(20px);
}

@mixin rounded($vert, $horz, $radius: 10px) {
  border-#{$vert}-#{$horz}-radius: $radius;
  -moz-border-radius-#{$vert}-#{$horz}: $radius;
  -webkit-border-#{$vert}-#{$horz}-radius: $radius;
}

#navbar li {
  @include rounded(top, left);
}

// 颜色函数
div {
  background-color: lighten(#cc3, 10%);
  color: darken(#cc3, 10%);
}

// @if @else
p {
  @if 1 + 1 != 2 {
    border: 1px solid;
  }
  @else {
    border: 2px dotted;
  }
}

// @for
@for $i from 1 to 3 {
  .border-#{$i} {
    border: #{$i}px solid blue;
  }
}

// @while
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}

// @each
$list: tom, john, mason, simon;

@each $member in $list {
  .#{$member} {
    background: lighten(#cc3, 10%);
  }
}

// @function
@function double($n) {
  @return $n * 2;
}

#sidebar {
  width: double(5px);
}
```

[pc 端适配项目写法](./Sass/pc-media.md)
