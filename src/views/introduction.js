export default () => (
	<div className="container introduction">
		<h1>简介</h1>

		<p>在小网站中, 如果组织编写你的代码通常不是一个大问题. 在网站里面写一些css，或者使用SASS。然后将SASS将样式编译成一个生产环境的样式表。然后合并所有的样式表到一个文件或包中</p>

		<p>然而，随着网站越来越大，项目更加的复杂，至少有三种方式组织你的代码，使其效率更高。它直接影响你编写代码的时间，以及浏览器需要加载多少代码。当你在一个团队中进行合作时，以及高性能
		高扩展时，这些组织代码的方式必不可少</p>

		<p>长期维护的项目和遗留代码也是如此(阅读 <a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">"如何使用Sass和SMACSS扩展和维护旧版CSS"</a> — SMACSS和BEM混合起来很不错).</p>


		<h2>方法论</h2>

		<p>目前有很多<a href="https://github.com/ikkou/awesome-css#architecture">方法</a>可以减少css大小, 团队之间的合作和维护大型的css代码库。比如在Twitter、Facebook、<a href="http://markdotto.com/2014/07/23/githubs-css/#two-bundles">Github</a>这样的大型项目中是很明显的,  其他项目也可能快速增长成为一个巨大的css文件。</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//oocss.org/">OOCSS</a></h4>
					使用CSS"对象"风格内容和容器
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//smacss.com/">SMACSS</a></h4>
					为css规则给定5种类型指南
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//suitcss.github.io/">SUITCSS</a></h4>
					结构化类名和有意义的连字符
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//github.com/nemophrost/atomic-css">Atomic</a></h4>
					将样式分割为原子或不可再分割
				</div>
			</div>
		</div>

		<p></p>

		<h2>为什么选择BEM而不是其他方法?</h2>

		<p>无论在你的项目中选择哪种方法, 你都将受益于更多的结构化CSS和UI。一些样式没有那么严格也更具有灵活性，有些更容易理解也更适用于团队中.</p>

		<blockquote>
			<p>我选中BEM而不是其他方法的原因主要是：它与SMACSS相比不那么容易混淆，同时也提供了良好的体系结构(OOCSS)和一个可以交流识别的方法</p>
			<footer>Mark McDonnell, <a href="http://www.integralist.co.uk/posts/bem.html#4">Maintainable CSS with BEM</a></footer>
		</blockquote>

		<h2>Blocks, Elements and Modifiers</h2>

		<p>BEM 是一个关键元素方法的缩写，即 Block, Element, Modifier。 BEM的严格命名规则在 <a href="/naming/">这里</a>查看</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell introduction__cell--block">
					<h3>Block</h3>
					<p>独立实体，独立的意义</p>

					<h5>例子</h5>
					<code>header</code>, <code>container</code>, <code>menu</code>, <code>checkbox</code>, <code>input</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--element">
					<h3>Element</h3>
					<p>block的一部分，没有独立的意义。语意上和block关联</p>

					<h5>例子</h5>
					<code>menu item</code>, <code>list item</code>, <code>checkbox caption</code>, <code>header title</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--modifier">
					<h3>Modifier</h3>
					<p>block或element上的标志。使用他来改变外观或行为</p>

					<h5>例子</h5>
					<code>disabled</code>, <code>highlighted</code>, <code>checked</code>, <code>fixed</code>, <code>size big</code>, <code>color yellow</code>
				</div>
			</div>
		</div>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="https://monsterooo.github.io/getbem.com/assets/github_captions.jpg" style={{width: '100%', maxWidth: '930px'}}/>
		</div>

		<h2>幕后</h2>

		<p>现在我们来看一下一个具体的<code>button</code>如何使用BEM来实现，这里使用 <a href="http://primercss.io/buttons/">GitHub</a>页面上的一个按钮</p>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="https://monsterooo.github.io/getbem.com/assets/github_buttons.jpg" style={{width: '100%', maxWidth: '361px'}}/>
		</div>

		<p>通常情况下我们有一个按钮, 还有两个不同的状态， 因为我们的样式css选择器使用了BEM，我们可以使用任何标签上实现比如 (<code>button</code>, <code>a</code> 甚至 <code>div</code>). 根据命名规则我们要使用 <code>block--modifier-value</code> 语法.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4>HTML</h4>
					<pre>{`<button class="button">
	正常按钮
</button>
<button class="button button--state-success">
	成功按钮
</button>
<button class="button button--state-danger">
	警告按钮
</button>`}</pre>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>CSS</h4>
					<pre>{`.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}`}</pre>
			</div>
			</div>
		</div>

		<h2>优点</h2>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4>模块化</h4>
					<p>Block的样式在页面中不会依赖页面上的其他元素，所以你用户不会体验到 <a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">中的麻烦</a>.</p>
					<p>也可以将完成的blocks放到你的新的项目中</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>重用性</h4>
					<p>以不同方式编写的每个独立的块可以进行组合并且复用他们, 极大的减少了css代码的维护数量。</p>
					<p>一旦建立了这种风格指南, 你可以创建你自己的css库文件, 可以使css发挥强大的效果。</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>结构</h4>
					<p>BEM方法让你的css代码拥有坚实的机构，当然它也很简单也容易理解。</p>
				</div>
			</div>
		</div>

		<h2>扩展阅读</h2>
		<ul>
			<li><a href="http://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/">‘Why BEM?’ in a nutshell</a></li>
			<li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">MindBEMding</a> — getting your head ’round BEM syntax</li>
			<li><a href="http://cssguidelin.es/#bem-like-naming">CSS guidelines</a></li>
			<li><a href="http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/">BEM methodology for small projects</a></li>
			<li><a href="http://www.slideshare.net/MaxShirshin/bem-it-for-brandwatch">BEM It! for Brandwatch</a></li>
			<li><a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">Used and Abused</a> — CSS Inheritance and Our Misuse of the Cascade.</li>
			<li><a href="https://medium.com/objects-in-space/objects-in-space-f6f404727">Objects in Space</a> — A style-guide for modular SASS development using SMACSS and BEM</li>
			<li><a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">How to Scale and Maintain Legacy CSS with Sass and SMACSS</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">Building a modular My Health Skills with BEM and Sass</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">Building My Health Skills — Part 3</a></li>
		</ul>

		<h2>案例分析</h2>

		<p>我们很快将会写一个"如何将现有项目迁移到BEM"。 在此期间你可以观看Nicole Sullivan的演讲 — "<a href="http://www.youtube.com/watch?v=0NDyopLKE1w">CSS 预处理性能</a>". 她很好的综述了她在大多数网站中遇到的问题，跟踪它们并给出了解决方案。</p>
	</div>
);
