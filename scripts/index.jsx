import data from './data.js'; // Папка с данными (товарами)
import React from 'react'; // React
import ReactDOM from 'react-dom'; //Он же
import Item from './item.jsx'; // Товар + функции
holmes({ // Библиотека для поиска
	find: '.main_item', //Какие блоки искать
	placeholder: '<p id="void_search">Ничего такого нет</p>' // Когда ничего не найдено
});

// App - Вся страница воедино
var App = React.createClass({
render: function() {
	return (
		<div id="app_container">
			<div id="header"> <img id="logo" src="img/LOGO.png"/>
				<div id="title">
					Магазин моих вещей
				</div>
				<div id="search_container">
					<div id="search">
						<input type="search" id="search" placeholder="Поиск по товарам"></input>
						<a href="cart.html"><img src="img/cart.png" id="cart"></img></a>
					</div>
				</div>
			</div>
		{/* Граница между шапкой и остальными товарами */}
			<div id="main_menu">
				<section>
				{
				/** Так рождаются товары
				@param key {number} - Нужен реакту, что бы различать элементы между собой.
				@param title {string} - Название.
				@param about {string} - Описание.
				@param price {string} - Цена (в гривнах).
				@param imageUrl {string} - Ссылка на фото.
				*/
				this.props.data.map((item) =>
					<Item key={item.id} title={item.name} about={item.about} price={item.price} imageUrl={item.imageUrl} id={item.id} />
				)}
				</section>
			</div>
		</div>
		);
	}
});

ReactDOM.render(
	<App data={data} />,
	document.getElementById('root')
);
