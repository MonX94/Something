import data from './data.js';
function checkCart() {
	//проверяю наличие корзины в localStorage;
	if (localStorage.getItem('cart') != null) {
		return JSON.parse(localStorage.getItem('cart'));
	}
	return {};
}

function addItem(prop) {
	//добавляем товар в корзину
	var id = prop.id;
	if (cart[id]!=undefined) {
		cart[id]++;
	}
	else {
		cart[id] = 1;
	}
	saveCartToLS();
}
// function removeItem(prop) {
// 	var id = prop.id;
// 	if (cart[id] > 1) {
// 		cart[id]--;
// 	}
// 	else {
// 		delete cart[id];
// 	}
// 	saveCartToLS();//сохраняю корзину в localStorage
// }

function saveCartToLS() {
	//  Сохраняю в Local Storage
	localStorage.setItem('cart', JSON.stringify(cart));
}

var cart = checkCart();

module.exports = React.createClass({
	getInitialState: function() {
		return {amount: cart[this.props.id] ? cart[this.props.id] : 0};
	},
	addItemLocal: function(prop) {
		if (this.state.amount !== undefined) {
			this.setState({
				amount: this.state.amount + 1
			});
		} else {
			this.setState({
				amount: 1
			});
		}
		addItem(prop);
	},
	render: function() {
		var price = this.props.price.toString() + ' UAH';
		return (
			<div className='main_item' id={'main_item' + this.props.id}>
				<h1 className='item_title'>{this.props.title}</h1>
				<div className='item_image_container'><a href={this.props.imageUrl} target="_blank"><img className='item_image' src={this.props.imageUrl}/></a></div>
				<h4 className='item_about'>{this.props.about}</h4>
				<h2 className='item_price'>{price}</h2>
				<button className='add_item' onClick={() => this.addItemLocal(this.props)}>Добавить в корзину ({this.state.amount})</button>
			</div>
		);

	}
});