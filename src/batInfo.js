import{
    batman1966tv, batmansupermanhour1968tv, newadventuresofbatman1977tv, batmananimatedseries1992tv, newbatmanadventures1997tv, batmanbeyond1999tv, thebatman2004tv, batmanbravebold2008tv, bewarebatman2013tv, gotham2014tv, harleyquinn2019tv
} from './tvImports';

import{
    batman1966, batman1989, batmanreturns1992, maskofthephantasm1993, batmanforever1995, batmansupermanworldsfinest1997, batmanandrobin1997, batmanmrfreezesubzero1998, batmanbeyondreturnofjoker2000, mysteryofbatwoman2003, batmanvsdracula2005, batmanbegins2005, batmangothamknight2008, thedarkknight2008, supermanbatmanpublicenemies2009, undertheredhood2010, supermanbatmanapocalypse2010, batmanyearone2011, justiceleaguedoom2012, thedarkknightrises2012, darkknightreturnspart12012, darkknightreturnspart22013, sonofbatman2014, assaultonarkham2014, batmanvsrobin2015, unlimitedanimalinstincts2015, unlimitedmonstermayhem2015, batmanvsupermandawnofjustice2016, badblood2016, thekillingjoke2016, unlimitedmechsvsmutants2016, returnofthecapedcrusaders2016, justiceleaguedark2017, batmanandharleyquinn2017, batmanvstwoface2017, justiceleague2017, gothambygaslight2018, batmanninja2018, batmanvstmnt2019, batmanhush2019
} from './movieImports';

const batInfo = {
    series: [
      [
        {
          title: 'Batman',
          year: 1966,
          img: batman1966tv
        },
        {
          title: 'The Batman/Superman Hour',
          year: 1968,
          img: batmansupermanhour1968tv
        },
        {
          title: 'The New Adventures of Batman',
          year: 1977,
          img: newadventuresofbatman1977tv
        },
        {
          title: 'Batman: The Animated Series',
          year: 1992,
          img: batmananimatedseries1992tv
        },
        {
          title: 'The New Batman Adventures',
          year: 1997,
          img: newbatmanadventures1997tv
        }
      ],
      [
        {
          title: 'Batman Beyond',
          year: 1999,
          img: batmanbeyond1999tv
        },
        {
          title: 'The Batman',
          year: 2004,
          img: thebatman2004tv
        },
        {
          title: 'Batman: The Brave and the Bold',
          year: 2008,
          img: batmanbravebold2008tv
        },
        {
          title: 'Beware the Batman',
          year: 2013,
          img: bewarebatman2013tv
        },
        {
          title: 'Gotham',
          year: 2014,
          img: gotham2014tv
        }
      ],
      [
        {
          title: 'Harley Quinn',
          year: 2019,
          img: harleyquinn2019tv
        }
      ]
    ],
    movies: [
        [
            {
                title: 'Batman',
                year: 1966,
                img: batman1966
            },
            {
                title: 'Batman',
                year: 1989,
                img: batman1989
            },
            {
                title: 'Batman Returns',
                year: 1992,
                img: batmanreturns1992
            },
            {
                title: 'Batman: Mask of the Phantasm',
                year: 1993,
                img: maskofthephantasm1993
            },
            {
                title: 'Batman Forever',
                year: 1995,
                img: batmanforever1995
            }
        ],
        [
            {
                title: "The Batman Superman Movie: World's Finest",
                year: 1997,
                img: batmansupermanworldsfinest1997
            },
            {
                title: 'Batman & Robin',
                year: 1997,
                img: batmanandrobin1997
            },
            {
                title: 'Batman & Mr. Freeze: SubZero',
                year: 1998,
                img: batmanmrfreezesubzero1998
            },
            {
                title: 'Batman Beyond: Return of the Joker',
                year: 2000,
                img: batmanbeyondreturnofjoker2000
            },
            {
                title: 'Batman: Mystery of the Batwoman',
                year: 2003,
                img: mysteryofbatwoman2003
            }
        ],
        [
            {
                title: 'The Batman vs. Dracula',
                year: 2005,
                img: batmanvsdracula2005
            },
            {
                title: 'Batman Begins',
                year: 2005,
                img: batmanbegins2005
            },
            {
                title: 'Batman: Gotham Knight',
                year: 2008,
                img: batmangothamknight2008
            },
            {
                title: 'The Dark Knight',
                year: 2008,
                img: thedarkknight2008
            },
            {
                title: 'Superman/Batman: Public Enemies',
                year: 2009,
                img: supermanbatmanpublicenemies2009
            }
        ],
        [
            {
                title: 'Batman: Under the Red Hood',
                year: 2010,
                img: undertheredhood2010
            },
            {
                title: 'Superman/Batman: Apocalypse',
                year: 2010,
                img: supermanbatmanapocalypse2010
            },
            {
                title: 'Batman: Year One',
                year: 2011,
                img: batmanyearone2011
            },
            {
                title: 'Justice League: Doom',
                year: 2012,
                img: justiceleaguedoom2012
            },
            {
                title: 'The Dark Knight Rises',
                year: 2012,
                img: thedarkknightrises2012
            }
        ],
        [
            {
                title: 'Batman: The Dark Knight Returns, Part 1',
                year: 2012,
                img: darkknightreturnspart12012
            },
            {
                title: 'Batman: The Dark Knight Returns, Part 2',
                year: 2013,
                img: darkknightreturnspart22013
            },
            {
                title: 'Son of Batman',
                year: 2014,
                img: sonofbatman2014
            },
            {
                title: 'Batman: Assault on Arkham',
                year: 2014,
                img: assaultonarkham2014
            },
            {
                title: 'Batman vs. Robin',
                year: 2015,
                img: batmanvsrobin2015
            }
        ],
        [
            {
                title: 'Batman Unlimited: Animal Instincts',
                year: 2015,
                img: unlimitedanimalinstincts2015
            },
            {
                title: 'Batman Unlimited: Monster Mayhem',
                year: 2015,
                img: unlimitedmonstermayhem2015
            },
            {
                title: 'Batman v Superman: Dawn of Justice',
                year: 2016,
                img: batmanvsupermandawnofjustice2016
            },
            {
                title: 'Batman: Bad Blood',
                year: 2016,
                img: badblood2016
            },
            {
                title: 'Batman: The Killing Joke',
                year: 2016,
                img: thekillingjoke2016
            }
        ],
        [
            {
                title: 'Batman Unlimited: Mechs vs. Mutants',
                year: 2016,
                img: unlimitedmechsvsmutants2016
            },
            {
                title: 'Batman: Return of the Caped Crusaders',
                year: 2016,
                img: returnofthecapedcrusaders2016
            },
            {
                title: 'Justice League Dark',
                year: 2017,
                img: justiceleaguedark2017
            },
            {
                title: 'Batman and Harley Quinn',
                year: 2017,
                img: batmanandharleyquinn2017
            },
            {
                title: 'Batman vs. Two-Face',
                year: 2017,
                img: batmanvstwoface2017
            }
        ],
        [
            {
                title: 'Justice League',
                year: 2017,
                img: justiceleague2017
            },
            {
                title: 'Batman: Gotham by Gaslight',
                year: 2018,
                img: gothambygaslight2018
            },
            {
                title: 'Batman Ninja',
                year: 2018,
                img: batmanninja2018
            },
            {
                title: 'Batman vs Teenage Mutant Ninja Turtles',
                year: 2019,
                img: batmanvstmnt2019
            },
            {
                title: 'Batman: Hush',
                year: 2019,
                img: batmanhush2019
            }
        ]
    ]
}

export default batInfo;