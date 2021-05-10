
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


    </div>
  );
}

export default App;
