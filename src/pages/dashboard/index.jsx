import { Container } from "./styles";
import Api from "../../services/api";
import Input from "../../components/input";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [change, setChange] = useState(true);
  const [listAntecipate, setListAntecipate] = useState([]);
  console.log("renderize");

  const antecipate = (test) => {
    Api.post("", test)
      .then((data) => {
        setListAntecipate(data);
        setChange(false)
      })
      .catch((err) => console.log(err));
  };

  if (amount > 0 && installments > 0 && mdr > 0 && change) {
    const listDetail = { amount, installments, mdr };
    antecipate(listDetail);
  }

  return (
    <Container>
      <main>
        <div className="form">
          <h1>Simule sua Antecipação</h1>

          <Input
            name="amount"
            label="Informe o valor da venda*"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            <Input
              name="installments"
              label="Em quantas parcelas*"
              onChange={(e) => setInstallments(e.target.value)}
              span="Máximo de 12 parcelas"
            />
          </div>
          <Input
            name="mdr"
            label="Informe o percentual de MDR*"
            onChange={(e) => setMdr(e.target.value)}
          />
        </div>
        <div className="results">
          <h2>Você recebera:</h2>
          <hr />

          {listAntecipate.length > 0 ? (
            <ul>
              <li>Amanhã: <strong>R$</strong> {listAntecipate.data[1]}</li>
              <li>Em 15 dias: <strong>R$</strong> {listAntecipate.data[15]}</li>
              <li>Em 30 dias: <strong>R$</strong> {listAntecipate.data[30]}</li>
              <li>Em 90 dias: <strong>R$</strong> {listAntecipate.data[90]}</li>
            </ul>
          ) : (
            <ul>
              <li>Amanhã: <strong>R$</strong> 0,00</li>
              <li>Em 15 dias: <strong>R$</strong> 0,00</li>
              <li>Em 30 dias: <strong>R$</strong> 0,00</li>
              <li>Em 90 dias: <strong>R$</strong> 0,00</li>
            </ul>
          )}
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
