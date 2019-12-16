const initialState = {
    name: '',
    level: '',
    workoutDays: [],
    myWorkouts: [],
    lastWorkout: '',
    dailyProgress: ['2019-12-13', '2019-12-12']
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };

        default:
            break;
    }

    return state;
};