import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X } from "lucide-react"
import { useState } from "react"

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalWhoOpen, setIsGuestModalWhoOpen] = useState(false)

  function openGuestInput(){
    setIsGuestInputOpen(true)
  }

  function closeGuestInput(){
    setIsGuestInputOpen(false)
  }

  function openGuestModalWho(){
    setIsGuestModalWhoOpen(true)
  }

  function closeGuestModalWho(){
    setIsGuestModalWhoOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full text-center px-6 space-y-5 bg-pattern bg-no-repeat bg-center">
        <div className="flex flex-col items-center gap-2">
          <img src="logo.png" alt="planner logo" className=""/>
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua primeira viagem
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input type="text" disabled={isGuestInputOpen} className="bg-transparent outline-none flex-1" placeholder="Para onde você vai?"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input type="text" disabled={isGuestInputOpen} className="bg-transparent w-52 outline-none" placeholder="Quando?" />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestInputOpen ? (
              <button className="bg-zinc-800 text-zinc-300 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700" onClick={closeGuestInput}>
              Alterar local/data
              <Settings2 className="size-5"/>          
              </button>
            ) : (
              <button className="bg-lime-300 text-lime-950  px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400" onClick={openGuestInput}>
              Continuar
              <ArrowRight className="size-5"/>          
              </button>
            )}
            
          </div>

          {isGuestInputOpen && (
            <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button onClick={openGuestModalWho} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                <span className="flex-1 text-left text-zinc-400">Quem estará na viagem?</span>
              </button>

              <div className="w-px h-6 bg-zinc-800"></div>


          
              <button className="bg-lime-300 text-lime-950  px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
              Confirmar Viagem
              <ArrowRight className="size-5"/>          
              </button>
            
          </div>
          )}
        </div>
        
        <p className="text-zinc-500 text-sm">Ao planejar uma viagem pela planner você automaticamente concorda <br /> com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a></p>

        {isGuestModalWhoOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
              <div className="flex items-center justify-between">
                <h2>Selecionar convidados</h2>
                <button onClick={closeGuestModalWho}>
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
    
  )
}

