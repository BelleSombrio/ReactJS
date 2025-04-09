import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-center items-center w-[1904px] h-l '>

        <header className=' bg-linear-to-r from-amber-200 to-orange-300 h-20 mb-8 flex justify-between  w-full'>

          <div className=" ">
            <p>🍰</p>
          </div>
          <nav className="">
            <ul>
              <li className=''>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>

        </header>

        <div className='flex flex-col justify-center items-center '>
          <h1 className='mb-8 text-amber-500'>Bem-vindo a Doceria RedCake!</h1>
          <p className='mb-8 '>Bem-vindo à RedCake, a doceria que transforma momentos simples em grandes celebrações de sabor. Aqui, cada receita é criada com muito carinho e ingredientes selecionados, oferecendo desde os doces tradicionais que aquecem o coração até as novidades mais criativas para encantar seu dia.

            Em nosso cardápio, você encontra uma variedade de bolos, tortas, cupcakes e doces personalizados, todos com aquele toque especial que só a RedCake pode oferecer. Seja para um café da tarde, uma festa de aniversário ou aquele evento único, nossos produtos são feitos para tornar qualquer ocasião ainda mais doce.

            Na RedCake, a qualidade e o sabor falam por si só. Venha se deliciar e descobrir como um simples pedaço de bolo pode transformar o seu momento em algo inesquecível!</p>
        </div>

        <div className='border-b-4 border-amber-200 w-full mb-8'></div>

        <div>
          <h2 className="text-5xl mb-8 text-amber-500 flex flex-col justify-center items-center">Algumas opções de compra</h2>

          <div class="grid grid-cols-3 grid-rows-3 gap-60 h-[800px]">

            <div className='border-2 border-dashed w-52 flex flex-col justify-center items-center'>
              <img src="https://img.cdndsgni.com/preview/11682374.jpg" alt="" className="w-52 h-52" />
              <h3 className='text-orange-300'>Bolo de Morango</h3>
              <button className='bg-orange-200 w-32 text-gray-700 border-2 border-orange-300'>Comprar</button>
            </div>

            <div className='border-2 border-dashed w-52 flex flex-col justify-center items-center'>
              <img src="https://img.freepik.com/fotos-premium/um-prato-com-uma-fatia-de-delicioso-bolo-de-chocolate-caseiro-na-mesa_763111-11411.jpg" alt="" className="w-52 h-52" />
              <h3 className='text-orange-300'>Bolo de Chocolate</h3>
              <button className='bg-orange-200 w-32  text-gray-700 border-2 border-orange-300' >Comprar</button>
            </div>

            <div className='border-2 border-dashed w-52 flex flex-col justify-center items-center'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5f2EKLGQBq4KV0HpS-MxVmsuBPxRlaJyHodGj3nQw-vs7dOrIbj4vzPscGnTE3N_ZoQ&usqp=CAU" alt="" className="w-52 h-52" />
              <h3 className='text-orange-300'>Bolo de Creme</h3>
              <button className='bg-orange-200 w-32  text-gray-700 border-2 border-orange-300'>Comprar</button>
            </div>

          </div>
        </div>
        <footer className='bg-orange-400 w-full'>
<p>AAAAAAAAA</p>
        </footer>
      </div>

    </>
  )
}

export default App
