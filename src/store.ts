export const store = {
  getState: function () {
    return this.state
  },
  state: {
    hero: {
      line1: "Hi there",
      line2: "I am",
      name: "Igor Akeljev",
      stack: ["A Frontend developer.", "Soon a Full Stack developer."],
    },
    accordion: {
      accordionItems: [
        {
          title: "About me",
          value: [
            'Hello, I am a person who has a strong passion for programming that inspires me everyday.',
            'I have experience in creating SPA with React/Redux/ TypeScript in team.',
            'Now I improve my skills in this direction and expanding them with new technologies.',
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
  },
}
export type StoreType = ReturnType<typeof store.getState>

 
 