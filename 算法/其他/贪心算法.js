// 行家一出手 便知道有没有
// 不要去证明你的贪心策略是否是对的、那样会死人的，需要推导很多数学公式，是否是对的可以通过对数器验证大量数据来结果对不对

// 例子一: 给定一个字符串数组，要求将里面字符串全部连接起来，形成一组最小的字典序的字符串

function lowestLexicography(arr = ['fadfda', 'fafda', 'fadfadsf']) {
    function compare(a, b) {
        if(a + b < b + a) { // 这里是贪心策略
            return -1
        } else {
            return 1
        }
        return 0
    }
    arr.sort(compare)
    return arr.join('')
}


// 一块金条切成两半，是需要花费和长度数值一样的铜板的。比如 长度为20的 金条，不管切成长度多大的两半，都要花费20个铜 板。一群人想整分整块金 条，怎么分最省铜板? 例如,给定数组{10,20,30}，代表一共三个人，整块金条长度为 10+20+30=60. 金条要分成10,20,30三个部分。 如果， 先把长 度60的金条分成10和50，
// 花费60 再把长度50的金条分成20和30， 花费50 一共花费110铜板。
// 但是如果， 先把长度60的金条分成30和30，花费60 再把长度30 金条分成10和20，花费30 一共花费90铜板。 输入一个数组，返回分割的最小代价。

// 思路：利用堆和哈弗曼树，将最终要拆成的数组生成一个小根堆，然后每次去取小根堆里面最小的两个，生成一个节点，
// 然后将之前的两个节点删除，将新生成的节点扔回去，每次都去里面最小的两个，生成一个节点，直到最后小根堆里面只有一个节点
// 所有的这个过程当中，生成节点的过程当中会生成一颗哈弗曼树，这棵树的非叶子节点加起来就是总的代价





// 输入: 参数1，正数数组costs 参数2，正数数组profits 参数3， 正数k 参数4，正数m
// costs[i]表示i号项目的花费 profits[i]表示i号项目在扣除花 费之后还能挣到的钱(利润) k表示你不能并行、只能串行的最多 做k个项目 m表示你初始的资金 说明:你每做完一个项目，马上获得的收益，可以支持你去做下 一个 项目。
// 输出: 你最后获得的最大钱数。

// 思路：利用堆，先将花费costs形成一个小根堆，然后将低于当前资金的所有项目弹出来，按照利润再形成一个大根堆，然后取出利润最大的去做，
// 做完之后有新的收益，这个时候再去小根堆检查是否也低于当前资金的项目可做，有就弹岛大根堆里面去，
// 然后继续做当前利润最大的项目，如果没有就不弹，继续做当前有的，直到项目做完或者资金不够做下一个项目停止，
// 这个时候就得到了最大的利润


// 一些项目要占用一个会议室宣讲，会议室不能同时容纳两个项目 的宣讲。 给你每一个项目开始的时间和结束的时间(给你一个数 组，
// 里面 是一个个具体的项目)，你来安排宣讲的日程，要求会 议室进行 的宣讲的场次最多。返回这个最多的宣讲场次。

// 思路: 谁的结束时间更早，谁先来，每次安排了一个结束时间最早的会议，将不能进行的会议进行淘汰，然后再继续查找结束时间最早的会议


// 在贪心算法中，往往会用到堆这个结构