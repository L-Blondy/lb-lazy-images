class Test {

	constructor(value) {
		this.value = value;
	}

	toEqual(value) {
		if (this.value !== value)
			throw new Error(`Values '${ this.value }' and '${ value }' do not match`);
		return this;
	}
}


export default (value) => new Test(value);
