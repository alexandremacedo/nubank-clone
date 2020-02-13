import React from 'react';
import depositIcon from '~/assets/depositar-icon.png';

import creditCardIcon from '~/assets/credit-card-icon.png';

import pagarPretoBrancoIcon from '~/assets/pagar-preto-branco-icon.png';

import {
  Container, Card, CardHistoryDate, CardHistory, CardHistoryTextContent, CardHistoryContent, CardHistoryImage, CardHistoryDescription, CardHistoryName, CardHistoryAmount,
} from './styles';

export default function Nuconta() {
  return (
    <Container>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={creditCardIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Compra no débito</CardHistoryDescription>
              <CardHistoryName>Produtor Supermercado</CardHistoryName>
              <CardHistoryAmount>R$ 73,56</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>Ontem</CardHistoryDate>
        </CardHistory>
      </Card>

      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={creditCardIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Compra no débito</CardHistoryDescription>
              <CardHistoryName>Estacao Pizzaria</CardHistoryName>
              <CardHistoryAmount>R$ 50,00</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>Ontem</CardHistoryDate>
        </CardHistory>
      </Card>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={creditCardIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Compra no débito</CardHistoryDescription>
              <CardHistoryName>Polo Wear</CardHistoryName>
              <CardHistoryAmount>R$ 75,90</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>Terça</CardHistoryDate>
        </CardHistory>
      </Card>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={depositIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Transferência recebida</CardHistoryDescription>
              <CardHistoryName>Alexandre de Oliveira Macedo</CardHistoryName>
              <CardHistoryAmount>R$ 10.000</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>05 FEV</CardHistoryDate>
        </CardHistory>
      </Card>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={creditCardIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Compra no débito</CardHistoryDescription>
              <CardHistoryName>Lojas Americanas</CardHistoryName>
              <CardHistoryAmount>R$ 21,99</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>05 FEV</CardHistoryDate>
        </CardHistory>
      </Card>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={pagarPretoBrancoIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Pagamento efetuado</CardHistoryDescription>
              <CardHistoryName>MERCADOPAGO.COM REPRESENTACOES LTDA</CardHistoryName>
              <CardHistoryAmount>R$ 139,90</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>27 JAN</CardHistoryDate>
        </CardHistory>
      </Card>
      <Card>
        <CardHistory>
          <CardHistoryContent>
            <CardHistoryImage source={creditCardIcon} />
            <CardHistoryTextContent>
              <CardHistoryDescription>Transferência recebida</CardHistoryDescription>
              <CardHistoryName>Polo Wear</CardHistoryName>
              <CardHistoryAmount>R$ 35,90</CardHistoryAmount>
            </CardHistoryTextContent>
          </CardHistoryContent>
          <CardHistoryDate>25 JAN</CardHistoryDate>
        </CardHistory>
      </Card>
    </Container>
  );
}
