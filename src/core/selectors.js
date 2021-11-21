export const selectIsLogged = state => state.userState.isLogged
export const selectUser = state => state.userState.user
export const selectContext = state => state.userState.context

export const selectCards = state => state.cardState.cards
export const selectCardDetail = state => state.cardState.cardDetail

export const selectChatUser = state => state.chatState.chatUsers
export const selectChatUserSelected = state => state.chatState.chatUserSelected
export const selectChatMessage = state => state.chatState.chatMessages
export const selectChatMessageSelected = state => state.chatState.chatMessagesSelected