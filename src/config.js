/**
 * Created by anirudhmodi on 26/05/18.
 */
const config = {
    'authors':[
        {
            'id':'author1527349921940',
            'authorName':'Harper Lee',
            'age':90,
            'gender':'Female',
            'about':'Nelle Harper Lee, better known by her pen name Harper Lee, was an American novelist widely known for To Kill a Mockingbird, published in 1960.',
            'country':'Monroeville, Alabama, United States',
            'books':[
                {
                    'id':'book1527413229253',
                    bookName:'To Kill a Mocking Bird',
                    'isbn':'ISBN 89-9213-2312-23',
                    'about':`To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old. The story is told by the six-year-old Jean Louise Finch.`,
                    'authorId':'author1527349921940'
                },
                {
                    'id':'book1527413371919',
                    bookName:'Go Set a Watchman',
                    'isbn':'ISBN 89-672-287-23',
                    'about':`Go Set a Watchman is a novel by Harper Lee published on July 14, 2015 by HarperCollins, United States and William Heinemann, United Kingdom.`,
                    'authorId':'author1527349921940'
                }
            ]
        },
        {
            'id':'author1527349924256',
            'authorName':'Mark Twain',
            'age':75,
            'gender':'Male',
            'about':'Samuel Langhorne Clemens, better known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer.',
            'country':'Florida, Missouri, United States',
            'books':[]
        },
        {
            'id':'author1527349924944',
            'authorName':'Ruskin Bond',
            'age':84,
            'gender':'Male',
            'about':`Ruskin Bond is an Indian author of British descent. He lives with his adopted family in Landour, in Mussoorie, India. The Indian Council for Child Education has recognised his role in the growth of children's literature in India.`,
            'country':'Kasauli, India',
            'books':[]
        },
        {
            'id':'author1527349925512',
            'authorName':'Robin Sharma',
            'age':53,
            'gender':'Male',
            'about':`Robin Sharma is a Canadian writer and motivational speaker known for his The Monk Who Sold His Ferrari book series. Sharma worked as a litigation lawyer until age 25, when he self-published MegaLiving, a book on stress management and spirituality. `,
            'country':'Port Hawkesbury, Canada',
            'books':[
                {
                    'id':'book1527413425384',
                    bookName:'The Monk Who Sold His Ferrari',
                    'isbn':'ISBN 455-356-287-23',
                    'about':`The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25.`,
                    'authorId':'author1527349925512'
                }
            ]
        }
    ],
    'books':[
        {
            'id':'book1527413229253',
            bookName:'To Kill a Mocking Bird',
            'isbn':'ISBN 89-9213-2312-23',
            'about':`To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old. The story is told by the six-year-old Jean Louise Finch.`,
            'authorId':'author1527349921940',
            'authorDetail':{
                'authorName':'Harper Lee',
                'authorId':'author1527349921940'
            }
        },
        {
            'id':'book1527413371919',
            bookName:'Go Set a Watchman',
            'isbn':'ISBN 89-672-287-23',
            'about':`Go Set a Watchman is a novel by Harper Lee published on July 14, 2015 by HarperCollins, United States and William Heinemann, United Kingdom.`,
            'authorId':'author1527349921940',
            'authorDetail':{
                'authorName':'Harper Lee',
                'authorId':'author1527349921940'
            }
        },
        {
            'id':'book1527413425384',
            bookName:'The Monk Who Sold His Ferrari',
            'isbn':'ISBN 455-356-287-23',
            'about':`The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25.`,
            'authorId':'author1527349925512',
            'authorDetail':{
                'authorName':'Robin Sharma',
                'authorId':'author1527349925512'
            }
        }
    ]
};


Object.freeze(config);

export default config;