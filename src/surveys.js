export const surveyJson = {
    pages: [{
        elements: [{
            type: "html",
            html: "<h4>Thank you!</h4>Now, please answer a few questions about the game."
        }]
    }, 
    {
        elements: [{
            name: "market_needs",
            title: "Do you think the market needs more wood or more stone?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Much more wood than stone" },
                { value: 4, text: "Somewhat more wood than stone" },
                { value: 3, text: "Equal amounts of wood and stone" },
                { value: 2, text: "Somewhat more stone than wood" },
                { value: 1, text: "Much more stone than wood" }
            ],
            isRequired: true
        },
        {
            name: "market_value",
            title: "Which is more valuable to own, wood or stone?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Wood is much higher value than stone" },
                { value: 4, text: "Wood is somewhat higher value than stone" },
                { value: 3, text: "Wood and stone are of equal value" },
                { value: 2, text: "Stone is somewhat higher value than wood" },
                { value: 1, text: "Stone is much higher value than wood" }
            ],
            isRequired: true
        },
        {
            name: "learning_beliefs",
            title: "How well did you figure out how this world worked and what was best for you to do?",
            description: "(1 = I did not understand at all, 10 = I understood it completely)",
            type: "rating",
            rateMin: 1,
            rateMax: 10,
            isRequired: true
        }]
    }, 
    {
        elements: [{
            name: "performance_beliefs",
            title: "How do you think you did relative to other players?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Much better than other players" },
                { value: 4, text: "Somewhat better than other players" },
                { value: 3, text: "About the same as other players" },
                { value: 2, text: "Somewhat worse than other players" },
                { value: 1, text: "Much worse than other players" }
            ],
            isRequired: true
        },
        {
            name: "enjoyment",
            title: "How enjoyable was the task?",
            description: "(1 = Not enjoyable at all, 10 = Extremely enjoyable)",
            type: "rating",
            rateMin: 1,
            rateMax: 10,
            isRequired: true
        },
        {
            name: "frustration",
            title: "How frustrating was the task?",
            description: "(1 = Not frustrating at all, 10 = Extremely frustrating)",
            type: "rating",
            rateMin: 1,
            rateMax: 10,
            isRequired: true
        }, {
            name: "enjoy_frustrate_free_response",
            title: "What made it enjoyable or frustrating?",
            type: "text"
        }],
        // triggers: [{
        //     type: "complete",
        //     expression: "{enjoyment} > 0"
        // }]
    },
    {
        elements: [{
            type: "html",
            html: "Here are some statements that have been made about the role of government. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_1",
            title: "The government should guarantee everyone a minimum standard of living.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_2",
            title: "The government should provide a job for everyone who wants one.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about incomes. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_3",
            title: "There is an incentive for individual effort only if differences in income are large enough.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_4",
            title: "It is all right if businessmen make good profits because everyone benefits in the end.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about what is just and unjust. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_5",
            title: "There is no point arguing about social justice since it is impossible to change things.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_6",
            title: "The way things are these days, it is hard to know what is just anymore.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about wealth and income. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_7",
            title: "People are entitled to keep what they have earned, even if this means some people will be wealthier than others.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_8",
            title: "People are entitled to pass on their wealth to their children.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },
        {
            type: "html",
            html: "Please indicate how much you agree or disagree with the following statements about your country and society."
        },
        {
            type: "panel",
            name: "SJS",
            elements: [{
                name: "sjs_1",
                title: "In general, I find society to be fair.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },
            {
                name: "sjs_2",
                title: "In general, my country’s political system operates as it should.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },
            {
                name: "sjs_3",
                title: "Everyone in my country has a fair shot at wealth and happiness.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },{
                name: "sjs_4",
                title: "My country’s society is set up so that people usually get what they deserve.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            }],
            areQuestionsRandomized: true,
            questionsOrder: "random"
        }]
    // triggers: [{
    //     type: "complete",
    //     expression: "{enjoyment} > 0"
    // }]
    },
    {
        elements: [{
            type: "html",
            html: "There are many kinds of groups in the world: gender, ethnic and religious groups, nationalities, political factions. How much do you support the ideas about groups in general?"
        },
        {
            type: "panel",
            name: "SDO",
            elements: [{
                name: "sdo_1",
                title: "Some groups of people are simply inferior to other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            },
            {
                name: "sdo_2",
                title: "In getting what you want, it is sometimes necessary to use force against other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            },
            {
                name: "sdo_3",
                title: "It’s OK if some groups have more of a chance in life than others.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_4",
                title: "To get ahead in life, it is sometimes necessary to step on other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_5",
                title: "If certain groups stayed in their place, we would have fewer problems.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_6",
                title: "It’s probably a good thing that certain groups are at the top and other groups are at the bottom.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_7",
                title: "Inferior groups should stay in their place.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_8",
                title: "Sometimes other groups must be kept in their place.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_9",
                title: "It would be good if groups could be equal.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_10",
                title: "Group equality should be our ideal.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_11",
                title: "All groups should be given an equal chance in life.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_12",
                title: "We should do what we can to equalize conditions for different groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_13",
                title: "Increased social equality.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_14",
                title: "We would have fewer problems if we treated more people equally.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_15",
                title: "We should strive to make incomes as equal as possible.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_16",
                title: "No one group should dominate in society.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }],
            areQuestionsRandomized: true,
            questionsOrder: "random"
        }
    ]
} 
    ],
    // goNextPageAutomatic: true,
    showQuestionNumbers: "off",
    pageNextText: "Go to the next page",
    completeText: "Submit",
    showPrevButton: false,
    firstPageIsStarted: true,
    startSurveyText: "Start",
};

export const surveyJsonMarket = {
    pages: [{
        elements: [{
            type: "html",
            html: "<h4>Thank you!</h4>Now, please answer a few questions about the game."
        }]
    }, {
        elements: [{
            name: "purple_skill",
            title: "Are purple aliens better at collecting wood or stone?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Much better at collecting wood than stone" },
                { value: 4, text: "Somewhat better at collecting wood than stone" },
                { value: 3, text: "Equally good at collecting wood and stone" },
                { value: 2, text: "Somewhat better at collecting stone than wood" },
                { value: 1, text: "Much better at collecting stone than wood" }
            ],
            isRequired: true
        },
        {
            name: "gold_skill",
            title: "Are gold aliens better at collecting wood or stone?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Much better at collecting wood than stone" },
                { value: 4, text: "Somewhat better at collecting wood than stone" },
                { value: 3, text: "Equally good at collecting wood and stone" },
                { value: 2, text: "Somewhat better at collecting stone than wood" },
                { value: 1, text: "Much better at collecting stone than wood" }
            ],
            isRequired: true
        },
        {
            name: "purple_wood_ratio",
            title: "What percent of purple aliens are better at collecting wood?",
            description: "Choose a value between 0% and 100%",
            type: "rating",
            rateMin: 0,
            rateMax: 100,
            rateStep: 10,
            isRequired: true
        },
        {
            name: "purple_stone_ratio",
            title: "What percent of purple aliens are better at collecting stone?",
            description: "Choose a value between 0% and 100%",
            type: "rating",
            rateMin: 0,
            rateMax: 100,
            rateStep: 10,
            isRequired: true
        },
        {
            name: "gold_wood_ratio",
            title: "What percent of gold aliens are better at collecting wood?",
            description: "Choose a value between 0% and 100%",
            type: "rating",
            rateMin: 0,
            rateMax: 100,
            rateStep: 10,
            isRequired: true
        },
        {
            name: "gold_stone_ratio",
            title: "What percent of gold aliens are better at collecting stone?",
            description: "Choose a value between 0% and 100%",
            type: "rating",
            rateMin: 0,
            rateMax: 100,
            rateStep: 10,
            isRequired: true
        },
        {
            name: "fairness",
            title: "There are a few conditions in this study. In some conditions, the world is more fair for the aliens, and in some conditions it is less fair for the aliens. How fair do you think this world was for the aliens?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Very fair" },
                { value: 4, text: "Somewhat fair" },
                { value: 3, text: "Neither fair nor unfair" },
                { value: 2, text: "Somewhat unfair" },
                { value: 1, text: "Very unfair" }
            ],
            isRequired: true
        }]
    }, {
        elements: [{
            type: "html",
            html: "Here are some statements that have been made about the role of government. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_1",
            title: "The government should guarantee everyone a minimum standard of living.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_2",
            title: "The government should provide a job for everyone who wants one.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about incomes. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_3",
            title: "There is an incentive for individual effort only if differences in income are large enough.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_4",
            title: "It is all right if businessmen make good profits because everyone benefits in the end.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about what is just and unjust. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_5",
            title: "There is no point arguing about social justice since it is impossible to change things.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_6",
            title: "The way things are these days, it is hard to know what is just anymore.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            type: "html",
            html: "Here are some statements that have been made about wealth and income. Please indicate how much you agree or disagree with each statement."
        },{
            name: "bsjo_7",
            title: "People are entitled to keep what they have earned, even if this means some people will be wealthier than others.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },{
            name: "bsjo_8",
            title: "People are entitled to pass on their wealth to their children.",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Strongly agree" },
                { value: 4, text: "Somewhat agree" },
                { value: 3, text: "Neither agree nor disagree" },
                { value: 2, text: "Somewhat disagree" },
                { value: 1, text: "Strongly disagree" }
            ],
            isRequired: true
        },
        {
            type: "html",
            html: "Please indicate how much you agree or disagree with the following statements about your country and society."
        },
        {
            type: "panel",
            name: "SJS",
            elements: [{
                name: "sjs_1",
                title: "In general, I find society to be fair.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },
            {
                name: "sjs_2",
                title: "In general, my country’s political system operates as it should.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },
            {
                name: "sjs_3",
                title: "Everyone in my country has a fair shot at wealth and happiness.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            },{
                name: "sjs_4",
                title: "My country’s society is set up so that people usually get what they deserve.",
                type: "radiogroup",
                choices: [
                    { value: 5, text: "Strongly agree" },
                    { value: 4, text: "Somewhat agree" },
                    { value: 3, text: "Neither agree nor disagree" },
                    { value: 2, text: "Somewhat disagree" },
                    { value: 1, text: "Strongly disagree" }
                ],
                isRequired: true
            }],
            areQuestionsRandomized: true,
            questionsOrder: "random"
        }]
    // triggers: [{
    //     type: "complete",
    //     expression: "{enjoyment} > 0"
    // }]
    },{
        elements: [{
            type: "html",
            html: "There are many kinds of groups in the world: gender, ethnic and religious groups, nationalities, political factions. How much do you support the ideas about groups in general?"
        },
        {
            type: "panel",
            name: "SDO",
            elements: [{
                name: "sdo_1",
                title: "Some groups of people are simply inferior to other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            },
            {
                name: "sdo_2",
                title: "In getting what you want, it is sometimes necessary to use force against other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            },
            {
                name: "sdo_3",
                title: "It’s OK if some groups have more of a chance in life than others.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_4",
                title: "To get ahead in life, it is sometimes necessary to step on other groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_5",
                title: "If certain groups stayed in their place, we would have fewer problems.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_6",
                title: "It’s probably a good thing that certain groups are at the top and other groups are at the bottom.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_7",
                title: "Inferior groups should stay in their place.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_8",
                title: "Sometimes other groups must be kept in their place.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_9",
                title: "It would be good if groups could be equal.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_10",
                title: "Group equality should be our ideal.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_11",
                title: "All groups should be given an equal chance in life.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_12",
                title: "We should do what we can to equalize conditions for different groups.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_13",
                title: "Increased social equality.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_14",
                title: "We would have fewer problems if we treated more people equally.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_15",
                title: "We should strive to make incomes as equal as possible.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }, {
                name: "sdo_16",
                title: "No one group should dominate in society.",
                description: "(1 = Extremely oppose, 10 = Extremely favor)",
                type: "rating",
                rateMin: 1,
                rateMax: 10,
                isRequired: true
            }],
            areQuestionsRandomized: true,
            questionsOrder: "random"
        }],
        
    }],
    // goNextPageAutomatic: true,
    showQuestionNumbers: "off",
    pageNextText: "Go to the next page",
    completeText: "Complete survey",
    showPrevButton: false,
    firstPageIsStarted: true,
    startSurveyText: "Start",
}; 

export const themeJson = {
    "themeName": "borderless",
    "colorPalette": "light",
    "isPanelless": false,
    "cssVariables": {
        "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dark": "rgba(255, 246, 241, 1)",
        "--sjs-general-backcolor-dim": "#EEDDCC",
        "--sjs-general-backcolor-dim-light": "rgba(255, 245, 238, 1)",
        "--sjs-general-backcolor-dim-dark": "rgba(223, 233, 250, 1)",
        "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-forecolor-light": "rgba(80, 80, 80, 1)",
        "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-dim-forecolor-light": "rgba(133, 154, 186, 1)",
        "--sjs-primary-backcolor": "#665544",
        "--sjs-primary-backcolor-light": "rgba(NaN, NaN, NaN, 0.1)",
        "--sjs-primary-backcolor-dark": "rgba(NaN, NaN, NaN, 1)",
        "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-base-unit": "8px",
        "--sjs-corner-radius": "20px",
        "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
        "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
        "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-shadow-small": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
        "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
        "--sjs-shadow-inner": "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
        "--sjs-border-light": "rgba(220, 229, 241, 1)",
        "--sjs-border-default": "rgba(229, 200, 179, 1)",
        "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
        "--sjs-special-red": "rgba(229, 10, 62, 1)",
        "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
        "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-green": "rgba(25, 179, 148, 1)",
        "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
        "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-blue": "rgba(67, 127, 217, 1)",
        "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
        "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
        "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-article-font-xx-large-fontSize": "64px",
        "--sjs-article-font-xx-large-textDecoration": "none",
        "--sjs-article-font-xx-large-fontWeight": "700",
        "--sjs-article-font-xx-large-fontStyle": "normal",
        "--sjs-article-font-xx-large-fontStretch": "normal",
        "--sjs-article-font-xx-large-letterSpacing": "0",
        "--sjs-article-font-xx-large-lineHeight": "64px",
        "--sjs-article-font-xx-large-paragraphIndent": "0px",
        "--sjs-article-font-xx-large-textCase": "none",
        "--sjs-article-font-x-large-fontSize": "48px",
        "--sjs-article-font-x-large-textDecoration": "none",
        "--sjs-article-font-x-large-fontWeight": "700",
        "--sjs-article-font-x-large-fontStyle": "normal",
        "--sjs-article-font-x-large-fontStretch": "normal",
        "--sjs-article-font-x-large-letterSpacing": "0",
        "--sjs-article-font-x-large-lineHeight": "56px",
        "--sjs-article-font-x-large-paragraphIndent": "0px",
        "--sjs-article-font-x-large-textCase": "none",
        "--sjs-article-font-large-fontSize": "32px",
        "--sjs-article-font-large-textDecoration": "none",
        "--sjs-article-font-large-fontWeight": "700",
        "--sjs-article-font-large-fontStyle": "normal",
        "--sjs-article-font-large-fontStretch": "normal",
        "--sjs-article-font-large-letterSpacing": "0",
        "--sjs-article-font-large-lineHeight": "40px",
        "--sjs-article-font-large-paragraphIndent": "0px",
        "--sjs-article-font-large-textCase": "none",
        "--sjs-article-font-medium-fontSize": "24px",
        "--sjs-article-font-medium-textDecoration": "none",
        "--sjs-article-font-medium-fontWeight": "700",
        "--sjs-article-font-medium-fontStyle": "normal",
        "--sjs-article-font-medium-fontStretch": "normal",
        "--sjs-article-font-medium-letterSpacing": "0",
        "--sjs-article-font-medium-lineHeight": "32px",
        "--sjs-article-font-medium-paragraphIndent": "0px",
        "--sjs-article-font-medium-textCase": "none",
        "--sjs-article-font-default-fontSize": "16px",
        "--sjs-article-font-default-textDecoration": "none",
        "--sjs-article-font-default-fontWeight": "400",
        "--sjs-article-font-default-fontStyle": "normal",
        "--sjs-article-font-default-fontStretch": "normal",
        "--sjs-article-font-default-letterSpacing": "0",
        "--sjs-article-font-default-lineHeight": "28px",
        "--sjs-article-font-default-paragraphIndent": "0px",
        "--sjs-article-font-default-textCase": "none",
        "--sjs-question-background": "rgba(255, 255, 255, 0.33)",
        "--sjs-editor-background": "rgba(238, 245, 255, 1)",
        "--sjs-editorpanel-backcolor": "rgba(255, 245, 238, 1)",
        "--sjs-editorpanel-hovercolor": "rgba(153, 119, 85, 1)",
        "--sjs-editorpanel-cornerRadius": "4px"
    },
    "backgroundImageFit": "cover",
    "backgroundImageAttachment": "scroll"
}