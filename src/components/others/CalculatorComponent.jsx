function CalculatorComponent() {
  const a = 4;
  const b = 10;
  const sum = a + b;
  return <div>
    <h1>{a} + {b} = {sum}</h1>
    <p>Xulosa: {sum % 2 === 0 ? "Juft" : "Toq"}, {sum > 0 ? "Musbat" : sum === 0 ? "Nol" : "Manfiy"}</p>
  </div>

}

export default CalculatorComponent