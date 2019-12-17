import styled from 'styled-components/native';

export default styled.SafeAreaView`
    flex: 1;
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-items: center;
    background-color: #FFFFFF;
    margin-left: 30px;
    margin-right: 30px;
`;