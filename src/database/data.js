import itEnds from '../../src/assets/itEnds.jpg';
import atomics from '../../src/assets/Atomics.jpeg';
import punching_air from '../../src/assets/punchingAir.jpeg';
import harry_potter from '../../src/assets/harryPoter.jpeg';
import lord_of_the_rings from '../../src/assets/TheLords.jpeg';
import where_the_crawdad_sings from '../../src/assets/WhereThe_crawdads.jpeg';
import sapiens from '../../src/assets/sapiens.jpeg';
import dune from '../../src/assets/Dune.jpeg';
import ikigai from '../../src/assets/ikigai.jpeg';
import too_good_tobe_true from '../../src/assets/tooGood_to_betrue.jpeg';
import midnight_library from '../../src/assets/Midnight_library.jpeg';
import hobbit from '../../src/assets/hobbit.jpeg';
import da_vinci_code from '../../src/assets/da_vinci.jpeg';
import becoming from '../../src/assets/becoming.jpeg';
import n1984 from '../../src/assets/n1984.jpeg';
import brave_new_world from '../../src/assets/brave_World.jpeg';
import kite_runner from '../../src/assets/kite_runner.jpeg';
import fault_in_our_stars from '../../src/assets/fault_instars.jpeg';
import gone_girl from '../../src/assets/gone_girl.jpeg';
import the_road from '../../src/assets/road.jpeg';
import harmony from '../../src/assets/harmony.jpeg';
import murder_at_bookstore from '../../src/assets/murder_atbookstore.jpeg';
import project_hail_mary from '../../src/assets/project_hail_mary.jpeg';
import the_song_of_achilles from '../../src/assets/song_of_achille.jpeg';
import the_midnight_library from '../../src/assets/Midnight_library.jpeg';
import the_silent_patient from '../../src/assets/silent_patient.jpeg';
import the_vanishing_half from '../../src/assets/vanishing_half.jpeg';
import hungry_caterpillar from '../../src/assets/hungry_caterpillar.jpeg';
import where_wild_things from '../../src/assets/where_wild_things.jpeg';
import goodnight_moon from '../../src/assets/goodnight_moon.jpeg';
import bhagavad_gita from '../../src/assets/bhagavad_gita.jpeg';
import autobiography_yogi from '../../src/assets/autobiography_yogi.jpeg';
import upanishads from '../../src/assets/upanishads.jpeg';

// Banner Images
import banner_atomics from '../../src/assets/banner_Atomics.webp';
import banner_autobiography_yogi from '../../src/assets/banner_autobiography_yogi.webp';
import banner_becoming from '../../src/assets/banner_becoming.avif';
import banner_bhagavad_gita from '../../src/assets/banner_bhagavad_gita.jpg';
import banner_brave_new_world from '../../src/assets/banner_brave_new_world.jpg';
import banner_da_vinci_code from '../../src/assets/banner_da_vinci_code.jpeg';
import banner_dune from '../../src/assets/banner_dune.jpg';
import banner_fault_in_our_stars from '../../src/assets/banner_fault_in_our_stars.jpg';
import banner_gone_girl from '../../src/assets/banner_gone_girl.webp';
import banner_goodnight_moon from '../../src/assets/banner_goodnight_moon.jpg';
import banner_harmony from '../../src/assets/banner_harmony.jpeg';
import banner_hungry_caterpillar from '../../src/assets/banner_hungry_caterpillar.jpg';
import banner_ikigai from '../../src/assets/banner_ikigai.jpg';
import banner_itends from '../../src/assets/banner_itends.jpg';
import banner_kite_runner from '../../src/assets/banner_kite_runner.jpg';
import banner_midnight_library from '../../src/assets/banner_midnight_library.png';
import banner_murder_at_bookstore from '../../src/assets/banner_murder_at_bookstore.jpg';
import banner_n1984 from '../../src/assets/banner_n1984.jpg';
import banner_project_hail_mary from '../../src/assets/banner_project_hail_mary.jpg';
import banner_punching_air from '../../src/assets/banner_punching_air.jpg';
import banner_sapiens from '../../src/assets/banner_sapiens.jpg';
import banner_the_lords from '../../src/assets/banner_the_lords.webp';
import banner_the_road from '../../src/assets/banner_the_road.jpg';
import banner_the_silent_patient from '../../src/assets/banner_the_silent_patient.png';
import banner_the_song_of_achilles from '../../src/assets/banner_the_song_of_achilles.jpg';
import banner_the_vanishing_half from '../../src/assets/banner_the_vanishing_half.webp';
import banner_too_good_tobe_true from '../../src/assets/banner_too_good_tobe_true.jpg';
import banner_upanishads from '../../src/assets/banner_upanishads.jpeg';
import banner_where_the_crawdads from '../../src/assets/banner_wehere_The_crawdadd.webp';
import banner_where_wild_things from '../../src/assets/banner_where_wild_things.avif';
import banner_harry_potter from '../../src/assets/banner_harry_potter.jpeg';
import banner_the_hobbit from '../../src/assets/banner_the_hobbit.webp';

