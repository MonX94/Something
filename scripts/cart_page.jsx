import data from './data.js';
import React from 'react'; // React
import ReactDOM from 'react-dom'; //Он же
import Item from './item_in_cart.jsx'; // Товар + функции
holmes({ // Библиотека для поиска
	find: '.main_item', //Какие блоки искать
	placeholder: '<p id="void_search">Ничего такого нет</p>' // Когда ничего не найдено
});
function checkCart() {
	//проверяю наличие корзины в localStorage;
	if (localStorage.getItem('cart') != null) {
		return JSON.parse(localStorage.getItem('cart'));
	}
	return {};
}
var cart = checkCart();
var App = React.createClass({
	getItem: function(cart, data) {
		var objectList = [];
		for(var key in cart) {
			var boughtObject = data[key-1];
			objectList.push(boughtObject);
		}
		return objectList;
	},
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
						<a href="index.html"><img src="img/cart.png" id="cart"></img></a>
					</div>
				</div>
			</div>
		{/* Граница между шапкой и остальными товарами */}
			<div id="main_menu">
				<section>
				{this.getItem(this.props.cart, this.props.data).map((item) =>
					<Item key={item.id} title={item.name} about={item.about} price={item.price} imageUrl={item.imageUrl} id={item.id} />
				)}
				</section>
			</div>
		</div>
		);
	}
});

ReactDOM.render(
	<App cart={cart} data={data}/>,
	document.getElementById('root')
);