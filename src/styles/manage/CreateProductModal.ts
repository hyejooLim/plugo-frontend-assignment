import styled from 'styled-components';
import { Button, Form, Input, Select } from 'antd';

export const StyledForm = styled(Form)`
  padding: 30px;

  .input_form {
    margin-bottom: 20px;
    text-align: left;

    label {
      font-size: 16px;
    }
  }

  .price {
    width: 184px;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  height: 38px;
  margin-top: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
`;

export const StyledSelect = styled(Select)`
  width: 180px;
  margin-top: 5px;
`;

export const CreateButton = styled(Button)`
  width: 150px;
  height: 46px;
  margin-top: 20px;
  font-size: 18px;
  background-color: #9abaff;
  color: #fff;

  &:hover {
    background-color: #b1c8f9;
    color: #fff !important;
    border-color: inherit !important;
  }
`;
