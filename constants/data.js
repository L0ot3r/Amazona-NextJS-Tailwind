import bcrypt from 'bcryptjs'

const data = {
	users: [
		{
			name: 'John',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'Jane',
			email: 'user@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],
	products: {
		clothes: [
			{
				name: 'Free Shirt',
				category: 'Shirts',
				image: '/assets/images/shirt1.jpg',
				price: 70,
				brand: 'Nike',
				rating: 4.5,
				numReviews: 8,
				countInStock: 20,
				description: 'A popular shirt',
			},
			{
				name: 'Fit Shirt',
				category: 'Shirts',
				image: '/assets/images/shirt2.jpg',
				price: 80,
				brand: 'Adidas',
				rating: 3.2,
				numReviews: 10,
				countInStock: 20,
				description: 'A popular shirt',
			},
			{
				name: 'Slim Shirt',
				category: 'Shirts',
				image: '/assets/images/shirt3.jpg',
				price: 90,
				brand: 'Raymond',
				rating: 4.5,
				numReviews: 3,
				countInStock: 20,
				description: 'A popular shirt',
			},
			{
				name: 'Golf Pants',
				category: 'Pants',
				image: '/assets/images/pants1.jpg',
				price: 90,
				brand: 'Oliver',
				rating: 2.9,
				numReviews: 13,
				countInStock: 20,
				description: 'Smart looking pants',
			},
			{
				name: 'Fit Pants',
				category: 'Pants',
				image: '/assets/images/pants2.jpg',
				price: 95,
				brand: 'Zara',
				rating: 3.5,
				numReviews: 7,
				countInStock: 20,
				description: 'A popular pants',
			},
			{
				name: 'Classic Pants',
				category: 'Pants',
				image: '/assets/images/pants3.jpg',
				price: 75,
				brand: 'Casely',
				rating: 2.4,
				numReviews: 14,
				countInStock: 20,
				description: 'A popular pants',
			},
		],
		laptop: [
			{
				name: 'ASUS A15 TUF507RE-HN012W',
				category: 'Gaming',
				image: '/assets/laptop-img/laptop1.jpg',
				price: 1499.95,
				brand: 'Asus',
				rating: 0,
				numReviews: 0,
				countInStock: 20,
				description: 'Le PC portable Gamer ASUS TUF Gaming A15 dispose de composants ultra-performants et bénéficie de nombreuses innovations, afin de vous faire profiter de hautes performances et d\'un haut niveau de confort avec les jeux récents. Son châssis combine écran à cadre mince et clavier de grande taille.'
			},
			{
				name: 'Alienware m15 R5-001',
				category: 'Gaming',
				image: '/assets/laptop-img/laptop2.jpg',
				price: 2599.96,
				brand: 'Alienware',
				rating: 0,
				numReviews: 0,
				countInStock: 20,
				description: 'Gagnez en mobilité sans négliger les performances avec le PC portable Alienware m15 R5 ! Ne dépassant pas 2 cm d\'épaisseur, ce poids plume sera un compagnon mobile idéal pour les gamers. Pour votre confort, il dispose d\'un clavier rétroéclairé et d\'un écran Full HD à bordures fines.'
			},
			{
				name: 'Dell G15 5515-408',
				category: 'Gaming',
				image: '/assets/laptop-img/laptop3.jpg',
				price: 1499.95,
				brand: 'Dell',
				rating: 0,
				numReviews: 0,
				countInStock: 20,
				description: 'Le PC portable gaming Dell G15 5515-065 possède de sérieux arguments pour vous assurer la victoire à chaque instant ! En plus de ses composants performants, il bénéficie d\'un clavier rétroéclairé et d\'un système audio de qualité.'
			},
			{
				name: 'MSI GF66 Katana 11UD-030XFR',
				category: 'Gaming',
				image: '/assets/laptop-img/laptop4.jpg',
				price: 1449.95,
				brand: 'MSI',
				rating: 5,
				numReviews: 1,
				countInStock: 20,
				description: 'Le PC portable Gamer MSI GF66 Katana 11UD combine avantageusement performance et mobilité. Idéal pour les joueurs, il bénéficie d\'un écran 144 Hz, d\'un clavier Gamer rétroéclairé, d\'un système audio de qualité et d\'un système de refroidissement performant.'
			},
			{
				name: 'Samsung Galaxy Book2 (NP750XED-KB3FR)',
				category: 'Gaming',
				image: '/assets/laptop-img/laptop5.jpg',
				price: 799.94,
				brand: 'Samsung',
				rating: 4.5,
				numReviews: 5,
				countInStock: 20,
				description: 'Le PC portable Samsung Galaxy Book2 combine avantageusement mobilité et efficacité. Avec son format compact et léger et ses composants performants, cet ordinateur portable Samsung vous offre l\'efficacité dont vous avez besoin au quotidien pour une utilisation très polyvalente.'
			},
		]
	},
};

export default data;
