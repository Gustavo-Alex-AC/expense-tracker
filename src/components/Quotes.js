import React, { useState, useEffect } from "react";

const quotesArray = [
  '"Você é mais forte do que pensa e capaz de superar qualquer desafio. Não hesite em buscar ajuda e compartilhar suas emoções."',
  '"Cada desafio que enfrentamos nos faz mais resilientes. Você não está sozinho; há pessoas dispostas a ajudar e ouvir."',
  '"Sua jornada é única e valiosa. O mundo precisa da sua voz e da sua presença. Não desista, porque cada dia é uma oportunidade para recomeçar."',
  '"Se hoje está difícil, lembre-se de que amanhã é uma nova página em branco. As coisas podem melhorar, e a esperança sempre existe."',
  '"Você é importante, querido e digno de amor. Há pessoas ao seu redor dispostas a apoiar e compreender. Não hesite em alcançar alguém."',
  '"A vida é cheia de altos e baixos, mas cada desafio superado torna você mais forte. Não tenha medo de pedir ajuda; é um sinal de coragem, não fraqueza."',
  '"Seu propósito na vida é único, e o mundo seria menos brilhante sem você. Não deixe que as nuvens temporárias ofusquem sua luz permanente."',
  '"Às vezes, a dor é intensa, mas há tratamentos e pessoas dispostas a ajudar. Sua saúde mental é tão importante quanto sua saúde física."',
  '"A jornada pode ser difícil, mas cada passo que você dá em direção à cura é uma vitória. Valorize seu progresso, por menor que pareça."',
  '"Você merece viver uma vida plena e feliz. Não deixe que as circunstâncias difíceis definam seu destino. A mudança é possível."',
];

function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState(quotesArray[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get a random quote from the array
      const randomQuote =
        quotesArray[Math.floor(Math.random() * quotesArray.length)];

      // Update the current quote
      setCurrentQuote(randomQuote);
    }, 20000); // Update every 60 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <p className="frase">{currentQuote}</p>
    </div>
  );
}

export default QuoteDisplay;
