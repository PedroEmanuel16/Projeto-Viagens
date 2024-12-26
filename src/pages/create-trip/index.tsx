import { FormEvent, useState } from "react"
import { InvitesGuestModal } from "./invites-guest-modal";
import { useNavigate } from "react-router";
import { GuestModalConfirm } from "./guest-modal-confirm";
import { DestinationAndDateStep } from "./destination-and-date-step";
import { InvitesGuestsStep } from "./invites-guests-step";

export function CreateTrip() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalWhoOpen, setIsGuestModalWhoOpen] = useState(false);
  const [isGuestModalConfirm, setIsGuestModalConfirmOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const navigate = useNavigate();

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

  function openGuestModalConfirm(){
    setIsGuestModalConfirmOpen(true);
  }

  function closeGuestModalConfirm(){
    setIsGuestModalConfirmOpen(false);
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const data: FormData = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();  // Corrigido para chamar toString()
  
    if (!email) {
      return;
    }
  
    if (emailsToInvite.includes(email)) {
      return;
    }
  
    setEmailsToInvite([
      ...emailsToInvite,
      email
    ]);
  
    event.currentTarget.reset();
  }
  
  function removeEmailInvite(emailRemove : String){
    setEmailsToInvite(emailsToInvite.filter((email) => email !== emailRemove))
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    navigate("/trips/1212");
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
        
        <DestinationAndDateStep 
        closeGuestInput={closeGuestInput}
        isGuestInputOpen={isGuestInputOpen}
        openGuestInput={openGuestInput}
        />

        {isGuestInputOpen && (
            <InvitesGuestsStep
            emailsToInvite={emailsToInvite}
            openGuestModalConfirm={openGuestModalConfirm}
            openGuestModalWho={openGuestModalWho}
            />
        )}

        </div>
        
        <p className="text-zinc-500 text-sm">Ao planejar uma viagem pela planner você automaticamente concorda <br /> com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a></p>

        {isGuestModalWhoOpen && (
          <InvitesGuestModal  
          addEmailToInvite={addEmailToInvite}
          closeGuestModalWho={closeGuestModalWho}
          emailsToInvite={emailsToInvite}
          removeEmailInvite={removeEmailInvite}
          />
        )}

        {isGuestModalConfirm && (
            <GuestModalConfirm 
            closeGuestModalConfirm={closeGuestModalConfirm}
            createTrip={createTrip}
            />
        )}
                  
        </div>
      </div>
  )
}