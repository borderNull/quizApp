interface DifficultyType {
  id: number,
  label: string,
}; 

export const difficultyLevels: Array<DifficultyType> = [{ id: 0, label: 'easy'}, { id: 1, label: 'hard' }];