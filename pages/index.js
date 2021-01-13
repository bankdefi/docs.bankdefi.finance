import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <h1>基于火币生态链Heco打造的自动做市商DEX BankDefi Swap</h1>

        <p><img alt="" src="https://cdn-images-1.medium.com/max/1000/1*gcIfFl10r-8e-mDIB91kLg.png" /></p>

        <h2>什么是BankDefi Swap</h2>

        <p>BankDefi
        Swap是一款以自动化做市（AMM）为基础构建的新一代去中心化交易所（DEX）。有了明星项目Uniswap在业内树立起的先行标杆，基于火币生态链Heco打造的BankDefi
        Swap也应运而生。除了任何Swap类DEX都具备的代币交换功能和流动性提供功能外，BankDefi
Swap还受到SushiSwap等相关项目的启发，兼具流动性挖矿的功能。</p>

        <p>BankDefi Swap的基本交易功能直接来自Uniswap代码库。流动性提供者为交易对提供流动性，并从用户的代币交易手续费中获得奖励。</p>

        <p>与Sushiswap类似，BankDefi Swap推出了“挖矿（Farm）”页，为指定的部分交易对向流动性提供者分发额外的代币奖励BDS，即BankDefi
Swap的平台币。</p>

        <h2>与大量问世的同质化swap项目相比，BankDefi Swap何以胜人一筹</h2>

        <p>今年以来，几乎每天都有新的克隆版swap项目诞生，层出不穷，正因为如此，你可能会觉得BankDefi
Swap也只是swap项目芸芸众生中的普通一员。非也。BankDefi Swap定是众项目中的佼佼者。</p>

        <p>根据交易的复杂程度，以太坊上的Gas费会从几美元至几十美元甚至达到数百美元不等。但发生在火币生态链Heco上的交易，其Gas费通常只有几美分，连以太坊费用的百分之一都不到。与此同时，火币生态链Heco上的交易确认速度比以太坊上的要快很多，通常是交易一旦发送便得到及时确认。</p>

        <p>在火币生态链Heco之上打造的BankDefi Swap，便自然继承了交易速度快交易费用低的优点，这无疑为BankDefi
        Swap打开了一片新天地，创造了一幅在以太坊swap世界中无法实现的图景。举个栗子，自动化做市策略在BankDefi
Swap上是经济可行的，而做市策略在Gas费高企的以太坊网络上只能望洋兴叹了。</p>

        <h2>BankDefi Swap幕后团队</h2>

        <p>BankDefi
        Swap是由加密社区一群匿名人员构成，包括经验丰富的软件开发人员、网页开发人员、设计师、营销人员等。这些小伙伴们集结在一起，力图将BankDefi
Swap打造为火币生态链Heco生态系统乃至整个加密货币行业的公共设施。</p>

        <h2>BankDefi Swap项目发展的资金来源</h2>

        <p>作为一项社区驱动的项目，BankDefi Swap的绝大多数工作都是由社区志愿者自愿参与完成的。</p>

        <p>对于BankDefi Swap项目的早期贡献者，他们将从流动性提供者的挖矿奖励BDS代币中获得一部分的分成，以表彰他们对BankDefi
Swap项目所做的贡献。除了早期贡献者奖励和流动性提供者奖励外，不存在其他方式的BDS代币发行。BankDefi Swap不存在代币预售，不存在代币私募。</p>

        <h2>BankDefi Swap上线初期将推出哪些币对？</h2>

        <p>BankDefi Swap将在上线之初推出如下币对：</p>

        <ul><li>HBTC-HETH</li><li>HBTC-HUSD</li><li>HBTC-HT</li><li>HUSD-HT</li></ul>

        <p>虽然任何人都可以在BankDefi Swap上添加他们想要的币对，但是BankDefi
Swap团队会提供精选的币对列表，以便用户能更加放心地在精选币对里进行交易。同时，只有为精选列表中的币对提供流动性的参与者才有资格获得BDS奖励。将来，BankDefi团队会把币对列表的管理移交给社区治理。</p>

        <h2>BDS代币说明</h2>

        <ol><li>BDS代币分配无预留、无私募、无预挖。挖矿收益的85%代币用于流动性挖矿奖励，挖矿收益的15%代币用于社区资金和早期贡献者。</li><li>BDS发行总量约为1.05亿枚。</li></ol>

        <p>BDS代币发行时间表：</p>

        <p>BDS完整发行周期约为24个月，这其中包括了3个阶段：</p>

        <blockquote><p><em>第一阶段：（约1周）1倍奖励，每个块奖励3个BDS</em></p><p><em>第二阶段：（约2个月）5倍奖励，每个块奖励15个BDS</em></p><p><em>第三阶段：（约21个月+3周）1倍奖励，每个块奖励3个BDS</em></p></blockquote>

        <h2>BDS代币经济模型</h2>

        <p>15%的BDS奖励将会分配给DAO基金会，这些资金将用于早期的项目贡献者，今后由DAO来管理这些资金。</p>

        <p>让我们一起在BankDefi Swap的DeFi世界里尽情畅游吧！</p>

        <p><a href="https://github.com/bankdefi">Github</a><strong> |
</strong><a href="https://medium.com/@bankdefi">Medium</a></p>
      </main>
    </div>
  )
}
