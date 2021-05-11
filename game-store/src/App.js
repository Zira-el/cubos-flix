
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <button>
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

      <div className="principal">
        <div className="itens">
          <div className="banner">
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
                <span>00:04:52</span>
              </div>
              
            </div>
            <div className="money">
              <img src="money.png" alt="#" />
            </div>
          </div>
        </div>
        <div className="carrinho">

        </div>
      </div>
    </div>
  );
}

export default App;
