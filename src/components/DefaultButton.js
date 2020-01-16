import styled from 'styled-components/native';

export default styled.TouchableHighlight`
    width: ${props => props.width || 'auto'};
    background-color: ${props => props.bgcolor || '#EEEEEE'};
    padding: 10px 20px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-top: ${props => props.marginTop || '0'};
`;