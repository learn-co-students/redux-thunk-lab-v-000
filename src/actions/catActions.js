const fetchCats = () => {
	const cats = fetch('http://localhost:4000/db')
		.then((response) => {
			return response.json();
		})
		.then(responseJSON.images);
	// .then((cats) => dispatch({ type: 'FETCH_CATS', cats }));
	return cats;
};
export default fetchCats;
