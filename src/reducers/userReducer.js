const initialState = {
    name: '',
    level: '',
    workoutDays: [],
    myWorkouts: [],
    lastWorkout: '',
    dailyProgress: ['2020-01-01', '2020-01-09']
};

export default (state = initialState, action) => {

    let myWorkouts = [...state.myWorkouts];
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };

        case 'SET_WORKOUTDAYS':
            return { ...state, workoutDays: action.payload.workoutDays };

        case 'SET_LEVEL':
            return { ...state, level: action.payload.level };

        case 'ADD_WORKOUT':
            if (myWorkouts.findIndex(i => i.id === action.payload.workout.id) < 0) {
                myWorkouts.push(action.payload.workout);
            }
            return { ...state, myWorkouts };
        case 'DELETE_WORKOUT':
            myWorkouts = myWorkouts.filter(i => i.id !== action.payload.workout.id);
            return { ...state, myWorkouts };
        default:
            break;
    }

    return state;
};