
import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

const BASE_PATH = 'https://image.tmdb.org/t/p/original/';

const generos = [
  {
    conteudo: "Todos",
    valor: "all",
  },
  {
    conteudo: "Ação",
    valor: "action",
  },
  {
    conteudo: "Romance",
    valor: "romance",
  },
  {
    conteudo: "Ficção Científica",
    valor: "science fiction",
  },
  {
    conteudo: "Terror",
    valor: "horror",
  }
];

const Movies = [
  {
    title: 'Mortal Kombat',
    backgroundImg: `${BASE_PATH}w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg`,
    isStarred: false,
    starsCount: 9,
    price: 7.5,
    categories: [
      'horror', 'action'
    ]
  },
  {
    title: 'Godzilla vs. Kong',
    backgroundImg: `${BASE_PATH}klAIFewuqcyEmH1SMtR2XbMyqzM.jpg`,
    isStarred: false,
    starsCount: 8.5,
    price: 3,
    categories: [
      'science fiction', 'action'
    ]
  },
  {
    title: 'Anônimo',
    backgroundImg: `${BASE_PATH}woPYFGKwVULILbO7q44HmsNY0kO.jpg`,
    isStarred: false,
    starsCount: 8.5,
    price: 7,
    categories: [
      'horror', 'action'
    ]
  },
  {
    title: 'Sem Remorso',
    backgroundImg: `${BASE_PATH}uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg`,
    isStarred: false,
    starsCount: 8.4,
    price: 5.5,
    categories: [
      'action'
    ]
  },
  {
    title: 'Demon Slayer: O Trem Infinito',
    backgroundImg: `${BASE_PATH}m9cn5mhW519QKr1YGpGxNWi98VJ.jpg`,
    isStarred: false,
    starsCount: 8.4,
    price: 8,
    categories: [
      'action'
    ]
  },
  {
    title: 'Cherry: Inocência Perdida',
    backgroundImg: `${BASE_PATH}qbSsR0IfnxdXZqfRMpH2PgLAbPV.jpg`,
    isStarred: false,
    starsCount: 8.1,
    price: 8.5,
    categories: [
      'romance'
    ]
  },
  {
    title: 'Benny Loves You',
    backgroundImg: `${BASE_PATH}mQ8vALvqA0z0qglG3gI6xpVcslo.jpg`,
    isStarred: false,
    starsCount: 7.7,
    price: 6.5,
    categories: [
      'horror'
    ]
  },
  {
    title: 'Mortal Kombat',
    backgroundImg: `${BASE_PATH}w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg`,
    isStarred: false,
    starsCount: 9,
    price: 7.5,
    categories: [
      'horror', 'action'
    ]
  },
  {
    title: 'Godzilla vs. Kong',
    backgroundImg: `${BASE_PATH}klAIFewuqcyEmH1SMtR2XbMyqzM.jpg`,
    isStarred: false,
    starsCount: 8.5,
    price: 3,
    categories: [
      'science fiction', 'action'
    ]
  },
  {
    title: 'Anônimo',
    backgroundImg: `${BASE_PATH}woPYFGKwVULILbO7q44HmsNY0kO.jpg`,
    isStarred: false,
    starsCount: 8.5,
    price: 7,
    categories: [
      'horror', 'action'
    ]
  },
  {
    title: 'Sem Remorso',
    backgroundImg: `${BASE_PATH}uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg`,
    isStarred: false,
    starsCount: 8.4,
    price: 5.5,
    categories: [
      'action'
    ]
  },
  {
    title: 'Demon Slayer: O Trem Infinito',
    backgroundImg: `${BASE_PATH}m9cn5mhW519QKr1YGpGxNWi98VJ.jpg`,
    isStarred: false,
    starsCount: 8.4,
    price: 8,
    categories: [
      'action'
    ]
  },
  {
    title: 'Cherry: Inocência Perdida',
    backgroundImg: `${BASE_PATH}qbSsR0IfnxdXZqfRMpH2PgLAbPV.jpg`,
    isStarred: false,
    starsCount: 8.1,
    price: 8.5,
    categories: [
      'romance'
    ]
  },
  {
    title: 'Benny Loves You',
    backgroundImg: `${BASE_PATH}mQ8vALvqA0z0qglG3gI6xpVcslo.jpg`,
    isStarred: false,
    starsCount: 7.7,
    price: 6.5,
    categories: [
      'horror'
    ]
  },
]

const generoPadrão = generos[0];
const tempo = 8*60;

function App() {
  const [generoAtual, setGeneroAtual] = useState(generoPadrão.valor);
  const [estadoBanner, setBanner] = useState("banner");
  const [favoritar, setFavotitar] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(tempo);

  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2,"0");
  const segundos = String(tempoRestante % 60).padStart(2,"0");

