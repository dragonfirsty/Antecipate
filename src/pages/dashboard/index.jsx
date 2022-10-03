import { Container } from "./styles";
import Api from "../../services/api";
import Input from "../../components/input";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [change, setChange] = useState(false);
  const [listAntecipate, setListAntecipate] = useState([]);
  console.log("renderize");

  const antecipate = (test) => {
    Api.post("", test)
      .then((data) => {
        setListAntecipate(data);
        setChange(false);
      })
      .catch((err) => console.log(err));
  };
  if (amount > 0 && installments > 0 && mdr > 0 && change === false) {
    setChange(true);
  }
  if (change) {
    const listDetail = { amount, installments, mdr };
    antecipate(listDetail);
  }
  console.log(listAntecipate);
  return (
    <Container>
      <main>
        <div className="form">
          <h1>Simule sua Antecipação</h1>

          <Input
            name="amount"
            label="Informe o valor da venda"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            <Input
              name="installments"
              label="Em quantas parcelas"
              onChange={(e) => setInstallments(e.target.value)}
            />
            <span>Máximo de 12 parcelas</span>
          </div>
          <Input
            name="mdr"
            label="Informe o percentual de MDR"
            onChange={(e) => setMdr(e.target.value)}
          />
        </div>
        <div className="results">
          <h2>Você recebera:</h2>
          <hr />

          <ul>
            {change ? (
              <>
                <li>Amanhã:{listAntecipate.data[1]}</li>
                <li>Em 15 dias:{listAntecipate.data[15]}</li>
                <li>Em 30 dias:{listAntecipate.data[30]}</li>
                <li>Em 90 dias:{listAntecipate.data[90]}</li>
              </>
            ) : (
              <h3>heheheh</h3>
            )}
          </ul>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
