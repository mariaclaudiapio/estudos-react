import { useEffect, useState } from "react";

import { getNewId } from "./services/idService";

import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TestInput";
import DateInput from "./components/DateInput";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";
import { getAgeFrom } from "./helpers/dateHelpers";

export default function App() {
  // const state = useState('Maria Cláudia');
  // const name = state[0];
  // const setName = state[1];
  const [name, setName] = useState("Maria Cláudia");
  const [birthDate, setBirthDate] = useState("1982-06-24");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }

  return (
    <div>
      <Header size="large">React Hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />
        {showTimer && (
          <div className="text-right mt-4">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          id={getNewId()}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          O seu nome é {name} e você possui {getAgeFrom(birthDate)} anos. O seu
          nome é composto de {name.length} caracteres.
        </p>
      </Main>
    </div>
  );
}
