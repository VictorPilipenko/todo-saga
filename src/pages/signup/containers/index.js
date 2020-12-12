import { Background } from './index.styled'

const SignLayout = ({ children }) => {
  return (
    <Background>
      {children}
    </Background>
  );
};

export default SignLayout
