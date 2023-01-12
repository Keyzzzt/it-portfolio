export const store = {
    getState: function () {
        return this.state
    },
    state: {
        hero: {
            subtitle: 'Hi there',
            name: 'I am Igor Akeljev',
            stack: ['A Frontend developer.', 'Soon a Full Stack developer.'],
        }
    }
}
export type StoreType = ReturnType<typeof store.getState>

