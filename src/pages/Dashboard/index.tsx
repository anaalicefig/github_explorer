import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/29892114?s=460&u=8b5cb2df315a4abe25cbe93612c2e11f6cc0f5b3&v=4"
           alt="Ana Alice"
          />
          <div>
            <strong>anaalicefig/tsnode-deposit</strong>
            <p>Base project to be used in projects using TypeScript with NodeJS and MongoDB</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/29892114?s=460&u=8b5cb2df315a4abe25cbe93612c2e11f6cc0f5b3&v=4"
           alt="Ana Alice"
          />
          <div>
            <strong>anaalicefig/tsnode-deposit</strong>
            <p>Base project to be used in projects using TypeScript with NodeJS and MongoDB</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
