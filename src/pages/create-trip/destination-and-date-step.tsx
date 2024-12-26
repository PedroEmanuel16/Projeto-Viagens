import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

type DestinationAndDateStepProps = {
    isGuestInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationAndDateStep (props: DestinationAndDateStepProps){
    return (
          <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input type="text" disabled={props.isGuestInputOpen} className="bg-transparent outline-none flex-1" placeholder="Para onde você vai?"/>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input type="text" disabled={props.isGuestInputOpen} className="bg-transparent w-52 outline-none" placeholder="Quando?" />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {props.isGuestInputOpen ? (
              <button className="bg-zinc-800 text-zinc-300 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700" onClick={props.closeGuestInput}>
              Alterar local/data
              <Settings2 className="size-5"/>          
              </button>
            ) : (
              <button className="bg-lime-300 text-lime-950  px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400" onClick={props.openGuestInput}>
              Continuar
              <ArrowRight className="size-5"/>          
              </button>
            )}
            
          </div>

    )
}