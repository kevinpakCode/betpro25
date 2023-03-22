import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import userStyles from './styles'
import './styles.scss'
import { classNames } from 'classnames'
import Container from '../../../components/ui/container/Container'
import premierLeague from './../../../assets/images/uploads/championships/premier_league.svg'
import leagueUnLogo from './../../../assets/images/uploads/championships/league1.svg'
import serieALogo from './../../../assets/images/uploads/championships/serieA.svg'

import evertonImg from './../../../assets/images/uploads/teams/everton.svg'
import liverpoolImg from './../../../assets/images/uploads/teams/liverpool.svg'
import lyonImg from './../../../assets/images/uploads/teams/lyon.svg'
import nantesImg from './../../../assets/images/uploads/teams/nantes.svg'
import empoliLogo from './../../../assets/images/uploads/teams/empoli.svg'
import atlalantaLogo from './../../../assets/images/uploads/teams/atlalanta.svg'

import messiImg from './../../../assets/images/uploads/players/messi.png'
import neymaImg from './../../../assets/images/uploads/players/neyma.png'
import alexandreLacazetteImg from './../../../assets/images/uploads/players/alexandreLacazette.png'
import evanGuessandImg from './../../../assets/images/uploads/players/evanGuessand.png'
import ademolaLookmanImg from './../../../assets/images/uploads/players/ademolaLookman.png'
import markoPjacaImg from './../../../assets/images/uploads/players/markoPjaca.png'



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const classes = userStyles()

  const data = [
    {
      championship: {
        name: 'Ligue 1',
        logo: leagueUnLogo,
        datetime: '17.03 23:00',
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
        datetime: '17.03 - 22:45',
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

    }
  ]

  const SliderList = data.map((item, index) => {
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
              <div className={classes.championshipMatchDateTime}>{item.championship.datetime}</div>
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
          <Slider className={classes.slider} {...settings}>
            {SliderList}
          </Slider>
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