export default () => (
	<div className="container naming">
	<h1>命名</h1>

			<blockquote>计算机科学只存在两个难题：缓存失效和命名。 — <i>Phil Karlton</i></blockquote>

			<p>正确的命名可以提高开发效率、调试和实现旧代码中的功能。遗憾的是，大多数css没有任何结构和命名规范。这导致时间长了css代码不可维护。</p>

			<p>BEM方法确保每个网站的开发人员使用单个代码库和同一种语言。使用正确的命名将会为你的网站设计改变做好准备。</p>

			<div className="naming__group naming__group--block">
				<div className="naming__cell naming__cell--block">
					<h3>Block</h3>

					<p>封装一个独立的实体，他具有意义。虽然Block可以相互嵌套，但是在语意上让他们保持相互的独立，没有优先级或层次结构。整体实体没有DOM表示(如controllers或models)也可以是Block</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Block名称可以由字母、数字和破折号组成一个类，增加一个简短的前缀为命名空间：<code>.block</code></p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>任何DOM节点如果接收一个类名他能成为一个Block。</p>
							<pre>{'<div class="block">...</div>'}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<ul>
								<li>仅使用类名选择器</li>
								<li>没有标签名或ID</li>
								<li>不依赖页面上的其他Block/Elements</li>
							</ul>
							<pre>{".block { color: #042; }"}</pre>
						</div>
					</div>
				</div>
			</div>

			<div className="naming__group naming__group--element">
				<div className="naming__cell naming__cell--element">
					<h3>Element</h3>
					<p>Block的一部分，没有独立的意义。任何元素在语意上是绑在他的Block上。</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Elements名称可以由字母、数字、破折号和下划线。CSS类名由Block名称加两个下划线加Elements名：<code>.block__elem</code></p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>在给定的Block内的任何DOM都可以成为一个Elements。所有Elements在语意上相等。</p>
							<pre>{`<div class="block">
	...
	<span class="block__elem"></span>
</div>`}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<ul>
								<li>仅使用类名选择器</li>
								<li>没有标签名或ID</li>
								<li>不依赖页面上的其他Block/Elements</li>
							</ul>
							<b>好的</b>
							<pre>{`.block__elem { color: #042; }`}</pre>
							<b>坏的</b>
							<pre>{`.block .block__elem { color: #042; }
div.block__elem { color: #042; }`}</pre>
						</div>
					</div>
				</div>
			</div>

			<div className="naming__group naming__group--modifier">
				<div className="naming__cell naming__cell--modifier">
					<h3>Modifier</h3>
					<p>在Block或Elements上的Flags，使用它们来改变外观、行为或状态。</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Modifier名称可以由字母、数字、破折号和下划线。CSS类名由Block或Element的名称加上两个破折号。 <code>.block--mod</code> 或 <code>.block__elem--mod</code> 和 <code>.block--color-black</code> 与 <code>.block--color-red</code> 复杂修饰符中的空格被短划线代替。</p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>Modifier是添加到你的Block/Elements类名中额外的扩展。只给Block/Elements他们的修饰添加Modifier，并且保持他们原来的类</p>
							<b>好的</b>
							<pre>{`<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>`}</pre>
							<b>坏的</b>
							<pre>{`<div class="block--mod">...</div>`}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<p>使用Modifier的类名选择：</p>
							<pre>{".block--hidden { }"}</pre>
							<p>基于块级的modifier去修改Elements(与块同级的modifier)</p>
							<pre>{".block--mod .block__elem { }"}</pre>
							<p>元素的modifier(与元素同级的modifier):</p>
							<pre>{".block__elem--mod { }"}</pre>
						</div>
					</div>
				</div>
			</div>

			<h3>例子</h3>

			<p>假设你有一个From Block与modifiers <code>theme: "xmas"</code> 和 <code>simple: true</code> 和 elements <code>input</code> 与 <code>submit</code>, 元素 <code>submit</code> 他具有自己的修饰符 <code>disabled: true</code> 未写表单时的样式:</p>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h5>HTML</h5>
						<pre>{`<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>`}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h5>CSS</h5>
						<pre>{`.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }`}</pre>
					</div>
				</div>
			</div>
	</div>
);
