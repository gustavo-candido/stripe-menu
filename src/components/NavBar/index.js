import React from 'react';

import { Products, Company, Developers, } from '../Content';
import { DropdownProvider, DropdownOption } from '../Dropdown';
import { Container, DropdownStyles } from './styles';
import { DropdownRoot } from '../Dropdown/Root';

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products} 
                backgroundHeight={286}
              />
            </li>

            <li>
            <DropdownOption
                name="Desenvolvedores"
                content={Developers} 
                backgroundHeight={167}
            />
            </li>

            <li>
              <DropdownOption
                name="Empresa"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default NavBar;