export const library_database = [
        {
            book_id: 100070,
            book_name: 'Bhagavad Gita',
            isbn: '978-0140449181',
            number_of_pages: 700,
            description: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. It is considered one of the holy scriptures of Hinduism. The Gita is set in a narrative framework of a dialogue between Pandava prince Arjuna and his guide and charioteer Krishna. At the start of the Dharma Yudhha (righteous war) between Pandavas and Kauravas, Arjuna is filled with moral dilemma and despair about the violence and death the war will cause. The Gita presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic ideals of moksha. The text covers jnana, bhakti, karma, and raja yogas, while incorporating ideas from the Samkhya-Yoga philosophy.',
            image: bhagavad_gita,
            banner_image: banner_bhagavad_gita,

            about: {
                author_name: ['Ved Vyasa'],
                author_note: 'Ved Vyasa is a revered sage in Hindu tradition, credited with composing the Mahabharata, the Puranas, and the Brahma Sutras. He is considered an incarnation of Lord Vishnu and is often called the "compiler" of the Vedas.',
                genre: ['Spiritual', 'Philosophy', 'Hinduism', 'Religion'],
                language: ['Sanskrit', 'English'],
                ratings: {
                    goodreads: 4.55,
                    amazon: 4.8
                },
                publish_details: {
                    publish_year: -400, // Approximate date
                    publisher: 'Various',
                    publication_date: 'Ancient Text',
                    publication_place: 'India'
                }
            },
            book_for_sell: {
                price: '299',
                in_stock: 35
            },
            borrow_details: {
                returned_yet: true,
                return_date: '25-08-2025',
                due_date: '20-08-2025',
                checkout_date: '20-07-2025'
            }
        },
        {
            book_id: 100042,
            book_name: 'The Very Hungry Caterpillar',
            isbn: '978-0399226908',
            number_of_pages: 28,
            description: 'The Very Hungry Caterpillar is a children\'s picture book designed, illustrated, and written by Eric Carle, first published in 1969. The book features a caterpillar who eats his way through a wide variety of foodstuffs before pupating and emerging as a butterfly. The book incorporates elements that help with learning the days of the week, counting, and the life cycle of a butterfly. With its distinctive collage illustrations and simple, repetitive text, it has become one of the most beloved children\'s books of all time, selling over 50 million copies worldwide and being translated into more than 60 languages.',
            image: hungry_caterpillar,
            banner_image: banner_hungry_caterpillar,
            about: {
                author_name: ['Eric Carle'],
                author_note: 'Eric Carle was a German-American designer, illustrator, and writer of children\'s books. He is most famous for The Very Hungry Caterpillar, which has been translated into more than 66 languages and sold more than 50 million copies.',
                genre: ['Children\'s Literature', 'Picture Book', 'Education'],
                language: ['English'],
                ratings: {
                    goodreads: 4.32,
                    amazon: 2.1
                },
                publish_details: {
                    publish_year: 1969,
                    publisher: 'World Publishing Company',
                    publication_date: '03-06-1969',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '399',
                in_stock: 25
            },
            borrow_details: {
                returned_yet: true,
                return_date: '20-08-2025',
                due_date: '15-08-2025',
                checkout_date: '15-07-2025'
            }
        },
        {
            book_id: 100071,
            book_name: 'Autobiography of a Yogi',
            isbn: '978-1565892125',
            number_of_pages: 498,
            description: 'Autobiography of a Yogi is an autobiography of Paramahansa Yogananda, first published in 1946. The book describes Yogananda\'s spiritual journey, including his encounters with spiritual figures such as Therese Neumann, the Hindu saint Sri Yukteswar Giri, and Mahatma Gandhi. It has been in print for over seventy years and has been translated into more than fifty languages. The book is widely regarded as a spiritual classic and has been highly influential in introducing millions of Westerners to the teachings of meditation and yoga. The book discusses the science of yoga and meditation, the laws behind miracles, and the unity of all religions.',
            image: autobiography_yogi,
            banner_image: banner_autobiography_yogi,
            about: {
                author_name: ['Paramahansa Yogananda'],
                author_note: 'Paramahansa Yogananda was an Indian yogi and guru who introduced millions of Indians and Westerners to the teachings of meditation and Kriya Yoga through his organization, Self-Realization Fellowship.',
                genre: ['Spiritual', 'Autobiography', 'Yoga', 'Philosophy'],
                language: ['English'],
                ratings: {
                    goodreads: 4.22,
                    amazon: 2
                },
                publish_details: {
                    publish_year: 1946,
                    publisher: 'Self-Realization Fellowship',
                    publication_date: '01-01-1946',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '449',
                in_stock: 28
            },
            
            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '15-10-2025',
                checkout_date: '15-09-2025',
                borrower: {
                    name: 'Aarav Sharma',
                    email: 'aarav.sharma@example.com',
                    phone: '+91 98765 43210',
                    membership_id: 'M10045',
                    is_active: true,
                    member_since: '15-01-2023'
                }
            
        },
    },
        {
            book_id: 100061,
            book_name: 'Where the Wild Things Are',
            isbn: '978-0060254926',
            number_of_pages: 48,
            description: 'Where the Wild Things Are is a 1963 children\'s picture book by American writer and illustrator Maurice Sendak. The story follows Max, a young boy who is sent to bed without supper for misbehaving. In his room, he imagines sailing away to a land of Wild Things, where he becomes their king. The book explores themes of childhood anger, imagination, and the comfort of home. Known for its distinctive illustrations and emotional depth, the book has become a classic of children\'s literature. It won the Caldecott Medal in 1964 and has sold over 20 million copies worldwide. The book was adapted into an animated short in 1973 and a feature film in 2009.',
            image: where_wild_things,
            banner_image: banner_where_wild_things,
            about: {
                author_name: ['Maurice Sendak'],
                author_note: 'Maurice Sendak was an American illustrator and writer of children\'s books. He became most widely known for his book Where the Wild Things Are, first published in 1963. Sendak was awarded the Hans Christian Andersen Medal in 1970 for his contribution to children\'s literature.',
                genre: ['Children\'s Literature', 'Picture Book', 'Fantasy'],
                language: ['English'],
                ratings: {
                    goodreads: 4.24,
                    amazon: 3.1
                },
                publish_details: {
                    publish_year: 1963,
                    publisher: 'Harper & Row',
                    publication_date: '13-11-1963',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '449',
                in_stock: 18
            },
            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '05-10-2025',
                checkout_date: '05-09-2025',
                borrower: {
                    name: 'Priya Patel',
                    email: 'priya.patel@example.com',
                    phone: '+91 98765 12345',
                    membership_id: 'M10046',
                    is_active: true,
                    member_since: '20-02-2023'
                }
        }},
        {
            book_id: 100062,
            book_name: 'Goodnight Moon',
            isbn: '978-0060775858',
            number_of_pages: 32,
            description: 'Goodnight Moon is an American children\'s book written by Margaret Wise Brown and illustrated by Clement Hurd. It was published in 1947 and is a highly acclaimed example of a bedtime story. The book follows a young bunny who says goodnight to various objects in his bedroom as he falls asleep. The rhythmic, gently lulling text and the quiet, charming illustrations have made it a favorite among young children and their parents for generations. Despite its initial slow sales, the book has become one of the most beloved and iconic picture books in children\'s literature, selling over 48 million copies worldwide. The book is considered a classic of children\'s literature and has been translated into multiple languages.',
            image: goodnight_moon,
            banner_image: banner_goodnight_moon,
            about: {
                author_name: ['Margaret Wise Brown'],
                author_note: 'Margaret Wise Brown was an American writer of children\'s books, including Goodnight Moon and The Runaway Bunny, both illustrated by Clement Hurd. She has been called "the laureate of the nursery" for her achievements.',
                genre: ['Children\'s Literature', 'Picture Book', 'Bedtime Story'],
                language: ['English'],
                ratings: {
                    goodreads: 4.27,
                    amazon: 4.9
                },
                publish_details: {
                    publish_year: 1947,
                    publisher: 'Harper & Brothers',
                    publication_date: '03-09-1947',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '379',
                in_stock: 22
            },
            borrow_details: {
                returned_yet: true,
                return_date: '18-08-2025',
                due_date: '10-08-2025',
                checkout_date: '10-07-2025',

                borrower : null,
            }
        },
        {
            book_id: 100072,
            book_name: 'The Upanishads',
            isbn: '978-0140441635',
            number_of_pages: 1224,
            description: `The Upanishads are ancient Sanskrit texts that contain some of the central philosophical concepts of Hinduism, some of which are shared with Buddhism, Jainism, and Sikhism. They are the most recent part of the oldest scriptures of Hinduism, the Vedas, that deal with meditation, philosophy, and spiritual knowledge. The Upanishads are commonly referred to as Vedānta, variously interpreted to mean either the "last chapters, parts of the Veda" or "the object, the highest purpose of the Veda". The concepts of Brahman (ultimate reality) and Ātman (soul, self) are central ideas in all the Upanishads.`,
            image: upanishads,
            banner_image: banner_upanishads,
            about: {
                author_name: ['Various Sages'],
                author_note: 'The Upanishads are a collection of ancient Indian philosophical texts that form the theoretical basis for Hinduism. They were composed by various sages and philosophers between 800 BCE and 500 BCE, representing the culmination of Vedic thought.',
                genre: ['Spiritual', 'Philosophy', 'Hinduism', 'Religion'],
                language: ['Sanskrit', 'English'],
                ratings: {
                    goodreads: 4.45,
                    amazon: 1.8
                },
                publish_details: {
                    publish_year: -800, // Approximate date
                    publisher: 'Various',
                    publication_date: 'Ancient Text',
                    publication_place: 'India'
                }
            },
            book_for_sell: {
                price: '399',
                in_stock: 20
            },
            borrow_details: {
                returned_yet: true,
                return_date: '28-08-2025',
                due_date: '25-08-2025',
                checkout_date: '25-07-2025',

                borrower:null
            }
        },
        {
            book_id: 100050,
            book_name: 'Project Hail Mary',
            isbn: '978-0593135204',
            number_of_pages: 496,
            description: 'Project Hail Mary is a 2021 science fiction novel by American novelist Andy Weir. It follows Ryland Grace, a middle school science teacher who wakes up from a coma with amnesia aboard a spaceship called the Hail Mary. As he regains his memories, he realizes he is on a mission to save Earth from an extinction-level event caused by a microscopic alien organism that is dimming the Sun. The novel explores themes of friendship, sacrifice, and scientific problem-solving as Grace works with an unexpected alien ally to find a solution. The book was praised for its scientific accuracy, humor, and emotional depth, becoming a New York Times bestseller and winning the 2022 Goodreads Choice Award for Best Science Fiction.',
            image: project_hail_mary,
            banner_image: banner_project_hail_mary,
            about: {
                author_name: ['Andy Weir'],
                author_note: 'Andy Weir is an American novelist whose debut novel, The Martian, was later adapted into a successful film. He worked as a software engineer before becoming a full-time writer. His works are known for their scientific accuracy and attention to technical detail.',
                genre: ['Science Fiction', 'Adventure', 'Space'],
                language: ['English'],
                ratings: {
                    goodreads: 4.52,
                    amazon: 4.7
                },
                publish_details: {
                    publish_year: 2021,
                    publisher: 'Ballantine Books',
                    publication_date: '04-05-2021',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '599',
                in_stock: 15
            },
            borrow_details: {
                returned_yet: true,
                return_date: '15-08-2025',
                due_date: '10-08-2025',
                checkout_date: '10-07-2025',

                borrower: null
            }
        },
        {
            book_id: 100051,
            book_name: 'The Song of Achilles',
            isbn: '978-0062060624',
            number_of_pages: 378,
            description: 'The Song of Achilles is a 2011 novel by American writer Madeline Miller. A retelling of Homer\'s Iliad as told from the perspective of Patroclus, the novel explores the relationship between Patroclus and Achilles from their childhood friendship to their experiences during the Trojan War. The story is a beautiful and tragic love story that brings new life to the ancient Greek myth, focusing on themes of love, honor, and destiny. The novel won the 2012 Orange Prize for Fiction (now the Women\'s Prize for Fiction) and was a New York Times bestseller. Miller\'s lyrical prose and deep emotional insight have made this a beloved novel among readers of historical fiction and mythology retellings.',
            image: the_song_of_achilles,
            banner_image: banner_the_song_of_achilles,
            about: {
                author_name: ['Madeline Miller'],
                author_note: 'Madeline Miller is an American novelist, author of The Song of Achilles and Circe. Miller has a BA and MA from Brown University in Classics, and has been teaching and tutoring Latin, Greek, and Shakespeare to high school students for over fifteen years.',
                genre: ['Historical Fiction', 'Mythology', 'LGBTQ+'],
                language: ['English'],
                ratings: {
                    goodreads: 4.35,
                    amazon: 4.7
                },
                publish_details: {
                    publish_year: 2011,
                    publisher: 'Ecco Press',
                    publication_date: '06-09-2011',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '499',
                in_stock: 8
            },
            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '30-09-2025',
                checkout_date: '15-08-2025',
                borrower: {
                    name: 'Rahul Verma',
                    email: 'rahul.verma@example.com',
                    phone: '+91 98765 98765',
                    membership_id: 'M10047',
                    is_active: true,
                    member_since: '10-03-2023'
                }
        }},
        {
            book_id: 100052,
            book_name: 'The Midnight Library',
            isbn: '978-0525559474',
            number_of_pages: 304,
            slug: 'the-midnight-library',
            description: 'The Midnight Library is a fantasy novel by Matt Haig, published in 2020. The story follows Nora Seed, a woman who finds herself in a library between life and death, where each book represents a different version of what her life could have been if she had made different choices. As Nora explores these alternate realities, she must confront her regrets and decide what makes life worth living. The novel explores themes of depression, regret, and the infinite possibilities of life. It has been praised for its imaginative premise, emotional depth, and hopeful message about the power of choice. The book became a #1 Sunday Times bestseller and was selected as a Goodreads Choice Award winner for Best Fiction in 2020.',
            image: the_midnight_library,
            banner_image: banner_midnight_library,
            book_for_sell: {
                price: '549 Rs.',
                in_stock: 7
            },
            borrow_details: {
                returned_yet: true,
                return_date: '28-7-2025',
                due_date: '30-7-2025',
                checkout_date: '1-7-2025',
                borrower: null
            },
            about: {
                author_name: ['Matt Haig'],
                author_note: 'Matt Haig is an English author and journalist. His work includes several memoirs and novels, often dealing with mental health. His writing has been translated into over 40 languages, and he has won the Blue Peter Book Award and the Smarties Book Prize.',
                genre: ['Fiction', 'Fantasy', 'Contemporary'],
                language: ['English'],
                ratings: {
                    goodreads: 4.10,
                    amazon: 0.3,
                    flipkart: 4.2
                },
                publish_details: {
                    publish_year: 2020,
                    publisher: 'Canongate Books',
                    publication_date: '13-08-2020',
                    publication_place: 'United Kingdom'
                }
            },
            book_for_sell: {
                price: '549',
                in_stock: 12
            },
            borrow_details: {
                returned_yet: true,
                return_date: '20-08-2025',
                due_date: '15-08-2025',
                checkout_date: '15-07-2025',

                borrower : null
            }
        },
        {
            book_id: 100053,
            book_name: 'The Silent Patient',
            isbn: '978-1250301697',
            number_of_pages: 352,
            description: 'The Silent Patient is a 2019 psychological thriller novel written by British-Cypriot author Alex Michaelides. The novel follows Alicia Berenson, a famous painter who shoots her husband five times in the face and then never speaks another word. Theo Faber, a criminal psychotherapist, becomes obsessed with uncovering her motive and getting her to talk. The book is filled with shocking twists and turns, exploring themes of trauma, silence, and the nature of truth. It became a global phenomenon, spending over a year on The New York Times bestseller list and winning the Goodreads Choice Award for Best Mystery & Thriller in 2019. The novel has been praised for its masterful plotting and unforgettable ending.',
            image: the_silent_patient,
            banner_image: banner_the_silent_patient,
            about: {
                author_name: ['Alex Michaelides'],
                author_note: 'Alex Michaelides is a British-Cypriot author and screenwriter. His debut novel, The Silent Patient, was a Sunday Times and New York Times bestseller and has sold more than a million copies in the UK. He studied English literature at Cambridge University and has an MA in screenwriting from the American Film Institute in Los Angeles.',
                genre: ['Thriller', 'Mystery', 'Psychological Fiction'],
                language: ['English'],
                ratings: {
                    goodreads: 4.18,
                    amazon: 4.4
                },
                publish_details: {
                    publish_year: 2019,
                    publisher: 'Celadon Books',
                    publication_date: '05-02-2019',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '449',
                in_stock: 10
            },
            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '25-09-2025',
                checkout_date: '25-08-2025',
                borrower: {
                    name: 'Ananya Gupta',
                    email: 'ananya.gupta@example.com',
                    phone: '+91 98765 56789',
                    membership_id: 'M10048',
                    is_active: true,
                    member_since: '05-04-2023'
                }
         } },
        {
            book_id: 100054,
            book_name: 'The Vanishing Half',
            isbn: '978-0525536291',
            number_of_pages: 352,
            description: 'The Vanishing Half is a 2020 historical fiction novel by Brit Bennett. It tells the story of twin sisters, Desiree and Stella Vignes, who grow up in a small, southern Black community in the 1950s. At age 16, they run away together, but their lives take dramatically different paths when one decides to pass as white while the other returns to their hometown with her Black daughter. The novel explores themes of racial identity, family, and the lasting influence of the past on present lives. It was a New York Times bestseller, a Goodreads Choice Award winner for Historical Fiction, and was longlisted for the National Book Award. The book has been praised for its nuanced exploration of race and identity in America.',
            image: the_vanishing_half,
            banner_image: banner_the_vanishing_half,
            about: {
                author_name: ['Brit Bennett'],
                author_note: 'Brit Bennett is an American writer. Her debut novel The Mothers was a New York Times bestseller, and her second novel The Vanishing Half was an instant #1 New York Times bestseller. She is a National Book Foundation \"5 Under 35\" honoree and in 2021, she was chosen as one of Time\'s Next 100 Influential People.',
                genre: ['Historical Fiction', 'Literary Fiction', 'Family Saga'],
                language: ['English'],
                ratings: {
                    goodreads: 4.15,
                    amazon: 2.5
                },
                publish_details: {
                    publish_year: 2020,
                    publisher: 'Riverhead Books',
                    publication_date: '02-06-2020',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '499',
                in_stock: 9
            },
            borrow_details: {
                returned_yet: true,
                return_date: '10-08-2025',
                due_date: '05-08-2025',
                checkout_date: '05-07-2025'
            }
        },
        {
            book_id: 100045,
            book_name: 'Atomic Habits',
            isbn: '978-0735211292',
            number_of_pages: 320,
            slug: 'atomic-habits',
            description: 'Atomic Habits: An Easy & proven Way to Build Good Habits & Break Bad Ones is a 2018 self-help book by James Clear, a researcher of habit formation. The book received acclaim from most critics, with a few strongly disapproving of its claims. It became highly popular among readers in the years following its publication; as of February 2024, it has sold nearly 20 million copies, and had topped the New York Times best-seller list for 164 weeks.',
            image: atomics,
            banner_image: banner_atomics,
            about: {
                author_name: ['James Clear'],
                author_note: 'James Clear is an American author, entrepreneur, and photographer known for his work on habit formation, decision making, and continuous improvement. His book Atomic Habits has sold over 10 million copies worldwide and has been translated into 50+ languages.',
                genre: ['Self-Help', 'Personal Development', 'Psychology', 'Nonfiction'],
                language: ['English'],
                ratings: {
                    goodreads: 4.36,
                    amazon: 4.8
                },
                publish_details: {
                    publish_year: 2018,
                    publisher: 'Avery',
                    publication_date: '2018-10-16',
                    publication_place: 'United States'
                }
            },
            book_for_sell: {
                price: '699 Rs.',
                in_stock: 7
            },
            borrow_details: {

                returned_yet : false,
                return_date : null ,
                due_date : '1-5-2024',
                checkout_date : '1-4-2024',

                borrower : {
                    borrower_id:124453,
                    borrower_name : 'Jane Rhode',
                    is_active : true,
                    member_since : '10-2-2020',
                },
            },
        },
    
        {
            book_id: 100060,
            book_name: 'Punching the Air',
            isbn: '978-0062996480',
            number_of_pages: 400,
            slug: 'punching-the-air',
            description: 'Punching the Air is a young adult novel-in-verse by Ibi Zoboi and Yusef Salaam, published in 2020. The story follows Amal Shahid, a Black teenage boy who is wrongfully convicted of a crime he didn\'t commit. A gifted artist and poet, Amal finds himself in a juvenile detention center, where he must learn to survive while maintaining his sense of self and hope. The novel explores themes of racial injustice, the school-to-prison pipeline, and the power of art and poetry as forms of resistance and self-expression. Drawing from Yusef Salaam\'s own experience as one of the Exonerated Five, the book provides a powerful and timely examination of the criminal justice system and its impact on young Black men.',
            image: punching_air,
            banner_image: banner_punching_air, // Add appropriate image import if available
            
            book_for_sell: {
                price: '499 Rs.',
                in_stock: 5
            },

            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '12-8-2024',
                checkout_date: '12-4-2024',
                borrower: {
                    borrower_id: 378453,
                    borrower_name: 'Will Mikelson',
                    is_active: true,
                    member_since: '20-9-2019'
                }
            },
            
            about: {
                author_name: ['Yusef Salaam', 'Ibi Zoboi'],
                author_note: 'Yusef Salaam is one of the Exonerated Five, who were wrongfully convicted in the Central Park jogger case in 1989. He is now a motivational speaker and activist. Ibi Zoboi is a New York Times bestselling author of American Street, Pride, and other works of fiction. Together, they co-authored Punching the Air, a powerful novel in verse about a young artist and poet who is wrongfully incarcerated.',
                genre: ['Young Adult Fiction', 'Novel in Verse', 'Social Issues'],
                language: ['English', 'Hindi'],
                ratings: {
                    amazon: 2.8,
                    goodreads: 4.6,
                    flipkart: 4.5
                },
                publish_details: {
                    publish_year: 2020,
                    publisher: 'Balzer + Bray',
                    publication_date: '2020-09-01',
                    publication_place: 'United States'
                }
            },

            borrow_details: {
                returned_yet: false,
                return_date: null,
                due_date: '12-8-2024',
                checkout_date: '12-4-2024',
                borrower: {
                    borrower_id: 378453,
                    borrower_name: 'Will Mikelson',
                    is_active: true,
                    member_since: '20-9-2019'
                }
            },

            book_for_sell: {
                price: '499 Rs.',
                in_stock: 5
            },

        }, 
    

     {
        book_id: 122895,
        book_name: 'It Ends With Us',
        isbn: '978-1501110368',
        number_of_pages: 384,
        description: 'It Ends With Us is a powerful contemporary romance novel by Colleen Hoover that explores the complexities of love, strength, and survival. The story follows Lily Bloom, a young woman who starts her own business and falls for a handsome neurosurgeon named Ryle Kincaid. The novel tackles difficult themes of domestic violence and the cycle of abuse, inspired by the author\'s own experiences with domestic abuse. With its emotional depth and raw honesty, the book has resonated with millions of readers worldwide, becoming a #1 New York Times bestseller and sparking important conversations about relationships and personal boundaries.',
        image: itEnds,
        banner_image: banner_itends,
        about: {
            author_name: ['Colleen Hoover'],
            author_note: 'Colleen Hoover is the #1 New York Times bestselling author of several novels, including It Ends with Us and Verity. She has won the Goodreads Choice Award for Best Romance three years in a row. Hoover published her first novel, Slammed, in 2012.',
            genre: ['Contemporary', 'Romance', 'Fiction', 'New Adult'],
            language: ['English'],
            ratings: {
                goodreads: 4.38,
                amazon: 4.7
            },
            publish_details: {
                publish_year: 2016,
                publisher: 'Atria Books',
                publication_date: '2016-08-02',
                publication_place: 'United States'
            }
        },
        book_for_sell: {
            price: '499 Rs.',
            in_stock: 8
        },
        borrow_details: {
            returned_yet : true,
            return_date : '1-1-2024' ,
            due_date : '12-1-2024',
            checkout_date : '28-8-2023',

            borrower: null ,

            
        },

        

    },
    


    {
        book_id: 100000,
        book_name: "Harry Potter and the Philosopher's Stone",
        isbn: '978-0747532743',
        number_of_pages: 332,
        slug: 'harry-potter-philosophers-stone',
        description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he thwarts an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
        image: harry_potter,
        banner_image: banner_harry_potter,
        about: {
            author_name: ['J.K. Rowling'],
            author_note: 'J.K. Rowling is a British author and philanthropist best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. She was named a Companion of Honour by Queen Elizabeth II in 2017.',
            genre: ['Fantasy', 'Adventure', 'Young Adult', 'Fiction'],
            language: ['English', 'Spanish', 'French'],
            ratings: {
                goodreads: 4.47,
                amazon: 3.8
            },
            publish_details: {
                publish_year: 1997,
                publisher: 'Bloomsbury',
                publication_date: '26-06-1997',
                publication_place: 'United Kingdom'
            }
        },
        book_for_sell: {
            price: '599 Rs.',
            in_stock: 12
        },
        borrow_details: {
            returned_yet: true,
            return_date: null,
            due_date: null,
            checkout_date: null,
            borrower: null
        }
    },

    {
        book_id: 100001,
        book_name: 'The Lord of the Rings',
        isbn: '978-0544003415',
        number_of_pages: 1216,
        description: 'The Lord of the Rings is an epic high-fantasy novel by J.R.R. Tolkien, set in the fictional world of Middle-earth. The story follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron to conquer and rule all of Middle-earth. The novel features a large ensemble cast, including hobbits, elves, dwarves, wizards, and men, who must unite against the growing darkness. Known for its richly detailed world-building, complex characters, and profound themes of power, corruption, and redemption, The Lord of the Rings has had a lasting impact on the fantasy genre and remains one of the best-selling novels ever written, with over 150 million copies sold worldwide.',
        image: lord_of_the_rings,
        banner_image: banner_the_lords,
        about: {
            author_name: ['J.R.R. Tolkien'],
            author_note: 'J.R.R. Tolkien was an English writer, poet, and academic, best known for his high fantasy works The Hobbit and The Lord of the Rings. A professor at Oxford University, he was a close friend of C.S. Lewis and was appointed a Commander of the Order of the British Empire by Queen Elizabeth II in 1972.',
            genre: ['Fantasy', 'Classics', 'Fiction', 'Adventure', 'Science Fiction Fantasy'],
            language: ['English'],
            ratings: {
                goodreads: 4.52,
                amazon: 4.8
            },
            publish_details: {
                publish_year: 1954,
                publisher: 'George Allen & Unwin',
                publication_date: '1954-07-29',
                publication_place: 'United Kingdom'
            }
        },
            book_for_sell: {
                price: '799 Rs.',
                in_stock: 9
            },
        
        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '18-8-2025',
            checkout_date: '28-7-2025',
            borrower: {
                name: 'Vikram Singh',
                email: 'vikram.singh@example.com',
                phone: '+91 98765 43210',
                membership_id: 'M10049',
                is_active: true,
                member_since: '10-01-2023'

            
        },
        
    }},
    

    {
        book_id: 100223,
        book_name: 'Where the Crawdads Sing',
        isbn: '978-0735219090',
        number_of_pages: 384,
        description: 'Where the Crawdads Sing is a 2018 novel by American author Delia Owens that has topped The New York Times Fiction Best Sellers of 2019 and 2020. The story follows two timelines that slowly intertwine. The first timeline describes the life and adventures of a young girl named Kya as she grows up isolated in the marshes of North Carolina. The second timeline follows an investigation into the apparent murder of Chase Andrews, a local celebrity of Barkley Cove, a fictional coastal town in North Carolina. The novel explores themes of survival, resilience, love, and the healing power of nature. It has been praised for its beautiful prose, vivid descriptions of the natural world, and compelling mystery at its core.',
        image : where_the_crawdad_sings,
        banner_image: banner_where_the_crawdads,

            book_for_sell: {
                price: '599 Rs.',
                in_stock: 6
            },
        
        borrow_details : {
            returned_yet: true,
            return_date: '20-7-2025',
            due_date: '25-7-2025',
            checkout_date: '10-7-2025',
            
             borrower: null
            
        },

        about: {
            author_name: ['Delia Owens'],
            author_note: 'Delia Owens is an American author and zoologist. Her debut novel Where the Crawdads Sing topped The New York Times Fiction Best Sellers of 2019 and 2020. Before becoming a full-time writer, she studied animals in Africa and earned a Ph.D. in Animal Behavior from the University of California, Davis.',
            genre: ['Fiction', 'Mystery'],
            language: ['English'],
            ratings: {
                goodreads: 4.46,
                amazon: 1.8
            },
            
            publish_details: {
                publish_year: 2018,
                publisher: "G.P. Putnam's Sons",
                publication_date: '14-8-2018',
                publication_place: 'United States'
            }
        },
        
    },


    {
        book_id: 100003,
        book_name: 'Sapiens: A Brief History of Humankind',
        isbn: '978-0062316097',
        number_of_pages: 416,
        slug: 'sapiens-a-brief-history-of-humankind',
        description: 'Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari that explores the history of Homo sapiens from the evolution of archaic human species in the Stone Age up to the twenty-first century. The book integrates history and science to challenge conventional narratives about human progress, examining how biology and history have defined us and enhanced our understanding of what it means to be human. Harari argues that the ability of Homo sapiens to create and believe in shared myths—such as money, nations, and human rights—has been key to our species\' success. The book has been widely praised for its thought-provoking insights and has sold over 23 million copies worldwide, translated into 65 languages.',
        image: sapiens,
        banner_image: banner_sapiens,
        about: {
            author_name: ['Yuval Noah Harari'],
            author_note: 'Yuval Noah Harari is an Israeli historian and professor in the Department of History at the Hebrew University of Jerusalem. He is the author of the popular science bestsellers Sapiens: A Brief History of Humankind, Homo Deus: A Brief History of Tomorrow, and 21 Lessons for the 21st Century.',
            genre: ['Nonfiction', 'History', 'Science', 'Philosophy', 'Anthropology'],
            language: ['English', 'Hebrew'],
            ratings: {
                goodreads: 4.37,
                amazon: 4.6
            },
            publish_details: {
                publish_year: 2011,
                publisher: 'Harper',
                publication_date: '2015-02-10',
                publication_place: 'Israel'
            }
        },
            book_for_sell: {
                price: '699 Rs.',
                in_stock: 8
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '5-7-2025',
            checkout_date: '20-6-2025',
            borrower: {
                name: 'Neha Reddy',
                email: 'neha.reddy@example.com',
                phone: '+91 98765 12345',
                membership_id: 'M10050',
                is_active: true,
                member_since: '20-02-2023'

        },
    
    }},
    {
        book_id: 100445,
        book_name: 'Dune',
        isbn: '978-0441172719',
        slug:'dune',
        number_of_pages: 416,
        description: 'Dune is a 1965 science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. Set in the distant future amidst a feudal interstellar society in which noble houses, in control of individual planets, owe allegiance to the Padishah Emperor, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis, the only source of the most valuable substance in the universe, "the spice" melange. The story explores the complex and multi-layered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice. Dune is one of the world\'s best-selling science fiction novels and has inspired a media franchise that includes films, television series, and games.',
        image : dune,
        banner_image: banner_dune,
            book_for_sell: {
                price: '599 Rs.',
                in_stock: 7
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '1-9-2025',
            checkout_date: '1-8-2025',
            borrower: {
                name: 'Arjun Mehta',
                email: 'arjun.mehta@example.com',
                phone: '+91 98765 67890',
                membership_id: 'M10051',
                is_active: true,
                member_since: '15-03-2023'

         } },
        
        about: {
            author_name: ['Frank Herbert'],
            author_note: 'Frank Herbert was an American science fiction author best known for the 1965 novel Dune and its five sequels. Dune is the best-selling science fiction novel of all time, and the series is considered a landmark of soft science fiction. Herbert worked as a journalist, photographer, and consultant ecologist before becoming a full-time writer.',
            genre: ['Science Fiction', 'Adventure'],
            language: ['English'],
            ratings: {
                goodreads: 4.25,
                amazon: 4.7
            },
            
            publish_details: {
                publish_year: 1965,
                publisher: 'Chilton Books',
                publication_date: '1-8-1965',
                publication_place: 'United States'
            }
        },
        
       
     },

    {
        book_id: 200145,
        book_name: 'Ikigai',
        isbn: '978-0143130727',
        number_of_pages: 224,
        description: 'Ikigai: The Japanese Secret to a Long and Happy Life is a book by Héctor García and Francesc Miralles that explores the Japanese concept of ikigai, which translates to "a reason for being." The book examines the lifestyle habits of the residents of Okinawa, Japan, who are known for their exceptional longevity. The authors identify ten rules that can help anyone find their own ikigai, including staying active, taking it slow, surrounding yourself with good friends, and living in the moment. The book combines scientific research with practical advice and inspirational stories, offering insights into how to live a more fulfilling and purposeful life. It has become an international bestseller, translated into multiple languages.',
        image: ikigai,
        banner_image: banner_ikigai,
        about: {
            author_name: ['Héctor García', 'Francesc Miralles'],
            author_note: 'Héctor García is a Spanish author and software engineer who has lived in Japan since 2004. Francesc Miralles is a Spanish author who has written numerous books about personal development. Together, they wrote Ikigai: The Japanese Secret to a Long and Happy Life, which has been translated into 63 languages.',
            genre: ['Nonfiction', 'Self Help', 'Personal Development', 'Philosophy', 'Psychology'],
            language: ['English', 'Spanish', 'Japanese'],
            ratings: {
                goodreads: 3.90,
                amazon: 2.5
            },
            publish_details: {
                publish_year: 2016,
                publisher: 'Penguin Books',
                publication_date: '2017-08-29',
                publication_place: 'Spain'
            }
        },
            book_for_sell: {
                price: '399 Rs.',
                in_stock: 5
            },

        borrow_details: {

            returned_yet : true,
            return_date : '26-5-2025',
            due_date : '26-5-2025',
            checkout_date : '1-1-2025',

            borrower : null ,


        },

    },

    {
        book_id: 321045,
        book_name: 'Too good to be true',
        slug: 'too-good-to-be-true',
        number_of_pages: 352,
        description: 'Too Good to Be True is a psychological thriller by Carola Lovering that weaves together the stories of three people whose lives become dangerously intertwined. The novel follows Skye Starling, a young woman who falls for the perfect man, Burke Michaels, only to discover he might be hiding a dark secret. Told through multiple perspectives and shifting timelines, the story explores themes of deception, love, and the dangerous consequences of secrets. With its clever plotting and unexpected twists, the book keeps readers guessing until the final pages. It has been praised for its sharp writing, complex characters, and exploration of how far people will go to protect the ones they love.',
        image : too_good_tobe_true,
        banner_image: banner_too_good_tobe_true,
            book_for_sell: {
                price: '449 Rs.',
                in_stock: 6
            },

        borrow_details: {
            returned_yet : true,
            return_date : '10-2-2025',
            due_date : '30-2-2025' ,
            checkout_date : '1-1-2025',

        borrower : null,


        },

        about: {
                author_name : ["Projakta koli"],
                author_note: 'Projakta Koli, also known as MostlySane, is a popular Indian YouTuber, actress, and author. She is one of India\'s most influential digital content creators, known for her comedic and relatable content. Projakta made her literary debut with "Too Good To Be True" and has been recognized for her authentic voice and storytelling that resonates with young adults.',
              
                genre: ['Fiction', 'Romance'],
                language:[ 'English', 'hindi', 'french'],
        
        ratings: {
            goodreads: 4.12,
            amazon: 4.5
        },
        
        publish_details: {
            publish_year: 2024,
            publisher: 'HarperCollins India',
            publication_date: '3-5-2024',
            publication_place: 'India'
        }
    },
    
  

    },
    {
        book_id: 456789,
        book_name: 'The Midnight Library',
        slug: 'the-midnight-library',
        number_of_pages: 304,
        description: 'The Midnight Library is a fantasy novel by Matt Haig, published in 2020. The story follows Nora Seed, a woman who finds herself in a library between life and death, where each book represents a different version of what her life could have been if she had made different choices. As Nora explores these alternate realities, she must confront her regrets and decide what makes life worth living. The novel explores themes of depression, regret, and the infinite possibilities of life. It has been praised for its imaginative premise, emotional depth, and hopeful message about the power of choice. The book became a #1 Sunday Times bestseller and was selected as a Goodreads Choice Award winner for Best Fiction in 2020.',
        returned_yet: true,
        return_date: '28-7-2025',
        due_date: '30-7-2025',
        checkout_date: '1-7-2025',
        image: midnight_library,
        banner_image: banner_midnight_library,
            book_for_sell: {
                price: '549 Rs.',
                in_stock: 7
            },

        borrow_details: {

            returned_yet: true,
            return_date: '28-7-2025',
            due_date: '30-7-2025',
            checkout_date: '1-7-2025',

             borrower: null,

        },

        about: {
            author_name: ['Matt Haig'],
            author_note: 'Matt Haig is an English author and journalist. His work includes several memoirs and novels, often dealing with mental health. His writing has been translated into over 40 languages, and he has won the Blue Peter Book Award and the Smarties Book Prize.',
            genre: ['Fantasy', 'Contemporary'],
            language: ['English'],
            ratings: {
                goodreads: 3.04,
                amazon: 1.6,
            },
            publish_details: {
                publish_year: 2020,
                publisher: 'Viking',
                publication_date: '13-8-2020',
                publication_place: 'United Kingdom',
            },
        },

    },
    {
        book_id: 789123,
        book_name: 'The Hobbit',
        slug: 'the-hobbit',
        isbn: '978-0547928227',
        number_of_pages: 310,
        description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J.R.R. Tolkien. It follows the quest of home-loving Bilbo Baggins, the titular hobbit, who is swept into an epic quest to reclaim the dwarf kingdom of Erebor from the fearsome dragon Smaug. Along the way, Bilbo encounters trolls, goblins, giant spiders, and a mysterious creature named Gollum, from whom he wins a magical ring that grants invisibility. The novel is set in Middle-earth and serves as a prelude to Tolkien\'s more complex work, The Lord of the Rings. First published in 1937, The Hobbit has been translated into over 100 languages and has never been out of print, becoming one of the best-selling books of all time with over 100 million copies sold worldwide.',
        image: hobbit,
        banner_image: banner_the_hobbit,
            book_for_sell: {
                price: '499 Rs.',
                in_stock: 6
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '15-9-2025',
            checkout_date: '1-8-2025',
            borrower: {
                name: 'Divya Iyer',
                email: 'divya.iyer@example.com',
                phone: '+91 98765 54321',
                membership_id: 'M10052',
                is_active: true,
                member_since: '01-03-2023'

                }        },

        about: {
            author_name: ['J.R.R. Tolkien'],
            author_note: 'J.R.R. Tolkien (1892-1973) was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings. He was Rawlinson and Bosworth Professor of Anglo-Saxon and a Fellow of Pembroke College at the University of Oxford. His works have been translated into more than 50 languages and have sold many millions of copies worldwide. Tolkien was appointed a Commander of the Order of the British Empire by Queen Elizabeth II in 1972.',
            genre: ['Fantasy', 'Adventure'],
            language:[ 'English'],

            ratings: {
                goodreads: 3.28,
                amazon: 2.8,
            },

            publish_details: {
                publish_year: 1937,
                publisher: 'George Allen & Unwin',
                publication_date: '21-9-1937',
                publication_place: 'United Kingdom',
            },
        },

      
    },
    {
        book_id: 112233,
        book_name: 'The Da Vinci Code',
        isbn: '978-0307474278',
        number_of_pages: 454,
        slug: 'the-da-vinci-code',
        description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris, when they become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus having been married to Mary Magdalene. The novel explores an alternative religious history, the central plot point of which is that the Merovingian kings of France were descended from the bloodline of Jesus Christ and Mary Magdalene, ideas derived from the non-fiction books The Holy Blood and the Holy Grail. The book has been both praised and criticized for its mixing of fact and fiction. It became a worldwide bestseller that sold 80 million copies as of 2009 and has been translated into 44 languages.',
        image: da_vinci_code,
        banner_image: banner_da_vinci_code,
        book_for_sell: {
            price: '599 Rs.',
            in_stock: 8
        },
        borrow_details: {
            returned_yet: true,
            return_date: '5-8-2025',
            due_date: '20-8-2025',
            checkout_date: '30-7-2025',
            borrower: null
        },
        about: {
            author_name: ['Dan Brown'],
            author_note: 'Dan Brown is an American author best known for his thriller novels, including the Robert Langdon series. His books have been translated into 56 languages and have sold over 200 million copies. Brown\'s novels are known for their historical themes, cryptography, and conspiracy theories. Before becoming a full-time writer, he was an English teacher and songwriter.',
            genre: ['Mystery', 'Thriller', 'Fiction'],
            language: ['English', 'Hindi'],
            ratings: {
                goodreads: 3.91,
                amazon: 2.3,
                flipkart: 3.9
            },
            publish_details: {
                publish_year: 2003,
                publisher: 'Doubleday',
                publication_date: '18-3-2003',
                publication_place: 'United States',
            },
        }},
    {
        book_id: 445566,
        book_name: 'Becoming',
        slug: 'becoming',
        isbn: '978-1524763138',
        number_of_pages: 448,
        description: 'Becoming is a memoir by former First Lady of the United States Michelle Obama, published in 2018. The book chronicles Obama\'s life from her childhood in Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the White House. It describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. The book is divided into three parts: "Becoming Me," "Becoming Us," and "Becoming More." It became one of the fastest-selling books in history, selling over 10 million copies in its first year of publication. The memoir has been praised for its honesty, warmth, and insight into the life of one of the most iconic women of the 21st century.',
        image: becoming,
        banner_image: banner_becoming,
            book_for_sell: {
                price: '699 Rs.',
                in_stock: 9
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '20-9-2025',
            checkout_date: '1-8-2025',
            borrower: {
                name: 'Rohan Kapoor',
                email: 'rohan.kapoor@example.com',
                phone: '+91 98765 09876',
                membership_id: 'M10053',
                is_active: true,
                member_since: '01-01-2023'

        }},

        about: {
            author_name: ['Michelle Obama'],
            author_note: 'Michelle LaVaughn Robinson Obama (born January 17, 1964) is an American attorney and author who served as the First Lady of the United States from 2009 to 2017. She is the first African-American woman to serve in this position. A graduate of Princeton University and Harvard Law School, she began her career as an attorney at the Chicago law firm Sidley Austin, where she met her future husband, Barack Obama. She later worked in the Chicago mayor\'s office, the University of Chicago, and the University of Chicago Medical Center. As First Lady, she became a role model for women and an advocate for poverty awareness, education, nutrition, physical activity, and healthy eating. Her memoir "Becoming" became one of the fastest-selling books in history upon its release in 2018, selling more than 10 million copies in its first year.',
            genre: ['Memoir', 'Autobiography'],
            language:[ 'English'],

            ratings: {
                goodreads: 4.53,
                amazon: 4.9
            },

            publish_details: {
                publish_year: 2018,
                publisher: 'Crown',
                publication_date: '13-11-2018',
                publication_place: 'United States',
            },
        },

      
    },
    {
        book_id: 778899,
        book_name: '1984',
        number_of_pages: 328,
        description: '1984 is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. It was published on 8 June 1949 as Orwell\'s ninth and final book completed in his lifetime. Thematically, it centers on the consequences of totalitarianism, mass surveillance, and repressive regimentation of people and behaviors within society. Orwell, a democratic socialist, modeled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated. The story follows Winston Smith, a low-ranking member of the ruling Party in London, who grows disillusioned with the Party\'s oppression and falls in love with Julia, a fellow dissenter. 1984 has become a classic literary example of political and dystopian fiction and has introduced many terms like Big Brother, thought police, and Newspeak into common usage.',
        image: n1984,
        banner_image: banner_n1984,
            book_for_sell: {
                price: '399 Rs.',
                in_stock: 5
            },

        borrow_details:{

            returned_yet: true,
        return_date: '1-7-2025',
        due_date: '1-7-2025',
        checkout_date: '1-6-2025',

        borrower: null,

        },

        about: {
            author_name: ['George Orwell'],
            author_note: 'George Orwell (1903-1950), born Eric Arthur Blair, was an English novelist, essayist, journalist, and critic. His work is characterized by lucid prose, biting social criticism, opposition to totalitarianism, and outspoken support of democratic socialism. Orwell wrote literary criticism, poetry, fiction, and polemical journalism. He is best known for the allegorical novella "Animal Farm" (1945) and the dystopian novel "1984" (1949). His non-fiction works, including "The Road to Wigan Pier" (1937), documenting his experience of working-class life in northern England, and "Homage to Catalonia" (1938), an account of his experiences in the Spanish Civil War, are as critically respected as his essays on politics, literature, language, and culture.',
            genre: ['Dystopian', 'Science Fiction'],
            language: ['English'],
            ratings: {
                goodreads: 4.19,
                amazon: 4.7,
                flipkart: 3.4
            },
            publish_details: {
                publish_year: 1949,
                publisher: 'Secker & Warburg',
                publication_date: '8-6-1949',
                publication_place: 'United Kingdom'
            }
        }
        },


    {
        book_id: 889900,
        book_name: 'Brave New World',
        isbn: '978-0060850524',
        number_of_pages: 288,
        description: 'Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a dystopian society that is challenged by only a single individual: the story\'s protagonist. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a dystopian society which is challenged by the protagonist. The novel has been frequently banned due to its controversial themes of sexuality, drugs, and violence.',
        image: brave_new_world,
        banner_image: banner_brave_new_world,
        slug: 'brave-new-world',
        about: {
            author_name: ['Aldous Huxley'],
            author_note: 'Aldous Huxley (1894-1963) was an English writer and philosopher who wrote nearly fifty books—both novels and non-fiction works—as well as wide-ranging essays, narratives, and poems. Born into the prominent Huxley family, he graduated from Balliol College, Oxford, with an undergraduate degree in English literature. Early in his career, he published short stories and poetry and edited the literary magazine Oxford Poetry, before going on to publish travel writing, satire, and screenplays. Huxley spent the later part of his life in the United States, living in Los Angeles from 1937 until his death. He was nominated for the Nobel Prize in Literature nine times and was elected Companion of Literature by the Royal Society of Literature in 1962. Huxley was a humanist, pacifist, and satirist, and he was latterly interested in spiritual subjects such as parapsychology and philosophical mysticism.',
            genre: ['Dystopian', 'Science Fiction'],
            language: ['English'],
            ratings: {
                goodreads: 3.99,
                amazon: 4.3
            },
            publish_details: {
                publish_year: 1932,
                publisher: 'Chatto & Windus',
                publication_date: '1-1-1932',
                publication_place: 'United Kingdom'
            }
        },
        book_for_sell: {
                price: '349 Rs.',
                in_stock: 4
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '10-9-2025',
            checkout_date: '20-5-2025',
            borrower: {
                name: 'Sneha Nair',
                email: 'sneha.nair@example.com',
                phone: '+91 98765 76543',
                membership_id: 'M10054',
                is_active: true,
                member_since: '01-06-2023'

        },

        about: {
            author_name: ['Aldous Huxley'],
            genre: ['Dystopian', 'Science Fiction'],
            language: ['English'],
            ratings: {
                goodreads: 3.99,
                amazon: 4.3
            },

            publish_details: {
                publish_year: 1932,
                publisher: 'Chatto & Windus',
                publication_date: '1-1-1932',
                publication_place: 'United Kingdom',
            },
        },

     } },
    {
        book_id: 990011,
        book_name: 'The Kite Runner',
        isbn: '978-1594631931',
        number_of_pages: 371,
        slug: 'the-kite-runner',
        description: 'The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan, his father\'s young Hazara servant. The story is set against a backdrop of tumultuous events, from the fall of Afghanistan\'s monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime. The novel explores themes of friendship, betrayal, guilt, redemption, and the complex relationship between fathers and sons. It became a bestseller after its release and has since been published in 70 countries with over 31.5 million copies sold worldwide in at least 60 languages.',
   
        image: kite_runner,
        banner_image: banner_kite_runner,
            book_for_sell: {
                price : '300 Rss.',
                in_stock: 5
            },

        borrow_details:{

            returned_yet: true,
            return_date: '15-8-2025',
            due_date: '20-8-2025',
            checkout_date: '10-7-2025',

        borrower: null,


        },
        about: {
            author_name: ['Khaled Hosseini'],
            author_note: 'Khaled Hosseini (born March 4, 1965) is an Afghan-American novelist, physician, and former Goodwill Ambassador for the United Nations High Commissioner for Refugees (UNHCR). Born in Kabul, Afghanistan, Hosseini moved to the United States in 1980, where he became a naturalized citizen in 1993. He earned his medical degree from the University of California, San Diego, School of Medicine. Hosseini gained worldwide recognition with his debut novel "The Kite Runner" (2003), which became an international bestseller and sold over 31 million copies globally. His subsequent novels, including "A Thousand Splendid Suns" and "And the Mountains Echoed," have also achieved significant critical and commercial success. Hosseini\'s works often explore themes of family, redemption, and the immigrant experience, drawing from his own background and the complex history of Afghanistan.',
            genre: ['Historical Fiction', 'Drama'],
            language: ['English'],
            ratings: {
                goodreads: 4.31,
                amazon: 4.7
            },
            publish_details: {
                publish_year: 2003,
                publisher: 'Riverhead Books',
                publication_date: '29-5-2003',
                publication_place: 'United States',
            },
        },

    },

    {
        book_id: 221144,
        book_name: 'The Fault in Our Stars',
        isbn: '978-0525478812',
        number_of_pages: 313,
        slug: 'the-fault-in-our-stars',
        description: 'The Fault in Our Stars is a novel by John Green, published in 2012. The story follows Hazel Grace Lancaster, a 16-year-old cancer patient who is forced by her parents to attend a support group where she meets and falls in love with 17-year-old Augustus Waters, a former basketball player and amputee. The novel explores the lives of teenagers living with cancer, focusing on their relationships, struggles, and philosophical outlook on life. Despite the heavy subject matter, the book is filled with humor, wit, and profound insights about love, mortality, and the human condition. It was a critical and commercial success, debuting at number one on The New York Times Best Seller list for children\'s chapter books and remaining there for seven weeks. The book was adapted into a successful film in 2014.',
        
        image: fault_in_our_stars,
        banner_image: banner_fault_in_our_stars,
            book_for_sell: {
                price: '499 Rs.',
                in_stock: 7
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '25-9-2025',
            checkout_date: '30-5-2025',
            borrower: {
                name: 'Aditya Joshi',
                email: 'aditya.joshi@example.com',
                phone: '+91 98765 21098',
                membership_id: 'M10055',
                is_active: true,
                member_since: '01-04-2023'
        }},

        about: {
            author_name: ['John Green'],
            author_note: 'John Michael Green (born August 24, 1977) is an American author, YouTuber, podcaster, and philanthropist. He is best known for his young adult fiction, including the award-winning novel "The Fault in Our Stars" (2012), which debuted at number one on The New York Times Best Seller list and was adapted into a successful 2014 film. Green co-created the popular YouTube channel VlogBrothers with his brother Hank Green, which has amassed millions of subscribers. He has won numerous awards for his writing, including the Printz Award for his debut novel "Looking for Alaska" (2005). Green is also known for his philanthropic work, particularly with the non-profit organization Partners in Health and Project for Awesome, an annual charity event he co-founded with his brother.',
            genre: ['Young Adult', 'Romance'],
            language: ['English'],
            ratings: {
                goodreads: 4.16,
                amazon: 4.7
            },
            publish_details: {
                publish_year: 2012,
                publisher: 'Dutton Books',
                publication_date: '10-1-2012',
                publication_place: 'United States',
            },
        },

        
     },
    {
        book_id: 332255,
        book_name: 'Gone Girl',
        isbn: '978-0307588364',
        number_of_pages: 415,
        slug: 'gone-girl',
        description: 'Gone Girl is a psychological thriller novel by American writer Gillian Flynn, published in 2012. The story follows Nick Dunne, who becomes the prime suspect in the sudden disappearance of his wife, Amy. The novel is famous for its unreliable narrators and shocking plot twists, particularly the mid-novel revelation that Amy has faked her own death to frame Nick for murder as revenge for his infidelity. Told in alternating chapters from both Nick and Amy\'s perspectives, the book explores themes of marriage, deception, and media manipulation. It was a critical and commercial success, spending eight weeks at number one on The New York Times Hardcover Fiction Bestseller List and being translated into over 40 languages. The novel was adapted into a 2014 film directed by David Fincher.',
    
        image: gone_girl,
        banner_image: banner_gone_girl,
            book_for_sell: {
                price: '549 Rs.',
                in_stock: 6
            },

        borrow_details:{

            returned_yet: true,
        return_date: '10-8-2025',
        due_date: '15-8-2025',
        checkout_date: '1-8-2025',

        borrower: null,

        },

        about: {
            author_name: ['Gillian Flynn'],
            author_note: 'Gillian Schieber Flynn (born February 24, 1971) is an American author, screenwriter, and former television critic for Entertainment Weekly. She is best known for her popular thriller novels, particularly the international bestseller "Gone Girl" (2012), which was adapted into a critically acclaimed 2014 film directed by David Fincher. Flynn began her writing career as a journalist, working for U.S. News & World Report and then Entertainment Weekly, where she worked for a decade. Her debut novel, "Sharp Objects" (2006), won two British Book Awards, and her second novel, "Dark Places" (2009), was made into a 2015 film. Known for her complex female characters and dark, twisty plots, Flynn has become one of the most prominent writers in the psychological thriller genre. She has also worked as a screenwriter on several projects, including the HBO limited series "Sharp Objects" (2018), for which she also served as showrunner.',
            genre: ['Thriller', 'Mystery'],
            language: ['English'],
            ratings: {
                goodreads: 4.13,
                amazon: 4.5
            },
            publish_details: {
                publish_year: 2012,
                publisher: 'Crown Publishing Group',
                publication_date: '5-6-2012',
                publication_place: 'United States',
            },
        },

    },

    {
        book_id: 554477,
        book_name: 'The Road',
        isbn: '978-0307387899',
        number_of_pages: 287,
        slug: 'the-road',
        description: 'The Road is a 2006 post-apocalyptic novel by American writer Cormac McCarthy. The book details the grueling journey of a father and his young son over a period of several months across a landscape blasted by an unspecified cataclysm that has destroyed industrial civilization and almost all life. The novel is set in a post-apocalyptic world where a father and son journey toward the sea in search of safety and a better life. Written in McCarthy\'s characteristically sparse prose, the novel explores themes of survival, the endurance of love, and the struggle to maintain morality in a lawless world. It won the 2007 Pulitzer Prize for Fiction and the James Tait Black Memorial Prize for Fiction, and was adapted into a 2009 film starring Viggo Mortensen and Kodi Smit-McPhee.',
       
        image: the_road,
        banner_image: banner_the_road,
            book_for_sell: {
                price: '449 Rs.',
                in_stock: 5
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '12-9-2025',
            checkout_date: '1-8-2025',
            borrower: {
                name: 'Meera Desai',
                email: 'meera.desai@example.com',
                phone: '+91 98765 32109',
                membership_id: 'M10056',
                is_active: true,
                member_since: '01-02-2023'

        }},

        about: {
            author_name: ['Cormac McCarthy'],
            author_note: 'Cormac McCarthy was an American writer who authored twelve novels, two plays, five screenplays, and three short stories, spanning the Western and postapocalyptic genres. He won the Pulitzer Prize in 2007 for The Road, and his 1992 novel All the Pretty Horses was adapted as a 2000 film. His works often deal with themes of isolation, violence, and the human condition.',
            genre: ['Post-apocalyptic', 'Fiction', 'Literary Fiction'],
            language: ['English'],
            ratings: {
                goodreads: 4.10,
                amazon: 4.4
            },
            publish_details: {
                publish_year: 2006,
                publisher: 'Alfred A. Knopf',
                publication_date: '26-9-2006',
                publication_place: 'United States',
            },
        },
       
     } ,

    {
        book_id: 540021,
        book_name: 'Murder at the Bookstore',
        isbn: '978-1234567890',
        number_of_pages: 272,
        slug: 'murder-at-the-bookstore',
        description: 'Murder at the Bookstore is a cozy mystery novel that follows amateur sleuth and bookstore owner, Sarah Smith, as she investigates a shocking murder that takes place in her own shop. When a local literary critic is found dead among the stacks, Sarah finds herself at the center of a small-town mystery filled with eccentric characters, hidden motives, and plenty of red herrings. As she delves deeper into the case, Sarah uncovers long-buried secrets that some townspeople would prefer remain hidden. With her keen eye for detail and knowledge of classic mystery novels, Sarah races against time to catch the killer before they strike again. This charming whodunit combines a love of books with a puzzling mystery, making it a perfect read for fans of cozy mysteries and bookish settings.',
       
        image: murder_at_bookstore,
        banner_image: banner_murder_at_bookstore,
            book_for_sell: {
                price: '599 Rs.',
                in_stock: 7
            },

        borrow_details: {
            returned_yet: false,
            return_date: null,
            due_date: '12-9-2025',
            checkout_date: '1-8-2025',
            borrower: {
                name: 'Meera Desai',
                email: 'meera.desai@example.com',
                phone: '+91 98765 32109',
                membership_id: 'M10056'

            
        }},

        about: {
            author_name: ['Carolyn Parkhurst'],
            author_note: 'Carolyn Parkhurst is an American author known for her thought-provoking novels that often explore complex family dynamics and psychological themes. Born in New Hampshire, she earned her MFA in Creative Writing from American University. Parkhurst gained critical acclaim with her debut novel, "The Dogs of Babel" (2003), which became a New York Times bestseller. Her works are celebrated for their emotional depth, unique narrative structures, and exploration of human relationships. In addition to writing fiction, Parkhurst has contributed to various publications, including The Washington Post and The New York Times. She has also taught creative writing at institutions such as American University and the University of California, Los Angeles Extension program.',
            genre: ['Novel', 'Fiction'],
            language: ['English'],
            ratings: {
                goodreads: 4.99,
                amazon: 3.3,
            },

            publish_details: {
                publish_year: 2006,
                publisher: 'Ian Rankin',
                publication_date: '19-1-2023',
                publication_place: 'United States',
            }
        },
       
    },


    {
        book_id: 540022,
        book_name: 'Harmony',
        isbn: '978-1250078460',
        number_of_pages: 272,
        slug: 'harmony',
        description: 'Harmony is a thought-provoking science fiction novel that explores a future society where health and happiness are strictly regulated by the government. Set in a world where the pursuit of perfect health has become an obsession, the story follows three women who question the cost of this utopian ideal. The narrative weaves together themes of free will, the ethics of medical technology, and the meaning of true happiness. As the characters navigate a world where every aspect of life is monitored and controlled for optimal health, they must confront difficult questions about personal freedom and the price of perfection. The novel has been praised for its complex characters, intricate world-building, and timely exploration of the intersection between technology and human nature in an increasingly health-conscious society.',
        
        image: harmony,
        banner_image: banner_harmony,
            book_for_sell: {
                price: '499 Rs.',
                in_stock: 6
            },

        borrow_details:
        {

            returned_yet: true,
            return_date: '5-5-2024',
            due_date: '7-6-2024',
            checkout_date: '1-1-2024',

        borrower : null ,
            

        },

        about: {
            author_name: ['Jayne Castle'],
            author_note: 'Jayne Castle is the pen name of Jayne Ann Krentz, a New York Times bestselling author known for her romantic suspense and paranormal romance novels. Born in California, she earned a degree in History from the University of California, Santa Cruz, and later obtained a Master\'s degree in Library Science from San Jose State University. Castle has written over 50 consecutive New York Times bestsellers and has published under several pseudonyms, including Amanda Quick and Jayne Ann Krentz. Her works often blend elements of romance, suspense, and the paranormal. She is particularly known for her Harmony series, which is set on a futuristic Earth colony. Castle has received numerous awards for her writing, including the Romance Writers of America Lifetime Achievement Award.',
            genre: ['Novel'],
            language: ['English'],

            ratings: {
                goodreads: 4.99,
                amazon: 3.5,
                flipkart : 4.4,
            },

            publish_details: {
                publish_year: 2002,
                publisher: 'Penguin Publishing Group',
                publication_date: '7-2-2002',
                publication_place: 'United States',
            },
        },

      
    },


]

// // console.log(library_database);

//             const highly_ratedbook = library_database.filter((value,element,index) => 

//                 value?.about?.ratings?.amazon >= 4.0

//             )

// // console.log(highly_ratedbook);




// //to spread the object of about

//             var about= {};
//             const spread_data = library_database.map((value,index,array)=>{

//                 about = {...value.about, ...value.about.ratings , ...value.about.publish_details};
//                 return about;
                
//             })

// // console.log(spread_data);



// // to create a new object of book_id and book_name

//             var newobj = {};
//             const discription = library_database.map((value,index,array) => {

//                 newobj = Object.assign({'id':value.book_id , 'name' : value.book_name });
//                 //    delete value.book_id;
//                 //    delete value.book_name;
//                     return {...value,newobj};
//             })

// // console.log(discription);


// //to get the name of all book in the database

//             var book={};
//             const books = library_database.map((value , index, array) => {

//                 return {'book' : value.book_name};
                        
//             })

// // console.log(books);



// //book which is not returned yet


//             //   var book_returned = {};
//             // const not_returned_book = library_database.map((value,index,array) =>
//             // {
//             //    if(value.returned_yet===false){
//             //    return  book_returned=Object.assign({'book' : value.book_name});
//             //    }
               
//             // })
//             // console.log(book_returned);


//             // var book_returned = {};
//             // const not_returned_book = library_database.filter((value,index,array) =>
            
//             //    value.returned_yet===false
               
//             // );
//             // console.log(not_returned_book); 
//             // );
//             // console.log(not_returned_book); 