useEffect(()=> {
      const intervalId = setInterval(() => {
        setTempoRestante((tempoRestante) => {
          if (tempoRestante>0){
            return tempoRestante -1;
          } else {
            return 0;
          }
        })
}, 1000);

      return () => {
        clearInterval(intervalId);
      }
  }, []);


  return (
    <div className="App">
      {/* header */}
      <div className="header">
        <button className="logo">
          <img className="logo" src="/logo.svg" alt="Voltar ao inicio" /> 
        </button>
          <form className="procura">
            <input type="text" placeholder="Pesquisar filmes..." />
            <button> <img src="/search-icon.svg" alt="Icone de pesquisa"/> </button>
          </form>
            <div className="favoritos">
              <button>
              <img src="/bookmark-icon.svg" alt="Favoritos" />
              <p>Favoritos</p>
              </button>
            </div>
            <div className="promocoes">
              <button>
                <img src="/promotion-icon.svg" alt="Promoção" />
                <p>Promoções</p>
              </button>
            </div>
            <div className="perfil">
              <p>Bem vindo, Dina</p>
              <img src="profile.jpg" alt="Foto de perfil" />
            </div>
      </div>

      {/* Principal */}
      <div className="principal">
        <div className="itens">
          <div className={estadoBanner === "clicado" ? "clicado" : tempoRestante === 0 ? "clicado" : "banner" } onClick={() => setBanner("clicado")}>
            <div className="texto1">
              <h2>APROVEITE AGORA</h2>
              <div className="cupom">
                <img src="coupon-icon.svg" alt="#" />
                <span>CUPOM: htmlnaoelinguagem</span>
              </div>
            </div>
            <div className="texto2">
              <h2>FINALIZA EM:</h2>
              <div className="time">
                <img src="/time-icon.svg" alt="#" />
                <span>00:{minutos}:{segundos}</span>
              </div>
            </div>
            <div className="money">
              <img src="money.png" alt="#" />
            </div>
          </div>
          <div className="loja">
          <h2>Top Filmes</h2>
            <div className="topFilmes">
              {Movies.map((movie, index) => (
                index <5 ?  <div className="filmes" style={{backgroundImage: `url(${movie.backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", linearGradient: "(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))", backgroundPosition: "center"}} >
                              <div className="favoritar">
                                <img src={favoritar === false? "./star.svg" : "./golden-star.svg"} alt="favoritar" onClick= {() => setFavotitar(!movie.isStarred)} />
                              </div>
                              <div>
                                <div className="informacoes">
                                  <p>{movie.title}</p>
                                  <div className="notas">
                                    <img src="/golden-star.svg" alt="#"/>
                                    <p>{movie.starsCount}</p>
                                  </div>
                                </div>
                                <div className="comprar">
                                    <p>Sacola</p>
                                    <p>R${movie.price}</p>
                                </div>
                              </div>
                            </div>
                            : ""
                          
              ))}
              </div>
            <h2>Filmes</h2>
            <div className="filmes2">
              <div className="filtros">
                {generos.map((genero) => (
                  <button type="checkbox" className={generoAtual === genero.valor ? "selecionado" : ""} onClick = {() => setGeneroAtual(genero.valor)} >{genero.conteudo}</button>
                ))}
                
              </div> 
              <div className="filmesGerais">
                  {Movies.map((movie)=>(
                    <div className="filmes"  style={{backgroundImage: `url(${movie.backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover",  backgroundPosition: "center"}}>
                    <div className="favoritar">
                      <img src={favoritar === false? "./star.svg" : "./golden-star.svg"} alt="favoritar" onClick= {() => setFavotitar (!movie.isStarred)} />
                    </div>
                    <div>
                      <div className="informacoes">
                        <p>{movie.title}</p>
                        <div className="notas">
                          <img src="/golden-star.svg" alt="#"/>
                          <p>{movie.starsCount}</p>
                        </div>
                      </div>
                      <div className="comprar">
                          <p>Sacola</p>
                          <p>R$ {movie.price}</p>
                      </div>
                    </div>
                  </div>
                 
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div>
        <div className="carrinho">
          <div className="topo">
            <img src="/bag-icon.svg" alt="#"/>
            <h2>Sacola</h2>
          </div>
          <div className="vazio">
            <h2>Sua sacola está vazia</h2>
            <p>Adicione filmes agora</p>
            <img src="person-illustration.svg" alt="Carrinho vazio" />
          </div>
          <div className="desconto">
            <label for="cupomDeDesconto">Insira seu cupom</label>
            <input type="text" placeholder="Cupom de desconto" id="cupmDeDesconto" />
            <button><img src="/coupon-icon.svg" alt="Enviar cupom"/> </button>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
}

export default App;
