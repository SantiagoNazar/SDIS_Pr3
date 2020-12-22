import {loadData} from '~/services/storage'
import { removeItem, saveItem } from '../services/storage'

export const state = () => ({
    items: [],
    categories: ['uno', 'dos', 'tres'],
    initialized: false
})

export const mutations = {
    add(state, item) {
        state.items.push(item)
    },
    remove(state, item) {
        state.items.splice(state.items.indexOf(item), 1)
    },
    initialize(state) {
        state.initialized = true 
    }
}

export const getters = {
    contador(state){
        return state.items.map(x => x.key).reduce((a, b) => Math.max(a, b), 0)
    }
}

export const actions = {
    async add({commit, getters}, item) {
        item.key = getters.contador + 1
        commit('add', item)
        //await synchronization with database/backend
        await saveItem(item)
    },
    async remove({commit}, item){
        commit('remove', item)
        //await synchronization with database/backend
        await removeItem(item)
    },
    async initialize({state, commit}){
        if(!state.initialized){
            commit('initialize')
            const data = await loadData()
            data.forEach(d => commit('add', d))
        }
    },
}