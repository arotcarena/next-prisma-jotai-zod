import { atom } from 'jotai'
import { Cart } from './types/types'

const cartAtom = atom<Cart>([])

export { cartAtom }
