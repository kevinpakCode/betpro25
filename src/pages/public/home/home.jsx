import React from 'react'
import { useEffect } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import moment from 'moment'
import userStyles from './styles'
import './styles.scss'
import { classNames } from 'classnames'
import Container from '../../../components/ui/container/Container'
import premierLeague from './../../../assets/images/uploads/championships/premier_league.svg'
import leagueUnLogo from './../../../assets/images/uploads/championships/league1.svg'
import serieALogo from './../../../assets/images/uploads/championships/serieA.svg'

//team
import evertonImg from './../../../assets/images/uploads/teams/everton.svg'
import liverpoolImg from './../../../assets/images/uploads/teams/liverpool.svg'
import lyonImg from './../../../assets/images/uploads/teams/lyon.svg'
import nantesImg from './../../../assets/images/uploads/teams/nantes.svg'
import empoliLogo from './../../../assets/images/uploads/teams/empoli.svg'
import atlalantaLogo from './../../../assets/images/uploads/teams/atlalanta.svg'

import mantchester from './../../../assets/images/uploads/teams/Manchester.svg'
import brentford from './../../../assets/images/uploads/teams/Brentford.svg'
import gilVicente from './../../../assets/images/uploads/teams/Gil_Vicente.svg'
import sportingClub from './../../../assets/images/uploads/teams/Sporting_Clube_de_Portugal.svg'
import barcelone from './../../../assets/images/uploads/teams/Barcelona.svg'
import realMardrid from './../../../assets/images/uploads/teams/Real_Madrid.svg'

import annecy from './../../../assets/images/uploads/teams/Annecy.svg'
import fenerbahçe from './../../../assets/images/uploads/teams/Fenerbahce.svg'
import kayserispor from './../../../assets/images/uploads/teams/Kayserispor.svg'
import krasnodor from './../../../assets/images/uploads/teams/Krasnodar.svg'
import rostov from './../../../assets/images/uploads/teams/Rostov.svg'
import toulouse from './../../../assets/images/uploads/teams/Toulouse.svg'

import astonVilla from './../../../assets/images/uploads/teams/AstonVilla.svg'
import celtadeVigo from './../../../assets/images/uploads/teams/CeltadeVigo.svg'
import chelsea from './../../../assets/images/uploads/teams/Chelsea.svg'
import elche from './../../../assets/images/uploads/teams/Elche.svg'
import fiorentina from './../../../assets/images/uploads/teams/Fiorentina.svg'
import interMilan from './../../../assets/images/uploads/teams/InterMilan.svg'
import lecce from './../../../assets/images/uploads/teams/Lecce.svg'
import milan from './../../../assets/images/uploads/teams/Milan.svg'
import monza1912 from './../../../assets/images/uploads/teams/Monza1912.svg'
import nottinghamForest from './../../../assets/images/uploads/teams/NottinghamForest.svg'
import osasuna from './../../../assets/images/uploads/teams/Osasuna.svg'
import salernitana from './../../../assets/images/uploads/teams/Salernitana.svg'
import seville from './../../../assets/images/uploads/teams/Seville.svg'
import spezia from './../../../assets/images/uploads/teams/Spezia.svg'
import sscNeapel from './../../../assets/images/uploads/teams/SSC_Neapel.svg'
import udineseCalcio from './../../../assets/images/uploads/teams/UdineseCalcio.svg'
import wolverhamptonWanderers from './../../../assets/images/uploads/teams/WolverhamptonWanderers.svg'
//end team

import messiImg from './../../../assets/images/uploads/players/messi.png'
import neymaImg from './../../../assets/images/uploads/players/neyma.png'
import alexandreLacazetteImg from './../../../assets/images/uploads/players/alexandreLacazette.png'
import evanGuessandImg from './../../../assets/images/uploads/players/evanGuessand.png'
import ademolaLookmanImg from './../../../assets/images/uploads/players/ademolaLookman.png'
import markoPjacaImg from './../../../assets/images/uploads/players/markoPjaca.png'

