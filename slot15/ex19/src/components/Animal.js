const animals = [
    {
        name: 'Lion',
        scientificName: 'Panthera leo',
        size: 140,
        diet: ['meat'],
        image:'https://i.pinimg.com/736x/83/93/11/83931108169cc1a5f81103b38d139bfc.jpg'
        
    },
    {
        name: 'Gorilla',
        scientificName: 'Gorilla beringei',
        size: 205,
        diet: ['plants', 'insects'],
        additional: {
            notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
        }, 
        image: 'https://as1.ftcdn.net/v2/jpg/00/20/12/54/1000_F_20125406_6ivXM5jydENlY79vDtA71ATWkvPPN2XJ.jpg'
        
    },
    {
        name: 'Zebra',
        scientificName: 'Equus quagga',
        size: 322,
        diet: ['plants'],
        additional: {
            notes: 'There are three different species of zebra.',
            link: 'https://en.wikipedia.org/wiki/Zebra'
        },
        
        image: 'https://media1.tenor.com/m/1ztqecOJZxkAAAAd/laughing-hilarious.gif'
    }
];

export default animals;
