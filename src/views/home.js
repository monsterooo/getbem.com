export default () => (
	<div className="index">
		<div className="description">
			BEM — Block Element Modifier 是一种帮助你创建可复用的组件和前端开发代码共享
		</div>
		<div className="container" style={{marginBottom: '50px'}}>
			<div className="row">
				<div className="column">
					{advantage({title: '简单', color: 'block', text: '使用BEM很简单，你只需要采用BEM命名约定即可。'})}
				</div>
				<div className="column">
					{advantage({title: '模块化', color: 'element', text: '独立blocks 和 css选择器使你的代码模块化和可重用。'})}
				</div>
				<div className="column">
					{advantage({title: '可扩展', color: 'modifier', text: '使用BEM方法和工具可以按照你习惯的方式重新组合和配置。'})}
				</div>
			</div>
		</div>
		{introductionPanel()}
		{namingPanel()}
		{questionsPanel()}
		{companiesPanel()}
	</div>
);

function advantage({title, color, text}) {
	return (
		<div className={`advantage advantage--${color}`}>
			<h2>{title}</h2>
			<div>{text}</div>
		</div>
	);
}

function panel({type, title, link, img, children}) {
	return (
		<div className={`panel panel--${type}`}>
			<div className="panel__container">
				<a href={link}><img src={img}/></a>
				<h2><a href={link}>{title}</a></h2>
				{children}
			</div>
		</div>
	);
}

function introductionPanel() {
	return panel({
		type: 'introduction',
		title: '简介',
		link: 'https://monsterooo.github.io/getbem.com/introduction/',
		img: 'https://monsterooo.github.io/getbem.com/assets/ic_book_white_24px.svg',
		children: (
			<p>
				BEM是一个非常有用，功能强大且简单的命名约定，使您的前端代码更易于阅读和理解，易于使用，易于扩展，更强大和更明确，并且更严格。
				</p>
		)
	});
}

function namingPanel() {
	return panel({
		type: 'naming',
		title: '命名',
		link: 'https://monsterooo.github.io/getbem.com/naming/',
		img: 'https://monsterooo.github.io/getbem.com/assets/ic_text_format_white_24px.svg',
		children: (
			<p>
				BEM方法确保参与网站开发的每个人都可以使用统一的代码库并使用相同的语言。 使用BEM的适当的命名约定会更好地为您的网站设计更改做好准备。
			</p>
		)
	});
}

function questionsPanel() {
	return panel({
		type: 'questions',
		title: 'FAQ',
		link: 'https://monsterooo.github.io/getbem.com/faq/',
		img: 'https://monsterooo.github.io/getbem.com/assets/ic_question_answer_white_24px.svg',
		children: (
			<div>
				<p><i>— <a href="/faq/#custom-tags-for-blocks">Why do I need CSS classes for block instead of using semantic custom tags?</a></i></p>
				<p><i>— <a href="/faq/#encapsulating-tag-selector">May I combine a tag and a class in a selector, such as button.button?</a></i></p>
				<br/>
				<p>Look for answers in the awesome <a href="/faq/">FAQ list</a>!</p>
			</div>
		)
	});
}

function companiesPanel() {
	return (
		<div className="panel panel--companies">
			<div className="panel__container">
				<h2>使用BEM的公司</h2>
				<ul>
					<li><a href="https://yandex.com" title="Yandex"><img src="/assets/companies/yandex.png"/></a></li>
					<li><a href="http://www.jetbrains.com" title="JetBrains"><img src="/assets/companies/jetbrains.png"/></a></li>
					<li><a href="http://factory.mn" title="Manufactura"><img src="/assets/companies/manufactura.png"/></a></li>
					<li><a href="http://eu.ideus.biz" title="iDeus"><img src="/assets/companies/ideus.png"/></a></li>
					<li><a href="http://alfabank.com" title="Alfa-Bank"><img src="/assets/companies/alfabank.png"/></a></li>
					<li><a href="http://edster.ru" title="Edster"><img src="/assets/companies/edster.png"/></a></li>
					<li><a href="http://www.wimdu.com" title="Wimdu"><img src="/assets/companies/wimdu.png"/></a></li>
					<li><a href="http://megafon.com" title="Megafon"><img src="/assets/companies/megafon.svg"/></a></li>
					<li><a href="http://decaf.de" title="Decaf"><img src="/assets/companies/decaf.png"/></a></li>
					<li><a href="http://epam.com" title="EPAM"><img src="/assets/companies/epam.svg"/></a></li>
					<li><a href="https://renuo.ch" title="Renuo"><img src="/assets/companies/renuo.png"/></a></li>
					<li><a className="panel--companies__add-button" href="https://github.com/getbem/getbem.com/issues/1" title="Add your company"><img src="/assets/ic_add_circle_outline_white_24px.svg"/></a></li>
				</ul>
			</div>
		</div>
	);
}
