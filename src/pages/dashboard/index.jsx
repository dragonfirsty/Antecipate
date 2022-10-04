import { Container } from "./styles";
import Api from "../../services/api";
import Input from "../../components/input";
import { useState } from "react";

const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [test, setTest] = useState(true);
  const [listAntecipate, setListAntecipate] = useState([]);

  const antecipate = (data) => {
    Api.post("", data)
      .then((response) => {
        setListAntecipate(Object.values(response.data));
        setTest(false);
      })
      .catch((err) => console.log(err));
  };

  const checkList = () => {
    if (
      amount > 1000 &&
      installments > 0 &&
      mdr > 0 &&
      test &&
      installments < 13
    ) {
      const listDetail = { amount, installments, mdr };

      antecipate(listDetail);
    }
  };
  checkList();

  return (
    <Container>
      <main>
        <div className="form">
          <h1>Simule sua Antecipação</h1>

          <Input
            name="amount"
            label="Informe o valor da venda*"
            onChange={(e) => {
              setAmount(e.target.value);
              setTest(true);
            }}
          />
          <div>
            <Input
              name="installments"
              label="Em quantas parcelas*"
              onChange={(e) => {
                setInstallments(e.target.value);
                setTest(true);
              }}
              span="Máximo de 12 parcelas"
            />
          </div>
          <Input
            name="mdr"
            label="Informe o percentual de MDR*"
            onChange={(e) => {
              setMdr(e.target.value);
              setTest(true);
            }}
          />
        </div>
        <div className="results">
          <h2>Você recebera:</h2>
          <hr />

          {listAntecipate.length > 0 ? (
            <ul>
              <li>
                Amanhã: <strong>R$</strong> {listAntecipate[0].toFixed([2])}
              </li>
              <li>
                Em 15 dias: <strong>R$</strong> {listAntecipate[1].toFixed([2])}
              </li>
              <li>
                Em 30 dias: <strong>R$</strong> {listAntecipate[2].toFixed([2])}
              </li>
              <li>
                Em 90 dias: <strong>R$</strong> {listAntecipate[3].toFixed([2])}
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                Amanhã: <strong>R$</strong> 0,00
              </li>
              <li>
                Em 15 dias: <strong>R$</strong> 0,00
              </li>
              <li>
                Em 30 dias: <strong>R$</strong> 0,00
              </li>
              <li>
                Em 90 dias: <strong>R$</strong> 0,00
              </li>
            </ul>
          )}
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
