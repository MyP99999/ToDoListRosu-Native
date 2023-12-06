import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodosScreen from './Screens/TodosScreen';
import AddTodoScreen from './Screens/AddTodoScreen';
import EditTodoScreen from './Screens/EditTodoScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: ({ current }) => {
                    return {
                        cardStyle: {
                            opacity: current.progress,
                        },
                    };
                },
            }}
        >
            <>
                <Stack.Group>
                    <Stack.Screen name="Todo" component={TodosScreen} />
                    <Stack.Screen name="AddTodo" component={AddTodoScreen} />
                    <Stack.Screen name="EditTodo" component={EditTodoScreen} />
                </Stack.Group>
            </>
        </Stack.Navigator>
    )
}

export default StackNavigator