import React from 'react';
import styled from 'styled-components/native';

const TabArea = styled.SafeAreaView`
    flex-direction: row;
    background-color: #EEEEEE;
`;

const TabItem = styled.View`
    flex: 1;
    height: 65px;
    align-items: center;
`;

const TabRegular = styled.TouchableHighlight`
    align-items: center;
`;

const TabIcon = styled.Image`
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const TabText = styled.Text`

`;

const TabCenter = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    background-color: #3BA237;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border: 5px solid #FFFFFF;
    margin-top: -50px;
`;

const TabCenterIcon = styled.Image`
    width: 40px;
    height: 40px;
`;

export default (props) => {
    return (
        <TabArea>
            {props.items.map(item => (
                <TabItem key={item.route}>
                    {item.type === 'regular' &&
                        <TabRegular
                            underlayColor="transparent"
                            onPress={() => props.navigation.navigate(item.route)}
                        >
                            <>
                                <TabIcon source={item.icon}></TabIcon>
                                <TabText>{item.text}</TabText>
                            </>
                        </TabRegular>
                    }

                    {item.type === 'big' &&

                        <TabCenter
                            underlayColor="#00FF00"
                            onPress={() => props.navigation.navigate(item.route)}
                        >
                            <TabCenterIcon source={item.icon}></TabCenterIcon>
                        </TabCenter>
                    }
                </TabItem>
            ))}
        </TabArea>
    );
};