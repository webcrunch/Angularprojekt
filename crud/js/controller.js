var listApp = angular.module('listpp', []);

/** variable listApp is a variable whitch used to control the array values ot show the data
to show in view using the module name 'listApp' with arguments as an array

Initialize the controller by name 'PhoneListCtrl' holds the information og phone in form of 
array with keys name, snipper, price, quantity

Scope argument passed in function is a key argument should be passed with exactly the same 
name **/

	listApp.controller('PhoneListCtrl', function ($scope,$http) {
	/** function to get detail of product added in mysql 
	referencing php **/

		$scope.get_product = function(){
			$http.get("db.php?action=get_product").success(function(data)
		{

			// $Scope.product_detail = data;

			$Scope.pagedItems = data ;


		});
		};

	/** function to add details for products in mysql referencing php **/ 

		$scope.product_submit = function(){
			$http.post('db.php?action=add_product',
			{
				'id' : $Scope.prod_id,
				'prod_name' : $Scope.prod_name,
				'prod_desc' : $Scope.prod_desc,
				'prod_price' : $Scope.prod_price,
				'prod_quantity' : $Scope.prod_quantity
			})

			.success(function (data, status, headers, config) {
				$Scope.get_product();
			})

			.error(function (data, status, headers, config){

			})
		}

	/** function to edit product details from list of product referencing php **/

		$scope.prod_edit = function(index) {
			$Scope.update_prod = true;
			$Scope.add_prod = false;
			$http.post('db.php?action=edit_product',
			{
				'prod_index' : index
			}
			)
			.success(function (data, status, headers, config){
				//alert(data[0]["prod_name"]);
				$Scope.prod_id = data[0]["id"];
				$Scope.prod_name = data[0]["prod_name"];
				$Scope.prod_desc = data[0]["prod_desc"];
				$Scope.prod_price = data[0]["prod_price"];
				$Scope.prod_quantity = data[0]["prod_quantity"];
			
			})
			.error(function (data, status, header, config){

			});
		};

		/** Function to update product details after edit from list of products 
		referencing php **/

		$scope.update_product = function() {

			$http.post('db.php?action=update_product',
			{
				'id' : $Scope.prod_id,
				'prod_name' : $Scope.prod_name,
				'prod_desc' : $Scope.prod_desc,
				'prod_price' : $Scope.prod_price,
				'prod_quantity' : $Scope.prod_quantity
			})
			.success(function (data, status, header, config){
				$Scope.get_product();
			})
			.error(function (data, status, header, config){

			});
		};


});