import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import {
  backtoCart,
  payment,
  confirmed,
  startCheckout,
  closeAndFinish
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'

import { AddCartButton, SubmitCartButton } from '../Cart/styles'
import * as S from './styles'

type Props = {
  checkoutStart?: boolean
  priceTotal: number
}

const Checkout = ({ checkoutStart = false, priceTotal = 0 }: Props) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const { isPayment, isConfirmed } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const finish = () => {
    dispatch(closeAndFinish())
  }
  const backCart = () => {
    dispatch(backtoCart())
  }
  const backAdress = () => {
    dispatch(startCheckout())
  }
  const activePayment = () => {
    if (
      form.values.remetente &&
      form.values.endereco &&
      form.values.cidade &&
      form.values.cep &&
      form.values.numero
    ) {
      dispatch(payment())
    }
  }
  const activeConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.anoVencimento &&
      form.values.mesVencimento
    ) {
      dispatch(confirmed())
    }
  }

  const form = useFormik({
    initialValues: {
      remetente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      remetente: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      mesVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      anoVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.remetente,
          address: {
            city: values.cidade,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) {
      return message
    }
    return ''
  }
  return (
    <form onSubmit={form.handleSubmit}>
      <S.DeliverContainer className={checkoutStart ? 'show' : ''}>
        <h2>Entrega</h2>
        <S.Field>
          <label htmlFor="remetente">Quem irá receber</label>
          <input
            type="text"
            required
            id="remetente"
            name="remetente"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.remetente}
          />
          <small>{getErrorMessage('remetente', form.errors.remetente)}</small>
        </S.Field>
        <S.Field>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            required
            id="endereco"
            name="endereco"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.endereco}
          />
          <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
        </S.Field>
        <S.Field>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            required
            id="cidade"
            name="cidade"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cidade}
          />
          <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
        </S.Field>
        <div className="CEPNumber">
          <S.Field>
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask="99.999-99"
              type="text"
              required
              id="cep"
              name="cep"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cep}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </S.Field>
          <S.Field>
            <label htmlFor="numero">Número</label>
            <input
              type="number"
              required
              id="numero"
              name="numero"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.numero}
            />
            <small>{getErrorMessage('numero', form.errors.numero)}</small>
          </S.Field>
        </div>
        <S.Field>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.complemento}
          />
        </S.Field>
        <div className="buttonContainer">
          <AddCartButton
            className={!form.isValid ? 'disabled' : ''}
            type="submit"
            onClick={activePayment}
          >
            Continuar com o pagamento
          </AddCartButton>
          <AddCartButton onClick={backCart}>Voltar ao carrinho</AddCartButton>
        </div>
      </S.DeliverContainer>
      <S.PaymentContainer className={isPayment ? 'show' : ''}>
        <p>Pagamento - Valor a pagar {parseToBrl(priceTotal)}</p>
        <S.Field>
          <label htmlFor="cardName">Nome do cartão</label>
          <input
            type="text"
            required
            id="cardName"
            name="cardName"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardName}
          />
          <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
        </S.Field>
        <div className="fieldContainer">
          <S.Field>
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              mask="9999 9999 9999 9999"
              type="text"
              required
              id="cardNumber"
              name="cardNumber"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
          </S.Field>
          <S.Field>
            <label htmlFor="cvv">CVV</label>
            <InputMask
              mask="999"
              type="text"
              required
              id="cvv"
              name="cvv"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cvv}
            />
            <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
          </S.Field>
        </div>
        <div className="fieldContainer">
          <S.Field>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <InputMask
              mask="99"
              type="text"
              required
              id="mesVencimento"
              name="mesVencimento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.mesVencimento}
            />
            <small>
              {getErrorMessage('mesVencimento', form.errors.mesVencimento)}
            </small>
          </S.Field>
          <S.Field>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <InputMask
              mask="99"
              type="text"
              required
              id="anoVencimento"
              name="anoVencimento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.anoVencimento}
            />
            <small>
              {getErrorMessage('anoVencimento', form.errors.anoVencimento)}
            </small>
          </S.Field>
        </div>
        <div className="buttonContainer">
          <SubmitCartButton
            className={!form.isValid ? 'disabled' : ''}
            type="submit"
            onClick={activeConfirmed}
          >
            Finalizar pagamento
          </SubmitCartButton>
          <AddCartButton onClick={backAdress}>
            Voltar para a edição do endereço
          </AddCartButton>
        </div>
      </S.PaymentContainer>
      <S.ConfirmedContainer className={isConfirmed && isSuccess ? 'show' : ''}>
        <h2>Pedido realizado - {data?.orderId} </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <div className="buttonContainer">
          <AddCartButton type="submit" onClick={finish}>
            Concluir
          </AddCartButton>
        </div>
      </S.ConfirmedContainer>
    </form>
  )
}

export default Checkout
