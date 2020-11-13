import { InputText } from '../../../components/atoms';
import { useForm } from '../../../hooks';
import { CSSContainer, CSSCardContainer, CSSTitle, CSSButton } from './styles';

const Login = ({ form, onHandleSubmit }) => {
  const { data, handleChange } = useForm(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(data);
  }

  return (
    <CSSContainer>
      <CSSCardContainer>
        <form onSubmit={handleSubmit}>
          <CSSTitle>Inicia sesión</CSSTitle>
          {
            form.map(({ type, label, placeholder, name }) => (
              <InputText
                key={name}
                type={type}
                label={label}
                placeholder={placeholder}
                value={data[name]}
                name={name}
                onChange={handleChange}
              />
            ))
          }
          <CSSButton>Entrar</CSSButton>
        </form>
      </CSSCardContainer>
    </CSSContainer>
  );
};

export default Login;
