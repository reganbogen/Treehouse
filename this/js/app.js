var City = function (name, state) {
	this.name = name || ‘Portland’;
	this.state = state || ‘Oregon’;
	this.pringMyCityAndState = function() {
	  console.log(“My city is ” + this.name + ”, and my state is ” + this.state);
};
portland = new City();
seattle = new City(‘Seattle', ‘Washington');
salem = new City(‘Salem’);

portland.printMyCityAndState();
seattle.printMyCityAndState();