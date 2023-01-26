
export const selectModuleUsers = (state) => state.users

export const selectUserEntities = (state) => selectModuleUsers(state).entities;

export const selectUserIds = (state) => selectModuleUsers(state).ids;

export const selectUserById = (state,{userId}) => selectUserEntities(state)[userId]