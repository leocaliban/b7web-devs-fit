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

        case 'SET_WORKOUTDAYS':
            return { ...state, workoutDays: action.payload.workoutDays };

        case 'SET_LEVEL':
            return { ...state, level: action.payload.level };
        default:
            break;
    }

    return state;
};