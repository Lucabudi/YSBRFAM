import React from 'react';
import style from './style.module.scss'
import Button from '../Components/Button';
import Logo from '../Components/Logo';

const Home = () => {
  return( 
    <div className={style.HomePage}>
      <h1>YSBR</h1>
      <div className={style.firstBlock}>
        <div className={style.contentBlock}>
              <h2>YSBR</h2>
              <img width={80} alt='party' src='/images/abstract.png' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis molestiae dignissimos asperiores itaque, voluptate quisquam voluptates eveniet rerum temporibus expedita corrupti, totam repellat officia, explicabo distinctio consequuntur voluptatum quasi!</p>
              <div style={{ float: 'right'}}>+</div>
        </div>
        <div className={style.contentBlock}>
              <h2>PARTY</h2>
              <img width={80} alt='party' src='/images/abstract.png' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis facere corporis libero doloremque, fugit dolore. Possimus, porro modi dignissimos veniam, debitis accusamus commodi nulla laudantium explicabo quo ipsum impedit.</p>
              <div style={{ float: 'right'}}>+</div>
        </div>
        <div className={style.contentBlock}>
              <h2>WILD LIFE</h2>
              <img width={80} alt='party' src='/images/abstract.png' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis facere corporis libero doloremque, fugit dolore. Possimus, porro modi dignissimos veniam, debitis accusamus commodi nulla laudantium explicabo quo ipsum impedit.</p>
              <div style={{ float: 'right'}}>+</div>
        </div>
        <div className={style.contentBlock}>
              <h2>SOUND</h2>
              <img width={80} alt='party' src='/images/abstract.png' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis facere corporis libero doloremque, fugit dolore. Possimus, porro modi dignissimos veniam, debitis accusamus commodi nulla laudantium explicabo quo ipsum impedit.</p>
              <div style={{ float: 'right'}}>+</div>
        </div>
      </div>
      <div className={style.secondBlock}>
        <div className={style.contentBlock}>
            <h2>Prossimi eventi</h2>
            <img width={80} alt='party' src='/images/abstract.png' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis facere corporis libero doloremque, fugit dolore. Possimus, porro modi dignissimos veniam, debitis accusamus commodi nulla laudantium explicabo quo ipsum impedit.</p>
            <div style={{ float: 'right'}}>+</div>
        </div>
        <div className={style.contentBlock}>
        <h2>YSBR</h2>
            <p>La vita è troppo breve per essere sprecata nella monotonia della routine quotidiana. Dobbiamo esplorare, scoprire, sperimentare e vivere ogni momento come se fosse l'ultimo. Solo allora saremo in grado di capire il vero significato della vita. Ed è proprio in questo spirito che il nostro collettivo di amici organizza feste con sport estremi, musica e feste all'aria aperta.</p>
            <p>La nostra filosofia è quella di sfidare il nostro comfort zone, superare i limiti e provare nuove cose. Non abbiamo paura di affrontare le sfide, perché sappiamo che solo attraverso le difficoltà possiamo crescere e migliorare. Ecco perché ci piace organizzare feste che includono sport estremi come snowboard, wakeboard, sci, surf, perché ci offrono la possibilità di metterci alla prova, di sperimentare nuove emozioni e di superare i nostri limiti.</p>
            <p>Ma non si tratta solo di sport estremi. La nostra filosofia si estende anche alla musica e alle feste all'aria aperta. La musica ha il potere di unire le persone, di farle ballare insieme e di creare un'atmosfera di energia positiva. E le feste all'aria aperta ci permettono di connetterci con la natura, di apprezzare la bellezza del mondo che ci circonda e di sentirci parte di essa.</p>
            <p>La nostra filosofia non riguarda solo la ricerca di adrenalina e divertimento. Si tratta di trovare un senso di appartenenza, di connessione con gli altri e con il mondo intorno a noi. È un invito a esplorare, scoprire e sperimentare tutto ciò che la vita ha da offrire. Siamo convinti che solo attraverso l'avventura e la scoperta possiamo veramente capire il significato della vita e trovare la nostra strada.</p>
            <p>Per questo motivo, invitiamo tutti coloro che vogliono sperimentare la vita al massimo a unirsi a noi. Vieni a esplorare, a scoprire e a sperimentare con noi. Vieni a unirti alle nostre feste con sport estremi, musica e feste all'aria aperta. Vieni a vivere la vita al massimo e a scoprire il vero significato della vita stessa.</p>
        </div>
      </div>
     
    </div>
  );
}

export default Home;