# vue3.x_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




##HelloWorld详解

使用typescript 可用@修饰符

新组件通过 components 导入

数据data直接写入 定义他的类型

vuex+typescript+vuex-classname
定义初始的变量属性
store/count/type.ts
    num为对象   interface 声明num类 但不做任何处理   另外的class可以声明类 并且会直接处理

store/type.ts
    声明暴露一个countNum 作为泛型 传入StoreOptions作为根状态     
    泛型：可重用的组件  其放回的类型和输入的类型必须相同

store/count/actions.ts
    先引入实参 和泛型参数 
    定义一个参数 继承ActionTree ActionTree有两个参数 一个真实参数num  一个泛型参数countNum
    ActionTree<实参，泛型参>={ 使用commit调用mutation的函数 ， 用逗号隔开 }
    通过vuex中的commit调用来执行 mutations中的函数
    commit(String,arg) string为执行函数的名称 increments; arg为传入的参数 count

store/count/mutations.ts
    vuex的执行者 
    将mutations提出单独的文件 通过MutationTree用作export导出
    MutationTree一个参数 需要变动的参数 num实参

store/count/index.ts
    将所有的vuex步骤集合成一个文件中
    vue-class  提前注册 const namespaced  =true  在module中才能导出查到namespaced 否则差找不到namespace对应的store
    @State(‘string’) target
    里面的 string 是你store 统一导出的 store的名称，(比如我的统一导出是 addNum)
    target 是 自定义的名称。 也就是你的变量或者值的代替

    如果你使用 nameSpace 这个方法
    需要先定义一个命名空间
    const tempSpace = nameSpace(‘string’)
    这里面的 string 是 你store 统一导出的 store的名称。
    然后
    @tempSpace.State(state => state.menulist) menulist
    上面的state 就是你这个 模块的sotre里面定义的state 。（看上面我的代码 menulist 就知道）
    这个 menulist 就是你在当前页面自定义的名称，（我为了方便粘贴就没还名称）
    你打印一下 menulist 就知道咋回事了。

store/index.ts
    整体的 vuex流程都已经在 addNum中在本文件中 注册module并将它输入到 helloworld.vue

HelloWorld.vue 
    @Component使用修饰符
    通过namespace找到模块 定义为addCount
    导出使用addCount的内容 并取出
    可以直接调用函数