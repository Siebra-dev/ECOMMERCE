import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                <p>Tudo em 10x sem juros!</p>
            </div>
            
            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src='./racing-car.png'/>
                    </a>
                </picture>

                <nav>
                    <a href="Home">Home</a>
                    <a href="Produtos">Produtos</a>
                    <a href="Lançamentos">Lançamentos</a>
                    <a href="Contato">Contato</a>
                </nav>
            </div>
            </div>
        </header>
    )
}