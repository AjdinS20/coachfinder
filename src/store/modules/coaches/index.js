import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'TestName',
                    lastName: 'Testname',
                    areas: ['frontend', 'backend'],
                    description:
                        "I'm TestName and I've worked as a freelance web developer for years.",
                    hourlyRate: 30,
                },
                {
                    id: 'c2',
                    firstName: 'Ajdin',
                    lastName: 'Spahic',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Ajdin and I've worked as a freelance web developer for years.",
                    hourlyRate: 30,
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}