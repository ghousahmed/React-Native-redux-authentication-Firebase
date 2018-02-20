import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    quizDetail: {
        quizName: "JAVASCRIPT QUIZ",
        totalQuestion: 5,
        totalMarks: 100,
        passingMarks: 40,
        totalTime: "10 Min"
    },
    questions: [
        {

            "question": "This set of Javascript Multiple Choice Questions & Answers (MCQs) focuses on “Object Attributes and Serialization”.",
            "option1": "String",
            "option2": "Object",
            "option3": "Serialized Object",
            "answer": "2"
        },
        {

            "question": "The object has three object attributes namely",
            "option1": "Class, parameters, object’s extensible flag",
            "option2": "Prototype, class, object’s extensible flag",
            "option3": "Prototype, class, objects’ parameters",
            "answer": "2"
        },
        {

            "question": "In the above snippet, firstname and surname are",
            "option1": "properties",
            "option2": " property values",
            "option3": " property names",
            "answer": "3"
        },
        {

            "question": "A linkage of series of prototype objects is called as",
            "option1": "prototype stack",
            "option2": "prototype chain",
            "option3": "prototype class",
            "answer": "2"
        },
        {

            "question": "In the above syntax, the datatype within the square brackets must be",
            "option1": " A String",
            "option2": "An object",
            "option3": "An integer",
            "answer": "1"
        },
        {

            "question": "The basic purpose of the toLocaleString() is to",
            "option1": "return a localised object representation",
            "option2": "return a parsed string",
            "option3": "return a localized string representation of the object",
            "answer": "3"
        },
        {

            "question": " Do functions in JavaScript necessarily return a value ",
            "option1": "It is mandatory",
            "option2": "Not necessary",
            "option3": "Few functions return values by default",
            "answer": "3"
        },
        {

            "question": "If you have a function f and an object o, you can define a method named m of o with",
            "option1": " o.m=m.f;",
            "option2": " o.m=f;",
            "option3": "o=f.m;",
            "answer": "1"
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.HTML:
            return ({
                ...state,
                userName: action.payload.name
            })
        case ActionTypes.CSS:
            return ({
                ...state,
                email: action.payload.email
            })

        default:
            return state;
    }

}