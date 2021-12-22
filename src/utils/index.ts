// 将驼峰命名转换成-连接形式
export const toLine = (value: string) => {
    // 将大写字母分组，转成-连接，再转成小写
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}