import englandFlag from './../../../assets/images/uploads/countries/angleterre_flag.svg'
import danemakFlag from './../../../assets/images/uploads/countries/danemak_flag.svg'
import finlandFlag from './../../../assets/images/uploads/countries/finland_flag.svg'
import iranFlag from './../../../assets/images/uploads/countries/iran_flag.svg'
import italieFlag from './../../../assets/images/uploads/countries/italie_flag.svg'
import russieFlag from './../../../assets/images/uploads/countries/russie_flag.svg'


function MessageAlert() {
  return(
    <div className='message-alert'>
      <p>
        Aucun match disponible!
      </p>
    </div>
  )
}


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const classes = userStyles()

  const dateTime = moment().format('yy-MM-DD, HH:mm').replace(',','')
  
  //data
  const data = [
    {
      championship: {
        name: 'Ligue 1',
        logo: leagueUnLogo,
        datetime: [2023, 2, 17, 23, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.24',
        endState: 'X'
      },
      teams: [
        {
          name: 'Lyon',
          logo: lyonImg,
          cote: '1.59',
          player: {
            name: 'alexandre Lacazette',
            img: alexandreLacazetteImg
          }
        },
        {
          name: 'Nantes',
          logo: nantesImg,
          cote: '5.3',
          player: {
            name: 'EVANN GUESSAND',
            img: evanGuessandImg
          }
        },

      ]
    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 2 , 17, 22, 45, 0],//[year, month, day, hours, minutes, seconde]
        cote: '4.78',
        endState: 'X'
      },
      teams: [
        {
          name: 'Atlalanta',
          logo: atlalantaLogo,
          cote: '1.42',
          player: {
            name: 'Ademola Lookman',
            img: ademolaLookmanImg
          }
        },
        {
          name: 'Empoli',
          logo: empoliLogo,
          cote: '7.1',
          player: {
            name: 'Marko Pjaca',
            img: markoPjacaImg
          }
        },

      ]

    },
    {
      championship: {
        name: 'Mathes amicaux',
        logo: '',
        datetime: [2023, 2, 23, 17, 0, 0],//[year, month, day, hours, minutes, seconde]
        cote: '3.28',
        endState: 'X'
      },
      teams: [
        {
          name: 'Iran',
          logo: iranFlag,
          cote: '2.25',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Russie',
          logo: russieFlag,
          cote: '3.28',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Championnat d\'Europe 2024',
        logo: '',
        datetime: [2023, 2 , 23 , 19, 45],//[year, month, day, hours, minutes, seconde]
        cote: '3.09',
        endState: 'X'
      },
      teams: [
        {
          name: 'Italie',
          logo: italieFlag,
          cote: '2.936',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Angleterre',
          logo: englandFlag,
          cote: '2.57',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Championnat d\'Europe 2024',
        logo: '',
        datetime: [2023, 2 ,23 , 19, 45, 0],//[year, month, day, hours, minutes, seconde]
        cote: '4.86',
        endState: 'X'
      },
      teams: [
        {
          name: 'Danemark',
          logo: danemakFlag,
          cote: '1.32',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Finlande',
          logo: finlandFlag,
          cote: '10.5',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Premier League',
        logo: premierLeague,
        datetime: [2023, 3, 5 , 22, 0, 0],//[year, month, day, hours, minutes, seconde]
        cote: '4.18',
        endState: 'X'
      },
      teams: [
        {
          name: 'Manchester United',
          logo: mantchester,
          cote: '1.616',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Brentford',
          logo: brentford,
          cote: '5.1',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Premier League',
        logo: premierLeague,
        datetime: [2023, 3, 5 , 22, 15, 0],//[year, month, day, hours, minutes, seconde]
        cote: '4.92',
        endState: 'X'
      },
      teams: [
        {
          name: 'Gil Vicente',
          logo: gilVicente,
          cote: '7.4',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Sporting Clube de Portugal',
          logo: sportingClub,
          cote: '1.395',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Coupe du Roi',
        logo: '',
        datetime: [2023, 3, 5 , 22, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.46',
        endState: 'X'
      },
      teams: [
        {
          name: 'Barcelone',
          logo: barcelone,
          cote: '2.33',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Real Madrid',
          logo: realMardrid,
          cote: '2.975',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Coupe de Turquie',
        logo: '',
        datetime: [2023, 3, 6 , 17, 30, 0], //[year, month, day, hours, minutes, seconde]
        cote: '5.65',
        endState: 'X'
      },
      teams: [
        {
          name: 'Fenerbahçe SK',
          logo: fenerbahçe,
          cote: '1.33',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Kayserispor',
          logo: kayserispor,
          cote: '7.9',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Coupe de France',
        logo: '',
        datetime: [2023, 3, 6 , 18, 45, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.06',
        endState: 'X'
      },
      teams: [
        {
          name: 'Annecy',
          logo: annecy,
          cote: '5.15',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Toulouse',
          logo: toulouse,
          cote: '1.63',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Coupe de Russie',
        logo: '',
        datetime: [2023, 3, 6 , 10, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.64',
        endState: 'X'
      },
      teams: [
        {
          name: 'Krasnodar',
          logo: krasnodor,
          cote: '1.86',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Rostov',
          logo: rostov,
          cote: '4.15',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 3, 7 , 15, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.64',
        endState: 'X'
      },
      teams: [
        {
          name: 'Salernitana 1919',
          logo: salernitana,
          cote: '4.85',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Inter Milan',
          logo: interMilan,
          cote: '1.445',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 3, 7 , 17, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.88',
        endState: 'X'
      },
      teams: [
        {
          name: 'Lecce',
          logo: lecce,
          cote: '5.85',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'SSC Naples',
          logo: sscNeapel,
          cote: '1.6',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 3, 7 , 19, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.82',
        endState: 'X'
      },
      teams: [
        {
          name: 'Milan',
          logo: milan,
          cote: '1.4',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Empoli',
          logo: empoliLogo,
          cote: '7.6',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'LA LIGA',
        logo: '',
        datetime: [2023, 3, 7 , 19, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.38',
        endState: 'X'
      },
      teams: [
        {
          name: 'Séville',
          logo: seville,
          cote: '2.1',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Celta de Vigo',
          logo: celtadeVigo,
          cote: '3.54',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 3, 8 , 10, 30, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.5',
        endState: 'X'
      },
      teams: [
        {
          name: 'Udinese Calcio',
          logo: udineseCalcio,
          cote: '2.035',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Monza 1912',
          logo: monza1912,
          cote: '3.6',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Serie A',
        logo: serieALogo,
        datetime: [2023, 3, 8 , 12, 30, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.68',
        endState: 'X'
      },
      teams: [
        {
          name: 'Fiorentina',
          logo: fiorentina,
          cote: '1.42',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Spezia',
          logo: spezia,
          cote: '7.4',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Première League',
        logo: '',
        datetime: [2023, 3, 8 , 11, 30, 0], //[year, month, day, hours, minutes, seconde]
        cote: '4.38',
        endState: 'X'
      },
      teams: [
        {
          name: 'Manchester United',
          logo: mantchester,
          cote: '1.5',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Everton',
          logo: evertonImg,
          cote: '6.3',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Première League',
        logo: '',
        datetime: [2023, 3, 8 , 14, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.94',
        endState: 'X'
      },
      teams: [
        {
          name: 'Aston Villa',
          logo: astonVilla,
          cote: '1.63',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Nottingham Forest',
          logo: nottinghamForest,
          cote: '5.35',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'Première League',
        logo: '',
        datetime: [2023, 3, 8 , 14, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.44',
        endState: 'X'
      },
      teams: [
        {
          name: 'Wolverhampton Wanderers',
          logo: wolverhamptonWanderers,
          cote: '3.94',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Chelsea',
          logo: chelsea,
          cote: '1.955',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
    {
      championship: {
        name: 'LA LIGA',
        logo: '',
        datetime: [2023, 3, 8 , 12, 0, 0], //[year, month, day, hours, minutes, seconde]
        cote: '3.54',
        endState: 'X'
      },
      teams: [
        {
          name: 'Osasuna',
          logo: osasuna,
          cote: '1.75',
          player: {
            name: '',
            img: ''
          }
        },
        {
          name: 'Elche',
          logo: elche,
          cote: '5',
          player: {
            name: '',
            img: ''
          }
        },

      ]

    },
  ]

  

  const filteredData = data.filter(item => moment(item.championship.datetime).add(1, 'hours').format('yy-MM-DD, HH:mm').replace(",", "")>dateTime)
  
  const SliderList = filteredData.map((item, index) => {
    const datetimeItem = moment(item.championship.datetime).format('yy-MM-DD, HH:mm').replace(",", "").split(" ")
    const itemDate = datetimeItem[0].split('-')
    const itemTime = datetimeItem[1]
    
    return (
      <div className={classes.sliderItem} key={index}>
        <div className={classes.sliderItemInner}>
          { item.teams.map((team, idx) => {
              return (
                <div className={classes.championshipItem} key={idx}>
                  <div className={classes.championshipItemLogo}><img src={team.logo}/></div>
                  <div className={classes.championshipItemName}>{team.name}</div>
                  <div className={classes.championshipItemOdds}>{team.cote}</div>
                  {
                    (team.player.img)?<img className={classes.championshipItemBestPlayerImg} src={team.player.img}/>:''
                  }
                  
                </div>
              )
            })
          }
          <div className={classes.championship}>
            <div className={classes.championshipLogo}><img src={item.championship.logo}/></div>
            <h3 className={classes.championshipName}>{item.championship.name}</h3>
            <div className={classes.championshipMatch}>
              <div className={classes.championshipMatchDateTime}>{itemDate[2]+"."+itemDate[1]+" "+itemTime}</div>
              <div className={classes.championshipMatchOdds}>{`${item.championship.endState} ${item.championship.cote}`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }) 

  return (
    <div className={classes.home}>
      <Container>
        <div className={classes.homeInner}>
          {
            filteredData.length> 0 ?
            (
              <Slider className={classes.slider} {...settings}>
               {SliderList} 
              </Slider>
            ): <MessageAlert/>
          }
          
        </div>
      </Container>
      
    </div>
  )
}
export default Home


{/* <div className={classes.sliderItem}>
  <div className={classes.sliderItemInner}>
    <div className={classes.championshipItem}>
      <div className={classes.championshipItemLogo}><img src={evertonImg}/></div>
      <div className={classes.championshipItemName}>Premier club</div>
      <div className={classes.championshipItemOdds}>2.1</div>
      <img className={classes.championshipItemBestPlayerImg} src={messiImg}/>
    </div>
    <div className={classes.championship}>
      <div className={classes.championshipLogo}><img src={premierLeague}/></div>
      <h3 className={classes.championshipName}>Premier League</h3>
      <div className={classes.championshipMatch}>
        <div className={classes.championshipMatchDateTime}>15.03 20:30</div>
        <div className={classes.championshipMatchOdds}>x 4.28</div>
      </div>
    </div>
    <div className={classes.championshipItem}>
      <div className={classes.championshipItemLogo}><img src={liverpoolImg}/></div>
      <div className={classes.championshipItemName}>Premier club</div>
      <div className={classes.championshipItemOdds}>2.1</div>
      <img className={classes.championshipItemBestPlayerImg} src={neymaImg}/>
    </div>
  </div>
</div> */}