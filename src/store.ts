export const store = {
    getState: function () {
        return this.state
    },
    state: {
        header: {
          menuItems: [
              {type: 'title', title: 'hero', link: 'hero', },
              {type: 'title', title: 'skills', link: 'skills', },
              {type: 'title', title: 'slider', link: 'slider', },
              {type: 'title', title: 'portfolio', link: 'portfolio', },
              {type: 'title', title: 'about', link: 'about', },
              {type: 'title', title: 'availability', link: 'availability', },
              {type: 'title', title: 'contact', link: 'contact', },
              {type: 'icon', class: 'fa-sharp fa-solid fa-house', link: 'hero', },
              ]
        },
        skills: {
            skillsList: [
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
                {imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', skillName: 'JS', description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.'},
            ]
        },
        hero: {
            greeting: "Hi there",
            name: "I am Igor Akeljev",
            stack: ["A Frontend developer.", "React Redux Typescript", 'and more...'],
        },
        accordion: {
            accordionItems: [
                {
                    title: "About me",
                    value: [
                        'Hello, I am a person who has a strong passion for programming that inspires me everyday.',
                        'I have experience in creating SPA with React/Redux/ TypeScript in team.',
                        'Now I improve my skills in this direction and expanding them with new technologies like Storybook and tests',
                        'I spend my leisure time on Codewars or by improving english skills.',
                        'Open to your suggestions.'
                    ]
                },
                {
                    title: "My plans",
                    value: ['w  ojfniowqiefnkwq', 'qwklfnqowfkqwe']
                },
            ],
        },
        slider: {
            images: [
                {imageSrc: 'https://via.placeholder.com/600/d32776', imageAlt: 'js', isNew: true},
                {imageSrc: 'https://via.placeholder.com/600/c32776', imageAlt: 'js', isNew: true},
                {imageSrc: 'https://via.placeholder.com/600/a32776', imageAlt: 'js', isNew: true},
            ],

        },
    },
}
export type StateType = ReturnType<typeof store.getState>

 
 