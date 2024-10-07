const model = {
    app: {
        currentPage: 'homePage',
        loggedInUser: 1,
    },
    input: {
        login: {
            username: '',
            password: '',
        },
        createUser: {
            username: '',
            email: '',
            city: '',
            password: '',
            repeatPsw: ''
        },
        filter: {
            categoryId: -1,
            difficulty: 1
        },
        uploadActivity: {
            activityImg: '',
            title: '',
            difficulty: 0,
            time: 0,
            categoryId: 0,
            equipment: [],

        }
    },
    data: {
        users: [{
            username: 'børre',
            userId: 0
        }],
        activitys: [{
            activityName: 'Fiske',
            activityId: 0,
            imgSrc: 'fishing.jpg',
            categoryId: 2,
            difficulty: 4,
            estTime: 60,
            equipment: [],
            description: ''
        },
        {
            activityName: 'Klatring',
            activityId: 1,
            imgSrc: 'climbing.jpg',
            categoryId: 1,
            difficulty: 7,
            estTime: 120,
            equipment: [],
            description: ''
        }
       ], 
       categories: [{
        categoryId: 1,
        categoryName: 'Dans'
       },
       {
        categoryId: 2,
        categoryName: 'Cardio'
       },
       {
        categoryId: 3,
        categoryName: 'Friluft'
       }],
       reviews: [{
        reviewerId: 1,
        activityId: 0,
        rating: 5.7
        },
        {
            reviewerId: 1,
            activityId: 1,
            rating: 7.7
        },
        {
            reviewerId: 1,
            activityId: 2,
            rating: 6.3
        },
     ],
     equipment: [{
        equipmentId: 1,
        equipmentName: 'Vekter'
     },
     {
        equipmentId: 2,
        equipmentName: 'Klatreutstyr'
     },
    ]
    }

}